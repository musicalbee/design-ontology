---
name: pochoir-plate
description: "Apply the Pochoir plate style (1908–1935) when specifying, prompting or art-directing a printed piece or its look on screen: a poster, a plate, a book page, a zine, a label or a print-look illustration. Load when the user asks for: pochoir, art deco fashion plate, gazette du bon ton, george barbier, 1920s fashion illustration, stencil coloured print."
domain: print
era: industrial-press
triggers:
  - "pochoir"
  - "art deco fashion plate"
  - "gazette du bon ton"
  - "george barbier"
  - "1920s fashion illustration"
  - "stencil coloured print"
  - "jazz age illustration"
vector_profile:
  tone_method: 1
  ink_layering: 4
  registration_play: 2
  surface_relief: 1
  hand_trace: 4
---

# Pochoir plate

> A stencil and a brush give a flat, opaque and luminous colour that no press can match.

A plate coloured by hand through a set of stencils, each one for a colour, in gouache and watercolour on a printed key line. Iribe and Lepape made the Poiret albums in 1908 and 1911; Barbier and the Gazette du Bon Ton made it the look of Art Deco fashion.

**Period:** 1908–1935 · **Era:** Industrial press · **Domain:** Print · **Also called:** Pochoir, Stencil colouring, Art Deco fashion plate, Gazette du Bon Ton style

## When to load this skill

Load it when the user asks for: "pochoir", "art deco fashion plate", "gazette du bon ton", "george barbier", "1920s fashion illustration", "stencil coloured print", "jazz age illustration".

Good for: fashion and beauty packaging, luxury invitations, editorial fashion illustration, perfume and hotel brands.

Do not use it when:
- The image needs realistic tone or a photograph.
- The budget forbids a flat, simple drawing style.

## System directives

When specifying, prompting or art-directing a printed piece or its look on screen: a poster, a plate, a book page, a zine, a label or a print-look illustration in Pochoir plate, you MUST:

1. Print a thin key line in black or grey, then put each colour on by hand through its own stencil.
2. Use 4–30 flat, opaque colours of gouache, with gold and silver for accents.
3. Keep each colour area flat and clean, with a soft edge where the brush meets the stencil.
4. Use a slim, elongated figure in a simple pose against a large area of bare paper.
5. Let one bright colour (a rose, a jade, a lacquer red) carry the plate.
6. Add a decorative pattern only in the dress or the background, never in both.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** A halftone dot or a gradient.
- **NEVER:** Thick, dark outlines like a comic.
- **NEVER:** A full-colour background that leaves no bare paper.
- **NEVER:** Muddy colours mixed from overprints.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Tone method | `■□□□□` 1/5 | solid ink, no tone | fine screen or continuous tone |
| Ink layering | `■■■■□` 4/5 | one ink | many overprinted inks |
| Registration play | `■■□□□` 2/5 | exact register | visible misregister as a feature |
| Surface relief | `■□□□□` 1/5 | flat, ink on the surface | deep bite or emboss in the sheet |
| Hand trace | `■■■■□` 4/5 | uniform machine output | each sheet differs by hand |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Process

- **Family:** stencil
- **Matrix:** A set of stencils cut from zinc, copper or celluloid, one for each colour, and a printed key line.
- **Press:** No press for the colour: a pochoiriste uses a round brush (pompon) through each stencil.
- **Image making:** The artist paints the original; the atelier (Saudé) cuts the stencils and colours each sheet by hand.
- **Edition:** Some hundreds to a few thousand copies for a magazine or an album.

## Inks

- **Strategy:** Gouache and watercolour, mixed by eye for each colour, with metallic powders for gold and silver.
- **Ink count min:** 4
- **Ink count max:** 12
- **Overprint:** opaque

**Colours**

| Name | Hex | Role |
|---|---|---|
| Key line grey | `#2A2830` | the printed outline |
| Rose | `#D9637A` | the dress and the lips |
| Jade | `#3E8C7A` | drapery and leaves |
| Gold ochre | `#D9A93F` | accents and light |
| Lapis | `#3D5A9E` | the sky and the shadows |

## Tone and screen

- **Method:** solid
- **Ruling lpi:** 0
- **Rule:** Put each colour on flat and opaque; there is no screen and no overprint mix.

## Registration

- **Tolerance mm:** 0.4
- **Rule:** Each stencil aligns by eye to the key line; a small gap or overlap shows the hand.

## Stock

- **Stock:** A heavy, smooth wove paper (Arches or vellum paper) that holds gouache without cockling.
- **Weight gsm min:** 150
- **Weight gsm max:** 300
- **Ground:** #F4EEE2
- **Finish:** Smooth wove, uncoated, bright white to cream.

## Surface

- **Impression:** No bite; the gouache sits on the paper as a thin, chalky film.
- **Sheen:** Matt, velvet colour, with gold that catches the light.
- **Texture:** Flat colour with a soft brush edge and slight unevenness inside each area.

## Process marks

- **Marks:** soft stencil edge · small gaps at the key line · brush texture in flat areas · metallic gold accents · a gouache halo at overlaps

## Prompt primer

- **Positive:** pochoir fashion plate · Gazette du Bon Ton · George Barbier illustration · Art Deco fashion illustration · flat opaque gouache · thin key line · elongated elegant figure · jade rose and gold
- **Negative:** halftone · gradient · thick comic outline · photograph · 3D render

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Pochoir (skill, invented here)

Colour put on by hand through a set of cut stencils, one for each colour, over a printed key line. Origin: print, Paris, 1908.

- Cut one stencil from zinc, copper or celluloid for each colour of the original; a plate can need 20–100 stencils.
- Put on gouache or watercolour with a round brush (pompon) in a dabbing motion, so the edge stays clean.
- Align each stencil by eye to the printed key line.
- Mix each colour to match the original and keep it flat and opaque.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **Gazette du Bon Ton** (magazine, Paris, 1912–1925), published the style. A Paris fashion magazine for subscribers that Lucien Vogel founded. It showed couture designs in pochoir plates, coloured by hand through stencils.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Key ink (`key_ink`) | #2A2830 | #2A2830, #1A1A1A | inks |
| Paper colour (`paper_colour`) | #F4EEE2 | #F4EEE2, #FAF7F0 | substrate |
| Ink count (`ink_count`) | 5 | 4–12 | inks, registration |
| Screen ruling (`screen_ruling`) | 0 | 0–0 lines per inch | screening |
| Misregistration (`misregistration`) | 0.4 | 0–0.8 mm | registration |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more contemporary**: move toward [`risograph-print`](../risograph-print/SKILL.md) (Risograph print). Change the hand stencils for riso drums in 2–3 bright inks with a transparent overprint.
- If the user asks for **more decorative**: move toward [`art-deco-web`](../art-deco-web/SKILL.md) (Art Deco (web)). Add a frame of chevrons, sunbursts and stepped forms in gold.

- **Rejects (the opposite pole; do not blend):** [`chromolithograph-poster`](../chromolithograph-poster/SKILL.md)
- **Kin in another domain:** [`art-deco-interior`](../art-deco-interior/SKILL.md), [`art-deco-web`](../art-deco-web/SKILL.md), [`fauvism`](../fauvism/SKILL.md)
- **Nearest by vector profile:** [`psychedelic-concert-poster`](../psychedelic-concert-poster/SKILL.md), [`nishiki-e-polychrome-woodblock`](../nishiki-e-polychrome-woodblock/SKILL.md), [`chromolithograph-poster`](../chromolithograph-poster/SKILL.md)

## Emotional target

Elegance and luxury: the viewer feels a refined, modern taste of the 1920s.

**Keywords:** elegant, luxurious, chic, jewel-toned, modern · **Brand archetypes:** lover, ruler

## Canonical evidence (open licence)

Each item below has an open licence or is in the public domain, so you may show it as a reference.

- [George Barbier - Gazette du bon ton - Eros](https://commons.wikimedia.org/wiki/File:George_Barbier_-_Gazette_du_bon_ton_-_Eros.jpg) (George Barbier, 1924): image, Public domain. Wikimedia Commons (Museum of Fine Arts, Boston scan)
- [George Barbier - Gazette du bon ton - Artémis](https://commons.wikimedia.org/wiki/File:George_Barbier_-_Gazette_du_bon_ton_-_Art%C3%A9mis.jpg) (George Barbier, 1924): image, Public domain. Wikimedia Commons (Museum of Fine Arts, Boston scan)
- [George Barbier - Gazette du bon ton - Symphonie automnale](https://commons.wikimedia.org/wiki/File:George_Barbier_-_Gazette_du_bon_ton_-_Symphonie_automnale.jpg) (George Barbier, 1922): image, Public domain. Wikimedia Commons (Museum of Fine Arts, Boston scan)
- [Blouse japonais, from Costumes Parisiens](https://commons.wikimedia.org/wiki/File:Blouse_japonais,_from_Costumes_Parisiens_MET_DP832875.jpg) (George Barbier, 1913): image, CC0. Wikimedia Commons (Met Open Access, CC0)

## Sources

- [Pochoir (Wikipedia)](https://en.wikipedia.org/wiki/Pochoir)
- [Gazette du Bon Ton (Wikipedia)](https://en.wikipedia.org/wiki/Gazette_du_Bon_Ton)
- Jean Saudé, Traité d'enluminure d'art au pochoir (1925)

---

Generated from [`data/print/styles/pochoir-plate.json`](../../data/print/styles/pochoir-plate.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
