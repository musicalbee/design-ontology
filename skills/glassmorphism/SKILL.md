---
name: glassmorphism
description: "Apply the Glassmorphism style (2020–present) when generating UI or graphic layouts. Load when the user asks for: glassmorphism, frosted glass, glass ui, translucent panels, backdrop blur, blurred background card."
domain: design
era: contemporary-spatial
triggers:
  - "glassmorphism"
  - "frosted glass"
  - "glass ui"
  - "translucent panels"
  - "backdrop blur"
  - "blurred background card"
  - "acrylic"
  - "vibrancy"
  - "big sur style"
vector_profile:
  ornamentation: 2
  dimensionality: 3
  grid_rigidity: 3
  skeuomorphic_realism: 3
  typographic_expressiveness: 2
---

# Glassmorphism

> Layers are readable when each one is a pane of frosted glass: it shows what lies beneath it and still keeps its own plane.

Translucent panels that blur the colourful shapes behind them, edged with a thin light border. It spread after macOS Big Sur in 2020 and revives the glass of Frutiger Aero with real backdrop blur.

**Period:** 2020–present · **Era:** Contemporary & Spatial · **Domain:** Graphic & UI Design · **Also called:** Frosted Glass UI, Glass UI

## When to load this skill

Load it when the user asks for: "glassmorphism", "frosted glass", "glass ui", "translucent panels", "backdrop blur", "blurred background card", "acrylic", "vibrancy", "big sur style".

Good for: music and media players, weather apps, crypto and fintech dashboards, landing pages for SaaS, OS-level widgets.

Do not use it when:
- Text-heavy screens need guaranteed 4.5:1 contrast, because the layer behind the glass changes under the text.
- The target device is low-end, because backdrop-filter blur of 16px costs frame rate on weak GPUs.
- The background is plain, because blur on a flat colour shows nothing and the panels look dirty.

## System directives

When generating UI or graphic layouts in Glassmorphism, you MUST:

1. Place panels over a vivid background of gradients or blurred shapes, because blur needs colour behind it to be visible.
2. Fill each panel with rgba(255, 255, 255, 0.15) to 0.25 and apply backdrop-filter: blur(16px to 24px) saturate(160%).
3. Add a 1px border of rgba(255, 255, 255, 0.3) on every panel, to mark the glass edge.
4. Use radii of 16px to 24px on panels and 12px on buttons.
5. Show depth by stacking: the further layer has a blur of 24px and the nearer layer a blur of 8px.
6. Keep one soft shadow of 0 8px 32px rgba(31, 38, 135, 0.2) under each panel, to lift it from the background.
7. Put text on a panel only when the area under it holds at least 4.5:1 contrast, or add a scrim of rgba(0, 0, 0, 0.25).

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Blur on a plain white or plain grey background where nothing shows through.
- **NEVER:** Body text on a panel with less than 4.5:1 contrast to the blurred layer behind.
- **NEVER:** Opaque panels with a faked frost texture and no backdrop-filter.
- **NEVER:** Stacks of more than three overlapping glass layers.
- **NEVER:** Panel borders thicker than 1px or darker than the fill.
- **NEVER:** Hard black drop shadows under a glass panel.
- **NEVER:** Blur radii above 40px on large areas, which cost frame rate.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■□□□` 2/5 | pure minimal | maximalist |
| Dimensionality | `■■■□□` 3/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■■□□` 3/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■■■□□` 3/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■■□□□` 2/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** A 12-column grid with 24px gutters; panels span whole columns and overlap background shapes by 10% to 30% of their area.
- **Whitespace ratio:** 35–50% of the surface is open; the spacing scale is 8, 12, 16, 24, 32 and 48px, and panel padding is 24px.
- **Alignment rules:** Left-aligned text inside panels; panels align to columns while the background shapes sit off-grid, so the glass reads as a separate plane.
- **Container geometry:** Panels use a 20px radius with a 1px light border; buttons use a 12px radius; avatars and chips use a full radius of 999px.

## Typography

- **Classifications:** geometric sans · neo-grotesque sans
- **Tracking:** Display sizes take -0.02em; body stays at 0; small labels take +0.02em.
- **Leading:** Display 1.15; body 1.5; labels 1.3.
- **Hierarchy rules:**
  - Use weight 600 or higher for text over glass, because weight 300 breaks up against a blurred background.
  - Set body text at 16px or larger and headings at 32px or larger on panels.
  - Use white text on dark backgrounds and near-black text on light ones; do not mix both on one panel.
  - Add a text-shadow of 0 1px 2px rgba(0, 0, 0, 0.25) only to white text over a bright patch.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Plus Jakarta Sans | Inter | Friendly display weights over a neutral text face. |
| Manrope | Manrope | One family at weights 400, 600 and 800. |
| Outfit | DM Sans | Geometric display with round counters that match the panel radius. |

## Colour & lighting

- **Palette structure:** A saturated two or three hue gradient background, white translucent panels at 15% to 25% opacity, and one solid accent for the main action.
- **Contrast rules:** Glass cannot guarantee contrast, because the layer behind changes; test the worst patch of the background and reach 4.5:1 for text, with a rgba(0, 0, 0, 0.25) scrim where it falls short, and give each control a solid state for WCAG 3:1.
- **Surface treatment:** Translucent fill of rgba(255, 255, 255, 0.15 to 0.25) with backdrop-filter blur(16px to 24px) and saturate(160%); an optional noise overlay at 3% opacity adds grain.
- **Light and shadow:** Light comes from the top left: a 1px inner highlight on the top and left edges of rgba(255, 255, 255, 0.5) and a soft shadow of 0 8px 32px rgba(31, 38, 135, 0.2).

**Palette**

| Name | Hex | Role |
|---|---|---|
| Aurora Violet | `#6C5CE7` | background gradient start |
| Aurora Pink | `#FD79A8` | background gradient end |
| Glass White | `#FFFFFF` | panel fill at 15% to 25% alpha and border |
| Deep Ink | `#1B1B3A` | text on light glass |
| Sky | `#74B9FF` | accent |
| Midnight | `#0F0F2D` | dark mode background |

## Materiality & texture

- **Surface simulation:** Frosted glass, a thin sheet that scatters the light behind it and shows its own edge.
- **Border rules:** 1px solid rgba(255, 255, 255, 0.3) on all sides; a brighter 1px edge of 0.5 alpha on the top; no coloured borders.
- **Blur and elevation:** Background blur of 16px to 24px with saturate(160%); three levels: 8px blur for a toast, 16px for a card and 24px for a sheet, with shadows of 0 4px 16px, 0 8px 32px and 0 16px 48px.

## Ornamentation & iconography

- **Iconography:** Outline icons with a 1.5px to 2px stroke and round caps at 24px, in white at 90% opacity; filled variants for the active state.
- **Illustration:** Blurred gradient orbs and abstract 3D shapes placed behind the panels, so that the blur shows colour changes.
- **Decorative elements:** gradient orbs · noise grain · inner top highlight · layered panels

## Motion & interactivity

- **Born on screen:** yes
- **Transition physics:** Panels fade and rise by 8px to 16px while the blur radius eases from 0 to its final value, as if the glass slides into focus; no bounce.
- **Easing:** cubic-bezier(0.22, 1, 0.36, 1)
- **Duration (ms):** 300
- **Hover and active:** Hover raises the fill alpha from 0.2 to 0.3 and lifts the panel by 2px; active drops the alpha to 0.15 and the lift to 0; focus adds a 2px solid #FFFFFF ring.

## Code & token primer

Set `data-style="glassmorphism"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="glassmorphism"] {
  --color-bg: #6C5CE7;
  --color-surface: rgba(255, 255, 255, 0.18);
  --color-text: #FFFFFF;
  --color-muted: rgba(255, 255, 255, 0.72);
  --color-primary: #74B9FF;
  --color-accent: #FD79A8;
  --color-border: rgba(255, 255, 255, 0.3);
  --font-sans: "Inter", system-ui, sans-serif;
  --font-display: "Plus Jakarta Sans", "Inter", system-ui, sans-serif;
  --border-radius: 20px;
  --border-width: 1px;
  --shadow-elevation: 0 8px 32px rgba(31, 38, 135, 0.2);
  --backdrop-filter: blur(20px) saturate(160%);
  --space-unit: 8px;
  --ease: cubic-bezier(0.22, 1, 0.36, 1);
  --duration: 300ms;
  --surface-hover: rgba(255, 255, 255, 0.28);
  --background-gradient: linear-gradient(135deg, #6C5CE7 0%, #FD79A8 100%);
  --color-on-bg: #FFFFFF;
  --color-on-surface: #000000;
  --color-on-primary: #000000;
  --color-on-accent: #000000;
  --color-muted-on-bg: #FFFFFF;
  --color-muted-on-surface: #1B182F;
  --color-link: #FFFFFF;
  --color-link-on-surface: #000000;
  --display-weight: 700;
  --display-tracking: -0.02em;
  --display-leading: 1.05;
  --display-case: none;
  --body-leading: 1.55;
  --body-size: 16px;
  --icon-stroke: 1.5;
}
```

Tailwind patterns:

| Element | Classes |
|---|---|
| page | `min-h-screen bg-gradient-to-br from-[#6C5CE7] to-[#FD79A8] font-sans text-white antialiased p-8` |
| card | `rounded-[20px] border border-white/30 bg-white/[0.18] p-6 shadow-[0_8px_32px_rgba(31,38,135,0.2)] backdrop-blur-[20px] backdrop-saturate-[1.6]` |
| button | `rounded-xl border border-white/30 bg-white/20 px-5 py-3 font-semibold text-white backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:bg-white/30` |
| input | `rounded-xl border border-white/30 bg-white/10 px-4 py-3 text-white placeholder:text-white/70 backdrop-blur-md focus:outline-2 focus:outline-white` |
| heading | `font-extrabold text-4xl leading-tight tracking-[-0.02em]` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** outline, stroke 1.5 on a 24px field, round caps, round joins, container: rounded. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Solar (Linear) by 480 Design, licence CC BY 4.0. Reason: A light round line that stays legible on a blurred, bright surface. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 700, tracking -0.02em, leading 1.05, case: none.
- **Body type:** 16px, leading 1.55.
- **Page:** hero stacked, center aligned, regular density, accent tilt 0°.
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

- If the user asks for **more readable**: move toward [`flat-design`](../flat-design/SKILL.md) (Flat Design). Raise the panel fill to rgba(255, 255, 255, 0.85) and cut the blur to 8px; keep the 20px radius and the 1px border.
- If the user asks for **softer**: move toward [`neumorphism`](../neumorphism/SKILL.md) (Neumorphism). Replace the border with the dual shadow 8px 8px 16px and -8px -8px 16px on a single neutral surface; keep the radius.
- If the user asks for **more tangible**: move toward [`skeuomorphism`](../skeuomorphism/SKILL.md) (Skeuomorphism). Add a 1px inner highlight, a glossy 135-degree gradient of 12% lightness and a deeper 0 16px 48px shadow; keep the blur.
- If the user asks for **bolder**: move toward [`neo-brutalism-ui`](../neo-brutalism-ui/SKILL.md) (Neo-Brutalism UI). Replace the blur and the soft border with a solid fill, a 3px black border and a 4px 4px 0 0 #000000 shadow.

- **Came from (go here for a more orthodox version):** [`frutiger-aero`](../frutiger-aero/SKILL.md)
- **Led to (go here for a newer version):** [`spatial-visionos`](../spatial-visionos/SKILL.md)
- **Mixes well with:** [`bento-grid-ui`](../bento-grid-ui/SKILL.md), [`neumorphism`](../neumorphism/SKILL.md), [`y2k-aesthetic`](../y2k-aesthetic/SKILL.md)
- **Nearest by vector profile:** [`material-design`](../material-design/SKILL.md), [`neumorphism`](../neumorphism/SKILL.md), [`frutiger-aero`](../frutiger-aero/SKILL.md)

## Emotional target

Light, airy depth: the viewer feels that the interface floats above a living background and is easy to see through.

**Keywords:** translucent, airy, layered, luminous, fluid, polished · **Brand archetypes:** magician, creator

## Sources

- Michal Malewicz, Glassmorphism in user interfaces, Hype4 Academy (2020)
- backdrop-filter, CSS Filter Effects Module Level 2, W3C

---

Generated from [`data/design/styles/glassmorphism.json`](../../data/design/styles/glassmorphism.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
