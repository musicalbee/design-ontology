// Set one fictional brand, "Brennevik Coffee Roasters", as a logo lockup for each logo style: the symbol from the
// image model above, the wordmark below it in an open font of the era of the style.
//
//   npm run previews -- --domain logo     (the symbols: demo/previews/logo/<id>.webp)
//   npm run lockups [-- --only flat-logo]  (the lockups: demo/previews/logo/lockup/<id>.webp)
//
// The image model cannot set letters reliably, so the letters come from the font as SVG paths (no kerning, like the
// type specimens). The script finds the symbol on its plain ground, crops it with a soft edge, and puts it above the
// wordmark on the same ground. The ink of the wordmark is the darkest colour of the symbol, stepped towards black
// until it has 4.5:1 on the ground. Needs dwebp, cwebp and rsvg-convert on the PATH.
import { readFileSync, writeFileSync, mkdirSync, rmSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { TrueType, pathData } from "./type/truetype.js";
import { fontBytes } from "./type/fonts.js";

const W = 1152, H = 768;
const BRAND = { name: "Brennevik", line: "Coffee Roasters" };
const DIR = "demo/previews/logo";
const GF = "https://raw.githubusercontent.com/google/fonts/main/ofl/";

// One font for each style, chosen for the era of the style. All are OFL-1.1 from the google/fonts repository.
interface Set { font: string; maker: string; file: string; caps: "upper" | "lower" | "title"; track: number }
const SETS: Record<string, Set> = {
  "art-nouveau-monogram": { font: "Federant", maker: "Sorkin Type", file: "federant/Federant-Regular.ttf", caps: "title", track: 0.02 },
  "victorian-trademark": { font: "Rye", maker: "Nicole Fally", file: "rye/Rye-Regular.ttf", caps: "upper", track: 0.03 },
  "emblem-badge": { font: "Bevan", maker: "Vernon Adams", file: "bevan/Bevan-Regular.ttf", caps: "upper", track: 0.04 },
  "swiss-modernist-mark": { font: "Archivo Black", maker: "Omnibus-Type", file: "archivoblack/ArchivoBlack-Regular.ttf", caps: "lower", track: -0.01 },
  "geometric-symbol": { font: "Questrial", maker: "Joe Prince", file: "questrial/Questrial-Regular.ttf", caps: "upper", track: 0.18 },
  "glossy-3d-logo": { font: "Varela Round", maker: "Joe Prince", file: "varelaround/VarelaRound-Regular.ttf", caps: "title", track: 0 },
  "flat-logo": { font: "Poppins SemiBold", maker: "Indian Type Foundry", file: "poppins/Poppins-SemiBold.ttf", caps: "lower", track: 0 },
  "minimal-wordmark": { font: "Jost", maker: "indestructible type*", file: "jost/Jost%5Bwght%5D.ttf", caps: "lower", track: 0.06 },
};

const arg = (name: string) => { const i = process.argv.indexOf(name); return i > 0 ? process.argv[i + 1] : undefined; };
const only = arg("--only")?.split(",");
const tmp = join(tmpdir(), "design-ontology-lockups");
mkdirSync(tmp, { recursive: true });
mkdirSync(join(DIR, "lockup"), { recursive: true });

const cased = (s: string, c: Set["caps"]) => (c === "upper" ? s.toUpperCase() : c === "lower" ? s.toLowerCase() : s);

/** A line of text as a path with letter spacing (em units), centred on cx, baseline at y. */
function line(f: TrueType, text: string, cx: number, y: number, size: number, track: number): string {
  const s = size / f.upm, gap = track * f.upm;
  const glyphs = [...text].map((ch) => f.glyphId(ch));
  const width = glyphs.reduce((w, g) => w + f.advance(g), 0) + gap * (glyphs.length - 1);
  let x = cx / s - width / 2;
  return glyphs.map((g) => { const d = pathData(f.contours(g), x * s, y, s); x += f.advance(g) + gap; return d; }).join("");
}
const lineWidth = (f: TrueType, text: string, size: number, track: number) =>
  ((f.width(text) + track * f.upm * ([...text].length - 1)) * size) / f.upm;

/** Decode a WebP to RGB pixels through a binary PPM. */
function pixels(webp: string) {
  const ppm = join(tmp, "in.ppm");
  execFileSync("dwebp", ["-quiet", "-ppm", webp, "-o", ppm]);
  const b = readFileSync(ppm);
  const head = b.subarray(0, 40).toString("latin1").split(/\s+/);
  const w = +head[1], h = +head[2];
  const off = b.length - w * h * 3;
  return { w, h, at: (x: number, y: number) => { const i = off + (y * w + x) * 3; return [b[i], b[i + 1], b[i + 2]]; } };
}

const lum = (c: number[]) => c.map((v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; })
  .reduce((a, v, i) => a + v * [0.2126, 0.7152, 0.0722][i], 0);
const ratio = (a: number[], b: number[]) => { const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p); return (x + 0.05) / (y + 0.05); };
const hex = (c: number[]) => "#" + c.map((v) => Math.round(v).toString(16).padStart(2, "0")).join("");
const median = (v: number[]) => v.sort((a, b) => a - b)[v.length >> 1];

/** The ground colour (median of the border), the box of the symbol, and its darkest colour. */
function analyse(webp: string) {
  const p = pixels(webp);
  const border: number[][] = [];
  for (let x = 0; x < p.w; x += 4) border.push(p.at(x, 2), p.at(x, p.h - 3));
  for (let y = 0; y < p.h; y += 4) border.push(p.at(2, y), p.at(p.w - 3, y));
  const ground = [0, 1, 2].map((i) => median(border.map((c) => c[i])));
  const rows = new Array(p.h).fill(0), cols = new Array(p.w).fill(0);
  const ink: { c: number[]; l: number }[] = [];
  for (let y = 0; y < p.h; y += 1) for (let x = 0; x < p.w; x += 1) {
    const c = p.at(x, y);
    if (Math.max(...c.map((v, i) => Math.abs(v - ground[i]))) < 40) continue;
    rows[y]++; cols[x]++;
    if (!(x % 3) && !(y % 3)) ink.push({ c, l: lum(c) });
  }
  const span = (a: number[]) => { const k = a.map((n, i) => (n > 2 ? i : -1)).filter((i) => i >= 0); return [k[0], k[k.length - 1]]; };
  const [y0, y1] = span(rows), [x0, x1] = span(cols);
  // A paper ground is lighter in the middle. The colour on the edge of the crop is the one that must meet the canvas.
  const rim: number[][] = [], r = { x0: Math.max(0, x0 - 36), y0: Math.max(0, y0 - 36), x1: Math.min(p.w - 1, x1 + 36), y1: Math.min(p.h - 1, y1 + 36) };
  for (let x = r.x0; x <= r.x1; x += 3) rim.push(p.at(x, r.y0), p.at(x, r.y1));
  for (let y = r.y0; y <= r.y1; y += 3) rim.push(p.at(r.x0, y), p.at(r.x1, y));
  const edge = [0, 1, 2].map((i) => median(rim.map((c) => c[i])));
  ink.sort((a, b) => a.l - b.l);
  const dark = ink.slice(0, Math.max(1, ink.length >> 3));
  let c = [0, 1, 2].map((i) => dark.reduce((s, d) => s + d.c[i], 0) / dark.length);
  const toward = lum(edge) > 0.4 ? 0 : 255;
  while (ratio(c, edge) < 4.5) c = c.map((v) => v + (toward - v) * 0.1);
  return { ground: edge, box: { x0, y0, x1, y1 }, ink: hex(c) };
}

const manifestPath = join(DIR, "manifest.json");
const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));
for (const [id, set] of Object.entries(SETS)) {
  if (only && !only.includes(id)) continue;
  const rec = manifest.images[id];
  if (!rec) { console.warn(`${id}: no symbol; run npm run previews -- --domain logo first`); continue; }
  const symbol: string = rec.symbol ?? rec.file;
  const src = join(DIR, symbol);
  const { ground, box, ink } = analyse(src);
  const f = new TrueType(await fontBytes(GF + set.file));

  // The symbol sits in the top part, at most 440 px high, with a soft edge of 26 px around the crop.
  const pad = 36;
  const cx0 = Math.max(0, box.x0 - pad), cy0 = Math.max(0, box.y0 - pad);
  const cw = Math.min(W, box.x1 + pad) - cx0, ch = Math.min(H, box.y1 + pad) - cy0;
  const k = Math.min(440 / ch, 760 / cw);
  const sw = cw * k, sh = ch * k, sx = (W - sw) / 2, sy = 300 - sh / 2;

  const name = cased(BRAND.name, set.caps), sub = cased(BRAND.line, set.caps === "lower" ? "lower" : "upper");
  const size = Math.min(96, (600 / lineWidth(f, name, 100, set.track)) * 100);
  const subSize = Math.min(24, (420 / lineWidth(f, sub, 100, 0.22)) * 100);
  const base = 600 + size * 0.7;

  const png = join(tmp, `${id}.png`);
  execFileSync("dwebp", ["-quiet", src, "-o", png]);
  const img = readFileSync(png).toString("base64");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
<defs><filter id="soft" x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur stdDeviation="14"/></filter>
<mask id="m"><rect x="${sx + 26}" y="${sy + 26}" width="${sw - 52}" height="${sh - 52}" fill="#fff" filter="url(#soft)"/></mask></defs>
<rect width="${W}" height="${H}" fill="${hex(ground)}"/>
<g mask="url(#m)"><image x="${sx - cx0 * k}" y="${sy - cy0 * k}" width="${W * k}" height="${H * k}" xlink:href="data:image/png;base64,${img}"/></g>
<path fill="${ink}" d="${line(f, name, W / 2, base, size, set.track)}"/>
<path fill="${ink}" d="${line(f, sub, W / 2, base + subSize + 22, subSize, 0.22)}"/>
</svg>`;
  const out = join(tmp, `${id}.lockup.png`);
  writeFileSync(join(tmp, `${id}.svg`), svg);
  execFileSync("rsvg-convert", ["-o", out, join(tmp, `${id}.svg`)]);
  execFileSync("cwebp", ["-quiet", "-q", "86", out, "-o", join(DIR, "lockup", `${id}.webp`)]);
  manifest.images[id] = { ...rec, file: `lockup/${id}.webp`, symbol,
    wordmark: { brand: `${BRAND.name} ${BRAND.line} (fictional)`, font: set.font, maker: set.maker, licence: "OFL-1.1", file: GF + set.file } };
  console.log(`${id}: ${set.font}, ink ${ink} on ${hex(ground)}`);
}
writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + "\n");
rmSync(tmp, { recursive: true, force: true });
