// People on every style page: a row of portraits under the thesis of the style, a short card on hover or
// focus, and the people of the related styles in other domains.
//
// nav.js loads this file. It finds the style from the page itself: each style page has #h-name and #h-thesis
// and keeps the style id in the hash, so no page needs extra code. The row goes after #h-thesis.
//
// Related styles: the first hop takes every edge of the style (descent, rejection, mixing, echoes). The hops
// after the first follow echoes only. With all edge types, three hops reach about half of the graph and say
// nothing; the echoes reach a few styles in other domains at each hop.
//
// The graph page uses the same data through window.Faces (reach, avatars, tip).
(() => {
  const base = new URL(".", document.currentScript?.src || location.href);
  const url = (p) => new URL(p, base).href;
  const json = (p) => fetch(url(p)).then((r) => (r.ok ? r.json() : null)).catch(() => null);
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  const ROLE = { "key-figure": "Key figure", founder: "Founder", forerunner: "Forerunner", populariser: "Populariser",
    "trend-setter": "Trend-setter", artisan: "Artisan", rebel: "Rebel", patron: "Patron" };
  const KEY = "do-faces-hops";
  const store = { get: () => { try { return +localStorage.getItem(KEY) || 2; } catch { return 2; } },
    set: (v) => { try { localStorage.setItem(KEY, v); } catch {} } };
  const page = (domain) => `${domain}.html`;

  const css = `
  .fx { --fx-ink: #1F1F45; --fx-muted: #50527A; --fx-line: #DEE3F2; --fx-bg: #FFFFFF; --fx-subtle: #EFF2FB; --fx-accent: #264FCC;
    margin: 14px 0 0; font: 13px/1.4 "Onest", "Helvetica Neue", Arial, sans-serif; color: var(--fx-ink); letter-spacing: 0; text-transform: none; }
  .fx * { box-sizing: border-box; }
  .fx-row { display: flex; flex-wrap: wrap; align-items: center; gap: 8px 12px; }
  .fx-faces { display: flex; flex-wrap: wrap; gap: 6px; }
  .fx-k { font-size: 11px; font-weight: 650; letter-spacing: .06em; text-transform: uppercase; color: var(--fx-muted); }
  .fx-none { color: var(--fx-muted); }
  .fx-a { --s: 40px; position: relative; display: inline-grid; place-items: center; width: var(--s); height: var(--s); flex: none; border-radius: 50%;
    overflow: hidden; background: var(--fx-subtle); color: var(--fx-ink); font-weight: 650; font-size: calc(var(--s) * .36); text-decoration: none;
    box-shadow: 0 0 0 2px var(--fx-bg), 0 0 0 3px var(--fx-line); transition: transform .15s ease, box-shadow .15s ease; }
  .fx-a img { width: 100%; height: 100%; object-fit: cover; object-position: 50% 25%; display: block; }
  .fx-a:hover, .fx-a:focus-visible { transform: translateY(-2px); box-shadow: 0 0 0 2px var(--fx-bg), 0 0 0 4px var(--fx-accent); outline: none; }
  .fx-a.sm { --s: 30px; }
  .fx-more { font: inherit; font-weight: 600; color: var(--fx-ink); background: var(--fx-bg); border: 1.5px solid var(--fx-line); border-radius: 999px;
    padding: 6px 12px; cursor: pointer; display: inline-flex; align-items: center; gap: 8px; }
  .fx-more:hover { border-color: #7F87AE; }
  .fx-more[aria-expanded="true"] { background: var(--fx-subtle); }
  .fx-more .fx-stack { display: inline-flex; }
  .fx-more .fx-stack .fx-a { --s: 22px; margin-left: -6px; box-shadow: 0 0 0 2px var(--fx-bg); }
  .fx-more .fx-stack .fx-a:first-child { margin-left: 0; }
  .fx-wide { margin-top: 10px; padding: 12px 14px; background: var(--fx-bg); border: 1px solid var(--fx-line); border-radius: 14px; display: grid; gap: 12px; }
  .fx-wide[hidden] { display: none; }
  .fx-hops { display: flex; flex-wrap: wrap; align-items: center; gap: 6px; color: var(--fx-muted); }
  .fx-hops button { font: inherit; min-width: 30px; height: 28px; border-radius: 999px; border: 1.5px solid var(--fx-line); background: var(--fx-bg); color: var(--fx-ink); cursor: pointer; }
  .fx-hops button[aria-pressed="true"] { background: var(--fx-accent); border-color: var(--fx-accent); color: #fff; font-weight: 650; }
  .fx-doms { display: grid; gap: 10px 16px; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); }
  .fx-dom h4 { margin: 0 0 4px; font-size: 11px; font-weight: 650; letter-spacing: .06em; text-transform: uppercase; color: var(--fx-muted); }
  .fx-st { display: flex; align-items: center; gap: 8px; padding: 3px 0; }
  .fx-st > a { color: var(--fx-ink); font-weight: 600; text-decoration: none; min-width: 0; }
  .fx-st > a:hover { text-decoration: underline; }
  .fx-st small { color: var(--fx-muted); white-space: nowrap; }
  .fx-st .fx-faces { gap: 4px; margin-left: auto; justify-content: flex-end; }
  .fx a:focus-visible, .fx button:focus-visible { outline: 3px solid #2589FF; outline-offset: 2px; }
  .fx-tip { position: fixed; z-index: 1600; width: min(300px, calc(100vw - 16px)); padding: 12px 14px; border-radius: 12px; pointer-events: none;
    background: #1F1F45; color: #F2F3FA; font: 12.5px/1.45 "Onest", "Helvetica Neue", Arial, sans-serif; box-shadow: 0 18px 44px rgb(31 31 69 / .3);
    opacity: 0; transform: translateY(4px); transition: opacity .12s ease, transform .12s ease; }
  .fx-tip.on { opacity: 1; transform: none; }
  .fx-tip b { display: block; font-size: 14px; color: #fff; }
  .fx-tip .m { color: #B9BCDA; margin: 1px 0 6px; }
  .fx-tip .r { display: inline-block; margin: 0 4px 4px 0; padding: 1px 7px; border-radius: 999px; background: rgb(255 255 255 / .12); font-size: 11.5px; }
  .fx-tip p { margin: 0 0 6px; }
  .fx-tip ul { margin: 0; padding: 0; list-style: none; color: #D6D8EC; }
  .fx-tip li b { display: inline; font-size: inherit; color: #fff; font-variant-numeric: tabular-nums; margin-right: 6px; }
  .fx-tip .via { margin-top: 6px; color: #B9BCDA; font-size: 11.5px; }
  @media (prefers-reduced-motion: reduce) { .fx-a, .fx-tip { transition: none; } }`;
  const style = document.createElement("style");
  style.textContent = css;
  document.head.append(style);

  let P, G, byPerson, byStyle, node, domName;
  const ready = Promise.all([json("../graph/people.json"), json("../graph/lineage.json")]).then(([p, g]) => {
    if (!p || !g) return false;
    P = p; G = g;
    byPerson = Object.fromEntries(P.people.map((x) => [x.id, x]));
    byStyle = P.by_style || {};
    node = Object.fromEntries(G.nodes.map((n) => [n.id, n]));
    domName = Object.fromEntries(G.domains.map((d) => [d.id, d.name]));
    return true;
  });

  /** Styles near `id`: hop 1 over every edge type, then hops 2..n over echoes only. Map of id → { hop, via, rel }. */
  function reach(id, hops) {
    const adj = G.adjacency || {}, out = new Map();
    const one = adj[id] || {};
    for (const [rel, ids] of Object.entries(one)) {
      if (!Array.isArray(ids) || rel === "techniques") continue;
      for (const t of ids) if (t !== id && node[t] && !out.has(t)) out.set(t, { hop: 1, via: id, rel });
    }
    let front = [...out.keys()];
    for (let h = 2; h <= hops; h++) {
      const next = [];
      for (const s of front) for (const t of adj[s]?.echoes || []) {
        if (t === id || out.has(t) || !node[t]) continue;
        out.set(t, { hop: h, via: s, rel: "echoes" });
        next.push(t);
      }
      front = next;
    }
    return out;
  }

  const initials = (name) => name.split(/\s+/).filter((w) => /^\p{Lu}/u.test(w)).slice(0, 2).map((w) => w[0]).join("") || name[0];
  /** One portrait: a link to the person in the people view, with the data for the tip. */
  function avatar(pid, opts = {}) {
    const p = byPerson[pid];
    if (!p) return "";
    const img = p.photo?.url ? `<img src="${esc(p.photo.url)}" alt="" loading="lazy" decoding="async" referrerpolicy="no-referrer" data-nozoom="1">` : esc(initials(p.name));
    return `<a class="fx-a${opts.small ? " sm" : ""}" href="${url("people.html")}#${esc(pid)}" data-person="${esc(pid)}"${opts.style ? ` data-style="${esc(opts.style)}"` : ""}` +
      `${opts.via ? ` data-via="${esc(opts.via)}"` : ""} aria-label="${esc(p.name)}">${img}</a>`;
  }
  const years = (p) => p.born ? `${p.born}–${p.died ?? ""}` : p.active?.[0] ? `active from ${p.active[0]}` : "";

  /** The text of the tip for one person. `style` names the style of the row; `via` says how the row reaches it. */
  function tip(pid, style, via) {
    const p = byPerson[pid];
    if (!p) return "";
    const roles = (p.styles || []).filter((s) => node[s.style]).sort((a, b) => (a.style === style ? -1 : b.style === style ? 1 : 0)).slice(0, 3)
      .map((s) => `<span class="r">${esc(ROLE[s.role] ?? s.role)} · ${esc(node[s.style].name)}</span>`).join("");
    const meta = [years(p), (p.nationality || []).join(", ")].filter(Boolean).join(" · ");
    const ms = (p.milestones || []).slice(0, 2).map((m) => `<li><b>${esc(m.year)}</b>${esc(m.event)}</li>`).join("");
    return `<b>${esc(p.name)}</b>${meta ? `<div class="m">${esc(meta)}</div>` : ""}<div>${roles}</div>${p.bio ? `<p>${esc(p.bio)}</p>` : ""}` +
      (ms ? `<ul>${ms}</ul>` : "") + (via ? `<div class="via">${esc(via)}</div>` : "");
  }

  // One floating tip for the page, on hover and on keyboard focus.
  const tipEl = document.createElement("div");
  tipEl.className = "fx-tip";
  tipEl.setAttribute("role", "tooltip");
  tipEl.id = "fx-tip";
  let tipFor = null;
  const place = (el) => {
    const r = el.getBoundingClientRect(), w = tipEl.offsetWidth, h = tipEl.offsetHeight;
    let left = Math.min(innerWidth - w - 8, Math.max(8, r.left + r.width / 2 - w / 2));
    let top = r.bottom + 10;
    if (top + h > innerHeight - 8) top = Math.max(8, r.top - h - 10);
    tipEl.style.left = `${left}px`;
    tipEl.style.top = `${top}px`;
  };
  const showTip = (el) => {
    if (!byPerson || tipFor === el) return;
    tipFor = el;
    if (!tipEl.isConnected) document.body.append(tipEl);
    tipEl.innerHTML = tip(el.dataset.person, el.dataset.style, el.dataset.via);
    el.setAttribute("aria-describedby", "fx-tip");
    place(el);
    tipEl.classList.add("on");
  };
  const hideTip = () => { if (tipFor) tipFor.removeAttribute("aria-describedby"); tipFor = null; tipEl.classList.remove("on"); };
  document.addEventListener("mouseover", (e) => { const a = e.target.closest?.("[data-person]"); a ? showTip(a) : tipFor && !tipFor.matches(":focus") && hideTip(); });
  document.addEventListener("focusin", (e) => { const a = e.target.closest?.("[data-person]"); a ? showTip(a) : hideTip(); });
  addEventListener("keydown", (e) => { if (e.key === "Escape" && tipFor) hideTip(); });
  addEventListener("scroll", hideTip, { passive: true });

  /** The block for one style: its own people, and a panel with the people of the related styles. */
  function block(id, hops) {
    const own = (byStyle[id] || []).map((x) => x.person);
    const near = reach(id, hops), seen = new Set(own);
    // Each person shows once, at the nearest style. Styles in the same domain come after the other domains.
    const groups = new Map();
    const order = [...near.entries()].sort((a, b) => a[1].hop - b[1].hop || node[a[0]].start - node[b[0]].start);
    let count = 0;
    for (const [sid, r] of order) {
      const ppl = (byStyle[sid] || []).map((x) => x.person).filter((p) => !seen.has(p));
      if (!ppl.length) continue;
      ppl.forEach((p) => seen.add(p));
      count += ppl.length;
      const d = node[sid].domain;
      if (!groups.has(d)) groups.set(d, []);
      groups.get(d).push({ sid, r, ppl });
    }
    const home = node[id]?.domain;
    const doms = [...groups.keys()].sort((a, b) => (a === home) - (b === home));
    const relText = { evolved_from: "evolved from", evolved_into: "evolved into", rebelled_against: "rebelled against", provoked: "provoked",
      hybridized_with: "mixed with", echoes: "echoes" };
    const how = (sid, r) => r.hop === 1 ? `${relText[r.rel] ?? r.rel} ${node[id].name}` : `${r.hop} echo hops, via ${node[r.via]?.name}`;
    const stack = doms.flatMap((d) => groups.get(d).flatMap((g) => g.ppl)).filter((p) => byPerson[p]?.photo).slice(0, 4);
    const ownRow = own.length ? `<div class="fx-faces">${own.map((p) => avatar(p, { style: id })).join("")}</div>`
      : `<span class="fx-none">No person on record for this style yet.</span>`;
    const more = count ? `<button type="button" class="fx-more" aria-expanded="false" aria-controls="fx-wide"><span class="fx-stack" aria-hidden="true">${stack.map((p) => avatar(p, { small: true }).replace("<a ", "<span ").replace(/<\/a>$/, "</span>").replace(/ href="[^"]*"| data-person="[^"]*"/g, "")).join("")}</span>` +
      `${count} more in related styles · ${doms.length} domain${doms.length === 1 ? "" : "s"}</button>` : "";
    const hopBtns = [1, 2, 3, 4].map((h) => `<button type="button" data-hops="${h}" aria-pressed="${h === hops}">${h}</button>`).join("");
    const wide = `<div class="fx-wide" id="fx-wide" hidden><div class="fx-hops"><span>Echo hops</span>${hopBtns}<span>· hop 1 takes every edge, later hops follow echoes across domains.</span></div>` +
      (count ? `<div class="fx-doms">${doms.map((d) => `<div class="fx-dom"><h4>${esc(domName[d] ?? d)}${d === home ? " (this domain)" : ""}</h4>` +
        groups.get(d).map(({ sid, r, ppl }) => `<div class="fx-st"><a href="${url(page(d))}#${esc(sid)}" title="${esc(how(sid, r))}">${esc(node[sid].name)}</a><small>${r.hop === 1 ? "1 hop" : `${r.hop} hops`}</small>` +
          `<span class="fx-faces">${ppl.map((p) => avatar(p, { small: true, style: sid, via: `${node[sid].name}: ${how(sid, r)}` })).join("")}</span></div>`).join("") + `</div>`).join("")}</div>`
        : `<p class="fx-none" style="margin:0">No people in the related styles at this reach.</p>`) + `</div>`;
    return { html: `<div class="fx-row"><span class="fx-k">People</span>${ownRow}${more}</div>${wide}`, count };
  }

  // Mount: follow the style that the page shows.
  let cur = null, box = null, open = false;
  function render(force) {
    const id = decodeURIComponent(location.hash.slice(1));
    const thesis = document.getElementById("h-thesis");
    if (!thesis || !node?.[id] || (id === cur && !force && box?.isConnected && box.previousElementSibling === thesis)) return;
    cur = id;
    if (!box) { box = document.createElement("section"); box.className = "fx"; box.setAttribute("aria-label", "People"); }
    if (box.previousElementSibling !== thesis) thesis.after(box);
    const hops = store.get();
    box.innerHTML = block(id, hops).html;
    const btn = box.querySelector(".fx-more"), wide = box.querySelector(".fx-wide");
    if (btn && open) { wide.hidden = false; btn.setAttribute("aria-expanded", "true"); }
    if (!btn) { wide.hidden = !open; }
    hideTip();
  }
  document.addEventListener("click", (e) => {
    if (!box?.contains(e.target)) return;
    const m = e.target.closest(".fx-more"), h = e.target.closest("[data-hops]");
    if (m) { open = m.getAttribute("aria-expanded") !== "true"; m.setAttribute("aria-expanded", open); box.querySelector(".fx-wide").hidden = !open; }
    if (h) { store.set(+h.dataset.hops); open = true; render(true); box.querySelector(`[data-hops="${h.dataset.hops}"]`)?.focus(); }
  });
  // Keys inside the block do not step the style.
  document.addEventListener("keydown", (e) => { if (box?.contains(e.target) && (e.key === "ArrowLeft" || e.key === "ArrowRight")) e.stopPropagation(); }, true);

  window.Faces = { ready, reach: (id, n) => reach(id, n), avatar: (pid, o) => avatar(pid, o), people: (sid) => (byStyle?.[sid] || []).map((x) => x.person),
    person: (pid) => byPerson?.[pid] };

  const start = () => ready.then((ok) => {
    if (!ok || !document.getElementById("h-thesis")) return;
    render();
    // The pages set the hash with replaceState, which fires no event, and some pages build the header again for
    // each style. So watch the page and mount again when the style or the header changes.
    let queued = false;
    new MutationObserver((list) => {
      if (queued || list.every((m) => box?.contains(m.target) || m.target === tipEl || tipEl.contains(m.target))) return;
      queued = true;
      requestAnimationFrame(() => { queued = false; render(); });
    }).observe(document.body, { childList: true, characterData: true, subtree: true });
    addEventListener("hashchange", () => render());
    // The pages write the hash after they change the page, so also follow each history write.
    for (const k of ["replaceState", "pushState"]) {
      const orig = history[k];
      history[k] = function (...a) { const r = orig.apply(this, a); queueMicrotask(() => render()); return r; };
    }
  });
  document.readyState === "loading" ? addEventListener("DOMContentLoaded", start) : start();
})();
