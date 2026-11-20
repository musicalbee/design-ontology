---
name: cordel-xilogravura
description: "Apply the Cordel xilogravura style (c.1900–present) when specifying, prompting or art-directing a printed piece or its look on screen: a poster, a plate, a book page, a zine, a label or a print-look illustration. Load when the user asks for: cordel, xilogravura, brazilian woodcut, literatura de cordel, northeast brazil print, chapbook cover woodcut."
domain: print
era: industrial-press
triggers:
  - "cordel"
  - "xilogravura"
  - "brazilian woodcut"
  - "literatura de cordel"
  - "northeast brazil print"
  - "chapbook cover woodcut"
  - "folk woodcut brazil"
  - "sertao woodcut"
vector_profile:
  tone_method: 2
  ink_layering: 1
  registration_play: 2
  surface_relief: 2
  hand_trace: 5
---

# Cordel xilogravura

> One woodcut on a cheap cover can tell the whole story of a verse in a single bold picture.

A woodcut for the cover of a cordel chapbook, a cheap booklet of verse that hangs from a string. The cutter works in a soft wood, with bold white lines, flat shapes and one black ink.

**Period:** c.1900–present · **Era:** Industrial press · **Domain:** Print · **Also called:** Cordel woodcut, Xilogravura de cordel, Literatura de cordel cover

## When to load this skill

Load it when the user asks for: "cordel", "xilogravura", "brazilian woodcut", "literatura de cordel", "northeast brazil print", "chapbook cover woodcut", "folk woodcut brazil", "sertao woodcut".

Good for: book and music covers, street food and beer labels, event posters for Brazilian culture, editorial images for folk tales.

Do not use it when:
- The subject needs tonal depth or a likeness.
- The tone must be luxury or technical.

## System directives

When specifying, prompting or art-directing a printed piece or its look on screen: a poster, a plate, a book page, a zine, a label or a print-look illustration in Cordel xilogravura, you MUST:

1. Cut the block in a soft wood with a knife and a gouge.
2. Make a strong, simple scene: a hero, an animal, a saint or a bandit, drawn full-face or in profile.
3. Use a thick black mass with white outline and a repeat pattern in the background.
4. Cut the title into the block, in simple blocky letters, or set it in type.
5. Print in black on a coloured paper cover; the paper gives the second colour.
6. Keep the picture to a small size, about A6 to A5.
7. Leave the wood grain and the knife marks in view.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Fine, shaded engraving.
- **NEVER:** Halftone or photographic cover.
- **NEVER:** Glossy paper.
- **NEVER:** Many colours with an even blend.
- **NEVER:** A thin, precise vector line.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Tone method | `■■□□□` 2/5 | solid ink, no tone | fine screen or continuous tone |
| Ink layering | `■□□□□` 1/5 | one ink | many overprinted inks |
| Registration play | `■■□□□` 2/5 | exact register | visible misregister as a feature |
| Surface relief | `■■□□□` 2/5 | flat, ink on the surface | deep bite or emboss in the sheet |
| Hand trace | `■■■■■` 5/5 | uniform machine output | each sheet differs by hand |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Process

- **Family:** relief
- **Matrix:** A soft wood block, such as umburana or imbuia, cut with a knife and a gouge.
- **Press:** Hand rubbing with a spoon, or a small letterpress.
- **Image making:** The cutter draws the scene on the block, then cuts away the white areas.
- **Edition:** Hundreds to thousands of covers from one block.

## Inks

- **Strategy:** One black ink on a coloured paper cover; the paper stands for the second ink.
- **Ink count min:** 1
- **Ink count max:** 2
- **Overprint:** opaque

**Colours**

| Name | Hex | Role |
|---|---|---|
| Black | `#1D1B19` | the picture |
| Cover paper red | `#D9534F` | the coloured cover stock, a stand-in for a second ink |

## Tone and screen

- **Method:** line
- **Ruling lpi:** 0
- **Rule:** Make a tone with the width and the spacing of knife lines and with repeat marks, 0.4–1.5 mm apart; do not use a screen.

## Registration

- **Tolerance mm:** 1
- **Rule:** One block prints the picture; a second block, if used, can sit 1 mm off.

## Stock

- **Stock:** A cheap newsprint for the pages and a thicker coloured paper for the cover.
- **Weight gsm min:** 45
- **Weight gsm max:** 120
- **Ground:** #EAE0C8
- **Finish:** Uncoated and matt, with a rough tooth.

## Surface

- **Impression:** A light bite with a clear edge on the black areas.
- **Sheen:** Matt black ink.
- **Texture:** Solid black with a mottled grain, white knife lines and repeat patterns.

## Process marks

- **Marks:** gouge marks · wood grain · white outline · bold flat shapes · repeat dot and line patterns · coloured paper cover

## Prompt primer

- **Positive:** cordel xilogravura woodcut · Northeast Brazil chapbook cover · bold black and white gouge lines · folk hero or bandit scene · coloured paper cover · blocky cut lettering · pattern fill in the background · visible wood grain
- **Negative:** halftone · glossy · photograph · smooth gradient · fine shading

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

- **Lira Nordestina** (publisher, Juazeiro do Norte, Brazil, ?–now), published the style. A cordel press and woodcut workshop in Juazeiro do Norte. Sources differ on the year of its start.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Key ink (`key_ink`) | #1D1B19 | #1D1B19, #2A1E16 | inks |
| Paper colour (`paper_colour`) | #EAE0C8 | #EAE0C8, #E6B8A8, #CFE0B8, #F1E3A8 | substrate |
| Ink count (`ink_count`) | 1 | 1–2 | inks, registration |
| Screen ruling (`screen_ruling`) | 0 | 0–0 lines per inch | screening |
| Misregistration (`misregistration`) | 1 | 0–2 mm | registration |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more political**: move toward [`taller-grafica-popular-linocut`](../taller-grafica-popular-linocut/SKILL.md) (Taller de Gráfica Popular linocut). Use larger black masses, a hand-lettered slogan and a heroic group figure.
- If the user asks for **more medieval**: move toward [`woodcut-relief-print`](../woodcut-relief-print/SKILL.md) (Woodcut relief print). Cut thin, parallel shading lines and print on laid paper.

- **Came from (go here for a more orthodox version):** [`woodcut-relief-print`](../woodcut-relief-print/SKILL.md)
- **Nearest by vector profile:** [`chinese-modern-woodcut`](../chinese-modern-woodcut/SKILL.md), [`posada-broadside`](../posada-broadside/SKILL.md), [`taller-grafica-popular-linocut`](../taller-grafica-popular-linocut/SKILL.md)

## Emotional target

Storytelling warmth: the viewer feels a lively voice from a market square.

**Keywords:** folk, narrative, earthy, playful, rooted · **Brand archetypes:** everyman, jester, outlaw

## Canonical evidence (open licence)

Each item below has an open licence or is in the public domain, so you may show it as a reference.

- [Xilogravura Lucélia Borges](https://commons.wikimedia.org/wiki/File:Xilogravura_Luc%C3%A9lia_Borges.webp) (Lucélia Borges, 2018): image, CC BY-SA 4.0. Lucélia Borges, Wikimedia Commons (a modern work)

## Sources

- [Literatura de cordel (Wikipedia)](https://en.wikipedia.org/wiki/Literatura_de_cordel)
- [José Francisco Borges (Wikipedia)](https://en.wikipedia.org/wiki/J._Borges)

---

Generated from [`data/print/styles/cordel-xilogravura.json`](../../data/print/styles/cordel-xilogravura.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
