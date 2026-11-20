---
name: aquatint-print
description: "Apply the Aquatint style (1768–1900) when specifying, prompting or art-directing a printed piece or its look on screen: a poster, a plate, a book page, a zine, a label or a print-look illustration. Load when the user asks for: aquatint, rosin grain print, goya style print, wash tone etching, grey wash print, caprichos print."
domain: print
era: hand-press
triggers:
  - "aquatint"
  - "rosin grain print"
  - "goya style print"
  - "wash tone etching"
  - "grey wash print"
  - "caprichos print"
  - "soft grain intaglio"
  - "copper plate tone"
vector_profile:
  tone_method: 4
  ink_layering: 2
  registration_play: 1
  surface_relief: 3
  hand_trace: 3
---

# Aquatint

> A bitten grain of rosin gives a copper plate the soft tone of a wash. An etched line can then sit on a brush-like ground.

Rosin dust is melted onto a copper plate, and acid bites round each grain. The print has a soft tone like a wash. The artist controls the tone with varnish and a burnisher, so the print has a grey speckled grain.

**Period:** 1768–1900 · **Era:** Hand press · **Domain:** Print · **Also called:** aguatinta (Spanish), aquatinte (French)

## When to load this skill

Load it when the user asks for: "aquatint", "rosin grain print", "goya style print", "wash tone etching", "grey wash print", "caprichos print", "soft grain intaglio", "copper plate tone".

Good for: satirical or dark editorial illustration, topographic and architectural plates, fine art editions, album and book covers with a night mood.

Do not use it when:
- The image needs bright colour or a crisp graphic line.
- The design needs a long run with no loss of tone.

## System directives

When specifying, prompting or art-directing a printed piece or its look on screen: a poster, a plate, a book page, a zine, a label or a print-look illustration in Aquatint, you MUST:

1. Etch the contour first, then add the rosin ground and bite the tone areas in timed baths.
2. Make the tone in steps: stop out the lightest area first and bite the darkest area longest, with 3–6 steps in all.
3. Keep the grain visible as a speckle, about 100–150 grains an inch.
4. Lift the highlights with a burnisher or a scraper; do not paint them in.
5. Print in one warm black or sepia, and leave a plate mark round the image.
6. Keep the edge of each tone area hard where the stopping-out varnish stopped the acid.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** A smooth digital gradient with no grain.
- **NEVER:** Halftone dots.
- **NEVER:** Clean vector line work with no etched bite.
- **NEVER:** Bright process colour.
- **NEVER:** Heavy hatching that replaces the wash tone.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Tone method | `■■■■□` 4/5 | solid ink, no tone | fine screen or continuous tone |
| Ink layering | `■■□□□` 2/5 | one ink | many overprinted inks |
| Registration play | `■□□□□` 1/5 | exact register | visible misregister as a feature |
| Surface relief | `■■■□□` 3/5 | flat, ink on the surface | deep bite or emboss in the sheet |
| Hand trace | `■■■□□` 3/5 | uniform machine output | each sheet differs by hand |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Process

- **Family:** intaglio
- **Matrix:** Copper plate with rosin ground over etched line
- **Press:** Rolling-press (etching press) with felt blankets
- **Image making:** Line etched first; rosin dust fused; tones bitten in timed acid baths with stopping-out; burnishing and scraping lift lights
- **Edition:** Under 100 before the grain wears

## Inks

- **Strategy:** One warm black or sepia intaglio ink, wiped by hand; a second or third ink only in colour prints.
- **Ink count min:** 1
- **Ink count max:** 3
- **Overprint:** transparent

**Colours**

| Name | Hex | Role |
|---|---|---|
| Warm black | `#2A2622` | plate ink |
| Sepia | `#5B4636` | alternate monochrome |

## Tone and screen

- **Method:** grain
- **Ruling lpi:** 120
- **Rule:** Make each tone with a rosin grain of about 120 grains an inch; bite longer for a darker step.

## Registration

- **Tolerance mm:** 0
- **Rule:** One plate prints the image; a colour print needs a plate for each ink, and the paper can shift 0.5 mm between passes.

## Stock

- **Stock:** Dampened laid or wove paper, cream.
- **Weight gsm min:** 150
- **Weight gsm max:** 250
- **Ground:** #E4D8BC
- **Finish:** Soft, with some tooth, pressed into the plate.

## Surface

- **Impression:** A plate mark of 3–6 mm with a bevelled edge; the ink sits in the grain and stands a little above the paper.
- **Sheen:** Matt to semi-matt; the ink is rich where the tone is deep.
- **Texture:** A fine speckle in the tone areas, and a smooth line where the plate is etched.

## Process marks

- **Marks:** rosin-grain speckle in tone areas · plate mark · hard-edged stopped-out tone areas · burnished lights · foul bite pits

## Prompt primer

- **Positive:** aquatint print · rosin grain tone · soft grey wash · etched line with aquatint · copper plate mark · Goya style print · burnished highlights · cream laid paper
- **Negative:** halftone dots · smooth digital gradient · colour photograph · woodcut · vector

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Aquatint (process, invented here)

A way to bite a tone into a copper plate with acid through a ground of rosin dust. The print has a grain like a wash. Origin: print, Paris, 1768.

- Dust the plate with rosin and heat it, so that each grain sticks; use a grain of about 100 to 150 to the inch.
- Bite the plate in acid in timed baths; each longer bath gives a darker step.
- Stop out the light areas with varnish before each bath; this gives hard edges between the steps.
- Print with the plate wiped in one warm black or sepia; a plate mark of 3 mm to 6 mm shows round the image.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **Calcografía Nacional** (publisher, Madrid, 1789–now), published the style. The Spanish state print house in Madrid. It keeps the copper plates of Goya, with the plates of Los Caprichos, and it still prints from them.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Key ink (`key_ink`) | #2A2622 | #2A2622, #5B4636, #1F2A36 | inks |
| Paper colour (`paper_colour`) | #E4D8BC | #E4D8BC, #EBE2CC, #D9CAA6 | substrate |
| Ink count (`ink_count`) | 1 | 1–3 | inks, registration |
| Screen ruling (`screen_ruling`) | 120 | 80–160 lines per inch | screening |
| Misregistration (`misregistration`) | 0 | 0–0.5 mm | registration |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **sharper**: move toward [`etching-print`](../etching-print/SKILL.md) (Etching). Drop the tone ground, keep the etched line and add cross-hatching for the shadow.
- If the user asks for **more velvet**: move toward [`mezzotint-print`](../mezzotint-print/SKILL.md) (Mezzotint). Rock the whole plate so that the darks are deep, and scrape the lights.

- **Came from (go here for a more orthodox version):** [`etching-print`](../etching-print/SKILL.md)
- **Led to (go here for a newer version):** [`photogravure-print`](../photogravure-print/SKILL.md)
- **Mixes well with:** [`etching-print`](../etching-print/SKILL.md)
- **Nearest by vector profile:** [`engraving-print`](../engraving-print/SKILL.md), [`mezzotint-print`](../mezzotint-print/SKILL.md), [`photogravure-print`](../photogravure-print/SKILL.md)

## Emotional target

Sombre, soft drama: the viewer sees a grey brush wash, with the weight of a night scene or a ruin.

**Keywords:** sombre, soft, dramatic, atmospheric, grainy · **Brand archetypes:** sage, outlaw, creator

## Canonical evidence (open licence)

Each item below has an open licence or is in the public domain, so you may show it as a reference.

- [Los Caprichos, plate 1: Self-portrait of Goya](https://commons.wikimedia.org/wiki/File:Plate_1_from_%27Los_Caprichos%27-_Self-portrait_of_Goya_(Franco._Goya_e_Lucientes,_Pintor)_MET_DP816886.jpg) (Francisco Goya, 1799): image, CC0. The Met Open Access, via Wikimedia Commons
- [Los Caprichos, plate 28: Hush](https://commons.wikimedia.org/wiki/File:Plate_28_from_%27Los_Caprichos%27-_Hush_(Chiton.)_MET_DP816968.jpg) (Francisco Goya, 1799): image, CC0. The Met Open Access, via Wikimedia Commons
- [Los Caprichos, plate 70: Devout Profession](https://commons.wikimedia.org/wiki/File:Plate_70_from_%27Los_Caprichos%27-_Devout_Profession_(Devota_profesion.)_MET_DP832041.jpg) (Francisco Goya, 1799): image, CC0. The Met Open Access, via Wikimedia Commons

## Sources

- [Wikipedia: Aquatint](https://en.wikipedia.org/wiki/Aquatint)
- [Wikipedia: Francisco Goya](https://en.wikipedia.org/wiki/Francisco_Goya)

---

Generated from [`data/print/styles/aquatint-print.json`](../../data/print/styles/aquatint-print.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
