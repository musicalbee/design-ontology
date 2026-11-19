---
name: skeuomorphic-icon
description: "Apply the Skeuomorphic icon style (2001–2013) when drawing, choosing or prompting an icon or an icon set: a UI glyph, an app icon, a pictogram or a sprite. Load when the user asks for: skeuomorphic icon, realistic icon, aqua icon, ios 6 icon, tango icon, glossy icon."
domain: icon
era: rendered
triggers:
  - "skeuomorphic icon"
  - "realistic icon"
  - "aqua icon"
  - "ios 6 icon"
  - "tango icon"
  - "glossy icon"
  - "photoreal app icon"
vector_profile:
  realism: 5
  fill: 5
  corner_softness: 4
  detail_density: 5
  colour_count: 5
---

# Skeuomorphic icon

> An icon is a small picture of a real object, and the material tells the user what the function is.

Icons that look like small real objects: leather, glass, metal and paper, with light from the top, gradients and a soft cast shadow. The style peaked with Mac OS X Aqua and iOS 1 to 6, and Tango gave it an open, semi-realistic form.

**Period:** 2001–2013 · **Era:** Rendered · **Domain:** Icons · **Also called:** Photorealistic icon, Aqua-era app icon, Tango-style icon

## When to load this skill

Load it when the user asks for: "skeuomorphic icon", "realistic icon", "aqua icon", "ios 6 icon", "tango icon", "glossy icon", "photoreal app icon".

Good for: retro or nostalgic app icons, desktop application icons, games and toys, brand illustrations with a tactile feel.

Do not use it when:
- The icons must sit inline with text at 16–24 px.
- The set needs hundreds of glyphs that stay the same.

## System directives

When drawing, choosing or prompting an icon or an icon set: a UI glyph, an app icon, a pictogram or a sprite in Skeuomorphic icon, you MUST:

1. Draw the master at 256 or 512 px and make hand-tuned copies at 16, 22, 32 and 48 px.
2. Light every object from the top or the top left, at 45°, with one highlight and one shade side.
3. Give each surface a material: a linear gradient of 2 to 5 stops for metal, glass, wood or paper.
4. Add a 1 px light inner edge on the top and a 1 px dark outline at 20–40% opacity around the object.
5. Cast a soft shadow under the object at 20–35% opacity, offset 1–3 px down at 32 px.
6. Use a three-quarter or slight top-down view so that the object shows depth.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Flat fills with no light model.
- **NEVER:** One-colour glyphs.
- **NEVER:** Uniform stroke width across the set.
- **NEVER:** Abstract symbols with no real object.
- **NEVER:** Hard pixel stairs.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Realism | `■■■■■` 5/5 | abstract glyph | rendered object with material and light |
| Fill | `■■■■■` 5/5 | stroke only | solid fill only |
| Corner softness | `■■■■□` 4/5 | square, sharp corners | round, soft corners |
| Detail density | `■■■■■` 5/5 | one idea in few strokes | many parts, texture and highlights |
| Colour count | `■■■■■` 5/5 | one colour | full colour with gradients |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Grid & live area

- **Base px:** 48
- **Live area px:** 44
- **Padding px:** 2
- **Keylines:** A circle of 44 px, a square of 40 px and a three-quarter box; the object may break the keyline by 2 px.

**Sizes px**

|  |
||
|  |
|  |
|  |
|  |
|  |
|  |
|  |

## Stroke

- **Width px:** 1
- **Caps:** round
- **Joins:** round
- **Rule:** The outline is a 1 px edge in a darker tone of the fill at 20–40% opacity, not a drawn stroke.

## Shape & corners

- **Corner radius px:** 6
- **Primitives:** Real object outlines: rounded boxes, cylinders, sheets of paper and glass panes.
- **Optical size:** Redraw the 16 and 22 px sizes with fewer parts and a stronger outline; keep texture only at 48 px and above.

## Colour

- **Count max:** 48
- **Gradients:** yes
- **Strategy:** A full colour palette from the Tango set, with each hue in 3 tones (light, mid, dark) and linear or radial gradients.

**Colours**

| Name | Hex | Role |
|---|---|---|
| Butter | `#EDD400` | highlight and warning |
| Orange | `#F57900` | accent |
| Sky blue | `#3465A4` | glass and links |
| Chameleon | `#73D216` | status and nature |
| Scarlet | `#CC0000` | error and stop |
| Aluminium | `#BABDB6` | metal and frame |
| Slate | `#2E3436` | outline and shade |

## Perspective & light

- **View:** three-quarter perspective
- **Light:** One key light from the top left at 45°, with a specular highlight on glass and metal.
- **Shadow:** A soft cast shadow at 20–35% opacity under the object, and a contact shadow at the base.

## Metaphor

- **Typical:** A letter, a globe, a printer, a camera, a notepad and a house.
- **Treatment:** Literal real objects with their material: a mail icon is an envelope with paper texture.

## Prompt primer

- **Positive:** skeuomorphic app icon · photorealistic icon · glossy highlight · soft drop shadow · brushed metal and glass · three-quarter view · Tango desktop icon style · Mac OS X Aqua era
- **Negative:** flat design · line icons · single colour glyph · pixel art · minimal abstract symbol

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Airbrush (tool)

A pen-sized spray gun that lays paint in soft, even tones; with masks, it makes hard edges and smooth gradients side by side. Origin: photography, United States, 1879.

- Build tone in 3 to 6 thin passes; each pass adds 20% to 40% of the final density.
- Cut a hard mask for each edge that must stay sharp; leave the light soft.
- Put one specular highlight of pure white on each chrome form.

### Skeuomorph (motif)

A detail that copies the material or the form of an older object, though it no longer has that function. Origin: architecture, Greece, c. 600 BCE.

- Copy one material for each surface: leather, felt, wood, paper or brushed metal.
- Light every surface from one source above, at 90 degrees.
- Keep the old details that tell the use: stitches, page edges, knobs and screws.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **App Store** (platform, online, 2008–now), published the style. The store of Apple for iPhone and iPad apps. Apps and their icons follow the platform look of each era, from leather and glass to flat colour and Liquid Glass, and premium mobile games with a clean art style found a large public there.
- **The Iconfactory** (studio, Greensboro, North Carolina, 1996–now), made the style. An icon design studio. It made pixel icons for early desktops and detailed, lit icons for Mac OS X and iOS.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Grid size (`grid_size`) | 48 | 32–512 px | grid |
| Stroke width (`stroke_width`) | 1 | 0.5–1 px | stroke |
| Corner radius (`corner_radius`) | 6 | 4–8 px | shape |
| Fill mode (`fill_mode`) | gradient | gradient, render | colour, shape |
| Base colour (`base_colour`) | #3465A4 | #3465A4, #F57900, #73D216, #CC0000 | colour |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **flatter and simpler**: move toward [`flat-icon`](../flat-icon/SKILL.md) (Flat icon). Keep the object and the colours; drop the gradients, the highlight and the shadow, and use a front view.
- If the user asks for **softer and modern**: move toward [`clay-3d-icon`](../clay-3d-icon/SKILL.md) (3D clay icon). Keep the depth; replace hard gloss with a matte, clay-like material and a larger corner radius of 12–16 px at 48 px.

- **Came from (go here for a more orthodox version):** [`pixel-icon`](../pixel-icon/SKILL.md)
- **Led to (go here for a newer version):** [`clay-3d-icon`](../clay-3d-icon/SKILL.md)
- **Was rejected by:** [`flat-icon`](../flat-icon/SKILL.md), [`outline-icon`](../outline-icon/SKILL.md)
- **Mixes well with:** [`isometric-icon`](../isometric-icon/SKILL.md)
- **Kin in another domain:** [`apple-aqua`](../apple-aqua/SKILL.md), [`frutiger-aero`](../frutiger-aero/SKILL.md), [`skeuomorphism`](../skeuomorphism/SKILL.md)
- **Nearest by vector profile:** [`clay-3d-icon`](../clay-3d-icon/SKILL.md), [`isometric-icon`](../isometric-icon/SKILL.md), [`flat-icon`](../flat-icon/SKILL.md)

## Emotional target

Comfort and trust: the user sees a familiar object and knows what it does.

**Keywords:** tactile, rich, familiar, glossy, friendly · **Brand archetypes:** caregiver, everyman, magician

## Canonical evidence (open licence)

Each item below has an open licence or is in the public domain, so you may show it as a reference.

- [Tango: internet-mail](https://commons.wikimedia.org/wiki/File:Internet-mail.svg) (Jakub Steiner, Andreas Nilsson and the Tango Desktop Project, 2005): icon-set, Public domain. Tango Desktop Project, file on Wikimedia Commons
- [Tango: go-home](https://commons.wikimedia.org/wiki/File:Go-home.svg) (The Tango Desktop Project): icon-set, Public domain. Tango Desktop Project, file on Wikimedia Commons

## Sources

- [Tango Desktop Project, Tango Icon Theme Guidelines](https://en.wikipedia.org/wiki/Tango_Desktop_Project)
- [Apple Human Interface Guidelines for Mac OS X (2001–2012), as summarised in the Aqua article](https://en.wikipedia.org/wiki/Aqua_(user_interface))

---

Generated from [`data/icon/styles/skeuomorphic-icon.json`](../../data/icon/styles/skeuomorphic-icon.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
