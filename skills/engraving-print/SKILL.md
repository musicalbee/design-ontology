---
name: engraving-print
description: "Apply the Copper engraving style (1470s–1800) when specifying, prompting or art-directing a printed piece or its look on screen: a poster, a plate, a book page, a zine, a label or a print-look illustration. Load when the user asks for: engraving, copper engraving, line engraving, banknote engraving, old master print, burin."
domain: print
era: hand-press
triggers:
  - "engraving"
  - "copper engraving"
  - "line engraving"
  - "banknote engraving"
  - "old master print"
  - "burin"
  - "cross-hatching illustration"
  - "engraved portrait"
vector_profile:
  tone_method: 3
  ink_layering: 1
  registration_play: 1
  surface_relief: 4
  hand_trace: 3
---

# Copper engraving

> A burin line that swells and tapers in polished copper gives the finest and most even tone that a hand can make.

A picture cut into a copper plate with a burin, inked into the grooves and printed under great pressure. Schongauer and Dürer made it an art; Goltzius made the swelling line a show of skill; for three centuries it reproduced paintings and maps.

**Period:** 1470s–1800 · **Era:** Hand press · **Domain:** Print · **Also called:** Line engraving, Burin engraving, Kupferstich, Intaglio engraving

## When to load this skill

Load it when the user asks for: "engraving", "copper engraving", "line engraving", "banknote engraving", "old master print", "burin", "cross-hatching illustration", "engraved portrait".

Good for: portraits for certificates and banknotes, maps and scientific plates, luxury labels, book frontispieces.

Do not use it when:
- The image needs colour or a soft, loose line.
- The brand wants to look casual or playful.

## System directives

When specifying, prompting or art-directing a printed piece or its look on screen: a poster, a plate, a book page, a zine, a label or a print-look illustration in Copper engraving, you MUST:

1. Build every tone from lines that swell in the middle and taper at both ends.
2. Lay the lines in systems: parallel lines for a half tone, a second set crossed at 30–45° for the shadow, and dots in the gaps (dot-and-lozenge) for the deepest dark.
3. Turn each line round the form, like the lines of a contour map, so the swell shows the light.
4. Keep the line pitch at 80–150 a inch; the eye at reading distance sees a grey, not lines.
5. Leave a clear plate mark 10–20 mm outside the image, with the title and the names of the designer and the engraver in the margin.
6. Print in one black or dark brown ink on dampened paper.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Lines of one even width.
- **NEVER:** Hatching that does not follow the form.
- **NEVER:** A soft, grained tone with no lines.
- **NEVER:** A coloured fill or a flat area of solid ink.
- **NEVER:** Trimmed margins that cut off the plate mark.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Tone method | `■■■□□` 3/5 | solid ink, no tone | fine screen or continuous tone |
| Ink layering | `■□□□□` 1/5 | one ink | many overprinted inks |
| Registration play | `■□□□□` 1/5 | exact register | visible misregister as a feature |
| Surface relief | `■■■■□` 4/5 | flat, ink on the surface | deep bite or emboss in the sheet |
| Hand trace | `■■■□□` 3/5 | uniform machine output | each sheet differs by hand |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Process

- **Family:** intaglio
- **Matrix:** A polished copper plate, 1–2 mm thick, cut with a lozenge-section burin pushed by the palm.
- **Press:** A roller press with felt blankets that pushes the dampened paper into the grooves.
- **Image making:** The engraver transfers the drawing, cuts the lines, removes the burr with a scraper, and proofs the plate in states.
- **Edition:** Some hundreds of good impressions before the lines wear; later plates were steel-faced for thousands.

## Inks

- **Strategy:** One stiff black or brown-black ink, rubbed into the lines and wiped from the surface.
- **Ink count min:** 1
- **Ink count max:** 1
- **Overprint:** opaque

**Colours**

| Name | Hex | Role |
|---|---|---|
| Frankfurt black | `#141414` | all lines |

## Tone and screen

- **Method:** line
- **Ruling lpi:** 90
- **Rule:** Make the tone with swelling burin lines at 80–150 a inch, crossed in the shadows.

**Angles**

|  |
||
|  |

## Registration

- **Tolerance mm:** 0
- **Rule:** One plate prints all the image; there is no register.

## Stock

- **Stock:** Laid rag paper made by hand, dampened before the print.
- **Weight gsm min:** 80
- **Weight gsm max:** 160
- **Ground:** #F1EAD9
- **Finish:** Laid or later wove, soft and with little sizing so that it takes the ink from the lines.

## Surface

- **Impression:** A deep plate mark round the image and a sharp relief of each line, which a finger can feel.
- **Sheen:** The ink stands up from the paper with a slight gloss.
- **Texture:** A silver-grey of fine lines; under a lens each line has a pointed start and end.

## Process marks

- **Marks:** plate mark · plate tone in the margins · swelling and tapering lines · dot-and-lozenge in shadows · a worn, grey late impression · lettering in the lower margin

## Prompt primer

- **Positive:** copper engraving · burin line · swelling engraved lines · cross-hatching · Goltzius engraving · plate mark · old master print · black and white intaglio
- **Negative:** grey wash · halftone · colour · smooth gradient · vector line of one width

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Line engraving (process)

Lines cut into a metal plate with a burin; thin hairlines and swelling strokes give tone, and the print keeps a sharp, even edge. Origin: painting, Upper Rhine, c. 1430.

- Cut a hairline of 0.1 to 0.2mm for light areas; swell the line to 0.5mm or more for dark areas.
- Build shade with parallel lines or cross hatching, and keep the lines at 30° to 45° to each other.
- Print on smooth paper so the hairlines stay clean.

## Media

The salons, schools, magazines, publishers, galleries and platforms that carried this style.

- **Aux Quatre Vents** (publisher, Antwerp, 1548–1601), published the style. Hieronymus Cock and Volcxken Diericx founded this Antwerp print house. It issued more than 1,100 prints by 1570 and split the work into design, engraving and sale.
- **Boydell print publishing** (publisher, London, 1746–now), published the style. John Boydell started as an engraver in London and became a large print publisher. His firm sold English engravings and mezzotints across Europe.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Key ink (`key_ink`) | #141414 | #141414, #2E2018 | inks |
| Paper colour (`paper_colour`) | #F1EAD9 | #F1EAD9, #F6F2E8 | substrate |
| Ink count (`ink_count`) | 1 | 1–1 | inks, registration |
| Screen ruling (`screen_ruling`) | 90 | 60–150 lines per inch | screening |
| Misregistration (`misregistration`) | 0 | 0–0 mm | registration |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **looser and freer**: move toward [`etching-print`](../etching-print/SKILL.md) (Etching). Draw the lines in a wax ground with a needle and bite them in acid; the line is even and free, not swelled.
- If the user asks for **softer tone**: move toward [`mezzotint-print`](../mezzotint-print/SKILL.md) (Mezzotint). Rock the plate to a grain and scrape the lights, so the tone has no lines.

- **Led to (go here for a newer version):** [`etching-print`](../etching-print/SKILL.md), [`mezzotint-print`](../mezzotint-print/SKILL.md)
- **Mixes well with:** [`woodcut-relief-print`](../woodcut-relief-print/SKILL.md)
- **Kin in another domain:** [`didone-serif`](../didone-serif/SKILL.md), [`victorian-trademark`](../victorian-trademark/SKILL.md)
- **Nearest by vector profile:** [`etching-print`](../etching-print/SKILL.md), [`private-press-book`](../private-press-book/SKILL.md), [`mezzotint-print`](../mezzotint-print/SKILL.md)

## Emotional target

Precision and authority: the viewer trusts a picture of skilled, patient work.

**Keywords:** precise, learned, silvery, formal, official · **Brand archetypes:** ruler, sage

## Canonical evidence (open licence)

Each item below has an open licence or is in the public domain, so you may show it as a reference.

- [Melencolia I](https://www.metmuseum.org/art/collection/search/336228) (Albrecht Dürer, 1514): image, CC0. The Metropolitan Museum of Art, Open Access
- [Ecce Homo, from "The Passion of Christ"](https://www.metmuseum.org/art/collection/search/398213) (Hendrick Goltzius, 1597): image, CC0. The Metropolitan Museum of Art, Open Access
- [The Standard Bearer, Turned to Left](https://www.artic.edu/artworks/80745) (Hendrick Goltzius, 1587): image, CC0. The Art Institute of Chicago, Public Domain (CC0)

## Sources

- [Engraving (Wikipedia)](https://en.wikipedia.org/wiki/Engraving)
- [Old master print (Wikipedia)](https://en.wikipedia.org/wiki/Old_master_print)
- Antony Griffiths, Prints and Printmaking (British Museum Press, 1996)

---

Generated from [`data/print/styles/engraving-print.json`](../../data/print/styles/engraving-print.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
