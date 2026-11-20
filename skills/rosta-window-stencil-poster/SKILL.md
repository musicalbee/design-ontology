---
name: rosta-window-stencil-poster
description: "Apply the ROSTA Window stencil poster style (1919–1922; TASS Windows 1941–1945) when specifying, prompting or art-directing a printed piece or its look on screen: a poster, a plate, a book page, a zine, a label or a print-look illustration. Load when the user asks for: rosta window, okna rosta, mayakovsky poster, soviet satire poster, stencilled comic strip, agitprop cartoon."
domain: print
era: industrial-press
triggers:
  - "rosta window"
  - "okna rosta"
  - "mayakovsky poster"
  - "soviet satire poster"
  - "stencilled comic strip"
  - "agitprop cartoon"
  - "tass window"
  - "russian revolution poster"
vector_profile:
  tone_method: 1
  ink_layering: 2
  registration_play: 4
  surface_relief: 1
  hand_trace: 5
---

# ROSTA Window stencil poster

> A news poster that artists can paint in one night must use few flat colours, a heavy contour and a rhyme that a passer-by reads in seconds.

A strip of cartoon panels with short rhymed captions, cut as paper stencils and painted by hand, then copied for shop windows. The flat colour, thick black contour and fast brush work follow from the speed of the news.

**Period:** 1919–1922; TASS Windows 1941–1945 · **Era:** Industrial press · **Domain:** Print · **Also called:** ROSTA Windows, Okna ROSTA, Окна РОСТА, TASS Windows, Окна ТАСС

## When to load this skill

Load it when the user asks for: "rosta window", "okna rosta", "mayakovsky poster", "soviet satire poster", "stencilled comic strip", "agitprop cartoon", "tass window", "russian revolution poster".

Good for: satirical news posters, campaign and protest posters, comic-strip explainers with verse captions, shop-window displays.

Do not use it when:
- The message needs a photograph or fine detail.
- The tone must be calm, neutral or premium.

## System directives

When specifying, prompting or art-directing a printed piece or its look on screen: a poster, a plate, a book page, a zine, a label or a print-look illustration in ROSTA Window stencil poster, you MUST:

1. Split each message into 4–12 panels in one strip; give each panel one figure and one short line of verse.
2. Draw a heavy black contour of 3–6 mm round each figure; it holds the shape when a stencil shifts.
3. Use 3–5 flat opaque colours: red, yellow ochre, blue and black. Do not blend them.
4. Cut one paper stencil for each colour and keep the bridges that hold the islands in place.
5. Letter the caption by hand, in capitals, in the same black as the contour.
6. Make the enemy small, ugly and clear; make the worker large, in red.
7. Paint on cheap wrapping paper or newsprint, and leave the brush edges and drips.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Halftone photographs and fine tone.
- **NEVER:** A smooth gradient or a soft shadow.
- **NEVER:** A clean, machine-perfect vector edge.
- **NEVER:** Small text that a passer-by cannot read at 5 m.
- **NEVER:** A glossy or coated sheet.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Tone method | `■□□□□` 1/5 | solid ink, no tone | fine screen or continuous tone |
| Ink layering | `■■□□□` 2/5 | one ink | many overprinted inks |
| Registration play | `■■■■□` 4/5 | exact register | visible misregister as a feature |
| Surface relief | `■□□□□` 1/5 | flat, ink on the surface | deep bite or emboss in the sheet |
| Hand trace | `■■■■■` 5/5 | uniform machine output | each sheet differs by hand |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Process

- **Family:** stencil
- **Matrix:** Paper or card stencils, one for each colour, cut by hand from a drawn master.
- **Press:** None. A brush or a spray puts the paint through each stencil by hand.
- **Image making:** An artist draws the master strip. A team cuts the stencils and paints the sheets panel by panel.
- **Edition:** Dozens to a few hundred sheets for each window; no two painted sheets match.

## Inks

- **Strategy:** Opaque poster paint through stencils, one flat colour at a time, with the black contour last.
- **Ink count min:** 3
- **Ink count max:** 6
- **Overprint:** opaque

**Colours**

| Name | Hex | Role |
|---|---|---|
| Black | `#1A1A1A` | the contour and the caption |
| Red | `#C62D28` | the flag, the worker and the accent |
| Yellow ochre | `#D8A93B` | flat fill |
| Blue | `#3E5C8A` | flat fill |

## Tone and screen

- **Method:** solid
- **Ruling lpi:** 0
- **Rule:** Make no tone. Fill each area with one flat colour, and use the bare paper for light.

## Registration

- **Tolerance mm:** 2
- **Rule:** A stencil shifts 1–3 mm on the sheet. The heavy contour hides the gap, and the bare paper shows at some edges.

## Stock

- **Stock:** Cheap wrapping paper or newsprint, grey-brown, glued in strips if the window is wide.
- **Weight gsm min:** 40
- **Weight gsm max:** 90
- **Ground:** #CDBFA2
- **Finish:** Uncoated, with a rough tooth that takes thick paint.

## Surface

- **Impression:** No bite; the paint dries on the surface of the sheet.
- **Sheen:** Matt, with a slight gloss where the paint is thick.
- **Texture:** Brush marks, paint drips, stencil bridges and a cockle in the thin sheet.

## Process marks

- **Marks:** stencil bridges · brush edges and drips · hand-lettered rhyme captions · strip layout of 4–12 panels · colour that stops short of the contour · cockled newsprint

## Prompt primer

- **Positive:** ROSTA window poster · stencilled flat colour panels · thick black contour · rhymed hand-lettered captions · 1920 Soviet satire cartoon · brush-painted newsprint · strip of comic panels · red, yellow and black palette
- **Negative:** halftone photo · gradient · 3D render · glossy finish · clean modern vector

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Pochoir (skill)

Colour put on by hand through a set of cut stencils, one for each colour, over a printed key line. Origin: print, Paris, 1908.

- Cut one stencil from zinc, copper or celluloid for each colour of the original; a plate can need 20–100 stencils.
- Put on gouache or watercolour with a round brush (pompon) in a dabbing motion, so the edge stays clean.
- Align each stencil by eye to the printed key line.
- Mix each colour to match the original and keep it flat and opaque.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **ROSTA** (company, Moscow, 1918–1925), launched the style. The Russian Telegraph Agency of the early Soviet state. Its artists made the ROSTA Windows: stencilled news strips for shop windows. In 1925 TASS took over the agency.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Key ink (`key_ink`) | #1A1A1A | #1A1A1A, #2B2118 | inks |
| Paper colour (`paper_colour`) | #CDBFA2 | #CDBFA2, #D8CDB4, #BFB297 | substrate |
| Ink count (`ink_count`) | 4 | 3–6 | inks, registration |
| Screen ruling (`screen_ruling`) | 0 | 0–0 lines per inch | screening |
| Misregistration (`misregistration`) | 2 | 1–3 mm | registration |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more photographic**: move toward [`constructivist-photomontage-poster`](../constructivist-photomontage-poster/SKILL.md) (Constructivist photomontage poster). Keep the red and black blocks and the heavy lettering; add cut-out halftone photographs on a diagonal layout.
- If the user asks for **more folk**: move toward [`russian-lubok-print`](../russian-lubok-print/SKILL.md) (Russian lubok folk print). Keep the coarse outline and flat colour; drop the strip layout and put the hand colour loosely over a black key line.

- **Came from (go here for a more orthodox version):** [`russian-lubok-print`](../russian-lubok-print/SKILL.md)
- **Mixes well with:** [`constructivist-photomontage-poster`](../constructivist-photomontage-poster/SKILL.md)
- **Kin in another domain:** [`constructivism-web`](../constructivism-web/SKILL.md)
- **Nearest by vector profile:** [`nianhua-new-year-print`](../nianhua-new-year-print/SKILL.md), [`chicha-poster`](../chicha-poster/SKILL.md), [`dong-ho-folk-woodblock`](../dong-ho-folk-woodblock/SKILL.md)

## Emotional target

Quick, loud wit: the viewer reads a street cartoon with a verse, painted by hand that week, and feels that the news is urgent.

**Keywords:** urgent, satirical, bold, agitational, hand-painted · **Brand archetypes:** outlaw, hero, jester

## Canonical evidence (open licence)

Each item below has an open licence or is in the public domain, so you may show it as a reference.

- [Okna ROSTA (ROSTA Window), Mayakovsky](https://commons.wikimedia.org/wiki/File:%D0%9C%D0%B0%D1%8F%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9._%D0%9E%D0%9A%D0%9D%D0%90_%D0%A0%D0%9E%D0%A1%D0%A2%D0%90.jpg) (Vladimir Mayakovsky, 1921): image, Public domain. Wikimedia Commons (public domain, Vladimir Mayakovsky)
- [Okna ROSTA, No. 835: farming programme](https://commons.wikimedia.org/wiki/File:1921._%D0%9F%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B0_%D0%A1.%D0%A5..jpg) (Vladimir Mayakovsky, 1921): image, Public domain. Wikimedia Commons (public domain, Vladimir Mayakovsky)
- [Satire Window of ROSTA](https://commons.wikimedia.org/wiki/File:1920._%D0%98%D0%B2%D0%B0%D0%BD_%D0%9C%D0%B0%D0%BB%D1%8E%D1%82%D0%B8%D0%BD._%D0%9E%D0%BA%D0%BD%D0%B0_%D1%81%D0%B0%D1%82%D0%B8%D1%80%D1%8B_%D0%A0%D0%9E%D0%A1%D0%A2%D0%90.jpg) (Ivan Malyutin, 1920): image, Public domain. Wikimedia Commons (public domain, Ivan Malyutin)

## Sources

- [ROSTA Windows (Wikipedia)](https://en.wikipedia.org/wiki/ROSTA_Windows)
- [Окна сатиры РОСТА (ru.wikipedia)](https://ru.wikipedia.org/wiki/Окна_сатиры_РОСТА)
- [Commons search: Окна РОСТА](https://commons.wikimedia.org/w/index.php?search=Окна+РОСТА&ns6=1)

---

Generated from [`data/print/styles/rosta-window-stencil-poster.json`](../../data/print/styles/rosta-window-stencil-poster.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
