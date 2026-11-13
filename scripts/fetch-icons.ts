/**
 * Vendors the demo icons. Reads icons/sources.json, takes each named icon from the Iconify
 * copy of its open-source set on npm (@iconify-json/<prefix>), and writes icons/packs/<id>.json
 * with the licence of the set. The build reads only the vendored files, so it needs no network.
 * Run: npm run icons
 */
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ROOT, write } from "./lib.js";

interface Source { name: string; variant: string; mode: string; prefix: string; icons: Record<string, string> }
interface IconData { body: string; width?: number; height?: number }
interface IconSet { icons: Record<string, IconData>; aliases?: Record<string, { parent: string }>; width?: number; height?: number }
interface Info { author: { name: string; url?: string }; license: { title: string; spdx?: string; url?: string } }

const sources = JSON.parse(readFileSync(join(ROOT, "icons", "sources.json"), "utf8")) as Record<string, Source>;
const cache = new Map<string, Promise<unknown>>();
const get = (url: string) => {
  if (!cache.has(url)) cache.set(url, fetch(url).then((r) => { if (!r.ok) throw new Error(`${r.status} ${url}`); return r.json(); }));
  return cache.get(url)!;
};

const index: Record<string, unknown> = {};
for (const [id, src] of Object.entries(sources)) {
  const base = `https://cdn.jsdelivr.net/npm/@iconify-json/${src.prefix}`;
  const pkg = (await get(`${base}/package.json`)) as { version: string };
  const at = `${base}@${pkg.version}`;
  const [set, info] = (await Promise.all([get(`${at}/icons.json`), get(`${at}/info.json`)])) as [IconSet, Info];
  const icons: Record<string, { name: string; width: number; height: number; body: string }> = {};
  for (const [concept, name] of Object.entries(src.icons)) {
    const real = set.icons[name] ? name : set.aliases?.[name]?.parent;
    const icon = real ? set.icons[real] : undefined;
    if (!icon) throw new Error(`${id}: no icon "${name}" in ${src.prefix}@${pkg.version}`);
    icons[concept] = { name, width: icon.width ?? set.width ?? 16, height: icon.height ?? set.height ?? 16, body: icon.body };
  }
  const meta = {
    id, name: src.name, variant: src.variant, mode: src.mode,
    source: `@iconify-json/${src.prefix}@${pkg.version}`,
    author: info.author.name, author_url: info.author.url ?? "",
    license: info.license.title, license_spdx: info.license.spdx ?? "", license_url: info.license.url ?? "",
  };
  index[id] = meta;
  write(`icons/packs/${id}.json`, JSON.stringify({ ...meta, icons }, null, 2) + "\n");
  console.log(`${id}: ${Object.keys(icons).length} icons, ${info.license.title}`);
}
write("icons/packs/index.json", JSON.stringify(index, null, 2) + "\n");
