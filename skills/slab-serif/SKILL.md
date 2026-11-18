---
name: slab-serif
description: "Apply the Slab serif style (1815–present) when choosing, pairing, setting or briefing a typeface: a text face for a book or a product, a display face for a title, or a type brief for a designer. Load when the user asks for: slab serif, egyptian type, clarendon, rockwell style, wild west poster, typewriter serif."
domain: typeface
era: industrial
triggers:
  - "slab serif"
  - "egyptian type"
  - "clarendon"
  - "rockwell style"
  - "wild west poster"
  - "typewriter serif"
  - "sturdy serif"
vector_profile:
  stroke_contrast: 1
  construction: 4
  x_height: 3
  width: 3
  serif_mass: 5
---

# Slab serif

> A letter for a loud and busy world must be heavy, square and hard to break.

Heavy, square serifs on a sturdy letter with low contrast. Born on the poster in industrial Britain, it carries a loud, solid and practical voice, and modern text cuts serve screens and typewriters as well.

**Period:** 1815–present · **Era:** Industrial · **Domain:** Typeface · **Also called:** Egyptian, Mécane, Antique, Clarendon (bracketed slabs)

## When to load this skill

Load it when the user asks for: "slab serif", "egyptian type", "clarendon", "rockwell style", "wild west poster", "typewriter serif", "sturdy serif".

Good for: posters and headlines, food, beer and craft brands, news and data interfaces, packaging.

Do not use it when:
- The brief asks for delicacy, luxury or high fashion.
- The page needs a quiet text face for a long book.

## System directives

When choosing, pairing, setting or briefing a typeface: a text face for a book or a product, a display face for a title, or a type brief for a designer in Slab serif, you MUST:

1. Make the serifs at least 0.6 of the stem thickness and square at the ends.
2. Keep the stroke contrast at 1.0–1.8:1, measured on the o.
3. Use no bracket (the Egyptian) or a small one (the Clarendon), and keep the choice the same in all letters.
4. Hold the x-height at 0.66–0.76 of the cap height.
5. Set titles in a bold or heavy weight; text cuts use a regular weight with serifs 0.6–0.8 of the stem.
6. Space the letters a little loose: the slabs need 0.01–0.02 em more room than a sans.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Hairline serifs or hairline strokes.
- **NEVER:** Strong calligraphic stress.
- **NEVER:** Tight negative tracking that makes the slabs touch.
- **NEVER:** Delicate, light weights for display.
- **NEVER:** Mixing bracketed and unbracketed slabs in one setting.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Stroke contrast | `■□□□□` 1/5 | monoline, thick and thin strokes equal | hairlines against heavy stems, 5:1 or more |
| Construction | `■■■■□` 4/5 | written: broad-nib pen, diagonal stress, open forms | constructed: ruler and compass, vertical or no stress |
| x-height | `■■■□□` 3/5 | small, under 0.62 of the cap height | large, 0.74 of the cap height or more |
| Width | `■■■□□` 3/5 | condensed | extended |
| Serif mass | `■■■■■` 5/5 | no serifs | heavy, square, unbracketed slab |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Classification

- **Vox atypi:** Mécane (slab serif)
- **Din 16518:** Gruppe V: Serifenbetonte Linear-Antiqua
- **Note:** The British Standard (BS 2961) calls the class Slab-serif; the Clarendon type with brackets is sometimes filed as a sub-class of its own.

## Anatomy

- **Contrast:** Low: the thin parts are 0.55–1.0 of the stem.
- **Stress:** Vertical or none.
- **Serifs:** Thick and rectangular, 0.6–1.0 of the stem; bracketed in the Clarendon type, with no bracket in the Egyptian.
- **Terminals:** Flat or slab terminals on c, f and r; a ball on the a in some Clarendons.
- **Aperture:** Moderate to open in modern text cuts.
- **Key letters:** A two-storey a with a slab on the foot, a t with a slab on the left of the cross-bar, and an M with four slabs at the base.

## Metrics

- **X height min:** 0.66
- **X height max:** 0.76
- **Contrast min:** 1
- **Contrast max:** 1.8
- **X height:** The x-height is 0.66–0.76 of the cap height and about 0.45–0.53 of the em.
- **Contrast:** The side of the o is 1.0 to 1.8 times as thick as its top.
- **Width:** Medium to wide; the mean advance of a to z is 0.49–0.56 em.
- **Figures:** Lining figures, tabular in most digital cuts.

## Setting

- **Text sizes:** Set text cuts at 9–11 pt in print and 15–18 px on screen.
- **Display sizes:** Set bold and heavy weights at 24–120 pt for posters and headlines.
- **Leading:** Set the leading at 1.4–1.6 times the size for text, and 1.0–1.15 for headlines.
- **Tracking:** Set +0.01 to +0.02 em in text, and 0 to −0.01 em in large headlines.
- **Measure:** Set 50–70 characters a line.
- **Case and features:** Use capitals for short poster lines; tabular figures for prices and tables.

## Pairing

- **Rule:** Pair it with a sans of the same era or skeleton, and keep the slab for headlines or for short text.

**Pairs**

| With | Role | Why |
|---|---|---|
| Grotesque sans (Work Sans) | sans for body text and labels | Both come from the nineteenth-century poster, so the voices agree. |
| Humanist sans (Fira Sans) | sans for interface and captions | A modern slab such as Zilla Slab shares its open, written skeleton. |

## Reference faces

- **Note:** Roboto Slab and Arvo are geometric slabs with no bracket; Zilla Slab is a humanist slab. No open font in this record is a strict Clarendon.

**Faces**

| Face | Designer | Year | Status |
|---|---|---|---|
| Antique (Egyptian) | Vincent Figgins | 1815 | historic metal |
| Clarendon | Robert Besley for the Fann Street Foundry | 1845 | historic metal |
| Rockwell | Monotype | 1934 | proprietary |
| Roboto Slab | Christian Robertson | 2013 | open revival |
| Zilla Slab | Typotheque for Mozilla | 2017 | open revival |
| Arvo | Anton Koovit | 2010 | open revival |

## Prompt primer

- **Positive:** slab serif · egyptian type · heavy square serifs · victorian wood-type poster · bold headline · low contrast strokes · letterpress on newsprint · typewriter feel
- **Negative:** hairline serifs · thin elegant letters · script · calligraphic stress · pastel softness

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Wood type (process)

Large display letters cut from end-grain wood, so a printer can set a heavy headline that metal type cannot give at that size. Origin: typeface, Johnstown, New York, 1828.

- Set the headline at 5 to 30 cm cap height; below 2 cm use metal type.
- Use heavy weights: a stem of 1/5 to 1/3 of the cap height.
- Mix two to four faces in one sheet, one face for each line, with each line set to the full measure.
- Keep the line spacing tight: 1.0 to 1.1 times the cap height.

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more refined**: move toward [`transitional-serif`](../transitional-serif/SKILL.md) (Transitional serif). Thin the serifs to 0.3 of the stem, add brackets, and raise the contrast to 3:1.
- If the user asks for **cleaner**: move toward [`grotesque-sans`](../grotesque-sans/SKILL.md) (Grotesque sans). Remove the slabs; keep the low contrast, the weight and the industrial voice.

- **Came from (go here for a more orthodox version):** [`didone-serif`](../didone-serif/SKILL.md)
- **Mixes well with:** [`grotesque-sans`](../grotesque-sans/SKILL.md)
- **Kin in another domain:** [`victorian-interior`](../victorian-interior/SKILL.md), [`victorian-web`](../victorian-web/SKILL.md)
- **Nearest by vector profile:** [`transitional-serif`](../transitional-serif/SKILL.md), [`grotesque-sans`](../grotesque-sans/SKILL.md), [`garalde-old-style`](../garalde-old-style/SKILL.md)

## Emotional target

Solidity and directness: the reader feels a practical, confident voice that is easy to trust.

**Keywords:** sturdy, bold, practical, honest, industrial · **Brand archetypes:** everyman, hero

## Canonical evidence (open licence)

Each item below has an open licence or is in the public domain, so you may show it as a reference.

- [Roboto Slab](https://fonts.google.com/specimen/Roboto+Slab) (Christian Robertson, 2013): font, Apache-2.0. google/fonts repository, apache/robotoslab
- [Zilla Slab](https://fonts.google.com/specimen/Zilla+Slab) (Typotheque, 2017): font, OFL-1.1. google/fonts repository, ofl/zillaslab
- [Arvo](https://fonts.google.com/specimen/Arvo) (Anton Koovit, 2010): font, OFL-1.1. google/fonts repository, ofl/arvo

## Sources

- [Slab serif (Wikipedia)](https://en.wikipedia.org/wiki/Slab_serif)
- [Vox-ATypI classification (Wikipedia)](https://en.wikipedia.org/wiki/Vox-ATypI_classification)
- Robert Bringhurst, The Elements of Typographic Style (Hartley & Marks, 4th ed. 2012)

---

Generated from [`data/typeface/styles/slab-serif.json`](../../data/typeface/styles/slab-serif.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
