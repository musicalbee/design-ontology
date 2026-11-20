---
name: ravi-varma-oleograph
description: "Apply the Ravi Varma oleograph style (c.1894–1960) when specifying, prompting or art-directing a printed piece or its look on screen: a poster, a plate, a book page, a zine, a label or a print-look illustration. Load when the user asks for: oleograph, indian calendar art, bazaar god poster, ravi varma print, hindu deity print, shrine picture."
domain: print
era: industrial-press
triggers:
  - "oleograph"
  - "indian calendar art"
  - "bazaar god poster"
  - "ravi varma print"
  - "hindu deity print"
  - "shrine picture"
  - "vintage indian lithograph"
  - "devotional chromolithograph"
vector_profile:
  tone_method: 4
  ink_layering: 5
  registration_play: 2
  surface_relief: 1
  hand_trace: 3
---

# Ravi Varma oleograph

> A lithograph in many colours can copy the smooth oil painting of a god and put it in every home for a few annas.

A god picture printed by stone lithography in many colours, for the home shrine and the shop wall. The oil-like gloss, the saturated colour and the smooth blend copy the paintings of Raja Ravi Varma.

**Period:** c.1894–1960 · **Era:** Industrial press · **Domain:** Print · **Also called:** Oleograph, Calendar art, Bazaar god print, Ravi Varma Press print

## When to load this skill

Load it when the user asks for: "oleograph", "indian calendar art", "bazaar god poster", "ravi varma print", "hindu deity print", "shrine picture", "vintage indian lithograph", "devotional chromolithograph".

Good for: packaging for tea and sweets, festival posters, heritage book covers, retro Indian shop signage.

Do not use it when:
- The subject is not a devotional or a narrative scene.
- The image needs a rough, hand-cut folk line.

## System directives

When specifying, prompting or art-directing a printed piece or its look on screen: a poster, a plate, a book page, a zine, a label or a print-look illustration in Ravi Varma oleograph, you MUST:

1. Copy a painted original: smooth modelling, a soft light and a figure in the centre.
2. Print 6–12 stones or plates, one for each colour, in transparent inks that blend.
3. Use vermilion, ultramarine, gold yellow and a warm flesh tone as the main inks.
4. Draw a halo, a crown and jewels with a gold-yellow ink and a thin dark line.
5. Put a plain title in Devanagari or English in a strip at the foot of the sheet.
6. Finish the sheet with an oil varnish for a deep gloss.
7. Keep the register within 0.5 mm so that the face and the eyes stay sharp.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** A flat matt colour with no blend.
- **NEVER:** A halftone dot that shows at reading distance.
- **NEVER:** Rough or crude outline of the woodcut kind.
- **NEVER:** A pale pastel palette without a strong red and blue.
- **NEVER:** A sketch line with no painted modelling.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Tone method | `■■■■□` 4/5 | solid ink, no tone | fine screen or continuous tone |
| Ink layering | `■■■■■` 5/5 | one ink | many overprinted inks |
| Registration play | `■■□□□` 2/5 | exact register | visible misregister as a feature |
| Surface relief | `■□□□□` 1/5 | flat, ink on the surface | deep bite or emboss in the sheet |
| Hand trace | `■■■□□` 3/5 | uniform machine output | each sheet differs by hand |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Process

- **Family:** planographic
- **Matrix:** Limestone, later grained zinc or aluminium plates, one for each colour.
- **Press:** A German-made flatbed lithographic press, then an oil varnish on the printed sheet.
- **Image making:** A craftsman draws each colour on its stone with crayon and tusche, working from a painted original.
- **Edition:** Thousands to hundreds of thousands of sheets; the sheets match closely.

## Inks

- **Strategy:** Six to twelve transparent inks that overprint and blend, with a gold yellow for ornament.
- **Ink count min:** 6
- **Ink count max:** 12
- **Overprint:** transparent

**Colours**

| Name | Hex | Role |
|---|---|---|
| Deep brown-black | `#2A1E1A` | the key stone: outline, hair and eyes |
| Vermilion | `#C8301E` | robes, borders and the mark on the brow |
| Ultramarine | `#2B3E8F` | the skin of Krishna and Vishnu, and the sky |
| Gold yellow | `#E4B238` | ornament and halo |
| Flesh ochre | `#D9A27A` | skin |

## Tone and screen

- **Method:** grain
- **Ruling lpi:** 100
- **Rule:** Make the smooth blend with a fine crayon grain on the stone, at about 100 grains an inch, with no visible dot.

## Registration

- **Tolerance mm:** 0.4
- **Rule:** Each stone registers to pins; the shift stays at 0.2–0.6 mm and shows as a light rim round the face.

## Stock

- **Stock:** A smooth, coated or glazed paper, made for colour work and varnished after printing.
- **Weight gsm min:** 100
- **Weight gsm max:** 160
- **Ground:** #EFE4C8
- **Finish:** Coated and glazed, with an oil varnish on the face.

## Surface

- **Impression:** No bite: the ink lies on the surface of the coated sheet.
- **Sheen:** A deep oil gloss from the varnish, bright on the gold and the red.
- **Texture:** A smooth blend with a faint stone grain in the shadows.

## Process marks

- **Marks:** glossy oil varnish · soft stone grain · title strip at the foot · light rim at colour edges · yellowed varnish with age · crazing of the varnish

## Prompt primer

- **Positive:** Indian oleograph god print · saturated vermilion and ultramarine · glossy varnished lithograph · devotional calendar art · gold ornament and halo · title strip at the foot · smooth painted blend · yellowed shrine print
- **Negative:** halftone dots · matt finish · flat vector · pencil sketch · muted pastel

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Lithography (process)

A print from a flat stone or plate on which a greasy drawing takes ink and water repels it; the artist draws as on paper. Origin: print, Munich, c. 1796.

- Draw on the stone with a greasy crayon or a tusche wash; the drawing takes ink and the rest stays wet.
- Pull the print in a press at a run of 20 to 200 copies for an artist print, or more for a poster.
- Use one stone for each colour; 3 to 5 stones give a poster.
- Keep the soft crayon grain and the dark, velvet black.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **Ravi Varma Press** (publisher, Mumbai and Lonavala, India, 1894–now), made the style. A lithographic press that Raja Ravi Varma founded. It printed oleographs of his paintings of gods and legends for a mass market.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Key ink (`key_ink`) | #2A1E1A | #2A1E1A, #1B1B3A | inks |
| Paper colour (`paper_colour`) | #EFE4C8 | #EFE4C8, #F6EEDA | substrate |
| Ink count (`ink_count`) | 8 | 6–12 | inks, registration |
| Screen ruling (`screen_ruling`) | 100 | 60–140 lines per inch | screening |
| Misregistration (`misregistration`) | 0.4 | 0–1 mm | registration |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **rougher and folk**: move toward [`battala-woodcut`](../battala-woodcut/SKILL.md) (Battala woodcut). Replace the blend with a thick black outline and flat hand-applied colour on cheap country paper.
- If the user asks for **more European**: move toward [`chromolithograph-poster`](../chromolithograph-poster/SKILL.md) (Chromolithograph poster). Use a Paris poster layout with a large title and a lighter, more decorative figure.

- **Came from (go here for a more orthodox version):** [`chromolithograph-poster`](../chromolithograph-poster/SKILL.md)
- **Nearest by vector profile:** [`yuefenpai-calendar-poster`](../yuefenpai-calendar-poster/SKILL.md), [`chromolithograph-poster`](../chromolithograph-poster/SKILL.md), [`shin-hanga-print`](../shin-hanga-print/SKILL.md)

## Emotional target

Warmth and devotion: the viewer sees a bright shrine picture, rich and a little old-fashioned.

**Keywords:** devotional, glossy, saturated, nostalgic, ornate · **Brand archetypes:** caregiver, ruler, innocent

## Canonical evidence (open licence)

Each item below has an open licence or is in the public domain, so you may show it as a reference.

- [Tirumala Tirupati Mahakshetram, print from the Ravi Varma Press](https://commons.wikimedia.org/wiki/File:%22Tirumala_Tirupati_Mahakshetram,%22_a_religious_print_about_the_site_from_the_Ravi_Varma_Press,_c.1910%27s.jpg) (Ravi Varma Press, 1910): image, Public domain. Wikimedia Commons
- [Ravi Varma Press Kali](https://commons.wikimedia.org/wiki/File:Ravi_Varma_Press_Kali.jpg) (Ravi Varma Press, 1910): image, Public domain. Wikimedia Commons
- [Vintage Bhim oleograph litho, Ravi Varma Press](https://commons.wikimedia.org/wiki/File:Vintage_Bhim_oleograph_litho_Ravi_Varma_Press_B.jpg) (Ravi Varma Press, 1910): image, Public domain. Wikimedia Commons

## Sources

- [Raja Ravi Varma (Wikipedia)](https://en.wikipedia.org/wiki/Raja_Ravi_Varma)
- [Commons category: Ravi Varma Press](https://commons.wikimedia.org/wiki/Category:Ravi_Varma_Press)

---

Generated from [`data/print/styles/ravi-varma-oleograph.json`](../../data/print/styles/ravi-varma-oleograph.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
