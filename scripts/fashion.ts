/**
 * The fashion vocabulary (data/fashion/vocabulary.json) and the checks that a schema cannot make:
 * each fabric, material, finish and object id of a style resolves, each signature piece belongs to the
 * branch of the style, and each finish suits the family of its material.
 *
 *   npx tsx scripts/fashion.ts            the style check, one line for each error
 *   npx tsx scripts/fashion.ts --history  the fabric history: each dated fibre, fabric, material and finish, by year
 */
import { join } from "node:path";
import { ROOT, loadStyleFiles, readJson } from "./lib.js";

export interface Origin { year?: number; circa?: boolean; place: string; by?: string }
interface Item { id: string; name: string; origin?: Origin; note: string }
export interface FashionVocabulary {
  branches: { id: string; name: string; order: number; scope: string }[];
  fibres: (Item & { kind: string })[];
  fabrics: (Item & { fibres: string[]; construction: string; weight_gsm: [number, number] })[];
  materials: (Item & { family: string })[];
  finishes: (Item & { families: string[] })[];
  objects: { id: string; branch: string; name: string }[];
}
export interface FashionStyle {
  id: string;
  branch: string;
  fabrics: { primary: string[]; secondary: string[]; avoid: string[] };
  surface: { finishes: string[] };
  signatures: { pieces: { object: string; form: string; material: string; finish: string }[] };
}

export const loadFashionVocabulary = (): FashionVocabulary => readJson<FashionVocabulary>(join(ROOT, "data", "fashion", "vocabulary.json"));

/** The family of a fabric ("textile") or a material, by id. */
const families = (v: FashionVocabulary) =>
  new Map<string, string>([...v.fabrics.map((f) => [f.id, "textile"] as const), ...v.materials.map((m) => [m.id, m.family] as const)]);

/** Errors in the vocabulary itself: duplicate ids and fibres that do not resolve. */
export function checkFashionVocabulary(v: FashionVocabulary): string[] {
  const out: string[] = [];
  const all = [...v.fibres, ...v.fabrics, ...v.materials, ...v.finishes, ...v.objects].map((x) => x.id);
  for (const id of new Set(all.filter((x, i) => all.indexOf(x) !== i))) out.push(`id "${id}" is used twice`);
  const fibres = new Set(v.fibres.map((f) => f.id));
  for (const f of v.fabrics) for (const x of f.fibres) if (!fibres.has(x)) out.push(`fabric ${f.id}: fibre "${x}" is not in fibres`);
  for (const f of v.fabrics) if (f.weight_gsm[0] > f.weight_gsm[1]) out.push(`fabric ${f.id}: weight_gsm min is above max`);
  return out;
}

/** Errors in one fashion style against the vocabulary. */
export function checkFashionStyle(v: FashionVocabulary, s: FashionStyle): string[] {
  const out: string[] = [];
  const fam = families(v);
  const finishes = new Map(v.finishes.map((f) => [f.id, f]));
  const objects = new Map(v.objects.map((o) => [o.id, o]));
  for (const key of ["primary", "secondary", "avoid"] as const)
    for (const id of s.fabrics[key]) if (!fam.has(id)) out.push(`fabrics.${key}: "${id}" is not a fabric or material of the vocabulary`);
  const used = new Set([...s.fabrics.primary, ...s.fabrics.secondary]);
  for (const id of s.fabrics.avoid) if (used.has(id)) out.push(`fabrics.avoid: "${id}" is also in primary or secondary`);
  for (const id of s.fabrics.secondary) if (s.fabrics.primary.includes(id)) out.push(`fabrics.secondary: "${id}" is also in primary`);
  for (const id of s.surface.finishes) if (!finishes.has(id)) out.push(`surface.finishes: "${id}" is not a finish of the vocabulary`);
  s.signatures.pieces.forEach((p, i) => {
    const at = `signatures.pieces[${i}]`;
    const o = objects.get(p.object);
    if (!o) out.push(`${at}: object "${p.object}" is not in the vocabulary`);
    else if (o.branch !== s.branch) out.push(`${at}: object "${p.object}" is in branch ${o.branch}, not ${s.branch}`);
    if (!used.has(p.material)) out.push(`${at}: material "${p.material}" is not in fabrics.primary or fabrics.secondary`);
    const f = finishes.get(p.finish);
    if (!f) out.push(`${at}: finish "${p.finish}" is not in the vocabulary`);
    else if (fam.has(p.material) && !f.families.includes(fam.get(p.material)!))
      out.push(`${at}: finish "${p.finish}" does not apply to the ${fam.get(p.material)} family of "${p.material}"`);
  });
  return out;
}

/** Each dated item of the vocabulary, oldest first: the fabric history. */
export function fabricHistory(v: FashionVocabulary) {
  const rows = [
    ...v.fibres.map((x) => ({ ...x, list: "fibre" })),
    ...v.fabrics.map((x) => ({ ...x, list: "fabric" })),
    ...v.materials.map((x) => ({ ...x, list: "material" })),
    ...v.finishes.map((x) => ({ ...x, list: "finish" })),
  ];
  return rows.filter((r) => r.origin?.year !== undefined).sort((a, b) => a.origin!.year! - b.origin!.year!);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const v = loadFashionVocabulary();
  if (process.argv.includes("--history")) {
    for (const r of fabricHistory(v)) {
      const y = r.origin!.year!;
      console.log(`${(r.origin!.circa ? "c. " : "") + (y < 0 ? `${-y} BC` : y)}`.padEnd(12), r.list.padEnd(9), r.name.padEnd(34), r.origin!.place);
    }
  } else {
    let n = 0;
    for (const e of checkFashionVocabulary(v)) (n++, console.log(`vocabulary: ${e}`));
    for (const { style } of loadStyleFiles("fashion"))
      for (const e of checkFashionStyle(v, style as unknown as FashionStyle)) (n++, console.log(`${style.id}: ${e}`));
    console.log(`${n} errors`);
    process.exitCode = n ? 1 : 0;
  }
}
