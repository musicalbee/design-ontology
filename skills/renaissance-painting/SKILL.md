---
name: renaissance-painting
description: "Apply the Renaissance painting style (1400–1520) when making, prompting or art-directing a picture: a painting, an illustration, an image-generation prompt or a cover. Load when the user asks for: renaissance, quattrocento, italian renaissance, madonna and child, sfumato, linear perspective."
domain: painting
era: early-modern
triggers:
  - "renaissance"
  - "quattrocento"
  - "italian renaissance"
  - "madonna and child"
  - "sfumato"
  - "linear perspective"
  - "oil glaze"
  - "botticelli"
  - "classical portrait"
vector_profile:
  abstraction: 1
  brushwork_visibility: 1
  chromatic_intensity: 3
  depth_illusion: 5
  line_dominance: 4
---

# Renaissance painting

> A picture is a window onto a measured space, and the ideal human body is the measure of that space.

A picture as a measured window onto the world: linear perspective, modelled figures, a stable geometry and a calm, idealised body. Florentine and Venetian workshops and Flemish oil painters set the rules.

**Period:** 1400–1520 · **Era:** Early modern · **Domain:** Painting · **Also called:** Quattrocento, Early and High Renaissance, Italian Renaissance painting

## When to load this skill

Load it when the user asks for: "renaissance", "quattrocento", "italian renaissance", "madonna and child", "sfumato", "linear perspective", "oil glaze", "botticelli", "classical portrait".

Good for: allegorical illustration, book and album covers, image prompts for classical portraits, concept art for historical settings.

Do not use it when:
- The brief asks for motion, drama or visible gesture.
- The subject is modern urban life, or the picture must read as flat graphic design.

## System directives

When making, prompting or art-directing a picture: a painting, an illustration, an image-generation prompt or a cover in Renaissance painting, you MUST:

1. Set one vanishing point on the horizon line, at 40–50% of the picture height, and make every orthogonal converge on it.
2. Arrange the main figures in a triangle or pyramid, with the apex on the centre axis in the upper third.
3. Model each form with a smooth gradation from light to shade in 6–8 steps, with no drawn outline on the flesh.
4. Build colour in thin glazes over a drawn underlayer, and level the surface until no stroke is visible.
5. Put a calm landscape or a piece of architecture behind the figures, and make it cooler, paler and bluer with each step of distance.
6. Place the horizon, the focal figure and the architecture on the golden section or on a 2:3 ratio.
7. Pose figures in contrapposto with the head turned 10–30° from the shoulders, and give the hands a meaning.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Visible brush strokes on figures or faces.
- **NEVER:** Flat colour fields without modelling.
- **NEVER:** Diagonal compositions with a single hard beam of light.
- **NEVER:** Elongated limbs, twisted poses or a stretched neck.
- **NEVER:** Figures cropped by the picture edge.
- **NEVER:** Fully saturated colour over more than a robe or two.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Abstraction | `■□□□□` 1/5 | illusionistic depiction | pure abstraction |
| Brushwork visibility | `■□□□□` 1/5 | no trace of the hand | each stroke and gesture shown |
| Chromatic intensity | `■■■□□` 3/5 | muted, tonal | saturated, high-key |
| Depth illusion | `■■■■■` 5/5 | flat picture plane | deep perspectival space |
| Line dominance | `■■■■□` 4/5 | colour and mass carry the image | line carries the image |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Composition

- **Layout:** A pyramid of figures on a symmetric or near-symmetric plan, inside a perspective box with a visible floor grid of 8–12 squares.
- **Focal point:** The head of the central figure sits on the vertical centre axis or within 10% of it, at 30–40% of the height from the top.
- **Format:** Portrait panels at 2:3 or 3:4 for devotional work; landscape 3:2 for narrative. Figures stay 5–10% inside the edges.

**Principles**

| Principle | Rule |
|---|---|
| symmetry-axis | Hold a central axis with a bilateral balance within 10% of equal visual weight left and right. |
| proportion | Use the golden section (1:1.618) for the horizon, the focal head and the main architectural division. |
| layering-depth | Use three planes: figures in the front 40%, architecture or terrace in the middle, a pale blue landscape in the last 20%. |
| focal-point | Direct every gaze, gesture and orthogonal toward one head or one hand. |

## Palette

- **Strategy:** Local colour that is rich but controlled: one great blue, one red, earth tones and a pale sky; harmony from glazed transparency, not from contrast.
- **Distribution:** Earth and flesh tones 45%, muted green and sky 30%, white and gold 15%, the strong blue and red together under 10%.
- **Ground:** White gesso on poplar panel with a thin warm imprimatura of 5–10% umber.

**Colours**

| Name | Hex | Pigment | Role |
|---|---|---|---|
| Ultramarine | `#1F3F8F` | lapis lazuli | robe of the Virgin, the strongest chroma |
| Vermilion | `#C8321E` | cinnabar | drapery, one red field |
| Lead-tin yellow | `#D9B44A` | lead-tin yellow | gold trim and highlights |
| Green earth | `#7C8C5A` | terre verte | shadow under flesh, landscape |
| Lead white | `#EFE8D8` | lead white | linen, highlights |
| Flesh ochre | `#C9996B` | ochre and vermilion | skin mid-tone |
| Raw umber | `#5B4331` | umber | deep shadow, tree trunks |
| Azurite sky | `#6D93B8` | azurite | distant sky and hills |

## Brushwork & medium

- **Medium:** Egg tempera for the underpainting, then oil glazes; or oil alone in Flanders.
- **Support:** Poplar panel with gesso, 10–40mm thick; later canvas in Venice.
- **Brushwork:** Small, hidden strokes; no visible stroke wider than 3mm inside a figure.
- **Paint handling:** Thin layers of 10–30 microns, built from a drawn underpainting by hatching and glaze; impasto only in jewellery and gold highlights.
- **Edges:** Soft edges inside forms and a firm edge only at the contour of the main figure; the faces are blended by sfumato.

## Light & modelling

- **Light:** One soft source from the upper left at about 45°, diffuse, as in a room with a north window.
- **Modelling:** Smooth gradation from light to dark in 6–8 steps; highlights small, cool and placed on the forehead, nose and knuckles.
- **Shadow:** Transparent shadows in brown-green; no black, and shadow covers 25–35% of each form.
- **Temperature:** Warm flesh and drapery in the foreground against cool blue-green distance.

## Subject

- **Typical:** Madonna and Child, saints, three-quarter portraits, mythological allegory, the ideal city.
- **Figure scale:** Figures fill 50–70% of the picture height; the head is 1/7 to 1/8 of the body height.
- **Treatment:** Idealised faces and bodies with calm expressions; narrative shown at its quietest moment.

## Surface

- **Finish:** Smooth and glossy, like enamel, with all brush marks levelled and a clear resin varnish.
- **Texture:** Fine, even panel without visible grain; at most a hairline craquelure.

## Reference works

- **Note:** Object ids were checked against the Art Institute of Chicago API (CC0 data). Look at the museum page for the image and its licence.

**Works**

| Work | Artist | Date | Museum | Object id | Public domain |
|---|---|---|---|---|---|
| Virgin and Child with an Angel | Sandro Botticelli | 1475–85 | Art Institute of Chicago | 80530 | true |
| Virgin and Child with Two Angels | Sandro Botticelli | 1485–95 | Art Institute of Chicago | 80526 | true |
| Virgin and Child | Giovanni Bellini | undated | Art Institute of Chicago | 117816 | true |

## Prompt primer

- **Positive:** linear perspective · sfumato modelling · triangular figure composition · egg tempera and oil glazes · gesso panel · atmospheric perspective · idealised contrapposto figures · lapis lazuli blue robe · calm pale landscape · soft diffuse north light
- **Negative:** visible brush strokes · dramatic chiaroscuro · flat colour fields · elongated limbs · neon saturation · cropped figures

## Composition principles

The rules above name these shared principles by id. The definition is the same in every domain; the number in the rule belongs to this style. The full records are in [`data/principles/`](../../data/principles/).

| Id | Principle | Definition | Measure: typical range |
|---|---|---|---|
| `symmetry-axis` | Symmetry and axis | An axis is a line that orders a composition. Symmetry places equal elements at equal distances on the two sides of the axis, or around a centre. | ordering axes (count): 0 to 3; mirrored mass about the axis (% of visual weight): 90–100 formal, 0–50 informal; type (kind): bilateral, radial, none |
| `proportion` | Proportion | The ratio of one dimension to another, and of a part to the whole. A style holds one ratio or one series of ratios through the room, the facade or the picture. | governing ratio (ratio): 1:1, 2:3, 1:1.414, 1:1.618, 1:2; module series (series): Modulor, tatami 91 x 182 cm, 60 cm kitchen module |
| `layering-depth` | Layering in depth | A view holds elements on several planes at different distances from the eye. Overlap between the planes shows depth. | planes in depth (count): 2 to 4; overlap between planes (% of the nearer element): 10–40 |
| `focal-point` | Focal point | The one place in a view that the eye finds first and comes back to. A composition has one primary focal point and at most two secondary ones. | focal points in one view (count): 1 primary, 0 to 2 secondary; luminance of the focal point to its surround (ratio): 3:1 to 10:1; position (fraction of width): 0.5 on an axis, or 0.33 / 0.67 on a third |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more dramatic**: move toward [`baroque-painting`](../baroque-painting/SKILL.md) (Baroque painting). Keep the perspective and the modelled figures; replace the diffuse light with one hard source, move the focal point off the axis, and darken the shadows to 50–60% of the area.
- If the user asks for **looser, more modern**: move toward [`impressionism`](../impressionism/SKILL.md) (Impressionism). Keep the outdoor setting and the cool distance; drop the underdrawing, break each form into visible strokes 5–15mm wide and remove the outline.

- **Led to (go here for a newer version):** [`baroque-painting`](../baroque-painting/SKILL.md)
- **Was rejected by:** [`cubism-painting`](../cubism-painting/SKILL.md)
- **Kin in another domain:** [`georgian-interior`](../georgian-interior/SKILL.md)
- **Nearest by vector profile:** [`baroque-painting`](../baroque-painting/SKILL.md), [`nordic-national-romanticism-painting`](../nordic-national-romanticism-painting/SKILL.md), [`ukiyo-e`](../ukiyo-e/SKILL.md)

## Emotional target

Calm and order: the viewer trusts a world that someone has measured and found harmonious.

**Keywords:** serene, ordered, ideal, harmonious, balanced · **Brand archetypes:** sage, ruler

## Sources

- [Wikidata Q4692 (Renaissance)](https://www.wikidata.org/wiki/Q4692)
- [Getty AAT 300021140 (Renaissance)](https://vocab.getty.edu/page/aat/300021140)
- Leon Battista Alberti, De pictura (1435)
- [Art Institute of Chicago API (CC0 data)](https://api.artic.edu/docs/)

---

Generated from [`data/painting/styles/renaissance-painting.json`](../../data/painting/styles/renaissance-painting.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
