// Encyclopedia: one page shape for every domain of styles.
//
//   Encyclopedia.page({ domain, plugins, groups, links })
//
// The page reads the domain definition (domains/<id>.json), the skill index and each style record,
// so a new style shows with no page work. Every style shows the same sections in the same order:
//   the preview (a plug-in, gallery.js), the structure (the facets of the domain), the style vectors,
//   the prompt primer, the peculiarities, then the lineage and the sources.
// A plug-in adds the parts that only one domain has. It is an object:
//   { id, label, at, load?(ctx), render(el, style, ctx) }
//   at: "preview" — the picture in the hero (one plug-in, normally Gallery)
//       "hero"    — under the preview, in the hero
//       "header"  — in the header, under the thesis
//       "top"     — its own section after the hero, before the structure
//       "end"     — its own section after the peculiarities
// render() runs for each style. A plug-in that waits for data checks ctx.current() === style.id first.
// groups: { key, labels: [[value, label], …] } groups the style list in the drawer (the internet branches).
// links: [[href, text], …] are the other views of the domain, shown in the header.
(() => {
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  const label = (k) => String(k).replace(/_/g, " ").replace(/^./, (c) => c.toUpperCase());
  const json = (u) => fetch(u).then((r) => (r.ok ? r.json() : null)).catch(() => null);
  const css = document.createElement("link");
  css.rel = "stylesheet";
  css.href = new URL("encyclopedia.css", document.currentScript?.src || location.href).href;
  document.head.append(css);

  const PRIMERS = ["prompt_primer", "primer", "shot_primer", "implementation"];
  const NOT_STRUCTURE = new Set([...PRIMERS, "evidence", "references"]);
  const FACTS = [["time_period", "Period"], ["region", "Region"], ["branch", "Branch"], ["building_types", "Building types"], ["room_types", "Room types"],
    ["primary_mediums", "Mediums"], ["capture", "Capture"]];

  // A generic view of one facet value: text, a list, a palette, a table or a list of terms.
  function view(v, key = "") {
    if (v == null || v === "") return "";
    if (typeof v === "number") return `<span class="enc-num">${esc(v)}</span>`;
    if (typeof v === "boolean") return v ? "yes" : "no";
    if (typeof v !== "object") return esc(v);
    if (Array.isArray(v)) {
      if (!v.length) return "";
      if (v.every((x) => typeof x !== "object")) {
        return v.every((x) => String(x).length < 32) ? `<div class="enc-tags">${v.map((x) => `<span class="enc-tag">${esc(x)}</span>`).join("")}</div>`
          : `<ul>${v.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>`;
      }
      if (v.every((x) => x && typeof x.hex === "string")) {
        return `<div class="enc-swatches">${v.map((x) => `<div class="enc-swatch"><i style="background:${esc(x.hex)}"></i><span>${esc(x.name ?? x.hex)}<small><code>${esc(x.hex)}</code>${[x.role, x.surface, x.use].filter(Boolean).map((t) => ` · ${esc(t)}`).join("")}</small></span></div>`).join("")}</div>`;
      }
      if (v.every((x) => x && typeof x.principle === "string" && Object.keys(x).length <= 2)) return `<div class="enc-tags">${v.map((x) => `<span class="enc-tag">${esc(x.principle)}</span>`).join("")}</div>`;
      const cols = [...new Set(v.flatMap((x) => (x && typeof x === "object" ? Object.keys(x) : [])))].filter((c) => !/^(object_id|public_domain)$/.test(c));
      return `<div class="enc-scroll"><table><thead><tr>${cols.map((c) => `<th>${esc(label(c))}</th>`).join("")}</tr></thead><tbody>${v.map((x) =>
        `<tr>${cols.map((c) => `<td>${c === "hex" ? `<i class="enc-sw" style="background:${esc(x[c])}"></i>` : ""}${c === "url" && x[c] ? `<a href="${esc(x[c])}" rel="noopener">link</a>` : view(x?.[c], c)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
    }
    if ("principle" in v && Object.keys(v).length <= 2) return `<span class="enc-tag">${esc(v.principle)}</span>`;
    if (typeof v.hex === "string") return `<span><i class="enc-sw" style="background:${esc(v.hex)}"></i>${esc(v.name ?? "")} <code>${esc(v.hex)}</code></span>`;
    return `<dl>${Object.entries(v).filter(([, x]) => x != null && !(Array.isArray(x) && !x.length)).map(([k, x]) => `<div class="kv"><dt>${esc(label(k))}</dt><dd>${view(x, k)}</dd></div>`).join("")}</dl>`;
  }

  // Every { hex } object and every { principle } reference in a record.
  function walk(v, out = { hex: [], principles: new Set() }) {
    if (Array.isArray(v)) v.forEach((x) => walk(x, out));
    else if (v && typeof v === "object") {
      if (typeof v.hex === "string") out.hex.push(v);
      if (typeof v.principle === "string") out.principles.add(v.principle);
      Object.values(v).forEach((x) => walk(x, out));
    }
    return out;
  }

  // The most saturated colour that is not too dark or too light to read as a fill.
  function vivid(hexes) {
    let best = null, top = -1;
    for (const h of hexes) {
      const m = /^#?([0-9a-f]{6})$/i.exec(h || "");
      if (!m) continue;
      const [r, g, b] = [0, 2, 4].map((i) => parseInt(m[1].slice(i, i + 2), 16) / 255);
      const max = Math.max(r, g, b), min = Math.min(r, g, b), l = (max + min) / 2;
      const sat = max === min ? 0 : (max - min) / (1 - Math.abs(2 * l - 1));
      const score = sat * (l > 0.2 && l < 0.6 ? 1 : 0.3);
      if (score > top) { top = score; best = h; }
    }
    return best;
  }

  const card = (title, body, cls = "") => body ? `<article class="enc-card ${cls}">${title ? `<h3>${esc(title)}</h3>` : ""}<div class="enc-body">${body}</div></article>` : "";
  // A card spans two columns when its content is long or a wide table.
  const size = (v) => {
    const n = JSON.stringify(v ?? "").length, table = Array.isArray(v) && v.some((x) => x && typeof x === "object" && !("hex" in x) && !("principle" in x));
    return n > 2200 ? "wide wider" : n > 900 || table ? "wide" : "";
  };
  // A palette of four colours or more takes a full row, so its swatches sit side by side.
  const hexes = (v) => (Array.isArray(v) ? v : v && typeof v === "object" ? Object.values(v).flat() : []).filter((x) => x && typeof x.hex === "string").length;
  const skel = (n = 3) => Array.from({ length: n }, (_, k) => `<div class="enc-card enc-skel${k === 0 ? " wide" : ""}" aria-hidden="true"><i></i><i></i><i></i></div>`).join("");
  const section = (id, title, lede) => `<section class="enc-sec" id="sec-${id}" data-sec="${id}" aria-labelledby="h-${id}"><header><h2 id="h-${id}">${esc(title)}</h2>${lede ? `<p>${lede}</p>` : ""}</header><div class="enc-grid" id="enc-${id}" data-pack>${skel()}</div></section>`;

  // Masonry: each card of a packed grid spans as many 4px rows as its height needs, so short cards fill the holes
  // beside long ones. A ResizeObserver keeps the spans true when an image, a font or a plug-in changes a card.
  function pack(root) {
    if (!window.ResizeObserver) return;
    const span = (el) => {
      if (!el.parentElement?.hasAttribute("data-pack") || el.offsetParent === null) return;
      const h = el.getBoundingClientRect().height;
      el.style.gridRowEnd = `span ${Math.max(1, Math.ceil((h + 16) / 4))}`;
    };
    const ro = new ResizeObserver((es) => { for (const e of es) span(e.target); });
    const watch = (g) => { for (const c of g.children) { ro.observe(c); span(c); } };
    // A card that leaves the grid (an innerHTML replace on each style change) leaves the observer too.
    const mo = new MutationObserver((ms) => {
      for (const m of ms) {
        for (const c of m.removedNodes) if (c.nodeType === 1) ro.unobserve(c);
        for (const c of m.addedNodes) if (c.nodeType === 1) { ro.observe(c); span(c); }
      }
    });
    for (const g of root.querySelectorAll("[data-pack]")) { watch(g); mo.observe(g, { childList: true }); }
  }

  function page(opt) {
    const ID = opt.domain, plugins = opt.plugins || [];
    const at = (w) => plugins.filter((p) => p.at === w);
    const $ = (id) => document.getElementById(id);
    const main = document.createElement("main");
    main.className = "enc";
    main.id = "stage";
    main.dataset.loading = "";
    main.setAttribute("aria-busy", "true");
    const tabs = [["preview", "Overview"], ...at("top").map((p) => [p.id, p.label]), ["structure", "Structure"], ["vectors", "Style vectors"], ["primer", "Prompt primer"],
      ["peculiar", "Peculiarities"], ...at("end").map((p) => [p.id, p.label]), ["travel", "Travel"], ["lineage", "Lineage and sources"]];
    main.innerHTML = `
      <header class="enc-head">
        <div class="enc-kicker"><span id="enc-domain"></span><span id="enc-n"></span></div>
        <h1 id="h-name">…</h1>
        <p class="enc-meta" id="enc-meta"></p>
        <p class="enc-thesis" id="h-thesis"></p>
        <div class="enc-headx" id="enc-headx">${(opt.links || []).map(([h, t]) => `<a href="${esc(h)}">${esc(t)}</a>`).join("")}</div>
      </header>
      <nav class="enc-tabs" aria-label="Sections of the style"><div class="enc-tabs-row">${tabs.map(([id, t]) => `<button type="button" data-tab="${id}">${esc(t)}</button>`).join("")}</div></nav>
      <section class="enc-sec enc-hero" id="sec-preview" data-sec="preview" aria-label="Overview">
        <div class="enc-stage"><figure class="enc-card enc-preview" id="enc-preview"></figure>${at("hero").map((p) => `<div id="enc-p-${p.id}"></div>`).join("")}</div>
        <aside class="enc-card enc-glance" id="enc-glance" aria-label="At a glance"></aside>
      </section>
      ${at("top").map((p) => `<section class="enc-sec" id="sec-${p.id}" data-sec="${p.id}" aria-labelledby="h-${p.id}"><header><h2 id="h-${p.id}">${esc(p.label)}</h2>${p.lede ? `<p>${p.lede}</p>` : ""}</header><div id="enc-p-${p.id}"></div></section>`).join("")}
      ${section("structure", "Structure", "The rules of the style, facet by facet.")}
      ${section("vectors", "Style vectors", "The style on the five axes of the domain, from 1 to 5, and its nearest styles on the same axes.")}
      ${section("primer", "Prompt primer", "The words for an image model or a brief, the words to keep out, and the canonical works.")}
      ${section("peculiar", "Peculiarities", "What makes the style itself: the rules it keeps, what it refuses, when not to use it, and how to move it.")}
      ${at("end").map((p) => `<section class="enc-sec" id="sec-${p.id}" data-sec="${p.id}" aria-labelledby="h-${p.id}"><header><h2 id="h-${p.id}">${esc(p.label)}</h2>${p.lede ? `<p>${p.lede}</p>` : ""}</header><div id="enc-p-${p.id}"></div></section>`).join("")}
      ${section("travel", "Travel", "Move from this style to its kin: the echoes in other domains, the neighbourhood two edges deep, the neighbourhood on a time line, and the paths to any other thing in the ontology.")}
      ${section("lineage", "Lineage and sources", "Where the style comes from, what it borrows, and the sources of the record.")}
      <footer class="enc-foot"><a id="enc-data">Style record (JSON)</a><a id="enc-skill">Skill file (SKILL.md)</a></footer>`;
    const mount = () => {
      document.body.append(main);
      pack(main);
      at("header").forEach((p) => $("enc-headx").insertAdjacentHTML("beforeend", `<div id="enc-p-${p.id}"></div>`));
      start();
    };

    let domain, styles = [], i = -1;
    const cache = {};
    const ctx = { id: ID, esc, view, walk, vivid, json, current: () => styles[i]?.id, get domain() { return domain; }, get styles() { return styles; } };

    // Section tabs: a click scrolls to the section; the tab of the section in view is marked.
    const reduce = matchMedia("(prefers-reduced-motion: reduce)");
    main.querySelector(".enc-tabs").addEventListener("click", (e) => {
      const b = e.target.closest("[data-tab]");
      if (b) $(`sec-${b.dataset.tab}`)?.scrollIntoView({ behavior: reduce.matches ? "auto" : "smooth", block: "start" });
    });
    const mark = () => {
      const line = 56 + 52 + 40;
      let cur = "preview";
      for (const s of main.querySelectorAll("[data-sec]")) if (!s.hidden && s.getBoundingClientRect().top <= line) cur = s.dataset.sec;
      if (innerHeight + scrollY >= document.documentElement.scrollHeight - 4) cur = [...main.querySelectorAll("[data-sec]")].filter((s) => !s.hidden).pop()?.dataset.sec ?? cur;
      for (const b of main.querySelectorAll("[data-tab]")) {
        const on = b.dataset.tab === cur;
        if (on && b.getAttribute("aria-current") !== "true") b.scrollIntoView({ block: "nearest", inline: "nearest" });
        b.setAttribute("aria-current", on);
      }
    };
    let ticking = false;
    addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(() => { ticking = false; mark(); }); } }, { passive: true });

    function glance(s, found) {
      const facts = FACTS.map(([k, t]) => {
        let v = s[k];
        if (v == null || (Array.isArray(v) && !v.length)) return "";
        if (k === "time_period") v = v.label;
        if (k === "branch") v = opt.groups?.labels.find(([b]) => b === v)?.[1] ?? v;
        return `<dt>${t}</dt><dd>${esc(Array.isArray(v) ? v.join(", ") : v)}</dd>`;
      }).join("");
      const e = s.emotion || {}, a = s.agent || {};
      const hex = found.hex.slice(0, 12);
      $("enc-glance").innerHTML = [
        facts && `<div><h3>At a glance</h3><dl class="enc-facts">${facts}</dl></div>`,
        hex.length && `<div><h3>Palette</h3><div class="enc-pal" role="img" aria-label="${esc(`Palette: ${hex.map((c) => c.name || c.hex).join(", ")}`)}">${hex.map((c) => `<span style="background:${esc(c.hex)}" title="${esc(`${c.name ?? ""} ${c.hex}`)}"></span>`).join("")}</div></div>`,
        (e.target_response || e.keywords?.length) && `<div><h3>It feels</h3>${e.target_response ? `<p>${esc(e.target_response)}</p>` : ""}${e.keywords?.length ? `<div class="enc-tags" style="margin-top:8px">${e.keywords.map((k) => `<span class="enc-tag">${esc(k)}</span>`).join("")}</div>` : ""}</div>`,
        a.use_cases?.length && `<div><h3>Good for</h3><div class="enc-body"><ul>${a.use_cases.map((u) => `<li>${esc(u)}</li>`).join("")}</ul></div></div>`,
        a.triggers?.length && `<div><h3>Words that call it</h3><div class="enc-tags">${a.triggers.map((t) => `<span class="enc-tag">${esc(t)}</span>`).join("")}</div></div>`,
      ].filter(Boolean).join("");
    }

    function structure(s) {
      const facets = (domain.facets || []).filter((f) => !NOT_STRUCTURE.has(f.key) && s[f.key] != null);
      $("enc-structure").innerHTML = facets.map((f) => card(f.title, view(s[f.key], f.key), hexes(s[f.key]) >= 4 ? "full" : size(s[f.key]))).join("") || `<p class="enc-empty">This record has no facets yet.</p>`;
    }

    function vectors(s) {
      const box = $("enc-vectors"), V = s.vectors || {}, axes = domain.vectors || [];
      const peers = styles.filter((x) => x.id !== s.id && x.vectors);
      const dist = (x) => Math.sqrt(axes.reduce((n, ax) => n + ((x.vectors[ax.key] ?? 3) - (V[ax.key] ?? 3)) ** 2, 0));
      const near = peers.map((x) => [x, dist(x)]).sort((a, b) => a[1] - b[1]).slice(0, 5);
      const diff = (x) => {
        const d = axes.map((ax) => [ax, (x.vectors[ax.key] ?? 3) - (V[ax.key] ?? 3)]).filter(([, n]) => n).sort((a, b) => Math.abs(b[1]) - Math.abs(a[1]))[0];
        return d ? `${d[1] > 0 ? "more" : "less"} ${d[0].label.toLowerCase()} (${x.vectors[d[0].key]} against ${V[d[0].key]})` : "the same on all five axes";
      };
      box.innerHTML = `<article class="enc-card wide"><h3>Profile, 1 to 5</h3><div class="enc-vec" id="enc-vec">${window.VectorMeter ? VectorMeter.html(axes, V, { poles: true }) : view(V)}</div></article>` +
        (near.length ? `<article class="enc-card"><h3>Nearest styles on these axes</h3><ol class="enc-near">${near.map(([x]) => `<li><a href="#${esc(x.id)}">${esc(x.name)}</a><small>${esc(diff(x))}</small></li>`).join("")}</ol></article>` : "");
      if (window.VectorMeter) VectorMeter.fit($("enc-vec"));
    }

    function primer(s) {
      const out = [];
      for (const key of PRIMERS) {
        const p = s[key];
        if (!p || typeof p !== "object" || Array.isArray(p)) continue;
        const rest = { ...p };
        if (p.positive || p.negative) {
          const text = [(p.positive || []).join(", "), p.negative?.length ? `Negative: ${p.negative.join(", ")}` : ""].filter(Boolean).join("\n");
          out.push(`<article class="enc-card wide"><h3>Use these words</h3><div class="enc-tags">${(p.positive || []).map((w) => `<span class="enc-tag pos">${esc(w)}</span>`).join("")}</div>` +
            (p.negative?.length ? `<h3 style="margin-top:18px">Keep these words out</h3><div class="enc-tags">${p.negative.map((w) => `<span class="enc-tag neg">${esc(w)}</span>`).join("")}</div>` : "") +
            `<div class="enc-row"><button class="enc-btn" type="button" data-copy="${esc(text)}">Copy the prompt</button></div></article>`);
          delete rest.positive; delete rest.negative;
        }
        if (p.image_prompt) {
          const text = [p.image_prompt, p.negative_prompt && `Negative: ${p.negative_prompt}`, p.camera && `Camera: ${p.camera}`].filter(Boolean).join("\n");
          out.push(`<article class="enc-card wide"><h3>Image prompt</h3><pre class="enc-prompt">${esc(text)}</pre><div class="enc-row"><button class="enc-btn" type="button" data-copy="${esc(text)}">Copy the prompt</button></div></article>`);
          delete rest.image_prompt; delete rest.negative_prompt; delete rest.camera;
        }
        if (p.canonical_works?.length) { out.push(card("Canonical works", view(p.canonical_works), "wide")); delete rest.canonical_works; }
        delete rest.references;
        const title = (domain.facets || []).find((f) => f.key === key)?.title;
        for (const [k, v] of Object.entries(rest)) if (v != null && !(Array.isArray(v) && !v.length)) out.push(card(k === "brief" ? "Brief" : `${title && key !== "prompt_primer" ? `${title}: ` : ""}${label(k)}`, view(v, k), size(v)));
      }
      $("enc-primer").innerHTML = out.join("") || `<p class="enc-empty">This record has no prompt primer yet.</p>`;
    }

    function peculiar(s) {
      const ph = s.philosophy || {}, a = s.agent || {}, P = s.permutations || {};
      const byId = Object.fromEntries(styles.map((x) => [x.id, x.name]));
      const knob = Object.fromEntries((domain.knobs || []).map((k) => [k.key, k]));
      const range = (v) => [v.min != null && v.max != null ? `${v.min} to ${v.max}` : "", v.options ? v.options.join(", ") : ""].filter(Boolean).join(" · ");
      const out = [
        ph.design_principles?.length && `<article class="enc-card wide"><h3>Rules it keeps</h3><div class="enc-body"><ol class="enc-rules">${ph.design_principles.map((r) => `<li><span>${esc(r)}</span></li>`).join("")}</ol></div></article>`,
        ph.anti_patterns?.length && card("What it refuses", `<ul class="enc-refuse">${ph.anti_patterns.map((r) => `<li>${esc(r)}</li>`).join("")}</ul>`),
        a.avoid_when?.length && card("Do not use it when", `<ul>${a.avoid_when.map((r) => `<li>${esc(r)}</li>`).join("")}</ul>`),
        a.modifiers?.length && card("If you want a variation", `<div class="enc-scroll"><table><thead><tr><th>Request</th><th>Move toward</th><th>How</th></tr></thead><tbody>${a.modifiers.map((m) =>
          `<tr><td><b>${esc(m.request)}</b></td><td>${m.toward ? (byId[m.toward] ? `<a href="#${esc(m.toward)}">${esc(byId[m.toward])}</a>` : esc(m.toward)) : "–"}</td><td>${esc(m.how)}</td></tr>`).join("")}</tbody></table></div>`, "wide"),
        Object.keys(P).length && card("Knobs and their range", `<div class="enc-scroll"><table><thead><tr><th>Knob</th><th>Default</th><th>Range</th><th>Note</th></tr></thead><tbody>${Object.entries(P).map(([k, v]) =>
          `<tr><td>${esc(knob[k]?.label ?? label(k))}</td><td class="enc-num">${v.default != null ? esc(v.default) + (knob[k]?.unit ? ` ${esc(knob[k].unit)}` : "") : "–"}</td><td>${esc(range(v)) || "–"}</td><td>${esc(v.note ?? knob[k]?.description ?? "")}</td></tr>`).join("")}</tbody></table></div>`, "wide"),
      ].filter(Boolean);
      $("enc-peculiar").innerHTML = out.join("") || `<p class="enc-empty">This record has no rules or knobs yet.</p>`;
    }

    function lineage(s, found) {
      const L = s.lineage || {}, byId = Object.fromEntries(styles.map((x) => [x.id, x.name]));
      const rel = (ids) => `<div class="enc-tags">${ids.map((id) => byId[id] ? `<a class="enc-tag" href="#${esc(id)}">${esc(byId[id])}</a>` : `<a class="enc-tag" href="graph.html#${esc(id)}">${esc(label(id.replace(/-/g, " ")))}</a>`).join("")}</div>`;
      const edges = Object.entries(L).filter(([, ids]) => Array.isArray(ids) && ids.length);
      const refs = [...(s.references?.images ?? []), ...(s.implementation?.references ?? [])];
      const out = [
        edges.length && card("Lineage", `<dl>${edges.map(([k, ids]) => `<div class="kv"><dt>${esc(label(k))}</dt><dd>${rel(ids)}</dd></div>`).join("")}</dl>`),
        found.principles.size && card("Composition principles", `<div class="enc-tags">${[...found.principles].map((p) => `<a class="enc-tag" href="../data/principles/${esc(p)}.json">${esc(p)}</a>`).join("")}</div>`),
        s.evidence?.length && window.Evidence && `<article class="enc-card full"><h3>Canonical evidence (open licence)</h3>${Evidence.html(s.evidence)}</article>`,
        refs.length && card("Reference images", `<ul>${refs.map((r) => `<li><a href="${esc(r.url)}" rel="noopener">${esc(r.title)}</a>. ${esc(r.credit)}. ${esc(r.licence)}.</li>`).join("")}</ul>`, refs.length > 3 ? "wide" : ""),
        s.sources?.length && card("Sources", `<ul>${s.sources.map((r) => typeof r === "string" ? `<li>${esc(r)}</li>` : `<li>${r.url ? `<a href="${esc(r.url)}" rel="noopener">${esc(r.title ?? r.url)}</a>` : esc(r.title)}</li>`).join("")}</ul>`, s.sources.length > 5 ? "wide" : ""),
      ].filter(Boolean);
      $("enc-lineage").innerHTML = out.join("") || `<p class="enc-empty">No lineage edges or sources.</p>`;
    }

    // Travel: the dense patterns of the demo kit (kit.js), drawn for the style on the page.
    function travel(s) {
      const el = $("enc-travel");
      el.innerHTML = card("Echoes in other domains", `<div data-k="echoes"></div>`, "full") +
        card("Neighbourhood", `<div data-k="legend"></div><div data-k="cloud" style="margin:12px auto 0"></div>`, "wide") +
        card("Paths", `<p class="enc-cap" style="margin:0 0 10px">From this style to any style, person, org, material or process.</p><div data-k="paths"></div>`, "") +
        card("The neighbourhood on a time line", `<div data-k="tl"></div>`, "full");
      window.kitReady?.then((Kit) => {
        if (styles[i]?.id !== s.id) return;
        const q = (k) => el.querySelector(`[data-k="${k}"]`);
        Kit.echoes(q("echoes"), s.id);
        q("legend").innerHTML = Kit.legend();
        Kit.cloud(q("cloud"), s.id, { hops: 2, onCentre: (t) => Kit.hoodTimeline(q("tl"), t) });
        Kit.pathFinder(q("paths"), { from: `s:${s.id}` });
        Kit.hoodTimeline(q("tl"), s.id);
      });
    }

    function show(n) {
      i = (n + styles.length) % styles.length;
      const meta = styles[i];
      if (!("loading" in main.dataset)) main.dataset.busy = "";
      (cache[meta.id] ??= json(`../data/${ID}/styles/${meta.id}.json`)).then((s) => {
        if (!s || styles[i].id !== s.id) return;
        delete main.dataset.loading; delete main.dataset.busy;
        main.removeAttribute("aria-busy");
        const found = walk(s);
        main.style.setProperty("--enc-style", vivid(found.hex.map((c) => c.hex)) || "#264fcc");
        $("enc-domain").textContent = `${domain.name} styles`;
        $("enc-n").textContent = `${i + 1} of ${styles.length}`;
        $("h-name").textContent = s.name;
        $("enc-meta").textContent = [s.time_period?.label, (s.aliases || []).join(", ")].filter(Boolean).join(" · ");
        $("h-thesis").textContent = s.philosophy?.core_thesis || s.summary || "";
        glance(s, found); structure(s); vectors(s); primer(s); peculiar(s); lineage(s, found); travel(s);
        for (const p of plugins) {
          const el = p.at === "preview" ? $("enc-preview") : $(`enc-p-${p.id}`);
          if (el) p.render(el, s, ctx);
        }
        $("enc-data").href = `../data/${ID}/styles/${s.id}.json`;
        $("enc-skill").href = `../skills/${s.id}/SKILL.md`;
        document.title = `${s.name}: ${domain.name} styles`;
        mark();
        // Fetch the records of the next and the last style when the page is idle, so that ← and → are at once.
        (window.requestIdleCallback || setTimeout)(() => {
          for (const d of [1, -1]) { const m = styles[(i + d + styles.length) % styles.length]; cache[m.id] ??= json(`../data/${ID}/styles/${m.id}.json`); }
        });
      });
      for (const b of $("chips").querySelectorAll("[data-go]")) b.setAttribute("aria-pressed", b.dataset.go === meta.id);
      $("chips").querySelector('[aria-pressed="true"]')?.scrollIntoView({ block: "nearest" });
      if (location.hash.slice(1) !== meta.id) history.replaceState(null, "", "#" + meta.id);
    }
    const go = (id) => { const n = styles.findIndex((s) => s.id === id); if (n >= 0 && n !== i) show(n); return n >= 0; };

    function start() {
      Promise.all([json(`../domains/${ID}.json`), json("../skills/index.json")]).then(([d, index]) => {
        domain = d;
        styles = index.skills.filter((s) => s.domain === ID);
        let head = null;
        const G = opt.groups;
        if (G) {
          const rank = (s) => { const n = G.labels.findIndex(([b]) => b === s[G.key]); return n < 0 ? G.labels.length : n; };
          styles = styles.map((s, n) => [s, n]).sort(([a, n], [b, m]) => rank(a) - rank(b) || n - m).map(([s]) => s);
        }
        $("chips").innerHTML = styles.map((s) => {
          const h = G && s[G.key] !== head ? `<span class="do-branch">${esc(G.labels.find(([b]) => b === s[G.key])?.[1] ?? "Other")}</span>` : "";
          if (G) head = s[G.key];
          return `${h}<button data-go="${esc(s.id)}" aria-pressed="false">${esc(s.name)}</button>`;
        }).join("");
        // A style link is `<domain>.html#<id>` (demo/links.json). `?style=<id>` works too, for links where a
        // hash gets lost; show() then writes the hash, and the query is dropped so the URL stays one form.
        // Ids are plain kebab-case, so the hash is read raw, as the hashchange handler does: a stray % cannot throw.
        const q = new URLSearchParams(location.search), want = location.hash.slice(1) || q.get("style");
        if (q.has("style")) { q.delete("style"); const rest = q.toString(); history.replaceState(null, "", location.pathname + (rest ? `?${rest}` : "") + location.hash); }
        return Promise.all(plugins.map((p) => p.load?.(ctx))).then(() => go(want) || show(0));
      });
      document.addEventListener("click", (e) => {
        const b = e.target.closest("[data-go]");
        if (b) go(b.dataset.go);
        const c = e.target.closest("[data-copy]");
        if (c) navigator.clipboard?.writeText(c.dataset.copy).then(() => { c.textContent = "Copied"; setTimeout(() => (c.textContent = "Copy the prompt"), 1500); });
        // A link to another style of this page: change the style and go to the top of the page.
        const a = e.target.closest('a[href^="#"]');
        if (a && main.contains(a) && styles.some((s) => s.id === a.getAttribute("href").slice(1))) { e.preventDefault(); go(a.getAttribute("href").slice(1)); scrollTo({ top: 0 }); }
      });
      addEventListener("hashchange", () => go(location.hash.slice(1)));
      $("prev").onclick = () => show(i - 1);
      $("next").onclick = () => show(i + 1);
      addEventListener("keydown", (e) => {
        if (e.target.matches("input, select, textarea") || e.metaKey || e.ctrlKey || e.altKey) return;
        if (e.key === "ArrowLeft") show(i - 1);
        if (e.key === "ArrowRight") show(i + 1);
      });
    }
    document.body ? mount() : addEventListener("DOMContentLoaded", mount);
    return { go, ctx };
  }

  window.Encyclopedia = { page, view, walk, vivid, esc, json, label };
})();
