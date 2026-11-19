---
name: food-photography
description: "Apply the Food photography style (1950s–today) when making, briefing, prompting or grading photographs. Load when the user asks for: food photography, flat lay, moody food, cookbook photo, recipe image, menu shot."
domain: photography
era: commercial-and-staged
triggers:
  - "food photography"
  - "flat lay"
  - "moody food"
  - "cookbook photo"
  - "recipe image"
  - "menu shot"
  - "steam and sheen"
vector_profile:
  staging: 4
  tonal_contrast: 3
  colour_saturation: 4
  depth_of_field: 4
  proximity: 4
---

# Food photography

> Food is a sensation, so the picture shows texture, steam and light before it shows the plate.

Photographs of dishes made to look edible and honest. A window, a small set and a short lens give shape, steam and texture, and a few props tell where the meal sits.

**Period:** 1950s–today · **Era:** Constructed images · **Domain:** Photography · **Also called:** Editorial food, Dark and moody food

## When to load this skill

Load it when the user asks for: "food photography", "flat lay", "moody food", "cookbook photo", "recipe image", "menu shot", "steam and sheen".

Good for: menus and delivery apps, cookbooks and food magazines, brand campaigns for drinks and snacks, image prompts for plated dishes.

Do not use it when:
- The brief needs a clinical, nutritional catalogue image.
- The food cannot be styled within 5 minutes of plating.

## System directives

When making, briefing, prompting or grading photographs in Food photography, you MUST:

1. Use a 50mm to 105mm macro lens at f/2.8 to f/5.6, with a shallow plane that falls on the front edge of the dish.
2. Light from the side or behind with one window or a 60cm soft box at 90° to the lens axis; fill with a white card at 1 stop under.
3. Shoot at 30° to 45° above the plate for a plated dish, or at 90° for a flat lay.
4. Put 3 to 5 props in the frame, and cut the dish by 10–20% at an edge.
5. Keep a warm, natural colour at 5000–5600K; protect reds and greens.
6. Shoot each dish within 5 minutes of plating, and use a stand-in for the first test frames.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Flash on the front of the dish.
- **NEVER:** Cold blue casts that kill appetite.
- **NEVER:** Too many props that hide the dish.
- **NEVER:** Dry food with no sheen or steam.
- **NEVER:** Greasy retouch and over-sharpening.
- **NEVER:** Plastic or inedible-looking fake food that is claimed as real.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Staging | `■■■■□` 4/5 | found, unplanned | fully constructed |
| Tonal contrast | `■■■□□` 3/5 | flat, narrow range | hard, black to white |
| Colour saturation | `■■■■□` 4/5 | monochrome or muted | saturated |
| Depth of field | `■■■■□` 4/5 | deep, all sharp | shallow, subject isolated |
| Proximity | `■■■■□` 4/5 | distant, context first | intimate, close to the subject |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Composition

- **Framing:** Close and tight; the plate is cropped by 10–20% at one edge.
- **Viewpoint:** 30° to 45° above the plate; 90° for flat lays; 0° for tall burgers and cakes.
- **Geometry:** Triangles of plate, glass and prop; diagonal leaning lines of cutlery or a napkin.
- **Subject placement:** Hero dish on a third, with a lesser prop on the opposite third and a soft background.

**Principles**

| Principle | Rule |
|---|---|
| focal-point | Let the hero dish take 40–60% of the frame, with the sharpest plane on its front edge. |
| rule-of-thirds | Put the hero within 0.05 of 0.33 or 0.67 of the width. |
| hierarchy | Rank 1 hero, 2 to 3 supporting props and 1 to 2 background items; the hero has the highest contrast and the sharpest plane. |
| layering-depth | Use 3 planes: a blurred foreground prop at 0.1m, the dish at 0.5m and a soft background at 1.5m. |
| colour-distribution | Set 60% in neutral surface, 30% in the food hue and 10% in a garnish accent. |

## Light

- **Quality:** Soft, directional window light, with a small soft box as a stand-in.
- **Direction:** Side or back-side at 90° to 135° from the lens axis; a white card fills the front.
- **Key to fill ratio:** 3:1 to 4:1 (1.5–2 stops)
- **Colour temperature:** 5000–5600K, warm daylight
- **Time of day:** Late morning or early afternoon at a north window

## Lens & camera

- **Format:** Digital full frame; macro or short tele
- **Focal length:** 50mm to 105mm (macro)
- **Aperture:** f/2.8 to f/5.6 (f/8 for flat lays)
- **Shutter:** 1/60s to 1/250s
- **Film speed:** ISO 100 to 400
- **Focus:** Focus on the nearest edge of the hero; the plane falls off in 2cm.
- **Support:** Tripod with a side arm for flat lays
- **Equipment:** macro lens · tripod with side arm · white and black cards · tweezers and spray bottle · cutlery and a napkin · backdrop boards

## Colour & grade

- **Treatment:** Warm, natural colour with a rich red and green and a slight lift in the highlights.
- **Grade recipe:**
  - Set the white balance at 5200K, tint +2.
  - Set the black point at 3% and the white point at 97%.
  - Apply +15% midtone contrast and +10% clarity on texture.
  - Lift red and orange saturation by +10% and keep skin-like tones natural.
  - Add a soft glow (−10 clarity) to steam and glaze.
  - Sharpen at radius 0.6px, amount 60%, with a mask on the hero.
- **Grain:** Low: ISO 100, clean, with a faint 5% grain for a filmic look

**Palette**

| Name | Hex | Role |
|---|---|---|
| Dark board | `#2B2523` | backdrop |
| Crust gold | `#C98B43` | food highlight |
| Herb green | `#4F7A3B` | garnish |
| Tomato red | `#B2362A` | accent |
| Linen cream | `#E8DFCC` | cloth and plate |

## Subject & staging

- **Subjects:** plated dishes · baked goods · fresh produce · drinks with ice · hands pouring or cutting · a laid table
- **Staging:** Full. A food stylist cooks and plates; a prop stylist chooses the board, the cloth and the cutlery.
- **Direction:** Add motion: pour, tear, dust or drip; shoot 3 to 5 frames at the peak of steam.

## Post-processing

- **Workflow:** Shoot tethered and check the steam and sheen at 100%. · Stack 2 or 3 focus frames for depth only when needed. · Clean crumbs and spills; keep the real texture. · Export at 4:5 and 16:9, sRGB, 2400px on the long edge.
- **Output:** A warm, tactile image for a menu, a cookbook or an ad.

## Prompt primer

- **Positive:** food photography · side window light · macro 100mm · shallow depth of field · steam rising · warm natural colour · wooden board · linen napkin · 30 degree angle · editorial food
- **Negative:** flash · blue cast · greasy · flat lighting · plastic look · clutter · overprocessed

**Canonical works**

| Work | Maker | Year |
|---|---|---|
| Pepper No. 30 | Edward Weston | 1930 |
| Cabbage Leaf | Edward Weston | 1931 |
| Frozen Foods, New York | Irving Penn | 1977 |

## Composition principles

The rules above name these shared principles by id. The definition is the same in every domain; the number in the rule belongs to this style. The full records are in [`data/principles/`](../../data/principles/).

| Id | Principle | Definition | Measure: typical range |
|---|---|---|---|
| `focal-point` | Focal point | The one place in a view that the eye finds first and comes back to. A composition has one primary focal point and at most two secondary ones. | focal points in one view (count): 1 primary, 0 to 2 secondary; luminance of the focal point to its surround (ratio): 3:1 to 10:1; position (fraction of width): 0.5 on an axis, or 0.33 / 0.67 on a third |
| `rule-of-thirds` | Rule of thirds | Two horizontal and two vertical lines divide the view into nine equal parts. The focal point sits on one of the four crossings, and a horizon sits on one of the two horizontal lines. | focal point position (fraction of width and height): 0.33 or 0.67, tolerance 0.05; horizon position (fraction of height): 0.33 or 0.67 |
| `hierarchy` | Hierarchy | The elements of a composition rank by importance through size, position, contrast or isolation. The viewer reads them in that order. | levels of rank (count): 2 to 3; size ratio between adjacent levels (ratio): 1.5:1 or more |
| `layering-depth` | Layering in depth | A view holds elements on several planes at different distances from the eye. Overlap between the planes shows depth. | planes in depth (count): 2 to 4; overlap between planes (% of the nearer element): 10–40 |
| `colour-distribution` | Colour distribution | Each colour takes a planned share of the visible area: a dominant colour, a secondary colour and an accent. | dominant / secondary / accent share (% of visible surface): 60/30/10 as the default; 70/25/5 calm; 40/35/25 bold; accents (count): 1 to 3 |

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Tilt-shift (tool)

Lens or camera movements that keep vertical lines parallel and move the plane of focus; a building stands upright and sharp. Origin: photography, Vienna, 1904.

- Keep the back of the camera vertical and shift the lens up by 10 to 20 mm, so that vertical lines stay parallel.
- Tilt the lens by 2° to 8° to turn the plane of focus along the ground for depth at a small stop.
- Close the lens to f/11 to f/22 for full depth of field.
- In an editor, use a narrow band of focus and a strong blur outside it to fake a miniature.

## Media

The salons, schools, magazines, publishers, galleries and platforms that carried this style.

- **Bon Appétit** (magazine, New York, 1956–now), published the style. An American food magazine. Its food photography sets the look of home cooking in print and online.
- **Instagram** (platform, web, 2010–now), published the style. A photo and video app. Home and food images spread on it, and it carried trends such as dopamine decor and the film grain look.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Colour temperature (`colour_temperature`) | 5200 | 4800–5600 K | colour_and_grade, light |
| Contrast (`contrast`) | 1.15 | 1.05–1.3 | colour_and_grade, post_processing |
| Grain (`grain`) | 100 | 100–400 ISO | process, post_processing |
| Focal length (`focal_length`) | 100 | 50–105 mm | lens_and_camera, composition |
| Aspect ratio (`aspect_ratio`) | 4:5 | 4:5, 1:1, 2:3 | composition |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more raw and real**: move toward [`documentary-photography`](../documentary-photography/SKILL.md) (Documentary photography). Shoot the cook at work in the kitchen with a 35mm lens at f/4, available light and the real mess; keep the hands.
- If the user asks for **lighter and more airy**: move toward [`scandinavian-interior-photography`](../scandinavian-interior-photography/SKILL.md) (Scandinavian interior photography). Use a white backdrop, a diffused window at 2:1 and f/8; reduce saturation by −12% and keep a pale wood board.

- **Came from (go here for a more orthodox version):** [`straight-photography`](../straight-photography/SKILL.md)
- **Mixes well with:** [`fashion-editorial`](../fashion-editorial/SKILL.md)
- **Kin in another domain:** [`baroque-painting`](../baroque-painting/SKILL.md), [`dopamine-decor`](../dopamine-decor/SKILL.md)
- **Nearest by vector profile:** [`ai-hyperreal`](../ai-hyperreal/SKILL.md), [`cinematic-teal-orange`](../cinematic-teal-orange/SKILL.md), [`fashion-editorial`](../fashion-editorial/SKILL.md)

## Emotional target

Appetite and comfort: the viewer wants to eat and to sit at that table.

**Keywords:** appetising, warm, tactile, fresh, close · **Brand archetypes:** caregiver, jester

## Sources

- Francisco de Zurbarán, Still Life with Lemons, Oranges and a Rose (1633), Norton Simon Museum
- Helene Dujardin, Plate to Pixel: Digital Food Photography & Styling (Wiley, 2010)

---

Generated from [`data/photography/styles/food-photography.json`](../../data/photography/styles/food-photography.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
