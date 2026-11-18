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
// Nouns that make the model draw letters. The data keeps the real item; the prompt asks for a shape with no text.
const TEXTLESS: [RegExp, string][] = [
  [/neon sign/gi, "neon tube bent into one wavy line"],
  [/(vintage )?enamel sign/gi, "plain enamel panel in one colour"],
  [/(vintage )?\bsigns\b/gi, "plain metal panels"],
  [/(pop |deco )?poster( print)?( in a carved frame)?/gi, "abstract print of flat shapes$3"],
  [/coffee-table books/gi, "a low stack of books lying flat, seen from the front so only the cream page edges show"],
  [/gallery wall of ([0-9–-]+) frames/gi, "gallery wall of $1 frames that hold abstract colour prints with no words"],
  [/(colour-sorted |art |stacked )?books\b(?! with blank)/gi, "$1books with plain cloth covers and spines, no titles"],
];
// The clause that names a neon or a sign goes in only when the style has one; else the word adds a neon.
const NOTEXT = (t: string, item: RegExp, clause: string) => (item.test(t) ? `${clause}, no readable text` : "no readable text");
const textless = (t: string) => TEXTLESS.reduce((a, [re, to]) => a.replace(re, to), t);
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
    prompt: (s) => s.furniture && `studio photograph of a ${list(s.furniture.key_pieces, 2).replace(", ", " and a ")}, ${s.furniture.silhouette} on a plain ${colours(s, ["dominant"]) || "pale"} ground, soft shadow, furniture photograph, no caption, no text, no labels`,
  },
  {
    id: "textiles", label: "Textiles", size: SQUARE,
    prompt: (s) => s.textiles && `close-up of folded and draped fabrics: ${list(s.textiles.fabrics)}, ${s.textiles.pattern} colours ${colours(s, ["secondary", "accent", "dominant"])}, raking daylight that shows the weave, textile detail photograph`,
  },
  {
    id: "light", label: "Light", size: PORTRAIT,
    prompt: (s) => s.lighting && (() => {
      const t = `corner of a room at dusk, the lamps on: ${evening(s)}, ${s.lighting.strategy}, warm ${s.lighting.cct_evening_k ?? s.lighting.cct_k ?? 2700} K light, pools of light and soft shadow`;
      return `${textless(t)}, interior photograph, ${NOTEXT(t, /neon|\bsigns?\b/i, "a neon or a sign is a plain shape with no letters")}`;
    })(),
  },
  {
    id: "objects", label: "Objects", size: SQUARE,
    prompt: (s) => s.objects && (() => {
      const t = `still life on a sideboard against a ${colours(s, ["dominant"]).replace(/lime white/g, "warm off-white limewash") || "plain"} wall: ${list(s.objects.items)}, ${s.objects.grouping}, ${s.objects.approach}`;
      return `${textless(t)}, interior styling photograph, ${NOTEXT(t, /\bsigns?\b|poster|books?\b/i, "signs, posters and book spines are blank with no letters")}`;
    })(),
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
