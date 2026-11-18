import { readFileSync, readdirSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

export const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");

export interface VectorAxis { key: string; label: string; abbr: string; low: string; high: string }
export interface Facet { key: string; title: string }
export interface Domain {
  id: string;
  order: number;
  name: string;
  schema: string;
  task: string;
  vectors: VectorAxis[];
  facets: Facet[];
}
export interface Era { id: string; domain: string; name: string; order: number; period: string; summary: string }
export interface Lineage {
  evolved_from: string[];
  rebelled_against: string[];
  hybridized_with: string[];
  echoes?: string[];
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
