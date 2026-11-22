// One Open Graph card (1200x630 JPEG) per demo page: assets/og/<page>.jpg.
// Run: node scripts/og-cards.mjs   (needs Google Chrome; sips converts PNG to JPEG)
// Pages that belong to an image domain get a 2x2 collage of that domain's previews.
import { readFileSync, readdirSync, existsSync, mkdirSync, writeFileSync, rmSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";

const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const SKIP = new Set(["design.html", "kit.html", "index.html"]);
const DOMAIN_OF = { "architecture.html": "architecture-elevation", "interior.html": "interior", "internet-stage.html": "internet" };
const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");
mkdirSync("assets/og", { recursive: true });
const work = join(tmpdir(), "og-cards"); mkdirSync(work, { recursive: true });

const previews = (dom) => {
  const dir = `demo/previews/${dom}`;
  if (!existsSync(dir)) return [];
  const files = readdirSync(dir).filter((f) => f.endsWith(".webp")).sort();
  const step = Math.max(1, Math.floor(files.length / 4));
  return [0, 1, 2, 3].map((i) => files[i * step]).filter(Boolean).map((f) => resolve(dir, f));
};

for (const name of readdirSync("demo").filter((n) => n.endsWith(".html") && !SKIP.has(n)).sort()) {
  const html = readFileSync(`demo/${name}`, "utf8");
  const title = (html.match(/<title>([^<]*)<\/title>/)?.[1] ?? name).replace(/\s*·\s*Design Ontology$/, "");
  const desc = html.match(/name="description" content="([^"]*)"/)?.[1] ?? "";
  const key = name.replace(".html", "");
  const imgs = previews(DOMAIN_OF[name] ?? key);
  const collage = imgs.length
    ? `<div class="grid">${imgs.map((p) => `<i style="background-image:url('file://${p}')"></i>`).join("")}</div>`
    : `<div class="mark">${esc(title.slice(0, 1))}</div>`;
  const page = `<!doctype html><meta charset=utf-8><style>
*{box-sizing:border-box;margin:0}body{width:1200px;height:630px;background:#f3efe6;color:#15130f;font-family:Georgia,'Times New Roman',serif;display:flex;overflow:hidden}
.t{flex:1;padding:64px 48px 56px 64px;display:flex;flex-direction:column;justify-content:space-between}
.k{font:600 22px/1 ui-monospace,Menlo,monospace;letter-spacing:.14em;text-transform:uppercase;color:#b4431c}
h1{font-size:${title.length > 34 ? 54 : 66}px;line-height:1.05;font-weight:700;letter-spacing:-.01em;margin-bottom:24px}
p{font:400 25px/1.4 -apple-system,Helvetica,Arial,sans-serif;color:#4a443a;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}
.f{font:500 21px/1 ui-monospace,Menlo,monospace;color:#6b6457}
.grid{width:480px;height:630px;display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr;gap:6px;background:#15130f;padding:6px 0 6px 6px}
.grid i{background-size:cover;background-position:center}
.mark{width:480px;height:630px;background:#15130f;color:#f3efe6;font:700 360px/630px Georgia,serif;text-align:center}
</style><div class=t><div class=k>Design Ontology</div><div><h1>${esc(title)}</h1><p>${esc(desc)}</p></div><div class=f>musicalbee.github.io/design-ontology</div></div>${collage}`;
  const src = join(work, `${key}.html`), png = join(work, `${key}.png`);
  writeFileSync(src, page);
  execFileSync(CHROME, ["--headless=new", "--disable-gpu", "--hide-scrollbars", "--allow-file-access-from-files", "--virtual-time-budget=4000", "--window-size=1200,630", `--screenshot=${png}`, `file://${src}`], { stdio: "ignore" });
  execFileSync("sips", ["-s", "format", "jpeg", "-s", "formatOptions", "82", png, "--out", `assets/og/${key}.jpg`], { stdio: "ignore" });
  console.log(`og: ${key}`);
}
rmSync(work, { recursive: true, force: true });
