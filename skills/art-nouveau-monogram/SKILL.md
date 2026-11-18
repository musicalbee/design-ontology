---
name: art-nouveau-monogram
description: "Apply the Art Nouveau monogram style (1890–1914) when drawing, prompting or art-directing a logo: a symbol, a monogram, a wordmark, an emblem or a full identity mark. Load when the user asks for: art nouveau logo, jugendstil, monogram, whiplash, botanical monogram, ex libris."
domain: logo
era: trademark-age
triggers:
  - "art nouveau logo"
  - "jugendstil"
  - "monogram"
  - "whiplash"
  - "botanical monogram"
  - "ex libris"
  - "vignette"
vector_profile:
  abstraction: 3
  geometry: 2
  ornament: 4
  letter_dominance: 4
  dimensionality: 1
---

# Art Nouveau monogram

> The letters and the ornament are one drawing: a mark grows like a plant from one line, and the hand of the artist shows in each curve.

Interlaced initials and lettering drawn as one ornament, inside a frame of whiplash curves and plant forms. Publishers, societies and workshops used it as a vignette on books, journals and printed matter.

**Period:** 1890–1914 · **Era:** Trademark age · **Domain:** Logo · **Also called:** Jugendstil monogram, Nieuwe Kunst vignette, Secession monogram

## When to load this skill

Load it when the user asks for: "art nouveau logo", "jugendstil", "monogram", "whiplash", "botanical monogram", "ex libris", "vignette".

Good for: publishers and bookshops, florists and perfumers, wedding and stationery marks, boutique hotels.

Do not use it when:
- The brief needs a technical, neutral or rational tone.
- The mark must read at 16 px.

## System directives

When drawing, prompting or art-directing a logo: a symbol, a monogram, a wordmark, an emblem or a full identity mark in Art Nouveau monogram, you MUST:

1. Interlace 1–3 initials so that their strokes share at least one stem or one bowl.
2. Draw each curve as a whiplash: an S-curve whose radius changes along the stroke by a factor of 3 or more.
3. Close the mark in a frame of plant stems or tendrils, with the frame line 1.5–2 times the letter stroke.
4. Draw custom capitals with small x-heights, high crossbars and open, rounded counters; no typeface from a foundry.
5. Keep stroke contrast low, 1.5:1 to 3:1, so that the mark prints in one ink as a block.
6. Fit the mark to a vertical rectangle near 3:4 or a square, centred on a vertical axis.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Straight-sided geometric letters from a typeface.
- **NEVER:** Hatching and tonal shading.
- **NEVER:** More than 2 printing inks.
- **NEVER:** Rigid circles and squares as the only frame.
- **NEVER:** Letters that float apart with no shared stroke.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Abstraction | `■■■□□` 3/5 | a literal picture of a thing | a pure abstract form |
| Geometry | `■■□□□` 2/5 | freehand, drawn by eye | ruler and compass on a grid |
| Ornament | `■■■■□` 4/5 | bare form, no decoration | dense decoration and frames |
| Letter dominance | `■■■■□` 4/5 | a symbol with no letters | letters only |
| Dimensionality | `■□□□□` 1/5 | flat, one plane | modelled volume, light and depth |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Construction

- **Grid:** No modular grid. One vertical axis and a frame that fits a 3:4 or 1:1 rectangle; the lettering sits on 2–4 baselines inside it.
- **Geometry:** Freehand curves of changing radius; few straight lines, and no arc from a compass.
- **Stroke contrast ratio:** 2
- **Stroke rule:** Letter strokes at 4–7% of the mark height; frame lines at 1.5–2 times the letter stroke.
- **Symmetry:** Mirror symmetry for the frame; the interlaced initials break it in the centre.
- **Detail floor:** Gaps between interlaced strokes of at least 1.5% of the mark height, so that the interlace survives letterpress.

## Form and lettering

- **Mark type:** monogram
- **Silhouette:** A vertical rectangle near 3:4, a square or a pointed oval, with tendrils that touch the frame corners.
- **Ornament:** Whiplash tendrils, buds, leaves, dots in groups of three, and stylised water or flowers in the frame.
- **Letterforms:** Hand-drawn capitals with high crossbars, bulging bowls and small serifs; letter spacing even and wide, often 10–20% of the cap height.

## Colour

- **Strategy:** One dark ink on a toned paper; a second muted ink, sage, ochre or dull red, for the frame or the ground.
- **Colour count min:** 1
- **Colour count max:** 2
- **One colour reversal:** yes
- **Reversal rule:** The mark is drawn as one ink, so it reverses white on dark with no change; open the interlace gaps by 10% for a reversal.

**Colours**

| Name | Hex | Role |
|---|---|---|
| Ink black | `#1C1A17` | letters and frame |
| Sage green | `#7C8B62` | second ink, ground |
| Ochre | `#B9893B` | second ink, accents |
| Oxblood | `#7A2E2A` | second ink, initials |
| Toned paper | `#EFE5CF` | ground |

## Reproduction

- **Min size px:** 64
- **Min size mm:** 15
- **Clear space ratio:** 0.2
- **Clear space:** 0.2 × the mark height on each side, measured from the outermost tendril.
- **Media:** Letterpress line blocks, book covers, title pages, stamps for silver and ceramics.

## Prompt primer

- **Positive:** Art Nouveau vignette · whiplash curves · interlaced plant tendrils · one ink on toned paper · sage green and black · symmetrical frame · line block print · 1900 book ornament · flowing organic line
- **Negative:** letters · text · words · slogan · watermark · hatching · photographic · gradient · geometric grid

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Whiplash line (motif)

A long S-shaped line whose curve changes along its length, drawn from a plant stem; it joins structure and ornament in one stroke. Origin: architecture, Brussels, c. 1893.

- Draw each line as an S-curve with a radius that changes along its length.
- Swell the stroke from 1 to 4 units along the curve, as a stem thickens at the base.
- Join letters, frame and plant forms with the same line; leave no straight edge to break the flow.
- Use few colours, 2 to 4, in muted tones.

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more modern**: move toward [`minimal-wordmark`](../minimal-wordmark/SKILL.md) (Wordmark-led minimal). Keep the custom letters and the even spacing; drop the frame and the tendrils, and set the letters in one weight on one baseline.
- If the user asks for **richer**: move toward [`victorian-trademark`](../victorian-trademark/SKILL.md) (Victorian trademark). Keep the frame; add a pictorial device, banners and a second typeface.

- **Came from (go here for a more orthodox version):** [`victorian-trademark`](../victorian-trademark/SKILL.md)
- **Kin in another domain:** [`art-nouveau-architecture`](../art-nouveau-architecture/SKILL.md), [`art-nouveau-interior`](../art-nouveau-interior/SKILL.md), [`art-nouveau-web`](../art-nouveau-web/SKILL.md)
- **Nearest by vector profile:** [`emblem-badge`](../emblem-badge/SKILL.md), [`minimal-wordmark`](../minimal-wordmark/SKILL.md), [`victorian-trademark`](../victorian-trademark/SKILL.md)

## Emotional target

Grace and craft: the viewer sees a hand-drawn, living line and feels care and taste.

**Keywords:** organic, graceful, crafted, literary, romantic · **Brand archetypes:** creator, lover

## Canonical evidence (open licence)

Each item below has an open licence or is in the public domain, so you may show it as a reference.

- [Vignette of the publisher L.J. Veen](https://commons.wikimedia.org/wiki/File:Vignet_van_uitgeversmaatschappij_L.J._Veen,_RP-P-2016-1039.jpg): image, CC0. Rijksmuseum, Amsterdam, RP-P-2016-1039; scan on Wikimedia Commons
- [Vignette for a society journal](https://commons.wikimedia.org/wiki/File:Vignet_van_het_Maandblad_der_Vereeniging_voor_verbetering_van_vrouwenkleeding,_RP-T-2015-41-1694.jpg): image, CC0. Rijksmuseum, Amsterdam, RP-T-2015-41-1694, about 1901–1909; scan on Wikimedia Commons
- [Title vignette, Onder Neerlands vlag](https://commons.wikimedia.org/wiki/File:Vignet_voor_Onder_Neerlands_vlag,_1899,_RP-P-1969-337X-1.jpg): image, CC0. Rijksmuseum, Amsterdam, RP-P-1969-337X-1; scan on Wikimedia Commons

## Sources

- [Wikipedia: Art Nouveau](https://en.wikipedia.org/wiki/Art_Nouveau)
- [Wikipedia: Monogram](https://en.wikipedia.org/wiki/Monogram)
- [Wikimedia Commons API: licence read from imageinfo extmetadata, 2026-11](https://commons.wikimedia.org/w/api.php)

---

Generated from [`data/logo/styles/art-nouveau-monogram.json`](../../data/logo/styles/art-nouveau-monogram.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
