---
name: expressionist-woodcut-print
description: "Apply the Die Brucke woodcut style (1905–1930) when specifying, prompting or art-directing a printed piece or its look on screen: a poster, a plate, a book page, a zine, a label or a print-look illustration. Load when the user asks for: expressionist woodcut, die brucke print, kirchner woodcut, german expressionist print, jagged woodcut, plank grain print."
domain: print
era: industrial-press
triggers:
  - "expressionist woodcut"
  - "die brucke print"
  - "kirchner woodcut"
  - "german expressionist print"
  - "jagged woodcut"
  - "plank grain print"
  - "angular woodcut figure"
  - "brucke programme"
vector_profile:
  tone_method: 2
  ink_layering: 2
  registration_play: 4
  surface_relief: 4
  hand_trace: 5
---

# Die Brucke woodcut

> A plank cut with a few hard strokes and printed by hand keeps the cut and the grain. The print shows a raw inner state, not a clean picture.

Planks are cut with a few bold gouge strokes, and the grain and the cut marks stay visible. The artists often hand-print on cheap paper with a spoon or a press. The ink is uneven, with flat black masses and sharp angular white.

**Period:** 1905–1930 · **Era:** Industrial press · **Domain:** Print · **Also called:** Expressionistischer Holzschnitt (German), Brucke-Holzschnitt

## When to load this skill

Load it when the user asks for: "expressionist woodcut", "die brucke print", "kirchner woodcut", "german expressionist print", "jagged woodcut", "plank grain print", "angular woodcut figure", "brucke programme".

Good for: exhibition and event posters, album and zine covers, editorial illustration with a raw edge, theatre and festival identity.

Do not use it when:
- The design needs a calm or refined tone.
- The text must stay small and exact.

## System directives

When specifying, prompting or art-directing a printed piece or its look on screen: a poster, a plate, a book page, a zine, a label or a print-look illustration in Die Brucke woodcut, you MUST:

1. Cut straight into a soft plank with a knife and a gouge; do not draw the picture first in fine detail.
2. Keep the plank grain and the gouge marks in the print.
3. Print flat black masses against sharp, angular white shapes.
4. Add colour from a second or third block in opaque inks such as red and yellow, with 1–3 mm of misregister.
5. Print by hand with a spoon or a small press, so that the ink covers the sheet unevenly.
6. Use cheap thin paper, and let the rubbing marks show on the back.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Fine, smooth line work.
- **NEVER:** A soft gradient or a halftone.
- **NEVER:** Exact register of the colour blocks.
- **NEVER:** A clean white margin with no hand marks.
- **NEVER:** A digital vector edge.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Tone method | `■■□□□` 2/5 | solid ink, no tone | fine screen or continuous tone |
| Ink layering | `■■□□□` 2/5 | one ink | many overprinted inks |
| Registration play | `■■■■□` 4/5 | exact register | visible misregister as a feature |
| Surface relief | `■■■■□` 4/5 | flat, ink on the surface | deep bite or emboss in the sheet |
| Hand trace | `■■■■■` 5/5 | uniform machine output | each sheet differs by hand |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Process

- **Family:** relief
- **Matrix:** Soft plank (pine, plywood), side grain, sometimes cut-up for colour
- **Press:** Hand-rubbed with spoon or baren, or a small press
- **Image making:** Knife and gouge cut straight into the plank; planks sawn apart for colour inking
- **Edition:** Small editions, 20-100 or monoprinted colour variants

## Inks

- **Strategy:** Black relief ink for the key block, and one to three opaque colour inks that cover the ink under them.
- **Ink count min:** 1
- **Ink count max:** 4
- **Overprint:** opaque

**Colours**

| Name | Hex | Role |
|---|---|---|
| Black relief ink | `#1B1917` | key block |
| Vermilion red | `#C0392B` | colour block |
| Chrome yellow | `#E3B42C` | colour block |

## Tone and screen

- **Method:** solid
- **Ruling lpi:** 0
- **Rule:** Make each tone as a flat ink mass from one cut; do not screen. Where the cut leaves a grain, let the wood grain print.

## Registration

- **Tolerance mm:** 2
- **Rule:** Blocks are registered by eye or by pin; the shift of 1–3 mm is a feature of the look.

## Stock

- **Stock:** Thin Japan, wove or poster paper, grey-cream.
- **Weight gsm min:** 50
- **Weight gsm max:** 100
- **Ground:** #D9CFB4
- **Finish:** Thin and slightly rough; it takes the rubbing without a tear.

## Surface

- **Impression:** A deep bite from hand rubbing; the lines show as a relief on the back.
- **Sheen:** Matt black, with a slight shine where the ink is thick.
- **Texture:** Visible plank grain, jagged cut edges, and an uneven ink film with white speckle.

## Process marks

- **Marks:** jagged gouge strokes · visible plank grain · uneven ink coverage · angular faces · rubbed pressure marks on back

## Prompt primer

- **Positive:** German expressionist woodcut · tense city street figures and dancers · jagged gouge marks · flat black mass · visible plank grain · angular figures · hand-rubbed uneven ink · cheap grey paper
- **Negative:** smooth gradient · halftone dots · photograph · fine engraving · digital vector

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

- **Die Brücke** (crew, Dresden, 1905–1913), made the style. A group of young German painters. They printed woodcuts and painted in raw, strong colour, and they started Expressionism.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Key ink (`key_ink`) | #1B1917 | #1B1917, #2A1D14, #14213D | inks |
| Paper colour (`paper_colour`) | #D9CDAF | #D9CDAF, #E2D8BD, #CBBF9F | substrate |
| Ink count (`ink_count`) | 2 | 1–4 | inks, registration |
| Screen ruling (`screen_ruling`) | 0 | 0–0 lines per inch | screening |
| Misregistration (`misregistration`) | 2 | 1–3 mm | registration |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more refined**: move toward [`woodcut-relief-print`](../woodcut-relief-print/SKILL.md) (Woodcut relief print). Cut finer lines that follow the form, print in black only and use laid paper.
- If the user asks for **more colour**: move toward [`linocut-print`](../linocut-print/SKILL.md) (Expressive linocut). Cut each colour on lino with smooth curves and overlap the opaque layers.

- **Came from (go here for a more orthodox version):** [`woodcut-relief-print`](../woodcut-relief-print/SKILL.md)
- **Led to (go here for a newer version):** [`chinese-modern-woodcut`](../chinese-modern-woodcut/SKILL.md), [`linocut-print`](../linocut-print/SKILL.md)
- **Kin in another domain:** [`expressionism-painting`](../expressionism-painting/SKILL.md)
- **Nearest by vector profile:** [`sosaku-hanga-print`](../sosaku-hanga-print/SKILL.md), [`dong-ho-folk-woodblock`](../dong-ho-folk-woodblock/SKILL.md), [`russian-lubok-print`](../russian-lubok-print/SKILL.md)

## Emotional target

Raw, urgent tension: the viewer sees angular figures that were cut fast and printed by hand.

**Keywords:** raw, angular, urgent, tense, primitive · **Brand archetypes:** outlaw, creator, explorer

## Canonical evidence (open licence)

Each item below has an open licence or is in the public domain, so you may show it as a reference.

- [Programm der Brucke](https://commons.wikimedia.org/wiki/File:Ernst_Ludwig_Kirchner_Programm_der_Br%C3%BCcke.jpg) (Ernst Ludwig Kirchner, 1906): image, Public domain. Wikimedia Commons
- [Poster for the Brucke exhibition, Arnold Gallery Dresden](https://commons.wikimedia.org/wiki/File:Ernst_Ludwig_Kirchner_-_Poster_for_the_exhibition_for_the_artists%27_group_%22Die_Br%C3%BCcke%22_at_the_Arnold_Gallery_Dresden_-_Google_Art_Project.jpg) (Ernst Ludwig Kirchner, 1910): image, Public domain. Google Art Project, via Wikimedia Commons

## Sources

- [Wikipedia: Die Brucke](https://en.wikipedia.org/wiki/Die_Br%C3%BCcke)
- [Wikipedia: Erich Heckel](https://en.wikipedia.org/wiki/Erich_Heckel)

---

Generated from [`data/print/styles/expressionist-woodcut-print.json`](../../data/print/styles/expressionist-woodcut-print.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
