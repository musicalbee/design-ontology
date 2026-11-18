// Vector meter: the 1-to-5 profile of a style, drawn with the tokens of the style around it.
//
//   VectorMeter.html(axes, vectors)  →  HTML for a list of meters
//   axes: [{ key, label, low, high }], vectors: { key: 1..5 }
//
// The meter has no colours of its own. It reads the 16 style tokens (tokens.css) of the nearest
// [data-style] container: fill = --color-primary, track = a 12% tint of the text colour, edge colour = --color-border, corners = --border-radius,
// edge = --border-width, depth = --shadow-elevation, motion = --duration and --ease. Outside a style
// it falls back to neutral values, so the same component works on every demo page.
(() => {
  const css = `
  .vm { display: grid; gap: calc(var(--space-unit, 8px) * 1.25); margin: 0; }
  .vm-row { display: grid; grid-template-columns: minmax(7.5em, 1fr) minmax(96px, 1.3fr); column-gap: calc(var(--space-unit, 8px) * 1.5); align-items: center; }
  .vm-label { font-weight: var(--label-weight, 600); font-size: .85em; line-height: 1.25; }
  .vm-track { display: grid; grid-template-columns: repeat(5, 1fr); gap: max(2px, calc(var(--space-unit, 8px) * .375));
    height: max(8px, calc(var(--space-unit, 8px) * 1.25)); }
  .vm-seg { border-radius: min(var(--border-radius, 2px), 999px);
    background: color-mix(in srgb, var(--color-on-surface, var(--color-on-bg, #1d1d1f)) 12%, var(--color-surface, var(--color-bg, #fff)));
    border: var(--border-width, 0px) solid var(--color-border, transparent);
    transition: background-color var(--duration, 200ms) var(--ease, ease), box-shadow var(--duration, 200ms) var(--ease, ease); }
  .vm-seg.on { background: var(--color-primary, #1d1d1f); border-color: var(--color-on-bg, var(--color-primary, #1d1d1f));
    box-shadow: var(--shadow-elevation, none); }
  .vm-poles { grid-column: 2; display: flex; justify-content: space-between; gap: 1em; margin-top: 2px;
    font-size: .72em; line-height: 1.2; color: var(--color-muted-on-surface, var(--color-muted, #5d5d66)); }
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
  window.VectorMeter = {
    html: (axes, vectors, { poles = false } = {}) => `<div class="vm">${axes.map((a) => row(a, vectors?.[a.key], poles)).join("")}</div>`,
  };
})();
