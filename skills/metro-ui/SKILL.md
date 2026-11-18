---
name: metro-ui
description: "Apply the Metro UI style (2010–2015) when generating UI or graphic layouts. Load when the user asks for: metro, windows phone, modern ui, live tiles, tile ui, microsoft design."
domain: design
era: touchscreen
triggers:
  - "metro"
  - "windows phone"
  - "modern ui"
  - "live tiles"
  - "tile ui"
  - "microsoft design"
  - "flat tiles"
  - "panorama"
vector_profile:
  ornamentation: 1
  dimensionality: 2
  grid_rigidity: 5
  skeuomorphic_realism: 1
  typographic_expressiveness: 3
---

# Metro UI

> Content is the interface: remove chrome, use type and motion for hierarchy, and let flat colour tiles carry the brand.

Flat colour tiles, large light typography, a strict grid and content before chrome. It came from Windows Phone 7 in 2010 and drew on Swiss signage and airport wayfinding.

**Period:** 2010–2015 · **Era:** Touchscreen · **Domain:** Graphic & UI Design · **Also called:** Windows Phone 7 design, Modern UI, Microsoft Design Language

## When to load this skill

Load it when the user asks for: "metro", "windows phone", "modern ui", "live tiles", "tile ui", "microsoft design", "flat tiles", "panorama".

Good for: dashboards of tiles, kiosk and signage apps, news and feed readers, retro Microsoft revival, internal tools with a clear tone.

Do not use it when:
- The brand must feel warm or luxurious.
- The product needs rich imagery in each card.
- The UI has deep nested navigation.

## System directives

When generating UI or graphic layouts in Metro UI, you MUST:

1. Build the home screen from tiles on a 12px grid; use tiles of 1, 2 and 4 units (for example 80px, 168px and 344px).
2. Use one solid accent colour per tile from a set of 8 to 12 saturated colours; tile gutters are 8px.
3. Set a huge page title in light weight (300) at 40px to 72px, partly cut off by the right edge to signal a pan.
4. Use no gradient, no shadow and no gloss; a tile is a flat rectangle with a 0px radius.
5. Draw icons as simple white line glyphs inside a 2px circle or on a tile; one stroke width of 2px.
6. Align all text flush left to a 12px margin; labels are 14px, lower case.
7. Move the content on pan and tile flips: entrance by slide of 40px with a stagger of 40ms per item.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Gradients, gloss and bevels.
- **NEVER:** Rounded corners and drop shadows.
- **NEVER:** Chrome that competes with content, such as heavy toolbars.
- **NEVER:** Centred text blocks.
- **NEVER:** Pastel colours.
- **NEVER:** Decorative textures.
- **NEVER:** Skeuomorphic icons.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■□□□□` 1/5 | pure minimal | maximalist |
| Dimensionality | `■■□□□` 2/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■■■■` 5/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■□□□□` 1/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■■■□□` 3/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** A tile grid of 12px units with 8px gutters; the content column starts at a 12px margin; a panorama runs past the right edge.
- **Whitespace ratio:** 20% to 30% of the surface stays empty; the spacing scale is 8, 12, 24 and 48px.
- **Alignment rules:** Flush left; titles and tiles align to the 12px grid; the right edge is cut off by design.
- **Container geometry:** Flat rectangles and squares with a 0px radius; no borders; the colour is the boundary.

## Typography

- **Classifications:** humanist sans serif · light display
- **Tracking:** Display takes -0.01em; body stays at 0.
- **Leading:** Display 1.1; body 1.45.
- **Hierarchy rules:**
  - Use three weights: light (300) for display, regular (400) for body, semibold (600) for labels.
  - Use sizes 14, 20, 42 and 72px.
  - Set titles in light weight, in lower case.
  - Cut the page title by the right edge to hint at more content.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Open Sans | Open Sans | A Segoe-like humanist that has a light 300 weight for display. |
| Noto Sans | Noto Sans | A wide-coverage humanist sans. |
| Source Sans 3 | Source Sans 3 | A light, clear text face. |

## Colour & lighting

- **Palette structure:** Black or white ground with one saturated colour per tile.
- **Contrast rules:** White on black holds 21:1; white on each tile colour holds at least 4.5:1.
- **Surface treatment:** Flat, opaque colour; no gradient or texture.
- **Light and shadow:** None; no light source.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Black | `#000000` | background |
| White | `#FFFFFF` | text |
| Cobalt | `#0050EF` | primary tile |
| Magenta | `#D80073` | accent tile |
| Lime | `#008A00` | second tile |
| Orange | `#CC4A00` | third tile |

## Materiality & texture

- **Surface simulation:** Digital paper and signage: flat colour with no simulated material.
- **Border rules:** No borders; a 2px outline appears only for focus.
- **Blur and elevation:** No blur. No elevation. Shadow is none.

## Ornamentation & iconography

- **Iconography:** White line glyphs on a 24px field with a 2px stroke, butt caps and mitre joins, inside a 2px circle for app-bar buttons.
- **Illustration:** Photographs and typography only; no illustration.
- **Decorative elements:** colour tile · panorama title · app bar · circle glyph

## Motion & interactivity

- **Born on screen:** yes
- **Transition physics:** Fluent, directional motion: pages turn and slide in from the side; tiles flip in a 3D turn of 180° over 300ms and items stagger by 40ms.
- **Easing:** cubic-bezier(0.1, 0.9, 0.2, 1)
- **Duration (ms):** 300
- **Hover and active:** Press tilts a tile by 4° toward the touch point and dims it by 10%; no hover on touch.

## Code & token primer

Set `data-style="metro-ui"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="metro-ui"] {
  --color-bg: #000000;
  --color-surface: #0050EF;
  --color-text: #FFFFFF;
  --color-muted: #C8C8C8;
  --color-primary: #0050EF;
  --color-accent: #D80073;
  --color-border: #FFFFFF;
  --font-sans: "Open Sans", "Segoe UI", sans-serif;
  --font-display: "Open Sans", "Segoe UI", sans-serif;
  --border-radius: 0px;
  --border-width: 0px;
  --shadow-elevation: none;
  --backdrop-filter: none;
  --space-unit: 12px;
  --ease: cubic-bezier(0.1, 0.9, 0.2, 1);
  --duration: 300ms;
  --type-ratio: 1.333;
  --size-small: 12px;
  --size-h3: 28.43px;
  --size-h2: 37.9px;
  --size-h1: 50.52px;
  --color-on-bg: #FFFFFF;
  --color-on-surface: #FFFFFF;
  --color-on-primary: #FFFFFF;
  --color-on-accent: #FFFFFF;
  --color-muted-on-bg: #C8C8C8;
  --color-muted-on-surface: #E6EEFD;
  --color-link: #FFFFFF;
  --color-link-on-surface: #FFFFFF;
  --display-weight: 300;
  --subhead-weight: 300;
  --body-weight: 400;
  --strong-weight: 600;
  --label-weight: 600;
  --display-tracking: -0.01em;
  --display-leading: 1.1;
  --display-case: lowercase;
  --body-leading: 1.45;
  --body-size: 16px;
  --icon-stroke: 2;
  --ground: linear-gradient(var(--color-primary), var(--color-primary)) 100% 0 / 17vmin 17vmin no-repeat,
    linear-gradient(var(--color-accent), var(--color-accent)) calc(100% - 18vmin) 0 / 17vmin 17vmin no-repeat,
    linear-gradient(color-mix(in oklab, var(--color-primary) 70%, transparent), color-mix(in oklab, var(--color-primary) 70%, transparent)) 100% 18vmin / 35vmin 17vmin no-repeat,
    linear-gradient(color-mix(in oklab, var(--color-accent) 60%, transparent), color-mix(in oklab, var(--color-accent) 60%, transparent)) calc(100% - 18vmin) 36vmin / 17vmin 35vmin no-repeat,
    linear-gradient(var(--color-surface), var(--color-surface)) 100% 36vmin / 17vmin 17vmin no-repeat,
    var(--color-bg);
}
```

Tailwind patterns:

| Element | Classes |
|---|---|
| page | `bg-black text-white font-sans antialiased pl-3` |
| heading | `text-6xl md:text-8xl font-light lowercase leading-[1.1] tracking-[-0.01em] whitespace-nowrap` |
| body | `text-base leading-[1.45] max-w-prose` |
| section | `bg-[#0050EF] p-3` |
| button | `rounded-none bg-[#D80073] px-6 py-3 text-sm font-semibold lowercase text-white transition duration-300 active:brightness-90` |
| label | `text-sm font-semibold lowercase` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** outline, stroke 2 on a 24px field, butt caps, miter joins, container: circle. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Lucide (Regular) by Lucide Contributors, licence ISC. Reason: A plain 2px line glyph with sharp joins that sits well inside a thin circle. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 300, tracking -0.01em, leading 1.1, case: lowercase.
- **Weights:** display 300, subhead 300, body 400, bold in text 600, labels and buttons 600. The style uses 3 weights (300, 400, 600) and no other. The display is 100 lighter than the body, so size carries the hierarchy. The accent is size: a larger word is the accent, so the weights stay few.
- **Body type:** 16px, leading 1.45.
- **Page:** hero poster, left aligned, compact density, accent tilt 0°.
- **Ground:** tiles. Metro is a wall of flat live tiles in solid colour on a black field. Put the class `ground` on the first screen of the page; it takes `--ground`, a stack of gradients built from the colour tokens. The ground can run behind the copy, so put the class `ground-copy` on each text block of that screen: the block gets `--color-bg` and a soft edge. Keep the rest of the page on `--color-bg`.
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

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Base colour (`base_colour`) | #0050EF | #0050EF, #D80073, #FFFFFF | --color-primary, --color-on-primary, --color-link-on-surface |
| Accent colour (`accent_colour`) | #D80073 | #D80073, #0050EF | --color-accent, --color-on-accent, --color-link |
| Corner radius (`corner_radius`) | 0px | 0–0 px | --border-radius |
| Grid step (`grid_step`) | 12px | 6–16 px | --space-unit, --grid-gutter |
| Type scale ratio (`type_scale_ratio`) | 1.333 | 1.25–1.414 | --type-ratio, --size-small, --size-h3, --size-h2, --size-h1 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more depth**: move toward [`material-design`](../material-design/SKILL.md) (Material Design). Add elevation levels and a 2px radius; keep the tile colours.
- If the user asks for **more minimal**: move toward [`swiss-international`](../swiss-international/SKILL.md) (Swiss International Style). Reduce to black and white and one red accent on a 12-column grid.
- If the user asks for **more app-like**: move toward [`bento-grid-ui`](../bento-grid-ui/SKILL.md) (Bento Grid UI). Add a 1px border and a 12px radius to the tiles.

- **Came from (go here for a more orthodox version):** [`swiss-international`](../swiss-international/SKILL.md)
- **Rejects (the opposite pole; do not blend):** [`frutiger-aero`](../frutiger-aero/SKILL.md), [`skeuomorphism`](../skeuomorphism/SKILL.md)
- **Mixes well with:** [`flat-design`](../flat-design/SKILL.md)
- **Kin in another domain:** [`flat-icon`](../flat-icon/SKILL.md), [`flat-logo`](../flat-logo/SKILL.md)
- **Nearest by vector profile:** [`bauhaus`](../bauhaus/SKILL.md), [`bento-grid-ui`](../bento-grid-ui/SKILL.md), [`dark-devtool-ui`](../dark-devtool-ui/SKILL.md)

## Emotional target

The viewer feels clarity, speed and a modern, typographic order.

**Keywords:** clear, fast, typographic, bold, modern, flat · **Brand archetypes:** sage, ruler

## Sources

- Microsoft, Design Language: Metro (2010)

---

Generated from [`data/design/styles/metro-ui.json`](../../data/design/styles/metro-ui.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
