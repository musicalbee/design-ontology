# Contributing

A contribution is one JSON file in `data/<domain>/styles/`. The build makes all other files.

## Procedure

1. Copy `data/design/styles/swiss-international.json` to `data/design/styles/<id>.json`.
2. Set `id` to the file name without the extension. The id is kebab-case and unique across all domains.
3. Fill each field. The schema (`schema/domains/design.schema.json`) describes each one.
4. Run `npm run build`.
5. If the build reports an error, correct the data file and run the build again.
6. Open `demo/index.html` through a local server and look at your style: `python3 -m http.server --directory . 4000`, then `http://localhost:4000/demo/#<id>`.
7. Commit the data file. The pre-commit hook (`.husky/pre-commit`, installed by `npm install`) runs the type check and the build, then adds `graph/`, `skills/` and `README.md` to the commit.
8. Open a pull request. Say in two lines why the style is a style of its own and not a variant of one that exists.

## Rules for the content

- **Numbers.** Each rule names a property and a measure: px, em, a ratio, a column count, a hex value.
- **Anti-patterns name the thing.** Write "Rounded corners on containers". Do not start with "Never", "Do not" or "Avoid"; the compiler adds `NEVER`.
- **One text colour.** Write `--color-text` for the main field. Do not write `--color-on-*`, `--color-muted-on-*` or `--color-link*`; the compiler derives them and holds each one at 4.5 to 1.
- **The `visual` block.** Set the type treatment, the icon treatment, the layout and `art.recipe`. A recipe is a function in `scripts/pack.ts`. If no recipe fits your style, add one there.
- **Scores are relative.** Before you set a vector, run `npm run query -- list` and compare with the styles that have the same score.
- **Lineage is a claim.** `evolved_from` and `rebelled_against` point only at styles that started earlier or in the same year. `hybridized_with` has no year rule. `echoes` points only at a style in a different domain.
- **Fonts are open source.** SIL OFL or Apache, available on Google Fonts.
- **Tokens are valid CSS.** All 16 required custom properties are present. Extra tokens are welcome.
- **Print styles have motion too.** Set `motion.native` to `false` and give a faithful translation for screen.
- **Sources.** Give one or two references that a reader can find. Add a URL only if it is stable.
- **Language.** British spelling, short sentences, no marketing words.

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
