/**
 * The object net: for each interior style, the industrial style, the objects and the surface of
 * each object category (data/industrial/nets/<interior-id>.json), checked against the closed
 * vocabulary (data/industrial/vocabulary.json) and against the knob ranges of each industrial style.
 *
 *   npm run net -- <interior-id>                                  the net at its own knob values
 *   npm run net -- <interior-id> era_blend=1 metal_tone=black     the net with other knob values
 *
 * The resolver takes, for each category, the first of [style, ...alternates] whose permutation
 * ranges hold the knob values. The main style gives the objects that the net names; an alternate
 * gives its own signature object for the category. A period room (era_blend < 0.5) skips each
 * candidate that starts after the room ends; if no candidate is left, the cell is "none".
 */
import { fileURLToPath } from "node:url";
import { join } from "node:path";
import { existsSync, readdirSync } from "node:fs";
import { checkValue } from "./permute.js";
import { ROOT, loadDomains, loadStyleFiles, readJson, type Domain, type Style } from "./lib.js";

export const CATEGORIES = ["sanitary", "electrics", "lighting", "storage", "soft-furniture", "tables", "kitchen", "decor"] as const;
export type Category = (typeof CATEGORIES)[number];
export const TILES = ["room", "materials", "furniture", "textiles", "light", "objects"] as const;

export interface Material { id: string; name: string; family: string; warmth: number }
export interface Finish { id: string; name: string; gloss_gu: [number, number]; families: string[] }
export interface Texture { id: string; name: string; tactility: string; families: string[]; description: string }
export interface ObjectType { id: string; category: Category; name: string; parts: string[]; forms: string[]; materials: string[]; finishes: string[]; textures: string[] }
export interface Vocabulary {
  categories: { id: Category; name: string; order: number; scope: string }[];
  materials: Material[];
  finishes: Finish[];
  textures: Texture[];
  objects: ObjectType[];
}
export interface Surface { object: string; form: string; material: string; finish: string; texture: string; colour?: string; note?: string }
export type KnobValues = Record<string, number | string>;
export interface NetCell { category: Category; style: string; alternates: string[]; knobs?: KnobValues; objects: Surface[] }
export interface Net { interior: string; thesis: string; knobs: KnobValues; categories: NetCell[]; moodboard: Record<(typeof TILES)[number], string[]> }

/** The industrial facets that the net reads from a style. */
export interface IndustrialStyle extends Style {
  materials: { primary: string[]; secondary: string[]; avoid: string[]; rule: string };
  finish: { finishes: string[]; textures: string[]; gloss: string; patina: string };
  signatures: { objects: (Surface & { category: Category })[] };
}

export const loadVocabulary = (): Vocabulary => readJson<Vocabulary>(join(ROOT, "data", "industrial", "vocabulary.json"));

export function loadNets(): { file: string; slug: string; net: Net }[] {
  const dir = join(ROOT, "data", "industrial", "nets");
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .filter((f) => f.endsWith(".json"))
    .sort()
    .map((f) => ({ file: join("data", "industrial", "nets", f), slug: f.replace(/\.json$/, ""), net: readJson<Net>(join(dir, f)) }));
}

export interface Lookup {
  voc: Vocabulary;
  material: Map<string, Material>;
  finish: Map<string, Finish>;
  texture: Map<string, Texture>;
  object: Map<string, ObjectType>;
}
export function lookup(voc: Vocabulary): Lookup {
  return {
    voc,
    material: new Map(voc.materials.map((m) => [m.id, m])),
    finish: new Map(voc.finishes.map((f) => [f.id, f])),
    texture: new Map(voc.textures.map((t) => [t.id, t])),
    object: new Map(voc.objects.map((o) => [o.id, o])),
  };
}

/** The vocabulary itself: unique ids, a known category, and object lists that point at known ids. */
export function checkVocabulary(L: Lookup): string[] {
  const out: string[] = [];
  const where = "data/industrial/vocabulary.json";
  for (const [name, list] of [["material", L.voc.materials], ["finish", L.voc.finishes], ["texture", L.voc.textures], ["object", L.voc.objects]] as const) {
    const seen = new Set<string>();
    for (const r of list as { id: string }[]) {
      if (seen.has(r.id)) out.push(`${where}: ${name} "${r.id}" is listed twice`);
      seen.add(r.id);
    }
  }
  if (L.voc.categories.map((c) => c.id).join() !== CATEGORIES.join()) out.push(`${where}: categories are not ${CATEGORIES.join(", ")} in that order`);
  for (const f of L.voc.finishes) if (f.gloss_gu[0] > f.gloss_gu[1]) out.push(`${where}: finish "${f.id}" has a gloss range from high to low`);
  for (const o of L.voc.objects) {
    for (const m of o.materials) if (!L.material.has(m)) out.push(`${where}: object "${o.id}" names material "${m}", which is not in materials`);
    for (const f of o.finishes) if (!L.finish.has(f)) out.push(`${where}: object "${o.id}" names finish "${f}", which is not in finishes`);
    for (const t of o.textures) if (!L.texture.has(t)) out.push(`${where}: object "${o.id}" names texture "${t}", which is not in textures`);
  }
  for (const c of CATEGORIES) if (!L.voc.objects.some((o) => o.category === c)) out.push(`${where}: category "${c}" has no object`);
  return out;
}

/** One surface (an object with a material, a finish and a texture) against the vocabulary. */
export function checkSurface(L: Lookup, s: Surface, category: Category | undefined): string[] {
  const out: string[] = [];
  const o = L.object.get(s.object);
  if (!o) return [`object "${s.object}" is not in the vocabulary`];
  if (category && o.category !== category) out.push(`object "${s.object}" is in category "${o.category}", not "${category}"`);
  const m = L.material.get(s.material);
  const f = L.finish.get(s.finish);
  const t = L.texture.get(s.texture);
  if (!m) out.push(`material "${s.material}" is not in the vocabulary`);
  else if (!o.materials.includes(s.material)) out.push(`"${s.object}" is not made of "${s.material}" in the vocabulary`);
  if (!f) out.push(`finish "${s.finish}" is not in the vocabulary`);
  else if (!o.finishes.includes(s.finish)) out.push(`"${s.object}" does not take finish "${s.finish}" in the vocabulary`);
  if (!t) out.push(`texture "${s.texture}" is not in the vocabulary`);
  else if (!o.textures.includes(s.texture)) out.push(`"${s.object}" does not take texture "${s.texture}" in the vocabulary`);
  if (m && f && !f.families.includes(m.family)) out.push(`finish "${s.finish}" is not for ${m.family} (material "${s.material}")`);
  if (m && t && !t.families.includes(m.family)) out.push(`texture "${s.texture}" is not for ${m.family} (material "${s.material}")`);
  return out;
}

/** An industrial style: its material and finish ids, and one signature object in each category, in order. */
export function checkIndustrialStyle(L: Lookup, s: IndustrialStyle): string[] {
  const out: string[] = [];
  const { primary, secondary, avoid } = s.materials;
  for (const m of [...primary, ...secondary, ...avoid]) if (!L.material.has(m)) out.push(`materials: "${m}" is not in the vocabulary`);
  for (const m of avoid) if (primary.includes(m) || secondary.includes(m)) out.push(`materials: "${m}" is both used and avoided`);
  for (const f of s.finish.finishes) if (!L.finish.has(f)) out.push(`finish.finishes: "${f}" is not in the vocabulary`);
  for (const t of s.finish.textures) if (!L.texture.has(t)) out.push(`finish.textures: "${t}" is not in the vocabulary`);
  const rows = s.signatures.objects;
  if (rows.map((r) => r.category).join() !== CATEGORIES.join()) out.push(`signatures: one row for each category, in the order ${CATEGORIES.join(", ")}`);
  rows.forEach((r) => {
    for (const e of checkSurface(L, r, r.category)) out.push(`signatures (${r.category}): ${e}`);
    if (avoid.includes(r.material)) out.push(`signatures (${r.category}): "${r.material}" is in materials.avoid`);
  });
  return out;
}

const knobKeys = (d: Domain) => d.knobs.map((k) => k.key);

/** The knob values of one category: the net values, with the values of the category on top. */
export const cellKnobs = (net: Net, cell: NetCell): KnobValues => ({ ...net.knobs, ...(cell.knobs ?? {}) });

/** Why a style cannot hold these knob values; empty when it can. */
export function rangeProblems(domain: Domain, style: Style, values: KnobValues): string[] {
  const out: string[] = [];
  for (const k of domain.knobs) if (values[k.key] !== undefined) out.push(...checkValue(k, style.permutations?.[k.key], values[k.key]));
  return out;
}

export interface NetContext {
  L: Lookup;
  domain: Domain;
  industrial: Map<string, IndustrialStyle>;
  interiors: Map<string, Style>;
  /** The moodboard tiles of each interior style, from demo/moodboards/interior/manifest.json. */
  tiles: Map<string, string[]>;
}

/** Every rule of one net. */
export function checkNet(ctx: NetContext, slug: string, net: Net): string[] {
  const out: string[] = [];
  const interior = ctx.interiors.get(net.interior);
  if (net.interior !== slug) out.push(`interior "${net.interior}" is not equal to the file name`);
  if (!interior) return [...out, `interior "${net.interior}" is not in data/interior/styles/`];
  const keys = knobKeys(ctx.domain);
  for (const k of keys) if (net.knobs[k] === undefined) out.push(`knobs: no value for ${k}`);
  if (net.categories.map((c) => c.category).join() !== CATEGORIES.join()) out.push(`categories: one cell for each category, in the order ${CATEGORIES.join(", ")}`);
  const end = interior.time_period.end ?? 9999;
  const inNet = new Set<string>();
  for (const cell of net.categories) {
    const at = `categories (${cell.category})`;
    const main = ctx.industrial.get(cell.style);
    if (!main) {
      out.push(`${at}: style "${cell.style}" is not in data/industrial/styles/`);
      continue;
    }
    for (const a of cell.alternates) {
      if (!ctx.industrial.has(a)) out.push(`${at}: alternate "${a}" is not in data/industrial/styles/`);
      if (a === cell.style) out.push(`${at}: alternate "${a}" is the main style`);
    }
    const values = cellKnobs(net, cell);
    for (const p of rangeProblems(ctx.domain, main, values)) out.push(`${at}: style "${cell.style}" cannot hold the knobs: ${p}`);
    // A period room takes period objects: at a low era blend, the object style cannot be younger than the room.
    const late = periodProblem(main, end, values);
    if (late) out.push(`${at}: ${late}; raise era_blend to 0.5 or more, or choose an older style`);
    const allowed = new Set([...main.materials.primary, ...main.materials.secondary]);
    for (const s of cell.objects) {
      inNet.add(s.object);
      for (const e of checkSurface(ctx.L, s, cell.category)) out.push(`${at}: ${e}`);
      if (!allowed.has(s.material)) out.push(`${at}: "${s.material}" is not a primary or secondary material of "${cell.style}"`);
    }
    if (new Set(cell.objects.map((o) => o.object)).size !== cell.objects.length) out.push(`${at}: an object is listed twice`);
  }
  const want = ctx.tiles.get(net.interior);
  if (want && want.join() !== TILES.filter((t) => want.includes(t)).join()) out.push(`moodboard: unknown tiles ${want.join(", ")}`);
  for (const t of TILES) for (const ref of net.moodboard[t] ?? []) if (!inNet.has(ref)) out.push(`moodboard.${t}: "${ref}" is not an object of the net`);
  return out;
}

export interface Resolved { category: Category; style: string; via: "main" | "alternate" | "none"; reason?: string; objects: Surface[] }

/**
 * The period-room rule: at an era blend below 0.5 the room takes period objects, so a style that
 * starts after the room ends cannot furnish it. Returns the problem, or undefined.
 */
export function periodProblem(style: Style, roomEnd: number, values: KnobValues): string | undefined {
  if (Number(values.era_blend) < 0.5 && style.time_period.start > roomEnd)
    return `period room: "${style.id}" starts in ${style.time_period.start}, after the room ends (${roomEnd})`;
  return undefined;
}

/** For each category, the first style that holds the knob values and the period of the room, with its objects. */
export function resolveNet(ctx: NetContext, net: Net, values: KnobValues = {}): Resolved[] {
  const end = ctx.interiors.get(net.interior)?.time_period.end ?? 9999;
  return net.categories.map((cell) => {
    const v = { ...cellKnobs(net, cell), ...values };
    const reasons: string[] = [];
    for (const [i, id] of [cell.style, ...cell.alternates].entries()) {
      const s = ctx.industrial.get(id);
      if (!s) {
        reasons.push(`unknown style "${id}"`);
        continue;
      }
      const ranges = rangeProblems(ctx.domain, s, v);
      const late = periodProblem(s, end, v);
      if (i === 0) reasons.push(...ranges);
      if (late) reasons.push(late);
      if (ranges.length || late) continue;
      if (i === 0) return { category: cell.category, style: id, via: "main" as const, objects: cell.objects };
      const row = s.signatures.objects.find((r) => r.category === cell.category)!;
      const { category: _c, ...surface } = row;
      return { category: cell.category, style: id, via: "alternate" as const, objects: [surface] };
    }
    return { category: cell.category, style: cell.style, via: "none" as const, reason: reasons.join("; "), objects: cell.objects };
  });
}

/** The context from the files on disk. */
export function loadNetContext(): NetContext {
  const domain = loadDomains().find((d) => d.id === "industrial")!;
  const industrial = new Map(loadStyleFiles("industrial").map((f) => [f.style.id, f.style as IndustrialStyle]));
  const interiors = new Map(loadStyleFiles("interior").map((f) => [f.style.id, f.style]));
  const manifest = join(ROOT, "demo", "moodboards", "interior", "manifest.json");
  const boards = existsSync(manifest) ? readJson<{ boards: Record<string, Record<string, unknown>> }>(manifest).boards : {};
  const tiles = new Map(Object.entries(boards).map(([id, b]) => [id, Object.keys(b)]));
  return { L: lookup(loadVocabulary()), domain, industrial, interiors, tiles };
}

function cli(): void {
  const [id, ...args] = process.argv.slice(2);
  const ctx = loadNetContext();
  const nets = loadNets();
  const found = nets.find((n) => n.slug === id);
  if (!found) {
    console.error(`usage: npm run net -- <interior-id> [knob=value ...]\nnets: ${nets.map((n) => n.slug).join(", ")}`);
    process.exit(1);
  }
  const values: KnobValues = {};
  for (const a of args) {
    const [k, v] = a.split("=");
    const knob = ctx.domain.knobs.find((x) => x.key === k);
    if (!knob) {
      console.error(`unknown knob "${k}". Knobs: ${knobKeys(ctx.domain).join(", ")}`);
      process.exit(1);
    }
    values[k] = knob.kind === "enum" || knob.kind === "colour" ? v : Number(v);
  }
  const L = ctx.L;
  console.log(`${found.net.interior}: ${found.net.thesis}\n`);
  for (const r of resolveNet(ctx, found.net, values)) {
    const mark = r.via === "main" ? "" : r.via === "alternate" ? " (alternate)" : ` (none: ${r.reason})`;
    console.log(`${r.category.padEnd(15)} ${r.style}${mark}`);
    for (const o of r.objects)
      console.log(`  ${L.object.get(o.object)?.name ?? o.object}: ${o.form}; ${L.material.get(o.material)?.name}, ${L.finish.get(o.finish)?.name?.toLowerCase()}, ${L.texture.get(o.texture)?.name?.toLowerCase()}`);
  }
}

if (process.argv[1] === fileURLToPath(import.meta.url)) cli();
