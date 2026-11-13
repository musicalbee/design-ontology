/**
 * Compiles every style into skills/<id>/SKILL.md (and tokens.css where the domain has
 * tokens), then writes the router: skills/SKILL_INDEX.md and skills/index.json.
 * Output is deterministic: the same data gives the same bytes.
 */
import Handlebars from "handlebars";
import { existsSync, readFileSync, readdirSync, rmSync } from "node:fs";
import { join } from "node:path";
import { ROOT, loadAll, readJson, write, type Domain, type Style } from "./lib.js";

const { domains, eras, styles } = loadAll();
const byId = new Map(styles.map((s) => [s.id, s]));

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
const LABELS: Record<string, string> = { duration_ms: "Duration (ms)", native: "Born on screen", hex: "Hex" };
const human = (key: string) => LABELS[key] ?? key.replace(/_/g, " ").replace(/^./, (c) => c.toUpperCase());
const cell = (v: unknown) => String(v ?? "").replace(/\|/g, "\\|");
const link = (id: string) => `[\`${id}\`](../${id}/SKILL.md)`;

/** Renders one facet object as markdown. It knows value shapes, not field names, so a new domain needs no new code. */
function renderFacet(facet: Record<string, unknown>): string {
  const lines: string[] = [];
  const tables: string[] = [];
  for (const [key, value] of Object.entries(facet)) {
    const label = human(key);
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

// ── derived tokens ──────────────────────────────────────────────────────────
const HEX = /^#[0-9a-f]{6}$/i;
function luminance(hex: string): number {
  const [r, g, b] = [1, 3, 5].map((i) => {
    const c = parseInt(hex.slice(i, i + 2), 16) / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}
const contrast = (a: string, b: string) => {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
};
/** The tokens of a style, plus --color-on-primary when the author did not set it: the most legible of text, bg, black, white. */
function cssTokens(style: Style): [string, string][] {
  const css = { ...style.tokens!.css };
  const primary = css["--color-primary"];
  if (!css["--color-on-primary"] && HEX.test(primary)) {
    const candidates = [css["--color-text"], css["--color-bg"], "#000000", "#FFFFFF"].filter((c) => HEX.test(c));
    css["--color-on-primary"] = candidates.sort((a, b) => contrast(b, primary) - contrast(a, primary))[0];
  }
  return Object.entries(css);
}

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

/* Reference rules. They show how the tokens combine; replace them with your own components. */
${sel} {
  background: var(--color-bg);
  color: var(--color-text);
  font-family: var(--font-sans);
}
${sel} :where(h1, h2, h3) {
  font-family: var(--font-display);
}
${sel} :where(.surface) {
  padding: calc(var(--space-unit) * 3);
  background: var(--color-surface);
  border: var(--border-width) solid var(--color-border);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-elevation);
  -webkit-backdrop-filter: var(--backdrop-filter);
  backdrop-filter: var(--backdrop-filter);
}
${sel} :where(.action) {
  padding: calc(var(--space-unit) * 1.5) calc(var(--space-unit) * 3);
  background: var(--color-primary);
  color: var(--color-on-primary, var(--color-bg));
  border: var(--border-width) solid var(--color-border);
  border-radius: var(--border-radius);
  font: inherit;
  transition: all var(--duration) var(--ease);
}
${sel} :where(.muted) {
  color: var(--color-muted);
}
${sel} :where(a) {
  color: var(--color-accent);
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
