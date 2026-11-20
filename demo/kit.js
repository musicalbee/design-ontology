// The demo kit: one set of parts for every demo page. nav.js loads it (and kit.css) on each page.
//
// window.Kit gives:
//   data    Kit.load("kit", "lineage", "people", "orgs", "materials") → Promise of the graph files (each file loads once).
//   preview Kit.preview(styleId, { size: "xs"|"sm"|"md"|"lg" }) → a 3:2 frame. A photograph fills it, a board sits whole.
//   chips   Kit.style(id) Kit.person(id) Kit.org(id) Kit.material(id) Kit.process(key) → one chip for each kind of thing.
//   tip     one floating tip for styles, materials and processes. It finds each link by its href, so a page needs no edit.
//           People and orgs keep their own tips (faces.js, orgs.js); the kit marks plain links to them so that those tips find them.
//   select  each <select> gets the kit look and is as wide as its chosen option.
//   table   Kit.table(el, { columns, rows, search, facet }) and Kit.sortable(tableEl): sort on each column head, a filter box, a count.
//   dense   Kit.timeline(el, items, opts) · Kit.echoes(el, styleId) · Kit.cloud(el, id, { hops }) · Kit.paths(el, from, to, { max })
//           · Kit.pathFinder(el, { from, to }): the patterns for travel through the ontology.
(() => {
  if (window.Kit) return;
  const BASE = new URL(".", document.currentScript?.src || location.href);
  const url = (p) => new URL(p, BASE).href;
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  const clip = (s, n) => { s = String(s ?? ""); return s.length > n ? `${s.slice(0, n - 1).replace(/\s+\S*$/, "")}…` : s; };

  // ── Data. Each file loads once, when a part first needs it. ──
  const FILES = { kit: "../graph/kit.json", lineage: "../graph/lineage.json", people: "../graph/people.json", orgs: "../graph/orgs.json", materials: "../graph/materials.json" };
  const D = {}, loading = {};
  const index = {
    kit: (d) => { D.style = d.styles; },
    lineage: (d) => { D.node = Object.fromEntries(d.nodes.map((n) => [n.id, n])); D.domainName = Object.fromEntries(d.domains.map((x) => [x.id, x.name])); },
    people: (d) => { D.person = Object.fromEntries(d.people.map((p) => [p.id, p])); },
    orgs: (d) => { D.org = Object.fromEntries(d.orgs.map((o) => [o.id, o])); },
    materials: (d) => {
      D.material = Object.fromEntries(d.materials.map((m) => [m.id, m]));
      D.process = Object.fromEntries(d.processes.map((p) => [p.process, p]));
      D.mclass = Object.fromEntries(d.classes.map((c) => [c.id, c]));
      D.matStyles = {}; D.procStyles = {};
      for (const l of d.style_materials) (D.matStyles[l.material] ??= []).push(l);
      for (const l of d.style_processes) (D.procStyles[l.process] ??= []).push(l.style);
    },
  };
  function load(...names) {
    return Promise.all(names.map((n) => loading[n] ??= (window.doFetch ??= (u) => ((window.doFetchCache ??= new Map()).get(u) ?? window.doFetchCache.set(u, fetch(u).then((r) => (r.ok ? r.text() : null)).catch(() => null)).get(u)))(url(FILES[n])).then((t) => (t ? JSON.parse(t) : null)).catch(() => null)
      .then((d) => { if (d) { D[`$${n}`] = d; index[n](d); } return d; }))).then(() => D);
  }
  const has = (n) => !!D[`$${n}`];

  // ── Words ──
  const PROC_GROUP = { technique: "technique", "cuisine.methods": "cuisine method", "ceramics.decorations": "ceramics decoration", "fashion.finishes": "fashion finish", "industrial.finishes": "industrial finish" };
  const domainName = (d) => D.domainName?.[d] ?? d.replace(/-/g, " ").replace(/^./, (c) => c.toUpperCase());
  const EDGE = { // the words for an edge between styles, both ways, and its colour
    evolved_from: ["evolved from", "--k-e-evolved"], evolved_into: ["evolved into", "--k-e-evolved"],
    rebelled_against: ["rebelled against", "--k-e-rebelled"], provoked: ["provoked", "--k-e-rebelled"],
    hybridized_with: ["hybrid with", "--k-e-hybrid"], echoes: ["echoes", "--k-e-echoes"],
    subgenre_of: ["subgenre of", "--k-e-sub"], subgenres: ["has subgenre", "--k-e-sub"],
  };
  const LEGEND = [["Evolved", "--k-e-evolved"], ["Rebelled", "--k-e-rebelled"], ["Hybrid", "--k-e-hybrid"], ["Echoes", "--k-e-echoes"], ["Subgenre", "--k-e-sub"]];
  const word = (s) => String(s ?? "").replace(/-/g, " ");

  // ── Hrefs: the one place that says where each kind of thing lives ──
  const href = {
    style: (id) => { const s = D.style?.[id]; return s ? url(`${s.domain}.html#${encodeURIComponent(id)}`) : "#"; },
    person: (id) => url(`people.html#${encodeURIComponent(id)}`),
    org: (id) => url(`orgs.html#${encodeURIComponent(id)}`),
    material: (id) => url(`materials.html#m=${encodeURIComponent(id)}`),
    process: (key) => url(`materials.html#p=${key}`),
  };

  // ── Preview of a style ──
  function preview(id, opts = {}) {
    const s = D.style?.[id];
    const size = opts.size ? ` ${opts.size}` : "";
    if (!s?.src) return `<span class="k-pv${size}" aria-hidden="true"></span>`;
    return `<span class="k-pv${size}" data-fit="${s.fit}"><img src="${esc(url(s.src))}" alt="${opts.alt ? esc(s.name) : ""}" loading="lazy" decoding="async" data-nozoom="1"></span>`;
  }

  // ── Chips ──
  const initials = (name) => String(name).replace(/[^\p{L}\p{N} ]/gu, "").split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0].toUpperCase()).join("");
  const media = (img, text, extra = "") => `<span class="k-m" aria-hidden="true">${img ? `<img src="${esc(img)}" alt="" loading="lazy" decoding="async" referrerpolicy="no-referrer" data-nozoom="1"${extra}>` : esc(text)}</span>`;
  const note = (o) => (o?.note ? ` <small>${esc(o.note)}</small>` : "");
  const chip = {
    style(id, o = {}) {
      const s = D.style?.[id];
      if (!s) return `<span class="k-chip ghost" data-k="style"><span>${esc(id)}</span></span>`;
      return `<a class="k-chip" data-k="style" href="${href.style(id)}" data-k-tip="style:${esc(id)}">${preview(id)}<span>${esc(s.name)}${note(o)}</span></a>`;
    },
    person(id, o = {}) {
      const p = D.person?.[id];
      if (!p) return `<span class="k-chip ghost" data-k="person"><span>${esc(id)}</span></span>`;
      return `<a class="k-chip" data-k="person" href="${href.person(id)}" data-person="${esc(id)}"${o.style ? ` data-style="${esc(o.style)}"` : ""}>${media(p.photo?.url, initials(p.name))}<span>${esc(p.name)}${note(o)}</span></a>`;
    },
    org(id, o = {}) {
      const x = D.org?.[id];
      if (!x) return `<span class="k-chip ghost" data-k="org"><span>${esc(id)}</span></span>`;
      return `<a class="k-chip" data-k="org" href="${href.org(id)}" data-org="${esc(id)}"${o.style ? ` data-style="${esc(o.style)}"` : ""}>${media(x.emblem?.url, initials(x.name))}<span>${esc(x.name)}${note(o)}</span></a>`;
    },
    material(id, o = {}) {
      const m = D.material?.[id];
      if (!m) return `<span class="k-chip ghost" data-k="material"><span>${esc(id)}</span></span>`;
      const sw = m.colour?.[0];
      const mm = m.photo ? media(url(m.photo), "") : `<span class="k-m" aria-hidden="true"${sw ? ` style="background:${esc(sw)}"` : ""}></span>`;
      return `<a class="k-chip" data-k="material" href="${href.material(id)}" data-k-tip="material:${esc(id)}">${mm}<span>${esc(m.name)}${note(o)}</span></a>`;
    },
    process(key, o = {}) {
      const p = D.process?.[key];
      if (!p) return `<span class="k-chip ghost" data-k="process"><span>${esc(key)}</span></span>`;
      const g = key.split(":")[0];
      return `<a class="k-chip" data-k="process" href="${href.process(key)}" data-k-tip="process:${esc(key)}">${media(null, (PROC_GROUP[g] ?? g)[0].toUpperCase())}<span>${esc(p.name)}${note(o)}</span></a>`;
    },
  };
  const chipOf = (t, id, o) => (chip[t] ? chip[t](id, o) : "");

  // ── Tip: styles, materials and processes. ──
  const tipEl = document.createElement("div");
  tipEl.className = "k-tip";
  tipEl.id = "k-tip";
  tipEl.setAttribute("role", "tooltip");
  const tipBody = {
    style(id) {
      const s = D.style?.[id];
      if (!s) return "";
      return `${preview(id)}<div class="k-kind" data-k="style">Style · ${esc(domainName(s.domain))}</div><b class="k-t">${esc(s.name)}</b>` +
        `${s.period ? `<div class="k-meta">${esc(s.period)}</div>` : ""}${s.thesis ? `<p>${esc(clip(s.thesis, 220))}</p>` : ""}`;
    },
    material(id) {
      const m = D.material?.[id];
      if (!m) return "";
      const sw = m.colour?.[0];
      const pic = m.photo ? `<div class="k-pic"><img src="${esc(url(m.photo))}" alt=""></div>` : sw ? `<div class="k-pic sw" style="background:${esc(sw)}"></div>` : "";
      const fam = D.mclass?.[m.class]?.families.find((f) => f.id === m.family)?.name;
      const uses = D.matStyles?.[id] || [];
      const styles = [...new Set(uses.map((l) => l.style))];
      const rel = styles.slice(0, 4).map((s) => `<span>${esc(D.style?.[s]?.name ?? s)}</span>`).join("") + (styles.length > 4 ? `<span>+${styles.length - 4}</span>` : "");
      return `${pic}<div class="k-kind" data-k="material">Material · ${esc(D.mclass?.[m.class]?.name ?? m.class)}</div><b class="k-t">${esc(m.name)}</b>` +
        `${fam || m.form ? `<div class="k-meta">${esc([fam, m.form].filter(Boolean).join(" · "))}</div>` : ""}${m.summary ? `<p>${esc(clip(m.summary, 220))}</p>` : ""}` +
        (styles.length ? `<div class="k-meta">Named by ${styles.length} style${styles.length === 1 ? "" : "s"}</div><div class="k-rel">${rel}</div>` : "");
    },
    process(key) {
      const p = D.process?.[key];
      if (!p) return "";
      const g = key.split(":")[0];
      const on = (p.acts_on || []).map((m) => D.material?.[m]?.name ?? m).slice(0, 4);
      const styles = D.procStyles?.[key] || [];
      return `<div class="k-kind" data-k="process">Process · ${esc(PROC_GROUP[g] ?? g)}</div><b class="k-t">${esc(p.name)}</b>` +
        `${p.note ? `<p>${esc(clip(p.note, 240))}</p>` : ""}${on.length ? `<div class="k-meta">Acts on</div><div class="k-rel">${on.map((n) => `<span>${esc(n)}</span>`).join("")}</div>` : ""}` +
        (styles.length ? `<div class="k-meta">Used by ${styles.length} style${styles.length === 1 ? "" : "s"}</div>` : "");
    },
  };
  const NEED = { style: ["kit"], material: ["kit", "materials"], process: ["kit", "materials"] };

  // Which thing a link names: its data-k-tip, else its href. Links in the top bar and in the tips have no tip.
  const HERE = location.pathname.split("/").pop() || "index.html";
  function target(a) {
    if (a.closest(".do-bar, .k-tip, .fx-tip, [data-k-notip]")) return null;
    const t = a.getAttribute("data-k-tip");
    if (t) { const i = t.indexOf(":"); return [t.slice(0, i), t.slice(i + 1)]; }
    const h = a.getAttribute("href");
    if (!h || !h.includes("#") || a.hasAttribute("data-person") || a.hasAttribute("data-org")) return null;
    let u;
    try { u = new URL(h, location.href); } catch { return null; }
    const dir = u.pathname.slice(0, u.pathname.lastIndexOf("/") + 1);
    if (u.origin !== location.origin || dir !== BASE.pathname || u.hash.length < 2) return null;
    const page = u.pathname.slice(dir.length) || HERE, hash = decodeURIComponent(u.hash.slice(1));
    if (page === "materials.html") return hash.startsWith("m=") ? ["material", hash.slice(2)] : hash.startsWith("p=") ? ["process", hash.slice(2)] : null;
    const dom = page.replace(/\.html$/, "");
    if (!D.style) return ["style?", hash, dom];
    return D.style[hash] && (D.style[hash].domain === dom || dom === "graph") ? ["style", hash] : null;
  }
  let tipFor = null, mx = 0, seq = 0;
  function place(el) {
    const r = el.getBoundingClientRect(), w = tipEl.offsetWidth, h = tipEl.offsetHeight;
    const cx = r.width > 360 && mx ? mx : r.left + r.width / 2;
    tipEl.style.left = `${Math.min(innerWidth - w - 8, Math.max(8, cx - w / 2))}px`;
    let top = r.bottom + 10;
    if (top + h > innerHeight - 8) top = Math.max(8, r.top - h - 10);
    tipEl.style.top = `${top}px`;
  }
  async function show(el) {
    if (tipFor === el) return;
    let t = target(el);
    if (!t) return hide();
    tipFor = el;
    const my = ++seq;
    if (t[0] === "style?") { await load("kit"); t = target(el); if (!t) return my === seq && hide(); }
    const need = NEED[t[0]];
    if (!need) return hide();
    if (!need.every(has)) await load(...need);
    if (my !== seq || tipFor !== el) return;
    const body = tipBody[t[0]](t[1]);
    if (!body) return hide();
    if (!tipEl.isConnected) document.body.append(tipEl);
    tipEl.innerHTML = body;
    el.setAttribute("aria-describedby", "k-tip");
    place(el);
    tipEl.querySelector("img")?.addEventListener("load", () => tipFor === el && place(el), { once: true });
    tipEl.setAttribute("data-on", "");
  }
  function hide() { seq++; if (tipFor) tipFor.removeAttribute("aria-describedby"); tipFor = null; tipEl.removeAttribute("data-on"); }
  document.addEventListener("mouseover", (e) => { mx = e.clientX; const a = e.target.closest?.("a[href], [data-k-tip]"); a ? show(a) : tipFor && !tipFor.matches(":focus") && hide(); });
  document.addEventListener("focusin", (e) => { mx = 0; const a = e.target.closest?.("a[href], [data-k-tip]"); a ? show(a) : hide(); });
  addEventListener("keydown", (e) => { if (e.key === "Escape" && tipFor) hide(); });
  addEventListener("scroll", () => tipFor && hide(), { passive: true, capture: true });

  // ── Upgrade the page: plain links to a person or an org get the attribute that the people and org tips look for,
  //    and each <select> gets the kit look and its width. ──
  const SIZE_OK = CSS.supports?.("field-sizing", "content");
  const ctx = document.createElement("canvas").getContext("2d");
  function fit(sel) {
    if (SIZE_OK) return;
    const cs = getComputedStyle(sel);
    ctx.font = `${cs.fontWeight} ${cs.fontSize} ${cs.fontFamily}`;
    const txt = sel.options[sel.selectedIndex]?.text ?? "";
    const pad = parseFloat(cs.paddingLeft) + parseFloat(cs.paddingRight) + parseFloat(cs.borderLeftWidth) + parseFloat(cs.borderRightWidth);
    sel.style.width = `${Math.ceil(ctx.measureText(txt).width + pad + 2)}px`;
  }
  function upgrade(root = document) {
    for (const a of root.querySelectorAll?.('a[href*="people.html#"]:not([data-person]), a[href*="orgs.html#"]:not([data-org])') || []) {
      if (a.closest(".do-bar, [data-k-notip]")) continue;
      const m = /(people|orgs)\.html#([^?&]+)$/.exec(a.getAttribute("href"));
      if (m) a.setAttribute(m[1] === "people" ? "data-person" : "data-org", decodeURIComponent(m[2]));
    }
    // A data table (a head row and at least five body rows) gets sort and filter.
    for (const t of root.querySelectorAll?.("table:not([data-k-sort]):not([data-k-keep])") || []) {
      if (t.closest(".k-tbl, [data-k-keep]")) continue;
      if (t.tHead?.rows[0]?.cells.length >= 2 && t.tBodies[0]?.rows.length >= 5) sortable(t, { search: t.tBodies[0].rows.length >= 12 });
    }
    for (const s of root.querySelectorAll?.("select:not([data-k-keep]):not(.k-select)") || []) {
      s.classList.add("k-select");
      fit(s);
      s.addEventListener("change", () => fit(s));
    }
  }
  let pend = false;
  new MutationObserver(() => { if (pend) return; pend = true; setTimeout(() => { pend = false; upgrade(); }, 0); }) // a timer, not rAF: rAF stops in a background tab
    .observe(document.documentElement, { childList: true, subtree: true });
  document.readyState === "loading" ? addEventListener("DOMContentLoaded", () => upgrade()) : upgrade();

  // ── Table ──
  // columns: [{ key, label, num, html(row) → cell html, value(row) → sort value, text(row) → filter text }]
  function table(el, { columns, rows, search = true, facet = null, sort = null, height = null, empty = "No row matches." }) {
    let q = "", dir = 1, by = sort ? columns.findIndex((c) => c.key === sort.key) : -1, fv = "";
    if (sort?.dir === "desc") dir = -1;
    const val = (c, r) => (c.value ? c.value(r) : r[c.key]);
    const txt = (r) => columns.map((c) => (c.text ? c.text(r) : val(c, r))).join(" ").toLowerCase();
    const T = rows.map((r) => [r, txt(r)]);
    const facets = facet ? [...new Set(rows.map(facet.value))].filter((x) => x != null && x !== "").sort() : [];
    el.classList.add("k-tbl");
    if (height) el.style.setProperty("--k-tbl-h", height);
    el.innerHTML = `<div class="k-tbl-bar">${search ? `<input type="search" placeholder="Filter ${rows.length} rows" aria-label="Filter the rows">` : ""}` +
      (facet ? `<select class="k-select" aria-label="${esc(facet.label)}"><option value="">All ${esc(facet.label.toLowerCase())}</option>${facets.map((f) => `<option value="${esc(f)}">${esc(facet.name ? facet.name(f) : f)}</option>`).join("")}</select>` : "") +
      `<span class="k-tbl-count" aria-live="polite"></span></div><div class="k-tbl-wrap"><table><thead><tr>${columns.map((c, i) =>
        `<th scope="col"${c.num ? ' class="num"' : ""}${i === by ? ` aria-sort="${dir > 0 ? "ascending" : "descending"}"` : ""}><button type="button" data-i="${i}">${esc(c.label)}</button></th>`).join("")}</tr></thead><tbody></tbody></table></div>`;
    const tb = el.querySelector("tbody"), count = el.querySelector(".k-tbl-count");
    const cmp = (a, b) => (a == null ? 1 : b == null ? -1 : typeof a === "number" && typeof b === "number" ? a - b : String(a).localeCompare(String(b)));
    function draw() {
      let list = T.filter(([r, t]) => (!q || t.includes(q)) && (!fv || String(facet.value(r)) === fv)).map(([r]) => r);
      if (by >= 0) { const c = columns[by]; list = list.slice().sort((a, b) => { const x = val(c, a), y = val(c, b); return x == null && y == null ? 0 : x == null ? 1 : y == null ? -1 : dir * cmp(x, y); }); }
      tb.innerHTML = list.map((r) => `<tr>${columns.map((c) => `<td${c.num ? ' class="num"' : ""}>${c.html ? c.html(r) : esc(val(c, r) ?? "")}</td>`).join("")}</tr>`).join("") ||
        `<tr><td class="k-tbl-empty" colspan="${columns.length}">${esc(empty)}</td></tr>`;
      count.textContent = list.length === rows.length ? `${rows.length} rows` : `${list.length} of ${rows.length}`;
    }
    el.querySelector("thead").addEventListener("click", (e) => {
      const b = e.target.closest("button[data-i]");
      if (!b) return;
      const i = +b.dataset.i;
      dir = i === by ? -dir : columns[i].num ? -1 : 1;
      by = i;
      for (const th of el.querySelectorAll("th")) th.removeAttribute("aria-sort");
      b.parentElement.setAttribute("aria-sort", dir > 0 ? "ascending" : "descending");
      draw();
    });
    el.querySelector('input[type="search"]')?.addEventListener("input", (e) => { q = e.target.value.trim().toLowerCase(); draw(); });
    el.querySelector(".k-tbl-bar select")?.addEventListener("change", (e) => { fv = e.target.value; draw(); });
    draw();
    return { redraw: draw };
  }

  // Sort and filter on a <table> that a page already has. Numbers sort as numbers.
  // Rows, numeric columns and head buttons are read live: a page can refill the tbody
  // (or the whole table) after the kit wrapped it, and sort and filter then act on the new rows.
  function sortable(tbl, { search = true } = {}) {
    if (tbl.dataset.kSort) return heads(tbl);
    tbl.dataset.kSort = "1";
    if (!tbl.tBodies[0] || !(tbl.tHead?.rows[0] || tbl.rows[0])) return;
    const num = (s) => { const n = parseFloat(String(s).replace(/[\s,]/g, "").replace(/[–—−]/, "-")); return Number.isFinite(n) ? n : null; };
    const rows = () => [...(tbl.tBodies[0]?.rows ?? [])];
    const isNum = (i) => { const rs = rows().filter((r) => r.cells[i]?.textContent.trim()); return rs.length > 0 && rs.every((r) => num(r.cells[i].dataset.sort ?? r.cells[i].textContent) != null); };
    let by = -1, dir = 1, q = "";
    const wrap = document.createElement("div");
    wrap.className = "k-tbl";
    tbl.before(wrap);
    const filter = () => {
      if (!search) return;
      const rs = rows();
      let n = 0;
      for (const r of rs) { const on = !q || r.textContent.toLowerCase().includes(q); r.hidden = !on; n += on; }
      const count = wrap.querySelector(".k-tbl-count"), input = wrap.querySelector("input");
      count.textContent = n === rs.length ? `${rs.length} rows` : `${n} of ${rs.length}`;
      input.placeholder = `Filter ${rs.length} rows`;
    };
    if (search) {
      wrap.insertAdjacentHTML("beforeend", `<div class="k-tbl-bar"><input type="search" aria-label="Filter the rows"><span class="k-tbl-count" aria-live="polite"></span></div>`);
      wrap.querySelector("input").addEventListener("input", (e) => { q = e.target.value.trim().toLowerCase(); filter(); });
      filter();
    }
    wrap.append(tbl);
    heads(tbl);
    tbl.addEventListener("click", (e) => {
      const btn = e.target.closest("th > button[data-k-col]");
      if (!btn || !tbl.contains(btn)) return;
      const th = btn.parentElement, i = th.cellIndex, numeric = isNum(i);
      dir = i === by ? -dir : numeric ? -1 : 1;
      by = i;
      for (const c of th.parentElement.cells) c.removeAttribute("aria-sort");
      th.setAttribute("aria-sort", dir > 0 ? "ascending" : "descending");
      const key = (r) => { const t = r.cells[i]?.dataset.sort ?? r.cells[i]?.textContent.trim() ?? ""; return numeric ? num(t) : t.toLowerCase(); };
      const body = tbl.tBodies[0];
      const sorted = rows().sort((a, b) => { const x = key(a), y = key(b); return x === y ? 0 : x == null || x === "" ? 1 : y == null || y === "" ? -1 : dir * (numeric ? x - y : String(x).localeCompare(String(y))); });
      body.append(...sorted);
      watch.takeRecords(); // the sort moved rows; that is not a refill
    });
    // A refill drops the old sort mark and keeps the filter.
    const watch = new MutationObserver((ms) => {
      if (!ms.some((m) => [...m.addedNodes].some((n) => n.nodeName === "TR" || n.nodeName === "TBODY" || n.nodeName === "THEAD"))) return;
      by = -1;
      for (const c of (tbl.tHead?.rows[0] || tbl.rows[0])?.cells ?? []) c.removeAttribute("aria-sort");
      heads(tbl);
      filter();
      watch.takeRecords();
    });
    watch.observe(tbl, { childList: true, subtree: true });
  }
  // Puts a sort button in each named head cell that has none (again after a page rewrites the head).
  function heads(tbl) {
    const head = tbl.tHead?.rows[0] || tbl.rows[0];
    for (const th of head?.cells ?? []) {
      if (!th.textContent.trim() || th.querySelector(":scope > button[data-k-col]")) continue;
      th.innerHTML = `<button type="button" data-k-col>${th.innerHTML}</button>`;
    }
  }

  // ── Time line ──
  // items: [{ label, href, tip: "style:id", start, end, open, colour, dots: [{ at, label }] }]
  function ticks(a, b) {
    const span = b - a, steps = [1, 2, 5, 10, 20, 25, 50, 100, 200, 250, 500, 1000, 2000, 5000];
    const step = steps.find((s) => span / s <= 8) ?? 10000;
    const out = [];
    for (let t = Math.ceil(a / step) * step; t <= b; t += step) out.push(t);
    return out;
  }
  const yr = (t) => (t < 0 ? `${-t} BCE` : String(t));
  function timeline(el, items, opts = {}) {
    const now = new Date().getFullYear();
    const lo = opts.from ?? Math.min(...items.map((i) => i.start));
    const hi = opts.to ?? Math.max(...items.map((i) => (i.end ?? now)));
    const pad = (hi - lo) * 0.02 || 1, a = lo - pad, b = hi + pad;
    const x = (t) => `${(((t - a) / (b - a)) * 100).toFixed(2)}%`;
    el.classList.add("k-tl");
    if (opts.label) el.style.setProperty("--k-tl-label", opts.label);
    el.innerHTML = `<div class="k-tl-axis">${ticks(a, b).map((t) => `<span style="left:${x(t)}">${yr(t)}</span>`).join("")}</div>` +
      items.map((i) => {
        const end = i.end ?? (i.open ? now : i.start);
        const c = i.colour ? ` style="--c:${esc(i.colour)}"` : "";
        const name = i.href ? `<a href="${esc(i.href)}"${i.tip ? ` data-k-tip="${esc(i.tip)}"` : ""}>${esc(i.label)}</a>` : `<span>${esc(i.label)}</span>`;
        const w = Math.max(0, ((end - i.start) / (b - a)) * 100);
        return `<div class="k-tl-row"${c}>${name}<div class="k-tl-lane"><span class="k-tl-bar${i.end == null && i.open ? " open" : ""}" style="left:${x(i.start)};width:${w.toFixed(2)}%" title="${esc(`${yr(i.start)}–${i.end != null ? yr(i.end) : i.open ? "now" : ""}`)}"></span>` +
          (i.dots || []).map((d) => `<span class="k-tl-dot" style="left:${x(d.at)}" title="${esc(`${yr(d.at)} · ${d.label}`)}"></span>`).join("") + `</div></div>`;
      }).join("") + (now >= a && now <= b ? `<span class="k-tl-now" style="left:calc(var(--k-tl-label) + (100% - var(--k-tl-label)) * ${((now - a) / (b - a)).toFixed(4)})" aria-hidden="true"></span>` : "");
  }

  // ── Echoes: the kin of one style in other domains, one column for each domain ──
  async function echoes(el, id) {
    await load("kit", "lineage");
    const s = D.style[id], adj = D.$lineage.adjacency[id];
    el.classList.add("k-echo");
    if (!s || !adj) { el.innerHTML = `<p class="k-path-n">No style “${esc(id)}”.</p>`; return; }
    const by = {};
    for (const t of adj.echoes || []) if (D.style[t]) (by[D.style[t].domain] ??= []).push(t);
    const cols = Object.entries(by).sort((x, y) => y[1].length - x[1].length);
    el.innerHTML = `<a class="k-echo-core" href="${href.style(id)}" data-k-tip="style:${esc(id)}">${preview(id, { size: "lg" })}<b>${esc(s.name)}</b><small class="k-path-n">${esc(domainName(s.domain))} · ${esc(s.period)}</small></a>` +
      `<div class="k-echo-cols">${cols.map(([d, ids]) => `<div class="k-echo-col"><h4>${esc(domainName(d))}</h4>${ids.map((t) =>
        `<a href="${href.style(t)}" data-k-tip="style:${esc(t)}">${preview(t, { size: "lg" })}<span>${esc(D.style[t].name)}</span><small>${esc(D.style[t].period)}</small></a>`).join("")}</div>`).join("") ||
        `<p class="k-path-n">No echo on record for this style yet.</p>`}</div>`;
  }

  // ── Graph cloud: the neighbourhood of one style, ring by ring ──
  const RELS = Object.keys(EDGE);
  async function cloud(el, id, { hops = 2, max1 = 14, max2 = 28 } = {}) {
    await load("kit", "lineage");
    const adj = D.$lineage.adjacency;
    if (!adj[id]) { el.innerHTML = `<p class="k-path-n">No style “${esc(id)}”.</p>`; return; }
    const ring = [new Map([[id, null]])], seen = new Set([id]), edges = [];
    for (let h = 1; h <= hops; h++) {
      const next = new Map(), cap = h === 1 ? max1 : max2;
      for (const from of ring[h - 1].keys()) for (const rel of RELS) for (const t of adj[from]?.[rel] || []) {
        if (!D.style[t]) continue;
        if (seen.has(t)) { if (ring.slice(0, h + 1).some((r) => r.has(t)) && !edges.some((e) => (e.a === t && e.b === from) || (e.a === from && e.b === t))) edges.push({ a: from, b: t, rel }); continue; }
        if (next.size >= cap) continue;
        seen.add(t); next.set(t, from); edges.push({ a: from, b: t, rel });
      }
      ring.push(next);
    }
    const R = [0, 0.3, 0.45], pos = { [id]: [0.5, 0.5] }, ang = {};
    ring.slice(1).forEach((r, k) => {
      const h = k + 1, ids = [...r.keys()];
      if (h === 1) ids.forEach((t, i) => { ang[t] = (i / ids.length) * Math.PI * 2 - Math.PI / 2; });
      else {
        // A node of the outer ring sits near its parent. Spread the nodes of one parent around its angle, then keep them apart.
        const groups = {};
        for (const t of ids) (groups[r.get(t)] ??= []).push(t);
        const list = [];
        for (const [p, ts] of Object.entries(groups)) ts.forEach((t, i) => list.push([t, (ang[p] ?? 0) + (i - (ts.length - 1) / 2) * 0.22]));
        list.sort((x, y) => x[1] - y[1]);
        const gap = Math.min(0.22, (Math.PI * 2) / Math.max(1, list.length));
        for (let i = 1; i < list.length; i++) if (list[i][1] - list[i - 1][1] < gap) list[i][1] = list[i - 1][1] + gap;
        for (const [t, a] of list) ang[t] = a;
      }
      for (const t of ids) pos[t] = [0.5 + R[h] * Math.cos(ang[t]), 0.5 + R[h] * Math.sin(ang[t])];
    });
    const hopOf = (t) => ring.findIndex((r) => r.has(t));
    el.classList.add("k-cloud");
    el.innerHTML = `<svg viewBox="0 0 1000 1000" aria-hidden="true">${R.slice(1, hops + 1).map((r) => `<circle class="ring" cx="500" cy="500" r="${r * 1000}"/>`).join("")}` +
      edges.filter((e) => pos[e.a] && pos[e.b]).map((e) => `<line class="edge" data-a="${esc(e.a)}" data-b="${esc(e.b)}" x1="${pos[e.a][0] * 1000}" y1="${pos[e.a][1] * 1000}" x2="${pos[e.b][0] * 1000}" y2="${pos[e.b][1] * 1000}" style="stroke:var(${EDGE[e.rel][1]})"><title>${esc(`${D.style[e.a].name} ${EDGE[e.rel][0]} ${D.style[e.b].name}`)}</title></line>`).join("") + `</svg>` +
      Object.entries(pos).map(([t, [px, py]]) => { const h = hopOf(t); return `<a class="node ${h === 0 ? "core" : `h${h}`}" data-id="${esc(t)}" href="${href.style(t)}" data-k-tip="style:${esc(t)}" style="left:${(px * 100).toFixed(2)}%;top:${(py * 100).toFixed(2)}%">${preview(t)}<span>${esc(D.style[t].name)}</span></a>`; }).join("");
    const lit = (t) => {
      if (!t) { el.removeAttribute("data-hover"); for (const n of el.querySelectorAll("[data-lit]")) n.removeAttribute("data-lit"); return; }
      el.setAttribute("data-hover", "");
      const on = new Set([t]);
      for (const l of el.querySelectorAll("line.edge")) { const hit = l.dataset.a === t || l.dataset.b === t; l.toggleAttribute("data-lit", hit); if (hit) { on.add(l.dataset.a); on.add(l.dataset.b); } }
      for (const n of el.querySelectorAll(".node")) n.toggleAttribute("data-lit", on.has(n.dataset.id));
    };
    el.addEventListener("mouseover", (e) => lit(e.target.closest(".node")?.dataset.id));
    el.addEventListener("mouseleave", () => lit(null));
    el.addEventListener("focusin", (e) => lit(e.target.closest(".node")?.dataset.id));
    el.addEventListener("focusout", () => lit(null));
  }
  const legend = () => `<div class="k-legend">${LEGEND.map(([n, c]) => `<span><i style="--c:var(${c})"></i>${esc(n)}</span>`).join("")}</div>`;

  // ── Paths: shortest routes between two things over the whole ontology ──
  // Nodes carry a kind: s: style, p: person, o: org, m: material, r: process. Each edge carries its words, both ways.
  let G = null;
  async function graph() {
    if (G) return G;
    await load("kit", "lineage", "people", "orgs", "materials");
    const adj = new Map();
    const add = (a, b, ab, ba) => { (adj.get(a) || adj.set(a, []).get(a)).push([b, ab]); (adj.get(b) || adj.set(b, []).get(b)).push([a, ba]); };
    for (const e of D.$lineage.edges) {
      const k = e.type.toLowerCase(), inv = { evolved_from: "evolved_into", rebelled_against: "provoked", subgenre_of: "subgenres" }[k] ?? k;
      add(`s:${e.from}`, `s:${e.to}`, EDGE[k]?.[0] ?? word(k), EDGE[inv]?.[0] ?? word(inv));
    }
    for (const p of D.$people.people) {
      for (const s of p.styles || []) add(`p:${p.id}`, `s:${s.style}`, word(s.role) + " of", "has " + word(s.role));
    }
    for (const o of D.$orgs.orgs) {
      for (const s of o.styles || []) add(`o:${o.id}`, `s:${s.style}`, word(s.part), word(s.part) + " by");
      for (const a of o.affiliates || []) add(`p:${a.person}`, `o:${o.id}`, word(a.role) === "ran" ? "ran" : word(a.role) + " at", "has " + word(a.role));
    }
    for (const l of D.$materials.style_materials) add(`s:${l.style}`, `m:${l.material}`, l.use === "avoid" ? "avoids" : "uses", l.use === "avoid" ? "avoided by" : "used by");
    for (const l of D.$materials.style_processes) add(`s:${l.style}`, `r:${l.process}`, "uses process", "process of");
    for (const p of D.$materials.processes) for (const m of p.acts_on || []) add(`r:${p.process}`, `m:${m}`, "acts on", "worked by");
    return (G = adj);
  }
  const KIND = { s: "style", p: "person", o: "org", m: "material", r: "process" };
  const known = (n) => { const [k, id] = [n[0], n.slice(2)]; return !!({ s: D.style, p: D.person, o: D.org, m: D.material, r: D.process }[k]?.[id]); };
  /** All shortest paths from `from` to `to` (up to `max`), as lists of [node, words of the hop into it]. */
  async function route(from, to, { max = 6, hops = 5 } = {}) {
    const adj = await graph();
    if (!adj.has(from) || !adj.has(to)) return [];
    const dist = new Map([[from, 0]]), pred = new Map();
    let front = [from];
    for (let d = 1; d <= hops && front.length && !dist.has(to); d++) {
      const next = [];
      for (const a of front) for (const [b, w] of adj.get(a)) {
        if (!known(b)) continue;
        if (!dist.has(b)) { dist.set(b, d); next.push(b); }
        if (dist.get(b) === d) (pred.get(b) || pred.set(b, []).get(b)).push([a, w]);
      }
      front = next;
    }
    if (!dist.has(to)) return [];
    const out = [];
    const walk = (n, tail) => {
      if (out.length >= max) return;
      if (n === from) { out.push([[from, null], ...tail]); return; }
      const seen = new Set();
      for (const [p, w] of pred.get(n) || []) { if (seen.has(p)) continue; seen.add(p); walk(p, [[n, w], ...tail]); }
    };
    walk(to, []);
    return out;
  }
  const nodeChip = (n) => chipOf(KIND[n[0]], n.slice(2));
  async function paths(el, from, to, opts = {}) {
    el.classList.add("k-paths");
    el.innerHTML = `<p class="k-path-n">Looking for paths…</p>`;
    const list = await route(from, to, opts);
    el.innerHTML = list.length
      ? `<p class="k-path-n">${list.length}${list.length >= (opts.max ?? 6) ? "+" : ""} shortest path${list.length === 1 ? "" : "s"} · ${list[0].length - 1} hop${list[0].length === 2 ? "" : "s"}</p>` +
        list.map((p) => `<div class="k-path">${p.map(([n, w]) => `${w ? `<span class="hop">${esc(w)}</span>` : ""}${nodeChip(n)}`).join("")}</div>`).join("")
      : `<p class="k-path-n">No path of ${opts.hops ?? 5} hops or fewer.</p>`;
  }
  /** A path finder: two boxes that take any name in the ontology. */
  async function pathFinder(el, { from = "", to = "" } = {}) {
    await graph();
    const names = [];
    for (const [k, map, nm] of [["s", D.style, (x) => x.name], ["p", D.person, (x) => x.name], ["o", D.org, (x) => x.name], ["m", D.material, (x) => x.name], ["r", D.process, (x) => x.name]])
      for (const [id, x] of Object.entries(map)) names.push([`${nm(x)} · ${KIND[k]}`, `${k}:${id}`]);
    const byLabel = new Map(names), labelOf = new Map(names.map(([l, n]) => [n, l]));
    const dl = `k-dl-${Math.random().toString(36).slice(2, 8)}`;
    el.innerHTML = `<form class="k-paths-form"><input name="a" list="${dl}" aria-label="From" placeholder="From: a style, person, org, material" value="${esc(labelOf.get(from) ?? "")}">` +
      `<input name="b" list="${dl}" aria-label="To" placeholder="To" value="${esc(labelOf.get(to) ?? "")}"><button type="submit" class="k-chip" style="padding:3px 12px">Find paths</button>` +
      `<datalist id="${dl}">${names.map(([l]) => `<option value="${esc(l)}">`).join("")}</datalist></form><div></div>`;
    const out = el.lastElementChild, f = el.querySelector("form");
    const go = () => { const a = byLabel.get(f.a.value), b = byLabel.get(f.b.value); if (a && b) paths(out, a, b); else out.innerHTML = `<p class="k-path-n">Pick two names from the list.</p>`; };
    f.addEventListener("submit", (e) => { e.preventDefault(); go(); });
    if (from && to) go();
  }

  // ── Segmented filter ──
  function seg(el, options, { value = "", onChange } = {}) {
    el.classList.add("k-seg");
    el.innerHTML = options.map(([v, l]) => `<button type="button" data-v="${esc(v)}" aria-pressed="${v === value}">${esc(l)}</button>`).join("");
    el.addEventListener("click", (e) => {
      const b = e.target.closest("button[data-v]");
      if (!b) return;
      for (const x of el.children) x.setAttribute("aria-pressed", String(x === b));
      onChange?.(b.dataset.v);
    });
  }

  // ── Built parts: the table of all styles, and the time line of the neighbourhood of one style ──
  async function styleTable(el, opts = {}) {
    await load("kit", "lineage", "people", "orgs");
    const adj = D.$lineage.adjacency, byP = D.$people.by_style || {}, byO = D.$orgs.by_style || {};
    const rows = D.$lineage.nodes.filter((n) => D.style[n.id]).map((n) => ({ id: n.id, name: n.name, domain: n.domain, start: n.start, end: n.end,
      echoes: (adj[n.id]?.echoes || []).length, people: (byP[n.id] || []).length, orgs: (byO[n.id] || []).length }));
    const maxE = Math.max(1, ...rows.map((r) => r.echoes));
    return table(el, {
      rows, height: opts.height ?? "560px", sort: { key: "start" },
      facet: { label: "Domains", value: (r) => r.domain, name: domainName },
      columns: [
        { key: "name", label: "Style", html: (r) => chip.style(r.id) },
        { key: "domain", label: "Domain", html: (r) => esc(domainName(r.domain)), text: (r) => domainName(r.domain) },
        { key: "start", label: "From", num: true, html: (r) => esc(yr(r.start)) },
        { key: "end", label: "To", num: true, html: (r) => (r.end == null ? "now" : esc(yr(r.end))) },
        { key: "echoes", label: "Echoes", num: true, html: (r) => `${r.echoes} <span class="k-bar" style="width:${(r.echoes / maxE) * 40}px"></span>` },
        { key: "people", label: "People", num: true },
        { key: "orgs", label: "Orgs", num: true },
      ],
    });
  }
  /** The style and each style one edge away from it, on one time line, with a dot for the first milestone of each of its people. */
  async function hoodTimeline(el, id) {
    await load("kit", "lineage", "people");
    const a = D.$lineage.adjacency[id] || {}, byP = D.$people.by_style || {};
    const ids = [id, ...new Set(Object.entries(a).filter(([k, v]) => Array.isArray(v) && EDGE[k]).flatMap(([, v]) => v))].filter((i) => D.style[i] && D.node[i]);
    timeline(el, ids.map((i) => ({
      label: D.style[i].name, href: href.style(i), tip: `style:${i}`, start: D.node[i].start, end: D.node[i].end, open: D.node[i].end == null,
      colour: i === id ? "var(--k-accent)" : "var(--k-line-strong)",
      dots: (byP[i] || []).flatMap((x) => (D.person[x.person]?.milestones || []).slice(0, 1).map((m) => ({ at: +m.year, label: `${D.person[x.person].name}: ${m.event}` }))).filter((d) => Number.isFinite(d.at)),
    })).sort((x, y) => x.start - y.start), { label: "200px" });
  }

  window.Kit = {
    load, data: D, esc, url, href, preview, chip: chipOf,
    style: chip.style, person: chip.person, org: chip.org, material: chip.material, process: chip.process,
    table, sortable, seg, timeline, echoes, cloud, legend, paths, pathFinder, route, upgrade, domainName, EDGE, styleTable, hoodTimeline,
  };
  document.dispatchEvent(new CustomEvent("kit:ready"));
})();
