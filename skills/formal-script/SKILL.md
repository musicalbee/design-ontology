---
name: formal-script
description: "Apply the Formal script style (1740–present) when choosing, pairing, setting or briefing a typeface: a text face for a book or a product, a display face for a title, or a type brief for a designer. Load when the user asks for: script font, copperplate, calligraphy font, wedding font, cursive, roundhand."
domain: typeface
era: hand-press
triggers:
  - "script font"
  - "copperplate"
  - "calligraphy font"
  - "wedding font"
  - "cursive"
  - "roundhand"
  - "invitation lettering"
vector_profile:
  stroke_contrast: 4
  construction: 1
  x_height: 1
  width: 2
  serif_mass: 1
---

# Formal script

> A letter is one movement of a flexible pointed pen: pressure on the downstroke, a hairline on the upstroke, and every letter joined to the next.

Joined, sloped letters from the pointed pen of the eighteenth-century writing master. Pressure makes the downstrokes swell and the upstrokes become hairlines. It speaks of invitations, ceremony and romance, and reads well only in short lines.

**Period:** 1740–present · **Era:** Hand press · **Domain:** Typeface · **Also called:** Copperplate script, English roundhand, Script typeface, Engraver's script

## When to load this skill

Load it when the user asks for: "script font", "copperplate", "calligraphy font", "wedding font", "cursive", "roundhand", "invitation lettering".

Good for: wedding and event invitations, certificates, perfume, wine and cosmetics labels, one signature line in a brand.

Do not use it when:
- The text is longer than one or two lines.
- The text is under 18 pt or 24 px.
- The brief asks for a technical or neutral voice.

## System directives

When choosing, pairing, setting or briefing a typeface: a text face for a book or a product, a display face for a title, or a type brief for a designer in Formal script, you MUST:

1. Slope the letters 50–55° from the baseline, at one constant angle.
2. Swell the downstrokes and keep the upstrokes and the joins as hairlines.
3. Join each lower-case letter to the next with a hairline that leaves from the baseline or the x-height.
4. Keep the x-height small, 0.40–0.60 of the cap height, so the loops of the ascenders and descenders have room.
5. Make the capitals large, with oval loops and one or two flourishes, and never set a word in them.
6. Set the text with no letter spacing, so the joins meet.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Words set in all capitals.
- **NEVER:** Positive tracking that breaks the joins.
- **NEVER:** Long paragraphs of body text.
- **NEVER:** Fake slope made by the software on an upright face.
- **NEVER:** Script and blackletter in one line.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Stroke contrast | `■■■■□` 4/5 | monoline, thick and thin strokes equal | hairlines against heavy stems, 5:1 or more |
| Construction | `■□□□□` 1/5 | written: broad-nib pen, diagonal stress, open forms | constructed: ruler and compass, vertical or no stress |
| x-height | `■□□□□` 1/5 | small, under 0.62 of the cap height | large, 0.74 of the cap height or more |
| Width | `■■□□□` 2/5 | condensed | extended |
| Serif mass | `■□□□□` 1/5 | no serifs | heavy, square, unbracketed slab |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Classification

- **Vox atypi:** Script
- **Din 16518:** Gruppe VIII: Schreibschriften
- **Note:** Vox-ATypI puts joined, formal scripts here; unjoined hand letters go to Manual (Graphic) or to DIN Gruppe IX, Handschriftliche Antiqua.

## Anatomy

- **Contrast:** Strong: the downstrokes swell to 3–8 times the hairline upstrokes.
- **Stress:** Along the slope of the letter, 50–55° from the baseline.
- **Serifs:** No serifs: the strokes start and end in hairlines, loops or small ball terminals.
- **Terminals:** Hairline entry and exit strokes, loops on b, d, h, k and l, and ball ends on capitals.
- **Aperture:** Closed, oval counters along the slope.
- **Key letters:** A looped l and h, an r with a shoulder hook, an s with a closed loop, and capitals with large oval flourishes.

## Metrics

- **X height min:** 0.4
- **X height max:** 0.6
- **Contrast min:** 1
- **Contrast max:** 2
- **X height:** The x-height is 0.40–0.60 of the cap height; the loops above and below take most of the line.
- **Contrast:** The o test gives only 1.0–2.0, because it measures on the vertical and the horizontal while the stress follows the slope of the letter.
- **Width:** Narrow: the mean advance of a to z is 0.30–0.42 em, because the letters lean and overlap.
- **Figures:** Old-style or lining figures with the same slope and hairlines.

## Setting

- **Text sizes:** Do not use it below 18 pt or 24 px; the hairlines break up.
- **Display sizes:** Set names, titles and short phrases at 28–120 pt.
- **Leading:** Set the leading at 1.3–1.6, so the loops of one line do not hit the next.
- **Tracking:** Set 0 em; never letter-space a joined script.
- **Measure:** Keep each line to 1–8 words.
- **Case and features:** Use upper and lower case, and the contextual alternates and swashes of the font for the first and last letters.

## Pairing

- **Rule:** Use the script for one line only and pair it with an upright face of high contrast or with spaced capitals of a serif.

**Pairs**

| With | Role | Why |
|---|---|---|
| Didone (Bodoni Moda) | upright serif for details and text | Both have strong thick and thin contrast from the same engraved tradition. |
| Transitional serif (Baskervville) | spaced capitals for names and dates | Baskerville was a writing master too, so the forms agree. |

## Reference faces

- **Note:** The Universal Penman is a book of engraved copperplates, not metal type; the first metal scripts tried to copy those plates.

**Faces**

| Face | Designer | Year | Status |
|---|---|---|---|
| The Universal Penman (engraved hands) | George Bickham | 1741 | historic metal |
| English Roundhand type | Firmin Didot | 1809 | historic metal |
| Snell Roundhand | Matthew Carter | 1965 | proprietary |
| Pinyon Script | Nicole Fally | 2011 | open revival |
| Great Vibes | Robert Leuschke | 2012 | open revival |

## Prompt primer

- **Positive:** formal script · copperplate calligraphy · pointed pen · swelling downstrokes · hairline joins · wedding invitation · engraved stationery · flourished capital
- **Negative:** sans-serif · block capitals · monoline handwriting · brush marker · slab serif

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Line engraving (process)

Lines cut into a metal plate with a burin; thin hairlines and swelling strokes give tone, and the print keeps a sharp, even edge. Origin: painting, Upper Rhine, c. 1430.

- Cut a hairline of 0.1 to 0.2mm for light areas; swell the line to 0.5mm or more for dark areas.
- Build shade with parallel lines or cross hatching, and keep the lines at 30° to 45° to each other.
- Print on smooth paper so the hairlines stay clean.

### Pointed pen (tool)

A sharp, flexible steel or quill nib: pressure spreads the two tines for a swelling downstroke, and no pressure gives a hairline upstroke. Origin: typeface, London, 1741.

- Slope the letters 50–55° from the baseline and keep one slope for the line.
- Press only on the downstrokes, to 3–8 times the hairline width, and release on the upstrokes and the joins.
- Join each lower-case letter to the next with a hairline from the baseline or the x-height.

## Media

The salons, schools, magazines, publishers, galleries and platforms that carried this style.

- **Linotype** (workshop, Brooklyn and Frankfurt, 1886–now), made the style. A maker of typesetting machines and type. It sold Helvetica, Frutiger and the formal script Snell Roundhand.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Weight (`weight`) | 400 | 300–500 | metrics, setting |
| Width (`width`) | 100 | 90–110 % | metrics |
| x-height ratio (`x_height_ratio`) | 0.36 | 0.35–0.42 | metrics, anatomy |
| Stroke contrast (`stroke_contrast`) | 4 | 3–8 | anatomy |
| Tracking (`tracking`) | 0 | 0–0 em | setting |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more legible**: move toward [`transitional-serif`](../transitional-serif/SKILL.md) (Transitional serif). Set the line in the italic of a transitional serif; keep the slope and the contrast, drop the joins.
- If the user asks for **more dramatic**: move toward [`didone-serif`](../didone-serif/SKILL.md) (Didone). Pair the script with a Didone title in capitals and widen the white space.

- **Mixes well with:** [`transitional-serif`](../transitional-serif/SKILL.md)
- **Kin in another domain:** [`hollywood-regency-interior`](../hollywood-regency-interior/SKILL.md), [`rococo-painting`](../rococo-painting/SKILL.md)
- **Nearest by vector profile:** [`garalde-old-style`](../garalde-old-style/SKILL.md), [`transitional-serif`](../transitional-serif/SKILL.md), [`blackletter`](../blackletter/SKILL.md)

## Emotional target

Grace and ceremony: the reader feels a personal, formal occasion.

**Keywords:** elegant, romantic, ceremonial, graceful, personal · **Brand archetypes:** lover, caregiver

## Canonical evidence (open licence)

Each item below has an open licence or is in the public domain, so you may show it as a reference.

- [Pinyon Script](https://fonts.google.com/specimen/Pinyon+Script) (Nicole Fally, 2011): font, OFL-1.1. google/fonts repository, ofl/pinyonscript
- [Great Vibes](https://fonts.google.com/specimen/Great+Vibes) (Robert Leuschke, 2012): font, OFL-1.1. google/fonts repository, ofl/greatvibes
- [The Universal Penman, a plate of engraved roundhand](https://commons.wikimedia.org/wiki/File:The_universal_penman._Engrav%27d_by_George_Bickham._Fleuron_T086160-4.png) (George Bickham, 1741): image, Public domain. Engraved by George Bickham; scan on Wikimedia Commons

## Sources

- [Script typeface (Wikipedia)](https://en.wikipedia.org/wiki/Script_typeface)
- [Copperplate script (Wikipedia)](https://en.wikipedia.org/wiki/Copperplate_script)
- [Vox-ATypI classification (Wikipedia)](https://en.wikipedia.org/wiki/Vox-ATypI_classification)
- Robert Bringhurst, The Elements of Typographic Style (Hartley & Marks, 4th ed. 2012)

---

Generated from [`data/typeface/styles/formal-script.json`](../../data/typeface/styles/formal-script.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
