---
name: ben-day-comic-print
description: "Apply the Ben-Day comic print style (1896–1975) when specifying, prompting or art-directing a printed piece or its look on screen: a poster, a plate, a book page, a zine, a label or a print-look illustration. Load when the user asks for: comic book print, ben-day dots, vintage comic, newsprint comic, golden age comic, pulp comic colour."
domain: print
era: industrial-press
triggers:
  - "comic book print"
  - "ben-day dots"
  - "vintage comic"
  - "newsprint comic"
  - "golden age comic"
  - "pulp comic colour"
  - "four colour comic"
vector_profile:
  tone_method: 2
  ink_layering: 4
  registration_play: 3
  surface_relief: 1
  hand_trace: 2
---

# Ben-Day comic print

> Four inks, a black line and a few fixed tints of dots can colour a whole world for a cent.

A comic or a newspaper picture printed on cheap newsprint in four flat inks, with tints made of fixed dots from Benjamin Day's films. The Sunday supplement of the 1890s and the comic book of the 1930s–1960s made black lines, primary colours and dots a mass look.

**Period:** 1896–1975 · **Era:** Industrial press · **Domain:** Print · **Also called:** Ben-Day dots, Four-colour comic, Newsprint comic, Sunday funnies

## When to load this skill

Load it when the user asks for: "comic book print", "ben-day dots", "vintage comic", "newsprint comic", "golden age comic", "pulp comic colour", "four colour comic".

Good for: posters and merchandise, editorial illustration, packaging for snacks and toys, social media graphics.

Do not use it when:
- The brand must look serious or luxurious.
- The picture needs realistic tone.

## System directives

When specifying, prompting or art-directing a printed piece or its look on screen: a poster, a plate, a book page, a zine, a label or a print-look illustration in Ben-Day comic print, you MUST:

1. Draw every form with a firm, black brush or pen line; the colour only fills.
2. Use only cyan, magenta and yellow at 0, 25, 50 and 100 %, alone or mixed; the colourist has no other tones.
3. Make each tint with a regular field of dots of one size, not a photographic screen.
4. Put flat primary colour on the main figures and a light dot tint on the background and the skin.
5. Accept a misregister of 1–2 mm and a slight spread of the ink on the soft paper.
6. Use speech balloons and captions in hand lettering, all capitals.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Smooth gradients or soft airbrush.
- **NEVER:** A photographic halftone with dots of many sizes.
- **NEVER:** Thin or broken outlines.
- **NEVER:** A palette of muted or pastel colours.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Tone method | `■■□□□` 2/5 | solid ink, no tone | fine screen or continuous tone |
| Ink layering | `■■■■□` 4/5 | one ink | many overprinted inks |
| Registration play | `■■■□□` 3/5 | exact register | visible misregister as a feature |
| Surface relief | `■□□□□` 1/5 | flat, ink on the surface | deep bite or emboss in the sheet |
| Hand trace | `■■□□□` 2/5 | uniform machine output | each sheet differs by hand |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Process

- **Family:** relief
- **Matrix:** Zinc or copper line plates, one for the black and one for each colour, with Ben-Day dot tints laid in by an engraver.
- **Press:** A rotary letterpress or a web offset press on newsprint rolls.
- **Image making:** An artist draws and inks the line; a colourist marks the colours by code; an engraver cuts the plates.
- **Edition:** Hundreds of thousands to millions of copies.

## Inks

- **Strategy:** Black for the line and the three primaries in a few fixed tints; the inks are transparent and mix where they overlap.
- **Ink count min:** 4
- **Ink count max:** 4
- **Overprint:** transparent

**Colours**

| Name | Hex | Role |
|---|---|---|
| Line black | `#1A1A1A` | the line and the lettering |
| Process cyan | `#2F9FD8` | sky, cool shadows and costumes |
| Process magenta | `#E2366F` | red with yellow, and pinks |
| Process yellow | `#F5D22E` | light, skin with magenta, and greens with cyan |

## Tone and screen

- **Method:** tint
- **Ruling lpi:** 60
- **Rule:** Make each tint with a fixed dot of 25 or 50 % at about 60 a inch; 100 % is solid.

**Angles**

|  |
||
|  |
|  |
|  |
|  |

## Registration

- **Tolerance mm:** 1.5
- **Rule:** The colours can shift 1–2 mm from the line; a white or a doubled edge is part of the look.

## Stock

- **Stock:** Newsprint from groundwood pulp, which yellows with age.
- **Weight gsm min:** 40
- **Weight gsm max:** 55
- **Ground:** #EDE3CC
- **Finish:** Uncoated, rough and absorbent.

## Surface

- **Impression:** A slight bite and an ink spread that makes the dots soft.
- **Sheen:** Matt, with no gloss.
- **Texture:** Large, regular dots that are visible at reading distance, on a grey-cream paper.

## Process marks

- **Marks:** visible Ben-Day dots · colour off register from the line · ink spread on newsprint · yellowed paper · show-through from the back · hand-lettered balloons

## Prompt primer

- **Positive:** vintage comic book print · Ben-Day dots · four-colour newsprint · thick black ink line · primary colours · misregistered colour · yellowed paper · 1950s comic panel
- **Negative:** gradient · airbrush · photograph · thin line · pastel palette · digital clean colour

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Letterpress (process)

Printing from raised metal or wood type and blocks, locked in a forme and pressed into the paper. Origin: typeface, Mainz, 1454.

- Set the type by hand from a case, letter by letter, and justify each line with spaces in the composing stick.
- Lock the type, the rules and the blocks in a chase, ink the forme with rollers and press it into the sheet.
- Dampen a soft rag paper so that the type bites 0.1–0.3 mm into it.
- Print each ink from a separate forme or a separate pull, and register them by pins or lays.

## Media

The salons, schools, magazines, publishers, galleries and platforms that carried this style.

- **Eastern Color Printing** (publisher, Waterbury, Connecticut, 1928–2002), published the style. A colour printer in Connecticut that published Famous Funnies, the first American comic book in the modern form. It printed comics for other publishers until 1973.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Key ink (`key_ink`) | #1A1A1A | #1A1A1A | inks |
| Paper colour (`paper_colour`) | #EDE3CC | #EDE3CC, #F2EBD9 | substrate |
| Ink count (`ink_count`) | 4 | 4–4 | inks, registration |
| Screen ruling (`screen_ruling`) | 60 | 45–85 lines per inch | screening |
| Misregistration (`misregistration`) | 1.5 | 0.5–2.5 mm | registration |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **as fine art**: move toward [`pop-screen-print`](../pop-screen-print/SKILL.md) (Pop screen print). Enlarge the dots, flatten the colours, and screen print them on heavy paper.
- If the user asks for **as a painting**: move toward [`pop-art-painting`](../pop-art-painting/SKILL.md) (Pop Art). Paint the dots and the line by hand at a large scale, in the manner of Lichtenstein.

- **Came from (go here for a more orthodox version):** [`chromolithograph-poster`](../chromolithograph-poster/SKILL.md)
- **Led to (go here for a newer version):** [`pop-screen-print`](../pop-screen-print/SKILL.md)
- **Kin in another domain:** [`pop-art-painting`](../pop-art-painting/SKILL.md), [`pop-art-web`](../pop-art-web/SKILL.md), [`rage-comic`](../rage-comic/SKILL.md)
- **Nearest by vector profile:** [`pop-screen-print`](../pop-screen-print/SKILL.md), [`risograph-print`](../risograph-print/SKILL.md), [`chromolithograph-poster`](../chromolithograph-poster/SKILL.md)

## Emotional target

Fun and nostalgia: the viewer feels a cheap, bright thrill from a childhood comic.

**Keywords:** fun, bold, nostalgic, punchy, popular · **Brand archetypes:** jester, hero, everyman

## Canonical evidence (open licence)

Each item below has an open licence or is in the public domain, so you may show it as a reference.

- [PepComicNo71pp35](https://commons.wikimedia.org/wiki/File:PepComicNo71pp35.png) (Joe Edwards, 1949): image, Public domain. Wikimedia Commons (Comic Book Plus scan). Public domain in the US because the copyright was not renewed (PD-US-no-renewal).
- [Famous Funnies 90](https://commons.wikimedia.org/wiki/File:Famous_Funnies_90.jpg) (Will Rowland (cover), 1942): image, Public domain. Wikimedia Commons (Comic Book Plus scan). Public domain in the US because the copyright was not renewed (PD-US-no-renewal).
- [FamousFunniesNo214](https://commons.wikimedia.org/wiki/File:FamousFunniesNo214.jpg) (Frank Frazetta (cover), 1954): image, Public domain. Wikimedia Commons (Comic Book Plus scan). Public domain in the US because the copyright was not renewed (PD-US-no-renewal).

## Sources

- [Ben Day process (Wikipedia)](https://en.wikipedia.org/wiki/Ben_Day_process)
- [Comic book (Wikipedia)](https://en.wikipedia.org/wiki/Comic_book)
- [Benjamin Henry Day Jr. (Wikipedia)](https://en.wikipedia.org/wiki/Benjamin_Henry_Day_Jr.)

---

Generated from [`data/print/styles/ben-day-comic-print.json`](../../data/print/styles/ben-day-comic-print.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
