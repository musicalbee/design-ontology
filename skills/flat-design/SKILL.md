---
name: flat-design
description: "Apply the Flat Design style (2012–present) when generating UI or graphic layouts. Load when the user asks for: flat design, flat ui, flat style, no gradients, no shadows, solid colours."
domain: design
era: touchscreen
triggers:
  - "flat design"
  - "flat ui"
  - "flat style"
  - "no gradients"
  - "no shadows"
  - "solid colours"
  - "ios 7 look"
  - "metro style"
  - "simple icons"
  - "flat vector"
  - "colour blocks"
vector_profile:
  ornamentation: 1
  dimensionality: 1
  grid_rigidity: 4
  skeuomorphic_realism: 1
  typographic_expressiveness: 2
---

# Flat Design

> A digital interface is honest when it shows itself as pixels and type, and does not imitate physical objects.

Interfaces of solid colour fields, simple geometric shapes, bold sans-serif type and no gradients or shadows. It followed Microsoft Metro in 2010 and Windows 8 in 2012, and became the default after iOS 7 in 2013.

**Period:** 2012–present · **Era:** Touchscreen · **Domain:** Graphic & UI Design · **Also called:** Flat UI, Flat 2.0, Metro-inspired flat

## When to load this skill

Load it when the user asks for: "flat design", "flat ui", "flat style", "no gradients", "no shadows", "solid colours", "ios 7 look", "metro style", "simple icons", "flat vector", "colour blocks".

Good for: marketing landing pages, mobile apps, dashboards, icon sets, startup brands.

Do not use it when:
- The user must tell raised controls from plain content, because flat buttons lose the affordance cue.
- The brand needs warmth, material richness or a premium feel.
- The interface has many dense, equal-weight controls that need layers to show order.

## System directives

When generating UI or graphic layouts in Flat Design, you MUST:

1. Fill every surface with one solid colour and use no gradient, texture or shadow.
2. Build the palette from 4 to 6 saturated colours, such as turquoise, emerald, amethyst, carrot and alizarin, plus one neutral.
3. Draw icons as simple geometric shapes on a 24px or 32px square, with solid fills or a 2px stroke and no bevel.
4. Express hierarchy with size, weight and colour, using at least a 1.25 ratio between type levels.
5. Use large tap targets of at least 44px and generous padding of 16 to 24px around content.
6. Separate regions with a change of colour and not with a border, a shadow or a line.
7. Give interactive elements a plain colour change on hover and press, with no lift and no glow.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Gradients, glossy highlights and reflections on buttons.
- **NEVER:** Drop shadows, inner shadows and bevels on any element.
- **NEVER:** Textures of leather, paper, wood or linen as backgrounds.
- **NEVER:** Photographic or 3D-rendered icons.
- **NEVER:** Low-contrast pastel text under 4.5:1 on a coloured field.
- **NEVER:** Ghost buttons with a 1px outline as the only primary action.
- **NEVER:** Mixed icon styles of outline and filled in one view.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■□□□□` 1/5 | pure minimal | maximalist |
| Dimensionality | `■□□□□` 1/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■■■□` 4/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■□□□□` 1/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■■□□□` 2/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** A 12-column grid with 30px gutters on the web and a 4-column grid with 16px margins on a phone; every spacing value is a multiple of 8px.
- **Whitespace ratio:** 35–50% of the surface stays empty; the spacing scale is 8, 16, 24, 32, 48, 64px.
- **Alignment rules:** Flush-left text with a shared left edge; icons centre in their containers; blocks of colour run full-width and bleed to the screen edge on mobile.
- **Container geometry:** Rectangles and circles with a radius of 0px to 4px on buttons and cards, and 50% on avatars; tiles are squares or 2:1 rectangles.

## Typography

- **Classifications:** geometric sans serif · grotesque sans serif
- **Tracking:** Display sizes take -0.01em to 0em; body stays at 0; upper-case labels take +0.05em.
- **Leading:** Display 1.15; body 1.5; labels 1.2.
- **Hierarchy rules:**
  - Use light (300) or regular (400) for large display text and bold (700) for buttons and labels.
  - Use four sizes, for example 14, 18, 32 and 64px, with a ratio near 1.8 between display levels.
  - Set headline text in white on a saturated colour field or in near-black on white.
  - Keep body text at 16px or more with a line length of 45 to 75 characters.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Montserrat | Open Sans | A wide geometric face for headlines and a neutral text face; common in 2013 flat templates. |
| Lato | Lato | A single-family setting with weights 300 to 900, close to the Helvetica Neue Light used by iOS 7. |
| Raleway | Source Sans 3 | A thin elegant display face for large headings with a sturdy text face. |

## Colour & lighting

- **Palette structure:** One white or light-grey base, 4 to 6 saturated flat colours, and one dark neutral; each section holds one dominant colour on 30 to 60% of its area.
- **Contrast rules:** Body text holds at least 4.5:1; white text on Turquoise reaches only 2.5:1, so large text of 24px or more or a darker shade of #16A085 is required on that field.
- **Surface treatment:** Opaque solid fills with no gradient, no noise and no transparency except for 50% overlays on photographs.
- **Light and shadow:** None. There is no light source; depth comes from overlap and from colour change.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Clouds | `#ECF0F1` | background |
| Midnight | `#2C3E50` | text and dark surface |
| Turquoise | `#1ABC9C` | primary |
| Peter River | `#3498DB` | secondary action |
| Alizarin | `#E74C3C` | alert and accent |
| Sun Flower | `#F1C40F` | highlight |

## Materiality & texture

- **Surface simulation:** None; surfaces are plain screen colour and do not imitate any material.
- **Border rules:** No borders on cards and buttons; inputs take a 2px solid bottom or full border in the accent colour when focused.
- **Blur and elevation:** No blur and no elevation; box-shadow and backdrop-filter stay at none, and there is one flat layer.

## Ornamentation & iconography

- **Iconography:** Solid or 2px-stroke glyphs on a 24px grid with rounded or square terminals, one colour each, and no gradient.
- **Illustration:** Flat vector shapes in the palette with no outlines and no shading, or full-bleed photographs under a 50% colour overlay.
- **Decorative elements:** colour blocks · circles · long shadow of 45 degrees on icons in the 2013 variant · oversized numerals · ghost-weight hero type

## Motion & interactivity

- **Born on screen:** yes
- **Transition physics:** Short plain transitions of colour, opacity and position with no overshoot; panels slide in from the edge by their own width.
- **Easing:** cubic-bezier(0.25, 0.1, 0.25, 1)
- **Duration (ms):** 200
- **Hover and active:** Hover darkens the fill by 8 to 10% lightness; active darkens it by 15%; nothing lifts, scales more than 1.02 or glows.

## Code & token primer

Set `data-style="flat-design"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="flat-design"] {
  --color-bg: #ECF0F1;
  --color-surface: #FFFFFF;
  --color-text: #2C3E50;
  --color-muted: #7F8C8D;
  --color-primary: #1ABC9C;
  --color-accent: #E74C3C;
  --color-border: #BDC3C7;
  --font-sans: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  --font-display: "Montserrat", "Helvetica Neue", Helvetica, Arial, sans-serif;
  --border-radius: 4px;
  --border-width: 0px;
  --shadow-elevation: none;
  --backdrop-filter: none;
  --space-unit: 8px;
  --ease: cubic-bezier(0.25, 0.1, 0.25, 1);
  --duration: 200ms;
  --color-primary-hover: #16A085;
  --grid-columns: 12;
  --grid-gutter: 30px;
  --leading-body: 1.5;
  --color-on-bg: #2C3E50;
  --color-on-surface: #2C3E50;
  --color-on-primary: #2C3E50;
  --color-on-accent: #000000;
  --color-muted-on-bg: #526270;
  --color-muted-on-surface: #6B7885;
  --color-link: #2C3E50;
  --color-link-on-surface: #2C3E50;
  --display-weight: 300;
  --subhead-weight: 400;
  --body-weight: 400;
  --strong-weight: 700;
  --label-weight: 700;
  --display-tracking: 0.01em;
  --display-leading: 1.1;
  --display-case: none;
  --body-leading: 1.6;
  --body-size: 16px;
  --icon-stroke: 2;
}
```

Tailwind patterns:

| Element | Classes |
|---|---|
| page | `bg-[#ECF0F1] text-[#2C3E50] font-sans antialiased` |
| heading | `font-bold text-4xl md:text-6xl leading-[1.15] tracking-tight text-[#2C3E50]` |
| card | `rounded bg-white p-6 shadow-none` |
| button | `rounded bg-[#1ABC9C] px-6 py-3 text-base font-bold text-white transition-colors duration-200 hover:bg-[#16A085] active:bg-[#138D75]` |
| input | `rounded bg-white px-4 py-3 text-base text-[#2C3E50] border-2 border-transparent focus:border-[#1ABC9C] focus:outline-none` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** solid, stroke 2 on a 24px field, butt caps, miter joins, container: circle. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Ionicons (Filled) by Ben Sperry, licence MIT. Reason: Solid glyphs with no depth and no detail: the form alone carries the meaning. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 300, tracking 0.01em, leading 1.1, case: none.
- **Weights:** display 300, subhead 400, body 400, bold in text 700, labels and buttons 700. The style uses 3 weights (300, 400, 700) and no other. The display is 100 lighter than the body, so size carries the hierarchy. The accent is colour: one coloured word or field is the accent, so the weights stay quiet.
- **Body type:** 16px, leading 1.6.
- **Page:** hero stacked, center aligned, airy density, accent tilt 0°.
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

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more depth**: move toward [`material-design`](../material-design/SKILL.md) (Material Design). Add elevation shadows of 2 to 24dp with a top-left key light and keep the solid fills and the colour palette.
- If the user asks for **more tactile**: move toward [`skeuomorphism`](../skeuomorphism/SKILL.md) (Skeuomorphism). Add a 4 to 8% top-to-bottom gradient and a 1px highlight on controls; keep the layout and the colours.
- If the user asks for **more human**: move toward [`corporate-memphis`](../corporate-memphis/SKILL.md) (Corporate Memphis). Add flat illustrated people with exaggerated proportions and a 4-hue palette; keep the solid fills and the layout.
- If the user asks for **more grid and type**: move toward [`swiss-international`](../swiss-international/SKILL.md) (Swiss International Style). Reduce the palette to black, white and one accent; set text flush left on a 12-column grid with a single typeface.

- **Came from (go here for a more orthodox version):** [`swiss-international`](../swiss-international/SKILL.md)
- **Led to (go here for a newer version):** [`bento-grid-ui`](../bento-grid-ui/SKILL.md), [`corporate-memphis`](../corporate-memphis/SKILL.md), [`material-design`](../material-design/SKILL.md), [`neo-brutalism-ui`](../neo-brutalism-ui/SKILL.md)
- **Rejects (the opposite pole; do not blend):** [`skeuomorphism`](../skeuomorphism/SKILL.md)
- **Was rejected by:** [`neumorphism`](../neumorphism/SKILL.md)
- **Mixes well with:** [`swiss-international`](../swiss-international/SKILL.md)
- **Nearest by vector profile:** [`swiss-international`](../swiss-international/SKILL.md), [`bauhaus`](../bauhaus/SKILL.md), [`bento-grid-ui`](../bento-grid-ui/SKILL.md)

## Emotional target

Directness and lightness: the viewer feels that the interface is quick, honest and free of ornament.

**Keywords:** direct, light, bright, honest, quick, utilitarian · **Brand archetypes:** everyman, sage, explorer

## Sources

- Apple, iOS Human Interface Guidelines for iOS 7 (Apple Inc., 2013)
- Microsoft, Windows 8 design language guidelines, formerly Metro (Microsoft, 2012)

---

Generated from [`data/design/styles/flat-design.json`](../../data/design/styles/flat-design.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
