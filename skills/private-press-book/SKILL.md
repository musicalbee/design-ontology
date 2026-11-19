---
name: private-press-book
description: "Apply the Private-press book style (1891–1939) when specifying, prompting or art-directing a printed piece or its look on screen: a poster, a plate, a book page, a zine, a label or a print-look illustration. Load when the user asks for: kelmscott, william morris book, fine press, private press, arts and crafts book, illuminated page."
domain: print
era: industrial-press
triggers:
  - "kelmscott"
  - "william morris book"
  - "fine press"
  - "private press"
  - "arts and crafts book"
  - "illuminated page"
  - "woodcut border"
  - "letterpress book"
vector_profile:
  tone_method: 2
  ink_layering: 2
  registration_play: 1
  surface_relief: 3
  hand_trace: 3
---

# Private-press book

> A book is one object: the type, the page, the paper, the ink and the ornament are made together and by hand.

A book printed by hand on handmade paper, in a heavy type cut for the press, with woodcut borders and initials, in black and red. William Morris started the Kelmscott Press in 1891 against the grey, thin books of the steam press; the Doves Press made the same craft plain.

**Period:** 1891–1939 · **Era:** Industrial press · **Domain:** Print · **Also called:** Kelmscott style, Fine press book, Revival printing, Arts and Crafts book

## When to load this skill

Load it when the user asks for: "kelmscott", "william morris book", "fine press", "private press", "arts and crafts book", "illuminated page", "woodcut border", "letterpress book".

Good for: limited-edition books, poetry and literary covers, certificates and invitations, heritage brand booklets.

Do not use it when:
- The reader must scan the text fast.
- The book needs photographs.

## System directives

When specifying, prompting or art-directing a printed piece or its look on screen: a poster, a plate, a book page, a zine, a label or a print-look illustration in Private-press book, you MUST:

1. Set a dense, dark text page in one heavy roman or gothic type, with little space between the words and the lines.
2. Use the two pages of an opening as one unit, with margins in the ratio 2:3:4:6 (inner, top, outer, bottom).
3. Print in a deep black and use red for the headings, the shoulder notes and the initials.
4. Frame the first page with a woodcut border of leaves and flowers, and start each part with a woodcut initial.
5. Print on handmade rag paper or vellum, with a clear bite of the type into the sheet.
6. Bind in plain vellum or linen; the decoration is inside the book, not on the cover.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Thin, grey type on a smooth, coated paper.
- **NEVER:** Wide spaces between words that make rivers.
- **NEVER:** A photographic image or a halftone.
- **NEVER:** Equal margins on all four sides.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Tone method | `■■□□□` 2/5 | solid ink, no tone | fine screen or continuous tone |
| Ink layering | `■■□□□` 2/5 | one ink | many overprinted inks |
| Registration play | `■□□□□` 1/5 | exact register | visible misregister as a feature |
| Surface relief | `■■■□□` 3/5 | flat, ink on the surface | deep bite or emboss in the sheet |
| Hand trace | `■■■□□` 3/5 | uniform machine output | each sheet differs by hand |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Process

- **Family:** relief
- **Matrix:** Metal type cast for the press (Golden, Troy, Doves Type) and woodcut blocks for borders and pictures.
- **Press:** An iron hand press (Albion), worked by two pressmen.
- **Image making:** The designer draws the borders and initials; a wood engraver cuts them; the compositors set the text by hand.
- **Edition:** Some 200–500 paper copies and a few on vellum.

## Inks

- **Strategy:** A dense black ink that Morris had made to order, and a vermilion for the rubrics.
- **Ink count min:** 1
- **Ink count max:** 2
- **Overprint:** opaque

**Colours**

| Name | Hex | Role |
|---|---|---|
| Dense black | `#151312` | the text and the woodcuts |
| Rubric red | `#A8322A` | headings, shoulder notes and initials |

## Tone and screen

- **Method:** line
- **Ruling lpi:** 50
- **Rule:** Make the tone only with the white-on-black and black-on-white lines of the woodcut.

**Angles**

|  |
||
|  |

## Registration

- **Tolerance mm:** 0.2
- **Rule:** The red prints in a second pull; it must sit exactly in its place in the text.

## Stock

- **Stock:** Handmade linen paper (Batchelor) with a watermark, or vellum.
- **Weight gsm min:** 90
- **Weight gsm max:** 160
- **Ground:** #F2EBDA
- **Finish:** Laid, with deckle edges, dampened before the print.

## Surface

- **Impression:** A clear bite of the type and the cuts into the damp paper.
- **Sheen:** A rich, matt black.
- **Texture:** A dark, even page of type framed in white, with dense leaf ornament.

## Process marks

- **Marks:** deckle edges · type bite · laid lines and watermark · a red rubric in the text · woodcut initials · a colophon with the press mark

## Prompt primer

- **Positive:** Kelmscott Press page · William Morris book design · dense black text block · woodcut floral border · red and black printing · handmade paper with deckle edges · decorated initial · Arts and Crafts book
- **Negative:** photograph · sans-serif · wide word spacing · coated paper · flat digital colour · equal margins

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Letterpress (process)

Printing from raised metal or wood type and blocks, locked in a forme and pressed into the paper. Origin: typeface, Mainz, 1454.

- Set the type by hand from a case, letter by letter, and justify each line with spaces in the composing stick.
- Lock the type, the rules and the blocks in a chase, ink the forme with rollers and press it into the sheet.
- Dampen a soft rag paper so that the type bites 0.1–0.3 mm into it.
- Print each ink from a separate forme or a separate pull, and register them by pins or lays.

### Woodcut (process)

A print from a block of wood with the white parts cut away; the result is flat colour, hard edges and visible grain. Origin: print, Dunhuang, 868.

- Cut the block along the grain with a knife and a gouge; leave a line of 1mm to 3mm for the black.
- Use one block for each colour and register them within 1 mm.
- Print with a flat, opaque ink and leave the grain and the knife marks visible.
- Keep the shapes flat, with no more than 3 to 6 tones in a print.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **Doves Press** (publisher, Hammersmith, London, 1900–1916), published the style. A private press in Hammersmith that printed in one typeface, the Doves Type. Its best-known book is the Doves Bible of 1902 to 1904.
- **Kelmscott Press** (publisher, Hammersmith, London, 1891–1898), published the style. A private press that William Morris started to print books by hand in the manner of the early printers. It cut its own gothic types, Troy and Chaucer, after the letters of the first printed books.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Key ink (`key_ink`) | #151312 | #151312 | inks |
| Paper colour (`paper_colour`) | #F2EBDA | #F2EBDA, #F5EFE0 | substrate |
| Ink count (`ink_count`) | 2 | 1–2 | inks, registration |
| Screen ruling (`screen_ruling`) | 50 | 40–70 lines per inch | screening |
| Misregistration (`misregistration`) | 0.2 | 0–0.5 mm | registration |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **plainer**: move toward [`garalde-old-style`](../garalde-old-style/SKILL.md) (Garalde old-style serif). Keep the hand press and the paper, but drop the borders and set the text in a light Venetian roman, as the Doves Press did.
- If the user asks for **louder**: move toward [`wood-type-poster`](../wood-type-poster/SKILL.md) (Wood-type poster). Change the book page for a broadside of stacked display type in black and red.

- **Came from (go here for a more orthodox version):** [`woodcut-relief-print`](../woodcut-relief-print/SKILL.md)
- **Rejects (the opposite pole; do not blend):** [`chromolithograph-poster`](../chromolithograph-poster/SKILL.md)
- **Kin in another domain:** [`arts-and-crafts-architecture`](../arts-and-crafts-architecture/SKILL.md), [`arts-and-crafts-interior`](../arts-and-crafts-interior/SKILL.md), [`blackletter`](../blackletter/SKILL.md), [`garalde-old-style`](../garalde-old-style/SKILL.md)
- **Nearest by vector profile:** [`engraving-print`](../engraving-print/SKILL.md), [`woodcut-relief-print`](../woodcut-relief-print/SKILL.md), [`etching-print`](../etching-print/SKILL.md)

## Emotional target

Respect for the craft: the reader feels the weight and the care of a book made to last.

**Keywords:** crafted, reverent, rich, medieval, dense · **Brand archetypes:** creator, sage

## Canonical evidence (open licence)

Each item below has an open licence or is in the public domain, so you may show it as a reference.

- [Kelmscott chaucer](https://commons.wikimedia.org/wiki/File:Kelmscott_chaucer.jpg) (William Morris, Kelmscott Press, 1896): image, Public domain. Wikimedia Commons (University of New Hampshire special collections scan)
- [Houghton Typ 805K.96.275 - Works of Geoffrey Chaucer, 1896 - pg. 483](https://commons.wikimedia.org/wiki/File:Houghton_Typ_805K.96.275_-_Works_of_Geoffrey_Chaucer,_1896_-_pg._483.jpg) (William Morris, Kelmscott Press, 1896): image, Public domain. Wikimedia Commons (Houghton Library, Harvard)
- [DovesPressBible](https://commons.wikimedia.org/wiki/File:DovesPressBible.jpg) (T. J. Cobden-Sanderson and Emery Walker, Doves Press, 1902): image, Public domain. Wikimedia Commons (Flickr photo of the Doves Press Bible)

## Sources

- [Kelmscott Press (Wikipedia)](https://en.wikipedia.org/wiki/Kelmscott_Press)
- [Private press (Wikipedia)](https://en.wikipedia.org/wiki/Private_press)
- William S. Peterson, The Kelmscott Press: A History of William Morris's Typographical Adventure (Clarendon, 1991)

---

Generated from [`data/print/styles/private-press-book.json`](../../data/print/styles/private-press-book.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
