// Draw one press proof for each print style. No image model: the proof is computed from the process rules of the style.
//
//   npm run proofs [-- --only woodcut-relief-print,risograph-print]
//
// The subject is one fixed landscape (sky, sun, far hills, a lake, a near hill and a tree), so that the proofs compare
// processes and not scenes. Each ink of `inks.colours` is one plate. The first ink is the key. The other inks take the
// parts of the scene that their hue suits (a blue takes the sky and the water, a yellow the sun and the field).
// The script reads these fields of the style:
//   screening.method      solid, line, hatch, grain, halftone or tint: how the plate makes a tone
//   screening.ruling_lpi  the pitch of the screen, the lines or the grain
//   screening.angles      the angle of each plate
//   inks.overprint        transparent inks multiply where they overlap; opaque inks cover
//   registration          the shift of each plate against the key
//   substrate.ground      the colour of the sheet
//   process.family        intaglio adds a plate mark
//   vectors.hand_trace    a wobble of the edges, from 0 (machine) to the scale of a hand cut
// A real screen at 150 lpi is too fine to see on a screen, so the screen, the grain and the register are drawn enlarged.
// The footer of each proof gives the scale.
// Output: demo/previews/print/<id>.svg and the "proofs" key of demo/previews/print/manifest.json. The "images" key
// holds the generated preview of each style (render-previews.ts --domain print), so the proof is a second view.
import { writeFileSync, mkdirSync, existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { ROOT, loadStyleFiles } from "./lib.js";

const W = 1152, H = 768;
const IX = 56, IY = 76, IW = 744, IH = 560; // image area of the proof
const TEXT = "#1d1b17", MUTED = "#5f5b52";
const UI = "font-family:system-ui,-apple-system,'Segoe UI',sans-serif";
const PX_PER_MM = 4; // the register shift is drawn at this scale
const OUT = join(ROOT, "demo", "previews", "print");

type Method = "solid" | "line" | "hatch" | "grain" | "halftone" | "tint";
interface Ink { name: string; hex: string; role: string }
interface PrintStyle {
  id: string; name: string; era_id: string; time_period: { label: string };
  vectors: Record<string, number>;
  process: { family: string };
  inks: { overprint: "opaque" | "transparent" | "mixed"; colours: Ink[] };
  screening: { method: Method; ruling_lpi: number; angles?: number[] };
  registration: { tolerance_mm: number };
  substrate: { ground: string; weight_gsm_min: number; weight_gsm_max: number };
}
interface Entry { file: string; kind: "press-proof"; subject: string; model: string; width: number; height: number; generated: string }

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

// ---- The scene, in the coordinates of the image area (0..IW, 0..IH) ------------------------------------------------

const TAU = Math.PI * 2;
const farY = (x: number) => IH * (0.47 + 0.05 * Math.sin((x / IW) * TAU * 1.2 + 0.5) + 0.025 * Math.sin((x / IW) * TAU * 3.3 + 1.1));
const LAKE = IH * 0.63;
const nearY = (x: number) => IH * (0.73 + 0.07 * Math.sin((x / IW) * TAU * 0.75 + 2.4));
const SUN = { x: IW * 0.7, y: IH * 0.27, r: IW * 0.085 };
const TREE = { x: IW * 0.21, rx: IW * 0.055, ry: IH * 0.15 };
const treeBase = nearY(TREE.x);
const CANOPY = { x: TREE.x, y: treeBase - IH * 0.2, rx: TREE.rx, ry: TREE.ry };
const TRUNK = { x0: TREE.x - IW * 0.008, x1: TREE.x + IW * 0.008, y0: CANOPY.y, y1: treeBase + 6 };

type Region = "sky" | "sun" | "far" | "water" | "near" | "tree";
const REGIONS: Region[] = ["sky", "sun", "far", "water", "near", "tree"];
/** The top region at a point of the image area. */
function regionAt(x: number, y: number): Region {
  const cx = (x - CANOPY.x) / CANOPY.rx, cy = (y - CANOPY.y) / CANOPY.ry;
  if (cx * cx + cy * cy <= 1 || (x >= TRUNK.x0 && x <= TRUNK.x1 && y >= TRUNK.y0 && y <= TRUNK.y1)) return "tree";
  if ((x - SUN.x) ** 2 + (y - SUN.y) ** 2 <= SUN.r ** 2) return "sun";
  if (y < farY(x)) return "sky";
  if (y < LAKE) return "far";
  if (y < nearY(x)) return "water";
  return "near";
}
/** The vertical extent of each region, for its tone gradient. */
const SPAN: Record<Region, [number, number]> = {
  sky: [0, IH * 0.52], sun: [SUN.y - SUN.r, SUN.y + SUN.r], far: [IH * 0.42, LAKE], water: [LAKE, IH * 0.8],
  near: [IH * 0.66, IH], tree: [CANOPY.y - CANOPY.ry, treeBase],
};

const curve = (f: (x: number) => number, from: number, to: number) => {
  const pts: string[] = [];
  const step = from < to ? 8 : -8;
  for (let x = from; step > 0 ? x <= to : x >= to; x += step) pts.push(`${r1(x)},${r1(f(x))}`);
  pts.push(`${r1(to)},${r1(f(to))}`);
  return pts.join(" L");
};
const circle = (cx: number, cy: number, r: number) => `M${r1(cx - r)},${r1(cy)} a${r1(r)},${r1(r)} 0 1,0 ${r1(2 * r)},0 a${r1(r)},${r1(r)} 0 1,0 ${r1(-2 * r)},0Z`;
const ellipse = (cx: number, cy: number, rx: number, ry: number) => `M${r1(cx - rx)},${r1(cy)} a${r1(rx)},${r1(ry)} 0 1,0 ${r1(2 * rx)},0 a${r1(rx)},${r1(ry)} 0 1,0 ${r1(-2 * rx)},0Z`;
/** The outline of each region. The sky has the sun as a hole (fill-rule evenodd). */
const PATH: Record<Region, string> = {
  sky: `M0,0 L${IW},0 L${curve(farY, IW, 0)} Z ${circle(SUN.x, SUN.y, SUN.r)}`,
  sun: circle(SUN.x, SUN.y, SUN.r),
  far: `M${curve(farY, 0, IW)} L${IW},${r1(LAKE)} L0,${r1(LAKE)} Z`,
  water: `M0,${r1(LAKE)} L${IW},${r1(LAKE)} L${curve(nearY, IW, 0)} Z`,
  near: `M${curve(nearY, 0, IW)} L${IW},${IH} L0,${IH} Z`,
  tree: `${ellipse(CANOPY.x, CANOPY.y, CANOPY.rx, CANOPY.ry)} M${r1(TRUNK.x0)},${r1(TRUNK.y0)} L${r1(TRUNK.x1)},${r1(TRUNK.y0)} L${r1(TRUNK.x1)},${r1(TRUNK.y1)} L${r1(TRUNK.x0)},${r1(TRUNK.y1)} Z`,
};
/** The key lines that a cutter or a draughtsman puts on the edges of the regions. */
const CONTOURS = [`M${curve(farY, 0, IW)}`, `M${curve(nearY, 0, IW)}`, circle(SUN.x, SUN.y, SUN.r), ellipse(CANOPY.x, CANOPY.y, CANOPY.rx, CANOPY.ry)];

// ---- Separations: the tone of each plate in each region, as [top, bottom] -----------------------------------------

type Tone = [number, number];
type Separation = Record<Region, Tone>;
const SEP: Record<string, Separation> = {
  mono: { sky: [0.38, 0.08], sun: [0, 0], far: [0.5, 0.42], water: [0.22, 0.26], near: [0.62, 0.85], tree: [0.97, 0.97] },
  key: { sky: [0, 0], sun: [0, 0], far: [0.08, 0.12], water: [0.04, 0.06], near: [0.15, 0.35], tree: [1, 1] },
  keyFlat: { sky: [0, 0], sun: [0, 0], far: [0, 0], water: [0, 0], near: [0, 0], tree: [1, 1] },
  cool: { sky: [0.6, 0.12], sun: [0, 0], far: [0.65, 0.55], water: [0.55, 0.65], near: [0.25, 0.35], tree: [0.4, 0.4] },
  red: { sky: [0, 0.35], sun: [0.55, 0.55], far: [0.25, 0.25], water: [0.1, 0.1], near: [0.3, 0.4], tree: [0.3, 0.3] },
  yellow: { sky: [0, 0.4], sun: [1, 1], far: [0.2, 0.2], water: [0.15, 0.1], near: [0.65, 0.75], tree: [0.3, 0.3] },
  green: { sky: [0, 0], sun: [0, 0], far: [0.5, 0.5], water: [0.15, 0.2], near: [0.7, 0.8], tree: [0.8, 0.8] },
  neutral: { sky: [0.19, 0.04], sun: [0, 0], far: [0.25, 0.21], water: [0.11, 0.13], near: [0.31, 0.42], tree: [0.5, 0.5] },
};
function hsl(hex: string) {
  const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255);
  const max = Math.max(r, g, b), min = Math.min(r, g, b), l = (max + min) / 2, d = max - min;
  const s = d === 0 ? 0 : d / (1 - Math.abs(2 * l - 1));
  let h = 0;
  if (d) h = max === r ? ((g - b) / d) % 6 : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
  return { h: (h * 60 + 360) % 360, s, l };
}
/** The separation that a non-key ink takes, from its hue. */
function classOf(hex: string): string {
  const { h, s } = hsl(hex);
  if (s < 0.15) return "neutral";
  if (h < 20 || h >= 290) return "red";
  if (h < 75) return "yellow";
  if (h < 170) return "green";
  return "cool";
}
const toneAt = (sep: Separation, x: number, y: number) => {
  const reg = regionAt(x, y), [a, b] = sep[reg], [y0, y1] = SPAN[reg];
  const k = Math.min(1, Math.max(0, (y - y0) / (y1 - y0)));
  return a + (b - a) * k;
};
const avg = (t: Tone) => (t[0] + t[1]) / 2;

// ---- Plate renderers ------------------------------------------------------------------------------------------------

interface Plate { hex: string; sep: Separation; angle: number; contours: boolean }
interface Ctx { id: string; cell: number; hand: number; defs: string[]; n: number }

/** A tone field: the scene, or one flat patch of the colour bar. */
interface Field { w: number; h: number; tone: (x: number, y: number) => number; regions?: { d: string; tone: Tone; span: [number, number] }[] }
const sceneField = (sep: Separation): Field => ({
  w: IW, h: IH, tone: (x, y) => toneAt(sep, x, y),
  regions: REGIONS.map((r) => ({ d: PATH[r], tone: sep[r], span: SPAN[r] })),
});
const patchField = (w: number, h: number, t: number): Field => ({ w, h, tone: () => t, regions: [{ d: `M0,0 H${w} V${h} H0 Z`, tone: [t, t], span: [0, h] }] });

/** Continuous tone of the field, as filled regions with an opacity gradient. */
function contone(f: Field, hex: string, ctx: Ctx): string {
  return (f.regions ?? []).filter((r) => r.tone[0] > 0 || r.tone[1] > 0).map((r) => {
    if (r.tone[0] === r.tone[1]) return `<path d="${r.d}" fill="${hex}" fill-opacity="${r1(r.tone[0] * 100) / 100}" fill-rule="evenodd"/>`;
    const id = `g${ctx.n++}`;
    ctx.defs.push(`<linearGradient id="${ctx.id}-${id}" gradientUnits="userSpaceOnUse" x1="0" y1="${r1(r.span[0])}" x2="0" y2="${r1(r.span[1])}"><stop offset="0" stop-color="${hex}" stop-opacity="${r.tone[0]}"/><stop offset="1" stop-color="${hex}" stop-opacity="${r.tone[1]}"/></linearGradient>`);
    return `<path d="${r.d}" fill="url(#${ctx.id}-${id})" fill-rule="evenodd"/>`;
  }).join("");
}

function solid(f: Field, hex: string): string {
  return (f.regions ?? []).filter((r) => avg(r.tone) >= 0.3).map((r) => `<path d="${r.d}" fill="${hex}" fill-rule="evenodd"/>`).join("");
}

/** Fixed dots in a few flat tints, as a pattern (Ben-Day). */
function tint(f: Field, p: Plate, ctx: Ctx): string {
  return (f.regions ?? []).map((r) => {
    const t = avg(r.tone);
    if (t < 0.12) return "";
    if (t >= 0.72) return `<path d="${r.d}" fill="${p.hex}" fill-rule="evenodd"/>`;
    const c = ctx.cell, rad = c * (t < 0.35 ? 0.28 : 0.4), id = `t${ctx.n++}`;
    ctx.defs.push(`<pattern id="${ctx.id}-${id}" width="${c}" height="${c}" patternUnits="userSpaceOnUse" patternTransform="rotate(${p.angle})"><circle cx="${c / 2}" cy="${c / 2}" r="${r1(rad)}" fill="${p.hex}"/></pattern>`);
    return `<path d="${r.d}" fill="url(#${ctx.id}-${id})" fill-rule="evenodd"/>`;
  }).join("");
}

/** An amplitude screen: one dot for each cell, with the area of the dot equal to the tone. */
function halftone(f: Field, p: Plate, ctx: Ctx): string {
  const c = ctx.cell, a = (p.angle * Math.PI) / 180, cos = Math.cos(a), sin = Math.sin(a);
  const reach = Math.hypot(f.w, f.h);
  let d = "";
  for (let v = -reach; v <= reach; v += c)
    for (let u = -reach; u <= reach; u += c) {
      const x = f.w / 2 + u * cos - v * sin, y = f.h / 2 + u * sin + v * cos;
      if (x < -c || y < -c || x > f.w + c || y > f.h + c) continue;
      const t = f.tone(Math.min(f.w - 0.01, Math.max(0, x)), Math.min(f.h - 0.01, Math.max(0, y)));
      if (t < 0.03) continue;
      const rad = c * Math.sqrt(t / Math.PI) * 1.05;
      d += circle(x, y, rad);
    }
  return `<path d="${d}" fill="${p.hex}"/>`;
}

/** Lines along the rotated x axis that swell with the tone (engraving, white-line woodcut). */
function lines(f: Field, p: Plate, ctx: Ctx, rand: () => number): string {
  const s = ctx.cell, a = (p.angle * Math.PI) / 180, cos = Math.cos(a), sin = Math.sin(a);
  const reach = Math.hypot(f.w, f.h) / 2 + s, step = 6;
  const out: string[] = [];
  let k = 0;
  for (let v = -reach; v <= reach; v += s, k++) {
    const phase = rand() * TAU, amp = 0.6 + 0.4 * ctx.hand;
    let top: string[] = [], bot: string[] = [];
    // A ribbon ends where the tone is 0 or the line leaves the image, so the path holds only the inked parts.
    const flush = () => { if (top.length > 1) out.push(`M${top.join(" L")} L${bot.join(" L")}Z`); top = []; bot = []; };
    for (let u = -reach; u <= reach; u += step) {
      const vv = v + amp * Math.sin(u / 37 + phase + k * 0.21);
      const x = f.w / 2 + u * cos - vv * sin, y = f.h / 2 + u * sin + vv * cos;
      const inside = x >= -step && y >= -step && x < f.w + step && y < f.h + step;
      const t = inside ? f.tone(Math.min(f.w - 0.01, Math.max(0, x)), Math.min(f.h - 0.01, Math.max(0, y))) : 0;
      if (t < 0.02) { flush(); continue; }
      const w = Math.min(s * 0.98, s * t * 1.02);
      const nx = -sin * w / 2, ny = cos * w / 2;
      top.push(`${r1(x + nx)},${r1(y + ny)}`);
      bot.unshift(`${r1(x - nx)},${r1(y - ny)}`);
    }
    flush();
  }
  return `<path d="${out.join("")}" fill="${p.hex}"/>`;
}

/** One, two or three layers of crossed lines, each one where the tone passes its level (etching). */
function hatch(f: Field, p: Plate, ctx: Ctx, rand: () => number): string {
  const s = ctx.cell, levels: [number, number][] = [[0.15, p.angle], [0.42, p.angle + 90], [0.68, p.angle + 45], [0.88, p.angle + 135]];
  const width = Math.max(0.8, s * 0.2), step = 5;
  const segs: string[] = [];
  for (const [level, ang] of levels) {
    const a = (ang * Math.PI) / 180, cos = Math.cos(a), sin = Math.sin(a);
    const reach = Math.hypot(f.w, f.h) / 2 + s;
    for (let v = -reach; v <= reach; v += s) {
      const phase = rand() * TAU, amp = 0.3 * ctx.hand;
      let run: string[] = [];
      const flush = () => { if (run.length > 1) segs.push(`M${run.join(" L")}`); run = []; };
      for (let u = -reach; u <= reach; u += step) {
        const vv = v + amp * Math.sin(u / 23 + phase);
        const x = f.w / 2 + u * cos - vv * sin, y = f.h / 2 + u * sin + vv * cos;
        if (x >= 0 && y >= 0 && x < f.w && y < f.h && f.tone(x, y) >= level) run.push(`${r1(x)},${r1(y)}`);
        else flush();
      }
      flush();
    }
  }
  return `<path d="${segs.join("")}" fill="none" stroke="${p.hex}" stroke-width="${r1(width)}" stroke-linecap="round"/>`;
}

/** A stochastic screen: the continuous tone is cut against a noise field, so the tone becomes grain. */
function grain(f: Field, p: Plate, ctx: Ctx, seed: number): string {
  const id = `${ctx.id}-n${ctx.n++}`, freq = r1((0.9 / ctx.cell) * 100) / 100;
  ctx.defs.push(
    `<filter id="${id}" filterUnits="userSpaceOnUse" x="0" y="0" width="${f.w}" height="${f.h}" color-interpolation-filters="sRGB">` +
      `<feTurbulence type="fractalNoise" baseFrequency="${freq}" numOctaves="2" seed="${seed}" result="n"/>` +
      `<feComponentTransfer in="n" result="s"><feFuncR type="linear" slope="3.2" intercept="-1.1"/></feComponentTransfer>` +
      `<feColorMatrix in="s" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0" result="a"/>` +
      `<feComposite in="SourceAlpha" in2="a" operator="arithmetic" k1="0" k2="1" k3="-1" k4="0.5" result="d"/>` +
      `<feComponentTransfer in="d" result="t"><feFuncA type="discrete" tableValues="0 1"/></feComponentTransfer>` +
      `<feFlood flood-color="${p.hex}"/><feComposite in2="t" operator="in"/></filter>`,
  );
  return `<g filter="url(#${id})">${contone(f, "#000000", ctx)}</g>`;
}

function plate(method: Method, f: Field, p: Plate, ctx: Ctx, rand: () => number, seed: number): string {
  switch (method) {
    case "solid": return solid(f, p.hex);
    case "tint": return tint(f, p, ctx);
    case "halftone": return halftone(f, p, ctx);
    case "line": return lines(f, p, ctx, rand);
    case "hatch": return hatch(f, p, ctx, rand);
    case "grain": return grain(f, p, ctx, seed);
  }
}

// ---- The proof sheet --------------------------------------------------------------------------------------------------

/** The drawn size of one screen cell or grain, in px: enlarged so that the screen reads on a monitor. */
const cellFor = (m: Method, lpi: number) => (m === "solid" ? 8 : Math.max(3, Math.min(16, Math.round(600 / Math.max(lpi, 1)))));

function wrap(text: string, max: number): string[] {
  const out: string[] = [];
  let line = "";
  for (const w of text.split(/\s+/)) {
    if ((line + " " + w).trim().length > max) { if (line) out.push(line); line = w; } else line = (line + " " + w).trim();
  }
  if (line) out.push(line);
  return out;
}

function proof(s: PrintStyle): string {
  const rand = rng(s.id);
  const ink = s.inks.colours, method = s.screening.method, lpi = s.screening.ruling_lpi;
  const ctx: Ctx = { id: s.id, cell: cellFor(method, lpi), hand: Math.max(0, (s.vectors.hand_trace ?? 1) - 1), defs: [], n: 0 };
  const flatKey = method === "solid" || method === "tint";
  const plates: Plate[] = ink.map((c, i) => ({
    hex: c.hex,
    sep: SEP[ink.length === 1 ? "mono" : i === 0 ? (flatKey ? "keyFlat" : "key") : classOf(c.hex)],
    angle: s.screening.angles?.[i] ?? [45, 15, 75, 0, 30, 60][i % 6],
    contours: i === 0 && (flatKey || method === "line" || ink.length === 1 && method !== "grain"),
  }));
  // The key prints last, so an opaque colour plate does not cover the line.
  const order = plates.length > 1 ? [...plates.slice(1), plates[0]] : plates;
  const tol = s.registration.tolerance_mm * PX_PER_MM;
  const shift = (i: number) => {
    if (i === 0 || tol === 0) return [0, 0];
    const a = rand() * TAU, m = tol * (0.6 + 0.4 * rand());
    return [r1(Math.cos(a) * m), r1(Math.sin(a) * m)];
  };
  const shifts = plates.map((_, i) => shift(i));
  const blend = (i: number) => (s.inks.overprint === "transparent" || (s.inks.overprint === "mixed" && i !== 0) ? "mix-blend-mode:multiply" : "");
  const parts: string[] = [];
  const text = (x: number, y: number, t: string, size = 13, fill = MUTED, weight = 400, anchor = "start") =>
    parts.push(`<text x="${x}" y="${y}" font-size="${size}" font-weight="${weight}" fill="${fill}" text-anchor="${anchor}" style="${UI}">${esc(t)}</text>`);

  // The hand wobble: a small displacement of each plate edge.
  const wobble = ctx.hand > 0.5;
  if (wobble)
    ctx.defs.push(`<filter id="${s.id}-hand" x="-2%" y="-2%" width="104%" height="104%"><feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" seed="11"/><feDisplacementMap in="SourceGraphic" scale="${r1(ctx.hand * 1.6)}" xChannelSelector="R" yChannelSelector="G"/></filter>`);
  const hand = wobble ? ` filter="url(#${s.id}-hand)"` : "";

  // Paper, with a faint fibre.
  ctx.defs.push(`<filter id="${s.id}-paper" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="0.9 0.35" numOctaves="2" seed="5"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 -0.6 0.32"/></filter>`);
  ctx.defs.push(`<clipPath id="${s.id}-img"><rect x="0" y="0" width="${IW}" height="${IH}"/></clipPath>`);
  parts.push(`<rect width="${W}" height="${H}" fill="${s.substrate.ground}"/>`);
  parts.push(`<rect width="${W}" height="${H}" filter="url(#${s.id}-paper)" opacity="0.5"/>`);

  // An intaglio plate leaves a plate mark and a light film of ink inside it.
  if (s.process.family === "intaglio") {
    parts.push(`<rect x="${IX - 18}" y="${IY - 18}" width="${IW + 36}" height="${IH + 36}" fill="${ink[0].hex}" fill-opacity="0.045" stroke="#000" stroke-opacity="0.16" stroke-width="1.5"/>`);
    parts.push(`<rect x="${IX - 16.5}" y="${IY - 16.5}" width="${IW + 33}" height="${IH + 33}" fill="none" stroke="#fff" stroke-opacity="0.55" stroke-width="1"/>`);
  }

  // The image: each plate in its own layer, shifted by its register error.
  const scene: string[] = [];
  for (const p of order) {
    const i = plates.indexOf(p), [dx, dy] = shifts[i];
    let body = plate(method, sceneField(p.sep), p, ctx, rand, 3 + i * 7);
    if (p.contours) body += `<path d="${CONTOURS.join(" ")}" fill="none" stroke="${p.hex}" stroke-width="${method === "solid" || method === "tint" ? 3 : 1.6}" stroke-linejoin="round"/>`;
    scene.push(`<g transform="translate(${dx} ${dy})" style="${blend(i)}"><g${hand}>${body}</g></g>`);
  }
  parts.push(`<g transform="translate(${IX} ${IY})"><g clip-path="url(#${s.id}-img)" style="isolation:isolate">${scene.join("")}</g></g>`);

  // Crop marks and register targets, one target for each plate at its own shift.
  const k = ink[0].hex, crop: string[] = [];
  for (const [x, y, sx, sy] of [[IX, IY, -1, -1], [IX + IW, IY, 1, -1], [IX, IY + IH, -1, 1], [IX + IW, IY + IH, 1, 1]] as const)
    crop.push(`M${x + sx * 6},${y} h${sx * 18} M${x},${y + sy * 6} v${sy * 18}`);
  parts.push(`<path d="${crop.join("")}" stroke="${k}" stroke-width="0.8" fill="none"/>`);
  for (const [tx, ty] of [[IX + IW / 2, IY - 30], [IX - 30, IY + IH / 2], [IX + IW + 30, IY + IH / 2]]) {
    const t: string[] = [];
    plates.forEach((p, i) => {
      const [dx, dy] = shifts[i];
      t.push(`<g transform="translate(${tx + dx} ${ty + dy})" style="${blend(i)}"><circle r="8" fill="none" stroke="${p.hex}" stroke-width="1"/><path d="M-13,0 H13 M0,-13 V13" stroke="${p.hex}" stroke-width="1"/></g>`);
    });
    parts.push(`<g style="isolation:isolate">${t.join("")}</g>`);
  }

  // The colour bar: each plate at 100, 70, 40 and 15 %, in the screen of the style.
  const PW = 34, PH = 26, by = IY + IH + 26;
  let bx = IX;
  plates.forEach((p, i) => {
    for (const t of [1, 0.7, 0.4, 0.15]) {
      const sep = patchField(PW, PH, t);
      const body = method === "solid" ? (t >= 0.3 ? `<rect width="${PW}" height="${PH}" fill="${p.hex}"/>` : "") : plate(method, sep, p, ctx, rand, 40 + i);
      parts.push(`<g transform="translate(${bx} ${by})"><svg width="${PW}" height="${PH}" overflow="hidden">${body}</svg><rect width="${PW}" height="${PH}" fill="none" stroke="${MUTED}" stroke-opacity="0.35" stroke-width="0.6"/></g>`);
      bx += PW + 2;
    }
    bx += 10;
  });
  if (plates.length > 1 && bx + PW < IX + IW) {
    const all = plates.map((p, i) => `<rect width="${PW}" height="${PH}" fill="${p.hex}" style="${blend(i)}"/>`).join("");
    parts.push(`<g transform="translate(${bx} ${by})" style="isolation:isolate">${all}<rect width="${PW}" height="${PH}" fill="none" stroke="${MUTED}" stroke-opacity="0.35" stroke-width="0.6"/></g>`);
  }

  // The data panel.
  const PX = 840;
  text(PX, IY + 4, s.name.toUpperCase(), 17, TEXT, 650);
  text(PX, IY + 26, s.time_period.label, 13, MUTED);
  let y = IY + 66;
  const row = (label: string, value: string) => {
    text(PX, y, label.toUpperCase(), 10.5, MUTED, 600);
    y += 17;
    for (const l of wrap(value, 34)) { text(PX, y, l, 13.5, TEXT); y += 18; }
    y += 10;
  };
  const fam = s.process.family.charAt(0).toUpperCase() + s.process.family.slice(1);
  row("Process", fam);
  row("Inks", `${ink.length} · ${s.inks.overprint} overprint`);
  ink.forEach((c) => {
    parts.push(`<rect x="${PX}" y="${y - 11}" width="13" height="13" fill="${c.hex}" stroke="#000" stroke-opacity="0.2"/>`);
    text(PX + 20, y, `${c.name} ${c.hex}`, 12.5, TEXT);
    y += 19;
  });
  y += 10;
  row("Tone", method === "solid" ? "Solid ink, no screen" : `${method[0].toUpperCase()}${method.slice(1)}, ${lpi} lpi`);
  row("Register", s.registration.tolerance_mm === 0 ? "Exact" : `± ${s.registration.tolerance_mm} mm`);
  row("Stock", `${s.substrate.ground} · ${s.substrate.weight_gsm_min}–${s.substrate.weight_gsm_max} g/m²`);

  const scale = method === "solid" ? "" : ` Screen drawn at ${ctx.cell} px a cell.`;
  text(IX, H - 22, `Press proof drawn by code from data/print/styles/${s.id}.json.${scale} Register shift drawn at ${PX_PER_MM} px a mm.`, 11, MUTED);

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}"><defs>${ctx.defs.join("")}</defs>${parts.join("")}</svg>\n`;
}

// ---- Main -------------------------------------------------------------------------------------------------------------

mkdirSync(OUT, { recursive: true });
const manPath = join(OUT, "manifest.json");
const manifest: { images: Record<string, any>; proofs: Record<string, Entry> } = existsSync(manPath) ? JSON.parse(readFileSync(manPath, "utf8")) : { images: {} };
// Before 2026-11-19 the proofs were the "images". Move them to "proofs".
manifest.proofs ??= {};
for (const [id, e] of Object.entries(manifest.images)) if (e.kind === "press-proof") { manifest.proofs[id] = e; delete manifest.images[id]; }
const all = loadStyleFiles("print").map((f) => f.style as unknown as PrintStyle);
for (const s of all) {
  if (only && !only.includes(s.id)) continue;
  const svg = proof(s);
  writeFileSync(join(OUT, `${s.id}.svg`), svg);
  manifest.proofs[s.id] = {
    file: `${s.id}.svg`, kind: "press-proof",
    subject: "a landscape with sky, sun, far hills, a lake, a near hill and a tree, with register marks and a colour bar",
    model: "drawn by scripts/render-print-proofs.ts from the process rules (no image model)",
    width: W, height: H, generated: new Date().toISOString(),
  };
  console.log(`${s.id}: ${(svg.length / 1024).toFixed(0)} KB`);
}
for (const id of Object.keys(manifest.proofs)) if (!all.some((s) => s.id === id)) delete manifest.proofs[id];
manifest.proofs = Object.fromEntries(Object.entries(manifest.proofs).sort(([a], [b]) => a.localeCompare(b)));
writeFileSync(manPath, JSON.stringify(manifest, null, 2) + "\n");
