---
name: stipple-engraving-print
description: "Apply the Stipple (crayon-manner) engraving style (c.1770–1840) when specifying, prompting or art-directing a printed piece or its look on screen: a poster, a plate, a book page, a zine, a label or a print-look illustration. Load when the user asks for: stipple engraving, dot manner print, crayon manner engraving, bartolozzi print, sanguine print, georgian portrait print."
domain: print
era: hand-press
triggers:
  - "stipple engraving"
  - "dot manner print"
  - "crayon manner engraving"
  - "bartolozzi print"
  - "sanguine print"
  - "georgian portrait print"
  - "oval stipple portrait"
  - "punktiermanier"
vector_profile:
  tone_method: 4
  ink_layering: 1
  registration_play: 1
  surface_relief: 2
  hand_trace: 4
---

# Stipple (crayon-manner) engraving

> A plate built from dots and short flicks, with no hatching, gives flesh and drapery a soft tone that imitates a chalk drawing.

The plate is built up from etched and engraved dots and short flicks, so tone has no hatching. The print shows soft skin and flesh with pale dotted shading, and publishers often printed in red-brown (sanguine).

**Period:** c.1770–1840 · **Era:** Hand press · **Domain:** Print · **Also called:** gravure au pointille (French), Punktiermanier (German)

## When to load this skill

Load it when the user asks for: "stipple engraving", "dot manner print", "crayon manner engraving", "bartolozzi print", "sanguine print", "georgian portrait print", "oval stipple portrait", "punktiermanier".

Good for: portrait and decorative prints with a period look, heritage packaging and labels, book plates and frontispieces, stationery with a soft vignette.

Do not use it when:
- The image needs a bold graphic line.
- The design needs bright colour.

## System directives

When specifying, prompting or art-directing a printed piece or its look on screen: a poster, a plate, a book page, a zine, a label or a print-look illustration in Stipple (crayon-manner) engraving, you MUST:

1. Build every tone from etched dots and short flicks; draw no hatching in the figure.
2. Make the dots small and close in the shadows, 80–120 an inch, and wide apart in the lights.
3. Print in sanguine red-brown for a chalk drawing look, or in warm black for a portrait.
4. Leave the edge of the figure soft and fade it into the paper, in an oval or a vignette.
5. Add a light outline only where a form needs a firm edge, such as a hat or a sleeve.
6. Keep a plate mark round the sheet.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** A hard outline round every form.
- **NEVER:** Halftone dots in a regular grid.
- **NEVER:** Photographic tone.
- **NEVER:** Saturated colour.
- **NEVER:** Dense cross-hatching in the flesh.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Tone method | `■■■■□` 4/5 | solid ink, no tone | fine screen or continuous tone |
| Ink layering | `■□□□□` 1/5 | one ink | many overprinted inks |
| Registration play | `■□□□□` 1/5 | exact register | visible misregister as a feature |
| Surface relief | `■■□□□` 2/5 | flat, ink on the surface | deep bite or emboss in the sheet |
| Hand trace | `■■■■□` 4/5 | uniform machine output | each sheet differs by hand |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Process

- **Family:** intaglio
- **Matrix:** Copper plate with etched dots and a stipple-engraved finish
- **Press:** Rolling-press; some in colour, a la poupee
- **Image making:** Dots etched with a needle or roulette; deepened with a multiple-point tool
- **Edition:** Hundreds, then reworked

## Inks

- **Strategy:** One sanguine red-brown or warm black intaglio ink; a colour print adds one or two inks through the same plate.
- **Ink count min:** 1
- **Ink count max:** 3
- **Overprint:** opaque

**Colours**

| Name | Hex | Role |
|---|---|---|
| Sanguine red-brown | `#8A4B3A` | common ink for decorative prints |
| Warm black | `#2D2926` | portrait ink |

## Tone and screen

- **Method:** grain
- **Ruling lpi:** 90
- **Rule:** Make the tone with etched dots and flicks, 60–120 dots an inch, closer where the shadow is deep.

## Registration

- **Tolerance mm:** 0
- **Rule:** One plate prints the image; a colour print uses a single plate inked in several colours, with no register.

## Stock

- **Stock:** Laid paper, cream.
- **Weight gsm min:** 100
- **Weight gsm max:** 170
- **Ground:** #E6DBC0
- **Finish:** Soft laid paper, pressed into the plate.

## Surface

- **Impression:** A plate mark of 3–6 mm; the dots stand in very light relief.
- **Sheen:** Matt, with a soft glow in the sanguine ink.
- **Texture:** Fine dotted shading with no line, and soft edges that fade into the sheet.

## Process marks

- **Marks:** dot-built tone, no line · plate mark · soft vignette edges · pale cheeks and drapery without outline

## Prompt primer

- **Positive:** stipple engraving · dotted tone portrait · Bartolozzi print · sanguine red-brown ink · crayon manner · soft flesh tones in dots · Georgian oval portrait · plate mark
- **Negative:** hard outline · halftone grid · photograph · saturated colour · digital vector

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Stipple engraving (process, invented here)

A way to make tone in an intaglio plate with dots of many sizes. The prints look like chalk drawings. Origin: print, Venice, 1509.

- Mark the plate with dots, made with an etching needle, a burin or a roulette tool.
- Make dots close and large for the dark areas, and small and wide apart for the light.
- Print in red chalk colour (sanguine) to copy a chalk drawing.
- Use no hatching in the soft areas, so that the face has a smooth tone.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **Royal Academy of Arts** (salon, London, 1768–now), exhibited the style. The British academy of art, with an annual summer exhibition. Francesco Bartolozzi was a founder member, and stipple prints hung there.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Key ink (`key_ink`) | #8A4B3A | #8A4B3A, #2D2926, #5B3A2A | inks |
| Paper colour (`paper_colour`) | #E6DBC0 | #E6DBC0, #EEE5CE, #DACCA9 | substrate |
| Ink count (`ink_count`) | 1 | 1–3 | inks, registration |
| Screen ruling (`screen_ruling`) | 90 | 60–120 lines per inch | screening |
| Misregistration (`misregistration`) | 0 | 0–0.5 mm | registration |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more graphic**: move toward [`engraving-print`](../engraving-print/SKILL.md) (Copper engraving). Replace the dots with parallel lines that swell, and add a firm contour.
- If the user asks for **more tone**: move toward [`mezzotint-print`](../mezzotint-print/SKILL.md) (Mezzotint). Rock the plate to get a deep, smooth dark, and scrape the lights.

- **Came from (go here for a more orthodox version):** [`engraving-print`](../engraving-print/SKILL.md), [`etching-print`](../etching-print/SKILL.md)
- **Nearest by vector profile:** [`wood-engraving-print`](../wood-engraving-print/SKILL.md), [`crayon-lithograph-print`](../crayon-lithograph-print/SKILL.md), [`aquatint-print`](../aquatint-print/SKILL.md)

## Emotional target

Gentle, polished charm: the viewer sees smooth skin and soft drapery, like a chalk portrait.

**Keywords:** gentle, polished, soft, georgian, delicate · **Brand archetypes:** lover, innocent, caregiver

## Canonical evidence (open licence)

Each item below has an open licence or is in the public domain, so you may show it as a reference.

- [Francis Willis, stipple engraving](https://commons.wikimedia.org/wiki/File:Francis_Willis._Stipple_engraving_by_F._Bartolozzi,_1789,_af_Wellcome_L0008194.jpg) (Francesco Bartolozzi, 1789): image, CC BY 4.0. Wellcome Collection, via Wikimedia Commons
- [Jupiter (Zeus), sanguine stipple engraving after G. Hussey](https://commons.wikimedia.org/wiki/File:Jupiter_(Zeus)._Sanguine_stipple_engraving_by_F._Bartolozzi_Wellcome_V0035805.jpg) (Francesco Bartolozzi, 1774): image, CC BY 4.0. Wellcome Collection, via Wikimedia Commons

## Sources

- [Wikipedia: Stipple engraving](https://en.wikipedia.org/wiki/Stipple_engraving)
- [Wikipedia: Francesco Bartolozzi](https://en.wikipedia.org/wiki/Francesco_Bartolozzi)

---

Generated from [`data/print/styles/stipple-engraving-print.json`](../../data/print/styles/stipple-engraving-print.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
