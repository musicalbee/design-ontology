---
name: didone-serif
description: "Apply the Didone style (1784–1830) when choosing, pairing, setting or briefing a typeface: a text face for a book or a product, a display face for a title, or a type brief for a designer. Load when the user asks for: didone, bodoni, didot, fashion serif, luxury type, high contrast serif."
domain: typeface
era: hand-press
triggers:
  - "didone"
  - "bodoni"
  - "didot"
  - "fashion serif"
  - "luxury type"
  - "high contrast serif"
  - "vogue style masthead"
  - "modern serif"
vector_profile:
  stroke_contrast: 5
  construction: 4
  x_height: 1
  width: 3
  serif_mass: 2
---

# Didone

> A letter is a geometric figure of thick and thin, cut as fine as the metal and the paper allow.

The extreme of the roman: a vertical stress, hairline serifs with no bracket, and a strong contrast between stem and hairline. At display sizes it is the voice of fashion and luxury; in small text it sparkles and tires the eye.

**Period:** 1784–1830 · **Era:** Hand press · **Domain:** Typeface · **Also called:** Modern serif, Didone, Bodoni style, Fat face (heavy cuts)

## When to load this skill

Load it when the user asks for: "didone", "bodoni", "didot", "fashion serif", "luxury type", "high contrast serif", "vogue style masthead", "modern serif".

Good for: fashion and beauty mastheads, luxury brand titles, editorial covers, perfume and jewellery packaging.

Do not use it when:
- The text is long and set below 11 pt or 16 px.
- The output prints on rough paper or shows on a low-resolution screen.
- The brief asks for an informal or friendly voice.

## System directives

When choosing, pairing, setting or briefing a typeface: a text face for a book or a product, a display face for a title, or a type brief for a designer in Didone, you MUST:

1. Keep the stroke contrast at 4:1 or more in text cuts and 8:1 or more in display cuts, measured on the o.
2. Set the stress exactly vertical: the thinnest parts of the o are at 12 and 6 o'clock.
3. Draw the serifs as flat hairlines with no bracket, at a right angle to the stem.
4. Use ball terminals on a, c, f, g, j, r and y.
5. Set the face at 18 pt or more; at text sizes, use an optical cut with heavier hairlines.
6. Give the page wide white space; the face needs air around it.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Bracketed or wedge serifs.
- **NEVER:** A diagonal stress.
- **NEVER:** Text below 10 pt in a display cut with 10:1 contrast.
- **NEVER:** Low-resolution or low-contrast backgrounds that break the hairlines.
- **NEVER:** Wide positive tracking on the lower case.
- **NEVER:** Heavy, rounded corners on the stems.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Stroke contrast | `■■■■■` 5/5 | monoline, thick and thin strokes equal | hairlines against heavy stems, 5:1 or more |
| Construction | `■■■■□` 4/5 | written: broad-nib pen, diagonal stress, open forms | constructed: ruler and compass, vertical or no stress |
| x-height | `■□□□□` 1/5 | small, under 0.62 of the cap height | large, 0.74 of the cap height or more |
| Width | `■■■□□` 3/5 | condensed | extended |
| Serif mass | `■■□□□` 2/5 | no serifs | heavy, square, unbracketed slab |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Classification

- **Vox atypi:** Didone
- **Din 16518:** Gruppe IV: Klassizistische Antiqua
- **Note:** A Didone has hairline serifs with no bracket; a face that keeps a bracket is Transitional. The British Standard calls the class Modern.

## Anatomy

- **Contrast:** Extreme: the hairlines are 0.05–0.25 of the stem.
- **Stress:** Vertical, 0°.
- **Serifs:** Flat hairline serifs with no bracket, or a very small one.
- **Terminals:** Round ball terminals on a, c, f, g, j, r and y.
- **Aperture:** Closed: the c, e and s curl in on themselves.
- **Key letters:** A narrow-bowled a with a ball, an R with a straight or curled leg, and capitals with even widths.

## Metrics

- **X height min:** 0.58
- **X height max:** 0.74
- **Contrast min:** 4
- **Contrast max:** 14
- **X height:** The x-height is 0.58–0.74 of the cap height; display revivals sit at the top of the range.
- **Contrast:** The side of the o is 4 to 14 times as thick as its top; display cuts go past 10:1.
- **Width:** Capitals tend to an even width; the lower case is of medium width, 0.48–0.55 em mean advance.
- **Figures:** Lining figures with ball terminals on 2, 3, 5, 6, 7 and 9.

## Setting

- **Text sizes:** Use a text cut (optical size 6–12) at 11–14 pt in print or 18–22 px on screen, and only for short text.
- **Display sizes:** Use the display cut at 24–200 pt for titles, mastheads and covers.
- **Leading:** Set the leading at 1.0–1.1 times the size for titles and 1.4–1.6 for text.
- **Tracking:** Set titles at −0.02 to 0 em; letter-space capitals by 0.06–0.15 em.
- **Measure:** Set 45–60 characters a line for text; titles are short lines of 1–4 words.
- **Case and features:** Use capitals with generous tracking for mastheads, and the italic for subtitles.

## Pairing

- **Rule:** Use the Didone for display only and pair it with a quiet text face of low contrast.

**Pairs**

| With | Role | Why |
|---|---|---|
| Geometric sans (Jost) | sans for text, captions and navigation | Both are constructed faces, and the even sans gives rest after the high contrast of the titles. |
| Transitional serif (Baskervville) | serif for running text | It keeps the vertical stress but holds the hairlines at text sizes. |

## Reference faces

- **Note:** Bodoni Moda has optical sizes: its default instance (opsz 11) is a text cut with about 5:1 contrast. Playfair Display mixes Didone contrast with a large, transitional x-height.

**Faces**

| Face | Designer | Year | Status |
|---|---|---|---|
| Didot roman | Firmin Didot | 1784 | historic metal |
| Bodoni roman | Giambattista Bodoni | 1798 | historic metal |
| Walbaum | Justus Erich Walbaum | 1800 | historic metal |
| Bodoni Moda | Owen Earl | 2020 | open revival |
| Playfair Display | Claus Eggers Sørensen | 2011 | open revival |

## Prompt primer

- **Positive:** didone serif · bodoni style · extreme thick-thin contrast · hairline serifs · ball terminals · fashion magazine masthead · luxury editorial · wide white space · black on white
- **Negative:** slab serif · rounded sans · low contrast · grunge · handwritten letters · busy background

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more readable**: move toward [`transitional-serif`](../transitional-serif/SKILL.md) (Transitional serif). Add brackets to the serifs, bring the contrast down to 3–4:1, and open the apertures.
- If the user asks for **louder**: move toward [`slab-serif`](../slab-serif/SKILL.md) (Slab serif). Make the hairlines heavy and the serifs square, as in the fat faces and Egyptians that came next.

- **Came from (go here for a more orthodox version):** [`transitional-serif`](../transitional-serif/SKILL.md)
- **Led to (go here for a newer version):** [`fat-face-display`](../fat-face-display/SKILL.md), [`slab-serif`](../slab-serif/SKILL.md)
- **Rejects (the opposite pole; do not blend):** [`garalde-old-style`](../garalde-old-style/SKILL.md)
- **Was rejected by:** [`grotesque-sans`](../grotesque-sans/SKILL.md)
- **Kin in another domain:** [`fashion-editorial`](../fashion-editorial/SKILL.md), [`neoclassical-architecture`](../neoclassical-architecture/SKILL.md)
- **Nearest by vector profile:** [`transitional-serif`](../transitional-serif/SKILL.md), [`fat-face-display`](../fat-face-display/SKILL.md), [`formal-script`](../formal-script/SKILL.md)

## Emotional target

Glamour and poise: the reader feels luxury, fashion and a cool distance.

**Keywords:** glamorous, luxurious, sharp, dramatic, aristocratic · **Brand archetypes:** ruler, lover

## Canonical evidence (open licence)

Each item below has an open licence or is in the public domain, so you may show it as a reference.

- [Bodoni Moda](https://fonts.google.com/specimen/Bodoni+Moda) (Owen Earl, 2020): font, OFL-1.1. google/fonts repository, ofl/bodonimoda
- [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) (Claus Eggers Sørensen, 2011): font, OFL-1.1. google/fonts repository, ofl/playfairdisplay
- [Old Standard TT](https://fonts.google.com/specimen/Old+Standard+TT) (Alexey Kryukov): font, OFL-1.1. google/fonts repository, ofl/oldstandardtt
- [Manuale tipografico (1818), a page of capitals](https://commons.wikimedia.org/wiki/File:Manuale-Tipografico1.jpg) (Giambattista Bodoni, 1818): image, Public domain. Published by his widow, Parma; scan on Wikimedia Commons

## Sources

- [Didone (typography) (Wikipedia)](https://en.wikipedia.org/wiki/Didone_(typography))
- [Vox-ATypI classification (Wikipedia)](https://en.wikipedia.org/wiki/Vox-ATypI_classification)
- Robert Bringhurst, The Elements of Typographic Style (Hartley & Marks, 4th ed. 2012)

---

Generated from [`data/typeface/styles/didone-serif.json`](../../data/typeface/styles/didone-serif.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
