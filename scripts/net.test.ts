/** Tests of the object-net resolver (scripts/net.ts). Run: npm test */
import { test } from "node:test";
import assert from "node:assert/strict";
import { loadNetContext, loadNets, resolveNet } from "./net.js";

const ctx = loadNetContext();
const nets = loadNets();
const net = (id: string) => nets.find((n) => n.slug === id)!.net;

test("a period room takes no style that starts after the room ends", () => {
  // At era_blend 0.2 the georgian room ends in 1830. A low ornament level puts the main style out of range.
  const cells = resolveNet(ctx, net("georgian-interior"), { ornament_level: 0.1 });
  assert.ok(!cells.some((c) => c.style === "scandinavian-modern-product"), "scandinavian-modern-product (1930) must not furnish a georgian room");
  for (const c of cells) if (c.via !== "none") assert.ok(ctx.industrial.get(c.style)!.time_period.start <= 1830, `${c.category}: ${c.style}`);
  assert.ok(cells.some((c) => c.via === "none" && /period room/.test(c.reason ?? "")), "a cell without a period style gives the reason");
});

test("the period rule holds in every net for each single knob move", () => {
  for (const { slug, net: n } of nets) {
    const end = ctx.interiors.get(n.interior)!.time_period.end ?? 9999;
    for (const k of ctx.domain.knobs) {
      const moves = k.kind === "enum" ? (k.options ?? []) : [k.min, k.max];
      for (const v of moves) {
        if (v === undefined) continue;
        for (const c of resolveNet(ctx, n, { [k.key]: v })) {
          const blend = Number(k.key === "era_blend" ? v : ({ ...n.knobs, ...(n.categories.find((x) => x.category === c.category)!.knobs ?? {}) }).era_blend);
          if (c.via !== "none" && blend < 0.5)
            assert.ok(ctx.industrial.get(c.style)!.time_period.start <= end, `${slug} ${k.key}=${v} ${c.category}: ${c.style}`);
        }
      }
    }
  }
});

test("a modern room still moves to its alternates", () => {
  const cells = resolveNet(ctx, net("japandi-interior"), { finish_gloss: 60 });
  assert.ok(cells.some((c) => c.via === "alternate"));
});
