---
name: glossy-3d-logo
description: "Apply the Gradient 3D and glass style (2001–2012) when drawing, prompting or art-directing a logo: a symbol, a monogram, a wordmark, an emblem or a full identity mark. Load when the user asks for: web 2.0 logo, glossy logo, 3d logo, aqua, glass orb, 2000s logo."
domain: logo
era: screen-identity
triggers:
  - "web 2.0 logo"
  - "glossy logo"
  - "3d logo"
  - "aqua"
  - "glass orb"
  - "2000s logo"
  - "frutiger aero logo"
vector_profile:
  abstraction: 3
  geometry: 3
  ornament: 2
  letter_dominance: 2
  dimensionality: 5
---

# Gradient 3D and glass

> On a screen a mark can be a lit object: gloss, depth and reflection make it feel new, touchable and alive.

A mark lit like an object: top highlights, gradients from light to deep colour, a glass bevel, a reflection under it and a soft drop shadow. The screen was now the main medium, and the mark imitated a polished button or a globe.

**Period:** 2001–2012 · **Era:** Screen identity · **Domain:** Logo · **Also called:** Web 2.0 logo, Glossy logo, Aqua logo, 3D logo

## When to load this skill

Load it when the user asks for: "web 2.0 logo", "glossy logo", "3d logo", "aqua", "glass orb", "2000s logo", "frutiger aero logo".

Good for: nostalgic web and game projects, Y2K revival merchandise, app icons with a retro theme, music and event graphics.

Do not use it when:
- The mark must print in one colour on paper or fabric.
- The brief asks for a serious, durable or institutional tone.

## System directives

When drawing, prompting or art-directing a logo: a symbol, a monogram, a wordmark, an emblem or a full identity mark in Gradient 3D and glass, you MUST:

1. Light the mark from the top: a gradient from 20–30% lighter at the top to the base colour at 60% of the height.
2. Add a gloss highlight: a white shape at 40–70% opacity over the top 40–50% of the mark.
3. Model the volume with a bevel or a sphere: shading from the base colour to 30–40% darker at the edge.
4. Add a floor reflection: a mirrored copy at 20–30% opacity, faded over 30–40% of the mark height.
5. Use 2–4 hues of high saturation; a gradient counts as its two end colours.
6. Keep the silhouette simple, a globe, a bubble, a rounded square, so the lighting reads at 32 px.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** A flat fill with no light.
- **NEVER:** Fine line detail under 3% of the mark height.
- **NEVER:** Engraved hatching.
- **NEVER:** Muted, low-saturation colour.
- **NEVER:** A mark that has no one-colour version in the manual.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Abstraction | `■■■□□` 3/5 | a literal picture of a thing | a pure abstract form |
| Geometry | `■■■□□` 3/5 | freehand, drawn by eye | ruler and compass on a grid |
| Ornament | `■■□□□` 2/5 | bare form, no decoration | dense decoration and frames |
| Letter dominance | `■■□□□` 2/5 | a symbol with no letters | letters only |
| Dimensionality | `■■■■■` 5/5 | flat, one plane | modelled volume, light and depth |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Construction

- **Grid:** A rounded square or a circle as the base shape; the highlight is an ellipse at 80–90% of the width, set in the top half.
- **Geometry:** Spheres, bubbles, rounded rectangles with corner radii of 20–25% of the height, and swooshes.
- **Stroke contrast ratio:** 1
- **Stroke rule:** No stroke as a line; forms are fills with a 1–2 px light rim at the top edge.
- **Symmetry:** Mirror symmetry on the vertical axis for the base shape; light from the top or the top left.
- **Detail floor:** No detail under 3% of the mark height; the gloss shape is at least 25% of the height.

## Form and lettering

- **Mark type:** symbol
- **Silhouette:** A sphere, a bubble, an orb or a rounded square at 1:1, often over a reflection that adds 30% to the height.
- **Ornament:** Gloss highlights, a reflection, a soft shadow and sparkles; no line ornament.
- **Letterforms:** Rounded sans in bold, lower case, often with the same gloss or a drop shadow; set apart from the orb.

## Colour

- **Strategy:** Saturated blues, greens and oranges in vertical gradients, with white gloss and a soft grey shadow.
- **Colour count min:** 2
- **Colour count max:** 6
- **One colour reversal:** with a redraw
- **Reversal rule:** The manual must add a flat one-colour silhouette; the gloss, the reflection and the shadow drop out.

**Colours**

| Name | Hex | Role |
|---|---|---|
| Aqua blue | `#1E90E8` | base colour |
| Sky light | `#9ED8FF` | top of the gradient |
| Lime | `#7CC242` | second hue |
| Orange | `#F7941D` | accent |
| Shadow grey | `#8A8F99` | drop shadow and reflection |
| White | `#FFFFFF` | gloss and ground |

## Reproduction

- **Min size px:** 32
- **Min size mm:** 12
- **Clear space ratio:** 0.25
- **Clear space:** A quarter of the orb height on each side, plus the reflection under it.
- **Media:** Screens first: web headers, desktop and phone icons; print in CMYK with care for the gradients.

## Prompt primer

- **Positive:** glossy 3D logo symbol · Web 2.0 style · aqua glass orb · top gloss highlight · vertical gradient · floor reflection · soft drop shadow · saturated blue and lime · white ground · 2000s software icon
- **Negative:** letters · text · words · slogan · watermark · flat colour · engraving · muted palette

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Airbrush (tool)

A pen-sized spray gun that lays paint in soft, even tones; with masks, it makes hard edges and smooth gradients side by side. Origin: photography, United States, 1879.

- Build tone in 3 to 6 thin passes; each pass adds 20% to 40% of the final density.
- Cut a hard mask for each edge that must stay sharp; leave the light soft.
- Put one specular highlight of pure white on each chrome form.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **Smashing Magazine** (magazine, web, 2006–now), published the style. An online magazine for web designers and developers. Its tutorials and free icon sets spread the glossy Web 2.0 look and then the flat look.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Base colour (`base_colour`) | #1E90E8 | #1E90E8, #7CC242, #F7941D | colour |
| Colour count (`colour_count`) | 4 | 2–6 | colour, reproduction |
| Stroke weight (`stroke_weight`) | 3 | 1–6 % of mark height | form |
| Container (`container`) | circle | circle, square, badge | construction |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **flatter**: move toward [`flat-logo`](../flat-logo/SKILL.md) (Flat 2010s mark). Keep the silhouette and the hues; drop the gloss, the reflection and the shadow, and fill each part with one flat colour.
- If the user asks for **more official**: move toward [`emblem-badge`](../emblem-badge/SKILL.md) (Emblem and badge). Keep the orb; put it inside a closed ring with the name on the ring, and reduce the gloss to one highlight.

- **Came from (go here for a more orthodox version):** [`geometric-symbol`](../geometric-symbol/SKILL.md)
- **Rejects (the opposite pole; do not blend):** [`swiss-modernist-mark`](../swiss-modernist-mark/SKILL.md)
- **Was rejected by:** [`flat-logo`](../flat-logo/SKILL.md)
- **Mixes well with:** [`emblem-badge`](../emblem-badge/SKILL.md)
- **Kin in another domain:** [`apple-aqua`](../apple-aqua/SKILL.md), [`frutiger-aero`](../frutiger-aero/SKILL.md), [`skeuomorphism`](../skeuomorphism/SKILL.md), [`y2k-aesthetic`](../y2k-aesthetic/SKILL.md)
- **Nearest by vector profile:** [`emblem-badge`](../emblem-badge/SKILL.md), [`victorian-trademark`](../victorian-trademark/SKILL.md), [`flat-logo`](../flat-logo/SKILL.md)

## Emotional target

Shiny novelty: the viewer sees a polished, touchable object and feels the promise of new technology.

**Keywords:** shiny, optimistic, techy, playful, fresh · **Brand archetypes:** magician, explorer, jester

## Canonical evidence (open licence)

Each item below has an open licence or is in the public domain, so you may show it as a reference.

- [Wikipedia puzzle globe, version 2](https://commons.wikimedia.org/wiki/File:Wikipedia-logo-v2.svg) (Nohat and Paullusmagnus; Wikimedia Foundation, 2010): image, CC BY-SA 3.0. Version 1 by Nohat (concept by Paullusmagnus); Wikimedia Foundation

## Sources

- [Wikipedia: Web 2.0](https://en.wikipedia.org/wiki/Web_2.0)
- [Wikipedia: Frutiger Aero](https://en.wikipedia.org/wiki/Frutiger_Aero)
- [Wikipedia: Skeuomorph](https://en.wikipedia.org/wiki/Skeuomorph)
- [Wikimedia Commons API: licence read from imageinfo extmetadata, 2026-11](https://commons.wikimedia.org/w/api.php)

---

Generated from [`data/logo/styles/glossy-3d-logo.json`](../../data/logo/styles/glossy-3d-logo.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
