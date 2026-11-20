---
name: taller-grafica-popular-linocut
description: "Apply the Taller de Gráfica Popular linocut style (1937–c.1970) when specifying, prompting or art-directing a printed piece or its look on screen: a poster, a plate, a book page, a zine, a label or a print-look illustration. Load when the user asks for: taller de grafica popular, tgp print, mexican linocut, leopoldo mendez, social realist woodcut, political linocut."
domain: print
era: industrial-press
triggers:
  - "taller de grafica popular"
  - "tgp print"
  - "mexican linocut"
  - "leopoldo mendez"
  - "social realist woodcut"
  - "political linocut"
  - "protest print"
  - "labour poster linocut"
vector_profile:
  tone_method: 2
  ink_layering: 1
  registration_play: 3
  surface_relief: 2
  hand_trace: 5
---

# Taller de Gráfica Popular linocut

> A print that a collective cuts quickly in cheap material can serve a political cause and reach a wide public.

A black-and-white print cut in linoleum or wood. The Taller de Gráfica Popular made leaflets, posters and portfolios for workers, unions and the state, in large black masses and white gouge lines.

**Period:** 1937–c.1970 · **Era:** Industrial press · **Domain:** Print · **Also called:** TGP linocut, Mexican people's print, Taller de Gráfica Popular print

## When to load this skill

Load it when the user asks for: "taller de grafica popular", "tgp print", "mexican linocut", "leopoldo mendez", "social realist woodcut", "political linocut", "protest print", "labour poster linocut".

Good for: protest and campaign posters, union and community publications, book covers on social history, event posters for cultural groups.

Do not use it when:
- The brand needs a neutral, polished or luxury tone.
- The image needs fine tone or a photographic likeness.

## System directives

When specifying, prompting or art-directing a printed piece or its look on screen: a poster, a plate, a book page, a zine, a label or a print-look illustration in Taller de Gráfica Popular linocut, you MUST:

1. Cut the block with a gouge, so that the white line stays bold and clear.
2. Fill the picture with solid black and let the white line draw the form.
3. Show workers, peasants and soldiers in a strong action, drawn from a low or a close view.
4. Add hand-lettered text: a slogan, a name or a verse.
5. Print in black; add a red block only where the message needs it.
6. Print on cheap paper in editions of tens to thousands.
7. Make work with the group: one artist cuts, others print and share the plate.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Fine, even engraved tone.
- **NEVER:** Soft watercolour wash.
- **NEVER:** Halftone photographs.
- **NEVER:** A neutral message with no stand.
- **NEVER:** Pale, thin line work that the press cannot hold.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Tone method | `■■□□□` 2/5 | solid ink, no tone | fine screen or continuous tone |
| Ink layering | `■□□□□` 1/5 | one ink | many overprinted inks |
| Registration play | `■■■□□` 3/5 | exact register | visible misregister as a feature |
| Surface relief | `■■□□□` 2/5 | flat, ink on the surface | deep bite or emboss in the sheet |
| Hand trace | `■■■■■` 5/5 | uniform machine output | each sheet differs by hand |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Process

- **Family:** relief
- **Matrix:** A block of linoleum or wood.
- **Press:** Hand burnishing with a spoon or a small press; a litho press for large sheets.
- **Image making:** The artist cuts the white areas with a gouge and leaves the black as raised surface.
- **Edition:** Tens to thousands of sheets; the block holds well.

## Inks

- **Strategy:** One black ink, with a second block in red for some sheets.
- **Ink count min:** 1
- **Ink count max:** 3
- **Overprint:** opaque

**Colours**

| Name | Hex | Role |
|---|---|---|
| Printing black | `#1B1917` | the image |
| Red | `#B5332A` | second block, for accent |

## Tone and screen

- **Method:** line
- **Ruling lpi:** 0
- **Rule:** Make a tone only with the width and the spacing of gouge lines, 0.3–1.5 mm apart; do not use a screen.

## Registration

- **Tolerance mm:** 1
- **Rule:** Register a second block with pin marks; a shift of up to 1 mm is normal in a hand-printed edition.

## Stock

- **Stock:** A cheap offset paper or a thin Japanese paper.
- **Weight gsm min:** 50
- **Weight gsm max:** 110
- **Ground:** #EDE6D3
- **Finish:** Uncoated and matt, slightly rough.

## Surface

- **Impression:** A light to medium bite, deeper in the burnished black areas.
- **Sheen:** Matt black with a slight shine on thick ink.
- **Texture:** Solid black with a mottled speckle, gouge strokes and a ragged edge.

## Process marks

- **Marks:** gouge strokes · burnish marks · hand lettering · white line against black · uneven black speckle · ragged block edge

## Prompt primer

- **Positive:** linocut political print · bold gouged white lines on black · Mexican workers and peasants · hand-lettered slogan · high-contrast black and white · cheap off-white paper · burnished impression · 1940s social realist print
- **Negative:** halftone · watercolour wash · photograph · fine engraving · soft gradient

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Linocut (process)

A relief print from a sheet of linoleum. The cut has smooth curves and no grain, and it prints flat colour. Origin: print, Dresden, c. 1905.

- Cut linoleum with V and U gouges; the sheet has no grain, so the cut curves freely.
- Cut one block for each colour, and print from light to dark.
- Print with opaque ink on thin paper, by hand with a spoon or on a hand press.
- Keep each cut line at 1 mm to 3 mm, and each white gap at 1 mm or more.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **Taller de Gráfica Popular** (collective, Mexico City, 1937–now), made the style. A workshop of printmakers that made leaflets, posters and portfolios in linocut and woodcut for workers, unions and the state.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Key ink (`key_ink`) | #1B1917 | #1B1917, #2A1E16 | inks |
| Paper colour (`paper_colour`) | #EDE6D3 | #EDE6D3, #F3EFE2, #E6D9B8 | substrate |
| Ink count (`ink_count`) | 1 | 1–3 | inks, registration |
| Screen ruling (`screen_ruling`) | 0 | 0–0 lines per inch | screening |
| Misregistration (`misregistration`) | 1 | 0–2 mm | registration |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more satirical**: move toward [`posada-broadside`](../posada-broadside/SKILL.md) (Posada broadside). Replace the heroic figure with a skeleton, add cross-hatch and a short verse in type.
- If the user asks for **more classical**: move toward [`woodcut-relief-print`](../woodcut-relief-print/SKILL.md) (Woodcut relief print). Replace the heavy black masses with parallel shading lines and print on laid paper.

- **Came from (go here for a more orthodox version):** [`posada-broadside`](../posada-broadside/SKILL.md), [`woodcut-relief-print`](../woodcut-relief-print/SKILL.md)
- **Nearest by vector profile:** [`cordel-xilogravura`](../cordel-xilogravura/SKILL.md), [`sosaku-hanga-print`](../sosaku-hanga-print/SKILL.md), [`battala-woodcut`](../battala-woodcut/SKILL.md)

## Emotional target

Solidarity and anger: the viewer feels a strong, plain and human call to act.

**Keywords:** militant, solidarity, raw, monumental, humane · **Brand archetypes:** hero, outlaw, everyman

## Canonical evidence (open licence)

Each item below has an open licence or is in the public domain, so you may show it as a reference.

- [Broadsheet: the ballad of Mr Grasshopper at communion](https://commons.wikimedia.org/wiki/File:Broadsheet_with_the_ballad_of_Mr_Grasshopper_(a_middleman)_who_is_shown_receiving_communion;_a_metaphor_for_peasant_suffering_under_corrupt_landowners_MET_DP874534.jpg) (Taller de Gráfica Popular, after Leopoldo Méndez): image, CC0. The Metropolitan Museum of Art (46.46.459) via Wikimedia Commons. Photo-relief and letterpress on green paper, c.1940.
- [Flyer on profiteers who exploit farmworkers (ladder of profiteers)](https://commons.wikimedia.org/wiki/File:Flyer_relating_to_profiteers_who_exploit_rural_farmworkers_and_take_advantage_of_the_government,_depicting_a_ladder_on_which_sit_profiteers_MET_DP874531.jpg) (Taller de Gráfica Popular (attributed)): image, CC0. The Metropolitan Museum of Art via Wikimedia Commons. Photo-relief and letterpress, c.1936–1945.

## Sources

- [Taller de Gráfica Popular (Wikipedia)](https://en.wikipedia.org/wiki/Taller_de_Gr%C3%A1fica_Popular)
- [Leopoldo Méndez (Wikidata Q711906)](https://www.wikidata.org/wiki/Q711906)
- [Commons category: Taller de Gráfica Popular](https://commons.wikimedia.org/wiki/Category:Taller_de_Gr%C3%A1fica_Popular)

---

Generated from [`data/print/styles/taller-grafica-popular-linocut.json`](../../data/print/styles/taller-grafica-popular-linocut.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
