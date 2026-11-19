---
name: minimal-wordmark
description: "Apply the Wordmark-led minimal style (1975–now) when drawing, prompting or art-directing a logo: a symbol, a monogram, a wordmark, an emblem or a full identity mark. Load when the user asks for: wordmark, logotype, text logo, type-only logo, minimal logo, name as logo."
domain: logo
era: modernist-identity
triggers:
  - "wordmark"
  - "logotype"
  - "text logo"
  - "type-only logo"
  - "minimal logo"
  - "name as logo"
vector_profile:
  abstraction: 3
  geometry: 4
  ornament: 1
  letter_dominance: 5
  dimensionality: 1
---

# Wordmark-led minimal

> The name is the mark: one carefully spaced word, with one detail of its own, is clearer and more durable than any symbol.

The name alone, set or drawn in one weight of a sans, with a single detail that makes it own: a cut stroke, a hidden arrow, a joined pair of letters. No symbol and no frame.

**Period:** 1975–now · **Era:** Modernist identity · **Domain:** Logo · **Also called:** Logotype, Minimal wordmark, Type-only logo

## When to load this skill

Load it when the user asks for: "wordmark", "logotype", "text logo", "type-only logo", "minimal logo", "name as logo".

Good for: fashion and retail, software and services, media titles, logistics and transport.

Do not use it when:
- The name is long, over 12 letters, and must fit a square icon.
- The audience reads a different script than the name.

## System directives

When drawing, prompting or art-directing a logo: a symbol, a monogram, a wordmark, an emblem or a full identity mark in Wordmark-led minimal, you MUST:

1. Use the name in one line, in one weight of a sans or a custom monoline alphabet.
2. Make exactly one detail own the mark: a removed crossbar, a ligature, a cut stroke or a shape in the counter.
3. Space by eye: optical tracking of 0–5% for lower case, 5–20% for capitals.
4. Use one colour for the master; a second colour may mark one part of the word only.
5. Keep the height of the word at 15–25% of its width, so it fits a header and a narrow sign.
6. Define clear space as the height of one capital or one x-height on each side.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** A symbol beside the word in the master mark.
- **NEVER:** Two or more typefaces.
- **NEVER:** Outline, shadow or bevel on the letters.
- **NEVER:** A frame or a badge around the word.
- **NEVER:** Distortion of letter widths to fit a box.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Abstraction | `■■■□□` 3/5 | a literal picture of a thing | a pure abstract form |
| Geometry | `■■■■□` 4/5 | freehand, drawn by eye | ruler and compass on a grid |
| Ornament | `■□□□□` 1/5 | bare form, no decoration | dense decoration and frames |
| Letter dominance | `■■■■■` 5/5 | a symbol with no letters | letters only |
| Dimensionality | `■□□□□` 1/5 | flat, one plane | modelled volume, light and depth |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Construction

- **Grid:** The baseline, the x-height and the cap height of the alphabet; custom letters share one stroke width and one radius set.
- **Geometry:** Monoline strokes; curves either from circles (a geometric sans) or from optical ovals (a grotesque).
- **Stroke contrast ratio:** 1.2
- **Stroke rule:** One stroke weight at 12–20% of the cap height; thin joins at 80–90% of it.
- **Symmetry:** None; the balance comes from even spacing along the line.
- **Detail floor:** No counter or gap under 10% of the cap height, so the word reads at 16 px high.

## Form and lettering

- **Mark type:** wordmark
- **Silhouette:** A horizontal bar from 3:1 to 8:1.
- **Ornament:** None; one typographic detail replaces ornament.
- **Letterforms:** A geometric or grotesque sans, or a custom monoline alphabet; all capitals or all lower case, rarely mixed.

## Colour

- **Strategy:** One colour, black, or one brand colour on white; a second colour may mark one letter or one word.
- **Colour count min:** 1
- **Colour count max:** 2
- **One colour reversal:** yes
- **Reversal rule:** White on a dark ground is a standard version; open the tracking by 2–3% for small white text.

**Colours**

| Name | Hex | Role |
|---|---|---|
| Black | `#111111` | master |
| Brand red | `#E03C31` | single-colour version |
| Purple | `#4D148C` | first half of a two-colour word |
| Orange | `#FF6600` | second half of a two-colour word |

## Reproduction

- **Min size px:** 12
- **Min size mm:** 4
- **Clear space ratio:** 0.5
- **Clear space:** One cap height on each side, which is about half the mark height.
- **Media:** Every medium: print, signs, packaging, screen headers and app splash screens.

## Prompt primer

- **Positive:** minimal brand mark · monoline geometry · one flat colour · white ground · single clever detail · precise spacing · horizontal bar format · clean vector · restrained and modern
- **Negative:** letters · text · words · slogan · watermark · ornament · gradient · shadow · badge frame

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Letterspaced capitals (motif)

Capital letters set with wide space between them, so that a short word reads as an inscription of rank. Origin: typeface, Rome, 113.

- Track capitals at 0.1 to 0.3em; do not track lowercase.
- Set the size small, at 11 to 14px on screen, in a light weight.
- Use roman capitals with strong serifs or a clean geometric sans.
- Keep the line to one to four words.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **Pentagram** (studio, London and New York, 1972–now), made the style. A design studio owned by its partners. It drew many wordmarks for companies and institutions.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Base colour (`base_colour`) | #111111 | #111111, #E03C31, #4D148C, #FF6600 | colour |
| Colour count (`colour_count`) | 1 | 1–2 | colour, reproduction |
| Stroke weight (`stroke_weight`) | 15 | 12–20 % of mark height | form |
| Container (`container`) | none | none | construction |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **add a symbol**: move toward [`swiss-modernist-mark`](../swiss-modernist-mark/SKILL.md) (Swiss modernist corporate mark). Keep the sans and the one colour; add a grid-built symbol to the left at 1–1.5 times the cap height.
- If the user asks for **warmer**: move toward [`art-nouveau-monogram`](../art-nouveau-monogram/SKILL.md) (Art Nouveau monogram). Keep the one colour; draw the letters by hand with curved terminals and a shared stroke between two letters.

- **Came from (go here for a more orthodox version):** [`swiss-modernist-mark`](../swiss-modernist-mark/SKILL.md)
- **Rejects (the opposite pole; do not blend):** [`emblem-badge`](../emblem-badge/SKILL.md)
- **Mixes well with:** [`flat-logo`](../flat-logo/SKILL.md)
- **Kin in another domain:** [`minimalist-interior`](../minimalist-interior/SKILL.md), [`rams-functionalism-ui`](../rams-functionalism-ui/SKILL.md)
- **Nearest by vector profile:** [`emblem-badge`](../emblem-badge/SKILL.md), [`flat-logo`](../flat-logo/SKILL.md), [`swiss-modernist-mark`](../swiss-modernist-mark/SKILL.md)

## Emotional target

Quiet confidence: the viewer reads the name first and feels a brand that does not need to shout.

**Keywords:** clean, assured, modern, direct, restrained · **Brand archetypes:** sage, everyman

## Canonical evidence (open licence)

Each item below has an open licence or is in the public domain, so you may show it as a reference.

- [NASA logotype (the worm)](https://commons.wikimedia.org/wiki/File:NASA_Worm_logo.svg) (Danne & Blackburn, 1975): image, Public domain. NASA Graphics Standards Manual, 1975; a work of the US federal government
- [FedEx logotype](https://commons.wikimedia.org/wiki/File:FedEx_Express.svg) (Lindon Leader, Landor Associates, 1994): image, Public domain. FedEx; file on Wikimedia Commons
- [Calvin Klein logotype, 2017](https://commons.wikimedia.org/wiki/File:Calvin_klein_logo.svg) (Peter Saville, 2017): image, Public domain. Calvin Klein; file on Wikimedia Commons

## Sources

- [Wikipedia: Wordmark](https://en.wikipedia.org/wiki/Wordmark)
- [Wikipedia: NASA insignia](https://en.wikipedia.org/wiki/NASA_insignia)
- [Wikimedia Commons API: licence read from imageinfo extmetadata, 2026-11](https://commons.wikimedia.org/w/api.php)

---

Generated from [`data/logo/styles/minimal-wordmark.json`](../../data/logo/styles/minimal-wordmark.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
