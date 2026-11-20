// The shared ComfyUI client for the preview and moodboard renderers.
// ComfyUI must listen on COMFY_URL (default http://127.0.0.1:8188), for example through an SSH tunnel.
// Only models with an open licence that allows commercial use go here (Apache 2.0).
//
// Drift guard (2026-11-19). A scan of 449 renders from FLUX.2 [klein] 4B at 4 steps found 51 with a glitch:
// fused or extra fingers, two bodies merged into one, a gun or a bar too long, a chair at the wrong scale.
// Three changes stop it:
// 1. The default model is Z-Image-Turbo (6B), which draws hands, faces and object scale better.
//    PREVIEW_MODEL=klein selects the old model.
// 2. guard() adds anatomy and scale words to a prompt that has people, hands or long objects in it.
// 3. A vision check (qa.ts) reads each render. On a glitch it renders again with the next seed, up to
//    QA_TRIES times, and the manifest records the result. PREVIEW_QA=0 turns the check off.
import { readFileSync, writeFileSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { inspect } from "./qa.js";

export const COMFY = process.env.COMFY_URL ?? "http://127.0.0.1:8188";
const MODELS = {
  zimage: { name: "Z-Image-Turbo", licence: "Apache-2.0", unet: "z_image_turbo_bf16.safetensors", clip: "qwen_3_4b.safetensors", vae: "ae.safetensors", steps: 9, file: "z-image-turbo.workflow.json" },
  klein: { name: "FLUX.2 [klein] 4B", licence: "Apache-2.0", unet: "flux-2-klein-4b.safetensors", clip: "qwen_3_4b.safetensors", vae: "flux2-vae.safetensors", steps: 4, file: "flux2-klein-4b.workflow.json" },
};
export const MODEL = MODELS[(process.env.PREVIEW_MODEL ?? "zimage") as keyof typeof MODELS] ?? MODELS.zimage;
export const STEPS = MODEL.steps;
export const SEED = 1955;
const QA = process.env.PREVIEW_QA !== "0";
const QA_TRIES = Number(process.env.QA_TRIES ?? 4);

const template = readFileSync(`scripts/previews/${MODEL.file}`, "utf8");

export function workflow(vars: Record<string, string | number>) {
  const filled = template.replace(/"\{\{(\w+)\}\}"/g, (_, k) => JSON.stringify(vars[k]))
    .replace(/\{\{(\w+)\}\}/g, (_, k) => String(vars[k]).replace(/["\\]/g, "\\$&"));
  const wf = JSON.parse(filled);
  delete wf.$comment;
  return wf;
}

// The words that a prompt with people, hands or long thin objects gets. The scan found most glitches where
// hands touch hands or objects, where two bodies overlap, and on guns, bars, poles and cutlery.
const PEOPLE = /\b(people|person|man|men|woman|women|girl|boy|child|children|couple|family|crowd|actor|dancers?|fighters?|workers?|figure|hands?|fingers?|faces?|portrait|bride|athlete|runner|singer|(fashion|runway|life|artist's) models?)\b/i;
const LONG = /\b(gun|revolver|pistol|rifle|sword|knife|bar|pole|stick|rail|cane|umbrella|chopsticks|fork|spoon|bat|cue|guitar|trombone|ladder)\b/i;
// A negated mention ("no people", "no person in the frame") is not a person, and the hands of a watch or an
// open-face case are not a person's hands or face. A craft word (hand-thrown, hand-painted) is
// not a hand either. Remove it before the test, or an
// empty room gets the anatomy words and the model draws hands into it.
const NOT_A_PERSON = /\b(no|without|not a single|empty of|free of)\s+(\w+\s+){0,2}?(people|persons?|figures?|humans?|faces?|hands?|man|men|woman|women|child|children|crowds?)\b|\bnobody\b|\bno one\b|\b(spade|blued|hour|minute|second|clock|watch|dauphine|baton|sword|leaf)\s+hands\b|\b(open|watch|clock|dial|cliff|rock|type|brick|stone|coal|window|wall|north|south|east|west)[- ]faces?\b|\bhand-[a-z]+/gi;
export function guard(prompt: string) {
  // A frame of a set came back as a triptych or a collage in the scan; ask for one picture each time. The words
  // are positive: at cfg 1 there is no negative prompt, and "no panels" put the word "panels" in the prompt.
  const add: string[] = ["one single continuous full-frame image"];
  if (PEOPLE.test(prompt.replace(NOT_A_PERSON, ""))) add.push("natural human anatomy, five fingers on each hand, hands apart and clearly separate, each person a separate whole body, clear faces");
  if (LONG.test(prompt)) add.push("every object at its true real-world size and length");
  return `${prompt}, ${add.join(", ")}`;
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

async function once(prompt: string, out: string, size: { width: number; height: number }, prefix: string, seed: number) {
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
    return tmp;
  }
  throw new Error(`${out}: no image after 600 s`);
}

// Render one prompt to a WebP file. Returns the record for a manifest.
// The base seed is fixed (SEED, or SEED + n for the frames of a set), so a render can be made again. When the
// vision check finds a glitch, the next try uses the base seed + 1000 × try. "base_seed" keeps the base, so
// the renderer can see that a record is up to date. With "expect", the check also fails a render whose
// subject or colour is not the expected one.
export async function renderWebp(prompt: string, out: string, size: { width: number; height: number }, prefix: string, seed = SEED, expect?: string) {
  const text = guard(prompt);
  // When no try passes, the try with the fewest defects stays, and its record says ok: false.
  let best: { tmp: string; seed: number; qa?: any } | undefined;
  for (let k = 0; k < (QA ? QA_TRIES : 1); k++) {
    const s = seed + 1000 * k;
    const tmp = await once(text, out.replace(/\.webp$/, `.try${k}.webp`), size, `${prefix}-${k}`, s);
    if (!QA) { best = { tmp, seed: s }; break; }
    const v = await inspect(tmp, prompt, expect);
    const qa = { checker: v.checker, tries: k + 1, ok: v.ok, defects: v.defects };
    if (!best || v.ok || v.defects.length < best.qa.defects.length) { if (best) execFileSync("rm", ["-f", best.tmp]); best = { tmp, seed: s, qa }; }
    else execFileSync("rm", ["-f", tmp]);
    best.qa.tries = k + 1;
    if (v.ok) break;
    console.warn(`  ${out}: try ${k + 1} rejected: ${v.defects.join("; ")}`);
  }
  const { tmp, seed: used, qa } = best!;
  execFileSync("cwebp", ["-quiet", "-q", "80", tmp, "-o", out]);
  execFileSync("rm", [tmp]);
  return { prompt, model: MODEL.name, licence: MODEL.licence, seed: used, base_seed: seed, steps: STEPS, ...size, generated: new Date().toISOString().slice(0, 10), ...(qa ? { qa } : {}) };
}
