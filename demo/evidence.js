// Canonical evidence for a style (core $defs/evidence): open-licence images, fonts and icons.
// Evidence.html(list) gives one card for each item. A font item loads its open font file and
// shows a specimen in it. An icon-set item shows its sample icon. An image item shows the image.
(function () {
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  const loaded = new Set();
  const family = (url) => "ev-" + [...url].reduce((h, c) => (h * 31 + c.charCodeAt(0)) >>> 0, 7).toString(36);

  function font(url) {
    const f = family(url);
    if (!loaded.has(f)) {
      loaded.add(f);
      const style = document.createElement("style");
      style.textContent = `@font-face { font-family: "${f}"; src: url("${url.replace(/"/g, "%22")}"); font-display: swap; }`;
      document.head.appendChild(style);
    }
    return f;
  }

  function sample(e) {
    if (!e.file) return "";
    if (e.kind === "font") return `<div class="ev-spec" style="font-family:'${font(e.file)}', serif">Hamburgefonstiv<br><small>Aa Bb Gg Rr 0123456789 &amp;?!</small></div>`;
    if (e.kind === "icon-set") return `<div class="ev-icon"><img src="${esc(e.file)}" alt="${esc(e.title)}" loading="lazy"></div>`;
    if (e.kind === "image") return `<div class="ev-img"><img src="${esc(e.file)}" alt="${esc(e.title)}" loading="lazy"></div>`;
    return "";
  }

  const CSS = `
    .ev { display: grid; gap: 12px; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); }
    .ev-card { border: 1px solid var(--line, #d9d7d0); border-radius: 8px; padding: 10px; background: #fff; display: grid; gap: 6px; align-content: start; min-width: 0; }
    .ev-card a { word-break: break-word; }
    .ev-meta { font-size: 12px; color: var(--muted, #5d5d66); }
    .ev-lic { display: inline-block; font-size: 11px; padding: 1px 6px; border: 1px solid currentColor; border-radius: 999px; }
    .ev-spec { font-size: 30px; line-height: 1.15; overflow-wrap: anywhere; }
    .ev-spec small { font-size: 15px; }
    .ev-icon { display: grid; place-items: center; height: 96px; background: #f4f4f2; border-radius: 6px; }
    .ev-icon img { width: 56px; height: 56px; }
    .ev-img { aspect-ratio: 4 / 3; background: #f4f4f2; border-radius: 6px; overflow: hidden; }
    .ev-img img { width: 100%; height: 100%; object-fit: contain; display: block; }`;
  let styled = false;

  function html(list) {
    if (!Array.isArray(list) || !list.length) return "";
    if (!styled) { styled = true; const s = document.createElement("style"); s.textContent = CSS; document.head.appendChild(s); }
    return `<div class="ev">${list.map((e) => {
      const lic = e.licence_url ? `<a class="ev-lic" href="${esc(e.licence_url)}" rel="noopener">${esc(e.licence)}</a>` : `<span class="ev-lic">${esc(e.licence)}</span>`;
      const who = [e.maker, e.year].filter((x) => x != null && x !== "").map(esc).join(", ");
      return `<div class="ev-card">${sample(e)}<a href="${esc(e.url)}" rel="noopener">${esc(e.title)}</a>` +
        `<div class="ev-meta">${who ? who + "<br>" : ""}${esc(e.credit)}</div><div>${lic} <span class="ev-meta">${esc(e.kind)}</span></div></div>`;
    }).join("")}</div>`;
  }

  window.Evidence = { html };
})();
