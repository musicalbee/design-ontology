// One Open Graph card (1200x630 JPEG) per style: assets/og/style/<id>.jpg.
// Run: node scripts/og-style-cards.mjs [--force]   (needs a headless Chrome, see CHROME; sips converts PNG to JPEG)
// Left: name, summary, domain. Right: the style's preview image, else its palette as colour blocks.
import { readFileSync, readdirSync, existsSync, mkdirSync, writeFileSync, rmSync } from "node:fs";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
const run = promisify(execFile);
import { homedir } from "node:os";
// Playwright's headless shell: ~6 s per card against ~20 s for full Chrome.
const CHROME = process.env.CHROME || `${homedir()}/Library/Caches/ms-playwright/chromium_headless_shell-1243/chrome-headless-shell-mac-x64/chrome-headless-shell`;
const FORCE = process.argv.includes("--force");
const esc = (s) => String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;");
mkdirSync("assets/og/style", { recursive: true });
const work = join(tmpdir(), "og-style-cards"); mkdirSync(work, { recursive: true });

const styles = [];
for (const dom of readdirSync("data")) {
  const dir = `data/${dom}/styles`;
  if (!existsSync(dir)) continue;
  for (const f of readdirSync(dir).filter((n) => n.endsWith(".json"))) styles.push(JSON.parse(readFileSync(`${dir}/${f}`, "utf8")));
}

async function card(s) {
  const out = `assets/og/style/${s.id}.jpg`;
  if (!FORCE && existsSync(out)) return false;
  const pv = resolve(`demo/previews/${s.domain}/${s.id}.webp`);
  const pal = (s.color?.palette || []).map((p) => p.hex).filter((h) => /^#[0-9a-f]{3,8}$/i.test(h)).slice(0, 5);
  const bg = pal[0] || "#15130f";
  const right = existsSync(pv)
    ? `<div class=r style="background-image:url('file://${pv}')"></div>`
    : `<div class=r>${(pal.length ? pal : ["#15130f", "#f3efe6"]).map((h) => `<i style="background:${h}"></i>`).join("")}</div>`;
  const name = s.name, dom = s.domain.replace(/-/g, " ");
  const html = `<!doctype html><meta charset=utf-8><style>
*{box-sizing:border-box;margin:0}body{width:1200px;height:630px;background:#f3efe6;color:#15130f;font-family:Georgia,'Times New Roman',serif;display:flex;overflow:hidden}
.t{flex:1;padding:60px 44px 52px 60px;display:flex;flex-direction:column;justify-content:space-between;border-top:10px solid ${bg}}
.k{font:600 21px/1 ui-monospace,Menlo,monospace;letter-spacing:.14em;text-transform:uppercase;color:#b4431c}
h1{font-size:${name.length > 30 ? 48 : name.length > 20 ? 58 : 70}px;line-height:1.05;font-weight:700;letter-spacing:-.01em;margin-bottom:22px}
p{font:400 24px/1.4 -apple-system,Helvetica,Arial,sans-serif;color:#4a443a;display:-webkit-box;-webkit-line-clamp:4;-webkit-box-orient:vertical;overflow:hidden}
.f{font:500 20px/1 ui-monospace,Menlo,monospace;color:#6b6457}
.r{width:460px;height:630px;background-size:cover;background-position:center;display:flex;flex-direction:column}
.r i{flex:1}
</style><div class=t><div class=k>${esc(dom)} · style</div><div><h1>${esc(name)}</h1><p>${esc(s.summary)}</p></div><div class=f>musicalbee.github.io/design-ontology</div></div>${right}`;
  const src = join(work, `${s.id}.html`), png = join(work, `${s.id}.png`);
  writeFileSync(src, html);
  await run(CHROME, ["--no-sandbox", "--hide-scrollbars", "--allow-file-access-from-files", "--window-size=1200,630", `--user-data-dir=${join(work, "p-" + s.id)}`, `--screenshot=${png}`, `file://${src}`]);
  await run("sips", ["-s", "format", "jpeg", "-s", "formatOptions", "80", png, "--out", out]);
  rmSync(png, { force: true }); rmSync(join(work, "p-" + s.id), { recursive: true, force: true });
  return true;
}
let i = 0, made = 0;
await Promise.all(Array.from({ length: 6 }, async () => {
  while (i < styles.length) { const s = styles[i++]; try { if (await card(s)) made++; } catch (e) { console.error("fail", s.id, e.message.slice(0, 80)); } }
}));
rmSync(work, { recursive: true, force: true });
console.log(`og-style: ${made} made, ${styles.length} styles`);
