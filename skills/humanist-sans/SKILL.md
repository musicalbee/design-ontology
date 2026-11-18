---
name: humanist-sans
description: "Apply the Humanist sans style (1916–present) when choosing, pairing, setting or briefing a typeface: a text face for a book or a product, a display face for a title, or a type brief for a designer. Load when the user asks for: humanist sans, gill sans, frutiger, fira sans, open sans, friendly sans."
domain: typeface
era: modernist
triggers:
  - "humanist sans"
  - "gill sans"
  - "frutiger"
  - "fira sans"
  - "open sans"
  - "friendly sans"
  - "readable sans"
  - "wayfinding font"
vector_profile:
  stroke_contrast: 2
  construction: 2
  x_height: 4
  width: 3
  serif_mass: 1
---

# Humanist sans

> A sans serif reads best when it keeps the proportions and the open forms of the written roman.

A sans serif on the skeleton of the Renaissance roman: open apertures, varied widths, a little stroke modulation and an angled cut on the terminals. It reads well at small sizes and in poor conditions, and sounds warm.

**Period:** 1916–present · **Era:** Modernist · **Domain:** Typeface · **Also called:** Humanist lineale, Calligraphic sans, Gill style

## When to load this skill

Load it when the user asks for: "humanist sans", "gill sans", "frutiger", "fira sans", "open sans", "friendly sans", "readable sans", "wayfinding font".

Good for: wayfinding and public signage, health, education and public services, long text on screens, product interfaces with a warm voice.

Do not use it when:
- The brief asks for a strict, neutral grid voice.
- The brief asks for a geometric, avant-garde look.

## System directives

When choosing, pairing, setting or briefing a typeface: a text face for a book or a product, a display face for a title, or a type brief for a designer in Humanist sans, you MUST:

1. Open the apertures of c, e, a and s: the gap of the c is at least 0.35 of its height.
2. Keep a slight stroke modulation of 1.1–1.6:1, with thinner joins where curves meet stems.
3. Cut the terminals at an angle, as a pen stroke ends.
4. Give the letters classical widths: a wide O and M, a narrow E, S and r.
5. Hold the x-height at 0.66–0.78 of the cap height.
6. Use a true italic with cursive forms, not a sloped roman.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Closed apertures with horizontal terminals.
- **NEVER:** Pure geometric circles for o and a single-storey a.
- **NEVER:** Even, uniform letter widths.
- **NEVER:** A sloped roman as the italic.
- **NEVER:** Very tight tracking in text sizes.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Stroke contrast | `■■□□□` 2/5 | monoline, thick and thin strokes equal | hairlines against heavy stems, 5:1 or more |
| Construction | `■■□□□` 2/5 | written: broad-nib pen, diagonal stress, open forms | constructed: ruler and compass, vertical or no stress |
| x-height | `■■■■□` 4/5 | small, under 0.62 of the cap height | large, 0.74 of the cap height or more |
| Width | `■■■□□` 3/5 | condensed | extended |
| Serif mass | `■□□□□` 1/5 | no serifs | heavy, square, unbracketed slab |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Classification

- **Vox atypi:** Lineale: Humanist
- **Din 16518:** Gruppe VI: Serifenlose Linear-Antiqua
- **Note:** A humanist sans takes its proportions from the roman capital and the Renaissance minuscule; a geometric sans takes them from the circle and the square.

## Anatomy

- **Contrast:** Slight: the thin parts are 0.65–0.9 of the stem.
- **Stress:** Slightly diagonal or vertical.
- **Serifs:** None: the strokes end clean, with no serif.
- **Terminals:** Angled cuts on c, e, s, a and t.
- **Aperture:** Open: the c, e and s have wide mouths, and the bowl of the e is clearly separated from its tail.
- **Key letters:** A two-storey a and often a two-storey g, an l with a tail in some faces, and a true cursive italic.

## Metrics

- **X height min:** 0.66
- **X height max:** 0.78
- **Contrast min:** 1
- **Contrast max:** 1.6
- **X height:** The x-height is 0.66–0.78 of the cap height and about 0.46–0.53 of the em.
- **Contrast:** The side of the o is 1.0 to 1.6 times as thick as its top.
- **Width:** Varied, classical widths; the mean advance of a to z is 0.44–0.52 em.
- **Figures:** Lining or old-style figures, often both in one family.

## Setting

- **Text sizes:** Set text at 9–11 pt in print and 14–17 px on screen; it also holds at 11–12 px for captions.
- **Display sizes:** Set titles at 24–96 px in semibold or bold.
- **Leading:** Set the leading at 1.4–1.6 for text and 1.1–1.2 for titles.
- **Tracking:** Set 0 em in text, −0.01 em in large titles, and +0.05 em for capitals.
- **Measure:** Set 50–75 characters a line.
- **Case and features:** Use the true italic for emphasis, small caps where the family has them, and old-style figures in running text.

## Pairing

- **Rule:** Pair it with a serif that shares the pen-based skeleton, so both faces have the same rhythm.

**Pairs**

| With | Role | Why |
|---|---|---|
| Garalde old-style serif (EB Garamond) | serif for long reading | The humanist sans is a Garalde without serifs, so the proportions agree. |
| Slab serif (Zilla Slab) | slab for headlines | A humanist slab keeps the open forms and adds weight for titles. |

## Reference faces

- **Note:** Fira Sans and Source Sans are new designs in the class, not revivals of one face. The default instance of Source Sans 3 in google/fonts is ExtraLight, so the specimen uses Fira Sans Regular.

**Faces**

| Face | Designer | Year | Status |
|---|---|---|---|
| Johnston (Underground) | Edward Johnston | 1916 | historic metal |
| Gill Sans | Eric Gill | 1928 | proprietary |
| Frutiger | Adrian Frutiger | 1976 | proprietary |
| Fira Sans | Erik Spiekermann and Carrois for Mozilla | 2013 | open revival |
| Source Sans 3 | Paul D. Hunt, Adobe | 2012 | open revival |

## Prompt primer

- **Positive:** humanist sans-serif · gill sans style · open apertures · calligraphic proportions · friendly readable signage · warm modern typography · true italic · public transport lettering
- **Negative:** geometric circles · closed apertures · serifs · condensed grotesque · decorative script

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more neutral**: move toward [`neo-grotesque-sans`](../neo-grotesque-sans/SKILL.md) (Neo-grotesque sans). Close the apertures with horizontal terminals and even the widths; keep the x-height.
- If the user asks for **more bookish**: move toward [`garalde-old-style`](../garalde-old-style/SKILL.md) (Garalde old-style serif). Add bracketed serifs and raise the contrast to 2.5:1; keep the proportions.

- **Came from (go here for a more orthodox version):** [`garalde-old-style`](../garalde-old-style/SKILL.md)
- **Rejects (the opposite pole; do not blend):** [`grotesque-sans`](../grotesque-sans/SKILL.md)
- **Was rejected by:** [`neo-grotesque-sans`](../neo-grotesque-sans/SKILL.md)
- **Kin in another domain:** [`arts-and-crafts-interior`](../arts-and-crafts-interior/SKILL.md), [`scandinavian-interior`](../scandinavian-interior/SKILL.md)
- **Nearest by vector profile:** [`grotesque-sans`](../grotesque-sans/SKILL.md), [`neo-grotesque-sans`](../neo-grotesque-sans/SKILL.md), [`transitional-serif`](../transitional-serif/SKILL.md)

## Emotional target

Warm clarity: the reader feels a friendly, human voice that is still modern and easy to read.

**Keywords:** friendly, humane, clear, approachable, civic · **Brand archetypes:** caregiver, everyman, sage

## Canonical evidence (open licence)

Each item below has an open licence or is in the public domain, so you may show it as a reference.

- [Fira Sans](https://fonts.google.com/specimen/Fira+Sans) (Erik Spiekermann, Carrois Apostrophe, 2013): font, OFL-1.1. google/fonts repository, ofl/firasans
- [Source Sans 3](https://fonts.google.com/specimen/Source+Sans+3) (Paul D. Hunt, 2012): font, OFL-1.1. google/fonts repository, ofl/sourcesans3

## Sources

- [Humanist sans-serif (Wikipedia)](https://en.wikipedia.org/wiki/Humanist_sans-serif)
- [Gill Sans (Wikipedia)](https://en.wikipedia.org/wiki/Gill_Sans)
- [Vox-ATypI classification (Wikipedia)](https://en.wikipedia.org/wiki/Vox-ATypI_classification)
- Robert Bringhurst, The Elements of Typographic Style (Hartley & Marks, 4th ed. 2012)

---

Generated from [`data/typeface/styles/humanist-sans.json`](../../data/typeface/styles/humanist-sans.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
