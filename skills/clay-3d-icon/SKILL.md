---
name: clay-3d-icon
description: "Apply the 3D clay icon style (2020–present) when drawing, choosing or prompting an icon or an icon set: a UI glyph, an app icon, a pictogram or a sprite. Load when the user asks for: 3d icon, clay icon, soft 3d icon, 3d emoji, fluent emoji 3d, claymorphism icon."
domain: icon
era: post-flat
triggers:
  - "3d icon"
  - "clay icon"
  - "soft 3d icon"
  - "3d emoji"
  - "fluent emoji 3d"
  - "claymorphism icon"
  - "toy icon"
vector_profile:
  realism: 4
  fill: 5
  corner_softness: 5
  detail_density: 3
  colour_count: 5
---

# 3D clay icon

> After a decade of flat glyphs, an icon can have volume again if the forms stay simple, round and soft like a toy.

Icons rendered in 3D with soft, matte, clay-like materials, large round corners and a soft shadow. They bring depth back after the flat years, but with toy-like simplicity and no real texture.

**Period:** 2020–present · **Era:** Post-flat · **Domain:** Icons · **Also called:** 3D icon, Soft 3D icon, Fluent 3D emoji style

## When to load this skill

Load it when the user asks for: "3d icon", "clay icon", "soft 3d icon", "3d emoji", "fluent emoji 3d", "claymorphism icon", "toy icon".

Good for: landing page heroes and feature cards, onboarding and empty states, consumer and fintech apps with a soft voice, social and messaging stickers.

Do not use it when:
- The icon must work in one colour or at 24 px.
- The UI is a dense professional tool.

## System directives

When drawing, choosing or prompting an icon or an icon set: a UI glyph, an app icon, a pictogram or a sprite in 3D clay icon, you MUST:

1. Model each object from simple volumes with large fillets: a radius of 15–25% of the object size.
2. Use a matte or satin material with soft subsurface light; no hard gloss.
3. Light the object with one large soft key light from the top left and a fill light at 30–50%.
4. Use a three-quarter view from 15–30° above.
5. Use 3 to 6 saturated pastel hues per icon, with gentle gradients from the light.
6. Ship each icon as a PNG at 256 px or more, with a transparent ground.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Hard, sharp edges.
- **NEVER:** Photographic texture and dirt.
- **NEVER:** Glossy chrome reflections.
- **NEVER:** Flat front views.
- **NEVER:** Thin line strokes.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Realism | `■■■■□` 4/5 | abstract glyph | rendered object with material and light |
| Fill | `■■■■■` 5/5 | stroke only | solid fill only |
| Corner softness | `■■■■■` 5/5 | square, sharp corners | round, soft corners |
| Detail density | `■■■□□` 3/5 | one idea in few strokes | many parts, texture and highlights |
| Colour count | `■■■■■` 5/5 | one colour | full colour with gradients |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Grid & live area

- **Base px:** 256
- **Live area px:** 224
- **Padding px:** 16
- **Keylines:** The object fits a circle of 224 px; the shadow may extend 8 px below the live area.

**Sizes px**

|  |
||
|  |
|  |
|  |

## Stroke

- **Caps:** none
- **Joins:** none
- **Rule:** No stroke. Edges come from light and the fillet, not from a line.

## Shape & corners

- **Corner radius px:** 48
- **Primitives:** Rounded boxes, spheres, cylinders and tori with fillets of 15–25% of the object size.
- **Optical size:** Below 64 px, swap to a flat or glyph version; the 3D form loses its read under 48 px.

## Colour

- **Count max:** 24
- **Gradients:** yes
- **Strategy:** Saturated pastel hues with soft light gradients from the key light.

**Colours**

| Name | Hex | Role |
|---|---|---|
| Clay coral | `#FF8A73` | main body |
| Clay sky | `#7CC6FE` | main body |
| Clay mint | `#7EDDB0` | secondary part |
| Clay butter | `#FFD66B` | accent |
| Clay lilac | `#B49CF5` | accent |
| Soft shadow | `#5B4E7A` | shadow tint |

## Perspective & light

- **View:** three-quarter perspective
- **Light:** One large soft key light from the top left and a fill light at 30–50%; soft ambient occlusion in the creases.
- **Shadow:** A soft contact shadow under the object at 20–30% opacity, tinted with the main hue.

## Metaphor

- **Typical:** A house, a camera, a folder, a rocket, a gift and a chat bubble.
- **Treatment:** Literal objects simplified into toy-like volumes.

## Prompt primer

- **Positive:** 3D clay icon · soft matte 3D render · rounded toy-like shapes · pastel colours · soft studio light · three-quarter view · transparent background · Fluent 3D emoji style
- **Negative:** flat vector · line icon · photorealistic texture · glossy chrome · sharp edges

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **flatter**: move toward [`flat-icon`](../flat-icon/SKILL.md) (Flat icon). Keep the hues and the simple shapes; remove the volume, the light and the shadow.
- If the user asks for **more realistic**: move toward [`skeuomorphic-icon`](../skeuomorphic-icon/SKILL.md) (Skeuomorphic icon). Keep the 3D view; replace clay with real materials, sharper fillets and a glossy highlight.

- **Came from (go here for a more orthodox version):** [`skeuomorphic-icon`](../skeuomorphic-icon/SKILL.md)
- **Rejects (the opposite pole; do not blend):** [`flat-icon`](../flat-icon/SKILL.md)
- **Kin in another domain:** [`claymorphism`](../claymorphism/SKILL.md)
- **Nearest by vector profile:** [`skeuomorphic-icon`](../skeuomorphic-icon/SKILL.md), [`flat-icon`](../flat-icon/SKILL.md), [`isometric-icon`](../isometric-icon/SKILL.md)

## Emotional target

Delight and warmth: the icon looks soft enough to pick up.

**Keywords:** playful, soft, warm, tactile, friendly · **Brand archetypes:** jester, innocent, caregiver

## Canonical evidence (open licence)

Each item below has an open licence or is in the public domain, so you may show it as a reference.

- [Fluent Emoji: house (3D)](https://github.com/microsoft/fluentui-emoji) (Microsoft): icon-set, MIT. Fluent Emoji at commit 1ffb34c, 3D set
- [Fluent Emoji: camera (3D)](https://github.com/microsoft/fluentui-emoji) (Microsoft): icon-set, MIT. Fluent Emoji at commit 1ffb34c, 3D set

## Sources

- [Fluent Emoji repository](https://github.com/microsoft/fluentui-emoji)
- [Claymorphism, as described in the Smashing Magazine article (2022)](https://www.smashingmagazine.com/2022/03/claymorphism-css-ui-design-trend/)

---

Generated from [`data/icon/styles/clay-3d-icon.json`](../../data/icon/styles/clay-3d-icon.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
