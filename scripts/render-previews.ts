// Render one preview image for each style of an image domain with a local ComfyUI server.
//
//   npm run previews -- --domain photography [--only new-colour,y2k-digicam] [--force] [--dry-run]
//
// ComfyUI must listen on COMFY_URL (default http://127.0.0.1:8188), for example through an SSH tunnel.
// Only models with an open licence that allows commercial use go here (FLUX.2 [klein] 4B, Apache 2.0).
// Output: demo/previews/<domain>/<id>.webp and demo/previews/<domain>/manifest.json.
import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { join } from "node:path";

const COMFY = process.env.COMFY_URL ?? "http://127.0.0.1:8188";
const MODEL = { name: "FLUX.2 [klein] 4B", licence: "Apache-2.0", unet: "flux-2-klein-4b.safetensors", clip: "qwen_3_4b.safetensors", vae: "flux2-vae.safetensors" };
const SIZE = { width: 1152, height: 768 };
const STEPS = 4;
const SEED = 1955;

const args = process.argv.slice(2);
const opt = (k: string) => { const i = args.indexOf(`--${k}`); return i >= 0 ? args[i + 1] : undefined; };
const domain = opt("domain");
const only = opt("only")?.split(",");
const force = args.includes("--force");
const dry = args.includes("--dry-run");
if (!domain) throw new Error("Give --domain photography|film|painting|interior|icon");

const subjects = JSON.parse(readFileSync("scripts/previews/subjects.json", "utf8")) as Record<string, string>;
const subject = subjects[domain];
if (!subject) throw new Error(`No subject for domain ${domain} in scripts/previews/subjects.json`);
const template = readFileSync("scripts/previews/flux2-klein-4b.workflow.json", "utf8");
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

function workflow(vars: Record<string, string | number>) {
  const filled = template.replace(/"\{\{(\w+)\}\}"/g, (_, k) => JSON.stringify(vars[k]))
    .replace(/\{\{(\w+)\}\}/g, (_, k) => String(vars[k]).replace(/["\\]/g, "\\$&"));
  const wf = JSON.parse(filled);
  delete wf.$comment;
  return wf;
}

async function api(path: string, body?: unknown) {
  const r = await fetch(COMFY + path, body ? { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(body) } : {});
  if (!r.ok) throw new Error(`${path}: HTTP ${r.status} ${await r.text()}`);
  return r;
}

// Fail early and clearly if the server lacks a node type or a model file.
async function preflight(wf: Record<string, any>) {
  const info = await (await api("/object_info")).json();
  const missing = [...new Set(Object.values(wf).map((n: any) => n.class_type))].filter((t) => !info[t]);
  if (missing.length) throw new Error(`ComfyUI has no node type: ${missing.join(", ")}. Export a workflow with "Save (API Format)" into scripts/previews/.`);
  const choices = (t: string, k: string) => info[t]?.input?.required?.[k]?.[0] ?? [];
  for (const [t, k, v] of [["UNETLoader", "unet_name", MODEL.unet], ["CLIPLoader", "clip_name", MODEL.clip], ["VAELoader", "vae_name", MODEL.vae]])
    if (!choices(t, k).includes(v)) throw new Error(`ComfyUI has no ${k} "${v}" (has: ${choices(t, k).join(", ")})`);
}

async function render(s: any) {
  const prompt = promptFor(s);
  const wf = workflow({ ...MODEL, ...SIZE, steps: STEPS, seed: SEED, prompt, prefix: `design-ontology/${domain}/${s.id}` });
  const { prompt_id } = await (await api("/prompt", { prompt: wf })).json();
  for (let t = 0; t < 600; t++) {
    await new Promise((r) => setTimeout(r, 1000));
    const h = (await (await api(`/history/${prompt_id}`)).json())[prompt_id];
    if (!h) continue;
    if (h.status?.status_str === "error") throw new Error(`${s.id}: ${JSON.stringify(h.status.messages).slice(0, 400)}`);
    const img = Object.values(h.outputs ?? {}).flatMap((o: any) => o.images ?? [])[0] as any;
    if (!img) continue;
    const png = Buffer.from(await (await api(`/view?${new URLSearchParams({ filename: img.filename, subfolder: img.subfolder, type: img.type })}`)).arrayBuffer());
    const tmp = join(outDir, `${s.id}.png`);
    writeFileSync(tmp, png);
    execFileSync("cwebp", ["-quiet", "-q", "80", tmp, "-o", join(outDir, `${s.id}.webp`)]);
    execFileSync("rm", [tmp]);
    return { file: `${s.id}.webp`, prompt, subject, model: MODEL.name, licence: MODEL.licence, seed: SEED, steps: STEPS, ...SIZE, generated: new Date().toISOString().slice(0, 10) };
  }
  throw new Error(`${s.id}: no image after 600 s`);
}

const todo = styles.filter((s) => force || !manifest.images[s.id] || manifest.images[s.id].prompt !== promptFor(s));
if (dry) { for (const s of todo) console.log(`${s.id}: ${promptFor(s)}`); process.exit(0); }
if (todo.length) await preflight(workflow({ ...MODEL, ...SIZE, steps: STEPS, seed: SEED, prompt: "x", prefix: "x" }));
for (const s of todo) {
  const t0 = Date.now();
  manifest.images[s.id] = await render(s);
  writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + "\n");
  console.log(`${s.id}: ${((Date.now() - t0) / 1000).toFixed(0)} s`);
}
console.log(`${domain}: ${todo.length} rendered, ${styles.length - todo.length} up to date`);
