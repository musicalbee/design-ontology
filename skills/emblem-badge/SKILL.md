---
name: emblem-badge
description: "Apply the Emblem and badge style (1900–now) when drawing, prompting or art-directing a logo: a symbol, a monogram, a wordmark, an emblem or a full identity mark. Load when the user asks for: badge logo, emblem, seal, crest, patch, roundel."
domain: logo
era: trademark-age
triggers:
  - "badge logo"
  - "emblem"
  - "seal"
  - "crest"
  - "patch"
  - "roundel"
  - "mission patch"
  - "club logo"
vector_profile:
  abstraction: 2
  geometry: 4
  ornament: 3
  letter_dominance: 3
  dimensionality: 2
---

# Emblem and badge

> A mark that is a closed seal says membership and authority: the frame tells the viewer that everything inside belongs together.

A closed shape, a circle, a shield or a roundel, that holds a symbol and the name on a ring or a band. Agencies, clubs, transport lines and makers use it as a seal of membership or of origin.

**Period:** 1900–now · **Era:** Trademark age · **Domain:** Logo · **Also called:** Badge logo, Seal, Crest mark, Patch

## When to load this skill

Load it when the user asks for: "badge logo", "emblem", "seal", "crest", "patch", "roundel", "mission patch", "club logo".

Good for: public agencies and clubs, outdoor and workwear brands, breweries and coffee roasters, event and team merchandise.

Do not use it when:
- The mark must fit a narrow horizontal slot, such as a 6:1 header.
- The brief asks for a light, quiet or luxury tone.

## System directives

When drawing, prompting or art-directing a logo: a symbol, a monogram, a wordmark, an emblem or a full identity mark in Emblem and badge, you MUST:

1. Close the mark in one shape: a circle, a shield or a rounded rectangle; the frame is 4–10% of the mark width.
2. Set the name on an outer ring of text at 10–14% of the diameter, or on a straight band across the centre.
3. Put one central symbol at 40–60% of the inner area: a star, an animal, a tool or a vector arrow.
4. Use 2–4 flat colours, and give the outer ring a dark colour that holds the shape on any ground.
5. Make the mark work at 32 px as a solid disc with the central symbol, even if the ring text no longer reads.
6. Keep the mark symmetric on the vertical axis, except one dynamic element such as a swoosh or an orbit.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** An open composition with no frame.
- **NEVER:** Text on the ring smaller than 6% of the diameter.
- **NEVER:** More than 5 colours.
- **NEVER:** Two competing symbols inside the frame.
- **NEVER:** Photographic texture inside the badge.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Abstraction | `■■□□□` 2/5 | a literal picture of a thing | a pure abstract form |
| Geometry | `■■■■□` 4/5 | freehand, drawn by eye | ruler and compass on a grid |
| Ornament | `■■■□□` 3/5 | bare form, no decoration | dense decoration and frames |
| Letter dominance | `■■■□□` 3/5 | a symbol with no letters | letters only |
| Dimensionality | `■■□□□` 2/5 | flat, one plane | modelled volume, light and depth |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Construction

- **Grid:** Concentric circles: the outer edge, the ring for text and the inner field, at radii of about 100%, 85% and 70%.
- **Geometry:** Circles and arcs from a compass, straight bands, and stars or shields from regular polygons.
- **Stroke contrast ratio:** 1.5
- **Stroke rule:** Frame and ring lines at 2–5% of the diameter; symbol strokes at 4–8%.
- **Symmetry:** Mirror symmetry on the vertical axis; one diagonal element may break it.
- **Detail floor:** No gap or stroke under 1.5% of the diameter, so the badge survives embroidery and stamping.

## Form and lettering

- **Mark type:** emblem
- **Silhouette:** A circle at 1:1, a shield near 5:6, or a horizontal oval near 4:3.
- **Ornament:** Stars, laurel, a rope or dot ring, and a banner; flat, with no hatching.
- **Letterforms:** Bold sans-serif or slab capitals, set on the arc with a tracking of 5–15%; the top text reads clockwise and the bottom text reads anticlockwise.

## Colour

- **Strategy:** A dark navy or green field, one strong red or gold accent, and white for text and the symbol.
- **Colour count min:** 2
- **Colour count max:** 4
- **One colour reversal:** yes
- **Reversal rule:** The closed shape reverses as a solid disc; the symbol and the text become knock-outs of the ground.

**Colours**

| Name | Hex | Role |
|---|---|---|
| Navy | `#0B3D91` | field |
| Signal red | `#FC3D21` | accent, the dynamic element |
| White | `#FFFFFF` | text and symbol |
| Gold | `#C9A227` | ring or stars |

## Reproduction

- **Min size px:** 32
- **Min size mm:** 10
- **Clear space ratio:** 0.15
- **Clear space:** 0.15 × the diameter on each side.
- **Media:** Embroidered patches, enamel pins, stamps, decals, vehicle livery and screen.

## Prompt primer

- **Positive:** circular emblem · badge logo · closed roundel · central star symbol · navy field with red accent · white knock-out · flat vector · symmetric seal · embroidered patch look
- **Negative:** letters · text · words · slogan · watermark · photographic · gradient · open composition

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Letterspaced capitals (motif)

Capital letters set with wide space between them, so that a short word reads as an inscription of rank. Origin: typeface, Rome, 113.

- Track capitals at 0.1 to 0.3em; do not track lowercase.
- Set the size small, at 11 to 14px on screen, in a light weight.
- Use roman capitals with strong serifs or a clean geometric sans.
- Keep the line to one to four words.

## Media

The salons, schools, magazines, publishers, galleries and platforms that carried this style.

- **Behance** (platform, web, 2005–now), published the style. A web site where designers post portfolios of projects. Concept work for interfaces, logos and illustration spreads from it.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Base colour (`base_colour`) | #0B3D91 | #0B3D91, #FC3D21, #C9A227 | colour |
| Colour count (`colour_count`) | 3 | 2–4 | colour, reproduction |
| Stroke weight (`stroke_weight`) | 4 | 2–8 % of mark height | form |
| Container (`container`) | badge | badge, circle, shield | construction |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **simpler**: move toward [`flat-logo`](../flat-logo/SKILL.md) (Flat 2010s mark). Keep the central symbol and the flat colour; drop the ring text and the frame, and let the symbol stand alone.
- If the user asks for **more vintage**: move toward [`victorian-trademark`](../victorian-trademark/SKILL.md) (Victorian trademark). Keep the closed frame; add engraved hatching, a banner and a second typeface.

- **Came from (go here for a more orthodox version):** [`victorian-trademark`](../victorian-trademark/SKILL.md)
- **Was rejected by:** [`minimal-wordmark`](../minimal-wordmark/SKILL.md), [`swiss-modernist-mark`](../swiss-modernist-mark/SKILL.md)
- **Mixes well with:** [`glossy-3d-logo`](../glossy-3d-logo/SKILL.md), [`victorian-trademark`](../victorian-trademark/SKILL.md)
- **Kin in another domain:** [`mid-century-modern`](../mid-century-modern/SKILL.md), [`space-age`](../space-age/SKILL.md)
- **Nearest by vector profile:** [`art-nouveau-monogram`](../art-nouveau-monogram/SKILL.md), [`minimal-wordmark`](../minimal-wordmark/SKILL.md), [`flat-logo`](../flat-logo/SKILL.md)

## Emotional target

Belonging and authority: the viewer sees an official seal and reads the mark as a member, a team or an agency.

**Keywords:** official, loyal, sturdy, collectible, proud · **Brand archetypes:** hero, ruler, explorer

## Canonical evidence (open licence)

Each item below has an open licence or is in the public domain, so you may show it as a reference.

- [NASA insignia](https://commons.wikimedia.org/wiki/File:NASA_logo.svg) (James Modarelli, 1959): image, Public domain. National Aeronautics and Space Administration, a work of the US federal government
- [NASA seal](https://commons.wikimedia.org/wiki/File:NASA_seal.svg): image, Public domain. National Aeronautics and Space Administration, a work of the US federal government

## Sources

- [Wikipedia: NASA insignia](https://en.wikipedia.org/wiki/NASA_insignia)
- [Wikipedia: Badge](https://en.wikipedia.org/wiki/Badge)
- [Wikimedia Commons API: licence read from imageinfo extmetadata, 2026-11](https://commons.wikimedia.org/w/api.php)

---

Generated from [`data/logo/styles/emblem-badge.json`](../../data/logo/styles/emblem-badge.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
