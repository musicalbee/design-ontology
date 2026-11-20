---
name: senjafuda-slip
description: "Apply the Senjafuda pilgrim name slip style (1799–1950s) when specifying, prompting or art-directing a printed piece or its look on screen: a poster, a plate, a book page, a zine, a label or a print-look illustration. Load when the user asks for: senjafuda, japanese pilgrim slip, shrine name sticker, nosatsu, japanese name label print, edo ephemera."
domain: print
era: hand-press
triggers:
  - "senjafuda"
  - "japanese pilgrim slip"
  - "shrine name sticker"
  - "nosatsu"
  - "japanese name label print"
  - "edo ephemera"
  - "woodblock name card"
vector_profile:
  tone_method: 1
  ink_layering: 2
  registration_play: 2
  surface_relief: 2
  hand_trace: 4
---

# Senjafuda pilgrim name slip

> A name on a slip of paper can be a prayer, a signature and a small piece of art at the same time.

Pilgrims pasted small woodblock name slips on shrine gates. Collectors later swapped decorated slips in clubs, and artists such as Hiroshige designed slips in many colours. Each slip is 58 mm by 173 mm.

**Period:** 1799–1950s · **Era:** Hand press · **Domain:** Print · **Also called:** Senjafuda, 千社札, Nosatsu, Pilgrim slip

## When to load this skill

Load it when the user asks for: "senjafuda", "japanese pilgrim slip", "shrine name sticker", "nosatsu", "japanese name label print", "edo ephemera", "woodblock name card".

Good for: stickers and labels, business and name cards, small collectible sets, packs with a hand-made look.

Do not use it when:
- The brief needs a large picture or a landscape.
- The picture needs fine tone or a photograph.

## System directives

When specifying, prompting or art-directing a printed piece or its look on screen: a poster, a plate, a book page, a zine, a label or a print-look illustration in Senjafuda pilgrim name slip, you MUST:

1. Print a slip of 58 mm by 173 mm, a ratio of 1:3, with a frame about 48 mm by 144 mm.
2. Set the name in bold lettering in a block of one colour, and make it the largest mark on the slip.
3. Add an ornamental border, and one small image such as a wave, a crest, a flower or a mythical beast.
4. Use 2–8 colours, in vermilion, indigo and black, with a transparent overprint.
5. Print on small sheets of washi with a baren, in runs of several hundred slips.
6. For an exchange slip, add the club name and the year, and a design that fits the event.
7. Make the slip so that a person can paste it on a gate, with the name still easy to read.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** A large landscape or a poster format.
- **NEVER:** Halftone dots or a photograph.
- **NEVER:** A smooth gradient.
- **NEVER:** A name too small to read at a distance.
- **NEVER:** A three-dimensional effect.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Tone method | `■□□□□` 1/5 | solid ink, no tone | fine screen or continuous tone |
| Ink layering | `■■□□□` 2/5 | one ink | many overprinted inks |
| Registration play | `■■□□□` 2/5 | exact register | visible misregister as a feature |
| Surface relief | `■■□□□` 2/5 | flat, ink on the surface | deep bite or emboss in the sheet |
| Hand trace | `■■■■□` 4/5 | uniform machine output | each sheet differs by hand |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Process

- **Family:** relief
- **Matrix:** Small cherry-wood blocks, with one for each colour and one for the name and the frame.
- **Press:** No press. A printer rubs the back of the small slip with a baren by hand.
- **Image making:** A pilgrim or a club orders a name and an ornament. A professional artist sometimes designs the slip, and a carver cuts it.
- **Edition:** Several hundred small slips.

## Inks

- **Strategy:** Water-based pigment on small blocks. The name block prints first, in black, then 1–7 colour blocks.
- **Ink count min:** 2
- **Ink count max:** 8
- **Overprint:** transparent

**Colours**

| Name | Hex | Role |
|---|---|---|
| Black | `#232323` | lettering |
| Vermilion | `#D14A34` | ground |
| Indigo | `#2C4A7B` | ground |

## Tone and screen

- **Method:** solid
- **Ruling lpi:** 0
- **Rule:** Make each area a flat colour. The style has no gradation and no screen.

## Registration

- **Tolerance mm:** 0.4
- **Rule:** Keep each colour within 0.4 mm of the name block, because the slip is small and an error shows.

## Stock

- **Stock:** A small slip of washi, 58 mm by 173 mm, that carries a paste on the back for use.
- **Weight gsm min:** 30
- **Weight gsm max:** 60
- **Ground:** #EEE4CC
- **Finish:** Thin and soft, with a plain face.

## Surface

- **Impression:** Light. The baren leaves a faint rub on the back.
- **Sheen:** Matt paper, with no gloss.
- **Texture:** Flat colour and bold lettering with a fine paper fibre.

## Process marks

- **Marks:** name lettering in bold script · small format of 58 mm by 173 mm · ornamental border · paste on the back · exchange-club mark and year

## Prompt primer

- **Positive:** senjafuda pilgrim slip · small woodblock name slip · bold name lettering · ornamental border · vermilion and indigo · pasted on a shrine gate · Edo period ephemera · tiny format
- **Negative:** halftone · photograph · gradient · large landscape · 3D

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

- **Senjafuda exchange clubs** (collective, Edo (Tokyo), Japan, ?–now), gathered the style. The clubs (nosatsu-kai) of collectors who swapped decorated name slips. The oldest invitation to an exchange meeting that is still known dates from 1799.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Key ink (`key_ink`) | #232323 | #232323, #2B2B2E, #3A2A24 | inks |
| Paper colour (`paper_colour`) | #EEE4CC | #EEE4CC, #F2EAD6, #E8DCBF | substrate |
| Ink count (`ink_count`) | 4 | 2–8 | inks, registration |
| Screen ruling (`screen_ruling`) | 0 | 0–0 lines per inch | screening |
| Misregistration (`misregistration`) | 0.4 | 0–1 mm | registration |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more luxurious**: move toward [`surimono-print`](../surimono-print/SKILL.md) (Surimono privately published print). Add embossing and metal dust, and use thick washi and a verse beside the image.
- If the user asks for **more pictorial**: move toward [`nishiki-e-polychrome-woodblock`](../nishiki-e-polychrome-woodblock/SKILL.md) (Nishiki-e multi-block colour woodblock print). Enlarge the sheet to a standard print, and replace the name by a scene with a bokashi sky.

- **Came from (go here for a more orthodox version):** [`nishiki-e-polychrome-woodblock`](../nishiki-e-polychrome-woodblock/SKILL.md)
- **Nearest by vector profile:** [`mir-iskusstva-book-graphics`](../mir-iskusstva-book-graphics/SKILL.md), [`battala-woodcut`](../battala-woodcut/SKILL.md), [`narbut-ukrainian-graphics`](../narbut-ukrainian-graphics/SKILL.md)

## Emotional target

A small, bright, social pleasure: the viewer sees the mark of a person who passed this gate, and of a club that traded its slips.

**Keywords:** ornamental, tiny, devout, playful, collectible · **Brand archetypes:** everyman, jester

## Canonical evidence (open licence)

Each item below has an open licence or is in the public domain, so you may show it as a reference.

- [Senjafuda designed by Hiroshige](https://commons.wikimedia.org/wiki/File:Hiroshige_senjafuda.jpg) (Utagawa Hiroshige, 1842): image, Public domain. Wikimedia Commons (public domain)
- [Senjafuda on the Niomon gate of Risshaku-ji](https://commons.wikimedia.org/wiki/File:Senjafuda_(37092741792).jpg) (Emily Jiang, 2017): image, CC BY 2.0. Emily Jiang, Wikimedia Commons (a photo of slips on a gate)

## Sources

- [Wikipedia: Senjafuda](https://en.wikipedia.org/wiki/Senjafuda)
- [Wikimedia Commons: Category Senjafuda](https://commons.wikimedia.org/wiki/Category:Senjafuda)

---

Generated from [`data/print/styles/senjafuda-slip.json`](../../data/print/styles/senjafuda-slip.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
