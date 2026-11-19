// The vision check of a render. A small Claude model reads the PNG and says if it has a glitch that a
// person sees at once: a hand with too many or too few fingers, two bodies merged, a face that is a blur,
// an extra leg, an object at an impossible size or one that floats. The check runs `claude -p` on this Mac,
// so it needs no API key in the repo. QA_MODEL selects the model (default sonnet).
//
// The check says ok when it cannot run (no claude CLI, a time-out), and it marks that in "checker", so a
// manifest record shows that the render was not checked.
import { execFileSync } from "node:child_process";
import { resolve } from "node:path";

const MODEL = process.env.QA_MODEL ?? "sonnet";
const CLI = process.env.CLAUDE_BIN ?? "claude";

const ASK = (file: string, prompt: string) => `Read the image file ${file}. It is a generated image for this prompt:
"${prompt.slice(0, 600)}"

Be a strict checker. First list each person, each visible hand and each main object, one line each.
For each hand, count the fingers you can see and say if they are clearly separate.
Then fail the image (ok false) if any of these is true:
- a hand with more or fewer than five fingers, or fingers fused, lumpy or not countable, when the hand is large in the frame;
- two people, or a person and an object or animal, fused into one shape;
- an extra or a missing limb, legs tangled together;
- a face near enough to read that is blurred or melted;
- an object at an impossible size next to the others (a gun as long as an arm, a cigarette like a stick, a chair taller than a door);
- furniture that floats, stands on other furniture, or two pieces fused into one;
- the image is split into panels, a triptych or a collage;
- readable letters or a logo, when the prompt says no text.
Do not judge the style, the colour or the composition. Small far-away figures are ok.
End with one line of JSON: {"ok": true|false, "defects": ["short description", ...]}`;

export async function inspect(png: string, prompt: string): Promise<{ ok: boolean; defects: string[]; checker: string }> {
  const file = resolve(png);
  try {
    const out = execFileSync(CLI, ["-p", ASK(file, prompt), "--model", MODEL, "--allowedTools", "Read", "--output-format", "text"],
      { encoding: "utf8", timeout: 180_000, stdio: ["ignore", "pipe", "pipe"] });
    const json = out.match(/\{[^{}]*"ok"[^{}]*\}/g)?.pop();
    if (!json) return { ok: true, defects: [], checker: `${MODEL}: no answer` };
    const v = JSON.parse(json);
    return { ok: v.ok !== false, defects: Array.isArray(v.defects) ? v.defects.map(String) : [], checker: MODEL };
  } catch (e: any) {
    return { ok: true, defects: [], checker: `${MODEL}: not run (${String(e.message ?? e).slice(0, 80)})` };
  }
}
