// Render one studio photograph for each material: the material alone on a seamless white background.
//
//   npm run material-photos [-- --only banana,stoneware] [--force] [--dry-run]
//
// The subject words come from the "photo" field of the material record (data/materials/<class>.json), so a
// change in the data changes the photo. The light and the background are the same for each material, so the
// page compares materials and not photographs. The vision check compares each render with the name and the
// summary of the record, so a render of the wrong subject or colour is tried again.
// Output: demo/materials/photos/<id>.webp and demo/materials/photos/manifest.json.
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { loadLayer } from "./materials.js";
import { preflight, renderWebp } from "./previews/comfy.js";

const args = process.argv.slice(2);
const opt = (k: string) => { const i = args.indexOf(`--${k}`); return i >= 0 ? args[i + 1] : undefined; };
const only = opt("only")?.split(",");
const force = args.includes("--force");
const dry = args.includes("--dry-run");
const SIZE = { width: 768, height: 768 };

export const photoPrompt = (subject: string) =>
  `studio product photograph of ${subject}, alone in the centre of the frame on a seamless pure white background, soft even studio light from above, a faint soft contact shadow, sharp focus, true natural colour, no text, no labels, no props`;

const root = "demo/materials/photos";
mkdirSync(root, { recursive: true });
const manifestPath = join(root, "manifest.json");
const manifest = existsSync(manifestPath) ? JSON.parse(readFileSync(manifestPath, "utf8")) : { size: SIZE, photos: {} };
const todo = [...loadLayer().byId.values()]
  .filter((m) => !only || only.includes(m.id))
  .map((m) => ({ id: m.id, prompt: photoPrompt(m.photo ?? m.name.toLowerCase()), expect: `${m.name}, shown as ${m.photo ?? m.name.toLowerCase()}${m.summary ? `. ${m.summary}` : ""}` }))
  .filter(({ id, prompt }) => force || !existsSync(join(root, `${id}.webp`)) || manifest.photos[id]?.prompt !== prompt);
if (dry) { for (const { id, prompt } of todo) console.log(`${id}: ${prompt}`); process.exit(0); }
if (todo.length) await preflight();
for (const { id, prompt, expect } of todo) {
  const t0 = Date.now();
  const rec = await renderWebp(prompt, join(root, `${id}.webp`), SIZE, `design-ontology/materials/${id}`, undefined, expect);
  manifest.photos[id] = { file: `${id}.webp`, ...rec };
  writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + "\n");
  console.log(`${id}: ${((Date.now() - t0) / 1000).toFixed(0)} s`);
}
console.log(`material photos: ${todo.length} rendered`);
