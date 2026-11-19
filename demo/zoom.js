// Image zoom for every demo page: a lens on hover, and a full-screen view on click.
//
// nav.js loads this file. It works by delegation on the document, so images that a page renders
// later (a new style, a new board) get the zoom with no extra code. Skipped: images smaller than
// 96 px, images in the top bar or the drawer, images inside a link or a button (a click there
// keeps its own action), and images with data-nozoom.
(() => {
  const MIN = 96, POWER = 2.5, LENS = 220;
  const css = `
  .dz-lens { position: fixed; z-index: 1500; width: ${LENS}px; height: ${LENS}px; border-radius: 12px; pointer-events: none;
    background-repeat: no-repeat; background-color: #111; border: 2px solid #fff;
    box-shadow: 0 0 0 1px rgb(0 0 0 / .35), 0 18px 44px rgb(0 0 0 / .35); display: none; }
  .dz-on { cursor: zoom-in; }
  .dz-full { position: fixed; inset: 0; z-index: 2000; display: grid; place-items: center; padding: 24px;
    background: rgb(10 10 12 / .94); cursor: zoom-out; }
  .dz-full img { max-width: 100%; max-height: calc(100vh - 88px); object-fit: contain; box-shadow: 0 18px 60px rgb(0 0 0 / .5); }
  .dz-full p { margin: 12px 0 0; max-width: 80ch; text-align: center; color: #e8e8ec; font: 13px/1.4 system-ui, sans-serif; }
  .dz-full button { position: absolute; top: 16px; right: 16px; width: 40px; height: 40px; border-radius: 999px; cursor: pointer;
    border: 1px solid rgb(255 255 255 / .4); background: rgb(255 255 255 / .1); color: #fff; font: 20px/1 system-ui, sans-serif; }
  .dz-full button:focus-visible { outline: 3px solid #2589FF; outline-offset: 3px; }
  @media (prefers-reduced-motion: no-preference) { .dz-full { animation: dz-in .18s ease-out; } }
  @keyframes dz-in { from { opacity: 0; } }`;
  const style = document.createElement("style");
  style.textContent = css;
  document.head.append(style);

  const ok = (el) => el instanceof HTMLImageElement && !el.dataset.nozoom && el.complete && el.naturalWidth > 0 &&
    el.clientWidth >= MIN && el.clientHeight >= MIN && !el.closest("a, button, .do-bar, .do-drawer, .dz-full");

  // The part of the image box that shows pixels, for object-fit fill, contain and cover.
  const box = (img) => {
    const r = img.getBoundingClientRect(), fit = getComputedStyle(img).objectFit;
    const nw = img.naturalWidth, nh = img.naturalHeight;
    if (fit !== "contain" && fit !== "cover") return { x: r.left, y: r.top, w: r.width, h: r.height, r };
    const k = (fit === "contain" ? Math.min : Math.max)(r.width / nw, r.height / nh);
    const w = nw * k, h = nh * k;
    return { x: r.left + (r.width - w) / 2, y: r.top + (r.height - h) / 2, w, h, r };
  };

  const lens = document.createElement("div");
  lens.className = "dz-lens";
  const hover = matchMedia("(hover: hover) and (pointer: fine)");
  let cur = null;
  const hide = () => { lens.style.display = "none"; cur = null; };
  document.addEventListener("mousemove", (e) => {
    if (!hover.matches) return;
    const img = e.target;
    if (!ok(img)) { if (cur) hide(); return; }
    if (!lens.isConnected) document.body.append(lens);
    img.classList.add("dz-on");
    const b = box(img);
    const px = e.clientX - b.x, py = e.clientY - b.y;
    if (px < 0 || py < 0 || px > b.w || py > b.h) { hide(); return; }
    if (cur !== img) { lens.style.backgroundImage = `url("${(img.currentSrc || img.src).replace(/"/g, "%22")}")`; cur = img; }
    lens.style.backgroundSize = `${b.w * POWER}px ${b.h * POWER}px`;
    lens.style.backgroundPosition = `${LENS / 2 - px * POWER}px ${LENS / 2 - py * POWER}px`;
    // The lens sits to the right of the pointer, or to the left near the right edge.
    const left = e.clientX + 24 + LENS > innerWidth - 8 ? e.clientX - LENS - 24 : e.clientX + 24;
    const top = Math.min(innerHeight - LENS - 8, Math.max(8, e.clientY - LENS / 2));
    lens.style.left = `${Math.max(8, left)}px`;
    lens.style.top = `${top}px`;
    lens.style.display = "block";
  }, { passive: true });
  document.addEventListener("mouseleave", hide);
  addEventListener("scroll", hide, { passive: true });

  let last = null;
  const close = () => { document.querySelector(".dz-full")?.remove(); document.documentElement.style.overflow = ""; last?.focus?.(); };
  const open = (img) => {
    hide();
    last = document.activeElement;
    const full = document.createElement("div");
    full.className = "dz-full";
    full.setAttribute("role", "dialog");
    full.setAttribute("aria-modal", "true");
    full.setAttribute("aria-label", img.alt || "Image");
    const big = document.createElement("img");
    big.src = img.currentSrc || img.src;
    big.alt = img.alt || "";
    const cap = document.createElement("p");
    cap.textContent = img.closest("figure")?.querySelector("figcaption")?.textContent || img.alt || "";
    const x = document.createElement("button");
    x.type = "button";
    x.setAttribute("aria-label", "Close the full-screen image");
    x.textContent = "✕";
    const wrap = document.createElement("div");
    wrap.style.display = "grid";
    wrap.style.justifyItems = "center";
    wrap.append(big, cap);
    full.append(wrap, x);
    full.addEventListener("click", close);
    document.body.append(full);
    document.documentElement.style.overflow = "hidden";
    x.focus();
  };
  document.addEventListener("click", (e) => { if (ok(e.target)) { e.preventDefault(); open(e.target); } });
  // Capture: Esc closes the full view before page handlers (the drawer, the style keys) see it.
  addEventListener("keydown", (e) => {
    if (!document.querySelector(".dz-full")) return;
    if (e.key === "Escape") { e.stopImmediatePropagation(); e.preventDefault(); close(); }
    // The close button is the only control in the view, so Tab keeps the focus on it (the page behind stays out of reach).
    else if (e.key === "Tab") { e.preventDefault(); document.querySelector(".dz-full button")?.focus(); }
    else e.stopImmediatePropagation();
  }, true);
})();
