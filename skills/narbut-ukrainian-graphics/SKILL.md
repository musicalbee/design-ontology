---
name: narbut-ukrainian-graphics
description: "Apply the Narbut Ukrainian Baroque graphics style (1910–1920) when specifying, prompting or art-directing a printed piece or its look on screen: a poster, a plate, a book page, a zine, a label or a print-look illustration. Load when the user asks for: narbut, ukrainian baroque, ukrainian book cover, heraldic pen drawing, baroque lettering, ukrainian heraldry."
domain: print
era: industrial-press
triggers:
  - "narbut"
  - "ukrainian baroque"
  - "ukrainian book cover"
  - "heraldic pen drawing"
  - "baroque lettering"
  - "ukrainian heraldry"
  - "zinc line block"
  - "old ukrainian book"
vector_profile:
  tone_method: 1
  ink_layering: 1
  registration_play: 1
  surface_relief: 2
  hand_trace: 4
---

# Narbut Ukrainian Baroque graphics

> A dense black pen line and Baroque lettering can make a modern cover that looks like a page from an old Ukrainian book.

A black pen drawing with Baroque capitals and heraldry, printed from zinc line blocks, sometimes with one or two flat tints. The dense ornament and the hand lettering imitate old engraved Ukrainian books.

**Period:** 1910–1920 · **Era:** Industrial press · **Domain:** Print · **Also called:** Narbut style, Ukrainian Baroque graphics, Графіка Нарбута, Українська книжкова графіка

## When to load this skill

Load it when the user asks for: "narbut", "ukrainian baroque", "ukrainian book cover", "heraldic pen drawing", "baroque lettering", "ukrainian heraldry", "zinc line block", "old ukrainian book".

Good for: book and journal covers, heraldic marks and certificates, banknote and stamp art, heritage and cultural-institution branding.

Do not use it when:
- The design needs a plain, modern or minimal look.
- The picture needs soft tone or photographic colour.

## System directives

When specifying, prompting or art-directing a printed piece or its look on screen: a poster, a plate, a book page, a zine, a label or a print-look illustration in Narbut Ukrainian Baroque graphics, you MUST:

1. Draw every form with a fine pen line of 0.15–0.3 mm at print size, and fill the darks with solid black.
2. Set the title in hand-drawn Baroque capitals; give each letter a swelling stem and a curled foot.
3. Put the title, the arms or the main figure in a cartouche of scrolls, leaves and ribbons.
4. Use heraldic forms (shield, crown, helm, mantling) as the main motif of a cover or a page.
5. Balance black and white: let heavy black fills sit beside open areas of bare paper.
6. Use one flat red or ochre tint as the only colour, and put it on the title or the shield.
7. Print the pen line from a zinc line block so that the fine hairlines stay sharp.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** A soft, tonal drawing and a gradient.
- **NEVER:** A clean modern sans-serif title.
- **NEVER:** Pastel colours and loose watercolour.
- **NEVER:** A thick, blunt outline with no fine detail.
- **NEVER:** A page with no ornament and no lettering of its own.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Tone method | `■□□□□` 1/5 | solid ink, no tone | fine screen or continuous tone |
| Ink layering | `■□□□□` 1/5 | one ink | many overprinted inks |
| Registration play | `■□□□□` 1/5 | exact register | visible misregister as a feature |
| Surface relief | `■■□□□` 2/5 | flat, ink on the surface | deep bite or emboss in the sheet |
| Hand trace | `■■■■□` 4/5 | uniform machine output | each sheet differs by hand |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Process

- **Family:** relief
- **Matrix:** A zinc line block etched from a photograph of the pen drawing, and a flat block for each tint.
- **Press:** A letterpress machine, which prints the line block with the type of the book.
- **Image making:** The artist draws in black ink on white card, larger than the print. A camera reduces it to a zinc plate, and acid etches the plate to leave the lines standing.
- **Edition:** Small to medium runs of books, journals and state papers; the copies match.

## Inks

- **Strategy:** Dense black for the line and the fills, with at most one or two flat tints for the accent.
- **Ink count min:** 1
- **Ink count max:** 3
- **Overprint:** opaque

**Colours**

| Name | Hex | Role |
|---|---|---|
| Black | `#1B1917` | the line, the lettering and the dense fills |
| Red | `#A83B2B` | accent for the title or the shield |
| Ochre | `#C79A45` | flat tint behind the ornament |

## Tone and screen

- **Method:** line
- **Ruling lpi:** 100
- **Rule:** Make the tone with fine pen hatching, about 100 lines an inch at print size, and with solid black fills.

**Angles**

|  |
||
|  |

## Registration

- **Tolerance mm:** 0.5
- **Rule:** The tint block registers to the key block within 0.5 mm. A one-ink cover has no register at all.

## Stock

- **Stock:** A book paper, cream, with a smooth surface that holds the hairlines.
- **Weight gsm min:** 80
- **Weight gsm max:** 140
- **Ground:** #E8DDC0
- **Finish:** Smooth, matt, with a light tooth; cream or a little warm.

## Surface

- **Impression:** A slight bite from the line block; the fine lines show on the back of the sheet.
- **Sheen:** Matt black with a slight shine in the solid fills.
- **Texture:** Sharp hairlines, dense black solids and a faint squash of ink at the line edges.

## Process marks

- **Marks:** fine ornamental pen line · heraldic cartouches · hand-drawn Baroque capitals · dense black fills · ink squash at hairline edges · slight bite of the line block

## Prompt primer

- **Positive:** Narbut graphic · Ukrainian Baroque ornament · fine black pen line · heraldic cartouche · hand-drawn Baroque capitals · 1912 book cover · dense black on cream · imitation of an engraved old book
- **Negative:** photorealistic · gradient · 3D render · pastel · clean modern sans-serif

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Line engraving (process)

Lines cut into a metal plate with a burin; thin hairlines and swelling strokes give tone, and the print keeps a sharp, even edge. Origin: painting, Upper Rhine, c. 1430.

- Cut a hairline of 0.1 to 0.2mm for light areas; swell the line to 0.5mm or more for dark areas.
- Build shade with parallel lines or cross hatching, and keep the lines at 30° to 45° to each other.
- Print on smooth paper so the hairlines stay clean.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **Ukrainian Academy of Arts** (school, Kyiv, 1917–1922), taught the style. An art school that opened in Kyiv in December 1917. Narbut was a professor and then rector there. In 1922 the authorities renamed it the Institute of Plastic Arts.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Key ink (`key_ink`) | #1B1917 | #1B1917, #2A2018 | inks |
| Paper colour (`paper_colour`) | #E8DDC0 | #E8DDC0, #F0E6CC, #DFD3B6 | substrate |
| Ink count (`ink_count`) | 2 | 1–3 | inks, registration |
| Screen ruling (`screen_ruling`) | 100 | 60–130 lines per inch | screening |
| Misregistration (`misregistration`) | 0.5 | 0–1 mm | registration |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **lighter and more playful**: move toward [`mir-iskusstva-book-graphics`](../mir-iskusstva-book-graphics/SKILL.md) (Mir iskusstva book graphics). Open the black fills, use an even outline and add 3–4 flat watercolour tints and a folk border.
- If the user asks for **finer and more silver**: move toward [`engraving-print`](../engraving-print/SKILL.md) (Copper engraving). Change the zinc pen line for a copper plate: swelling lines at 100–120 to an inch and a plate mark.

- **Came from (go here for a more orthodox version):** [`engraving-print`](../engraving-print/SKILL.md), [`mir-iskusstva-book-graphics`](../mir-iskusstva-book-graphics/SKILL.md)
- **Kin in another domain:** [`baroque-painting`](../baroque-painting/SKILL.md)
- **Nearest by vector profile:** [`woodcut-relief-print`](../woodcut-relief-print/SKILL.md), [`chinese-modern-woodcut`](../chinese-modern-woodcut/SKILL.md), [`katagami-stencil-print`](../katagami-stencil-print/SKILL.md)

## Emotional target

Grave, proud craft: the viewer sees a national book of old weight, drawn with a very fine and very dense hand.

**Keywords:** heraldic, ornate, dense, national, scholarly · **Brand archetypes:** ruler, sage, creator

## Canonical evidence (open licence)

Each item below has an open licence or is in the public domain, so you may show it as a reference.

- [Cover of The Nightingale](https://commons.wikimedia.org/wiki/File:Narbut_cover_Nightingale.jpg) (Heorhiy Narbut, 1912): image, Public domain. Wikimedia Commons (public domain, Heorhiy Narbut)
- [Mice and cat](https://commons.wikimedia.org/wiki/File:Narbut_Mice_and_cat.jpg) (Heorhiy Narbut, 1910): image, Public domain. Wikimedia Commons (public domain, Heorhiy Narbut)
- [Arms of the hetmans of Little Russia](https://commons.wikimedia.org/wiki/File:Narbut_Arms_of_hetmen_Little_Russia.jpg) (Heorhiy Narbut, 1915): image, Public domain. Wikimedia Commons (public domain, Heorhiy Narbut)

## Sources

- [Heorhii Narbut (Wikipedia)](https://en.wikipedia.org/wiki/Heorhii_Narbut)
- [Narbut, Heorhii (Encyclopedia of Ukraine)](https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CN%5CA%5CNarbutHeorhii.htm)

---

Generated from [`data/print/styles/narbut-ukrainian-graphics.json`](../../data/print/styles/narbut-ukrainian-graphics.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
