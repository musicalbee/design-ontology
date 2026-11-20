---
name: meiji-kosen-ga-print
description: "Apply the Meiji kosen-ga and aniline-red woodblock print style (1868–1912) when specifying, prompting or art-directing a printed piece or its look on screen: a poster, a plate, a book page, a zine, a label or a print-look illustration. Load when the user asks for: kosen-ga, meiji woodblock, kiyochika style, aniline red print, kaika-e, japanese gaslight print."
domain: print
era: industrial-press
triggers:
  - "kosen-ga"
  - "meiji woodblock"
  - "kiyochika style"
  - "aniline red print"
  - "kaika-e"
  - "japanese gaslight print"
  - "meiji tokyo night print"
vector_profile:
  tone_method: 3
  ink_layering: 3
  registration_play: 2
  surface_relief: 2
  hand_trace: 4
---

# Meiji kosen-ga and aniline-red woodblock print

> A woodblock print can show the new Japan, with its trains, brick streets and gas light, if it takes the hard colour and the deep shadow of the West.

Early Meiji prints used imported synthetic (aniline) dye in hot reds and purples. Kiyochika's kosen-ga later added Western light and shadow to night scenes of gas lamps, trains and ships.

**Period:** 1868–1912 · **Era:** Industrial press · **Domain:** Print · **Also called:** Kosen-ga, 光線画, Kaika-e, 開化絵, Meiji aniline red print

## When to load this skill

Load it when the user asks for: "kosen-ga", "meiji woodblock", "kiyochika style", "aniline red print", "kaika-e", "japanese gaslight print", "meiji tokyo night print".

Good for: posters on Meiji and railway history, game and film art for a modernising Japan, editorial images on 19th-century Tokyo, record sleeves with a hot, night palette.

Do not use it when:
- The brief needs a soft, pale Edo look.
- The picture needs a photographic tone.

## System directives

When specifying, prompting or art-directing a printed piece or its look on screen: a poster, a plate, a book page, a zine, a label or a print-look illustration in Meiji kosen-ga and aniline-red woodblock print, you MUST:

1. Print the sky in a strong aniline red or violet, with a wiped gradation to blue at the horizon.
2. Put the light source in the picture: a gas lamp, a window, the sun on water. Let rays and cast shadow fall from it.
3. Use 4–10 blocks, and let the shadow be a block of dark blue or violet, not a hatched line.
4. Choose a subject from the new city: a steam train, a brick bank, a steamship, a street at night.
5. Draw the street in Western perspective with one vanishing point, on a block that a Japanese carver can cut.
6. Let the red bleed a little at the edge of the area. Do not hold it back.
7. Print large commercial runs, and keep the outline in thin sumi.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** The pale, soft colour of an Edo print.
- **NEVER:** A flat scene with no light source and no cast shadow.
- **NEVER:** Halftone dots or a photograph.
- **NEVER:** A clean, matt digital vector fill.
- **NEVER:** A neat, restrained red that does not bleed.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Tone method | `■■■□□` 3/5 | solid ink, no tone | fine screen or continuous tone |
| Ink layering | `■■■□□` 3/5 | one ink | many overprinted inks |
| Registration play | `■■□□□` 2/5 | exact register | visible misregister as a feature |
| Surface relief | `■■□□□` 2/5 | flat, ink on the surface | deep bite or emboss in the sheet |
| Hand trace | `■■■■□` 4/5 | uniform machine output | each sheet differs by hand |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Process

- **Family:** relief
- **Matrix:** Cherry-wood blocks, one for each colour and one for the key line.
- **Press:** No press. A printer rubs the back of the sheet with a baren by hand.
- **Image making:** A designer draws, a carver cuts and a printer prints, as in the Edo shop. The subjects are the railway, gas light and the steamship.
- **Edition:** Large commercial runs.

## Inks

- **Strategy:** Imported synthetic dyes (aniline) in water, with traditional pigment for the rest. The key block prints first, then the colour blocks in 4–10 passes.
- **Ink count min:** 4
- **Ink count max:** 10
- **Overprint:** transparent

**Colours**

| Name | Hex | Role |
|---|---|---|
| Sumi black | `#26242A` | key block outline |
| Aniline red | `#C3283C` | sky, flags and accents |
| Aniline violet | `#7A4D8F` | shadow |
| Night blue | `#2A3B64` | dusk gradation |
| Gaslight yellow | `#E8C25A` | lamp glow |

## Tone and screen

- **Method:** solid
- **Ruling lpi:** 0
- **Rule:** Make a tone with a wiped gradation of 15–50 mm and with flat blocks of dark colour for shadow. The style has no screen.

## Registration

- **Tolerance mm:** 0.7
- **Rule:** Allow 0.5–1.0 mm of shift in the large commercial runs. The red may bleed over the edge.

## Stock

- **Stock:** Thin washi of mulberry fibre, with a cream-brown tone.
- **Weight gsm min:** 35
- **Weight gsm max:** 70
- **Ground:** #E6D8B8
- **Finish:** Unsized and absorbent, so the dye sinks in and bleeds a little.

## Surface

- **Impression:** Light. The baren leaves a soft rub on the back.
- **Sheen:** Matt. Some of the dyes have a slight shine when fresh.
- **Texture:** Flat colour with a soft gradation, a bleed at some edges, and the fibres of thin washi.

## Process marks

- **Marks:** garish synthetic red that bleeds · lamp-lit shadows and rays · Western perspective in a block print · faded violet · thin sumi outline

## Prompt primer

- **Positive:** Meiji woodblock print · aniline red sky · gaslight night scene · kosen-ga light rays · steam train and brick street · bold synthetic red and purple · Western shading in a woodcut · aged washi
- **Negative:** Edo pastel · halftone · photograph · clean digital · matt flat vector

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

- **Matsuki Heikichi (Daikokuya)** (publisher, Tokyo, ?–now), published the style. A Tokyo publisher of woodblock prints. It issued the night views of Kobayashi Kiyochika.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Key ink (`key_ink`) | #26242A | #26242A, #2A3B64, #3A2E3A | inks |
| Paper colour (`paper_colour`) | #E6D8B8 | #E6D8B8, #EAD9B5, #DDCDA8 | substrate |
| Ink count (`ink_count`) | 6 | 4–10 | inks, registration |
| Screen ruling (`screen_ruling`) | 0 | 0–0 lines per inch | screening |
| Misregistration (`misregistration`) | 0.7 | 0.2–1.5 mm | registration |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **calmer and softer**: move toward [`shin-hanga-print`](../shin-hanga-print/SKILL.md) (Shin-hanga new print). Keep the light and the shadow. Replace the aniline red with indigo and grey, and tighten the register to 0.2 mm.
- If the user asks for **more classic Edo**: move toward [`nishiki-e-polychrome-woodblock`](../nishiki-e-polychrome-woodblock/SKILL.md) (Nishiki-e multi-block colour woodblock print). Remove the cast shadow and the perspective. Use mineral and plant pigment, and flat colour with a bokashi sky.

- **Came from (go here for a more orthodox version):** [`nishiki-e-polychrome-woodblock`](../nishiki-e-polychrome-woodblock/SKILL.md)
- **Nearest by vector profile:** [`chiaroscuro-woodcut-print`](../chiaroscuro-woodcut-print/SKILL.md), [`nishiki-e-polychrome-woodblock`](../nishiki-e-polychrome-woodblock/SKILL.md), [`chromolithograph-poster`](../chromolithograph-poster/SKILL.md)

## Emotional target

Hot, strange novelty: the viewer feels a new city that glows red and violet at night.

**Keywords:** modern, garish, nocturnal, urban, theatrical · **Brand archetypes:** explorer, outlaw

## Canonical evidence (open licence)

Each item below has an open licence or is in the public domain, so you may show it as a reference.

- [Dawn at Kanda Shrine](https://commons.wikimedia.org/wiki/File:Dawn_at_Kanda_Shrine_by_Kobayashi_Kiyochika,_1882,_woodblock_print,_Honolulu_Museum_of_Art.jpg) (Kobayashi Kiyochika, 1882): image, Public domain. Wikimedia Commons (Honolulu Museum of Art)
- [Night Stalls at Asakusa](https://commons.wikimedia.org/wiki/File:Night_Stalls_at_Asakusa_by_Kobayashi_Kiyochika,_1881,_woodblock_print,_Honolulu_Museum_of_Art.jpg) (Kobayashi Kiyochika, 1881): image, Public domain. Wikimedia Commons (Honolulu Museum of Art)
- [Tokyo kaika meisho](https://commons.wikimedia.org/wiki/File:T%C5%8Dky%C5%8D_kaika_meish%C5%8D.jpg) (Nikutei Karyō (presumed Kobayashi Kiyochika) and Kawanabe Kyōsai, 1875): image, Public domain. Wikimedia Commons (public domain). Published in 1875 (Meiji 8).

## Sources

- [Wikipedia: Kobayashi Kiyochika](https://en.wikipedia.org/wiki/Kobayashi_Kiyochika)
- [Wikimedia Commons: Category Kobayashi Kiyochika](https://commons.wikimedia.org/wiki/Category:Kobayashi_Kiyochika)

---

Generated from [`data/print/styles/meiji-kosen-ga-print.json`](../../data/print/styles/meiji-kosen-ga-print.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
