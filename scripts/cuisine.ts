/**
 * The cuisine vocabulary (data/cuisine/vocabulary.json) and the checks that a schema cannot make:
 * each ingredient, method and course id of a style resolves, each signature dish uses a course of the
 * branch of the style, an ingredient of its pantry and a method of its technique, no ingredient
 * arrives in Europe before it began, and a European style (pantry.in_europe) uses no ingredient
 * before it reached Europe.
 *
 *   npx tsx scripts/cuisine.ts            the style check, one line for each error
 *   npx tsx scripts/cuisine.ts --history  the history of ingredients and methods, by year of origin
 */
import { join } from "node:path";
import { ROOT, loadStyleFiles, readJson } from "./lib.js";

export interface Origin { year?: number; circa?: boolean; place: string; by?: string }
interface Item { id: string; name: string; family: string; origin: Origin; arrival?: Origin; note: string }
export interface CuisineVocabulary {
  branches: { id: string; name: string; order: number; scope: string }[];
  ingredients: Item[];
  methods: Item[];
  courses: { id: string; name: string; branches: string[] }[];
}
export interface CuisineStyle {
  id: string;
  branch: string;
  time_period: { start: number };
  pantry: { primary: string[]; secondary: string[]; avoid: string[]; in_europe: boolean };
  technique: { methods: string[] };
  signatures: { dishes: { course: string; dish: string; ingredient: string; method: string }[] };
}

export const loadCuisineVocabulary = (): CuisineVocabulary => readJson<CuisineVocabulary>(join(ROOT, "data", "cuisine", "vocabulary.json"));

/** Errors in the vocabulary itself: duplicate ids and an arrival before the origin. */
export function checkCuisineVocabulary(v: CuisineVocabulary): string[] {
  const out: string[] = [];
  const all = [...v.ingredients, ...v.methods, ...v.courses].map((x) => x.id);
  for (const id of new Set(all.filter((x, i) => all.indexOf(x) !== i))) out.push(`id "${id}" is used twice`);
  for (const x of [...v.ingredients, ...v.methods])
    if (x.arrival?.year !== undefined && x.origin.year !== undefined && x.arrival.year < x.origin.year)
      out.push(`${x.id}: arrival ${x.arrival.year} is before origin ${x.origin.year}`);
  return out;
}

/** Errors in one cuisine style against the vocabulary. */
export function checkCuisineStyle(v: CuisineVocabulary, s: CuisineStyle): string[] {
  const out: string[] = [];
  const ingredients = new Map(v.ingredients.map((x) => [x.id, x]));
  const methods = new Set(v.methods.map((x) => x.id));
  const courses = new Map(v.courses.map((c) => [c.id, c]));
  for (const key of ["primary", "secondary", "avoid"] as const)
    for (const id of s.pantry[key]) if (!ingredients.has(id)) out.push(`pantry.${key}: "${id}" is not an ingredient of the vocabulary`);
  const used = new Set([...s.pantry.primary, ...s.pantry.secondary]);
  for (const id of s.pantry.avoid) if (used.has(id)) out.push(`pantry.avoid: "${id}" is also in primary or secondary`);
  for (const id of s.pantry.secondary) if (s.pantry.primary.includes(id)) out.push(`pantry.secondary: "${id}" is also in primary`);
  for (const id of s.technique.methods) if (!methods.has(id)) out.push(`technique.methods: "${id}" is not a method of the vocabulary`);
  // An ingredient cannot be older in the style than in the record: its origin year must not be later than the start of the style.
  for (const id of used) {
    const y = ingredients.get(id)?.origin.year;
    if (y !== undefined && y > s.time_period.start) out.push(`pantry: "${id}" began in ${y}, after the start of the style (${s.time_period.start})`);
    // A European kitchen also needs the ingredient in Europe: its arrival year must not be later than the start.
    const a = ingredients.get(id)?.arrival?.year;
    if (s.pantry.in_europe && a !== undefined && a > s.time_period.start)
      out.push(`pantry: "${id}" reached Europe in ${a}, after the start of the European style (${s.time_period.start})`);
  }
  s.signatures.dishes.forEach((d, i) => {
    const at = `signatures.dishes[${i}]`;
    const c = courses.get(d.course);
    if (!c) out.push(`${at}: course "${d.course}" is not in the vocabulary`);
    else if (!c.branches.includes(s.branch)) out.push(`${at}: course "${d.course}" does not list branch ${s.branch}`);
    if (!used.has(d.ingredient)) out.push(`${at}: ingredient "${d.ingredient}" is not in pantry.primary or pantry.secondary`);
    if (!s.technique.methods.includes(d.method)) out.push(`${at}: method "${d.method}" is not in technique.methods`);
  });
  return out;
}

/** Each dated ingredient and method, oldest first: the history of the pantry and the kitchen. */
export function cuisineHistory(v: CuisineVocabulary) {
  const rows = [...v.ingredients.map((x) => ({ ...x, list: "ingredient" })), ...v.methods.map((x) => ({ ...x, list: "method" }))];
  return rows.filter((r) => r.origin.year !== undefined).sort((a, b) => a.origin.year! - b.origin.year!);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const v = loadCuisineVocabulary();
  const yl = (o?: Origin) => (o?.year === undefined ? "" : `${o.circa ? "c. " : ""}${o.year < 0 ? `${-o.year} BC` : o.year}`);
  if (process.argv.includes("--history")) {
    for (const r of cuisineHistory(v))
      console.log(yl(r.origin).padEnd(12), r.list.padEnd(11), r.name.padEnd(30), r.origin.place.padEnd(34), r.arrival ? `Europe ${yl(r.arrival)}` : "");
  } else {
    let n = 0;
    for (const e of checkCuisineVocabulary(v)) (n++, console.log(`vocabulary: ${e}`));
    for (const { style } of loadStyleFiles("cuisine"))
      for (const e of checkCuisineStyle(v, style as unknown as CuisineStyle)) (n++, console.log(`${style.id}: ${e}`));
    console.log(`${n} errors`);
    process.exitCode = n ? 1 : 0;
  }
}
