/**
 * A small query tool over the ontology, for people and for agents with a shell.
 *
 *   npm run query -- list [domain]
 *   npm run query -- show <id>
 *   npm run query -- near <id> [n]              nearest styles by vector distance
 *   npm run query -- path <from> <to>           shortest lineage path between two styles
 *   npm run query -- where grid_rigidity>=4 ornamentation<=2
 *   npm run query -- match "<free text>"        rank styles by trigger and keyword overlap
 */
import { loadAll, nearest, readJson, ROOT, type Style } from "./lib.js";
import { join } from "node:path";

const { domains, styles } = loadAll();
const byId = new Map(styles.map((s) => [s.id, s]));
const [cmd, ...args] = process.argv.slice(2);

const need = (id: string | undefined): Style => {
  const s = id ? byId.get(id) : undefined;
  if (!s) {
    console.error(`Unknown style "${id}". Run: npm run query -- list`);
    process.exit(1);
  }
  return s;
};
const row = (s: Style) => `${s.id.padEnd(34)} ${s.domain.padEnd(13)} ${Object.values(s.vectors).join(" ")}  ${s.name}`;

switch (cmd) {
  case "list":
    {
      // An old domain id (domains/<id>.json `former_ids`) lists the styles of the new id.
      const want = args[0] && (domains.find((d) => d.former_ids?.includes(args[0]))?.id ?? args[0]);
      for (const s of styles) if (!want || s.domain === want) console.log(row(s));
    }
    break;

  case "show":
    console.log(JSON.stringify(need(args[0]), null, 2));
    break;

  case "near": {
    const s = need(args[0]);
    const axes = domains.find((d) => d.id === s.domain)!.vectors;
    for (const n of nearest(s, styles, axes, Number(args[1] ?? 5))) console.log(`${n.distance.toFixed(2)}  ${n.id}`);
    break;
  }

  case "path": {
    const from = need(args[0]).id;
    const to = need(args[1]).id;
    const { edges } = readJson<{ edges: { from: string; to: string; type: string }[] }>(join(ROOT, "graph", "lineage.json"));
    const prev = new Map<string, { id: string; via: string }>();
    const queue = [from];
    const seen = new Set([from]);
    while (queue.length && !seen.has(to)) {
      const cur = queue.shift()!;
      for (const e of edges) {
        const next = e.from === cur ? e.to : e.to === cur ? e.from : null;
        if (!next || seen.has(next)) continue;
        seen.add(next);
        prev.set(next, { id: cur, via: e.from === cur ? `—${e.type}→` : `←${e.type}—` });
        queue.push(next);
      }
    }
    if (!seen.has(to)) {
      console.log("No path.");
      break;
    }
    const steps: string[] = [to];
    for (let at = to; at !== from; at = prev.get(at)!.id) steps.unshift(prev.get(at)!.id, prev.get(at)!.via);
    console.log(steps.join(" "));
    break;
  }

  case "where": {
    const tests = args.map((a) => {
      const m = a.match(/^([a-z_]+)(<=|>=|=|<|>)([1-5])$/);
      if (!m) {
        console.error(`Cannot read "${a}". Example: grid_rigidity>=4`);
        process.exit(1);
      }
      const [, key, op, n] = m;
      const v = Number(n);
      return (s: Style) => {
        const x = s.vectors[key];
        if (x === undefined) return false;
        return op === "<=" ? x <= v : op === ">=" ? x >= v : op === "<" ? x < v : op === ">" ? x > v : x === v;
      };
    });
    for (const s of styles) if (tests.every((t) => t(s))) console.log(row(s));
    break;
  }

  case "match": {
    const words = args.join(" ").toLowerCase();
    const scored = styles
      .map((s) => {
        const terms = [...s.agent.triggers, ...s.emotion.keywords, ...s.agent.use_cases, ...s.aliases, s.name].map((t) => t.toLowerCase());
        return { s, score: terms.filter((t) => words.includes(t)).length };
      })
      .filter((x) => x.score > 0)
      .sort((a, b) => b.score - a.score || a.s.id.localeCompare(b.s.id));
    if (!scored.length) console.log("No match. Read skills/SKILL_INDEX.md and pick by vector.");
    for (const { s, score } of scored.slice(0, 5)) console.log(`${score}  ${s.id}`);
    break;
  }

  default:
    console.log("Commands: list [domain] · show <id> · near <id> [n] · path <from> <to> · where <axis><op><1-5>… · match <text>");
}
