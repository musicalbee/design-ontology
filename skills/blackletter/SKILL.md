---
name: blackletter
description: "Apply the Blackletter style (1454–present) when choosing, pairing, setting or briefing a typeface: a text face for a book or a product, a display face for a title, or a type brief for a designer. Load when the user asks for: blackletter, fraktur, gothic font, old english font, textura, metal band logo."
domain: typeface
era: hand-press
triggers:
  - "blackletter"
  - "fraktur"
  - "gothic font"
  - "old english font"
  - "textura"
  - "metal band logo"
  - "newspaper masthead"
  - "tattoo lettering"
vector_profile:
  stroke_contrast: 3
  construction: 1
  x_height: 4
  width: 1
  serif_mass: 2
---

# Blackletter

> A letter written with a broad nib held at a steep angle breaks each curve into straight strokes and makes a dark, even texture on the page.

The broken letter of the Gothic book hand: narrow, dark, with strokes that turn at sharp angles instead of curves. Gutenberg printed his Bible in textura; Fraktur stayed the German text face until 1941. Today it carries tradition, heraldry, metal and rebellion.

**Period:** 1454–present · **Era:** Hand press · **Domain:** Typeface · **Also called:** Gothic script, Fraktur, Textura, Old English, Broken script

## When to load this skill

Load it when the user asks for: "blackletter", "fraktur", "gothic font", "old english font", "textura", "metal band logo", "newspaper masthead", "tattoo lettering".

Good for: newspaper mastheads, certificates and diplomas, beer, spirits and heritage labels, music and street-wear brands.

Do not use it when:
- The text is longer than a title and the readers are not used to Fraktur.
- The brand must look neutral or modern.

## System directives

When choosing, pairing, setting or briefing a typeface: a text face for a book or a product, a display face for a title, or a type brief for a designer in Blackletter, you MUST:

1. Break the round strokes into straight segments that meet at angles; the bowl of the o is a hexagon or a lozenge in textura.
2. Hold the nib at 30–45°, so the vertical stems are heavy and the diagonals and joins are hairlines.
3. Keep the letters narrow and the space inside them about equal to the stem, so the line is a dark, even band.
4. Give the stems diamond feet and heads (textura) or a forked or curved top (Fraktur).
5. Make the capitals rich and round, with spurs and hairline flourishes, and never set a full word in them.
6. Use the long s (ſ) and the ligatures ch, ck, tz and ſt in Fraktur text.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Words set in all capitals.
- **NEVER:** Wide letter spacing or positive tracking.
- **NEVER:** Smooth round bowls as in a roman.
- **NEVER:** A blackletter for long text on a screen for a general reader.
- **NEVER:** Blackletter mixed with a script in one line.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Stroke contrast | `■■■□□` 3/5 | monoline, thick and thin strokes equal | hairlines against heavy stems, 5:1 or more |
| Construction | `■□□□□` 1/5 | written: broad-nib pen, diagonal stress, open forms | constructed: ruler and compass, vertical or no stress |
| x-height | `■■■■□` 4/5 | small, under 0.62 of the cap height | large, 0.74 of the cap height or more |
| Width | `■□□□□` 1/5 | condensed | extended |
| Serif mass | `■■□□□` 2/5 | no serifs | heavy, square, unbracketed slab |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Classification

- **Vox atypi:** Blackletter
- **Din 16518:** Gruppe X: Gebrochene Schriften
- **Note:** DIN 16518 has five sub-groups: Gotisch (textura), Rundgotisch (rotunda), Schwabacher, Fraktur and Fraktur-Varianten. Vox (1954) put blackletter in the graphic class; ATypI added the class when it adopted the scheme in 1962.

## Anatomy

- **Contrast:** Clear: the stems are heavy, and the diagonals and joins are hairlines of 0.1–0.3 of the stem.
- **Stress:** Diagonal, from a nib held at 30–45°; the curves are broken into straight strokes.
- **Serifs:** No true serifs: diamond-shaped feet and heads in textura, forked or split tops in Fraktur.
- **Terminals:** Sharp, angled cuts and small hairline spurs at the ends of the strokes.
- **Aperture:** Closed: the c, e and a are narrow and dark.
- **Key letters:** A long s (ſ), an a with a closed, angular bowl, an o made of straight strokes, and round, decorated capitals.

## Metrics

- **X height min:** 0.66
- **X height max:** 0.82
- **Contrast min:** 1
- **Contrast max:** 2
- **X height:** The x-height is 0.66–0.82 of the cap height; the ascenders are short and the capitals are tall and broad.
- **Contrast:** The o test gives 1.0–2.0: with a broad nib at angle θ, the side of the o is nib·cos θ wide and the top is nib·sin θ thick, so the ratio is cot θ, 1.73 at 30° and 1.0 at 45°. The real contrast is between the stems and the hairline diagonals.
- **Width:** Narrow: the mean advance of a to z is 0.38–0.45 em.
- **Figures:** Lining figures, drawn with the same broken strokes.

## Setting

- **Text sizes:** For text, set Fraktur at 11–14 pt or 18–22 px, and only for readers who know it.
- **Display sizes:** Set titles, mastheads and labels at 24–120 pt.
- **Leading:** Set the leading at 1.2–1.35 for text and 1.0–1.1 for titles.
- **Tracking:** Set 0 em; for emphasis, Fraktur uses letter spacing (Sperrsatz) of about 0.15 em on one word, not bold.
- **Measure:** Set 40–60 characters a line; the narrow letters give more words a line than a roman.
- **Case and features:** Use upper and lower case only, and turn on the ligatures and the long s if the font has them.

## Pairing

- **Rule:** Use blackletter for one masthead or title and set all running text in a calm roman or a plain sans.

**Pairs**

| With | Role | Why |
|---|---|---|
| Garalde old-style serif (EB Garamond) | roman for the text | The roman grew out of a rejection of the Gothic hand, so the two give a clear historical contrast. |
| Grotesque sans (Work Sans) | sans for labels and dates | The plain grotesque does not compete with the texture of the broken letter. |

## Reference faces

- **Note:** UnifrakturMaguntia is a free Fraktur from a 1901 model. Pirata One and Grenze Gotisch are new display faces of the class, not revivals of one cut.

**Faces**

| Face | Designer | Year | Status |
|---|---|---|---|
| B42 textura (Gutenberg Bible) | Johannes Gutenberg | 1454 | historic metal |
| Theuerdank Fraktur | Vinzenz Rockner | 1517 | historic metal |
| Breitkopf Fraktur | Johann Gottlob Immanuel Breitkopf | 1750 | historic metal |
| UnifrakturMaguntia | J. M. Sloan | 2009 | open revival |
| Pirata One | Rodrigo Fuenzalida, Nicolas Massi | 2012 | open revival |
| Grenze Gotisch | Omnibus-Type | 2019 | open revival |

## Prompt primer

- **Positive:** blackletter · fraktur · gothic textura · broken strokes · broad-nib calligraphy · illuminated manuscript capital · dark even texture · heraldic title · vellum
- **Negative:** sans-serif · rounded letters · all capitals · pastel colours · wide letter spacing

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Broad-nib pen (tool)

A pen with a flat, square-cut tip held at a fixed angle, so the width of a stroke changes with its direction and the stress of the letter is diagonal. Origin: typeface, Mainz, c. 1454.

- Hold the nib edge at 30–45° to the baseline and keep that angle for every stroke.
- Make the x-height about 4 nib widths in a round book hand and about 5 in textura; a stem is one nib width wide.
- Let the thin parts fall on the diagonal of the nib angle, so the o has its thinnest points at about 11 and 5 o'clock.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Weight (`weight`) | 600 | 500–800 | metrics, setting |
| Width (`width`) | 100 | 85–105 % | metrics |
| x-height ratio (`x_height_ratio`) | 0.46 | 0.4–0.52 | metrics, anatomy |
| Stroke contrast (`stroke_contrast`) | 5 | 3–10 | anatomy |
| Tracking (`tracking`) | 0 | 0–0.15 em | setting |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more readable**: move toward [`garalde-old-style`](../garalde-old-style/SKILL.md) (Garalde old-style serif). Use a roman with the same dark colour and a diagonal stress; keep blackletter only for the initial.
- If the user asks for **more modern**: move toward [`grotesque-sans`](../grotesque-sans/SKILL.md) (Grotesque sans). Keep the narrow, dark band, but drop the broken strokes for a condensed bold grotesque.

- **Was rejected by:** [`garalde-old-style`](../garalde-old-style/SKILL.md)
- **Kin in another domain:** [`gothic-architecture`](../gothic-architecture/SKILL.md), [`punk-zine`](../punk-zine/SKILL.md)
- **Nearest by vector profile:** [`humanist-sans`](../humanist-sans/SKILL.md), [`formal-script`](../formal-script/SKILL.md), [`transitional-serif`](../transitional-serif/SKILL.md)

## Emotional target

Weight and tradition: the reader feels age, ritual and authority, or rebellion when the context is music or street culture.

**Keywords:** traditional, dark, ceremonial, rebellious, dense · **Brand archetypes:** ruler, outlaw

## Canonical evidence (open licence)

Each item below has an open licence or is in the public domain, so you may show it as a reference.

- [UnifrakturMaguntia](https://fonts.google.com/specimen/UnifrakturMaguntia) (J. M. Sloan, 2009): font, OFL-1.1. google/fonts repository, ofl/unifrakturmaguntia
- [Pirata One](https://fonts.google.com/specimen/Pirata+One) (Rodrigo Fuenzalida, Nicolas Massi, 2012): font, OFL-1.1. google/fonts repository, ofl/pirataone
- [Grenze Gotisch](https://fonts.google.com/specimen/Grenze+Gotisch) (Omnibus-Type, 2019): font, OFL-1.1. google/fonts repository, ofl/grenzegotisch
- [Gutenberg Bible (B42), the opening of Genesis](https://commons.wikimedia.org/wiki/File:Gutenberg_Bible_B42_Genesis.JPG) (Johannes Gutenberg, 1454): image, Public domain. Gutenberg Bible page; scan on Wikimedia Commons

## Sources

- [Blackletter (Wikipedia)](https://en.wikipedia.org/wiki/Blackletter)
- [Fraktur (Wikipedia)](https://en.wikipedia.org/wiki/Fraktur)
- [Vox-ATypI classification (Wikipedia)](https://en.wikipedia.org/wiki/Vox-ATypI_classification)
- Robert Bringhurst, The Elements of Typographic Style (Hartley & Marks, 4th ed. 2012)

---

Generated from [`data/typeface/styles/blackletter.json`](../../data/typeface/styles/blackletter.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
