---
name: collotype-print
description: "Apply the Collotype style (1855–1960) when specifying, prompting or art-directing a printed piece or its look on screen: a poster, a plate, a book page, a zine, a label or a print-look illustration. Load when the user asks for: collotype, lichtdruck, albertype, gelatin plate print, continuous tone print, muybridge plate."
domain: print
era: industrial-press
triggers:
  - "collotype"
  - "lichtdruck"
  - "albertype"
  - "gelatin plate print"
  - "continuous tone print"
  - "muybridge plate"
  - "reticulation grain"
  - "phototypie"
vector_profile:
  tone_method: 5
  ink_layering: 2
  registration_play: 2
  surface_relief: 1
  hand_trace: 1
---

# Collotype

> A light-hardened gelatin film that takes ink in proportion to tone prints a photograph with true continuous tone and no dot screen.

A glass or metal plate is coated with light-hardened gelatin, which swells with water to take ink in proportion to tone. The print has continuous tone with only a fine reticulation, and is often a warm brown or black on matt paper.

**Period:** 1855–1960 · **Era:** Industrial press · **Domain:** Print · **Also called:** Lichtdruck (German), phototypie (French), Albertype

## When to load this skill

Load it when the user asks for: "collotype", "lichtdruck", "albertype", "gelatin plate print", "continuous tone print", "muybridge plate", "reticulation grain", "phototypie".

Good for: archive and museum catalogues, scientific and travel books, limited-edition photographic portfolios, period postcards and plates.

Do not use it when:
- The design needs a high-contrast digital photo.
- The image needs bright colour.

## System directives

When specifying, prompting or art-directing a printed piece or its look on screen: a poster, a plate, a book page, a zine, a label or a print-look illustration in Collotype, you MUST:

1. Expose a gelatin film under a negative, so that the hardened parts take ink and the soft parts take water.
2. Print the film on a flat-bed press, damped and rolled up with ink before each sheet.
3. Show the tone as a fine, random reticulation grain, finer than a halftone dot.
4. Print in a brown-black or black monotone on matt paper; use more plates for a colour print.
5. Keep the edition under 2,000 sheets; the gelatin wears and the black weakens.
6. Print the picture with no plate mark and a clean margin.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** A regular halftone dot.
- **NEVER:** Glossy coated paper.
- **NEVER:** Saturated process colour.
- **NEVER:** A hard vector edge.
- **NEVER:** A plate mark or an emboss.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Tone method | `■■■■■` 5/5 | solid ink, no tone | fine screen or continuous tone |
| Ink layering | `■■□□□` 2/5 | one ink | many overprinted inks |
| Registration play | `■■□□□` 2/5 | exact register | visible misregister as a feature |
| Surface relief | `■□□□□` 1/5 | flat, ink on the surface | deep bite or emboss in the sheet |
| Hand trace | `■□□□□` 1/5 | uniform machine output | each sheet differs by hand |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Process

- **Family:** planographic
- **Matrix:** Gelatin-coated glass or zinc plate
- **Press:** Flat-bed lithographic or special collotype press
- **Image making:** Gelatin exposed under a negative; wet; rolled up with ink
- **Edition:** Under 2,000 (the gelatin wears)

## Inks

- **Strategy:** One black or brown-black ink; a colour print adds up to three transparent inks, each from its own gelatin plate.
- **Ink count min:** 1
- **Ink count max:** 4
- **Overprint:** transparent

**Colours**

| Name | Hex | Role |
|---|---|---|
| Collotype black | `#2B2724` | key ink |
| Brown-black | `#4A3A2D` | alternate monotone |

## Tone and screen

- **Method:** grain
- **Ruling lpi:** 200
- **Rule:** Make the tone from the natural reticulation of the gelatin, which is finer than a 200 lines an inch screen.

## Registration

- **Tolerance mm:** 0.3
- **Rule:** Plates for a colour print register within 0.3 mm; a single-ink print needs no register.

## Stock

- **Stock:** Matt coated or uncoated art paper, cream.
- **Weight gsm min:** 100
- **Weight gsm max:** 170
- **Ground:** #E5DDC8
- **Finish:** Matt, with an even surface that takes a thin ink film.

## Surface

- **Impression:** None; the ink lies flat on the sheet.
- **Sheen:** Matt, a little weak in the black.
- **Texture:** A fine, irregular reticulation grain, and soft, continuous mid-tones.

## Process marks

- **Marks:** fine irregular reticulation grain · soft continuous mid-tones · no plate mark · slightly weak black

## Prompt primer

- **Positive:** collotype print · continuous tone gelatin print · fine reticulation grain · matt paper · early photographic plate · sepia brown monotone · art book reproduction plate · no halftone dots
- **Negative:** halftone dots · glossy · saturated colour · vector · woodcut

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Collotype (process, invented here)

A way to print a photograph from a plate of hardened gelatin. The print has continuous tone, with a fine reticulation and no screen. Origin: print, Paris, 1855.

- Coat a glass plate with gelatin and expose it under a negative; the gelatin hardens in proportion to the light.
- Wet the plate; the soft gelatin takes water and rejects ink, and the hard gelatin takes ink.
- Print a run of up to about 1,000 sheets, because the gelatin wears.
- Print in one black or brown, or in a set of three to six plates for colour.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **University of Pennsylvania** (school, Philadelphia, 1740–now), published the style. The university that backed the Animal Locomotion study of Eadweard Muybridge. It published the 781 plates in 1887, printed as collotypes.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Key ink (`key_ink`) | #2B2724 | #2B2724, #4A3A2D, #1F2A36 | inks |
| Paper colour (`paper_colour`) | #E5DDC8 | #E5DDC8, #EDE6D2, #D9CFB4 | substrate |
| Ink count (`ink_count`) | 1 | 1–4 | inks, registration |
| Screen ruling (`screen_ruling`) | 200 | 150–280 lines per inch | screening |
| Misregistration (`misregistration`) | 0.3 | 0–0.6 mm | registration |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **richer black**: move toward [`photogravure-print`](../photogravure-print/SKILL.md) (Photogravure). Print the photograph from an etched copper plate with an aquatint grain, and add a plate mark.
- If the user asks for **more colour**: move toward [`chromolithograph-poster`](../chromolithograph-poster/SKILL.md) (Chromolithograph poster). Move to several lithographic stones with flat colour and a key plate.

- **Mixes well with:** [`chromolithograph-poster`](../chromolithograph-poster/SKILL.md)
- **Nearest by vector profile:** [`constructivist-photomontage-poster`](../constructivist-photomontage-poster/SKILL.md), [`photogravure-print`](../photogravure-print/SKILL.md), [`yuefenpai-calendar-poster`](../yuefenpai-calendar-poster/SKILL.md)

## Emotional target

Quiet, scientific detail: the viewer sees a photograph as a record, in warm and soft tone.

**Keywords:** continuous, archival, soft, scientific, matt · **Brand archetypes:** sage, explorer

## Canonical evidence (open licence)

Each item below has an open licence or is in the public domain, so you may show it as a reference.

- [Cockatoo flying, Animal Locomotion plate 758](https://commons.wikimedia.org/wiki/File:Eadweard_Muybridge,_Cockatoo_flying,_1887,_Collotype_process,_Animal_Locomotion_collection,_plate_758.gif) (Eadweard Muybridge, 1887): image, Public domain. Wikimedia Commons
- [A naked man walking, collotype after Muybridge](https://commons.wikimedia.org/wiki/File:A_naked_man_walking._Collotype_after_Muybridge,_1887._Wellcome_L0075728.jpg) (Eadweard Muybridge, 1887): image, CC BY 4.0. Wellcome Collection, via Wikimedia Commons

## Sources

- [Wikipedia: Collotype](https://en.wikipedia.org/wiki/Collotype)
- [Wikipedia: Eadweard Muybridge](https://en.wikipedia.org/wiki/Eadweard_Muybridge)

---

Generated from [`data/print/styles/collotype-print.json`](../../data/print/styles/collotype-print.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
