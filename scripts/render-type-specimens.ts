// Draw one type specimen for each typeface style from its first open font. No image model: the outlines come from the font.
//
//   npm run specimens [-- --only garalde-old-style,didone-serif]
//
// For each style it takes the first evidence item of kind "font" with a .ttf file, downloads it (cache in the OS temp
// folder), measures the x-height and the stroke contrast of the o, warns when a measure is outside the metrics ranges
// of the style, and writes the glyph outlines as SVG paths. An SVG in an <img> cannot load a web font, so the letters
// are paths. A variable font gives its default instance. There is no kerning.
// Output: demo/previews/typeface/<id>.svg and demo/previews/typeface/manifest.json.
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { createHash } from "node:crypto";
import { ROOT, loadStyleFiles } from "./lib.js";
import { TrueType, measure, pathData } from "./type/truetype.js";

const W = 1152, H = 768, M = 64;
const INK = "#1b1a17", MUTED = "#6b675e", GUIDE = "#c9c3b6", PAPER = "#fbf9f4";
const UI = "font-family:system-ui,-apple-system,'Segoe UI',sans-serif";
const OUT = join(ROOT, "demo", "previews", "typeface");

interface FontEvidence { title: string; kind: string; licence: string; file?: string; maker?: string }
interface Entry { file: string; kind: "specimen"; font: string; subject: string; model: string; licence: string; width: number; height: number; generated: string }

const arg = (name: string) => { const i = process.argv.indexOf(name); return i > 0 ? process.argv[i + 1] : undefined; };
const only = arg("--only")?.split(",");
const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

async function fontBytes(url: string): Promise<Uint8Array> {
  const dir = join(tmpdir(), "design-ontology-fonts");
  mkdirSync(dir, { recursive: true });
  const path = join(dir, createHash("sha1").update(url).digest("hex").slice(0, 16) + ".ttf");
  if (existsSync(path)) return readFileSync(path);
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${url}: HTTP ${res.status}`);
  const buf = new Uint8Array(await res.arrayBuffer());
  writeFileSync(path, buf);
  return buf;
}

/** One line of text as a path, with its left edge at x and its baseline at y, at a size in px. */
function line(f: TrueType, text: string, x: number, y: number, size: number): string {
  const s = size / f.upm;
  return f.layout(text).map((g) => pathData(f.contours(g.gid), x + g.x * s, y, s)).join("");
}
/** The largest size up to max at which the text fits the width. */
const fit = (f: TrueType, text: string, width: number, max: number) => Math.min(max, (width * f.upm) / f.width(text));

function specimen(name: string, font: FontEvidence, f: TrueType, m: ReturnType<typeof measure>): string {
  const inner = W - 2 * M;
  const parts: string[] = [];
  const label = (x: number, y: number, t: string, size = 15, fill = MUTED, anchor = "start") =>
    parts.push(`<text x="${x}" y="${y}" font-size="${size}" fill="${fill}" text-anchor="${anchor}" style="${UI}">${esc(t)}</text>`);

  label(M, 58, name.toUpperCase(), 15, INK);
  label(W - M, 58, `${font.title}${font.maker ? ` · ${font.maker}` : ""}`, 15, MUTED, "end");

  // Display word with the guide lines for the cap height, the x-height and the baseline.
  const word = "Hamburgefonstiv";
  const dSize = fit(f, word, inner - 110, 230 / m.capHeightEm);
  const base = 112 + dSize * m.capHeightEm;
  const capY = base - dSize * m.capHeightEm, xY = base - dSize * m.xHeightEm;
  for (const [y, t] of [[capY, "cap height"], [xY, "x-height"], [base, "baseline"]] as const) {
    parts.push(`<line x1="${M}" x2="${W - M}" y1="${y.toFixed(1)}" y2="${y.toFixed(1)}" stroke="${GUIDE}" stroke-width="1"/>`);
    label(W - M, y - 5, t, 12, MUTED, "end");
  }
  parts.push(`<path fill="${INK}" d="${line(f, word, M, base, dSize)}"/>`);

  // Alphabet, figures, pangram.
  let y = base + 118;
  for (const [text, max] of [["ABCDEFGHIJKLMNOPQRSTUVWXYZ", 52], ["abcdefghijklmnopqrstuvwxyz", 52], ["0123456789 &?!.,;:", 52], ["Sphinx of black quartz, judge my vow.", 46]] as const) {
    const size = fit(f, text, inner, max);
    parts.push(`<path fill="${INK}" d="${line(f, text, M, y, size)}"/>`);
    y += Math.max(84, size * 1.6);
  }

  const axes = f.axes.length ? `default instance ${f.axes.map((a) => `${a.tag} ${a.def}`).join(", ")}` : "static font";
  parts.push(`<line x1="${M}" x2="${W - M}" y1="${H - 62}" y2="${H - 62}" stroke="${GUIDE}" stroke-width="1"/>`);
  label(M, H - 34, `x-height / cap height ${m.xToCap.toFixed(2)} · o contrast ${m.contrast.toFixed(1)}:1 · mean lower-case advance ${m.lowerAdvanceEm.toFixed(2)} em · ${axes} · ${font.licence}`, 14);

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(`${name}: specimen of ${font.title}`)}">
<rect width="${W}" height="${H}" fill="${PAPER}"/>
${parts.join("\n")}
</svg>
`;
}

const manifestPath = join(OUT, "manifest.json");
const old: { images: Record<string, Entry> } = existsSync(manifestPath) ? JSON.parse(readFileSync(manifestPath, "utf8")) : { images: {} };
const images: Record<string, Entry> = {};
mkdirSync(OUT, { recursive: true });
let warnings = 0;

for (const { style } of loadStyleFiles("typeface").sort((a, b) => a.slug.localeCompare(b.slug))) {
  const s = style as unknown as { id: string; name: string; evidence: FontEvidence[]; metrics: { x_height_min: number; x_height_max: number; contrast_min: number; contrast_max: number } };
  if (only && !only.includes(s.id)) { if (old.images[s.id]) images[s.id] = old.images[s.id]; continue; }
  const font = s.evidence.find((e) => e.kind === "font" && e.file?.endsWith(".ttf"));
  if (!font?.file) { console.error(`error ${s.id}: no font evidence with a .ttf file`); process.exitCode = 1; continue; }
  const f = new TrueType(await fontBytes(font.file));
  const m = measure(f);
  const r = s.metrics;
  if (m.xToCap < r.x_height_min || m.xToCap > r.x_height_max) { warnings++; console.warn(`warn  ${s.id}: ${font.title} x/H ${m.xToCap.toFixed(2)} is outside ${r.x_height_min}–${r.x_height_max}`); }
  if (m.contrast < r.contrast_min || m.contrast > r.contrast_max) { warnings++; console.warn(`warn  ${s.id}: ${font.title} contrast ${m.contrast.toFixed(1)} is outside ${r.contrast_min}–${r.contrast_max}`); }
  const svg = specimen(s.name, font, f, m);
  const file = `${s.id}.svg`;
  const path = join(OUT, file);
  const same = existsSync(path) && readFileSync(path, "utf8") === svg;
  if (!same) writeFileSync(path, svg);
  images[s.id] = {
    file, kind: "specimen", font: font.title,
    subject: "Hamburgefonstiv, the alphabet, the figures and a pangram",
    model: "outlines drawn from the font file (no image model)", licence: font.licence,
    width: W, height: H,
    generated: same && old.images[s.id] ? old.images[s.id].generated : new Date().toISOString(),
  };
  console.log(`${same ? "same " : "wrote"} ${file}  x/H ${m.xToCap.toFixed(2)}  contrast ${m.contrast.toFixed(1)}`);
}

writeFileSync(manifestPath, JSON.stringify({ images }, null, 2) + "\n");
console.log(`${Object.keys(images).length} specimens · ${warnings} warnings`);
