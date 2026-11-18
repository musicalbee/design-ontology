---
name: material-design
description: "Apply the Material Design style (2014–present) when generating UI or graphic layouts. Load when the user asks for: material design, material ui, google material, elevation, floating action button, fab."
domain: design
era: touchscreen
triggers:
  - "material design"
  - "material ui"
  - "google material"
  - "elevation"
  - "floating action button"
  - "fab"
  - "android style"
  - "ripple effect"
  - "app bar"
  - "paper and ink"
  - "md2"
vector_profile:
  ornamentation: 2
  dimensionality: 3
  grid_rigidity: 4
  skeuomorphic_realism: 2
  typographic_expressiveness: 2
---

# Material Design

> Digital surfaces behave like sheets of paper with thickness and shadow, so that depth and motion explain the hierarchy of the interface.

A system of flat coloured surfaces that sit at defined elevations and cast shadows from a top-left key light, with bold colour, an 8dp grid and purposeful motion. Google announced it at I/O in June 2014.

**Period:** 2014–present · **Era:** Touchscreen · **Domain:** Graphic & UI Design · **Also called:** Material, Google Material, Material 2

## When to load this skill

Load it when the user asks for: "material design", "material ui", "google material", "elevation", "floating action button", "fab", "android style", "ripple effect", "app bar", "paper and ink", "md2".

Good for: Android applications, admin dashboards, web apps with many components, design systems, productivity tools.

Do not use it when:
- The brand needs a distinct voice, because the default look is recognisably Google.
- The page is editorial and has few interactive components.
- The design needs a pure 2D look with no shadow at all.

## System directives

When generating UI or graphic layouts in Material Design, you MUST:

1. Treat every surface as a sheet of paper of 1dp thickness that never bends, never changes size by stretching and never passes through another surface.
2. Express hierarchy with elevation in dp: 0 for the page, 1 for cards, 4 for the app bar, 6 for a floating button at rest, 8 for a menu, 16 for a navigation drawer and 24 for a dialog.
3. Build every layout on an 8dp grid, with 4dp for small type and icon alignment, and 48dp touch targets.
4. Use bold colour from a primary and an accent hue, with the status bar in the 700 shade of the primary and the app bar in the 500 shade.
5. Use large type with a defined scale of 12, 14, 16, 20, 34, 45 and 56sp in Roboto.
6. Give every touch a response: a circular ripple that grows from the touch point over 300ms.
7. Move elements along curved paths with an ease that starts fast and ends slow, and make each motion explain where an element came from.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Gradients and textures on surfaces.
- **NEVER:** Shadows with no consistent elevation level or with different light directions.
- **NEVER:** Surfaces that overlap at the same elevation.
- **NEVER:** Touch targets under 48dp.
- **NEVER:** Colour text on a coloured background below 4.5:1.
- **NEVER:** Instant state changes with no motion or ripple feedback.
- **NEVER:** More than one floating action button on a screen.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■□□□` 2/5 | pure minimal | maximalist |
| Dimensionality | `■■■□□` 3/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■■■□` 4/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■■□□□` 2/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■■□□□` 2/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** An 8dp baseline grid, 4dp for icons and type, a 4-column phone grid with 16dp margins, an 8-column tablet grid with 24dp margins and a 12-column desktop grid; the app bar is 56dp on a phone and 64dp on desktop.
- **Whitespace ratio:** 25–40% of the surface stays empty; the spacing scale is 4, 8, 16, 24, 32, 48, 56dp, with 16dp of card padding.
- **Alignment rules:** Content aligns to a 72dp keyline from the left edge on lists with avatars and to a 16dp keyline otherwise; the floating action button sits 16dp from the right and bottom edges.
- **Container geometry:** Cards and buttons use a 2dp corner radius; floating action buttons are 56dp circles and mini buttons are 40dp; dialogs are 280dp wide at the minimum.

## Typography

- **Classifications:** neo-grotesque sans serif · humanist sans serif
- **Tracking:** Display sizes of 34sp and larger take 0em to -0.01em; body takes +0.01em; buttons are upper case at +0.09em.
- **Leading:** Headlines 1.2; body 1.4 to 1.5 at 14sp over a 20dp line; list text 24dp for 16sp.
- **Hierarchy rules:**
  - Use the scale 12, 14, 16, 20, 34, 45 and 56sp and no sizes between those values.
  - Use medium (500) for titles and buttons, regular (400) for body and light (300) for display sizes of 45sp and above.
  - Set text on a surface at 87% black for primary, 54% black for secondary and 38% black for disabled.
  - Set button labels in upper case at 14sp and weight 500.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Roboto | Roboto | The system typeface of Material 1 and 2, used in a single family from weight 300 to 900. |
| Roboto Condensed | Roboto | A condensed display face for dense headers with the standard text face. |
| Noto Sans | Noto Sans | The fallback family for non-Latin scripts in the same weights and metrics. |

## Colour & lighting

- **Palette structure:** One primary hue with its 500 and 700 shades, one accent hue from the A200 to A400 range, and neutral greys; the primary hue covers the app bar and 10 to 20% of the surface.
- **Contrast rules:** Body text holds at least 4.5:1 and large text at least 3:1; white text on Indigo 500 reaches 7.5:1 and on Pink A200 reaches 3.4:1, which is enough for 18sp text only.
- **Surface treatment:** Opaque flat fills of solid colour with no gradient and no texture; scrims use black at 32% opacity behind dialogs.
- **Light and shadow:** A key light from the top and a soft ambient light; each shadow has a penumbra, an umbra and an ambient layer, and its blur and offset grow with elevation.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Surface | `#FFFFFF` | card and sheet surface |
| Background | `#FAFAFA` | page background |
| Indigo 500 | `#3F51B5` | primary and app bar |
| Indigo 700 | `#303F9F` | status bar |
| Pink A200 | `#FF4081` | accent and floating action button |
| Grey 900 | `#212121` | text at 87% opacity |

## Materiality & texture

- **Surface simulation:** Digital paper: a flat sheet of 1dp thickness that casts a shadow but has no grain, no bevel and no texture.
- **Border rules:** Surfaces have no outline; dividers are 1px black at 12% opacity inset 72dp or 16dp from the edge; text fields take a 1px bottom line that grows to 2px on focus.
- **Blur and elevation:** Elevation shadows are 0 1px 3px at 20% plus 0 1px 1px at 14% for 1dp, 0 4px 5px at 14% and 0 1px 10px at 12% for 4dp, and 0 9px 12px at 14% for 12dp; the system has 25 levels from 0 to 24dp.

## Ornamentation & iconography

- **Iconography:** System icons of 24dp on a 20dp live area with a 2dp stroke weight, square terminals with 2dp rounded corners, solid fill and one colour at 54% black.
- **Illustration:** Flat vector shapes in the palette and full-bleed photography under a 20 to 40% scrim; no outline and no perspective.
- **Decorative elements:** floating action button · ripple · elevation shadows · colour-block app bar · full-bleed hero image · card

## Motion & interactivity

- **Born on screen:** yes
- **Transition physics:** Surfaces move along the Z axis and the screen plane with curved paths; elements accelerate fast and slow down softly, and a shared element travels from its origin to its destination.
- **Easing:** cubic-bezier(0.4, 0, 0.2, 1)
- **Duration (ms):** 300
- **Hover and active:** Hover adds a 4% black overlay; press shows a ripple of 12% black growing from the touch point over 300ms; a raised button lifts from 2dp to 8dp on press.

## Code & token primer

Set `data-style="material-design"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="material-design"] {
  --color-bg: #FAFAFA;
  --color-surface: #FFFFFF;
  --color-text: rgba(0, 0, 0, 0.87);
  --color-muted: rgba(0, 0, 0, 0.54);
  --color-primary: #3F51B5;
  --color-accent: #FF4081;
  --color-border: rgba(0, 0, 0, 0.12);
  --font-sans: "Roboto", "Noto Sans", "Helvetica Neue", Arial, sans-serif;
  --font-display: "Roboto", "Noto Sans", "Helvetica Neue", Arial, sans-serif;
  --border-radius: 2px;
  --border-width: 1px;
  --shadow-elevation: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);
  --backdrop-filter: none;
  --space-unit: 8px;
  --ease: cubic-bezier(0.4, 0, 0.2, 1);
  --duration: 300ms;
  --color-primary-dark: #303F9F;
  --shadow-1dp: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);
  --shadow-24dp: 0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12);
  --touch-target: 48px;
  --color-on-bg: #212121;
  --color-on-surface: #212121;
  --color-on-primary: #FAFAFA;
  --color-on-accent: #212121;
  --color-muted-on-bg: #737373;
  --color-muted-on-surface: #757575;
  --color-link: #3F51B5;
  --color-link-on-surface: #3F51B5;
  --display-weight: 300;
  --subhead-weight: 500;
  --body-weight: 400;
  --strong-weight: 500;
  --label-weight: 500;
  --display-tracking: 0em;
  --display-leading: 1.15;
  --display-case: none;
  --body-leading: 1.5;
  --body-size: 16px;
  --icon-stroke: 2;
}
```

Tailwind patterns:

| Element | Classes |
|---|---|
| page | `min-h-screen bg-[#FAFAFA] font-sans text-black/[0.87] antialiased` |
| app-bar | `flex h-14 md:h-16 items-center bg-[#3F51B5] px-4 text-xl font-medium text-white shadow-[0_2px_4px_-1px_rgba(0,0,0,0.2),0_4px_5px_0_rgba(0,0,0,0.14),0_1px_10px_0_rgba(0,0,0,0.12)]` |
| card | `rounded-sm bg-white p-4 shadow-[0_1px_3px_0_rgba(0,0,0,0.2),0_1px_1px_0_rgba(0,0,0,0.14),0_2px_1px_-1px_rgba(0,0,0,0.12)]` |
| button | `h-9 min-w-[64px] rounded-sm bg-[#3F51B5] px-4 text-sm font-medium uppercase tracking-[0.09em] text-white shadow-md transition-shadow duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:shadow-lg active:shadow-xl` |
| fab | `h-14 w-14 rounded-full bg-[#FF4081] text-white shadow-[0_3px_5px_-1px_rgba(0,0,0,0.2),0_6px_10px_0_rgba(0,0,0,0.14),0_1px_18px_0_rgba(0,0,0,0.12)]` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** solid, stroke 2 on a 24px field, butt caps, round joins, container: none. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Material Symbols (Baseline, filled) by Google, licence Apache 2.0. Reason: The filled system set of the style itself, on its 24dp grid. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 300, tracking 0em, leading 1.15, case: none.
- **Weights:** display 300, subhead 500, body 400, bold in text 500, labels and buttons 500. The style uses 3 weights (300, 400, 500) and no other. The display is 100 lighter than the body, so size carries the hierarchy. The accent is weight: a heavier word is the accent, so the steps between the weights are clear.
- **Body type:** 16px, leading 1.5.
- **Page:** hero split, left aligned, regular density, accent tilt 0°.
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

### Easing (animation)

A move speeds up from rest and slows down before it stops, as a real mass does, instead of a constant speed. Origin: film & video, Disney studio, Los Angeles, c. 1930.

- Give a move of 200 to 400ms an ease-out curve when an element enters and an ease-in curve when it leaves.
- Use cubic-bezier(0.4, 0, 0.2, 1) as the standard curve for a move inside the screen.
- Put more frames at the two ends of a move than in the middle: 2 to 3 times the density.

### Match cut (montage)

A cut between two shots whose main forms have the same shape, position or movement, so that the eye carries one form across the cut. Origin: film & video, 2001: A Space Odyssey, 1968.

- Match the shape, the position and the scale of the main form across the cut within 10% of the frame width.
- In an interface, move the shared element from its old box to its new box in 250 to 350ms while the rest of the screen fades.

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **flatter**: move toward [`flat-design`](../flat-design/SKILL.md) (Flat Design). Remove all elevation shadows, separate surfaces by colour only, and keep the colour palette and the 8dp grid.
- If the user asks for **more tactile**: move toward [`skeuomorphism`](../skeuomorphism/SKILL.md) (Skeuomorphism). Add a 5 to 10% gradient, a 1px inner highlight and a surface texture at 5% opacity; keep the elevation and the layout.
- If the user asks for **more illustrated**: move toward [`corporate-memphis`](../corporate-memphis/SKILL.md) (Corporate Memphis). Replace photographs with flat illustrated people and a 4-hue palette; keep the app bar, cards and the type scale.
- If the user asks for **more minimal**: move toward [`swiss-international`](../swiss-international/SKILL.md) (Swiss International Style). Remove the app bar colour, the floating button and the shadows; set one typeface flush left on a 12-column grid with one accent.

- **Came from (go here for a more orthodox version):** [`flat-design`](../flat-design/SKILL.md)
- **Was rejected by:** [`anti-design`](../anti-design/SKILL.md), [`brutalist-web`](../brutalist-web/SKILL.md), [`neo-brutalism-ui`](../neo-brutalism-ui/SKILL.md), [`terminal-tui-web`](../terminal-tui-web/SKILL.md)
- **Mixes well with:** [`skeuomorphism`](../skeuomorphism/SKILL.md)
- **Nearest by vector profile:** [`aurora-gradient-ui`](../aurora-gradient-ui/SKILL.md), [`glassmorphism`](../glassmorphism/SKILL.md), [`bauhaus`](../bauhaus/SKILL.md)

## Emotional target

Confidence and responsiveness: the viewer feels that every action has a physical-looking cause and a clear effect.

**Keywords:** bold, layered, responsive, systematic, colourful, approachable · **Brand archetypes:** everyman, hero, creator

## Sources

- Google, Material Design specification (Google, 2014)
- Google, Material Design 2 guidelines (Google, 2018)

---

Generated from [`data/design/styles/material-design.json`](../../data/design/styles/material-design.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
