// The cross-domain material layer: data/materials/<class>.json, data/materials/tools.json and data/materials/edges/*.json.
//
// One material node for each real thing. A node with a sense is also an entry of a domain vocabulary, with the same id.
// The checks here:
// - no loss: each entry of a material list of a vocabulary has exactly one node, and each sense of a node has its entry;
// - each is_a, part_of and made_from points at a node, and is_a and part_of have no cycle;
// - each edge names a process that exists and materials and tools that exist.
// The links from styles to materials are derived, not stored (see styleLinks).
import { existsSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { ROOT, loadStyleFiles, loadTechniques, readJson, type Style } from "./lib.js";

export const CLASSES = ["plant", "animal", "fungus", "mineral", "metal", "ceramic-glass", "polymer", "composite"] as const;
export type MaterialClass = (typeof CLASSES)[number];
export const SENSES = ["ceramics.bodies", "ceramics.materials", "ceramics.glazes", "fashion.fibres", "fashion.fabrics", "fashion.materials", "industrial.materials", "cuisine.ingredients"] as const;
export const PROCESS_LISTS = ["cuisine.methods", "ceramics.decorations", "fashion.finishes", "industrial.finishes"] as const;
export const ROLES = ["acts_on", "adds", "makes", "with"] as const;
export type Role = (typeof ROLES)[number];

export interface Source { title: string; url?: string }
export interface Material {
  id: string; name: string; family: string; form: string; senses: string[]; summary?: string;
  is_a?: string[]; part_of?: string[]; made_from?: string[]; aliases?: string[]; parts?: string[]; colour?: string[];
  properties?: { hardness_mohs?: [number, number]; density_kg_m3?: [number, number]; melt_c?: [number, number]; fire_c?: [number, number]; warmth?: number; edible?: boolean };
  photo?: string; note?: string; identity?: { wikidata?: string; aat?: string }; sources: Source[];
}
export interface MaterialClassFile { class: MaterialClass; name: string; summary: string; families: { id: string; name: string }[]; materials: Material[] }
export interface Tool { id: string; name: string; summary: string; identity?: { wikidata?: string }; sources: Source[] }
export interface Edge { process: string; acts_on?: string[]; adds?: string[]; makes?: string[]; with?: string[]; note?: string; sources: Source[] }
export interface EdgeFile { group: string; summary: string; edges: Edge[] }

const DIR = join(ROOT, "data", "materials");

export function loadMaterialClasses(): { file: string; data: MaterialClassFile }[] {
  if (!existsSync(DIR)) return [];
  return CLASSES.filter((c) => existsSync(join(DIR, `${c}.json`))).map((c) => ({ file: join("data", "materials", `${c}.json`), data: readJson<MaterialClassFile>(join(DIR, `${c}.json`)) }));
}
export function loadTools(): Tool[] {
  const f = join(DIR, "tools.json");
  return existsSync(f) ? readJson<{ tools: Tool[] }>(f).tools : [];
}
export function loadEdgeFiles(): { file: string; data: EdgeFile }[] {
  const dir = join(DIR, "edges");
  if (!existsSync(dir)) return [];
  return readdirSync(dir).filter((f) => f.endsWith(".json")).sort().map((f) => ({ file: join("data", "materials", "edges", f), data: readJson<EdgeFile>(join(dir, f)) }));
}

/** The material and process lists of the four vocabularies: "<domain>.<list>" → entries. */
export function vocabularyLists(): Map<string, { id: string; name: string }[]> {
  const out = new Map<string, { id: string; name: string }[]>();
  for (const key of [...SENSES, ...PROCESS_LISTS]) {
    const [domain, list] = key.split(".");
    const v = readJson<Record<string, { id: string; name: string }[]>>(join(ROOT, "data", domain, "vocabulary.json"));
    out.set(key, v[list] ?? []);
  }
  return out;
}

export interface Layer { classes: { file: string; data: MaterialClassFile }[]; byId: Map<string, Material & { class: MaterialClass }>; tools: Map<string, Tool>; edges: { file: string; edge: Edge }[] }
export function loadLayer(): Layer {
  const classes = loadMaterialClasses();
  const byId = new Map<string, Material & { class: MaterialClass }>();
  for (const { data } of classes) for (const m of data.materials) if (!byId.has(m.id)) byId.set(m.id, { ...m, class: data.class });
  const tools = new Map(loadTools().map((t) => [t.id, t]));
  const edges = loadEdgeFiles().flatMap(({ file, data }) => data.edges.map((edge) => ({ file, edge })));
  return { classes, byId, tools, edges };
}

/** The errors that a schema cannot find. */
export function checkLayer(L: Layer): string[] {
  const errors: string[] = [];
  const lists = vocabularyLists();
  const seen = new Map<string, string>();
  for (const { file, data } of L.classes) {
    const fams = new Set(data.families.map((f) => f.id));
    if (fams.size !== data.families.length) errors.push(`${file}: a family id is used twice`);
    const used = new Set<string>();
    for (const m of data.materials) {
      if (seen.has(m.id)) errors.push(`${file}: material "${m.id}" is also in ${seen.get(m.id)}`);
      seen.set(m.id, file);
      if (!fams.has(m.family)) errors.push(`${file}: ${m.id}: family "${m.family}" is not in the families of the class`);
      used.add(m.family);
      for (const k of ["is_a", "part_of", "made_from"] as const)
        for (const r of m[k] ?? []) {
          if (!L.byId.has(r)) errors.push(`${file}: ${m.id}: ${k} → "${r}" is not a material`);
          if (r === m.id) errors.push(`${file}: ${m.id}: ${k} points at itself`);
        }
      for (const s of m.senses) if (!lists.get(s)?.some((e) => e.id === m.id)) errors.push(`${file}: ${m.id}: sense "${s}" has no entry "${m.id}"`);
      const p = m.properties ?? {};
      for (const k of ["hardness_mohs", "density_kg_m3", "melt_c", "fire_c"] as const) if (p[k] && p[k]![0] > p[k]![1]) errors.push(`${file}: ${m.id}: ${k} has min above max`);
    }
    for (const f of fams) if (!used.has(f)) errors.push(`${file}: family "${f}" has no material`);
  }
  // No loss: each vocabulary entry has its node, with the sense.
  for (const s of SENSES)
    for (const e of lists.get(s) ?? []) {
      const m = L.byId.get(e.id);
      if (!m) errors.push(`data/${s.split(".")[0]}/vocabulary.json: ${s.split(".")[1]} "${e.id}" has no material in data/materials/`);
      else if (!m.senses.includes(s)) errors.push(`data/materials/${m.class}.json: ${m.id}: the sense "${s}" is missing`);
    }
  // No cycle in is_a or part_of.
  for (const k of ["is_a", "part_of"] as const)
    for (const m of L.byId.values()) {
      const stack = [...(m[k] ?? [])], walked = new Set<string>();
      while (stack.length) {
        const x = stack.pop()!;
        if (x === m.id) { errors.push(`data/materials/${m.class}.json: ${m.id}: ${k} has a cycle`); break; }
        if (walked.has(x)) continue;
        walked.add(x);
        stack.push(...(L.byId.get(x)?.[k] ?? []));
      }
    }
  const aliases = new Map<string, string>();
  for (const m of L.byId.values())
    for (const a of m.aliases ?? []) {
      if (a !== a.toLowerCase()) errors.push(`data/materials/${m.class}.json: ${m.id}: alias "${a}" is not lower case`);
      if (aliases.has(a) && aliases.get(a) !== m.id) errors.push(`data/materials/${m.class}.json: ${m.id}: alias "${a}" is also on ${aliases.get(a)}`);
      aliases.set(a, m.id);
    }
  // The edges.
  const techniques = new Set(loadTechniques().map((t) => t.slug));
  const processSeen = new Set<string>();
  for (const { file, edge } of L.edges) {
    const [kind, id] = edge.process.split(":");
    const ok = kind === "technique" ? techniques.has(id) : lists.get(kind)?.some((e) => e.id === id);
    if (!ok) errors.push(`${file}: process "${edge.process}" does not exist`);
    if (processSeen.has(edge.process)) errors.push(`${file}: process "${edge.process}" has a second record`);
    processSeen.add(edge.process);
    if (!ROLES.some((r) => edge[r]?.length)) errors.push(`${file}: ${edge.process}: the record has no edge`);
    for (const r of ["acts_on", "adds", "makes"] as const) for (const m of edge[r] ?? []) if (!L.byId.has(m)) errors.push(`${file}: ${edge.process}: ${r} → "${m}" is not a material`);
    for (const t of edge.with ?? []) if (!L.tools.has(t)) errors.push(`${file}: ${edge.process}: with → "${t}" is not in data/materials/tools.json`);
  }
  const toolIds = [...L.tools.keys()];
  if (new Set(toolIds).size !== toolIds.length) errors.push(`data/materials/tools.json: a tool id is used twice`);
  for (const t of L.tools.values()) if (!L.edges.some(({ edge }) => edge.with?.includes(t.id))) errors.push(`data/materials/tools.json: tool "${t.id}" has no edge`);
  return errors;
}

// ── Free text to material ids ─────────────────────────────────────────────────────────────────────────────────────
/** Match one free-text material string ("oil on canvas", "stucco on brick") to material ids. */
export function matchText(text: string, alias: Map<string, string>): string[] {
  const t = text.toLowerCase().replace(/\s+/g, " ").trim();
  if (alias.has(t)) return [alias.get(t)!];
  const out: string[] = [];
  for (const part of t.split(/\s*(?:,| and | or | on | with |\(|\))\s*/).map((x) => x.trim()).filter(Boolean)) {
    if (alias.has(part)) { out.push(alias.get(part)!); continue; }
    // The longest alias that is a whole-word part of the string: "quarter-sawn oak" → oak.
    let best = "";
    for (const a of alias.keys()) if (a.length > best.length && new RegExp(`(^|[\\s-])${a.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}$`).test(part)) best = a;
    if (best) out.push(alias.get(best)!);
  }
  return [...new Set(out)];
}
export function aliasMap(L: Layer): Map<string, string> {
  const m = new Map<string, string>();
  for (const x of L.byId.values()) {
    m.set(x.id.replace(/-/g, " "), x.id);
    m.set(x.name.toLowerCase().replace(/\s*\(.*?\)/g, ""), x.id);
  }
  for (const x of L.byId.values()) for (const a of x.aliases ?? []) m.set(a, x.id);
  return m;
}

// ── Style to material and style to process links (derived) ────────────────────────────────────────────────────────
export type Use = "primary" | "secondary" | "avoid" | "named";
export interface StyleLink { style: string; domain: string; material: string; use: Use; via: string }
export interface ProcessUse { style: string; domain: string; process: string }

const get = (o: any, path: string): any => path.split(".").reduce((x, k) => x?.[k], o);
export function styleLinks(L: Layer): { links: StyleLink[]; processes: ProcessUse[]; unmatched: { domain: string; text: string }[] } {
  const links: StyleLink[] = [], processes: ProcessUse[] = [], unmatched: { domain: string; text: string }[] = [];
  const alias = aliasMap(L);
  const add = (s: Style, material: string, use: Use, via: string) => { if (L.byId.has(material)) links.push({ style: s.id, domain: s.domain, material, use, via }); };
  const lists: Record<string, [string, Use][]> = {
    cuisine: [["pantry.primary", "primary"], ["pantry.secondary", "secondary"], ["pantry.avoid", "avoid"]],
    industrial: [["materials.primary", "primary"], ["materials.secondary", "secondary"], ["materials.avoid", "avoid"]],
    fashion: [["fabrics.primary", "primary"], ["fabrics.secondary", "secondary"], ["fabrics.avoid", "avoid"]],
    ceramics: [["bodies.primary", "primary"], ["bodies.secondary", "secondary"], ["bodies.avoid", "avoid"], ["glaze.glazes", "named"]],
  };
  const text: Record<string, [string, Use][]> = {
    architecture: [["materials.primary", "primary"], ["materials.secondary", "secondary"]],
    interior: [["materials.primary", "primary"], ["materials.secondary", "secondary"]],
    painting: [["media", "primary"]],
  };
  const procs: Record<string, [string, string][]> = {
    cuisine: [["technique.methods", "cuisine.methods"]], ceramics: [["glaze.decorations", "ceramics.decorations"]],
    fashion: [["surface.finishes", "fashion.finishes"]], industrial: [["finish.finishes", "industrial.finishes"]],
  };
  for (const domain of new Set([...Object.keys(lists), ...Object.keys(text)]))
    for (const { style: s } of loadStyleFiles(domain)) {
      for (const [path, use] of lists[domain] ?? []) for (const id of get(s, path) ?? []) add(s, id, use, path);
      for (const [path, use] of text[domain] ?? [])
        for (const t of get(s, path) ?? []) {
          if (typeof t !== "string") continue;
          const ids = matchText(t, alias);
          if (!ids.length) unmatched.push({ domain, text: t });
          for (const id of ids) add(s, id, use, `${path}: "${t}"`);
        }
      for (const [path, list] of procs[domain] ?? []) for (const id of get(s, path) ?? []) processes.push({ style: s.id, domain, process: `${list}:${id}` });
    }
  for (const { technique: t } of loadTechniques()) for (const sid of t.styles) processes.push({ style: sid, domain: "", process: `technique:${t.id}` });
  // One link for each style, material and use.
  const key = (l: StyleLink) => `${l.style}|${l.material}|${l.use}`;
  const uniq = [...new Map(links.map((l) => [key(l), l])).values()];
  return { links: uniq, processes, unmatched };
}
