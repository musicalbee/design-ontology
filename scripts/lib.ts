import { readFileSync, readdirSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

export const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");

export interface VectorAxis { key: string; label: string; abbr: string; low: string; high: string }
export interface Facet { key: string; title: string }
export interface Domain {
  id: string;
  /** Old ids of this domain; loaders map them to `id`. */
  former_ids?: string[];
  order: number;
  name: string;
  schema: string;
  task: string;
  vectors: VectorAxis[];
  facets: Facet[];
  assets: AssetType[];
  knobs: Knob[];
}
/** One asset type that each style of a domain must have (rule 5 of the curation rules). */
export interface AssetType {
  type: string;
  purpose: string;
  made_by: "model" | "code";
  file: string;
  parts?: string[];
  manifest?: string;
  entry?: string;
  generator: string;
  input?: string;
  canvas: { width: number; height: number }[];
}
/** One knob that varies a style of a domain (rule 6 of the curation rules). */
export interface Knob {
  key: string;
  label: string;
  kind: "colour" | "length" | "number" | "integer" | "enum";
  unit?: string;
  min?: number;
  max?: number;
  options?: string[];
  token?: string;
  description: string;
  drives: string[];
}
/** The range of one knob for one style. */
export interface KnobRange { default?: number | string; min?: number; max?: number; options?: (number | string)[]; note?: string }
export interface Era { id: string; domain: string; name: string; order: number; period: string; summary: string }
export interface Lineage {
  evolved_from: string[];
  rebelled_against: string[];
  hybridized_with: string[];
  echoes?: string[];
  subgenre_of?: string;
  root?: string;
}
export interface Style {
  id: string;
  domain: string;
  name: string;
  aliases: string[];
  era_id: string;
  time_period: { start: number; end: number | null; label: string };
  summary: string;
  philosophy: { core_thesis: string; design_principles: string[]; anti_patterns: string[] };
  vectors: Record<string, number>;
  lineage: Lineage;
  emotion: { target_response: string; keywords: string[]; brand_archetypes: string[] };
  agent: {
    triggers: string[];
    use_cases: string[];
    avoid_when: string[];
    modifiers: { request: string; toward: string; how: string }[];
  };
  tokens?: { css: Record<string, string>; tailwind: { element: string; classes: string }[] };
  permutations?: Record<string, KnobRange>;
  primer?: { positive: string[]; negative: string[]; canonical_works: { work: string; architect: string; year: number }[] };
  [facet: string]: unknown;
}

export interface Principle {
  id: string;
  name: string;
  aliases: string[];
  definition: string;
  measures: { measure: string; unit: string; reference: string; domains?: string[] }[];
  applies_to: string[];
  related: string[];
  identity?: { wikidata?: string; aat?: string };
  sources: { title: string; url?: string }[];
}

export interface Technique {
  id: string;
  name: string;
  aliases: string[];
  kind: "montage" | "animation" | "motif" | "material" | "process" | "tool" | "skill" | "technology";
  identity?: { wikidata?: string; aat?: string };
  summary: string;
  how: string[];
  origin: { domain: string; year: number; circa?: boolean; where: string; note: string; styles?: string[] };
  adoptions: { domain: string; year: number; circa?: boolean; via: string; styles?: string[] }[];
  styles: string[];
  principles?: string[];
  sources: { title: string; url?: string }[];
}

export const readJson = <T>(path: string): T => JSON.parse(readFileSync(path, "utf8")) as T;

const jsonFiles = (dir: string): string[] =>
  existsSync(dir) ? readdirSync(dir).filter((f) => f.endsWith(".json")).sort() : [];

export function loadDomains(): Domain[] {
  const dir = join(ROOT, "domains");
  return jsonFiles(dir)
    .map((f) => readJson<Domain>(join(dir, f)))
    .sort((a, b) => a.order - b.order || a.id.localeCompare(b.id));
}

export function loadEras(domain: string): Era[] {
  const dir = join(ROOT, "data", domain, "eras");
  return jsonFiles(dir)
    .map((f) => readJson<Era>(join(dir, f)))
    .sort((a, b) => a.order - b.order);
}

/** The shared composition principles in data/principles/, by id. */
export function loadPrinciples(): { file: string; slug: string; principle: Principle }[] {
  const dir = join(ROOT, "data", "principles");
  return jsonFiles(dir).map((f) => ({
    file: join("data", "principles", f),
    slug: f.replace(/\.json$/, ""),
    principle: readJson<Principle>(join(dir, f)),
  }));
}

/** Every principle id that a style names, in order of first use. It reads any object with a string `principle` key, at any depth. */
export function principleRefs(value: unknown, out: string[] = []): string[] {
  if (Array.isArray(value)) for (const v of value) principleRefs(v, out);
  else if (value && typeof value === "object") {
    const p = (value as { principle?: unknown }).principle;
    if (typeof p === "string" && !out.includes(p)) out.push(p);
    for (const v of Object.values(value)) principleRefs(v, out);
  }
  return out;
}

export interface Person {
  id: string;
  name: string;
  aliases?: string[];
  identity?: { wikidata?: string; wikipedia?: string };
  born: number | null;
  died: number | null;
  nationality?: string[];
  bio: string;
  styles: { style: string; role: PersonRole }[];
  milestones: { year: number; event: string; style?: string; posthumous?: boolean }[];
  photo: { file: string; url: string; page?: string; licence: string; licence_url?: string; credit: string } | null;
  orgs?: PersonOrg[];
  emblem?: Emblem;
  sources: { title: string; url?: string }[];
  found_in?: string[];
}

/** One link from a person to an organisation in data/orgs/, with its own source. */
export interface PersonOrg {
  org: string;
  role: "founder" | "owner" | "leader" | "designer" | "staff" | "teacher" | "student" | "member" | "author" | "exhibitor" | "patron" | "client" | "user";
  from?: number | null;
  to?: number | null;
  source: { title: string; url?: string };
}

/** A logo, a coat of arms, a monogram, a seal or a mark on Wikimedia Commons, with the record that ties it to the entity. */
export interface Emblem {
  kind: "logo" | "coat-of-arms" | "monogram" | "seal" | "mark" | "symbol";
  file: string;
  url: string;
  page: string;
  licence: string;
  licence_url?: string;
  credit: string;
  trademark?: true;
  source: { title: string; url: string };
}

export type PersonRole = "founder" | "key-figure" | "forerunner" | "populariser" | "trend-setter" | "rebel" | "patron" | "artisan";
/** The four classes of rule 2 of the curation rules. Each role is in one class. */
export type RoleClass = "pioneer" | "artisan" | "influencer" | "patron";
export const ROLE_CLASS: Record<PersonRole, RoleClass> = {
  founder: "pioneer",
  forerunner: "pioneer",
  "key-figure": "artisan",
  artisan: "artisan",
  populariser: "influencer",
  "trend-setter": "influencer",
  rebel: "influencer",
  patron: "patron",
};

/** An organisation round a style: a group (crew, collective, council, studio, company), a channel, or a body that paid. */
export interface Org {
  id: string;
  name: string;
  aliases?: string[];
  kind: "crew" | "collective" | "council" | "studio" | "company" | "school" | "gallery" | "dealer" | "publisher" | "magazine" | "label" | "salon" | "exhibition" | "venue" | "auction-house" | "court" | "church" | "house" | "foundation" | "state-programme" | "fund" | "platform";
  identity?: { wikidata?: string };
  founded: number | null;
  closed: number | null;
  place: string;
  summary: string;
  styles: { style: string; part: "launched" | "exhibited" | "published" | "taught" | "made" | "sold" | "gathered" | "shaped" | "opposed" | "revived" | "funded" }[];
  people?: string[];
  members?: { person: string; role: "founder" | "member" | "leader" | "guest"; from?: number | null; to?: number | null }[];
  statement?: { text: string; title?: string; year?: number; url?: string };
  moves?: { year: number; kind: string; text: string; source: { title: string; url?: string } }[];
  relations?: { split_from?: string[]; successor_of?: string[]; rival_of?: string[]; member_of?: string[] };
  emblem?: Emblem;
  sources: { title: string; url?: string }[];
}

/** The organisation layer in data/orgs/, by file. */
export function loadOrgs(): { file: string; slug: string; org: Org }[] {
  const dir = join(ROOT, "data", "orgs");
  return jsonFiles(dir).map((f) => ({
    file: join("data", "orgs", f),
    slug: f.replace(/\.json$/, ""),
    org: readJson<Org>(join(dir, f)),
  }));
}

/** One flow of money or paid support: who paid whom, when, for what, and the source. */
export interface Funding {
  id: string;
  from: { type: "person" | "org"; id: string };
  to: { type: "person" | "org" | "style"; id: string };
  styles?: string[];
  kind: "commission" | "stipend" | "purchase" | "exhibition" | "dealer-contract" | "publishing" | "residency" | "prize" | "grant" | "state-programme" | "investment" | "acquisition" | "crowdfunding" | "platform-fund" | "employment";
  years: [number, number | null];
  what: string;
  amount?: { value: number; currency: string; year?: number; source: number };
  confidence: "documented" | "reported" | "contested";
  sources: { title: string; url: string }[];
}

/** The money layer in data/funding/, by file. */
export function loadFunding(): { file: string; slug: string; funding: Funding }[] {
  const dir = join(ROOT, "data", "funding");
  return jsonFiles(dir).map((f) => ({
    file: join("data", "funding", f),
    slug: f.replace(/\.json$/, ""),
    funding: readJson<Funding>(join(dir, f)),
  }));
}

/** The people layer in data/people/, by file. */
export function loadPeople(): { file: string; slug: string; person: Person }[] {
  const dir = join(ROOT, "data", "people");
  return jsonFiles(dir).map((f) => ({
    file: join("data", "people", f),
    slug: f.replace(/\.json$/, ""),
    person: readJson<Person>(join(dir, f)),
  }));
}

/** The cross-domain techniques in data/techniques/, by id. */
export function loadTechniques(): { file: string; slug: string; technique: Technique }[] {
  const dir = join(ROOT, "data", "techniques");
  return jsonFiles(dir).map((f) => ({
    file: join("data", "techniques", f),
    slug: f.replace(/\.json$/, ""),
    technique: readJson<Technique>(join(dir, f)),
  }));
}

/** A year for people: 1925, c. 1500, 200 BCE. */
export const yearLabel = (year: number, circa?: boolean): string =>
  `${circa ? "c. " : ""}${year < 0 ? `${-year} BCE` : year}`;

export interface StyleFile { file: string; slug: string; style: Style }

export function loadStyleFiles(domain: string): StyleFile[] {
  const dir = join(ROOT, "data", domain, "styles");
  return jsonFiles(dir).map((f) => ({
    file: join("data", domain, "styles", f),
    slug: f.replace(/\.json$/, ""),
    style: readJson<Style>(join(dir, f)),
  }));
}

/** Every style of every domain, in a stable order: domain, era, start year, id. */
export function loadAll(): { domains: Domain[]; eras: Map<string, Era>; styles: Style[] } {
  const domains = loadDomains();
  const eras = new Map<string, Era>();
  const styles: Style[] = [];
  for (const d of domains) {
    for (const e of loadEras(d.id)) eras.set(`${d.id}/${e.id}`, e);
    const own = loadStyleFiles(d.id).map((s) => s.style);
    own.sort((a, b) => {
      const ea = eras.get(`${d.id}/${a.era_id}`)?.order ?? 99;
      const eb = eras.get(`${d.id}/${b.era_id}`)?.order ?? 99;
      return ea - eb || a.time_period.start - b.time_period.start || a.id.localeCompare(b.id);
    });
    styles.push(...own);
  }
  return { domains, eras, styles };
}

export function write(relPath: string, content: string): void {
  const abs = join(ROOT, relPath);
  mkdirSync(dirname(abs), { recursive: true });
  writeFileSync(abs, content.endsWith("\n") ? content : content + "\n");
}

/** Euclidean distance between two styles on the axes of their domain. */
export function distance(a: Style, b: Style, axes: VectorAxis[]): number {
  return Math.sqrt(axes.reduce((sum, ax) => sum + (a.vectors[ax.key] - b.vectors[ax.key]) ** 2, 0));
}

export function nearest(style: Style, all: Style[], axes: VectorAxis[], n = 3): { id: string; distance: number }[] {
  return all
    .filter((s) => s.domain === style.domain && s.id !== style.id)
    .map((s) => ({ id: s.id, distance: Number(distance(style, s, axes).toFixed(2)) }))
    .sort((a, b) => a.distance - b.distance || a.id.localeCompare(b.id))
    .slice(0, n);
}
