// Trace the regulating lines of each rendered elevation, so the demo can draw them over the picture of the building.
//
//   npm run previews -- --domain architecture-elevation   (the renders)
//   npm run elevations [-- --only baroque-architecture]  (the lines, into the same manifest)
//
// The renders are one-point views with the camera on the central axis, so the axis of the facade is the centre of
// the image. The script reads the pixels (dwebp to PPM) and uses edge projections, not a model:
// - horizon: the row where the outer strips of the image turn from sky to paving;
// - left and right: the run of columns around the centre whose roofline (the first row that is not sky) is high;
// - cornice: the median roofline over the facade; crown: the highest roofline;
// - ground: the strongest horizontal edge over the facade near the horizon (the foot of the facade);
// - floors and bays: the peaks of the horizontal and the vertical edge projections inside the facade box.
// The demo draws these lines, the axis and the diagonals of the facade box. All values are in image pixels.
import { readFileSync, writeFileSync, mkdirSync, rmSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { tmpdir } from "node:os";
import { join } from "node:path";

const DIR = "demo/previews/architecture-elevation";
const arg = (name: string) => { const i = process.argv.indexOf(name); return i > 0 ? process.argv[i + 1] : undefined; };
const only = arg("--only")?.split(",");
const tmp = join(tmpdir(), "design-ontology-elevations");
mkdirSync(tmp, { recursive: true });

function grey(webp: string) {
  const ppm = join(tmp, "in.ppm");
  execFileSync("dwebp", ["-quiet", "-ppm", webp, "-o", ppm]);
  const b = readFileSync(ppm);
  const head = b.subarray(0, 40).toString("latin1").split(/\s+/);
  const w = +head[1], h = +head[2], off = b.length - w * h * 3;
  const g = new Float32Array(w * h), rgb = (x: number, y: number) => { const i = off + (y * w + x) * 3; return [b[i], b[i + 1], b[i + 2]]; };
  for (let i = 0; i < w * h; i++) g[i] = 0.299 * b[off + i * 3] + 0.587 * b[off + i * 3 + 1] + 0.114 * b[off + i * 3 + 2];
  return { w, h, g, rgb };
}

const smooth = (a: number[], r: number) => a.map((_, i) => { let s = 0, n = 0; for (let j = i - r; j <= i + r; j++) if (j >= 0 && j < a.length) { s += a[j]; n++; } return s / n; });
/** Peaks of a profile: local maxima above a share of the top value, at least `gap` apart, strongest first. */
function peaks(a: number[], gap: number, share: number, max: number): number[] {
  const top = Math.max(...a), out: number[] = [];
  const order = a.map((v, i) => [v, i]).sort((p, q) => q[0] - p[0]);
  for (const [v, i] of order) {
    if (v < top * share || out.length >= max) break;
    if (out.every((o) => Math.abs(o - i) >= gap)) out.push(i);
  }
  return out.sort((p, q) => p - q);
}
const median = (v: number[]) => [...v].sort((a, b) => a - b)[v.length >> 1];

function trace(webp: string) {
  const { w, h, g, rgb } = grey(webp);
  const at = (x: number, y: number) => g[y * w + x];
  const gx = (x: number, y: number) => Math.abs(at(x + 1, y) - at(x - 1, y));
  const gy = (x: number, y: number) => Math.abs(at(x, y + 1) - at(x, y - 1));
  const cx = w >> 1;

  // The sky of a row: the mean of its two outer strips. The renders are freestanding buildings with sky at both sides.
  const strip = (y: number) => { const c = [0, 0, 0]; let n = 0; for (const x0 of [6, w - 30]) for (let x = x0; x < x0 + 24; x++) { rgb(x, y).forEach((v, i) => (c[i] += v)); n++; } return c.map((v) => v / n); };
  const rowSky = Array.from({ length: h }, (_, y) => strip(y));
  const far = (a: number[], b: number[]) => Math.max(...a.map((v, i) => Math.abs(v - b[i])));
  // The horizon: the first row where the outer strips stop being sky (they turn to paving).
  // Both strips must change: a low annex can reach one edge of the image, but not both.
  const side = (y: number, x0: number) => { const c = [0, 0, 0]; for (let x = x0; x < x0 + 24; x++) rgb(x, y).forEach((v, i) => (c[i] += v / 24)); return c; };
  // A grey sky over grey paving can stay under the threshold: then take the row with the strongest change.
  const change = (y: number) => Math.min(...[6, w - 30].map((x0) => Math.min(far(side(y, x0), side(y - 12, x0)), far(side(y + 1, x0), side(y - 12, x0)))));
  let horizon = -1, best = 0, bestY = h - 1;
  for (let y = 20; y < h - 1; y++) {
    const c = change(y);
    if (c > 18) { horizon = y; break; }
    if (y > h * 0.4 && c > best) { best = c; bestY = y; }
  }
  if (horizon < 0) horizon = bestY;
  // The roofline of a column: its first row that differs from the sky of that row.
    // A sky with a vignette is darker at the edges, so the row must also differ from the pixels just above it.
  const roof = (x: number) => { for (let y = 8; y < horizon; y++) if (far(rgb(x, y), rowSky[y]) > 22 && far(rgb(x, y), rgb(x, y - 6)) > 12) return y; return horizon; };
  const roofs = Array.from({ length: w }, (_, x) => roof(x));
  // The facade: the run of building columns around the centre (gaps of up to 8 px are spires and railings).
  // A low annex next to the building is not the facade: a column counts when its roofline is near the roofline at the centre.
  const mid = median(roofs.slice(cx - (w >> 4), cx + (w >> 4)));
  const tall = (x: number) => roofs[x] < Math.min(horizon - 40, mid + 0.35 * (horizon - mid));
  let left = cx, right = cx, gap = 0;
  for (let x = cx; x > 0; x--) { if (tall(x)) { left = x; gap = 0; } else if (++gap > 8) break; }
  gap = 0;
  for (let x = cx; x < w - 1; x++) { if (tall(x)) { right = x; gap = 0; } else if (++gap > 8) break; }
  const over = roofs.slice(left, right + 1);
  const cornice = median(over), crown = Math.min(...over);
  // The ground line: the strongest horizontal edge over the facade near the horizon (the foot of the facade).
  let ground = horizon, bestG = 0;
  for (let y = Math.max(cornice + 20, horizon - 20); y < Math.min(h - 2, horizon + 70); y++) {
    let s = 0; for (let x = left; x < right; x++) s += gy(x, y);
    if (s > bestG) { bestG = s; ground = y; }
  }

  // Floors and bays inside the facade box.
  const fr: number[] = [];
  for (let y = cornice; y < ground; y++) { let s = 0; for (let x = left + 4; x < right - 4; x++) s += gy(x, y); fr.push(s); }
  const floors = peaks(smooth(fr, 2), 26, 0.45, 6).map((y) => y + cornice).filter((y) => y > cornice + 12 && y < ground - 12);
  const br: number[] = [];
  for (let x = left; x < right; x++) { let s = 0; for (let y = cornice; y < ground; y++) s += gx(x, y); br.push(s); }
  const bays = peaks(smooth(br, 2), 22, 0.5, 16).map((x) => x + left).filter((x) => x > left + 8 && x < right - 8);
  return { width: w, height: h, axis: cx, horizon, ground, left, right, cornice, crown, floors, bays };
}

const manifestPath = join(DIR, "manifest.json");
const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));
for (const [id, rec] of Object.entries<any>(manifest.images)) {
  if (only && !only.includes(id)) continue;
  rec.lines = trace(join(DIR, rec.file));
  const l = rec.lines;
  console.log(`${id}: facade ${l.right - l.left} x ${l.ground - l.cornice} px, ${l.floors.length} floor lines, ${l.bays.length} bay lines`);
}
writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + "\n");
rmSync(tmp, { recursive: true, force: true });
