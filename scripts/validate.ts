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
import { RECIPE_NAMES } from "./pack.js";
import { GROUND_KINDS } from "./ground.js";
import { RULES, gate, curate, type Rule } from "./curation.js";
import { ROOT, loadDomains, loadEras, loadMedia, loadPeople, loadPrinciples, loadStyleFiles, loadTechniques, principleRefs, readJson, type Style } from "./lib.js";

const schemaOnly = process.argv.includes("--schema-only");
const errors: string[] = [];
const warnings: string[] = [];

const ajv = new Ajv2020({ allErrors: true, strict: true, strictRequired: false, allowUnionTypes: true });
ajv.addSchema(readJson<object>(join(ROOT, "schema", "core.schema.json")));

const domains = loadDomains();
// Domain manifests: one schema, with the asset library (rule 5) and the knobs (rule 6) of each domain.
const validateDomain = ajv.compile(readJson<object>(join(ROOT, "schema", "domain.schema.json")));
for (const d of domains) {
  if (!validateDomain(d as unknown)) for (const e of validateDomain.errors ?? []) errors.push(`domains/${d.id}.json: ${e.instancePath || "/"} ${e.message}`);
  for (const k of d.knobs ?? []) if (k.min !== undefined && k.max !== undefined && k.min > k.max) errors.push(`domains/${d.id}.json: knob ${k.key} has min above max`);
  if (new Set((d.knobs ?? []).map((k) => k.key)).size !== (d.knobs ?? []).length) errors.push(`domains/${d.id}.json: a knob key is used twice`);
  if (new Set((d.assets ?? []).map((a) => a.type)).size !== (d.assets ?? []).length) errors.push(`domains/${d.id}.json: an asset type is used twice`);
}
const eraIdsByDomain = new Map<string, Set<string>>();
const byId = new Map<string, Style>();
let count = 0;

// Shared composition principles: one schema, ids equal to file names, references that resolve.
const validatePrinciple = ajv.compile(readJson<object>(join(ROOT, "schema", "principle.schema.json")));
const principles = loadPrinciples();
const principleIds = new Set(principles.map((p) => p.slug));
const principleById = new Map(principles.map((p) => [p.slug, p.principle]));
for (const { file, slug, principle } of principles) {
  if (!validatePrinciple(principle)) {
    for (const e of validatePrinciple.errors ?? []) errors.push(`${file}: ${e.instancePath || "/"} ${e.message}`);
    continue;
  }
  if (principle.id !== slug) errors.push(`${file}: id "${principle.id}" is not equal to the file name`);
  for (const r of principle.related) if (!principleIds.has(r) || r === slug) errors.push(`${file}: related → "${r}" is not another principle`);
  for (const d of principle.applies_to) if (!domains.some((x) => x.id === d)) errors.push(`${file}: applies_to → "${d}" is not in domains/`);
  for (const m of principle.measures)
    for (const d of m.domains ?? [])
      if (!principle.applies_to.includes(d)) errors.push(`${file}: measure "${m.measure}" names domain "${d}", which is not in applies_to`);
}

for (const domain of domains) {
  const validate = ajv.compile(readJson<object>(join(ROOT, domain.schema)));
  const eras = loadEras(domain.id);
  const eraIds = new Set(eras.map((e) => e.id));
  eraIdsByDomain.set(domain.id, eraIds);

  for (const { file, slug, style } of loadStyleFiles(domain.id)) {
    count++;
    if (!validate(style)) {
      for (const e of validate.errors ?? []) errors.push(`${file}: ${e.instancePath || "/"} ${e.message}`);
      continue;
    }
    if (style.id !== slug) errors.push(`${file}: id "${style.id}" is not equal to the file name`);
    if (!eraIds.has(style.era_id)) errors.push(`${file}: era_id "${style.era_id}" is not in data/${domain.id}/eras/`);
    const era = eras.find((e) => e.id === style.era_id);
    const span = era && /(\d{4})\D+(\d{4}|now)/.exec(era.period ?? "");
    if (span) {
      const [from, to] = [Number(span[1]), span[2] === "now" ? 9999 : Number(span[2])];
      if (style.time_period.start < from || style.time_period.start > to)
        warnings.push(`${file}: starts in ${style.time_period.start}, outside era "${era!.id}" (${era!.period})`);
    }
    if (byId.has(style.id)) errors.push(`${file}: id "${style.id}" exists in more than one domain`);
    byId.set(style.id, style);

    const axisKeys = domain.vectors.map((v) => v.key).sort().join(",");
    if (Object.keys(style.vectors).sort().join(",") !== axisKeys)
      errors.push(`${file}: vectors do not match the axes in domains/${domain.id}.json`);

    // One owner for the axis count: a symmetry-axis rule "N axis" or "N axes" must agree with composition.axis_count.
    const comp = (style as { composition?: { axis_count?: number; rules?: { principle: string; value: string }[] } }).composition;
    for (const r of comp?.rules ?? []) {
      const n = r.principle === "symmetry-axis" ? r.value.match(/^(\d+) ax(?:is|es)\b/) : null;
      if (n && comp?.axis_count !== undefined && Number(n[1]) !== comp.axis_count)
        errors.push(`${file}: symmetry-axis rule says ${n[1]} axis, composition.axis_count is ${comp.axis_count}`);
    }

    const recipe = (style.visual as { art: { recipe: string } } | undefined)?.art.recipe;
    if (recipe && !RECIPE_NAMES.includes(recipe))
      errors.push(`${file}: visual.art.recipe "${recipe}" is not in scripts/pack.ts. Known: ${RECIPE_NAMES.join(", ")}`);
    const ground = (style.visual as { ground?: { kind: string } } | undefined)?.ground?.kind;
    if (ground && !(GROUND_KINDS as readonly string[]).includes(ground))
      errors.push(`${file}: visual.ground.kind "${ground}" is not in scripts/ground.ts. Known: ${GROUND_KINDS.join(", ")}`);

    for (const ref of principleRefs(style))
      if (!principleIds.has(ref)) errors.push(`${file}: principle "${ref}" is not in data/principles/`);
      else if (!principleById.get(ref)!.applies_to.includes(domain.id))
        errors.push(`${file}: principle "${ref}" does not list "${domain.id}" in applies_to. Add the domain and its measures to data/principles/${ref}.json`);

    // One citation for each principle in composition.principles: a second one prints the principle twice in the skill.
    const cited = ((style as { composition?: { principles?: { principle: string }[] } }).composition?.principles ?? []).map((p) => p.principle);
    for (const id of new Set(cited.filter((id, i) => cited.indexOf(id) !== i)))
      errors.push(`${file}: composition.principles cites "${id}" more than once`);

    for (const p of style.philosophy.anti_patterns)
      if (/^(never|do not|don't|avoid)\b/i.test(p))
        errors.push(`${file}: anti_pattern starts with a prohibition word ("${p.slice(0, 30)}…"). Name the thing; the compiler adds NEVER.`);
  }
}

// Cross-domain techniques: one schema, ids equal to file names, years in order, references that resolve.
const validateTechnique = ajv.compile(readJson<object>(join(ROOT, "schema", "technique.schema.json")));
const techniques = loadTechniques();
const techniqueChecks: (() => void)[] = [];
for (const { file, slug, technique: t } of techniques) {
  if (!validateTechnique(t)) {
    for (const e of validateTechnique.errors ?? []) errors.push(`${file}: ${e.instancePath || "/"} ${e.message}`);
    continue;
  }
  if (t.id !== slug) errors.push(`${file}: id "${t.id}" is not equal to the file name`);
  for (const d of [t.origin.domain, ...t.adoptions.map((a) => a.domain)])
    if (!domains.some((x) => x.id === d)) errors.push(`${file}: domain "${d}" is not in domains/`);
  t.adoptions.forEach((a, i) => {
    if (a.year < t.origin.year) errors.push(`${file}: adoption ${i + 1} (${a.year}) is before the origin (${t.origin.year})`);
    if (i > 0 && a.year < t.adoptions[i - 1].year) errors.push(`${file}: adoptions are not in order of year`);
  });
  for (const p of t.principles ?? []) if (!principleIds.has(p)) errors.push(`${file}: principle "${p}" is not in data/principles/`);
  for (const ref of t.origin.styles ?? []) if (!t.styles.includes(ref)) errors.push(`${file}: origin.styles names "${ref}", which is not in styles`);
  techniqueChecks.push(() => {
    for (const ref of t.origin.styles ?? []) {
      const s = byId.get(ref);
      if (s && s.domain !== t.origin.domain) errors.push(`${file}: origin.styles → "${ref}" is in "${s.domain}", not in the origin domain "${t.origin.domain}"`);
    }
    for (const ref of t.styles) if (!byId.has(ref)) errors.push(`${file}: styles → "${ref}" does not exist`);
    t.adoptions.forEach((a, i) => {
      for (const ref of a.styles ?? []) {
        const s = byId.get(ref);
        if (!s) errors.push(`${file}: adoption ${i + 1} styles → "${ref}" does not exist`);
        else if (s.domain !== a.domain) errors.push(`${file}: adoption ${i + 1} is in "${a.domain}", but "${ref}" is in "${s.domain}"`);
        if (!t.styles.includes(ref)) errors.push(`${file}: adoption ${i + 1} names "${ref}", which is not in styles`);
      }
    });
  });
}

const vectorOwner = new Map<string, string>();
if (!schemaOnly && errors.length === 0) {
  for (const c of techniqueChecks) c();
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

    // Two styles of one domain with the same vector cannot be told apart by the vector.
    const key = `${style.domain}:${JSON.stringify(Object.entries(style.vectors).sort())}`;
    const twin = vectorOwner.get(key);
    if (twin) warnings.push(`${where}: same vector as "${twin}" in "${style.domain}"`);
    else vectorOwner.set(key, style.id);

    // A reference work should come from the period of the style: at least one year of its date inside time_period.
    const works = (style as { reference_works?: { works?: { work: string; date: string }[] } }).reference_works?.works ?? [];
    for (const w of works) {
      const years = (w.date.match(/\b\d{4}\b/g) ?? []).map(Number);
      if (years.length && !years.some((y) => y >= style.time_period.start && y <= (style.time_period.end ?? 9999)))
        warnings.push(`${where}: reference work "${w.work}" (${w.date}) is outside ${style.time_period.start}–${style.time_period.end ?? "now"}`);
    }
  }
}

// The people layer: one schema, ids equal to file names, style references that resolve, years in order.
const validatePerson = ajv.compile(readJson<object>(join(ROOT, "schema", "person.schema.json")));
const people = loadPeople();
const wikidataSeen = new Map<string, string>();
for (const { file, slug, person } of people) {
  if (!validatePerson(person)) {
    for (const e of validatePerson.errors ?? []) errors.push(`${file}: ${e.instancePath || "/"} ${e.message}`);
    continue;
  }
  if (person.id !== slug) errors.push(`${file}: id "${person.id}" is not equal to the file name`);
  const qid = person.identity?.wikidata;
  if (qid && wikidataSeen.has(qid)) errors.push(`${file}: Wikidata ${qid} is also in ${wikidataSeen.get(qid)}`);
  if (qid) wikidataSeen.set(qid, file);
  if (person.born !== null && person.died !== null && person.died < person.born)
    errors.push(`${file}: died (${person.died}) is before born (${person.born})`);
  const own = new Set(person.styles.map((s) => s.style));
  if (own.size !== person.styles.length) errors.push(`${file}: a style is listed more than once`);
  for (const s of own) {
    if (!schemaOnly && !byId.has(s)) errors.push(`${file}: style "${s}" does not exist`);
  }
  for (const m of person.milestones) {
    if (person.born !== null && m.year < person.born) errors.push(`${file}: milestone ${m.year} is before born (${person.born})`);
    const after = person.died !== null && m.year > person.died;
    if (after && !m.posthumous) errors.push(`${file}: milestone ${m.year} is after died (${person.died}); mark it "posthumous": true if that is correct`);
    if (!after && m.posthumous) errors.push(`${file}: milestone ${m.year} is marked posthumous, but it is not after died`);
    if (m.style && !own.has(m.style)) errors.push(`${file}: milestone ${m.year} names style "${m.style}", which is not in styles`);
  }
  if (person.born === null && !person.milestones.length)
    errors.push(`${file}: no born year and no milestones, so the person has no place on the time line`);
}


// The media layer: salons, clubs, workshops, magazines, publishers, galleries, auction houses, platforms.
const validateMedium = ajv.compile(readJson<object>(join(ROOT, "schema", "medium.schema.json")));
const media = loadMedia();
const personIds = new Set(people.map((p) => p.slug));
for (const { file, slug, medium: m } of media) {
  if (!validateMedium(m)) {
    for (const e of validateMedium.errors ?? []) errors.push(`${file}: ${e.instancePath || "/"} ${e.message}`);
    continue;
  }
  if (m.id !== slug) errors.push(`${file}: id "${m.id}" is not equal to the file name`);
  if (m.founded !== null && m.closed !== null && m.closed < m.founded) errors.push(`${file}: closed (${m.closed}) is before founded (${m.founded})`);
  if (new Set(m.styles.map((s) => s.style)).size !== m.styles.length) errors.push(`${file}: a style is listed more than once`);
  for (const s of m.styles) if (!schemaOnly && !byId.has(s.style)) errors.push(`${file}: style "${s.style}" does not exist`);
  for (const p of m.people ?? []) if (!personIds.has(p)) errors.push(`${file}: person "${p}" is not in data/people/`);
}

// The curation gate (CONTRIBUTING.md, "The six curation rules"). A miss is an error. The only
// exception is a style on data/curation-allowlist.json, which can only shrink.
let curation = "";
if (!schemaOnly && errors.length === 0) {
  const layers = { people: people.map((p) => p.person), techniques: techniques.map((t) => t.technique), media: media.map((m) => m.medium) };
  const missesById = new Map<string, Map<Rule, string>>();
  for (const style of byId.values()) {
    const domain = domains.find((d) => d.id === style.domain)!;
    const r = curate(style, domain, eraIdsByDomain.get(domain.id)!, layers);
    missesById.set(style.id, r.misses);
    for (const e of r.errors) errors.push(`data/${style.domain}/styles/${style.id}.json: ${e}`);
  }
  const g = gate(missesById);
  errors.push(...g.errors);
  for (const n of g.notes) warnings.push(n);
  const pass = [...missesById.values()].filter((m) => m.size === 0).length;
  const byRule = RULES.map((r) => `${r} ${[...missesById.values()].filter((m) => m.has(r)).length}`).join(", ");
  curation = ` · curation: ${pass} of ${missesById.size} styles pass all six rules; allowlist ${g.size.styles} styles, ${g.size.misses} misses (${byRule})`;
}

for (const w of warnings) console.warn(`warn  ${w}`);
for (const e of errors) console.error(`error ${e}`);
console.log(
  `${count} styles in ${domains.length} domains · ${principles.length} principles · ${techniques.length} techniques · ${people.length} people · ${errors.length} errors · ${warnings.length} warnings` +
    ` · ${media.length} media` + curation + (schemaOnly ? " · schema only" : ""),
);
process.exit(errors.length ? 1 : 0);
