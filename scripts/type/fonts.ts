// Download a font file once and keep it in the OS temp folder.
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { createHash } from "node:crypto";

export async function fontBytes(url: string): Promise<Uint8Array> {
  const dir = join(tmpdir(), "design-ontology-fonts");
  mkdirSync(dir, { recursive: true });
  const path = join(dir, createHash("sha1").update(url).digest("hex").slice(0, 16) + ".ttf");
  if (existsSync(path)) return readFileSync(path);
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${url}: HTTP ${res.status}`);
  const buf = new Uint8Array(await res.arrayBuffer());
  writeFileSync(path, buf);
  return buf;
}
