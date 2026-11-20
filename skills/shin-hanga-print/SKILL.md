---
name: shin-hanga-print
description: "Apply the Shin-hanga new print style (1915–1942) when specifying, prompting or art-directing a printed piece or its look on screen: a poster, a plate, a book page, a zine, a label or a print-look illustration. Load when the user asks for: shin-hanga, new print japanese, hasui style, japanese landscape print rain, watanabe woodblock, moonlit japanese print."
domain: print
era: industrial-press
triggers:
  - "shin-hanga"
  - "new print japanese"
  - "hasui style"
  - "japanese landscape print rain"
  - "watanabe woodblock"
  - "moonlit japanese print"
  - "snow scene woodblock"
vector_profile:
  tone_method: 4
  ink_layering: 4
  registration_play: 1
  surface_relief: 2
  hand_trace: 3
---

# Shin-hanga new print

> The old Edo craft of block and baren can serve a new subject, a landscape with weather and light, when a publisher keeps the three trades apart.

The publisher Watanabe Shozaburo revived the ukiyo-e split of designer, carver and printer for foreign buyers. The prints show Western light and atmosphere, with many tonal blocks for rain, snow and dusk.

**Period:** 1915–1942 · **Era:** Industrial press · **Domain:** Print · **Also called:** Shin-hanga, 新版画, Shinsaku-hanga, New print revival

## When to load this skill

Load it when the user asks for: "shin-hanga", "new print japanese", "hasui style", "japanese landscape print rain", "watanabe woodblock", "moonlit japanese print", "snow scene woodblock".

Good for: travel posters and guides, calm editorial covers, tea, sake and craft packs, hotel and wellness art.

Do not use it when:
- The brief needs a bold graphic outline or a loud palette.
- The picture is a portrait or a close-up of a face.

## System directives

When specifying, prompting or art-directing a printed piece or its look on screen: a poster, a plate, a book page, a zine, a label or a print-look illustration in Shin-hanga new print, you MUST:

1. Choose a quiet place, a river, a temple, a snow road, and one moment of light such as rain, dusk or a lamp.
2. Build the sky and the water from 3–6 blue and grey blocks, each wiped to a soft gradation.
3. Use 8–12 colour blocks for one print, and let some prints reach 30 blocks.
4. Print a lamp or a window in a warm orange against a cool blue ground, and keep it small.
5. Add rubbed texture with a baren on a dry, thick sheet (suji-zuri and goma-zuri) for snow, bark and fabric.
6. Keep the key line thin and brown or grey, not a hard black outline.
7. Add the artist seal and the publisher seal in the margin.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** A flat, bold outline in the Edo manner.
- **NEVER:** Halftone dots or a photographic realism.
- **NEVER:** A neon or saturated colour set.
- **NEVER:** A crowded, comic composition.
- **NEVER:** A sky of one flat tint.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Tone method | `■■■■□` 4/5 | solid ink, no tone | fine screen or continuous tone |
| Ink layering | `■■■■□` 4/5 | one ink | many overprinted inks |
| Registration play | `■□□□□` 1/5 | exact register | visible misregister as a feature |
| Surface relief | `■■□□□` 2/5 | flat, ink on the surface | deep bite or emboss in the sheet |
| Hand trace | `■■■□□` 3/5 | uniform machine output | each sheet differs by hand |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Process

- **Family:** relief
- **Matrix:** Cherry-wood blocks, 8–12 for a normal print and up to 30 for a rich one, with kento register notches.
- **Press:** No press. A printer rubs the back of the sheet with a baren by hand.
- **Image making:** The publisher directs. A designer paints the picture, a carver cuts the blocks, and a printer sets the colour.
- **Edition:** Limited runs, with later numbered editions and reprints.

## Inks

- **Strategy:** Water-based pigment, many thin overprinted tones. Bokashi wiping makes the soft sky and water.
- **Ink count min:** 8
- **Ink count max:** 12
- **Overprint:** transparent

**Colours**

| Name | Hex | Role |
|---|---|---|
| Sumi black | `#25242A` | key block |
| Night indigo | `#27375E` | sky and water |
| Warm grey | `#8E8A82` | snow and rain |
| Lamp orange | `#E0883E` | window glow |
| Pale rose | `#E7B9A5` | dusk |

## Tone and screen

- **Method:** solid
- **Ruling lpi:** 0
- **Rule:** Make a tone with 3–6 overprinted flat blocks and a wiped gradation of 20–60 mm. The style has no screen.

## Registration

- **Tolerance mm:** 0.2
- **Rule:** Keep each colour within 0.2 mm of the key line. The tight register is part of the revival.

## Stock

- **Stock:** Heavy hand-made washi with a smooth face.
- **Weight gsm min:** 80
- **Weight gsm max:** 130
- **Ground:** #F0E7D2
- **Finish:** Smooth and slightly sized, so the many layers do not cockle.

## Surface

- **Impression:** Light to medium. The baren leaves a soft rub, and a dry rub adds a grain texture to snow.
- **Sheen:** Matt, with a mica shine in some prints.
- **Texture:** Soft, wiped gradations, a fine grain in the rubbed areas, and the fibres of thick washi.

## Process marks

- **Marks:** soft wiped gradations · mica shine in some prints · publisher seal and artist seal in the margin · dry baren grain in snow and rain · limited-edition numbering in later work

## Prompt primer

- **Positive:** shin-hanga landscape woodblock · soft tonal gradation at dusk · rain and snow atmosphere · many overprinted blocks · indigo night sky and lamp glow · ivory washi · small seals in the margin · calm composition
- **Negative:** flat bold outline · halftone dots · photo realism · neon · comic

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

- **Watanabe Woodblock Print Shop** (publisher, Tokyo, ?–now), published the style. The print shop of Watanabe Shozaburo in Tokyo. It brought designer, carver and printer together to make the new landscape prints for export, in the shin-hanga movement.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Key ink (`key_ink`) | #25242A | #25242A, #3A3228, #2B2B3A | inks |
| Paper colour (`paper_colour`) | #F0E7D2 | #F0E7D2, #F4ECDA, #E8DFC6 | substrate |
| Ink count (`ink_count`) | 10 | 8–12 | inks, registration |
| Screen ruling (`screen_ruling`) | 0 | 0–0 lines per inch | screening |
| Misregistration (`misregistration`) | 0.2 | 0–0.6 mm | registration |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more Edo and flat**: move toward [`nishiki-e-polychrome-woodblock`](../nishiki-e-polychrome-woodblock/SKILL.md) (Nishiki-e multi-block colour woodblock print). Reduce the blocks to 4–6 flat colours, thicken the key line and keep only the sky gradation.
- If the user asks for **more personal and rough**: move toward [`sosaku-hanga-print`](../sosaku-hanga-print/SKILL.md) (Sosaku-hanga creative print). Let one hand cut the blocks, show the gouge marks and use 3–5 bold colours.

- **Came from (go here for a more orthodox version):** [`nishiki-e-polychrome-woodblock`](../nishiki-e-polychrome-woodblock/SKILL.md)
- **Nearest by vector profile:** [`yuefenpai-calendar-poster`](../yuefenpai-calendar-poster/SKILL.md), [`ravi-varma-oleograph`](../ravi-varma-oleograph/SKILL.md), [`chromolithograph-poster`](../chromolithograph-poster/SKILL.md)

## Emotional target

A hush: the viewer feels the weather and the hour in a place that is old and calm, as in a memory.

**Keywords:** serene, nostalgic, atmospheric, quiet, soft · **Brand archetypes:** sage, innocent

## Canonical evidence (open licence)

Each item below has an open licence or is in the public domain, so you may show it as a reference.

- [Evening on the Chikugo River](https://clevelandart.org/art/1930.95) (Yoshida Hiroshi, 1927): image, CC0. Cleveland Museum of Art Open Access
- [Ioridani Mountain Pass](https://commons.wikimedia.org/wiki/File:Hasui_Kawase,_Ioridani_Mountain_Pass,_1923.jpg) (Kawase Hasui, 1923): image, Public domain. Wikimedia Commons (public domain, published in 1923)
- [Cryptomeria Avenue](https://clevelandart.org/art/2016.80) (Yoshida Hiroshi, 1937): image, CC0. Cleveland Museum of Art Open Access

## Sources

- [Wikipedia: Shin-hanga](https://en.wikipedia.org/wiki/Shin-hanga)
- [Wikipedia: Watanabe Shōzaburō](https://en.wikipedia.org/wiki/Watanabe_Shōzaburō)
- [Cleveland Museum of Art Open Access API](https://openaccess-api.clevelandart.org/)

---

Generated from [`data/print/styles/shin-hanga-print.json`](../../data/print/styles/shin-hanga-print.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
