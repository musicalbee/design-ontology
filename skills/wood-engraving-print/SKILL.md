---
name: wood-engraving-print
description: "Apply the End-grain wood engraving style (1790–1950) when specifying, prompting or art-directing a printed piece or its look on screen: a poster, a plate, a book page, a zine, a label or a print-look illustration. Load when the user asks for: wood engraving, white line engraving, bewick style, victorian illustration, boxwood engraving, tailpiece vignette."
domain: print
era: hand-press
triggers:
  - "wood engraving"
  - "white line engraving"
  - "bewick style"
  - "victorian illustration"
  - "boxwood engraving"
  - "tailpiece vignette"
  - "illustrated london news style"
  - "end grain print"
vector_profile:
  tone_method: 3
  ink_layering: 1
  registration_play: 1
  surface_relief: 2
  hand_trace: 4
---

# End-grain wood engraving

> A burin on the end grain of boxwood cuts white lines in a black block, so that fine tone and exact detail print with type.

A burin cuts lines into a boxwood end-grain block, which is inked on the surface and printed with type. The cut becomes a white line on black, and fine parallel hatching gives the grey tones of Victorian magazines.

**Period:** 1790–1950 · **Era:** Hand press · **Domain:** Print · **Also called:** Holzstich (German), gravure sur bois de bout (French), white-line engraving

## When to load this skill

Load it when the user asks for: "wood engraving", "white line engraving", "bewick style", "victorian illustration", "boxwood engraving", "tailpiece vignette", "illustrated london news style", "end grain print".

Good for: book illustration and vignettes, magazine and newspaper features with a period look, natural-history plates, heritage labels and packaging.

Do not use it when:
- The image needs solid colour fields.
- The look should be rough and hand-gouged.

## System directives

When specifying, prompting or art-directing a printed piece or its look on screen: a poster, a plate, a book page, a zine, a label or a print-look illustration in End-grain wood engraving, you MUST:

1. Think in white lines: each cut makes a white mark, and the uncut wood prints black.
2. Build tone with parallel cuts of 0.1–0.4 mm; widen the cuts to lighten a tone.
3. Use a tint tool to rule even grey skies and backgrounds, at about 100 lines an inch.
4. Print the block at type height, so that the picture sits in the text page with no join.
5. Keep the picture to one black ink; add colour only as a flat tint from a second block.
6. Join several blocks with bolts for a large picture, and place the joins in a quiet area.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Gouge cuts with the coarse grain of a side-grain woodcut.
- **NEVER:** Soft grey wash or a photographic tone.
- **NEVER:** Halftone dots.
- **NEVER:** Thick contour lines with no fine hatching.
- **NEVER:** Colour that fills the picture.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Tone method | `■■■□□` 3/5 | solid ink, no tone | fine screen or continuous tone |
| Ink layering | `■□□□□` 1/5 | one ink | many overprinted inks |
| Registration play | `■□□□□` 1/5 | exact register | visible misregister as a feature |
| Surface relief | `■■□□□` 2/5 | flat, ink on the surface | deep bite or emboss in the sheet |
| Hand trace | `■■■■□` 4/5 | uniform machine output | each sheet differs by hand |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Process

- **Family:** relief
- **Matrix:** Boxwood end-grain block, type height (about 23.3 mm)
- **Press:** Letterpress, platen or cylinder, often via electrotype
- **Image making:** Burin and tint tools cut white lines; large blocks bolted from several pieces for double-page cuts
- **Edition:** Tens of thousands via electrotypes

## Inks

- **Strategy:** One black letterpress ink, as for the text; the type and the picture print in the same pass.
- **Ink count min:** 1
- **Ink count max:** 1
- **Overprint:** opaque

**Colours**

| Name | Hex | Role |
|---|---|---|
| Letterpress black | `#1C1B1A` | only ink |

## Tone and screen

- **Method:** line
- **Ruling lpi:** 100
- **Rule:** Make a mid-tone with parallel white lines, 60–100 lines an inch; cross a second set at 60° only in the deepest shadow.

**Angles**

|  |
||
|  |

## Registration

- **Tolerance mm:** 0
- **Rule:** The block prints with the type in one pass, so no register is needed; a tint block can shift 0.3 mm.

## Stock

- **Stock:** Machine-made wove paper or newsprint, off-white.
- **Weight gsm min:** 60
- **Weight gsm max:** 90
- **Ground:** #E7DEC8
- **Finish:** Smooth wove, with a slight tooth from the machine felt.

## Surface

- **Impression:** A slight impression from the type pressure; the lines show on the back as a faint emboss.
- **Sheen:** Matt black; a dense block can show a faint shine.
- **Texture:** Very fine, even lines, with sharp edges and no grain from the wood.

## Process marks

- **Marks:** fine white-line hatching · dense black cross-hatch · slight impression from type pressure · block joins in large cuts · tint-tool ruled sky tones

## Prompt primer

- **Positive:** wood engraving · Bewick vignette · white-line hatching · Victorian illustrated press · boxwood end-grain cut · black ink on off-white · fine parallel tint lines · tailpiece vignette
- **Negative:** colour · halftone dots · photograph · soft gradient · brush texture

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Wood engraving (process, invented here)

A relief print from the end grain of a hard wood, cut with a burin. The fine white lines make the tone. Origin: print, Newcastle upon Tyne, c. 1790.

- Cut the end grain of boxwood with a burin; the line can be as fine as 0.1 mm.
- Cut white lines for the light, so that the printed black stays solid between them.
- Make tone with the width and spacing of the white lines, not with a screen.
- Print with a letterpress, in one black ink, on smooth paper.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **Dalziel Brothers** (company, London, 1839–now), made the style. A Victorian firm of wood engravers. It cut the blocks for many illustrators, among them Millais, Tenniel and Rossetti, until photographic processes took over c. 1880.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Key ink (`key_ink`) | #1C1B1A | #1C1B1A, #2B2A28, #1B2433 | inks |
| Paper colour (`paper_colour`) | #E7DEC8 | #E7DEC8, #F0E9D6, #D8CFB4 | substrate |
| Ink count (`ink_count`) | 1 | 1–2 | inks, registration |
| Screen ruling (`screen_ruling`) | 100 | 60–140 lines per inch | screening |
| Misregistration (`misregistration`) | 0 | 0–0.3 mm | registration |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **rougher**: move toward [`woodcut-relief-print`](../woodcut-relief-print/SKILL.md) (Woodcut relief print). Use side-grain wood and a knife; cut thick lines and drop the fine tint lines.
- If the user asks for **more tone**: move toward [`engraving-print`](../engraving-print/SKILL.md) (Copper engraving). Switch to copper and lines that swell; keep one black ink and a plate mark.

- **Came from (go here for a more orthodox version):** [`woodcut-relief-print`](../woodcut-relief-print/SKILL.md)
- **Mixes well with:** [`engraving-print`](../engraving-print/SKILL.md)
- **Nearest by vector profile:** [`stipple-engraving-print`](../stipple-engraving-print/SKILL.md), [`woodcut-relief-print`](../woodcut-relief-print/SKILL.md), [`chinese-modern-woodcut`](../chinese-modern-woodcut/SKILL.md)

## Emotional target

Exact, nineteenth-century trust: the viewer reads a news picture or a natural-history plate with precise detail.

**Keywords:** exact, victorian, fine, engraved, documentary · **Brand archetypes:** sage, explorer, everyman

## Canonical evidence (open licence)

Each item below has an open licence or is in the public domain, so you may show it as a reference.

- [Woodcock (reproduced Bewick engraving)](https://commons.wikimedia.org/wiki/File:Brief_History_of_Wood-engraving_Bewick_Woodcock.png) (Thomas Bewick, 1797): image, Public domain. Wikimedia Commons
- [(Horses) Waiting for Death](https://commons.wikimedia.org/wiki/File:Thomas_Bewick_-_(Horses)_Waiting_for_Death_-_B1985.36.269_-_Yale_Center_for_British_Art.jpg) (Thomas Bewick, 1828): image, CC0. Yale Center for British Art, via Wikimedia Commons

## Sources

- [Wikipedia: Wood engraving](https://en.wikipedia.org/wiki/Wood_engraving)
- [Wikipedia: Thomas Bewick](https://en.wikipedia.org/wiki/Thomas_Bewick)

---

Generated from [`data/print/styles/wood-engraving-print.json`](../../data/print/styles/wood-engraving-print.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
