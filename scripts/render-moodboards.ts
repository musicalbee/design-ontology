// Render a moodboard for each interior style: six tiles made only from the style's own data.
//
//   npm run moodboards [-- --only japandi-interior,scandinavian-interior] [--force] [--dry-run]
//
// The tiles are the room (with the style's camera), a material flat lay, the key furniture, the textiles,
// the light at dusk and a still life of objects. Each prompt comes from one facet of the style record, so a
// change in the data changes the tile, and the board shows what the skill says, not what a person picked.
// The palette strip of the board is not rendered: the demo page draws it from palette.colours.
// Output: demo/moodboards/interior/<id>/<tile>.webp and demo/moodboards/interior/manifest.json.
import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { preflight, renderWebp } from "./previews/comfy.js";

const args = process.argv.slice(2);
const opt = (k: string) => { const i = args.indexOf(`--${k}`); return i >= 0 ? args[i + 1] : undefined; };
const only = opt("only")?.split(",");
const force = args.includes("--force");
const dry = args.includes("--dry-run");

const LANDSCAPE = { width: 1152, height: 768 };
const PORTRAIT = { width: 768, height: 1024 };
const SQUARE = { width: 896, height: 896 };

const list = (xs: unknown, n = 6) => (Array.isArray(xs) ? xs.slice(0, n).join(", ") : "");
const colours = (s: any, roles?: string[]) =>
  (s.palette?.colours ?? []).filter((c: any) => !roles || roles.includes(c.role)).map((c: any) => c.name.toLowerCase()).join(", ");
const evening = (s: any) => (s.lighting?.layers ?? []).filter((l: any) => l.layer !== "daylight").map((l: any) => `${l.source} ${l.position}`).join("; ");

// One tile for each facet. A tile with no data is left out of the board.
export const TILES: { id: string; label: string; size: typeof SQUARE; prompt: (s: any) => string | undefined }[] = [
  {
    id: "room", label: "Room", size: LANDSCAPE,
    prompt: (s) => s.implementation?.image_prompt && `${s.implementation.image_prompt}, ${s.implementation.camera ?? ""} verticals parallel, no people`,
  },
  {
    id: "materials", label: "Materials", size: SQUARE,
    prompt: (s) => s.materials && `flat lay material sample board seen from directly above, square samples of ${list(s.materials.primary)}, ${list(s.materials.secondary)}, paint chips in ${colours(s)}, ${s.materials.finish} soft even daylight, interior design sample board photograph, no text`,
  },
  {
    id: "furniture", label: "Furniture", size: PORTRAIT,
    prompt: (s) => s.furniture && `studio photograph of a ${list(s.furniture.key_pieces, 2).replace(", ", " and a ")}, ${s.furniture.silhouette} on a plain ${colours(s, ["dominant"]) || "pale"} ground, soft shadow, furniture catalogue photograph`,
  },
  {
    id: "textiles", label: "Textiles", size: SQUARE,
    prompt: (s) => s.textiles && `close-up of folded and draped fabrics: ${list(s.textiles.fabrics)}, ${s.textiles.pattern} colours ${colours(s, ["secondary", "accent", "dominant"])}, raking daylight that shows the weave, textile detail photograph`,
  },
  {
    id: "light", label: "Light", size: PORTRAIT,
    prompt: (s) => s.lighting && `corner of a room at dusk, the lamps on: ${evening(s)}, ${s.lighting.strategy} warm ${s.lighting.cct_evening_k ?? s.lighting.cct_k ?? 2700} K light, pools of light and soft shadow, interior photograph`,
  },
  {
    id: "objects", label: "Objects", size: SQUARE,
    prompt: (s) => s.objects && `still life on a sideboard against a ${colours(s, ["dominant"]) || "plain"} wall: ${list(s.objects.items)}, ${s.objects.grouping} ${s.objects.approach} interior styling photograph`,
  },
];

const dir = "data/interior/styles";
const styles = readdirSync(dir).filter((f) => f.endsWith(".json")).map((f) => JSON.parse(readFileSync(join(dir, f), "utf8")))
  .filter((s) => !only || only.includes(s.id));
const root = "demo/moodboards/interior";
mkdirSync(root, { recursive: true });
const manifestPath = join(root, "manifest.json");
const manifest = existsSync(manifestPath) ? JSON.parse(readFileSync(manifestPath, "utf8")) : { tiles: TILES.map(({ id, label }) => ({ id, label })), boards: {} };

const todo = styles.flatMap((s) => TILES.map((t) => ({ s, t, prompt: t.prompt(s)?.replace(/\s+/g, " ").replace(/\.\s*,/g, ",").trim() })))
  .filter(({ s, t, prompt }) => prompt && (force || manifest.boards[s.id]?.[t.id]?.prompt !== prompt));
if (dry) { for (const { s, t, prompt } of todo) console.log(`${s.id}/${t.id}: ${prompt}`); process.exit(0); }
if (todo.length) await preflight();
for (const { s, t, prompt } of todo) {
  const t0 = Date.now();
  mkdirSync(join(root, s.id), { recursive: true });
  const rec = await renderWebp(prompt!, join(root, s.id, `${t.id}.webp`), t.size, `design-ontology/moodboards/${s.id}/${t.id}`);
  (manifest.boards[s.id] ??= {})[t.id] = { file: `${s.id}/${t.id}.webp`, ...rec };
  writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + "\n");
  console.log(`${s.id}/${t.id}: ${((Date.now() - t0) / 1000).toFixed(0)} s`);
}
console.log(`moodboards: ${todo.length} tiles rendered`);
