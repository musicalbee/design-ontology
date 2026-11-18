# Contributing

A contribution is one JSON file in `data/<domain>/styles/` or in `data/people/`. The build makes all other files.

## Procedure

1. Copy `data/design/styles/swiss-international.json` to `data/design/styles/<id>.json`.
2. Set `id` to the file name without the extension. The id is kebab-case and unique across all domains.
3. Fill each field. The schema (`schema/domains/design.schema.json`) describes each one.
4. Name the 1 to 3 top techniques of the style: the cut, motion rule, motif, material, process or tool that defines it. If a technique is in `data/techniques/`, add the style id to its `styles` and to the adoption of the style's domain (add the adoption if it is not there). If not, write a new technique (see "A technique" below). The build warns about each style that has no technique.
5. Run `npm run build`.
6. If the build reports an error, correct the data file and run the build again.
7. Open `demo/index.html` through a local server and look at your style: `python3 -m http.server --directory . 4000`, then `http://localhost:4000/demo/#<id>`.
8. Commit the data file and the technique files. The pre-commit hook (`.husky/pre-commit`, installed by `npm install`) moves the package version one patch step, runs the type check and the build, then adds `package.json`, `graph/`, `skills/` and `README.md` to the commit.
9. Open a pull request. Say in two lines why the style is a style of its own and not a variant of one that exists, and name its techniques.

## Rules for the content

- **Numbers.** Each rule names a property and a measure: px, em, a ratio, a column count, a hex value.
- **Anti-patterns name the thing.** Write "Rounded corners on containers". Do not start with "Never", "Do not" or "Avoid"; the compiler adds `NEVER`.
- **One text colour.** Write `--color-text` for the main field. Do not write `--color-on-*`, `--color-muted-on-*` or `--color-link*`; the compiler derives them and holds each one at 4.5 to 1.
- **Weights.** In `visual.type`, give a weight to each role: display, subhead, body, strong and label. Take them from the `hierarchy_rules` of the style. Use only weights that the face has: the display face for display and subhead, the text face for the others. Set `accent` to the place where the style puts its emphasis: weight, size, case or colour.
- **The `visual` block.** Set the type treatment, the icon treatment, the layout and `art.recipe`. In `visual.icon.pack`, name an open-source icon family from `icons/packs/` and give the reason by the rules in `icons/principles.json`. For a new family, add it to `icons/sources.json` and run `npm run icons`. The licence must be MIT, ISC, Apache 2.0 or CC BY 4.0. A recipe is a function in `scripts/pack.ts`. If no recipe fits your style, add one there.
- **Scores are relative.** Before you set a vector, run `npm run query -- list` and compare with the styles that have the same score.
- **Lineage is a claim.** `evolved_from` and `rebelled_against` point only at styles that started earlier or in the same year. `hybridized_with` has no year rule. `echoes` points only at a style in a different domain.
- **Fonts are open source.** SIL OFL or Apache, available on Google Fonts.
- **Tokens are valid CSS.** All 16 required custom properties are present. Extra tokens are welcome.
- **Print styles have motion too.** Set `motion.native` to `false` and give a faithful translation for screen.
- **Sources.** Give one or two references that a reader can find. Add a URL only if it is stable.
- **Language.** British spelling, short sentences, no marketing words.

## A new person

1. Copy `data/people/dieter-rams.json` to `data/people/<id>.json`. The id is the file name.
2. Take the years of birth and death from Wikidata. If no open source gives a year, write null. Do not guess.
3. Write the bio and the milestones in your own words. Do not copy text from Wikipedia.
4. Put the main style first in `styles`. Its domain is the lane of the person on the time line.
5. If a milestone is after the year of death, set `"posthumous": true` on it.
6. Link a portrait on Wikimedia Commons with a free licence, and copy its credit. If there is none, write null.
7. Run `npm run build`.

## A technique

A technique is a cut, a motion rule, a motif, a material, a process or a tool that started in one domain and moved into others. A style does not own it. The technique names the styles that use it.

1. Write `data/techniques/<id>.json`. The schema is `schema/technique.schema.json`.
2. Set `origin` to the first year with a firm record. Set `circa` to `true` if the year is an estimate.
3. Add one item to `adoptions` for each move into a domain, in order of year. Give the person, work, tool or medium that carried it in `via`.
4. In `adoptions[].styles`, name only styles of that adoption's domain. Put each of them in `styles` too.
5. Write 2 to 6 rules in `how`. Each rule names a property and a measure.
6. Run `npm run build`. The compiler adds a "Techniques" section to each style that the technique names, and writes `skills/TECHNIQUES.md`.

## A disagreement with a score or an edge

Open an issue or a pull request with the argument and a source. Scores and edges are editorial judgements. A better argument wins.

## A new domain

1. Write `domains/<domain>.json`: the task sentence, five vector axes and the list of facets.
2. Write `schema/domains/<domain>.schema.json`. Refer to `schema/core.schema.json` for identity, philosophy, lineage, emotion and agent routing.
3. Add at least one era in `data/<domain>/eras/` and two styles in `data/<domain>/styles/`.
4. Run `npm run build`. The compiler reads the manifest; it needs no change for a new domain.

The architecture domain is the worked example.

## Change to the schema or the compiler

Open an issue first. A change to the schema changes each style file and each generated skill.
