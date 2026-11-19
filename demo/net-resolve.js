// The object-net resolver for the demo pages. It applies the same rules as resolveNet in
// scripts/net.ts, and scripts/net.test.ts runs both on each net to prove that they agree.
// NetResolve.resolve(net, values, { knobs, styles, roomEnd }) gives one cell for each category:
// the first of [style, ...alternates] that holds the knob values and the period of the room.
(function () {
  // A knob value outside the range of a style (checkValue in scripts/permute.ts).
  function problems(knob, range, v) {
    const out = [];
    if (knob.kind === "enum") {
      if (range?.options && !range.options.map((o) => String(o).toUpperCase()).includes(String(v).toUpperCase())) out.push(`${knob.label} ${v} is not one of ${range.options.join(", ")}`);
    } else {
      if (range?.min !== undefined && v < range.min) out.push(`${knob.label} ${v} is below ${range.min}`);
      if (range?.max !== undefined && v > range.max) out.push(`${knob.label} ${v} is above ${range.max}`);
    }
    return out;
  }
  const rangeProblems = (knobs, style, values) => knobs.flatMap((k) => (values[k.key] === undefined ? [] : problems(k, style.permutations?.[k.key], values[k.key])));
  // The period-room rule: at an era blend below 0.5, a style that starts after the room ends cannot furnish it.
  const periodProblem = (style, end, v) => (Number(v.era_blend) < 0.5 && style.time_period.start > end ? `period room: ${style.name} starts in ${style.time_period.start}, after the room ends (${end})` : null);

  function resolve(net, values, { knobs, styles, roomEnd = 9999 }) {
    return net.categories.map((cell) => {
      const v = { ...net.knobs, ...(cell.knobs ?? {}), ...values };
      const reasons = [];
      for (const [i, id] of [cell.style, ...cell.alternates].entries()) {
        const s = styles.get(id);
        if (!s) { reasons.push(`unknown style ${id}`); continue; }
        const ranges = rangeProblems(knobs, s, v);
        const late = periodProblem(s, roomEnd, v);
        if (i === 0) reasons.push(...ranges);
        if (late) reasons.push(late);
        if (ranges.length || late) continue;
        if (i === 0) return { cell, style: id, via: "main", objects: cell.objects };
        const { category: _c, ...row } = s.signatures.objects.find((r) => r.category === cell.category);
        return { cell, style: id, via: "alternate", objects: [row] };
      }
      return { cell, style: cell.style, via: "none", reason: reasons.join("; "), objects: cell.objects };
    });
  }

  globalThis.NetResolve = { resolve };
})();
