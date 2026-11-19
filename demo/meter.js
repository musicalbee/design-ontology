// Vector meter: the 1-to-5 profile of a style, drawn with the tokens of the style around it.
//
//   VectorMeter.html(axes, vectors)  →  HTML for a list of meters
//   axes: [{ key, label, low, high }], vectors: { key: 1..5 }
//
// The meter has no colours of its own. It reads the 16 style tokens (tokens.css) of the nearest
// [data-style] container: fill = --color-primary, track = a 10% tint of the text colour with a 55% edge, edge colour = --color-border, corners = --border-radius,
// edge = --border-width, depth = --shadow-elevation, motion = --duration and --ease. Outside a style
// it falls back to neutral values, so the same component works on every demo page.
(() => {
  const css = `
  .vm { --vm-ink: var(--color-on-surface, var(--color-on-bg, #1d1d1f)); --vm-ground: var(--color-surface, var(--color-bg, #fff));
    display: grid; gap: calc(var(--space-unit, 8px) * 1.25); margin: 0; }
  .vm-row { display: grid; grid-template-columns: minmax(7.5em, 1fr) minmax(96px, 1.3fr); column-gap: calc(var(--space-unit, 8px) * 1.5); align-items: center; }
  .vm-label { color: var(--vm-ink); font-weight: var(--label-weight, 600); font-size: .85em; line-height: 1.25; }
  .vm-track { display: grid; grid-template-columns: repeat(5, 1fr); gap: max(2px, calc(var(--space-unit, 8px) * .375));
    height: max(8px, calc(var(--space-unit, 8px) * 1.25)); }
  .vm-seg { border-radius: min(var(--border-radius, 2px), 999px);
    background: color-mix(in srgb, var(--vm-ink) 10%, var(--vm-ground));
    border: var(--border-width, 0px) solid var(--color-border, transparent);
    box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--vm-ink) 55%, var(--vm-ground));
    transition: background-color var(--duration, 200ms) var(--ease, ease), box-shadow var(--duration, 200ms) var(--ease, ease); }
  .vm-seg.on { background: var(--vm-on, var(--color-primary, #1d1d1f)); border-color: var(--color-on-bg, var(--color-primary, #1d1d1f));
    box-shadow: var(--shadow-elevation, none); }
  .vm-poles { grid-column: 2; display: flex; justify-content: space-between; gap: 1em; margin-top: 2px;
    font-size: .75em; line-height: 1.25; color: color-mix(in srgb, var(--vm-ink) 80%, var(--vm-ground)); }
  .vm-poles span:last-child { text-align: right; }
  @media (prefers-reduced-motion: reduce) { .vm-seg { transition: none; } }`;
  const style = document.createElement("style");
  style.textContent = css;
  document.head.append(style);

  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  const row = (a, v, poles) => {
    const n = Math.max(0, Math.min(5, Math.round(v ?? 0)));
    const segs = [1, 2, 3, 4, 5].map((k) => `<span class="vm-seg${k <= n ? " on" : ""}${k === n ? " top" : ""}"></span>`).join("");
    return `<div class="vm-row"><span class="vm-label">${esc(a.label)}</span>` +
      `<span class="vm-track" role="meter" aria-valuemin="1" aria-valuemax="5" aria-valuenow="${n}" aria-label="${esc(a.label)}: ${n} of 5, from ${esc(a.low)} to ${esc(a.high)}" title="${esc(a.low)} → ${esc(a.high)}">${segs}</span>` +
      (poles ? `<span class="vm-poles"><span>${esc(a.low)}</span><span>${esc(a.high)}</span></span>` : "") + `</div>`;
  };
  // Contrast guard (WCAG 1.4.11): a filled segment needs 3:1 against the ground of the card. A light
  // style colour (amber, pastel) on a light card fails, so fit() mixes it toward the text colour
  // until it passes. The hue of the style stays; only the lightness moves.
  const rgb = (c) => {
    const m = c.match(/rgba?\(([^)]+)\)/), f = c.match(/color\(srgb ([^)]+)\)/);
    const v = m ? m[1].split(/[ ,/]+/).map(Number) : f ? f[1].split(/[ /]+/).map((x) => Number(x) * 255) : null;
    return v && (v[3] ?? 1) > 0 ? v.slice(0, 3) : null;
  };
  const lum = ([r, g, b]) => [r, g, b].map((x) => { x /= 255; return x <= 0.03928 ? x / 12.92 : ((x + 0.055) / 1.055) ** 2.4; })
    .reduce((a, x, i) => a + x * [0.2126, 0.7152, 0.0722][i], 0);
  const ratio = (a, b) => { const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p); return (x + 0.05) / (y + 0.05); };
  const ground = (el) => { for (let n = el; n; n = n.parentElement) { const c = rgb(getComputedStyle(n).backgroundColor); if (c) return c; } return [255, 255, 255]; };
  const fit = (root) => {
    if (!root.querySelector(".vm")) return;
    root.style.removeProperty("--vm-on");
    // Read the colours from a probe: the segments animate, so their computed background can be mid-transition.
    const probe = document.createElement("span");
    probe.style.cssText = "position:absolute;visibility:hidden;color:var(--color-primary, #1d1d1f);background:var(--vm-ink)";
    root.querySelector(".vm").append(probe);
    const cs = getComputedStyle(probe), fill = rgb(cs.color), ink = rgb(cs.backgroundColor), bg = ground(root);
    probe.remove();
    if (!fill || !ink || ratio(fill, bg) >= 3) return;
    for (let t = 0.1; t <= 1.001; t += 0.1) {
      const mix = fill.map((c, i) => Math.round(c * (1 - t) + ink[i] * t));
      if (ratio(mix, bg) >= 3 || t > 0.95) { root.style.setProperty("--vm-on", `rgb(${mix.join(" ")})`); return; }
    }
  };
  window.VectorMeter = {
    html: (axes, vectors, { poles = false } = {}) => `<div class="vm">${axes.map((a) => row(a, vectors?.[a.key], poles)).join("")}</div>`,
    fit,
  };
})();
