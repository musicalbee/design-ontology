---
name: etching-print
description: "Apply the Etching style (1513–1900) when specifying, prompting or art-directing a printed piece or its look on screen: a poster, a plate, a book page, a zine, a label or a print-look illustration. Load when the user asks for: etching, etched illustration, rembrandt etching, intaglio, needle drawing, old print with cross-hatching."
domain: print
era: hand-press
triggers:
  - "etching"
  - "etched illustration"
  - "rembrandt etching"
  - "intaglio"
  - "needle drawing"
  - "old print with cross-hatching"
  - "drypoint"
  - "printmaking look"
vector_profile:
  tone_method: 3
  ink_layering: 1
  registration_play: 1
  surface_relief: 4
  hand_trace: 4
---

# Etching

> A needle that moves through wax as easily as a pen gives the artist a free line, and the acid gives it depth.

The artist draws with a needle through a wax ground on a metal plate, and acid bites the lines. The line is free like a pen line. Callot made it exact; Rembrandt made it dark and alive, with tone from hatching and from ink left on the plate.

**Period:** 1513–1900 · **Era:** Hand press · **Domain:** Print · **Also called:** Painter-etching, Radierung, Eau-forte, Hard-ground etching

## When to load this skill

Load it when the user asks for: "etching", "etched illustration", "rembrandt etching", "intaglio", "needle drawing", "old print with cross-hatching", "drypoint", "printmaking look".

Good for: book and editorial illustration, wine and spirits labels, architecture views, fine art prints.

Do not use it when:
- The picture must read at a small size on a screen.
- The brand needs bright, flat colour.

## System directives

When specifying, prompting or art-directing a printed piece or its look on screen: a poster, a plate, a book page, a zine, a label or a print-look illustration in Etching, you MUST:

1. Draw with a free, even line of the needle; the width comes from the time in the acid, not from the pressure of the hand.
2. Make the dark parts by more layers of hatching and by a longer bite: stop out the light lines and bite the dark ones again.
3. Use hatching in 1–4 directions; let the lines be loose and a little irregular.
4. Leave a film of ink on the plate (plate tone) for a soft dark where the image needs atmosphere.
5. Keep a wide margin and a clear plate mark.
6. Print in a warm black or a brown-black on a cream or a Japanese paper.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Mechanical hatching with an equal pitch everywhere.
- **NEVER:** Lines that swell like a burin line.
- **NEVER:** Flat colour or a halftone screen.
- **NEVER:** A hard, black edge round every form.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Tone method | `■■■□□` 3/5 | solid ink, no tone | fine screen or continuous tone |
| Ink layering | `■□□□□` 1/5 | one ink | many overprinted inks |
| Registration play | `■□□□□` 1/5 | exact register | visible misregister as a feature |
| Surface relief | `■■■■□` 4/5 | flat, ink on the surface | deep bite or emboss in the sheet |
| Hand trace | `■■■■□` 4/5 | uniform machine output | each sheet differs by hand |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Process

- **Family:** intaglio
- **Matrix:** A copper or iron plate, coated with an acid-resistant ground of wax, resin and asphalt.
- **Press:** A roller press with felt blankets, as for engraving.
- **Image making:** The artist draws through the ground with a needle, bites the plate in acid in stages, cleans it, and proofs it.
- **Edition:** Some tens to some hundreds; the artist often prints each impression with a different wipe.

## Inks

- **Strategy:** One warm black or brown-black ink; the artist wipes it with tarlatan and the hand and leaves some on the plate.
- **Ink count min:** 1
- **Ink count max:** 1
- **Overprint:** opaque

**Colours**

| Name | Hex | Role |
|---|---|---|
| Warm etching black | `#1E1A16` | lines and plate tone |

## Tone and screen

- **Method:** hatch
- **Ruling lpi:** 70
- **Rule:** Make the tone with 1–4 layers of free hatching at 50–100 a inch and with plate tone.

**Angles**

|  |
||
|  |

## Registration

- **Tolerance mm:** 0
- **Rule:** One plate prints all the image; there is no register.

## Stock

- **Stock:** Laid rag paper, or Japanese gampi and kozo paper for a warm, soft impression.
- **Weight gsm min:** 30
- **Weight gsm max:** 250
- **Ground:** #F1EADB
- **Finish:** Soft, dampened before the print; Japanese papers are smooth and thin.

## Surface

- **Impression:** A plate mark and lines that stand up a little from the paper.
- **Sheen:** Matt to a soft gloss; plate tone is matt.
- **Texture:** A living web of thin lines, with a haze of plate tone in the darks.

## Process marks

- **Marks:** plate mark · plate tone and wipe marks · foul biting specks · lines of several depths · drypoint burr in the darks · a signature in the plate

## Prompt primer

- **Positive:** etching · Rembrandt etching · free needle line · loose cross-hatching · plate tone · plate mark · warm black ink on cream paper · intaglio print
- **Negative:** colour · halftone · smooth digital shading · vector line · flat graphic shapes

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Etching (process, invented here)

An intaglio print from a metal plate whose lines a needle draws through an acid-resistant ground and an acid then bites. Origin: print, Basel, 1513.

- Coat the plate with a ground of wax, resin and asphalt and draw through it with a needle of 0.2–0.5 mm.
- Bite the plate in acid in stages; stop out the light lines with varnish after 5–10 minutes and bite the dark lines again.
- Ink the plate, wipe the surface with tarlatan, and leave a film of plate tone where a soft dark is needed.
- Print on dampened paper on a roller press, so that the plate leaves a mark round the image.

## Media

The salons, schools, magazines, publishers, galleries and platforms that carried this style.

- **Aux Quatre Vents** (publisher, Antwerp, 1548–1601), published the style. Hieronymus Cock and Volcxken Diericx founded this Antwerp print house. It issued more than 1,100 prints by 1570 and split the work into design, engraving and sale.
- **Clement de Jonghe print shop** (publisher, Amsterdam, 1643–1677), sold the style. An Amsterdam print shop that Clement de Jonghe ran from 1643 to 1677. It held more than 60,000 prints and many of the etched plates of Rembrandt.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Key ink (`key_ink`) | #1E1A16 | #1E1A16, #3A2418 | inks |
| Paper colour (`paper_colour`) | #F1EADB | #F1EADB, #EADFC6 | substrate |
| Ink count (`ink_count`) | 1 | 1–1 | inks, registration |
| Screen ruling (`screen_ruling`) | 70 | 40–110 lines per inch | screening |
| Misregistration (`misregistration`) | 0 | 0–0 mm | registration |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more exact**: move toward [`engraving-print`](../engraving-print/SKILL.md) (Copper engraving). Cut swelling burin lines in systems, with an equal pitch and no plate tone.
- If the user asks for **darker and softer**: move toward [`mezzotint-print`](../mezzotint-print/SKILL.md) (Mezzotint). Rock the full plate black and scrape the lights; drop the line.

- **Came from (go here for a more orthodox version):** [`engraving-print`](../engraving-print/SKILL.md)
- **Mixes well with:** [`mezzotint-print`](../mezzotint-print/SKILL.md)
- **Kin in another domain:** [`baroque-painting`](../baroque-painting/SKILL.md), [`realism-painting`](../realism-painting/SKILL.md)
- **Nearest by vector profile:** [`engraving-print`](../engraving-print/SKILL.md), [`private-press-book`](../private-press-book/SKILL.md), [`mezzotint-print`](../mezzotint-print/SKILL.md)

## Emotional target

Intimacy and atmosphere: the viewer sees the hand of the artist, and the darks feel deep and quiet.

**Keywords:** intimate, atmospheric, sketched, warm, melancholic · **Brand archetypes:** sage, creator

## Canonical evidence (open licence)

Each item below has an open licence or is in the public domain, so you may show it as a reference.

- [The Hundred Guilder Print](https://www.metmuseum.org/art/collection/search/371732) (Rembrandt (Rembrandt van Rijn), 1648): image, CC0. The Metropolitan Museum of Art, Open Access
- [The Hanging, plate 11 from The Miseries and Misfortunes of War](https://www.metmuseum.org/art/collection/search/420819) (Jacques Callot, 1633): image, CC0. The Metropolitan Museum of Art, Open Access
- [Frontispiece, plate 1 from The Miseries and Misfortunes of War](https://www.metmuseum.org/art/collection/search/420753) (Jacques Callot, 1633): image, CC0. The Metropolitan Museum of Art, Open Access

## Sources

- [Etching (Wikipedia)](https://en.wikipedia.org/wiki/Etching)
- [Rembrandt's etchings (Wikipedia)](https://en.wikipedia.org/wiki/List_of_etchings_by_Rembrandt)
- Antony Griffiths, Prints and Printmaking (British Museum Press, 1996)

---

Generated from [`data/print/styles/etching-print.json`](../../data/print/styles/etching-print.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
