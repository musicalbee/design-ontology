---
name: 3d-avatar-emoji
description: "Apply the 3D Avatar Emoji style (2017–now) when generating web pages, apps, memes, short video frames and other images of internet culture. Load when the user asks for: animoji, memoji, 3d emoji, avatar emoji, face tracking, talking head emoji."
domain: internet
era: touchscreen
triggers:
  - "animoji"
  - "memoji"
  - "3d emoji"
  - "avatar emoji"
  - "face tracking"
  - "talking head emoji"
  - "3d avatar"
vector_profile:
  ornamentation: 2
  dimensionality: 5
  grid_rigidity: 3
  skeuomorphic_realism: 3
  typographic_expressiveness: 2
---

# 3D Avatar Emoji

> The emoji copies the face of the sender: a mask with a voice, not a fixed picture.

A rendered 3D head, an animal or a user cartoon, that copies the face of the user in real time. Apple showed Animoji with the iPhone X in 2017, and Memoji followed in 2018.

**Period:** 2017–now · **Era:** Touchscreen · **Domain:** Internet · **Also called:** Animoji, Memoji, Face-tracked emoji, 3D emoji

## When to load this skill

Load it when the user asks for: "animoji", "memoji", "3d emoji", "avatar emoji", "face tracking", "talking head emoji", "3d avatar".

Good for: messaging and video call masks, creator avatars for short video, friendly onboarding with a talking mascot, kids and family apps.

Do not use it when:
- The device has no depth camera or face tracking.
- The brand needs a formal tone.
- The user cannot show the face, for privacy reasons.

## System directives

When generating web pages, apps, memes, short video frames and other images of internet culture in 3D Avatar Emoji, you MUST:

1. Render a round head with a 1:1 ratio, a diameter of 120px to 240px, and soft studio light from the top left.
2. Use a clay-like surface with a roughness of 0.6 and no visible texture; keep colours flat and bright.
3. Make the eyes 12% of the head width, glossy, with one 4px highlight at the top right.
4. Copy the face of the user at 60 fps: eyebrows, eyelids, jaw and mouth corners map to the head.
5. Cast a soft contact shadow of 24px blur at 18% opacity under the head on a pale violet ground.
6. Offer the head in a grid of 4 columns with 16px gutters and a record button of 64px at the base.
7. Limit a recorded clip to 10 seconds and export it at 30 fps.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Flat 2D faces with no depth.
- **NEVER:** Realistic skin pores and photographic light.
- **NEVER:** A fixed pose with no face tracking.
- **NEVER:** Dark, heavy shadows.
- **NEVER:** Uncanny, human-like proportions.
- **NEVER:** Busy backgrounds behind the head.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■□□□` 2/5 | pure minimal | maximalist |
| Dimensionality | `■■■■■` 5/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■■□□` 3/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■■■□□` 3/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■■□□□` 2/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** A picker grid of 4 columns with 16px gutters; the live head sits in a 1:1 frame at the top, with the controls at the base.
- **Whitespace ratio:** 35% to 45% of the surface stays empty; the spacing scale is 8, 16, 24 and 40px.
- **Alignment rules:** The head is centred in its frame; controls are centred at the base with a 24px gap.
- **Container geometry:** Cards and the record button with a 24px radius or a full circle; the head sits in a circle or a squircle.

## Typography

- **Classifications:** rounded geometric sans · neo-grotesque sans
- **Tracking:** Display 0em; body 0em.
- **Leading:** Display 1.15; body 1.6.
- **Hierarchy rules:** Set the display line at 32px to 48px in 700 weight. · Keep body text at 16px and labels at 12px in 600 weight. · Let the head be the largest element on the screen.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Quicksand | Inter | A round geometric face echoes the soft forms of the head. |
| Nunito | Inter | A warmer rounded face for a sticker-like pack. |

## Colour & lighting

- **Palette structure:** A pale violet field with one violet and one orange; the head supplies bright, flat colour.
- **Contrast rules:** Deep indigo on lilac holds 15:1; violet and orange fill shapes and buttons, with indigo or white text as the contrast needs.
- **Surface treatment:** Smooth flat fields; the head carries the depth and the soft light.
- **Light and shadow:** A soft top-left key light and a faint rim light; a contact shadow of 24px blur at 18% opacity.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Lilac Ground | `#F4F2FF` | background |
| Card White | `#FFFFFF` | surface |
| Deep Indigo | `#1B1736` | text |
| Avatar Violet | `#7B5CFF` | primary |
| Avatar Orange | `#FF9F43` | accent |
| Dusk | `#5A5578` | muted text |
| Mist | `#D9D3F5` | border |

## Materiality & texture

- **Surface simulation:** Soft clay or vinyl: matte, smooth, with a small gloss on the eyes.
- **Border rules:** A 1px mist line on cards; no line on the head.
- **Blur and elevation:** A 24px soft shadow at 18% under cards and the head.

## Ornamentation & iconography

- **Iconography:** Duotone glyphs at 24px in a circle of 40px.
- **Illustration:** Rendered heads of animals, robots and user-made people with 3 to 6 accessories.
- **Decorative elements:** rendered head · contact shadow · record button · face-tracking mesh hint · accessory row

## Motion & interactivity

- **Born on screen:** yes
- **Transition physics:** The head follows the face at 60 fps with a 40ms lag; a pick swaps the head with a 350ms squash and stretch of 8%.
- **Easing:** cubic-bezier(0.22, 1, 0.36, 1)
- **Duration (ms):** 350
- **Hover and active:** Hover lifts a card by 4px; active scales the head to 0.95 and records.

## Code & token primer

Set `data-style="3d-avatar-emoji"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="3d-avatar-emoji"] {
  --color-bg: #F4F2FF;
  --color-surface: #FFFFFF;
  --color-text: #1B1736;
  --color-muted: #5A5578;
  --color-primary: #7B5CFF;
  --color-accent: #FF9F43;
  --color-border: #D9D3F5;
  --font-sans: "Inter", "Nunito", sans-serif;
  --font-display: "Quicksand", "Nunito", sans-serif;
  --border-radius: 24px;
  --border-width: 1px;
  --shadow-elevation: 0 12px 24px rgba(123,92,255,0.18);
  --backdrop-filter: none;
  --space-unit: 8px;
  --ease: cubic-bezier(0.22, 1, 0.36, 1);
  --duration: 350ms;
  --type-ratio: 1.25;
  --size-small: 12.8px;
  --size-h3: 25px;
  --size-h2: 31.25px;
  --size-h1: 39.06px;
  --color-on-bg: #1B1736;
  --color-on-surface: #1B1736;
  --color-on-primary: #000000;
  --color-on-accent: #1B1736;
  --color-muted-on-bg: #5A5578;
  --color-muted-on-surface: #5A5578;
  --color-link: #1B1736;
  --color-link-on-surface: #1B1736;
  --display-weight: 700;
  --subhead-weight: 600;
  --body-weight: 400;
  --strong-weight: 600;
  --label-weight: 600;
  --display-tracking: 0em;
  --display-leading: 1.15;
  --display-case: none;
  --body-leading: 1.6;
  --body-size: 16px;
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
| page | `bg-[#F4F2FF] text-[#1B1736] font-sans antialiased px-4 md:px-12` |
| heading | `text-4xl md:text-6xl font-['Quicksand'] font-bold leading-[1.1]` |
| body | `text-base leading-[1.6] max-w-prose` |
| section | `border-2 border-[#D9D3F5] bg-[#FFFFFF] rounded-3xl shadow-[0_12px_24px_rgba(123,92,255,0.18)]` |
| button | `rounded-3xl border-2 border-[#D9D3F5] bg-[#7B5CFF] px-6 py-3 text-sm font-bold text-[#FFFFFF] transition-transform duration-[350ms] hover:-translate-y-0.5` |
| label | `text-xs uppercase tracking-widest text-[#7B5CFF]` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** duotone, stroke 2 on a 24px field, round caps, round joins, container: circle. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Phosphor (Duotone) by Phosphor Icons, licence MIT. Reason: A duotone family gives each glyph a soft second tone like the rendered heads. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 700, tracking 0em, leading 1.15, case: none.
- **Weights:** display 700, subhead 600, body 400, bold in text 600, labels and buttons 600. The style uses 3 weights (400, 600, 700) and no other. The display is 300 heavier than the body. The accent is weight: a heavier word is the accent, so the steps between the weights are clear.
- **Body type:** 16px, leading 1.6.
- **Page:** hero split, center aligned, airy density, accent tilt 0°.
- **Ground:** orbs. A rendered head floats in a soft lit space, so the ground shows blurred, lit spheres. Put the class `ground` on the first screen of the page; it takes `--ground`, a stack of gradients built from the colour tokens. The ground can run behind the copy, so put the class `ground-copy` on each text block of that screen: the block gets `--color-bg` and a soft edge. Keep the rest of the page on `--color-bg`.
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

### Face-tracked puppet (technology)

A rendered 3D head that copies the face of the user in real time through a depth camera. Origin: internet, Cupertino, 2017.

- Read the face with a depth camera and map 50 muscle movements to head controls.
- Render the head at 60 fps with soft light and a contact shadow.
- Limit a recorded clip to 10 seconds.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **iMessage** (platform, Cupertino, 2011–now), launched the style. The Apple messaging service. Animoji and Memoji came to it in 2017 and 2018 as face-tracked 3D emoji.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Base colour (`base_colour`) | #7B5CFF | #7B5CFF, #F4F2FF, #FFFFFF, #1B1736 | --color-primary, --color-on-primary, --color-link-on-surface |
| Accent colour (`accent_colour`) | #FF9F43 | #7B5CFF, #FF9F43 | --color-accent, --color-on-accent, --color-link |
| Corner radius (`corner_radius`) | 24px | 16–32 px | --border-radius |
| Grid step (`grid_step`) | 8px | 8–16 px | --space-unit, --grid-gutter |
| Type scale ratio (`type_scale_ratio`) | 1.25 | 1.2–1.414 | --type-ratio, --size-small, --size-h3, --size-h2, --size-h1 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **flatter**: move toward [`unicode-emoji`](../unicode-emoji/SKILL.md) (Unicode Emoji). Replace the rendered head with a flat yellow face and drop the contact shadow.
- If the user asks for **more drawn**: move toward [`chat-sticker-pack`](../chat-sticker-pack/SKILL.md) (Chat Sticker Pack). Draw a 3px outline, add a white cut-out edge and a short word.
- If the user asks for **more realistic**: move toward [`skeuomorphism`](../skeuomorphism/SKILL.md) (Skeuomorphism). Add textured materials, a harder light and visible depth on every control.

- **Came from (go here for a more orthodox version):** [`unicode-emoji`](../unicode-emoji/SKILL.md)
- **Mixes well with:** [`chat-sticker-pack`](../chat-sticker-pack/SKILL.md)
- **Kin in another domain:** [`clay-3d-icon`](../clay-3d-icon/SKILL.md)
- **Nearest by vector profile:** [`liquid-glass-ui`](../liquid-glass-ui/SKILL.md), [`spatial-visionos`](../spatial-visionos/SKILL.md), [`ethereal-web`](../ethereal-web/SKILL.md)

## Emotional target

The viewer feels playful, personal and a little amused at a mask that copies their face.

**Keywords:** playful, personal, soft, expressive, tactile, bright · **Brand archetypes:** jester, creator, everyman

## Sources

- [Wikipedia: Animoji](https://en.wikipedia.org/wiki/Animoji)
- [Apple Newsroom, iPhone X introduces Animoji (2017)](https://www.apple.com/newsroom/2017/09/the-future-is-here-iphone-x/)
- [Wikipedia: Memoji](https://en.wikipedia.org/wiki/Memoji)

---

Generated from [`data/internet/styles/3d-avatar-emoji.json`](../../data/internet/styles/3d-avatar-emoji.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
