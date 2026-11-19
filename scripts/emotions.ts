/**
 * The emotions layer: terms in data/emotions/, evokes edges in data/evokes/.
 *
 *   npm run emotions:infer   (re)write the inferred edges from emotion.keywords of each style.
 *                            An edge that has measured or stated evidence is kept as it is.
 */
import { existsSync, readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { ROOT, loadDomains, loadStyleFiles, readJson } from "./lib.js";

export type EvidenceKind = "measured" | "stated" | "inferred";
export type Evidence = { kind: EvidenceKind; claim?: string; source?: { title: string; url?: string }; basis?: string[] };
export type Edge = { emotion: string; strength: number; evidence: Evidence[] };
export type EvokesFile = { $schema?: string; carrier: string; domain: string | null; edges: Record<string, Edge[]> };
export type Emotion = {
  id: string; name: string; aliases: string[]; model: "aesthemos" | "culture"; family: string;
  pad: { p: number; a: number; d: number; source: string }; culture: string | null; nearest: string[];
  opposite: string | null; definition: string; sources: { title: string; url?: string }[];
};

/** Query weight of each evidence kind (proposal § 5). */
export const EVIDENCE_WEIGHT: Record<EvidenceKind, number> = { measured: 1, stated: 0.7, inferred: 0.3 };

const EMO_DIR = join(ROOT, "data", "emotions");
const EVOKES_DIR = join(ROOT, "data", "evokes");

export function loadEmotions(): { file: string; slug: string; emotion: Emotion }[] {
  return readdirSync(EMO_DIR)
    .filter((f) => f.endsWith(".json") && f !== "keyword-map.json")
    .sort()
    .map((f) => ({ file: join("data", "emotions", f), slug: f.replace(/\.json$/, ""), emotion: readJson<Emotion>(join(EMO_DIR, f)) }));
}

export function loadEvokes(): { file: string; slug: string; evokes: EvokesFile }[] {
  if (!existsSync(EVOKES_DIR)) return [];
  return readdirSync(EVOKES_DIR)
    .filter((f) => f.endsWith(".json"))
    .sort()
    .map((f) => ({ file: join("data", "evokes", f), slug: f.replace(/\.json$/, ""), evokes: readJson<EvokesFile>(join(EVOKES_DIR, f)) }));
}

export type Range = { min: number; max: number };
export type Cue = {
  id: string; name: string; variable: string;
  direction: { change: string; unit: string; range: { from: number | string; to: number | string }; note?: string };
  effects: { target: string; sign: 1 | -1; size: string }[]; evidence_kind: "measured"; claim: string;
  study: { participants: number | null; setting: string }; caveat: string; weak?: boolean; sources: { title: string; url: string }[];
};
export type Moment = {
  id: string; name: string; kind: string; description?: string; emotions: { emotion: string; strength: number }[];
  time: { of_day: string[]; season: string[]; sun_elevation_deg: Range | null };
  light: { cct_k: Range | null; lux: Range | null; direction: string; quality: string; sources: string[] };
  weather: string[]; sound: string[]; scent: string[]; people: { min: number; max: number | null; activity: string };
  carriers: { styles: string[]; techniques?: string[]; things: string[] }; cues: string[];
  scene_ref: null | { film: string; year: number; director?: string; wikidata: string; minutes: Range; timing: string; description: string };
  sources: { title: string; url: string }[];
};

function loadDir<T>(dir: string): { file: string; slug: string; data: T }[] {
  const abs = join(ROOT, "data", dir);
  if (!existsSync(abs)) return [];
  return readdirSync(abs)
    .filter((f) => f.endsWith(".json"))
    .sort()
    .map((f) => ({ file: join("data", dir, f), slug: f.replace(/\.json$/, ""), data: readJson<T>(join(abs, f)) }));
}
/** Cues: measured links from a physical variable to an emotion (data/cues/). */
export const loadCues = () => loadDir<Cue>("cues").map(({ file, slug, data }) => ({ file, slug, cue: data }));
/** Moments: known situations with light, weather, sound, people and carriers (data/moments/). */
export const loadMoments = () => loadDir<Moment>("moments").map(({ file, slug, data }) => ({ file, slug, moment: data }));

export const loadKeywordMap = (): Record<string, string[]> =>
  readJson<{ map: Record<string, string[]> }>(join(EMO_DIR, "keyword-map.json")).map;

const sourced = (e: Edge) => e.evidence.some((x) => x.kind !== "inferred");

/** Inferred edges for one style: each mapped keyword adds 1 (split over its emotions); the top emotion is 1. */
export function inferEdges(keywords: string[], map: Record<string, string[]>): Edge[] {
  const score = new Map<string, { s: number; basis: string[] }>();
  for (const raw of keywords) {
    const k = raw.toLowerCase();
    const emos = map[k] ?? [];
    for (const e of emos) {
      const cur = score.get(e) ?? { s: 0, basis: [] };
      cur.s += 1 / emos.length;
      cur.basis.push(`keyword:${k}`);
      score.set(e, cur);
    }
  }
  const max = Math.max(0, ...[...score.values()].map((v) => v.s));
  return [...score.entries()]
    .map(([emotion, v]) => ({ emotion, strength: Math.max(0.1, Math.round((v.s / max) * 10) / 10), evidence: [{ kind: "inferred" as const, basis: v.basis }] }))
    .sort((a, b) => b.strength - a.strength || a.emotion.localeCompare(b.emotion));
}

if (process.argv[1]?.endsWith("emotions.ts") && process.argv.includes("--infer")) {
  const map = loadKeywordMap();
  let styles = 0, edges = 0, none = 0;
  for (const d of loadDomains()) {
    const path = join(EVOKES_DIR, `${d.id}.json`);
    const old: EvokesFile | null = existsSync(path) ? readJson<EvokesFile>(path) : null;
    const out: EvokesFile = { $schema: "../../schema/evokes.schema.json", carrier: "style", domain: d.id, edges: {} };
    for (const { style } of loadStyleFiles(d.id).sort((a, b) => a.style.id.localeCompare(b.style.id))) {
      const kept = (old?.edges[style.id] ?? []).filter(sourced);
      const keptIds = new Set(kept.map((e) => e.emotion));
      const kw = (style as { emotion?: { keywords?: string[] } }).emotion?.keywords ?? [];
      const inferred = inferEdges(kw, map).filter((e) => !keptIds.has(e.emotion));
      const all = [...kept, ...inferred];
      styles++;
      if (!all.length) { none++; continue; }
      out.edges[style.id] = all;
      edges += all.length;
    }
    if (Object.keys(out.edges).length) writeFileSync(path, JSON.stringify(out, null, 2) + "\n");
  }
  console.log(`emotions:infer · ${styles} styles · ${edges} edges · ${none} styles with no mapped keyword`);
}
