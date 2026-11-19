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
// - floors: the peaks of the horizontal edge projection inside the facade box;
// - bay: the period of the vertical edge projection (its autocorrelation peak). A window or a pilaster has two
//   edges, so the peaks of the projection are not bays; the period is. When the projection has no clear period,
//   bay is null and the demo prints no count.
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
/** The period of a profile in px: the highest local peak of its autocorrelation, for a period from width/24 to
 *  width/3. A peak at twice a period that is nearly as high wins, because a window has two edges. Null below 0.2. */
function period(a: number[], width: number): number | null {
  const m = a.reduce((s, v) => s + v, 0) / a.length, d = a.map((v) => v - m);
  const e = d.reduce((s, v) => s + v * v, 0) || 1;
  const ac = (lag: number) => { let s = 0; for (let i = 0; i + lag < d.length; i++) s += d[i] * d[i + lag]; return s / e * d.length / (d.length - lag); };
  const lo = Math.max(16, Math.round(width / 24)), hi = Math.round(width / 3);
  const r = Array.from({ length: hi + 2 }, (_, l) => (l >= lo - 1 ? ac(l) : 0));
  let best = 0, at = 0;
  for (let l = lo; l <= hi; l++) if (r[l] > r[l - 1] && r[l] >= r[l + 1] && r[l] > best) { best = r[l]; at = l; }
  if (best < 0.2) return null;
  // Two edges for each opening: a peak near 2 × the period that is at least 85 % as strong is the bay.
  for (let l = Math.round(at * 1.8); l <= Math.min(hi, Math.round(at * 2.2)); l++) if (r[l] >= 0.85 * best && r[l] >= r[l - 1] && r[l] >= r[l + 1]) return l;
  return at;
}

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
  // A low annex next to the building is not the facade: a column counts when its roofline is near the main roofline.
  // The main roofline is the median over the middle 40 % of the image, so a tall tower at the centre does not set it.
  const mid = median(roofs.slice(cx - Math.round(w / 5), cx + Math.round(w / 5)));
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
  // A grid of fewer than 3 or more than 12 bays is the period of an ornament or of the facade halves, not of the bays.
  const p0 = period(smooth(br, 2), right - left);
  const bay = p0 && (right - left) / p0 >= 3 && (right - left) / p0 <= 12 ? p0 : null;
  // The bay lines: a grid with the bay period, at the phase where the edges are strongest, through the facade box.
  let bays: number[] = [];
  if (bay) {
    let phase = 0, top = -1;
    for (let f = 0; f < bay; f++) { let v = 0; for (let x = f; x < br.length; x += bay) v += br[x]; if (v > top) { top = v; phase = f; } }
    for (let x = phase; x < br.length; x += bay) if (x > 8 && x < br.length - 8) bays.push(x + left);
  }
  return { width: w, height: h, axis: cx, horizon, ground, left, right, cornice, crown, floors, bay, bays };
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
