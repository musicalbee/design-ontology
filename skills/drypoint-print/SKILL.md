---
name: drypoint-print
description: "Apply the Drypoint style (1480–1950) when specifying, prompting or art-directing a printed piece or its look on screen: a poster, a plate, a book page, a zine, a label or a print-look illustration. Load when the user asks for: drypoint, burr line print, scratched copper plate, rembrandt three crosses, velvet black line, cassatt drypoint."
domain: print
era: hand-press
triggers:
  - "drypoint"
  - "burr line print"
  - "scratched copper plate"
  - "rembrandt three crosses"
  - "velvet black line"
  - "cassatt drypoint"
  - "needle on copper"
  - "soft intaglio line"
vector_profile:
  tone_method: 2
  ink_layering: 1
  registration_play: 1
  surface_relief: 3
  hand_trace: 5
---

# Drypoint

> A needle that scratches bare copper throws up a burr. The burr prints as a soft black line that no acid and no burin can make.

A steel or diamond needle scratches the plate and pushes up a burr of metal along each furrow. The burr holds ink and prints as a soft velvety black line that wears down after a few dozen impressions.

**Period:** 1480–1950 · **Era:** Hand press · **Domain:** Print · **Also called:** pointe seche (French), Kaltnadelradierung (German)

## When to load this skill

Load it when the user asks for: "drypoint", "burr line print", "scratched copper plate", "rembrandt three crosses", "velvet black line", "cassatt drypoint", "needle on copper", "soft intaglio line".

Good for: fine art editions and portraits, small illustrated books, stationery and invitations with a hand-made look, album artwork.

Do not use it when:
- The design needs a large edition with exact repeats.
- The line must stay hard and even.

## System directives

When specifying, prompting or art-directing a printed piece or its look on screen: a poster, a plate, a book page, a zine, a label or a print-look illustration in Drypoint, you MUST:

1. Draw straight on the bare plate with a hard needle; no ground and no acid.
2. Keep the burr: do not scrape it off, because it holds the ink and makes the velvet edge.
3. Draw the darkest areas with dense, near-parallel lines, and keep the light areas open.
4. Wipe the plate with a thin film of ink left in the field, for a plate tone.
5. Expect the line to thin after 20–50 impressions, and number the edition on that count.
6. Combine with etching only when a firm line is also needed; keep the burr lines for the shadows.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** A clean, hard line of even width.
- **NEVER:** Halftone dots or a smooth gradient.
- **NEVER:** Bright colour.
- **NEVER:** Large flat solid areas.
- **NEVER:** A long edition with no loss of the burr.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Tone method | `■■□□□` 2/5 | solid ink, no tone | fine screen or continuous tone |
| Ink layering | `■□□□□` 1/5 | one ink | many overprinted inks |
| Registration play | `■□□□□` 1/5 | exact register | visible misregister as a feature |
| Surface relief | `■■■□□` 3/5 | flat, ink on the surface | deep bite or emboss in the sheet |
| Hand trace | `■■■■■` 5/5 | uniform machine output | each sheet differs by hand |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Process

- **Family:** intaglio
- **Matrix:** Copper or zinc plate, no acid
- **Press:** Rolling-press with damp paper
- **Image making:** Needle scratched directly; burr kept on the plate
- **Edition:** 20-50 good impressions before the burr flattens

## Inks

- **Strategy:** One intaglio ink, black or brown-black, wiped by hand with a film of tone left in the field.
- **Ink count min:** 1
- **Ink count max:** 1
- **Overprint:** opaque

**Colours**

| Name | Hex | Role |
|---|---|---|
| Intaglio black | `#25211E` | plate ink |

## Tone and screen

- **Method:** line
- **Ruling lpi:** 30
- **Rule:** Make the tone with open lines, 20–40 lines an inch, that thicken into velvet black where the burr is rich.

**Angles**

|  |
||
|  |

## Registration

- **Tolerance mm:** 0
- **Rule:** One plate prints the whole image; a colour print needs a plate for each ink.

## Stock

- **Stock:** Dampened laid or Japan paper, warm cream.
- **Weight gsm min:** 130
- **Weight gsm max:** 200
- **Ground:** #E1D3B1
- **Finish:** Soft and absorbent, with a surface that takes the burr.

## Surface

- **Impression:** A plate mark of 3–6 mm; the inked burr stands as a raised, velvet line on the sheet.
- **Sheen:** Matt and velvety in the lines; the plate tone gives a slight sheen.
- **Texture:** Blurred line edges, and a soft tone round the line where the burr held the ink.

## Process marks

- **Marks:** velvety burr line with blurred edge · plate mark · retroussage plate tone · furrow lines that thin over an edition

## Prompt primer

- **Positive:** drypoint print · velvety burr line · scratched copper plate · soft fuzzy black line · Rembrandt Three Crosses · plate tone · plate mark · cream laid paper
- **Negative:** clean vector line · halftone dots · colour · photograph · woodcut

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Drypoint (process, invented here)

A way to scratch a line straight into a metal plate with a steel needle. The needle throws up a burr that prints a soft, velvet line. Origin: print, Southern Germany, c. 1480.

- Scratch the plate with a hard needle, held like a pencil; the burr stands on each side of the groove.
- Print a small edition, because the burr wears down after 10 to 50 impressions.
- Keep the line soft and dark where the burr is thick, and thin where it is not.
- Combine it with etching or engraving when a crisp line is also needed.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **Royal Society of Painter-Printmakers** (collective, London, 1880–now), exhibited the style. A British society of printmakers that started as the Society of Painter-Etchers. It holds exhibitions of etching, drypoint and other intaglio prints.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Key ink (`key_ink`) | #25211E | #25211E, #3A2F26, #1A2330 | inks |
| Paper colour (`paper_colour`) | #E1D3B1 | #E1D3B1, #E9DFC6, #D3C39E | substrate |
| Ink count (`ink_count`) | 1 | 1–2 | inks, registration |
| Screen ruling (`screen_ruling`) | 30 | 20–50 lines per inch | screening |
| Misregistration (`misregistration`) | 0 | 0–0.5 mm | registration |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **crisper**: move toward [`etching-print`](../etching-print/SKILL.md) (Etching). Etch the line in acid, so that it holds for a long edition; keep a few burr lines for the dark areas.
- If the user asks for **more tone**: move toward [`aquatint-print`](../aquatint-print/SKILL.md) (Aquatint). Add a rosin grain under the line and bite it in steps.

- **Came from (go here for a more orthodox version):** [`engraving-print`](../engraving-print/SKILL.md)
- **Mixes well with:** [`etching-print`](../etching-print/SKILL.md)
- **Nearest by vector profile:** [`chinese-modern-woodcut`](../chinese-modern-woodcut/SKILL.md), [`cordel-xilogravura`](../cordel-xilogravura/SKILL.md), [`woodcut-relief-print`](../woodcut-relief-print/SKILL.md)

## Emotional target

Intimate, quiet intensity: the viewer sees a drawing that was scratched, with a warm and deep black.

**Keywords:** intimate, velvet, deep, quiet, personal · **Brand archetypes:** sage, lover, creator

## Canonical evidence (open licence)

Each item below has an open licence or is in the public domain, so you may show it as a reference.

- [Christ Crucified Between the Two Thieves (The Three Crosses)](https://commons.wikimedia.org/wiki/File:Christ_Crucified_Between_the_Two_Thieves_(The_Three_Crosses)_MET_DP815616.jpg) (Rembrandt, 1653): image, CC0. The Met Open Access, via Wikimedia Commons
- [The Three Crosses (third state)](https://commons.wikimedia.org/wiki/File:Rembrandt_-_The_Three_Crosses_(third_state)_-_WGA19085.jpg) (Rembrandt, 1653): image, Public domain. Web Gallery of Art, via Wikimedia Commons

## Sources

- [Wikipedia: Drypoint](https://en.wikipedia.org/wiki/Drypoint)
- [Wikipedia: Mary Cassatt](https://en.wikipedia.org/wiki/Mary_Cassatt)

---

Generated from [`data/print/styles/drypoint-print.json`](../../data/print/styles/drypoint-print.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
