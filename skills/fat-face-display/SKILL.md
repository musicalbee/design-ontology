---
name: fat-face-display
description: "Apply the Fat face display style (1810–present) when choosing, pairing, setting or briefing a typeface: a text face for a book or a product, a display face for a title, or a type brief for a designer. Load when the user asks for: fat face, abril fatface, poster bodoni, ultra bold serif, display serif, headline serif."
domain: typeface
era: industrial
triggers:
  - "fat face"
  - "abril fatface"
  - "poster bodoni"
  - "ultra bold serif"
  - "display serif"
  - "headline serif"
  - "victorian poster type"
vector_profile:
  stroke_contrast: 5
  construction: 4
  x_height: 4
  width: 4
  serif_mass: 2
---

# Fat face display

> A letter for a poster is as black as the stem can be while the hairlines keep it readable.

The first type made only for display: a Didone pushed to extreme weight, with stems as thick as half the letter and hairlines kept fine. It shouts from posters and covers, and it fails in text.

**Period:** 1810–present · **Era:** Industrial · **Domain:** Typeface · **Also called:** Fat face, Display face, Poster Didone, Ultra-bold modern

## When to load this skill

Load it when the user asks for: "fat face", "abril fatface", "poster bodoni", "ultra bold serif", "display serif", "headline serif", "victorian poster type".

Good for: magazine covers and headlines, posters and theatre bills, food and drink packaging, editorial hero titles on the web.

Do not use it when:
- The text is longer than a headline.
- The page already has a loud display face.

## System directives

When choosing, pairing, setting or briefing a typeface: a text face for a book or a product, a display face for a title, or a type brief for a designer in Fat face display, you MUST:

1. Make the stems 0.35–0.5 of the cap height wide and keep the hairlines and serifs fine.
2. Keep the stroke contrast at 6:1 or more, measured on the o.
3. Set the stress vertical, as in a Didone, with ball terminals on a, c, f, r and y.
4. Make the counters small and the round letters wide.
5. Use it only at 30 pt and more, for a few words.
6. Set tight: −0.01 to −0.03 em at large sizes, so the black stems form one shape.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Running text in a fat face.
- **NEVER:** Bracketed or slab serifs.
- **NEVER:** Wide tracking on the lower case.
- **NEVER:** Two fat faces on one page.
- **NEVER:** Light weights from the same family in place of a text face.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Stroke contrast | `■■■■■` 5/5 | monoline, thick and thin strokes equal | hairlines against heavy stems, 5:1 or more |
| Construction | `■■■■□` 4/5 | written: broad-nib pen, diagonal stress, open forms | constructed: ruler and compass, vertical or no stress |
| x-height | `■■■■□` 4/5 | small, under 0.62 of the cap height | large, 0.74 of the cap height or more |
| Width | `■■■■□` 4/5 | condensed | extended |
| Serif mass | `■■□□□` 2/5 | no serifs | heavy, square, unbracketed slab |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Classification

- **Vox atypi:** Didone (display)
- **Din 16518:** Gruppe IV: Klassizistische Antiqua
- **Note:** The canon files fat faces with the Didones; this record keeps them apart because their use and setting rules are those of display type.

## Anatomy

- **Contrast:** Extreme: the hairlines are 0.05–0.15 of the stem.
- **Stress:** Vertical, 0°, as in a Didone.
- **Serifs:** Flat hairline serifs with no bracket or a very small one.
- **Terminals:** Large ball terminals on a, c, f, g, j, r and y.
- **Aperture:** Closed: the counters of a, e and s are small slots.
- **Key letters:** An a with a large ball and a tiny bowl, a g with a ball ear, and an R with a heavy, straight leg.

## Metrics

- **X height min:** 0.62
- **X height max:** 0.84
- **Contrast min:** 6
- **Contrast max:** 16
- **X height:** The x-height is 0.62–0.84 of the cap height; modern display cuts sit high.
- **Contrast:** The side of the o is 6 to 16 times as thick as its top.
- **Width:** Wide: the mean advance of a to z is 0.52–0.66 em.
- **Figures:** Lining figures with large ball terminals.

## Setting

- **Text sizes:** Do not use it for text; below 24 pt or 32 px the counters fill in.
- **Display sizes:** Set headlines, covers and posters at 36–300 pt.
- **Leading:** Set the leading at 0.9–1.05 for headlines.
- **Tracking:** Set −0.01 to −0.03 em at large sizes; capitals at 0 to +0.02 em.
- **Measure:** Keep each line to 1–5 words.
- **Case and features:** Use upper and lower case for warmth or all capitals for a poster; one size and one weight on the page.

## Pairing

- **Rule:** Pair the fat face with a quiet text face of moderate contrast, and give the text much more space than the headline.

**Pairs**

| With | Role | Why |
|---|---|---|
| Transitional serif (Libre Baskerville) | serif for running text | It comes from the same vertical-stress family and holds up in small sizes. |
| Grotesque sans (Work Sans) | sans for subheads and captions | The grotesque came from the same posters and keeps the page plain beside the headline. |

## Reference faces

- **Note:** Abril Fatface keeps the classic proportions; Rozha One and Chonburi are fat faces drawn with Devanagari and Thai companions.

**Faces**

| Face | Designer | Year | Status |
|---|---|---|---|
| Fat face roman | Robert Thorne | 1810 | historic metal |
| Thorowgood fat face | William Thorowgood | 1821 | historic metal |
| Poster Bodoni | Chauncey H. Griffith | 1929 | proprietary |
| Abril Fatface | TypeTogether | 2011 | open revival |
| Rozha One | Indian Type Foundry | 2014 | open revival |
| Chonburi | Cadson Demak | 2015 | open revival |

## Prompt primer

- **Positive:** fat face · ultra-bold didone · extreme thick-thin contrast · ball terminals · victorian poster headline · magazine cover · black ink on cream paper · big tight headline
- **Negative:** thin type · sans-serif · slab serif · script · long body text · wide letter spacing

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Line engraving (process)

Lines cut into a metal plate with a burin; thin hairlines and swelling strokes give tone, and the print keeps a sharp, even edge. Origin: painting, Upper Rhine, c. 1430.

- Cut a hairline of 0.1 to 0.2mm for light areas; swell the line to 0.5mm or more for dark areas.
- Build shade with parallel lines or cross hatching, and keep the lines at 30° to 45° to each other.
- Print on smooth paper so the hairlines stay clean.

### Wood type (process)

Large display letters routed from end-grain wood instead of cast in metal, so posters and bills can use letters 5–50 cm high at a low cost. Origin: typeface, New York, 1828.

- Use wood type for letters above about 72 pt, where metal is too heavy and too expensive.
- Draw the faces to be loud at a distance: fat face, slab and condensed grotesque, in one weight per line.
- Mix several faces and sizes on one bill and centre each line, as the job printers did.

## Media

The salons, schools, magazines, publishers, galleries and platforms that carried this style.

- **Fann Street Foundry** (workshop, London, 1802–now), made the style. A London type foundry. Robert Thorne cut early fat face types here.
- **Hamilton Manufacturing Company** (workshop, Two Rivers, Wisconsin, 1880–now), made the style. The largest American maker of wood type. Printers used its heavy slab and fat face letters on posters.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Weight (`weight`) | 900 | 800–900 | metrics, setting |
| Width (`width`) | 100 | 100–125 % | metrics |
| x-height ratio (`x_height_ratio`) | 0.47 | 0.42–0.55 | metrics, anatomy |
| Stroke contrast (`stroke_contrast`) | 10 | 6–16 | anatomy |
| Tracking (`tracking`) | -0.02 | -0.03–0.02 em | setting |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more elegant**: move toward [`didone-serif`](../didone-serif/SKILL.md) (Didone). Bring the weight down to a regular Didone and add white space around the title.
- If the user asks for **more rugged**: move toward [`slab-serif`](../slab-serif/SKILL.md) (Slab serif). Make the serifs heavy and square, as the Egyptian posters of the same years did.

- **Came from (go here for a more orthodox version):** [`didone-serif`](../didone-serif/SKILL.md)
- **Mixes well with:** [`slab-serif`](../slab-serif/SKILL.md)
- **Kin in another domain:** [`victorian-trademark`](../victorian-trademark/SKILL.md), [`victorian-web`](../victorian-web/SKILL.md), [`wood-type-poster`](../wood-type-poster/SKILL.md)
- **Nearest by vector profile:** [`didone-serif`](../didone-serif/SKILL.md), [`transitional-serif`](../transitional-serif/SKILL.md), [`grotesque-sans`](../grotesque-sans/SKILL.md)

## Emotional target

Impact with style: the reader stops at a loud headline that still feels classic and editorial.

**Keywords:** bold, dramatic, editorial, theatrical, confident · **Brand archetypes:** hero, jester, ruler

## Canonical evidence (open licence)

Each item below has an open licence or is in the public domain, so you may show it as a reference.

- [Abril Fatface](https://fonts.google.com/specimen/Abril+Fatface) (TypeTogether, 2011): font, OFL-1.1. google/fonts repository, ofl/abrilfatface
- [Rozha One](https://fonts.google.com/specimen/Rozha+One) (Indian Type Foundry, 2014): font, OFL-1.1. google/fonts repository, ofl/rozhaone
- [Chonburi](https://fonts.google.com/specimen/Chonburi) (Cadson Demak, 2015): font, OFL-1.1. google/fonts repository, ofl/chonburi
- [Yeseva One](https://fonts.google.com/specimen/Yeseva+One) (Jovanny Lemonad, 2011): font, OFL-1.1. google/fonts repository, ofl/yesevaone
- [Thorowgood fold-out specimen of a fat face, 1825](https://commons.wikimedia.org/wiki/File:Thorowgood_1825_Fold_Out_Specimen_(7439948324).jpg) (William Thorowgood, Fann Street Foundry, 1825): image, CC BY 2.0. Photo by James Puckett (Flickr); Wikimedia Commons

## Sources

- [Fat face (Wikipedia)](https://en.wikipedia.org/wiki/Fat_face)
- [Display typeface (Wikipedia)](https://en.wikipedia.org/wiki/Display_typeface)
- Robert Bringhurst, The Elements of Typographic Style (Hartley & Marks, 4th ed. 2012)

---

Generated from [`data/typeface/styles/fat-face-display.json`](../../data/typeface/styles/fat-face-display.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
