// The visitor counter of the demo (Yandex.Metrika, counter 114366919) and its intent goals. nav.js loads this file on each page.
// A page in an iframe (?embed, or inside another demo page) does not count, so one visit counts once.
(() => {
  if (window.top !== window || new URLSearchParams(location.search).has("embed")) return;
  (function (m, e, t, r, i, k, a) {
    m[i] = m[i] || function () { (m[i].a = m[i].a || []).push(arguments); };
    m[i].l = 1 * new Date();
    for (let j = 0; j < document.scripts.length; j++) if (document.scripts[j].src === r) return;
    k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a);
  })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js?id=114366919", "ym");
  const ID = 114366919;
  ym(ID, "init", { ssr: true, webvisor: true, clickmap: true, ecommerce: "dataLayer", referrer: document.referrer, url: location.href, accurateTrackBounce: true, trackLinks: true });

  // Intent goals. Each name is a JavaScript-event goal in the counter settings:
  //   repo_click  a link to the GitHub repository (the step before a star)
  //   skill_open  a link to a SKILL.md, a tokens.css or a raw skill file
  //   skill_copy  a copy button (an install command, a skill id, a moodboard)
  //   style_view  a style opens by its deep link (#id or ?style=id); also a virtual page view
  const page = location.pathname.replace(/^.*\/demo\//, "") || "index.html";
  const goal = (name, params = {}) => ym(ID, "reachGoal", name, { page, ...params });

  addEventListener("click", (e) => {
    const a = e.target instanceof Element ? e.target.closest("a[href]") : null;
    if (!a) return;
    const href = a.href;
    if (/SKILL\.md|tokens\.css|raw\.githubusercontent\.com\/musicalbee\/design-ontology|\/skills\//.test(href)) goal("skill_open", { href });
    else if (/github\.com\/musicalbee\/design-ontology/.test(href)) goal("repo_click", { href });
  }, true);

  const write = navigator.clipboard?.writeText?.bind(navigator.clipboard);
  if (write) navigator.clipboard.writeText = (text) => { goal("skill_copy", { chars: String(text).length }); return write(text); };

  let seen = "";
  const style = (first = false) => {
    const id = location.hash.slice(1) || new URLSearchParams(location.search).get("style") || "";
    if (!/^[a-z0-9-]+$/.test(id) || id === seen) return;
    seen = id;
    goal("style_view", { style: id, landing: first });
    // The landing page view is already counted by init; a later style counts as a virtual page view.
    if (!first) ym(ID, "hit", location.href, { title: document.title, referer: document.referrer });
  };
  for (const k of ["pushState", "replaceState"]) {
    const orig = history[k].bind(history);
    history[k] = (...args) => { const r = orig(...args); style(); return r; };
  }
  addEventListener("hashchange", () => style());
  style(true);
})();
