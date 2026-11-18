---
name: ukiyo-e
description: "Apply the Ukiyo-e style (1680s–1860s) when making, prompting or art-directing a picture: a painting, an illustration, an image-generation prompt or a cover. Load when the user asks for: ukiyo-e, japanese woodblock, hokusai, hiroshige, great wave, floating world."
domain: painting
era: early-modern
triggers:
  - "ukiyo-e"
  - "japanese woodblock"
  - "hokusai"
  - "hiroshige"
  - "great wave"
  - "floating world"
  - "edo print"
  - "japanese print"
  - "woodblock"
vector_profile:
  abstraction: 2
  brushwork_visibility: 1
  chromatic_intensity: 3
  depth_illusion: 2
  line_dominance: 5
---

# Ukiyo-e

> A picture is a printed sheet in which the contour, the flat colour and the cropped viewpoint carry everything, and the moment is as fleeting as the city.

Japanese woodblock prints and paintings of the Edo city: a firm black contour, flat fields of colour, bold cropping and a high or tilted viewpoint. A team of artist, carver and printer makes each sheet, and publishers sell it to a mass market.

**Period:** 1680s–1860s · **Era:** Early modern · **Domain:** Painting · **Also called:** Pictures of the floating world, Edo woodblock print, Nishiki-e

## When to load this skill

Load it when the user asks for: "ukiyo-e", "japanese woodblock", "hokusai", "hiroshige", "great wave", "floating world", "edo print", "japanese print", "woodblock".

Good for: posters and packaging, travel and food branding, editorial and book illustration, tattoo and pattern design.

Do not use it when:
- The brief asks for a photoreal or volumetric result.
- The subject is a culture or a symbol outside Edo Japan, where the style would be a costume and not a language.

## System directives

When making, prompting or art-directing a picture: a painting, an illustration, an image-generation prompt or a cover in Ukiyo-e, you MUST:

1. Draw each form with a clean contour of uniform thickness, 1–2mm on a print of 25cm, and fill it with flat colour.
2. Set the horizon high, or tilt the ground plane up, so that the picture reads as a layered map and not as a box of space.
3. Cut figures and objects at the edge on purpose: a close foreground form fills 20–40% of the width.
4. Print the sky as a gradation (bokashi) from deep colour at the edge to white at the horizon, in a band of 15–25% of the height.
5. Use 4–8 flat colours and let the paper show as white; shade is a pattern or a line, not a blend.
6. Put a framed text cartouche, a title block and a signature seal in a corner, as part of the layout.
7. Fill planes of cloth, water and ground with repeated pattern: waves, rain lines, fabric motifs.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Modelled shading with a smooth gradient on figures.
- **NEVER:** Cast shadows and linear perspective with a low horizon.
- **NEVER:** Painterly brush texture or visible canvas.
- **NEVER:** Colour blending that hides the edge between two colour fields.
- **NEVER:** Realistic anatomy with muscle and bone modelling.
- **NEVER:** A central, symmetric, fully contained composition.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Abstraction | `■■□□□` 2/5 | illusionistic depiction | pure abstraction |
| Brushwork visibility | `■□□□□` 1/5 | no trace of the hand | each stroke and gesture shown |
| Chromatic intensity | `■■■□□` 3/5 | muted, tonal | saturated, high-key |
| Depth illusion | `■■□□□` 2/5 | flat picture plane | deep perspectival space |
| Line dominance | `■■■■■` 5/5 | colour and mass carry the image | line carries the image |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Composition

- **Layout:** Stacked horizontal bands (foreground, middle, sky), or a strong diagonal that cuts the sheet; forms overlap in flat layers.
- **Focal point:** A single accent of the strongest colour or contrast, placed off-centre at 1/3 to 2/5 from one side.
- **Format:** Oban 25 by 38cm (landscape 3:2) or a vertical diptych of 2:3; the figure may be cropped by the edge.

**Principles**

| Principle | Rule |
|---|---|
| negative-space | Leave 20–40% of the sheet as empty colour field or white paper, usually as sky, mist or water. |
| framing | Use a foreground form, such as a branch, a bridge rail or a pole, to cut across 10–30% of the sheet and frame the view. |
| layering-depth | Show depth by overlap and by band, with 3 flat planes and no vanishing point drawn to a rule. |
| rhythm | Repeat a form (wave, pine, umbrella, rain line) 5–12 times with small changes in size and tilt. |
| rule-of-thirds | Put the horizon line at 1/4 to 1/3 from the top, and the main form on a third line. |

## Palette

- **Strategy:** A few flat, transparent water-based inks on white paper, with one strong blue and one warm colour; the key block in black.
- **Distribution:** Paper white and pale ground 35–45%, mid colour fields 35–40%, the key black line and dark accents 10–15%, one saturated accent under 10%.
- **Ground:** Warm white handmade paper (washi), which shows through as the lightest tone.

**Colours**

| Name | Hex | Pigment | Role |
|---|---|---|---|
| Sumi black | `#1C1A1F` | sumi ink | key block outline and text |
| Prussian blue | `#17406E` | Prussian blue | water and sky edge |
| Indigo | `#2F4B7C` | indigo | cloth and waves |
| Pale sky | `#C9DDE6` | diluted blue | bokashi sky near the horizon |
| Vermilion | `#D8452B` | vermilion or safflower red | seal, accents, robes |
| Ochre yellow | `#D9A93F` | gamboge | ground, light |
| Washi paper | `#F1E9D4` | paper | the lightest field |

## Brushwork & medium

- **Medium:** Water-based pigment printed from carved cherry-wood blocks, one block for each colour, with a key block for the line.
- **Support:** Handmade washi paper, 25 by 38cm for an oban sheet.
- **Brushwork:** No brush trace shows. The line comes from the carved key block and has a uniform stroke of 1–2mm with a slight swell on curves.
- **Paint handling:** Each colour is one flat, even layer; a second pass makes a darker tone; bokashi is wiped on the block by hand.
- **Edges:** Hard, crisp edges between colour fields, with a 0.5mm registration gap or overlap permitted.

## Light & modelling

- **Light:** No cast light source; the picture is lit evenly, as a flat diagram of the scene.
- **Modelling:** Pattern, line hatching and the change from one flat field to the next replace modelling; form is read from the contour.
- **Shadow:** Shadow is a flat darker tone or omitted; atmosphere shows as mist bands or bokashi at 20–40% of the height.
- **Temperature:** Cool blues for water and sky, warm ochre and red for figures and ground; the balance is by area, not by blend.

## Subject

- **Typical:** Courtesans and actors, travel stages, famous views, rain, snow and waves, birds and flowers, warriors and folk tales.
- **Figure scale:** Figures are small in landscape (5–15% of the height) and large in portraits (60–90%).
- **Treatment:** Stylised faces by formula (a hooked nose, a slit eye), elegant poses, with movement in the line of the cloth.

## Surface

- **Finish:** Matt, with a slight emboss on the paper from the block pressure.
- **Texture:** Visible paper fibre and fine wood grain in the large colour fields.

## Reference works

- **Note:** Object ids were checked against the Met Open Access API (CC0) and the Art Institute of Chicago API (CC0 data). Look at the museum page for the image and its licence.

**Works**

| Work | Artist | Date | Museum | Object id | Public domain |
|---|---|---|---|---|---|
| Under the Wave off Kanagawa (The Great Wave) | Katsushika Hokusai | c. 1830–32 | The Met | 45434 | true |
| Plum Garden at Kameido | Utagawa Hiroshige | 1857 | Art Institute of Chicago | 26577 | true |
| Mishima: Morning Mist | Utagawa Hiroshige | c. 1833–34 | Art Institute of Chicago | 10926 | true |
| Hamamatsu (Fifty-three Stations of the Tokaido) | Utagawa Hiroshige | c. 1837–42 | Art Institute of Chicago | 4371 | true |

## Prompt primer

- **Positive:** ukiyo-e woodblock print · flat colour fields · bold black contour · bokashi gradient sky · high horizon · cropped foreground form · washi paper texture · limited palette of 5 to 7 inks · Prussian blue · cartouche and seal
- **Negative:** soft shading · cast shadows · photorealism · visible brush strokes · 3D perspective · airbrush gradient

## Composition principles

The rules above name these shared principles by id. The definition is the same in every domain; the number in the rule belongs to this style. The full records are in [`data/principles/`](../../data/principles/).

| Id | Principle | Definition | Measure: typical range |
|---|---|---|---|
| `negative-space` | Negative space | The empty area around and between elements. It is a part of the composition, not a remainder. | empty frame area (% of image): 30–70 |
| `framing` | Framing | A nearer element, such as a doorway, an arch, a window or a branch, surrounds the subject and isolates it. | frame area (% of the view): 10–35; frame planes (count): 1 to 2 |
| `layering-depth` | Layering in depth | A view holds elements on several planes at different distances from the eye. Overlap between the planes shows depth. | planes in depth (count): 2 to 4; overlap between planes (% of the nearer element): 10–40 |
| `rhythm` | Rhythm and repetition | An element or an interval repeats at a regular, alternating or progressive step, and the eye moves along the series. | repeated interval (cm or px): style module; repetitions in one series (count): 3 or more; type (kind): regular, alternating, progressive |
| `rule-of-thirds` | Rule of thirds | Two horizontal and two vertical lines divide the view into nine equal parts. The focal point sits on one of the four crossings, and a horizon sits on one of the two horizontal lines. | focal point position (fraction of width and height): 0.33 or 0.67, tolerance 0.05; horizon position (fraction of height): 0.33 or 0.67 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more modern flat graphic**: move toward [`flat-design`](../flat-design/SKILL.md) (Flat Design). Keep the flat fields and the cropped viewpoint; drop the paper texture and the carved line weight, and use vector shapes with 3–5 flat colours.
- If the user asks for **painterly**: move toward [`impressionism`](../impressionism/SKILL.md) (Impressionism). Keep the high horizon and the cropped foreground; replace the contour with visible strokes of 5–15mm and let the colour fields break into touches.

- **Mixes well with:** [`impressionism`](../impressionism/SKILL.md)
- **Kin in another domain:** [`flat-design`](../flat-design/SKILL.md), [`japandi-interior`](../japandi-interior/SKILL.md), [`japanese-graphic-modernism`](../japanese-graphic-modernism/SKILL.md)
- **Nearest by vector profile:** [`mannerism-painting`](../mannerism-painting/SKILL.md), [`symbolism-painting`](../symbolism-painting/SKILL.md), [`futurism-painting`](../futurism-painting/SKILL.md)

## Emotional target

Poise and the passing moment: the viewer sees a clear, graphic image of an everyday scene, held for a second.

**Keywords:** graphic, elegant, fleeting, rhythmic, crisp · **Brand archetypes:** explorer, creator, sage

## Sources

- [Wikidata Q185905 (ukiyo-e)](https://www.wikidata.org/wiki/Q185905)
- [Getty AAT 300106769 (ukiyo-e)](https://vocab.getty.edu/page/aat/300106769)
- [The Met Open Access API (CC0)](https://metmuseum.github.io/)
- [Art Institute of Chicago API (CC0 data)](https://api.artic.edu/docs/)
- [Artvee: public-domain paintings, sorted by artist](https://artvee.com)

---

Generated from [`data/painting/styles/ukiyo-e.json`](../../data/painting/styles/ukiyo-e.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
