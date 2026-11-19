/**
 * The curation gate: the six rules that each style must pass (CONTRIBUTING.md, "The six curation
 * rules"). scripts/validate.ts runs it; a miss is an error, never a warning.
 *
 *   identity      name, dated period, summary, era, and a lineage edge or a root reason
 *   people        at least one person in data/people/ with a role
 *   techniques    at least one technique in data/techniques/
 *   orgs          at least one organisation in data/orgs/
 *   assets        each asset type of the domain (domains/<domain>.json `assets`)
 *   permutations  a range for each knob of the domain (domains/<domain>.json `knobs`)
 *
 * The only exception is data/curation-allowlist.json: the styles that were in the repository when
 * the gate started, each with the rules it misses. The list has an expiry date, it can only
 * shrink, and a new style can never go on it (the check compares the list with the list on the
 * base branch).
 */
import { execFileSync } from "node:child_process";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { checkValue, knobDefault } from "./permute.js";
import { ROOT, readJson, type Domain, type Org, type Person, type Style, type Technique } from "./lib.js";

export const RULES = ["identity", "people", "techniques", "orgs", "assets", "permutations"] as const;
export type Rule = (typeof RULES)[number];

export interface Allowlist {
  $comment?: string;
  expires: string;
  styles: Record<string, Rule[]>;
}
export const ALLOWLIST_PATH = "data/curation-allowlist.json";

const get = (obj: unknown, path: string): unknown =>
  path.split(".").reduce<unknown>((o, k) => (o && typeof o === "object" ? (o as Record<string, unknown>)[k] : undefined), obj);

/** Rule 5 for one style: the asset types it misses, with the reason for each. */
export function assetMisses(style: Style, domain: Domain): string[] {
  const out: string[] = [];
  const manifests = new Map<string, unknown>();
  const manifest = (p: string) => {
    if (!manifests.has(p)) manifests.set(p, existsSync(join(ROOT, p)) ? readJson<unknown>(join(ROOT, p)) : undefined);
    return manifests.get(p);
  };
  for (const a of domain.assets) {
    if (a.input) {
      if (get(style, a.input) === undefined) out.push(`${a.type}: no ${a.input}`);
      continue;
    }
    for (const part of a.parts ?? [""]) {
      const fill = (t: string) => t.replaceAll("{id}", style.id).replaceAll("{part}", part);
      const label = part ? `${a.type}/${part}` : a.type;
      if (!existsSync(join(ROOT, fill(a.file)))) {
        out.push(`${label}: no file ${fill(a.file)}`);
        continue;
      }
      if (!a.manifest || !a.entry) continue;
      const entry = get(manifest(a.manifest), fill(a.entry)) as { prompt?: string; width?: number; height?: number } | undefined;
      if (!entry) {
        out.push(`${label}: no record ${fill(a.entry)} in ${a.manifest}`);
        continue;
      }
      if (a.made_by === "model" && !(typeof entry.prompt === "string" && entry.prompt.length >= 12))
        out.push(`${label}: no prompt in ${a.manifest}`);
      if (a.canvas.length && entry.width !== undefined && !a.canvas.some((c) => c.width === entry.width && c.height === entry.height))
        out.push(`${label}: canvas ${entry.width}×${entry.height} is not one of ${a.canvas.map((c) => `${c.width}×${c.height}`).join(", ")}`);
    }
  }
  return out;
}

/** Rule 6 for one style: `missing` lists the knobs with no range; `invalid` lists values that break a rule (always an error). */
export function knobProblems(style: Style, domain: Domain): { missing: string[]; invalid: string[] } {
  const missing: string[] = [];
  const invalid: string[] = [];
  const own = style.permutations ?? {};
  for (const key of Object.keys(own))
    if (!domain.knobs.some((k) => k.key === key)) invalid.push(`permutations.${key} is not a knob of domains/${domain.id}.json`);
  for (const k of domain.knobs) {
    const r = own[k.key];
    if (!r) {
      missing.push(k.key);
      continue;
    }
    if (k.token && r.default !== undefined) invalid.push(`permutations.${k.key}.default repeats the token ${k.token}; leave it out`);
    const def = knobDefault(style, k);
    if (def === undefined) {
      invalid.push(k.token ? `permutations.${k.key}: the token ${k.token} is missing` : `permutations.${k.key} has no default`);
      continue;
    }
    const numeric = k.kind === "length" || k.kind === "number" || k.kind === "integer";
    if (numeric && !r.options && (r.min === undefined || r.max === undefined)) invalid.push(`permutations.${k.key} needs min and max, or options`);
    if (!numeric && !r.options) invalid.push(`permutations.${k.key} needs options`);
    if (r.min !== undefined && r.max !== undefined && r.min > r.max) invalid.push(`permutations.${k.key}: min ${r.min} is above max ${r.max}`);
    for (const v of [def, ...(r.options ?? []), ...[r.min, r.max].filter((x) => x !== undefined)])
      invalid.push(...checkValue(k, undefined, v as number | string).map((m) => `permutations.${m}`));
    invalid.push(...checkValue(k, r, def).map((m) => `permutations.${m} (the default)`));
  }
  return { missing, invalid };
}

export interface Layers {
  people: Person[];
  techniques: Technique[];
  orgs: Org[];
}

/** The rules that one style misses, with a reason for each, and the hard errors in its curation data. */
export function curate(style: Style, domain: Domain, eraIds: Set<string>, layers: Layers): { misses: Map<Rule, string>; errors: string[] } {
  const misses = new Map<Rule, string>();
  const errors: string[] = [];
  const l = style.lineage;
  const edges = l.evolved_from.length + l.rebelled_against.length + l.hybridized_with.length + (l.echoes?.length ?? 0) + (l.subgenre_of ? 1 : 0);
  const id: string[] = [];
  if (!style.name?.trim()) id.push("no name");
  if (!style.summary?.trim()) id.push("no summary");
  if (!style.time_period?.label || !style.time_period.start) id.push("no dated period");
  if (!eraIds.has(style.era_id)) id.push(`era "${style.era_id}" is not in data/${domain.id}/eras/`);
  if (!edges && !l.root) id.push("no lineage edge and no lineage.root reason");
  if (edges && l.root) errors.push("lineage.root is only for a style with no edge; remove it");
  if (id.length) misses.set("identity", id.join("; "));

  if (!layers.people.some((p) => p.styles.some((s) => s.style === style.id))) misses.set("people", "no person in data/people/");
  if (!layers.techniques.some((t) => t.styles.includes(style.id))) misses.set("techniques", "no technique in data/techniques/");
  if (!layers.orgs.some((m) => m.styles.some((s) => s.style === style.id))) misses.set("orgs", "no organisation in data/orgs/");

  const assets = assetMisses(style, domain);
  if (assets.length) misses.set("assets", assets.join("; "));

  const knobs = knobProblems(style, domain);
  if (knobs.missing.length) misses.set("permutations", `no range for ${knobs.missing.join(", ")}`);
  errors.push(...knobs.invalid);
  return { misses, errors };
}

/** The allowlist on the base branch, or null when there is no base to compare with. */
function baseAllowlist(): { list: Allowlist | null; note?: string; error?: string } {
  const explicit = process.env.CURATION_BASE;
  const base = explicit || "origin/main";
  try {
    execFileSync("git", ["rev-parse", "--verify", "--quiet", `${base}^{commit}`], { cwd: ROOT, stdio: "pipe" });
  } catch {
    const msg = `the base "${base}" is not in this clone, so the shrink check of ${ALLOWLIST_PATH} did not run`;
    return explicit ? { list: null, error: msg } : { list: null, note: msg };
  }
  try {
    const text = execFileSync("git", ["show", `${base}:${ALLOWLIST_PATH}`], { cwd: ROOT, stdio: "pipe" }).toString();
    return { list: JSON.parse(text) as Allowlist };
  } catch {
    return { list: null, note: `${base} has no ${ALLOWLIST_PATH} yet; the shrink check starts after it lands` };
  }
}

/**
 * Compare the misses of all styles with the allowlist. Each miss that the list does not cover is an
 * error. Each list entry that is stale, new or past its date is an error too.
 */
export function gate(missesById: Map<string, Map<Rule, string>>, today = new Date()): { errors: string[]; notes: string[]; size: { styles: number; misses: number } } {
  const errors: string[] = [];
  const notes: string[] = [];
  const list = existsSync(join(ROOT, ALLOWLIST_PATH)) ? readJson<Allowlist>(join(ROOT, ALLOWLIST_PATH)) : { expires: "1970-01-01", styles: {} };
  const expired = today.toISOString().slice(0, 10) > list.expires;
  for (const [id, rules] of Object.entries(list.styles)) {
    if (!missesById.has(id)) {
      errors.push(`${ALLOWLIST_PATH}: "${id}" is not a style; remove it`);
      continue;
    }
    for (const r of rules) {
      if (!RULES.includes(r)) errors.push(`${ALLOWLIST_PATH}: "${id}" lists "${r}", which is not a rule (${RULES.join(", ")})`);
      else if (!missesById.get(id)!.has(r)) errors.push(`${ALLOWLIST_PATH}: "${id}" passes "${r}" now; remove "${r}" from its entry`);
    }
    if (new Set(rules).size !== rules.length) errors.push(`${ALLOWLIST_PATH}: "${id}" lists a rule more than once`);
  }
  if (expired && Object.keys(list.styles).length)
    errors.push(`${ALLOWLIST_PATH} expired on ${list.expires}. Backfill the ${Object.keys(list.styles).length} styles on it; the date does not move.`);

  const base = baseAllowlist();
  if (base.error) errors.push(base.error);
  if (base.note) notes.push(base.note);
  if (base.list) {
    for (const [id, rules] of Object.entries(list.styles))
      for (const r of rules)
        if (!base.list.styles[id]?.includes(r))
          errors.push(`${ALLOWLIST_PATH}: "${id}" → "${r}" is not on the list of the base branch. The list can only shrink; a new style cannot go on it.`);
    if (list.expires > base.list.expires) errors.push(`${ALLOWLIST_PATH}: the expiry date moved from ${base.list.expires} to ${list.expires}; it cannot move later`);
  }

  for (const [id, misses] of missesById)
    for (const [rule, why] of misses)
      if (!list.styles[id]?.includes(rule)) errors.push(`curation: "${id}" fails rule "${rule}": ${why}. See CONTRIBUTING.md, "The six curation rules".`);

  const size = { styles: Object.keys(list.styles).length, misses: Object.values(list.styles).reduce((n, r) => n + r.length, 0) };
  return { errors, notes, size };
}
