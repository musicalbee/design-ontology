// Organisations on every style page, and the org tip on every page.
//
// nav.js loads this file next to faces.js. On a style page (#h-thesis), it adds an "Organisations" row after the
// people row: the studios, schools, houses, companies and crews that made, taught, published or sold the style.
// On each page, a hover or a keyboard focus on an element with data-org shows a tip with the emblem of the org.
// The orgs page and the people page use the same data through window.Orgs.
(() => {
  const base = new URL(".", document.currentScript?.src || location.href);
  const url = (p) => new URL(p, base).href;
  // One network fetch per file for the page (shared with kit.js); each script parses its own copy.
  const json = (p) => (window.doFetch ??= (u) => ((window.doFetchCache ??= new Map()).get(u) ?? window.doFetchCache.set(u, fetch(u).then((r) => (r.ok ? r.text() : null)).catch(() => null)).get(u)))(url(p)).then((t) => (t ? JSON.parse(t) : null)).catch(() => null);
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  const PART = { made: "made", published: "published", launched: "launched", exhibited: "exhibited", funded: "funded", taught: "taught",
    gathered: "gathered", sold: "sold" };
  const ROLE = { ran: "ran it", founder: "founder", owner: "owner", leader: "leader", designer: "designer", staff: "staff", teacher: "teacher",
    student: "student", member: "member", author: "author", exhibitor: "exhibitor", patron: "patron", client: "client", user: "user" };

  const css = `
  .ox-chips { display: flex; flex-wrap: wrap; gap: 6px; }
  .ox-c { display: inline-flex; align-items: center; gap: 6px; padding: 2px 10px 2px 2px; border-radius: 999px; border: 1.5px solid var(--fx-line, #DEE3F2);
    background: var(--fx-bg, #fff); color: var(--fx-ink, #1F1F45); text-decoration: none; font-weight: 600; font-size: 12.5px; }
  .ox-c:hover, .ox-c:focus-visible { border-color: var(--fx-accent, #264FCC); outline: none; }
  .ox-m { display: inline-grid; place-items: center; width: 26px; height: 26px; border-radius: 50%; overflow: hidden; background: #fff;
    box-shadow: inset 0 0 0 1px var(--fx-line, #DEE3F2); font-size: 10px; font-weight: 700; color: var(--fx-muted, #50527A); flex: none; }
  .ox-m img { width: 80%; height: 80%; object-fit: contain; display: block; }
  .ox-c small { color: var(--fx-muted, #50527A); font-weight: 400; }
  .fx-tip .pic { display: block; width: calc(100% + 28px); margin: -12px -14px 10px; height: 200px; object-fit: cover; object-position: 50% 22%;
    border-radius: 12px 12px 0 0; background: #2C2C5A; }
  .fx-tip .pic.logo { height: 150px; object-fit: contain; padding: 16px; background: #fff; }
  .fx-tip .cr { color: #8F93BC; font-size: 10.5px; margin-top: 6px; }`;
  const style = document.createElement("style");
  style.textContent = css;
  document.head.append(style);

  let O, byId, byStyle, styleName = {}, personName = {};
  const ready = Promise.all([json("../graph/orgs.json"), json("../graph/lineage.json"), json("../graph/people.json")]).then(([o, g, p]) => {
    if (!o) return false;
    O = o;
    byId = Object.fromEntries(O.orgs.map((x) => [x.id, x]));
    byStyle = O.by_style || {};
    for (const n of g?.nodes || []) styleName[n.id] = n.name;
    for (const x of p?.people || []) personName[x.id] = x.name;
    return true;
  });

  const years = (o) => o.founded != null ? `${o.founded}–${o.closed ?? ""}` : "";
  const initials = (name) => name.replace(/[^\p{L}\p{N} ]/gu, "").split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0].toUpperCase()).join("");
  /** The small emblem of one org: the logo when there is one, else the initials. */
  const mark = (o) => `<span class="ox-m" aria-hidden="true">${o.emblem?.url ? `<img src="${esc(o.emblem.url)}" alt="" loading="lazy" decoding="async" referrerpolicy="no-referrer" data-nozoom="1">` : esc(initials(o.name))}</span>`;
  /** One chip: a link to the org in the orgs view, with the data for the tip. */
  function chip(id, opts = {}) {
    const o = byId?.[id];
    if (!o) return "";
    return `<a class="ox-c" href="${url("orgs.html")}#${esc(id)}" data-org="${esc(id)}"${opts.style ? ` data-style="${esc(opts.style)}"` : ""}>${mark(o)}${esc(o.name)}${opts.note ? ` <small>${esc(opts.note)}</small>` : ""}</a>`;
  }

  /** The text of the tip for one org: the emblem at full width, then the facts. */
  function tip(id, style) {
    const o = byId?.[id];
    if (!o) return "";
    const e = o.emblem;
    const pic = e?.url ? `<img class="pic logo" src="${esc(e.url)}" alt="" referrerpolicy="no-referrer" data-nozoom="1">` : "";
    const meta = [o.kind, o.place, years(o)].filter(Boolean).join(" · ");
    const parts = (o.styles || []).filter((s) => styleName[s.style]).sort((a, b) => (a.style === style ? -1 : b.style === style ? 1 : 0)).slice(0, 3)
      .map((s) => `<span class="r">${esc(PART[s.part] ?? s.part)} · ${esc(styleName[s.style])}</span>`).join("");
    const ppl = (o.affiliates || []).filter((a) => personName[a.person]).slice(0, 4)
      .map((a) => `<li><b>${esc(ROLE[a.role] ?? a.role)}</b>${esc(personName[a.person])}${a.from ? ` (${a.from})` : ""}</li>`).join("");
    const credit = e ? `<div class="cr">${esc(e.kind)}: ${esc(e.credit)} · ${esc(e.licence)}${e.trademark ? " · trademark" : ""}</div>` : "";
    return `${pic}<b>${esc(o.name)}</b>${meta ? `<div class="m">${esc(meta)}</div>` : ""}<div>${parts}</div>${o.summary ? `<p>${esc(o.summary)}</p>` : ""}` +
      (ppl ? `<ul>${ppl}</ul>` : "") + credit;
  }

  // One floating tip for the orgs. It takes the look of the people tip (.fx-tip in faces.js).
  const tipEl = document.createElement("div");
  tipEl.className = "fx-tip ox-tip";
  tipEl.setAttribute("role", "tooltip");
  tipEl.id = "ox-tip";
  let tipFor = null, mx = 0;
  const place = (el) => {
    const r = el.getBoundingClientRect(), w = tipEl.offsetWidth, h = tipEl.offsetHeight;
    // A wide target (a row of the time line) puts the tip at the pointer, not at the middle of the row.
    const cx = r.width > 360 && mx ? mx : r.left + r.width / 2;
    const left = Math.min(innerWidth - w - 8, Math.max(8, cx - w / 2));
    let top = r.bottom + 10;
    if (top + h > innerHeight - 8) top = Math.max(8, r.top - h - 10);
    tipEl.style.left = `${left}px`;
    tipEl.style.top = `${top}px`;
  };
  const showTip = (el) => {
    if (!byId || tipFor === el) return;
    tipFor = el;
    if (!tipEl.isConnected) document.body.append(tipEl);
    tipEl.innerHTML = tip(el.dataset.org, el.dataset.style);
    el.setAttribute("aria-describedby", "ox-tip");
    place(el);
    // Place again when the emblem has loaded, because the tip is taller then.
    tipEl.querySelector("img")?.addEventListener("load", () => tipFor === el && place(el), { once: true });
    tipEl.classList.add("on");
  };
  const hideTip = () => { if (tipFor) tipFor.removeAttribute("aria-describedby"); tipFor = null; tipEl.classList.remove("on"); };
  document.addEventListener("mouseover", (e) => { mx = e.clientX; const a = e.target.closest?.("[data-org]"); a ? showTip(a) : tipFor && !tipFor.matches(":focus") && hideTip(); });
  document.addEventListener("focusin", (e) => { mx = 0; const a = e.target.closest?.("[data-org]"); a ? showTip(a) : hideTip(); });
  addEventListener("keydown", (e) => { if (e.key === "Escape" && tipFor) hideTip(); });
  addEventListener("scroll", hideTip, { passive: true });

  // Mount on a style page: one row after the people row (or after the thesis, before faces.js has mounted).
  let cur = null, box = null;
  function render() {
    const id = decodeURIComponent(location.hash.slice(1));
    const thesis = document.getElementById("h-thesis");
    if (!thesis || !styleName[id]) return;
    const fx = thesis.nextElementSibling?.matches(".fx:not(.ox)") ? thesis.nextElementSibling : null;
    const anchor = fx || thesis;
    if (id === cur && box?.isConnected && box.previousElementSibling === anchor) return;
    cur = id;
    if (!box) { box = document.createElement("section"); box.className = "fx ox"; box.setAttribute("aria-label", "Organisations"); }
    const list = byStyle[id] || [];
    box.innerHTML = `<div class="fx-row"><span class="fx-k">Organisations</span>` +
      (list.length ? `<div class="ox-chips">${list.map((x) => chip(x.org, { style: id, note: PART[x.part] ?? x.part })).join("")}</div>`
        : `<span class="fx-none">No organisation on record for this style yet.</span>`) + `</div>`;
    if (box.previousElementSibling !== anchor) anchor.after(box);
    hideTip();
  }

  window.Orgs = { ready, chip: (id, o) => chip(id, o), mark: (id) => (byId?.[id] ? mark(byId[id]) : ""), org: (id) => byId?.[id], ROLE, PART };

  const start = () => ready.then((ok) => {
    if (!ok || !document.getElementById("h-thesis")) return;
    render();
    // Same reasons as in faces.js: the pages change the hash with replaceState and build the header again.
    let queued = false;
    new MutationObserver((list) => {
      if (queued || list.every((m) => box?.contains(m.target) || m.target === tipEl || tipEl.contains(m.target))) return;
      queued = true;
      requestAnimationFrame(() => { queued = false; render(); });
    }).observe(document.body, { childList: true, characterData: true, subtree: true });
    addEventListener("hashchange", () => render());
    for (const k of ["replaceState", "pushState"]) {
      const orig = history[k];
      history[k] = function (...a) { const r = orig.apply(this, a); queueMicrotask(() => render()); return r; };
    }
  });
  document.readyState === "loading" ? addEventListener("DOMContentLoaded", start) : start();
})();
