---
name: cuban-solidarity-silkscreen-poster
description: "Apply the Cuban solidarity silkscreen poster style (1960–1990) when specifying, prompting or art-directing a printed piece or its look on screen: a poster, a plate, a book page, a zine, a label or a print-look illustration. Load when the user asks for: cuban poster, ospaaal, icaic poster, solidarity poster, tricontinental, cartel cubano."
domain: print
era: studio-press
triggers:
  - "cuban poster"
  - "ospaaal"
  - "icaic poster"
  - "solidarity poster"
  - "tricontinental"
  - "cartel cubano"
  - "revolutionary poster"
  - "flat silkscreen poster"
vector_profile:
  tone_method: 1
  ink_layering: 2
  registration_play: 3
  surface_relief: 1
  hand_trace: 3
---

# Cuban solidarity silkscreen poster

> Two to four flat inks and one strong shape can carry a political or film message to a street in any language.

A poster in flat colour and a bold shape. ICAIC printed film posters by hand-pulled silkscreen in short runs. OSPAAAL printed solidarity posters by offset and folded them into the Tricontinental magazine.

**Period:** 1960–1990 · **Era:** Studio press · **Domain:** Print · **Also called:** Cartel cubano, ICAIC poster, OSPAAAL poster, Serigrafía cubana

## When to load this skill

Load it when the user asks for: "cuban poster", "ospaaal", "icaic poster", "solidarity poster", "tricontinental", "cartel cubano", "revolutionary poster", "flat silkscreen poster".

Good for: film festival posters, campaign and protest posters, cultural event announcements, album covers.

Do not use it when:
- The message needs fine detail or a long text.
- The brand needs a quiet or luxury tone.

## System directives

When specifying, prompting or art-directing a printed piece or its look on screen: a poster, a plate, a book page, a zine, a label or a print-look illustration in Cuban solidarity silkscreen poster, you MUST:

1. Reduce the image to one bold shape or one cut-out figure that a viewer reads in two seconds.
2. Use 2–5 flat opaque inks; red, black and yellow are the main set.
3. Take the figure from a photograph, then cut it to flat shapes with no tone.
4. Cut the stencil by hand and keep its slightly rough edge.
5. Leave a large field of one colour for the message.
6. Keep the text short, in a bold hand-drawn or geometric letter.
7. Allow a gap or an overlap of 1–2 mm where two inks meet.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** A smooth gradient or a halftone photograph.
- **NEVER:** Glossy stock with a varnish.
- **NEVER:** A crowded layout of small text and ornament.
- **NEVER:** A muted, tonal palette.
- **NEVER:** A thin, fine line that the mesh cannot hold.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Tone method | `■□□□□` 1/5 | solid ink, no tone | fine screen or continuous tone |
| Ink layering | `■■□□□` 2/5 | one ink | many overprinted inks |
| Registration play | `■■■□□` 3/5 | exact register | visible misregister as a feature |
| Surface relief | `■□□□□` 1/5 | flat, ink on the surface | deep bite or emboss in the sheet |
| Hand trace | `■■■□□` 3/5 | uniform machine output | each sheet differs by hand |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Process

- **Family:** stencil
- **Matrix:** A silk mesh screen with a hand-cut or photographic stencil. OSPAAAL also used offset plates.
- **Press:** A hand squeegee table for ICAIC; an offset press for OSPAAAL.
- **Image making:** The designer makes a collage and cuts a stencil for each colour, or exposes a photographic stencil.
- **Edition:** Hundreds of sheets for a screen-printed film poster; many thousands for an offset solidarity poster.

## Inks

- **Strategy:** A tight set of flat, opaque inks, one stencil for each, with the paper as the light.
- **Ink count min:** 2
- **Ink count max:** 5
- **Overprint:** opaque

**Colours**

| Name | Hex | Role |
|---|---|---|
| Black | `#1A1A1A` | the key: figure and text |
| Red | `#D32F2F` | the main field |
| Yellow | `#F2C300` | accent |
| Blue | `#1F4E9C` | accent |

## Tone and screen

- **Method:** solid
- **Ruling lpi:** 0
- **Rule:** Print every area as a flat solid; show a mid-tone only as a cut-out shape or as a coarse hatch, never as a screen.

## Registration

- **Tolerance mm:** 1
- **Trap mm:** 0.5
- **Rule:** Overlap neighbouring inks by 0.5 mm; a shift of 1 mm between hand-pulled colours is normal.

## Stock

- **Stock:** An uncoated offset or poster paper, light in weight, off-white.
- **Weight gsm min:** 70
- **Weight gsm max:** 120
- **Ground:** #F1ECDD
- **Finish:** Uncoated and matt, with a slight tooth.

## Surface

- **Impression:** No bite; the screen ink lies as a thin layer on the surface.
- **Sheen:** Matt to satin, with a flat, even colour.
- **Texture:** Flat fields with a small mesh texture and hand-cut edges.

## Process marks

- **Marks:** flat colour fields · hand-cut stencil edges · trapped overlaps · rough edge of the mesh · cut-out photo shapes · fold lines on offset sheets

## Prompt primer

- **Positive:** Cuban solidarity poster · flat red black and yellow · silkscreen print · bold simplified figure · revolutionary 1960s graphic · hand-cut stencil shape · off-white paper · two to four flat inks
- **Negative:** gradient · glossy finish · photographic tone · muted palette · ornate detail

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Screen printing (process)

Ink pushed through a fine mesh with a squeegee; a stencil on the mesh blocks the parts that do not print. Origin: print, Manchester, 1907.

- Stretch a silk or polyester mesh of 40–120 threads a centimetre on a frame.
- Make the stencil by hand cut film or by a photo emulsion exposed through a film positive.
- Pull thick, opaque ink across the screen with a rubber squeegee in one even stroke.
- Print each colour from its own screen and let each layer dry before the next.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **ICAIC** (state programme, Havana, Cuba, 1959–now), made the style. The Cuban film institute. It ordered posters for its films from designers, and printed many of them by hand-pulled silkscreen.
- **OSPAAAL** (state programme, Havana, Cuba, 1966–now), published the style. The Organization of Solidarity with the People of Asia, Africa and Latin America. It published the Tricontinental magazine and a poster folded into each issue.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Key ink (`key_ink`) | #1A1A1A | #1A1A1A, #101820 | inks |
| Paper colour (`paper_colour`) | #F1ECDD | #F1ECDD, #FFFFFF, #EFE3C8 | substrate |
| Ink count (`ink_count`) | 3 | 2–5 | inks, registration |
| Screen ruling (`screen_ruling`) | 0 | 0–0 lines per inch | screening |
| Misregistration (`misregistration`) | 1 | 0–2 mm | registration |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **louder and more neon**: move toward [`chicha-poster`](../chicha-poster/SKILL.md) (Chicha poster). Swap the red and black set for fluorescent inks and add hand-drawn outlined letters.
- If the user asks for **more pop and photographic**: move toward [`pop-screen-print`](../pop-screen-print/SKILL.md) (Pop screen print). Add a coarse halftone photo layer and let the colour shift by 2–4 mm.

- **Came from (go here for a more orthodox version):** [`constructivist-photomontage-poster`](../constructivist-photomontage-poster/SKILL.md)
- **Mixes well with:** [`pop-screen-print`](../pop-screen-print/SKILL.md)
- **Nearest by vector profile:** [`wood-type-poster`](../wood-type-poster/SKILL.md), [`mir-iskusstva-book-graphics`](../mir-iskusstva-book-graphics/SKILL.md), [`nianhua-new-year-print`](../nianhua-new-year-print/SKILL.md)

## Emotional target

Urgency and pride: the viewer feels a clear call in a few loud colours.

**Keywords:** bold, militant, optimistic, graphic, direct · **Brand archetypes:** hero, outlaw, creator

## Canonical evidence (open licence)

Each item below has an open licence or is in the public domain, so you may show it as a reference.

- [Che Guevara, OSPAAAL Tricontinental image](https://commons.wikimedia.org/wiki/File:CheTriContinental.jpg) (OSPAAAL, 1969): image, Public domain. Wikimedia Commons. PD basis weak: Commons gives only OSPAAAL authorship. Not verified.
- [Tricontinental issue 10 cover](https://commons.wikimedia.org/wiki/File:Tricontinental_issue_10_cover.jpg) (OSPAAAL, 1969): image, Public domain. Wikimedia Commons. PD basis weak: Commons gives only OSPAAAL authorship. Not verified.

## Sources

- [OSPAAAL (Wikipedia)](https://en.wikipedia.org/wiki/Organization_of_Solidarity_with_the_People_of_Asia,_Africa_and_Latin_America)
- [Alfredo Rostgaard (Wikidata Q4723856)](https://www.wikidata.org/wiki/Q4723856)
- [Commons category: OSPAAAL](https://commons.wikimedia.org/wiki/Category:OSPAAAL)

---

Generated from [`data/print/styles/cuban-solidarity-silkscreen-poster.json`](../../data/print/styles/cuban-solidarity-silkscreen-poster.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
