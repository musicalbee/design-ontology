---
name: grotesque-sans
description: "Apply the Grotesque sans style (1816–1930) when choosing, pairing, setting or briefing a typeface: a text face for a book or a product, a display face for a title, or a type brief for a designer. Load when the user asks for: grotesque, grotesk, akzidenz, franklin gothic, news gothic, early sans serif."
domain: typeface
era: industrial
triggers:
  - "grotesque"
  - "grotesk"
  - "akzidenz"
  - "franklin gothic"
  - "news gothic"
  - "early sans serif"
  - "industrial sans"
vector_profile:
  stroke_contrast: 2
  construction: 4
  x_height: 3
  width: 3
  serif_mass: 1
---

# Grotesque sans

> A letter without serifs is plain, and the plain letter is the strongest one at a distance.

The first sans serifs: plain, heavy letters for posters, with a little contrast, some quirks of width and a two-storey g. Later text cuts such as Akzidenz-Grotesk and Franklin Gothic gave the class a sober, workmanlike voice.

**Period:** 1816–1930 · **Era:** Industrial · **Domain:** Typeface · **Also called:** Grotesk, Gothic, Early sans serif, Lineale grotesque

## When to load this skill

Load it when the user asks for: "grotesque", "grotesk", "akzidenz", "franklin gothic", "news gothic", "early sans serif", "industrial sans".

Good for: posters and headlines, news and magazine headings, signage, brands with a workmanlike voice.

Do not use it when:
- The brief asks for a perfectly neutral, systematic face.
- The brief asks for warmth or a handwritten feel.

## System directives

When choosing, pairing, setting or briefing a typeface: a text face for a book or a product, a display face for a title, or a type brief for a designer in Grotesque sans, you MUST:

1. Keep the stroke contrast at 1.1–1.6:1, with a slight thinning where curves meet stems.
2. Use a two-storey g or a g with a spur, a spurred G and an R with a straight or curved leg.
3. Let the widths vary: a wide M and W, a narrow S and E, with no strict rule.
4. Cut the terminals of c, e and s at an angle or close to horizontal, with a moderate aperture.
5. Hold the x-height at 0.68–0.78 of the cap height.
6. Set headlines in bold or condensed bold; the grotesque is at its best in heavy weights.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Pure geometric circles and triangles in the letters.
- **NEVER:** Calligraphic stress or swelling strokes.
- **NEVER:** A uniform, optically perfect width for all capitals.
- **NEVER:** Light hairline weights for text.
- **NEVER:** Serifs or slabs on any letter.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Stroke contrast | `■■□□□` 2/5 | monoline, thick and thin strokes equal | hairlines against heavy stems, 5:1 or more |
| Construction | `■■■■□` 4/5 | written: broad-nib pen, diagonal stress, open forms | constructed: ruler and compass, vertical or no stress |
| x-height | `■■■□□` 3/5 | small, under 0.62 of the cap height | large, 0.74 of the cap height or more |
| Width | `■■■□□` 3/5 | condensed | extended |
| Serif mass | `■□□□□` 1/5 | no serifs | heavy, square, unbracketed slab |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Classification

- **Vox atypi:** Lineale: Grotesque
- **Din 16518:** Gruppe VI: Serifenlose Linear-Antiqua
- **Note:** The Vox Lineale class has four sub-classes: grotesque, neo-grotesque, geometric and humanist. The grotesque shows more contrast and more quirks than the neo-grotesque.

## Anatomy

- **Contrast:** Low but visible: the thin parts are 0.6–0.9 of the stem; the joins of n and m thin out.
- **Stress:** Vertical, where the joins show any thinning at all.
- **Serifs:** None: the strokes end clean, with no serif.
- **Terminals:** Cut at an angle or close to horizontal on c, e, s and the bowl of a.
- **Aperture:** Moderate: smaller than in a humanist sans, larger than in a neo-grotesque.
- **Key letters:** A two-storey g (often with an ear), a G with a spur, an R with a straight leg, and a square-shouldered a.

## Metrics

- **X height min:** 0.68
- **X height max:** 0.78
- **Contrast min:** 1.1
- **Contrast max:** 1.6
- **X height:** The x-height is 0.68–0.78 of the cap height and about 0.47–0.53 of the em.
- **Contrast:** The side of the o is 1.1 to 1.6 times as thick as its top.
- **Width:** Medium, with uneven widths between letters; condensed cuts are common.
- **Figures:** Lining figures; tabular in news and timetable cuts.

## Setting

- **Text sizes:** Set text at 9–11 pt in print and 15–18 px on screen.
- **Display sizes:** Set headlines at 24–144 pt in bold or condensed bold.
- **Leading:** Set the leading at 1.35–1.5 for text and 0.95–1.1 for headlines.
- **Tracking:** Set 0 to +0.01 em in text, −0.01 to −0.03 em in large headlines, +0.05 em for capitals.
- **Measure:** Set 50–70 characters a line.
- **Case and features:** Use capitals and condensed cuts for posters; tabular figures for data.

## Pairing

- **Rule:** Pair it with a serif of the same century, or use one grotesque family in several widths and weights.

**Pairs**

| With | Role | Why |
|---|---|---|
| Slab serif (Roboto Slab) | slab for headlines | The two classes came from the same posters, so the pair feels historically true. |
| Transitional serif (Libre Baskerville) | serif for long text | The serif carries the reading, and the grotesque carries the headings and the data. |

## Reference faces

- **Note:** Work Sans takes its forms from early grotesques. The default instance of Libre Franklin in google/fonts is the Thin weight, so the specimen uses Work Sans.

**Faces**

| Face | Designer | Year | Status |
|---|---|---|---|
| Two Lines English Egyptian | William Caslon IV | 1816 | historic metal |
| Akzidenz-Grotesk | H. Berthold AG | 1898 | proprietary |
| Franklin Gothic | Morris Fuller Benton | 1902 | historic metal |
| Work Sans | Wei Huang | 2015 | open revival |
| Libre Franklin | Pablo Impallari, Rodrigo Fuenzalida, Nhung Nguyen | 2015 | open revival |

## Prompt primer

- **Positive:** grotesque sans-serif · akzidenz style · bold condensed headline · early twentieth-century poster · two-storey g · industrial signage · plain black letters · newsprint
- **Negative:** serifs · geometric circles · script · calligraphic stress · thin hairline type

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

- If the user asks for **more neutral**: move toward [`neo-grotesque-sans`](../neo-grotesque-sans/SKILL.md) (Neo-grotesque sans). Even the widths, close the apertures to horizontal terminals, and bring the contrast down to 1.1:1.
- If the user asks for **more vintage**: move toward [`slab-serif`](../slab-serif/SKILL.md) (Slab serif). Add square slabs and keep the weight; set the headline in capitals.

- **Led to (go here for a newer version):** [`neo-grotesque-sans`](../neo-grotesque-sans/SKILL.md)
- **Rejects (the opposite pole; do not blend):** [`didone-serif`](../didone-serif/SKILL.md)
- **Was rejected by:** [`geometric-sans`](../geometric-sans/SKILL.md), [`humanist-sans`](../humanist-sans/SKILL.md)
- **Mixes well with:** [`slab-serif`](../slab-serif/SKILL.md)
- **Kin in another domain:** [`constructivism-web`](../constructivism-web/SKILL.md)
- **Nearest by vector profile:** [`geometric-sans`](../geometric-sans/SKILL.md), [`humanist-sans`](../humanist-sans/SKILL.md), [`neo-grotesque-sans`](../neo-grotesque-sans/SKILL.md)

## Emotional target

Plain strength: the reader feels a direct, honest voice with some character left in it.

**Keywords:** direct, industrial, sturdy, unpretentious, loud · **Brand archetypes:** everyman, outlaw, hero

## Canonical evidence (open licence)

Each item below has an open licence or is in the public domain, so you may show it as a reference.

- [Work Sans](https://fonts.google.com/specimen/Work+Sans) (Wei Huang, 2015): font, OFL-1.1. google/fonts repository, ofl/worksans
- [Libre Franklin](https://fonts.google.com/specimen/Libre+Franklin) (Pablo Impallari, Rodrigo Fuenzalida, Nhung Nguyen): font, OFL-1.1. google/fonts repository, ofl/librefranklin
- [Two Lines English Egyptian, the first sans serif type](https://commons.wikimedia.org/wiki/File:Caslon_Two_Lines_English_Egyptian_(cropped).jpg) (William Caslon IV, 1816): image, Public domain. Specimen in Columbia University; scan on Wikimedia Commons
- [Figgins sans-serif specimen](https://commons.wikimedia.org/wiki/File:Figgins_sans-serif_specimen_(cropped).jpg) (Figgins Foundry of London, 1845): image, Public domain. Figgins specimen book; scan on Wikimedia Commons

## Sources

- [Grotesque sans-serif (Wikipedia)](https://en.wikipedia.org/wiki/Grotesque_sans-serif)
- [Vox-ATypI classification (Wikipedia)](https://en.wikipedia.org/wiki/Vox-ATypI_classification)
- Robert Bringhurst, The Elements of Typographic Style (Hartley & Marks, 4th ed. 2012)

---

Generated from [`data/typeface/styles/grotesque-sans.json`](../../data/typeface/styles/grotesque-sans.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
