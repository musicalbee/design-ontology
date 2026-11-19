---
name: monospace
description: "Apply the Monospace style (1874–present) when choosing, pairing, setting or briefing a typeface: a text face for a book or a product, a display face for a title, or a type brief for a designer. Load when the user asks for: monospace, code font, typewriter font, courier, terminal font, fixed width."
domain: typeface
era: industrial
triggers:
  - "monospace"
  - "code font"
  - "typewriter font"
  - "courier"
  - "terminal font"
  - "fixed width"
  - "developer font"
vector_profile:
  stroke_contrast: 1
  construction: 4
  x_height: 5
  width: 4
  serif_mass: 3
---

# Monospace

> When every character has the same width, columns align without a grid and each character is a unit the reader can count.

Every character takes the same width, as on a typewriter or a terminal. The narrow letters get serifs or wide arms and the wide letters are squeezed. It is the voice of code, data, forms and the typewritten document.

**Period:** 1874–present · **Era:** Industrial · **Domain:** Typeface · **Also called:** Monospaced, Fixed-pitch, Typewriter type, Code font

## When to load this skill

Load it when the user asks for: "monospace", "code font", "typewriter font", "courier", "terminal font", "fixed width", "developer font".

Good for: code blocks and editors, data tables and logs, screenplays and typewritten documents, brands for developer tools.

Do not use it when:
- The text is long prose for general readers.
- The brief asks for elegance or warmth.

## System directives

When choosing, pairing, setting or briefing a typeface: a text face for a book or a product, a display face for a title, or a type brief for a designer in Monospace, you MUST:

1. Give every glyph the same advance width, 0.50–0.62 em; 0.60 em is the common value.
2. Widen the narrow letters (i, l, j, r, f, t) with long serifs or arms, so they fill their cell.
3. Squeeze the wide letters (m, w, M, W) and lighten their joins, so they do not look darker than the rest.
4. Make look-alike characters different: 0 with a slash or a dot, l with a tail, 1 with a flag and a foot, and a clear I.
5. Hold a large x-height, 0.70–0.80 of the cap height, for small sizes on screens.
6. Keep the stroke contrast low, 1.0–1.4:1.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Proportional figures or kerning in a code font.
- **NEVER:** An O and a 0 that look the same.
- **NEVER:** Ligatures that hide the real characters from a reader who copies the code.
- **NEVER:** Monospace for long reading prose.
- **NEVER:** Justified text.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Stroke contrast | `■□□□□` 1/5 | monoline, thick and thin strokes equal | hairlines against heavy stems, 5:1 or more |
| Construction | `■■■■□` 4/5 | written: broad-nib pen, diagonal stress, open forms | constructed: ruler and compass, vertical or no stress |
| x-height | `■■■■■` 5/5 | small, under 0.62 of the cap height | large, 0.74 of the cap height or more |
| Width | `■■■■□` 4/5 | condensed | extended |
| Serif mass | `■■■□□` 3/5 | no serifs | heavy, square, unbracketed slab |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Classification

- **Vox atypi:** No class: fixed pitch cuts across the classes
- **Din 16518:** No group: typewriter faces are filed under Gruppe V or VI
- **Note:** Monospace is a rule of spacing, not of form: Courier is a slab serif, IBM Plex Mono is a grotesque with slab arms, JetBrains Mono is a neo-grotesque.

## Anatomy

- **Contrast:** Low: the thin parts are 0.7–1.0 of the stem.
- **Stress:** Vertical or none.
- **Serifs:** Slab serifs on the narrow letters (i, l, j, r) in most faces; full slabs in typewriter faces such as Courier.
- **Terminals:** Flat or round cuts; the ends of c, e and s are cut horizontal in code fonts.
- **Aperture:** Moderate to open, so the c and e stay clear at small sizes.
- **Key letters:** A zero with a slash or a dot, an l with a tail, an i with long serifs, and a squeezed m and w.

## Metrics

- **X height min:** 0.7
- **X height max:** 0.8
- **Contrast min:** 1
- **Contrast max:** 1.4
- **X height:** The x-height is 0.70–0.80 of the cap height and about 0.50–0.55 of the em.
- **Contrast:** The side of the o is 1.0 to 1.4 times as thick as its top.
- **Width:** Every glyph has one advance width, 0.50–0.62 em; the mean advance of a to z equals it.
- **Figures:** Tabular lining figures only, with a slashed or dotted zero.

## Setting

- **Text sizes:** Set code at 12–14 px on screen and 8–10 pt in print, about 0.85–0.9 of the size of the text face beside it.
- **Display sizes:** Set titles at 24–64 px for a technical or typewritten look.
- **Leading:** Set the leading at 1.4–1.6 for code blocks.
- **Tracking:** Set 0 em; never track or kern a monospace, or the columns break.
- **Measure:** Set 80–100 characters a line for code; 60–70 for typewritten prose.
- **Case and features:** Turn off ligatures for code that readers copy, and turn on the slashed zero if the font has it as a feature.

## Pairing

- **Rule:** Pair the monospace with a proportional sans of the same family or skeleton, and use the monospace only for code, data and labels.

**Pairs**

| With | Role | Why |
|---|---|---|
| Neo-grotesque sans (Inter) | sans for the interface and prose | Both have a large x-height and low contrast, so code and prose sit well on one line. |
| Humanist sans (Fira Sans) | sans for documentation text | Fira Sans and Fira Code come from one family, so the x-heights and weights match. |

## Reference faces

- **Note:** Courier Prime is an open redraw of the Courier model for screenplays; the original Courier design is not protected, but its digital fonts carry vendor licences.

**Faces**

| Face | Designer | Year | Status |
|---|---|---|---|
| Sholes and Glidden typewriter type | E. Remington and Sons | 1874 | historic metal |
| Courier | Howard Kettler for IBM | 1955 | proprietary |
| IBM Plex Mono | Mike Abbink and Bold Monday | 2017 | open revival |
| Courier Prime | Alan Dague-Greene | 2013 | open revival |
| JetBrains Mono | Philipp Nurullin, Konstantin Bulenkov | 2020 | open revival |

## Prompt primer

- **Positive:** monospace font · typewriter text · code editor · terminal output · fixed-width columns · slashed zero · technical documentation · data table
- **Negative:** script · calligraphy · high contrast serif · decorative display type · justified text

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Fixed-pitch grid (process)

Every character takes one cell of the same width, so text forms columns without a separate grid and a position is a count of characters. Origin: typeface, Ilion, New York, 1874.

- Give every glyph one advance width, 0.60 em in most fonts, or 10 or 12 characters an inch on a typewriter.
- Align columns with spaces and set tables, code and forms on the cell grid.
- On a screen, size the layout in cells: 80 columns by 24 rows is the classic terminal.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **Google Fonts** (platform, web, 2010–now), published the style. A free library of web fonts and icons. It serves the Material Symbols icon font and many open sans and serif families.
- **IBM** (company, Armonk, New York, 1911–now), made the style. A maker of office machines and computers. Its typewriters made Courier the common monospace.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Weight (`weight`) | 400 | 300–700 | metrics, setting |
| Width (`width`) | 100 | 95–105 % | metrics |
| x-height ratio (`x_height_ratio`) | 0.52 | 0.42–0.56 | metrics, anatomy |
| Stroke contrast (`stroke_contrast`) | 1.15 | 1–1.4 | anatomy |
| Tracking (`tracking`) | 0 | 0–0 em | setting |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more readable prose**: move toward [`neo-grotesque-sans`](../neo-grotesque-sans/SKILL.md) (Neo-grotesque sans). Set the prose in a proportional sans with the same x-height, and keep the monospace for code only.
- If the user asks for **more vintage**: move toward [`slab-serif`](../slab-serif/SKILL.md) (Slab serif). Use a typewriter face with full slabs, such as Courier Prime, and a slightly rough print texture.

- **Came from (go here for a more orthodox version):** [`slab-serif`](../slab-serif/SKILL.md)
- **Mixes well with:** [`neo-grotesque-sans`](../neo-grotesque-sans/SKILL.md)
- **Kin in another domain:** [`brutalist-web`](../brutalist-web/SKILL.md), [`dark-devtool-ui`](../dark-devtool-ui/SKILL.md), [`terminal-tui-web`](../terminal-tui-web/SKILL.md)
- **Nearest by vector profile:** [`neo-grotesque-sans`](../neo-grotesque-sans/SKILL.md), [`slab-serif`](../slab-serif/SKILL.md), [`grotesque-sans`](../grotesque-sans/SKILL.md)

## Emotional target

Precision and candour: the reader feels raw data, a machine or a typed document with nothing hidden.

**Keywords:** technical, raw, precise, utilitarian, honest · **Brand archetypes:** sage, creator, outlaw

## Canonical evidence (open licence)

Each item below has an open licence or is in the public domain, so you may show it as a reference.

- [IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Mono) (Mike Abbink, Bold Monday, 2017): font, OFL-1.1. google/fonts repository, ofl/ibmplexmono
- [Courier Prime](https://fonts.google.com/specimen/Courier+Prime) (Alan Dague-Greene, 2013): font, OFL-1.1. google/fonts repository, ofl/courierprime
- [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) (Philipp Nurullin, Konstantin Bulenkov, 2020): font, OFL-1.1. google/fonts repository, ofl/jetbrainsmono

## Sources

- [Monospaced font (Wikipedia)](https://en.wikipedia.org/wiki/Monospaced_font)
- [Courier (typeface) (Wikipedia)](https://en.wikipedia.org/wiki/Courier_(typeface))
- Robert Bringhurst, The Elements of Typographic Style (Hartley & Marks, 4th ed. 2012)

---

Generated from [`data/typeface/styles/monospace.json`](../../data/typeface/styles/monospace.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
