// Draw one swatch board for each fashion style. No image model: the board is computed from the fabric rules of the style.
//
//   npm run swatches [-- --only new-look,denim-workwear]
//
// The board shows up to 8 cloths and materials of the style: the primary list first, then the secondary list.
// Each tile draws the structure of the cloth (plain weave, twill, satin, knit, lace, net, pile, felt, coating) or the
// surface of the material (leather grain, brushed metal, gem facets, wood grain, rubber, carbon weave, quilted fill),
// in the colours of the style palette. Under each tile: the name, the year and place of origin, and the weight.
// A time line at the foot puts the origin of each cloth against the start year of the style: the history of the fabrics.
// The script reads these fields of the style:
//   fabrics.primary, fabrics.secondary   the ids of the tiles (vocabulary fabrics or materials)
//   palette.colours                      the colour of each tile, in turn
//   surface.gloss, vectors.luxury        not drawn; the board shows structure and colour only
// Output: demo/previews/fashion/<id>.svg and demo/previews/fashion/manifest.json.
import { writeFileSync, mkdirSync, existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { ROOT, loadStyleFiles } from "./lib.js";
import { loadFashionVocabulary } from "./fashion.js";

const W = 1152, H = 768;
const X0 = 56, TW = 240, TH = 190, GAP = 26, Y0 = 104, ROW = TH + 74;
const TEXT = "#1d1b17", MUTED = "#5f5b52", RULE = "#d8d4ca";
const UI = "font-family:system-ui,-apple-system,'Segoe UI',sans-serif";
const OUT = join(ROOT, "demo", "previews", "fashion");

interface Colour { name: string; hex: string; role: string }
interface Origin { year: number; circa?: boolean; place?: string; by?: string }
interface Fabric { id: string; name: string; construction: string; origin?: Origin; weight_gsm?: [number, number] }
interface Material { id: string; name: string; family: string; origin?: Origin }
interface Style {
  id: string; name: string; branch: string; region: string; time_period: { start: number; label: string };
  fabrics: { primary: string[]; secondary: string[] };
  palette: { colours: Colour[] };
}
interface Tile { id: string; name: string; kind: string; origin?: Origin; gsm?: [number, number]; secondary: boolean }
interface Entry { file: string; kind: "swatch-board"; subject: string; model: string; width: number; height: number; generated: string }

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
/** The thread colour: darker on a light ground, lighter on a dark ground. */
const shade = (h: string, t = 0.3) => (lum(h) > 0.35 ? mix(h, "#000000", t) : mix(h, "#ffffff", t * 0.8));

// ---- Year label ----------------------------------------------------------------------------------------------------
function yearLabel(o?: Origin): string {
  if (!o) return "origin not recorded";
  const y = o.year < 0 ? `${-o.year} BC` : `${o.year}`;
  return `${o.circa ? "c. " : ""}${y}${o.place ? ` · ${o.place}` : ""}`;
}

// ---- Patterns: each returns the SVG body of one tile, 0..TW × 0..TH -------------------------------------------------
type Draw = (base: string, seed: string) => string;
const rect = (x: number, y: number, w: number, h: number, fill: string, extra = "") =>
  `<rect x="${r1(x)}" y="${r1(y)}" width="${r1(w)}" height="${r1(h)}" fill="${fill}"${extra}/>`;

/** A pattern fill: one cell drawn `body`, repeated over the tile. */
function tiled(id: string, cw: number, ch: number, body: string, transform = ""): { defs: string; use: string } {
  return {
    defs: `<pattern id="${id}" width="${cw}" height="${ch}" patternUnits="userSpaceOnUse"${transform ? ` patternTransform="${transform}"` : ""}>${body}</pattern>`,
    use: `<rect width="${TW}" height="${TH}" fill="url(#${id})"/>`,
  };
}

let defs: string[] = [];
function pat(seed: string, cw: number, ch: number, body: string, transform = ""): string {
  const id = `p${defs.length}`;
  const t = tiled(id, cw, ch, body, transform);
  defs.push(t.defs);
  return t.use;
}
const sheen = (seed: string, strength: number) => {
  const id = `g${defs.length}`;
  defs.push(`<linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset=".45" stop-color="#fff" stop-opacity="${strength}"/><stop offset=".6" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="${strength / 2}"/></linearGradient>`);
  return `<rect width="${TW}" height="${TH}" fill="url(#${id})"/>`;
};
const speckle = (seed: string, n: number, colour: string, rMax: number, opacity = 0.5) => {
  const r = rng(seed);
  let s = "";
  for (let i = 0; i < n; i++) s += `<circle cx="${r1(r() * TW)}" cy="${r1(r() * TH)}" r="${r1(0.4 + r() * rMax)}" fill="${colour}" opacity="${opacity}"/>`;
  return s;
};

const CLOTH: Record<string, Draw> = {
  "woven-plain": (b, s) => rect(0, 0, TW, TH, b) + pat(s, 6, 6, rect(0, 0, 3, 3, shade(b, 0.18)) + rect(3, 3, 3, 3, shade(b, 0.18))),
  "woven-basket": (b, s) => rect(0, 0, TW, TH, b) + pat(s, 16, 16,
    rect(0, 0, 8, 8, shade(b, 0.12)) + rect(8, 8, 8, 8, shade(b, 0.12)) + `<path d="M0 2h8M0 6h8M10 8v8M14 8v8M8 2h8M8 6h8M2 8v8M6 8v8" stroke="${shade(b, 0.3)}" stroke-width="0.8"/>`),
  "woven-twill": (b, s) => rect(0, 0, TW, TH, b) + pat(s, 8, 8, rect(0, 0, 3.4, 8, shade(b, 0.28)), "rotate(-45)"),
  "woven-satin": (b, s) => rect(0, 0, TW, TH, b) + pat(s, 10, 10, rect(0, 0, 1.2, 1.2, shade(b, 0.2)) + rect(5, 5, 1.2, 1.2, shade(b, 0.2))) + sheen(s, 0.35),
  "woven-figured": (b, s) => rect(0, 0, TW, TH, b) + pat(s, 5, 5, rect(0, 0, 2.5, 5, shade(b, 0.08)), "rotate(-45)") +
    pat(s + "f", 48, 48, `<path d="M24 4 C34 14 34 34 24 44 C14 34 14 14 24 4Z M4 24 C14 18 34 18 44 24 C34 30 14 30 4 24Z" fill="none" stroke="${shade(b, 0.35)}" stroke-width="2"/><circle cx="24" cy="24" r="3" fill="${shade(b, 0.35)}"/>`),
  "woven-pile": (b, s) => {
    const id = `g${defs.length}`;
    defs.push(`<linearGradient id="${id}" x1="0" x2="1"><stop offset="0" stop-color="${shade(b, 0.35)}"/><stop offset=".5" stop-color="${mix(b, "#ffffff", 0.12)}"/><stop offset="1" stop-color="${shade(b, 0.35)}"/></linearGradient>`);
    return rect(0, 0, TW, TH, b) + pat(s, 9, TH, `<rect width="9" height="${TH}" fill="url(#${id})"/>`);
  },
  "weft-knit": (b, s) => rect(0, 0, TW, TH, shade(b, 0.15)) + pat(s, 10, 9,
    `<path d="M0.5 0.5 L5 8.5 M9.5 0.5 L5 8.5" stroke="${b}" stroke-width="3.4" stroke-linecap="round"/><path d="M0.5 0.5 L5 8.5 M9.5 0.5 L5 8.5" stroke="${mix(b, "#ffffff", 0.18)}" stroke-width="1" stroke-linecap="round"/>`),
  "warp-knit": (b, s) => rect(0, 0, TW, TH, b) + pat(s, 6, 8, `<path d="M1 0 L5 4 L1 8" fill="none" stroke="${shade(b, 0.25)}" stroke-width="1"/>`),
  lace: (b, s) => rect(0, 0, TW, TH, "#f6f3ec") + pat(s, 12, 10.4, `<path d="M3 0 L9 0 L12 5.2 L9 10.4 L3 10.4 L0 5.2Z" fill="none" stroke="${b}" stroke-width="0.7"/>`) +
    pat(s + "m", 60, 52, `<circle cx="30" cy="26" r="14" fill="none" stroke="${b}" stroke-width="3"/><circle cx="30" cy="26" r="6" fill="${b}"/><path d="M30 12 V2 M30 40 V50 M16 26 H6 M44 26 H54" stroke="${b}" stroke-width="2"/>`),
  net: (b, s) => rect(0, 0, TW, TH, "#f6f3ec") + pat(s, 10, 8.66, `<path d="M2.5 0 L7.5 0 L10 4.33 L7.5 8.66 L2.5 8.66 L0 4.33Z" fill="none" stroke="${b}" stroke-width="0.9"/>`),
  felt: (b, s) => rect(0, 0, TW, TH, b) + speckle(s, 900, shade(b, 0.25), 1.2, 0.45) + speckle(s + "l", 500, mix(b, "#ffffff", 0.15), 0.9, 0.5),
  nonwoven: (b, s) => {
    const r = rng(s);
    let p = "";
    for (let i = 0; i < 420; i++) {
      const x = r() * TW, y = r() * TH, a = r() * Math.PI, l = 6 + r() * 18;
      p += `<path d="M${r1(x)} ${r1(y)} l${r1(Math.cos(a) * l)} ${r1(Math.sin(a) * l)}" stroke="${shade(b, 0.12 + r() * 0.15)}" stroke-width="0.6"/>`;
    }
    return rect(0, 0, TW, TH, b) + p;
  },
  coated: (b, s) => rect(0, 0, TW, TH, b) + pat(s, 6, 6, rect(0, 0, 3, 3, shade(b, 0.08))) + sheen(s, 0.45),
  laminate: (b, s) => rect(0, 0, TW, TH, b) + pat(s, 4, 4, rect(0, 0, 2, 2, shade(b, 0.12))) +
    pat(s + "d", 14, 14, `<circle cx="7" cy="7" r="1.1" fill="${shade(b, 0.4)}"/>`) + sheen(s, 0.2),
};

const MATERIAL: Record<string, Draw> = {
  leather: (b, s) => {
    const r = rng(s);
    let p = "";
    for (let i = 0; i < 260; i++) {
      const x = r() * TW, y = r() * TH;
      p += `<path d="M${r1(x)} ${r1(y)} q${r1(4 + r() * 6)} ${r1(-3 + r() * 6)} ${r1(8 + r() * 8)} ${r1(-2 + r() * 4)}" fill="none" stroke="${shade(b, 0.22)}" stroke-width="0.6" opacity=".7"/>`;
    }
    return rect(0, 0, TW, TH, b) + p + speckle(s + "p", 500, shade(b, 0.3), 0.6, 0.4) + sheen(s, 0.12);
  },
  metal: (b, s) => {
    const r = rng(s);
    let p = "";
    for (let y = 0; y < TH; y += 1.5) p += `<path d="M0 ${r1(y)} H${TW}" stroke="${r() > 0.5 ? mix(b, "#ffffff", 0.2) : shade(b, 0.12)}" stroke-width="0.7" opacity=".6"/>`;
    const id = `g${defs.length}`;
    defs.push(`<linearGradient id="${id}" x1="0" x2="1"><stop offset="0" stop-color="#000" stop-opacity=".25"/><stop offset=".35" stop-color="#fff" stop-opacity=".45"/><stop offset=".55" stop-color="#000" stop-opacity=".1"/><stop offset=".8" stop-color="#fff" stop-opacity=".3"/><stop offset="1" stop-color="#000" stop-opacity=".3"/></linearGradient>`);
    return rect(0, 0, TW, TH, b) + p + `<rect width="${TW}" height="${TH}" fill="url(#${id})"/>`;
  },
  gem: (b, s) => {
    const cx = TW / 2, cy = TH / 2, R = 78, n = 8;
    const pts = Array.from({ length: n }, (_, i) => [cx + R * Math.cos((i * 2 * Math.PI) / n + Math.PI / 8), cy + R * Math.sin((i * 2 * Math.PI) / n + Math.PI / 8)]);
    const inner = pts.map(([x, y]) => [cx + (x - cx) * 0.5, cy + (y - cy) * 0.5]);
    let p = rect(0, 0, TW, TH, "#ece9e1");
    for (let i = 0; i < n; i++) {
      const j = (i + 1) % n;
      p += `<path d="M${r1(pts[i][0])} ${r1(pts[i][1])} L${r1(pts[j][0])} ${r1(pts[j][1])} L${r1(inner[j][0])} ${r1(inner[j][1])} L${r1(inner[i][0])} ${r1(inner[i][1])}Z" fill="${i % 2 ? shade(b, 0.25) : mix(b, "#ffffff", 0.25)}"/>`;
    }
    p += `<path d="M${inner.map(([x, y]) => `${r1(x)} ${r1(y)}`).join(" L")}Z" fill="${b}" stroke="${mix(b, "#ffffff", 0.5)}" stroke-width="1"/>`;
    return p;
  },
  wood: (b, s) => {
    const r = rng(s);
    let p = rect(0, 0, TW, TH, b);
    for (let y = -10; y < TH + 10; y += 5 + r() * 4) {
      const a = 3 + r() * 6;
      p += `<path d="M0 ${r1(y)} C${TW * 0.3} ${r1(y - a)} ${TW * 0.6} ${r1(y + a)} ${TW} ${r1(y)}" fill="none" stroke="${shade(b, 0.15 + r() * 0.2)}" stroke-width="${r1(0.6 + r() * 1.2)}"/>`;
    }
    return p + sheen(s, 0.2);
  },
  rubber: (b, s) => rect(0, 0, TW, TH, b) + pat(s, 14, 12, `<path d="M0 6 L7 0 L14 6 L7 12Z" fill="${shade(b, 0.15)}"/>`) + speckle(s, 200, mix(b, "#ffffff", 0.1), 0.6, 0.3),
  polymer: (b, s) => rect(0, 0, TW, TH, b) + sheen(s, 0.5),
  composite: (b, s) => rect(0, 0, TW, TH, "#1c1c1e") + pat(s, 12, 12,
    rect(0, 0, 6, 6, "#2e2e31") + rect(6, 6, 6, 6, "#2e2e31") + rect(6, 0, 6, 6, "#232325") + rect(0, 6, 6, 6, "#232325")) + sheen(s, 0.3),
  fill: (b, s) => {
    const id = `g${defs.length}`;
    defs.push(`<linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${shade(b, 0.3)}"/><stop offset=".45" stop-color="${mix(b, "#ffffff", 0.2)}"/><stop offset="1" stop-color="${shade(b, 0.35)}"/></linearGradient>`);
    return rect(0, 0, TW, TH, b) + pat(s, TW, 32, `<rect width="${TW}" height="32" fill="url(#${id})"/><path d="M0 31.5 H${TW}" stroke="${shade(b, 0.5)}" stroke-dasharray="3 2"/>`);
  },
  mineral: (b, s) => rect(0, 0, TW, TH, b) + speckle(s, 700, shade(b, 0.3), 2.2, 0.35) + speckle(s + "w", 300, mix(b, "#ffffff", 0.35), 1.6, 0.4),
  organic: (b, s) => {
    const r = rng(s);
    let p = rect(0, 0, TW, TH, b);
    for (let i = 0; i < 140; i++) {
      const x = r() * TW, y = r() * TH;
      p += `<path d="M${r1(x)} ${r1(y)} q${r1(10 + r() * 10)} ${r1(-6 - r() * 8)} ${r1(26 + r() * 12)} ${r1(-4 + r() * 8)}" fill="none" stroke="${i % 3 ? shade(b, 0.2) : mix(b, "#ffffff", 0.2)}" stroke-width="0.8" opacity=".8"/>`;
    }
    return p;
  },
};

// ---- One board -----------------------------------------------------------------------------------------------------
// A metal, a pearl or a clear stone has its own colour: a palette colour would draw yellow gold blue.
// Other materials and all cloths take the palette colours of the style, in turn.
const OWN_COLOUR: Record<string, string> = {
  "yellow-gold": "#c9a441", "rose-gold": "#c98f74", "white-gold": "#d8d8d3", platinum: "#cfd0cd", "sterling-silver": "#c4c6c9",
  pinchbeck: "#b99a4c", brass: "#b8953f", "stainless-steel": "#b6babd", titanium: "#8e9094", "chrome-plate": "#c9ccd0",
  aluminium: "#c2c5c7", "pressed-steel": "#8f9396", copper: "#b8734a", "cut-steel": "#9ea3a8", "nickel-plate": "#bfc0b8",
  "spring-steel": "#7f8489", "blued-steel": "#2f4f8a", "gold-filled": "#c4a24a", diamond: "#e8ecef", "natural-pearl": "#efe9dc",
  "cultured-pearl": "#f1ece0", "glass-pearl": "#ece6d8", jet: "#1b1b1d", onyx: "#202022", "rock-crystal": "#e4e9ec",
  "quartz-crystal": "#e2e6e8", "synthetic-sapphire": "#dfe5ea",
};

function board(s: Style, fabrics: Map<string, Fabric>, materials: Map<string, Material>): string {
  defs = [];
  const parts: string[] = [];
  const text = (x: number, y: number, t: string, size: number, fill: string, weight = 400, anchor = "start") =>
    parts.push(`<text x="${r1(x)}" y="${r1(y)}" font-size="${size}" font-weight="${weight}" fill="${fill}" text-anchor="${anchor}" style="${UI}">${esc(t)}</text>`);

  const tiles: Tile[] = [];
  for (const [list, secondary] of [[s.fabrics.primary, false], [s.fabrics.secondary, true]] as const)
    for (const id of list) {
      if (tiles.length >= 8) break;
      const f = fabrics.get(id), m = materials.get(id);
      if (f) tiles.push({ id, name: f.name, kind: f.construction, origin: f.origin, gsm: f.weight_gsm, secondary });
      else if (m) tiles.push({ id, name: m.name, kind: m.family, origin: m.origin, secondary });
    }

  parts.push(rect(0, 0, W, H, "#fbfaf6"));
  text(X0, 50, s.name, 28, TEXT, 700);
  text(X0, 76, `${s.branch[0].toUpperCase()}${s.branch.slice(1)} · ${s.time_period.label} · ${s.region}`, 14, MUTED);
  text(W - X0, 50, "Swatch board", 14, MUTED, 600, "end");

  const colours = s.palette.colours.length ? s.palette.colours : [{ name: "Ground", hex: "#b8b2a4", role: "" }];
  tiles.forEach((t, i) => {
    const col = i % 4, row = Math.floor(i / 4);
    const x = X0 + col * (TW + GAP), y = Y0 + row * ROW;
    const base = OWN_COLOUR[t.id] ?? colours[i % colours.length].hex;
    const draw = CLOTH[t.kind] ?? MATERIAL[t.kind] ?? CLOTH["woven-plain"];
    const clip = `c${i}`;
    defs.push(`<clipPath id="${clip}"><rect width="${TW}" height="${TH}" rx="6"/></clipPath>`);
    parts.push(`<g transform="translate(${x} ${y})"><g clip-path="url(#${clip})">${draw(base, `${s.id}:${t.id}`)}</g><rect width="${TW}" height="${TH}" rx="6" fill="none" stroke="${RULE}"/></g>`);
    text(x, y + TH + 20, t.name, 14, TEXT, 600);
    text(x, y + TH + 38, yearLabel(t.origin), 12, MUTED);
    const kind = t.kind.replace(/-/g, " ");
    text(x, y + TH + 54, `${kind}${t.gsm ? ` · ${t.gsm[0]}–${t.gsm[1]} g/m²` : ""}${t.secondary ? " · secondary" : ""}`, 11, MUTED);
  });

  // The time line: the origin of each tile against the start of the style.
  const ty = Y0 + 2 * ROW + 26, tx0 = X0, tx1 = W - X0;
  const dated = tiles.filter((t) => t.origin);
  const years = [...dated.map((t) => t.origin!.year), s.time_period.start];
  const lo = Math.min(...years), hi = Math.max(...years);
  // A log-like scale: the old dates of cloth (5000 BC) and the new dates of synthetics (1960) both stay legible.
  const span = (y: number) => Math.log1p(Math.max(0, hi - y));
  const right = tx1 - 70;
  const X = (y: number) => (hi === lo ? right : right - ((right - tx0) * span(y)) / span(lo));
  parts.push(`<path d="M${tx0} ${ty} H${tx1}" stroke="${TEXT}" stroke-width="1"/>`);
  text(tx0, ty - 28, "Origin of each cloth and material, against the start of the style (compressed scale)", 11, MUTED);
  // One label for each year; a label takes the lowest of three lanes that is free at its x.
  const byYear = new Map<number, string[]>();
  for (const t of dated) byYear.set(t.origin!.year, [...(byYear.get(t.origin!.year) ?? []), t.name]);
  const lanes: number[][] = [[], [], []];
  for (const [year, names] of [...byYear].sort((a, b) => a[0] - b[0])) {
    const x = X(year);
    const label = `${year < 0 ? `${-year} BC` : year} ${names.join(", ")}`;
    const w = label.length * 5.4;
    // The lane with the most room; if the label still meets the one before it, it moves right on a slanted leader.
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
  text(sx, ty - 12, `${s.time_period.start} style`, 11, "#b3261e", 600, "end");

  // The palette strip.
  const py = H - 44;
  colours.forEach((c, i) => {
    const x = X0 + i * 132;
    parts.push(rect(x, py - 12, 16, 16, c.hex, ` stroke="${RULE}"`));
    text(x + 22, py + 1, c.name, 11, MUTED);
  });
  text(W - X0, H - 20, `Drawn by code from data/fashion/styles/${s.id}.json and data/fashion/vocabulary.json. Structure enlarged; not to scale.`, 10, MUTED, 400, "end");

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}"><defs>${defs.join("")}</defs>${parts.join("")}</svg>\n`;
}

// ---- Main -------------------------------------------------------------------------------------------------------------
const v = loadFashionVocabulary() as unknown as { fabrics: Fabric[]; materials: Material[] };
const fabrics = new Map(v.fabrics.map((f) => [f.id, f]));
const materials = new Map(v.materials.map((m) => [m.id, m]));

mkdirSync(OUT, { recursive: true });
const manPath = join(OUT, "manifest.json");
const manifest: { images: Record<string, Entry> } = existsSync(manPath) ? JSON.parse(readFileSync(manPath, "utf8")) : { images: {} };
const all = loadStyleFiles("fashion").map((f) => f.style as unknown as Style);
for (const s of all) {
  if (only && !only.includes(s.id)) continue;
  const svg = board(s, fabrics, materials);
  writeFileSync(join(OUT, `${s.id}.svg`), svg);
  manifest.images[s.id] = {
    file: `${s.id}.svg`, kind: "swatch-board",
    subject: "up to eight cloths and materials of the style, drawn as weave, knit or surface, with a time line of their origins",
    model: "drawn by scripts/render-fashion-swatches.ts from the fabric rules (no image model)",
    width: W, height: H, generated: new Date().toISOString(),
  };
  console.log(`${s.id}: ${(svg.length / 1024).toFixed(0)} KB`);
}
for (const id of Object.keys(manifest.images)) if (!all.some((s) => s.id === id)) delete manifest.images[id];
manifest.images = Object.fromEntries(Object.entries(manifest.images).sort(([a], [b]) => a.localeCompare(b)));
writeFileSync(manPath, JSON.stringify(manifest, null, 2) + "\n");
