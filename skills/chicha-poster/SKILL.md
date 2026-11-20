---
name: chicha-poster
description: "Apply the Chicha poster style (1978–present) when specifying, prompting or art-directing a printed piece or its look on screen: a poster, a plate, a book page, a zine, a label or a print-look illustration. Load when the user asks for: chicha poster, peruvian poster, cartel chicha, fluorescent concert poster, cumbia poster, lima street poster."
domain: print
era: studio-press
triggers:
  - "chicha poster"
  - "peruvian poster"
  - "cartel chicha"
  - "fluorescent concert poster"
  - "cumbia poster"
  - "lima street poster"
  - "neon silkscreen"
  - "andean psychedelic"
vector_profile:
  tone_method: 1
  ink_layering: 3
  registration_play: 4
  surface_relief: 1
  hand_trace: 4
---

# Chicha poster

> A fluorescent poster with big hand-drawn letters can call a crowd to a street concert at a very low cost.

A concert poster in fluorescent ink for chicha music. The maker draws big outlined letters and a tight border by hand, and prints in 2–5 loud flat colours on cheap paper.

**Period:** 1978–present · **Era:** Studio press · **Domain:** Print · **Also called:** Cartel chicha, Peruvian chicha poster, Fluorescent concert poster

## When to load this skill

Load it when the user asks for: "chicha poster", "peruvian poster", "cartel chicha", "fluorescent concert poster", "cumbia poster", "lima street poster", "neon silkscreen", "andean psychedelic".

Good for: music festival and club posters, album covers for cumbia and psychedelic music, street food and drink branding, event invitations.

Do not use it when:
- The brand needs a quiet, formal or luxury tone.
- The design must stay legible in grayscale.

## System directives

When specifying, prompting or art-directing a printed piece or its look on screen: a poster, a plate, a book page, a zine, a label or a print-look illustration in Chicha poster, you MUST:

1. Draw the headline in big letters with a thick outline and a drop shadow.
2. Use fluorescent pink, green, yellow and orange, with black for the outline.
3. Frame the sheet with a tight border of repeat shapes.
4. Add a photo cut-out of the band or a drawn face, in flat colour.
5. List the names, the place and the date in a dense block.
6. Print by screen in short runs on cheap paper.
7. Let the neon inks clash, and accept a gap or an overlap of 1–3 mm.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** A muted or tonal palette.
- **NEVER:** A neat, wide-margin layout.
- **NEVER:** Halftone photographs.
- **NEVER:** A thin, light typeface.
- **NEVER:** Gloss varnish.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Tone method | `■□□□□` 1/5 | solid ink, no tone | fine screen or continuous tone |
| Ink layering | `■■■□□` 3/5 | one ink | many overprinted inks |
| Registration play | `■■■■□` 4/5 | exact register | visible misregister as a feature |
| Surface relief | `■□□□□` 1/5 | flat, ink on the surface | deep bite or emboss in the sheet |
| Hand trace | `■■■■□` 4/5 | uniform machine output | each sheet differs by hand |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Process

- **Family:** stencil
- **Matrix:** A silk mesh screen with a hand-cut or hand-drawn stencil.
- **Press:** A hand squeegee table.
- **Image making:** The maker draws the letters and the shapes by hand, often with a collage of photo cut-outs, and makes a stencil for each colour.
- **Edition:** Tens to hundreds of sheets.

## Inks

- **Strategy:** Two to five fluorescent and flat inks that overprint with clashes.
- **Ink count min:** 2
- **Ink count max:** 5
- **Overprint:** opaque

**Colours**

| Name | Hex | Role |
|---|---|---|
| Fluorescent pink | `#FF2D95` | ground and letters |
| Fluorescent green | `#39FF14` | type and borders |
| Fluorescent yellow | `#FFF200` | type |
| Black | `#111111` | outline |

## Tone and screen

- **Method:** solid
- **Ruling lpi:** 0
- **Rule:** Print every area as a flat solid; make a tone only by overprint of two inks.

## Registration

- **Tolerance mm:** 1.5
- **Trap mm:** 0.5
- **Rule:** Hand-pulled colours shift by 1–3 mm; keep an overlap of 0.5 mm between outline and fill.

## Stock

- **Stock:** A cheap coated or uncoated poster paper, white or fluorescent.
- **Weight gsm min:** 70
- **Weight gsm max:** 120
- **Ground:** #F4F0E4
- **Finish:** Smooth, with a slight shine from the ink.

## Surface

- **Impression:** No bite; the screen ink lies as a thick layer on the surface.
- **Sheen:** Bright and satin; the fluorescent ink looks to glow.
- **Texture:** Flat fields with a mesh grain and clashing overlaps.

## Process marks

- **Marks:** fluorescent ink · outlined hand letters · overprint clashes · tiled borders · flat photo cut-outs · sun-faded neon on street walls

## Prompt primer

- **Positive:** Peruvian chicha poster · fluorescent pink green yellow · big outlined hand-drawn letters · silkscreen concert poster · tiled border pattern · flat colour overprint · Lima street wall · psychedelic Andean cumbia
- **Negative:** muted palette · halftone photo · minimal layout · thin typeface · glossy varnish

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

- **Smithsonian Folklife Festival** (exhibition, Washington, D.C., United States, 1967–now), exhibited the style. An annual festival of living culture. In 2015 it showed the urban art and music of Peru, with chicha posters.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Key ink (`key_ink`) | #111111 | #111111, #2A0A3A | inks |
| Paper colour (`paper_colour`) | #F4F0E4 | #F4F0E4, #FFFFFF, #FFF7A8 | substrate |
| Ink count (`ink_count`) | 3 | 2–5 | inks, registration |
| Screen ruling (`screen_ruling`) | 0 | 0–0 lines per inch | screening |
| Misregistration (`misregistration`) | 1.5 | 0.5–3 mm | registration |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more political and strict**: move toward [`cuban-solidarity-silkscreen-poster`](../cuban-solidarity-silkscreen-poster/SKILL.md) (Cuban solidarity silkscreen poster). Cut the palette to red, black and yellow and use one large bold shape.
- If the user asks for **more 1960s psychedelic**: move toward [`psychedelic-concert-poster`](../psychedelic-concert-poster/SKILL.md) (Psychedelic concert poster). Use vibrating colour pairs and flowing, interlocked letters on a swirl ground.

- **Came from (go here for a more orthodox version):** [`pop-screen-print`](../pop-screen-print/SKILL.md)
- **Nearest by vector profile:** [`nianhua-new-year-print`](../nianhua-new-year-print/SKILL.md), [`dong-ho-folk-woodblock`](../dong-ho-folk-woodblock/SKILL.md), [`rosta-window-stencil-poster`](../rosta-window-stencil-poster/SKILL.md)

## Emotional target

Joy and noise: the viewer feels a street party, loud and a little psychedelic.

**Keywords:** fluorescent, festive, psychedelic, loud, popular · **Brand archetypes:** jester, outlaw, everyman

## Canonical evidence (open licence)

Each item below has an open licence or is in the public domain, so you may show it as a reference.

- [Cartel chicha, concert at Puente Piedra](https://commons.wikimedia.org/wiki/File:Cartel_chicha_invitando_a_concierto_por_fin_de_a%C3%B1o_que_se_llevar%C3%A1_a_cabo_en_Puente_Piedra.jpg) (QM Keen, 2022): image, CC BY-SA 4.0. QM Keen, Wikimedia Commons (a photo of a poster)

## Sources

- [Chicha (Wikipedia)](https://en.wikipedia.org/wiki/Chicha_(music))
- [Monky (Wikipedia)](https://es.wikipedia.org/wiki/Monky)
- [Commons file: Cartel chicha, Puente Piedra](https://commons.wikimedia.org/wiki/File:Cartel_chicha_invitando_a_concierto_por_fin_de_a%C3%B1o_que_se_llevar%C3%A1_a_cabo_en_Puente_Piedra.jpg)

---

Generated from [`data/print/styles/chicha-poster.json`](../../data/print/styles/chicha-poster.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
