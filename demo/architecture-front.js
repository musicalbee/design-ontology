// Front elevation: the plug-in of the architecture page (encyclopedia.js). One parametric front, 6 bays by
// 5 storeys, drawn in each style, or the generated front elevation of the style with the lines that
// trace-elevations.ts found in its pixels. Overlays: the axis and the symmetry, the rhythm module, and the
// regulating lines of a generated front.
//
//   Encyclopedia.page({ domain: "architecture", plugins: [Gallery, ArchitectureFront] })
window.ArchitectureFront = (() => {
  const esc = (s) => String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
  document.head.insertAdjacentHTML("beforeend", `<style>
  .af { --overlay: #d6336c; --bay: #1971c2; --grid: #e8590c; display: grid; gap: 16px; grid-template-columns: 1fr; }
  @media (min-width: 1080px) { .af { grid-template-columns: minmax(0, 7fr) minmax(300px, 4fr); align-items: start; } }
  .af svg { display: block; width: 100%; height: auto; border-radius: 8px; }
  .af svg text { font: 11px system-ui, sans-serif; }
  .af svg.photo text { font-size: 24px; font-weight: 650; paint-order: stroke; stroke: rgb(255 255 255 / .85); stroke-width: 6px; stroke-linejoin: round; }
  .af [data-off~="axis"] .ov-axis, .af [data-off~="bays"] .ov-bays, .af [data-off~="grid"] .ov-grid { display: none; }
  .af figure { margin: 0; }
  .af figcaption { margin-top: 10px; font-size: 14px; color: var(--enc-muted, #474a68); max-width: 80ch; }
  .af .sw { width: 10px; height: 10px; border-radius: 2px; display: inline-block; }
  </style>`);
  const W = 480, H = 360, G = 320, X0 = 80, BW = 320, N = 6, S = 5, SH = 48, BAY = BW / N;
  const R = (x, y, w, h, f, extra = "") => `<rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${w.toFixed(1)}" height="${h.toFixed(1)}" fill="${f}" ${extra}/>`;
  const P = (d, f, extra = "") => `<path d="${d}" fill="${f}" ${extra}/>`;
  // Each style is a function of its colours. It draws the same box: X0..X0+BW wide, S storeys of SH, ground at G.
  const styles = {
    "gothic-architecture": (c) => {
      const top = G - S * SH;
      let s = R(X0, top, BW, S * SH, c.wall) + R(X0 - 10, top - 40, 40, S * SH + 40, c.wall) + R(X0 + BW - 30, top - 40, 40, S * SH + 40, c.wall);
      s += P(`M${X0 - 10} ${top - 40} L${X0 + 10} ${top - 100} L${X0 + 30} ${top - 40} Z`, c.roof) + P(`M${X0 + BW - 30} ${top - 40} L${X0 + BW - 10} ${top - 100} L${X0 + BW + 10} ${top - 40} Z`, c.roof);
      for (let j = 0; j < 3; j++) { const x = X0 + 50 + j * 80; s += P(`M${x} ${G} V${G - 60} Q${x} ${G - 90} ${x + 26} ${G - 104} Q${x + 52} ${G - 90} ${x + 52} ${G - 60} V${G} Z`, c.dark); }
      s += `<circle cx="${X0 + BW / 2}" cy="${top + 56}" r="34" fill="${c.glass}" stroke="${c.dark}" stroke-width="4"/>`;
      for (let k = 0; k < 8; k++) s += P(`M${X0 + BW / 2} ${top + 56} L${X0 + BW / 2 + 34 * Math.cos(k * Math.PI / 4)} ${top + 56 + 34 * Math.sin(k * Math.PI / 4)}`, "none", `stroke="${c.dark}" stroke-width="2"`);
      for (let j = 0; j < 4; j++) { const x = X0 + 56 + j * 66; s += P(`M${x} ${top + 130} V${top + 108} Q${x + 8} ${top + 92} ${x + 16} ${top + 108} V${top + 130} Z`, c.glass); }
      return s;
    },
    "renaissance-architecture": (c) => {
      const top = G - S * SH;
      let s = R(X0, top + 20, BW, S * SH - 20, c.wall) + R(X0 - 4, top + 14, BW + 8, 8, c.stone);
      for (let i = 0; i < S - 1; i++) for (let j = 0; j < N; j++) {
        const x = X0 + j * BAY + 14, y = top + 34 + i * SH, w = BAY - 28;
        s += R(x, y, w, 28, c.dark) + (i === 1 ? P(`M${x - 3} ${y - 2} h${w + 6} l-${(w + 6) / 2} -9 Z`, c.stone) : R(x - 3, y - 6, w + 6, 4, c.stone));
      }
      for (let i = 1; i < S; i++) s += R(X0 - 2, top + 20 + i * SH - 2, BW + 4, 3, c.stone);
      for (let j = 0; j <= N; j++) s += R(X0 + j * BAY - 4, G - SH, 8, SH, c.stone);
      for (let j = 0; j < N; j++) s += P(`M${X0 + j * BAY + 4} ${G - 6} V${G - SH + 12} A${BAY / 2 - 4} ${BAY / 2 - 4} 0 0 1 ${X0 + (j + 1) * BAY - 4} ${G - SH + 12} V${G - 6} Z`, c.dark, 'opacity=".75"');
      return s + R(X0 - 4, top, BW + 8, 14, c.roof);
    },
    "baroque-architecture": (c) => {
      const top = G - S * SH;
      let s = R(X0, top, BW, S * SH, c.wall);
      s += P(`M${X0 + 2 * BAY} ${G} V${top - 10} Q${X0 + BW / 2} ${top + 30} ${X0 + 4 * BAY} ${top - 10} V${G} Z`, c.stone);
      s += P(`M${X0 + BW / 2 - 70} ${top - 10} A70 56 0 0 1 ${X0 + BW / 2 + 70} ${top - 10} Z`, c.dome) + R(X0 + BW / 2 - 6, top - 86, 12, 24, c.gold);
      for (let j = 0; j <= N; j++) if (j !== 3) s += R(X0 + j * BAY - 4 + (j === 2 ? 6 : j === 4 ? -6 : 0), top + 12, 8, S * SH - 12, c.stone);
      for (let i = 0; i < S - 1; i++) for (let j = 0; j < N; j++) if (j < 2 || j > 3) s += R(X0 + j * BAY + 12, top + 28 + i * SH, BAY - 24, 28, c.dark) + P(`M${X0 + j * BAY + 10} ${top + 26 + i * SH} q${BAY / 2 - 10} -12 ${BAY - 20} 0 Z`, c.gold);
      s += P(`M${X0 + BW / 2 - 24} ${G} V${G - 50} A24 24 0 0 1 ${X0 + BW / 2 + 24} ${G - 50} V${G} Z`, c.dark) + P(`M${X0 + BW / 2 - 30} ${G - 90} q30 -26 60 0 l-8 6 q-22 -16 -44 0 Z`, c.gold);
      return s + R(X0 - 6, top, BW + 12, 8, c.gold);
    },
    "neoclassical-architecture": (c) => {
      const top = G - S * SH;
      let s = R(X0, top, BW, S * SH, c.wall) + R(X0 - 4, top - 6, BW + 8, 6, c.stone);
      for (let i = 0; i < S - 1; i++) for (let j = 0; j < N; j++) if (j < 1 || j > 4) s += R(X0 + j * BAY + 14, top + 24 + i * SH, BAY - 28, 28, c.dark);
      s += R(X0 + BAY, top + 6, 4 * BAY, S * SH - 6, c.stone, 'opacity=".5"');
      s += P(`M${X0 + BAY - 8} ${top + 12} H${X0 + 5 * BAY + 8} L${X0 + BW / 2} ${top - 40} Z`, c.stone) + R(X0 + BAY - 8, top + 12, 4 * BAY + 16, 10, c.stone);
      for (let j = 0; j < 6; j++) s += R(X0 + BAY + 6 + j * ((4 * BAY - 12) / 5) - 5, top + 22, 10, S * SH - 40, c.column) + R(X0 + BAY + 6 + j * ((4 * BAY - 12) / 5) - 7, top + 22, 14, 4, c.stone);
      for (let k = 0; k < 4; k++) s += R(X0 - 10 + k * 3, G - 14 + k * 3 - 6, BW + 20 - k * 6, 5, c.stone);
      return s;
    },
    "beaux-arts-architecture": (c) => {
      const top = G - S * SH;
      let s = R(X0, top + 20, BW, S * SH - 20, c.wall) + R(X0, G - SH, BW, SH, c.stone);
      s += P(`M${X0 - 6} ${top + 20} L${X0 + 14} ${top - 14} H${X0 + BW - 14} L${X0 + BW + 6} ${top + 20} Z`, c.roof);
      s += R(X0 + 2 * BAY, top + 8, 2 * BAY, 12, c.wall) + P(`M${X0 + 2 * BAY - 4} ${top + 8} L${X0 + 2 * BAY + 10} ${top - 44} H${X0 + 4 * BAY - 10} L${X0 + 4 * BAY + 4} ${top + 8} Z`, c.roof) + P(`M${X0 + BW / 2 - 30} ${top - 44} A30 22 0 0 1 ${X0 + BW / 2 + 30} ${top - 44} Z`, c.dome);
      for (let j = 0; j < N; j++) for (let i = 1; i < S - 1; i++) s += P(`M${X0 + j * BAY + 12} ${G - i * SH - SH + 4 + 12} V${G - i * SH - SH + 40} H${X0 + (j + 1) * BAY - 12} V${G - i * SH - SH + 16} Z`, c.dark);
      for (let j = 0; j <= N; j++) s += R(X0 + j * BAY - 3 - (j > 0 && j < N ? 5 : 0), top + 20, j > 0 && j < N ? 14 : 6, (S - 1) * SH - SH + 28, c.column, 'opacity=".9"');
      for (let j = 0; j < N; j++) s += P(`M${X0 + j * BAY + 8} ${G} V${G - SH + 18} A${BAY / 2 - 8} 16 0 0 1 ${X0 + (j + 1) * BAY - 8} ${G - SH + 18} V${G} Z`, c.dark);
      return s + R(X0 - 6, top + 18, BW + 12, 5, c.gold);
    },
    "prairie-school-architecture": (c) => {
      const y0 = G - 3 * SH;
      let s = R(X0 - 10, G - 30, BW + 20, 30, c.brick) + R(X0 - 10, G - 34, BW + 20, 4, c.stone);
      s += R(X0 + 10, G - 30 - 76, BW - 20, 76, c.brick) + R(X0 + 10, G - 30 - 76, BW - 20, 4, c.stone);
      s += R(X0 + 30, G - 30 - 76, BW - 60, 24, c.wood);
      for (let j = 0; j < 9; j++) s += R(X0 + 28 + j * ((BW - 56) / 9), G - 30 - 48, (BW - 56) / 9 - 4, 22, c.glass);
      s += P(`M${X0 - 30} ${y0 + 6} L${X0 + 30} ${y0 - 22} H${X0 + BW - 30} L${X0 + BW + 30} ${y0 + 6} Z`, c.roof);
      s += R(X0 + 70, y0 - 20 - 36, 60, 38, c.brick) + R(X0 + 66, y0 - 60, 68, 5, c.stone);
      s += R(X0 - 24, y0 + 6, BW + 48, 5, c.wood);
      s += R(X0 + 20, G - 30 - 76 - 26, BW - 40, 28, c.brick) + R(X0 + 20, G - 30 - 76 - 26, BW - 40, 3, c.stone);
      for (let j = 0; j < 7; j++) s += R(X0 + 34 + j * ((BW - 68) / 7), G - 30 - 76 - 20, (BW - 68) / 7 - 4, 14, c.glass);
      return s;
    },
    "international-style-architecture": (c) => {
      let s = R(X0, G - S * SH, BW, (S - 1) * SH, c.wall) + R(X0, G - S * SH, BW, 3, c.frame);
      for (let i = 0; i < S - 1; i++) s += R(X0, G - (S - i) * SH + 12, BW, 26, c.glass) + R(X0, G - (S - i) * SH + 10, BW, 2, c.frame);
      for (let j = 0; j <= N; j++) s += R(X0 + j * BAY - 1, G - S * SH, 2, (S - 1) * SH, c.frame);
      s += R(X0 + 14, G - SH, BW - 28, SH, c.glass, 'opacity=".55"');
      for (let j = 0; j <= N; j++) s += R(X0 + 14 + j * (BW - 28) / N - 2, G - SH, 4, SH, c.frame);
      return s;
    },
    "brutalist-architecture": (c) => {
      let s = R(X0 - 10, G - S * SH, BW + 20, S * SH - 34, c.wall);
      for (let i = 0; i < S - 1; i++) for (let j = 0; j < N; j++) {
        const x = X0 + j * BAY + 6, y = G - (S - i) * SH + 8;
        s += R(x, y, BAY - 12, 30, c.dark) + R(x - 2, y - 4, BAY - 8, 6, c.shadow) + R(x + (BAY - 12) / 2 - 2, y, 4, 30, c.shadow);
      }
      for (let i = 1; i < S; i++) s += R(X0 - 10, G - i * SH - 30, BW + 20, 4, c.shadow);
      for (const j of [0, 3, 5]) s += R(X0 + 10 + j * BAY - 4, G - 34, 26, 34, c.shadow);
      return s + R(X0 - 10, G - 34, BW + 20, 4, c.shadow);
    },
    "art-nouveau-architecture": (c) => {
      const top = G - S * SH;
      let s = R(X0, top, BW, S * SH, c.wall);
      for (let i = 0; i < S; i++) for (let j = 0; j < N; j++) {
        const x = X0 + j * BAY + 10 + (j % 2) * 3, y = top + i * SH + 8, w = BAY - 20 - (j % 2) * 6, h = 34;
        s += P(`M${x} ${y + h} V${y + 12} Q${x + w / 2} ${y - 12} ${x + w} ${y + 12} V${y + h} Z`, c.glass, `stroke="${c.iron}" stroke-width="2"`);
      }
      s += P(`M${X0 - 6} ${top + 14} Q${X0 + BW * .25} ${top - 22} ${X0 + BW * .5} ${top + 8} T${X0 + BW + 6} ${top + 14} V${top - 4} H${X0 - 6} Z`, c.roof);
      return s + R(X0, G - 8, BW, 8, c.iron);
    },
    "art-deco-architecture": (c) => {
      const top = G - S * SH;
      let s = R(X0, top, BW, S * SH, c.wall) + R(X0 + BAY, top - 30, BW - 2 * BAY, 30, c.wall) + R(X0 + 2 * BAY, top - 54, BW - 4 * BAY, 24, c.wall) + R(X0 + 2.6 * BAY, top - 72, BW - 5.2 * BAY, 18, c.wall);
      s += R(X0 + BW / 2 - 2, top - 108, 4, 36, c.gold);
      for (let j = 0; j <= N; j++) s += R(X0 + j * BAY - 4, top, 8, S * SH, c.pier);
      for (let i = 0; i < S - 1; i++) for (let j = 0; j < N; j++) s += R(X0 + j * BAY + 10, top + i * SH + 6, BAY - 20, SH - 12, c.glass) + R(X0 + j * BAY + 10, top + i * SH + SH - 6, BAY - 20, 6, c.gold);
      s += R(X0, G - SH, BW, SH, c.dark) + R(X0 + BW / 2 - 20, G - SH + 4, 40, SH - 4, c.gold);
      return s + P(`M${X0 + BW / 2 - 28} ${G - SH} l28 -14 l28 14 Z`, c.gold);
    },
    "bauhaus-architecture": (c) => {
      let s = R(X0, G - S * SH, 2 * BAY, S * SH, c.glass) + R(X0 + 2 * BAY, G - (S - 1) * SH, BAY, (S - 1) * SH, c.wall) + R(X0 + 3 * BAY, G - S * SH, 3 * BAY, S * SH, c.wall);
      for (let i = 0; i <= S; i++) s += R(X0, G - i * SH - 1, 2 * BAY, 2, c.frame);
      for (let j = 0; j <= 2; j++) s += R(X0 + j * BAY - 1, G - S * SH, 2, S * SH, c.frame);
      s += R(X0 + 2 * BAY, G - 3 * SH, BAY, 14, c.wall) + R(X0 + 2 * BAY, G - 3 * SH + 14, BAY, 3, c.red);
      for (let i = 0; i < S; i++) s += R(X0 + 3 * BAY + 8, G - (S - i) * SH + 12, 3 * BAY - 16, 20, c.glass) + R(X0 + 3 * BAY + 8, G - (S - i) * SH + 32, 3 * BAY - 16, 2, c.frame);
      return s + R(X0 + 5.6 * BAY, G - SH, 10, SH, c.red);
    },
    "mid-century-modern-architecture": (c) => {
      let s = "";
      for (let i = 0; i < S; i++) {
        const y = G - (S - i) * SH;
        s += R(X0 - 14, y, BW + 28, 7, c.dark) + R(X0, y + 7, BW, SH - 7, c.wall);
        for (let j = 0; j < N; j++) {
          if (j === 2 && i % 2 === 0) s += R(X0 + j * BAY, y + 7, BAY * 1.5, SH - 7, c.brick);
          else s += R(X0 + j * BAY + 3, y + 12, BAY - 6, SH - 15, j < 2 ? c.wood : c.glass);
        }
        for (let j = 0; j <= N; j++) s += R(X0 + j * BAY - 1.5, y + 7, 3, SH - 7, c.dark);
      }
      return s;
    },
    "postmodern-architecture": (c) => {
      const top = G - S * SH;
      let s = R(X0, top, BW, S * SH, c.wall) + R(X0, G - SH * 1.2, BW, SH * 1.2, c.base);
      for (let i = 0; i < S - 1; i++) for (let j = 0; j < N; j++) {
        const x = X0 + j * BAY + 12, y = top + 14 + i * SH, w = BAY - 24;
        s += R(x, y, w, 26, c.glass, `stroke="${c.trim}" stroke-width="3"`);
        if (i === 0) s += P(`M${x - 2} ${y - 2} h${w + 4} l-${(w + 4) / 2} -10 Z`, c.trim);
      }
      s += P(`M${X0 - 6} ${top} H${X0 + BW / 2 - 18} L${X0 + BW / 2 - 6} ${top - 24} H${X0 + BW / 2 + 6} L${X0 + BW / 2 + 18} ${top} H${X0 + BW + 6} V${top - 10} L${X0 + BW / 2} ${top - 54} L${X0 - 6} ${top - 10} Z`, c.trim);
      s += R(X0 + BW / 2 - 26, G - 70, 52, 70, c.accent);
      return s + P(`M${X0 + BW / 2 - 18} ${G - 8} V${G - 44} A18 18 0 0 1 ${X0 + BW / 2 + 18} ${G - 44} V${G - 8} Z`, c.trim);
    },
    "high-tech-architecture": (c) => {
      let s = R(X0, G - S * SH, BW, S * SH, c.glass, 'opacity=".5"');
      for (let i = 0; i <= S; i++) s += R(X0 - 4, G - i * SH - 2, BW + 8, 4, c.steel);
      for (let j = 0; j <= N; j++) s += R(X0 + j * BAY - 3, G - S * SH, 6, S * SH, c.steel);
      for (let j = 0; j < N; j++) for (let i = 0; i < S; i += 2) s += P(`M${X0 + j * BAY} ${G - i * SH} L${X0 + (j + 1) * BAY} ${G - (i + 1) * SH} M${X0 + (j + 1) * BAY} ${G - i * SH} L${X0 + j * BAY} ${G - (i + 1) * SH}`, "none", `stroke="${c.steel}" stroke-width="2"`);
      s += R(X0 + BW + 8, G - S * SH, 12, S * SH, c.blue) + R(X0 + BW + 24, G - S * SH, 12, S * SH, c.green) + R(X0 - 24, G - S * SH, 14, S * SH, c.red);
      s += P(`M${X0 - 10} ${G - SH} L${X0 + 60} ${G - S * SH + 10}`, "none", `stroke="${c.red}" stroke-width="6"`);
      for (let j = 0; j <= N; j += 2) s += R(X0 + j * BAY - 1, G - S * SH - 40, 2, 38, c.steel);
      return s + R(X0 - 4, G - S * SH - 20, BW + 8, 3, c.steel);
    },
    "deconstructivist-architecture": (c) => {
      const t = G - S * SH;
      let s = P(`M${X0} ${G} V${t + 40} L${X0 + 150} ${t} V${G} Z`, c.zinc) + P(`M${X0 + 130} ${G} L${X0 + 170} ${t - 20} L${X0 + BW - 30} ${t + 30} V${G} Z`, c.titanium) + P(`M${X0 + 220} ${G} L${X0 + BW + 30} ${t + 60} V${G} Z`, c.zinc);
      s += P(`M${X0 + 150} ${G - 10} L${X0 + 300} ${t - 30} L${X0 + 318} ${t - 4} L${X0 + 170} ${G - 10} Z`, c.zinc, 'opacity=".85"');
      for (let k = 0; k < 7; k++) s += P(`M${X0 + 30 + k * 40} ${G - 30 - (k % 3) * 40} l${46 + k * 3} -${20 + k * 4} l4 8 l-${46 + k * 3} ${20 + k * 4} Z`, c.dark);
      return s + P(`M${X0 + 150} ${t} L${X0 + 170} ${t - 20} L${X0 + 250} ${G} L${X0 + 232} ${G} Z`, c.red, 'opacity=".9"');
    }
    ,
    "nordic-modernism-architecture": (c) => {
      const top = G - S * SH;
      let s = R(X0, top + 40, BW, (S - 1) * SH, c.wall) + R(X0 - 6, top + 34, BW + 12, 6, c.roof);
      for (let i = 0; i < S - 1; i++) for (let j = 0; j < N; j++) s += R(X0 + j * BAY + 8, top + 56 + i * SH, BAY - 16, 24, c.glass) + R(X0 + j * BAY + 8, top + 56 + i * SH + 24, BAY - 16, 3, c.wood);
      s += R(X0 + 2 * BAY, top + 40, 2 * BAY, (S - 1) * SH, c.brick) + R(X0 + 2 * BAY + 10, G - SH + 6, 2 * BAY - 20, SH - 6, c.wood);
      for (let j = 0; j < 4; j++) s += R(X0 + 2 * BAY + 14 + j * 24, top + 56, 12, (S - 1) * SH - 30, c.glass, 'opacity=".8"');
      return s + R(X0 - 10, G - 6, BW + 20, 6, c.stone);
    },
    "parametricism-architecture": (c) => {
      const t = G - S * SH;
      let s = P(`M${X0 - 20} ${G} C${X0 - 10} ${G - 120} ${X0 + 60} ${t - 20} ${X0 + 160} ${t + 10} S${X0 + BW - 20} ${t + 90} ${X0 + BW + 20} ${G} Z`, c.skin);
      s += P(`M${X0 + 20} ${G} C${X0 + 40} ${G - 100} ${X0 + 100} ${t + 30} ${X0 + 180} ${t + 50} S${X0 + BW - 60} ${t + 120} ${X0 + BW - 30} ${G} Z`, c.shade, 'opacity=".55"');
      for (let k = 1; k < 10; k++) s += P(`M${X0 - 20 + k * 36} ${G} C${X0 + k * 30} ${G - 110 + k * 4} ${X0 + 50 + k * 26} ${t + 10 + k * 10} ${X0 + 100 + k * 28} ${t + 60 + k * 8}`, "none", `stroke="${c.glass}" stroke-width="${1 + k % 3}" opacity=".8"`);
      s += P(`M${X0 + 90} ${G} C${X0 + 100} ${G - 40} ${X0 + 150} ${G - 50} ${X0 + 200} ${G - 20} L${X0 + 220} ${G} Z`, c.glass);
      return s;
    }
  };
  const colour = {
    "gothic-architecture": { wall: "#B9B2A0", roof: "#5C6168", dark: "#4B4A4F", glass: "#3C6FB0" },
    "renaissance-architecture": { wall: "#E4D9BD", stone: "#F1ECE0", dark: "#4A4540", roof: "#B0603F" },
    "baroque-architecture": { wall: "#D8C9A8", stone: "#F1ECE0", dark: "#6F2A2E", gold: "#C9A227", dome: "#7FA3C7" },
    "neoclassical-architecture": { wall: "#E2DCCB", stone: "#F4F2EC", column: "#F4F2EC", dark: "#4F5660" },
    "beaux-arts-architecture": { wall: "#E4D9BD", stone: "#D6C9A6", column: "#F1ECE0", dark: "#4B515C", roof: "#4B515C", dome: "#6C9A8B", gold: "#C9A227" },
    "prairie-school-architecture": { brick: "#A0603C", stone: "#DDD1B4", wood: "#5E3F26", glass: "#6C7F3B", roof: "#8B2E1F" },
    "international-style-architecture": { wall: "#F4F3EE", frame: "#1C1C1C", glass: "#A9C1C9" },
    "brutalist-architecture": { wall: "#8C8A84", shadow: "#5F5D58", dark: "#4A332B" },
    "art-nouveau-architecture": { wall: "#E6DCC3", iron: "#5E8B7E", glass: "#D69A2D", roof: "#6B7A3A" },
    "art-deco-architecture": { wall: "#D9D0BC", pier: "#C9BFA6", dark: "#1E1E22", gold: "#C9A24B", glass: "#2F7F6A" },
    "bauhaus-architecture": { wall: "#F2F1EC", frame: "#1A1A1A", glass: "#9CB7C4", red: "#C0392B" },
    "mid-century-modern-architecture": { wall: "#EBE3D0", dark: "#2D2D2D", wood: "#9A6B3F", glass: "#A9C1C9", brick: "#B8553A" },
    "postmodern-architecture": { wall: "#E3A48F", base: "#B8553A", trim: "#F1E6C8", glass: "#2E8B8B", accent: "#2E8B8B" },
    "high-tech-architecture": { steel: "#9AA3A8", glass: "#B8D4DD", red: "#D62D20", blue: "#1B6EC2", green: "#1E9E5A" },
    "deconstructivist-architecture": { zinc: "#8A9097", titanium: "#B7BCC2", dark: "#141414", red: "#C8281E" },
    "nordic-modernism-architecture": { wall: "#F1EFE8", brick: "#9A5B3D", wood: "#D8B885", glass: "#A9C1C9", roof: "#5C8F7E", stone: "#6D6D68" },
    "parametricism-architecture": { skin: "#F4F4F2", shade: "#B8BCC2", glass: "#8FB4D1" }
  };

  // A style with no drawing function above still gets a neutral massing: a box on its own palette.
  const neutral = (c) => {
    let s = R(X0, G - S * SH, BW, S * SH, c.wall);
    for (let i = 0; i < S; i++) for (let j = 0; j < N; j++) s += R(X0 + j * BAY + 12, G - (S - i) * SH + 10, BAY - 24, SH - 20, c.glass);
    return s + R(X0, G - 6, BW, 6, c.dark);
  };
  const lum = (h) => { const n = parseInt(h.slice(1), 16); return 0.2126 * (n >> 16) + 0.7152 * ((n >> 8) & 255) + 0.0722 * (n & 255); };
  const fallbackColours = (d) => {
    const hs = d.materials.palette.map((p) => p.hex).sort((a, b) => lum(b) - lum(a));
    return { wall: hs[0], glass: hs[Math.floor(hs.length / 2)], dark: hs[hs.length - 1] };
  };

  // The generated front elevation of this style, with the lines that trace-elevations.ts found in its pixels.
  const elevations = fetch("previews/architecture-elevation/manifest.json").then((r) => (r.ok ? r.json() : { images: {} })).catch(() => ({ images: {} }));

  function elevation(d, box, ctx) {
    const k = d.composition, wwr = (d.facade.openings.match(/\d+(?:\s*to\s*\d+)?%/) || ["see record"])[0];
    elevations.then((m) => {
      if (ctx.current() !== d.id) return;
      const p = m.images?.[d.id];
      if (p?.lines) photo(d, p, k, wwr, box); else drawing(d, k, wwr, box);
    });
  }

  // Support lines on the render: the facade box and its diagonals, the floor lines, the bays, the axis and the horizon.
  function photo(d, p, k, wwr, box) {
    const l = p.lines, w = l.right - l.left, h = l.ground - l.cornice;
    const L = (x1, y1, x2, y2, c, a = "") => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${c}" stroke-width="2.5" ${a}/>`;
    const T = (x, y, t, c, a = "") => `<text x="${x}" y="${y}" fill="${c}" ${a}>${esc(t)}</text>`;
    box.querySelector(".ov-grid-t").hidden = false;
    let s = `<image href="previews/architecture-elevation/${esc(p.file)}" width="${l.width}" height="${l.height}"/>`;
    s += `<g class="ov-grid">${L(0, l.horizon, l.width, l.horizon, "var(--grid)", 'stroke-dasharray="2 8" opacity=".9"')}${T(l.width - 16, l.horizon - 10, "horizon", "var(--grid)", 'text-anchor="end"')}`;
    s += `<rect x="${l.left}" y="${l.cornice}" width="${w}" height="${h}" fill="none" stroke="var(--grid)" stroke-width="3"/>`;
    s += L(l.left, l.cornice, l.right, l.ground, "var(--grid)", 'stroke-dasharray="14 8" opacity=".8"') + L(l.right, l.cornice, l.left, l.ground, "var(--grid)", 'stroke-dasharray="14 8" opacity=".8"');
    s += l.floors.map((y) => L(l.left, y, l.right, y, "var(--grid)", 'opacity=".85"')).join("");
    s += T(l.left, l.cornice - 12, `facade ${(w / h).toFixed(2)} : 1 · ${l.floors.length + 1} ${l.floors.length ? "bands" : "band"}`, "var(--grid)") + `</g>`;
    s += `<g class="ov-bays">${l.bays.map((x) => L(x, l.cornice, x, l.ground, "var(--bay)", 'opacity=".75"')).join("")}`;
    s += l.bays.map((x) => L(x, l.ground + 6, x, l.ground + 22, "var(--bay)", 'stroke-width="3"')).join("");
    // The bay grid is the period of the traced edges, so it is approximate: the page prints no bay count.
    s += T(l.axis, l.ground + 52, `${l.bays.length ? "traced rhythm · " : ""}module ${k.rhythm_module_m} m`, "var(--bay)", 'text-anchor="middle"') + `</g>`;
    if (k.axis_count >= 1) s += `<g class="ov-axis">${L(l.axis, Math.max(8, l.crown - 30), l.axis, l.ground + 30, "var(--overlay)", 'stroke-width="3" stroke-dasharray="20 8 4 8"')}${T(16, l.height - 18, `${k.symmetry} · ${k.axis_count} ${k.axis_count === 1 ? "axis" : "axes"}`, "var(--overlay)")}</g>`;
    else s += T(16, l.height - 18, `${k.symmetry} · no axis`, "var(--overlay)", 'class="ov-axis"');
    const svg = box.querySelector("svg");
    svg.classList.add("photo");
    svg.setAttribute("viewBox", `0 0 ${l.width} ${l.height}`);
    svg.innerHTML = s;
    svg.setAttribute("aria-label", `${d.name}: a generated front elevation with its support lines`);
    box.querySelector("h3").textContent = "Front elevation, generated, with support lines";
    box.querySelector("figcaption").textContent = `${d.facade.composition} Window-to-wall: ${wwr}. Generated picture, not a real building (${p.model}, seed ${p.seed}); the lines are traced from its pixels.`;
  }

  // No render yet: the parametric drawing, 6 bays by 5 storeys, the same box for every style.
  function drawing(d, k, wwr, box) {
    const draw = styles[d.id] ?? neutral;
    const c = colour[d.id] ?? fallbackColours(d);
    let ov = "";
    const mx = X0 + BW / 2;
    if (k.axis_count >= 1) ov += `<g class="ov-axis"><line x1="${mx}" y1="14" x2="${mx}" y2="${G + 12}" stroke="var(--overlay)" stroke-width="2" stroke-dasharray="10 5 3 5"/><text x="8" y="${H - 8}" fill="var(--overlay)" font-weight="650">${k.symmetry} · ${k.axis_count} ${k.axis_count === 1 ? "axis" : "axes"}</text></g>`;
    else ov += `<text class="ov-axis" x="8" y="${H - 8}" fill="var(--overlay)" font-weight="650">${k.symmetry} · no axis</text>`;
    ov += `<g class="ov-bays">${Array.from({ length: N + 1 }, (_, j) => `<line x1="${X0 + j * BAY}" y1="${G}" x2="${X0 + j * BAY}" y2="${G + 14}" stroke="var(--bay)" stroke-width="2"/>`).join("")}<line x1="${X0}" y1="${G + 7}" x2="${X0 + BW}" y2="${G + 7}" stroke="var(--bay)"/><text x="${X0 + BW / 2}" y="${G + 30}" text-anchor="middle" fill="var(--bay)" font-weight="650">module ${k.rhythm_module_m} m</text></g>`;
    // The drawing has no regulating lines, so its toggle is hidden.
    box.querySelector(".ov-grid-t").hidden = true;
    const svg = box.querySelector("svg");
    svg.classList.remove("photo");
    svg.setAttribute("viewBox", `0 0 ${W} ${H}`);
    svg.innerHTML = `${R(0, 0, W, H, "#ecebe4")}${R(0, G, W, H - G, "#cfcdc3")}${draw(c)}${ov}`;
    svg.setAttribute("aria-label", `${d.name}: the same 6 by 5 bay front in this style`);
    box.querySelector("h3").textContent = "Front elevation, 6 bays by 5 storeys";
    box.querySelector("figcaption").textContent = `${d.facade.composition} Window-to-wall: ${wwr}. The 6 by 5 box is the same for every style.`;
  }

  function numbers(d) {
    const k = d.composition || {}, f = d.facade || {};
    const wwr = (String(f.openings ?? "").match(/\d+(?:\s*to\s*\d+)?%/) || ["see record"])[0];
    const rows = [["Symmetry", k.symmetry], ["Axes", k.axis_count], ["Rhythm module", k.rhythm_module_m != null ? `${k.rhythm_module_m} m` : null], ["Window-to-wall", wwr],
      ["Building types", (d.building_types || []).join(", ")]].filter(([, v]) => v != null && v !== "");
    return `<dl class="enc-facts">${rows.map(([a, b]) => `<dt>${a}</dt><dd>${esc(b)}</dd>`).join("")}</dl>`;
  }

  let off = new Set();
  return {
    id: "front", label: "Front elevation", at: "top",
    lede: "The same front, drawn in the style, with its composition on top. A sketch from the style record, not a picture of a real building.",
    render(el, d, ctx) {
      if (!el.querySelector(".af")) {
        el.innerHTML = `<div class="af"><figure class="enc-card"><h3></h3><svg viewBox="0 0 480 360" role="img"></svg><figcaption></figcaption></figure>
          <div class="enc-card"><h3>Overlays</h3><div class="enc-toggles" role="group" aria-label="Overlays">
            <label><input type="checkbox" data-ov="axis" checked><span class="sw" style="background:var(--overlay)"></span>Axis and symmetry</label>
            <label><input type="checkbox" data-ov="bays" checked><span class="sw" style="background:var(--bay)"></span>Rhythm module</label>
            <label class="ov-grid-t" hidden><input type="checkbox" data-ov="grid" checked><span class="sw" style="background:var(--grid)"></span>Regulating lines</label>
          </div><h3 style="margin-top:20px">Key numbers</h3><div class="af-n"></div></div></div>`;
        const af = el.querySelector(".af");
        af.addEventListener("change", (e) => {
          const b = e.target.closest("[data-ov]");
          if (!b) return;
          b.checked ? off.delete(b.dataset.ov) : off.add(b.dataset.ov);
          af.dataset.off = [...off].join(" ");
        });
      }
      const box = el.querySelector(".af");
      box.querySelector(".af-n").innerHTML = numbers(d);
      if (d.composition && d.facade) elevation(d, box, ctx);
    },
  };
})();
