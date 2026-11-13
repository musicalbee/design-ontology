---
name: spatial-visionos
description: "Apply the Spatial UI (visionOS) style (2023–present) when generating UI or graphic layouts. Load when the user asks for: visionos, vision pro, spatial ui, spatial computing, glass window, floating window."
domain: design
era: contemporary-spatial
triggers:
  - "visionos"
  - "vision pro"
  - "spatial ui"
  - "spatial computing"
  - "glass window"
  - "floating window"
  - "eye and pinch"
  - "mixed reality interface"
  - "volume and ornament"
vector_profile:
  ornamentation: 2
  dimensionality: 5
  grid_rigidity: 3
  skeuomorphic_realism: 4
  typographic_expressiveness: 2
---

# Spatial UI (visionOS)

> An interface in space should be a physical presence in the room, so it uses glass that takes light from the real scene and respects the person's field of view.

Translucent glass windows that float in the user's room at a set distance, lit by the surrounding scene and controlled by eye gaze and hand pinch. Apple introduced it with Vision Pro in 2023.

**Period:** 2023–present · **Era:** Contemporary & Spatial · **Domain:** Graphic & UI Design · **Also called:** visionOS Design, Spatial Computing UI, Glass Windows in Space

## When to load this skill

Load it when the user asks for: "visionos", "vision pro", "spatial ui", "spatial computing", "glass window", "floating window", "eye and pinch", "mixed reality interface", "volume and ornament".

Good for: Vision Pro apps, mixed-reality productivity tools, spatial media viewers, 3D product configurators, web marketing pages for spatial devices.

Do not use it when:
- The target is a flat screen with pointer input, because 60pt targets and 40px blur waste space and GPU time there.
- The environment is uncontrolled and the content needs a guaranteed contrast ratio, because the room shows through the glass.
- The user session is long and dense with text, because floating glass at 2 metres tires the eyes.

## System directives

When generating UI or graphic layouts in Spatial UI (visionOS), you MUST:

1. Make windows from a glass material that blends with the room behind it; a standard window is about 1280pt by 720pt at 2 metres distance.
2. Place content where the eyes rest, within a field of about 30 degrees, and avoid forcing head turns.
3. Make every target at least 60pt, with 16pt or more of spacing, because eye and pinch input is less precise than a mouse.
4. Show hover with a highlight on the gazed element, because the eyes are the cursor and the pinch is the click.
5. Use depth for meaning: lift a modal by 20pt to 40pt in front of its window with a soft shadow.
6. Use a corner radius of 24pt to 32pt on windows and a full capsule shape on buttons.
7. Set text in vibrant white or dark label colours that stay legible on glass, at 17pt or larger and weight 500 or more.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Opaque dark backgrounds that block the room.
- **NEVER:** Targets smaller than 44pt on an eye-and-pinch device.
- **NEVER:** Text below 17pt or below weight 400 on glass.
- **NEVER:** Hard black drop shadows and flat hard borders.
- **NEVER:** Content pinned to the head at a close distance, which causes eye strain.
- **NEVER:** Windows wider than the field of view, so that the edges need head turns.
- **NEVER:** Fast parallax or large moves toward the viewer.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■□□□` 2/5 | pure minimal | maximalist |
| Dimensionality | `■■■■■` 5/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■■□□` 3/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■■■■□` 4/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■■□□□` 2/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** Windows are flat planes of 1280pt by 720pt or larger placed at 1 to 3 metres; inside, a 12-column grid with 16pt to 24pt gutters holds content, and ornaments sit on the window edge.
- **Whitespace ratio:** 40–55% of the window stays open; the spacing scale is 8, 12, 16, 24, 32 and 48pt, and the minimum target gap is 16pt.
- **Alignment rules:** Content aligns to a window's inner padding of 24pt; toolbars float as ornaments at the bottom edge, offset 20pt outside the window; windows stay at eye level and are never above 30 degrees up.
- **Container geometry:** Windows have a 32pt radius; cards a 24pt radius; buttons are capsules of 44pt to 60pt height; 3D objects sit inside volumes that keep a 1:1:1 or 4:3 bounding box.

## Typography

- **Classifications:** neo-grotesque sans · geometric sans
- **Tracking:** Display sizes take 0.00em to -0.01em; body takes +0.01em; small captions take +0.02em for legibility on glass.
- **Leading:** Display 1.15; body 1.4; captions 1.35.
- **Hierarchy rules:**
  - Set the body at 17pt, the title at 28pt and the large title at 48pt; do not go below 12pt anywhere.
  - Use weight 500 or 600 for body and 700 for titles, because thin text vanishes on glass.
  - Use white text with vibrancy on glass at 100%, 60% and 40% opacity for primary, secondary and tertiary labels.
  - Centre short titles and left-align paragraphs; keep lines to 45 to 60 characters.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Inter | Inter | An open stand-in for SF Pro at weights 500, 600 and 700. |
| Plus Jakarta Sans | DM Sans | Rounder display forms that match the capsule buttons. |
| Manrope | Manrope | One family at weights 500 and 700, with strong stems for glass. |

## Colour & lighting

- **Palette structure:** A glass material in place of a background colour, white labels at three opacities, and one system tint for the primary action; the room supplies the rest of the colour.
- **Contrast rules:** Glass takes colour from the room, so contrast cannot be set in advance; use white labels with vibrancy and keep to 4.5:1 for text over the worst-case dark and bright rooms, and add a 30% scrim where the system material cannot reach it.
- **Surface treatment:** A system glass material of rgba(255, 255, 255, 0.15) with backdrop-filter blur(40px) saturate(180%); a specular edge gradient at the border adds the sense of a thick pane.
- **Light and shadow:** Windows take light from the real room and from a virtual light above; each window casts a soft shadow of 0 20px 60px rgba(0, 0, 0, 0.35) to the floor, and raised elements add a specular rim of 1px rgba(255, 255, 255, 0.4).

**Palette**

| Name | Hex | Role |
|---|---|---|
| Glass | `#FFFFFF` | window fill at 10% to 20% alpha |
| Label | `#FFFFFF` | primary text at 100% opacity |
| Label Dark | `#1C1C1E` | text on light glass |
| System Blue | `#0A84FF` | primary action tint |
| Hover Glow | `#FFFFFF` | gaze highlight at 20% alpha |
| Scrim | `#000000` | dimming layer at 30% alpha |

## Materiality & texture

- **Surface simulation:** Thick frosted glass that picks up the colour and light of the real room, with a specular rim and a soft shadow on the surfaces behind it.
- **Border rules:** 1px specular rim of rgba(255, 255, 255, 0.4) on the top and left edges, fading to 0.1 on the bottom and right; no solid borders; focus uses a 2pt white ring.
- **Blur and elevation:** Window blur of 40px; three depth levels: window at 0pt, modal at 20pt to 40pt in front and tooltip at 8pt in front, with shadows of 0 20px 60px, 0 12px 40px and 0 4px 16px.

## Ornamentation & iconography

- **Iconography:** Filled and outline symbols with a 2pt stroke at 24pt to 32pt inside 44pt to 60pt circular hit areas; symbols in white with vibrancy and one tinted active state.
- **Illustration:** Real 3D objects in volumes, with soft light, real shadows and 4:3 or 1:1 bounds; flat illustration appears only in windows.
- **Decorative elements:** specular rim · gaze highlight · ornament toolbar · 3D volume · soft floor shadow

## Motion & interactivity

- **Born on screen:** yes
- **Transition physics:** Springs with slight damping: windows scale from 0.95 to 1.0 and fade in over 400ms; a gazed element grows a highlight in 150ms; moves toward the viewer stay under 40pt to avoid discomfort.
- **Easing:** cubic-bezier(0.2, 0.8, 0.2, 1)
- **Duration (ms):** 400
- **Hover and active:** Gaze lights the target with a rgba(255, 255, 255, 0.2) fill and a 1.05 scale; pinch shows a 0.97 scale with a 0.3 alpha fill; release returns to rest over 200ms.

## Code & token primer

Set `data-style="spatial-visionos"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="spatial-visionos"] {
  --color-bg: #0F0F14;
  --color-surface: rgba(255, 255, 255, 0.15);
  --color-text: #FFFFFF;
  --color-muted: rgba(255, 255, 255, 0.6);
  --color-primary: #0A84FF;
  --color-accent: #0A84FF;
  --color-border: rgba(255, 255, 255, 0.25);
  --font-sans: "Inter", system-ui, sans-serif;
  --font-display: "Plus Jakarta Sans", "Inter", system-ui, sans-serif;
  --border-radius: 32px;
  --border-width: 1px;
  --shadow-elevation: 0 20px 60px rgba(0, 0, 0, 0.35);
  --backdrop-filter: blur(40px) saturate(180%);
  --space-unit: 8px;
  --ease: cubic-bezier(0.2, 0.8, 0.2, 1);
  --duration: 400ms;
  --target-min: 60px;
  --hover-fill: rgba(255, 255, 255, 0.2);
  --color-on-bg: #FFFFFF;
  --color-on-surface: #FFFFFF;
  --color-on-primary: #0F0F14;
  --color-on-accent: #0F0F14;
  --color-muted-on-bg: #9F9FA1;
  --color-muted-on-surface: #ADADAF;
  --color-link: #0A84FF;
  --color-link-on-surface: #FFFFFF;
  --display-weight: 600;
  --display-tracking: -0.02em;
  --display-leading: 1.1;
  --display-case: none;
  --body-leading: 1.5;
  --body-size: 17px;
  --icon-stroke: 1.5;
}
```

Tailwind patterns:

| Element | Classes |
|---|---|
| page | `min-h-screen bg-[#0F0F14] text-white font-sans antialiased p-8` |
| window | `rounded-[32px] border border-white/25 bg-white/15 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-[40px] backdrop-saturate-[1.8]` |
| button | `h-[60px] rounded-full bg-white/15 px-8 text-[17px] font-semibold text-white transition duration-[150ms] hover:scale-105 hover:bg-white/20 active:scale-[0.97] active:bg-white/30` |
| ornament | `flex gap-4 rounded-full border border-white/25 bg-white/15 p-3 shadow-[0_12px_40px_rgba(0,0,0,0.3)] backdrop-blur-[40px]` |
| heading | `font-bold text-5xl leading-[1.15] text-white` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** outline, stroke 1.5 on a 24px field, round caps, round joins, container: circle. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Framework7 Icons (Regular) by Vladimir Kharlampidi, licence MIT. Reason: Thin, round system glyphs in the platform manner, made for a round glass container. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 600, tracking -0.02em, leading 1.1, case: none.
- **Body type:** 17px, leading 1.5.
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

- If the user asks for **more readable**: move toward [`flat-design`](../flat-design/SKILL.md) (Flat Design). Make the window fill rgba(28, 28, 30, 0.85) with a blur of 12px; keep the 32pt radius and the 60pt targets.
- If the user asks for **more tangible**: move toward [`skeuomorphism`](../skeuomorphism/SKILL.md) (Skeuomorphism). Add a 135-degree gloss gradient, a 1px inner highlight and real material textures on volumes; keep the glass windows.
- If the user asks for **flatter and lighter**: move toward [`glassmorphism`](../glassmorphism/SKILL.md) (Glassmorphism). Drop the depth levels and the eye-tracking highlight, and use a 16px blur panel over a gradient; keep the capsule buttons.
- If the user asks for **more modular**: move toward [`bento-grid-ui`](../bento-grid-ui/SKILL.md) (Bento Grid UI). Divide the window into rounded cells with a 16pt gap and a 24pt radius; keep the glass fill and the 60pt targets.

- **Came from (go here for a more orthodox version):** [`glassmorphism`](../glassmorphism/SKILL.md)
- **Mixes well with:** [`skeuomorphism`](../skeuomorphism/SKILL.md)
- **Nearest by vector profile:** [`frutiger-aero`](../frutiger-aero/SKILL.md), [`glassmorphism`](../glassmorphism/SKILL.md), [`neumorphism`](../neumorphism/SKILL.md)

## Emotional target

Calm presence: the viewer feels that the interface shares the room with them and does not take it over.

**Keywords:** spatial, luminous, calm, immersive, tactile, weightless · **Brand archetypes:** magician, explorer

## Sources

- Human Interface Guidelines: Designing for visionOS, Apple Inc. (2023)
- Apple Vision Pro announcement, Apple Newsroom (2023)

---

Generated from [`data/design/styles/spatial-visionos.json`](../../data/design/styles/spatial-visionos.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
