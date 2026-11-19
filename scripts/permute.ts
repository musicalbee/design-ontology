/**
 * Permutations (rule 6 of the curation rules): the knobs of a style, and the style guide that the
 * knob values derive.
 *
 * Each domain names its knobs in domains/<domain>.json. Each style gives the range of each knob in
 * `permutations`. For the design domain, `applyKnobs` derives the full token set from the knob
 * values: the compiler writes skills/<id>/tokens.css from the defaults, and the CLI writes a
 * variant from other values.
 *
 *   npm run permute -- <style-id>                          the tokens at the defaults
 *   npm run permute -- <style-id> corner_radius=4 base_colour=#0050FF
 *   npm run permute -- <style-id> --list                   the knobs and the range of each one
 */
import { fileURLToPath } from "node:url";
import { groundCss, type GroundKind } from "./ground.js";
import { loadAll, loadDomains, type Domain, type Knob, type KnobRange, type Style } from "./lib.js";
import { derivedTokens, typeTokens, type Visual } from "./pack.js";

export type KnobValues = Record<string, number | string>;

const px = (v: string | undefined): number | undefined => {
  const m = v === undefined ? null : /^(-?\d+(?:\.\d+)?)(px)?$/.exec(v.trim());
  return m ? Number(m[1]) : undefined;
};
const HEX = /^#[0-9A-Fa-f]{6}$/;

/** The corners of a border-radius shorthand of 1 to 4 lengths ("0px 48px 0px 0px"), or undefined. */
const corners = (v: string | undefined): number[] | undefined => {
  const parts = v?.trim().split(/\s+/);
  if (!parts || parts.length < 2 || parts.length > 4) return undefined;
  const n = parts.map((p) => px(p));
  return n.every((x) => x !== undefined) ? (n as number[]) : undefined;
};
const round = (n: number, d = 3) => Number(n.toFixed(d));

/** The default of a knob for a style: from the token that the knob names, else from permutations. */
export function knobDefault(style: Style, knob: Knob): number | string | undefined {
  if (knob.token) {
    const raw = style.tokens?.css[knob.token];
    if (raw === undefined) return undefined;
    if (knob.kind === "colour" || knob.kind === "enum") return raw;
    // A shorthand with more than one corner (for example "0px 48px 0px 0px"): the knob reads the largest corner.
    return px(raw) ?? (knob.kind === "length" ? corners(raw)?.reduce((a, b) => Math.max(a, b)) : undefined) ?? raw;
  }
  return style.permutations?.[knob.key]?.default;
}

export function knobDefaults(style: Style, domain: Domain): KnobValues {
  const out: KnobValues = {};
  for (const k of domain.knobs) {
    const v = knobDefault(style, k);
    if (v !== undefined) out[k.key] = v;
  }
  return out;
}

/** Problems with one value against the knob and the range of the style. Empty when the value is valid. */
export function checkValue(knob: Knob, range: KnobRange | undefined, value: number | string): string[] {
  const out: string[] = [];
  if (knob.kind === "colour") {
    if (typeof value !== "string" || !HEX.test(value)) out.push(`${knob.key}: "${value}" is not a #RRGGBB colour`);
  } else if (knob.kind === "enum") {
    if (!knob.options!.includes(String(value))) out.push(`${knob.key}: "${value}" is not one of ${knob.options!.join(", ")}`);
  } else {
    if (typeof value !== "number" || Number.isNaN(value)) return [`${knob.key}: "${value}" is not a number`];
    if (knob.kind === "integer" && !Number.isInteger(value)) out.push(`${knob.key}: ${value} is not an integer`);
    if (value < knob.min! || value > knob.max!) out.push(`${knob.key}: ${value} is outside the domain range ${knob.min}–${knob.max}`);
    if (range?.min !== undefined && value < range.min) out.push(`${knob.key}: ${value} is below the style minimum ${range.min}`);
    if (range?.max !== undefined && value > range.max) out.push(`${knob.key}: ${value} is above the style maximum ${range.max}`);
  }
  if (range?.options && !range.options.map(String).map((s) => s.toUpperCase()).includes(String(value).toUpperCase()))
    out.push(`${knob.key}: "${value}" is not one of the style options ${range.options.join(", ")}`);
  return out;
}

/** The body size in px, from visual.type.body_size. */
const bodyPx = (style: Style): number => px((style.visual as { type?: { body_size?: string } } | undefined)?.type?.body_size) ?? 16;

/**
 * The design domain: the authored tokens with the knob values put in, plus the type scale that the
 * ratio derives. The compiler derives the text colours (--color-on-*) from this result, so a new
 * base colour gets legible text without more work.
 */
export function applyKnobs(style: Style, values: KnobValues): Record<string, string> {
  const css = { ...style.tokens!.css };
  const v = values;
  if (typeof v.base_colour === "string") css["--color-primary"] = v.base_colour.toUpperCase();
  if (typeof v.accent_colour === "string") css["--color-accent"] = v.accent_colour.toUpperCase();
  if (typeof v.corner_radius === "number") {
    // An authored shorthand keeps its shape: each corner scales with the largest one.
    const r = v.corner_radius;
    const was = corners(style.tokens!.css["--border-radius"]);
    const max = was ? Math.max(...was) : 0;
    css["--border-radius"] =
      was && max > 0 ? was.map((c) => `${round((c * r) / max, 2)}px`).join(" ") : `${r}px`;
  }
  if (typeof v.grid_step === "number") {
    const was = px(style.tokens!.css["--space-unit"]);
    const gutter = px(style.tokens!.css["--grid-gutter"]);
    css["--space-unit"] = `${v.grid_step}px`;
    if (was && gutter !== undefined && v.grid_step !== was) css["--grid-gutter"] = `${Math.round((gutter * v.grid_step) / was)}px`;
  }
  if (typeof v.grid_columns === "number") css["--grid-columns"] = String(v.grid_columns);
  if (typeof v.type_scale_ratio === "number") {
    const r = v.type_scale_ratio;
    const body = bodyPx(style);
    css["--type-ratio"] = String(r);
    css["--size-small"] = `${round(body / r, 2)}px`;
    css["--size-h3"] = `${round(body * r ** 2, 2)}px`;
    css["--size-h2"] = `${round(body * r ** 3, 2)}px`;
    css["--size-h1"] = `${round(body * r ** 4, 2)}px`;
  }
  return css;
}

let domainCache: Domain[] | undefined;
/**
 * The full token set of a design style at the given knob values (the defaults when none are given):
 * the authored tokens with the knobs put in, the type scale, the legible text colours for each
 * field, the type values and the ground. skills/<id>/tokens.css is this list at the defaults.
 */
export function cssTokens(style: Style, values?: KnobValues, warn?: (m: string) => void): [string, string][] {
  domainCache ??= loadDomains();
  const domain = domainCache.find((d) => d.id === style.domain)!;
  const css = applyKnobs(style, values ?? knobDefaults(style, domain));
  const v = style.visual as Visual | undefined;
  const ground = v?.ground ? { "--ground": groundCss(v.ground.kind as GroundKind, css) } : {};
  return Object.entries({ ...css, ...derivedTokens(css, warn), ...(v ? typeTokens(v) : {}), ...ground });
}

// ── CLI ─────────────────────────────────────────────────────────────────────
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const [id, ...rest] = process.argv.slice(2);
  const { domains, styles } = loadAll();
  const style = styles.find((s) => s.id === id);
  if (!style) {
    console.error(`Give a style id. Known: ${styles.map((s) => s.id).join(", ")}`);
    process.exit(1);
  }
  const domain = domains.find((d) => d.id === style.domain)!;
  if (rest.includes("--list")) {
    for (const k of domain.knobs) {
      const r = style.permutations?.[k.key];
      const range = r?.options ? `options ${r.options.join(", ")}` : r ? `${r.min ?? k.min}–${r.max ?? k.max}` : "no range";
      console.log(`${k.key.padEnd(20)} default ${String(knobDefault(style, k) ?? "—").padEnd(10)} ${range}${k.unit ? ` ${k.unit}` : ""}`);
    }
    process.exit(0);
  }
  if (domain.id !== "design") {
    console.error(`The derivation is built for the design domain only. "${style.id}" is in "${domain.id}"; its knobs are in domains/${domain.id}.json.`);
    process.exit(1);
  }
  const values = knobDefaults(style, domain);
  const problems: string[] = [];
  for (const arg of rest) {
    const [key, raw] = arg.split("=");
    const knob = domain.knobs.find((k) => k.key === key);
    if (!knob || raw === undefined) {
      problems.push(`"${arg}" is not knob=value. Knobs: ${domain.knobs.map((k) => k.key).join(", ")}`);
      continue;
    }
    const value = knob.kind === "colour" || knob.kind === "enum" ? raw : Number(raw);
    problems.push(...checkValue(knob, style.permutations?.[key], value));
    values[key] = value;
  }
  if (problems.length) {
    for (const p of problems) console.error(`error ${p}`);
    process.exit(1);
  }
  console.log(`[data-style="${style.id}"] {\n${cssTokens(style, values).map(([k, v]) => `  ${k}: ${v};`).join("\n")}\n}`);
}
