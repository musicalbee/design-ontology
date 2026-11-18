/**
 * The visual pack of a style: derived colour tokens, an icon sprite, a hero plate and a pattern tile.
 * All output is plain SVG with resolved colours, so each file works with no stylesheet.
 * All randomness comes from a seeded generator: the same data gives the same bytes.
 */
import type { Style } from "./lib.js";

export interface Visual {
  type: { display_weight: number; subhead_weight: number; body_weight: number; strong_weight: number; label_weight: number; accent: string; display_tracking: string; display_leading: number; display_case: string; body_leading: number; body_size: string };
  icon: { mode: "outline" | "solid" | "duotone"; stroke_width: number; linecap: string; linejoin: string; container: string; pack: { id: string; why: string } };
  art: { recipe: string; pattern: string; seed: number };
  layout: { hero: string; align: string; density: string; tilt_deg: number };
}

// ── colour ──────────────────────────────────────────────────────────────────
type RGBA = [number, number, number, number];
export function parseColor(c: string): RGBA | null {
  const s = c.trim();
  let m = /^#([0-9a-f]{6})([0-9a-f]{2})?$/i.exec(s);
  if (m) return [0, 2, 4].map((i) => parseInt(m![1].slice(i, i + 2), 16)).concat(m[2] ? parseInt(m[2], 16) / 255 : 1) as RGBA;
  m = /^rgba?\(\s*([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)(?:[,/\s]+([\d.]+))?\s*\)$/i.exec(s);
  if (m) return [Number(m[1]), Number(m[2]), Number(m[3]), m[4] === undefined ? 1 : Number(m[4])];
  return null;
}
const hex = ([r, g, b]: number[]) => "#" + [r, g, b].map((v) => Math.round(v).toString(16).padStart(2, "0")).join("").toUpperCase();
/** A colour as an opaque hex value, laid over `under` when it has alpha. */
export function flat(c: string, under = "#FFFFFF"): string {
  const top = parseColor(c);
  const base = parseColor(under) ?? [255, 255, 255, 1];
  if (!top) return hex(base);
  return hex([0, 1, 2].map((i) => top[i] * top[3] + base[i] * (1 - top[3])));
}
function luminance(h: string): number {
  const [r, g, b] = [1, 3, 5].map((i) => {
    const c = parseInt(h.slice(i, i + 2), 16) / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}
export function contrast(a: string, b: string): number {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
}
export const mix = (a: string, b: string, t: number) => {
  const [x, y] = [parseColor(a)!, parseColor(b)!];
  return hex([0, 1, 2].map((i) => x[i] * (1 - t) + y[i] * t));
};

/** The legible text colour on `field`: an authored colour if one reaches 4.5:1, else black or white. */
function on(field: string, authored: string[], name = "", warn?: (m: string) => void): string {
  const best = (list: string[]) => [...list].sort((a, b) => contrast(b, field) - contrast(a, field))[0];
  const own = best(authored);
  if (contrast(own, field) >= 4.5) return own;
  const fallback = best(["#000000", "#FFFFFF"]);
  warn?.(`${name}: the best authored colour ${own} is ${contrast(own, field).toFixed(2)}:1 on ${field}; the compiler uses ${fallback}`);
  return fallback;
}

/**
 * Tokens that the compiler derives. An author writes --color-text for the main reading field only;
 * these tokens give a legible colour for each field, so that no pair of tokens can make text disappear.
 */
export function derivedTokens(css: Record<string, string>, warn?: (m: string) => void): Record<string, string> {
  const bg = flat(css["--color-bg"]);
  const surface = flat(css["--color-surface"], bg);
  const text = flat(css["--color-text"], bg);
  const muted = flat(css["--color-muted"], bg);
  const primary = flat(css["--color-primary"], bg);
  const accent = flat(css["--color-accent"], bg);
  const onBg = on(bg, [text, surface], "--color-on-bg", warn);
  const onSurface = on(surface, [flat(css["--color-text"], surface), bg], "--color-on-surface", warn);
  // A quiet colour keeps 4.5 to 1. If the authored one is too weak, step from the field towards the text colour.
  const quiet = (authored: string, field: string, strong: string, name = "--color-muted") => {
    if (contrast(authored, field) >= 4.5) return authored;
    warn?.(`${name}: ${authored} is ${contrast(authored, field).toFixed(2)}:1 on ${field}; the compiler steps it towards the text colour`);
    for (const t of [0.3, 0.2, 0.1]) {
      const c = mix(strong, field, t);
      if (contrast(c, field) >= 4.5) return c;
    }
    return strong;
  };
  const accentOnSurface = flat(css["--color-accent"], surface);
  const out: Record<string, string> = {
    "--color-on-bg": onBg,
    "--color-on-surface": onSurface,
    "--color-on-primary": on(primary, [text, bg], "--color-on-primary", warn),
    "--color-on-accent": on(accent, [text, bg], "--color-on-accent", warn),
    "--color-muted-on-bg": quiet(muted, bg, onBg, "--color-muted on bg"),
    "--color-muted-on-surface": quiet(flat(css["--color-muted"], surface), surface, onSurface, "--color-muted on surface"),
    "--color-link": contrast(accent, bg) >= 4.5 ? accent : contrast(primary, bg) >= 4.5 ? primary : onBg,
    "--color-link-on-surface": contrast(accentOnSurface, surface) >= 4.5 ? accentOnSurface : contrast(flat(css["--color-primary"], surface), surface) >= 4.5 ? flat(css["--color-primary"], surface) : onSurface,
  };
  for (const k of Object.keys(out)) if (css[k]) delete out[k]; // an authored token wins
  return out;
}

export function typeTokens(v: Visual): Record<string, string> {
  return {
    "--display-weight": String(v.type.display_weight),
    "--subhead-weight": String(v.type.subhead_weight),
    "--body-weight": String(v.type.body_weight),
    "--strong-weight": String(v.type.strong_weight),
    "--label-weight": String(v.type.label_weight),
    "--display-tracking": v.type.display_tracking,
    "--display-leading": String(v.type.display_leading),
    "--display-case": v.type.display_case,
    "--body-leading": String(v.type.body_leading),
    "--body-size": v.type.body_size,
    "--icon-stroke": String(v.icon.stroke_width),
  };
}

// ── icons ───────────────────────────────────────────────────────────────────
// The sprite is built from an open-source icon family, vendored in icons/packs/<id>.json by
// scripts/fetch-icons.ts. The style names its family in visual.icon.pack. The family is a
// stand-in for the demo: a product uses its own licensed library, chosen by icons/principles.json.
export interface IconPack {
  id: string; name: string; variant: string; mode: string; source: string;
  author: string; author_url: string; license: string; license_spdx: string; license_url: string;
  icons: Record<string, { name: string; width: number; height: number; body: string }>;
}
/** The icon concepts that each pack has. All packs carry the same list. */
export const ICON_NAMES = ["home", "search", "heart", "star", "bell", "user", "mail", "calendar", "image", "bolt", "play", "check", "close", "sliders"];

/** One SVG sprite. Use: <svg><use href="icons.svg#home"/></svg>. Icons take currentColor. */
export function iconSprite(style: Style, v: Visual, pack: IconPack): string {
  // A line family on a 24px field takes the stroke weight of the style, so that the line matches the type.
  const restroke = (body: string, h: number) =>
    pack.mode === "outline" && h === 24 ? body.replace(/stroke-width="[^"]+"/g, `stroke-width="${v.icon.stroke_width}"`) : body;
  const symbols = ICON_NAMES.map((name) => {
    const i = pack.icons[name];
    return `  <symbol id="${name}" viewBox="0 0 ${i.width} ${i.height}">${restroke(i.body, i.height)}</symbol>`;
  });
  return `<!-- ${style.name} icon set: ${pack.name} (${pack.variant}) by ${pack.author}, ${pack.license}. ${pack.license_url}
     An open-source stand-in for the demo. Source: ${pack.source}. Built by design-ontology. -->
<svg xmlns="http://www.w3.org/2000/svg">
${symbols.join("\n")}
</svg>`;
}

// ── drawing helpers ─────────────────────────────────────────────────────────
function rng(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const n = (v: number) => Number(v.toFixed(1));
type Attrs = Record<string, string | number | undefined>;
const at = (a: Attrs = {}) => Object.entries(a).filter(([, v]) => v !== undefined).map(([k, v]) => ` ${k}="${v}"`).join("");
const rect = (x: number, y: number, w: number, h: number, fill: string, a: Attrs = {}) => `<rect x="${n(x)}" y="${n(y)}" width="${n(w)}" height="${n(h)}" fill="${fill}"${at(a)}/>`;
const circ = (cx: number, cy: number, r: number, fill: string, a: Attrs = {}) => `<circle cx="${n(cx)}" cy="${n(cy)}" r="${n(r)}" fill="${fill}"${at(a)}/>`;
const path = (d: string, fill: string, a: Attrs = {}) => `<path d="${d}" fill="${fill}"${at(a)}/>`;
const poly = (pts: number[][], fill: string, a: Attrs = {}) => `<polygon points="${pts.map((p) => p.map(n).join(",")).join(" ")}" fill="${fill}"${at(a)}/>`;
const line = (x1: number, y1: number, x2: number, y2: number, stroke: string, w: number, a: Attrs = {}) =>
  `<line x1="${n(x1)}" y1="${n(y1)}" x2="${n(x2)}" y2="${n(y2)}" stroke="${stroke}" stroke-width="${w}"${at(a)}/>`;
const group = (inner: string[], a: Attrs = {}) => `<g${at(a)}>${inner.join("")}</g>`;
const star = (cx: number, cy: number, points: number, outer: number, inner: number, rot = -Math.PI / 2) =>
  Array.from({ length: points * 2 }, (_, i) => {
    const r = i % 2 ? inner : outer;
    const t = rot + (i * Math.PI) / points;
    return [cx + r * Math.cos(t), cy + r * Math.sin(t)];
  });
/** A closed ring whose radius wobbles: the base form of blobs and of psychedelic contour rings. */
function wobble(cx: number, cy: number, r: number, amp: number, lobes: number, phase: number, squash = 1): string {
  const pts = Array.from({ length: 73 }, (_, i) => {
    const t = (i / 72) * Math.PI * 2;
    const rr = r + amp * Math.sin(lobes * t + phase) + amp * 0.4 * Math.sin((lobes + 3) * t - phase * 2);
    return `${n(cx + rr * Math.cos(t))},${n(cy + rr * Math.sin(t) * squash)}`;
  });
  return `M${pts.join("L")}Z`;
}

interface Pal { bg: string; surface: string; ink: string; primary: string; accent: string; muted: string; all: string[] }
function palette(style: Style): Pal {
  const css = style.tokens!.css;
  const bg = flat(css["--color-bg"]);
  const all = ((style.color as { palette: { hex: string }[] }).palette ?? []).map((p) => p.hex.toUpperCase());
  return {
    bg,
    surface: flat(css["--color-surface"], bg),
    ink: on(bg, [flat(css["--color-text"], bg), flat(css["--color-surface"], bg)]),
    primary: flat(css["--color-primary"], bg),
    accent: flat(css["--color-accent"], bg),
    muted: flat(css["--color-muted"], bg),
    all,
  };
}

// ── hero plates: one recipe for each visual language ────────────────────────
const W = 800, H = 600;
type Recipe = (p: Pal, r: () => number, id: string) => string[];

const RECIPES: Record<string, Recipe> = {
  bauhaus: (p) => {
    const [red, blue, yellow] = [p.all[2] ?? p.primary, p.all[3] ?? p.accent, p.all[4] ?? p.accent];
    return [
      rect(0, 0, W, H, p.bg),
      circ(300, 300, 210, red),
      rect(430, 110, 250, 250, blue, { transform: "rotate(45 555 235)" }),
      poly([[90, 520], [330, 520], [210, 310]], yellow),
      rect(-40, 440, 900, 26, p.ink, { transform: "rotate(-24 400 453)" }),
      path("M560 600a180 180 0 0 1 180-180v180z", p.ink),
      circ(300, 300, 70, p.bg),
      line(60, 70, 420, 70, p.ink, 6),
      line(60, 92, 300, 92, p.ink, 2),
      ...[0, 1, 2, 3].map((i) => circ(620 + i * 36, 520, 9, i === 1 ? red : p.ink)),
    ];
  },
  swiss: (p) => {
    const col = W / 12;
    return [
      rect(0, 0, W, H, p.bg),
      rect(0, 0, col * 5, H, p.accent),
      ...Array.from({ length: 11 }, (_, i) => line(col * (i + 1), 0, col * (i + 1), H, p.ink, 0.5, { opacity: 0.18 })),
      `<text x="${col * 5 - 10}" y="548" font-family="'Inter Tight','Helvetica Neue',Helvetica,Arial,sans-serif" font-weight="700" font-size="560" letter-spacing="-30" text-anchor="end" fill="${p.bg}">5</text>`,
      `<text x="${col * 6}" y="150" font-family="'Inter Tight','Helvetica Neue',Helvetica,Arial,sans-serif" font-weight="700" font-size="92" letter-spacing="-4" fill="${p.ink}">raster</text>`,
      rect(col * 6, 180, col * 5, 3, p.ink),
      ...[0, 1, 2, 3, 4, 5, 6].map((i) => rect(col * 6, 214 + i * 22, col * (i % 3 === 2 ? 2.6 : 4), 7, p.ink, { opacity: 0.82 })),
      ...[0, 1, 2, 3].map((i) => rect(col * 9, 430 + i * 22, col * (i === 3 ? 1.2 : 2), 7, p.ink, { opacity: 0.82 })),
      circ(col * 6 + 38, 500, 38, p.ink),
    ];
  },
  midcentury: (p, r) => {
    const [mustard, teal, orange, olive] = [p.all[2] ?? p.primary, p.all[3] ?? p.accent, p.all[4] ?? p.accent, p.all[5] ?? p.muted];
    const burst = (cx: number, cy: number, len: number, c: string) =>
      group([...Array.from({ length: 12 }, (_, i) => {
        const t = (i / 12) * Math.PI * 2, l = i % 2 ? len * 0.6 : len;
        return line(cx, cy, cx + l * Math.cos(t), cy + l * Math.sin(t), c, 2.5, { "stroke-linecap": "round" }) + circ(cx + l * Math.cos(t), cy + l * Math.sin(t), i % 2 ? 0 : 4, c);
      })]);
    return [
      rect(0, 0, W, H, p.bg),
      path(wobble(250, 330, 170, 34, 2, 0.6, 0.8), teal),
      path(wobble(540, 250, 140, 30, 3, 2.1, 0.85), mustard),
      path(wobble(470, 430, 95, 22, 2, 4.0), orange, { opacity: 0.92 }),
      path("M130 160c110-70 240-40 300 60-90-40-190-30-270 30z", olive),
      `<ellipse cx="560" cy="250" rx="210" ry="62" fill="none" stroke="${p.ink}" stroke-width="2" transform="rotate(-22 560 250)"/>`,
      `<ellipse cx="560" cy="250" rx="210" ry="62" fill="none" stroke="${p.ink}" stroke-width="2" transform="rotate(38 560 250)"/>`,
      circ(560, 250, 14, p.ink),
      burst(150, 110, 44, p.ink), burst(690, 480, 56, p.ink), burst(330, 520, 26, orange),
      ...Array.from({ length: 7 }, () => circ(60 + r() * 680, 60 + r() * 480, 5, p.ink)),
    ];
  },
  psychedelic: (p, r) => {
    const cols = [p.all[0], p.all[1], p.all[2], p.all[3], p.all[4]].filter(Boolean);
    const rings = Array.from({ length: 16 }, (_, i) => {
      const k = 15 - i;
      return path(wobble(400, 300, 30 + k * 36, 10 + k * 1.6, 5, k * 0.55), cols[k % cols.length]);
    });
    return [
      rect(0, 0, W, H, p.all[5] ?? p.bg),
      ...rings,
      path("M330 300q70-64 140 0-70 64-140 0z", "#FFFFFF"),
      circ(400, 300, 30, p.all[1] ?? p.accent), circ(400, 300, 13, p.all[5] ?? p.bg),
      ...Array.from({ length: 10 }, (_, i) => poly(star(60 + r() * 680, 40 + r() * 520, 5, 16, 7, i), p.all[4] ?? "#FFE600")),
    ];
  },
  memphis: (p, r) => {
    const c = p.all;
    const zig = (x: number, y: number, len: number, col: string, rot: number) =>
      `<polyline points="${Array.from({ length: len }, (_, i) => `${n(x + i * 22)},${n(y + (i % 2 ? -18 : 18))}`).join(" ")}" fill="none" stroke="${col}" stroke-width="9" stroke-linejoin="miter" transform="rotate(${rot} ${x} ${y})"/>`;
    const dots = Array.from({ length: 40 }, (_, i) => circ(470 + (i % 8) * 26, 60 + Math.floor(i / 8) * 26, 5, c[4] ?? p.ink));
    const stripes = Array.from({ length: 9 }, (_, i) => rect(90 + i * 22, 330, 11, 190, c[4] ?? p.ink));
    return [
      rect(0, 0, W, H, c[1] ?? p.bg),
      circ(250, 210, 130, c[0] ?? p.primary, { stroke: c[4] ?? p.ink, "stroke-width": 6 }),
      poly([[470, 500], [720, 500], [595, 280]], c[2] ?? p.accent, { stroke: c[4] ?? p.ink, "stroke-width": 6 }),
      rect(80, 320, 210, 210, c[5] ?? "#FFFFFF", { stroke: c[4] ?? p.ink, "stroke-width": 6 }), ...stripes,
      ...dots,
      zig(330, 110, 9, c[3] ?? p.accent, 12), zig(300, 470, 7, c[0] ?? p.primary, -20), zig(560, 230, 6, c[4] ?? p.ink, 70),
      rect(360, 300, 120, 44, c[6] ?? c[2] ?? p.accent, { stroke: c[4] ?? p.ink, "stroke-width": 6, transform: "rotate(-28 420 322)" }),
      ...Array.from({ length: 12 }, (_, i) => poly(star(40 + r() * 720, 30 + r() * 540, 3, 13, 6, i), c[i % 4] ?? p.accent, { stroke: c[4] ?? p.ink, "stroke-width": 3 })),
    ];
  },
  grunge: (p, r, id) => [
    `<defs><filter id="${id}-rough" x="-5%" y="-5%" width="110%" height="110%"><feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="3" seed="7"/><feDisplacementMap in="SourceGraphic" scale="14"/></filter>
<filter id="${id}-grain"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="3"/><feColorMatrix values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -1.5 1.05"/></filter></defs>`,
    rect(0, 0, W, H, p.bg),
    group([
      rect(60, 70, 400, 300, p.all[1] ?? p.ink, { transform: "rotate(-4 260 220)" }),
      rect(330, 210, 380, 290, p.all[2] ?? p.primary, { transform: "rotate(3 520 355)", opacity: 0.92 }),
      rect(120, 380, 280, 150, p.all[3] ?? p.muted, { transform: "rotate(-2 260 455)", opacity: 0.9 }),
      rect(470, 60, 250, 46, p.all[5] ?? p.accent, { transform: "rotate(7 595 83)" }),
    ], { filter: `url(#${id}-rough)` }),
    `<text x="78" y="300" font-family="Impact,'Arial Black',sans-serif" font-size="210" fill="${p.bg}" transform="rotate(-4 260 220)" letter-spacing="-8">RAW</text>`,
    `<text x="86" y="308" font-family="Impact,'Arial Black',sans-serif" font-size="210" fill="none" stroke="${p.all[5] ?? p.accent}" stroke-width="2" transform="rotate(-4 260 220)" letter-spacing="-8">RAW</text>`,
    ...Array.from({ length: 9 }, (_, i) => rect(360, 250 + i * 24, 120 + r() * 200, 9, p.bg, { transform: "rotate(3 520 355)", opacity: 0.85 })),
    ...Array.from({ length: 26 }, () => { const x = r() * W, y = r() * H; return line(x, y, x + 20 + r() * 140, y + (r() - 0.5) * 30, p.all[1] ?? p.ink, r() * 1.4 + 0.3, { opacity: 0.55 }); }),
    `<rect width="${W}" height="${H}" filter="url(#${id}-grain)" opacity="0.5"/>`,
  ],
  y2k: (p, r, id) => {
    const [blue, cyan, lime, navy, pink] = [p.all[2] ?? p.primary, p.all[3] ?? p.accent, p.all[4] ?? p.accent, p.all[5] ?? p.ink, p.all[6] ?? p.accent];
    const blob = (cx: number, cy: number, rr: number, ph: number) => path(wobble(cx, cy, rr, rr * 0.16, 3, ph, 0.9), `url(#${id}-chrome)`, { stroke: navy, "stroke-width": 1.5 }) +
      `<ellipse cx="${n(cx - rr * 0.28)}" cy="${n(cy - rr * 0.4)}" rx="${n(rr * 0.36)}" ry="${n(rr * 0.16)}" fill="#FFFFFF" opacity="0.85" transform="rotate(-24 ${n(cx)} ${n(cy)})"/>`;
    const sparkle = (cx: number, cy: number, s: number, c: string) => path(`M${cx} ${cy - s}Q${cx} ${cy} ${cx + s} ${cy}Q${cx} ${cy} ${cx} ${cy + s}Q${cx} ${cy} ${cx - s} ${cy}Q${cx} ${cy} ${cx} ${cy - s}Z`, c);
    return [
      `<defs><linearGradient id="${id}-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${p.bg}"/><stop offset="1" stop-color="${cyan}"/></linearGradient>
<radialGradient id="${id}-chrome" cx="0.35" cy="0.28" r="0.9"><stop offset="0" stop-color="#FFFFFF"/><stop offset="0.35" stop-color="${p.all[1] ?? "#C7CDD6"}"/><stop offset="0.62" stop-color="${blue}"/><stop offset="0.8" stop-color="${navy}"/><stop offset="1" stop-color="${cyan}"/></radialGradient></defs>`,
      rect(0, 0, W, H, `url(#${id}-sky)`),
      ...Array.from({ length: 7 }, (_, i) => `<ellipse cx="560" cy="300" rx="${n(190 * Math.cos((i / 7) * Math.PI / 2 * 0.98))}" ry="190" fill="none" stroke="${navy}" stroke-width="1.2"/>`),
      ...Array.from({ length: 7 }, (_, i) => `<ellipse cx="560" cy="300" rx="190" ry="${n(190 * Math.cos((i / 7) * Math.PI / 2 * 0.98))}" fill="none" stroke="${navy}" stroke-width="1.2"/>`),
      `<ellipse cx="400" cy="320" rx="360" ry="90" fill="none" stroke="${lime}" stroke-width="10" transform="rotate(-14 400 320)"/>`,
      blob(250, 290, 150, 0.4), blob(470, 450, 78, 2.2), blob(120, 480, 52, 4.1),
      rect(470, 70, 250, 54, `url(#${id}-chrome)`, { rx: 27, stroke: navy, "stroke-width": 1.5 }),
      rect(486, 78, 218, 16, "#FFFFFF", { rx: 8, opacity: 0.7 }),
      sparkle(130, 120, 48, "#FFFFFF"), sparkle(690, 500, 38, pink), sparkle(380, 90, 22, lime), sparkle(620, 200, 16, "#FFFFFF"),
      ...Array.from({ length: 14 }, () => circ(r() * W, r() * H, 2.5, "#FFFFFF")),
    ];
  },
  aero: (p, r, id) => {
    const [sky, aqua, green, white, deep, , sun] = p.all;
    const bubble = (cx: number, cy: number, rr: number) =>
      circ(cx, cy, rr, `url(#${id}-bubble)`, { stroke: "#FFFFFF", "stroke-width": 1.5, "stroke-opacity": 0.8 }) +
      `<ellipse cx="${n(cx - rr * 0.3)}" cy="${n(cy - rr * 0.45)}" rx="${n(rr * 0.42)}" ry="${n(rr * 0.22)}" fill="#FFFFFF" opacity="0.8" transform="rotate(-28 ${n(cx)} ${n(cy)})"/>`;
    return [
      `<defs><linearGradient id="${id}-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${deep ?? p.primary}"/><stop offset="0.55" stop-color="${sky ?? p.bg}"/><stop offset="1" stop-color="${white ?? "#FFFFFF"}"/></linearGradient>
<linearGradient id="${id}-hill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#B8F08A"/><stop offset="1" stop-color="${green ?? "#5DBB3F"}"/></linearGradient>
<radialGradient id="${id}-bubble" cx="0.35" cy="0.3" r="0.8"><stop offset="0" stop-color="#FFFFFF" stop-opacity="0.75"/><stop offset="0.6" stop-color="${aqua ?? p.accent}" stop-opacity="0.25"/><stop offset="1" stop-color="${deep ?? p.primary}" stop-opacity="0.5"/></radialGradient>
<radialGradient id="${id}-sun"><stop offset="0" stop-color="#FFFFFF"/><stop offset="0.3" stop-color="${sun ?? "#FFB300"}" stop-opacity="0.7"/><stop offset="1" stop-color="#FFFFFF" stop-opacity="0"/></radialGradient></defs>`,
      rect(0, 0, W, H, `url(#${id}-sky)`),
      circ(640, 130, 170, `url(#${id}-sun)`),
      ...[[150, 150, 60], [250, 120, 44], [330, 160, 52]].map(([x, y, s]) => `<ellipse cx="${x}" cy="${y}" rx="${s * 1.7}" ry="${s * 0.6}" fill="#FFFFFF" opacity="0.8"/>`),
      path("M0 470C160 380 330 400 470 450S700 420 800 380V600H0Z", `url(#${id}-hill)`),
      path("M0 520C200 470 420 500 560 540S740 520 800 500V600H0Z", aqua ?? p.accent, { opacity: 0.85 }),
      path("M0 545C200 500 420 530 560 565S740 548 800 530", "none", { stroke: "#FFFFFF", "stroke-width": 3, opacity: 0.7 }),
      bubble(300, 330, 110), bubble(520, 270, 64), bubble(170, 420, 44), bubble(610, 400, 34),
      ...Array.from({ length: 8 }, () => bubble(60 + r() * 680, 60 + r() * 380, 8 + r() * 12)),
    ];
  },
  skeuo: (p, r, id) => {
    const [linen, wood, blue, metal, felt, dark] = p.all;
    return [
      `<defs><filter id="${id}-wood"><feTurbulence type="fractalNoise" baseFrequency="0.012 0.4" numOctaves="3" seed="4"/><feColorMatrix values="0 0 0 0 0.1  0 0 0 0 0.05  0 0 0 0 0  0 0 0 0.55 0"/><feComposite in2="SourceGraphic" operator="in"/></filter>
<linearGradient id="${id}-metal" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFFFFF"/><stop offset="0.5" stop-color="${metal ?? "#C9CDD3"}"/><stop offset="1" stop-color="#8E949C"/></linearGradient>
<radialGradient id="${id}-knob" cx="0.4" cy="0.3" r="0.8"><stop offset="0" stop-color="#FFFFFF"/><stop offset="0.5" stop-color="${metal ?? "#C9CDD3"}"/><stop offset="1" stop-color="#6F757D"/></radialGradient>
<linearGradient id="${id}-gloss" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8CC2FF"/><stop offset="0.5" stop-color="${blue ?? p.primary}"/><stop offset="0.51" stop-color="#1F5FB8"/><stop offset="1" stop-color="${blue ?? p.primary}"/></linearGradient>
<filter id="${id}-drop"><feDropShadow dx="0" dy="6" stdDeviation="6" flood-opacity="0.45"/></filter></defs>`,
      rect(0, 0, W, H, wood ?? "#6B4A2F"), rect(0, 0, W, H, "#000000", { filter: `url(#${id}-wood)` }),
      rect(70, 60, 660, 480, `url(#${id}-metal)`, { rx: 22, filter: `url(#${id}-drop)` }),
      rect(84, 74, 632, 452, "none", { rx: 14, stroke: dark ?? "#2B2118", "stroke-width": 2, "stroke-dasharray": "10 7", opacity: 0.6 }),
      rect(120, 110, 330, 170, dark ?? "#2B2118", { rx: 10 }), rect(126, 116, 318, 158, felt ?? "#1E5B3A", { rx: 6 }),
      ...Array.from({ length: 14 }, (_, i) => rect(144 + i * 21, 250 - (20 + r() * 110), 13, 20 + r() * 110, "#9BFFB0", { opacity: 0.9 })),
      circ(585, 200, 92, "#000000", { opacity: 0.25 }), circ(585, 194, 88, `url(#${id}-knob)`, { stroke: "#5E646B", "stroke-width": 2 }),
      ...Array.from({ length: 21 }, (_, i) => { const t = Math.PI * 0.75 + (i / 20) * Math.PI * 1.5; return line(585 + 100 * Math.cos(t), 194 + 100 * Math.sin(t), 585 + 112 * Math.cos(t), 194 + 112 * Math.sin(t), dark ?? "#2B2118", 2); }),
      line(585, 194, 585 + 60 * Math.cos(-0.7), 194 + 60 * Math.sin(-0.7), dark ?? "#2B2118", 6, { "stroke-linecap": "round" }),
      rect(120, 340, 200, 64, `url(#${id}-gloss)`, { rx: 12, stroke: "#17457F", "stroke-width": 2, filter: `url(#${id}-drop)` }),
      rect(350, 346, 150, 52, dark ?? "#2B2118", { rx: 26 }), circ(474, 372, 22, `url(#${id}-knob)`),
      ...[0, 1, 2, 3, 4].map((i) => circ(140 + i * 46, 470, 15, `url(#${id}-knob)`, { stroke: "#5E646B", "stroke-width": 1.5 })),
      ...[[96, 86], [704, 86], [96, 514], [704, 514]].map(([x, y]) => circ(x, y, 7, `url(#${id}-knob)`, { stroke: "#5E646B" }) + line(x - 4, y - 3, x + 4, y + 3, "#5E646B", 1.5)),
      rect(540, 340, 150, 150, linen ?? "#D8D4CC", { rx: 8, stroke: "#8E949C" }),
      ...[0, 1, 2, 3, 4].map((i) => line(556, 366 + i * 24, 674, 366 + i * 24, "#8E949C", 1.5)),
    ];
  },
  flat: (p) => {
    const cols = [p.all[2], p.all[3], p.all[4], p.all[5]].map((c, i) => c ?? [p.primary, p.accent, p.primary, p.accent][i]);
    const tile = (x: number, y: number, s: number, c: string, glyph: string, i: number) => {
      const cid = `flat-clip-${i}`, cx = x + s / 2, cy = y + s / 2;
      return `<clipPath id="${cid}"><rect x="${x}" y="${y}" width="${s}" height="${s}" rx="${s * 0.18}"/></clipPath>` +
        rect(x, y, s, s, c, { rx: s * 0.18 }) +
        `<g clip-path="url(#${cid})">${poly([[cx - s * 0.2, cy + s * 0.2], [cx + s * 0.2, cy - s * 0.2], [cx + s * 1.2, cy + s * 0.8], [cx + s * 0.8, cy + s * 1.2]], "#000000", { opacity: 0.16 })}</g>` + glyph;
    };
    return [
      rect(0, 0, W, H, p.bg),
      rect(0, 430, W, 170, p.all[1] ?? p.ink),
      tile(70, 150, 200, cols[0], circ(170, 250, 50, "#FFFFFF"), 0),
      tile(300, 150, 200, cols[1], poly([[400, 195], [455, 295], [345, 295]], "#FFFFFF"), 1),
      tile(530, 150, 200, cols[2], rect(585, 205, 90, 90, "#FFFFFF"), 2),
      ...[0, 1, 2, 3, 4, 5].map((i) => rect(70 + i * 112, 470, 96, 14, i === 1 ? cols[3] : p.bg, { opacity: i === 1 ? 1 : 0.5 })),
      ...[0, 1, 2, 3].map((i) => rect(70 + i * 112, 500, 96, 8, p.bg, { opacity: 0.25 })),
      circ(110, 80, 22, cols[3]), rect(150, 70, 180, 8, p.all[1] ?? p.ink), rect(150, 86, 110, 6, p.all[1] ?? p.ink, { opacity: 0.4 }),
    ];
  },
  material: (p, _r, id) => {
    const [, , indigo, dark, pink, ink] = p.all;
    const sh = (dp: number) => ` filter="url(#${id}-e${dp})"`;
    return [
      `<defs>${[2, 6, 12].map((d) => `<filter id="${id}-e${d}" x="-20%" y="-20%" width="140%" height="160%"><feDropShadow dx="0" dy="${d}" stdDeviation="${d * 0.8}" flood-opacity="0.28"/></filter>`).join("")}</defs>`,
      rect(0, 0, W, H, "#ECEFF1"),
      path(`M0 0H${W}V250L0 430Z`, indigo ?? p.primary), path(`M0 0H520L0 300Z`, dark ?? p.primary, { opacity: 0.55 }),
      `<rect x="90" y="150" width="400" height="340" rx="4" fill="#FFFFFF"${sh(2)}/>`,
      rect(90, 150, 400, 150, pink ?? p.accent, { rx: 4, opacity: 0.18 }),
      circ(150, 340, 22, indigo ?? p.primary), rect(186, 326, 190, 10, ink ?? p.ink, { opacity: 0.87 }), rect(186, 346, 120, 8, ink ?? p.ink, { opacity: 0.38 }),
      ...[0, 1, 2].map((i) => rect(120, 390 + i * 22, 340 - i * 60, 8, ink ?? p.ink, { opacity: 0.2 })),
      `<rect x="360" y="250" width="350" height="250" rx="4" fill="#FFFFFF"${sh(6)}/>`,
      rect(360, 250, 350, 56, indigo ?? p.primary, { rx: 4 }), rect(384, 273, 130, 10, "#FFFFFF"),
      ...[0, 1, 2, 3].map((i) => circ(396, 344 + i * 38, 12, i === 1 ? (pink ?? p.accent) : "#CFD8DC") + rect(424, 339 + i * 38, 200 - i * 22, 9, ink ?? p.ink, { opacity: 0.6 })),
      `<circle cx="690" cy="500" r="42" fill="${pink ?? p.accent}"${sh(12)}/>`,
      rect(672, 497, 36, 6, "#FFFFFF"), rect(687, 482, 6, 36, "#FFFFFF"),
    ];
  },
  corporate: (p, r) => {
    const [, navy, purple, coral, yellow, mint, blush] = p.all;
    const limb = (d: string, c: string, w = 46) => path(d, "none", { stroke: c, "stroke-width": w, "stroke-linecap": "round", "stroke-linejoin": "round" });
    return [
      rect(0, 0, W, H, p.bg),
      path(wobble(400, 320, 250, 36, 3, 1.1, 0.78), blush ?? "#FFE3E3"),
      circ(650, 120, 54, yellow ?? p.accent),
      limb("M360 300C300 380 250 430 190 440", purple ?? p.primary), limb("M440 300C520 330 580 290 620 220", purple ?? p.primary),
      path("M330 250c0-50 140-50 140 0l20 200c0 30-180 30-180 0z", purple ?? p.primary),
      limb("M360 450C350 510 330 540 300 560", navy ?? p.ink, 50), limb("M440 450C470 500 520 520 580 524", navy ?? p.ink, 50),
      circ(400, 190, 30, coral ?? p.accent), path("M372 180c10-40 60-36 58 4-16-14-40-14-58-4z", navy ?? p.ink),
      rect(580, 180, 110, 76, "#FFFFFF", { rx: 10, stroke: navy ?? p.ink, "stroke-width": 4, transform: "rotate(-12 635 218)" }),
      path("M120 540c-10-90 10-150 60-190 10 70-10 140-60 190z", mint ?? p.accent), path("M120 540c-50-50-70-110-56-170 44 40 62 100 56 170z", mint ?? p.accent, { opacity: 0.7 }),
      line(120, 540, 120, 580, navy ?? p.ink, 4),
      ...Array.from({ length: 7 }, (_, i) => circ(80 + r() * 640, 50 + r() * 200, 7, [coral, yellow, mint, purple][i % 4] ?? p.accent)),
      path("M150 110q20-24 40 0t40 0 40 0", "none", { stroke: navy ?? p.ink, "stroke-width": 4, "stroke-linecap": "round" }),
    ];
  },
  neumorph: (p, _r, id) => {
    const dark = p.all[2] ?? mix(p.bg, "#000000", 0.25), light = "#FFFFFF";
    const up = ` filter="url(#${id}-up)"`;
    const inset = (shape: (fill: string, a: Attrs) => string) => shape(`url(#${id}-in)`, { stroke: `url(#${id}-rim)`, "stroke-width": 3 });
    return [
      `<defs><filter id="${id}-up" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="-9" dy="-9" stdDeviation="9" flood-color="${light}" flood-opacity="0.95"/><feDropShadow dx="9" dy="9" stdDeviation="9" flood-color="${dark}" flood-opacity="0.9"/></filter>
<linearGradient id="${id}-in" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${mix(p.bg, dark, 0.45)}"/><stop offset="1" stop-color="${mix(p.bg, light, 0.6)}"/></linearGradient>
<linearGradient id="${id}-rim" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${dark}"/><stop offset="1" stop-color="${light}"/></linearGradient></defs>`,
      rect(0, 0, W, H, p.bg),
      `<circle cx="280" cy="300" r="170" fill="${p.bg}"${up}/>`,
      inset((f, a) => circ(280, 300, 122, f, a)),
      `<circle cx="280" cy="300" r="122" fill="none" stroke="${p.primary}" stroke-width="12" stroke-linecap="round" stroke-dasharray="520 767" transform="rotate(-90 280 300)"/>`,
      `<circle cx="280" cy="300" r="74" fill="${p.bg}"${up}/>`,
      rect(262, 268, 12, 64, p.ink, { rx: 6, opacity: 0.7 }), rect(286, 268, 12, 64, p.ink, { rx: 6, opacity: 0.7 }),
      `<rect x="520" y="110" width="200" height="84" rx="42" fill="${p.bg}"${up}/>`,
      inset((f, a) => rect(534, 124, 172, 56, f, { ...a, rx: 28 })), `<circle cx="678" cy="152" r="22" fill="${p.primary}"${up}/>`,
      ...[0, 1, 2, 3].map((i) => `<rect x="${520 + (i % 2) * 108}" y="${240 + Math.floor(i / 2) * 108}" width="92" height="92" rx="24" fill="${p.bg}"${up}/>` + circ(566 + (i % 2) * 108, 286 + Math.floor(i / 2) * 108, 14, i === 2 ? p.primary : p.muted, { opacity: i === 2 ? 1 : 0.6 })),
      inset((f, a) => rect(520, 470, 200, 22, f, { ...a, rx: 11 })), rect(523, 473, 120, 16, p.primary, { rx: 8 }),
    ];
  },
  glass: (p, _r, id) => {
    const [violet, pink, , , blue] = p.all;
    const pane = (x: number, y: number, w: number, h: number, rot: number, inner: string[] = []) =>
      group([rect(x, y, w, h, "#FFFFFF", { rx: 24, "fill-opacity": 0.2, stroke: `url(#${id}-edge)`, "stroke-width": 1.5 }), rect(x + 1, y + 1, w - 2, h * 0.45, `url(#${id}-sheen)`, { rx: 23 }), ...inner], { transform: `rotate(${rot} ${x + w / 2} ${y + h / 2})` });
    return [
      `<defs><linearGradient id="${id}-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${violet ?? p.bg}"/><stop offset="1" stop-color="${pink ?? p.accent}"/></linearGradient>
<filter id="${id}-blur" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="28"/></filter>
<linearGradient id="${id}-edge" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FFFFFF" stop-opacity="0.9"/><stop offset="1" stop-color="#FFFFFF" stop-opacity="0.15"/></linearGradient>
<linearGradient id="${id}-sheen" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFFFFF" stop-opacity="0.28"/><stop offset="1" stop-color="#FFFFFF" stop-opacity="0"/></linearGradient></defs>`,
      rect(0, 0, W, H, `url(#${id}-bg)`),
      group([circ(180, 170, 150, blue ?? p.primary), circ(620, 430, 180, "#FFD36E"), circ(560, 130, 100, pink ?? p.accent), circ(250, 480, 120, "#7CF5D2")], { filter: `url(#${id}-blur)` }),
      circ(600, 170, 70, pink ?? p.accent), circ(210, 430, 90, blue ?? p.primary),
      pane(120, 110, 360, 230, -6, [circ(180, 170, 26, "#FFFFFF", { opacity: 0.85 }), rect(222, 154, 150, 12, "#FFFFFF", { rx: 6, opacity: 0.9 }), rect(222, 176, 96, 9, "#FFFFFF", { rx: 4.5, opacity: 0.6 }),
        ...[0, 1, 2].map((i) => rect(154, 230 + i * 26, 290 - i * 60, 9, "#FFFFFF", { rx: 4.5, opacity: 0.55 }))]),
      pane(380, 270, 320, 220, 5, [...Array.from({ length: 7 }, (_, i) => rect(416 + i * 36, 440 - [60, 100, 76, 130, 92, 150, 112][i], 20, [60, 100, 76, 130, 92, 150, 112][i], "#FFFFFF", { rx: 6, opacity: i === 5 ? 0.95 : 0.55 }))]),
      pane(560, 70, 150, 150, 10, [circ(635, 145, 34, "none", { stroke: "#FFFFFF", "stroke-width": 8, opacity: 0.9, "stroke-dasharray": "150 214", "stroke-linecap": "round" })]),
    ];
  },
  pixel: (p) => {
    const heart = ["01100110", "11111111", "11111111", "01111110", "00111100", "00011000"];
    const cell = (x: number, y: number, s: number, c: string) => rect(x, y, s, s, c);
    return [
      rect(0, 0, W, H, p.bg),
      ...Array.from({ length: 20 }, (_, i) => cell(i * 40, 480, 40, i % 2 ? p.primary : p.accent)),
      ...Array.from({ length: 20 }, (_, i) => cell(i * 40, 520, 40, p.ink)),
      ...Array.from({ length: 20 }, (_, i) => cell(i * 40, 560, 40, i % 2 ? p.surface : p.ink)),
      ...heart.flatMap((row, y) => [...row].map((v, x) => (v === "1" ? cell(80 + x * 24, 80 + y * 24, 24, p.accent) : ""))),
      ...[0, 1, 2].map((i) => rect(520 + i * 56, 96, 40, 40, i === 2 ? p.surface : p.primary)),
      rect(300, 380, 40, 100, p.ink), rect(260, 420, 120, 40, p.ink), rect(300, 340, 40, 40, p.primary),
      rect(80, 250, 640, 130, p.ink), rect(88, 258, 624, 114, p.surface),
      ...[0, 1, 2].map((i) => rect(112, 282 + i * 28, 520 - i * 120, 12, p.ink)),
      rect(660, 340, 24, 12, p.accent),
    ];
  },
  synthwave: (p, _r, id) => {
    const horizon = 380;
    return [
      `<defs><linearGradient id="${id}-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${p.bg}"/><stop offset="1" stop-color="${p.surface}"/></linearGradient>
<linearGradient id="${id}-sun" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFD319"/><stop offset="1" stop-color="${p.primary}"/></linearGradient></defs>`,
      rect(0, 0, W, H, `url(#${id}-sky)`),
      circ(400, 250, 130, `url(#${id}-sun)`),
      ...[0, 1, 2, 3, 4].map((i) => rect(272, 270 + i * 22, 256, 3 + i * 3, p.surface)),
      rect(0, horizon, W, H - horizon, p.bg),
      line(0, horizon, W, horizon, p.accent, 3),
      ...Array.from({ length: 13 }, (_, i) => line(400, horizon, -400 + i * 133, H, p.accent, 1.5, { opacity: 0.8 })),
      ...[0, 1, 2, 3, 4, 5].map((i) => line(0, horizon + 10 * (i + 1) ** 1.7, W, horizon + 10 * (i + 1) ** 1.7, p.accent, 1.5, { opacity: 0.8 })),
      poly([[0, horizon], [90, 300], [150, 340], [220, 290], [300, horizon]], p.surface, { opacity: 0.9 }),
    ];
  },
  terminal: (p) => [
    rect(0, 0, W, H, p.bg),
    rect(60, 60, 680, 480, "none", { stroke: p.primary, "stroke-width": 2 }),
    line(60, 110, 740, 110, p.primary, 2),
    ...[0, 1, 2].map((i) => rect(80 + i * 28, 78, 14, 14, p.primary)),
    ...[0, 1, 2, 3, 4, 5].map((i) => rect(90, 140 + i * 30, [420, 300, 360, 240, 330, 180][i], 10, p.primary, { opacity: i % 2 ? 0.55 : 1 })),
    ...[0, 1, 2, 3, 4, 5, 6, 7].map((i) => rect(520 + i * 24, 440 - [30, 60, 40, 90, 70, 110, 80, 130][i], 16, [30, 60, 40, 90, 70, 110, 80, 130][i], i === 7 ? p.accent : p.primary)),
    poly([[90, 350], [114, 362], [90, 374]], p.accent),
    rect(130, 352, 16, 22, p.primary),
    ...[0, 1, 2].map((i) => rect(90 + i * 120, 480, 100, 10, p.primary, { opacity: 0.35 })),
  ],
  plain: (p) => [
    rect(0, 0, W, H, p.bg),
    rect(60, 60, 440, 34, p.ink),
    line(60, 120, 740, 120, p.ink, 2),
    ...[0, 1, 2, 3].map((i) => rect(60, 150 + i * 22, 640 - i * 90, 8, p.ink, { opacity: 0.8 })),
    rect(60, 262, 200, 6, p.accent), line(60, 276, 260, 276, p.accent, 2),
    ...[0, 1, 2, 3].map((i) => line(60, 320 + i * 50, 740, 320 + i * 50, p.ink, 1)),
    ...[0, 1, 2, 3].map((i) => line(60 + i * 226, 320, 60 + i * 226, 470, p.ink, 1)),
    line(740, 320, 740, 470, p.ink, 1),
    ...[0, 1, 2].map((i) => rect(76 + i * 226, 336, 120, 8, p.ink, { opacity: 0.7 })),
  ],
  neobrutal: (p) => {
    const [black, cream, yellow, pink, blue, mint, white] = p.all;
    const k = black ?? "#000000";
    const box = (x: number, y: number, w: number, h: number, c: string, rot = 0, rx = 6, off = 8) =>
      group([rect(x + off, y + off, w, h, k, { rx }), rect(x, y, w, h, c, { rx, stroke: k, "stroke-width": 4 })], rot ? { transform: `rotate(${rot} ${x + w / 2} ${y + h / 2})` } : {});
    return [
      rect(0, 0, W, H, cream ?? p.bg),
      box(60, 70, 420, 250, yellow ?? p.primary),
      rect(60, 70, 420, 46, white ?? "#FFFFFF", { rx: 6, stroke: k, "stroke-width": 4 }), ...[0, 1, 2].map((i) => circ(88 + i * 26, 93, 8, [pink, yellow, mint][i] ?? p.accent, { stroke: k, "stroke-width": 3 })),
      rect(92, 150, 260, 30, k), rect(92, 194, 180, 30, k), box(92, 250, 150, 44, pink ?? p.accent, 0, 6, 5),
      box(520, 90, 200, 200, blue ?? p.accent, 6),
      group([poly(star(620, 190, 8, 78, 54), yellow ?? p.primary, { stroke: k, "stroke-width": 4 })], { transform: "rotate(6 620 190)" }),
      box(90, 380, 250, 150, mint ?? p.accent, -3),
      ...[0, 1, 2, 3].map((i) => rect(120 + i * 52, 500 - [50, 86, 64, 100][i], 34, [50, 86, 64, 100][i], k, { transform: "rotate(-3 215 455)" })),
      group([circ(476, 456, 80, k), circ(468, 448, 80, pink ?? p.accent, { stroke: k, "stroke-width": 4 })]),
      path("M436 448h56m-22-24 24 24-24 24", "none", { stroke: k, "stroke-width": 8 }),
      box(590, 380, 150, 60, white ?? "#FFFFFF", 0, 30), box(590, 470, 150, 60, k, 0, 30, 0),
      path("M690 300l4 78 20-22 16 34 14-8-16-32 30-4z", white ?? "#FFFFFF", { stroke: k, "stroke-width": 4, "stroke-linejoin": "round" }),
    ];
  },
  bento: (p) => {
    const g = 14, cw = (W - 80 - g * 3) / 4, rh = (H - 80 - g * 2) / 3;
    const x = (c: number) => 40 + c * (cw + g), y = (r: number) => 40 + r * (rh + g);
    const tile = (c: number, r: number, cs: number, rs: number, fill: string, inner: string[] = []) =>
      rect(x(c), y(r), cw * cs + g * (cs - 1), rh * rs + g * (rs - 1), fill, { rx: 24, stroke: fill === p.surface ? (p.all[2] ?? "#E8E8ED") : "none" }) + inner.join("");
    const ink = p.all[3] ?? p.ink, grey = p.all[4] ?? p.muted, blue = p.all[5] ?? p.accent, black = p.all[6] ?? "#000000";
    return [
      rect(0, 0, W, H, p.bg),
      tile(0, 0, 2, 2, p.surface, [`<text x="${x(0) + 28}" y="${y(0) + 150}" font-family="'Inter Tight',Inter,system-ui,sans-serif" font-weight="600" font-size="150" letter-spacing="-8" fill="${ink}">98%</text>`,
        rect(x(0) + 30, y(0) + 190, 200, 10, grey, { rx: 5, opacity: 0.6 }), ...Array.from({ length: 12 }, (_, i) => rect(x(0) + 30 + i * 26, y(0) + 316 - [20, 34, 28, 50, 42, 64, 58, 80, 70, 96, 88, 110][i], 16, [20, 34, 28, 50, 42, 64, 58, 80, 70, 96, 88, 110][i], i === 11 ? blue : ink, { rx: 5, opacity: i === 11 ? 1 : 0.14 }))]),
      tile(2, 0, 2, 1, black, [circ(x(2) + 60, y(0) + rh / 2, 30, blue), rect(x(2) + 108, y(0) + rh / 2 - 18, 170, 12, "#FFFFFF", { rx: 6 }), rect(x(2) + 108, y(0) + rh / 2 + 6, 110, 10, "#FFFFFF", { rx: 5, opacity: 0.5 })]),
      tile(2, 1, 1, 1, blue, [path(`M${x(2) + 40} ${y(1) + 110}l34-40 30 22 40-52`, "none", { stroke: "#FFFFFF", "stroke-width": 8, "stroke-linecap": "round", "stroke-linejoin": "round" })]),
      tile(3, 1, 1, 2, p.surface, [...[0, 1, 2, 3, 4].map((i) => circ(x(3) + 36, y(1) + 44 + i * 58, 14, i === 0 ? blue : (p.all[2] ?? "#E8E8ED")) + rect(x(3) + 62, y(1) + 39 + i * 58, 90 - (i % 2) * 24, 10, ink, { rx: 5, opacity: 0.75 }))]),
      tile(0, 2, 1, 1, p.surface, [circ(x(0) + cw / 2, y(2) + rh / 2, 46, "none", { stroke: p.all[2] ?? "#E8E8ED", "stroke-width": 14 }), circ(x(0) + cw / 2, y(2) + rh / 2, 46, "none", { stroke: blue, "stroke-width": 14, "stroke-dasharray": "200 289", "stroke-linecap": "round", transform: `rotate(-90 ${n(x(0) + cw / 2)} ${n(y(2) + rh / 2)})` })]),
      tile(1, 2, 2, 1, p.surface, [...[0, 1, 2].map((i) => rect(x(1) + 28, y(2) + 40 + i * 30, 300 - i * 70, 12, i === 0 ? ink : grey, { rx: 6, opacity: i === 0 ? 0.9 : 0.5 })), rect(x(1) + 28, y(2) + rh - 46, 96, 28, ink, { rx: 14 })]),
    ];
  },
  spatial: (p, r, id) => {
    const win = (x: number, y: number, w: number, h: number, skew: number, inner: string[] = []) =>
      group([`<ellipse cx="${x + w / 2}" cy="${y + h + 44}" rx="${w * 0.42}" ry="14" fill="#000000" opacity="0.45" filter="url(#${id}-soft)"/>`,
        rect(x, y, w, h, "#FFFFFF", { rx: 34, "fill-opacity": 0.14, stroke: `url(#${id}-edge)`, "stroke-width": 1.5 }), rect(x, y, w, h * 0.5, `url(#${id}-sheen)`, { rx: 34 }), ...inner], { transform: `skewY(${skew})` });
    return [
      `<defs><linearGradient id="${id}-room" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0B1026"/><stop offset="0.62" stop-color="#3A2F52"/><stop offset="0.8" stop-color="#C98A6B"/><stop offset="1" stop-color="#2A2230"/></linearGradient>
<filter id="${id}-soft" x="-50%" y="-200%" width="200%" height="500%"><feGaussianBlur stdDeviation="12"/></filter>
<filter id="${id}-glow" x="-80%" y="-80%" width="260%" height="260%"><feGaussianBlur stdDeviation="46"/></filter>
<linearGradient id="${id}-edge" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FFFFFF" stop-opacity="0.85"/><stop offset="0.5" stop-color="#FFFFFF" stop-opacity="0.1"/><stop offset="1" stop-color="#FFFFFF" stop-opacity="0.5"/></linearGradient>
<linearGradient id="${id}-sheen" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFFFFF" stop-opacity="0.2"/><stop offset="1" stop-color="#FFFFFF" stop-opacity="0"/></linearGradient></defs>`,
      rect(0, 0, W, H, `url(#${id}-room)`),
      group([circ(620, 440, 130, "#FFB38A"), circ(140, 180, 110, p.accent), circ(420, 80, 80, "#8E7BFF")], { filter: `url(#${id}-glow)`, opacity: 0.55 }),
      ...Array.from({ length: 30 }, () => circ(r() * W, r() * 300, r() * 1.4 + 0.4, "#FFFFFF", { opacity: 0.7 })),
      win(40, 150, 86, 290, 3, [...[0, 1, 2, 3].map((i) => circ(83, 200 + i * 62, 20, "#FFFFFF", { "fill-opacity": i === 1 ? 0.9 : 0.22 }))]),
      win(170, 110, 420, 300, 0, [rect(206, 146, 200, 16, "#FFFFFF", { rx: 8 }), rect(206, 176, 130, 11, "#FFFFFF", { rx: 5.5, opacity: 0.55 }),
        ...[0, 1, 2].map((i) => rect(206 + i * 122, 220, 106, 110, "#FFFFFF", { rx: 20, "fill-opacity": 0.16 }) + circ(259 + i * 122, 262, 20, i === 0 ? p.accent : "#FFFFFF", { "fill-opacity": i === 0 ? 1 : 0.7 }) + rect(232 + i * 122, 300, 54, 8, "#FFFFFF", { rx: 4, opacity: 0.7 })),
        rect(206, 356, 110, 34, p.accent, { rx: 17 }), rect(328, 356, 110, 34, "#FFFFFF", { rx: 17, "fill-opacity": 0.2 })]),
      win(630, 170, 140, 210, -4, [circ(700, 240, 34, "none", { stroke: "#FFFFFF", "stroke-width": 7, "stroke-dasharray": "150 214", "stroke-linecap": "round" }), rect(660, 300, 80, 9, "#FFFFFF", { rx: 4.5, opacity: 0.8 }), rect(672, 320, 56, 8, "#FFFFFF", { rx: 4, opacity: 0.45 })]),
      rect(300, 470, 160, 12, "#FFFFFF", { rx: 6, opacity: 0.5 }),
    ];
  },
};
export const RECIPE_NAMES = Object.keys(RECIPES);

export function heroSvg(style: Style, v: Visual): string {
  const recipe = RECIPES[v.art.recipe];
  const id = style.id;
  const body = recipe(palette(style), rng(v.art.seed), id).join("\n");
  return `<!-- ${style.name} hero plate. Generated by design-ontology, recipe "${v.art.recipe}". CC BY 4.0. -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" role="img" aria-label="${style.name}: abstract plate in the visual language of the style">
${body}
</svg>`;
}

// ── pattern tiles ───────────────────────────────────────────────────────────
const PATTERNS: Record<string, (p: Pal, s: number) => string[]> = {
  none: () => [],
  grid: (p, s) => [line(0, 0, s, 0, p.ink, 1, { opacity: 0.25 }), line(0, 0, 0, s, p.ink, 1, { opacity: 0.25 })],
  dots: (p, s) => [circ(s / 4, s / 4, 3, p.ink, { opacity: 0.35 }), circ((s * 3) / 4, (s * 3) / 4, 3, p.ink, { opacity: 0.35 })],
  diagonal: (p, s) => [path(`M-10 ${s / 2 + 10}L${s / 2 + 10}-10M${s / 2 - 10} ${s + 10}L${s + 10} ${s / 2 - 10}`, "none", { stroke: p.primary, "stroke-width": 8 })],
  waves: (p, s) => [0, 1, 2, 3].map((i) => path(`M${-s / 2} ${10 + i * 20}q${s / 4} 16 ${s / 2} 0t${s / 2} 0 ${s / 2} 0 ${s / 2} 0`, "none", { stroke: [p.primary, p.accent, p.surface, p.accent][i], "stroke-width": 7 })),
  squiggle: (p, s) => [path(`M6 ${s / 4}l12-10 12 10 12-10`, "none", { stroke: p.primary, "stroke-width": 4 }), circ(s * 0.75, s * 0.7, 6, p.accent), poly([[12, s - 10], [30, s - 10], [21, s - 26]], p.ink)],
  checks: (p, s) => [rect(0, 0, s / 2, s / 2, p.ink), rect(s / 2, s / 2, s / 2, s / 2, p.ink)],
  noise: (p, s) => Array.from({ length: 40 }, (_, i) => { const r = rng(i + 11); return rect(r() * s, r() * s, 1 + r() * 3, 1 + r() * 2, p.ink, { opacity: n(0.15 + r() * 0.4) }); }),
  starburst: (p, s) => [...Array.from({ length: 8 }, (_, i) => { const t = (i / 8) * Math.PI * 2; return line(s / 2, s / 2, s / 2 + 18 * Math.cos(t), s / 2 + 18 * Math.sin(t), p.ink, 2, { "stroke-linecap": "round" }); }), circ(8, 8, 3, p.accent), circ(s - 8, s - 8, 3, p.primary)],
};
export const PATTERN_NAMES = Object.keys(PATTERNS);

/** A tile of 80 by 80 that repeats in both directions. Use it as a CSS background-image. */
export function patternSvg(style: Style, v: Visual): string {
  const s = 80;
  const p = palette(style);
  return `<!-- ${style.name} pattern tile, "${v.art.pattern}". Generated by design-ontology. CC BY 4.0. -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${s} ${s}" width="${s}" height="${s}">
${rect(0, 0, s, s, p.bg)}
${PATTERNS[v.art.pattern](p, s).join("\n")}
</svg>`;
}
