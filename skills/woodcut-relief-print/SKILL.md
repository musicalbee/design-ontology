---
name: woodcut-relief-print
description: "Apply the Woodcut relief print style (c.1400–1600s) when specifying, prompting or art-directing a printed piece or its look on screen: a poster, a plate, a book page, a zine, a label or a print-look illustration. Load when the user asks for: woodcut, old woodcut, medieval print, dürer style, nuremberg chronicle, block print illustration."
domain: print
era: hand-press
triggers:
  - "woodcut"
  - "old woodcut"
  - "medieval print"
  - "dürer style"
  - "nuremberg chronicle"
  - "block print illustration"
  - "black-line woodcut"
  - "early printed book illustration"
vector_profile:
  tone_method: 2
  ink_layering: 1
  registration_play: 1
  surface_relief: 2
  hand_trace: 4
---

# Woodcut relief print

> A black line that stands on a block of wood can carry form, light and tone if the cutter swells, tapers and crosses it.

A picture cut into the side grain of a plank: the cutter leaves the lines standing and the press prints them black. In Nuremberg, Wolgemut and Dürer made the cut carry tone with parallel and crossed lines, so one block printed with the type of a book.

**Period:** c.1400–1600s · **Era:** Hand press · **Domain:** Print · **Also called:** Woodcut, Holzschnitt, Black-line woodcut, Block book cut

## When to load this skill

Load it when the user asks for: "woodcut", "old woodcut", "medieval print", "dürer style", "nuremberg chronicle", "block print illustration", "black-line woodcut", "early printed book illustration".

Good for: book and chapter illustration, heritage labels and beer packs, editorial images on history, posters for early music.

Do not use it when:
- The picture needs soft tone, a portrait likeness or a photographic look.
- The colour must be the main message.

## System directives

When specifying, prompting or art-directing a printed piece or its look on screen: a poster, a plate, a book page, a zine, a label or a print-look illustration in Woodcut relief print, you MUST:

1. Draw every tone as black lines on white paper; the woodcut has no grey ink and no screen.
2. Make the lines 0.3–1.0 mm wide and keep at least 0.5 mm of white between them, so the wood does not break.
3. Follow the form with the lines: curve the hatching round a body and keep it straight on a wall or the sky.
4. Swell a line to darken a tone and taper it to a point where the light comes.
5. Cross the lines only in the deepest shadow, and keep the crossing at about 60°.
6. Leave large areas of bare paper for light, sky and flesh.
7. Give each figure a closed, firm contour line of the same weight as the heaviest hatching.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Grey wash or a smooth gradient.
- **NEVER:** Lines finer than 0.2 mm, which the wood cannot hold.
- **NEVER:** A halftone dot or a photographic tone.
- **NEVER:** Even hatching that does not follow the form.
- **NEVER:** A contour that is thin and broken like a pencil sketch.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Tone method | `■■□□□` 2/5 | solid ink, no tone | fine screen or continuous tone |
| Ink layering | `■□□□□` 1/5 | one ink | many overprinted inks |
| Registration play | `■□□□□` 1/5 | exact register | visible misregister as a feature |
| Surface relief | `■■□□□` 2/5 | flat, ink on the surface | deep bite or emboss in the sheet |
| Hand trace | `■■■■□` 4/5 | uniform machine output | each sheet differs by hand |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Process

- **Family:** relief
- **Matrix:** A plank of pear, box or cherry wood, cut on the side grain with a knife and gouges.
- **Press:** A wooden screw press, the same press that prints the type of the book.
- **Image making:** A designer draws on the block; a block cutter (Formschneider) cuts away the wood on both sides of each line.
- **Edition:** Hundreds to some thousands of impressions; the block wears at the thin lines and cracks along the grain.

## Inks

- **Strategy:** One black oil ink; colour, if any, is added later by hand with a brush or a stencil.
- **Ink count min:** 1
- **Ink count max:** 2
- **Overprint:** opaque

**Colours**

| Name | Hex | Role |
|---|---|---|
| Lamp black | `#1A1714` | all lines and contours |

## Tone and screen

- **Method:** line
- **Ruling lpi:** 40
- **Rule:** Make the tone with parallel lines at about 40 a inch, swelled where the shadow is deeper.

**Angles**

|  |
||
|  |

## Registration

- **Tolerance mm:** 0
- **Rule:** One block prints all the image, so there is no register; a second block for colour can shift 1–2 mm.

## Stock

- **Stock:** Laid rag paper made by hand, with chain lines and a watermark.
- **Weight gsm min:** 70
- **Weight gsm max:** 120
- **Ground:** #EFE6D2
- **Finish:** Laid, with a soft tooth and a light sizing of gelatine.

## Surface

- **Impression:** A light bite: the lines sink a little into the soft paper and show as a relief on the back.
- **Sheen:** Matt black, with a small sheen where the ink is thick.
- **Texture:** Clean black lines with a slight squash of ink at each edge, and the laid lines of the paper.

## Process marks

- **Marks:** ink squash at line edges · wood-grain streaks in solids · a crack along the grain · broken thin lines · laid and chain lines · hand colour that misses the line

## Prompt primer

- **Positive:** 15th-century woodcut · black-line woodcut · Nuremberg Chronicle illustration · Dürer woodcut · parallel hatching that follows the form · bold black contour · laid rag paper · monochrome relief print
- **Negative:** grey wash · halftone dots · smooth gradient · photographic tone · colour fill · digital vector line

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Woodcut (process)

A print from a block of wood with the white parts cut away; the result is flat colour, hard edges and visible grain. Origin: print, Dunhuang, 868.

- Cut the block along the grain with a knife and a gouge; leave a line of 1mm to 3mm for the black.
- Use one block for each colour and register them within 1 mm.
- Print with a flat, opaque ink and leave the grain and the knife marks visible.
- Keep the shapes flat, with no more than 3 to 6 tones in a print.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **Koberger printing house** (publisher, Nuremberg, 1470–1504), published the style. Anton Koberger opened the first printing house of Nuremberg and made it the largest publisher in Germany. It printed the Nuremberg Chronicle of 1493, with woodcuts from the Wolgemut workshop.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Key ink (`key_ink`) | #1A1714 | #1A1714, #2A1E16 | inks |
| Paper colour (`paper_colour`) | #EFE6D2 | #EFE6D2, #F4EEE0 | substrate |
| Ink count (`ink_count`) | 1 | 1–2 | inks, registration |
| Screen ruling (`screen_ruling`) | 40 | 20–60 lines per inch | screening |
| Misregistration (`misregistration`) | 0 | 0–1 mm | registration |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **finer and more silver**: move toward [`engraving-print`](../engraving-print/SKILL.md) (Copper engraving). Change the cut wood for a cut copper plate: thinner, swelling lines at 80–120 a inch and a plate mark.
- If the user asks for **more expressive**: move toward [`expressionism-painting`](../expressionism-painting/SKILL.md) (Expressionism). Cut wider gouge marks, keep the wood grain, and let large black areas take the tone.
- If the user asks for **in Japanese colour**: move toward [`ukiyo-e`](../ukiyo-e/SKILL.md) (Ukiyo-e). Use one key block for the line and a separate block for each flat colour, printed with water-based ink by hand.

- **Led to (go here for a newer version):** [`battala-woodcut`](../battala-woodcut/SKILL.md), [`chiaroscuro-woodcut-print`](../chiaroscuro-woodcut-print/SKILL.md), [`chinese-modern-woodcut`](../chinese-modern-woodcut/SKILL.md), [`cordel-xilogravura`](../cordel-xilogravura/SKILL.md), [`dong-ho-folk-woodblock`](../dong-ho-folk-woodblock/SKILL.md), [`expressionist-woodcut-print`](../expressionist-woodcut-print/SKILL.md), [`linocut-print`](../linocut-print/SKILL.md), [`nianhua-new-year-print`](../nianhua-new-year-print/SKILL.md), [`nishiki-e-polychrome-woodblock`](../nishiki-e-polychrome-woodblock/SKILL.md), [`posada-broadside`](../posada-broadside/SKILL.md), [`private-press-book`](../private-press-book/SKILL.md), [`russian-lubok-print`](../russian-lubok-print/SKILL.md), [`sosaku-hanga-print`](../sosaku-hanga-print/SKILL.md), [`taller-grafica-popular-linocut`](../taller-grafica-popular-linocut/SKILL.md), [`ten-bamboo-studio-polychrome`](../ten-bamboo-studio-polychrome/SKILL.md), [`wood-engraving-print`](../wood-engraving-print/SKILL.md), [`wood-type-poster`](../wood-type-poster/SKILL.md)
- **Mixes well with:** [`engraving-print`](../engraving-print/SKILL.md)
- **Kin in another domain:** [`blackletter`](../blackletter/SKILL.md), [`renaissance-painting`](../renaissance-painting/SKILL.md)
- **Nearest by vector profile:** [`chinese-modern-woodcut`](../chinese-modern-woodcut/SKILL.md), [`narbut-ukrainian-graphics`](../narbut-ukrainian-graphics/SKILL.md), [`posada-broadside`](../posada-broadside/SKILL.md)

## Emotional target

Weight and plain force: the viewer reads a strong, old picture that the hand cut, line by line.

**Keywords:** archaic, devout, bold, graphic, austere · **Brand archetypes:** sage, ruler

## Canonical evidence (open licence)

Each item below has an open licence or is in the public domain, so you may show it as a reference.

- [Four Horsemen of the Apocalypse, from "The Apocalypse"](https://www.metmuseum.org/art/collection/search/397057) (Albrecht Dürer, 1498): image, CC0. The Metropolitan Museum of Art, Open Access
- [Saint Michael Fighting the Dragon, from "The Apocalypse"](https://www.metmuseum.org/art/collection/search/360117) (Albrecht Dürer, 1498): image, CC0. The Metropolitan Museum of Art, Open Access
- [Dance of Death, leaf from "The Nuremberg Chronicle"](https://www.metmuseum.org/art/collection/search/390220) (Michael Wolgemut, 1493): image, CC0. The Metropolitan Museum of Art, Open Access

## Sources

- [Woodcut (Wikipedia)](https://en.wikipedia.org/wiki/Woodcut)
- [Nuremberg Chronicle (Wikipedia)](https://en.wikipedia.org/wiki/Nuremberg_Chronicle)
- Arthur M. Hind, An Introduction to a History of Woodcut (1935)

---

Generated from [`data/print/styles/woodcut-relief-print.json`](../../data/print/styles/woodcut-relief-print.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
