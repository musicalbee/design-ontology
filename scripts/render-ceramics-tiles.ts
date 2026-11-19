// Draw one board of glaze test tiles for each ceramics style. No image model: the board is computed from the clay,
// glaze and decoration rules of the style.
//
//   npm run tiles [-- --only delftware,raku-tea-bowl]
//
// A potter tests a glaze on a small fired tile: the glaze covers the top of the tile and stops above the foot, so that
// the bare clay body shows under it. The board shows up to 8 such tiles. The signature pieces of the style come first
// (each one a body, a glaze and a decoration), then the other glazes of the style on the main body. Each tile draws
// the surface of the glaze (gloss, crackle, crystals, hare's fur, salt peel, ash runs, lava craters) and the mark of
// the decoration (brush work, print, relief, inlay, sprigs, lustre, gold repair), in the colours of the style palette.
// Under each tile: the object, the glaze and the decoration with the year and place of their origin.
// A time line at the foot puts the origin of each body, glaze and decoration against the start year of the style:
// the history of clay and glaze.
// The script reads these fields of the style:
//   signatures.pieces          the first tiles: {object, body, glaze, decoration}
//   glaze.glazes, bodies       the other tiles: each other glaze on the first primary body
//   palette.colours            the glaze and decoration colours, in turn
// Output: demo/previews/ceramics/<id>.svg and demo/previews/ceramics/manifest.json.
import { writeFileSync, mkdirSync, existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { ROOT, loadStyleFiles } from "./lib.js";
import { loadCeramicsVocabulary } from "./ceramics.js";

const W = 1152, H = 768;
const X0 = 56, TW = 240, TH = 190, GAP = 26, Y0 = 104, ROW = TH + 74;
const TEXT = "#1d1b17", MUTED = "#5f5b52", RULE = "#d8d4ca";
const UI = "font-family:system-ui,-apple-system,'Segoe UI',sans-serif";
const OUT = join(ROOT, "demo", "previews", "ceramics");

interface Colour { name: string; hex: string; role: string }
interface Origin { year: number; circa?: boolean; place?: string; by?: string }
interface Item { id: string; name: string; kind: string; origin?: Origin }
interface Piece { object: string; form: string; body: string; glaze: string; decoration: string }
interface Style {
  id: string; name: string; branch: string; region: string; time_period: { start: number; label: string };
  bodies: { primary: string[]; secondary: string[] };
  glaze: { glazes: string[]; decorations: string[] };
  palette: { colours: Colour[] };
  signatures: { pieces: Piece[] };
}
interface Tile { object?: Item; body: Item; glaze: Item; decoration: Item }
interface Entry { file: string; kind: "tile-board"; subject: string; model: string; width: number; height: number; generated: string }

const arg = (name: string) => { const i = process.argv.indexOf(name); return i > 0 ? process.argv[i + 1] : undefined; };
const only = arg("--only")?.split(",");
const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const r1 = (n: number) => Math.round(n * 10) / 10;

/** A small seeded random generator, so that each run of the script gives the same file. */
function rng(seed: string) {
  let h = 2166136261;
  for (const c of seed) h = Math.imul(h ^ c.charCodeAt(0), 16777619);
  return () => {
    h = Math.imul(h ^ (h >>> 15), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    return ((h ^= h >>> 16) >>> 0) / 4294967296;
  };
}

// ---- Colour --------------------------------------------------------------------------------------------------------
const rgb = (hex: string) => { const n = parseInt(hex.slice(1), 16); return [(n >> 16) & 255, (n >> 8) & 255, n & 255]; };
const hex = (c: number[]) => "#" + c.map((v) => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, "0")).join("");
const mix = (a: string, b: string, t: number) => { const x = rgb(a), y = rgb(b); return hex(x.map((v, i) => v + (y[i] - v) * t)); };
const lum = (h: string) => { const [r, g, b] = rgb(h); return (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255; };
const shade = (h: string, t = 0.3) => (lum(h) > 0.35 ? mix(h, "#000000", t) : mix(h, "#ffffff", t * 0.8));

function yearLabel(o?: Origin): string {
  if (!o) return "origin not recorded";
  const y = o.year < 0 ? `${-o.year} BC` : `${o.year}`;
  return `${o.circa ? "c. " : ""}${y}`;
}
const yearShort = (y: number) => (y < 0 ? `${-y} BC` : `${y}`);

// ---- The colour of a fired body, and of glazes that have their own colour ------------------------------------------
const BODY_COLOUR: Record<string, string> = {
  earthenware: "#c98a5c", terracotta: "#b5603a", "fired-brick": "#a4553a", "egyptian-faience": "#e9e4d6", stonepaste: "#ece6d6",
  stoneware: "#a59a88", "red-stoneware": "#8f4a32", porcelain: "#f4f3ef", "european-hard-paste": "#f6f6f3",
  "soft-paste-porcelain": "#f1ede2", "bone-china": "#f7f4ec", creamware: "#efe2bf", pearlware: "#eef0ee", jasperware: "#e7e6e1",
  "black-basalt": "#2a2826", ironstone: "#ecebe5", parian: "#efe9db", "raku-clay": "#b9ac97", "vitreous-china": "#f4f4f1",
  fireclay: "#d9cdb4", "porcelain-stoneware": "#cfcac0", "technical-porcelain": "#f2f2ef", "paper-clay": "#e2ddd2",
};
const KIND_COLOUR: Record<string, string> = { earthenware: "#c4895f", stoneware: "#a59a88", porcelain: "#f4f3ef", frit: "#ece6d6" };
const GLAZE_COLOUR: Record<string, string> = {
  celadon: "#9cb7a0", tenmoku: "#2b1b13", "jun-glaze": "#8fa3c4", "copper-red": "#8e1d22", "shino-glaze": "#ece2d2",
  "oribe-glaze": "#3f7a4f", "tin-glaze": "#f2f0e8", "sanitary-glaze": "#f6f6f4", "ash-glaze": "#8a8a52", "salt-glaze": "#a8835a",
  "uranium-glaze": "#d9661f", "attic-gloss": "#1e1b19", "terra-sigillata": "#b2502f",
};

// ---- Drawing helpers -----------------------------------------------------------------------------------------------
let defs: string[] = [];
const rect = (x: number, y: number, w: number, h: number, fill: string, extra = "") =>
  `<rect x="${r1(x)}" y="${r1(y)}" width="${r1(w)}" height="${r1(h)}" fill="${fill}"${extra}/>`;
const sheen = (strength: number) => {
  if (strength <= 0) return "";
  const id = `g${defs.length}`;
  defs.push(`<linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset=".38" stop-color="#fff" stop-opacity="${strength}"/><stop offset=".5" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="${r1(strength / 2)}"/></linearGradient>`);
  return `<rect width="${TW}" height="${TH}" fill="url(#${id})"/>`;
};
const speckle = (seed: string, n: number, colour: string, rMax: number, opacity = 0.5, h = TH) => {
  // Thousands of <circle> elements made each board about 300 KB. A dot is a zero-length segment with a round cap,
  // so one path per size class draws all the dots of that size; the radius sits in 3 steps between 0.4 and rMax.
  const r = rng(seed);
  const buckets: string[][] = [[], [], []];
  for (let i = 0; i < n; i++) {
    const x = r1(r() * TW), y = r1(r() * h), k = Math.min(2, Math.floor(r() * 3));
    buckets[k].push(`M${x} ${y}h0`);
  }
  return buckets.map((d, k) => d.length
    ? `<path d="${d.join("")}" stroke="${colour}" stroke-opacity="${opacity}" stroke-linecap="round" stroke-width="${r1(2 * (0.4 + rMax * (k + 0.5) / 3))}"/>`
    : "").join("");
};
/** The lower edge of the glaze: a wavy line where the glaze stopped and thickened above the bare foot. */
function dripEdge(seed: string, base: number): string {
  const r = rng(seed);
  let d = `M0 0 H${TW} V${base}`;
  for (let x = TW; x >= 0; x -= 12) d += ` L${r1(x)} ${r1(base + r() * 9 + (r() > 0.85 ? 10 : 0))}`;
  return d + " Z";
}

// The surface of the glaze. Each returns SVG over 0..TW × 0..TH; the caller clips it to the glazed area.
type Surface = (c: string, seed: string) => string;
const GLAZE: Record<string, Surface> = {
  gloss: (c) => rect(0, 0, TW, TH, c) + sheen(0.45),
  satin: (c) => rect(0, 0, TW, TH, c) + sheen(0.2),
  matte: (c, s) => rect(0, 0, TW, TH, c) + speckle(s, 500, shade(c, 0.12), 0.8, 0.35),
  bare: (c, s) => rect(0, 0, TW, TH, c) + speckle(s, 700, shade(c, 0.2), 0.9, 0.4),
  burnished: (c, s) => {
    const r = rng(s); let p = rect(0, 0, TW, TH, c);
    for (let i = 0; i < 40; i++) p += `<path d="M${r1(r() * TW)} ${r1(r() * TH)} q30 ${r1(-4 + r() * 8)} 70 0" stroke="#fff" stroke-opacity=".18" stroke-width="2" fill="none"/>`;
    return p + sheen(0.15);
  },
  crackle: (c, s) => {
    const r = rng(s); let p = rect(0, 0, TW, TH, c);
    for (let i = 0; i < 60; i++) {
      let x = r() * TW, y = r() * TH, d = `M${r1(x)} ${r1(y)}`;
      for (let k = 0; k < 4; k++) { x += -18 + r() * 36; y += -18 + r() * 36; d += ` L${r1(x)} ${r1(y)}`; }
      p += `<path d="${d}" stroke="${shade(c, 0.55)}" stroke-width="0.7" fill="none" opacity=".8"/>`;
    }
    return p + sheen(0.35);
  },
  crystals: (c, s) => {
    const r = rng(s); let p = rect(0, 0, TW, TH, c);
    for (let i = 0; i < 9; i++) {
      const x = r() * TW, y = r() * TH, R = 8 + r() * 22;
      for (let k = 0; k < 14; k++) { const a = (k / 14) * Math.PI * 2; p += `<path d="M${r1(x)} ${r1(y)} l${r1(Math.cos(a) * R)} ${r1(Math.sin(a) * R)}" stroke="${mix(c, "#ffffff", 0.55)}" stroke-width="1.2" opacity=".75"/>`; }
    }
    return p + sheen(0.4);
  },
  hare: (c, s) => {
    const r = rng(s); let p = rect(0, 0, TW, TH, c);
    for (let i = 0; i < 260; i++) { const x = r() * TW; p += `<path d="M${r1(x)} ${r1(r() * TH * 0.4)} v${r1(20 + r() * 60)}" stroke="#b5733c" stroke-width="${r1(0.5 + r())}" opacity=".55"/>`; }
    return p + sheen(0.45);
  },
  salt: (c, s) => rect(0, 0, TW, TH, c) + speckle(s, 900, mix(c, "#ffffff", 0.25), 1.8, 0.35) + speckle(s + "d", 600, shade(c, 0.25), 1.2, 0.35) + sheen(0.3),
  ash: (c, s) => {
    const r = rng(s); let p = rect(0, 0, TW, TH, mix(c, "#8f7f63", 0.35));
    for (let i = 0; i < 18; i++) { const x = r() * TW, w = 4 + r() * 10; p += `<path d="M${r1(x)} 0 v${r1(TH * (0.5 + r() * 0.5))}" stroke="${c}" stroke-width="${r1(w)}" stroke-linecap="round" opacity=".85"/>`; }
    return p + sheen(0.4);
  },
  splash: (c, s) => {
    const r = rng(s); let p = rect(0, 0, TW, TH, c);
    for (let i = 0; i < 5; i++) p += `<ellipse cx="${r1(r() * TW)}" cy="${r1(r() * TH)}" rx="${r1(10 + r() * 30)}" ry="${r1(8 + r() * 20)}" fill="#7d3a6a" opacity=".45"/>`;
    return p + sheen(0.4);
  },
  shino: (c, s) => rect(0, 0, TW, TH, c) + `<ellipse cx="${TW * 0.75}" cy="${TH * 0.7}" rx="70" ry="50" fill="#d98c58" opacity=".45"/>` + speckle(s, 160, shade(c, 0.35), 1.1, 0.6),
  lava: (c, s) => {
    const r = rng(s); let p = rect(0, 0, TW, TH, c);
    for (let i = 0; i < 70; i++) { const x = r() * TW, y = r() * TH, R = 3 + r() * 9; p += `<circle cx="${r1(x)}" cy="${r1(y)}" r="${r1(R)}" fill="${shade(c, 0.3)}"/><circle cx="${r1(x - R * 0.2)}" cy="${r1(y - R * 0.2)}" r="${r1(R * 0.6)}" fill="${mix(c, "#ffffff", 0.2)}"/>`; }
    return p;
  },
  sancai: (c, s) => {
    const r = rng(s); let p = rect(0, 0, TW, TH, "#efe3c4");
    const cols = ["#3f7a4f", "#c08a2c", c];
    for (let i = 0; i < 22; i++) p += `<path d="M${r1(r() * TW)} 0 v${r1(TH * (0.4 + r() * 0.6))}" stroke="${cols[i % 3]}" stroke-width="${r1(8 + r() * 14)}" stroke-linecap="round" opacity=".8"/>`;
    return p + sheen(0.4);
  },
  celadon: (c) => {
    const id = `g${defs.length}`;
    defs.push(`<radialGradient id="${id}" cx=".5" cy=".4" r=".8"><stop offset="0" stop-color="${mix(c, "#ffffff", 0.2)}"/><stop offset="1" stop-color="${shade(c, 0.25)}"/></radialGradient>`);
    return `<rect width="${TW}" height="${TH}" fill="url(#${id})"/>` + sheen(0.35);
  },
};
function surfaceFor(g: Item): Surface {
  const byId: Record<string, string> = {
    burnished: "burnished", "crackle-glaze": "crackle", "raku-glaze": "crackle", "crystalline-glaze": "crystals", tenmoku: "hare",
    "salt-glaze": "salt", "ash-glaze": "ash", "jun-glaze": "splash", "shino-glaze": "shino", "lava-glaze": "lava", sancai: "sancai",
    celadon: "celadon", "matte-glaze": "matte", "satin-glaze": "satin", "attic-gloss": "satin", "terra-sigillata": "satin",
  };
  const byKind: Record<string, string> = { bare: "bare", matte: "matte", crystalline: "crystals", salt: "salt", ash: "ash", slip: "satin" };
  return GLAZE[byId[g.id] ?? byKind[g.kind] ?? "gloss"];
}

// The mark of a decoration, drawn over the glaze in the colour `c`.
type Mark = (c: string, seed: string, h: number) => string;
const DECOR: Record<string, Mark> = {
  none: () => "",
  // A brush-painted branch: one stem, leaves in single strokes, and a bloom, inside a double frame line.
  painted: (c, s, h) => {
    const r = rng(s);
    const x0 = 30 + r() * 30, y0 = h - 22, x1 = TW - 40 - r() * 30, y1 = 30 + r() * 20;
    let p = `<path d="M${r1(x0)} ${r1(y0)} C${r1(x0 + 40)} ${r1(y0 - 60)} ${r1(x1 - 60)} ${r1(y1 + 40)} ${r1(x1)} ${r1(y1)}" stroke="${c}" stroke-width="3.5" stroke-linecap="round" fill="none"/>`;
    for (let i = 1; i < 8; i++) {
      const t = i / 8, x = x0 + (x1 - x0) * t, y = y0 + (y1 - y0) * t - Math.sin(t * Math.PI) * 20, a = (i % 2 ? -1 : 1) * (30 + r() * 30);
      p += `<ellipse cx="${r1(x)}" cy="${r1(y)}" rx="${r1(11 + r() * 5)}" ry="4" fill="${c}" opacity=".8" transform="rotate(${r1(a)} ${r1(x)} ${r1(y)}) translate(10 0)"/>`;
    }
    for (let k = 0; k < 6; k++) { const a = (k / 6) * 360; p += `<ellipse cx="${r1(x1)}" cy="${r1(y1)}" rx="11" ry="5.5" fill="${c}" opacity=".7" transform="rotate(${a} ${r1(x1)} ${r1(y1)}) translate(9 0)"/>`; }
    p += `<circle cx="${r1(x1)}" cy="${r1(y1)}" r="4" fill="${c}"/>`;
    return p + `<rect x="7" y="7" width="${TW - 14}" height="${h - 18}" fill="none" stroke="${c}" stroke-width="2" opacity=".7"/><rect x="12" y="12" width="${TW - 24}" height="${h - 28}" fill="none" stroke="${c}" stroke-width="0.8" opacity=".6"/>`;
  },
  printed: (c, s, h) => {
    let p = "";
    for (let y = 18; y < h - 10; y += 4) p += `<path d="M14 ${y} H${TW - 14}" stroke="${c}" stroke-width="0.7" opacity=".45"/>`;
    return p + `<path d="M40 ${h * 0.7} q40 -60 80 -20 t80 -30" stroke="${c}" stroke-width="5" fill="none"/><circle cx="${TW / 2}" cy="${h * 0.35}" r="18" fill="none" stroke="${c}" stroke-width="3"/>`;
  },
  relief: (c, s, h) => {
    let p = "";
    for (let x = 24; x < TW; x += 32) for (let y = 24; y < h - 10; y += 32) p += `<circle cx="${x}" cy="${y}" r="8" fill="#000" opacity=".18" transform="translate(2 2)"/><circle cx="${x}" cy="${y}" r="8" fill="#fff" opacity=".35"/>`;
    return p;
  },
  incised: (c, s, h) => {
    const r = rng(s); let p = "";
    for (let i = 0; i < 9; i++) { const y = 20 + r() * (h - 40); p += `<path d="M10 ${r1(y)} q${TW / 2} ${r1(-20 + r() * 40)} ${TW - 20} 0" stroke="${shade(c, 0.4)}" stroke-width="1.6" fill="none"/>`; }
    return p;
  },
  inlaid: (c, s, h) => {
    let p = "";
    for (let x = 30; x < TW; x += 50) p += `<circle cx="${x}" cy="${h / 2}" r="14" fill="none" stroke="#f3efe4" stroke-width="3"/><circle cx="${x}" cy="${h / 2}" r="4" fill="#f3efe4"/>`;
    return p + `<path d="M10 22 H${TW - 10} M10 ${h - 26} H${TW - 10}" stroke="#f3efe4" stroke-width="2.5"/>`;
  },
  applied: (c, s, h) => {
    let p = "";
    for (let x = 40; x < TW; x += 60) p += `<g transform="translate(${x} ${h / 2})"><circle r="16" fill="#f4f2ec"/><path d="M0 -12 V12 M-12 0 H12" stroke="${shade("#f4f2ec", 0.2)}" stroke-width="2"/></g>`;
    return p;
  },
  metallic: (c, s, h) => {
    const id = `g${defs.length}`;
    defs.push(`<linearGradient id="${id}" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stop-color="#b8892f" stop-opacity=".0"/><stop offset=".3" stop-color="#d4a84a" stop-opacity=".55"/><stop offset=".55" stop-color="#9b6fb0" stop-opacity=".35"/><stop offset=".8" stop-color="#d4a84a" stop-opacity=".5"/><stop offset="1" stop-color="#b8892f" stop-opacity="0"/></linearGradient>`);
    return `<rect width="${TW}" height="${h}" fill="url(#${id})"/><path d="M0 6 H${TW}" stroke="#c9a441" stroke-width="5"/>`;
  },
  marbled: (c, s, h) => {
    const r = rng(s); let p = "";
    for (let i = 0; i < 12; i++) { const y = r() * h; p += `<path d="M0 ${r1(y)} C${TW * 0.3} ${r1(y - 30 + r() * 60)} ${TW * 0.6} ${r1(y - 30 + r() * 60)} ${TW} ${r1(y)}" stroke="${i % 2 ? c : "#efe6d2"}" stroke-width="${r1(3 + r() * 6)}" fill="none" opacity=".7"/>`; }
    return p;
  },
  repair: (c, s, h) => {
    const r = rng(s); let x = 0, y = h * 0.3, d = `M${x} ${r1(y)}`;
    while (x < TW) { x += 14 + r() * 18; y += -16 + r() * 32; d += ` L${r1(x)} ${r1(y)}`; }
    return `<path d="${d}" stroke="#c9a441" stroke-width="3.5" fill="none" stroke-linejoin="round"/>`;
  },
};
// Some decorations have a mark of their own, more exact than the mark of their kind.
const DECOR_ID: Record<string, Mark> = {
  "hand-banding": (c, s, h) => [0.2, 0.32, 0.7].map((t, i) => `<path d="M0 ${r1(h * t)} H${TW}" stroke="${c}" stroke-width="${i === 1 ? 3 : 8}"/>`).join(""),
  "mocha-dendritic": (c, s, h) => {
    const r = rng(s); let p = `<path d="M0 ${h * 0.18} H${TW} M0 ${h * 0.82} H${TW}" stroke="${c}" stroke-width="6"/>`;
    for (let i = 0; i < 4; i++) {
      const x0 = 30 + i * 55, y0 = h * 0.3;
      for (let k = 0; k < 9; k++) { const a = Math.PI / 2 + (-0.9 + r() * 1.8); const l = 20 + r() * 40; p += `<path d="M${x0} ${r1(y0)} l${r1(Math.cos(a) * l)} ${r1(Math.sin(a) * l)}" stroke="${c}" stroke-width="1.1"/>`; }
    }
    return p;
  },
  "sponge-print": (c, s, h) => speckle(s, 420, c, 1.6, 0.7, h),
  "slip-trailing": (c, s, h) => {
    let p = "";
    for (let x = 10; x < TW; x += 22) p += `<path d="M${x} 10 q11 ${h / 4} 0 ${h / 2} t0 ${h / 2 - 30}" stroke="#f0d9a0" stroke-width="3" fill="none"/>`;
    return p + speckle(s, 30, "#f0d9a0", 3, 0.9, h);
  },
  "cord-impressed": (c, s, h) => {
    let p = "";
    for (let y = 12; y < h - 6; y += 7) p += `<path d="M0 ${y} H${TW}" stroke="${shade(c, 0.35)}" stroke-width="2.2" stroke-dasharray="3 2" transform="rotate(-8 ${TW / 2} ${y})"/>`;
    return p;
  },
  "black-figure": (c, s, h) => `<g fill="#1e1b19"><circle cx="${TW / 2}" cy="${h * 0.3}" r="11"/><path d="M${TW / 2 - 10} ${h * 0.38} h20 l14 ${h * 0.42} h-48 z"/><path d="M${TW / 2 - 60} ${h * 0.5} l30 -14 v6 l-30 14z M${TW / 2 + 60} ${h * 0.5} l-30 -14 v6 l30 14z"/></g><path d="M0 ${h - 18} H${TW}" stroke="#1e1b19" stroke-width="4" stroke-dasharray="10 6"/>`,
  "red-figure": (c, s, h) => `<rect width="${TW}" height="${h}" fill="#1e1b19"/><g fill="#c0623a"><circle cx="${TW / 2}" cy="${h * 0.3}" r="11"/><path d="M${TW / 2 - 10} ${h * 0.38} h20 l14 ${h * 0.42} h-48 z"/></g><path d="M0 ${h - 18} H${TW}" stroke="#c0623a" stroke-width="4" stroke-dasharray="10 6"/>`,
  "tile-mosaic": (c, s, h) => {
    const r = rng(s); const cols = [c, "#1f5e8c", "#f2efe6", "#2e6b4f", "#c08a2c"]; let p = "";
    for (let x = 0; x < TW; x += 16) for (let y = 0; y < h; y += 16) p += rect(x + 1, y + 1, 14, 14, cols[Math.floor(r() * cols.length)]);
    return p;
  },
  "cuerda-seca": (c, s, h) => {
    let p = "";
    for (let x = 0; x < TW; x += 48) for (let y = 0; y < h; y += 48) p += `<path d="M${x + 24} ${y + 4} L${x + 44} ${y + 24} L${x + 24} ${y + 44} L${x + 4} ${y + 24}Z" fill="${c}" stroke="#2a211b" stroke-width="2.5"/>`;
    return p;
  },
  pierced: (c, s, h) => {
    let p = "";
    for (let x = 18; x < TW; x += 26) for (let y = 18; y < h - 10; y += 26) p += `<ellipse cx="${x}" cy="${y}" rx="7" ry="4" fill="#2b2824"/>`;
    return p;
  },
  gilding: () => `<path d="M0 6 H${TW} M0 16 H${TW}" stroke="#c9a441" stroke-width="4"/>`,
  "liquid-gold": () => `<path d="M0 6 H${TW}" stroke="#d8b552" stroke-width="7"/>`,
  undecorated: () => "",
  decal: (c, s, h) => DECOR.printed(c, s, h),
  "screen-print": (c, s, h) => { let p = ""; for (let x = 10; x < TW; x += 40) p += rect(x, 20, 26, h - 50, c, ' opacity=".85"'); return p; },
  "digital-inkjet": (c, s, h) => {
    const id = `g${defs.length}`;
    defs.push(`<linearGradient id="${id}" x1="0" x2="1"><stop offset="0" stop-color="${c}"/><stop offset=".5" stop-color="${mix(c, "#ffffff", 0.5)}"/><stop offset="1" stop-color="${shade(c, 0.3)}"/></linearGradient>`);
    return `<rect width="${TW}" height="${h}" fill="url(#${id})" opacity=".8"/>` + speckle(s, 300, shade(c, 0.4), 0.8, 0.5, h);
  },
};

// ---- One board -----------------------------------------------------------------------------------------------------
function board(s: Style, v: Map<string, Item>, objects: Map<string, Item>): string {
  defs = [];
  const parts: string[] = [];
  const text = (x: number, y: number, t: string, size: number, fill: string, weight = 400, anchor = "start") =>
    parts.push(`<text x="${r1(x)}" y="${r1(y)}" font-size="${size}" font-weight="${weight}" fill="${fill}" text-anchor="${anchor}" style="${UI}">${esc(t)}</text>`);
  const fit = (t: string, n: number) => (t.length > n ? t.slice(0, n - 1) + "…" : t);

  // The tiles: the signature pieces, then the other glazes of the style on the first body.
  const tiles: Tile[] = [];
  const get = (id: string) => v.get(id);
  for (const p of s.signatures.pieces) {
    const body = get(p.body), glaze = get(p.glaze), decoration = get(p.decoration);
    if (body && glaze && decoration && tiles.length < 8) tiles.push({ object: objects.get(p.object), body, glaze, decoration });
  }
  const used = new Set(tiles.map((t) => t.glaze.id));
  const main = get(s.bodies.primary[0]), plain = get("undecorated") ?? { id: "undecorated", name: "Undecorated", kind: "none" };
  for (const g of s.glaze.glazes) {
    const glaze = get(g);
    if (glaze && main && !used.has(g) && tiles.length < 8) { tiles.push({ body: main, glaze, decoration: plain }); used.add(g); }
  }

  parts.push(rect(0, 0, W, H, "#fbfaf6"));
  text(X0, 50, s.name, 28, TEXT, 700);
  const branch = s.branch.replace(/-/g, " ");
  text(X0, 76, `${branch[0].toUpperCase()}${branch.slice(1)} · ${s.time_period.label} · ${s.region}`, 14, MUTED);
  text(W - X0, 50, "Glaze test tiles", 14, MUTED, 600, "end");

  const colours = s.palette.colours.length ? s.palette.colours : [{ name: "Ground", hex: "#b8b2a4", role: "" }];
  // The decoration colour: the palette colour that differs most in lightness from the glaze.
  const contrast = (g: string) => colours.map((c) => c.hex).sort((a, b) => Math.abs(lum(b) - lum(g)) - Math.abs(lum(a) - lum(g)))[0];
  tiles.forEach((t, i) => {
    const col = i % 4, row = Math.floor(i / 4);
    const x = X0 + col * (TW + GAP), y = Y0 + row * ROW;
    const bodyCol = BODY_COLOUR[t.body.id] ?? KIND_COLOUR[t.body.kind] ?? "#c4b49a";
    const bare = t.glaze.kind === "bare";
    const gCol = bare ? bodyCol : GLAZE_COLOUR[t.glaze.id] ?? (t.glaze.id === "lead-glaze" || t.glaze.id === "clear-feldspathic" || t.glaze.id === "salt-glaze"
      ? mix(bodyCol, colours[i % colours.length].hex, 0.25) : colours[i % colours.length].hex);
    const seed = `${s.id}:${i}:${t.glaze.id}`;
    const foot = Math.round(TH * 0.78);
    const clip = `c${i}`, gl = `d${i}`;
    defs.push(`<clipPath id="${clip}"><rect width="${TW}" height="${TH}" rx="6"/></clipPath>`);
    defs.push(`<clipPath id="${gl}"><path d="${bare ? `M0 0 H${TW} V${TH} H0Z` : dripEdge(seed, foot)}"/></clipPath>`);
    const dec = DECOR_ID[t.decoration.id] ?? DECOR[t.decoration.kind] ?? DECOR.none;
    parts.push(`<g transform="translate(${x} ${y})"><g clip-path="url(#${clip})">` +
      GLAZE.bare(bodyCol, seed + "b") +
      `<g clip-path="url(#${gl})">${surfaceFor(t.glaze)(gCol, seed)}${dec(contrast(gCol), seed + "m", bare ? TH : foot)}</g>` +
      `</g><rect width="${TW}" height="${TH}" rx="6" fill="none" stroke="${RULE}"/></g>`);
    text(x, y + TH + 20, fit(t.object ? t.object.name : `${t.glaze.name} test`, 34), 14, TEXT, 600);
    text(x, y + TH + 38, fit(`${t.glaze.name} · ${yearLabel(t.glaze.origin)}`, 40), 12, MUTED);
    text(x, y + TH + 54, fit(`${t.decoration.kind === "none" ? "No decoration" : `${t.decoration.name} · ${yearLabel(t.decoration.origin)}`} · ${t.body.name.toLowerCase()}`, 44), 11, MUTED);
  });

  // The time line: the origin of each body, glaze and decoration against the start of the style.
  const ty = Y0 + 2 * ROW + 26, tx0 = X0, tx1 = W - X0;
  const items = new Map<string, Item>();
  for (const t of tiles) for (const it of [t.body, t.glaze, t.decoration]) if (it.origin) items.set(it.id, it);
  const dated = [...items.values()];
  const years = [...dated.map((t) => t.origin!.year), s.time_period.start];
  const lo = Math.min(...years), hi = Math.max(...years);
  // A log-like scale: the first fired clay (18,000 BC) and a modern glaze (1960) both stay legible.
  const span = (y: number) => Math.log1p(Math.max(0, hi - y));
  const right = tx1 - 70;
  const X = (y: number) => (hi === lo ? right : right - ((right - tx0) * span(y)) / span(lo));
  parts.push(`<path d="M${tx0} ${ty} H${tx1}" stroke="${TEXT}" stroke-width="1"/>`);
  text(tx0, ty - 28, "Origin of each clay body, glaze and decoration, against the start of the style (compressed scale)", 11, MUTED);
  const byYear = new Map<number, string[]>();
  for (const t of dated) byYear.set(t.origin!.year, [...(byYear.get(t.origin!.year) ?? []), t.name]);
  const lanes: number[][] = [[], [], []];
  for (const [year, names] of [...byYear].sort((a, b) => a[0] - b[0])) {
    const x = X(year);
    const label = `${yearShort(year)} ${names.join(", ")}`;
    const w = label.length * 5.4;
    const ends = lanes.map((l) => Math.max(-1e9, ...l));
    let lane = ends.findIndex((end) => end < x - 4);
    if (lane < 0) lane = ends.indexOf(Math.min(...ends));
    const lx = Math.min(Math.max(x, ends[lane] + 8), W - X0 - w);
    lanes[lane].push(lx + w);
    const ly = ty + 9 + lane * 13;
    parts.push(`<circle cx="${r1(x)}" cy="${ty}" r="3.5" fill="${TEXT}"/><path d="M${r1(x)} ${ty} L${r1(lx)} ${ly}" stroke="${RULE}" fill="none"/>`);
    text(lx, ty + 20 + lane * 13, label, 10, MUTED);
  }
  const sx = X(s.time_period.start);
  parts.push(`<path d="M${r1(sx)} ${ty - 7} V${ty + 7}" stroke="#b3261e" stroke-width="2.5"/>`);
  text(sx, ty - 12, `${yearShort(s.time_period.start)} style`, 11, "#b3261e", 600, "end");

  const py = H - 44;
  colours.forEach((c, i) => {
    const x = X0 + i * 132;
    parts.push(rect(x, py - 12, 16, 16, c.hex, ` stroke="${RULE}"`));
    text(x + 22, py + 1, fit(c.name, 18), 11, MUTED);
  });
  text(W - X0, H - 20, `Drawn by code from data/ceramics/styles/${s.id}.json and data/ceramics/vocabulary.json. Surfaces enlarged; not to scale.`, 10, MUTED, 400, "end");

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}"><defs>${defs.join("")}</defs>${parts.join("")}</svg>\n`;
}

// ---- Main -------------------------------------------------------------------------------------------------------------
const voc = loadCeramicsVocabulary() as unknown as Record<"bodies" | "materials" | "glazes" | "decorations" | "objects", Item[]>;
const items = new Map<string, Item>();
for (const list of [voc.bodies, voc.glazes, voc.decorations]) for (const it of list) items.set(it.id, it);
const objects = new Map(voc.objects.map((o) => [o.id, o]));

mkdirSync(OUT, { recursive: true });
const manPath = join(OUT, "manifest.json");
const manifest: { images: Record<string, Entry> } = existsSync(manPath) ? JSON.parse(readFileSync(manPath, "utf8")) : { images: {} };
const all = loadStyleFiles("ceramics").map((f) => f.style as unknown as Style);
for (const s of all) {
  if (only && !only.includes(s.id)) continue;
  const svg = board(s, items, objects);
  writeFileSync(join(OUT, `${s.id}.svg`), svg);
  manifest.images[s.id] = {
    file: `${s.id}.svg`, kind: "tile-board",
    subject: "up to eight glaze test tiles of the style, each a clay body, a glaze and a decoration, with a time line of their origins",
    model: "drawn by scripts/render-ceramics-tiles.ts from the clay and glaze rules (no image model)",
    width: W, height: H, generated: new Date().toISOString(),
  };
  console.log(`${s.id}: ${(svg.length / 1024).toFixed(0)} KB`);
}
for (const id of Object.keys(manifest.images)) if (!all.some((s) => s.id === id)) delete manifest.images[id];
manifest.images = Object.fromEntries(Object.entries(manifest.images).sort(([a], [b]) => a.localeCompare(b)));
writeFileSync(manPath, JSON.stringify(manifest, null, 2) + "\n");
