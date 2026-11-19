---
name: geometric-symbol
description: "Apply the Geometric abstract symbol style (1960–1990) when drawing, prompting or art-directing a logo: a symbol, a monogram, a wordmark, an emblem or a full identity mark. Load when the user asks for: abstract logo, geometric symbol, logo mark only, no letters, symbol logo, 1970s corporate."
domain: logo
era: modernist-identity
triggers:
  - "abstract logo"
  - "geometric symbol"
  - "logo mark only"
  - "no letters"
  - "symbol logo"
  - "1970s corporate"
  - "square logo"
vector_profile:
  abstraction: 5
  geometry: 5
  ornament: 1
  letter_dominance: 1
  dimensionality: 1
---

# Geometric abstract symbol

> A pure form carries meaning by its structure alone: a square, a bar or a loop can say stability, growth or a cycle in every language.

One abstract shape, built from squares, circles, bars or loops, that stands for the organisation with no letters. The shape implies a direction, growth or a cycle, and is strong enough to stand alone on a sign or a coin.

**Period:** 1960–1990 · **Era:** Modernist identity · **Domain:** Logo · **Also called:** Abstract mark, Symbol mark, Geometric logo

## When to load this skill

Load it when the user asks for: "abstract logo", "geometric symbol", "logo mark only", "no letters", "symbol logo", "1970s corporate", "square logo".

Good for: banks and insurers, public programmes and events, app icons and favicons, industrial groups.

Do not use it when:
- The audience must read the name in the mark to remember it.
- The brief asks for a playful, hand-made or ornate tone.

## System directives

When drawing, prompting or art-directing a logo: a symbol, a monogram, a wordmark, an emblem or a full identity mark in Geometric abstract symbol, you MUST:

1. Build the symbol from 1–3 primitive shapes: a square, a circle, a bar or a band.
2. Imply one idea with one move: a diagonal for growth, a loop for a cycle, a rotation for motion.
3. Fill the shapes solid; let negative space form a second figure when it can.
4. Keep the symbol in a square of 1:1, with the shapes at 80–95% of the square.
5. Use one colour for the master, often a deep blue, a green or black.
6. Test the symbol at 16 px and at 2 m: the idea must read at both sizes with no change.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Letters inside the symbol.
- **NEVER:** A literal picture of the product.
- **NEVER:** Thin lines under 6% of the symbol height.
- **NEVER:** More than 2 colours.
- **NEVER:** Texture, gloss or a shadow.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Abstraction | `■■■■■` 5/5 | a literal picture of a thing | a pure abstract form |
| Geometry | `■■■■■` 5/5 | freehand, drawn by eye | ruler and compass on a grid |
| Ornament | `■□□□□` 1/5 | bare form, no decoration | dense decoration and frames |
| Letter dominance | `■□□□□` 1/5 | a symbol with no letters | letters only |
| Dimensionality | `■□□□□` 1/5 | flat, one plane | modelled volume, light and depth |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Construction

- **Grid:** A square of 1:1 divided into 4–12 units; each corner and centre falls on a unit point.
- **Geometry:** Squares, circles, bars and bands; diagonals at 45° or at a fixed angle that the system names.
- **Stroke contrast ratio:** 1
- **Stroke rule:** Solid fills; where a band is used, its width is 12–25% of the symbol height.
- **Symmetry:** Rotational symmetry of order 2, 3 or 4 is common; a single diagonal breaks mirror symmetry on purpose.
- **Detail floor:** No gap under 8% of the symbol height.

## Form and lettering

- **Mark type:** symbol
- **Silhouette:** A square or a circle at 1:1; the outer edge is a clean primitive shape.
- **Ornament:** No ornament of any kind.
- **Letterforms:** Not part of the symbol; a logotype in a neutral sans sits apart from it, at a gap of 50–100% of the symbol height.

## Colour

- **Strategy:** One deep, saturated colour, used flat; the symbol is also standard in black and in white.
- **Colour count min:** 1
- **Colour count max:** 2
- **One colour reversal:** yes
- **Reversal rule:** The symbol is a solid silhouette, so white on a dark ground needs no change.

**Colours**

| Name | Hex | Role |
|---|---|---|
| Deep blue | `#0018A8` | master colour |
| Green | `#00843D` | alternative master colour |
| Black | `#000000` | one-colour version |
| White | `#FFFFFF` | ground |

## Reproduction

- **Min size px:** 16
- **Min size mm:** 4
- **Clear space ratio:** 0.25
- **Clear space:** A quarter of the symbol height on each side; in a lock-up, the gap to the logotype is half the symbol height.
- **Media:** Signs, coins and stamps, offset print, then screen icons.

## Prompt primer

- **Positive:** geometric abstract symbol · single solid shape · square and diagonal bar · deep blue flat colour · white ground · negative space figure · centred · 1970s corporate symbol · clean vector edges
- **Negative:** letters · text · words · slogan · watermark · gradient · shadow · illustration · outline only

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Construction grid (process)

Letters and marks drawn on a fixed grid of squares and circles, so that each glyph in a set has the same size, weight and corner. Origin: typeface, Nuremberg, 1525.

- Fix one live area inside a square canvas; on a 24 unit canvas, keep a 2 unit margin.
- Define 4 keyline shapes (circle, square, tall and wide rectangle) and fit each glyph to the one that suits it.
- Cut every angle to 45° or 90°, or to one other fixed angle.
- Use one stroke weight for the full set, for example 2 units on a 24 unit canvas.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **Chermayeff & Geismar** (studio, New York, 1957–now), made the style. A New York design studio. It drew simple geometric symbols for banks, networks and museums.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Base colour (`base_colour`) | #0018A8 | #0018A8, #00843D, #000000 | colour |
| Colour count (`colour_count`) | 1 | 1–2 | colour, reproduction |
| Stroke weight (`stroke_weight`) | 15 | 12–20 % of mark height | form |
| Container (`container`) | none | none, circle, square | construction |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more digital**: move toward [`flat-logo`](../flat-logo/SKILL.md) (Flat 2010s mark). Keep the primitive shapes; add 2–4 bright flat colours and round the corners at 10–20% of the shape size.
- If the user asks for **with depth**: move toward [`glossy-3d-logo`](../glossy-3d-logo/SKILL.md) (Gradient 3D and glass). Keep the silhouette; add a top-lit gradient, a highlight and a soft reflection.

- **Came from (go here for a more orthodox version):** [`swiss-modernist-mark`](../swiss-modernist-mark/SKILL.md)
- **Led to (go here for a newer version):** [`flat-logo`](../flat-logo/SKILL.md), [`glossy-3d-logo`](../glossy-3d-logo/SKILL.md)
- **Kin in another domain:** [`bauhaus`](../bauhaus/SKILL.md), [`de-stijl-painting`](../de-stijl-painting/SKILL.md), [`mid-century-modern`](../mid-century-modern/SKILL.md)
- **Nearest by vector profile:** [`flat-logo`](../flat-logo/SKILL.md), [`swiss-modernist-mark`](../swiss-modernist-mark/SKILL.md), [`emblem-badge`](../emblem-badge/SKILL.md)

## Emotional target

Calm strength: the viewer sees a firm, timeless form and reads stability and ambition.

**Keywords:** stable, bold, timeless, abstract, confident · **Brand archetypes:** ruler, sage

## Canonical evidence (open licence)

Each item below has an open licence or is in the public domain, so you may show it as a reference.

- [Slash in a square](https://commons.wikimedia.org/wiki/File:Deutsche_Bank_logo_without_wordmark.svg) (Anton Stankowski, 1974): image, Public domain. Deutsche Bank AG; file on Wikimedia Commons
- [Recycling symbol](https://commons.wikimedia.org/wiki/File:Recycling_symbol.svg) (Gary Anderson, 1970): image, Public domain. Drawn by Krdan on Wikimedia Commons
- [Munich 1972 radiant spiral](https://commons.wikimedia.org/wiki/File:Logo_M%C3%BCnchen_1972.svg) (Coordt von Mannstein, 1970): image, Public domain. Organising committee of the 1972 Summer Olympics; file on Wikimedia Commons

## Sources

- [Wikipedia: Anton Stankowski](https://en.wikipedia.org/wiki/Anton_Stankowski)
- [Wikipedia: Recycling symbol](https://en.wikipedia.org/wiki/Recycling_symbol)
- [Wikimedia Commons API: licence read from imageinfo extmetadata, 2026-11](https://commons.wikimedia.org/w/api.php)

---

Generated from [`data/logo/styles/geometric-symbol.json`](../../data/logo/styles/geometric-symbol.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
