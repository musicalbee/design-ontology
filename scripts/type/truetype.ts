// A small TrueType reader: enough to draw the outlines of a text line and to measure a face.
// It reads the glyf outlines (TrueType flavour, .ttf), the cmap, the advance widths and fvar.
// A variable font gives its default instance. There is no kerning and no shaping, so a specimen
// sets each glyph at its advance width. CFF fonts (.otf) and WOFF2 are not supported.

export interface Pt { x: number; y: number; on: boolean }
export type Contour = Pt[];
export interface Axis { tag: string; min: number; def: number; max: number }

export class TrueType {
  readonly upm: number;
  readonly numGlyphs: number;
  readonly axes: Axis[] = [];
  readonly os2: { xHeight?: number; capHeight?: number } = {};
  private readonly v: DataView;
  private readonly tables = new Map<string, { off: number; len: number }>();
  private readonly cmap = new Map<number, number>();
  private readonly loca: number[] = [];
  private readonly advances: number[] = [];

  constructor(buf: Uint8Array) {
    this.v = new DataView(buf.buffer, buf.byteOffset, buf.byteLength);
    const v = this.v;
    const sig = v.getUint32(0);
    if (sig !== 0x00010000 && sig !== 0x74727565) throw new Error("Not a TrueType (glyf) font. Give a .ttf file.");
    const n = v.getUint16(4);
    for (let i = 0; i < n; i++) {
      const r = 12 + i * 16;
      const tag = String.fromCharCode(v.getUint8(r), v.getUint8(r + 1), v.getUint8(r + 2), v.getUint8(r + 3));
      this.tables.set(tag, { off: v.getUint32(r + 8), len: v.getUint32(r + 12) });
    }
    const head = this.t("head");
    this.upm = v.getUint16(head + 18);
    const longLoca = v.getInt16(head + 50) === 1;
    this.numGlyphs = v.getUint16(this.t("maxp") + 4);

    const loca = this.t("loca");
    for (let i = 0; i <= this.numGlyphs; i++) this.loca.push(longLoca ? v.getUint32(loca + i * 4) : v.getUint16(loca + i * 2) * 2);

    const nMetrics = v.getUint16(this.t("hhea") + 34);
    const hmtx = this.t("hmtx");
    for (let i = 0; i < this.numGlyphs; i++) this.advances.push(v.getUint16(hmtx + Math.min(i, nMetrics - 1) * 4));

    this.readCmap();
    if (this.tables.has("OS/2")) {
      const os2 = this.t("OS/2");
      if (v.getUint16(os2) >= 2) { this.os2.xHeight = v.getInt16(os2 + 86); this.os2.capHeight = v.getInt16(os2 + 88); }
    }
    if (this.tables.has("fvar")) {
      const f = this.t("fvar");
      const at = f + v.getUint16(f + 4), count = v.getUint16(f + 8), size = v.getUint16(f + 10);
      const fixed = (o: number) => v.getInt32(o) / 65536;
      for (let i = 0; i < count; i++) {
        const r = at + i * size;
        const tag = String.fromCharCode(v.getUint8(r), v.getUint8(r + 1), v.getUint8(r + 2), v.getUint8(r + 3));
        this.axes.push({ tag, min: fixed(r + 4), def: fixed(r + 8), max: fixed(r + 12) });
      }
    }
  }

  private t(tag: string): number {
    const e = this.tables.get(tag);
    if (!e) throw new Error(`The font has no ${tag} table.`);
    return e.off;
  }

  private readCmap() {
    const v = this.v, base = this.t("cmap"), n = v.getUint16(base + 2);
    let best = -1, rank = -1;
    for (let i = 0; i < n; i++) {
      const r = base + 4 + i * 8, pid = v.getUint16(r), eid = v.getUint16(r + 2), off = base + v.getUint32(r + 4);
      const fmt = v.getUint16(off);
      const score = fmt === 12 ? 3 : fmt === 4 && (pid === 3 || pid === 0) ? 2 : 0;
      if (score > rank && (fmt === 4 || fmt === 12) && (pid === 0 || (pid === 3 && (eid === 1 || eid === 10)))) { best = off; rank = score; }
    }
    if (best < 0) throw new Error("No Unicode cmap (format 4 or 12).");
    if (v.getUint16(best) === 12) {
      const groups = v.getUint32(best + 12);
      for (let g = 0; g < groups; g++) {
        const r = best + 16 + g * 12, start = v.getUint32(r), end = v.getUint32(r + 4), gid = v.getUint32(r + 8);
        for (let c = start; c <= end && c < 0x30000; c++) this.cmap.set(c, gid + c - start);
      }
      return;
    }
    const seg = v.getUint16(best + 6) / 2;
    const ends = best + 14, starts = ends + seg * 2 + 2, deltas = starts + seg * 2, ranges = deltas + seg * 2;
    for (let s = 0; s < seg; s++) {
      const end = v.getUint16(ends + s * 2), start = v.getUint16(starts + s * 2);
      const delta = v.getInt16(deltas + s * 2), ro = v.getUint16(ranges + s * 2);
      for (let c = start; c <= end && c !== 0xffff; c++) {
        let gid: number;
        if (ro === 0) gid = (c + delta) & 0xffff;
        else {
          const at = ranges + s * 2 + ro + (c - start) * 2;
          gid = v.getUint16(at);
          if (gid !== 0) gid = (gid + delta) & 0xffff;
        }
        if (gid) this.cmap.set(c, gid);
      }
    }
  }

  glyphId(ch: string): number { return this.cmap.get(ch.codePointAt(0)!) ?? 0; }
  advance(gid: number): number { return this.advances[gid] ?? 0; }

  /** The outline of one glyph in font units, y up. */
  contours(gid: number, depth = 0): Contour[] {
    const v = this.v, start = this.loca[gid], end = this.loca[gid + 1];
    if (end <= start || depth > 8) return [];
    const g = this.t("glyf") + start;
    const nc = v.getInt16(g);
    if (nc < 0) return this.composite(g + 10, depth);
    const endPts: number[] = [];
    for (let i = 0; i < nc; i++) endPts.push(v.getUint16(g + 10 + i * 2));
    const nPts = nc ? endPts[nc - 1] + 1 : 0;
    let p = g + 10 + nc * 2;
    p += 2 + v.getUint16(p);
    const flags: number[] = [];
    while (flags.length < nPts) {
      const f = v.getUint8(p++);
      flags.push(f);
      if (f & 8) { let r = v.getUint8(p++); while (r-- > 0) flags.push(f); }
    }
    const read = (short: number, same: number) => {
      const out: number[] = [];
      let val = 0;
      for (const f of flags) {
        if (f & short) { const d = v.getUint8(p++); val += f & same ? d : -d; }
        else if (!(f & same)) { val += v.getInt16(p); p += 2; }
        out.push(val);
      }
      return out;
    };
    const xs = read(2, 0x10), ys = read(4, 0x20);
    const out: Contour[] = [];
    let s = 0;
    for (const e of endPts) {
      const c: Contour = [];
      for (let i = s; i <= e; i++) c.push({ x: xs[i], y: ys[i], on: !!(flags[i] & 1) });
      out.push(c);
      s = e + 1;
    }
    return out;
  }

  private composite(p: number, depth: number): Contour[] {
    const v = this.v, out: Contour[] = [];
    for (;;) {
      const flags = v.getUint16(p), gid = v.getUint16(p + 2);
      p += 4;
      let dx: number, dy: number;
      if (flags & 1) { dx = v.getInt16(p); dy = v.getInt16(p + 2); p += 4; }
      else { dx = v.getInt8(p); dy = v.getInt8(p + 1); p += 2; }
      if (!(flags & 2)) { dx = 0; dy = 0; } // point-matched anchors: not supported, place at the origin
      let a = 1, b = 0, c = 0, d = 1;
      const f2 = (o: number) => v.getInt16(o) / 16384;
      if (flags & 8) { a = d = f2(p); p += 2; }
      else if (flags & 0x40) { a = f2(p); d = f2(p + 2); p += 4; }
      else if (flags & 0x80) { a = f2(p); b = f2(p + 2); c = f2(p + 4); d = f2(p + 6); p += 8; }
      for (const k of this.contours(gid, depth + 1))
        out.push(k.map((q) => ({ x: q.x * a + q.y * c + dx, y: q.x * b + q.y * d + dy, on: q.on })));
      if (!(flags & 0x20)) break;
    }
    return out;
  }

  /** The glyphs of a line, with the pen position of each, in font units. */
  layout(text: string): { gid: number; x: number }[] {
    let x = 0;
    return [...text].map((ch) => { const gid = this.glyphId(ch); const at = x; x += this.advance(gid); return { gid, x: at }; });
  }
  width(text: string): number { return [...text].reduce((w, ch) => w + this.advance(this.glyphId(ch)), 0); }
}

/** Points of a quadratic contour as segments: on-curve start, then [control, end] pairs. Implied on-curve points are added. */
export function segments(c: Contour): { start: Pt; segs: ({ to: Pt } | { ctrl: Pt; to: Pt })[] } | null {
  if (c.length < 2) return null;
  const mid = (a: Pt, b: Pt): Pt => ({ x: (a.x + b.x) / 2, y: (a.y + b.y) / 2, on: true });
  let pts = c;
  let start: Pt;
  if (c[0].on) start = c[0], pts = c.slice(1);
  else if (c[c.length - 1].on) start = c[c.length - 1], pts = c.slice(0, -1);
  else start = mid(c[c.length - 1], c[0]);
  const segs: ({ to: Pt } | { ctrl: Pt; to: Pt })[] = [];
  let ctrl: Pt | null = null;
  for (const q of [...pts, start]) {
    if (q.on) { segs.push(ctrl ? { ctrl, to: q } : { to: q }); ctrl = null; }
    else if (ctrl) { const m = mid(ctrl, q); segs.push({ ctrl, to: m }); ctrl = q; }
    else ctrl = q;
  }
  if (ctrl) segs.push({ ctrl, to: start });
  return { start, segs };
}

/** SVG path data for contours, placed at (ox, oy) with a scale; y turns down. */
export function pathData(contours: Contour[], ox: number, oy: number, s: number): string {
  const f = (n: number) => (Math.round(n * 10) / 10).toString();
  const X = (p: Pt) => f(ox + p.x * s), Y = (p: Pt) => f(oy - p.y * s);
  let d = "";
  for (const c of contours) {
    const r = segments(c);
    if (!r) continue;
    d += `M${X(r.start)} ${Y(r.start)}`;
    for (const g of r.segs) d += "ctrl" in g ? `Q${X(g.ctrl)} ${Y(g.ctrl)} ${X(g.to)} ${Y(g.to)}` : `L${X(g.to)} ${Y(g.to)}`;
    d += "Z";
  }
  return d;
}

/** The contours as polylines (each curve cut into 12 steps), for measurement. */
export function flatten(contours: Contour[]): { x: number; y: number }[][] {
  return contours.map((c) => {
    const r = segments(c);
    if (!r) return [];
    const out = [{ x: r.start.x, y: r.start.y }];
    let p: Pt = r.start;
    for (const g of r.segs) {
      if ("ctrl" in g) for (let i = 1; i <= 12; i++) {
        const t = i / 12, u = 1 - t;
        out.push({ x: u * u * p.x + 2 * u * t * g.ctrl.x + t * t * g.to.x, y: u * u * p.y + 2 * u * t * g.ctrl.y + t * t * g.to.y });
      }
      else out.push({ x: g.to.x, y: g.to.y });
      p = g.to;
    }
    return out;
  });
}

/** Where a line x = k (axis "x") or y = k (axis "y") cuts the polylines, sorted. */
export function crossings(lines: { x: number; y: number }[][], axis: "x" | "y", k: number): number[] {
  const o = axis === "x" ? "y" : "x";
  const out: number[] = [];
  for (const l of lines)
    for (let i = 0; i < l.length; i++) {
      const a = l[i], b = l[(i + 1) % l.length];
      if ((a[axis] <= k && b[axis] > k) || (b[axis] <= k && a[axis] > k)) out.push(a[o] + ((k - a[axis]) / (b[axis] - a[axis])) * (b[o] - a[o]));
    }
  return out.sort((p, q) => p - q);
}

export function bbox(contours: Contour[]) {
  const pts = contours.flat();
  return { xMin: Math.min(...pts.map((p) => p.x)), xMax: Math.max(...pts.map((p) => p.x)), yMin: Math.min(...pts.map((p) => p.y)), yMax: Math.max(...pts.map((p) => p.y)) };
}

/** Measures of a face from its own outlines. */
export function measure(f: TrueType) {
  const box = (ch: string) => bbox(f.contours(f.glyphId(ch)));
  const xh = f.os2.xHeight || box("x").yMax;
  const cap = f.os2.capHeight || box("H").yMax;
  // Stroke contrast from the letter o: the thick sides on the horizontal mid-line, the thin top and bottom on the vertical one.
  const o = f.contours(f.glyphId("o"));
  const ob = bbox(o), lines = flatten(o);
  const h = crossings(lines, "y", (ob.yMin + ob.yMax) / 2), vv = crossings(lines, "x", (ob.xMin + ob.xMax) / 2);
  const thick = h.length >= 4 ? (h[1] - h[0] + h[h.length - 1] - h[h.length - 2]) / 2 : NaN;
  const thin = vv.length >= 4 ? (vv[1] - vv[0] + vv[vv.length - 1] - vv[vv.length - 2]) / 2 : NaN;
  const lower = "abcdefghijklmnopqrstuvwxyz";
  return {
    xToCap: xh / cap,
    xHeightEm: xh / f.upm,
    capHeightEm: cap / f.upm,
    contrast: thick / thin,
    lowerAdvanceEm: f.width(lower) / lower.length / f.upm,
    stemEm: thick / f.upm,
  };
}
