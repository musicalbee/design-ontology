---
name: conceptual-sketch-ui
description: "Apply the Conceptual Sketch UI style (2015–now) when generating UI or graphic layouts. Load when the user asks for: sketch, wireframe, hand drawn, notebook, blueprint, annotations."
domain: design
era: touchscreen
triggers:
  - "sketch"
  - "wireframe"
  - "hand drawn"
  - "notebook"
  - "blueprint"
  - "annotations"
  - "pencil"
  - "doodle"
vector_profile:
  ornamentation: 3
  dimensionality: 3
  grid_rigidity: 3
  skeuomorphic_realism: 3
  typographic_expressiveness: 5
---

# Conceptual Sketch UI

> The page shows thinking: a rough line says the idea is open and honest.

Pencil and ink lines, rough outlines, margin notes, arrows and annotations on a pale ground. It shows an idea before it is finished, and feels like a designer's notebook.

**Period:** 2015–now · **Era:** Touchscreen · **Domain:** Graphic & UI Design · **Also called:** Wireframe aesthetic, Sketchbook web, Hand-drawn blueprint

## When to load this skill

Load it when the user asks for: "sketch", "wireframe", "hand drawn", "notebook", "blueprint", "annotations", "pencil", "doodle".

Good for: design and strategy studios, process and case-study pages, education and workshop sites, early-stage product and pitch pages, documentation with diagrams.

Do not use it when:
- The brand must look finished and premium.
- The page needs precise product photography.
- The audience expects a corporate tone.

## System directives

When generating UI or graphic layouts in Conceptual Sketch UI, you MUST:

1. Draw every shape with a wobbly line: a stroke of 1.5px to 2.5px with a roughness of 1px to 2px and no perfect curve.
2. Use a paper ground (#FAF8F2) with a grid of 24px at 6% opacity, or a dot grid of 24px.
3. Colour in ink (#1D2A44) and add 1 highlighter accent (#FFE066) at 60% opacity for no more than 8% of the surface.
4. Add margin notes in a hand face at 18px to 22px with an arrow (a curved line of 2px) to the part they explain.
5. Hatch shadows with 3 to 6 diagonal lines at 45° and 4px gap instead of a soft shadow.
6. Number steps in circles of 28px to 36px and link them with dashed lines of 2px (6px dash, 4px gap).
7. Leave 2 or more boxes as empty placeholders with a cross, as in a wireframe.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Polished gradients and glass.
- **NEVER:** Perfectly straight vector lines.
- **NEVER:** Photographic hero images.
- **NEVER:** Soft blurred shadows.
- **NEVER:** Saturated brand colour fills.
- **NEVER:** Dense stock icon sets.
- **NEVER:** Pixel-perfect alignment with no notes.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■■□□` 3/5 | pure minimal | maximalist |
| Dimensionality | `■■■□□` 3/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■■□□` 3/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■■■□□` 3/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■■■■■` 5/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** A loose page on a 24px grid; blocks sit as boxes with rough outlines; notes and arrows overlap the edges.
- **Whitespace ratio:** 30% to 40% of the surface is empty; gaps are 16px to 48px.
- **Alignment rules:** Flush left blocks; notes slightly rotated by -3° to +3°; arrows join items.
- **Container geometry:** Hand-drawn rectangles with 4px to 12px wobble; circles for steps; dashed frames for placeholders.

## Typography

- **Classifications:** handwriting script · humanist sans serif
- **Tracking:** Hand faces take 0.
- **Leading:** Display 1.2; body 1.5.
- **Hierarchy rules:**
  - Use one weight (400) in the hand face and 400 and 700 in the sans.
  - Use sizes 16, 20, 32 and 56px.
  - Set titles in the hand face and body in the sans.
  - Set annotations at 18px in the ink colour.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Patrick Hand | Nunito | A clean hand for notes. |
| Reenie Beanie | Nunito | A fast pen for margin notes. |
| Architects Daughter | Nunito | An architect's lettering for titles. |

## Colour & lighting

- **Palette structure:** Pale paper, blue-black ink and one highlighter.
- **Contrast rules:** Ink on paper holds 13:1; the highlighter is a background only, with ink text on it.
- **Surface treatment:** Flat paper with a faint grid at 6% and no gradient.
- **Light and shadow:** Hatch: lines at 45° with a 4px gap in the ink colour at 40%; no soft shadow.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Paper | `#FAF8F2` | background |
| Ink | `#1D2A44` | text |
| Graphite | `#6B7280` | secondary text |
| Highlighter | `#FFE066` | primary |
| Red Pen | `#D64545` | accent |
| Grid | `#E3E0D6` | border |

## Materiality & texture

- **Surface simulation:** Paper, pencil and ink in a notebook.
- **Border rules:** A wobbly 2px ink line; dashed for ideas that are not final.
- **Blur and elevation:** No blur; hatch shadows; no elevation.

## Ornamentation & iconography

- **Iconography:** Hand-drawn 2px icons with round caps and a slight wobble; arrows, stars and circled numbers.
- **Illustration:** Wireframes, doodles, arrows, boxes with crosses and sketched products.
- **Decorative elements:** wobbly outline · margin note · hatch shadow · placeholder cross

## Motion & interactivity

- **Born on screen:** yes
- **Transition physics:** Drawn: lines draw in with a stroke animation over 600ms to 900ms; notes appear with a 4px jitter; no springs.
- **Easing:** cubic-bezier(0, 0, 0.2, 1)
- **Duration (ms):** 600
- **Hover and active:** Hover re-draws the outline in 300ms and shades the box with a highlighter at 40%; active state fills it.

## Code & token primer

Set `data-style="conceptual-sketch-ui"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="conceptual-sketch-ui"] {
  --color-bg: #FAF8F2;
  --color-surface: #FFFFFF;
  --color-text: #1D2A44;
  --color-muted: #6B7280;
  --color-primary: #FFE066;
  --color-accent: #D64545;
  --color-border: #1D2A44;
  --font-sans: "Nunito", system-ui, sans-serif;
  --font-display: "Patrick Hand", "Architects Daughter", cursive;
  --border-radius: 6px;
  --border-width: 2px;
  --shadow-elevation: none;
  --backdrop-filter: none;
  --space-unit: 8px;
  --ease: cubic-bezier(0, 0, 0.2, 1);
  --duration: 600ms;
  --type-ratio: 1.618;
  --size-small: 9.89px;
  --size-h3: 41.89px;
  --size-h2: 67.77px;
  --size-h1: 109.66px;
  --color-on-bg: #1D2A44;
  --color-on-surface: #1D2A44;
  --color-on-primary: #1D2A44;
  --color-on-accent: #000000;
  --color-muted-on-bg: #6B7280;
  --color-muted-on-surface: #6B7280;
  --color-link: #1D2A44;
  --color-link-on-surface: #1D2A44;
  --display-weight: 400;
  --subhead-weight: 400;
  --body-weight: 400;
  --strong-weight: 700;
  --label-weight: 400;
  --display-tracking: 0em;
  --display-leading: 1.2;
  --display-case: none;
  --body-leading: 1.5;
  --body-size: 16px;
  --icon-stroke: 2;
  --ground: linear-gradient(var(--color-accent), var(--color-accent)) 100% 0 / 8.33% 38% no-repeat,
    linear-gradient(var(--color-on-bg), var(--color-on-bg)) 0 100% / 100% 3px no-repeat,
    repeating-linear-gradient(90deg, color-mix(in oklab, var(--color-on-bg) 9%, transparent) 0 1px, transparent 1px 8.333%),
    repeating-linear-gradient(0deg, color-mix(in oklab, var(--color-on-bg) 5%, transparent) 0 1px, transparent 1px 24px),
    var(--color-bg);
}
```

Tailwind patterns:

| Element | Classes |
|---|---|
| page | `bg-[#FAF8F2] text-[#1D2A44] font-sans antialiased` |
| heading | `text-4xl md:text-6xl leading-[1.2] tracking-normal` |
| body | `text-base leading-[1.5]` |
| section | `rounded-md border-2 border-[#1D2A44] bg-white p-4` |
| button | `rounded-md border-2 border-[#1D2A44] bg-[#FFE066] px-5 py-2 font-bold text-[#1D2A44] transition-colors duration-300 hover:bg-[#FFD21F]` |
| label | `text-lg text-[#6B7280]` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** outline, stroke 2 on a 24px field, round caps, round joins, container: none. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Pepicons (Print) by CyCraft, licence CC BY 4.0. Reason: A hand-drawn line family with a slight wobble that matches pencil lines. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 400, tracking 0em, leading 1.2, case: none.
- **Weights:** display 400, subhead 400, body 400, bold in text 700, labels and buttons 400. The style uses 2 weights (400, 700) and no other. The display has the weight of the body, so size and face carry the hierarchy. The accent is colour: one coloured word or field is the accent, so the weights stay quiet.
- **Body type:** 16px, leading 1.5.
- **Page:** hero split, left aligned, airy density, accent tilt 0°.
- **Ground:** swiss-grid. A sketch page is drawn on grid paper, with one marker stroke of colour. Put the class `ground` on the first screen of the page; it takes `--ground`, a stack of gradients built from the colour tokens. The ground can run behind the copy, so put the class `ground-copy` on each text block of that screen: the block gets `--color-bg` and a soft edge. Keep the rest of the page on `--color-bg`.
- **Text colour:** `--color-text` is for the main reading field only. On each field, use its token: `--color-on-bg`, `--color-on-surface`, `--color-on-primary`, `--color-on-accent`.

### How to choose an icon pack

An icon pack is a typeface for pictures. Choose it with the same care as the text face. These rules hold for an open-source set and for a licensed library.

1. **The stroke matches the stem.** Set an icon next to the body text at text size. The line of the icon and the stem of a letter have the same weight.
2. **Terminals and corners follow the radius token.** Butt caps and mitre joins go with a radius of zero. Round caps and round joins go with a soft radius.
3. **The fill mode follows the technology of the era.** Print eras cut solid forms. Screen eras with depth fill and shade the form. Current product interfaces draw an outline.
4. **The metaphors are not younger than the style.** Each picture is an object that the era knew. An icon with a later metaphor breaks the period.
5. **One family, one grid.** All icons come from one family and one variant, drawn on one field. Do not mix families on one surface.
6. **The family covers the product.** List each concept that the product needs before you commit. A family that has no icon for one of them is the wrong family.
7. **The colour is a token.** An icon takes currentColor. A second tone comes from a token, not from the file.
8. **The licence permits the use.** Read the licence of the set. Give credit where the licence asks for it. A product with a brand uses its licensed library and applies the same rules to choose the family.

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Sketch line (process)

Lines with a small jitter and a double stroke, so that a drawing on a screen looks drawn by hand. Origin: graphic & ui design, United States, 2008.

- Offset each line by 0.5 to 2 px at random points along its length.
- Draw each line twice with a small change, as a pencil does.
- Fill shapes with hatching at 45 degrees, not with flat colour.

## Media

The salons, schools, magazines, publishers, galleries and platforms that carried this style.

- **Behance** (platform, web, 2005–now), published the style. A web site where designers post portfolios of projects. Concept work for interfaces, logos and illustration spreads from it.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Base colour (`base_colour`) | #FFE066 | #FFE066, #D64545, #1D2A44 | --color-primary, --color-on-primary, --color-link-on-surface |
| Accent colour (`accent_colour`) | #D64545 | #D64545, #FFE066 | --color-accent, --color-on-accent, --color-link |
| Corner radius (`corner_radius`) | 6px | 3–9 px | --border-radius |
| Grid step (`grid_step`) | 8px | 4–12 px | --space-unit, --grid-gutter |
| Type scale ratio (`type_scale_ratio`) | 1.618 | 1.5–1.618 | --type-ratio, --size-small, --size-h3, --size-h2, --size-h1 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **cleaner**: move toward [`swiss-international`](../swiss-international/SKILL.md) (Swiss International Style). Straighten lines, use a grid of 8px and a neo-grotesque; keep the ink and one accent.
- If the user asks for **more crafted**: move toward [`scrapbook-ui`](../scrapbook-ui/SKILL.md) (Scrapbook UI). Add tape, photos and a coloured paper ground.
- If the user asks for **more formal**: move toward [`flat-design`](../flat-design/SKILL.md) (Flat Design). Replace the sketch lines by solid fills of 2px radius.

- **Rejects (the opposite pole; do not blend):** [`flat-design`](../flat-design/SKILL.md)
- **Mixes well with:** [`scrapbook-ui`](../scrapbook-ui/SKILL.md), [`swiss-international`](../swiss-international/SKILL.md)
- **Nearest by vector profile:** [`cyberpunk-web`](../cyberpunk-web/SKILL.md), [`space-age`](../space-age/SKILL.md), [`synthwave-web`](../synthwave-web/SKILL.md)

## Emotional target

The viewer feels invited into an idea that is still being made.

**Keywords:** honest, thoughtful, open, creative, light, human · **Brand archetypes:** creator, sage

## Sources

- Example: Excalidraw and tldraw sites (2020–2025)
- Example: Balsamiq product site (2008–2025)
- Example: Hand-drawn portfolios in the Awwwards sketch category (2016–2024)

---

Generated from [`data/design/styles/conceptual-sketch-ui.json`](../../data/design/styles/conceptual-sketch-ui.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
