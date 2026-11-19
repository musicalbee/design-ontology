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
import { checkIndustrialStyle, checkNet, checkVocabulary, loadNetContext, loadNets, type IndustrialStyle } from "./net.js";
import { checkFashionStyle, checkFashionVocabulary, loadFashionVocabulary, type FashionStyle } from "./fashion.js";
import { checkCeramicsStyle, checkCeramicsVocabulary, loadCeramicsVocabulary, type CeramicsStyle } from "./ceramics.js";
import { checkCuisineStyle, checkCuisineVocabulary, loadCuisineVocabulary, type CuisineStyle } from "./cuisine.js";
import { loadEmotions, loadEvokes, loadKeywordMap } from "./emotions.js";
import { ROOT, loadDomains, loadEras, loadFunding, loadOrgs, loadPeople, loadPrinciples, loadStyleFiles, loadTechniques, principleRefs, readJson, type Style } from "./lib.js";

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
    if (l.subgenre_of) {
      check("lineage.subgenre_of", [l.subgenre_of], "same");
      // Walk up the parents: a loop of sub-genres has no top.
      const seen = new Set([style.id]);
      for (let p = byId.get(l.subgenre_of); p?.lineage.subgenre_of; p = byId.get(p.lineage.subgenre_of)) {
        if (seen.has(p.id)) { errors.push(`${where}: lineage.subgenre_of makes a loop through "${p.id}"`); break; }
        seen.add(p.id);
      }
      const parent = byId.get(l.subgenre_of);
      if (parent && parent.time_period.start > style.time_period.start)
        warnings.push(`${where}: sub-genre starts in ${style.time_period.start}, before its parent "${parent.id}" (${parent.time_period.start})`);
    }
    check("agent.modifiers.toward", style.agent.modifiers.map((m) => m.toward), "any");

    for (const ref of [...l.evolved_from, ...l.rebelled_against]) {
      const target = byId.get(ref);
      if (target && target.time_period.start > style.time_period.start)
        errors.push(`${where}: "${ref}" starts in ${target.time_period.start}, after this style (${style.time_period.start}). A style cannot come from, or rebel against, a later one.`);
    }
    const overlap = l.evolved_from.filter((r) => l.rebelled_against.includes(r));
    if (overlap.length) warnings.push(`${where}: "${overlap.join(", ")}" is both an ancestor and a target of rebellion`);
    if (!l.evolved_from.length && !l.rebelled_against.length && !l.hybridized_with.length && !l.subgenre_of)
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

// The industrial vocabulary and the object nets: one schema each, then every id, family and knob range.
const validateVocabulary = ajv.compile(readJson<object>(join(ROOT, "schema", "industrial-vocabulary.schema.json")));
const validateNet = ajv.compile(readJson<object>(join(ROOT, "schema", "object-net.schema.json")));
const nets = loadNets();
if (domains.some((d) => d.id === "industrial")) {
  const vocabulary = readJson<unknown>(join(ROOT, "data", "industrial", "vocabulary.json"));
  if (!validateVocabulary(vocabulary)) for (const e of validateVocabulary.errors ?? []) errors.push(`data/industrial/vocabulary.json: ${e.instancePath || "/"} ${e.message}`);
  for (const { file, net } of nets) if (!validateNet(net)) for (const e of validateNet.errors ?? []) errors.push(`${file}: ${e.instancePath || "/"} ${e.message}`);
  if (!schemaOnly && errors.length === 0) {
    const ctx = loadNetContext();
    errors.push(...checkVocabulary(ctx.L));
    for (const s of ctx.industrial.values())
      for (const e of checkIndustrialStyle(ctx.L, s as IndustrialStyle)) errors.push(`data/industrial/styles/${s.id}.json: ${e}`);
    for (const { file, slug, net } of nets) for (const e of checkNet(ctx, slug, net)) errors.push(`${file}: ${e}`);
    for (const id of ctx.interiors.keys()) if (!nets.some((n) => n.slug === id)) errors.push(`data/industrial/nets/${id}.json: the interior style "${id}" has no object net`);
  }
}

// The fashion vocabulary: one schema, then each fabric, material, finish and object id of each fashion style.
const validateFashionVocabulary = ajv.compile(readJson<object>(join(ROOT, "schema", "fashion-vocabulary.schema.json")));
if (domains.some((d) => d.id === "fashion")) {
  const raw = readJson<unknown>(join(ROOT, "data", "fashion", "vocabulary.json"));
  if (!validateFashionVocabulary(raw))
    for (const e of validateFashionVocabulary.errors ?? []) errors.push(`data/fashion/vocabulary.json: ${e.instancePath || "/"} ${e.message}`);
  else {
    const v = loadFashionVocabulary();
    for (const e of checkFashionVocabulary(v)) errors.push(`data/fashion/vocabulary.json: ${e}`);
    if (!schemaOnly)
      for (const { style } of loadStyleFiles("fashion"))
        for (const e of checkFashionStyle(v, style as unknown as FashionStyle)) errors.push(`data/fashion/styles/${style.id}.json: ${e}`);
  }
}

// The ceramics vocabulary: one schema, then each body, glaze, decoration and object id of each ceramics style.
const validateCeramicsVocabulary = ajv.compile(readJson<object>(join(ROOT, "schema", "ceramics-vocabulary.schema.json")));
if (domains.some((d) => d.id === "ceramics")) {
  const raw = readJson<unknown>(join(ROOT, "data", "ceramics", "vocabulary.json"));
  if (!validateCeramicsVocabulary(raw))
    for (const e of validateCeramicsVocabulary.errors ?? []) errors.push(`data/ceramics/vocabulary.json: ${e.instancePath || "/"} ${e.message}`);
  else {
    const v = loadCeramicsVocabulary();
    for (const e of checkCeramicsVocabulary(v)) errors.push(`data/ceramics/vocabulary.json: ${e}`);
    if (!schemaOnly)
      for (const { style } of loadStyleFiles("ceramics"))
        for (const e of checkCeramicsStyle(v, style as unknown as CeramicsStyle)) errors.push(`data/ceramics/styles/${style.id}.json: ${e}`);
  }
}

// The cuisine vocabulary: one schema, then each ingredient, method and course id of each cuisine style.
const validateCuisineVocabulary = ajv.compile(readJson<object>(join(ROOT, "schema", "cuisine-vocabulary.schema.json")));
if (domains.some((d) => d.id === "cuisine")) {
  const raw = readJson<unknown>(join(ROOT, "data", "cuisine", "vocabulary.json"));
  if (!validateCuisineVocabulary(raw))
    for (const e of validateCuisineVocabulary.errors ?? []) errors.push(`data/cuisine/vocabulary.json: ${e.instancePath || "/"} ${e.message}`);
  else {
    const v = loadCuisineVocabulary();
    for (const e of checkCuisineVocabulary(v)) errors.push(`data/cuisine/vocabulary.json: ${e}`);
    if (!schemaOnly)
      for (const { style } of loadStyleFiles("cuisine"))
        for (const e of checkCuisineStyle(v, style as unknown as CuisineStyle)) errors.push(`data/cuisine/styles/${style.id}.json: ${e}`);
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
  if (person.born === null && !person.milestones.some((m) => !m.posthumous))
    errors.push(`${file}: no born year and no milestone in the life, so the person has no place on the time line`);
}


// The organisation layer: groups (crews, collectives, councils, studios, companies), channels and backers.
const validateOrg = ajv.compile(readJson<object>(join(ROOT, "schema", "org.schema.json")));
const orgs = loadOrgs();
const orgIds = new Set(orgs.map((o) => o.slug));
const personIds = new Set(people.map((p) => p.slug));
for (const { file, slug, org: m } of orgs) {
  if (!validateOrg(m)) {
    for (const e of validateOrg.errors ?? []) errors.push(`${file}: ${e.instancePath || "/"} ${e.message}`);
    continue;
  }
  if (m.id !== slug) errors.push(`${file}: id "${m.id}" is not equal to the file name`);
  if (m.founded !== null && m.closed !== null && m.closed < m.founded) errors.push(`${file}: closed (${m.closed}) is before founded (${m.founded})`);
  if (new Set(m.styles.map((s) => s.style)).size !== m.styles.length) errors.push(`${file}: a style is listed more than once`);
  for (const s of m.styles) if (!schemaOnly && !byId.has(s.style)) errors.push(`${file}: style "${s.style}" does not exist`);
  for (const p of m.people ?? []) if (!personIds.has(p)) errors.push(`${file}: person "${p}" is not in data/people/`);
  for (const x of m.members ?? []) {
    if (!personIds.has(x.person)) errors.push(`${file}: member "${x.person}" is not in data/people/`);
    if (x.from != null && x.to != null && x.to < x.from) errors.push(`${file}: member "${x.person}" leaves (${x.to}) before joining (${x.from})`);
  }
  if (new Set((m.members ?? []).map((x) => x.person)).size !== (m.members ?? []).length) errors.push(`${file}: a member is listed more than once`);
  for (const [rel, ids] of Object.entries(m.relations ?? {}))
    for (const o of ids ?? []) {
      if (o === m.id) errors.push(`${file}: relations.${rel} refers to itself`);
      else if (!orgIds.has(o)) errors.push(`${file}: relations.${rel} → "${o}" is not in data/orgs/`);
    }
  for (const mv of m.moves ?? [])
    if ((m.founded !== null && mv.year < m.founded) || (m.closed !== null && mv.kind !== "closure" && mv.year > m.closed))
      warnings.push(`${file}: move ${mv.year} (${mv.kind}) is outside ${m.founded ?? "?"}–${m.closed ?? "now"}`);
}


// The emotions layer: terms (AESTHEMOS + culture words) and evokes edges with evidence.
const validateEmotion = ajv.compile(readJson<object>(join(ROOT, "schema", "emotion.schema.json")));
const validateEvokes = ajv.compile(readJson<object>(join(ROOT, "schema", "evokes.schema.json")));
const emotions = loadEmotions();
const emotionIds = new Set(emotions.map((e) => e.slug));
for (const { file, slug, emotion: e } of emotions) {
  if (!validateEmotion(e)) {
    for (const x of validateEmotion.errors ?? []) errors.push(`${file}: ${x.instancePath || "/"} ${x.message}`);
    continue;
  }
  if (e.id !== slug) errors.push(`${file}: id "${e.id}" is not equal to the file name`);
  if (e.opposite && !emotionIds.has(e.opposite)) errors.push(`${file}: opposite "${e.opposite}" is not in data/emotions/`);
  for (const n of e.nearest) if (!emotionIds.has(n)) errors.push(`${file}: nearest "${n}" is not in data/emotions/`);
  if (e.model === "culture" && (!e.culture || !e.nearest.length)) errors.push(`${file}: a culture term needs a language tag and at least one nearest core term`);
  if (e.model === "aesthemos" && (e.culture || e.nearest.length)) errors.push(`${file}: a core term has no culture and no nearest terms`);
}
for (const [k, ids] of Object.entries(loadKeywordMap()))
  for (const id of ids) if (!emotionIds.has(id)) errors.push(`data/emotions/keyword-map.json: "${k}" → "${id}" is not in data/emotions/`);
const evokes = loadEvokes();
let evokesEdges = 0;
let evokesSourced = 0;
for (const { file, slug, evokes: f } of evokes) {
  if (!validateEvokes(f)) {
    for (const x of validateEvokes.errors ?? []) errors.push(`${file}: ${x.instancePath || "/"} ${x.message}`);
    continue;
  }
  if (f.carrier === "style" && f.domain !== slug) errors.push(`${file}: domain "${f.domain}" is not equal to the file name`);
  for (const [id, edges] of Object.entries(f.edges)) {
    if (f.carrier === "style" && !schemaOnly) {
      const s = byId.get(id);
      if (!s) errors.push(`${file}: style "${id}" does not exist`);
      else if (s.domain !== f.domain) errors.push(`${file}: style "${id}" is in "${s.domain}", not in "${f.domain}"`);
    }
    if (f.carrier === "technique" && !techniques.some((t) => t.slug === id)) errors.push(`${file}: technique "${id}" is not in data/techniques/`);
    if (new Set(edges.map((e) => e.emotion)).size !== edges.length) errors.push(`${file}: ${id} names an emotion more than once`);
    for (const e of edges) {
      evokesEdges++;
      if (!emotionIds.has(e.emotion)) errors.push(`${file}: ${id} → emotion "${e.emotion}" is not in data/emotions/`);
      if (e.evidence.some((x) => x.kind === "measured" && !x.source?.url)) errors.push(`${file}: ${id} → ${e.emotion}: measured evidence needs a link to the study`);
      if (e.evidence.some((x) => x.kind !== "inferred")) evokesSourced++;
    }
  }
}
// The money layer: who paid whom, when, for what. Each flow cites a source; an amount names the
// source that gives it; a flow to a person or an organisation names the styles that the money helped.
const validateFunding = ajv.compile(readJson<object>(join(ROOT, "schema", "funding.schema.json")));
const funding = loadFunding();
const endIds = { person: personIds, org: orgIds, style: new Set(byId.keys()) };
const backers = new Set<string>();
for (const { file, slug, funding: f } of funding) {
  if (!validateFunding(f)) {
    for (const e of validateFunding.errors ?? []) errors.push(`${file}: ${e.instancePath || "/"} ${e.message}`);
    continue;
  }
  if (f.id !== slug) errors.push(`${file}: id "${f.id}" is not equal to the file name`);
  for (const end of ["from", "to"] as const) {
    const { type, id } = f[end];
    if (!schemaOnly && !endIds[type].has(id)) errors.push(`${file}: ${end} ${type} "${id}" does not exist`);
  }
  if (f.from.type === f.to.type && f.from.id === f.to.id) errors.push(`${file}: from and to are the same`);
  if (f.to.type !== "style" && !f.styles?.length) errors.push(`${file}: a flow to a ${f.to.type} names the styles that it helped`);
  for (const s of f.styles ?? []) if (!schemaOnly && !byId.has(s)) errors.push(`${file}: style "${s}" does not exist`);
  if (f.years[1] !== null && f.years[1] < f.years[0]) errors.push(`${file}: the end year (${f.years[1]}) is before the start year (${f.years[0]})`);
  if (f.amount && f.amount.source >= f.sources.length) errors.push(`${file}: amount.source ${f.amount.source} is not an index into sources`);
  // The id is "<from>--<to>", with an optional "-<suffix>" (a year) when one pair has two flows.
  const base = `${f.from.id}--${f.to.id}`;
  if (f.id !== base && !f.id.startsWith(`${base}-`)) errors.push(`${file}: id "${f.id}" does not start with "${base}"`);
  // An amount is for a year inside the flow. An open end (null) admits each year from the start.
  const amountYear = f.amount?.year;
  if (amountYear != null && (amountYear < f.years[0] || (f.years[1] !== null && amountYear > f.years[1])))
    errors.push(`${file}: amount.year ${amountYear} is outside the years of the flow (${f.years[0]}–${f.years[1] ?? "open"})`);
  backers.add(`${f.from.type}:${f.from.id}`);
}
// Person → organisation links: each org resolves, one link for each org, years in order.
for (const { file, person } of people) {
  const seen = new Set<string>();
  for (const l of person.orgs ?? []) {
    if (!orgIds.has(l.org)) errors.push(`${file}: orgs → "${l.org}" is not in data/orgs/`);
    if (seen.has(l.org)) errors.push(`${file}: org "${l.org}" is listed more than once`);
    seen.add(l.org);
    if (l.from != null && l.to != null && l.to < l.from) errors.push(`${file}: org "${l.org}" ends (${l.to}) before it starts (${l.from})`);
  }
}

// A backer org with the part "funded" has at least one flow in data/funding/.
for (const { file, org: m } of orgs)
  if (m.styles.some((s) => s.part === "funded") && !backers.has(`org:${m.id}`))
    warnings.push(`${file}: part "funded" but no flow in data/funding/ starts here`);

// The curation gate (CONTRIBUTING.md, "The six curation rules"). A miss is an error. The only
// exception is a style on data/curation-allowlist.json, which can only shrink.
let curation = "";
if (!schemaOnly && errors.length === 0) {
  const layers = { people: people.map((p) => p.person), techniques: techniques.map((t) => t.technique), orgs: orgs.map((m) => m.org) };
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
    ` · ${orgs.length} orgs · ${funding.length} funding flows · ${nets.length} object nets · ${emotions.length} emotions · ${evokesEdges} evokes edges (${evokesSourced} sourced)` + curation + (schemaOnly ? " · schema only" : ""),
);
process.exit(errors.length ? 1 : 0);
