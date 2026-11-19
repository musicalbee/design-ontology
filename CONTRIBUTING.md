# Contributing

A contribution is one JSON file in `data/<domain>/styles/`, `data/people/`, `data/techniques/` or `data/media/`. The build makes all other files. Each style must pass the six curation rules below. The validator stops the build on each miss.

## Procedure

1. Copy `data/internet/styles/swiss-international.json` to `data/internet/styles/<id>.json`.
2. Set `id` to the file name without the extension. The id is kebab-case and unique across all domains.
3. Fill each field. The schema (`schema/domains/internet.schema.json`) describes each one.
4. Make the style pass the six curation rules (see "The six curation rules" below):
   - Name at least one person, with a role, in `data/people/` (see "A new person").
   - Name the 1 to 3 top techniques of the style in `data/techniques/` (see "A technique"). If a technique is there, add the style id to its `styles` and to the adoption of the style's domain.
   - Name at least one medium in `data/media/` (see "A medium").
   - Give the range of each knob of the domain in `permutations` (see "Permutations").
   - Make each asset that the domain names (see "The asset library").
5. Run `npm run build`. A style that misses a rule is an error. A new style cannot go on the allowlist.
6. If the build reports an error, correct the data file and run the build again.
7. Open `demo/index.html` through a local server and look at your style: `python3 -m http.server --directory . 4000`, then `http://localhost:4000/demo/#<id>`.
8. Commit the data file and the people, technique and media files. The pre-commit hook (`.husky/pre-commit`, installed by `npm install`) moves the package version one patch step, runs the type check and the build, then adds `package.json`, `graph/`, `skills/` and `README.md` to the commit.
9. Open a pull request. Say in two lines why the style is a style of its own and not a variant of one that exists. Name its people, techniques and media.

## The six curation rules

`scripts/curation.ts` checks each style against these rules. `npm run build` runs the check. A miss is an error, not a warning.

| Rule | The style must have | Where |
|---|---|---|
| 1. identity | a name, a dated period (`time_period.label` and `start`), a summary, an era that exists, and a lineage edge or a `lineage.root` reason | the style file |
| 2. people | at least one person who took part directly, with a role | `data/people/` |
| 3. techniques | at least one technique, invented or inherited | `data/techniques/` |
| 4. media | at least one medium: a salon, club, school, workshop, magazine, publisher, gallery, auction house or platform | `data/media/` |
| 5. assets | each asset type that the domain names, with its file and its record | `domains/<domain>.json` `assets` |
| 6. permutations | a range for each knob that the domain names | the style file, `permutations` |

Rule 1. Use `lineage.root` only for a style that has no edge, for example the first style of a domain. Write one sentence that gives the reason. A style with an edge and a root reason is an error.

Rules 2, 3 and 4. The edge has one owner. A person, a technique or a medium names its styles; the style file does not name them. This keeps one record for each edge.

### The allowlist

`data/curation-allowlist.json` lists the styles that were in the repository when the gate started, each with the rules that it misses. It is the only exception to the six rules.

- The list has an expiry date. After that date, each entry on it is an error. The date cannot move later.
- The list can only shrink. The build compares it with the list on the base branch (`origin/main`, or the ref in `CURATION_BASE`). An entry that is not on the base list is an error.
- A new style cannot go on the list.
- When a style passes a rule, remove that rule from its entry. A stale entry is an error, so the list stays true.
- If a pull request on the people, technique or media layer makes a style pass a rule, that pull request removes the entry.

## Permutations

A knob is one setting that can change while the style stays itself: a base colour, a corner radius, a type-scale ratio, a focal length. Each domain names its knobs in `domains/<domain>.json` `knobs`: the key, the kind (colour, length, number, integer or enum), the domain range, the token that holds the value (if one does), and the outputs that it changes.

Each style gives its own range for each knob in `permutations`:

```json
"permutations": {
  "corner_radius": { "min": 0, "max": 4 },
  "base_colour": { "options": ["#E30613", "#000000"] },
  "type_scale_ratio": { "default": 1.333, "min": 1.25, "max": 1.414 }
}
```

- If the knob names a token, the token is the default. Do not write `default`.
- If the knob names no token, write `default`.
- A number knob needs `min` and `max`, or `options`. A colour knob and an enum knob need `options`.
- The default and each option must be in the range of the domain and in the range of the style.

For the design domain, `scripts/permute.ts` derives the full token set from the knob values: the colours, the radius, the space unit, the type scale and the text colours that the compiler derives from them. `skills/<id>/tokens.css` is this set at the defaults. To get a variant, run `npm run permute -- <id> corner_radius=4 base_colour=#0050FF`. To see the knobs and their ranges, run `npm run permute -- <id> --list`. The other domains have the knob schema now; their derivation comes later.

The backfill of the design styles used this rule. Use it as a start for a new style, then correct it by eye:

- `base_colour`: the primary, the accent and the text colour of the style.
- `accent_colour`: the accent and one other colour of the style.
- `corner_radius` and `grid_step`: the authored value, plus and minus 50 %, inside the domain range.
- `type_scale_ratio`: from the typographic expressiveness score (1 → 1.2, 2 → 1.25, 3 → 1.333, 4 → 1.5, 5 → 1.618), one step up and down on the ladder 1.125, 1.2, 1.25, 1.333, 1.414, 1.5, 1.618.

## The asset library

Each domain names the assets that each of its styles must have, in `domains/<domain>.json` `assets`. Each asset type has:

- `type` and `purpose`: what it is and what an agent uses it for.
- `made_by`: `code` (the build makes it) or `model` (an image model makes it from a prompt).
- `file`: the path, with `{id}` for the style id and `{part}` for each item of `parts`.
- `canvas`: the permitted sizes in px.
- For a `model` asset: `manifest` and `entry`, the JSON file and the path in it that hold the record of each file. The record holds the prompt, the width and the height.
- For a `code` asset that the build writes after the check: `input`, the style field that the build reads. The check looks for that field.

The check fails if a file is missing, if its record is missing, if a model asset has no prompt, or if the canvas is not a permitted size.

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
4. Put the main style first in `styles`. Its domain is the lane of the person on the time line. Give each style a role. The roles fall into four classes:
   - pioneer: `founder`, `forerunner`
   - artisan: `key-figure`, `artisan`
   - influencer: `populariser`, `trend-setter`, `rebel`
   - patron: `patron` (an investor, a collector, a client or a sponsor)
5. If a milestone is after the year of death, set `"posthumous": true` on it.
6. Link a portrait on Wikimedia Commons with a free licence, and copy its credit. If there is none, write null.
7. Run `npm run build`.

## A technique

A technique is a cut, a motion rule, a motif, a material, a process, a tool, a skill or a technology that started in one domain and moved into others. A style does not own it. The technique names the styles that use it.

1. Write `data/techniques/<id>.json`. The schema is `schema/technique.schema.json`.
2. Set `origin` to the first year with a firm record. Set `circa` to `true` if the year is an estimate.
3. Add one item to `adoptions` for each move into a domain, in order of year. Give the person, work, tool or medium that carried it in `via`.
4. In `adoptions[].styles`, name only styles of that adoption's domain. Put each of them in `styles` too.
5. Write 2 to 6 rules in `how`. Each rule names a property and a measure.
6. In `origin.styles`, name the styles that invented the technique. Each other style in `styles` inherited it.
7. Run `npm run build`. The compiler adds a "Techniques" section to each style that the technique names, and writes `skills/TECHNIQUES.md`.

## A medium

A medium is a place or a channel that carried a style: a salon, a club, a school, a workshop, a studio, a magazine, a publisher, a gallery, an exhibition, an auction house or a platform.

1. Write `data/media/<id>.json`. The schema is `schema/medium.schema.json`. The id is the file name.
2. Set `founded` and `closed` from an open source. If it is still open, set `closed` to null. Do not guess a year.
3. In `styles`, name each style that the medium carried, with its part: `launched`, `exhibited`, `published`, `taught`, `made`, `sold` or `gathered`.
4. In `people`, name the people in `data/people/` who ran it or worked through it.
5. Write the summary in your own words. Give one or two sources.
6. Run `npm run build`. The compiler adds a "Media" section to each style that the medium names.

## A disagreement with a score or an edge

Open an issue or a pull request with the argument and a source. Scores and edges are editorial judgements. A better argument wins.

## A new domain

1. Write `domains/<domain>.json`: the task sentence, five vector axes, the list of facets, the asset types (`assets`) and at least three knobs (`knobs`). The schema is `schema/domain.schema.json`.
2. Write `schema/domains/<domain>.schema.json`. Refer to `schema/core.schema.json` for identity, philosophy, lineage, emotion and agent routing.
3. Add at least one era in `data/<domain>/eras/` and two styles in `data/<domain>/styles/`.
4. Run `npm run build`. The compiler reads the manifest; it needs no change for a new domain.

The architecture domain is the worked example.

## Change to the schema or the compiler

Open an issue first. A change to the schema changes each style file and each generated skill.
