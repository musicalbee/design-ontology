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

const SIZES = { landscape: { width: 1152, height: 768 }, portrait: { width: 768, height: 1152 } };

const args = process.argv.slice(2);
const opt = (k: string) => { const i = args.indexOf(`--${k}`); return i >= 0 ? args[i + 1] : undefined; };
const domain = opt("domain");
const only = opt("only")?.split(",");
const force = args.includes("--force");
const dry = args.includes("--dry-run");
if (!domain) throw new Error("Give --domain photography|film|painting|interior|architecture");

type Override = { subject?: string; size?: keyof typeof SIZES; drop?: string };
const subjects = JSON.parse(readFileSync("scripts/previews/subjects.json", "utf8")) as {
  domains: Record<string, { subject: string; suffix?: string; drop?: string }>;
  styles?: Record<string, Override>;
};
const dom = subjects.domains[domain];
if (!dom) throw new Error(`No subject for domain ${domain} in scripts/previews/subjects.json`);
const drop = dom.drop ? new RegExp(dom.drop, "i") : null;
const override = (s: any): Override => subjects.styles?.[`${domain}/${s.id}`] ?? {};
const outDir = join("demo/previews", domain);
mkdirSync(outDir, { recursive: true });
const manifestPath = join(outDir, "manifest.json");
const manifest = existsSync(manifestPath) ? JSON.parse(readFileSync(manifestPath, "utf8")) : { images: {} };

const styleDir = join("data", domain, "styles");
const styles = readdirSync(styleDir).filter((f) => f.endsWith(".json"))
  .map((f) => JSON.parse(readFileSync(join(styleDir, f), "utf8")))
  .filter((s) => !only || only.includes(s.id));

// Photography, film and painting give primer words, architecture gives primer.positive,
// interior gives one full image prompt.
const positive = (s: any): string[] =>
  s.prompt_primer?.positive ?? s.primer?.positive ?? (s.implementation?.image_prompt ? [s.implementation.image_prompt] : []);
const subjectFor = (s: any) => override(s).subject ?? dom.subject;
const sizeFor = (s: any) => SIZES[override(s).size ?? "landscape"];
// A style override can also drop primer words that only that style has (a frame motif, a shaped canvas).
const keep = (s: any) => { const own = override(s).drop ? new RegExp(override(s).drop!, "i") : null; return (w: string) => !drop?.test(w) && !own?.test(w); };
const promptFor = (s: any) =>
  [subjectFor(s), ...positive(s).filter(keep(s)), ...(dom.suffix ? [dom.suffix] : [])].join(", ");

async function render(s: any) {
  const prompt = promptFor(s);
  const rec = await renderWebp(prompt, join(outDir, `${s.id}.webp`), sizeFor(s), `design-ontology/${domain}/${s.id}`);
  return { file: `${s.id}.webp`, subject: subjectFor(s), ...rec };
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
