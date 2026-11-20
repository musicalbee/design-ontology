---
name: banknote-engraving-print
description: "Apply the Steel-engraved banknote and stamp style (1819–1990) when specifying, prompting or art-directing a printed piece or its look on screen: a poster, a plate, a book page, a zine, a label or a print-look illustration. Load when the user asks for: banknote engraving, steel engraved certificate, guilloche border, intaglio security print, stamp engraving, stock certificate."
domain: print
era: industrial-press
triggers:
  - "banknote engraving"
  - "steel engraved certificate"
  - "guilloche border"
  - "intaglio security print"
  - "stamp engraving"
  - "stock certificate"
  - "engraved vignette"
  - "treasury note"
vector_profile:
  tone_method: 2
  ink_layering: 3
  registration_play: 1
  surface_relief: 3
  hand_trace: 2
---

# Steel-engraved banknote and stamp

> Fine engraved line and machine-turned rosettes on steel are hard to copy. The print is then the proof that a note or a stamp is real.

Hardened steel plates carry portraits, vignettes and geometric rosettes, printed from a transfer press. Dense fine lines and machine-turned patterns are hard to copy. The print has a tight frame of line work in green or black, with a coloured tint.

**Period:** 1819–1990 · **Era:** Industrial press · **Domain:** Print · **Also called:** Stahlstich (German), taille-douce de securite (French), line-engraved security print

## When to load this skill

Load it when the user asks for: "banknote engraving", "steel engraved certificate", "guilloche border", "intaglio security print", "stamp engraving", "stock certificate", "engraved vignette", "treasury note".

Good for: certificates, diplomas and share documents, stamps and commemorative notes, bank and fintech brand marks with a heritage look, limited-edition ticket and voucher design.

Do not use it when:
- The image needs a loose, hand-made look.
- The design needs a bright or playful colour.

## System directives

When specifying, prompting or art-directing a printed piece or its look on screen: a poster, a plate, a book page, a zine, a label or a print-look illustration in Steel-engraved banknote and stamp, you MUST:

1. Engrave the portrait and the vignette with fine parallel lines, 150–200 lines an inch.
2. Cut the border with a rose engine, so that the guilloche lines interlace with a constant pitch.
3. Print the key plate in intaglio black or green, and a tint plate behind it in a lighter colour.
4. Print the serial numbers and the seal in a second colour, by letterpress.
5. Frame the picture with a closed border, with a title in engraved script.
6. Print from a transferred steel plate, so that many plates carry the same die.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** A halftone or a photographic portrait.
- **NEVER:** Brush texture or soft wash.
- **NEVER:** Flat vector shapes.
- **NEVER:** A neon or fluorescent colour.
- **NEVER:** A coarse line that a copier can reproduce.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Tone method | `■■□□□` 2/5 | solid ink, no tone | fine screen or continuous tone |
| Ink layering | `■■■□□` 3/5 | one ink | many overprinted inks |
| Registration play | `■□□□□` 1/5 | exact register | visible misregister as a feature |
| Surface relief | `■■■□□` 3/5 | flat, ink on the surface | deep bite or emboss in the sheet |
| Hand trace | `■■□□□` 2/5 | uniform machine output | each sheet differs by hand |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Process

- **Family:** intaglio
- **Matrix:** Hardened steel plate, transferred from a steel die by a roller (siderography)
- **Press:** Intaglio plate press, later rotary
- **Image making:** Burin engraving with geometric lathe (rose engine) for guilloche borders
- **Edition:** Millions of notes from a plate; a steel plate lasts for a long run.

## Inks

- **Strategy:** Intaglio black or green for the engraving, a tint ink for the ground, and a second colour for the seal and the serial numbers.
- **Ink count min:** 2
- **Ink count max:** 4
- **Overprint:** transparent

**Colours**

| Name | Hex | Role |
|---|---|---|
| Intaglio black | `#222420` | portrait and vignette |
| Treasury green | `#4F7A4A` | back print and tint |
| Blue seal | `#2D5D8C` | seal and serial numbers |

## Tone and screen

- **Method:** line
- **Ruling lpi:** 180
- **Rule:** Make the tone with fine parallel lines that swell, 150–200 lines an inch, and make the border with guilloche lines at a constant pitch.

**Angles**

|  |
||
|  |

## Registration

- **Tolerance mm:** 0.3
- **Rule:** The tint and the engraving align within 0.3 mm; an exact fit of the back and the front is a security check.

## Stock

- **Stock:** Cotton-linen banknote paper with a watermark and a security thread.
- **Weight gsm min:** 90
- **Weight gsm max:** 110
- **Ground:** #E5DDC3
- **Finish:** Crisp, with a low sheen and a firm hand.

## Surface

- **Impression:** Raised intaglio ink that a finger can feel on the front.
- **Sheen:** Matt, with a slight rise in the black lines.
- **Texture:** Very fine line work with no visible dot, and a smooth tint field behind it.

## Process marks

- **Marks:** guilloche rosettes · fine parallel-line portrait · raised intaglio ink relief · coloured tint field behind engraving · serial numbers in a second colour

## Prompt primer

- **Positive:** steel engraved banknote · guilloche rosette border · fine line portrait engraving · intaglio security print · green and black tint · vignette frame · specimen certificate · cotton paper
- **Negative:** halftone dots · photograph · brush texture · flat vector · bright neon

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Line engraving (process)

Lines cut into a metal plate with a burin; thin hairlines and swelling strokes give tone, and the print keeps a sharp, even edge. Origin: painting, Upper Rhine, c. 1430.

- Cut a hairline of 0.1 to 0.2mm for light areas; swell the line to 0.5mm or more for dark areas.
- Build shade with parallel lines or cross hatching, and keep the lines at 30° to 45° to each other.
- Print on smooth paper so the hairlines stay clean.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **Bureau of Engraving and Printing** (state programme, Washington, D.C., 1862–now), made the style. The United States office that engraves and prints paper money. Its notes use fine line engraving in intaglio ink.
- **Perkins, Bacon & Co** (company, London, 1819–1935), made the style. A London printer of bank notes and stamps. It used steel plates and fine machine-made line work, and it printed the Penny Black in 1840.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Key ink (`key_ink`) | #222420 | #222420, #4F7A4A, #2D5D8C | inks |
| Paper colour (`paper_colour`) | #E5DDC3 | #E5DDC3, #EDE6D0, #D9D1B5 | substrate |
| Ink count (`ink_count`) | 3 | 2–4 | inks, registration |
| Screen ruling (`screen_ruling`) | 180 | 150–240 lines per inch | screening |
| Misregistration (`misregistration`) | 0.3 | 0–0.6 mm | registration |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **looser**: move toward [`engraving-print`](../engraving-print/SKILL.md) (Copper engraving). Replace the guilloche border with a free copper-plate vignette and drop the tint plate.
- If the user asks for **more ornate**: move toward [`chromolithograph-poster`](../chromolithograph-poster/SKILL.md) (Chromolithograph poster). Print the engraved frame in black and fill the ground with lithographic colour.

- **Came from (go here for a more orthodox version):** [`engraving-print`](../engraving-print/SKILL.md)
- **Nearest by vector profile:** [`private-press-book`](../private-press-book/SKILL.md), [`ten-bamboo-studio-polychrome`](../ten-bamboo-studio-polychrome/SKILL.md), [`aquatint-print`](../aquatint-print/SKILL.md)

## Emotional target

Sober, official trust: the viewer sees a document that carries value and was made with great care.

**Keywords:** official, exact, trustworthy, dense, formal · **Brand archetypes:** ruler, sage

## Canonical evidence (open licence)

Each item below has an open licence or is in the public domain, so you may show it as a reference.

- [US $1 Silver Certificate, Series 1899 (Fr. 226)](https://commons.wikimedia.org/wiki/File:US-$1-SC-1899-Fr-226.jpg) (Bureau of Engraving and Printing, 1899): image, Public domain. National Museum of American History, via Wikimedia Commons
- [US $5 Silver Certificate, Series 1899 (Fr. 271)](https://commons.wikimedia.org/wiki/File:US-$5-SC-1899-Fr.271.jpg) (Bureau of Engraving and Printing, 1899): image, Public domain. National Museum of American History, via Wikimedia Commons

## Sources

- [Wikipedia: Banknote printing](https://en.wikipedia.org/wiki/Banknote_printing)
- [Wikipedia: Perkins Bacon](https://en.wikipedia.org/wiki/Perkins_Bacon)
- [Wikipedia: Jacob Perkins](https://en.wikipedia.org/wiki/Jacob_Perkins)

---

Generated from [`data/print/styles/banknote-engraving-print.json`](../../data/print/styles/banknote-engraving-print.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
