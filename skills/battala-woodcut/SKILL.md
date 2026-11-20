---
name: battala-woodcut
description: "Apply the Battala woodcut style (c.1816–c.1900) when specifying, prompting or art-directing a printed piece or its look on screen: a poster, a plate, a book page, a zine, a label or a print-look illustration. Load when the user asks for: battala woodcut, bengali woodcut, calcutta bazaar print, bengal folk print, indian woodcut god, 19th century bengali print."
domain: print
era: industrial-press
triggers:
  - "battala woodcut"
  - "bengali woodcut"
  - "calcutta bazaar print"
  - "bengal folk print"
  - "indian woodcut god"
  - "19th century bengali print"
  - "kolkata folk art"
  - "hand-coloured woodcut"
vector_profile:
  tone_method: 1
  ink_layering: 1
  registration_play: 3
  surface_relief: 2
  hand_trace: 4
---

# Battala woodcut

> A cheap wood block with a bold line can put a sacred or comic story in the hands of a bazaar crowd.

A cheap woodcut sheet from the Battala bazaar quarter of Calcutta. Local craftsmen cut a bold black outline, often to copy a painted original, and printed it with type on thin country paper.

**Period:** c.1816–c.1900 · **Era:** Industrial press · **Domain:** Print · **Also called:** Battala print, Bat-tala woodcut, Calcutta bazaar woodcut

## When to load this skill

Load it when the user asks for: "battala woodcut", "bengali woodcut", "calcutta bazaar print", "bengal folk print", "indian woodcut god", "19th century bengali print", "kolkata folk art", "hand-coloured woodcut".

Good for: book and album covers with a Bengali theme, festival and food packaging, editorial images for South Asian history, folk-style posters.

Do not use it when:
- The brief asks for a polished, glossy or photographic image.
- The subject needs tonal depth.

## System directives

When specifying, prompting or art-directing a printed piece or its look on screen: a poster, a plate, a book page, a zine, a label or a print-look illustration in Battala woodcut, you MUST:

1. Cut a strong, even outline in wood and keep the line 0.5–1.5 mm wide.
2. Fill large shapes with a flat colour, applied by hand or by a second block.
3. Show gods, village scenes and city satire, with the main figure at the centre.
4. Print the verse or the title in Bengali type on the same sheet.
5. Use thin country paper; do not hide its fibre.
6. Keep the hatch short and sparse, in the style of a European wood engraving that the cutter had seen.
7. Accept a thick line, a blot and a shift of 1–2 mm between the black and the colour.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Smooth oil-like blend of the oleograph kind.
- **NEVER:** Halftone dots.
- **NEVER:** Fine engraved line with deep shadows.
- **NEVER:** Gloss and varnish.
- **NEVER:** A refined, balanced European layout.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Tone method | `■□□□□` 1/5 | solid ink, no tone | fine screen or continuous tone |
| Ink layering | `■□□□□` 1/5 | one ink | many overprinted inks |
| Registration play | `■■■□□` 3/5 | exact register | visible misregister as a feature |
| Surface relief | `■■□□□` 2/5 | flat, ink on the surface | deep bite or emboss in the sheet |
| Hand trace | `■■■■□` 4/5 | uniform machine output | each sheet differs by hand |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Process

- **Family:** relief
- **Matrix:** A block of hard wood, cut along or across the grain.
- **Press:** A hand letterpress or a hand-rubbed print.
- **Image making:** A Bengali craftsman cuts the block, often from a painted or a European original.
- **Edition:** Thousands of sheets from one block.

## Inks

- **Strategy:** One black ink for the outline; red and other colours are added by hand or by a second block.
- **Ink count min:** 1
- **Ink count max:** 3
- **Overprint:** opaque

**Colours**

| Name | Hex | Role |
|---|---|---|
| Black | `#1F1A16` | outline and type |
| Hand-applied red | `#B8322A` | robes and borders |
| Ochre yellow | `#D9A83A` | skin and ornament |

## Tone and screen

- **Method:** line
- **Ruling lpi:** 0
- **Rule:** Draw all form as an outline with sparse short hatch; make no tone with a screen.

## Registration

- **Tolerance mm:** 1.5
- **Rule:** The colour is often applied by hand, so it can sit 1–2 mm off the outline.

## Stock

- **Stock:** A thin country paper, cream, with a coarse fibre.
- **Weight gsm min:** 40
- **Weight gsm max:** 80
- **Ground:** #E6D9B8
- **Finish:** Uncoated and rough, matt.

## Surface

- **Impression:** A light bite on the soft paper, with the type pressed in a little.
- **Sheen:** Matt black ink.
- **Texture:** Thick outline with a visible wood grain and thin, sparse hatch.

## Process marks

- **Marks:** bold black outline · hand colour wash · type and picture on one sheet · wood grain in the black · coarse paper fibre · blots and uneven ink

## Prompt primer

- **Positive:** Battala woodcut · Bengali bazaar print · bold black outline · flat hand-applied red and ochre · thin cream country paper · Calcutta 19th century · Bengali type verse · sacred and satirical scene
- **Negative:** halftone · smooth blend · glossy paper · fine engraving · photograph

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

- **Battala printers of Calcutta** (collective, Calcutta (Kolkata), India, ?–now), made the style. The printers and cutters of the Battala quarter. From about 1816 they sold cheap books and woodcut sheets to a large bazaar public.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Key ink (`key_ink`) | #1F1A16 | #1F1A16, #2A1E16 | inks |
| Paper colour (`paper_colour`) | #E6D9B8 | #E6D9B8, #EFE4C8, #DCCBA0 | substrate |
| Ink count (`ink_count`) | 1 | 1–3 | inks, registration |
| Screen ruling (`screen_ruling`) | 0 | 0–0 lines per inch | screening |
| Misregistration (`misregistration`) | 1.5 | 0.5–2.5 mm | registration |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **richer and glossier**: move toward [`ravi-varma-oleograph`](../ravi-varma-oleograph/SKILL.md) (Ravi Varma oleograph). Replace the outline with a smooth painted blend in 6–10 colour stones and add a gloss varnish.
- If the user asks for **more engraved**: move toward [`engraving-print`](../engraving-print/SKILL.md) (Copper engraving). Replace the thick outline with fine parallel hatch and a tone built from line.

- **Came from (go here for a more orthodox version):** [`woodcut-relief-print`](../woodcut-relief-print/SKILL.md)
- **Nearest by vector profile:** [`dong-ho-folk-woodblock`](../dong-ho-folk-woodblock/SKILL.md), [`posada-broadside`](../posada-broadside/SKILL.md), [`senjafuda-slip`](../senjafuda-slip/SKILL.md)

## Emotional target

Warm, plain humour and faith: the viewer sees a lively bazaar sheet.

**Keywords:** folk, devotional, satirical, earthy, lively · **Brand archetypes:** everyman, jester

## Canonical evidence (open licence)

Each item below has an open licence or is in the public domain, so you may show it as a reference.

- [Durga slays Mahishasura, Battala woodcut](https://commons.wikimedia.org/wiki/File:BattalaJagannath.jpg) (unknown Battala printer, 1860): image, Public domain. Victoria and Albert Museum (O102043) via Wikimedia Commons. The Commons file name says Jagannath; the print shows Durga.

## Sources

- [Battala (Wikipedia)](https://en.wikipedia.org/wiki/Battala)
- [Battala woodcut Jagannath (Commons, V&A)](https://commons.wikimedia.org/wiki/File:BattalaJagannath.jpg)

---

Generated from [`data/print/styles/battala-woodcut.json`](../../data/print/styles/battala-woodcut.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
