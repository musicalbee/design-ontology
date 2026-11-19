// The shared ComfyUI client for the preview and moodboard renderers.
// ComfyUI must listen on COMFY_URL (default http://127.0.0.1:8188), for example through an SSH tunnel.
// Only models with an open licence that allows commercial use go here (FLUX.2 [klein] 4B, Apache 2.0).
import { readFileSync, writeFileSync } from "node:fs";
import { execFileSync } from "node:child_process";

export const COMFY = process.env.COMFY_URL ?? "http://127.0.0.1:8188";
export const MODEL = { name: "FLUX.2 [klein] 4B", licence: "Apache-2.0", unet: "flux-2-klein-4b.safetensors", clip: "qwen_3_4b.safetensors", vae: "flux2-vae.safetensors" };
export const STEPS = 4;
export const SEED = 1955;

const template = readFileSync("scripts/previews/flux2-klein-4b.workflow.json", "utf8");

export function workflow(vars: Record<string, string | number>) {
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
export async function preflight() {
  const wf = workflow({ ...MODEL, width: 64, height: 64, steps: STEPS, seed: SEED, prompt: "x", prefix: "x" });
  const info = await (await api("/object_info")).json();
  const missing = [...new Set(Object.values(wf).map((n: any) => n.class_type))].filter((t) => !info[t]);
  if (missing.length) throw new Error(`ComfyUI has no node type: ${missing.join(", ")}. Export a workflow with "Save (API Format)" into scripts/previews/.`);
  const choices = (t: string, k: string) => info[t]?.input?.required?.[k]?.[0] ?? [];
  for (const [t, k, v] of [["UNETLoader", "unet_name", MODEL.unet], ["CLIPLoader", "clip_name", MODEL.clip], ["VAELoader", "vae_name", MODEL.vae]])
    if (!choices(t, k).includes(v)) throw new Error(`ComfyUI has no ${k} "${v}" (has: ${choices(t, k).join(", ")})`);
}

// Render one prompt to a WebP file. Returns the record for a manifest.
// The seed is fixed (SEED), so a render can be made again. The frames of a set pass SEED + n, so they differ.
export async function renderWebp(prompt: string, out: string, size: { width: number; height: number }, prefix: string, seed = SEED) {
  const wf = workflow({ ...MODEL, ...size, steps: STEPS, seed, prompt, prefix });
  const { prompt_id } = await (await api("/prompt", { prompt: wf })).json();
  for (let t = 0; t < 600; t++) {
    await new Promise((r) => setTimeout(r, 1000));
    const h = (await (await api(`/history/${prompt_id}`)).json())[prompt_id];
    if (!h) continue;
    if (h.status?.status_str === "error") throw new Error(`${out}: ${JSON.stringify(h.status.messages).slice(0, 400)}`);
    const img = Object.values(h.outputs ?? {}).flatMap((o: any) => o.images ?? [])[0] as any;
    if (!img) continue;
    const png = Buffer.from(await (await api(`/view?${new URLSearchParams({ filename: img.filename, subfolder: img.subfolder, type: img.type })}`)).arrayBuffer());
    const tmp = out.replace(/\.webp$/, ".png");
    writeFileSync(tmp, png);
    execFileSync("cwebp", ["-quiet", "-q", "80", tmp, "-o", out]);
    execFileSync("rm", [tmp]);
    return { prompt, model: MODEL.name, licence: MODEL.licence, seed, steps: STEPS, ...size, generated: new Date().toISOString().slice(0, 10) };
  }
  throw new Error(`${out}: no image after 600 s`);
}
