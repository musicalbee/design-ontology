---
name: neo-grotesque-sans
description: "Apply the Neo-grotesque sans style (1957–present) when choosing, pairing, setting or briefing a typeface: a text face for a book or a product, a display face for a title, or a type brief for a designer. Load when the user asks for: neo-grotesque, helvetica, swiss type, neutral sans, inter, interface font."
domain: typeface
era: modernist
triggers:
  - "neo-grotesque"
  - "helvetica"
  - "swiss type"
  - "neutral sans"
  - "inter"
  - "interface font"
  - "corporate sans"
  - "univers"
vector_profile:
  stroke_contrast: 1
  construction: 4
  x_height: 5
  width: 3
  serif_mass: 1
---

# Neo-grotesque sans

> A typeface is a neutral vessel: it carries the message and adds nothing of its own.

The neutral sans of the grid: even widths, horizontal terminals, closed apertures, a large x-height and almost no contrast. It lets the layout speak and is the default voice of interfaces and corporate systems.

**Period:** 1957–present · **Era:** Modernist · **Domain:** Typeface · **Also called:** Neo-grotesk, Swiss sans, Realist sans, Helvetica style

## When to load this skill

Load it when the user asks for: "neo-grotesque", "helvetica", "swiss type", "neutral sans", "inter", "interface font", "corporate sans", "univers".

Good for: user interfaces and dashboards, corporate identity, signage and wayfinding, posters on a grid.

Do not use it when:
- The brand needs warmth or a personal voice.
- Small text must read well for readers with low vision; a humanist sans with open apertures reads better.

## System directives

When choosing, pairing, setting or briefing a typeface: a text face for a book or a product, a display face for a title, or a type brief for a designer in Neo-grotesque sans, you MUST:

1. Keep the stroke contrast at 1.0–1.4:1, measured on the o.
2. Cut the terminals of c, e, s and a horizontal, so the apertures close.
3. Even the widths: the capitals are close to one width, and the round letters are wide.
4. Hold the x-height at 0.70–0.78 of the cap height.
5. Use a single-storey g and a two-storey a; the R has a vertical or curved leg.
6. Track tighter as the size grows: 0 em at 16 px, −0.02 em at 48 px, −0.03 em above 96 px.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Visible calligraphic stress.
- **NEVER:** Quirky, uneven letter widths.
- **NEVER:** Decorative swashes or alternates.
- **NEVER:** Wide positive tracking on lower-case headlines.
- **NEVER:** Mixing more than two families with it.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Stroke contrast | `■□□□□` 1/5 | monoline, thick and thin strokes equal | hairlines against heavy stems, 5:1 or more |
| Construction | `■■■■□` 4/5 | written: broad-nib pen, diagonal stress, open forms | constructed: ruler and compass, vertical or no stress |
| x-height | `■■■■■` 5/5 | small, under 0.62 of the cap height | large, 0.74 of the cap height or more |
| Width | `■■■□□` 3/5 | condensed | extended |
| Serif mass | `■□□□□` 1/5 | no serifs | heavy, square, unbracketed slab |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Classification

- **Vox atypi:** Lineale: Neo-grotesque
- **Din 16518:** Gruppe VI: Serifenlose Linear-Antiqua
- **Note:** The neo-grotesque is a grotesque made even: horizontal terminals, uniform widths, less contrast. Some lists call it Realist.

## Anatomy

- **Contrast:** Almost none: the thin parts are 0.75–1.0 of the stem.
- **Stress:** Vertical, or none.
- **Serifs:** None: the strokes end clean, with no serif.
- **Terminals:** Horizontal on c, e, s, a and t.
- **Aperture:** Closed: the ends of c, e and s turn in toward each other.
- **Key letters:** A two-storey a with a curved tail, a single-storey g, an R with a vertical leg, and a square-ish dot on i.

## Metrics

- **X height min:** 0.7
- **X height max:** 0.78
- **Contrast min:** 1
- **Contrast max:** 1.4
- **X height:** The x-height is 0.70–0.78 of the cap height and about 0.50–0.55 of the em.
- **Contrast:** The side of the o is 1.0 to 1.4 times as thick as its top.
- **Width:** Even widths; the mean advance of a to z is 0.50–0.56 em.
- **Figures:** Lining figures; tabular figures (tnum) for tables and interfaces.

## Setting

- **Text sizes:** Set text at 9–11 pt in print and 14–17 px on screen; the large x-height allows the smaller sizes.
- **Display sizes:** Set titles at 32–160 px in medium to bold weights.
- **Leading:** Set the leading at 1.4–1.55 for text, 1.1–1.2 for subheads and 0.95–1.05 for large titles.
- **Tracking:** Set 0 em at 16 px, −0.01 to −0.02 em at 24–48 px, −0.03 em above 96 px, and +0.06 em for capitals.
- **Measure:** Set 50–75 characters a line; a grid column sets the measure.
- **Case and features:** Use tabular figures in tables, contextual alternates where the family has them, and the slashed zero for code.

## Pairing

- **Rule:** Use one family alone, in two or three weights; if you add a second face, make it a clear contrast.

**Pairs**

| With | Role | Why |
|---|---|---|
| Transitional serif (Baskervville) | serif for long reading | Both have a vertical, rational build, so the page stays in one order. |
| Didone (Bodoni Moda) | serif for a few large titles | The high contrast gives the neutral page one point of drama. |

## Reference faces

- **Note:** Inter is not a copy of Helvetica; it is an open neo-grotesque drawn for screens, with a tall x-height (about 0.75).

**Faces**

| Face | Designer | Year | Status |
|---|---|---|---|
| Helvetica (Neue Haas Grotesk) | Max Miedinger and Eduard Hoffmann | 1957 | proprietary |
| Univers | Adrian Frutiger | 1957 | proprietary |
| Arial | Robin Nicholas and Patricia Saunders | 1982 | proprietary |
| Inter | Rasmus Andersson | 2017 | open revival |

## Prompt primer

- **Positive:** neo-grotesque sans-serif · helvetica style · swiss grid · neutral typography · flush left ragged right · tight tracking on headlines · black and white · clean interface type
- **Negative:** serifs · calligraphic stroke · decorative letters · grunge · script · wide letter spacing on lower case

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **warmer**: move toward [`humanist-sans`](../humanist-sans/SKILL.md) (Humanist sans). Open the apertures, angle the terminals, and add a little stroke modulation; keep the x-height.
- If the user asks for **more character**: move toward [`grotesque-sans`](../grotesque-sans/SKILL.md) (Grotesque sans). Bring back the uneven widths, the spurred G and some contrast in the joins.

- **Came from (go here for a more orthodox version):** [`grotesque-sans`](../grotesque-sans/SKILL.md)
- **Rejects (the opposite pole; do not blend):** [`humanist-sans`](../humanist-sans/SKILL.md)
- **Mixes well with:** [`monospace`](../monospace/SKILL.md)
- **Kin in another domain:** [`international-style-architecture`](../international-style-architecture/SKILL.md), [`swiss-international`](../swiss-international/SKILL.md)
- **Nearest by vector profile:** [`grotesque-sans`](../grotesque-sans/SKILL.md), [`monospace`](../monospace/SKILL.md), [`humanist-sans`](../humanist-sans/SKILL.md)

## Emotional target

Order and neutrality: the reader feels a clear system and no personal voice.

**Keywords:** neutral, clean, efficient, corporate, objective · **Brand archetypes:** ruler, everyman

## Canonical evidence (open licence)

Each item below has an open licence or is in the public domain, so you may show it as a reference.

- [Inter](https://fonts.google.com/specimen/Inter) (Rasmus Andersson, 2017): font, OFL-1.1. google/fonts repository, ofl/inter

## Sources

- [Neo-grotesque (Wikipedia)](https://en.wikipedia.org/wiki/Neo-grotesque)
- [Vox-ATypI classification (Wikipedia)](https://en.wikipedia.org/wiki/Vox-ATypI_classification)
- Robert Bringhurst, The Elements of Typographic Style (Hartley & Marks, 4th ed. 2012)

---

Generated from [`data/typeface/styles/neo-grotesque-sans.json`](../../data/typeface/styles/neo-grotesque-sans.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
