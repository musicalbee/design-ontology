// Draw one type specimen for each typeface style from one of its open fonts. No image model: the outlines come from the font.
//
//   npm run specimens [-- --only garalde-old-style,didone-serif]
//
// For each style it takes the evidence item of kind "font" (.ttf) inside the metrics of the style and with the widest
// script coverage (Latin, Latin Extended, Cyrillic and Greek pangrams), downloads it (cache in the OS temp
// folder), measures the x-height and the stroke contrast of the o, warns when a measure is outside the metrics ranges
// of the style, and writes the glyph outlines as SVG paths. An SVG in an <img> cannot load a web font, so the letters
// are paths. A variable font gives its default instance. There is no kerning.
// Output: demo/previews/typeface/<id>.svg and demo/previews/typeface/manifest.json.
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join } from "node:path";
import { ROOT, loadStyleFiles } from "./lib.js";
import { TrueType, measure, pathData } from "./type/truetype.js";
import { fontBytes } from "./type/fonts.js";

const W = 1152, H = 768, M = 64;
const INK = "#1b1a17", MUTED = "#5f5b52", GUIDE = "#c9c3b6", PAPER = "#fbf9f4";
const OUT = join(ROOT, "demo", "previews", "typeface");

interface FontEvidence { title: string; kind: string; licence: string; file?: string; maker?: string }
interface Entry { file: string; kind: "specimen"; font: string; subject: string; model: string; licence: string; width: number; height: number; generated: string }

const arg = (name: string) => { const i = process.argv.indexOf(name); return i > 0 ? process.argv[i + 1] : undefined; };
const only = arg("--only")?.split(",");
const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/** One line of text as a path, with its left edge at x and its baseline at y, at a size in px. */
function line(f: TrueType, text: string, x: number, y: number, size: number): string {
  const s = size / f.upm;
  return f.layout(text).map((g) => pathData(f.contours(g.gid), x + g.x * s, y, s)).join("");
}
/** The largest size up to max at which the text fits the width. */
const fit = (f: TrueType, text: string, width: number, max: number) => Math.min(max, (width * f.upm) / f.width(text));

// The pangrams. Each one uses every letter of its alphabet, so a gap in the font shows at once.
const SCRIPTS = [
  { tag: "Latin", lang: "English", text: "Sphinx of black quartz, judge my vow." },
  { tag: "Latin Extended", lang: "Norwegian", text: "Vår sære Zulu fra badeøya spilte jo whist og quickstep i min taxi." },
  { tag: "Cyrillic", lang: "Russian", text: "Съешь же ещё этих мягких французских булок, да выпей чаю." },
  { tag: "Greek", lang: "Greek", text: "Ξεσκεπάζω την ψυχοφθόρα βδελυγμία." },
] as const;
const covers = (f: TrueType, text: string) => [...text].every((c) => /[\s.,!?:;]/.test(c) || f.glyphId(c) > 0);
/** The scripts that a font covers in full. */
export const coverage = (f: TrueType) => SCRIPTS.filter((s) => covers(f, s.text)).map((s) => s.tag);

/** Lines of text wrapped to a width, at one size. */
function wrap(f: TrueType, text: string, width: number, size: number): string[] {
  const s = size / f.upm, out: string[] = [];
  let cur = "";
  for (const w of text.split(" ")) {
    const next = cur ? `${cur} ${w}` : w;
    if (cur && f.width(next) * s > width) { out.push(cur); cur = w; } else cur = next;
  }
  return cur ? [...out, cur] : out;
}

function specimen(name: string, font: FontEvidence, f: TrueType, m: ReturnType<typeof measure>, ui: TrueType): string {
  const parts: string[] = [];
  // Labels are set in Inter (OFL) as outlines too, so the whole sheet uses open fonts and no system font.
  const label = (x: number, y: number, t: string, size: number, fill: string, anchor: "start" | "end" = "start") => {
    const w = (ui.width(t) * size) / ui.upm;
    parts.push(`<path fill="${fill}" d="${line(ui, t, anchor === "end" ? x - w : x, y, size)}"/>`);
  };
  const rule = (y: number, x1 = M, x2 = W - M) => parts.push(`<line x1="${x1}" x2="${x2}" y1="${y}" y2="${y}" stroke="${GUIDE}" stroke-width="1"/>`);

  label(M, 52, name.toUpperCase(), 13, INK);
  label(W - M, 52, `${font.title}${font.maker ? `  ·  ${font.maker}` : ""}`, 13, MUTED, "end");
  rule(68);

  // The hero: "Aa" (and "Жж" when the font has Cyrillic), large, with the cap height, x-height and baseline.
  const hasCyr = covers(f, SCRIPTS[2].text);
  const hero = hasCyr ? "AaЖж" : "Aag";
  const hSize = fit(f, hero, 470, 190 / m.capHeightEm);
  const base = 104 + hSize * m.capHeightEm;
  for (const y of [base - hSize * m.capHeightEm, base - hSize * m.xHeightEm, base]) rule(+y.toFixed(1), M, M + 480);
  parts.push(`<path fill="${INK}" d="${line(f, hero, M, base, hSize)}"/>`);
  label(M, Math.min(base + hSize * 0.3 + 18, 392), `cap height  ·  x-height ${m.xToCap.toFixed(2)}  ·  baseline`, 11, MUTED);

  // The character set at the right of the hero.
  const cx = M + 540, cw = W - M - cx;
  let y = 116;
  for (const t of ["ABCDEFGHIJKLM", "NOPQRSTUVWXYZ", "abcdefghijklm", "nopqrstuvwxyz", "0123456789 &?!@"]) {
    const size = fit(f, t, cw, 40);
    parts.push(`<path fill="${INK}" d="${line(f, t, cx, y, size)}"/>`);
    y += 50;
  }
  if (hasCyr) {
    const t = "АБВГДЕЁЖЗИЙКЛМН абвгдеёжзийклмн";
    parts.push(`<path fill="${INK}" d="${line(f, t, cx, y, fit(f, t, cw, 26))}"/>`);
  }

  // The pangrams, one row for each script. A script that the font does not cover says so.
  let py = 448;
  rule(py - 36);
  for (const sc of SCRIPTS) {
    label(M, py - 6, sc.tag.toUpperCase(), 11, INK);
    label(M, py + 12, sc.lang, 11, MUTED);
    const tx = M + 170, tw = W - M - tx;
    if (!covers(f, sc.text)) {
      label(tx, py, `Not in ${font.title}.`, 15, MUTED);
      py += 58;
      continue;
    }
    const size = Math.max(22, Math.min(32, fit(f, sc.text, tw, 32)));
    const lines = wrap(f, sc.text, tw, size);
    lines.forEach((l, i) => parts.push(`<path fill="${INK}" d="${line(f, l, tx, py + i * size * 1.2, size)}"/>`));
    py += 58 + (lines.length - 1) * size * 1.2;
  }

  const axes = f.axes.length ? `default instance ${f.axes.map((a) => `${a.tag} ${a.def}`).join(", ")}` : "static font";
  rule(H - 52);
  label(M, H - 28, `o contrast ${m.contrast.toFixed(1)}:1  ·  mean lower-case advance ${m.lowerAdvanceEm.toFixed(2)} em  ·  ${axes}  ·  ${font.licence}`, 12, MUTED);
  label(W - M, H - 28, `Scripts: ${coverage(f).join(", ")}`, 12, MUTED, "end");

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
const ui = new TrueType(await fontBytes("https://raw.githubusercontent.com/google/fonts/main/ofl/inter/Inter%5Bopsz,wght%5D.ttf"));

for (const { style } of loadStyleFiles("typeface").sort((a, b) => a.slug.localeCompare(b.slug))) {
  const s = style as unknown as { id: string; name: string; evidence: FontEvidence[]; metrics: { x_height_min: number; x_height_max: number; contrast_min: number; contrast_max: number } };
  if (only && !only.includes(s.id)) { if (old.images[s.id]) images[s.id] = old.images[s.id]; continue; }
  // The specimen font: a font inside the metrics of the style comes first, then the widest script coverage,
  // then the order of the evidence. So a font with Cyrillic does not win over a font that shows the style.
  const r = s.metrics;
  const inside = (m: ReturnType<typeof measure>) =>
    m.xToCap >= r.x_height_min && m.xToCap <= r.x_height_max && m.contrast >= r.contrast_min && m.contrast <= r.contrast_max;
  let font: FontEvidence | undefined, f: TrueType | undefined, best = -1;
  for (const e of s.evidence.filter((e) => e.kind === "font" && e.file?.endsWith(".ttf"))) {
    const t = new TrueType(await fontBytes(e.file!));
    const score = (inside(measure(t)) ? 10 : 0) + coverage(t).length;
    if (score > best) { best = score; font = e; f = t; }
  }
  if (!font || !f) { console.error(`error ${s.id}: no font evidence with a .ttf file`); process.exitCode = 1; continue; }
  const m = measure(f);
  if (m.xToCap < r.x_height_min || m.xToCap > r.x_height_max) { warnings++; console.warn(`warn  ${s.id}: ${font.title} x/H ${m.xToCap.toFixed(2)} is outside ${r.x_height_min}–${r.x_height_max}`); }
  if (m.contrast < r.contrast_min || m.contrast > r.contrast_max) { warnings++; console.warn(`warn  ${s.id}: ${font.title} contrast ${m.contrast.toFixed(1)} is outside ${r.contrast_min}–${r.contrast_max}`); }
  const svg = specimen(s.name, font, f, m, ui);
  const file = `${s.id}.svg`;
  const path = join(OUT, file);
  const same = existsSync(path) && readFileSync(path, "utf8") === svg;
  if (!same) writeFileSync(path, svg);
  images[s.id] = {
    file, kind: "specimen", font: font.title,
    subject: `the alphabet, the figures and pangrams; scripts: ${coverage(f).join(", ")}`,
    model: "outlines drawn from the font file (no image model)", licence: font.licence,
    width: W, height: H,
    generated: same && old.images[s.id] ? old.images[s.id].generated : new Date().toISOString(),
  };
  console.log(`${same ? "same " : "wrote"} ${file}  x/H ${m.xToCap.toFixed(2)}  contrast ${m.contrast.toFixed(1)}`);
}

writeFileSync(manifestPath, JSON.stringify({ images }, null, 2) + "\n");
console.log(`${Object.keys(images).length} specimens · ${warnings} warnings`);
