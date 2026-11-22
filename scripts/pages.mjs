// Static, crawlable page per style: style/<id>.html (canonical, OG, JSON-LD, links to neighbours).
// Run: node scripts/pages.mjs  (then node scripts/seo.mjs rebuilds the sitemap from style/*.html too)
import { readFileSync, writeFileSync, readdirSync, existsSync, mkdirSync } from "node:fs";

const BASE = "https://musicalbee.github.io/design-ontology/";
const SITE = "Design Ontology";
const esc = (s) => String(s ?? "").replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
const lin = JSON.parse(readFileSync("graph/lineage.json", "utf8"));
const byId = new Map(lin.nodes.map((n) => [n.id, n]));
const out = new Map(); // id -> [{to,type}]
const add = (a, b, type, dir) => { if (!out.has(a)) out.set(a, []); out.get(a).push({ id: b, type, dir }); };
for (const e of lin.edges) { add(e.from, e.to, e.type, "out"); add(e.to, e.from, e.type, "in"); }
const REL = {
  "out:EVOLVED_FROM": "Evolved from", "in:EVOLVED_FROM": "Evolved into",
  "out:REBELLED_AGAINST": "Rebelled against", "in:REBELLED_AGAINST": "Provoked",
  "out:HYBRIDIZED_WITH": "Hybridises with", "in:HYBRIDIZED_WITH": "Hybridises with",
  "out:ECHOES": "Echoes", "in:ECHOES": "Echoes",
  "out:SUBGENRE_OF": "Subgenre of", "in:SUBGENRE_OF": "Subgenres",
};
const pretty = (d) => d.replace(/-/g, " ");

mkdirSync("style", { recursive: true });
const written = [];
for (const dom of readdirSync("data")) {
  const dir = `data/${dom}/styles`;
  if (!existsSync(dir)) continue;
  for (const f of readdirSync(dir).filter((n) => n.endsWith(".json"))) {
    const s = JSON.parse(readFileSync(`${dir}/${f}`, "utf8"));
    const url = `${BASE}style/${s.id}.html`;
    const img = existsSync(`assets/og/style/${s.id}.jpg`) ? `${BASE}assets/og/style/${s.id}.jpg` : `${BASE}assets/og.png`;
    const title = `${s.name}: ${pretty(s.domain)} style · ${SITE}`;
    const desc = s.summary;
    const groups = new Map();
    for (const r of out.get(s.id) || []) {
      const k = REL[`${r.dir}:${r.type}`]; if (!k || !byId.has(r.id)) continue;
      if (!groups.has(k)) groups.set(k, new Set());
      groups.get(k).add(r.id);
    }
    const rel = [...groups].map(([k, ids]) => `<dt>${k}</dt><dd>${[...ids].map((i) => `<a href="${i}.html">${esc(byId.get(i).name)}</a>`).join(", ")}</dd>`).join("");
    const pal = (s.color?.palette || []).map((p) => `<li><span class="sw" style="background:${esc(p.hex)}"></span><b>${esc(p.name)}</b> ${esc(p.hex)} <i>${esc(p.role)}</i></li>`).join("");
    const list = (a) => (a || []).map((x) => `<li>${esc(x)}</li>`).join("");
    const pv = existsSync(`demo/previews/${s.domain}/${s.id}.webp`) ? `<img src="../demo/previews/${s.domain}/${s.id}.webp" alt="${esc(s.name)} preview" width="640" loading="lazy">` : "";
    const ld = { "@context": "https://schema.org", "@type": "Article", headline: s.name, description: desc, url, image: img, isPartOf: { "@type": "WebSite", name: SITE, url: BASE }, license: "https://creativecommons.org/licenses/by/4.0/" };
    const tp = s.time_period?.label ? ` · ${esc(s.time_period.label)}` : "";
    const html = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${url}">
<meta property="og:type" content="article"><meta property="og:site_name" content="${SITE}">
<meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${url}"><meta property="og:image" content="${img}">
<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${esc(desc)}"><meta name="twitter:image" content="${img}">
<script type="application/ld+json">${JSON.stringify(ld)}</script>
<style>body{font:16px/1.6 system-ui,sans-serif;max-width:760px;margin:2rem auto;padding:0 16px;color:#1b1b1f}a{color:#0b5fff}.sw{display:inline-block;width:1em;height:1em;border:1px solid #0003;vertical-align:-2px;margin-right:6px}ul{padding-left:1.2em}dt{font-weight:600;margin-top:.6em}dd{margin:0}img{max-width:100%;height:auto;border-radius:8px}nav{font-size:.9em}</style>
</head><body>
<nav><a href="../demo/">${SITE}</a> › <a href="../demo/#${s.id}">${esc(pretty(s.domain))}</a></nav>
<h1>${esc(s.name)}</h1>
<p><em>${esc(pretty(s.domain))}${tp}${s.aliases?.length ? " · also: " + esc(s.aliases.join(", ")) : ""}</em></p>
<p>${esc(desc)}</p>${pv}
<h2>Core thesis</h2><p>${esc(s.philosophy?.core_thesis)}</p>
<h2>Design principles</h2><ul>${list(s.philosophy?.design_principles)}</ul>
<h2>Anti-patterns</h2><ul>${list(s.philosophy?.anti_patterns)}</ul>
<h2>Palette</h2><ul style="list-style:none;padding:0">${pal}</ul>
<h2>Lineage</h2><dl>${rel || "<dd>No recorded links.</dd>"}</dl>
<h2>Use it</h2><p><a href="../skills/${s.id}/SKILL.md">SKILL.md</a> · <a href="../skills/${s.id}/tokens.css">tokens.css</a> · <a href="https://github.com/musicalbee/design-ontology/blob/main/data/${s.domain}/styles/${s.id}.json">source JSON</a> · <a href="../demo/#${s.id}">open in the demo</a></p>
</body></html>
`;
    writeFileSync(`style/${s.id}.html`, html);
    written.push(s.id);
  }
}
console.log(`pages: ${written.length} style pages`);
