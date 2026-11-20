---
name: posada-broadside
description: "Apply the Posada broadside style (c.1880–1920) when specifying, prompting or art-directing a printed piece or its look on screen: a poster, a plate, a book page, a zine, a label or a print-look illustration. Load when the user asks for: posada, calavera print, day of the dead broadside, mexican broadside, catrina engraving, hoja volante."
domain: print
era: industrial-press
triggers:
  - "posada"
  - "calavera print"
  - "day of the dead broadside"
  - "mexican broadside"
  - "catrina engraving"
  - "hoja volante"
  - "zinc etching skeleton"
  - "vanegas arroyo"
vector_profile:
  tone_method: 2
  ink_layering: 1
  registration_play: 2
  surface_relief: 2
  hand_trace: 4
---

# Posada broadside

> A flat black picture cut in metal, with a hard white line and set type under it, can tell a news story or a joke to a reader who has little money and little time.

A cheap sheet that carries a hard black picture and set type. José Guadalupe Posada cut or etched the picture in a metal plate for the press of Antonio Vanegas Arroyo, and the sheet sold in the street.

**Period:** c.1880–1920 · **Era:** Industrial press · **Domain:** Print · **Also called:** Hoja volante, Calavera broadside, Vanegas Arroyo broadside, Metal-relief broadsheet

## When to load this skill

Load it when the user asks for: "posada", "calavera print", "day of the dead broadside", "mexican broadside", "catrina engraving", "hoja volante", "zinc etching skeleton", "vanegas arroyo".

Good for: Day of the Dead posters, satirical editorial images, labels for mezcal and craft beer, book covers for Latin American history.

Do not use it when:
- The image needs soft tone, a portrait likeness or a photographic look.
- The subject is solemn and the tone must stay quiet.

## System directives

When specifying, prompting or art-directing a printed piece or its look on screen: a poster, a plate, a book page, a zine, a label or a print-look illustration in Posada broadside, you MUST:

1. Print the picture and the text from one forme: a metal relief plate locked next to the type.
2. Make the figure in solid black with hard white lines; keep the white line at 0.2–0.5 mm.
3. Make the mid-tone with cross-hatch at 30–60 lines an inch; do not use a screen.
4. Show a skeleton, a devil or a crowd in an action, with the face turned to the reader.
5. Put a headline in large type above the picture and a verse or a story in small type below it.
6. Print on thin paper in pink, green, yellow or white, and let the paper stand for a second colour.
7. Accept uneven ink, a broken type letter and a slight shift of the plate on the sheet.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Halftone dots or a photographic tone.
- **NEVER:** Soft grey wash or a smooth gradient.
- **NEVER:** A fine, even engraved line that has no hard black mass.
- **NEVER:** Heavy coated paper with a gloss.
- **NEVER:** A picture that is separate from the text on a clean white page.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Tone method | `■■□□□` 2/5 | solid ink, no tone | fine screen or continuous tone |
| Ink layering | `■□□□□` 1/5 | one ink | many overprinted inks |
| Registration play | `■■□□□` 2/5 | exact register | visible misregister as a feature |
| Surface relief | `■■□□□` 2/5 | flat, ink on the surface | deep bite or emboss in the sheet |
| Hand trace | `■■■■□` 4/5 | uniform machine output | each sheet differs by hand |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Process

- **Family:** relief
- **Matrix:** A plate of type metal or zinc. The engraver cuts it with a burin, or bites it with acid so that the lines stand in relief.
- **Press:** A platen or a cylinder letterpress that prints the plate and the type in one pull.
- **Image making:** The artist draws on the plate, then cuts the white lines with a burin or bites them with acid. The compositor sets the text in type.
- **Edition:** Thousands of sheets from one plate; the plate wears slowly and the sheets differ only in inking.

## Inks

- **Strategy:** One black letterpress ink. The coloured paper gives the second colour; the printer sometimes adds a red or a blue block.
- **Ink count min:** 1
- **Ink count max:** 2
- **Overprint:** opaque

**Colours**

| Name | Hex | Role |
|---|---|---|
| Letterpress black | `#1C1A18` | picture and type |
| Printed red | `#C8503C` | a second block, used on some sheets |

## Tone and screen

- **Method:** hatch
- **Ruling lpi:** 45
- **Rule:** Make a mid-tone with crossed lines at about 45 lines an inch, and make the deep shadow a solid black.

**Angles**

|  |
||
|  |

## Registration

- **Tolerance mm:** 1.5
- **Rule:** The picture and the type print together, so they stay in register; a second red block can sit 1–2 mm off.

## Stock

- **Stock:** A thin groundwood paper in pink, green, yellow or white, made for cheap print.
- **Weight gsm min:** 40
- **Weight gsm max:** 70
- **Ground:** #D9C7A3
- **Finish:** Uncoated and rough, with visible wood fibre; it browns with age.

## Surface

- **Impression:** A light bite: the plate and the type press a little into the soft paper.
- **Sheen:** Matt black ink, flat on the thin sheet.
- **Texture:** Solid black masses with a small speckle where the ink did not cover, and crisp white lines.

## Process marks

- **Marks:** hard white lines on solid black · cross-hatch · picture and type from one forme · broken type letters · uneven inking · foxed groundwood paper · show-through of the type on the back

## Prompt primer

- **Positive:** Mexican broadside print · zinc relief etching · black line cross-hatching · calavera skeleton figures · cheap coloured newsprint · letterpress type under the image · hard white line on solid black · aged foxed paper
- **Negative:** halftone dots · smooth gradient · photograph · glossy coated paper · soft watercolour

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Letterpress (process)

Printing from raised metal or wood type and blocks, locked in a forme and pressed into the paper. Origin: typeface, Mainz, 1454.

- Set the type by hand from a case, letter by letter, and justify each line with spaces in the composing stick.
- Lock the type, the rules and the blocks in a chase, ink the forme with rollers and press it into the sheet.
- Dampen a soft rag paper so that the type bites 0.1–0.3 mm into it.
- Print each ink from a separate forme or a separate pull, and register them by pins or lays.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **Imprenta de Antonio Vanegas Arroyo** (publisher, Mexico City, ?–now), published the style. A Mexico City press that sold cheap broadsides, songbooks and chapbooks. It used the metal-plate pictures of José Guadalupe Posada.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Key ink (`key_ink`) | #1C1A18 | #1C1A18, #2A1E16 | inks |
| Paper colour (`paper_colour`) | #D9C7A3 | #D9C7A3, #E8B7C0, #C9D9A8, #F1E3A8 | substrate |
| Ink count (`ink_count`) | 1 | 1–2 | inks, registration |
| Screen ruling (`screen_ruling`) | 45 | 30–70 lines per inch | screening |
| Misregistration (`misregistration`) | 1.5 | 0.5–2.5 mm | registration |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more political and collective**: move toward [`taller-grafica-popular-linocut`](../taller-grafica-popular-linocut/SKILL.md) (Taller de Gráfica Popular linocut). Replace the metal plate with a gouged linoleum block, make the black masses larger and add a plain hand-lettered slogan.
- If the user asks for **older and more devout**: move toward [`woodcut-relief-print`](../woodcut-relief-print/SKILL.md) (Woodcut relief print). Cut the picture in wood, follow the form with parallel lines and print on laid rag paper.

- **Came from (go here for a more orthodox version):** [`engraving-print`](../engraving-print/SKILL.md), [`woodcut-relief-print`](../woodcut-relief-print/SKILL.md)
- **Led to (go here for a newer version):** [`taller-grafica-popular-linocut`](../taller-grafica-popular-linocut/SKILL.md)
- **Nearest by vector profile:** [`cordel-xilogravura`](../cordel-xilogravura/SKILL.md), [`woodcut-relief-print`](../woodcut-relief-print/SKILL.md), [`battala-woodcut`](../battala-woodcut/SKILL.md)

## Emotional target

A dry laugh at death and power: the viewer reads a street sheet with a sharp joke and a hard black picture.

**Keywords:** satirical, macabre, popular, raw, witty · **Brand archetypes:** jester, outlaw

## Canonical evidence (open licence)

Each item below has an open licence or is in the public domain, so you may show it as a reference.

- [Calavera oaxaqueña, broadsheet](https://commons.wikimedia.org/wiki/File:Jos%C3%A9_Guadalupe_Posada,_Calavera_oaxaque%C3%B1a,_broadsheet,_1903.jpg) (José Guadalupe Posada, 1903): image, Public domain. Wikimedia Commons
- [El corrido de la muerte](https://commons.wikimedia.org/wiki/File:El_corrido_de_la_muerte_LCCN99615845.jpg) (José Guadalupe Posada for Antonio Vanegas Arroyo, 1900): image, Public domain. Library of Congress via Wikimedia Commons. The library dates it 1890–1909.
- [La Calavera Catrina](https://commons.wikimedia.org/wiki/File:La_Calavera_Catrina_J_Guadalupe_Posada.jpg) (José Guadalupe Posada, 1913): image, Public domain. Wikimedia Commons

## Sources

- [José Guadalupe Posada (Wikipedia)](https://en.wikipedia.org/wiki/Jos%C3%A9_Guadalupe_Posada)
- [Antonio Vanegas Arroyo (Wikidata Q605568)](https://www.wikidata.org/wiki/Q605568)
- [Commons category: José Guadalupe Posada](https://commons.wikimedia.org/wiki/Category:Jos%C3%A9_Guadalupe_Posada)

---

Generated from [`data/print/styles/posada-broadside.json`](../../data/print/styles/posada-broadside.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
