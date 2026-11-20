---
name: sosaku-hanga-print
description: "Apply the Sosaku-hanga creative print style (1904–1970) when specifying, prompting or art-directing a printed piece or its look on screen: a poster, a plate, a book page, a zine, a label or a print-look illustration. Load when the user asks for: sosaku-hanga, creative print japan, onchi koshiro, modern japanese woodblock, abstract woodblock print, hand-cut japanese print."
domain: print
era: industrial-press
triggers:
  - "sosaku-hanga"
  - "creative print japan"
  - "onchi koshiro"
  - "modern japanese woodblock"
  - "abstract woodblock print"
  - "hand-cut japanese print"
  - "gouge marks print"
vector_profile:
  tone_method: 2
  ink_layering: 2
  registration_play: 3
  surface_relief: 2
  hand_trace: 5
---

# Sosaku-hanga creative print

> A print is art when one person makes the whole of it, from the drawing to the last rub of the baren.

The artist draws, cuts and prints the block alone, and so rejects the three trades of the ukiyo-e shop. The result is a bold cut, an individual block, abstract shape and visible tool marks.

**Period:** 1904–1970 · **Era:** Industrial press · **Domain:** Print · **Also called:** Sosaku-hanga, 創作版画, Creative print, Self-carved, self-printed print

## When to load this skill

Load it when the user asks for: "sosaku-hanga", "creative print japan", "onchi koshiro", "modern japanese woodblock", "abstract woodblock print", "hand-cut japanese print", "gouge marks print".

Good for: album and book covers, gallery posters, editorial art with a personal voice, limited-edition art prints.

Do not use it when:
- The brief needs a soft, polished Edo or shin-hanga finish.
- The message needs exact register and a clean, regular edge.

## System directives

When specifying, prompting or art-directing a printed piece or its look on screen: a poster, a plate, a book page, a zine, a label or a print-look illustration in Sosaku-hanga creative print, you MUST:

1. Cut the block yourself. Leave the gouge and knife marks in the print.
2. Use 1–8 inks, and choose them with the cut: a large black mass, a field of red, a ground of blue-grey.
3. Use the grain of the plank or the plywood as a texture, not a fault.
4. Print the ink unevenly, 0.5–1.5 mm out of register in places, and keep the shift.
5. Allow abstract shape, or a strong, simple figure, with no soft gradation.
6. Sign in pencil in the margin, and write the edition number (for example 12/30).
7. Print on washi or on thin machine paper with a baren or a small press.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** A polished, even gradation in the manner of a commercial print.
- **NEVER:** A carver and a printer who are not the artist.
- **NEVER:** Halftone or a photographic tone.
- **NEVER:** An airbrushed or vector-clean edge.
- **NEVER:** Pretty detail with no cut mark.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Tone method | `■■□□□` 2/5 | solid ink, no tone | fine screen or continuous tone |
| Ink layering | `■■□□□` 2/5 | one ink | many overprinted inks |
| Registration play | `■■■□□` 3/5 | exact register | visible misregister as a feature |
| Surface relief | `■■□□□` 2/5 | flat, ink on the surface | deep bite or emboss in the sheet |
| Hand trace | `■■■■■` 5/5 | uniform machine output | each sheet differs by hand |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Process

- **Family:** relief
- **Matrix:** A plank, plywood or sometimes linoleum, cut by the artist with a knife and gouges.
- **Press:** A baren or a spoon by hand, or a small press.
- **Image making:** One artist draws, cuts and prints. No publisher sets the subject.
- **Edition:** Small numbered editions, often 10–50 sheets.

## Inks

- **Strategy:** Water-based or oil-based ink, 1–8 passes, mixed by the artist. The black block prints the mass, and the colour blocks print on or beside it.
- **Ink count min:** 1
- **Ink count max:** 8
- **Overprint:** transparent

**Colours**

| Name | Hex | Role |
|---|---|---|
| Black sumi | `#1E1E22` | key block and mass |
| Deep red | `#A5352B` | accent |
| Blue-grey | `#5A6C8A` | ground |
| Mustard | `#C9A03F` | field |

## Tone and screen

- **Method:** solid
- **Ruling lpi:** 0
- **Rule:** Make a tone with a flat mass of ink or a field of cut lines. The style has no screen.

## Registration

- **Tolerance mm:** 1
- **Rule:** Allow 0.5–1.5 mm of shift between the inks, and keep it as the sign of the hand.

## Stock

- **Stock:** Washi, or a thin machine-made paper.
- **Weight gsm min:** 40
- **Weight gsm max:** 100
- **Ground:** #EDE3CC
- **Finish:** Soft and absorbent, with no coating.

## Surface

- **Impression:** Light to medium. A hard rub leaves the line of the block on the back.
- **Sheen:** Matt, with a slight shine where the ink is thick.
- **Texture:** Visible wood grain, gouge marks, and ink that is thick in one place and thin in another.

## Process marks

- **Marks:** gouge and knife marks left visible · wood grain in solids · uneven ink · pencil signature and edition number in the margin · colour shift of 0.5–1.5 mm

## Prompt primer

- **Positive:** Japanese creative woodblock print · bold gouge marks · abstract shapes · uneven hand-printed ink · visible wood grain · limited palette · pencil signature in the margin · expressive cut line
- **Negative:** ukiyo-e polished gradation · halftone · photographic · vector clean · airbrush

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Woodcut (process)

A print from a block of wood with the white parts cut away; the result is flat colour, hard edges and visible grain. Origin: print, Dunhuang, 868.

- Cut the block along the grain with a knife and a gouge; leave a line of 1mm to 3mm for the black.
- Use one block for each colour and register them within 1 mm.
- Print with a flat, opaque ink and leave the grain and the knife marks visible.
- Keep the shapes flat, with no more than 3 to 6 tones in a print.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **Nihon Sosaku Hanga Kyokai** (collective, Tokyo, 1918–1931), gathered the style. The Japan Creative Print Association. Its members held shows of prints that the artists drew, cut and printed alone. It closed in 1931 and later came back as the Nihon Hanga Kyokai.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Key ink (`key_ink`) | #1E1E22 | #1E1E22, #2B2B2E, #3A2E26 | inks |
| Paper colour (`paper_colour`) | #EDE3CC | #EDE3CC, #F1E9D6, #E4D9BF | substrate |
| Ink count (`ink_count`) | 3 | 1–8 | inks, registration |
| Screen ruling (`screen_ruling`) | 0 | 0–0 lines per inch | screening |
| Misregistration (`misregistration`) | 1 | 0.3–2 mm | registration |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **softer and more scenic**: move toward [`shin-hanga-print`](../shin-hanga-print/SKILL.md) (Shin-hanga new print). Add tonal blocks and wiped gradations, keep a thin key line, and bring the register to 0.2 mm.
- If the user asks for **more European and harsh**: move toward [`expressionist-woodcut-print`](../expressionist-woodcut-print/SKILL.md) (Die Brucke woodcut). Cut deeper, use black and one raw colour, and keep the wood grain.

- **Came from (go here for a more orthodox version):** [`woodcut-relief-print`](../woodcut-relief-print/SKILL.md)
- **Rejects (the opposite pole; do not blend):** [`nishiki-e-polychrome-woodblock`](../nishiki-e-polychrome-woodblock/SKILL.md)
- **Kin in another domain:** [`expressionism-painting`](../expressionism-painting/SKILL.md)
- **Nearest by vector profile:** [`taller-grafica-popular-linocut`](../taller-grafica-popular-linocut/SKILL.md), [`cordel-xilogravura`](../cordel-xilogravura/SKILL.md), [`battala-woodcut`](../battala-woodcut/SKILL.md)

## Emotional target

The force of one hand: the viewer feels that a person cut this block, and that the person had something to say.

**Keywords:** raw, personal, bold, modern, expressive · **Brand archetypes:** creator, outlaw

## Canonical evidence (open licence)

Each item below has an open licence or is in the public domain, so you may show it as a reference.

- [Mother and Child](https://commons.wikimedia.org/wiki/File:Mother_and_Child_by_Onchi_K%C5%8Dshir%C5%8D,_1915,_woodblock_print,_Honolulu_Museum_of_Art.jpg) (Onchi Koshiro, 1915): image, Public domain. Wikimedia Commons (Honolulu Museum of Art)
- [Lyric No. 12, Uncertain Hope](https://commons.wikimedia.org/wiki/File:Onchi_Koshiro_-_%27Lyric_No._12,_Uncertain_Hope,_1951,_woodblock_print,_HMA.jpg) (Onchi Koshiro, 1951): image, Public domain. Wikimedia Commons (Honolulu Museum of Art)
- [Fisherman](https://clevelandart.org/art/1960.122) (Yamamoto Kanae, 1906): image, CC0. Cleveland Museum of Art Open Access

## Sources

- [Wikipedia: Sōsaku-hanga](https://en.wikipedia.org/wiki/Sōsaku-hanga)
- [Wikipedia: Kanae Yamamoto](https://en.wikipedia.org/wiki/Kanae_Yamamoto)
- [Cleveland Museum of Art Open Access API](https://openaccess-api.clevelandart.org/)

---

Generated from [`data/print/styles/sosaku-hanga-print.json`](../../data/print/styles/sosaku-hanga-print.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
