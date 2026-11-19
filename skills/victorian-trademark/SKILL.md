---
name: victorian-trademark
description: "Apply the Victorian trademark style (1860–1910) when drawing, prompting or art-directing a logo: a symbol, a monogram, a wordmark, an emblem or a full identity mark. Load when the user asks for: victorian logo, vintage label, engraved logo, old trademark, apothecary label, heritage mark."
domain: logo
era: trademark-age
triggers:
  - "victorian logo"
  - "vintage label"
  - "engraved logo"
  - "old trademark"
  - "apothecary label"
  - "heritage mark"
  - "chromolithograph"
vector_profile:
  abstraction: 1
  geometry: 2
  ornament: 5
  letter_dominance: 3
  dimensionality: 4
---

# Victorian trademark

> A mark earns trust when it shows a rich, finished picture and the full name of the maker, so the buyer sees the cost and the care behind the goods.

A pictorial trademark from the age of the first trademark registers. A figure, an animal or a scene sits in an oval or a cartouche, with engraved line shading, banners and three or more typefaces on one label.

**Period:** 1860–1910 · **Era:** Trademark age · **Domain:** Logo · **Also called:** Engraved trademark, Chromolithographic label, Trade card mark

## When to load this skill

Load it when the user asks for: "victorian logo", "vintage label", "engraved logo", "old trademark", "apothecary label", "heritage mark", "chromolithograph".

Good for: heritage food and drink labels, spirits and tobacco-style packaging, historical film and game props, letterpress print work.

Do not use it when:
- The mark must read as an app icon at 16–48 px.
- The brief asks for a quiet, modern or technical tone.

## System directives

When drawing, prompting or art-directing a logo: a symbol, a monogram, a wordmark, an emblem or a full identity mark in Victorian trademark, you MUST:

1. Put a pictorial device at the centre: an animal, a figure or an object, at 50–70% of the label height.
2. Close the device in an oval, a circle or a cartouche, with a border band 6–10% of the mark width.
3. Shade with engraved hatch lines at 0.3–0.6 mm pitch in print; let 2–4 tones come from line density, not from tint.
4. Set the name on an arc or a ribbon banner that follows the frame, in 2–4 typefaces of different classes.
5. Fill the corners with scrolls, medals or rules, so that less than 20% of the area stays empty.
6. Print in 1–2 inks for an engraving, or in 4–8 flat stones for a chromolithograph.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** A single flat shape with no picture.
- **NEVER:** Large empty ground around the device.
- **NEVER:** One sans-serif typeface for all text.
- **NEVER:** A mark that must read below 20 mm high.
- **NEVER:** Gradients made by a screen or by software.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Abstraction | `■□□□□` 1/5 | a literal picture of a thing | a pure abstract form |
| Geometry | `■■□□□` 2/5 | freehand, drawn by eye | ruler and compass on a grid |
| Ornament | `■■■■■` 5/5 | bare form, no decoration | dense decoration and frames |
| Letter dominance | `■■■□□` 3/5 | a symbol with no letters | letters only |
| Dimensionality | `■■■■□` 4/5 | flat, one plane | modelled volume, light and depth |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Construction

- **Grid:** No modular grid. A central axis and a closed oval or circle set the layout; the banners follow arcs concentric with the frame.
- **Geometry:** Ovals and circles drawn with a compass for the frame; the picture and the scrolls are freehand.
- **Stroke contrast ratio:** 12
- **Stroke rule:** Hairlines of about 0.5% of the mark height for hatching; frame rules and the main letter stems at 4–6%.
- **Symmetry:** Mirror symmetry on the vertical axis for the frame and the banners; the picture inside may be asymmetric.
- **Detail floor:** Hatch gaps and hairlines of 0.3–0.5% of the mark height, so the mark needs a large size.

## Form and lettering

- **Mark type:** emblem
- **Silhouette:** An oval, a circle or a shield, from 1:1 to 4:3 wide, with ribbons that break out of the frame at the top or the bottom.
- **Ornament:** Scrolls, laurel, medals, rope borders and cross-hatched shadow, in the corners and around the frame.
- **Letterforms:** A mix of Didone capitals, slab serifs, Tuscan display letters and script; set on an arc, with tight spacing and shadowed or outlined capitals.

## Colour

- **Strategy:** Engraving: one dark ink on a cream paper. Chromolithograph: a deep red and a dark blue lead, with gold, cream and black.
- **Colour count min:** 1
- **Colour count max:** 8
- **One colour reversal:** with a redraw
- **Reversal rule:** A one-colour version keeps the hatch lines but drops the flat colour fields; a reversed version needs heavier hatching, at least 1.5 times the line weight.

**Colours**

| Name | Hex | Role |
|---|---|---|
| Engraving black | `#1E1B18` | line work and lettering |
| Label red | `#A8262B` | banners and the frame |
| Deep blue | `#24395E` | border band |
| Gold ochre | `#C49A3A` | medals and rules |
| Paper cream | `#F1E6CC` | ground |

## Reproduction

- **Min size px:** 128
- **Min size mm:** 30
- **Clear space ratio:** 0.1
- **Clear space:** 0.1 × the frame height on each side; the label edge is often the clear space.
- **Media:** Copperplate and wood engraving, chromolithography on labels, trade cards and tins.

## Prompt primer

- **Positive:** Victorian trademark label · engraved cross-hatch shading · oval cartouche frame · ribbon banners · pictorial animal device · chromolithograph colours · deep red and dark blue with gold · cream paper ground · ornate scroll corners · 1880s printed label
- **Negative:** letters · text · words · slogan · watermark · flat vector · minimal · gradient mesh

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

### Wood type (process)

Large display letters routed from end-grain wood instead of cast in metal, so posters and bills can use letters 5–50 cm high at a low cost. Origin: typeface, New York, 1828.

- Use wood type for letters above about 72 pt, where metal is too heavy and too expensive.
- Draw the faces to be loud at a distance: fat face, slab and condensed grotesque, in one weight per line.
- Mix several faces and sizes on one bill and centre each line, as the job printers did.

## Media

The salons, schools, magazines, publishers, galleries and platforms that carried this style.

- **L. Prang & Co.** (publisher, Boston, ?–now), made the style. The colour lithography firm of Louis Prang. It printed trade cards, labels and Christmas cards with pictorial marks in the Victorian taste.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Base colour (`base_colour`) | #1E1B18 | #1E1B18, #A8262B, #24395E, #C49A3A | colour |
| Colour count (`colour_count`) | 4 | 1–6 | colour, reproduction |
| Stroke weight (`stroke_weight`) | 5 | 1–6 % of mark height | form |
| Container (`container`) | badge | badge, circle, shield | construction |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **simpler**: move toward [`emblem-badge`](../emblem-badge/SKILL.md) (Emblem and badge). Keep the closed frame and the banner; drop the hatching and the scenes, and reduce to 2–3 flat colours.
- If the user asks for **more elegant**: move toward [`art-nouveau-monogram`](../art-nouveau-monogram/SKILL.md) (Art Nouveau monogram). Keep the frame and the ornament; replace the picture with interlaced initials and whiplash curves.

- **Led to (go here for a newer version):** [`art-nouveau-monogram`](../art-nouveau-monogram/SKILL.md), [`emblem-badge`](../emblem-badge/SKILL.md)
- **Was rejected by:** [`swiss-modernist-mark`](../swiss-modernist-mark/SKILL.md)
- **Mixes well with:** [`emblem-badge`](../emblem-badge/SKILL.md)
- **Kin in another domain:** [`engraving-print`](../engraving-print/SKILL.md), [`fat-face-display`](../fat-face-display/SKILL.md), [`malletier-luggage`](../malletier-luggage/SKILL.md), [`victorian-interior`](../victorian-interior/SKILL.md), [`victorian-web`](../victorian-web/SKILL.md), [`wood-type-poster`](../wood-type-poster/SKILL.md)
- **Nearest by vector profile:** [`emblem-badge`](../emblem-badge/SKILL.md), [`art-nouveau-monogram`](../art-nouveau-monogram/SKILL.md), [`glossy-3d-logo`](../glossy-3d-logo/SKILL.md)

## Emotional target

Trust in an old, solid maker: the viewer reads the detail as proof of quality and age.

**Keywords:** established, ornate, crafted, heritage, lavish · **Brand archetypes:** ruler, caregiver

## Canonical evidence (open licence)

Each item below has an open licence or is in the public domain, so you may show it as a reference.

- [Mule Ear tobacco label](https://commons.wikimedia.org/wiki/File:Mule_Ear_(tobacco)_1872_lithograph_art_-_Harris,_Beebe_%26_Cos.,_Quincy,_Ill._-_The_Hatch_LithCo.,_32_%26_34_Vesey_St._N.Y._LCCN96504709_(cropped).jpg) (Hatch Lithographic Company, 1868): image, Public domain. Library of Congress, Prints and Photographs Division; scan on Wikimedia Commons
- [Trade card with bottle labels](https://commons.wikimedia.org/wiki/File:Print,_trade-card_(BM_Banks,68.14).jpg): image, Public domain. British Museum, Banks collection; scan on Wikimedia Commons

## Sources

- [Wikipedia: Trade Marks Registration Act 1875](https://en.wikipedia.org/wiki/Trade_Marks_Registration_Act_1875)
- [Wikipedia: Chromolithography](https://en.wikipedia.org/wiki/Chromolithography)
- [Wikimedia Commons API: licence read from imageinfo extmetadata, 2026-11](https://commons.wikimedia.org/w/api.php)

---

Generated from [`data/logo/styles/victorian-trademark.json`](../../data/logo/styles/victorian-trademark.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
