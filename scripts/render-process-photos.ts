// Render one photograph for each process of the material layer: the process at work on its materials.
//
//   npm run process-photos [-- --only cuisine.methods:grilling,technique:ash-glazing] [--force] [--dry-run]
//
// The subject words come from the data: the name and the note (or the summary) of the process, the materials
// it acts on, adds and makes, and its tools. The setting comes from the group of the process, so that a kitchen
// method is in a kitchen and a textile finish is in a dye workshop. The vision check compares each render with
// the name and the materials, so a render of the wrong subject is tried again.
// Output: demo/materials/processes/<group>--<id>.webp and demo/materials/processes/manifest.json.
import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { loadLayer } from "./materials.js";
import { loadTechniques } from "./lib.js";
import { preflight, renderWebp } from "./previews/comfy.js";
import { processFile } from "./material-photo-text.js";

const args = process.argv.slice(2);
const opt = (k: string) => { const i = args.indexOf(`--${k}`); return i >= 0 ? args[i + 1] : undefined; };
const only = opt("only")?.split(",");
const force = args.includes("--force");
const dry = args.includes("--dry-run");
// --fails: render again each process whose kept image failed the vision check.
const fails = args.includes("--fails");
// A failed image stays only when every fault is in the hands, the text or the colour. A wrong or missing
// subject would sit under the process name as its photograph, so that file goes and the page shows none.
const wrongSubject = (qa?: { ok?: boolean; defects?: string[] }) =>
  qa?.ok === false && (qa.defects ?? []).some((d) => !/hand|finger|thumb|text|letter|logo|label|colou?r/i.test(d));
const SIZE = { width: 768, height: 768 };

const SETTING: Record<string, string> = {
  "cuisine.methods": "on a kitchen work surface",
  "ceramics.decorations": "on a potter's workbench",
  "fashion.finishes": "on a craft workshop table",
  "industrial.finishes": "on a workshop bench",
  technique: "in a workshop",
};

// The name and the note of each process, from the vocabularies and the technique records.
const about = new Map<string, { name: string; note: string }>();
for (const { technique: t } of loadTechniques()) about.set(`technique:${t.id}`, { name: t.name, note: t.summary ?? "" });
for (const g of Object.keys(SETTING).filter((g) => g !== "technique")) {
  const [domain, list] = g.split(".");
  const v = JSON.parse(readFileSync(join("data", domain, "vocabulary.json"), "utf8")) as Record<string, { id: string; name: string; note?: string }[]>;
  for (const e of v[list] ?? []) about.set(`${g}:${e.id}`, { name: e.name, note: e.note ?? "" });
}

const L = loadLayer();
const names = (ids?: string[]) => (ids ?? []).map((id) => (L.byId.get(id)?.name ?? id).toLowerCase()).join(", ");
const tools = (ids?: string[]) => (ids ?? []).map((id) => L.tools.get(id)?.name ?? id).join(", ").toLowerCase();

const root = "demo/materials/processes";
mkdirSync(root, { recursive: true });
const manifestPath = join(root, "manifest.json");
const manifest = existsSync(manifestPath) ? JSON.parse(readFileSync(manifestPath, "utf8")) : { size: SIZE, photos: {} };
const todo = L.edges.map(({ edge: p }) => {
  const group = p.process.split(":")[0];
  const a = about.get(p.process) ?? { name: p.process.split(":")[1].replace(/-/g, " "), note: "" };
  const parts = [
    p.acts_on?.length && `worked on ${names(p.acts_on)}`,
    p.adds?.length && `with ${names(p.adds)} added`,
    p.makes?.length && `making ${names(p.makes)}`,
    p.with?.length && `with the ${tools(p.with)}`,
  ].filter(Boolean).join(", ");
  // A finish or a decoration is named by its result ("Indigo-dyed"), a method or a technique by the act.
  // A "-body" technique is a clay recipe, not a person: say so, or the model draws a human body.
  const what = /-body$/.test(p.process) ? `${a.name.toLowerCase().replace(/ body$/, "")} clay paste being wedged by hand, a lump of ceramic body`
    : group.endsWith("finishes") ? `a ${a.name.toLowerCase()} finish being applied`
    : group === "ceramics.decorations" ? `${a.name.toLowerCase()} decoration being made on clay`
    : `${a.name.toLowerCase()} in progress`;
  const note = a.note ? `: ${a.note.replace(/\.$/, "")}` : "";
  const prompt = `close documentary photograph of ${what}${note}. The scene shows ${parts}, ${SETTING[group] ?? SETTING.technique}, the material and the tools large in the frame, soft natural light, sharp focus, true natural colour, one single photograph, no text, no labels, no logos`;
  const expect = `the process ${a.name}, ${parts}`;
  return { key: p.process, file: processFile(p.process), prompt, expect };
})
  .filter(({ key }) => !only || only.includes(key))
  // A dropped process stays without a photo. Only --force, or --only with its key, renders it again.
  .filter(({ key }) => !manifest.photos[key]?.dropped || force || only?.includes(key))
  .filter(({ key }) => !fails || (manifest.photos[key]?.file !== undefined && wrongSubject(manifest.photos[key]?.qa)) || (/-body$/.test(key) && manifest.photos[key]?.qa?.ok === false))
  .filter(({ key, file, prompt }) => force || fails || !existsSync(join(root, file)) || manifest.photos[key]?.prompt !== prompt);
if (dry) { for (const { key, prompt } of todo) console.log(`${key}: ${prompt}\n`); console.log(`${todo.length} to render`); process.exit(0); }
if (todo.length) await preflight();
for (const { key, file, prompt, expect } of todo) {
  const t0 = Date.now();
  // A second pass starts from a new base seed: the same seeds would draw the same four images again.
  const prev = manifest.photos[key]?.base_seed;
  const seed = (fails || force) && typeof prev === "number" ? prev + 7 : undefined;
  const rec = await renderWebp(prompt, join(root, file), SIZE, `design-ontology/processes/${key.replace(":", "--")}`, seed, expect);
  const wrong = wrongSubject(rec.qa);
  if (wrong) rmSync(join(root, file), { force: true });
  manifest.photos[key] = { file: wrong ? null : file, ...rec, ...(wrong ? { dropped: "subject wrong after all tries" } : {}) };
  writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + "\n");
  console.log(`${key}: ${((Date.now() - t0) / 1000).toFixed(0)} s${wrong ? " (dropped)" : rec.qa?.ok === false ? " (QA fail)" : ""}`);
}
console.log(`process photos: ${todo.length} rendered`);
