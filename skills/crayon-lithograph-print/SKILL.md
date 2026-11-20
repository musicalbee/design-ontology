---
name: crayon-lithograph-print
description: "Apply the Crayon lithograph style (1820–1900) when specifying, prompting or art-directing a printed piece or its look on screen: a poster, a plate, a book page, a zine, a label or a print-look illustration. Load when the user asks for: crayon lithograph, lithographic crayon drawing, daumier style, satirical lithograph, stone lithograph, caricature print."
domain: print
era: industrial-press
triggers:
  - "crayon lithograph"
  - "lithographic crayon drawing"
  - "daumier style"
  - "satirical lithograph"
  - "stone lithograph"
  - "caricature print"
  - "le charivari style"
  - "grained stone print"
vector_profile:
  tone_method: 4
  ink_layering: 1
  registration_play: 1
  surface_relief: 1
  hand_trace: 5
---

# Crayon lithograph

> A greasy crayon on a grained stone keeps the pressure of the hand, so that a drawing prints as drawn, with no engraver between.

The artist draws with greasy crayon directly on a grained limestone, and the grain catches the crayon as speckled black. The print keeps the drawing's pressure, from pale grain to dense black, with no engraved line.

**Period:** 1820–1900 · **Era:** Industrial press · **Domain:** Print · **Also called:** lithographie au crayon (French), Kreidelithographie (German)

## When to load this skill

Load it when the user asks for: "crayon lithograph", "lithographic crayon drawing", "daumier style", "satirical lithograph", "stone lithograph", "caricature print", "le charivari style", "grained stone print".

Good for: satirical and editorial illustration, political posters with a drawn look, book and music-sheet covers, theatre and cabaret prints.

Do not use it when:
- The image needs an exact line.
- The design needs colour from several plates.

## System directives

When specifying, prompting or art-directing a printed piece or its look on screen: a poster, a plate, a book page, a zine, a label or a print-look illustration in Crayon lithograph, you MUST:

1. Draw in black crayon on a grained stone; press harder for a darker tone.
2. Let the grain of the stone speckle the pale tones, at about 80 grains an inch.
3. Scrape or scratch the whites out of the black with a needle or a blade.
4. Add the caption in lithographic script under the picture, in the same ink.
5. Print in one black ink on thin paper, so that a paper can run in thousands.
6. Keep the edges soft and smudged; do not trace a hard contour.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** A hard engraved line.
- **NEVER:** Halftone dots or a photographic tone.
- **NEVER:** Plate mark or emboss.
- **NEVER:** Bright flat colour.
- **NEVER:** A digital line of even width.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Tone method | `■■■■□` 4/5 | solid ink, no tone | fine screen or continuous tone |
| Ink layering | `■□□□□` 1/5 | one ink | many overprinted inks |
| Registration play | `■□□□□` 1/5 | exact register | visible misregister as a feature |
| Surface relief | `■□□□□` 1/5 | flat, ink on the surface | deep bite or emboss in the sheet |
| Hand trace | `■■■■■` 5/5 | uniform machine output | each sheet differs by hand |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Process

- **Family:** planographic
- **Matrix:** Grained Solnhofen limestone
- **Press:** Scraper (star-wheel) lithographic press
- **Image making:** Greasy crayon drawn on stone; gum-etched; inked with roller; scratched whites
- **Edition:** Hundreds to thousands; newspaper editions in the thousands

## Inks

- **Strategy:** One black greasy ink that the stone takes where the crayon was drawn.
- **Ink count min:** 1
- **Ink count max:** 1
- **Overprint:** opaque

**Colours**

| Name | Hex | Role |
|---|---|---|
| Litho black | `#201E1C` | only ink |

## Tone and screen

- **Method:** grain
- **Ruling lpi:** 80
- **Rule:** Make the tone with the crayon grain that the stone gives, about 80 grains an inch; press harder to close the grain to black.

## Registration

- **Tolerance mm:** 0
- **Rule:** One stone prints the whole image in one pass, so no register is needed.

## Stock

- **Stock:** Thin wove newsprint or chine-collé paper, ivory.
- **Weight gsm min:** 60
- **Weight gsm max:** 100
- **Ground:** #E4D9C0
- **Finish:** Smooth and thin, with a soft tooth that takes the grain.

## Surface

- **Impression:** None; the print lies flat on the sheet, with no plate mark.
- **Sheen:** Matt black, with a slight grease sheen in the darks.
- **Texture:** A fine speckle in the grey tones, and smooth black where the crayon was dense.

## Process marks

- **Marks:** crayon grain speckle · soft smudged edges · scraped whites · no plate mark · caption in lithographic script below

## Prompt primer

- **Positive:** crayon lithograph · caricature of judges, lawyers and politicians · greasy crayon grain · black on newsprint · grained stone speckle · expressive loose drawing · satirical newspaper print · smudged soft edges
- **Negative:** colour · halftone dots · engraved fine line · photograph · digital

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

- **Le Charivari** (magazine, Paris, 1832–1937), published the style. A daily illustrated paper of caricature and satire. Honoré Daumier drew most of his lithographs for it.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Key ink (`key_ink`) | #201E1C | #201E1C, #2B2622, #1A2230 | inks |
| Paper colour (`paper_colour`) | #E4D9C0 | #E4D9C0, #ECE3CE, #D6CBAF | substrate |
| Ink count (`ink_count`) | 1 | 1–1 | inks, registration |
| Screen ruling (`screen_ruling`) | 80 | 50–120 lines per inch | screening |
| Misregistration (`misregistration`) | 0 | 0–0 mm | registration |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more colour**: move toward [`chromolithograph-poster`](../chromolithograph-poster/SKILL.md) (Chromolithograph poster). Draw a stone for each colour and print them in order, from light to dark.
- If the user asks for **more exact**: move toward [`engraving-print`](../engraving-print/SKILL.md) (Copper engraving). Replace the crayon with an engraved line of even width and add plate marks.

- **Rejects (the opposite pole; do not blend):** [`engraving-print`](../engraving-print/SKILL.md)
- **Mixes well with:** [`chromolithograph-poster`](../chromolithograph-poster/SKILL.md)
- **Nearest by vector profile:** [`stipple-engraving-print`](../stipple-engraving-print/SKILL.md), [`wood-engraving-print`](../wood-engraving-print/SKILL.md), [`xerox-zine`](../xerox-zine/SKILL.md)

## Emotional target

Quick, sharp wit: the viewer reads a satirical drawing that was made the same week.

**Keywords:** satirical, immediate, expressive, grainy, urbane · **Brand archetypes:** jester, outlaw, creator

## Canonical evidence (open licence)

Each item below has an open licence or is in the public domain, so you may show it as a reference.

- [The Doctor, published in Le Charivari](https://commons.wikimedia.org/wiki/File:Honor%C3%A9_Daumier,_The_Doctor,_published_in_published_in_Le_Charivari_(1833),_lithograph,_24.9_x_19.9_cm.jpg) (Honore Daumier, 1833): image, Public domain. Wikimedia Commons
- [The Trains of Pleasure, Le Charivari](https://commons.wikimedia.org/wiki/File:Honor%C3%A9_Daumier,_The_Trains_of_Pleasure,_published_in_Le_Charivari_(1864),_lithograph.jpg) (Honore Daumier, 1864): image, Public domain. Wikimedia Commons

## Sources

- [Wikipedia: Lithography](https://en.wikipedia.org/wiki/Lithography)
- [Wikipedia: Honore Daumier](https://en.wikipedia.org/wiki/Honor%C3%A9_Daumier)

---

Generated from [`data/print/styles/crayon-lithograph-print.json`](../../data/print/styles/crayon-lithograph-print.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
