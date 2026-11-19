---
name: risograph-print
description: "Apply the Risograph print style (1986–present) when specifying, prompting or art-directing a printed piece or its look on screen: a poster, a plate, a book page, a zine, a label or a print-look illustration. Load when the user asks for: risograph, riso, riso print, grainy print look, fluorescent print, zine illustration."
domain: print
era: digital-press
triggers:
  - "risograph"
  - "riso"
  - "riso print"
  - "grainy print look"
  - "fluorescent print"
  - "zine illustration"
  - "spot colour print"
  - "misregistered print"
vector_profile:
  tone_method: 3
  ink_layering: 3
  registration_play: 4
  surface_relief: 1
  hand_trace: 2
---

# Risograph print

> Bright spot inks that mix where they overlap, with a soft grain and a small shift, give a cheap print the warmth of a hand process.

A print from a stencil duplicator: a thermal head cuts a master and the drum pushes soy ink through it, one drum and one bright spot colour for each layer. Riso Kagaku sold it for schools and offices from 1986; from the 2000s, studios made its grain and misregister an art look.

**Period:** 1986–present · **Era:** Digital press · **Domain:** Print · **Also called:** Riso print, Risography, Stencil duplicator print, Riso zine

## When to load this skill

Load it when the user asks for: "risograph", "riso", "riso print", "grainy print look", "fluorescent print", "zine illustration", "spot colour print", "misregistered print".

Good for: zines and art books, gig and event posters, independent brand illustration, editorial images.

Do not use it when:
- The image needs photographic colour.
- The design depends on exact register of small text.

## System directives

When specifying, prompting or art-directing a printed piece or its look on screen: a poster, a plate, a book page, a zine, a label or a print-look illustration in Risograph print, you MUST:

1. Separate the image into 2–4 spot colours; draw each layer in black as a separate file.
2. Use the bright riso inks: fluorescent pink, medium blue, yellow, and others from the drum list.
3. Overprint the transparent inks to make the third and fourth colours (pink over yellow gives orange).
4. Use a grain screen at 50–110 lines an inch for the tones; avoid large flat solids, which print unevenly.
5. Accept a shift of 1–2 mm between the layers; design so that a small gap does not break the image.
6. Print on an uncoated, slightly warm paper that takes the soy ink.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Process CMYK colour that hides the spot inks.
- **NEVER:** Large, heavy solids that smear and set off.
- **NEVER:** Exact register needed for small text in two colours.
- **NEVER:** Coated or glossy paper.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Tone method | `■■■□□` 3/5 | solid ink, no tone | fine screen or continuous tone |
| Ink layering | `■■■□□` 3/5 | one ink | many overprinted inks |
| Registration play | `■■■■□` 4/5 | exact register | visible misregister as a feature |
| Surface relief | `■□□□□` 1/5 | flat, ink on the surface | deep bite or emboss in the sheet |
| Hand trace | `■■□□□` 2/5 | uniform machine output | each sheet differs by hand |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Process

- **Family:** stencil
- **Matrix:** A thermal master cut on the machine, wrapped on a drum of soy ink.
- **Press:** A Riso digital duplicator, one or two drums at a pass, up to 150 sheets a minute.
- **Image making:** The designer separates the layers in software; the printer changes the drum for each colour and feeds the sheets again.
- **Edition:** 50–2,000 copies; above that, offset costs less.

## Inks

- **Strategy:** Spot colours from the riso drum list, each one transparent, so overprints mix.
- **Ink count min:** 1
- **Ink count max:** 4
- **Overprint:** transparent

**Colours**

| Name | Hex | Role |
|---|---|---|
| Medium blue | `#3255A4` | the key layer and the darks |
| Fluorescent pink | `#FF48B0` | warm accents and orange with yellow |
| Yellow | `#FFE800` | light and green with blue |

## Tone and screen

- **Method:** grain
- **Ruling lpi:** 85
- **Rule:** Make the tone with the grain (FM) screen of the duplicator or a coarse halftone of 50–110 lines an inch.

## Registration

- **Tolerance mm:** 1.5
- **Rule:** Each drum pass can shift 1–2 mm; the misregister is part of the look.

## Stock

- **Stock:** An uncoated paper, often recycled, with a soft surface for the soy ink.
- **Weight gsm min:** 80
- **Weight gsm max:** 200
- **Ground:** #F7F3EA
- **Finish:** Uncoated, with a slight tooth; natural white or cream.

## Surface

- **Impression:** No bite; the ink sinks into the paper.
- **Sheen:** Matt, with a slight chalky softness; fluorescent inks glow.
- **Texture:** A soft grain in the tones, uneven solids and roller marks.

## Process marks

- **Marks:** misregister between layers · grain screen · uneven solid fill · roller marks · ink set-off on the back · fluorescent glow

## Prompt primer

- **Positive:** risograph print · riso zine · fluorescent pink and blue · grainy texture · transparent overprint · slight misregistration · uncoated paper · spot colour illustration
- **Negative:** CMYK photo · glossy · smooth gradient · exact register · digital clean vector

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Risograph (technology, invented here)

A digital stencil duplicator: a thermal head cuts a master, and a drum pushes soy ink through it in one spot colour. Origin: print, Tokyo, 1986.

- Separate the design into 1–4 spot colours and give each layer as a greyscale file.
- Print one drum (one colour) at a pass and feed the sheets again for the next colour.
- Keep tones on a grain or halftone screen of 50–110 lines an inch; avoid large solids.
- Use uncoated paper, and let the ink dry before a second pass to stop set-off.

## Media

The salons, schools, magazines, publishers, galleries and platforms that carried this style.

- **Hato Press** (publisher, London, 2009–now), published the style. A London publisher that prints books and zines on the risograph and teaches the method in workshops.
- **Riso Kagaku Corporation** (workshop, Tokyo, 1946–now), made the style. The Japanese company that makes the Risograph stencil duplicator. It also made Print Gocco, a small screen-print kit for the home.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Key ink (`key_ink`) | #3255A4 | #3255A4, #00838A, #000000 | inks |
| Paper colour (`paper_colour`) | #F7F3EA | #F7F3EA, #FFFFFF, #F3E9D2 | substrate |
| Ink count (`ink_count`) | 3 | 1–4 | inks, registration |
| Screen ruling (`screen_ruling`) | 85 | 50–110 lines per inch | screening |
| Misregistration (`misregistration`) | 1.5 | 0.5–2.5 mm | registration |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **thicker and bolder**: move toward [`pop-screen-print`](../pop-screen-print/SKILL.md) (Pop screen print). Change the riso drum for a hand screen; use opaque inks and a coarse halftone.
- If the user asks for **rougher**: move toward [`xerox-zine`](../xerox-zine/SKILL.md) (Xerox zine). Print in black only on a copier and paste the layout by hand.

- **Came from (go here for a more orthodox version):** [`xerox-zine`](../xerox-zine/SKILL.md)
- **Mixes well with:** [`pop-screen-print`](../pop-screen-print/SKILL.md)
- **Kin in another domain:** [`corporate-memphis`](../corporate-memphis/SKILL.md), [`duotone-icon`](../duotone-icon/SKILL.md), [`editorial-serif-revival`](../editorial-serif-revival/SKILL.md)
- **Nearest by vector profile:** [`ben-day-comic-print`](../ben-day-comic-print/SKILL.md), [`pop-screen-print`](../pop-screen-print/SKILL.md), [`wood-type-poster`](../wood-type-poster/SKILL.md)

## Emotional target

Warm, playful craft: the viewer feels a small studio print, bright and a little imperfect.

**Keywords:** playful, indie, warm, grainy, bright · **Brand archetypes:** creator, jester, innocent

## Canonical evidence (open licence)

Each item below has an open licence or is in the public domain, so you may show it as a reference.

- [Garden Party, close](https://commons.wikimedia.org/wiki/File:Garden_Party,_close.jpg) (Cetrl, 2022): image, CC0. Wikimedia Commons (own work, Cetrl)
- [Garden Party, closeclose](https://commons.wikimedia.org/wiki/File:Garden_Party,_closeclose.jpg) (Cetrl, 2022): image, CC0. Wikimedia Commons (own work, Cetrl)
- [Carteles en riso](https://commons.wikimedia.org/wiki/File:Carteles_en_riso.jpg) (Alequihdez, 2025): image, CC BY-SA 4.0. Wikimedia Commons (own work, Alequihdez)

## Sources

- [Risograph (Wikipedia)](https://en.wikipedia.org/wiki/Risograph)
- [Riso Kagaku, RISO Ink Colours (riso.co.jp)](https://www.riso.co.jp/english/)
- [Stencil duplicator (Wikipedia)](https://en.wikipedia.org/wiki/Stencil_duplicator)

---

Generated from [`data/print/styles/risograph-print.json`](../../data/print/styles/risograph-print.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
