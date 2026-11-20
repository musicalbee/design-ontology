---
name: katagami-stencil-print
description: "Apply the Katazome and Ise katagami stencil print style (c.1600–1960s) when specifying, prompting or art-directing a printed piece or its look on screen: a poster, a plate, a book page, a zine, a label or a print-look illustration. Load when the user asks for: katazome, ise katagami, japanese stencil pattern, indigo resist pattern, mingei textile print, japanese paper stencil."
domain: print
era: hand-press
triggers:
  - "katazome"
  - "ise katagami"
  - "japanese stencil pattern"
  - "indigo resist pattern"
  - "mingei textile print"
  - "japanese paper stencil"
  - "white resist on indigo"
vector_profile:
  tone_method: 1
  ink_layering: 1
  registration_play: 1
  surface_relief: 1
  hand_trace: 3
---

# Katazome and Ise katagami stencil print

> A pattern cut once in paper can be printed a thousand times as a sharp white shape on dyed cloth, if the stencil holds its islands with thin bridges.

A stencil is cut in layers of mulberry paper, and rice-paste resist is spread through it onto cloth. The cloth is then dyed. The result is a repeat pattern with sharp white edges and flat colour.

**Period:** c.1600–1960s · **Era:** Hand press · **Domain:** Print · **Also called:** Katazome, 型染, Ise katagami, 伊勢型紙, Japanese paper stencil dyeing

## When to load this skill

Load it when the user asks for: "katazome", "ise katagami", "japanese stencil pattern", "indigo resist pattern", "mingei textile print", "japanese paper stencil", "white resist on indigo".

Good for: textile and wrapping paper patterns, pack and label backgrounds, craft and tea brand identity, wall and screen repeat patterns.

Do not use it when:
- The picture needs gradation, a photograph or a painted tone.
- The brief needs a rough, hand-cut block look.

## System directives

When specifying, prompting or art-directing a printed piece or its look on screen: a poster, a plate, a book page, a zine, a label or a print-look illustration in Katazome and Ise katagami stencil print, you MUST:

1. Cut the pattern in 2–3 layers of washi that are pasted with persimmon tannin (kakishibu), so the stencil stays stiff and wet-proof.
2. Keep each cut line 0.1–0.5 mm wide, and keep at least 0.5 mm of paper between two cuts.
3. Hold each free island of paper with a thin bridge, a tie bar, or with a net of silk thread between the layers.
4. Spread the rice-paste resist through the stencil in one pass of a spatula, and let it dry before you dye.
5. Dye the cloth after the resist dries. The resist stays white, and the dye fills the rest as a flat colour.
6. Repeat the pattern on the cloth, and join each repeat so the seam does not show.
7. Choose a small, fine motif: a wave, a plant, a crest, a bird. Allow a pictorial scene only in mingei work.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** A soft gradient or a tonal shade.
- **NEVER:** Halftone dots or a photograph.
- **NEVER:** A woodgrain texture or a thick outline.
- **NEVER:** A pattern whose islands float with no bridge.
- **NEVER:** A three-dimensional effect.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Tone method | `■□□□□` 1/5 | solid ink, no tone | fine screen or continuous tone |
| Ink layering | `■□□□□` 1/5 | one ink | many overprinted inks |
| Registration play | `■□□□□` 1/5 | exact register | visible misregister as a feature |
| Surface relief | `■□□□□` 1/5 | flat, ink on the surface | deep bite or emboss in the sheet |
| Hand trace | `■■■□□` 3/5 | uniform machine output | each sheet differs by hand |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Process

- **Family:** stencil
- **Matrix:** A stencil (katagami) of 2–3 layers of mulberry washi, pasted with persimmon tannin and cut with fine knives. A net of silk thread can hold the islands.
- **Press:** No press. A worker spreads rice-paste resist through the stencil with a spatula, then brushes or dips the cloth in dye.
- **Image making:** A cutter, a specialist of Shiroko and Jike in Ise, cuts the pattern. A dyer uses the stencil many times.
- **Edition:** Many metres of repeat pattern. The same stencil serves for years.

## Inks

- **Strategy:** Plant dye on cloth: indigo for the ground, with persimmon brown and madder red as accents. The resist leaves the pattern in the cloth colour.
- **Ink count min:** 1
- **Ink count max:** 6
- **Overprint:** opaque

**Colours**

| Name | Hex | Role |
|---|---|---|
| Indigo | `#264A70` | ground |
| Resist white | `#F0EAD8` | pattern |
| Persimmon brown | `#8A5A3A` | accent |
| Madder red | `#B33F3A` | accent |

## Tone and screen

- **Method:** solid
- **Ruling lpi:** 0
- **Rule:** Make each area a flat dye or a flat resist white. The pattern shows a tone only by the density of its small cuts.

## Registration

- **Tolerance mm:** 0.3
- **Rule:** Fit each repeat of the stencil to the last one within 0.3 mm, with the pins or the marks on the cloth.

## Stock

- **Stock:** Cotton or silk cloth, undyed before the dye bath.
- **Weight gsm min:** 80
- **Weight gsm max:** 200
- **Ground:** #EFE9D8
- **Finish:** Plain weave, washed free of size, so the dye takes evenly.

## Surface

- **Impression:** None. The paste leaves a thin skin that the wash removes.
- **Sheen:** Matt, with the soft shine of silk or the dry look of cotton.
- **Texture:** Sharp white edges on a flat dye, a visible weave of the cloth, and a fine repeat.

## Process marks

- **Marks:** sharp resist-white edges · bridges and tie bars in the stencil · repeat seam · fibre and weave of the cloth · slight leak of dye at a thin cut

## Prompt primer

- **Positive:** katazome stencil dyed pattern · indigo cloth with white resist · crisp stencil edges · repeating floral motif · tie-bar bridges · Ise katagami cut · mingei folk textile · flat dye
- **Negative:** gradient · halftone · photograph · woodgrain · 3D

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Katagami stencil (process, invented here)

A stencil cut in layers of washi, through which a dyer spreads rice-paste resist onto cloth. The cloth takes dye round the paste and keeps the pattern in white. Origin: print, Ise (Suzuka, Mie), Japan, c. 1600.

- Paste 2–3 layers of washi together with persimmon tannin (kakishibu), so the stencil is stiff and keeps its shape in water.
- Cut the pattern with fine knives, with lines 0.1–0.5 mm wide and at least 0.5 mm of paper between two cuts.
- Hold each free island of paper with a thin bridge, or fix a net of silk thread between the layers.
- Spread the rice-paste resist through the stencil in one pass of a spatula, then let the paste dry.
- Dye the cloth. The resist keeps its colour out, and the wash removes the paste to leave the pattern in white.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **Ise katagami cutters** (collective, Suzuka, Mie, Japan, ?–now), made the style. The stencil cutters of Shiroko and Jike in Ise, now Suzuka. They cut the katagami stencils from layers of washi and supplied the dyers of Japan.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Key ink (`key_ink`) | #264A70 | #264A70, #1F3F66, #2A3A5A | inks |
| Paper colour (`paper_colour`) | #EFE9D8 | #EFE9D8, #F2EDDF, #E8E0CB | substrate |
| Ink count (`ink_count`) | 2 | 1–6 | inks, registration |
| Screen ruling (`screen_ruling`) | 0 | 0–0 lines per inch | screening |
| Misregistration (`misregistration`) | 0.3 | 0–0.8 mm | registration |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more colourful and layered**: move toward [`pochoir-plate`](../pochoir-plate/SKILL.md) (Pochoir plate). Use one stencil for each colour on paper, apply gouache with a dabbing brush, and add a printed key line.
- If the user asks for **more pictorial and folk**: move toward [`nishiki-e-polychrome-woodblock`](../nishiki-e-polychrome-woodblock/SKILL.md) (Nishiki-e multi-block colour woodblock print). Replace the repeat by a single scene, print on washi, and use wiped colour with a sumi key line.

- **Kin in another domain:** [`mingei-folk-craft`](../mingei-folk-craft/SKILL.md)
- **Nearest by vector profile:** [`narbut-ukrainian-graphics`](../narbut-ukrainian-graphics/SKILL.md), [`mir-iskusstva-book-graphics`](../mir-iskusstva-book-graphics/SKILL.md), [`woodcut-relief-print`](../woodcut-relief-print/SKILL.md)

## Emotional target

Clear, quiet order: the viewer feels a fine pattern that stays sharp, and a craft that repeats with calm care.

**Keywords:** precise, repetitive, crafted, calm, graphic · **Brand archetypes:** sage, creator

## Canonical evidence (open licence)

Each item below has an open licence or is in the public domain, so you may show it as a reference.

- [Ise katagami stencil sheet 1 (a stencil, not a dyed print)](https://commons.wikimedia.org/wiki/File:Ise_Katagami_(%E4%BC%8A%E5%8B%A2%E5%9E%8B%E7%B4%99)_1.png) (Unknown maker): image, Public domain. Wikimedia Commons (public domain; late 19th century to c.1940)
- [Ise katagami stencil sheet 2 (a stencil, not a dyed print)](https://commons.wikimedia.org/wiki/File:Ise_Katagami_(%E4%BC%8A%E5%8B%A2%E5%9E%8B%E7%B4%99)_2.png) (Unknown maker): image, Public domain. Wikimedia Commons (public domain; late 19th century to c.1940)
- [Katagami stencil with a floral ornament (a stencil, not a dyed print)](https://commons.wikimedia.org/wiki/File:Japanese_Katagami_Stencil_Floral_Ornament.jpg) (Unknown maker): image, Public domain. Wikimedia Commons (public domain; late 19th century)

## Sources

- [Wikipedia: Katazome](https://en.wikipedia.org/wiki/Katazome)
- [Wikipedia: Ise-katagami](https://en.wikipedia.org/wiki/Ise-katagami)
- [Wikimedia Commons: Category Katagami](https://commons.wikimedia.org/wiki/Category:Katagami)

---

Generated from [`data/print/styles/katagami-stencil-print.json`](../../data/print/styles/katagami-stencil-print.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
