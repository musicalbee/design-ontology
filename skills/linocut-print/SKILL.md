---
name: linocut-print
description: "Apply the Expressive linocut style (1925–1970) when specifying, prompting or art-directing a printed piece or its look on screen: a poster, a plate, a book page, a zine, a label or a print-look illustration. Load when the user asks for: linocut, lino print, grosvenor school print, claude flight linocut, colour linocut, art deco motion print."
domain: print
era: industrial-press
triggers:
  - "linocut"
  - "lino print"
  - "grosvenor school print"
  - "claude flight linocut"
  - "colour linocut"
  - "art deco motion print"
  - "hand-cut lino"
  - "sybil andrews"
vector_profile:
  tone_method: 2
  ink_layering: 4
  registration_play: 3
  surface_relief: 3
  hand_trace: 4
---

# Expressive linocut

> Linoleum has no grain, so a gouge cuts a smooth curve, and flat opaque colour layers can carry rhythm and speed.

A sheet of linoleum is cut with a V-gouge and printed by hand, so the cut has smooth curves and no grain. Flat opaque colour layers overlap in bold rhythmic shapes, as in the Grosvenor School prints of 1929-1938.

**Period:** 1925–1970 · **Era:** Industrial press · **Domain:** Print · **Also called:** Linolschnitt (German), linogravure (French)

## When to load this skill

Load it when the user asks for: "linocut", "lino print", "grosvenor school print", "claude flight linocut", "colour linocut", "art deco motion print", "hand-cut lino", "sybil andrews".

Good for: posters and event prints, book covers and editorial illustration, transport and sports branding with a hand-made look, limited-edition art prints.

Do not use it when:
- The image needs fine detail or a smooth tone.
- The design needs exact register of small text.

## System directives

When specifying, prompting or art-directing a printed piece or its look on screen: a poster, a plate, a book page, a zine, a label or a print-look illustration in Expressive linocut, you MUST:

1. Cut each colour on its own linoleum block with V and U gouges; the cut makes a smooth curve.
2. Keep each shape bold: a cut line of 1–3 mm, and a white gap of at least 1 mm.
3. Print the colours in opaque inks, from light to dark, with 0.5–1.5 mm of offset.
4. Build speed and rhythm with curved shapes that repeat across the sheet.
5. Print by hand with a spoon, or on a hand press, on thin Japan paper.
6. Number the edition under 100, and sign it in pencil.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Wood grain in the print.
- **NEVER:** Halftone dots or gradients.
- **NEVER:** Fine hatching that needs a burin.
- **NEVER:** Exact register of all layers.
- **NEVER:** A digital vector edge.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Tone method | `■■□□□` 2/5 | solid ink, no tone | fine screen or continuous tone |
| Ink layering | `■■■■□` 4/5 | one ink | many overprinted inks |
| Registration play | `■■■□□` 3/5 | exact register | visible misregister as a feature |
| Surface relief | `■■■□□` 3/5 | flat, ink on the surface | deep bite or emboss in the sheet |
| Hand trace | `■■■■□` 4/5 | uniform machine output | each sheet differs by hand |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Process

- **Family:** relief
- **Matrix:** Battleship linoleum on a wood block, one block for each colour
- **Press:** Hand-rubbed with spoon, or hand press
- **Image making:** V and U gouges cut linoleum; separate blocks for colours
- **Edition:** Under 100, numbered

## Inks

- **Strategy:** A black key ink and three to five opaque colour inks, each from its own block, printed from light to dark.
- **Ink count min:** 1
- **Ink count max:** 6
- **Overprint:** opaque

**Colours**

| Name | Hex | Role |
|---|---|---|
| Black key | `#1D1B1A` | key block |
| Vermilion | `#C8402C` | colour block |
| Cobalt blue | `#2E5FA3` | colour block |
| Yellow ochre | `#D5A63A` | colour block |

## Tone and screen

- **Method:** solid
- **Ruling lpi:** 0
- **Rule:** Make each tone as a flat block of ink; mix a new tone by overlap of two opaque layers, with no screen.

## Registration

- **Tolerance mm:** 1
- **Rule:** Blocks are registered by hand with a frame or pins; a shift of 0.5–1.5 mm and some ink squash at the borders are part of the look.

## Stock

- **Stock:** Thin Japan or mulberry paper, white to cream.
- **Weight gsm min:** 40
- **Weight gsm max:** 90
- **Ground:** #EDE6D3
- **Finish:** Thin and smooth, with a slight fibre; it takes hand rubbing.

## Surface

- **Impression:** A shallow bite from hand rubbing; the flat shapes show a slight relief on the back.
- **Sheen:** Matt, with a slight shine in the thick ink.
- **Texture:** Smooth gouge curves, even flat colour with small voids, and no wood grain.

## Process marks

- **Marks:** smooth curved gouge strokes · no wood grain · uneven roller edges · ink squash at block border · offset layers

## Prompt primer

- **Positive:** colour linocut · Grosvenor School print · bold gouge marks · flat overlapping colours · rhythmic curved shapes · Art Deco motion print · Japan paper · hand-rubbed ink
- **Negative:** wood grain · halftone dots · photograph · gradient · digital vector

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Linocut (process, invented here)

A relief print from a sheet of linoleum. The cut has smooth curves and no grain, and it prints flat colour. Origin: print, Dresden, c. 1905.

- Cut linoleum with V and U gouges; the sheet has no grain, so the cut curves freely.
- Cut one block for each colour, and print from light to dark.
- Print with opaque ink on thin paper, by hand with a spoon or on a hand press.
- Keep each cut line at 1 mm to 3 mm, and each white gap at 1 mm or more.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **Grosvenor School of Modern Art** (school, London, 1925–1940), taught the style. A private art school in Pimlico. Claude Flight taught colour linocut there, and Cyril Power and Sybil Andrews learned and worked with him.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Key ink (`key_ink`) | #1D1B1A | #1D1B1A, #26211D, #14213D | inks |
| Paper colour (`paper_colour`) | #EDE6D3 | #EDE6D3, #F5EFE0, #E0D8C0 | substrate |
| Ink count (`ink_count`) | 4 | 1–6 | inks, registration |
| Screen ruling (`screen_ruling`) | 0 | 0–0 lines per inch | screening |
| Misregistration (`misregistration`) | 1 | 0.5–1.5 mm | registration |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **rougher**: move toward [`expressionist-woodcut-print`](../expressionist-woodcut-print/SKILL.md) (Die Brucke woodcut). Change to a plank with grain and cut jagged gouge strokes; print with an uneven ink film.
- If the user asks for **finer**: move toward [`wood-engraving-print`](../wood-engraving-print/SKILL.md) (End-grain wood engraving). Change to boxwood and a burin, cut white lines and print in one black ink.

- **Came from (go here for a more orthodox version):** [`expressionist-woodcut-print`](../expressionist-woodcut-print/SKILL.md), [`woodcut-relief-print`](../woodcut-relief-print/SKILL.md)
- **Nearest by vector profile:** [`chiaroscuro-woodcut-print`](../chiaroscuro-woodcut-print/SKILL.md), [`nishiki-e-polychrome-woodblock`](../nishiki-e-polychrome-woodblock/SKILL.md), [`pop-screen-print`](../pop-screen-print/SKILL.md)

## Emotional target

Fast, modern energy: the viewer sees bold curved shapes, in speed and in a crowd.

**Keywords:** rhythmic, modern, bold, energetic, graphic · **Brand archetypes:** creator, explorer, hero

## Canonical evidence (open licence)

Each item below has an open licence or is in the public domain, so you may show it as a reference.

- [Carnival (linocut shown in Flight's 1934 handbook)](https://commons.wikimedia.org/wiki/File:Carnival_1930_Frank-Weitzel_Flight-Lino-Cutting.jpg) (Frank Weitzel, 1930): image, Public domain. Wikimedia Commons
- [Hotel Cecil](https://commons.wikimedia.org/wiki/File:Hotel-Cecil_1930_Frank-Weitzel.jpg) (Frank Weitzel, 1930): image, Public domain. Wikimedia Commons

## Sources

- [Wikipedia: Linocut](https://en.wikipedia.org/wiki/Linocut)
- [Wikipedia: Grosvenor School of Modern Art](https://en.wikipedia.org/wiki/Grosvenor_School_of_Modern_Art)
- [Wikipedia: Claude Flight](https://en.wikipedia.org/wiki/Claude_Flight)

---

Generated from [`data/print/styles/linocut-print.json`](../../data/print/styles/linocut-print.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
