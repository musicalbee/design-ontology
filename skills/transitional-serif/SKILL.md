---
name: transitional-serif
description: "Apply the Transitional serif style (1757–1800) when choosing, pairing, setting or briefing a typeface: a text face for a book or a product, a display face for a title, or a type brief for a designer. Load when the user asks for: transitional serif, baskerville, times style, georgian type, enlightenment serif, formal book face."
domain: typeface
era: hand-press
triggers:
  - "transitional serif"
  - "baskerville"
  - "times style"
  - "georgian type"
  - "enlightenment serif"
  - "formal book face"
vector_profile:
  stroke_contrast: 3
  construction: 3
  x_height: 2
  width: 3
  serif_mass: 3
---

# Transitional serif

> A letter can be drawn by reason and still serve the reader: the pen gives way to the engraver's line, but not yet to the extreme.

The Enlightenment roman between the old style and the Didone: the stress turns nearly vertical, the contrast rises, and the serifs become flatter and sharper. It is precise but still warm, and it reads well in text.

**Period:** 1757–1800 · **Era:** Hand press · **Domain:** Typeface · **Also called:** Réale, Baroque serif, Baskerville type

## When to load this skill

Load it when the user asks for: "transitional serif", "baskerville", "times style", "georgian type", "enlightenment serif", "formal book face".

Good for: books and reports, university and legal publishing, newspaper text, formal invitations.

Do not use it when:
- The brief asks for a loose, handmade or playful voice.
- The text sits under 11 px on a screen.

## System directives

When choosing, pairing, setting or briefing a typeface: a text face for a book or a product, a display face for a title, or a type brief for a designer in Transitional serif, you MUST:

1. Keep the stroke contrast between 2.5:1 and 4.5:1, measured on the lower-case o.
2. Set the stress vertical or within 10° of it.
3. Give the serifs a short bracket and flat, level head serifs on the lower case.
4. Make the round letters wide and the bowls full: the o is close to a circle in the lower case.
5. Hold the x-height at 0.60–0.70 of the cap height.
6. Use ball terminals on a, c, f, g and r, smaller than in a Didone.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** A strong diagonal stress from a broad-nib pen.
- **NEVER:** Hairlines finer than 0.15 of the stem in text sizes.
- **NEVER:** Unbracketed, hairline serifs at a right angle to the stem.
- **NEVER:** Monoline strokes with no contrast.
- **NEVER:** Tracking tighter than −0.01 em in text.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Stroke contrast | `■■■□□` 3/5 | monoline, thick and thin strokes equal | hairlines against heavy stems, 5:1 or more |
| Construction | `■■■□□` 3/5 | written: broad-nib pen, diagonal stress, open forms | constructed: ruler and compass, vertical or no stress |
| x-height | `■■□□□` 2/5 | small, under 0.62 of the cap height | large, 0.74 of the cap height or more |
| Width | `■■■□□` 3/5 | condensed | extended |
| Serif mass | `■■■□□` 3/5 | no serifs | heavy, square, unbracketed slab |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Classification

- **Vox atypi:** Réale (transitional)
- **Din 16518:** Gruppe III: Barock-Antiqua
- **Note:** The line to the Garalde is the stress angle; the line to the Didone is the bracket. A face with hairline serifs and no bracket is a Didone.

## Anatomy

- **Contrast:** Clear: the thin parts are 0.22–0.4 of the stem.
- **Stress:** Vertical or nearly vertical, within 10°; the thinnest parts of the o are at 12 and 6 o'clock.
- **Serifs:** Bracketed, flat and sharp; the head serifs of the lower case are almost level.
- **Terminals:** Ball or teardrop terminals on a, c, f and r; the ear of the g is horizontal.
- **Aperture:** Moderate: the c and e are less open than in a Garalde.
- **Key letters:** A g with an open lower loop (in Baskerville), a W without a middle serif, and a Q with a long, curved tail.

## Metrics

- **X height min:** 0.6
- **X height max:** 0.7
- **Contrast min:** 2.5
- **Contrast max:** 4.5
- **X height:** The x-height is 0.60–0.70 of the cap height and about 0.43–0.53 of the em.
- **Contrast:** The side of the o is 2.5 to 4.5 times as thick as its top.
- **Width:** Round letters are wide; the mean advance of a to z is 0.48–0.58 em.
- **Figures:** Old-style figures in text in the original; many revivals give lining figures by default.

## Setting

- **Text sizes:** Set text at 10–12 pt in print and 16–20 px on screen.
- **Display sizes:** Use it up to 48 pt; above that the hairlines can look weak against the stems.
- **Leading:** Set the leading at 1.3–1.5 times the size for text, and 1.1–1.2 for titles.
- **Tracking:** Set 0 em tracking in text; letter-space capitals by 0.04–0.08 em.
- **Measure:** Set 55–70 characters a line.
- **Case and features:** Use the italic for emphasis; the transitional italic has an even slope of 12–16°.

## Pairing

- **Rule:** Pair it with a sans of a rational, upright skeleton, or with its own italic; keep the x-heights within 5%.

**Pairs**

| With | Role | Why |
|---|---|---|
| Neo-grotesque sans (Inter) | sans for interface, captions and data | Both have a vertical stress and a rational build, so they share an order without a fight. |
| Didone (Bodoni Moda) | display titles above 36 pt | The Didone is the next step of the same idea, so the titles feel like a sharper version of the text. |

## Reference faces

- **Note:** Libre Baskerville has a larger x-height (about 0.69) for screens; Baskervville stays closer to the original (about 0.61).

**Faces**

| Face | Designer | Year | Status |
|---|---|---|---|
| Romain du Roi | Philippe Grandjean | 1702 | historic metal |
| Baskerville | John Baskerville | 1757 | historic metal |
| Bell | Richard Austin for John Bell | 1788 | historic metal |
| Baskervville | ANRT | 2017 | open revival |
| Libre Baskerville | Pablo Impallari | 2012 | open revival |

## Prompt primer

- **Positive:** transitional serif · baskerville style · vertical stress · crisp bracketed serifs · ball terminals · eighteenth-century printing · wove paper · balanced classical page
- **Negative:** sans-serif · slab serif · extreme hairlines · rounded geometric letters · grunge texture

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Line engraving (process)

Lines cut into a metal plate with a burin; thin hairlines and swelling strokes give tone, and the print keeps a sharp, even edge. Origin: painting, Upper Rhine, c. 1430.

- Cut a hairline of 0.1 to 0.2mm for light areas; swell the line to 0.5mm or more for dark areas.
- Build shade with parallel lines or cross hatching, and keep the lines at 30° to 45° to each other.
- Print on smooth paper so the hairlines stay clean.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **Monotype** (company, London and Woburn, Massachusetts, 1887–now), made the style. A maker of typesetting machines and type. It released Gill Sans and revivals of Baskerville and other book faces.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Weight (`weight`) | 400 | 400–700 | metrics, setting |
| Width (`width`) | 100 | 95–110 % | metrics |
| x-height ratio (`x_height_ratio`) | 0.43 | 0.4–0.52 | metrics, anatomy |
| Stroke contrast (`stroke_contrast`) | 3 | 2.5–4.5 | anatomy |
| Tracking (`tracking`) | 0 | 0–0.08 em | setting |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more glamour**: move toward [`didone-serif`](../didone-serif/SKILL.md) (Didone). Remove the brackets, take the hairlines down to 0.1 of the stem, and use it only at display sizes.
- If the user asks for **warmer**: move toward [`garalde-old-style`](../garalde-old-style/SKILL.md) (Garalde old-style serif). Tilt the stress 15–20°, lower the contrast to 2.5:1, and use old-style figures.

- **Came from (go here for a more orthodox version):** [`garalde-old-style`](../garalde-old-style/SKILL.md)
- **Led to (go here for a newer version):** [`didone-serif`](../didone-serif/SKILL.md)
- **Mixes well with:** [`formal-script`](../formal-script/SKILL.md)
- **Kin in another domain:** [`georgian-interior`](../georgian-interior/SKILL.md), [`neoclassical-architecture`](../neoclassical-architecture/SKILL.md)
- **Nearest by vector profile:** [`garalde-old-style`](../garalde-old-style/SKILL.md), [`didone-serif`](../didone-serif/SKILL.md), [`grotesque-sans`](../grotesque-sans/SKILL.md)

## Emotional target

Confidence and clarity: the reader feels an educated voice that is exact but not cold.

**Keywords:** rational, elegant, authoritative, clear, composed · **Brand archetypes:** ruler, sage

## Canonical evidence (open licence)

Each item below has an open licence or is in the public domain, so you may show it as a reference.

- [Baskervville](https://fonts.google.com/specimen/Baskervville) (ANRT, 2017): font, OFL-1.1. google/fonts repository, ofl/baskervville
- [Libre Baskerville](https://fonts.google.com/specimen/Libre+Baskerville) (Pablo Impallari, 2012): font, OFL-1.1. google/fonts repository, ofl/librebaskerville
- [A specimen by John Baskerville of Birmingham](https://commons.wikimedia.org/wiki/File:A_specimen_by_John_Baskerville_of_Birmingham._Fleuron_N024174-1.png) (John Baskerville, 1762): image, Public domain. Cambridge University Library, Fleuron record; scan on Wikimedia Commons

## Sources

- [Transitional serif (Wikipedia)](https://en.wikipedia.org/wiki/Transitional_serif)
- [Vox-ATypI classification (Wikipedia)](https://en.wikipedia.org/wiki/Vox-ATypI_classification)
- Robert Bringhurst, The Elements of Typographic Style (Hartley & Marks, 4th ed. 2012)

---

Generated from [`data/typeface/styles/transitional-serif.json`](../../data/typeface/styles/transitional-serif.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
