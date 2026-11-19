---
name: liquid-glass-ui
description: "Apply the Liquid Glass style (2025–now) when generating UI or graphic layouts. Load when the user asks for: liquid glass, ios 26, apple glass, refractive, frosted glass new, floating toolbar."
domain: design
era: contemporary-spatial
triggers:
  - "liquid glass"
  - "ios 26"
  - "apple glass"
  - "refractive"
  - "frosted glass new"
  - "floating toolbar"
  - "visionos glass"
  - "tahoe"
vector_profile:
  ornamentation: 2
  dimensionality: 4
  grid_rigidity: 3
  skeuomorphic_realism: 3
  typographic_expressiveness: 2
---

# Liquid Glass

> Controls are a transparent lens above the content: the interface floats, refracts the page and stays out of the way.

Clear, curved glass that bends the content behind it, with specular edges, tint that adapts to the ground and floating controls. Apple introduced it in 2025 and it goes beyond frosted glass.

**Period:** 2025–now · **Era:** Contemporary & Spatial · **Domain:** Graphic & UI Design · **Also called:** Apple Liquid Glass, Refractive glass UI, iOS 26 design

## When to load this skill

Load it when the user asks for: "liquid glass", "ios 26", "apple glass", "refractive", "frosted glass new", "floating toolbar", "visionos glass", "tahoe".

Good for: mobile and OS-style apps, media, photo and map apps, product pages of premium hardware, floating navigation and toolbars, spatial and visionOS apps.

Do not use it when:
- The content is long text with a plain background.
- The product must run on low-power or old browsers.
- Accessibility needs high contrast and reduced transparency.

## System directives

When generating UI or graphic layouts in Liquid Glass, you MUST:

1. Make a glass layer with backdrop blur of 16px to 40px, saturation of 160% to 200% and a tint of white or ground colour at 8% to 20% opacity.
2. Draw a specular edge: a 1px inner border of white at 40% to 60% on the top and left, and white at 10% on the bottom and right.
3. Nest corners in concentric order: the inner radius equals the outer radius minus the padding (for example 28px outer, 12px padding, 16px inner).
4. Float navigation and toolbars as pills of 56px to 64px height, with a 12px to 16px margin from the screen edge and no full-width bar.
5. Let glass shrink and expand: a bar of 64px collapses to 40px on scroll in 250ms with a spring.
6. Place glass only over rich content (photo, video, map); no more than 2 glass layers may overlap.
7. Use a solid fill for content cards and a glass fill for controls only, so that glass marks what you can act on.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Glass on glass stacked more than 2 layers.
- **NEVER:** Full-width opaque top bars.
- **NEVER:** Hard borders of 2px or more and flat outlines.
- **NEVER:** Glass behind long body text with low contrast.
- **NEVER:** Heavy drop shadows that make the control look like a card.
- **NEVER:** Square corners on floating controls.
- **NEVER:** Tinted glass that hides the content behind it.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■□□□` 2/5 | pure minimal | maximalist |
| Dimensionality | `■■■■□` 4/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■■□□` 3/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■■■□□` 3/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■■□□□` 2/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** Content fills the full screen; controls float as pills and circles on a 4px grid with 12px to 16px margins; a safe-area inset of 16px.
- **Whitespace ratio:** Content is edge to edge; 20% to 30% of the surface is clear glass over content; the spacing scale is 4, 8, 12, 16 and 24px.
- **Alignment rules:** Controls cluster at the bottom or top, centred or flush to the thumb zone; text inside glass is centred in pills and flush left in lists.
- **Container geometry:** Capsules and circles with radius 999px; cards at 24px to 36px; inner radius equals outer radius minus padding.

## Typography

- **Classifications:** neo-grotesque sans serif · system sans
- **Tracking:** Display takes -0.02em; body stays at 0; labels take +0.01em.
- **Leading:** Display 1.1; body 1.45.
- **Hierarchy rules:**
  - Use weights 400 for body, 600 for labels and 700 for titles.
  - Use sizes 13, 17, 28 and 34px.
  - Set text on glass in semibold with a 1px shadow of black at 12% for contrast.
  - Set tab and button labels at 10px to 13px in medium weight.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Inter | Inter | A close open match to the San Francisco system face. |
| Inter Tight | Inter | A tighter display for large titles. |
| Geist | Geist | A neutral single family that holds up on glass. |

## Colour & lighting

- **Palette structure:** The palette is the content behind the glass, with white as the glass tint and one system accent.
- **Contrast rules:** Text on glass holds at least 4.5:1 against the worst-case content behind it; add a 20% scrim where it does not.
- **Surface treatment:** Transparent, refractive glass: blur, saturation boost and a specular rim; no flat fill on controls.
- **Light and shadow:** Light comes from the top; the top-left edge shows a bright rim and the bottom-right edge a soft dark rim; a shadow of 0 8px 24px at 12% sits under floating controls.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Ground | `#F2F2F7` | background |
| Ink | `#111114` | text |
| Glass White | `#FFFFFF` | glass tint |
| Azure | `#0A84FF` | accent |
| Slate | `#5C5C66` | secondary text |
| Dusk | `#1C1C22` | dark ground |

## Materiality & texture

- **Surface simulation:** Clear, thick curved glass that refracts what is behind it.
- **Border rules:** A 1px specular rim: white at 40% to 60% on the lit edge; no solid border.
- **Blur and elevation:** Backdrop blur 16px to 40px; saturate 160% to 200%; shadow 0 8px 24px at 12%; two elevation levels only.

## Ornamentation & iconography

- **Iconography:** Solid or 2px-stroke icons with round caps in white or ink at 24px; icons sit on glass with no extra tile.
- **Illustration:** Full-bleed photography and colour fields behind the glass.
- **Decorative elements:** glass capsule · specular rim · concentric corner · floating toolbar

## Motion & interactivity

- **Born on screen:** yes
- **Transition physics:** Fluid and spring-like: glass morphs between shapes over 250ms to 400ms; controls expand and merge as a liquid; a highlight follows the pointer.
- **Easing:** cubic-bezier(0.34, 1.56, 0.64, 1)
- **Duration (ms):** 300
- **Hover and active:** Hover brightens the specular rim by 20% and lifts the capsule by 2px; active state compresses it to scale 0.96 and shows the tint.

## Code & token primer

Set `data-style="liquid-glass-ui"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="liquid-glass-ui"] {
  --color-bg: #F2F2F7;
  --color-surface: #FFFFFF;
  --color-text: #111114;
  --color-muted: #5C5C66;
  --color-primary: #0A84FF;
  --color-accent: #0A84FF;
  --color-border: #C7C7CC;
  --font-sans: "Inter", -apple-system, system-ui, sans-serif;
  --font-display: "Inter Tight", "Inter", -apple-system, system-ui, sans-serif;
  --border-radius: 28px;
  --border-width: 1px;
  --shadow-elevation: 0 8px 24px rgba(0,0,0,0.12);
  --backdrop-filter: blur(28px) saturate(180%);
  --space-unit: 4px;
  --ease: cubic-bezier(0.34, 1.56, 0.64, 1);
  --duration: 300ms;
  --type-ratio: 1.25;
  --size-small: 13.6px;
  --size-h3: 26.56px;
  --size-h2: 33.2px;
  --size-h1: 41.5px;
  --color-on-bg: #111114;
  --color-on-surface: #111114;
  --color-on-primary: #111114;
  --color-on-accent: #111114;
  --color-muted-on-bg: #5C5C66;
  --color-muted-on-surface: #5C5C66;
  --color-link: #111114;
  --color-link-on-surface: #111114;
  --display-weight: 700;
  --subhead-weight: 600;
  --body-weight: 400;
  --strong-weight: 600;
  --label-weight: 600;
  --display-tracking: -0.02em;
  --display-leading: 1.1;
  --display-case: none;
  --body-leading: 1.45;
  --body-size: 17px;
  --icon-stroke: 2;
  --ground: radial-gradient(circle at 84% 26%, color-mix(in oklab, var(--color-accent) 92%, transparent) 0 17vmin, transparent calc(17vmin + 1px)),
    radial-gradient(circle at 62% 86%, color-mix(in oklab, var(--color-primary) 85%, transparent) 0 12vmin, transparent calc(12vmin + 1px)),
    radial-gradient(circle at 98% 82%, color-mix(in oklab, var(--color-primary) 90%, transparent) 0 22vmin, transparent calc(22vmin + 1px)),
    radial-gradient(60% 70% at 80% 50%, color-mix(in oklab, var(--color-primary) 30%, transparent), transparent 70%),
    var(--color-bg);
}
```

Tailwind patterns:

| Element | Classes |
|---|---|
| page | `bg-[#F2F2F7] text-[#111114] font-sans antialiased` |
| heading | `text-5xl md:text-7xl font-bold tracking-[-0.02em] leading-[1.1] text-center` |
| body | `text-[17px] leading-[1.45]` |
| section | `rounded-[28px] border border-white/50 bg-white/15 p-3 backdrop-blur-[28px] backdrop-saturate-[180%] shadow-[0_8px_24px_rgba(0,0,0,0.12)]` |
| button | `rounded-full border border-white/50 bg-white/20 px-6 py-3 text-[15px] font-semibold text-[#111114] backdrop-blur-[28px] backdrop-saturate-[180%] transition-transform duration-300 active:scale-95` |
| label | `text-[11px] font-semibold` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** solid, stroke 2 on a 24px field, round caps, round joins, container: none. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Framework7 Icons (Regular) by Vladimir Kharlampidi, licence MIT. Reason: An iOS-style family with round forms and a medium weight that matches a system sans on glass. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 700, tracking -0.02em, leading 1.1, case: none.
- **Weights:** display 700, subhead 600, body 400, bold in text 600, labels and buttons 600. The style uses 3 weights (400, 600, 700) and no other. The display is 300 heavier than the body. The accent is weight: a heavier word is the accent, so the steps between the weights are clear.
- **Body type:** 17px, leading 1.45.
- **Page:** hero stacked, center aligned, airy density, accent tilt 0°.
- **Ground:** orbs. Liquid glass bends the colour behind it, so the ground holds bright shapes for the lens. Put the class `ground` on the first screen of the page; it takes `--ground`, a stack of gradients built from the colour tokens. The ground can run behind the copy, so put the class `ground-copy` on each text block of that screen: the block gets `--color-bg` and a soft edge. Keep the rest of the page on `--color-bg`.
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

### Backdrop blur (technology)

A translucent layer that blurs what is behind it, so that a panel reads as frosted glass over the content. Origin: graphic & ui design, United States, 2013.

- Blur the backdrop by 10 to 40 px.
- Give the panel a white or black tint of 10% to 40% opacity.
- Add a 1 px light edge at 20% to 50% opacity to show the edge of the glass.

## Media

The salons, schools, magazines, publishers, galleries and platforms that carried this style.

- **App Store** (platform, online, 2008–now), published the style. The store of Apple for iPhone and iPad apps. Apps and their icons follow the platform look of each era, from leather and glass to flat colour and Liquid Glass, and premium mobile games with a clean art style found a large public there.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Base colour (`base_colour`) | #0A84FF | #0A84FF, #111114 | --color-primary, --color-on-primary, --color-link-on-surface |
| Accent colour (`accent_colour`) | #0A84FF | #0A84FF, #111114 | --color-accent, --color-on-accent, --color-link |
| Corner radius (`corner_radius`) | 28px | 14–42 px | --border-radius |
| Grid step (`grid_step`) | 4px | 2–6 px | --space-unit, --grid-gutter |
| Type scale ratio (`type_scale_ratio`) | 1.25 | 1.2–1.333 | --type-ratio, --size-small, --size-h3, --size-h2, --size-h1 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **calmer**: move toward [`glassmorphism`](../glassmorphism/SKILL.md) (Glassmorphism). Return to a plain frost: blur 12px, one layer, a 1px white border at 20%; no specular rim.
- If the user asks for **flatter**: move toward [`flat-design`](../flat-design/SKILL.md) (Flat Design). Replace glass with solid fills and drop blur, rim and shadow.
- If the user asks for **more depth**: move toward [`spatial-visionos`](../spatial-visionos/SKILL.md) (Spatial UI (visionOS)). Add 3D tilt, a shadow on the ground plane and a 12px parallax.

- **Came from (go here for a more orthodox version):** [`glassmorphism`](../glassmorphism/SKILL.md), [`spatial-visionos`](../spatial-visionos/SKILL.md)
- **Rejects (the opposite pole; do not blend):** [`flat-design`](../flat-design/SKILL.md)
- **Mixes well with:** [`apple-aqua`](../apple-aqua/SKILL.md), [`ethereal-web`](../ethereal-web/SKILL.md)
- **Nearest by vector profile:** [`glassmorphism`](../glassmorphism/SKILL.md), [`ethereal-web`](../ethereal-web/SKILL.md), [`frutiger-aero`](../frutiger-aero/SKILL.md)

## Emotional target

The viewer feels that the interface is light, alive and almost a physical lens.

**Keywords:** fluid, light, refractive, alive, premium, floating · **Brand archetypes:** magician, creator

## Sources

- Example: Apple Newsroom, "Apple introduces a delightful and elegant new software design" (9 June 2025)
- Example: Apple Human Interface Guidelines, Materials and Liquid Glass
- Example: apple.com iOS 26 and macOS Tahoe product pages (2025)

---

Generated from [`data/design/styles/liquid-glass-ui.json`](../../data/design/styles/liquid-glass-ui.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
