---
name: geometric-sans
description: "Apply the Geometric sans style (1927–present) when choosing, pairing, setting or briefing a typeface: a text face for a book or a product, a display face for a title, or a type brief for a designer. Load when the user asks for: geometric sans, futura, bauhaus font, avant garde gothic, circular sans, modernist type."
domain: typeface
era: modernist
triggers:
  - "geometric sans"
  - "futura"
  - "bauhaus font"
  - "avant garde gothic"
  - "circular sans"
  - "modernist type"
  - "jost"
vector_profile:
  stroke_contrast: 1
  construction: 5
  x_height: 2
  width: 4
  serif_mass: 1
---

# Geometric sans

> A letter is a construction of pure forms, free of the hand and of history.

A sans serif built from the circle, the square and the triangle: a round o, a single-storey a, pointed apexes and almost no contrast. It is the type of the modernist programme, clean and optimistic, with a small x-height in the classic cuts.

**Period:** 1927–present · **Era:** Modernist · **Domain:** Typeface · **Also called:** Geometric lineale, Bauhaus type, Futura style

## When to load this skill

Load it when the user asks for: "geometric sans", "futura", "bauhaus font", "avant garde gothic", "circular sans", "modernist type", "jost".

Good for: logos and brand marks, fashion and lifestyle titles, posters, architecture and design studios.

Do not use it when:
- Long text must read well at small sizes on a screen.
- The brief asks for warmth from the hand or a bookish voice.

## System directives

When choosing, pairing, setting or briefing a typeface: a text face for a book or a product, a display face for a title, or a type brief for a designer in Geometric sans, you MUST:

1. Draw the o, c, e and the bowls of b, d, p and q from a near-perfect circle.
2. Keep the stroke contrast at 1.0–1.3:1, measured on the o.
3. Use a single-storey a and g, and pointed apexes on A, M, N, V and W.
4. Hold the x-height at 0.58–0.70 of the cap height in the classic cuts, so the ascenders are long.
5. Give the capitals the widths of their figures: a circular O, a square-wide M, a narrow E and S.
6. Set headlines with tight tracking (−0.02 to −0.04 em) and short lines.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Calligraphic stress or angled pen terminals.
- **NEVER:** A two-storey a or g.
- **NEVER:** Narrow, oval o and c.
- **NEVER:** Strong stroke contrast.
- **NEVER:** Old-style figures with swash forms.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Stroke contrast | `■□□□□` 1/5 | monoline, thick and thin strokes equal | hairlines against heavy stems, 5:1 or more |
| Construction | `■■■■■` 5/5 | written: broad-nib pen, diagonal stress, open forms | constructed: ruler and compass, vertical or no stress |
| x-height | `■■□□□` 2/5 | small, under 0.62 of the cap height | large, 0.74 of the cap height or more |
| Width | `■■■■□` 4/5 | condensed | extended |
| Serif mass | `■□□□□` 1/5 | no serifs | heavy, square, unbracketed slab |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Classification

- **Vox atypi:** Lineale: Geometric
- **Din 16518:** Gruppe VI: Serifenlose Linear-Antiqua
- **Note:** Many modern faces mix geometric capitals with a humanist or neo-grotesque lower case; the test is the round o and the single-storey a.

## Anatomy

- **Contrast:** None or almost none: the thin parts are 0.8–1.0 of the stem.
- **Stress:** None: the strokes keep one weight round the o.
- **Serifs:** None: the strokes end clean, with no serif.
- **Terminals:** Cut straight, at a right angle to the stroke.
- **Aperture:** Moderate: the c is a circle with a wedge removed.
- **Key letters:** A circular o, a single-storey a, pointed apexes on A, M and N, and a t without a hook in the classic cuts.

## Metrics

- **X height min:** 0.58
- **X height max:** 0.7
- **Contrast min:** 1
- **Contrast max:** 1.3
- **X height:** The x-height is 0.58–0.70 of the cap height in the classic cuts; screen faces such as Poppins go higher.
- **Contrast:** The side of the o is 1.0 to 1.3 times as thick as its top.
- **Width:** Round letters are wide and others narrow; the mean advance of a to z is 0.42–0.52 em.
- **Figures:** Lining figures with circular 0, 6 and 9.

## Setting

- **Text sizes:** Set text at 10–12 pt in print and 16–19 px on screen; the small x-height needs the larger sizes.
- **Display sizes:** Set titles at 32–200 px, often in bold or in capitals.
- **Leading:** Set the leading at 1.4–1.6 for text and 1.0–1.1 for titles.
- **Tracking:** Set 0 to +0.01 em in text, −0.02 to −0.04 em in large titles, +0.1 em for capital labels.
- **Measure:** Set 45–65 characters a line; the round letters make lines feel long.
- **Case and features:** Use capitals for short labels and logos; use the alternates of the family for a circular a only if all a forms agree.

## Pairing

- **Rule:** Pair it with a serif of strong contrast for titles or a quiet serif for long text; avoid a second sans.

**Pairs**

| With | Role | Why |
|---|---|---|
| Didone (Bodoni Moda) | serif for display titles | Both are constructed faces; the contrast of the Didone sets off the even sans. |
| Garalde old-style serif (EB Garamond) | serif for long reading | The Garalde carries text better at small sizes, and the geometric sans carries headings and labels. |

## Reference faces

- **Note:** Jost takes its forms from the German geometric sans of the 1920s. The default instance of League Spartan in google/fonts is Thin, so the specimen uses Jost.

**Faces**

| Face | Designer | Year | Status |
|---|---|---|---|
| Futura | Paul Renner | 1927 | proprietary |
| Kabel | Rudolf Koch | 1927 | proprietary |
| Avant Garde Gothic | Herb Lubalin and Tom Carnase | 1970 | proprietary |
| Jost | Owen Earl | 2017 | open revival |
| League Spartan | Micah Rich, Tyler Finck | 2014 | open revival |

## Prompt primer

- **Positive:** geometric sans-serif · futura style · bauhaus typography · circular o · single-storey a · pointed apex · modernist poster · primary colours · clean geometric layout
- **Negative:** serifs · calligraphic stroke · two-storey a · condensed grotesque · ornament · grunge

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Construction grid (process)

Letters and marks drawn on a fixed grid of squares and circles, so that each glyph in a set has the same size, weight and corner. Origin: typeface, Nuremberg, 1525.

- Fix one live area inside a square canvas; on a 24 unit canvas, keep a 2 unit margin.
- Define 4 keyline shapes (circle, square, tall and wide rectangle) and fit each glyph to the one that suits it.
- Cut every angle to 45° or 90°, or to one other fixed angle.
- Use one stroke weight for the full set, for example 2 units on a 24 unit canvas.

## Media

The salons, schools, magazines, publishers, galleries and platforms that carried this style.

- **Bauer Type Foundry** (workshop, Frankfurt, 1837–1972), made the style. A German type foundry. It released Futura in 1927, the model of the geometric sans.
- **Google Fonts** (platform, web, 2010–now), published the style. A free library of web fonts and icons. It serves the Material Symbols icon font and many open sans and serif families.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Weight (`weight`) | 400 | 300–800 | metrics, setting |
| Width (`width`) | 100 | 90–115 % | metrics |
| x-height ratio (`x_height_ratio`) | 0.42 | 0.38–0.5 | metrics, anatomy |
| Stroke contrast (`stroke_contrast`) | 1.1 | 1–1.3 | anatomy |
| Tracking (`tracking`) | -0.02 | -0.04–0.1 em | setting |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more readable**: move toward [`humanist-sans`](../humanist-sans/SKILL.md) (Humanist sans). Open the forms to classical widths, use a two-storey a, and raise the x-height to 0.70.
- If the user asks for **more neutral**: move toward [`neo-grotesque-sans`](../neo-grotesque-sans/SKILL.md) (Neo-grotesque sans). Make the o oval, even the widths and raise the x-height to 0.74.

- **Rejects (the opposite pole; do not blend):** [`garalde-old-style`](../garalde-old-style/SKILL.md), [`grotesque-sans`](../grotesque-sans/SKILL.md)
- **Kin in another domain:** [`bauhaus`](../bauhaus/SKILL.md), [`bauhaus-architecture`](../bauhaus-architecture/SKILL.md)
- **Nearest by vector profile:** [`grotesque-sans`](../grotesque-sans/SKILL.md), [`neo-grotesque-sans`](../neo-grotesque-sans/SKILL.md), [`transitional-serif`](../transitional-serif/SKILL.md)

## Emotional target

Optimism and order: the reader feels a clean, forward-looking modern voice.

**Keywords:** modern, clean, optimistic, geometric, confident · **Brand archetypes:** creator, explorer, magician

## Canonical evidence (open licence)

Each item below has an open licence or is in the public domain, so you may show it as a reference.

- [Jost](https://fonts.google.com/specimen/Jost) (Owen Earl): font, OFL-1.1. google/fonts repository, ofl/jost
- [League Spartan](https://fonts.google.com/specimen/League+Spartan) (Micah Rich, Tyler Finck): font, OFL-1.1. google/fonts repository, ofl/leaguespartan

## Sources

- [Geometric sans-serif (Wikipedia)](https://en.wikipedia.org/wiki/Geometric_sans-serif)
- [Vox-ATypI classification (Wikipedia)](https://en.wikipedia.org/wiki/Vox-ATypI_classification)
- Robert Bringhurst, The Elements of Typographic Style (Hartley & Marks, 4th ed. 2012)

---

Generated from [`data/typeface/styles/geometric-sans.json`](../../data/typeface/styles/geometric-sans.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
