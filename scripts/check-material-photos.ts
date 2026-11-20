// Run the vision check over the material photos that exist, without a new render. The check compares each
// photo with the name, the photo text and the summary of its record, and lists the photos that fail.
//
//   npm run material-photos:check -- [--only a,b] [--skip a,b] [--jobs 6]
import { existsSync } from "node:fs";
import { join } from "node:path";
import { loadLayer } from "./materials.js";
import { inspect } from "./previews/qa.js";
import { photoExpect, photoPrompt } from "./material-photo-text.js";

const args = process.argv.slice(2);
const opt = (k: string) => { const i = args.indexOf(`--${k}`); return i >= 0 ? args[i + 1] : undefined; };
const only = opt("only")?.split(",");
const skip = new Set(opt("skip")?.split(",") ?? []);
const jobs = Number(opt("jobs") ?? 6);
const root = "demo/materials/photos";
const todo = [...loadLayer().byId.values()].filter((m) => (!only || only.includes(m.id)) && !skip.has(m.id) && existsSync(join(root, `${m.id}.webp`)));
const fails: { id: string; defects: string[] }[] = [];
const unchecked: string[] = [];
let next = 0;
await Promise.all(Array.from({ length: jobs }, async () => {
  while (next < todo.length) {
    const m = todo[next++];
    const v = await inspect(join(root, `${m.id}.webp`), photoPrompt(m.photo ?? m.name.toLowerCase()), photoExpect(m));
    if (!v.checker.startsWith(process.env.QA_MODEL ?? "sonnet") || v.checker.includes(":")) { unchecked.push(m.id); console.log(`UNCHECKED ${m.id}: ${v.checker}`); }
    else if (!v.ok) { fails.push({ id: m.id, defects: v.defects }); console.log(`FAIL ${m.id}: ${v.defects.join("; ")}`); }
  }
}));
console.log(`checked ${todo.length}, failed ${fails.length}, not checked ${unchecked.length}`);
if (fails.length || unchecked.length) process.exitCode = 1;
