/**
 * Compiles every style into skills/<id>/SKILL.md (and tokens.css and a visual pack where the
 * domain has them), then writes the router: skills/SKILL_INDEX.md and skills/index.json.
 * Output is deterministic: the same data gives the same bytes.
 */
import Handlebars from "handlebars";
import { existsSync, readFileSync, readdirSync, rmSync } from "node:fs";
import { join } from "node:path";
import { ROOT, loadAll, loadPrinciples, principleRefs, readJson, write, type Domain, type Style } from "./lib.js";
import { ICON_NAMES, derivedTokens, heroSvg, iconSprite, patternSvg, typeTokens, type IconPack, type Visual } from "./pack.js";

const { domains, eras, styles } = loadAll();
const byId = new Map(styles.map((s) => [s.id, s]));
const principles = new Map(loadPrinciples().map((p) => [p.principle.id, p.principle]));

const graphPath = join(ROOT, "graph", "lineage.json");
if (!existsSync(graphPath)) {
  console.error("error graph/lineage.json is missing. Run `npm run build:graph` first.");
  process.exit(1);
}
type Adjacency = Record<string, Record<string, string[]> & { nearest_by_vector: { id: string; distance: number }[] }>;
const adjacency = readJson<{ adjacency: Adjacency }>(graphPath).adjacency;
if (styles.some((s) => !adjacency[s.id]) || Object.keys(adjacency).length !== styles.length) {
  console.error("error graph/lineage.json is stale. Run `npm run build:graph` first.");
  process.exit(1);
}

// ── markdown helpers ────────────────────────────────────────────────────────
const LABELS: Record<string, string> = {
  duration_ms: "Duration (ms)",
  native: "Born on screen",
  hex: "Hex",
  cct_k: "Colour temperature (K)",
  cct_evening_k: "Evening colour temperature (K)",
  cri_min: "Minimum CRI",
  scene_3d: "3D scene",
};
/** A key that ends in a unit takes the unit in brackets: `seat_height_cm` → "Seat height (cm)". */
const UNITS: Record<string, string> = { cm: "cm", pct: "%", k: "K", lux: "lux", ms: "ms" };
const human = (key: string) => {
  if (LABELS[key]) return LABELS[key];
  const m = key.match(/^(.+)_(cm|pct|k|lux|ms)$/);
  const base = (m ? m[1] : key).replace(/_/g, " ").replace(/^./, (c) => c.toUpperCase());
  return m ? `${base} (${UNITS[m[2]]})` : base;
};
const cell = (v: unknown) => String(v ?? "").replace(/\|/g, "\\|");
const link = (id: string) => `[\`${id}\`](../${id}/SKILL.md)`;

/** Renders one facet object as markdown. It knows value shapes, not field names, so a new domain needs no new code. */
function renderFacet(facet: Record<string, unknown>): string {
  const lines: string[] = [];
  const tables: string[] = [];
  for (const [key, value] of Object.entries(facet)) {
    const label = human(key);
    if (Array.isArray(value) && !value.length) continue;
    if (typeof value === "string" || typeof value === "number") lines.push(`- **${label}:** ${value}`);
    else if (typeof value === "boolean") lines.push(`- **${label}:** ${value ? "yes" : "no — the values here translate a print style for screen"}`);
    else if (Array.isArray(value) && value.every((v) => typeof v === "string")) {
      if (value.every((v) => (v as string).length <= 60)) lines.push(`- **${label}:** ${value.join(" · ")}`);
      else lines.push(`- **${label}:**`, ...value.map((v) => `  - ${v}`));
    } else if (Array.isArray(value) && value.length) {
      const cols = [...new Set(value.flatMap((row) => Object.keys(row as object)))];
      tables.push(
        [
          `**${label}**`,
          "",
          `| ${cols.map(human).join(" | ")} |`,
          `|${cols.map(() => "---").join("|")}|`,
          ...value.map((row) => `| ${cols.map((c) => (c === "hex" ? `\`${(row as any)[c]}\`` : cell((row as any)[c]))).join(" | ")} |`),
        ].join("\n"),
      );
    }
  }
  return [lines.join("\n"), ...tables].filter(Boolean).join("\n\n");
}

const bar = (n: number) => "■".repeat(n) + "□".repeat(5 - n);

// ── tokens ──────────────────────────────────────────────────────────────────
const visualOf = (style: Style) => style.visual as Visual | undefined;
/** The authored tokens of a style, then the tokens that the compiler derives: legible text colours for each field, and type values. */
function cssTokens(style: Style): [string, string][] {
  const css = style.tokens!.css;
  const v = visualOf(style);
  return Object.entries({ ...css, ...derivedTokens(css), ...(v ? typeTokens(v) : {}) });
}
const iconPacks = new Map<string, IconPack>();
function iconPack(style: Style): IconPack {
  const id = visualOf(style)!.icon.pack.id;
  if (!iconPacks.has(id)) {
    const file = join(ROOT, "icons", "packs", `${id}.json`);
    if (!existsSync(file)) throw new Error(`${style.id}: visual.icon.pack.id "${id}" has no file in icons/packs/. Add it to icons/sources.json and run "npm run icons".`);
    const pack = JSON.parse(readFileSync(file, "utf8")) as IconPack;
    const missing = ICON_NAMES.filter((n) => !pack.icons[n]);
    if (missing.length) throw new Error(`icons/packs/${id}.json has no icon for: ${missing.join(", ")}`);
    iconPacks.set(id, pack);
  }
  return iconPacks.get(id)!;
}
const iconRules = JSON.parse(readFileSync(join(ROOT, "icons", "principles.json"), "utf8")) as { title: string; intro: string; rules: { rule: string; test: string }[] };
const ACCENT: Record<string, string> = {
  weight: "weight: a heavier word is the accent, so the steps between the weights are clear",
  size: "size: a larger word is the accent, so the weights stay few",
  case: "case and tracking: an upper-case label is the accent, so the weights stay few",
  colour: "colour: one coloured word or field is the accent, so the weights stay quiet",
};
function weightView(v: Visual) {
  const t = v.type;
  const set = [...new Set([t.display_weight, t.subhead_weight, t.body_weight, t.strong_weight, t.label_weight])].sort((a, b) => a - b);
  const step = t.display_weight - t.body_weight;
  return {
    list: set.join(", "),
    count: set.length,
    step: step === 0 ? "The display has the weight of the body, so size and face carry the hierarchy" : step > 0 ? `The display is ${step} heavier than the body` : `The display is ${-step} lighter than the body, so size carries the hierarchy`,
    accent: ACCENT[t.accent],
  };
}
const PACK_FILES = [
  { file: "hero.svg", what: "Hero plate, 800 by 600. An abstract picture in the visual language of the style." },
  { file: "pattern.svg", what: "Pattern tile, 80 by 80. It repeats in both directions." },
  { file: "icons.svg", what: `Icon sprite: ${ICON_NAMES.join(", ")}.` },
];

// ── SKILL.md ────────────────────────────────────────────────────────────────
Handlebars.registerHelper("json", (v: unknown) => JSON.stringify(v));
Handlebars.registerHelper("inc", (i: number) => i + 1);
const template = Handlebars.compile(readFileSync(join(ROOT, "schema", "skill-template.hbs"), "utf8"), { noEscape: true });

function view(style: Style, domain: Domain) {
  const adj = adjacency[style.id];
  const sourcePath = `data/${style.domain}/styles/${style.id}.json`;
  const relation = (label: string, ids: string[]) => (ids.length ? [{ label, links: ids.map(link).join(", ") }] : []);
  return {
    id: style.id,
    domain: style.domain,
    domain_name: domain.name,
    era_id: style.era_id,
    era_name: eras.get(`${style.domain}/${style.era_id}`)!.name,
    name: style.name,
    aliases: style.aliases.join(", "),
    period: style.time_period.label,
    summary: style.summary,
    thesis: style.philosophy.core_thesis,
    task: domain.task,
    description:
      `Apply the ${style.name} style (${style.time_period.label}) when ${domain.task}. ` +
      `Load when the user asks for: ${style.agent.triggers.slice(0, 6).join(", ")}.`,
    triggers: style.agent.triggers,
    trigger_line: style.agent.triggers.map((t) => `"${t}"`).join(", "),
    use_cases: style.agent.use_cases.join(", "),
    avoid_when: style.agent.avoid_when,
    principles: style.philosophy.design_principles,
    anti_patterns: style.philosophy.anti_patterns.map((p) => p.replace(/[.\s]+$/, "")),
    vectors: domain.vectors.map((v) => ({ ...v, score: style.vectors[v.key], bar: bar(style.vectors[v.key]) })),
    facets: domain.facets.map((f) => ({ title: f.title, body: renderFacet(style[f.key] as Record<string, unknown>) })),
    tokens: style.tokens && {
      css: cssTokens(style).map(([name, value]) => ({ name, value })),
      tailwind: style.tokens.tailwind,
    },
    pack: visualOf(style) && {
      files: PACK_FILES,
      icon: visualOf(style)!.icon,
      type: visualOf(style)!.type,
      weights: weightView(visualOf(style)!),
      layout: visualOf(style)!.layout,
      first_icon: ICON_NAMES[0],
      icon_pack: { ...iconPack(style), why: visualOf(style)!.icon.pack.why },
      icon_rules: iconRules,
    },
    composition_principles: principleRefs(style).map((id) => {
      const p = principles.get(id)!;
      return { id, name: p.name, definition: p.definition, measures: p.measures.map((m) => `${m.measure} (${m.unit}): ${m.reference}`).join("; ") };
    }),
    primer: style.primer && {
      positive: style.primer.positive.join(", "),
      negative: style.primer.negative.join(", "),
      canonical_works: style.primer.canonical_works,
    },
    modifiers: style.agent.modifiers.map((m) => ({ ...m, toward_name: byId.get(m.toward)!.name })),
    relations: [
      ...relation("Came from (go here for a more orthodox version)", adj.evolved_from),
      ...relation("Led to (go here for a newer version)", adj.evolved_into),
      ...relation("Rejects (the opposite pole; do not blend)", adj.rebelled_against),
      ...relation("Was rejected by", adj.provoked),
      ...relation("Mixes well with", adj.hybridized_with),
      ...relation("Kin in another domain", adj.echoes),
      ...relation("Nearest by vector profile", adj.nearest_by_vector.map((n) => n.id)),
    ],
    emotion: {
      target_response: style.emotion.target_response,
      keywords: style.emotion.keywords.join(", "),
      archetypes: style.emotion.brand_archetypes.join(", "),
    },
    sources: ((style.sources as { title: string; url?: string }[] | undefined) ?? []).map((s) =>
      s.url ? `[${s.title}](${s.url})` : s.title,
    ),
    source_path: sourcePath,
  };
}

// ── tokens.css ──────────────────────────────────────────────────────────────
function tokensCss(style: Style): string {
  const sel = `[data-style="${style.id}"]`;
  const vars = cssTokens(style).map(([k, v]) => `  ${k}: ${v};`).join("\n");
  return `/*
 * ${style.name} — tokens
 * Generated from data/${style.domain}/styles/${style.id}.json by design-ontology. Do not edit.
 * Use: put data-style="${style.id}" on <html> or on any container.
 */
${sel} {
${vars}
}

/*
 * Reference rules. They show how the tokens combine; replace them with your own components.
 * Text takes the --color-on-* token of the field below it. Do not put --color-text on a field
 * other than the one the style wrote it for.
 */
${sel} {
  background: var(--color-bg);
  color: var(--color-on-bg);
  font-family: var(--font-sans);
  font-size: var(--body-size, 16px);
  font-weight: var(--body-weight, 400);
  line-height: var(--body-leading, 1.5);
}
${sel} :where(h1, h2, h3) {
  font-family: var(--font-display);
  font-weight: var(--display-weight, 700);
  letter-spacing: var(--display-tracking, 0);
  line-height: var(--display-leading, 1.1);
  text-transform: var(--display-case, none);
}
${sel} :where(h3) {
  font-weight: var(--subhead-weight, 600);
}
${sel} :where(strong, b) {
  font-weight: var(--strong-weight, 700);
}
${sel} :where(button, label, .label) {
  font-weight: var(--label-weight, 600);
}
${sel} :where(.surface) {
  padding: calc(var(--space-unit) * 3);
  background: var(--color-surface);
  color: var(--color-on-surface);
  border: var(--border-width) solid var(--color-border);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-elevation);
  -webkit-backdrop-filter: var(--backdrop-filter);
  backdrop-filter: var(--backdrop-filter);
}
${sel} :where(.action) {
  padding: calc(var(--space-unit) * 1.5) calc(var(--space-unit) * 3);
  background: var(--color-primary);
  color: var(--color-on-primary);
  border: var(--border-width) solid var(--color-border);
  border-radius: var(--border-radius);
  font: inherit;
  font-weight: var(--label-weight, 600);
  transition: all var(--duration) var(--ease);
}
${sel} :where(.muted) {
  color: var(--color-muted-on-bg);
}
${sel} :where(.surface .muted) {
  color: var(--color-muted-on-surface);
}
${sel} :where(a:not(.action)) {
  color: var(--color-link);
}
${sel} :where(.surface a:not(.action)) {
  color: var(--color-link-on-surface);
}
${sel} :where(.icon) {
  width: 1.5em;
  height: 1.5em;
  --icon-knock: var(--color-bg);
}
`;
}

// ── write ───────────────────────────────────────────────────────────────────
// Remove skill folders whose style no longer exists, so that the output has no orphans.
const skillsDir = join(ROOT, "skills");
if (existsSync(skillsDir))
  for (const entry of readdirSync(skillsDir, { withFileTypes: true }))
    if (entry.isDirectory() && !byId.has(entry.name)) rmSync(join(skillsDir, entry.name), { recursive: true });

for (const style of styles) {
  const domain = domains.find((d) => d.id === style.domain)!;
  write(`skills/${style.id}/SKILL.md`, template(view(style, domain)).replace(/\n{3,}/g, "\n\n"));
  if (style.tokens) write(`skills/${style.id}/tokens.css`, tokensCss(style));
  const v = visualOf(style);
  if (v) {
    write(`skills/${style.id}/pack/hero.svg`, heroSvg(style, v));
    write(`skills/${style.id}/pack/pattern.svg`, patternSvg(style, v));
    write(`skills/${style.id}/pack/icons.svg`, iconSprite(style, v, iconPack(style)));
  }
}

// ── router ──────────────────────────────────────────────────────────────────
const index: string[] = [
  "# Skill index",
  "",
  "Read this file first. It is the router: one row for each style skill. Pick a row, then load `skills/<id>/SKILL.md`. Load one skill at a time.",
  "",
  "How to pick:",
  "",
  "1. Match the words of the user against **Load when**.",
  "2. If there is no match, match the product against **Good for** and the mood against **Feels**.",
  "3. If two rows match, compare the vector scores with the request (\"minimal\" = low ORN, \"3D\" = high DIM) and take the nearer row.",
  "4. If the user asks for a variation of a style (\"softer\", \"bolder\"), load that style and follow its \"Lineage fallbacks\" section.",
  "",
  "A machine-readable copy of this table is in [`index.json`](./index.json). The relations between styles are in [`../graph/lineage.json`](../graph/lineage.json).",
  "",
];

for (const domain of domains) {
  const own = styles.filter((s) => s.domain === domain.id);
  if (!own.length) continue;
  index.push(`## ${domain.name}`, "");
  index.push(`Vector axes, each 1 to 5: ${domain.vectors.map((v) => `**${v.abbr}** ${v.label.toLowerCase()} (${v.low} → ${v.high})`).join(" · ")}.`, "");
  index.push(`| Skill | Era | Load when | Good for | Feels | ${domain.vectors.map((v) => v.abbr).join(" | ")} |`);
  index.push(`|---|---|---|---|---|${domain.vectors.map(() => ":-:").join("|")}|`);
  for (const s of own) {
    index.push(
      `| [\`${s.id}\`](./${s.id}/SKILL.md) | ${cell(eras.get(`${s.domain}/${s.era_id}`)!.name)} | ${cell(s.agent.triggers.slice(0, 5).join(", "))} | ${cell(
        s.agent.use_cases.slice(0, 3).join(", "),
      )} | ${cell(s.emotion.keywords.slice(0, 3).join(", "))} | ${domain.vectors.map((v) => s.vectors[v.key]).join(" | ")} |`,
    );
  }
  index.push("");
}
index.push("---", "", "Generated by `scripts/compile-skills.ts`. Do not edit this file; change the data and run `npm run build`.");
write("skills/SKILL_INDEX.md", index.join("\n"));

write(
  "skills/index.json",
  JSON.stringify(
    {
      $comment: "Generated by scripts/compile-skills.ts. Do not edit by hand.",
      skills: styles.map((s) => ({
        id: s.id,
        name: s.name,
        domain: s.domain,
        era: s.era_id,
        period: s.time_period.label,
        thesis: s.philosophy.core_thesis,
        summary: s.summary,
        path: `skills/${s.id}/SKILL.md`,
        tokens: s.tokens ? `skills/${s.id}/tokens.css` : null,
        pack: s.visual ? `skills/${s.id}/pack/` : null,
        visual: s.visual ?? null,
        triggers: s.agent.triggers,
        use_cases: s.agent.use_cases,
        emotion: s.emotion.keywords,
        archetypes: s.emotion.brand_archetypes,
        vectors: s.vectors,
      })),
    },
    null,
    2,
  ),
);

console.log(`skills/ · ${styles.length} SKILL.md · ${styles.filter((s) => s.tokens).length} tokens.css · SKILL_INDEX.md · index.json`);
