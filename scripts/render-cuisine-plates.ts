// Draw one plate plan for each cuisine style. No image model: the plan is computed from the rules of the style.
//
//   npm run plates [-- --only nouvelle-cuisine,new-nordic]
//
// Left: the plate seen from above, in the default plate colour of the style. The food covers the share of the plate
// that the negative_space knob leaves free, and the composition vector sets the layout: 1 = one heap, 2 = a few heaps,
// 3 = a centred stack on a sauce, 4 = a line or a ring, 5 = small exact points on a wide empty field.
// Each primary ingredient is one element, drawn in the shape of its family and in a colour of the style palette.
// Right: the pantry, with the origin and the European arrival of each ingredient.
// Foot: a time line of those dates against the start of the style: the history of the pantry.
// The script reads these fields of the style:
//   pantry.primary, pantry.secondary          the elements and the list (vocabulary ingredients)
//   palette.colours                           the colour of each element, in turn
//   vectors.composition                       the layout
//   permutations.negative_space.default       the empty share of the plate
//   permutations.plate_colour.default         the colour of the plate
// Output: demo/previews/cuisine/<id>.svg and demo/previews/cuisine/manifest.json.
import { writeFileSync, mkdirSync, existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { ROOT, loadStyleFiles } from "./lib.js";
import { loadCuisineVocabulary, type Origin } from "./cuisine.js";

const W = 1152, H = 768;
const PX = 290, PY = 322, PR = 200;
const TEXT = "#1d1b17", MUTED = "#5f5b52", RULE = "#d8d4ca", RED = "#b3261e";
const UI = "font-family:system-ui,-apple-system,'Segoe UI',sans-serif";
const OUT = join(ROOT, "demo", "previews", "cuisine");

interface Colour { name: string; hex: string; role: string }
interface Ingredient { id: string; name: string; family: string; origin: Origin; arrival?: Origin }
interface Style {
  id: string; name: string; branch: string; time_period: { start: number; label: string };
  vectors: { composition: number };
  pantry: { primary: string[]; secondary: string[] };
  palette: { colours: Colour[] };
  permutations?: { negative_space?: { default?: number }; plate_colour?: { default?: string } };
}
interface Entry { file: string; kind: "plate-plan"; subject: string; model: string; width: number; height: number; generated: string }

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

const rgb = (hex: string) => { const n = parseInt(hex.slice(1), 16); return [(n >> 16) & 255, (n >> 8) & 255, n & 255]; };
const hexOf = (c: number[]) => "#" + c.map((v) => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, "0")).join("");
const mix = (a: string, b: string, t: number) => { const x = rgb(a), y = rgb(b); return hexOf(x.map((v, i) => v + (y[i] - v) * t)); };
const lum = (h: string) => { const [r, g, b] = rgb(h); return (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255; };
const edge = (h: string) => (lum(h) > 0.35 ? mix(h, "#000000", 0.35) : mix(h, "#ffffff", 0.3));

function year(o?: Origin): string {
  if (!o || o.year === undefined) return "not recorded";
  return `${o.circa ? "c. " : ""}${o.year < 0 ? `${-o.year} BC` : o.year}`;
}

/** One food element of an ingredient family at (x, y) with size s: the shape says what kind of food it is. */
function element(family: string, x: number, y: number, s: number, fill: string, rnd: () => number): string {
  const st = ` fill="${fill}" stroke="${edge(fill)}" stroke-width="1"`;
  const a = Math.round(rnd() * 180);
  switch (family) {
    case "meat": case "poultry": case "game": case "fish":
      return `<rect x="${r1(x - s)}" y="${r1(y - s * 0.6)}" width="${r1(s * 2)}" height="${r1(s * 1.2)}" rx="${r1(s * 0.35)}"${st} transform="rotate(${a} ${r1(x)} ${r1(y)})"/>`;
    case "shellfish":
      return `<path d="M${r1(x - s)} ${r1(y)} a${r1(s)} ${r1(s * 0.8)} 0 0 1 ${r1(s * 2)} 0 q${r1(-s)} ${r1(s * 0.9)} ${r1(-s * 2)} 0z"${st} transform="rotate(${a} ${r1(x)} ${r1(y)})"/>`;
    case "grain": case "legume": case "nut-seed": case "spice": {
      let d = "";
      for (let i = 0; i < 9; i++) { const t = rnd() * 6.283, r = rnd() * s; d += `<circle cx="${r1(x + Math.cos(t) * r)}" cy="${r1(y + Math.sin(t) * r)}" r="${r1(Math.max(2, s * 0.16))}"${st}/>`; }
      return d;
    }
    case "herb": case "seaweed": {
      let d = "";
      for (let i = 0; i < 5; i++) { const t = rnd() * 6.283, r = rnd() * s * 0.9; const cx = x + Math.cos(t) * r, cy = y + Math.sin(t) * r;
        d += `<ellipse cx="${r1(cx)}" cy="${r1(cy)}" rx="${r1(s * 0.32)}" ry="${r1(s * 0.13)}"${st} transform="rotate(${Math.round(rnd() * 180)} ${r1(cx)} ${r1(cy)})"/>`; }
      return d;
    }
    case "dairy": case "egg": case "fat-oil":
      return `<ellipse cx="${r1(x)}" cy="${r1(y)}" rx="${r1(s * 0.9)}" ry="${r1(s * 0.5)}"${st} transform="rotate(${a} ${r1(x)} ${r1(y)})"/>`;
    case "ferment": case "drink": case "sugar":
      return `<circle cx="${r1(x)}" cy="${r1(y)}" r="${r1(s * 1.15)}" fill="${fill}" fill-opacity="0.55"/>`;
    case "additive":
      return `<circle cx="${r1(x)}" cy="${r1(y)}" r="${r1(s * 0.45)}"${st}/><circle cx="${r1(x - s * 0.15)}" cy="${r1(y - s * 0.15)}" r="${r1(s * 0.12)}" fill="#ffffff" fill-opacity="0.7"/>`;
    case "fungus":
      return `<path d="M${r1(x - s * 0.7)} ${r1(y)} a${r1(s * 0.7)} ${r1(s * 0.6)} 0 0 1 ${r1(s * 1.4)} 0z"${st}/><rect x="${r1(x - s * 0.18)}" y="${r1(y)}" width="${r1(s * 0.36)}" height="${r1(s * 0.6)}"${st}/>`;
    default: // vegetable, fruit
      return `<ellipse cx="${r1(x)}" cy="${r1(y)}" rx="${r1(s * 0.75)}" ry="${r1(s * 0.6)}"${st} transform="rotate(${a} ${r1(x)} ${r1(y)})"/>`;
  }
}

/** The centre of each element on the plate, by the composition score; `reach` is the radius that the food may fill. */
function layout(n: number, comp: number, reach: number, rnd: () => number): { x: number; y: number; s: number }[] {
  const out: { x: number; y: number; s: number }[] = [];
  for (let i = 0; i < n; i++) {
    const t = (i / n) * 6.283 + rnd() * 0.4;
    if (comp <= 1) { const r = Math.sqrt(rnd()) * reach * 0.55; out.push({ x: PX + Math.cos(t) * r, y: PY + Math.sin(t) * r, s: reach * 0.3 }); }
    else if (comp === 2) { const r = reach * (0.35 + rnd() * 0.3); out.push({ x: PX + Math.cos(t) * r, y: PY + Math.sin(t) * r, s: reach * 0.25 }); }
    else if (comp === 3) { const r = i === 0 ? 0 : reach * 0.18 * (1 + rnd()); out.push({ x: PX + Math.cos(t) * r, y: PY + Math.sin(t) * r - i * 4, s: reach * (i === 0 ? 0.38 : 0.2) }); }
    else if (comp === 4) { const u = n === 1 ? 0 : i / (n - 1) - 0.5; out.push({ x: PX + u * reach * 1.6, y: PY + Math.sin(u * 3) * reach * 0.12, s: reach * 0.16 }); }
    else { const r = reach * (0.2 + rnd() * 0.8); out.push({ x: PX + Math.cos(t * 1.7) * r, y: PY + Math.sin(t * 1.7) * r, s: reach * 0.09 }); }
  }
  return out;
}

function plan(s: Style, ing: Map<string, Ingredient>): string {
  const rnd = rng(s.id);
  const parts: string[] = [];
  const text = (x: number, y: number, t: string, size: number, fill = TEXT, weight = 400, anchor = "start") =>
    parts.push(`<text x="${r1(x)}" y="${r1(y)}" font-size="${size}" font-weight="${weight}" fill="${fill}" text-anchor="${anchor}" style="${UI}">${esc(t)}</text>`);
  const plate = s.permutations?.plate_colour?.default ?? "#F4F1EA";
  const empty = s.permutations?.negative_space?.default ?? 0.4;
  const comp = Math.max(1, Math.min(5, Math.round(s.vectors.composition)));
  const colours = s.palette.colours.filter((c) => c.hex.toUpperCase() !== plate.toUpperCase());

  parts.push(`<rect width="${W}" height="${H}" fill="#faf8f3"/>`);
  text(56, 50, s.name, 26, TEXT, 700);
  text(56, 74, `${s.time_period.label} · ${s.branch} · composition ${comp} of 5 · ${Math.round(empty * 100)} % of the plate empty`, 13, MUTED);

  // The plate: a rim and a well, with a soft shadow.
  parts.push(`<ellipse cx="${PX + 6}" cy="${PY + 10}" rx="${PR}" ry="${PR}" fill="#000" fill-opacity="0.07"/>`);
  parts.push(`<circle cx="${PX}" cy="${PY}" r="${PR}" fill="${plate}" stroke="${edge(plate)}" stroke-width="1.2"/>`);
  parts.push(`<circle cx="${PX}" cy="${PY}" r="${PR * 0.74}" fill="${mix(plate, "#000000", 0.035)}" stroke="${mix(plate, "#000000", 0.12)}" stroke-width="0.8"/>`);
  const reach = PR * 0.72 * Math.sqrt(Math.max(0.08, 1 - empty));
  const items = s.pantry.primary.map((id) => ing.get(id)).filter((x): x is Ingredient => !!x);
  const at = layout(items.length, comp, reach, rnd);
  // A sauce pool under a stack (3) or under the line (4).
  if (comp === 3 || comp === 4) {
    const sauce = colours[colours.length - 1]?.hex ?? "#8a5a2b";
    parts.push(comp === 3
      ? `<circle cx="${PX}" cy="${PY}" r="${r1(reach * 0.7)}" fill="${sauce}" fill-opacity="0.35"/>`
      : `<path d="M${r1(PX - reach * 0.85)} ${PY + 8} H${r1(PX + reach * 0.85)}" stroke="${sauce}" stroke-opacity="0.45" stroke-width="${r1(reach * 0.18)}" stroke-linecap="round"/>`);
  }
  items.forEach((it, i) => parts.push(element(it.family, at[i].x, at[i].y, at[i].s, colours[i % Math.max(1, colours.length)]?.hex ?? "#888888", rnd)));
  // Numbered leaders from each element to the edge of the plate.
  items.forEach((_, i) => {
    const { x, y } = at[i];
    const t = Math.atan2(y - PY, x - PX) || (i * 6.283) / items.length;
    const ex = PX + Math.cos(t) * (PR + 18), ey = PY + Math.sin(t) * (PR + 18);
    parts.push(`<path d="M${r1(x)} ${r1(y)} L${r1(ex)} ${r1(ey)}" stroke="${MUTED}" stroke-width="0.6" stroke-dasharray="2 2"/>`);
    parts.push(`<circle cx="${r1(ex)}" cy="${r1(ey)}" r="9" fill="#faf8f3" stroke="${MUTED}" stroke-width="0.8"/>`);
    text(ex, ey + 4, String(i + 1), 10, TEXT, 600, "middle");
  });

  // The pantry list.
  const LX = 600;
  text(LX, 118, "Pantry · origin · arrival in a European kitchen", 12, MUTED, 600);
  const rows = [...s.pantry.primary.map((id) => ({ id, sec: false })), ...s.pantry.secondary.map((id) => ({ id, sec: true }))].slice(0, 13);
  rows.forEach((r, i) => {
    const it = ing.get(r.id);
    if (!it) return;
    const y = 146 + i * 27;
    if (!r.sec) text(LX, y, String(i + 1), 12, TEXT, 600);
    text(LX + 22, y, it.name, 14, r.sec ? MUTED : TEXT, r.sec ? 400 : 600);
    text(LX + 210, y, `${year(it.origin)} · ${it.origin.place}`.slice(0, 44), 11, MUTED);
    if (it.arrival) text(W - 56, y, `Europe ${year(it.arrival)}`, 11, MUTED, 400, "end");
  });

  // The time line: origin (dot) and European arrival (ring) of each primary and secondary ingredient.
  const ty = 590, tx0 = 56, right = W - 126;
  const dated = rows.map((r) => ing.get(r.id)).filter((x): x is Ingredient => x?.origin.year !== undefined);
  const years = [...dated.flatMap((d) => [d.origin.year!, ...(d.arrival?.year !== undefined ? [d.arrival.year] : [])]), s.time_period.start];
  const lo = Math.min(...years), hi = Math.max(...years);
  const span = (y: number) => Math.log1p(Math.max(0, hi - y));
  const X = (y: number) => (hi === lo ? right : right - ((right - tx0) * span(y)) / span(lo));
  text(tx0, ty - 30, "Origin (dot) and European arrival (ring) of each ingredient, against the start of the style (compressed scale)", 11, MUTED);
  parts.push(`<path d="M${tx0} ${ty} H${W - 56}" stroke="${TEXT}" stroke-width="1"/>`);
  // Labels sit in fixed slots in the order of the years, in two alternate rows, so that no two labels touch.
  const marks = dated.flatMap((d) => [{ y: d.origin.year!, name: d.name, ring: false }, ...(d.arrival?.year !== undefined ? [{ y: d.arrival.year, name: d.name, ring: true }] : [])]).sort((a, b) => a.y - b.y);
  const slot = (W - 56 - tx0) / Math.max(1, marks.length);
  marks.forEach((m, i) => {
    const x = X(m.y), lx = tx0 + slot * (i + 0.5), row = i % 2, ly = ty + 34 + row * 30;
    parts.push(m.ring
      ? `<circle cx="${r1(x)}" cy="${ty}" r="4" fill="#faf8f3" stroke="${TEXT}" stroke-width="1.2"/>`
      : `<circle cx="${r1(x)}" cy="${ty}" r="3.5" fill="${TEXT}"/>`);
    parts.push(`<path d="M${r1(x)} ${ty + 5} V${ty + 9} L${r1(lx)} ${ty + 18} V${ly - 11}" stroke="${RULE}" fill="none"/>`);
    text(lx, ly, `${m.y < 0 ? `${-m.y} BC` : m.y}${m.ring ? " → EU" : ""}`, 10, TEXT, 600, "middle");
    text(lx, ly + 12, m.name.length > 20 ? m.name.slice(0, 19) + "…" : m.name, 10, MUTED, 400, "middle");
  });
  const sx = X(s.time_period.start);
  parts.push(`<path d="M${r1(sx)} ${ty - 7} V${ty + 7}" stroke="${RED}" stroke-width="2.5"/>`);
  text(sx, ty - 12, `${s.time_period.start} style`, 11, RED, 600, "end");

  // The palette strip.
  s.palette.colours.forEach((c, i) => {
    const x = 56 + i * 132;
    parts.push(`<rect x="${x}" y="${H - 56}" width="16" height="16" fill="${c.hex}" stroke="${RULE}"/>`);
    text(x + 22, H - 43, c.name.slice(0, 18), 11, MUTED);
  });
  text(W - 56, H - 16, `Drawn by code from data/cuisine/styles/${s.id}.json and data/cuisine/vocabulary.json. A plan, not a recipe.`, 10, MUTED, 400, "end");
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">${parts.join("")}</svg>\n`;
}

// ---- Main -------------------------------------------------------------------------------------------------------------
const v = loadCuisineVocabulary();
const ing = new Map(v.ingredients.map((i) => [i.id, i as Ingredient]));
mkdirSync(OUT, { recursive: true });
const manPath = join(OUT, "manifest.json");
const manifest: { images: Record<string, Entry> } = existsSync(manPath) ? JSON.parse(readFileSync(manPath, "utf8")) : { images: {} };
const all = loadStyleFiles("cuisine").map((f) => f.style as unknown as Style);
for (const s of all) {
  if (only && !only.includes(s.id)) continue;
  const svg = plan(s, ing);
  writeFileSync(join(OUT, `${s.id}.svg`), svg);
  manifest.images[s.id] = {
    file: `${s.id}.svg`, kind: "plate-plan",
    subject: "the plate of the style from above, its primary ingredients placed by the composition rule, and a time line of the origin and the European arrival of each ingredient",
    model: "drawn by scripts/render-cuisine-plates.ts from the rules of the style (no image model)",
    width: W, height: H, generated: new Date().toISOString(),
  };
  console.log(`${s.id}: ${(svg.length / 1024).toFixed(0)} KB`);
}
for (const id of Object.keys(manifest.images)) if (!all.some((s) => s.id === id)) delete manifest.images[id];
manifest.images = Object.fromEntries(Object.entries(manifest.images).sort(([a], [b]) => a.localeCompare(b)));
writeFileSync(manPath, JSON.stringify(manifest, null, 2) + "\n");
