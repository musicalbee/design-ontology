---
name: synthetism
description: "Apply the Synthetism style (1888–1900) when making, prompting or art-directing a picture: a painting, an illustration, an image-generation prompt or a cover. Load when the user asks for: synthetism, synthetist, cloisonnism, pont-aven, gauguin brittany, flat colour with dark outline."
domain: painting
era: nineteenth-century
triggers:
  - "synthetism"
  - "synthetist"
  - "cloisonnism"
  - "pont-aven"
  - "gauguin brittany"
  - "flat colour with dark outline"
  - "emile bernard"
  - "serusier"
vector_profile:
  abstraction: 3
  brushwork_visibility: 2
  chromatic_intensity: 5
  depth_illusion: 1
  line_dominance: 4
---

# Synthetism

> A picture should join the thing seen, the feeling of the painter and the pure form of colour and line, and it should not copy the scene from the eye.

Flat areas of pure colour held by a dark outline, painted from memory and feeling. The painter combines the seen scene, the feeling and the pure form of line and colour into one simple, decorative picture.

**Period:** 1888–1900 · **Era:** Nineteenth century · **Domain:** Painting · **Also called:** Cloisonnism, Pont-Aven style

## When to load this skill

Load it when the user asks for: "synthetism", "synthetist", "cloisonnism", "pont-aven", "gauguin brittany", "flat colour with dark outline", "emile bernard", "serusier".

Good for: poster and label art with flat colour, book and album covers, stained-glass and tile design, folk and travel illustration.

Do not use it when:
- The brief needs modelled volume, depth or a photographic look.
- The picture must show a fine technical detail.

## System directives

When making, prompting or art-directing a picture: a painting, an illustration, an image-generation prompt or a cover in Synthetism, you MUST:

1. Fill each shape with one flat colour and no gradient, in a patch of 30–300mm.
2. Draw a dark blue or black contour of 3–8mm around every patch, like the lead of a stained-glass window.
3. Choose colours by feeling and not by nature: a red field, a yellow Christ, a blue tree.
4. Flatten the space to 2 layers, with no cast shadow and no single-point perspective.
5. Set the shapes in a rhythm of curves, and cut the scene by a tree or a high horizon at 10–20% from the top.
6. Paint from memory and from sketches, so that detail is lost and the main form stays.
7. Choose a simple, devout or rustic subject, such as women at prayer, a field, a calvary or a farm.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Soft, blended modelling of the form.
- **NEVER:** Atmospheric perspective with a pale far distance.
- **NEVER:** Broken dabs of colour that mix in the eye.
- **NEVER:** Grey or brown cast shadows.
- **NEVER:** Fine, exact detail of the scene.
- **NEVER:** A realistic, local colour copied from nature.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Abstraction | `■■■□□` 3/5 | illusionistic depiction | pure abstraction |
| Brushwork visibility | `■■□□□` 2/5 | no trace of the hand | each stroke and gesture shown |
| Chromatic intensity | `■■■■■` 5/5 | muted, tonal | saturated, high-key |
| Depth illusion | `■□□□□` 1/5 | flat picture plane | deep perspectival space |
| Line dominance | `■■■■□` 4/5 | colour and mass carry the image | line carries the image |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Composition

- **Layout:** A few large flat patches set against a high horizon, joined by curved dark contours, with a tree trunk or a figure that cuts the picture at a diagonal.
- **Focal point:** The strongest colour patch, a red or yellow, placed within the central 40% of the canvas and at one third from an edge.
- **Format:** A canvas at 4:5 to 3:2; the figures are large, and the edges crop the scene hard.

**Principles**

| Principle | Rule |
|---|---|
| layering-depth | Reduce the depth to 2 layers and put the horizon at 10–20% from the top, so that the ground fills the picture. |
| contrast | Set one pure complementary pair, such as red against green, in the focal area with a value gap of 30% or more. |
| rhythm | Repeat a curved contour of 3–8mm around 5 or more patches, with each curve echoing its neighbour. |
| focal-point | Give the main figure or the central patch 30–50% of the picture area, in the purest colour. |
| colour-distribution | Fill 60–70% of the area with 2 flat colours, 20–30% with a contrast colour, and under 10% with the dark contour. |
| negative-space | Leave large empty patches of one flat colour, and put no detail in them. |

## Palette

- **Strategy:** Pure, flat colours chosen for feeling: a red ground, a yellow figure, a blue-green tree, all held by a dark blue contour.
- **Distribution:** Two dominant flat colours 60–70%, a contrast colour 20–30%, a dark contour under 10%.
- **Ground:** A pale, warm ground that shows at the edge of a patch.

**Colours**

| Name | Hex | Pigment | Role |
|---|---|---|---|
| Vermilion | `#D2381F` | vermilion | the red field |
| Chrome yellow | `#E8B923` | chrome yellow | figure, sky and light |
| Viridian green | `#2E7D5B` | viridian | grass and tree |
| Prussian blue | `#1D3A6B` | Prussian blue | the contour and the shadow |
| Orange | `#E07A22` | cadmium orange | path and ground |
| Warm white | `#EFE6D0` | lead white | cap, cloth and highlight |

## Brushwork & medium

- **Medium:** Oil paint, thin and matt, with little medium, laid in even coats.
- **Support:** Rough canvas or coarse sacking, often a small to medium size.
- **Brushwork:** Flat fills with a stroke of 5–15mm that does not show; the visible stroke follows the edge of the patch.
- **Paint handling:** 1 layer of opaque colour, under 1mm thick; the colour is not blended and no glaze is added.
- **Edges:** A dark blue or black contour of 3–8mm in a smooth curve; the patches meet at the contour.

## Light & modelling

- **Light:** None from a source; the light is a pure yellow or a warm white patch.
- **Modelling:** By a flat change of colour from one patch to the next, with no gradient.
- **Shadow:** No cast shadow; a form turns by its contour and by a darker patch of the same hue.
- **Temperature:** Warm patches against cool ones, set side by side at full chroma.

## Subject

- **Typical:** Breton women at prayer or in a field, a calvary, a farm, a tree and a hill, a vision of a scene from the Bible.
- **Figure scale:** A figure fills 40–80% of the picture height, often in a group of 3–6.
- **Treatment:** Simple, devout and rustic; the scene is a dream or a memory, and the mood is quiet and strange.

## Surface

- **Finish:** Matt; no varnish.
- **Texture:** Flat and even, with the weave of the canvas in view.

## Reference works

- **Note:** Object ids were checked against the Art Institute of Chicago API (CC0 data). Both works are by Gauguin; they come from his later years, after the Synthetist method was set. Look at the museum page for the image and its licence.

**Works**

| Work | Artist | Date | Museum | Object id | Public domain |
|---|---|---|---|---|---|
| Arlésiennes (Mistral) | Paul Gauguin | 1888 | Art Institute of Chicago | 19339 | true |
| Mahana no atua (Day of the God) | Paul Gauguin | 1894 | Art Institute of Chicago | 27943 | true |
| No te aha oe riri (Why Are You Angry?) | Paul Gauguin | 1896 | Art Institute of Chicago | 16496 | true |

## Prompt primer

- **Positive:** synthetist painting · flat areas of pure colour · dark blue contour · cloisonnism, stained-glass outline · Gauguin Brittany · Pont-Aven school · red field and yellow figure · high horizon, no perspective · simple devout subject · matt, thin oil
- **Negative:** soft blended modelling · atmospheric perspective · broken dabs of colour · grey cast shadows · fine detail · naturalistic colour

## Composition principles

The rules above name these shared principles by id. The definition is the same in every domain; the number in the rule belongs to this style. The full records are in [`data/principles/`](../../data/principles/).

| Id | Principle | Definition | Measure: typical range |
|---|---|---|---|
| `layering-depth` | Layering in depth | A view holds elements on several planes at different distances from the eye. Overlap between the planes shows depth. | planes in depth (count): 2 to 4; overlap between planes (% of the nearer element): 10–40 |
| `contrast` | Contrast | Two adjacent elements differ in value, hue, texture, size or shape. Contrast marks edges and makes the focal point. | brightest mass to deepest shadow in one image (stops): 3–4 flat; 5–8 hard, 8 or more for expressionist |
| `rhythm` | Rhythm and repetition | An element or an interval repeats at a regular, alternating or progressive step, and the eye moves along the series. | repeated interval (cm or px): style module; repetitions in one series (count): 3 or more; type (kind): regular, alternating, progressive |
| `focal-point` | Focal point | The one place in a view that the eye finds first and comes back to. A composition has one primary focal point and at most two secondary ones. | focal points in one view (count): 1 primary, 0 to 2 secondary; luminance of the focal point to its surround (ratio): 3:1 to 10:1; position (fraction of width): 0.5 on an axis, or 0.33 / 0.67 on a third |
| `colour-distribution` | Colour distribution | Each colour takes a planned share of the visible area: a dominant colour, a secondary colour and an accent. | dominant / secondary / accent share (% of visible surface): 60/30/10 as the default; 70/25/5 calm; 40/35/25 bold; accents (count): 1 to 3 |
| `negative-space` | Negative space | The empty area around and between elements. It is a part of the composition, not a remainder. | empty frame area (% of image): 30–70 |

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Cloisonnism (process, invented here)

Flat areas of one colour held by a dark outline, as the lead holds the glass in a church window. Origin: painting, Paris, France, c. 1887.

- Fill each shape with one flat colour and no gradient.
- Draw a dark contour of 3 to 8mm round each shape.
- Set a few large shapes against a high horizon, with no cast shadow.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **Pont-Aven School** (collective, Pont-Aven, 1886–now), launched the style. A loose circle of painters in a Breton village. Gauguin and Bernard worked there on flat areas of colour with dark outlines, a manner that critics named Synthetism. The circle has no firm end date.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Key colour (`key_colour`) | #D2381F | #D2381F, #E8B923, #2E7D5B, #1D3A6B | palette |
| Value contrast (`value_contrast`) | 0.6 | 0.4–0.8 | light_and_modelling, palette |
| Brush size (`brush_size`) | 0.8 | 0.3–2 % of canvas width | brushwork_and_medium |
| Canvas ratio (`canvas_ratio`) | 4:5 | 4:5, 3:4, 3:2 | surface, composition |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more thick and expressive**: move toward [`post-impressionism`](../post-impressionism/SKILL.md) (Post-Impressionism). Keep the strong colour; drop the even fill, show a stroke of 5–15mm that follows the form, and thicken the paint to 2–5mm.
- If the user asks for **more decorative and mystic**: move toward [`symbolism-painting`](../symbolism-painting/SKILL.md) (Symbolism). Keep the flat patch and the contour; add a quiet, dreamlike subject, a pale, soft palette and a rhythm of long curves.

- **Came from (go here for a more orthodox version):** [`post-impressionism`](../post-impressionism/SKILL.md)
- **Rejects (the opposite pole; do not blend):** [`impressionism`](../impressionism/SKILL.md)
- **Nearest by vector profile:** [`pop-art-painting`](../pop-art-painting/SKILL.md), [`futurism-painting`](../futurism-painting/SKILL.md), [`symbolism-painting`](../symbolism-painting/SKILL.md)

## Emotional target

A quiet, dreamlike intensity: the viewer meets a simple scene made strange by pure colour.

**Keywords:** flat, decorative, symbolic, dreamlike, bold · **Brand archetypes:** creator, explorer, magician

## Sources

- [Wikipedia: Pont-Aven School](https://en.wikipedia.org/wiki/Pont-Aven_School)
- [Wikipedia: Synthetism](https://en.wikipedia.org/wiki/Synthetism)
- [Art Institute of Chicago API (CC0 data)](https://api.artic.edu/docs/)
- Albert Aurier, Le Symbolisme en peinture: Paul Gauguin (Mercure de France, 1891)

---

Generated from [`data/painting/styles/synthetism.json`](../../data/painting/styles/synthetism.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
