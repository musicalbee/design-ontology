/**
 * Validates every style file against the schema of its domain, then checks what a
 * schema cannot: file names, era ids, lineage references and their sanity.
 *
 *   npm run validate                  full check
 *   npm run validate -- --schema-only schema check only (use while you write a batch
 *                                     of styles that refer to files not yet present)
 */
import { Ajv2020 } from "ajv/dist/2020.js";
import { join } from "node:path";
import { ROOT, loadDomains, loadEras, loadStyleFiles, readJson, type Style } from "./lib.js";

const schemaOnly = process.argv.includes("--schema-only");
const errors: string[] = [];
const warnings: string[] = [];

const ajv = new Ajv2020({ allErrors: true, strict: true, strictRequired: false, allowUnionTypes: true });
ajv.addSchema(readJson<object>(join(ROOT, "schema", "core.schema.json")));

const domains = loadDomains();
const byId = new Map<string, Style>();
let count = 0;

for (const domain of domains) {
  const validate = ajv.compile(readJson<object>(join(ROOT, domain.schema)));
  const eraIds = new Set(loadEras(domain.id).map((e) => e.id));

  for (const { file, slug, style } of loadStyleFiles(domain.id)) {
    count++;
    if (!validate(style)) {
      for (const e of validate.errors ?? []) errors.push(`${file}: ${e.instancePath || "/"} ${e.message}`);
      continue;
    }
    if (style.id !== slug) errors.push(`${file}: id "${style.id}" is not equal to the file name`);
    if (!eraIds.has(style.era_id)) errors.push(`${file}: era_id "${style.era_id}" is not in data/${domain.id}/eras/`);
    if (byId.has(style.id)) errors.push(`${file}: id "${style.id}" exists in more than one domain`);
    byId.set(style.id, style);

    const axisKeys = domain.vectors.map((v) => v.key).sort().join(",");
    if (Object.keys(style.vectors).sort().join(",") !== axisKeys)
      errors.push(`${file}: vectors do not match the axes in domains/${domain.id}.json`);

    for (const p of style.philosophy.anti_patterns)
      if (/^(never|do not|don't|avoid)\b/i.test(p))
        errors.push(`${file}: anti_pattern starts with a prohibition word ("${p.slice(0, 30)}…"). Name the thing; the compiler adds NEVER.`);
  }
}

if (!schemaOnly && errors.length === 0) {
  for (const style of byId.values()) {
    const where = `data/${style.domain}/styles/${style.id}.json`;
    const check = (field: string, ids: string[], rule: "same" | "other" | "any") => {
      for (const ref of ids) {
        const target = byId.get(ref);
        if (ref === style.id) errors.push(`${where}: ${field} refers to itself`);
        else if (!target) errors.push(`${where}: ${field} → "${ref}" does not exist`);
        else if (rule === "same" && target.domain !== style.domain)
          errors.push(`${where}: ${field} → "${ref}" is in domain "${target.domain}". Use lineage.echoes for kin in a different domain.`);
        else if (rule === "other" && target.domain === style.domain)
          errors.push(`${where}: lineage.echoes → "${ref}" is in the same domain. Use hybridized_with or evolved_from.`);
      }
    };
    const l = style.lineage;
    check("lineage.evolved_from", l.evolved_from, "same");
    check("lineage.rebelled_against", l.rebelled_against, "same");
    check("lineage.hybridized_with", l.hybridized_with, "same");
    check("lineage.echoes", l.echoes ?? [], "other");
    check("agent.modifiers.toward", style.agent.modifiers.map((m) => m.toward), "any");

    for (const ref of [...l.evolved_from, ...l.rebelled_against]) {
      const target = byId.get(ref);
      if (target && target.time_period.start > style.time_period.start)
        errors.push(`${where}: "${ref}" starts in ${target.time_period.start}, after this style (${style.time_period.start}). A style cannot come from, or rebel against, a later one.`);
    }
    const overlap = l.evolved_from.filter((r) => l.rebelled_against.includes(r));
    if (overlap.length) warnings.push(`${where}: "${overlap.join(", ")}" is both an ancestor and a target of rebellion`);
    if (!l.evolved_from.length && !l.rebelled_against.length && !l.hybridized_with.length)
      warnings.push(`${where}: no lineage edges in its own domain (root node)`);
  }
}

for (const w of warnings) console.warn(`warn  ${w}`);
for (const e of errors) console.error(`error ${e}`);
console.log(
  `${count} styles in ${domains.length} domains · ${errors.length} errors · ${warnings.length} warnings` +
    (schemaOnly ? " · schema only" : ""),
);
process.exit(errors.length ? 1 : 0);
