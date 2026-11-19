// Render one preview image for each style of an image domain with a local ComfyUI server.
//
//   npm run previews -- --domain photography [--only new-colour,y2k-digicam] [--redo drift.json] [--force] [--dry-run]
//
// ComfyUI must listen on COMFY_URL (default http://127.0.0.1:8188), for example through an SSH tunnel.
// Only models with an open licence that allows commercial use go here (see MODELS in previews/comfy.ts).
// Output: demo/previews/<domain>/<id>.webp and demo/previews/<domain>/manifest.json.
//
// A domain with "set" in subjects.json gets several frames for each style instead of one picture on a fixed scene:
// - "subjects" (photography): a moodboard, one frame for each typical subject in subject_and_staging.subjects;
// - "shots" (film): a showreel, one frame for each shot in shot_primer.shot_list, with its size, lens and length.
// The frames go to demo/previews/<domain>/<id>/<n>.webp; the first frame is also the "file" of the style.
import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { preflight, renderWebp, SEED } from "./previews/comfy.js";

const SIZES = { landscape: { width: 1152, height: 768 }, portrait: { width: 768, height: 1152 } };

const args = process.argv.slice(2);
const opt = (k: string) => { const i = args.indexOf(`--${k}`); return i >= 0 ? args[i + 1] : undefined; };
const domain = opt("domain");
const only = opt("only")?.split(",");
const force = args.includes("--force");
const dry = args.includes("--dry-run");
// --redo <file.json>: a list of {path} records (a drift scan). Only the listed images render again, with the
// current model, the guard words and the vision check. The other images stay as they are.
const redo = new Set<string>(opt("redo") ? JSON.parse(readFileSync(opt("redo")!, "utf8")).map((x: any) => x.path) : []);
if (!domain) throw new Error("Give --domain photography|film|painting|interior|architecture|logo|icon|design");

type Override = { subject?: string; size?: keyof typeof SIZES; drop?: string };
const subjects = JSON.parse(readFileSync("scripts/previews/subjects.json", "utf8")) as {
  domains: Record<string, { subject: string; suffix?: string; drop?: string; source?: string; set?: "subjects" | "shots"; frame?: string; frames?: number }>;
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

// A variant domain (for example architecture-elevation) takes its styles from the domain in "source".
const styleDir = join("data", dom.source ?? domain, "styles");
const styles = readdirSync(styleDir).filter((f) => f.endsWith(".json"))
  .map((f) => JSON.parse(readFileSync(join(styleDir, f), "utf8")))
  .filter((s) => !only || only.includes(s.id));

// Photography, film and painting give primer words, architecture gives primer.positive,
// interior gives one full image prompt. Design (web) styles have no primer: the words come from the
// illustration, the decorative elements, the palette and the surface of the style.
const designWords = (s: any): string[] => s.ornamentation_details ? [
  `in the visual language of ${s.name}`,
  s.ornamentation_details.illustration,
  ...(s.ornamentation_details.decorative_elements ?? []).slice(0, 4),
  `colours ${(s.color?.palette ?? []).map((c: any) => c.name.toLowerCase()).join(", ")}`,
  s.materiality?.surface_simulation,
].filter(Boolean).map((w: string) => w.replace(/\.$/, "")) : [];
const positive = (s: any): string[] =>
  s.prompt_primer?.positive ?? s.primer?.positive ?? (s.implementation?.image_prompt ? [s.implementation.image_prompt] : designWords(s));
const subjectFor = (s: any) => override(s).subject ?? dom.subject;
const sizeFor = (s: any) => SIZES[override(s).size ?? "landscape"];
// A style override can also drop primer words that only that style has (a frame motif, a shaped canvas).
const keep = (s: any) => { const own = override(s).drop ? new RegExp(override(s).drop!, "i") : null; return (w: string) => !drop?.test(w) && !own?.test(w); };
const promptFor = (s: any) =>
  [subjectFor(s), ...positive(s).filter(keep(s)), ...(dom.suffix ? [dom.suffix] : [])].join(", ");

// The frames of a set domain. A shot that needs readable text (a card, a phone screen) is left out.
type Frame = { label: string; prompt: string; size?: string; lens?: string; movement?: string; seconds?: number };
const TEXTY = /text message|screen|intertitle|name and a date|title|caption|sign\b/i;
// Words about a face or a body (glowing skin, sharp eyes) turn every frame into a portrait. They stay only on a frame
// whose subject is a person.
const PERSON = /portrait|people|person|face|actor|model|couple|family|crowd|worker|bride|child|woman|man\b|figure|dancer|athlete|hand/i;
const BODY = /skin|eyes?\b|face|lips|hair|pores|freckle/i;
const fit = (subject: string) => (w: string) => PERSON.test(subject) || !BODY.test(w);
const frames = (s: any): Frame[] => {
  // The suffix is not filtered: "interface" in it holds "face".
  const tail = positive(s).filter(keep(s)), end = dom.suffix ? [dom.suffix] : [];
  if (dom.set === "subjects") return (s.subject_and_staging?.subjects ?? []).slice(0, dom.frames ?? 4)
    .map((x: string) => ({ label: x, prompt: [`${dom.frame} ${x}`, ...tail.filter(fit(x)), ...end].join(", ") }));
  if (dom.set === "shots") return (s.shot_primer?.shot_list ?? []).filter((x: any) => x.size !== "card" && !TEXTY.test(x.shot)).slice(0, dom.frames ?? 5)
    .map((x: any) => ({ label: x.shot, size: x.size, lens: x.lens, movement: x.movement, seconds: x.seconds,
      prompt: [`${dom.frame} ${x.size} shot: ${x.shot.toLowerCase()}`, `${x.lens} lens`, ...tail.filter(fit(x.shot)), ...end].join(", ") }));
  return [];
};
const sig = (s: any) => { const f = frames(s); return f.length ? f.map((x) => x.prompt).join(" | ") : promptFor(s); };
const sigOf = (rec: any) => rec?.frames ? rec.frames.map((x: any) => x.prompt).join(" | ") : rec?.prompt;

async function renderSet(s: any, fr: Frame[]) {
  mkdirSync(join(outDir, s.id), { recursive: true });
  const old: any[] = manifest.images[s.id]?.frames ?? [];
  const out: any[] = [];
  for (const [i, f] of fr.entries()) {
    const file = `${s.id}/${i + 1}.webp`;
    const prev = old.find((o) => o.file === file), seed = SEED + i;
    const same = prev?.prompt === f.prompt && (prev?.base_seed ?? prev?.seed) === seed && existsSync(join(outDir, file));
    out.push(!force && same && !redo.has(join(outDir, file)) ? prev
      : { ...f, file, ...(await renderWebp(f.prompt, join(outDir, file), sizeFor(s), `design-ontology/${domain}/${s.id}-${i + 1}`, seed)) });
  }
  const { model, licence, seed, steps, width, height, generated } = out[0];
  // "prompt" holds all frame prompts, so the curation check and the change test read one string.
  return { file: out[0].file, kind: dom.set === "shots" ? "reel" : "moodboard", subject: out[0].label, prompt: out.map((x) => x.prompt).join(" | "), model, licence, seed, steps, width, height, generated, frames: out };
}

async function render(s: any) {
  const fr = frames(s);
  if (fr.length) return renderSet(s, fr);
  const prompt = promptFor(s);
  const rec = await renderWebp(prompt, join(outDir, `${s.id}.webp`), sizeFor(s), `design-ontology/${domain}/${s.id}`);
  return { file: `${s.id}.webp`, subject: subjectFor(s), ...rec };
}

const redone = (s: any) => [...redo].some((p) => p === join(outDir, `${s.id}.webp`) || p.startsWith(join(outDir, s.id) + "/"));
const todo = styles.filter((s) => force || redone(s) || !manifest.images[s.id] || sigOf(manifest.images[s.id]) !== sig(s));
if (dry) { for (const s of todo) console.log(`${s.id}: ${sig(s).split(" | ").join("\n  ")}`); process.exit(0); }
if (todo.length) await preflight();
for (const s of todo) {
  const t0 = Date.now();
  manifest.images[s.id] = await render(s);
  writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + "\n");
  console.log(`${s.id}: ${((Date.now() - t0) / 1000).toFixed(0)} s`);
}
console.log(`${domain}: ${todo.length} rendered, ${styles.length - todo.length} up to date`);
