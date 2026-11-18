// Render one preview image for each style of an image domain with a local ComfyUI server.
//
//   npm run previews -- --domain photography [--only new-colour,y2k-digicam] [--force] [--dry-run]
//
// ComfyUI must listen on COMFY_URL (default http://127.0.0.1:8188), for example through an SSH tunnel.
// Only models with an open licence that allows commercial use go here (FLUX.2 [klein] 4B, Apache 2.0).
// Output: demo/previews/<domain>/<id>.webp and demo/previews/<domain>/manifest.json.
import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { preflight, renderWebp } from "./previews/comfy.js";

const SIZE = { width: 1152, height: 768 };

const args = process.argv.slice(2);
const opt = (k: string) => { const i = args.indexOf(`--${k}`); return i >= 0 ? args[i + 1] : undefined; };
const domain = opt("domain");
const only = opt("only")?.split(",");
const force = args.includes("--force");
const dry = args.includes("--dry-run");
if (!domain) throw new Error("Give --domain photography|film|painting|interior");

const subjects = JSON.parse(readFileSync("scripts/previews/subjects.json", "utf8")) as Record<string, string>;
const subject = subjects[domain];
if (!subject) throw new Error(`No subject for domain ${domain} in scripts/previews/subjects.json`);
const outDir = join("demo/previews", domain);
mkdirSync(outDir, { recursive: true });
const manifestPath = join(outDir, "manifest.json");
const manifest = existsSync(manifestPath) ? JSON.parse(readFileSync(manifestPath, "utf8")) : { images: {} };

const styleDir = join("data", domain, "styles");
const styles = readdirSync(styleDir).filter((f) => f.endsWith(".json"))
  .map((f) => JSON.parse(readFileSync(join(styleDir, f), "utf8")))
  .filter((s) => !only || only.includes(s.id));

// Photography, film and painting give primer words; interior gives one full image prompt.
const positive = (s: any): string[] => s.prompt_primer?.positive ?? (s.implementation?.image_prompt ? [s.implementation.image_prompt] : []);
const promptFor = (s: any) => [subject, ...positive(s)].join(", ");

async function render(s: any) {
  const prompt = promptFor(s);
  const rec = await renderWebp(prompt, join(outDir, `${s.id}.webp`), SIZE, `design-ontology/${domain}/${s.id}`);
  return { file: `${s.id}.webp`, subject, ...rec };
}

const todo = styles.filter((s) => force || !manifest.images[s.id] || manifest.images[s.id].prompt !== promptFor(s));
if (dry) { for (const s of todo) console.log(`${s.id}: ${promptFor(s)}`); process.exit(0); }
if (todo.length) await preflight();
for (const s of todo) {
  const t0 = Date.now();
  manifest.images[s.id] = await render(s);
  writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + "\n");
  console.log(`${s.id}: ${((Date.now() - t0) / 1000).toFixed(0)} s`);
}
console.log(`${domain}: ${todo.length} rendered, ${styles.length - todo.length} up to date`);
