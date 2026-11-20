---
name: dong-ho-folk-woodblock
description: "Apply the Dong Ho folk woodblock painting style (c.1600–1950s) when specifying, prompting or art-directing a printed piece or its look on screen: a poster, a plate, a book page, a zine, a label or a print-look illustration. Load when the user asks for: dong ho painting, vietnamese folk woodblock, tranh dong ho, tet new year print vietnam, shell powder paper print, folk woodblock carp."
domain: print
era: hand-press
triggers:
  - "dong ho painting"
  - "vietnamese folk woodblock"
  - "tranh dong ho"
  - "tet new year print vietnam"
  - "shell powder paper print"
  - "folk woodblock carp"
  - "vietnamese folk art print"
vector_profile:
  tone_method: 1
  ink_layering: 2
  registration_play: 4
  surface_relief: 2
  hand_trace: 4
---

# Dong Ho folk woodblock painting

> A village can print a whole folk art from plant and mineral colour, one flat block at a time, on paper that shines with ground shell.

Villagers print a black outline block, then add flat colour blocks one by one on do paper that carries a coat of scallop-shell powder. The colours come from plants and minerals, so they are bright and flat.

**Period:** c.1600–1950s · **Era:** Hand press · **Domain:** Print · **Also called:** Tranh Đông Hồ, Tranh khắc gỗ dân gian Đông Hồ, Dong Ho painting

## When to load this skill

Load it when the user asks for: "dong ho painting", "vietnamese folk woodblock", "tranh dong ho", "tet new year print vietnam", "shell powder paper print", "folk woodblock carp", "vietnamese folk art print".

Good for: New Year cards and gifts, packs for Vietnamese food and craft, folk-art posters, school and museum material.

Do not use it when:
- The brief needs soft gradation or fine detail.
- The picture needs a photographic or glossy look.

## System directives

When specifying, prompting or art-directing a printed piece or its look on screen: a poster, a plate, a book page, a zine, a label or a print-look illustration in Dong Ho folk woodblock painting, you MUST:

1. Print the black outline block first. Keep the line coarse and 1–3 mm wide.
2. Add 4–5 flat colour blocks one by one, in order from light to dark, with no gradation.
3. Use opaque colour: sophora yellow, leaf green, red and shell white.
4. Use motifs for the New Year (Tet): a carp, a pig with chicks, a rooster and a wedding of rats.
5. Cut a caption in the block, or write it by hand, as a proverb or a wish.
6. Let the colour shift 1–2 mm from the outline. Keep the wood grain in the large fields.
7. Print on do paper that has a coat of scallop-shell powder, so the sheet sparkles.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Gradient shading or soft modelling.
- **NEVER:** Fine hatching or a thin, delicate line.
- **NEVER:** Halftone dots or a photograph.
- **NEVER:** A glossy, smooth finish.
- **NEVER:** A colour set that no plant or mineral gives.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Tone method | `■□□□□` 1/5 | solid ink, no tone | fine screen or continuous tone |
| Ink layering | `■■□□□` 2/5 | one ink | many overprinted inks |
| Registration play | `■■■■□` 4/5 | exact register | visible misregister as a feature |
| Surface relief | `■■□□□` 2/5 | flat, ink on the surface | deep bite or emboss in the sheet |
| Hand trace | `■■■■□` 4/5 | uniform machine output | each sheet differs by hand |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Process

- **Family:** relief
- **Matrix:** Blocks of jackfruit or persimmon wood, one for each colour, and an outline block that prints first.
- **Press:** No press. A printer presses the block on the paper by hand, and rubs the back with a pad.
- **Image making:** Family workshops copy and recut old motifs for the New Year. The village shares the designs.
- **Edition:** Thousands for each motif.

## Inks

- **Strategy:** Colour from plants and minerals, mixed with rice paste. The outline prints first in black, then 4–5 flat colour blocks, then a rice-paste coat.
- **Ink count min:** 4
- **Ink count max:** 5
- **Overprint:** opaque

**Colours**

| Name | Hex | Role |
|---|---|---|
| Black from burnt bamboo leaf | `#262626` | outline |
| Sophora yellow | `#E3B33F` | fields |
| Leaf green | `#4F7D4A` | fields |
| Red from Thien Thai gravel or sappanwood | `#B03A2E` | accents |
| Shell white | `#EFE9DA` | ground and eyes |

## Tone and screen

- **Method:** solid
- **Ruling lpi:** 0
- **Rule:** Make each tone a flat opaque field of one colour. The style has no gradation and no screen.

## Registration

- **Tolerance mm:** 1.5
- **Rule:** Allow 1–2 mm of shift between the colour blocks and the black outline, and keep it.

## Stock

- **Stock:** Do paper of the bark of the do tree, coated with scallop-shell powder (điệp).
- **Weight gsm min:** 60
- **Weight gsm max:** 110
- **Ground:** #F1ECE0
- **Finish:** A shell coat that glitters, and a final coat of rice paste.

## Surface

- **Impression:** Light. The sheet lies almost flat.
- **Sheen:** A fine sparkle from the shell powder, and a matt colour.
- **Texture:** A grainy, glittering ground, flat colour with the wood grain in it, and a coarse black line.

## Process marks

- **Marks:** sparkling shell-powder ground · coarse black outline · slightly offset flat colour · wood grain in the solid areas · hand-lettered caption

## Prompt primer

- **Positive:** Dong Ho folk woodblock print · flat opaque colour blocks · coarse black outline · sparkling shell-powder paper · carp and pig motifs for Tet · slight colour offset · plant and mineral colour set · hand-lettered caption
- **Negative:** gradient shading · halftone · photographic · glossy · fine hatching

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

- **Dong Ho village workshops** (collective, Dong Ho village, Bac Ninh, Vietnam, ?–now), made the style. The family workshops of Dong Ho village. They print the New Year woodblock paintings on paper with a shell-powder coat. The village had 17 print families in 1945.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Key ink (`key_ink`) | #262626 | #262626, #2E2A26, #3A2E26 | inks |
| Paper colour (`paper_colour`) | #F1ECE0 | #F1ECE0, #EFE9DA, #F4F0E6 | substrate |
| Ink count (`ink_count`) | 5 | 4–5 | inks, registration |
| Screen ruling (`screen_ruling`) | 0 | 0–0 lines per inch | screening |
| Misregistration (`misregistration`) | 1.5 | 0.5–3 mm | registration |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more Chinese and ornate**: move toward [`nianhua-new-year-print`](../nianhua-new-year-print/SKILL.md) (Chinese nianhua New Year woodblock print). Add vermilion and a hand-painted face or robe, and fill the sheet with auspicious motifs.
- If the user asks for **more refined**: move toward [`nishiki-e-polychrome-woodblock`](../nishiki-e-polychrome-woodblock/SKILL.md) (Nishiki-e multi-block colour woodblock print). Thin the key line to 0.3 mm, print on washi, and add a wiped gradation to the sky.

- **Came from (go here for a more orthodox version):** [`woodcut-relief-print`](../woodcut-relief-print/SKILL.md)
- **Nearest by vector profile:** [`nianhua-new-year-print`](../nianhua-new-year-print/SKILL.md), [`battala-woodcut`](../battala-woodcut/SKILL.md), [`chicha-poster`](../chicha-poster/SKILL.md)

## Emotional target

Warm, plain luck: the viewer feels a village joke and a wish for the New Year, in colour that is simple and strong.

**Keywords:** folk, festive, naive, warm, humorous · **Brand archetypes:** everyman, jester

## Canonical evidence (open licence)

Each item below has an open licence or is in the public domain, so you may show it as a reference.

- [Dong Ho painting - Dai cat](https://commons.wikimedia.org/wiki/File:Dong_Ho_painting_-_Dai_cat.jpg) (Unknown Dong Ho artisan): image, Public domain. Wikimedia Commons (public domain)
- [Dong Ho painting - Nhan nghia](https://commons.wikimedia.org/wiki/File:Dong_Ho_painting_-_Nhan_nghia.jpg) (Unknown Dong Ho artisan): image, Public domain. Wikimedia Commons (public domain)
- [Dong Ho painting - Ly Ngu vong nguyet](https://commons.wikimedia.org/wiki/File:Dong_Ho_painting_-_Ly_Ngu_vong_nguyet.jpg) (Unknown Dong Ho artisan): image, Public domain. Wikimedia Commons (public domain)

## Sources

- [Wikipedia: Đông Hồ painting](https://en.wikipedia.org/wiki/Đông_Hồ_painting)
- [Wikimedia Commons: Category Dong Ho painting](https://commons.wikimedia.org/wiki/Category:Dong_Ho_painting)

---

Generated from [`data/print/styles/dong-ho-folk-woodblock.json`](../../data/print/styles/dong-ho-folk-woodblock.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
