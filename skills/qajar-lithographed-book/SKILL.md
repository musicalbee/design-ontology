---
name: qajar-lithographed-book
description: "Apply the Qajar lithographed book style (1832–c.1925) when specifying, prompting or art-directing a printed piece or its look on screen: a poster, a plate, a book page, a zine, a label or a print-look illustration. Load when the user asks for: persian lithograph, qajar book, nastaliq print, sangi book, tabriz lithograph, shahnameh lithograph."
domain: print
era: industrial-press
triggers:
  - "persian lithograph"
  - "qajar book"
  - "nastaliq print"
  - "sangi book"
  - "tabriz lithograph"
  - "shahnameh lithograph"
  - "iranian lithographed page"
  - "persian manuscript print"
vector_profile:
  tone_method: 1
  ink_layering: 1
  registration_play: 1
  surface_relief: 1
  hand_trace: 5
---

# Qajar lithographed book

> A printed book can keep the hand of the scribe and the page of the manuscript, and still be cheap to copy.

A book printed from stone. A scribe wrote each page in nastaliq with greasy ink, and the press copied the page as it was. The book looks like a manuscript, with a frame of ruled lines and small painted pictures.

**Period:** 1832–c.1925 · **Era:** Industrial press · **Domain:** Print · **Also called:** Sangi book, Chap-e sangi, Persian lithographed book, Tabriz lithograph

## When to load this skill

Load it when the user asks for: "persian lithograph", "qajar book", "nastaliq print", "sangi book", "tabriz lithograph", "shahnameh lithograph", "iranian lithographed page", "persian manuscript print".

Good for: book covers for Persian literature, poetry and literature festival graphics, title pages and chapter openers, heritage stationery.

Do not use it when:
- The brief asks for a loud, modern or photographic image.
- The text must be in a Latin face.

## System directives

When specifying, prompting or art-directing a printed piece or its look on screen: a poster, a plate, a book page, a zine, a label or a print-look illustration in Qajar lithographed book, you MUST:

1. Write the page by hand in nastaliq on transfer paper; do not set type.
2. Draw each page inside a frame of ruled lines, with the text in two columns or at a slant.
3. Keep the manuscript layout: a decorated head piece, a title cartouche and a colophon.
4. Draw the pictures with a pen in the same ink, with fine line and no tone.
5. Print in one black ink; add red or a colour wash by hand, after printing.
6. Print on laid paper with a clear chain line.
7. Accept a soft edge on the line where the grease spread on the stone.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Metal type in a regular Latin face.
- **NEVER:** Halftone photographs.
- **NEVER:** A heavy dark solid block.
- **NEVER:** Colour printed in register from many stones.
- **NEVER:** A modern sans-serif face.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Tone method | `■□□□□` 1/5 | solid ink, no tone | fine screen or continuous tone |
| Ink layering | `■□□□□` 1/5 | one ink | many overprinted inks |
| Registration play | `■□□□□` 1/5 | exact register | visible misregister as a feature |
| Surface relief | `■□□□□` 1/5 | flat, ink on the surface | deep bite or emboss in the sheet |
| Hand trace | `■■■■■` 5/5 | uniform machine output | each sheet differs by hand |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Process

- **Family:** planographic
- **Matrix:** A limestone slab. The scribe writes on transfer paper in lithographic ink, and the paper is pressed on the stone.
- **Press:** A hand lithographic press with a scraper bar.
- **Image making:** A scribe writes the text in nastaliq. A painter draws the pictures with a pen on the same transfer paper.
- **Edition:** Hundreds to a few thousand copies; the stone is wiped and used again.

## Inks

- **Strategy:** One black lithographic ink for text, frames and pictures. The owner may add red and colour by hand.
- **Ink count min:** 1
- **Ink count max:** 3
- **Overprint:** opaque

**Colours**

| Name | Hex | Role |
|---|---|---|
| Lithographic black | `#1F1B18` | text, frame and drawing |
| Hand-tint red | `#B03A2E` | a later hand colour on titles and borders |

## Tone and screen

- **Method:** line
- **Ruling lpi:** 0
- **Rule:** Draw all form as a pen line; make a tone only with the density of the line and with a hand wash after printing.

## Registration

- **Tolerance mm:** 1
- **Rule:** One stone makes the page, so the register is not a problem; a colour added by hand can sit 1 mm off the line.

## Stock

- **Stock:** An imported or hand-made laid paper, off-white, with a visible chain line.
- **Weight gsm min:** 60
- **Weight gsm max:** 110
- **Ground:** #E8DDC0
- **Finish:** Uncoated and lightly sized, matt.

## Surface

- **Impression:** A very light bite: the stone prints flat, with no plate mark.
- **Sheen:** Matt black with a small grey bloom where the stone was over-wet.
- **Texture:** A fine stone grain in the thick strokes and a soft edge on the pen line.

## Process marks

- **Marks:** nastaliq scribe hand · ruled frame lines · stone grain · manuscript page layout · soft grease spread on the line · hand-tinted red on titles · foxing and chain lines in the paper

## Prompt primer

- **Positive:** Persian lithographed book page · nastaliq calligraphy in black · ruled frame border · pen-drawn miniature · stone lithograph grain · off-white laid paper · Qajar-period book · hand-tinted red title
- **Negative:** metal type · halftone photo · glossy paper · full-colour print · modern sans-serif

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

- **Dar al-Fonun** (school, Tehran, Iran, 1851–now), published the style. A polytechnic school that the chancellor Amir Kabir founded in Tehran. Sources say that it had a lithographic press for teaching texts.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Key ink (`key_ink`) | #1F1B18 | #1F1B18, #2B2420 | inks |
| Paper colour (`paper_colour`) | #E8DDC0 | #E8DDC0, #F0E8D0, #E2D4B0 | substrate |
| Ink count (`ink_count`) | 1 | 1–3 | inks, registration |
| Screen ruling (`screen_ruling`) | 0 | 0–0 lines per inch | screening |
| Misregistration (`misregistration`) | 1 | 0–2 mm | registration |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more ornate and coloured**: move toward [`chromolithograph-poster`](../chromolithograph-poster/SKILL.md) (Chromolithograph poster). Add 4–6 colour stones, a gold border and a gloss finish.
- If the user asks for **more austere**: move toward [`private-press-book`](../private-press-book/SKILL.md) (Private-press book). Replace the hand script with a book face in black and red, on laid paper with wide margins.

- **Nearest by vector profile:** [`xerox-zine`](../xerox-zine/SKILL.md), [`chinese-modern-woodcut`](../chinese-modern-woodcut/SKILL.md), [`narbut-ukrainian-graphics`](../narbut-ukrainian-graphics/SKILL.md)

## Emotional target

Respect for a learned book: the viewer sees a quiet, dense page made by a trained hand.

**Keywords:** calligraphic, scholarly, intimate, dense, traditional · **Brand archetypes:** sage, creator

## Canonical evidence (open licence)

Each item below has an open licence or is in the public domain, so you may show it as a reference.

- [Shahnama, a complete lithographed book, dated 1901](https://commons.wikimedia.org/wiki/File:A_rare_complete_Shahnama_lithograph_book_comissioned_for_Muhammad_Ali_Shah_Qajar,_dated_1901.jpg) (Muhammad Hussein (scribe); Hussain Ali and Muhammad Kazim (pictures), 1901): image, Public domain. Plakasauctions.com via Wikimedia Commons. 1901 is in the reign of Muzaffar al-Din Shah.

## Sources

- [Persian lithography and Qajar books (Commons file page, 1901 Shahnama)](https://commons.wikimedia.org/wiki/File:A_rare_complete_Shahnama_lithograph_book_comissioned_for_Muhammad_Ali_Shah_Qajar,_dated_1901.jpg)
- [Lithography (Wikipedia)](https://en.wikipedia.org/wiki/Lithography)

---

Generated from [`data/print/styles/qajar-lithographed-book.json`](../../data/print/styles/qajar-lithographed-book.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
