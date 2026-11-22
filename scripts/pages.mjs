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
const LANGS = ["en", "ru", "no"];
const HL = { en: "en", ru: "ru", no: "nb" };
const T = {
  en: { rel: REL, thesis: "Core thesis", prin: "Design principles", anti: "Anti-patterns", pal: "Palette", lin: "Lineage", none: "No recorded links.", use: "Use it", demo: "open in the demo", src: "source JSON", also: "also", sfx: "style", prev: "preview", home: "Design Ontology" },
  ru: { rel: { "Evolved from": "Развился из", "Evolved into": "Развился в", "Rebelled against": "Бунт против", "Provoked": "Вызвал реакцию", "Hybridises with": "Скрещивается с", "Echoes": "Перекликается с", "Subgenre of": "Поджанр", "Subgenres": "Поджанры" }, thesis: "Главная идея", prin: "Принципы дизайна", anti: "Антипаттерны", pal: "Палитра", lin: "Родословная", none: "Связей не записано.", use: "Использовать", demo: "открыть в демо", src: "исходный JSON", also: "также", sfx: "стиль", prev: "превью", home: "Design Ontology" },
  no: { rel: { "Evolved from": "Utviklet fra", "Evolved into": "Utviklet til", "Rebelled against": "Opprør mot", "Provoked": "Provoserte", "Hybridises with": "Krysses med", "Echoes": "Ekko av", "Subgenre of": "Undersjanger av", "Subgenres": "Undersjangre" }, thesis: "Kjerneidé", prin: "Designprinsipper", anti: "Antimønstre", pal: "Fargepalett", lin: "Slektslinje", none: "Ingen registrerte koblinger.", use: "Bruk den", demo: "åpne i demoen", src: "kilde-JSON", also: "også", sfx: "stil", prev: "forhåndsvisning", home: "Design Ontology" },
};
const DOM = {
  ru: { architecture: "архитектура", ceramics: "керамика", cuisine: "кухня", fashion: "мода", film: "кино", game: "игры", "graphic-movement": "графические течения", icon: "иконки", industrial: "промышленный дизайн", interior: "интерьер", internet: "веб", logo: "логотипы", painting: "живопись", photography: "фотография", print: "печать", typeface: "шрифты" },
  no: { architecture: "arkitektur", ceramics: "keramikk", cuisine: "kjøkken", fashion: "mote", film: "film", game: "spill", "graphic-movement": "grafiske retninger", icon: "ikoner", industrial: "industridesign", interior: "interiør", internet: "nett", logo: "logoer", painting: "maleri", photography: "fotografi", print: "trykk", typeface: "skrifttyper" },
};
const dom = (l, d) => DOM[l]?.[d] || pretty(d);
const LNAME = { en: "EN", ru: "RU", no: "NO" };
const dirOf = (l) => (l === "en" ? "style" : `${l}/style`);
const tr = (l, id) => (l === "en" ? null : existsSync(`i18n/${l}/styles/${id}.json`) ? JSON.parse(readFileSync(`i18n/${l}/styles/${id}.json`, "utf8")) : null);

mkdirSync("style", { recursive: true });
const written = [];
const all = [];
for (const dom of readdirSync("data")) {
  const dir = `data/${dom}/styles`;
  if (!existsSync(dir)) continue;
  for (const f of readdirSync(dir).filter((n) => n.endsWith(".json"))) all.push(JSON.parse(readFileSync(`${dir}/${f}`, "utf8")));
}
const nameIn = (l, id) => tr(l, id)?.name || byId.get(id)?.name;
for (const s of all) {
  const have = LANGS.filter((l) => l === "en" || tr(l, s.id));
  for (const l of have) {
    const t = T[l], x = tr(l, s.id) || {};
    mkdirSync(dirOf(l), { recursive: true });
    const url = `${BASE}${dirOf(l)}/${s.id}.html`;
    const up = l === "en" ? "../" : "../../";
    const img = existsSync(`assets/og/style/${s.id}.jpg`) ? `${BASE}assets/og/style/${s.id}.jpg` : `${BASE}assets/og.png`;
    const name = x.name || s.name;
    const title = `${name}: ${dom(l, s.domain)} ${t.sfx} · ${SITE}`;
    const desc = x.summary || s.summary;
    const groups = new Map();
    for (const r of out.get(s.id) || []) {
      const k = REL[`${r.dir}:${r.type}`]; if (!k || !byId.has(r.id)) continue;
      if (!groups.has(k)) groups.set(k, new Set());
      groups.get(k).add(r.id);
    }
    const rel = [...groups].map(([k, ids]) => `<dt>${t.rel[k] || k}</dt><dd>${[...ids].map((i) => `<a href="${i}.html">${esc(nameIn(l, i))}</a>`).join(", ")}</dd>`).join("");
    const pal = (s.color?.palette || []).map((p, i) => `<li><span class="sw" style="background:${esc(p.hex)}"></span><b>${esc(x.palette?.[i]?.name || p.name)}</b> ${esc(p.hex)} <i>${esc(x.palette?.[i]?.role || p.role)}</i></li>`).join("");
    const list = (a) => (a || []).map((v) => `<li>${esc(v)}</li>`).join("");
    const pv = existsSync(`demo/previews/${s.domain}/${s.id}.webp`) ? `<img src="${up}demo/previews/${s.domain}/${s.id}.webp" alt="${esc(name)} ${t.prev}" width="640" loading="lazy">` : "";
    const ld = { "@context": "https://schema.org", "@type": "Article", headline: name, description: desc, url, inLanguage: HL[l], image: img, isPartOf: { "@type": "WebSite", name: SITE, url: BASE }, license: "https://creativecommons.org/licenses/by/4.0/" };
    const tp = s.time_period?.label ? ` · ${esc(s.time_period.label)}` : "";
    const aliases = x.aliases || s.aliases;
    const alt = have.map((h) => `<link rel="alternate" hreflang="${HL[h]}" href="${BASE}${dirOf(h)}/${s.id}.html">`).join("\n") + `\n<link rel="alternate" hreflang="x-default" href="${BASE}style/${s.id}.html">`;
    const sw = have.map((h) => (h === l ? `<b>${LNAME[h]}</b>` : `<a href="${up}${dirOf(h)}/${s.id}.html" hreflang="${HL[h]}">${LNAME[h]}</a>`)).join(" · ");
    const html = `<!doctype html>
<html lang="${HL[l]}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${url}">
${alt}
<meta property="og:type" content="article"><meta property="og:site_name" content="${SITE}"><meta property="og:locale" content="${{ en: "en_US", ru: "ru_RU", no: "nb_NO" }[l]}">
<meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${url}"><meta property="og:image" content="${img}">
<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${esc(desc)}"><meta name="twitter:image" content="${img}">
<script type="application/ld+json">${JSON.stringify(ld)}</script>
<style>body{font:16px/1.6 system-ui,sans-serif;max-width:760px;margin:2rem auto;padding:0 16px;color:#1b1b1f}a{color:#0b5fff}.sw{display:inline-block;width:1em;height:1em;border:1px solid #0003;vertical-align:-2px;margin-right:6px}ul{padding-left:1.2em}dt{font-weight:600;margin-top:.6em}dd{margin:0}img{max-width:100%;height:auto;border-radius:8px}nav{font-size:.9em;display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap}</style>
</head><body>
<nav><span><a href="${up}demo/">${t.home}</a> › <a href="${up}demo/#${s.id}">${esc(dom(l, s.domain))}</a></span><span class="lang">${sw}</span></nav>
<h1>${esc(name)}</h1>
<p><em>${esc(dom(l, s.domain))}${tp}${aliases?.length ? ` · ${t.also}: ` + esc(aliases.join(", ")) : ""}</em></p>
<p>${esc(desc)}</p>${pv}
<h2>${t.thesis}</h2><p>${esc(x.core_thesis || s.philosophy?.core_thesis)}</p>
<h2>${t.prin}</h2><ul>${list(x.design_principles || s.philosophy?.design_principles)}</ul>
<h2>${t.anti}</h2><ul>${list(x.anti_patterns || s.philosophy?.anti_patterns)}</ul>
<h2>${t.pal}</h2><ul style="list-style:none;padding:0">${pal}</ul>
<h2>${t.lin}</h2><dl>${rel || `<dd>${t.none}</dd>`}</dl>
<h2>${t.use}</h2><p><a href="${up}skills/${s.id}/SKILL.md">SKILL.md</a> · <a href="${up}skills/${s.id}/tokens.css">tokens.css</a> · <a href="https://github.com/musicalbee/design-ontology/blob/main/data/${s.domain}/styles/${s.id}.json">${t.src}</a> · <a href="${up}demo/#${s.id}">${t.demo}</a></p>
</body></html>
`;
    writeFileSync(`${dirOf(l)}/${s.id}.html`, html);
    written.push(`${l}/${s.id}`);
  }
}
// Language hubs: style/index.html (en), ru/index.html, no/index.html. One crawlable list of every style per language.
const H1 = { en: "Design styles", ru: "Стили дизайна", no: "Designstiler" };
const SUB = { en: "Every style in the ontology, by domain.", ru: "Все стили онтологии по областям.", no: "Alle stiler i ontologien, etter område." };
for (const l of LANGS) {
  const up = l === "en" ? "../" : "../";
  const dir = l === "en" ? "style" : l;
  const base = l === "en" ? "" : "style/";
  const by = new Map();
  for (const s of all) { if (l !== "en" && !tr(l, s.id)) continue; if (!by.has(s.domain)) by.set(s.domain, []); by.get(s.domain).push(s); }
  const url = `${BASE}${dir}/`;
  const alt = LANGS.map((h) => `<link rel="alternate" hreflang="${HL[h]}" href="${BASE}${h === "en" ? "style" : h}/">`).join("\n") + `\n<link rel="alternate" hreflang="x-default" href="${BASE}style/">`;
  const sw = LANGS.map((h) => (h === l ? `<b>${LNAME[h]}</b>` : `<a href="../${h === "en" ? "style" : h}/" hreflang="${HL[h]}">${LNAME[h]}</a>`)).join(" · ");
  const secs = [...by].sort(([a], [b]) => dom(l, a).localeCompare(dom(l, b))).map(([d, ss]) => `<h2>${esc(dom(l, d))} <small>(${ss.length})</small></h2><ul>${ss.sort((a, b) => nameIn(l, a.id).localeCompare(nameIn(l, b.id))).map((s) => `<li><a href="${base}${s.id}.html">${esc(nameIn(l, s.id))}</a></li>`).join("")}</ul>`).join("");
  const title = `${H1[l]} · ${SITE}`;
  const img = `${BASE}assets/og.png`;
  mkdirSync(dir, { recursive: true });
  writeFileSync(`${dir}/index.html`, `<!doctype html>
<html lang="${HL[l]}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(title)}</title><meta name="description" content="${esc(SUB[l])} ${all.length}">
<link rel="canonical" href="${url}">
${alt}
<meta property="og:type" content="website"><meta property="og:site_name" content="${SITE}"><meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(SUB[l])}"><meta property="og:url" content="${url}"><meta property="og:image" content="${img}">
<meta name="twitter:card" content="summary_large_image">
<style>body{font:16px/1.6 system-ui,sans-serif;max-width:900px;margin:2rem auto;padding:0 16px;color:#1b1b1f}a{color:#0b5fff}ul{columns:3 200px;padding-left:1.2em}h2 small{color:#777;font-weight:400}nav{font-size:.9em;display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap}</style>
</head><body>
<nav><span><a href="${up}demo/">${T[l].home}</a></span><span class="lang">${sw}</span></nav>
<h1>${H1[l]}</h1><p>${SUB[l]}</p>${secs}
</body></html>
`);
}
console.log(`pages: ${written.length} style pages`);
