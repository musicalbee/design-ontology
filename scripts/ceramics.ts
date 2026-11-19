/**
 * The ceramics vocabulary (data/ceramics/vocabulary.json) and the checks that a schema cannot make:
 * each body, glaze, decoration and object id of a style resolves, each signature piece belongs to the
 * branch of the style, and each glaze suits the kind of its body.
 *
 *   npx tsx scripts/ceramics.ts            the style check, one line for each error
 *   npx tsx scripts/ceramics.ts --history  the history of clay and glaze: each dated body, glaze and decoration, by year
 */
import { join } from "node:path";
import { ROOT, loadStyleFiles, readJson } from "./lib.js";

export interface Origin { year?: number; circa?: boolean; place: string; by?: string }
interface Item { id: string; name: string; origin?: Origin; note: string }
export interface CeramicsVocabulary {
  branches: { id: string; name: string; order: number; scope: string }[];
  bodies: (Item & { kind: string; firing_c: [number, number] })[];
  materials: (Item & { kind: string })[];
  glazes: (Item & { kind: string; bodies: string[] })[];
  decorations: (Item & { kind: string })[];
  objects: { id: string; branch: string; name: string }[];
}
export interface CeramicsStyle {
  id: string;
  branch: string;
  bodies: { primary: string[]; secondary: string[]; avoid: string[] };
  glaze: { glazes: string[]; decorations: string[] };
  firing: { temperature_c: [number, number] };
  signatures: { pieces: { object: string; form: string; body: string; glaze: string; decoration: string }[] };
}

export const loadCeramicsVocabulary = (): CeramicsVocabulary => readJson<CeramicsVocabulary>(join(ROOT, "data", "ceramics", "vocabulary.json"));

/** Errors in the vocabulary itself: duplicate ids and inverted firing ranges. */
export function checkCeramicsVocabulary(v: CeramicsVocabulary): string[] {
  const out: string[] = [];
  const all = [...v.bodies, ...v.materials, ...v.glazes, ...v.decorations, ...v.objects].map((x) => x.id);
  for (const id of new Set(all.filter((x, i) => all.indexOf(x) !== i))) out.push(`id "${id}" is used twice`);
  for (const b of v.bodies) if (b.firing_c[0] > b.firing_c[1]) out.push(`body ${b.id}: firing_c low is above high`);
  return out;
}

/** Errors in one ceramics style against the vocabulary. */
export function checkCeramicsStyle(v: CeramicsVocabulary, s: CeramicsStyle): string[] {
  const out: string[] = [];
  const bodies = new Map(v.bodies.map((b) => [b.id, b]));
  const materials = new Set(v.materials.map((m) => m.id));
  const glazes = new Map(v.glazes.map((g) => [g.id, g]));
  const decorations = new Set(v.decorations.map((d) => d.id));
  const objects = new Map(v.objects.map((o) => [o.id, o]));
  for (const id of s.bodies.primary) if (!bodies.has(id)) out.push(`bodies.primary: "${id}" is not a body of the vocabulary`);
  for (const key of ["secondary", "avoid"] as const)
    for (const id of s.bodies[key]) if (!bodies.has(id) && !materials.has(id)) out.push(`bodies.${key}: "${id}" is not a body or material of the vocabulary`);
  const used = new Set([...s.bodies.primary, ...s.bodies.secondary]);
  for (const id of s.bodies.avoid) if (used.has(id)) out.push(`bodies.avoid: "${id}" is also in primary or secondary`);
  for (const id of s.bodies.secondary) if (s.bodies.primary.includes(id)) out.push(`bodies.secondary: "${id}" is also in primary`);
  for (const id of s.glaze.glazes) if (!glazes.has(id)) out.push(`glaze.glazes: "${id}" is not a glaze of the vocabulary`);
  for (const id of s.glaze.decorations) if (!decorations.has(id)) out.push(`glaze.decorations: "${id}" is not a decoration of the vocabulary`);
  if (s.firing.temperature_c[0] > s.firing.temperature_c[1]) out.push(`firing.temperature_c: low is above high`);
  s.signatures.pieces.forEach((p, i) => {
    const at = `signatures.pieces[${i}]`;
    const o = objects.get(p.object);
    if (!o) out.push(`${at}: object "${p.object}" is not in the vocabulary`);
    else if (o.branch !== s.branch) out.push(`${at}: object "${p.object}" is in branch ${o.branch}, not ${s.branch}`);
    const b = bodies.get(p.body);
    if (!b) out.push(`${at}: body "${p.body}" is not a clay body of the vocabulary`);
    if (!used.has(p.body)) out.push(`${at}: body "${p.body}" is not in bodies.primary or bodies.secondary`);
    const g = glazes.get(p.glaze);
    if (!g) out.push(`${at}: glaze "${p.glaze}" is not in the vocabulary`);
    else if (!s.glaze.glazes.includes(p.glaze)) out.push(`${at}: glaze "${p.glaze}" is not in glaze.glazes`);
    else if (b && !g.bodies.includes(b.kind)) out.push(`${at}: glaze "${p.glaze}" does not suit the ${b.kind} body "${p.body}"`);
    if (!s.glaze.decorations.includes(p.decoration)) out.push(`${at}: decoration "${p.decoration}" is not in glaze.decorations`);
  });
  return out;
}

/** Each dated item of the vocabulary, oldest first: the history of clay and glaze. */
export function ceramicsHistory(v: CeramicsVocabulary) {
  const rows = [
    ...v.bodies.map((x) => ({ ...x, list: "body" })),
    ...v.glazes.map((x) => ({ ...x, list: "glaze" })),
    ...v.decorations.map((x) => ({ ...x, list: "decoration" })),
  ];
  return rows.filter((r) => r.origin?.year !== undefined).sort((a, b) => a.origin!.year! - b.origin!.year!);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const v = loadCeramicsVocabulary();
  if (process.argv.includes("--history")) {
    for (const r of ceramicsHistory(v)) {
      const y = r.origin!.year!;
      console.log(`${(r.origin!.circa ? "c. " : "") + (y < 0 ? `${-y} BC` : y)}`.padEnd(12), r.list.padEnd(11), r.name.padEnd(34), r.origin!.place);
    }
  } else {
    let n = 0;
    for (const e of checkCeramicsVocabulary(v)) (n++, console.log(`vocabulary: ${e}`));
    for (const { style } of loadStyleFiles("ceramics"))
      for (const e of checkCeramicsStyle(v, style as unknown as CeramicsStyle)) (n++, console.log(`${style.id}: ${e}`));
    console.log(`${n} errors`);
    process.exitCode = n ? 1 : 0;
  }
}
