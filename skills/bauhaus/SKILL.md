---
name: bauhaus
description: "Apply the Bauhaus style (1919–1933) when generating UI or graphic layouts. Load when the user asks for: bauhaus, primary colours, geometric shapes, form follows function, dessau, herbert bayer."
domain: design
era: modernist
triggers:
  - "bauhaus"
  - "primary colours"
  - "geometric shapes"
  - "form follows function"
  - "dessau"
  - "herbert bayer"
  - "constructivist poster"
  - "red blue yellow"
  - "futura-style"
vector_profile:
  ornamentation: 2
  dimensionality: 2
  grid_rigidity: 4
  skeuomorphic_realism: 1
  typographic_expressiveness: 3
---

# Bauhaus

> Form follows function, and a small kit of circle, square and triangle in three primary colours is enough to make any object for mass production.

Primary-colour geometry, sans-serif lower-case type and strict horizontal and vertical axes with bold diagonals. It came from the Bauhaus school in Weimar, Dessau and Berlin, and it fused craft with industrial production.

**Period:** 1919–1933 · **Era:** Modernist · **Domain:** Graphic & UI Design · **Also called:** Bauhaus Typography, New Typography, Neue Typographie

## When to load this skill

Load it when the user asks for: "bauhaus", "primary colours", "geometric shapes", "form follows function", "dessau", "herbert bayer", "constructivist poster", "red blue yellow", "futura-style".

Good for: posters, design school sites, museum and exhibition pages, architecture studios, furniture brands.

Do not use it when:
- The brand must feel luxurious, soft or ornate.
- The product needs long-form reading in dense body text on a coloured field.
- The audience expects photorealistic product rendering.

## System directives

When generating UI or graphic layouts in Bauhaus, you MUST:

1. Reduce every composition to the circle, the square and the triangle, and give each shape one primary colour: red, blue or yellow.
2. Organise the page on strong horizontal and vertical axes, and add diagonals at 45 degrees for tension.
3. Set type in a geometric sans serif, and use heavy bars of 8px to 24px as structural elements.
4. Use lower-case lettering for headlines, as in Herbert Bayer's universal alphabet of 1925.
5. Contrast scale hard: set one element at 5 to 10 times the size of the smallest one.
6. Use black, white and one primary at a time on a surface, and keep the fields flat and opaque.
7. Let every element carry information; remove any element that has only a decorative role.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Ornamental flourishes, scrollwork or revival typefaces.
- **NEVER:** Symmetrical centred layouts with a single axis of balance.
- **NEVER:** Soft gradients, glows and photorealistic textures.
- **NEVER:** Pastel or tertiary colours in place of the three primaries.
- **NEVER:** Rounded decorative containers with a radius above 0px.
- **NEVER:** Serif body text in Fraktur or Didone styles.
- **NEVER:** Random rotation of elements at angles other than 0, 45 and 90 degrees.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■□□□` 2/5 | pure minimal | maximalist |
| Dimensionality | `■■□□□` 2/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■■■□` 4/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■□□□□` 1/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■■■□□` 3/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** An 8-column grid with 16px gutters and an 8px baseline; blocks align to column edges, and 45-degree diagonals cross at grid intersections.
- **Whitespace ratio:** 30–50% of the surface stays empty; the spacing scale is 8, 16, 32, 64 and 128px.
- **Alignment rules:** Asymmetric balance on strict axes; text lines run flush left or along a 90-degree vertical; headlines may sit on a 45-degree line.
- **Container geometry:** Sharp rectangles, perfect circles and right triangles with a 0px radius on rectangles; bars have a 2:1 to 8:1 aspect ratio.

## Typography

- **Classifications:** geometric sans serif · stencil display · slab sans serif
- **Tracking:** Display sizes take 0 to +0.02em; body stays at 0; small upper-case labels take +0.1em.
- **Leading:** Display 1.0; body 1.5; line-heights are multiples of the 8px baseline.
- **Hierarchy rules:**
  - Use two weights only: regular (400) and bold (700).
  - Set headlines in lower case, and set one headline word at 5 times the body size.
  - Underline and tie headlines to the layout with rules of 4px to 8px.
  - Use red, blue and yellow for emphasis one colour at a time, never together on text.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Josefin Sans | Jost | Geometric forms in the manner of Futura and Bayer's Universal. |
| Jost | Jost | A single-family setting based on Futura proportions. |
| Bungee | Work Sans | A heavy signage face for poster-scale headlines only. |

## Colour & lighting

- **Palette structure:** Three primaries plus black and off-white; one primary leads at 15–25% of the surface and the others appear in small blocks.
- **Contrast rules:** Body text holds at least 10:1 against paper; yellow carries only black type, at a ratio of 11:1 or more, and never white type.
- **Surface treatment:** Flat matte fields of solid colour with a faint paper tone; no gradient and no transparency.
- **Light and shadow:** None. Depth comes only from overlap of flat shapes and from scale contrast.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Paper | `#F2EBDD` | background |
| Bauhaus Black | `#1A1A1A` | text and bars |
| Bauhaus Red | `#D62A1F` | primary accent |
| Bauhaus Blue | `#1D4E9E` | secondary accent |
| Bauhaus Yellow | `#F2B705` | tertiary accent |

## Materiality & texture

- **Surface simulation:** Printed paper and enamelled flat colour; the surface imitates uncoated stock and does not simulate relief.
- **Border rules:** Solid black rules of 2px to 8px used as structural bars; boxes have either a 4px black outline or no outline.
- **Blur and elevation:** No blur and no elevation; box-shadow is none, and overlap carries all depth.

## Ornamentation & iconography

- **Iconography:** Solid geometric pictograms built from circle, square and triangle, with square terminals and no outline stroke.
- **Illustration:** Photomontage, abstract compositions of primary shapes and high-contrast photography cropped to rectangles.
- **Decorative elements:** thick structural bars · overlapping circles and squares · 45-degree diagonals · oversized lower-case letters · stencil lettering

## Motion & interactivity

- **Born on screen:** no — the values here translate a print style for screen
- **Transition physics:** Translation for screen: rigid shapes slide and rotate in 90-degree steps along their axes with no bounce and no overshoot.
- **Easing:** cubic-bezier(0.4, 0, 0.2, 1)
- **Duration (ms):** 200
- **Hover and active:** Hover swaps the fill to a primary colour with black text; active adds a 4px black bar under the element; nothing scales or glows.

## Code & token primer

Set `data-style="bauhaus"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="bauhaus"] {
  --color-bg: #F2EBDD;
  --color-surface: #FFFFFF;
  --color-text: #1A1A1A;
  --color-muted: #4A4A4A;
  --color-primary: #D62A1F;
  --color-accent: #1D4E9E;
  --color-border: #1A1A1A;
  --font-sans: "Jost", "Futura", "Century Gothic", "Trebuchet MS", sans-serif;
  --font-display: "Josefin Sans", "Futura", "Century Gothic", sans-serif;
  --border-radius: 0px;
  --border-width: 4px;
  --shadow-elevation: none;
  --backdrop-filter: none;
  --space-unit: 8px;
  --ease: cubic-bezier(0.4, 0, 0.2, 1);
  --duration: 200ms;
  --color-highlight: #F2B705;
  --grid-columns: 8;
  --grid-gutter: 16px;
  --leading-body: 1.5;
  --type-ratio: 1.333;
  --size-small: 12.75px;
  --size-h3: 30.21px;
  --size-h2: 40.27px;
  --size-h1: 53.67px;
  --color-on-bg: #1A1A1A;
  --color-on-surface: #1A1A1A;
  --color-on-primary: #FFFFFF;
  --color-on-accent: #F2EBDD;
  --color-muted-on-bg: #4A4A4A;
  --color-muted-on-surface: #4A4A4A;
  --color-link: #1D4E9E;
  --color-link-on-surface: #1D4E9E;
  --display-weight: 700;
  --subhead-weight: 400;
  --body-weight: 400;
  --strong-weight: 700;
  --label-weight: 700;
  --display-tracking: 0.02em;
  --display-leading: 1;
  --display-case: lowercase;
  --body-leading: 1.5;
  --body-size: 17px;
  --icon-stroke: 2;
  --ground: radial-gradient(circle at 100% 0%, var(--color-accent) 0 26vmin, transparent calc(26vmin + 1px)),
    linear-gradient(-28deg, transparent calc(50% - .8vmin), var(--color-on-bg) calc(50% - .8vmin) calc(50% + .8vmin), transparent calc(50% + .8vmin)) 100% 100% / 70vmin 40vmin no-repeat,
    radial-gradient(circle at 86% 82%, var(--color-primary) 0 24vmin, transparent calc(24vmin + 1px)),
    linear-gradient(to top right, var(--color-highlight) 50%, transparent 50.5%) 58% 100% / 22vmin 22vmin no-repeat,
    url("data:image/svg+xml,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20width%3D'220'%20height%3D'220'%3E%3Cfilter%20id%3D'n'%3E%3CfeTurbulence%20type%3D'fractalNoise'%20baseFrequency%3D'.8'%20numOctaves%3D'3'%20stitchTiles%3D'stitch'%2F%3E%3CfeColorMatrix%20values%3D'0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.13%200%200%200%200'%2F%3E%3C%2Ffilter%3E%3Crect%20width%3D'100%25'%20height%3D'100%25'%20filter%3D'url(%23n)'%2F%3E%3C%2Fsvg%3E") 0 0 / 220px 220px repeat,
    var(--color-bg);
}
```

Tailwind patterns:

| Element | Classes |
|---|---|
| page | `bg-[#F2EBDD] text-[#1A1A1A] font-sans antialiased grid grid-cols-8 gap-x-4 px-4 md:px-12` |
| heading | `col-span-8 md:col-span-6 text-6xl md:text-8xl font-bold lowercase leading-none tracking-normal` |
| bar | `col-span-8 h-4 bg-[#D62A1F] mt-8` |
| card | `rounded-none border-4 border-[#1A1A1A] bg-white p-6` |
| button | `rounded-none border-4 border-[#1A1A1A] bg-[#F2B705] px-6 py-3 text-sm font-bold uppercase tracking-[0.1em] text-[#1A1A1A] transition-colors duration-200 hover:bg-[#D62A1F] hover:text-white` |
| label | `text-xs font-bold uppercase tracking-[0.1em] text-[#1D4E9E]` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** solid, stroke 2 on a 24px field, butt caps, miter joins, container: circle. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Material Symbols (Sharp, filled) by Google, licence Apache 2.0. Reason: Solid forms with square corners and no round terminal: the cut-paper geometry of the workshop. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 700, tracking 0.02em, leading 1, case: lowercase.
- **Weights:** display 700, subhead 400, body 400, bold in text 700, labels and buttons 700. The style uses 2 weights (400, 700) and no other. The display is 300 heavier than the body. The accent is size: a larger word is the accent, so the weights stay few.
- **Body type:** 17px, leading 1.5.
- **Page:** hero split, left aligned, regular density, accent tilt 0°.
- **Ground:** primaries. The workshop kit is circle, square and triangle in the three primaries, with one black bar for direction. Put the class `ground` on the first screen of the page; it takes `--ground`, a stack of gradients built from the colour tokens. The ground can run behind the copy, so put the class `ground-copy` on each text block of that screen: the block gets `--color-bg` and a soft edge. Keep the rest of the page on `--color-bg`.
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

### Construction grid (process)

Letters and marks drawn on a fixed grid of squares and circles, so that each glyph in a set has the same size, weight and corner. Origin: typeface, Nuremberg, 1525.

- Fix one live area inside a square canvas; on a 24 unit canvas, keep a 2 unit margin.
- Define 4 keyline shapes (circle, square, tall and wide rectangle) and fit each glyph to the one that suits it.
- Cut every angle to 45° or 90°, or to one other fixed angle.
- Use one stroke weight for the full set, for example 2 units on a 24 unit canvas.

### Primary shapes (motif)

The circle, the square and the triangle in flat colour, used as the whole picture or as a sign. Origin: painting, Petrograd, Russia, 1915.

- Use 1 to 3 shapes at large size; let one shape fill 30% to 60% of the frame.
- Fill each shape with one flat colour; no gradient and no outline.
- Put the shapes on a plain ground with 30% or more empty space.

## Media

The salons, schools, magazines, publishers, galleries and platforms that carried this style.

- **Bauhaus** (school, Weimar, Dessau, Berlin, 1919–1933), taught the style. A school of art, craft and design that joined the workshop to the studio. Its teachers and students set the forms of modern design, interiors and building.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Base colour (`base_colour`) | #D62A1F | #D62A1F, #1D4E9E, #1A1A1A | --color-primary, --color-on-primary, --color-link-on-surface |
| Accent colour (`accent_colour`) | #1D4E9E | #1D4E9E, #D62A1F | --color-accent, --color-on-accent, --color-link |
| Corner radius (`corner_radius`) | 0px | 0–0 px | --border-radius |
| Grid step (`grid_step`) | 8px | 4–12 px | --space-unit, --grid-gutter |
| Type scale ratio (`type_scale_ratio`) | 1.333 | 1.25–1.414 | --type-ratio, --size-small, --size-h3, --size-h2, --size-h1 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more neutral**: move toward [`swiss-international`](../swiss-international/SKILL.md) (Swiss International Style). Drop yellow and blue, keep one red accent under 10% of the surface, and set all text flush left in one neo-grotesque; keep the grid.
- If the user asks for **warmer**: move toward [`mid-century-modern`](../mid-century-modern/SKILL.md) (Mid-Century Modern). Swap the primaries for mustard, teal and orange, add organic shapes with a 50% radius; keep the asymmetric axes.
- If the user asks for **bolder**: move toward [`neo-brutalism-ui`](../neo-brutalism-ui/SKILL.md) (Neo-Brutalism UI). Raise the bars to 4px black borders and add a hard 6px offset shadow; keep the flat primaries and the 0px radius.
- If the user asks for **more app-like**: move toward [`flat-design`](../flat-design/SKILL.md) (Flat Design). Turn the bars into 1px dividers, use 4px radius buttons filled with one primary; keep the geometric type and the flat fields.

- **Led to (go here for a newer version):** [`japanese-graphic-modernism`](../japanese-graphic-modernism/SKILL.md), [`mid-century-modern`](../mid-century-modern/SKILL.md), [`rams-functionalism-ui`](../rams-functionalism-ui/SKILL.md), [`swiss-international`](../swiss-international/SKILL.md)
- **Mixes well with:** [`art-deco-web`](../art-deco-web/SKILL.md), [`constructivism-web`](../constructivism-web/SKILL.md), [`de-stijl-web`](../de-stijl-web/SKILL.md), [`swiss-international`](../swiss-international/SKILL.md)
- **Kin in another domain:** [`bauhaus-architecture`](../bauhaus-architecture/SKILL.md), [`bauhaus-interior`](../bauhaus-interior/SKILL.md), [`bauhaus-product`](../bauhaus-product/SKILL.md), [`de-stijl-painting`](../de-stijl-painting/SKILL.md), [`geometric-sans`](../geometric-sans/SKILL.md), [`geometric-symbol`](../geometric-symbol/SKILL.md), [`international-style-architecture`](../international-style-architecture/SKILL.md)
- **Nearest by vector profile:** [`japanese-graphic-modernism`](../japanese-graphic-modernism/SKILL.md), [`bento-grid-ui`](../bento-grid-ui/SKILL.md), [`dark-devtool-ui`](../dark-devtool-ui/SKILL.md)

## Emotional target

Energy with discipline: the viewer feels that the object is deliberate, rational and built for use.

**Keywords:** geometric, functional, constructive, primary, industrial, pioneering · **Brand archetypes:** creator, explorer

## Sources

- Magdalena Droste, Bauhaus 1919–1933 (Taschen, 2019)
- Jan Tschichold, Die neue Typographie (Brinkmann & Bose, 1928)

---

Generated from [`data/design/styles/bauhaus.json`](../../data/design/styles/bauhaus.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
