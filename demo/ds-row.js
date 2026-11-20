// Design systems on every style page.
//
// nav.js loads this file next to faces.js and orgs.js. On a style page (#h-thesis), it adds a "Design systems" row
// after the people and organisations rows: the design systems, brand manuals and UI kits that define, embody,
// take from or borrow from the style. Each chip links to the record on systems.html. A style with no system gets no row.
(() => {
  let cur = null, box = null;
  const render = () => {
    const Kit = window.Kit, D = Kit?.data;
    const thesis = document.getElementById("h-thesis");
    if (!thesis || !D?.sysByStyle) return;
    const id = decodeURIComponent(location.hash.slice(1));
    const list = (D.sysByStyle[id] || []).filter((l) => D.system[l.ds]);
    // The row goes after the last row of the chain that starts at the thesis (people, then organisations).
    let anchor = thesis;
    while (anchor.nextElementSibling?.matches(".fx:not(.sx)")) anchor = anchor.nextElementSibling;
    if (!list.length) { box?.remove(); cur = id; return; }
    if (id === cur && box?.isConnected && box.previousElementSibling === anchor) return;
    if (!box) { box = document.createElement("section"); box.className = "fx sx"; box.setAttribute("aria-label", "Design systems"); }
    if (id !== cur || !box.innerHTML) {
      box.innerHTML = `<div class="fx-row"><span class="fx-k">Design systems</span><div class="k-chips">${list.map((l) => Kit.system(l.ds, { note: Kit.REL[l.relation] ?? l.relation })).join("")}</div></div>`;
    }
    cur = id;
    if (box.previousElementSibling !== anchor) anchor.after(box);
  };
  const start = async () => {
    const Kit = await window.kitReady;
    if (!document.getElementById("h-thesis")) return;
    await Kit.load("kit", "systems");
    render();
    let queued = false;
    new MutationObserver((ms) => {
      if (queued || ms.every((m) => box?.contains(m.target) || m.target === box)) return;
      queued = true;
      requestAnimationFrame(() => { queued = false; render(); });
    }).observe(document.body, { childList: true, characterData: true, subtree: true });
    addEventListener("hashchange", render);
    for (const k of ["replaceState", "pushState"]) {
      const orig = history[k];
      history[k] = function (...a) { const r = orig.apply(this, a); queueMicrotask(render); return r; };
    }
  };
  document.readyState === "loading" ? addEventListener("DOMContentLoaded", start) : start();
})();
