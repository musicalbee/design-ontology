// Demo chrome: one top bar on every demo page, and a floating style drawer on the left.
//
// Each demo page loads this file first, at the start of <body>. The chrome supplies the elements
// that a page with styles uses: #chips (the style list, inside the drawer), #prev and #next.
// The page fills #chips with <button data-go="<id>" aria-pressed> and handles the clicks, as before.
// The "Styles" button shows only when #chips has buttons, so a page with no styles shows the bar only.
(() => {
  // The domains go in a dropdown. The views across all domains stay in the bar.
  const DOMAINS = [
    ["design.html", "Design"], ["architecture.html", "Architecture"], ["interior.html", "Interior"], ["industrial.html", "Industrial design"],
    ["photography.html", "Photography"], ["film.html", "Film and video"], ["painting.html", "Painting"],
    ["logo.html", "Logo"], ["icon.html", "Icons"], ["typeface.html", "Typefaces"], ["print.html", "Print"], ["game.html", "Video games"],
  ];
  const ACROSS = [["graph.html", "Lineage"], ["techniques.html", "Techniques"], ["people.html", "People"]];
  // A sub-page marks its parent domain as current: the moodboards are part of Interior.
  const PARENT = { "moodboard.html": "interior.html", "objects.html": "interior.html" };
  const file = location.pathname.split("/").pop() || "index.html";
  const here = PARENT[file] || file;
  const WIDE = matchMedia("(min-width: 1100px)");
  const KEY = "do-drawer-open";
  const store = { get: () => { try { return localStorage.getItem(KEY); } catch { return null; } },
    set: (v) => { try { localStorage.setItem(KEY, v); } catch {} } };

  // Tokens from the Hive design system, light theme, toned down for an open-source tool:
  // one royal accent, navy ink, a pale ground, pill controls, Onest. No mark, no amber, no gradient.
  const css = `
  .do-bar, .do-drawer { --hv-bg: #F8F9FD; --hv-surface: #FFFFFF; --hv-subtle: #EFF2FB; --hv-muted-bg: #E8F2FF;
    --hv-ink: #1F1F45; --hv-ink-muted: #50527A; --hv-heading: #232266; --hv-accent: #264FCC; --hv-accent-hover: #1C3A99;
    --hv-line: #DEE3F2; --hv-line-strong: #7F87AE; --hv-focus: #2589FF; --hv-lift: 0 18px 44px rgba(31, 31, 69, .10);
    --hv-ease: cubic-bezier(.16, 1, .3, 1);
    font: 14.4px/1.3 "Onest", "Helvetica Neue", Arial, sans-serif; letter-spacing: 0; text-transform: none; color: var(--hv-ink); }
  .do-bar { position: sticky; top: 0; z-index: 1000; display: flex; align-items: center; gap: 8px; height: 56px; padding: 0 16px;
    background: rgb(248 249 253 / .92); backdrop-filter: saturate(1.4) blur(10px); -webkit-backdrop-filter: saturate(1.4) blur(10px);
    border-bottom: 1px solid var(--hv-line); }
  .do-bar *, .do-drawer * { box-sizing: border-box; font: inherit; }
  .do-brand { font-weight: 700; white-space: nowrap; color: var(--hv-heading); text-decoration: none; padding: 0 8px 0 2px; letter-spacing: -.01em; }
  .do-brand::before { content: ""; display: inline-block; width: 8px; height: 8px; margin-right: 8px; border-radius: 2px;
    background: var(--hv-accent); transform: rotate(45deg) translateY(-2px); }
  .do-btn { display: inline-flex; align-items: center; gap: 8px; height: 36px; padding: 0 14px; border-radius: 999px; cursor: pointer;
    color: var(--hv-heading); background: var(--hv-surface); border: 1.5px solid var(--hv-line); white-space: nowrap; font-weight: 600;
    transition: background-color .2s var(--hv-ease), border-color .2s var(--hv-ease), color .2s var(--hv-ease); }
  .do-btn:hover { border-color: var(--hv-line-strong); }
  .do-btn[aria-expanded="true"] { background: var(--hv-accent); color: #fff; border-color: var(--hv-accent); }
  .do-btn[aria-expanded="true"]:hover { background: var(--hv-accent-hover); border-color: var(--hv-accent-hover); }
  .do-btn svg { width: 16px; height: 16px; flex: none; }
  /* A fixed width: the arrows after the button stay in one place for every style name. */
  .do-styles { width: 280px; flex: none; }
  .do-styles .do-cur { flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; text-align: left; }
  .do-styles .do-n { color: var(--hv-ink-muted); font-weight: 400; font-variant-numeric: tabular-nums; }
  .do-btn[aria-expanded="true"] .do-n { color: rgb(255 255 255 / .8); }
  .do-step { width: 36px; padding: 0; justify-content: center; font-size: 18px; line-height: 1; }
  .do-styles[hidden], .do-step[hidden] { display: none; }
  .do-links { display: flex; align-items: center; gap: 2px; margin-left: auto; }
  .do-dom { position: relative; flex: none; }
  .do-dom > .do-btn { padding: 0 12px 0 14px; }
  .do-dom > .do-btn[aria-expanded="true"] { background: var(--hv-subtle); color: var(--hv-heading); border-color: var(--hv-line-strong); }
  .do-dom .do-chev { width: 12px; height: 12px; transition: transform .2s var(--hv-ease); }
  .do-dom > .do-btn[aria-expanded="true"] .do-chev { transform: rotate(180deg); }
  .do-menu { position: absolute; top: calc(100% + 8px); left: 0; z-index: 1001; min-width: 230px; padding: 6px; display: grid; gap: 1px;
    background: var(--hv-surface); border: 1px solid var(--hv-line); border-radius: 14px; box-shadow: var(--hv-lift); }
  .do-menu[hidden] { display: none; }
  .do-menu a { display: block; padding: 8px 12px; border-radius: 10px; color: var(--hv-ink); text-decoration: none; white-space: nowrap; }
  .do-menu a:hover { background: var(--hv-subtle); color: var(--hv-heading); }
  .do-menu a[aria-current="page"] { color: var(--hv-accent); background: var(--hv-muted-bg); font-weight: 600; }
  .do-menu a[aria-current="page"]::after { content: "✓"; float: right; margin-left: 16px; }
  .do-menu hr { border: 0; border-top: 1px solid var(--hv-line); margin: 5px 6px; }
  .do-menu .do-narrow { display: none; }
  .do-links a, .do-gh { color: var(--hv-ink-muted); text-decoration: none; padding: 7px 12px; border-radius: 999px; white-space: nowrap; }
  .do-links a:hover, .do-gh:hover { color: var(--hv-heading); background: var(--hv-subtle); }
  .do-links a[aria-current="page"] { color: var(--hv-accent); background: var(--hv-muted-bg); font-weight: 600; }
  .do-gh { margin-left: 4px; }
  .do-bar :focus-visible, .do-drawer :focus-visible { outline: 3px solid var(--hv-focus); outline-offset: 3px; }

  .do-drawer { position: fixed; z-index: 999; top: 64px; left: 8px; bottom: 8px; width: min(300px, calc(100vw - 16px));
    display: flex; flex-direction: column; background: var(--hv-surface); border: 1px solid var(--hv-line); border-radius: 14px;
    box-shadow: var(--hv-lift); transform: translateX(calc(-100% - 16px)); visibility: hidden;
    transition: transform .3s var(--hv-ease), visibility 0s linear .3s; }
  .do-drawer.open { transform: none; visibility: visible; transition: transform .3s var(--hv-ease); }
  .do-head { display: flex; align-items: center; gap: 8px; padding: 12px 12px 10px; border-bottom: 1px solid var(--hv-line); }
  .do-head input { flex: 1; min-width: 0; height: 36px; padding: 0 12px; border-radius: 10px; border: 1.5px solid var(--hv-line-strong);
    background: var(--hv-surface); color: var(--hv-ink); }
  .do-head input:focus-visible { outline-offset: 1px; }
  .do-head input::placeholder { color: var(--hv-ink-muted); }
  .do-x { width: 36px; padding: 0; justify-content: center; }
  .do-list { flex: 1; overflow-y: auto; padding: 8px; display: flex; flex-direction: column; gap: 2px; scrollbar-width: thin; }
  .do-list button { all: unset; box-sizing: border-box; display: block; width: 100%; padding: 8px 12px; border-radius: 10px; cursor: pointer;
    color: var(--hv-ink); font: 14.4px/1.35 "Onest", "Helvetica Neue", Arial, sans-serif; }
  .do-list button:hover { background: var(--hv-subtle); color: var(--hv-heading); }
  .do-list button[aria-pressed="true"] { background: var(--hv-muted-bg); color: var(--hv-accent); font-weight: 600; }
  .do-list button:focus-visible { outline: 3px solid var(--hv-focus); outline-offset: -3px; }
  .do-list button.do-miss { display: none; }
  .do-foot { padding: 10px 14px; border-top: 1px solid var(--hv-line); background: var(--hv-bg); border-radius: 0 0 14px 14px;
    color: var(--hv-ink-muted); font-size: 12.5px; }
  .do-foot kbd { font: 11px ui-monospace, SFMono-Regular, Menlo, monospace; padding: 1px 6px; border: 1px solid var(--hv-line-strong);
    border-radius: 6px; background: var(--hv-surface); color: var(--hv-ink); }
  .do-step { flex: none; }
  @media (max-width: 1060px) { .do-styles { width: 220px; } }
  /* Narrow: the brand and the GitHub link go, and the views across domains move into the dropdown. */
  @media (max-width: 860px) { .do-bar { padding: 0 8px; gap: 6px; } .do-brand, .do-gh, .do-links { display: none; } .do-menu .do-narrow { display: block; }
    .do-menu hr.do-narrow { display: block; } .do-styles { width: auto; flex: 1 1 auto; min-width: 0; } .do-dom .do-label { max-width: 26vw; overflow: hidden; text-overflow: ellipsis; }
    .do-bar.do-bare .do-links { display: flex; } }
  @media (prefers-reduced-motion: reduce) { .do-drawer, .do-drawer.open, .do-btn { transition: none; } }`;
  if (!document.querySelector('link[href*="family=Onest"]')) {
    const font = document.createElement("link");
    font.rel = "stylesheet";
    font.href = "https://fonts.googleapis.com/css2?family=Onest:wght@400;600;700&display=swap";
    document.head.append(font);
  }
  const style = document.createElement("style");
  style.textContent = css;
  document.head.append(style);
  // zoom.js: the image lens. faces.js: the people of each style, and the data for the people views.
  for (const f of ["zoom.js", "faces.js"]) {
    if (document.querySelector(`script[src$="${f}"]`)) continue;
    const s = document.createElement("script");
    s.src = new URL(f, document.currentScript?.src || location.href).href;
    document.head.append(s);
  }

  const a = ([href, name], cls = "") => `<a href="${href}"${cls ? ` class="${cls}"` : ""}${href === here ? ' aria-current="page"' : ""}>${name}</a>`;
  const current = DOMAINS.find(([href]) => href === here);
  const chev = `<svg class="do-chev" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2.5 4.5 6 8l3.5-3.5"/></svg>`;
  const menu = `<div class="do-dom"><button class="do-btn" id="do-dom" aria-expanded="false" aria-controls="do-menu" aria-haspopup="true">` +
    `<span class="do-label">${current ? current[1] : "Domains"}</span>${chev}</button>` +
    `<nav class="do-menu" id="do-menu" aria-label="Domains" hidden>${a(["index.html", "All domains"])}<hr>${DOMAINS.map((d) => a(d)).join("")}` +
    `<hr class="do-narrow">${ACROSS.map((d) => a(d, "do-narrow")).join("")}</nav></div>`;
  const links = ACROSS.map((d) => a(d)).join("");
  const icon = `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true"><rect x="1.8" y="2.5" width="12.4" height="11" rx="2"/><path d="M6 2.5v11M8.5 6h3.5M8.5 9h2.5"/></svg>`;
  const bar = document.createElement("header");
  bar.className = "do-bar do-bare";
  bar.innerHTML = `<a class="do-brand" href="index.html">Design Ontology</a>` +
    menu +
    `<button class="do-btn do-styles" id="do-open" aria-expanded="false" aria-controls="do-drawer" hidden>${icon}<span class="do-cur">Styles</span><span class="do-n"></span></button>` +
    `<button class="do-btn do-step" id="prev" aria-label="Previous style" hidden>←</button>` +
    `<button class="do-btn do-step" id="next" aria-label="Next style" hidden>→</button>` +
    `<nav class="do-links" aria-label="Across the domains">${links}</nav>` +
    `<a class="do-gh" href="https://github.com/musicalbee/design-ontology">GitHub</a>`;

  const drawer = document.createElement("aside");
  drawer.className = "do-drawer";
  drawer.id = "do-drawer";
  drawer.setAttribute("aria-label", "Styles");
  drawer.innerHTML = `<div class="do-head"><input type="search" id="do-q" placeholder="Find a style" aria-label="Find a style"><button class="do-btn do-x" id="do-close" aria-label="Close the style list">✕</button></div>` +
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
    const dom = $("do-dom"), dmenu = $("do-menu");
    const setMenu = (on) => { dmenu.hidden = !on; dom.setAttribute("aria-expanded", on); };
    dom.onclick = () => { setMenu(dmenu.hidden); if (!dmenu.hidden) dmenu.querySelector('[aria-current="page"], a')?.focus(); };
    dmenu.addEventListener("keydown", (e) => {
      const items = [...dmenu.querySelectorAll("a")].filter((x) => x.offsetParent), i = items.indexOf(document.activeElement);
      if (e.key === "ArrowDown" || e.key === "ArrowUp") { e.preventDefault(); items[(i + (e.key === "ArrowDown" ? 1 : -1) + items.length) % items.length]?.focus(); }
      if (e.key === "Escape") { e.stopPropagation(); setMenu(false); dom.focus(); }
      e.stopPropagation();
    });
    document.addEventListener("click", (e) => { if (!dmenu.hidden && !e.target.closest(".do-dom")) setMenu(false); });
    dmenu.addEventListener("focusout", (e) => { if (!e.relatedTarget || !e.relatedTarget.closest(".do-dom")) setMenu(false); });
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

    // On a narrow screen the drawer covers the page, so a pick closes it. A click outside the drawer closes it at any width.
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
      if (drawer.classList.contains("open") && !drawer.contains(e.target) && !e.target.closest("#do-open, #prev, #next")) setOpen(false);
    });
  };
  document.body ? mount() : addEventListener("DOMContentLoaded", mount);
})();
