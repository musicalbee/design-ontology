---
name: photogravure-print
description: "Apply the Photogravure style (1878–1930) when specifying, prompting or art-directing a printed piece or its look on screen: a poster, a plate, a book page, a zine, a label or a print-look illustration. Load when the user asks for: photogravure, camera work plate, stieglitz print, pictorialist print, continuous tone intaglio, japan tissue photograph."
domain: print
era: industrial-press
triggers:
  - "photogravure"
  - "camera work plate"
  - "stieglitz print"
  - "pictorialist print"
  - "continuous tone intaglio"
  - "japan tissue photograph"
  - "velvet black photograph"
  - "heliogravure"
vector_profile:
  tone_method: 5
  ink_layering: 1
  registration_play: 1
  surface_relief: 3
  hand_trace: 2
---

# Photogravure

> A photograph etched into copper through an aquatint grain prints as continuous tone in a deep ink. The photograph then reads as an original print.

A carbon-tissue positive is transferred to a copper plate, which is etched through a dusted aquatint grain. The plate prints continuous photographic tone as deep, rich ink on thin tissue, with no visible screen.

**Period:** 1878–1930 · **Era:** Industrial press · **Domain:** Print · **Also called:** Heliogravure (French), Photogravur (German), Klic process

## When to load this skill

Load it when the user asks for: "photogravure", "camera work plate", "stieglitz print", "pictorialist print", "continuous tone intaglio", "japan tissue photograph", "velvet black photograph", "heliogravure".

Good for: photography portfolios and monographs, fine art catalogues, limited-edition photo prints, archive and museum reproductions.

Do not use it when:
- The image needs bright colour.
- The design needs a sharp, high-contrast digital photo.

## System directives

When specifying, prompting or art-directing a printed piece or its look on screen: a poster, a plate, a book page, a zine, a label or a print-look illustration in Photogravure, you MUST:

1. Expose a carbon tissue under a positive, transfer it to a copper plate and etch through 3–5 iron-chloride baths.
2. Etch the plate through a dusted aquatint grain, so that the tone shows no dots.
3. Print in one warm black or brown-black, wiped by hand.
4. Print on thin Japan tissue or laid paper, and keep the plate mark.
5. Keep the full tone scale: a deep velvet black, soft mid-tones and a clean light.
6. Mount the tissue on a larger sheet, with a margin of 20–40 mm.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Visible halftone dots.
- **NEVER:** Glossy photographic paper.
- **NEVER:** Saturated colour.
- **NEVER:** Sharp, flat digital contrast.
- **NEVER:** A hard, even line.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Tone method | `■■■■■` 5/5 | solid ink, no tone | fine screen or continuous tone |
| Ink layering | `■□□□□` 1/5 | one ink | many overprinted inks |
| Registration play | `■□□□□` 1/5 | exact register | visible misregister as a feature |
| Surface relief | `■■■□□` 3/5 | flat, ink on the surface | deep bite or emboss in the sheet |
| Hand trace | `■■□□□` 2/5 | uniform machine output | each sheet differs by hand |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Process

- **Family:** intaglio
- **Matrix:** Copper plate with resist and aquatint grain
- **Press:** Rolling-press, hand-inked
- **Image making:** Carbon tissue exposed under a positive, transferred, developed, etched through several iron-chloride baths
- **Edition:** Hundreds, hand-pulled

## Inks

- **Strategy:** One warm black or brown-black intaglio ink, wiped by hand so that each sheet differs a little.
- **Ink count min:** 1
- **Ink count max:** 2
- **Overprint:** transparent

**Colours**

| Name | Hex | Role |
|---|---|---|
| Warm black | `#2B2724` | plate ink |
| Brown-black | `#3A2F26` | alternate ink |

## Tone and screen

- **Method:** grain
- **Ruling lpi:** 150
- **Rule:** Make the continuous tone through a dusted aquatint grain of about 150 grains an inch, which shows no regular dot.

## Registration

- **Tolerance mm:** 0
- **Rule:** One plate prints the image; a second plate can add a tone, with a shift of 0.3 mm.

## Stock

- **Stock:** Japan tissue or thin laid paper, cream to buff.
- **Weight gsm min:** 40
- **Weight gsm max:** 100
- **Ground:** #DDD1B6
- **Finish:** Thin and smooth, often chine-collé on a heavier mount.

## Surface

- **Impression:** A plate mark of 3–5 mm; the ink in the deep tones stands in light relief.
- **Sheen:** Matt, with a rich depth in the darks.
- **Texture:** A fine, random grain in the tones, and no dots.

## Process marks

- **Marks:** fine random aquatint grain, no dots · deep velvet blacks · plate mark · tissue tone · hand-wiped edges

## Prompt primer

- **Positive:** photogravure · soft-focus city street in mist · continuous tone ink · deep velvet black · pictorialist print · Japan tissue mount · aquatint grain not dots · plate mark
- **Negative:** halftone dots · sharp digital · saturated colour · glossy photo paper · vector

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Photogravure (process, invented here)

A way to etch a photograph into a copper plate. The print has the full range of tones of the photograph, in a rich intaglio ink. Origin: print, England, 1852.

- Expose a gelatin tissue under a positive; the light hardens the gelatin in proportion to its tone.
- Transfer the tissue to a copper plate that has an aquatint grain of about 150 to the inch.
- Etch the plate in baths of ferric chloride; the soft gelatin lets the acid bite deeper.
- Print on damp paper with a copper-plate press, in a warm black or brown ink.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **Camera Work** (magazine, New York, 1903–1917), published the style. A quarterly of photography that Alfred Stieglitz edited and published, with fine photogravure plates. It argued for photography as a fine art.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Key ink (`key_ink`) | #2B2724 | #2B2724, #3A2F26, #1F2A36 | inks |
| Paper colour (`paper_colour`) | #DDD1B6 | #DDD1B6, #E6DCC4, #D2C5A6 | substrate |
| Ink count (`ink_count`) | 1 | 1–2 | inks, registration |
| Screen ruling (`screen_ruling`) | 150 | 100–220 lines per inch | screening |
| Misregistration (`misregistration`) | 0 | 0–0.3 mm | registration |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more dramatic**: move toward [`aquatint-print`](../aquatint-print/SKILL.md) (Aquatint). Replace the photographic tone with stepped aquatint tones and hard stopped-out edges.
- If the user asks for **more mechanical**: move toward [`collotype-print`](../collotype-print/SKILL.md) (Collotype). Print from a gelatin plate on matt paper, with a fine reticulation grain and no plate mark.

- **Came from (go here for a more orthodox version):** [`aquatint-print`](../aquatint-print/SKILL.md)
- **Kin in another domain:** [`pictorialism`](../pictorialism/SKILL.md)
- **Nearest by vector profile:** [`mezzotint-print`](../mezzotint-print/SKILL.md), [`aquatint-print`](../aquatint-print/SKILL.md), [`engraving-print`](../engraving-print/SKILL.md)

## Emotional target

Hushed, artful reverence: the viewer sees a photograph that has the depth and weight of a print.

**Keywords:** hushed, artful, velvet, reverent, tonal · **Brand archetypes:** sage, lover, creator

## Canonical evidence (open licence)

Each item below has an open licence or is in the public domain, so you may show it as a reference.

- [Girl, Camera Work plate, October 1905](https://commons.wikimedia.org/wiki/File:Girl_by_Alfred_Stieglitz,_Camera_Work,_October_1905,_12-15_(5711529088).jpg) (Alfred Stieglitz, 1905): image, Public domain. Museum of Photographic Arts via Wikimedia Commons. Published in Camera Work in 1905, so it is in the public domain in the US.
- [Winter, Fifth Avenue, Camera Work plate (negative 1892)](https://commons.wikimedia.org/wiki/File:Alfred_Stieglitz_-_Camera_Work-_Winter_-_Fifth_Avenue_-_1995.199.12.b_-_Cleveland_Museum_of_Art.jpg) (Alfred Stieglitz, 1892): image, Public domain. Cleveland Museum of Art, via Wikimedia Commons
- [The Terminal, Camera Work plate (negative 1892)](https://commons.wikimedia.org/wiki/File:Alfred_Stieglitz_-_Camera_Work-_The_Terminal_-_1995.199.36.o_-_Cleveland_Museum_of_Art.tif) (Alfred Stieglitz, 1892): image, Public domain. Cleveland Museum of Art, via Wikimedia Commons

## Sources

- [Wikipedia: Photogravure](https://en.wikipedia.org/wiki/Photogravure)
- [Wikipedia: Karel Klíč](https://en.wikipedia.org/wiki/Karel_Kl%C3%AD%C4%8D)

---

Generated from [`data/print/styles/photogravure-print.json`](../../data/print/styles/photogravure-print.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
