---
name: surimono-print
description: "Apply the Surimono privately published print style (1790s–1830s) when specifying, prompting or art-directing a printed piece or its look on screen: a poster, a plate, a book page, a zine, a label or a print-look illustration. Load when the user asks for: surimono, japanese new year card print, kyoka print, embossed japanese print, gold dust woodblock, poem greeting print."
domain: print
era: hand-press
triggers:
  - "surimono"
  - "japanese new year card print"
  - "kyoka print"
  - "embossed japanese print"
  - "gold dust woodblock"
  - "poem greeting print"
  - "hokusai surimono"
vector_profile:
  tone_method: 1
  ink_layering: 4
  registration_play: 1
  surface_relief: 3
  hand_trace: 4
---

# Surimono privately published print

> A print made for a closed circle of friends, not for the market, can spend its whole cost on material and on fine cut.

Poetry clubs paid for small woodblock prints as New Year cards and as notices of events. The patrons paid, so the printers used costly pigment, metal dust, embossing and burnish on thick paper.

**Period:** 1790s–1830s · **Era:** Hand press · **Domain:** Print · **Also called:** Surimono, 摺物, Kyoka surimono, Poem-greeting print

## When to load this skill

Load it when the user asks for: "surimono", "japanese new year card print", "kyoka print", "embossed japanese print", "gold dust woodblock", "poem greeting print", "hokusai surimono".

Good for: luxury invitations and gift cards, premium tea and sake packs, small editions for a private club, editorial images on Japanese poetry.

Do not use it when:
- The piece must be large, cheap and loud.
- The picture needs a photographic tone.

## System directives

When specifying, prompting or art-directing a printed piece or its look on screen: a poster, a plate, a book page, a zine, a label or a print-look illustration in Surimono privately published print, you MUST:

1. Print a small sheet, square or oblong, about 130–210 mm on a side.
2. Write the verse in calligraphy beside the image, and let it share the space with the picture.
3. Choose a still life of fans, shells, fruit or flowers that carries a pun or a seasonal sign for the poem.
4. Sprinkle gold or silver dust, or print mica, on 5–20 percent of the picture, for light and water.
5. Press a bare block (karazuri) into the sheet to raise a feather, a petal or a pattern.
6. Burnish the black areas with a baren until they shine.
7. Cut each outline finer than a commercial print, and print each colour with care.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** A large poster format.
- **NEVER:** Cheap, bright colour with no metal or emboss.
- **NEVER:** A heavy outline in the manner of a comic.
- **NEVER:** A halftone dot or a photograph.
- **NEVER:** Flat matt colour with no raised or shining surface.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Tone method | `■□□□□` 1/5 | solid ink, no tone | fine screen or continuous tone |
| Ink layering | `■■■■□` 4/5 | one ink | many overprinted inks |
| Registration play | `■□□□□` 1/5 | exact register | visible misregister as a feature |
| Surface relief | `■■■□□` 3/5 | flat, ink on the surface | deep bite or emboss in the sheet |
| Hand trace | `■■■■□` 4/5 | uniform machine output | each sheet differs by hand |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Process

- **Family:** relief
- **Matrix:** Cherry-wood blocks with a very fine cut, one for each colour, and bare blocks for embossing.
- **Press:** No press. A printer rubs the back of a thick sheet with a baren, and burnishes some areas.
- **Image making:** The poets supply the verse. An artist such as Hokusai, Shunman or Gakutei draws the picture, and the club pays the carver and the printer.
- **Edition:** Small private runs, often fewer than 100 sheets.

## Inks

- **Strategy:** Water-based pigment in 4–12 passes. Metal dust and shell white go on in a binder, and the black is burnished.
- **Ink count min:** 4
- **Ink count max:** 12
- **Overprint:** transparent

**Colours**

| Name | Hex | Role |
|---|---|---|
| Indigo | `#2F4A7C` | ground and key tones |
| Mineral green | `#5F8A6B` | foliage |
| Vermilion | `#D4553C` | accent |
| Gold dust | `#C9A24A` | metallic highlights |
| Silver or mica | `#C8CCD0` | water and moon |

## Tone and screen

- **Method:** solid
- **Ruling lpi:** 0
- **Rule:** Make a tone with a flat field, a wiped gradation or a metal dust. The style has no hatching and no dot.

## Registration

- **Tolerance mm:** 0.3
- **Rule:** The edges are tight: keep each colour within 0.3 mm of the key line, because the patrons pay for that care.

## Stock

- **Stock:** Thick, high-grade washi (hosho), often with a smooth, close surface.
- **Weight gsm min:** 90
- **Weight gsm max:** 160
- **Ground:** #F2E9D3
- **Finish:** Smooth, with a faint shine where the printer burnishes.

## Surface

- **Impression:** Deep. The bare blocks raise the paper by 0.2–0.5 mm in feathers, petals and patterns.
- **Sheen:** Metal dust glitters, burnished black shines, and the rest is matt.
- **Texture:** Fine, dense and smooth, with a raised line that the light shows.

## Process marks

- **Marks:** embossing (karazuri) · metal dust and shell white (gofun) · burnished black areas · calligraphy verse beside the image · small square or oblong format

## Prompt primer

- **Positive:** Japanese surimono print · embossed paper relief · gold and silver metallic dust · small square woodblock · poem calligraphy beside the image · fine mineral pigment · burnished black · still life of fans and peonies
- **Negative:** bold cheap colour · halftone · photograph · comic outline · plain matt flat fill

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

- **Kyoka poetry societies of Edo** (collective, Edo (Tokyo), Japan, ?–now), gathered the style. The comic-verse clubs of Edo. They paid artists and printers for surimono, small fine prints that carried a verse as a New Year card or a notice.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Key ink (`key_ink`) | #2F4A7C | #2F4A7C, #2B2B2E, #4A3F6B | inks |
| Paper colour (`paper_colour`) | #F2E9D3 | #F2E9D3, #F5EEDD, #EDE1C6 | substrate |
| Ink count (`ink_count`) | 7 | 4–12 | inks, registration |
| Screen ruling (`screen_ruling`) | 0 | 0–0 lines per inch | screening |
| Misregistration (`misregistration`) | 0.3 | 0–0.8 mm | registration |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more public and commercial**: move toward [`nishiki-e-polychrome-woodblock`](../nishiki-e-polychrome-woodblock/SKILL.md) (Nishiki-e multi-block colour woodblock print). Enlarge the sheet to a standard print, remove the metal dust and the emboss, and use flat colour with bokashi.
- If the user asks for **more modern**: move toward [`shin-hanga-print`](../shin-hanga-print/SKILL.md) (Shin-hanga new print). Keep the fine cut. Replace the verse and the still life with a landscape in tonal blocks.

- **Came from (go here for a more orthodox version):** [`nishiki-e-polychrome-woodblock`](../nishiki-e-polychrome-woodblock/SKILL.md)
- **Nearest by vector profile:** [`nishiki-e-polychrome-woodblock`](../nishiki-e-polychrome-woodblock/SKILL.md), [`linocut-print`](../linocut-print/SKILL.md), [`pochoir-plate`](../pochoir-plate/SKILL.md)

## Emotional target

The pleasure of a private gift: the viewer feels that the maker and the patron are friends, and that a small, fine thing is for the few.

**Keywords:** refined, witty, luxurious, intimate, precise · **Brand archetypes:** lover, creator

## Canonical evidence (open licence)

Each item below has an open licence or is in the public domain, so you may show it as a reference.

- [Agate (Meno seki), surimono](https://commons.wikimedia.org/wiki/File:Agate_(Men%C5%8D_seki)_._Surimono_by_Katsushika_Hokusai_(CBL_J_2174).jpg) (Katsushika Hokusai, 1822): image, Public domain. Wikimedia Commons (Chester Beatty Library)
- [Five cranes on a spit of sand, surimono](https://commons.wikimedia.org/wiki/File:Five_cranes_on_a_spit_of_sand._Surimono_by_Kubo_Shunman_(CBL_J_2284).jpg) (Kubo Shunman, 1800): image, Public domain. Wikimedia Commons (Chester Beatty Library)
- [Basket of Peonies](https://clevelandart.org/art/1943.5) (Katsushika Hokusai, 1810): image, CC0. Cleveland Museum of Art Open Access

## Sources

- [Wikipedia: Surimono](https://en.wikipedia.org/wiki/Surimono)
- [Wikimedia Commons: Category Surimono](https://commons.wikimedia.org/wiki/Category:Surimono)

---

Generated from [`data/print/styles/surimono-print.json`](../../data/print/styles/surimono-print.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
