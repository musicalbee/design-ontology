---
name: nishiki-e-polychrome-woodblock
description: "Apply the Nishiki-e multi-block colour woodblock print style (1765–1900s) when specifying, prompting or art-directing a printed piece or its look on screen: a poster, a plate, a book page, a zine, a label or a print-look illustration. Load when the user asks for: nishiki-e, ukiyo-e print, japanese woodblock print, edo woodblock, hokusai style print, hiroshige style."
domain: print
era: hand-press
triggers:
  - "nishiki-e"
  - "ukiyo-e print"
  - "japanese woodblock print"
  - "edo woodblock"
  - "hokusai style print"
  - "hiroshige style"
  - "bokashi gradient"
  - "washi woodblock"
vector_profile:
  tone_method: 2
  ink_layering: 3
  registration_play: 2
  surface_relief: 2
  hand_trace: 4
---

# Nishiki-e multi-block colour woodblock print

> A set of wood blocks, one for each colour, can make a full-colour picture when a printer rubs thin water-based colour into damp paper and keeps each block in register by hand.

A drawing is pasted on a cherry plank and cut by a carver. A printer rubs water-based pigment from one block for each colour onto damp washi with a baren. The colours are flat and soft, and the wood grain shows.

**Period:** 1765–1900s · **Era:** Hand press · **Domain:** Print · **Also called:** Nishiki-e, 錦絵, Brocade picture, Edo colour woodblock print

## When to load this skill

Load it when the user asks for: "nishiki-e", "ukiyo-e print", "japanese woodblock print", "edo woodblock", "hokusai style print", "hiroshige style", "bokashi gradient", "washi woodblock".

Good for: tea, sake and stationery labels, editorial images on Japan, travel posters, packs for craft goods.

Do not use it when:
- The picture needs a photographic tone or a sharp, glossy finish.
- The brief needs a heavy, bold outline or a pop colour set.

## System directives

When specifying, prompting or art-directing a printed piece or its look on screen: a poster, a plate, a book page, a zine, a label or a print-look illustration in Nishiki-e multi-block colour woodblock print, you MUST:

1. Print a sumi key block first. Keep its line 0.2–0.5 mm wide and unbroken, so the carver can follow it.
2. Give each flat colour its own block. Use 3–12 blocks, and let the inks mix where two colours overlap.
3. Cut two L-shaped register marks (kento) on each block, so each colour lands on the key line within 0.5 mm.
4. Make a gradation (bokashi) by wiping the ink on the block with a damp cloth. Place it at the sky, the water and the hem of a robe.
5. Leave the wood grain in the large flat areas. Do not hide it with extra ink.
6. Press a bare, inkless block into the sheet (karazuri) where you need a raised line, for example on snow or a collar.
7. Print on thin damp washi, and rub the back with a baren in a circle until the colour sinks into the fibre.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** A thick, even outline round each shape.
- **NEVER:** A smooth digital gradient with no hand-wipe edge.
- **NEVER:** A halftone dot or a photographic tone.
- **NEVER:** Glossy, opaque, uniform ink.
- **NEVER:** Perfect register with no kento shift or grain.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Tone method | `■■□□□` 2/5 | solid ink, no tone | fine screen or continuous tone |
| Ink layering | `■■■□□` 3/5 | one ink | many overprinted inks |
| Registration play | `■■□□□` 2/5 | exact register | visible misregister as a feature |
| Surface relief | `■■□□□` 2/5 | flat, ink on the surface | deep bite or emboss in the sheet |
| Hand trace | `■■■■□` 4/5 | uniform machine output | each sheet differs by hand |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Process

- **Family:** relief
- **Matrix:** Planks of mountain cherry (yamazakura), cut on both faces, with one block for each colour and a key block with kento register notches.
- **Press:** No press. A printer rubs the back of the sheet with a baren, a disc of bamboo-sheath cord, by hand.
- **Image making:** A publisher commissions the work. The artist draws in ink, a carver cuts the key block, and a printer sets and prints the colour blocks.
- **Edition:** A few hundred to several thousand sheets for each design, and the blocks can be recut for reprints.

## Inks

- **Strategy:** Water-based pigment and rice paste. The key block prints first in sumi, then each colour block prints in turn from light to dark.
- **Ink count min:** 3
- **Ink count max:** 12
- **Overprint:** transparent

**Colours**

| Name | Hex | Role |
|---|---|---|
| Sumi black | `#2B2B2E` | key block outline |
| Prussian blue (bero-ai) | `#1F3F78` | sky, water, bokashi gradation |
| Beni red | `#C2453B` | accents and garments |
| Ochre | `#D9A74E` | flat fields |
| Moss green | `#7A8F5A` | foliage |

## Tone and screen

- **Method:** solid
- **Ruling lpi:** 0
- **Rule:** Make a tone with a flat colour field or with a wiped bokashi gradation of 10–40 mm. The style has no hatching and no dot.

## Registration

- **Tolerance mm:** 0.5
- **Rule:** The kento marks hold each colour within 0.5 mm of the key line, and a small gap or overlap of colour at an edge is normal.

## Stock

- **Stock:** Hand-made washi of mulberry fibre (kozo), thin and damp when printed.
- **Weight gsm min:** 40
- **Weight gsm max:** 80
- **Ground:** #EFE3C8
- **Finish:** Unsized or lightly sized, with a soft surface and visible long fibres.

## Surface

- **Impression:** Light. The baren leaves a faint circular sheen on the back, and an embossed (karazuri) line stands up in fine work.
- **Sheen:** Matt, with a soft shine on burnished or mica areas.
- **Texture:** Flat colour with the wood grain in it, soft wiped edges, and the long fibres of the paper.

## Process marks

- **Marks:** kento register shift · wood grain in flat areas · baren swirl on the back · embossing (karazuri) in fine work · bokashi gradation at block edges · fading of organic reds

## Prompt primer

- **Positive:** Japanese nishiki-e woodblock print · flat transparent colour blocks · soft bokashi gradient sky · visible wood grain · crisp sumi key line · washi paper texture · faded beni red and indigo · slight offset of colour registration
- **Negative:** photographic · halftone dots · glossy digital gradient · 3D render · thick outline stroke

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

- **Tsutaya** (publisher, Edo, 1774–now), published the style. The publishing house of Tsutaya Jūzaburō in Edo. It published woodblock prints by Utamaro, Sharaku and other masters.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Key ink (`key_ink`) | #2B2B2E | #2B2B2E, #1E1E24, #3A3228 | inks |
| Paper colour (`paper_colour`) | #EFE3C8 | #EFE3C8, #F2E9D3, #E6D8B8 | substrate |
| Ink count (`ink_count`) | 6 | 3–12 | inks, registration |
| Screen ruling (`screen_ruling`) | 0 | 0–0 lines per inch | screening |
| Misregistration (`misregistration`) | 0.5 | 0–1.5 mm | registration |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more modern and personal**: move toward [`sosaku-hanga-print`](../sosaku-hanga-print/SKILL.md) (Sosaku-hanga creative print). Keep the block and the washi. Let one artist cut the block, show the gouge marks, and use fewer, bolder colours.
- If the user asks for **softer, with Western light**: move toward [`shin-hanga-print`](../shin-hanga-print/SKILL.md) (Shin-hanga new print). Keep the process. Add 8–12 tonal blocks and wiped gradations for rain, dusk and lamp light.
- If the user asks for **small and luxurious**: move toward [`surimono-print`](../surimono-print/SKILL.md) (Surimono privately published print). Reduce the sheet to a small square. Add embossing, metallic dust and a verse beside the image.

- **Came from (go here for a more orthodox version):** [`woodcut-relief-print`](../woodcut-relief-print/SKILL.md)
- **Led to (go here for a newer version):** [`meiji-kosen-ga-print`](../meiji-kosen-ga-print/SKILL.md), [`senjafuda-slip`](../senjafuda-slip/SKILL.md), [`shin-hanga-print`](../shin-hanga-print/SKILL.md), [`surimono-print`](../surimono-print/SKILL.md)
- **Was rejected by:** [`sosaku-hanga-print`](../sosaku-hanga-print/SKILL.md)
- **Kin in another domain:** [`ukiyo-e`](../ukiyo-e/SKILL.md)
- **Nearest by vector profile:** [`meiji-kosen-ga-print`](../meiji-kosen-ga-print/SKILL.md), [`chiaroscuro-woodcut-print`](../chiaroscuro-woodcut-print/SKILL.md), [`psychedelic-concert-poster`](../psychedelic-concert-poster/SKILL.md)

## Emotional target

Calm, flat beauty: the viewer reads a soft, clear picture that many hands made, with a fine eye for season and weather.

**Keywords:** serene, flat, delicate, seasonal, crafted · **Brand archetypes:** sage, creator

## Canonical evidence (open licence)

Each item below has an open licence or is in the public domain, so you may show it as a reference.

- [The Moon-Viewing Promontory](https://clevelandart.org/art/1985.320) (Utagawa Hiroshige, 1857): image, CC0. Cleveland Museum of Art Open Access
- [Young Woman Looking at a Pot of Pinks](https://clevelandart.org/art/1985.304) (Suzuki Harunobu, 1767): image, CC0. Cleveland Museum of Art Open Access
- [Driving Rain at Shono](https://clevelandart.org/art/1948.306) (Utagawa Hiroshige, 1833): image, CC0. Cleveland Museum of Art Open Access

## Sources

- [Wikipedia: Ukiyo-e](https://en.wikipedia.org/wiki/Ukiyo-e)
- [Wikipedia: Woodblock printing in Japan](https://en.wikipedia.org/wiki/Woodblock_printing_in_Japan)
- [Cleveland Museum of Art Open Access API](https://openaccess-api.clevelandart.org/)

---

Generated from [`data/print/styles/nishiki-e-polychrome-woodblock.json`](../../data/print/styles/nishiki-e-polychrome-woodblock.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
