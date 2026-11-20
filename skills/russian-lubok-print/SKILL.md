---
name: russian-lubok-print
description: "Apply the Russian lubok folk print style (c.1660–1900) when specifying, prompting or art-directing a printed piece or its look on screen: a poster, a plate, a book page, a zine, a label or a print-look illustration. Load when the user asks for: lubok, russian folk print, russian woodcut, narodnaya kartinka, hand-coloured woodcut, folk broadside."
domain: print
era: hand-press
triggers:
  - "lubok"
  - "russian folk print"
  - "russian woodcut"
  - "narodnaya kartinka"
  - "hand-coloured woodcut"
  - "folk broadside"
  - "pedlar's print"
  - "cyrillic folk print"
vector_profile:
  tone_method: 1
  ink_layering: 2
  registration_play: 5
  surface_relief: 2
  hand_trace: 5
---

# Russian lubok folk print

> A coarse black key line and a few loose hand colours are enough to tell a story that anyone can read at a glance.

A cheap sheet cut in wood or engraved in copper, printed in black on thin paper and then coloured by hand. Pedlars sold it by the thousand. The line is coarse and the colour is flat and loose, because speed and price mattered most.

**Period:** c.1660–1900 · **Era:** Hand press · **Domain:** Print · **Also called:** Lubok, Лубок, Narodnaya kartinka, Народная картинка

## When to load this skill

Load it when the user asks for: "lubok", "russian folk print", "russian woodcut", "narodnaya kartinka", "hand-coloured woodcut", "folk broadside", "pedlar's print", "cyrillic folk print".

Good for: folk-tale and satire illustration, craft beer and food labels, theatre and puppet-show posters, editorial images on Russian history.

Do not use it when:
- The picture needs fine detail, a likeness or a photographic look.
- The colour must sit exactly inside the line.

## System directives

When specifying, prompting or art-directing a printed piece or its look on screen: a poster, a plate, a book page, a zine, a label or a print-look illustration in Russian lubok folk print, you MUST:

1. Cut or engrave one firm black outline for each figure; keep the line 0.8–2.0 mm wide and let it vary.
2. Print the key line first on thin paper; add the colour afterwards, by brush or through a stencil.
3. Use 3–5 flat hand colours: vermilion, yellow ochre, green and blue. Do not blend them.
4. Let the colour miss the line by 2–4 mm in places; the shift shows the hand.
5. Put a caption or a short verse in Cyrillic under or inside the picture, in a plain cut or type letter.
6. Show the story in one sheet or in a strip of panels, with figures that stand side by side and almost no depth.
7. Leave the paper bare for faces and hands; the grey-cream sheet is the light.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Smooth tone, shading or a gradient.
- **NEVER:** Exact register of colour inside the line.
- **NEVER:** A fine, even line that looks like a pencil sketch.
- **NEVER:** Perspective and a deep, realistic space.
- **NEVER:** A glossy or bright white sheet.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Tone method | `■□□□□` 1/5 | solid ink, no tone | fine screen or continuous tone |
| Ink layering | `■■□□□` 2/5 | one ink | many overprinted inks |
| Registration play | `■■■■■` 5/5 | exact register | visible misregister as a feature |
| Surface relief | `■■□□□` 2/5 | flat, ink on the surface | deep bite or emboss in the sheet |
| Hand trace | `■■■■■` 5/5 | uniform machine output | each sheet differs by hand |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Process

- **Family:** relief
- **Matrix:** A block of pear or lime wood cut on the side grain. In some sheets, a copper plate or, later, a lithographic stone.
- **Press:** A hand press, or a rubbed impression with a wooden roller or a spoon.
- **Image making:** A cutter cuts the outline with a knife and gouges. After printing, a colourist adds the colour by brush or through a paper stencil.
- **Edition:** Thousands of sheets from one block; no two hand-coloured sheets match.

## Inks

- **Strategy:** One black oil ink for the key line; the colours are thin brush or stencil washes that go on after printing.
- **Ink count min:** 1
- **Ink count max:** 5
- **Overprint:** transparent

**Colours**

| Name | Hex | Role |
|---|---|---|
| Lamp black | `#1E1A17` | the key line and the lettering |
| Vermilion | `#C8402A` | hand colour for clothes and accents |
| Yellow ochre | `#D9A441` | hand colour for gold and hair |
| Green | `#5E8B5A` | hand colour for plants and coats |
| Blue | `#4A6FA5` | hand colour for sky and cloth |

## Tone and screen

- **Method:** line
- **Ruling lpi:** 20
- **Rule:** Make the tone with a few coarse parallel cuts, about 20 to an inch, or leave the paper bare.

**Angles**

|  |
||
|  |

## Registration

- **Tolerance mm:** 3
- **Rule:** The hand colour shifts 2–4 mm from the key line, and it can run over it. This shift is part of the look.

## Stock

- **Stock:** A thin rag or wood-pulp paper with a rough surface and a grey-cream tone.
- **Weight gsm min:** 40
- **Weight gsm max:** 90
- **Ground:** #D8CDB4
- **Finish:** Uncoated and unsized, with a coarse tooth; it tones and creases with age.

## Surface

- **Impression:** A light bite: the black line sinks a little into the thin sheet.
- **Sheen:** Matt, with a dull shine where the black ink is thick.
- **Texture:** Thick black lines with ink squash, wash colour that cockles the paper, and a visible grain of the sheet.

## Process marks

- **Marks:** thick, uneven cut line · hand colour that spills over the outline · hand-lettered or type captions in Cyrillic · ink squash at line edges · paper toning and creases · wash cockle in the thin sheet

## Prompt primer

- **Positive:** Russian lubok woodcut · coarse black cut outline · flat hand-coloured vermilion and ochre · colour spilling past the line · naive folk figures · Cyrillic caption cartouche · thin toned paper · 18th-century popular print
- **Negative:** photorealistic · smooth gradient · 3D render · perfect registration · glossy finish · fine pencil-like line

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Line engraving (process)

Lines cut into a metal plate with a burin; thin hairlines and swelling strokes give tone, and the print keeps a sharp, even edge. Origin: painting, Upper Rhine, c. 1430.

- Cut a hairline of 0.1 to 0.2mm for light areas; swell the line to 0.5mm or more for dark areas.
- Build shade with parallel lines or cross hatching, and keep the lines at 30° to 45° to each other.
- Print on smooth paper so the hairlines stay clean.

### Woodcut (process)

A print from a block of wood with the white parts cut away; the result is flat colour, hard edges and visible grain. Origin: print, Dunhuang, 868.

- Cut the block along the grain with a knife and a gouge; leave a line of 1mm to 3mm for the black.
- Use one block for each colour and register them within 1 mm.
- Print with a flat, opaque ink and leave the grain and the knife marks visible.
- Keep the shapes flat, with no more than 3 to 6 tones in a print.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **Sytin publishing house** (publisher, Moscow, 1876–1917), published the style. A Moscow printing and publishing firm that Ivan Sytin built from a small lithographic shop. It printed popular sheets, calendars and books in very large runs.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Key ink (`key_ink`) | #1E1A17 | #1E1A17, #2A1E16 | inks |
| Paper colour (`paper_colour`) | #D8CDB4 | #D8CDB4, #E3D8BE, #CFC3A8 | substrate |
| Ink count (`ink_count`) | 4 | 1–5 | inks, registration |
| Screen ruling (`screen_ruling`) | 20 | 0–30 lines per inch | screening |
| Misregistration (`misregistration`) | 3 | 1–4 mm | registration |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more polished**: move toward [`mir-iskusstva-book-graphics`](../mir-iskusstva-book-graphics/SKILL.md) (Mir iskusstva book graphics). Keep the folk figures and the flat colour; make the outline even, add a pattern border and put the colour exactly inside the line.
- If the user asks for **more political**: move toward [`rosta-window-stencil-poster`](../rosta-window-stencil-poster/SKILL.md) (ROSTA Window stencil poster). Keep the coarse outline and the flat colour; put a rhymed caption under each panel and use 3–4 bold colours.
- If the user asks for **finer line**: move toward [`engraving-print`](../engraving-print/SKILL.md) (Copper engraving). Change the cut wood for a copper plate: thinner, swelling lines at 80–120 to an inch.

- **Came from (go here for a more orthodox version):** [`woodcut-relief-print`](../woodcut-relief-print/SKILL.md)
- **Led to (go here for a newer version):** [`mir-iskusstva-book-graphics`](../mir-iskusstva-book-graphics/SKILL.md), [`rosta-window-stencil-poster`](../rosta-window-stencil-poster/SKILL.md)
- **Mixes well with:** [`engraving-print`](../engraving-print/SKILL.md)
- **Kin in another domain:** [`mingei-folk-craft`](../mingei-folk-craft/SKILL.md)
- **Nearest by vector profile:** [`dong-ho-folk-woodblock`](../dong-ho-folk-woodblock/SKILL.md), [`rosta-window-stencil-poster`](../rosta-window-stencil-poster/SKILL.md), [`nianhua-new-year-print`](../nianhua-new-year-print/SKILL.md)

## Emotional target

Blunt, warm humour: the viewer reads a street story that a pedlar sold for a few kopecks, and smiles at its plain force.

**Keywords:** naive, folk, bold, humorous, hand-made · **Brand archetypes:** jester, everyman

## Canonical evidence (open licence)

Each item below has an open licence or is in the public domain, so you may show it as a reference.

- [Lubok sheet, c. 1760](https://commons.wikimedia.org/wiki/File:1760kit.jpg) (Anonymous folk artist, 1760): image, Public domain. Wikimedia Commons (public domain)
- [A pair of dwarfs, lubok](https://commons.wikimedia.org/wiki/File:A_pair_of_dwarfs_Lubok.jpg) (Unknown, 1740): image, Public domain. Wikimedia Commons (public domain)
- [Adskoe chudovishe (Hell monster), lubok](https://commons.wikimedia.org/wiki/File:Adskoe_chudovishe.jpg) (Anonymous folk artist, 1850): image, Public domain. Wikimedia Commons (public domain)

## Sources

- [Lubok (Wikipedia)](https://en.wikipedia.org/wiki/Lubok)
- [Лубок (ru.wikipedia)](https://ru.wikipedia.org/wiki/Лубок)
- [Commons category: Lubok](https://commons.wikimedia.org/wiki/Category:Lubok)

---

Generated from [`data/print/styles/russian-lubok-print.json`](../../data/print/styles/russian-lubok-print.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
