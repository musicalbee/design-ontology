---
name: chiaroscuro-woodcut-print
description: "Apply the Chiaroscuro woodcut style (1508–c.1620) when specifying, prompting or art-directing a printed piece or its look on screen: a poster, a plate, a book page, a zine, a label or a print-look illustration. Load when the user asks for: chiaroscuro woodcut, clair-obscur print, tone block print, renaissance woodcut with wash, three block woodcut, ugo da carpi."
domain: print
era: hand-press
triggers:
  - "chiaroscuro woodcut"
  - "clair-obscur print"
  - "tone block print"
  - "renaissance woodcut with wash"
  - "three block woodcut"
  - "ugo da carpi"
  - "brown wash print"
  - "raphael print"
vector_profile:
  tone_method: 3
  ink_layering: 3
  registration_play: 3
  surface_relief: 2
  hand_trace: 4
---

# Chiaroscuro woodcut

> Flat tone blocks printed in steps over a line block imitate a brush-and-wash drawing heightened with white, with no hatching.

A line block carries the drawing and one to three tone blocks are printed over it in flat washes of one hue. The flat steps from paper white to dark ground imitate a brush-and-wash drawing heightened with white.

**Period:** 1508–c.1620 · **Era:** Hand press · **Domain:** Print · **Also called:** clair-obscur, xilografia a più legni (Italian), Helldunkelholzschnitt (German)

## When to load this skill

Load it when the user asks for: "chiaroscuro woodcut", "clair-obscur print", "tone block print", "renaissance woodcut with wash", "three block woodcut", "ugo da carpi", "brown wash print", "raphael print".

Good for: art book plates, museum and print-room editions, classical or historical illustration, wine and spirits labels with a heritage look.

Do not use it when:
- The image needs a full range of colours.
- The design needs exact register of fine text.

## System directives

When specifying, prompting or art-directing a printed piece or its look on screen: a poster, a plate, a book page, a zine, a label or a print-look illustration in Chiaroscuro woodcut, you MUST:

1. Cut a key block for the contour and the deepest shadow, and print it in black or dark brown.
2. Cut one to three tone blocks, and print each as a flat wash of one hue at 20–60 % of the key density.
3. Cut the highlights out of each tone block, so that the bare paper shows as white.
4. Keep each tone edge hard; step from one wash to the next and do not blend.
5. Print all tone blocks in one hue family, so that the picture reads as one drawing.
6. Allow 0.5–1.5 mm of key-block offset against the tone blocks.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** A smooth gradient or a soft wash edge.
- **NEVER:** Halftone dots or a photographic tone.
- **NEVER:** White highlights added with opaque white ink.
- **NEVER:** Hatching that fills the tone areas.
- **NEVER:** Tone blocks in unrelated hues.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Tone method | `■■■□□` 3/5 | solid ink, no tone | fine screen or continuous tone |
| Ink layering | `■■■□□` 3/5 | one ink | many overprinted inks |
| Registration play | `■■■□□` 3/5 | exact register | visible misregister as a feature |
| Surface relief | `■■□□□` 2/5 | flat, ink on the surface | deep bite or emboss in the sheet |
| Hand trace | `■■■■□` 4/5 | uniform machine output | each sheet differs by hand |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Process

- **Family:** relief
- **Matrix:** Plank woodblocks (pear, cherry), one key block and one to three tone blocks
- **Press:** Hand press, rubbed or screw press
- **Image making:** Key block cut with knife in line; tone blocks gouged so that highlights are cut away and paper shows through
- **Edition:** Dozens to low hundreds; blocks recut or re-inked in later states

## Inks

- **Strategy:** A dark key ink and one to three transparent tints of one hue, each printed from its own block.
- **Ink count min:** 2
- **Ink count max:** 4
- **Overprint:** transparent

**Colours**

| Name | Hex | Role |
|---|---|---|
| Black key line | `#1E1A17` | outline and shadow |
| Olive-grey tone | `#7E7A62` | mid-tone wash |
| Warm brown tone | `#8A6B4A` | ground tone |

## Tone and screen

- **Method:** solid
- **Ruling lpi:** 0
- **Rule:** Make each tone as a flat wash from one block; stack two or three blocks to get four to five tone steps, with no screen.

## Registration

- **Tolerance mm:** 1
- **Rule:** Each block is printed by hand against pin or register marks; the key block can sit 0.5–1.5 mm off the tone blocks.

## Stock

- **Stock:** Hand-made laid paper, cream to ivory, with chain lines.
- **Weight gsm min:** 80
- **Weight gsm max:** 120
- **Ground:** #E6D9B8
- **Finish:** Laid, lightly sized, with a soft tooth that takes a thin wash of ink.

## Surface

- **Impression:** A light bite from the hand press; the blocks show as a faint relief on the back.
- **Sheen:** Matt, with a slight shine where the ink is thick.
- **Texture:** Flat washes with hard edges, and the grain of the wood in the larger tone areas.

## Process marks

- **Marks:** flat tone steps with hard edges · cut-away white highlights · slight key-block offset · hand-rubbed ink density · laid lines

## Prompt primer

- **Positive:** chiaroscuro woodcut · three-block tone print · flat brown wash steps · cut-away paper white highlights · black key block line · Renaissance relief print · laid paper cream · slight block misregistration
- **Negative:** photograph · smooth gradient · halftone dots · digital vector · glossy

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

- **Court of Maximilian I** (court, Holy Roman Empire, 1486–1519), made the style. The court of the king and emperor that paid for large woodcut projects. Hans Burgkmair cut portraits and book images for it, some as chiaroscuro woodcuts.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Key ink (`key_ink`) | #1E1A17 | #1E1A17, #2A1F17, #3A2A1E | inks |
| Paper colour (`paper_colour`) | #E6D9B8 | #E6D9B8, #EADFC4, #DDCFAA | substrate |
| Ink count (`ink_count`) | 3 | 2–4 | inks, registration |
| Screen ruling (`screen_ruling`) | 0 | 0–0 lines per inch | screening |
| Misregistration (`misregistration`) | 1 | 0.5–1.5 mm | registration |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more graphic**: move toward [`woodcut-relief-print`](../woodcut-relief-print/SKILL.md) (Woodcut relief print). Drop the tone blocks, keep the key block and hatch the shadows with black lines.
- If the user asks for **more painterly**: move toward [`mezzotint-print`](../mezzotint-print/SKILL.md) (Mezzotint). Replace the stepped tones with a smooth rocked-plate tone in one dark ink.

- **Came from (go here for a more orthodox version):** [`woodcut-relief-print`](../woodcut-relief-print/SKILL.md)
- **Nearest by vector profile:** [`meiji-kosen-ga-print`](../meiji-kosen-ga-print/SKILL.md), [`nishiki-e-polychrome-woodblock`](../nishiki-e-polychrome-woodblock/SKILL.md), [`chromolithograph-poster`](../chromolithograph-poster/SKILL.md)

## Emotional target

Calm, learned warmth: the viewer sees a wash drawing of a classical scene, in a few quiet steps of one colour.

**Keywords:** classical, warm, painterly, quiet, learned · **Brand archetypes:** sage, creator

## Canonical evidence (open licence)

Each item below has an open licence or is in the public domain, so you may show it as a reference.

- [Archimedes, chiaroscuro woodcut](https://commons.wikimedia.org/wiki/File:Ugo_da_Carpi_%E2%80%94_Archimedes.jpg) (Ugo da Carpi, 1516): image, Public domain. Wikimedia Commons
- [St John the Baptist Preaching in the Desert (after Raphael)](https://commons.wikimedia.org/wiki/File:St_John_the_Baptist_Preaching_in_the_Desert_-_chiaroscuro_woodcut_by_Ugo_da_Carpi_after_Raphael_c.1517_-_Museum_of_Fine_Arts_Budapest_Hungary.jpg) (Ugo da Carpi, 1517): image, Public domain. Museum of Fine Arts Budapest, via Wikimedia Commons
- [Diogenes, chiaroscuro woodcut](https://commons.wikimedia.org/wiki/File:Ugo_da_Carpi_-_Diogenes_-_1923.1052_-_Cleveland_Museum_of_Art.tif) (Ugo da Carpi, 1527): image, CC0. Cleveland Museum of Art Open Access, via Wikimedia Commons

## Sources

- [Wikipedia: Chiaroscuro woodcut](https://en.wikipedia.org/wiki/Chiaroscuro_woodcut)
- [Wikipedia: Ugo da Carpi](https://en.wikipedia.org/wiki/Ugo_da_Carpi)

---

Generated from [`data/print/styles/chiaroscuro-woodcut-print.json`](../../data/print/styles/chiaroscuro-woodcut-print.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
