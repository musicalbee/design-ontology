// Demo chrome: one top bar on every demo page, and a floating style drawer on the left.
//
// Each demo page loads this file first, at the start of <body>. The chrome supplies the elements
// that a page with styles uses: #chips (the style list, inside the drawer), #prev and #next.
// The page fills #chips with <button data-go="<id>" aria-pressed> and handles the clicks, as before.
// The "Styles" button shows only when #chips has buttons, so a page with no styles shows the bar only.
(() => {
  const DOMAINS = [
    ["index.html", "Design"], ["architecture.html", "Architecture"], ["interior.html", "Interior"],
    ["photography.html", "Photography"], ["film.html", "Film and video"], ["painting.html", "Painting"],
    ["graph.html", "Lineage graph"],
  ];
  const here = location.pathname.split("/").pop() || "index.html";
  const WIDE = matchMedia("(min-width: 1100px)");
  const KEY = "do-drawer-open";
  const store = { get: () => { try { return localStorage.getItem(KEY); } catch { return null; } },
    set: (v) => { try { localStorage.setItem(KEY, v); } catch {} } };

  const css = `
  .do-bar, .do-drawer { --c-bg: #0d0d0f; --c-2: #1f1f24; --c-3: #2e2e35; --c-line: #34343b; --c-ink: #f4f4f5; --c-mute: #a1a1aa;
    font: 13px/1.3 system-ui, -apple-system, "Segoe UI", sans-serif; letter-spacing: 0; text-transform: none; color: var(--c-ink); }
  .do-bar { position: sticky; top: 0; z-index: 1000; display: flex; align-items: center; gap: 8px; height: 48px; padding: 0 10px;
    background: var(--c-bg); border-bottom: 1px solid var(--c-line); }
  .do-bar * , .do-drawer * { box-sizing: border-box; font: inherit; }
  .do-brand { font-weight: 650; white-space: nowrap; color: var(--c-ink); text-decoration: none; padding: 0 6px; }
  .do-btn { display: inline-flex; align-items: center; gap: 8px; height: 32px; padding: 0 12px; border-radius: 8px; cursor: pointer;
    color: var(--c-ink); background: var(--c-2); border: 1px solid var(--c-line); white-space: nowrap; font-weight: 500; }
  .do-btn:hover { background: var(--c-3); }
  .do-btn[aria-expanded="true"] { background: var(--c-ink); color: var(--c-bg); border-color: var(--c-ink); }
  .do-btn svg { width: 16px; height: 16px; flex: none; }
  .do-styles { max-width: 280px; }
  .do-styles .do-cur { overflow: hidden; text-overflow: ellipsis; }
  .do-styles .do-n { color: var(--c-mute); font-variant-numeric: tabular-nums; }
  .do-btn[aria-expanded="true"] .do-n { color: #52525b; }
  .do-step { width: 32px; padding: 0; justify-content: center; }
  .do-styles[hidden], .do-step[hidden] { display: none; }
  .do-links { display: flex; align-items: stretch; height: 100%; margin-left: 8px; overflow-x: auto; scrollbar-width: none; }
  .do-links a, .do-gh { color: var(--c-mute); text-decoration: none; padding: 0 10px; white-space: nowrap; display: flex; align-items: center;
    border-bottom: 2px solid transparent; }
  .do-links a:hover, .do-gh:hover { color: #fff; }
  .do-links a[aria-current="page"] { color: #fff; border-bottom-color: #fff; }
  .do-gh { margin-left: auto; }
  .do-bar :focus-visible, .do-drawer :focus-visible { outline: 3px solid #6aa8ff; outline-offset: 1px; }

  .do-drawer { position: fixed; z-index: 999; top: 56px; left: 8px; bottom: 8px; width: min(300px, calc(100vw - 16px));
    display: flex; flex-direction: column; background: var(--c-bg); border: 1px solid var(--c-line); border-radius: 12px;
    box-shadow: 0 12px 40px rgb(0 0 0 / .35), 0 2px 6px rgb(0 0 0 / .2);
    transform: translateX(calc(-100% - 16px)); visibility: hidden; transition: transform .22s ease, visibility 0s linear .22s; }
  .do-drawer.open { transform: none; visibility: visible; transition: transform .22s ease; }
  .do-head { display: flex; align-items: center; gap: 8px; padding: 10px 10px 8px; border-bottom: 1px solid var(--c-line); }
  .do-head input { flex: 1; min-width: 0; height: 32px; padding: 0 10px; border-radius: 8px; border: 1px solid var(--c-line);
    background: var(--c-2); color: var(--c-ink); }
  .do-head input::placeholder { color: var(--c-mute); }
  .do-x { width: 32px; padding: 0; justify-content: center; }
  .do-list { flex: 1; overflow-y: auto; padding: 6px; display: flex; flex-direction: column; gap: 2px; scrollbar-width: thin; }
  .do-list button { all: unset; box-sizing: border-box; display: block; width: 100%; padding: 8px 10px; border-radius: 7px; cursor: pointer;
    color: var(--c-ink); font: 13px/1.3 system-ui, -apple-system, "Segoe UI", sans-serif; }
  .do-list button:hover { background: var(--c-2); }
  .do-list button[aria-pressed="true"] { background: var(--c-ink); color: var(--c-bg); font-weight: 600; }
  .do-list button:focus-visible { outline: 3px solid #6aa8ff; outline-offset: -3px; }
  .do-list button.do-miss { display: none; }
  .do-foot { padding: 8px 12px; border-top: 1px solid var(--c-line); color: var(--c-mute); font-size: 12px; }
  .do-foot kbd { font: 11px ui-monospace, monospace; padding: 1px 5px; border: 1px solid var(--c-line); border-radius: 4px; }
  .do-domains { display: none; padding: 6px; border-bottom: 1px solid var(--c-line); flex-wrap: wrap; gap: 4px; }
  .do-domains a { color: var(--c-mute); text-decoration: none; padding: 4px 8px; border-radius: 6px; }
  .do-domains a[aria-current="page"] { color: var(--c-bg); background: var(--c-ink); }
  @media (max-width: 760px) { .do-links { display: none; } .do-domains { display: flex; } .do-brand { display: none; } .do-bar.do-bare .do-links { display: flex; margin-left: 0; } }
  @media (prefers-reduced-motion: reduce) { .do-drawer, .do-drawer.open { transition: none; } }`;
  const style = document.createElement("style");
  style.textContent = css;
  document.head.append(style);

  const links = DOMAINS.map(([href, name]) => `<a href="${href}"${href === here ? ' aria-current="page"' : ""}>${name}</a>`).join("");
  const icon = `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true"><rect x="1.8" y="2.5" width="12.4" height="11" rx="2"/><path d="M6 2.5v11M8.5 6h3.5M8.5 9h2.5"/></svg>`;
  const bar = document.createElement("header");
  bar.className = "do-bar do-bare";
  bar.innerHTML = `<a class="do-brand" href="index.html">Design Ontology</a>` +
    `<button class="do-btn do-styles" id="do-open" aria-expanded="false" aria-controls="do-drawer" hidden>${icon}<span class="do-cur">Styles</span><span class="do-n"></span></button>` +
    `<button class="do-btn do-step" id="prev" aria-label="Previous style" hidden>‹</button>` +
    `<button class="do-btn do-step" id="next" aria-label="Next style" hidden>›</button>` +
    `<nav class="do-links" aria-label="Domains">${links}</nav>` +
    `<a class="do-gh" href="https://github.com/musicalbee/design-ontology">GitHub</a>`;

  const drawer = document.createElement("aside");
  drawer.className = "do-drawer";
  drawer.id = "do-drawer";
  drawer.setAttribute("aria-label", "Styles");
  drawer.innerHTML = `<nav class="do-domains" aria-label="Domains">${links}</nav>` +
    `<div class="do-head"><input type="search" id="do-q" placeholder="Find a style" aria-label="Find a style"><button class="do-btn do-x" id="do-close" aria-label="Close the style list">✕</button></div>` +
    `<div class="do-list" id="chips" role="group" aria-label="Style"></div>` +
    `<div class="do-foot"><kbd>←</kbd> <kbd>→</kbd> step through · <kbd>/</kbd> find · <kbd>Esc</kbd> close</div>`;

  const mount = () => {
    document.body.prepend(bar, drawer);
    const $ = (id) => document.getElementById(id);
    const list = $("chips"), open = $("do-open");
    const setOpen = (on, remember = true) => {
      drawer.classList.toggle("open", on);
      open.setAttribute("aria-expanded", on);
      if (remember) store.set(on ? "1" : "0");
      if (on) list.querySelector('[aria-pressed="true"]')?.scrollIntoView({ block: "nearest" });
    };
    open.onclick = () => setOpen(!drawer.classList.contains("open"));
    $("do-close").onclick = () => { setOpen(false); open.focus(); };

    // Follow the page: show the controls once it lists styles, and show the current style on the button.
    let seen = false;
    const sync = () => {
      const items = [...list.querySelectorAll("button[data-go]")];
      const on = items.length > 0;
      for (const el of [open, $("prev"), $("next")]) el.hidden = !on;
      bar.classList.toggle("do-bare", !on);
      if (!on) return;
      const cur = items.findIndex((b) => b.getAttribute("aria-pressed") === "true");
      open.querySelector(".do-cur").textContent = cur >= 0 ? items[cur].textContent : "Styles";
      open.querySelector(".do-n").textContent = cur >= 0 ? `${cur + 1}/${items.length}` : items.length;
      if (!seen) { seen = true; setOpen(store.get() === "1", false); }
    };
    new MutationObserver(sync).observe(list, { childList: true, subtree: true, attributes: true, attributeFilter: ["aria-pressed"] });

    // On a narrow screen the drawer covers the page, so a pick closes it.
    list.addEventListener("click", (e) => { if (e.target.closest("[data-go]") && !WIDE.matches) setOpen(false); });
    $("do-q").addEventListener("input", (e) => {
      const q = e.target.value.trim().toLowerCase();
      for (const b of list.querySelectorAll("button[data-go]")) b.classList.toggle("do-miss", !!q && !b.textContent.toLowerCase().includes(q));
    });
    $("do-q").addEventListener("keydown", (e) => {
      if (e.key === "Enter") list.querySelector("button[data-go]:not(.do-miss)")?.click();
      e.stopPropagation();
    });
    addEventListener("keydown", (e) => {
      if (e.key === "Escape" && drawer.classList.contains("open")) { setOpen(false); open.focus(); }
      if (e.key === "/" && !open.hidden && !e.target.matches("input, textarea, select")) { e.preventDefault(); setOpen(true); $("do-q").focus(); }
    });
    document.addEventListener("click", (e) => {
      if (!WIDE.matches && drawer.classList.contains("open") && !drawer.contains(e.target) && !bar.contains(e.target)) setOpen(false);
    });
  };
  document.body ? mount() : addEventListener("DOMContentLoaded", mount);
})();
