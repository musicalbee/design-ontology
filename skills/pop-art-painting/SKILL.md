---
name: pop-art-painting
description: "Apply the Pop Art style (1956–1975) when making, prompting or art-directing a picture: a painting, an illustration, an image-generation prompt or a cover. Load when the user asks for: pop art, warhol, lichtenstein, ben-day dots, comic book style, silkscreen."
domain: painting
era: avant-garde
triggers:
  - "pop art"
  - "warhol"
  - "lichtenstein"
  - "ben-day dots"
  - "comic book style"
  - "silkscreen"
  - "rosenquist"
  - "mass media art"
  - "campbell soup"
vector_profile:
  abstraction: 2
  brushwork_visibility: 1
  chromatic_intensity: 5
  depth_illusion: 1
  line_dominance: 4
---

# Pop Art

> Everyday mass images are the subject of the age, and a painting can take their look, their flat colour and their repeat, without comment and without the artist's hand.

Pictures made from the images of the mass market: comics, adverts, packaging and stars. Flat colour, hard outline, repeats and printing marks show that the picture is a product, not a vision.

**Period:** 1956–1975 · **Era:** Avant-garde · **Domain:** Painting · **Also called:** Pop painting, Ben-Day dot painting

## When to load this skill

Load it when the user asks for: "pop art", "warhol", "lichtenstein", "ben-day dots", "comic book style", "silkscreen", "rosenquist", "mass media art", "campbell soup".

Good for: poster, campaign and packaging with a loud, playful voice, merchandise and apparel graphics, editorial and music cover art, retail and event identity.

Do not use it when:
- The brief needs a quiet, luxury or spiritual mood.
- The picture must show subtle tone or a personal hand.

## System directives

When making, prompting or art-directing a picture: a painting, an illustration, an image-generation prompt or a cover in Pop Art, you MUST:

1. Take the subject from mass media: a comic panel, a can, a star, an advert.
2. Paint flat, opaque colour in large fields, with a thick, hard black outline of 5–15mm.
3. Use a limited set of bold primary and secondary colours, at full saturation, on a white or flat ground.
4. Copy the mark of the printing process: Ben-Day dots of 3–8mm in a regular grid, or a screen-print registration slip.
5. Repeat the image in a grid of 2 to 50 copies, with small changes in colour between them.
6. Crop the image hard, and enlarge it to a scale of 1 to 3m so that a small thing is monumental.
7. Keep the surface cool and mechanical, and hide the gesture and the personal touch.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Gesture, drip and a visible personal stroke.
- **NEVER:** Soft modelling and an atmospheric, deep space.
- **NEVER:** Muted, earthy or tonal colour.
- **NEVER:** A unique, heroic or spiritual subject.
- **NEVER:** Fine, subtle blends of colour.
- **NEVER:** Emotion shown by the artist's hand.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Abstraction | `■■□□□` 2/5 | illusionistic depiction | pure abstraction |
| Brushwork visibility | `■□□□□` 1/5 | no trace of the hand | each stroke and gesture shown |
| Chromatic intensity | `■■■■■` 5/5 | muted, tonal | saturated, high-key |
| Depth illusion | `■□□□□` 1/5 | flat picture plane | deep perspectival space |
| Line dominance | `■■■■□` 4/5 | colour and mass carry the image | line carries the image |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Composition

- **Layout:** A flat, poster-like image that fills the canvas, or a grid of 2 to 50 repeats, with a strong outline and one large, cropped subject.
- **Focal point:** The main subject, enlarged and cropped, at the centre or in a grid cell, with the strongest colour and the thickest outline.
- **Format:** A square or portrait canvas at 1:1 to 3:4, or a grid of the same cells; the size is 1 to 3m, and the subject is cropped by the edge.

**Principles**

| Principle | Rule |
|---|---|
| rhythm | Repeat the image 2 to 50 times in a regular grid, with a gap of 0–5% between the cells and a colour change in every cell. |
| contrast | Set a black outline of 5–15mm against flat fields of saturated colour, with a value jump of 50% or more. |
| scale | Enlarge a small, common object to 1–3m so that it fills 80–100% of the canvas. |
| colour-distribution | Use 3–5 flat colours with 2 dominant fields of 25–40% each, and keep each colour at full saturation. |
| focal-point | Place one cropped subject at the centre, or at one third from an edge, with the thickest outline and the brightest colour. |
| hierarchy | Make 2 levels: a large, flat subject at 50–70% of the area, and a small band of text or dots at 5–10%. |

## Palette

- **Strategy:** Bold, flat, saturated primary and secondary colour from the print and the shop, with black and white, and no tone.
- **Distribution:** 2 dominant fields of 25–40% each, 2–3 accent fields of 5–15%, black outline 5–10%, white 5–15%.
- **Ground:** A flat white or a single flat colour; a primed canvas with no texture.

**Colours**

| Name | Hex | Pigment | Role |
|---|---|---|---|
| Pop red | `#E3262E` | cadmium red or acrylic red | main field and a lip, a can or a dress |
| Pop yellow | `#FFD700` | cadmium yellow | hair, background and highlight |
| Pop blue | `#1E59C8` | cobalt or acrylic blue | sky, shadow and outline field |
| Hot pink | `#F0489B` | fluorescent or magenta acrylic | skin and background |
| Cyan | `#1BB5D8` | cyan acrylic | eye shadow and field |
| Print black | `#101010` | carbon black | outline and dots |
| Paper white | `#F7F5EF` | titanium white | ground and dot field |

## Brushwork & medium

- **Medium:** Acrylic or oil in flat, opaque colour; silkscreen ink over the paint.
- **Support:** A large, primed canvas with a flat, smooth ground.
- **Brushwork:** No stroke shows; the fields are flat and even, and the dots are set by a stencil or a screen at 3–8mm.
- **Paint handling:** 1–2 opaque coats; the outline is laid last, at 5–15mm, with an even, steady line.
- **Edges:** Hard, clean and exact; the colour may slip off the outline by 1–3mm, like a print out of register.

## Light & modelling

- **Light:** No depicted light; the picture is evenly bright and flat like a print.
- **Modelling:** None or by a dot screen in 1–2 steps; forms are cut-out shapes.
- **Shadow:** A flat shape in a darker colour or a black field; no gradient.
- **Temperature:** Hot and cold set by flat fields, with a strong primary clash such as red against blue.

## Subject

- **Typical:** A comic panel, a soup can, a star's face, a burger, a car, a sign, a flag and an advert.
- **Figure scale:** Large and cropped: a face or an object fills 60–100% of the picture height.
- **Treatment:** Cool, flat and impersonal; the image is shown as a product, with a wink and no comment.

## Surface

- **Finish:** Flat, matt to satin, and even.
- **Texture:** Smooth and mechanical; a screen or a dot grid is the only texture.

## Reference works

- **Note:** These works are in copyright and the museum does not flag them as public domain. The ids identify the works only. Look at the museum page for the image and its licence; do not copy it.

**Works**

| Work | Artist | Date | Museum | Object id | Public domain |
|---|---|---|---|---|---|
| Alka Seltzer | Roy Lichtenstein | 1966 | Art Institute of Chicago | 122054 | false |
| Marilyn Monroe (Marilyn) | Andy Warhol | 1967 | Art Institute of Chicago | 150044 | false |
| Volunteer | James Rosenquist | 1963/64 | Art Institute of Chicago | 132672 | false |

## Prompt primer

- **Positive:** pop art painting · Ben-Day dots · flat saturated colour · thick black outline · comic book panel · repeated grid of images · silkscreen registration slip · mass media subject · Lichtenstein and Warhol style · poster-like flat image
- **Negative:** gestural brush strokes · soft atmospheric depth · muted earth palette · visible personal touch · subtle blending · spiritual mood

## Composition principles

The rules above name these shared principles by id. The definition is the same in every domain; the number in the rule belongs to this style. The full records are in [`data/principles/`](../../data/principles/).

| Id | Principle | Definition | Measure: typical range |
|---|---|---|---|
| `rhythm` | Rhythm and repetition | An element or an interval repeats at a regular, alternating or progressive step, and the eye moves along the series. | repeated interval (cm or px): style module; repetitions in one series (count): 3 or more; type (kind): regular, alternating, progressive |
| `contrast` | Contrast | Two adjacent elements differ in value, hue, texture, size or shape. Contrast marks edges and makes the focal point. | brightest mass to deepest shadow in one image (stops): 3–4 flat; 5–8 hard, 8 or more for expressionist |
| `scale` | Scale | The size of an element in relation to the human body, to the space around it and to the other elements. A style chooses a reference body and holds the elements in a range around it. | subject height to frame or canvas height (% of frame height): 10–30 in a wide shot; 40–80 in a close-up |
| `colour-distribution` | Colour distribution | Each colour takes a planned share of the visible area: a dominant colour, a secondary colour and an accent. | dominant / secondary / accent share (% of visible surface): 60/30/10 as the default; 70/25/5 calm; 40/35/25 bold; accents (count): 1 to 3 |
| `focal-point` | Focal point | The one place in a view that the eye finds first and comes back to. A composition has one primary focal point and at most two secondary ones. | focal points in one view (count): 1 primary, 0 to 2 secondary; luminance of the focal point to its surround (ratio): 3:1 to 10:1; position (fraction of width): 0.5 on an axis, or 0.33 / 0.67 on a third |
| `hierarchy` | Hierarchy | The elements of a composition rank by importance through size, position, contrast or isolation. The viewer reads them in that order. | levels of rank (count): 2 to 3; size ratio between adjacent levels (ratio): 1.5:1 or more |

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Serial repetition (process)

One motif or one frame, repeated with small changes in a set of works, so that the viewer reads the change and not the object. Origin: painting, Paris, 1891.

- Fix the motif, the format and the viewpoint; change one variable only, such as the hour, the colour or the stripe width.
- Make at least 5 works in the set and show them in one row at one height.
- Keep the spacing between works equal to a fixed unit, such as 10 cm or one panel width.
- Remove the hand: use a mechanical edge, a stencil or a plain lens.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Key colour (`key_colour`) | #E3262E | #E3262E, #FFD700, #1E59C8, #F0489B | palette |
| Value contrast (`value_contrast`) | 0.85 | 0.7–1 | light_and_modelling, palette |
| Brush size (`brush_size`) | 0 | 0–0.3 % of canvas width | brushwork_and_medium |
| Canvas ratio (`canvas_ratio`) | 1:1 | 1:1, 4:5, 3:4 | surface, composition |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more expressive and personal**: move toward [`abstract-expressionism`](../abstract-expressionism/SKILL.md) (Abstract Expressionism). Keep the scale and the strong colour; drop the outline and the print grid, and lay a visible gesture of 50–200mm.
- If the user asks for **more dreamlike**: move toward [`surrealism-painting`](../surrealism-painting/SKILL.md) (Surrealism). Keep the flat clarity; set the object in a deep, empty plain with a long shadow, and change its scale by 3 to 10 times.

- **Led to (go here for a newer version):** [`photorealism`](../photorealism/SKILL.md)
- **Rejects (the opposite pole; do not blend):** [`abstract-expressionism`](../abstract-expressionism/SKILL.md)
- **Kin in another domain:** [`cel-shaded-3d`](../cel-shaded-3d/SKILL.md), [`memphis-design`](../memphis-design/SKILL.md), [`pop-art-web`](../pop-art-web/SKILL.md)
- **Nearest by vector profile:** [`mannerism-painting`](../mannerism-painting/SKILL.md), [`ukiyo-e`](../ukiyo-e/SKILL.md), [`symbolism-painting`](../symbolism-painting/SKILL.md)

## Emotional target

Playful recognition: the viewer meets a familiar image made loud and cool, and smiles at it.

**Keywords:** bold, playful, commercial, iconic, ironic · **Brand archetypes:** jester, outlaw, everyman

## Sources

- [Wikidata Q134147 (Pop art)](https://www.wikidata.org/wiki/Q134147)
- [Getty AAT 300022205 (Pop art)](https://vocab.getty.edu/page/aat/300022205)
- [Art Institute of Chicago API (CC0 data)](https://api.artic.edu/docs/)
- Lawrence Alloway, The Arts and the Mass Media (Architectural Design, 1958)

---

Generated from [`data/painting/styles/pop-art-painting.json`](../../data/painting/styles/pop-art-painting.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
