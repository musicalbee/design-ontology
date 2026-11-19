// One gallery for the image domains (photography, film, painting).
// A preview with "frames" is a set: a moodboard (photography, one frame for each typical subject of the style)
// or a showreel (film, one frame for each shot of the shot list, cut at the rhythm of the shot lengths).
// The page sets <body data-domain="…">. The script reads the domain definition, the skill index
// and each style record, so new styles show with no page work.
const DOMAIN = document.body.dataset.domain;
const $ = (id) => document.getElementById(id);
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
const label = (k) => k.replace(/_/g, " ").replace(/^./, (c) => c.toUpperCase());
const json = (u) => fetch(u).then((r) => (r.ok ? r.json() : null)).catch(() => null);
const cache = {};
let styles = [], at = 0, domain, previews = {};

document.head.insertAdjacentHTML("beforeend", `<style>
  *, *::before, *::after { box-sizing: border-box; }
  :root { --chrome: #17171a; --chrome-2: #2a2a30; --chrome-line: #44444c; --chrome-ink: #f4f4f5;
    --paper: #f7f6f2; --ink: #1d1d1f; --muted: #5d5d66; --line: #d9d7d0; --accent: #d6336c; }
  html, body { margin: 0; }
  body { font: 15px/1.5 system-ui, sans-serif; background: var(--paper); color: var(--ink); }
  :focus-visible { outline: 3px solid #6aa8ff; outline-offset: 2px; }
  main { max-width: 1240px; margin: 0 auto; padding: 24px 16px 64px; display: grid; gap: 24px; }
  header h1 { margin: 0; font-size: clamp(26px, 4vw, 40px); line-height: 1.1; letter-spacing: -.01em; }
  header .meta { color: var(--muted); margin: 4px 0 0; }
  header .thesis { margin: 12px 0 0; font-size: 18px; max-width: 70ch; }
  .hero { display: grid; gap: 16px; grid-template-columns: 1fr; }
  @media (min-width: 960px) { .hero { grid-template-columns: 3fr 2fr; } }
  figure { margin: 0; background: #fff; border: 1px solid var(--line); border-radius: 10px; padding: 12px; min-width: 0; }
  figcaption { font-size: 12px; color: var(--muted); margin-top: 8px; }
  h2 { font-size: 13px; text-transform: uppercase; letter-spacing: .06em; margin: 0 0 8px; color: var(--muted); font-weight: 650; }
  .shot { aspect-ratio: 3 / 2; width: 100%; border-radius: 6px; overflow: hidden; background: #eee; display: grid; }
  .shot img { width: 100%; height: 100%; object-fit: cover; display: block; }
  .shot.tall { background: #111; grid-template-rows: minmax(0, 1fr); }
  .shot.tall img { object-fit: contain; }
  .shot .ph { display: flex; }
  .shot.set { aspect-ratio: auto; background: none; overflow: visible; }
  .board { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
  .board figure { padding: 0; border: 0; background: none; }
  .board img { width: 100%; height: auto; aspect-ratio: 3 / 2; object-fit: cover; border-radius: 6px; display: block; }
  .board figcaption { margin-top: 4px; }
  .reel .screen { position: relative; aspect-ratio: 3 / 2; background: #111; border-radius: 6px; overflow: hidden; }
  .reel .screen img { width: 100%; height: 100%; object-fit: contain; display: block; }
  .reel .tc { position: absolute; left: 8px; bottom: 8px; font: 12px/1.3 ui-monospace, monospace; color: #fff;
    background: rgb(0 0 0 / .6); padding: 3px 7px; border-radius: 4px; }
  .reel .bar { display: flex; gap: 8px; align-items: stretch; margin-top: 8px; }
  .reel .play { flex: none; width: 44px; border: 1px solid var(--line); border-radius: 6px; background: #fff; cursor: pointer; font-size: 16px; }
  .reel .strip { display: grid; grid-auto-flow: column; grid-auto-columns: minmax(96px, 1fr); gap: 6px; overflow-x: auto; flex: 1; }
  .reel .strip button { padding: 0; border: 2px solid transparent; border-radius: 6px; background: #fff; cursor: pointer; text-align: left; font: inherit; }
  .reel .strip button[aria-current="true"] { border-color: var(--accent); }
  .reel .strip img { width: 100%; aspect-ratio: 3 / 2; object-fit: cover; display: block; border-radius: 4px 4px 0 0; }
  .reel .strip span { display: block; font-size: 11px; line-height: 1.3; padding: 3px 5px; color: var(--muted); }
  .shot .ph span { flex: 1; }
  .vec { font-size: 14px; }
  .sw { display: flex; flex-wrap: wrap; gap: 10px; font-size: 12px; margin-top: 12px; }
  .sw span { display: inline-flex; align-items: center; gap: 6px; }
  .sw i { width: 14px; height: 14px; border-radius: 3px; border: 1px solid rgb(0 0 0 / .15); }
  .facets { display: grid; gap: 16px; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); }
  .facet dl { margin: 0; display: grid; gap: 6px; font-size: 14px; }
  .facet dt { font-size: 12px; color: var(--muted); }
  .facet dd { margin: 0 0 4px; }
  .facet ul { margin: 0; padding-left: 18px; }
  table { border-collapse: collapse; width: 100%; font-size: 13px; }
  th, td { text-align: left; padding: 4px 6px; border-top: 1px solid var(--line); vertical-align: top; }
  th { color: var(--muted); font-weight: 600; }
  .prompt { font: 13px/1.5 ui-monospace, monospace; background: #fff; border: 1px solid var(--line); border-radius: 8px; padding: 10px 12px; }
  .prompt .neg { color: var(--muted); margin-top: 6px; }
  .tag { display: inline-block; font-size: 12px; padding: 2px 8px; border: 1px solid var(--line); border-radius: 999px; background: #fff; margin: 0 4px 4px 0; }
  .two { display: grid; gap: 16px; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); }
  a { color: inherit; }
</style>`);

document.body.insertAdjacentHTML("beforeend", `
<main>
  <header><h1 id="h-name"></h1><p class="meta" id="h-meta"></p><p class="thesis" id="h-thesis"></p></header>
  <section class="hero">
    <figure><div class="shot" id="shot"></div><figcaption id="shot-cap"></figcaption></figure>
    <figure><h2>Style vectors</h2><div class="vec" id="vec"></div><div class="sw" id="sw"></div></figure>
  </section>
  <section class="two">
    <figure><h2>Prompt primer</h2><div class="prompt"><div id="p-pos"></div><div class="neg" id="p-neg"></div></div></figure>
    <figure><h2>Lineage and principles</h2><div id="lin"></div><div id="prin" style="margin-top:8px"></div></figure>
  </section>
  <section class="facets" id="facets"></section>
  <section id="ev-box" hidden><h2>Canonical evidence (open licence)</h2><div id="ev"></div></section>
  <p class="meta"><a id="f-data">Style record (JSON)</a> · <a id="f-skill">Skill file</a></p>
</main>`);

// A generic view of one facet value: text, a list, a table or a definition list.
function view(v) {
  if (v == null) return "";
  if (typeof v !== "object") return esc(v);
  if (Array.isArray(v)) {
    if (v.every((x) => typeof x !== "object")) return `<ul>${v.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>`;
    const cols = [...new Set(v.flatMap((x) => Object.keys(x)))].filter((c) => !/^(object_id|public_domain)$/.test(c));
    return `<table><tr>${cols.map((c) => `<th>${esc(label(c))}</th>`).join("")}</tr>${v.map((x) =>
      `<tr>${cols.map((c) => `<td>${c === "hex" ? `<i style="display:inline-block;width:10px;height:10px;background:${esc(x[c])}"></i> ` : ""}${typeof x[c] === "object" ? view(x[c]) : esc(x[c])}</td>`).join("")}</tr>`).join("")}</table>`;
  }
  if ("principle" in v && Object.keys(v).length <= 2) return `<span class="tag">${esc(v.principle)}</span>`;
  return `<dl>${Object.entries(v).map(([k, x]) => `<dt>${esc(label(k))}</dt><dd>${view(x)}</dd>`).join("")}</dl>`;
}

// Every { hex } object and every { principle } reference in the record.
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
    const score = sat * (l > 0.15 && l < 0.8 ? 1 : 0.3);
    if (score > top) { top = score; best = h; }
  }
  return best;
}

const src = (f) => `previews/${DOMAIN}/${esc(f.file)}`;
const credit = (p) => `${p.model} (${p.licence}), seed ${p.seed}, ${p.steps} steps.`;
let reel = null;
const still = matchMedia("(prefers-reduced-motion: reduce)");

// A moodboard: the same light, lens and grade on different subjects. That is what makes it a style, not a scene.
function board(s, p) {
  $("shot").innerHTML = `<div class="board">${p.frames.map((f) =>
    `<figure><img src="${src(f)}" alt="${esc(`${s.name}: ${f.label}`)}" loading="lazy"><figcaption>${esc(f.label)}</figcaption></figure>`).join("")}</div>`;
  $("shot-cap").textContent = `Moodboard: ${p.frames.length} generated frames, not real works. One frame for each typical subject of the style, with the same light, lens and grade words. ${credit(p)}`;
}

// A showreel: hard cuts through the shot list. Each shot holds for a quarter of its length in the record
// (700 ms to 4 s), so a slow style cuts slowly and a fast style cuts fast.
function showreel(s, p) {
  const F = p.frames, hold = (f) => Math.min(4000, Math.max(700, (f.seconds || 3) * 250));
  F.forEach((f) => { new Image().src = src(f); });
  $("shot").innerHTML = `<div class="reel"><div class="screen"><img id="r-img" alt=""><span class="tc" id="r-tc"></span></div>
    <div class="bar"><button class="play" id="r-play" type="button"></button>
    <div class="strip">${F.map((f, i) => `<button type="button" data-shot="${i}" aria-label="Shot ${i + 1}: ${esc(f.label)}"><img src="${src(f)}" alt="" data-nozoom="1"><span>${i + 1}. ${esc(f.label)}<br>${esc([f.size, f.lens, f.seconds && f.seconds + " s"].filter(Boolean).join(" · "))}</span></button>`).join("")}</div></div></div>`;
  const r = reel = { i: 0, playing: !still.matches, t: 0 };
  const cut = (i) => {
    clearTimeout(r.t);
    if (reel !== r) return;
    r.i = (i + F.length) % F.length;
    const f = F[r.i];
    $("r-img").src = src(f);
    $("r-img").alt = `${s.name}, shot ${r.i + 1}: ${f.label}`;
    $("r-tc").textContent = `${r.i + 1}/${F.length} · ${[f.size, f.lens, f.movement].filter(Boolean).join(" · ")}`;
    for (const b of $("shot").querySelectorAll("[data-shot]")) b.setAttribute("aria-current", b.dataset.shot == r.i);
    if (r.playing) r.t = setTimeout(() => cut(r.i + 1), hold(f));
  };
  const mark = () => { $("r-play").textContent = r.playing ? "❚❚" : "▶"; $("r-play").setAttribute("aria-label", r.playing ? "Pause the showreel" : "Play the showreel"); };
  $("r-play").onclick = () => { r.playing = !r.playing; mark(); cut(r.i); };
  $("shot").querySelectorAll("[data-shot]").forEach((b) => (b.onclick = () => { r.playing = false; mark(); cut(+b.dataset.shot); }));
  mark(); cut(0);
  $("shot-cap").textContent = `Showreel: ${F.length} generated stills, not a real film. One frame for each shot of the shot list, cut at the rhythm of the shot lengths${still.matches ? " (paused: reduced motion)" : ""}. ${credit(p)}`;
}

function shot(s, found) {
  const p = previews[s.id];
  if (reel) { clearTimeout(reel.t); reel = null; }
  $("shot").classList.toggle("set", !!p?.frames);
  $("shot").classList.toggle("tall", !!p && !p.frames && p.height > p.width);
  if (p?.frames) (p.kind === "reel" ? showreel : board)(s, p);
  else if (p) {
    $("shot").innerHTML = `<img src="previews/${DOMAIN}/${esc(p.file)}" alt="${esc(`${s.name}: ${p.subject}`)}">`;
    $("shot-cap").textContent = p.kind === "specimen"
      ? `Specimen of ${p.font} (${p.licence}), drawn from the font outlines. No image model.`
      : p.kind === "press-proof"
      ? `Press proof drawn by code from the process rules of the style. No image model. Subject: ${p.subject}.`
      : p.kind === "plate-plan"
      ? `Plate plan drawn by code from the rules of the style and the cuisine vocabulary. No image model. A plan, not a recipe: each element is one primary ingredient, and the time line gives where and when it began.`
      : p.kind === "swatch-board"
      ? `Swatch board drawn by code from the fabric rules of the style and the fabric vocabulary. No image model. The structure of each cloth is enlarged. History of every cloth: fabrics.html.`
      : `Generated preview, not a real work. ${p.model} (${p.licence}), seed ${p.seed}, ${p.steps} steps. Subject: ${p.subject}.${p.wordmark ? ` Wordmark "${p.wordmark.brand}"${p.wordmark.fictional ? " (a fictional brand)" : ""} set in ${p.wordmark.font} by ${p.wordmark.maker} (${p.wordmark.licence}).` : ""}`;
  } else {
    const cols = found.hex.slice(0, 8);
    $("shot").innerHTML = `<div class="ph">${cols.map((c) => `<span style="background:${esc(c.hex)}"></span>`).join("")}</div>`;
    $("shot-cap").textContent = "No preview image yet. The bands are the palette of the style.";
  }
}

function show(i) {
  at = (i + styles.length) % styles.length;
  const meta = styles[at];
  (cache[meta.id] ??= json(`../data/${DOMAIN}/styles/${meta.id}.json`)).then((s) => {
    if (!s || styles[at].id !== s.id) return;
    const found = walk(s);
    $("h-name").textContent = s.name;
    $("h-meta").textContent = [s.time_period?.label, (s.aliases || []).join(", ")].filter(Boolean).join(" · ");
    $("h-thesis").textContent = s.philosophy?.core_thesis || s.summary;
    shot(s, found);
    // The meter takes the style's own colour: the most saturated colour of its palette fills it.
    const vec = $("vec"), lead = vivid(found.hex.map((c) => c.hex));
    vec.style.setProperty("--color-primary", lead || "#1d1d1f");
    vec.innerHTML = VectorMeter.html(domain.vectors, s.vectors, { poles: true });
    VectorMeter.fit(vec);
    $("sw").innerHTML = found.hex.slice(0, 10).map((c) => `<span><i style="background:${esc(c.hex)}"></i>${esc(c.name)} <code>${esc(c.hex)}</code></span>`).join("");
    const pp = s.prompt_primer || {};
    $("p-pos").textContent = (pp.positive || []).join(", ");
    $("p-neg").textContent = pp.negative?.length ? "Negative: " + pp.negative.join(", ") : "";
    const L = s.lineage || {}, byId = Object.fromEntries(styles.map((x) => [x.id, x.name]));
    const rel = (ids) => ids.map((id) => byId[id] ? `<a class="tag" href="#${esc(id)}">${esc(byId[id])}</a>` : `<span class="tag">${esc(id)}</span>`).join("");
    $("lin").innerHTML = Object.entries(L).filter(([, ids]) => Array.isArray(ids) && ids.length)
      .map(([k, ids]) => `<div><small>${esc(label(k))}</small><br>${rel(ids)}</div>`).join("") || "<small>No lineage edges.</small>";
    $("prin").innerHTML = found.principles.size ? `<small>Composition principles</small><br>${[...found.principles].map((p) => `<a class="tag" href="../data/principles/${esc(p)}.json">${esc(p)}</a>`).join("")}` : "";
    $("facets").innerHTML = domain.facets.filter((f) => f.key !== "prompt_primer" && f.key !== "evidence" && s[f.key] != null)
      .map((f) => `<figure class="facet"><h2>${esc(f.title)}</h2>${view(s[f.key])}</figure>`).join("");
    $("ev-box").hidden = !s.evidence?.length;
    $("ev").innerHTML = window.Evidence ? Evidence.html(s.evidence) : "";
    $("f-data").href = `../data/${DOMAIN}/styles/${s.id}.json`;
    $("f-skill").href = `../skills/${s.id}/SKILL.md`;
    document.title = `${s.name}: ${domain.name} styles`;
  });
  for (const b of $("chips").children) b.setAttribute("aria-pressed", b.dataset.go === meta.id);
  $("chips").querySelector('[aria-pressed="true"]')?.scrollIntoView({ block: "nearest" });
  if (location.hash.slice(1) !== meta.id) history.replaceState(null, "", "#" + meta.id);
}

const go = (id) => { const i = styles.findIndex((s) => s.id === id); if (i >= 0) show(i); return i >= 0; };
Promise.all([json(`../domains/${DOMAIN}.json`), json("../skills/index.json"), json(`previews/${DOMAIN}/manifest.json`)]).then(([d, index, man]) => {
  domain = d;
  previews = man?.images || {};
  styles = index.skills.filter((s) => s.domain === DOMAIN);
  $("chips").innerHTML = styles.map((s) => `<button data-go="${esc(s.id)}" aria-pressed="false">${esc(s.name)}</button>`).join("");
  go(location.hash.slice(1)) || show(0);
});
document.addEventListener("click", (e) => { const b = e.target.closest("[data-go]"); if (b) go(b.dataset.go); });
addEventListener("hashchange", () => go(location.hash.slice(1)));
$("prev").onclick = () => show(at - 1);
$("next").onclick = () => show(at + 1);
addEventListener("keydown", (e) => {
  if (e.target.matches("input, select, textarea") || e.metaKey || e.ctrlKey || e.altKey) return;
  if (e.key === "ArrowLeft") show(at - 1);
  if (e.key === "ArrowRight") show(at + 1);
});
