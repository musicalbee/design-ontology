---
name: baroque-painting
description: "Apply the Baroque painting style (1600–1720) when making, prompting or art-directing a picture: a painting, an illustration, an image-generation prompt or a cover. Load when the user asks for: baroque, chiaroscuro, tenebrism, caravaggio, rembrandt, dutch golden age."
domain: painting
era: early-modern
triggers:
  - "baroque"
  - "chiaroscuro"
  - "tenebrism"
  - "caravaggio"
  - "rembrandt"
  - "dutch golden age"
  - "dramatic lighting"
  - "old master"
  - "vanitas"
vector_profile:
  abstraction: 1
  brushwork_visibility: 3
  chromatic_intensity: 2
  depth_illusion: 5
  line_dominance: 2
---

# Baroque painting

> A picture is a staged moment in which light decides what matters and the viewer feels the event.

Painting of the instant: strong chiaroscuro, diagonal movement, warm earth colour and a viewer who is pulled into the scene. It serves the church, the court and the new Dutch market for portraits and domestic life.

**Period:** 1600–1720 · **Era:** Early modern · **Domain:** Painting · **Also called:** Caravaggism, Dutch Golden Age painting, Tenebrism

## When to load this skill

Load it when the user asks for: "baroque", "chiaroscuro", "tenebrism", "caravaggio", "rembrandt", "dutch golden age", "dramatic lighting", "old master", "vanitas".

Good for: moody portraits, editorial illustration, game and film concept art, album covers, still-life prompts.

Do not use it when:
- The brief asks for a bright, airy or friendly mood.
- The picture must stay readable at icon size, where deep shadow turns to a black block.

## System directives

When making, prompting or art-directing a picture: a painting, an illustration, an image-generation prompt or a cover in Baroque painting, you MUST:

1. Light one area of the picture at 3 to 5 times the brightness of the rest, and let the dark ground take 50–60% of the area.
2. Run the composition on a diagonal, with the main axis at 30–45° from the horizontal.
3. Place the figures off-centre, with the focal point on a third line and a gesture or a gaze that points through the picture.
4. Paint flesh and fabric with loaded, visible strokes in the light and thin, transparent paint in the dark.
5. Crop the scene close: figures fill 70–90% of the height and the nearest figure overlaps the picture edge.
6. Keep the palette warm and earthy, with one saturated red or blue as a single accent.
7. Show the texture of each material: satin, fur, bronze, skin and bread each get a different stroke.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Even, shadowless light across the whole picture.
- **NEVER:** Symmetric, static compositions with figures in a row.
- **NEVER:** Pale or pastel colour fields.
- **NEVER:** Smooth, brushless surfaces on fabric and flesh.
- **NEVER:** Idealised calm faces without a reaction.
- **NEVER:** Visible outlines around figures.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Abstraction | `■□□□□` 1/5 | illusionistic depiction | pure abstraction |
| Brushwork visibility | `■■■□□` 3/5 | no trace of the hand | each stroke and gesture shown |
| Chromatic intensity | `■■□□□` 2/5 | muted, tonal | saturated, high-key |
| Depth illusion | `■■■■■` 5/5 | flat picture plane | deep perspectival space |
| Line dominance | `■■□□□` 2/5 | colour and mass carry the image | line carries the image |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Composition

- **Layout:** A diagonal armature or an S-curve through the figures, inside a dark ground; the group makes an open, asymmetric triangle.
- **Focal point:** The brightest area sits on a third line, 33–40% from one side, and holds the face or the hands of the main figure.
- **Format:** Canvas at 3:4 to 4:5 for altarpieces and portraits, 5:4 to 3:2 for interiors; the figures are cropped at the frame edge.

**Principles**

| Principle | Rule |
|---|---|
| contrast | Set the lit area at 3 to 5 times the luminance of the dark ground, with a steep step of 1–2 stops across the form edge. |
| rule-of-thirds | Place the brightest face or hand on a third line, and place the second accent on the opposite third. |
| leading-lines | Use arms, a beam of light and a glance to make one diagonal that ends on the focal point. |
| balance | Balance a large dark mass on one side with a small bright accent on the other, not with a mirrored form. |
| layering-depth | Separate 3 planes by light: a dark foreground edge, the lit middle plane, a brown-black ground. |

## Palette

- **Strategy:** A warm, low-key earth palette in which light does the work of colour; one strong red or blue is spent on a single drapery.
- **Distribution:** Dark browns and blacks 50–60%, warm mid-tones 25–30%, lit flesh and white linen 10–15%, the saturated accent under 5%.
- **Ground:** A dark red-brown or grey-brown ground over canvas, which shows through the shadows.

**Colours**

| Name | Hex | Pigment | Role |
|---|---|---|---|
| Bitumen black | `#1B1410` | bone black and bitumen | shadow ground |
| Burnt umber | `#4A3022` | burnt umber | deep mid-tone |
| Red ochre | `#9A4B2A` | red earth | warm shadow, drapery |
| Flesh highlight | `#E3B98E` | lead white and ochre | lit skin |
| Lead white | `#F1E8D5` | lead white | linen and the brightest light |
| Lake crimson | `#A3202E` | madder or cochineal lake | the one saturated accent |
| Smalt blue | `#3B5B8C` | smalt or ultramarine | alternative single accent |

## Brushwork & medium

- **Medium:** Oil paint, bound in linseed oil.
- **Support:** Medium to coarse canvas with a dark red-brown ground; copper or oak panel for small work in the Netherlands.
- **Brushwork:** Loaded strokes 5–15mm wide in the lights, along the direction of the form; thin scrubbed paint in the shadows.
- **Paint handling:** Dark to light: thin shadow, then opaque lights built up by 2–3 passes; impasto on highlights only.
- **Edges:** Hard edge on the lit side of a form and a lost edge on the shadow side, where the figure melts into the ground.

## Light & modelling

- **Light:** One hard source, often from the upper left at 30–60°, out of frame; it makes a clear beam and a cast shadow.
- **Modelling:** Fast change from light to shade, in 3–4 steps; the form turns away into black.
- **Shadow:** Deep, warm and transparent shadow; the darkest value is near black but keeps a brown tone.
- **Temperature:** Warm lights and warm shadows with a single cool accent; no cool distance.

## Subject

- **Typical:** Religious drama, martyrdom, portraits, still life with a dark ground, tavern and domestic scenes, group portraits.
- **Figure scale:** Figures fill 70–90% of the picture height; the viewer is at the edge of the scene.
- **Treatment:** Physical, imperfect bodies with wrinkles, dirt and strong reaction; the most dramatic moment, not the calm one.

## Surface

- **Finish:** Glossy varnish over a dark surface, with the highest sheen in the darks.
- **Texture:** Visible canvas weave in the shadows and thick paint ridges in the lights.

## Reference works

- **Note:** The Met ids were checked against the Met Open Access API (CC0). The Rijksmuseum ids are the catalogue numbers in its public collection. Look at the museum page for the image and its licence.

**Works**

| Work | Artist | Date | Museum | Object id | Public domain |
|---|---|---|---|---|---|
| Aristotle with a Bust of Homer | Rembrandt | 1653 | The Met | 437394 | true |
| Young Woman with a Water Pitcher | Johannes Vermeer | c. 1662 | The Met | 437881 | true |
| The Night Watch | Rembrandt | 1642 | Rijksmuseum | SK-C-5 | true |
| The Milkmaid | Johannes Vermeer | c. 1660 | Rijksmuseum | SK-A-2344 | true |

## Prompt primer

- **Positive:** chiaroscuro · tenebrism · single hard light source · diagonal composition · dark red-brown ground · loaded impasto highlights · warm earth palette · dramatic gesture · close-cropped figures · satin and fur texture
- **Negative:** even flat lighting · pastel colour · symmetric composition · smooth airbrushed surface · pale background · visible outline

## Composition principles

The rules above name these shared principles by id. The definition is the same in every domain; the number in the rule belongs to this style. The full records are in [`data/principles/`](../../data/principles/).

| Id | Principle | Definition | Measure: typical range |
|---|---|---|---|
| `contrast` | Contrast | Two adjacent elements differ in value, hue, texture, size or shape. Contrast marks edges and makes the focal point. | brightest mass to deepest shadow in one image (stops): 3–4 flat; 5–8 hard, 8 or more for expressionist |
| `rule-of-thirds` | Rule of thirds | Two horizontal and two vertical lines divide the view into nine equal parts. The focal point sits on one of the four crossings, and a horizon sits on one of the two horizontal lines. | focal point position (fraction of width and height): 0.33 or 0.67, tolerance 0.05; horizon position (fraction of height): 0.33 or 0.67 |
| `leading-lines` | Leading lines | Lines in the view, such as edges, rows, beams or paths, point the eye to the focal point. | lines that converge on the focal point (count): 1 to 4; angle from the frame edge (degrees): 15–60 for a diagonal |
| `balance` | Visual balance | The visual weights on the two sides of a centre cancel out. Formal balance uses mirrored equal weights; informal balance sets a large near mass against several small far masses. | moment of visual weight, left to right about the centre (ratio): 1.0 formal; 0.8–1.25 informal; type (kind): formal, informal, radial |
| `layering-depth` | Layering in depth | A view holds elements on several planes at different distances from the eye. Overlap between the planes shows depth. | planes in depth (count): 2 to 4; overlap between planes (% of the nearer element): 10–40 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **calmer**: move toward [`renaissance-painting`](../renaissance-painting/SKILL.md) (Renaissance painting). Keep the modelled figures; replace the hard source with diffuse light, centre the focal point on the axis, and lighten the ground to a mid-tone.
- If the user asks for **lighter and looser**: move toward [`impressionism`](../impressionism/SKILL.md) (Impressionism). Keep the visible stroke and the observed light; raise the ground to a light value and move the shadows to cool violet.

- **Came from (go here for a more orthodox version):** [`renaissance-painting`](../renaissance-painting/SKILL.md)
- **Nearest by vector profile:** [`nordic-national-romanticism-painting`](../nordic-national-romanticism-painting/SKILL.md), [`renaissance-painting`](../renaissance-painting/SKILL.md), [`impressionism`](../impressionism/SKILL.md)

## Emotional target

Drama and presence: the viewer feels a decisive moment, close and physical, and cannot look away.

**Keywords:** dramatic, intense, theatrical, sensual, solemn · **Brand archetypes:** hero, ruler, lover

## Sources

- [Wikidata Q37853 (Baroque)](https://www.wikidata.org/wiki/Q37853)
- [Getty AAT 300021147 (Baroque)](https://vocab.getty.edu/page/aat/300021147)
- [Rijksmuseum collection (CC0 data)](https://www.rijksmuseum.nl/en/collection)
- [The Met Open Access API (CC0)](https://metmuseum.github.io/)

---

Generated from [`data/painting/styles/baroque-painting.json`](../../data/painting/styles/baroque-painting.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
