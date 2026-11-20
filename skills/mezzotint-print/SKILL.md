---
name: mezzotint-print
description: "Apply the Mezzotint style (1642–1850) when specifying, prompting or art-directing a printed piece or its look on screen: a poster, a plate, a book page, a zine, a label or a print-look illustration. Load when the user asks for: mezzotint, manière noire, dark tonal print, 18th-century portrait print, velvet black print, candlelit portrait print."
domain: print
era: hand-press
triggers:
  - "mezzotint"
  - "manière noire"
  - "dark tonal print"
  - "18th-century portrait print"
  - "velvet black print"
  - "candlelit portrait print"
vector_profile:
  tone_method: 5
  ink_layering: 1
  registration_play: 1
  surface_relief: 4
  hand_trace: 3
---

# Mezzotint

> If the plate starts black, the artist works from dark to light and gets a tone as soft as paint, with no line.

The plate is rocked with a toothed tool until it holds a full, velvet black; the engraver scrapes and burnishes the lights out of the dark. Ludwig von Siegen made the first in 1642; London engravers used it to reproduce portraits in oil.

**Period:** 1642–1850 · **Era:** Hand press · **Domain:** Print · **Also called:** Manière noire, Schabkunst, Black manner, English manner

## When to load this skill

Load it when the user asks for: "mezzotint", "manière noire", "dark tonal print", "18th-century portrait print", "velvet black print", "candlelit portrait print".

Good for: portraits and book covers, luxury and spirits labels, editorial images on night or mystery.

Do not use it when:
- The image needs line or a bright, high-key mood.
- The output prints on newsprint or on a coarse screen.

## System directives

When specifying, prompting or art-directing a printed piece or its look on screen: a poster, a plate, a book page, a zine, a label or a print-look illustration in Mezzotint, you MUST:

1. Start from a full black: rock the plate in 20–40 directions until every part holds ink.
2. Make each light by scraping and burnishing the grain flat; the more the scrape, the lighter the tone.
3. Model forms in soft, continuous tone; keep lines only for the finest details.
4. Set the subject against a deep, dark ground and bring the lights out of it.
5. Keep the darks velvet and slightly warm; avoid a pure white except at the highest lights.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** A hard outline round the forms.
- **NEVER:** Visible hatching or a halftone dot.
- **NEVER:** A white ground with dark forms on it.
- **NEVER:** Flat areas of colour.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Tone method | `■■■■■` 5/5 | solid ink, no tone | fine screen or continuous tone |
| Ink layering | `■□□□□` 1/5 | one ink | many overprinted inks |
| Registration play | `■□□□□` 1/5 | exact register | visible misregister as a feature |
| Surface relief | `■■■■□` 4/5 | flat, ink on the surface | deep bite or emboss in the sheet |
| Hand trace | `■■■□□` 3/5 | uniform machine output | each sheet differs by hand |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Process

- **Family:** intaglio
- **Matrix:** A copper plate, roughened all over with a curved, toothed rocker.
- **Press:** A roller press with felt blankets.
- **Image making:** The engraver rocks the plate, then scrapes and burnishes the lights, and proofs it many times.
- **Edition:** Only 50–100 good impressions; the soft grain wears quickly, so early proofs are prized.

## Inks

- **Strategy:** One warm black or brown-black ink; a few prints use colour inks put on the plate by hand (à la poupée).
- **Ink count min:** 1
- **Ink count max:** 3
- **Overprint:** opaque

**Colours**

| Name | Hex | Role |
|---|---|---|
| Velvet black | `#231C1A` | all tone |

## Tone and screen

- **Method:** grain
- **Ruling lpi:** 120
- **Rule:** Make the tone with the rocked grain at about 100–150 dots a inch; the scrape sets the tone.

## Registration

- **Tolerance mm:** 0
- **Rule:** One plate prints all the image; there is no register.

## Stock

- **Stock:** A soft laid or wove rag paper, dampened.
- **Weight gsm min:** 100
- **Weight gsm max:** 250
- **Ground:** #EEE6D6
- **Finish:** Soft wove with little sizing.

## Surface

- **Impression:** A plate mark and a soft, velvet ink film in the darks.
- **Sheen:** Deep, matt black with a slight bloom.
- **Texture:** A fine grain that the eye reads as continuous tone; under a lens it is a field of small pits.

## Process marks

- **Marks:** velvet black ground · scraped highlights · plate mark · a worn grain in late impressions · a lettered title below

## Prompt primer

- **Positive:** mezzotint · 18th-century mezzotint portrait · velvet black ground · soft tonal modelling · lights scraped out of darkness · plate mark · intaglio print · chiaroscuro
- **Negative:** lines · hatching · colour · white background · halftone dots · flat graphic

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Mezzotint (process, invented here)

An intaglio tone process: a rocker roughens the whole plate to a black, and the engraver scrapes and burnishes the lights. Origin: print, Amsterdam, 1642.

- Rock the plate in 20–40 directions with a curved, toothed rocker until it prints a full, even black.
- Scrape and burnish the grain flat where the image needs light; a full burnish prints white.
- Work from dark to light, and check the tone with proofs at each stage.
- Print only 50–100 good impressions; the soft grain wears quickly.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **Boydell print publishing** (publisher, London, 1746–now), published the style. John Boydell started as an engraver in London and became a large print publisher. His firm sold English engravings and mezzotints across Europe.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Key ink (`key_ink`) | #231C1A | #231C1A, #2E2338 | inks |
| Paper colour (`paper_colour`) | #EEE6D6 | #EEE6D6, #F3EEE3 | substrate |
| Ink count (`ink_count`) | 1 | 1–3 | inks, registration |
| Screen ruling (`screen_ruling`) | 120 | 90–160 lines per inch | screening |
| Misregistration (`misregistration`) | 0 | 0–0 mm | registration |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **with lines**: move toward [`engraving-print`](../engraving-print/SKILL.md) (Copper engraving). Build the tone from swelling burin lines on a white plate.
- If the user asks for **as a photograph**: move toward [`pictorialism`](../pictorialism/SKILL.md) (Pictorialism). Use a soft-focus platinum or gum print with the same deep tone.

- **Came from (go here for a more orthodox version):** [`engraving-print`](../engraving-print/SKILL.md)
- **Mixes well with:** [`etching-print`](../etching-print/SKILL.md)
- **Kin in another domain:** [`baroque-painting`](../baroque-painting/SKILL.md), [`film-noir-still`](../film-noir-still/SKILL.md)
- **Nearest by vector profile:** [`photogravure-print`](../photogravure-print/SKILL.md), [`aquatint-print`](../aquatint-print/SKILL.md), [`engraving-print`](../engraving-print/SKILL.md)

## Emotional target

Hush and depth: the viewer feels a candle-lit room and a face that comes out of the dark.

**Keywords:** velvet, nocturnal, dignified, soft, dramatic · **Brand archetypes:** magician, ruler

## Canonical evidence (open licence)

Each item below has an open licence or is in the public domain, so you may show it as a reference.

- [The Weird Sisters (Shakespeare, MacBeth, Act 1, Scene 3)](https://www.metmuseum.org/art/collection/search/395662) (John Raphael Smith, 1785): image, CC0. The Metropolitan Museum of Art, Open Access
- [General Washington](https://www.metmuseum.org/art/collection/search/893955) (Valentine Green, 1781): image, CC0. The Metropolitan Museum of Art, Open Access
- [Amelia Elizabeth, Landgravine of Hesse](https://www.metmuseum.org/art/collection/search/360392) (Ludwig von Siegen, 1642): image, CC0. The Metropolitan Museum of Art, Open Access

## Sources

- [Mezzotint (Wikipedia)](https://en.wikipedia.org/wiki/Mezzotint)
- [Ludwig von Siegen (Wikipedia)](https://en.wikipedia.org/wiki/Ludwig_von_Siegen)
- Carol Wax, The Mezzotint: History and Technique (Abrams, 1990)

---

Generated from [`data/print/styles/mezzotint-print.json`](../../data/print/styles/mezzotint-print.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
