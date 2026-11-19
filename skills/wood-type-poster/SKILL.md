---
name: wood-type-poster
description: "Apply the Wood-type poster style (1828–1900) when specifying, prompting or art-directing a printed piece or its look on screen: a poster, a plate, a book page, a zine, a label or a print-look illustration. Load when the user asks for: wood type poster, letterpress poster, broadside, circus poster, wanted poster, show bill."
domain: print
era: industrial-press
triggers:
  - "wood type poster"
  - "letterpress poster"
  - "broadside"
  - "circus poster"
  - "wanted poster"
  - "show bill"
  - "americana poster"
  - "old west poster"
vector_profile:
  tone_method: 1
  ink_layering: 2
  registration_play: 3
  surface_relief: 2
  hand_trace: 3
---

# Wood-type poster

> A poster is a stack of words, and each line takes the largest and boldest type that fits the width.

A bill set in large letters cut from end-grain wood, printed on a hand or a job press in one or two flat inks. Darius Wells made the type cheap in 1828; the auction, the circus and the theatre filled walls with stacked lines of fat faces and slabs.

**Period:** 1828–1900 · **Era:** Industrial press · **Domain:** Print · **Also called:** Letterpress broadside, Show bill, Wood-type broadside, Circus poster

## When to load this skill

Load it when the user asks for: "wood type poster", "letterpress poster", "broadside", "circus poster", "wanted poster", "show bill", "americana poster", "old west poster".

Good for: gig and fair posters, craft beer and food labels, menus and signs, event announcements.

Do not use it when:
- The message needs an image, a photograph or long text.
- The brand must look quiet or refined.

## System directives

When specifying, prompting or art-directing a printed piece or its look on screen: a poster, a plate, a book page, a zine, a label or a print-look illustration in Wood-type poster, you MUST:

1. Centre each line and set it in the largest type that fills the measure.
2. Change the face, the width and the size from line to line; three to six faces on one sheet are normal.
3. Put the key word (the act, the date, the price) in the largest line, often in a second ink.
4. Print flat ink with no tone: black for the text and one red or blue for the accent.
5. Use rules, stars and a stock wood or metal cut as the only images.
6. Keep the tight vertical rhythm of the chase: little space between the lines.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** A photograph or a tone in the image.
- **NEVER:** One face at one size for all lines.
- **NEVER:** Left-aligned text with wide margins.
- **NEVER:** Thin, light type or a script face.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Tone method | `■□□□□` 1/5 | solid ink, no tone | fine screen or continuous tone |
| Ink layering | `■■□□□` 2/5 | one ink | many overprinted inks |
| Registration play | `■■■□□` 3/5 | exact register | visible misregister as a feature |
| Surface relief | `■■□□□` 2/5 | flat, ink on the surface | deep bite or emboss in the sheet |
| Hand trace | `■■■□□` 3/5 | uniform machine output | each sheet differs by hand |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Process

- **Family:** relief
- **Matrix:** Letters routed from end-grain maple with a pantograph, locked in a chase with metal rules and cuts.
- **Press:** A hand press or a platen job press; large sheets on a cylinder press.
- **Image making:** A jobbing printer sets the type by eye from the cases in stock, proofs and prints.
- **Edition:** Hundreds of copies, the run for one event, then the forme is broken up.

## Inks

- **Strategy:** Black for the body and one bright second ink, each from its own forme or a split fountain.
- **Ink count min:** 1
- **Ink count max:** 3
- **Overprint:** opaque

**Colours**

| Name | Hex | Role |
|---|---|---|
| Job black | `#1C1A17` | most lines |
| Poster red | `#C8352E` | the key words and the rules |

## Tone and screen

- **Method:** solid
- **Ruling lpi:** 0
- **Rule:** Print flat, full ink; the only tone is the grain of the worn wood.

## Registration

- **Tolerance mm:** 1
- **Rule:** The second ink can shift about 1 mm; a red line can sit a little above or below its place.

## Stock

- **Stock:** A cheap, thin poster or news stock, often tinted buff, yellow or pink.
- **Weight gsm min:** 50
- **Weight gsm max:** 100
- **Ground:** #EADFC8
- **Finish:** Uncoated, soft, with a visible fibre.

## Surface

- **Impression:** A light bite and a dark rim of ink round each letter.
- **Sheen:** Matt, with some gloss in heavy solids.
- **Texture:** Solid letters with worn edges, specks of missing ink and the grain of the wood in large letters.

## Process marks

- **Marks:** wood-grain streaks in solids · worn letter edges · ink squash rim · uneven inking · nicks in large type · second ink a little off register

## Prompt primer

- **Positive:** 19th-century wood-type poster · letterpress broadside · stacked centred lines · mixed slab and fat-face type · red and black ink · worn wood type grain · circus bill · buff poster paper
- **Negative:** photograph · gradient · thin type · script · modern sans grid layout

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Letterpress (process)

Printing from raised metal or wood type and blocks, locked in a forme and pressed into the paper. Origin: typeface, Mainz, 1454.

- Set the type by hand from a case, letter by letter, and justify each line with spaces in the composing stick.
- Lock the type, the rules and the blocks in a chase, ink the forme with rollers and press it into the sheet.
- Dampen a soft rag paper so that the type bites 0.1–0.3 mm into it.
- Print each ink from a separate forme or a separate pull, and register them by pins or lays.

### Wood type (process)

Large display letters routed from end-grain wood instead of cast in metal, so posters and bills can use letters 5–50 cm high at a low cost. Origin: typeface, New York, 1828.

- Use wood type for letters above about 72 pt, where metal is too heavy and too expensive.
- Draw the faces to be loud at a distance: fat face, slab and condensed grotesque, in one weight per line.
- Mix several faces and sizes on one bill and centre each line, as the job printers did.

## Media

The salons, schools, magazines, publishers, galleries and platforms that carried this style.

- **Hatch Show Print** (workshop, Nashville, 1879–now), made the style. A letterpress shop in Nashville that the Hatch brothers founded. It prints concert posters from hand-cut wood blocks and old wood type.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Key ink (`key_ink`) | #1C1A17 | #1C1A17, #1F3A6E | inks |
| Paper colour (`paper_colour`) | #EADFC8 | #EADFC8, #F2D64B, #F4C6C1 | substrate |
| Ink count (`ink_count`) | 2 | 1–3 | inks, registration |
| Screen ruling (`screen_ruling`) | 0 | 0–0 lines per inch | screening |
| Misregistration (`misregistration`) | 1 | 0–2 mm | registration |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **with an image**: move toward [`chromolithograph-poster`](../chromolithograph-poster/SKILL.md) (Chromolithograph poster). Add a full-colour drawn picture in crayon lithography and keep the type at the top and the bottom.
- If the user asks for **as a book page**: move toward [`private-press-book`](../private-press-book/SKILL.md) (Private-press book). Change the mixed display faces for one text face, set in black and red on handmade paper.

- **Came from (go here for a more orthodox version):** [`woodcut-relief-print`](../woodcut-relief-print/SKILL.md)
- **Mixes well with:** [`chromolithograph-poster`](../chromolithograph-poster/SKILL.md)
- **Kin in another domain:** [`fat-face-display`](../fat-face-display/SKILL.md), [`slab-serif`](../slab-serif/SKILL.md), [`victorian-trademark`](../victorian-trademark/SKILL.md), [`victorian-web`](../victorian-web/SKILL.md)
- **Nearest by vector profile:** [`psychedelic-concert-poster`](../psychedelic-concert-poster/SKILL.md), [`pop-screen-print`](../pop-screen-print/SKILL.md), [`private-press-book`](../private-press-book/SKILL.md)

## Emotional target

Loud, honest announcement: the viewer reads it from across the street and feels a show is in town.

**Keywords:** loud, rustic, honest, festive, americana · **Brand archetypes:** everyman, jester

## Canonical evidence (open licence)

Each item below has an open licence or is in the public domain, so you may show it as a reference.

- [Broadside warning re John Brown's hanging](https://commons.wikimedia.org/wiki/File:Broadside_warning_re_John_Brown%27s_hanging.jpg) (Unknown printer (broadside), 1859): image, Public domain. Wikimedia Commons (West Virginia Archives and History exhibit scan)
- [Fugitive Slave Law warning poster, Boston, 1851](https://commons.wikimedia.org/wiki/File:Fugitive_Slave_Law_warning_poster,_Boston_African_American_National_Historic_Site,_1851._(e9414990d8d040e9b4242985516987e1).jpg) (Committee of Vigilance and Safety, Boston (broadside), 1851): image, Public domain. Wikimedia Commons (National Park Service, Boston African American NHS)
- [The man is not bought! Broadside, Boston, 1854](https://commons.wikimedia.org/wiki/File:The_man_is_not_bought!_He_is_still_in_the_slave_pen_in_the_courthouse!_..._(7645375374).jpg) (Unknown printer (broadside), 1850): image, Public domain. Wikimedia Commons (Boston Public Library)

## Sources

- [Wood type (Wikipedia)](https://en.wikipedia.org/wiki/Wood_type)
- [Hatch Show Print (Wikipedia)](https://en.wikipedia.org/wiki/Hatch_Show_Print)
- Rob Roy Kelly, American Wood Type 1828–1900 (Van Nostrand Reinhold, 1969)

---

Generated from [`data/print/styles/wood-type-poster.json`](../../data/print/styles/wood-type-poster.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
