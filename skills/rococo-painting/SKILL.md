---
name: rococo-painting
description: "Apply the Rococo style (1720–1780) when making, prompting or art-directing a picture: a painting, an illustration, an image-generation prompt or a cover. Load when the user asks for: rococo, fragonard, boucher, watteau, pastel romantic, swing painting."
domain: painting
era: early-modern
triggers:
  - "rococo"
  - "fragonard"
  - "boucher"
  - "watteau"
  - "pastel romantic"
  - "swing painting"
  - "louis xv"
  - "fete galante"
  - "marie antoinette"
vector_profile:
  abstraction: 1
  brushwork_visibility: 3
  chromatic_intensity: 2
  depth_illusion: 3
  line_dominance: 3
---

# Rococo

> A picture should give pleasure: it is a refined, light and intimate object that charms the eye, and it does not preach or overwhelm.

Light, playful pictures of love, leisure and ornament, in pale pastel colour and curving lines. The weight and drama of the Baroque give way to charm, intimacy and a soft, feathery touch.

**Period:** 1720–1780 · **Era:** Early modern · **Domain:** Painting · **Also called:** Late Baroque, Louis XV style

## When to load this skill

Load it when the user asks for: "rococo", "fragonard", "boucher", "watteau", "pastel romantic", "swing painting", "louis xv", "fete galante", "marie antoinette".

Good for: confectionery, tea and cosmetics packaging, wedding and invitation art, boutique hotel and salon decor, fashion and perfume campaign.

Do not use it when:
- The brief needs authority, weight or a serious tone.
- The picture must be bold, technical or minimal.

## System directives

When making, prompting or art-directing a picture: a painting, an illustration, an image-generation prompt or a cover in Rococo, you MUST:

1. Build the layout on S-curves and C-curves, and run the main line in a long, lazy diagonal from one corner to the other.
2. Set the palette in pale pastel: pink, powder blue, cream, soft green and gold, with 70% of the area above value 60%.
3. Paint small, intimate scenes of 0.5 to 1.5m: lovers, a swing, a boudoir, a garden party.
4. Surround the figures with soft, leafy and cloud-like masses that frame them like a shell.
5. Keep the paint thin and the touch light: feathery strokes of 2–8mm with a visible, quick flick in the foliage.
6. Light the picture from a high, soft, golden source with weak shadows that stay warm and pale.
7. Add ornament: ribbons, flowers, shells and gilt, in small amounts at the edge of the figure.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Heavy, dark ground and strong chiaroscuro.
- **NEVER:** Solemn, heroic or religious subjects with a moral.
- **NEVER:** Hard, straight architectural lines and strict symmetry.
- **NEVER:** Deep, saturated primary colour.
- **NEVER:** Rough, thick or dramatic paint handling.
- **NEVER:** Large, monumental figures that fill the picture.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Abstraction | `■□□□□` 1/5 | illusionistic depiction | pure abstraction |
| Brushwork visibility | `■■■□□` 3/5 | no trace of the hand | each stroke and gesture shown |
| Chromatic intensity | `■■□□□` 2/5 | muted, tonal | saturated, high-key |
| Depth illusion | `■■■□□` 3/5 | flat picture plane | deep perspectival space |
| Line dominance | `■■■□□` 3/5 | colour and mass carry the image | line carries the image |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Composition

- **Layout:** A diagonal S-curve of figures and foliage from one lower corner to the opposite upper corner, framed by a leafy or cloud-like canopy and open at the far side.
- **Focal point:** A pair of figures or a single bright dress, at about one third from the left or right edge and slightly above the middle.
- **Format:** A small to medium canvas at 4:5 to 5:4, or an oval or a shaped panel above a door; figures are small against the setting.

**Principles**

| Principle | Rule |
|---|---|
| rhythm | Repeat a curve of 3–5 turns in drapery, branch and cloud, with the same S-shape at 20–40% of the picture width. |
| balance | Hold the balance by a diagonal: put 60% of the mass in one lower corner and counter it with a light mass in the opposite upper corner. |
| framing | Frame the scene with foliage or curtain that covers 20–30% of the picture along two edges. |
| unity-variety | Keep 5–6 pastel hues in a narrow value band of 60–85%, with small accents of gold at under 5%. |
| scale | Make the figures 15–35% of the picture height, so that the setting is as large as the people. |
| lighting-layers | Use 3 light layers: a soft golden key, a pale fill that lifts the shadow to value 40% or more, and a small bright highlight on silk. |

## Palette

- **Strategy:** A high-key pastel palette of pink, powder blue, cream and soft green, warmed by gold; no pure dark except a small accent.
- **Distribution:** Pale ground and sky 40–50%, pastel dress and flesh 30–40%, green foliage 10–20%, gold and dark accents under 5%.
- **Ground:** A pale, warm cream or light grey ground, with thin glazes over it.

**Colours**

| Name | Hex | Pigment | Role |
|---|---|---|---|
| Powder pink | `#EBB7BC` | lake and lead white | dress and flesh |
| Powder blue | `#A9C4DE` | smalt or ultramarine and white | sky and silk |
| Cream | `#F4EBD8` | lead white | light ground and satin |
| Pale sage | `#9DB38B` | verdigris and white | foliage |
| Gilt gold | `#D4AE5E` | gold ochre | ornament and warm light |
| Soft umber | `#7A5E4A` | umber | tree trunk and accent |
| Rose deep | `#B65A6E` | madder lake | a small deep accent |

## Brushwork & medium

- **Medium:** Thin oil paint with light glazes; fresco for ceilings.
- **Support:** Fine-weave canvas on a pale, light ground.
- **Brushwork:** Quick, light strokes of 2–8mm; a flick of the brush in leaves and lace; the skin is smooth and the setting is feathery.
- **Paint handling:** 2–4 thin layers; the lights are a little thicker (1–2mm) on silk and clouds, and the shadows are thin and warm.
- **Edges:** Soft edges in the foliage and the clouds, with a crisp edge only at the face and the hands.

## Light & modelling

- **Light:** A high, soft, golden light from the upper side, with a glow that seems to come from the sky or the leaves.
- **Modelling:** Gentle, with 4–5 steps; the skin turns in pale pink and cream, and silk catches sharp light on the folds.
- **Shadow:** Light and warm, at value 40–60%; it is a tinted veil, not a black pool.
- **Temperature:** Warm overall: pink and gold light against a cool pale blue in the sky and the silk.

## Subject

- **Typical:** Courtship, the swing, shepherd games, nymphs and cupids, boudoir and garden scenes, portraits of a court lady.
- **Figure scale:** Small figures of 15–35% of the height, set in an airy garden or room.
- **Treatment:** Witty, sensual and light; a secret glance, a lost shoe, a letter; nothing is serious.

## Surface

- **Finish:** Smooth with a light varnish and a pearly sheen.
- **Texture:** Fine, with a faint canvas grain; flicks of thicker light paint in the lace and the clouds.

## Reference works

- **Note:** Object ids were checked against the Art Institute of Chicago API (CC0 data). Look at the museum page for the image and its licence.

**Works**

| Work | Artist | Date | Museum | Object id | Public domain |
|---|---|---|---|---|---|
| Arbor with Two Children (Le Nid d'Amour) | Jean Honoré Fragonard | 1760 | Art Institute of Chicago | 14766 | true |
| The Letter, or The Spanish Conversation | Jean Honoré Fragonard | c. 1778 | Art Institute of Chicago | 52736 | true |
| Boy with a Carrot | François Boucher | 1738 | Art Institute of Chicago | 35692 | true |

## Prompt primer

- **Positive:** rococo painting · pastel pink and powder blue · S-curve composition · swing and garden party · feathery brush strokes · soft golden light · ribbons and flowers · cream and gilt · playful and intimate · Fragonard Boucher style
- **Negative:** dark chiaroscuro · heroic scene · strict symmetry · heavy impasto · saturated primary colour · monumental figure

## Composition principles

The rules above name these shared principles by id. The definition is the same in every domain; the number in the rule belongs to this style. The full records are in [`data/principles/`](../../data/principles/).

| Id | Principle | Definition | Measure: typical range |
|---|---|---|---|
| `rhythm` | Rhythm and repetition | An element or an interval repeats at a regular, alternating or progressive step, and the eye moves along the series. | repeated interval (cm or px): style module; repetitions in one series (count): 3 or more; type (kind): regular, alternating, progressive |
| `balance` | Visual balance | The visual weights on the two sides of a centre cancel out. Formal balance uses mirrored equal weights; informal balance sets a large near mass against several small far masses. | moment of visual weight, left to right about the centre (ratio): 1.0 formal; 0.8–1.25 informal; type (kind): formal, informal, radial |
| `framing` | Framing | A nearer element, such as a doorway, an arch, a window or a branch, surrounds the subject and isolates it. | frame area (% of the view): 10–35; frame planes (count): 1 to 2 |
| `unity-variety` | Unity and variety | Repeated materials, colours and shapes join the parts into one whole. A small, planned number of deviations keeps the whole alive. | materials or hues that repeat (count): 2 to 4; deliberate deviations (count): 1 to 2 |
| `scale` | Scale | The size of an element in relation to the human body, to the space around it and to the other elements. A style chooses a reference body and holds the elements in a range around it. | subject height to frame or canvas height (% of frame height): 10–30 in a wide shot; 40–80 in a close-up |
| `lighting-layers` | Lighting layers | Light comes from separate layers with separate jobs: ambient light for the whole space, task light for work, accent light for the focal point. In photography the same split is key, fill and accent light. | accent to ambient (ratio): 3:1 to 10:1 |

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Chinoiserie (motif)

European ornament after Chinese and East Asian art: pagodas, figures, birds and branches on lacquer, porcelain and paper. Origin: interior, Versailles, France, 1670.

- Paint branches, birds and small figures over a plain ground of 50% or more.
- Use blue and white, or gold on black or red lacquer.
- Put one room or one wall in chinoiserie, not the whole house.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **Académie royale de peinture et de sculpture** (school, Paris, 1648–1816), taught the style. The royal academy of painting and sculpture in France. It trained the painters of the court and set the rules of taste for the Salon.
- **Paris Salon** (salon, Paris, 1667–now), exhibited the style. The official art exhibition of the French Academy. For two centuries a painting had to succeed here to make a name, and each new school fought for its walls.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Key colour (`key_colour`) | #EBB7BC | #EBB7BC, #A9C4DE, #F4EBD8, #9DB38B | palette |
| Value contrast (`value_contrast`) | 0.35 | 0.2–0.5 | light_and_modelling, palette |
| Brush size (`brush_size`) | 0.8 | 0.3–1.5 % of canvas width | brushwork_and_medium |
| Canvas ratio (`canvas_ratio`) | 4:5 | 1:1, 4:5 | surface, composition |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more dramatic**: move toward [`baroque-painting`](../baroque-painting/SKILL.md) (Baroque painting). Keep the diagonal and the figures; darken the ground to 50% of the area, use one strong beam of light, and deepen the colour.
- If the user asks for **more serious and natural**: move toward [`realism-painting`](../realism-painting/SKILL.md) (Realism). Drop the pastel and the ornament; use a plain brown ground, ordinary figures at work, and no flirtation.

- **Came from (go here for a more orthodox version):** [`baroque-painting`](../baroque-painting/SKILL.md)
- **Was rejected by:** [`realism-painting`](../realism-painting/SKILL.md), [`romanticism-painting`](../romanticism-painting/SKILL.md)
- **Kin in another domain:** [`art-nouveau-architecture`](../art-nouveau-architecture/SKILL.md), [`biscuit-porcelain-figures`](../biscuit-porcelain-figures/SKILL.md), [`formal-script`](../formal-script/SKILL.md), [`rococo-court-dress`](../rococo-court-dress/SKILL.md), [`rococo-porcelain-figures`](../rococo-porcelain-figures/SKILL.md), [`sevres-rococo-porcelain`](../sevres-rococo-porcelain/SKILL.md)
- **Nearest by vector profile:** [`realism-painting`](../realism-painting/SKILL.md), [`nordic-national-romanticism-painting`](../nordic-national-romanticism-painting/SKILL.md), [`baroque-painting`](../baroque-painting/SKILL.md)

## Emotional target

Delight and ease: the viewer feels charmed, a little flirted with, and light.

**Keywords:** playful, delicate, ornamental, romantic, frivolous · **Brand archetypes:** lover, jester, innocent

## Sources

- [Wikidata Q122960 (Rococo)](https://www.wikidata.org/wiki/Q122960)
- [Getty AAT 300021155 (Rococo)](https://vocab.getty.edu/page/aat/300021155)
- Katie Scott, The Rococo Interior (Yale University Press, 1995)
- [Art Institute of Chicago API (CC0 data)](https://api.artic.edu/docs/)

---

Generated from [`data/painting/styles/rococo-painting.json`](../../data/painting/styles/rococo-painting.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
