---
name: nianhua-new-year-print
description: "Apply the Chinese nianhua New Year woodblock print style (c.1600–1950s) when specifying, prompting or art-directing a printed piece or its look on screen: a poster, a plate, a book page, a zine, a label or a print-look illustration. Load when the user asks for: nianhua, chinese new year print, yangliuqing, door god woodblock, taohuawu print, chinese folk woodblock."
domain: print
era: hand-press
triggers:
  - "nianhua"
  - "chinese new year print"
  - "yangliuqing"
  - "door god woodblock"
  - "taohuawu print"
  - "chinese folk woodblock"
  - "lunar new year folk art"
vector_profile:
  tone_method: 1
  ink_layering: 2
  registration_play: 4
  surface_relief: 1
  hand_trace: 4
---

# Chinese nianhua New Year woodblock print

> A New Year picture works as a charm for the house, so it must be bright, full of good signs and cheap enough for every door.

Workshops print a key-block outline and fill it with colour blocks, and often add hand-painted colour. Yangliuqing sheets end with hand colour and painted faces. Other towns print bold and flat.

**Period:** c.1600–1950s · **Era:** Hand press · **Domain:** Print · **Also called:** Nianhua, 年画, Yangliuqing New Year picture, 杨柳青年画, Taohuawu, 桃花坞, Yangjiabu, 杨家埠

## When to load this skill

Load it when the user asks for: "nianhua", "chinese new year print", "yangliuqing", "door god woodblock", "taohuawu print", "chinese folk woodblock", "lunar new year folk art".

Good for: Lunar New Year cards, packs and posters, packs for Chinese food and tea, folk-art editorial images, festival and shop windows.

Do not use it when:
- The brief needs a quiet, pale or literati colour set.
- The picture needs fine gradation or a photographic tone.

## System directives

When specifying, prompting or art-directing a printed piece or its look on screen: a poster, a plate, a book page, a zine, a label or a print-look illustration in Chinese nianhua New Year woodblock print, you MUST:

1. Print a bold black key outline from a pear or jujube block. Keep the line 1–2 mm wide.
2. Use 3–8 colour blocks in vermilion, green, yellow and a late aniline magenta.
3. Fill the sheet with signs of luck: a door god, a fat child, a carp, a peony, a coin.
4. In Yangliuqing work, paint the faces and the hands over the print, with a fine brush and a white powder ground.
5. Add gold or lead-white on a robe or a flower, by hand, where the print needs a bright point.
6. Allow the colour to shift 1–2 mm from the outline. Keep the rough register.
7. Print thousands of sheets before the New Year, and paste them on doors and walls.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** A soft gradient or a pale, literati colour set.
- **NEVER:** Western perspective and cast shadow.
- **NEVER:** Halftone dots or a photograph.
- **NEVER:** A clean vector line with no cut mark.
- **NEVER:** A quiet, empty composition with no sign of luck.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Tone method | `■□□□□` 1/5 | solid ink, no tone | fine screen or continuous tone |
| Ink layering | `■■□□□` 2/5 | one ink | many overprinted inks |
| Registration play | `■■■■□` 4/5 | exact register | visible misregister as a feature |
| Surface relief | `■□□□□` 1/5 | flat, ink on the surface | deep bite or emboss in the sheet |
| Hand trace | `■■■■□` 4/5 | uniform machine output | each sheet differs by hand |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Process

- **Family:** relief
- **Matrix:** Blocks of pear or jujube wood, one for the outline and 3–8 for the colour.
- **Press:** No press. A printer rubs the back of the sheet with a pad by hand. Some towns add hand colour after the print.
- **Image making:** Workshops split the work between the designer, the carver, the printer and the colourist, and hire out hand colour to village families.
- **Edition:** Thousands of sheets for each design, sold before the New Year.

## Inks

- **Strategy:** Water-based colour and ink. The outline prints first, then the colour blocks, and in some towns a brush adds colour over the print.
- **Ink count min:** 3
- **Ink count max:** 8
- **Overprint:** opaque

**Colours**

| Name | Hex | Role |
|---|---|---|
| Black | `#202020` | key outline |
| Vermilion | `#C8362B` | dominant red |
| Mineral green | `#4C8B5B` | robes |
| Yellow | `#E9B93B` | accent |
| Aniline magenta | `#C73E7C` | late prints |

## Tone and screen

- **Method:** solid
- **Ruling lpi:** 0
- **Rule:** Make each tone a flat field of one colour, or a hand-painted tint. The style has no screen.

## Registration

- **Tolerance mm:** 1.5
- **Rule:** Allow 1–2 mm of shift between the colour blocks and the outline.

## Stock

- **Stock:** Cheap paper, with a white powder ground in some towns.
- **Weight gsm min:** 30
- **Weight gsm max:** 70
- **Ground:** #EFE2C0
- **Finish:** Unsized, with a thin, matt surface.

## Surface

- **Impression:** Light. The sheet is almost flat.
- **Sheen:** Matt, with a small shine from the gold and the lead-white by hand.
- **Texture:** Flat bright colour, hand-painted faces, and a rough paper fibre.

## Process marks

- **Marks:** hand-painted faces over the print · vivid vermilion · bold key lines · rough registration · gold and white by hand on robes

## Prompt primer

- **Positive:** Chinese nianhua New Year print · vermilion and green flat colour · hand-painted faces · door god woodblock · bold black key line · folk auspicious motifs · coarse registration · Yangliuqing style
- **Negative:** halftone · photographic · soft gradient · western perspective · clean vector

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

- **Yangliuqing nianhua workshops** (collective, Yangliuqing, Tianjin, China, ?–now), made the style. The workshops of Yangliuqing town. They split the work of carving, printing and colour. Families in more than 30 villages added hand colour to the prints, and the sheets went to Beijing by canal.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Key ink (`key_ink`) | #202020 | #202020, #2A2420, #3A2A24 | inks |
| Paper colour (`paper_colour`) | #EFE2C0 | #EFE2C0, #F3E8CC, #E8D9B4 | substrate |
| Ink count (`ink_count`) | 5 | 3–8 | inks, registration |
| Screen ruling (`screen_ruling`) | 0 | 0–0 lines per inch | screening |
| Misregistration (`misregistration`) | 1.5 | 0.5–3 mm | registration |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more delicate**: move toward [`ten-bamboo-studio-polychrome`](../ten-bamboo-studio-polychrome/SKILL.md) (Ten Bamboo Studio polychrome block print). Thin the line, use pale colour with a graded wash, and add a dry-block emboss on the petals.
- If the user asks for **more Vietnamese and plain**: move toward [`dong-ho-folk-woodblock`](../dong-ho-folk-woodblock/SKILL.md) (Dong Ho folk woodblock painting). Reduce the colours to four plant colours on a shell-powder ground, and drop the hand colour.

- **Came from (go here for a more orthodox version):** [`woodcut-relief-print`](../woodcut-relief-print/SKILL.md)
- **Nearest by vector profile:** [`chicha-poster`](../chicha-poster/SKILL.md), [`dong-ho-folk-woodblock`](../dong-ho-folk-woodblock/SKILL.md), [`rosta-window-stencil-poster`](../rosta-window-stencil-poster/SKILL.md)

## Emotional target

Loud, warm luck: the viewer feels a crowded, bright house at the New Year, with a charm on every door.

**Keywords:** festive, auspicious, bold, folk, joyful · **Brand archetypes:** everyman, jester

## Canonical evidence (open licence)

Each item below has an open licence or is in the public domain, so you may show it as a reference.

- [Nianhua woodblock prints: door gods and deities](https://commons.wikimedia.org/wiki/File:One_hundred_thirty-five_woodblock_prints_including_New_Year%27s_pictures_(nianhua),_door_gods,_historical_figures_and_Taoist_deities_MET_DP-17327-122.jpg) (Various): image, CC0. Wikimedia Commons (The Metropolitan Museum of Art, Open Access)
- [The Spirit of the Doors, colour woodblock nianhua](https://commons.wikimedia.org/wiki/File:1900s_Nianhua_The_Spirit_of_the_Doors_woodblock_print.jpg) (Unknown maker, 1900): image, Public domain. Wikimedia Commons (public domain, a scan; the date is c.1900)

## Sources

- [Wikipedia: Yangliuqing New Year pictures](https://en.wikipedia.org/wiki/Yangliuqing_New_Year_pictures)
- [Wikimedia Commons: Category Nianhua](https://commons.wikimedia.org/wiki/Category:Nianhua)

---

Generated from [`data/print/styles/nianhua-new-year-print.json`](../../data/print/styles/nianhua-new-year-print.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
