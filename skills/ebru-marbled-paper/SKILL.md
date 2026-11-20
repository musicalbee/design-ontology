---
name: ebru-marbled-paper
description: "Apply the Ottoman ebru marbled paper style (c.1500–1900) when specifying, prompting or art-directing a printed piece or its look on screen: a poster, a plate, a book page, a zine, a label or a print-look illustration. Load when the user asks for: ebru, turkish marbling, marbled paper, water marbling, marbled endpaper, ottoman paper art."
domain: print
era: hand-press
triggers:
  - "ebru"
  - "turkish marbling"
  - "marbled paper"
  - "water marbling"
  - "marbled endpaper"
  - "ottoman paper art"
  - "floating pigment pattern"
  - "marbled margin"
vector_profile:
  tone_method: 3
  ink_layering: 3
  registration_play: 1
  surface_relief: 1
  hand_trace: 5
---

# Ottoman ebru marbled paper

> A pattern that the water and the comb make together, and that no plate can repeat, gives a sheet of paper a living surface.

Pigment floats on a thick bath of water. The marbler combs it into a pattern and lays a sheet on it for one monotype. Each sheet is unique, with flowing veins, combed curls and floral drops.

**Period:** c.1500–1900 · **Era:** Hand press · **Domain:** Print · **Also called:** Ebru, Ebrû, Turkish marbling, Water marbling

## When to load this skill

Load it when the user asks for: "ebru", "turkish marbling", "marbled paper", "water marbling", "marbled endpaper", "ottoman paper art", "floating pigment pattern", "marbled margin".

Good for: book endpapers and covers, stationery and packaging, backgrounds for calligraphy, textile and wallpaper patterns.

Do not use it when:
- The image needs a precise repeat or a hard edge.
- The design needs a figure or a readable scene.

## System directives

When specifying, prompting or art-directing a printed piece or its look on screen: a poster, a plate, a book page, a zine, a label or a print-look illustration in Ottoman ebru marbled paper, you MUST:

1. Make each sheet as one pull: float the colours, comb them, then lay the paper on them.
2. Use 2–8 mineral and plant pigments, and float each one on the bath with a brush.
3. Draw with a stylus, a comb and a fan; keep the veins in smooth flowing curves.
4. Let a drop spread to a ring and add a smaller drop inside it, for a flower.
5. Use a ground of indigo, red or black and leave the veins in ochre, white and red.
6. Cut or frame the sheet as a border, an endpaper or a calligraphy margin.
7. Accept uneven colour density and a soft blur at the edge of each vein.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** A repeating tile or a mirrored pattern.
- **NEVER:** A crisp vector outline.
- **NEVER:** A halftone dot or a photographic tone.
- **NEVER:** Plate mark or relief in the paper.
- **NEVER:** A uniform flat colour with no veins.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Tone method | `■■■□□` 3/5 | solid ink, no tone | fine screen or continuous tone |
| Ink layering | `■■■□□` 3/5 | one ink | many overprinted inks |
| Registration play | `■□□□□` 1/5 | exact register | visible misregister as a feature |
| Surface relief | `■□□□□` 1/5 | flat, ink on the surface | deep bite or emboss in the sheet |
| Hand trace | `■■■■■` 5/5 | uniform machine output | each sheet differs by hand |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Process

- **Family:** planographic
- **Matrix:** A bath of thick water (size) that carries floating pigment. Ink floats and transfers flat, so the process is closest to planographic.
- **Press:** No press: the marbler lays a paper on the bath by hand, and the pigment transfers in one touch.
- **Image making:** The marbler drops pigment on the size, then shapes it with a stylus, a comb or a fan.
- **Edition:** One sheet for each pull; no two sheets are the same.

## Inks

- **Strategy:** Several pigments that float on the size and do not mix; the ground and the drops come from the order of the drops.
- **Ink count min:** 2
- **Ink count max:** 8
- **Overprint:** mixed

**Colours**

| Name | Hex | Role |
|---|---|---|
| Indigo blue | `#2F4F86` | ground and veins |
| Mineral red | `#A33A2A` | drops |
| Ochre yellow | `#D9A83A` | drops and veins |
| Black | `#1D1B19` | fine veining |

## Tone and screen

- **Method:** grain
- **Ruling lpi:** 0
- **Rule:** There is no screen; make a tone with the density of floating pigment and with the spacing of the comb teeth, 2–5 mm apart.

## Registration

- **Tolerance mm:** 0
- **Rule:** One pull makes the whole sheet, so there is no register; a second pull for a frame can sit 1–2 mm off.

## Stock

- **Stock:** A hand-made paper with a smooth, polished face (aharlı), treated with alum so that the pigment takes.
- **Weight gsm min:** 60
- **Weight gsm max:** 120
- **Ground:** #EADFC4
- **Finish:** Burnished and sized, ivory, with a smooth face.

## Surface

- **Impression:** No bite and no plate mark; the pigment lies as a thin film on the face.
- **Sheen:** Matt, with a soft shine where the pigment is thick.
- **Texture:** Smooth flowing veins with fine soft edges and small rings of colour.

## Process marks

- **Marks:** comb veins · drop rings · edge blooms · no plate mark · uneven colour density · paper fibre that shows through thin colour

## Prompt primer

- **Positive:** Ottoman ebru marbling · floating pigment veins · combed curl pattern · floral drops on water · unique monotype sheet · indigo and vermilion · ivory sized paper · hand-made paper edge
- **Negative:** halftone · vector art · crisp outline · photograph · repeating tile

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Paper marbling (process, invented here)

A way to colour paper with pigment that floats on a bath of thick water. The maker combs the pigment into a pattern and lays a sheet on it. Origin: print, Istanbul, Ottoman lands, c. 1539.

- Thicken water with a gum to make the size, and pour it into a shallow tray.
- Float the pigments on the size with a brush; each drop spreads to a ring.
- Draw the drops into veins with a stylus, a comb or a fan.
- Alum the paper first so that the pigment takes.
- Lay the sheet on the bath for one touch, lift it, and let it dry flat.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **Academy of Fine Arts, Istanbul** (school, Istanbul, Turkey, 1883–now), taught the style. The Ottoman school of fine arts (Sanayi-i Nefise Mektebi), now a state academy. Necmeddin Okyay taught ebru there.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Key ink (`key_ink`) | #2F4F86 | #2F4F86, #A33A2A, #1D1B19 | inks |
| Paper colour (`paper_colour`) | #EADFC4 | #EADFC4, #F4ECD8 | substrate |
| Ink count (`ink_count`) | 4 | 2–8 | inks, registration |
| Screen ruling (`screen_ruling`) | 0 | 0–0 lines per inch | screening |
| Misregistration (`misregistration`) | 0 | 0–1 mm | registration |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more controlled**: move toward [`chromolithograph-poster`](../chromolithograph-poster/SKILL.md) (Chromolithograph poster). Replace the flowing veins with a drawn pattern on stone in 4–6 flat colours.
- If the user asks for **more graphic**: move toward [`woodcut-relief-print`](../woodcut-relief-print/SKILL.md) (Woodcut relief print). Cut the pattern in wood and print in one black ink.

- **Nearest by vector profile:** [`chromolithograph-poster`](../chromolithograph-poster/SKILL.md), [`meiji-kosen-ga-print`](../meiji-kosen-ga-print/SKILL.md), [`nishiki-e-polychrome-woodblock`](../nishiki-e-polychrome-woodblock/SKILL.md)

## Emotional target

Calm and wonder: the viewer sees a surface that moved like water and then stopped.

**Keywords:** fluid, contemplative, organic, ornate, unique · **Brand archetypes:** sage, magician, creator

## Canonical evidence (open licence)

Each item below has an open licence or is in the public domain, so you may show it as a reference.

- [Diwan of Mehmed Raghib Pasha, on coloured and marbled paper](https://commons.wikimedia.org/wiki/File:Mehmed_Raghib_Pasa_(1699-1763);_Diwan,_Ottoman_Turkey,_1717.jpg) (Unknown Ottoman scribe, 1717): image, Public domain. Christies.com via Wikimedia Commons
- [Ebru (Water Marbling) Art](https://commons.wikimedia.org/wiki/File:Ebru_(Water_Marbling)_Art.jpg) (Metasqaure10, 2022): image, CC0. Metasqaure10, Wikimedia Commons (a modern work)
- [Ebru Sanatı Resim Art](https://commons.wikimedia.org/wiki/File:Ebru_Sanat%C4%B1_Resim_Art.jpg) (Brcan, 2020): image, CC0. Brcan, Wikimedia Commons (a modern work)

## Sources

- [Paper marbling (Wikipedia)](https://en.wikipedia.org/wiki/Paper_marbling)
- [Necmeddin Okyay (Wikidata Q30611121)](https://www.wikidata.org/wiki/Q30611121)
- [Commons category: Ebru](https://commons.wikimedia.org/wiki/Category:Ebru)

---

Generated from [`data/print/styles/ebru-marbled-paper.json`](../../data/print/styles/ebru-marbled-paper.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
