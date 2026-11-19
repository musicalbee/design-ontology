// The three views of one interior style: the room (interior.html), the moodboard (moodboard.html) and the
// objects of the room (objects.html). Each view shows one style only. The tabs keep the style when you
// change the view, and the stepper in the top bar (nav.js: #chips, #prev, #next) moves through the styles
// in the same order on all three pages.
//
//   InteriorTabs.tabs(view)             the tab row as HTML; put it after the header of the page
//   InteriorTabs.set(id, name)          point the tabs at a style
//   InteriorTabs.route(view, show)      for a sub-page: fill the stepper, follow the hash, call show(id)
window.InteriorTabs = (() => {
  const VIEWS = [["interior.html", "Room", "room"], ["moodboard.html", "Moodboard", "moodboard"], ["objects.html", "Objects", "objects"]];
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  document.head.insertAdjacentHTML("beforeend", `<style>
    .it-tabs { display: flex; flex-wrap: wrap; gap: 4px; padding: 4px; border-radius: 999px; background: #ecebe6; width: max-content; max-width: 100%; }
    .it-tabs a { padding: 6px 16px; border-radius: 999px; text-decoration: none; color: #3b3b42; font-size: 14px; font-weight: 600; }
    .it-tabs a:hover { background: rgb(255 255 255 / .6); }
    .it-tabs a[aria-current="page"] { background: #fff; color: #1d1d1f; box-shadow: 0 1px 2px rgb(0 0 0 / .12); }
  </style>`);

  const tabs = (view) => `<nav class="it-tabs" aria-label="Views of this interior style">${VIEWS.map(([f, l, v]) =>
    `<a data-view="${v}" href="${f}"${v === view ? ' aria-current="page"' : ""}>${l}</a>`).join("")}</nav>`;
  const set = (id) => {
    for (const a of document.querySelectorAll(".it-tabs a")) a.href = `${VIEWS.find((x) => x[2] === a.dataset.view)[0]}#${id}`;
  };

  // The order of the interior page: the order of the skill index.
  const list = fetch("../skills/index.json").then((r) => r.json()).then((ix) => ix.skills.filter((s) => s.domain === "interior"));

  function route(view, show) {
    let at = -1, styles = [];
    const go = (i) => {
      at = (i + styles.length) % styles.length;
      const id = styles[at].id;
      for (const b of document.getElementById("chips").children) b.setAttribute("aria-pressed", String(b.dataset.go === id));
      if (location.hash.slice(1) !== id) history.replaceState(null, "", "#" + id);
      set(id);
      show(id, styles[at]);
    };
    const pick = () => { const i = styles.findIndex((s) => s.id === location.hash.slice(1)); if (i !== at || at < 0) go(Math.max(i, 0)); };
    list.then((s) => {
      styles = s;
      document.getElementById("chips").innerHTML = s.map((x) => `<button data-go="${esc(x.id)}" aria-pressed="false">${esc(x.name)}</button>`).join("");
      document.addEventListener("click", (e) => { const b = e.target.closest("[data-go]"); if (b) go(styles.findIndex((x) => x.id === b.dataset.go)); });
      addEventListener("hashchange", pick);
      document.getElementById("prev").onclick = () => go(at - 1);
      document.getElementById("next").onclick = () => go(at + 1);
      addEventListener("keydown", (e) => {
        if (e.target.matches("input, select, textarea") || e.metaKey || e.ctrlKey || e.altKey) return;
        if (e.key === "ArrowLeft") go(at - 1);
        if (e.key === "ArrowRight") go(at + 1);
      });
      pick();
    });
  }
  return { tabs, set, route, list };
})();
