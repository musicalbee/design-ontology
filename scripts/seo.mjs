// Idempotent SEO pass for the demo: canonical, Open Graph, Twitter card, a sitemap, robots.txt
// and the search-console verification tags. Run: node scripts/seo.mjs
// Verification tokens live in seo.config.json (public by design: they sit in page source anyway).
import { readFileSync, writeFileSync, readdirSync, existsSync } from "node:fs";
import { execSync } from "node:child_process";

const BASE = "https://musicalbee.github.io/design-ontology/";
const SITE = "Design Ontology";
const imgFor = (name) => (existsSync(`assets/og/${name.replace(".html", "")}.jpg`) ? `${BASE}assets/og/${name.replace(".html", "")}.jpg` : BASE + "assets/og.png");
const SKIP_INDEX = new Set(["design.html", "kit.html"]); // redirect stub, internal kit
const cfg = existsSync("seo.config.json") ? JSON.parse(readFileSync("seo.config.json", "utf8")) : {};
const esc = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
const START = "<!-- seo:start -->", END = "<!-- seo:end -->";
const lastmod = (f) => {
  try { return execSync(`git log -1 --format=%cs -- ${f}`).toString().trim() || null; } catch { return null; }
};

const pages = [];
for (const name of readdirSync("demo").filter((n) => n.endsWith(".html")).sort()) {
  const path = `demo/${name}`;
  let html = readFileSync(path, "utf8");
  html = html.replace(new RegExp(`${START}[\\s\\S]*?${END}\\n?`), "");
  if (SKIP_INDEX.has(name)) { writeFileSync(path, html); continue; }
  let title = (html.match(/<title>([^<]*)<\/title>/) || [])[1]?.trim();
  const desc = (html.match(/<meta name="description" content="([^"]*)"/) || [])[1];
  if (!title || !desc) { console.error(`skip ${path}: title/description missing`); continue; }
  const full = title.includes(SITE) ? title : `${title} · ${SITE}`;
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${full}</title>`);
  const url = name === "index.html" ? BASE + "demo/" : BASE + "demo/" + name;
  const IMG = name === "index.html" ? BASE + "assets/og.png" : imgFor(name);
  const tags = [
    `<link rel="canonical" href="${url}">`,
    `<meta property="og:type" content="website">`,
    `<meta property="og:site_name" content="${SITE}">`,
    `<meta property="og:title" content="${esc(full)}">`,
    `<meta property="og:description" content="${desc}">`,
    `<meta property="og:url" content="${url}">`,
    `<meta property="og:image" content="${IMG}">`,
    `<meta property="og:image:width" content="${IMG.endsWith(".jpg") ? 1200 : 1280}">`,
    `<meta property="og:image:height" content="${IMG.endsWith(".jpg") ? 630 : 640}">`,
    `<meta property="og:image:alt" content="Design Ontology: design styles as data that compile into agent skills">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="twitter:title" content="${esc(full)}">`,
    `<meta name="twitter:description" content="${desc}">`,
    `<meta name="twitter:image" content="${IMG}">`,
  ];
  if (name === "index.html") {
    if (cfg.google) tags.push(`<meta name="google-site-verification" content="${cfg.google}">`);
    if (cfg.yandex) tags.push(`<meta name="yandex-verification" content="${cfg.yandex}">`);
    if (cfg.bing) tags.push(`<meta name="msvalidate.01" content="${cfg.bing}">`);
  }
  html = html.replace(/(<meta name="description"[^>]*>\n?)/, `$1${START}\n${tags.join("\n")}\n${END}\n`);
  writeFileSync(path, html);
  pages.push({ url, mod: lastmod(path) });
}

// Generated style pages (scripts/pages.mjs): one canonical URL each per language, all in the sitemap with hreflang.
const HLS = { style: "en", "ru/style": "ru", "no/style": "nb" };
const altOf = (n) => Object.entries(HLS).filter(([d]) => existsSync(`${d}/${n}`)).map(([d, h]) => ({ h, href: `${BASE}${d}/${n}` }));
for (const d of Object.keys(HLS)) {
  if (!existsSync(d)) continue;
  const mod = lastmod(d);
  for (const n of readdirSync(d).filter((x) => x.endsWith(".html")).sort()) pages.push({ url: `${BASE}${d}/${n}`, mod, alt: altOf(n), xdef: `${BASE}style/${n}` });
}

// Language hubs.
{
  const hub = Object.entries({ style: "en", ru: "ru", no: "nb" }).filter(([d]) => existsSync(`${d}/index.html`));
  for (const [d] of hub) pages.push({ url: `${BASE}${d}/`, mod: lastmod(d), alt: hub.map(([x, h]) => ({ h, href: `${BASE}${x}/` })), xdef: `${BASE}style/` });
}

// Root: GitHub Pages serves nothing at /design-ontology/ without an index.
writeFileSync("index.html", `<!doctype html>
<html lang="en"><head><meta charset="utf-8">
<title>${SITE}: every domain of design, style by style</title>
<meta name="description" content="Design styles as data. Each style compiles into a SKILL.md and tokens.css that any coding agent can load.">
<link rel="canonical" href="${BASE}demo/">
<meta http-equiv="refresh" content="0; url=demo/">
<meta property="og:type" content="website"><meta property="og:title" content="${SITE}">
<meta property="og:description" content="Design styles as data. Each style compiles into a SKILL.md and tokens.css that any coding agent can load.">
<meta property="og:url" content="${BASE}"><meta property="og:image" content="${BASE}assets/og.png">
<meta name="twitter:card" content="summary_large_image">
<link rel="alternate" type="text/plain" title="llms.txt" href="llms.txt">
</head><body><p><a href="demo/">Open the demo</a> · <a href="https://github.com/musicalbee/design-ontology">GitHub</a></p></body></html>
`);

writeFileSync("sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${pages.map((p) => `  <url><loc>${p.url}</loc>${p.mod ? `<lastmod>${p.mod}</lastmod>` : ""}${p.alt ? p.alt.map((a) => `<xhtml:link rel="alternate" hreflang="${a.h}" href="${a.href}"/>`).join("") + `<xhtml:link rel="alternate" hreflang="x-default" href="${p.xdef}"/>` : ""}</url>`).join("\n")}
</urlset>
`);
writeFileSync("robots.txt", `User-agent: *\nAllow: /\n\nSitemap: ${BASE}sitemap.xml\n`);
console.log(`seo: ${pages.length} pages, sitemap.xml, robots.txt, index.html`);
