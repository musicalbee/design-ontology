---
name: blob-world
description: "Apply the Blob World style (2015–present) when generating UI or graphic layouts. Load when the user asks for: blob world, 3d blob, soft 3d, clay render, inflatable, 3d illustration."
domain: design
era: touchscreen
triggers:
  - "blob world"
  - "3d blob"
  - "soft 3d"
  - "clay render"
  - "inflatable"
  - "3d illustration"
  - "surreal 3d"
  - "jelly"
  - "spline scene"
vector_profile:
  ornamentation: 4
  dimensionality: 5
  grid_rigidity: 2
  skeuomorphic_realism: 3
  typographic_expressiveness: 3
---

# Blob World

> Make the screen a toy world: soft, over-lit 3D bodies with odd textures carry the brand, and the interface stays plain around them.

Motion design and illustration made from strange 3D renders: soft blobs, surreal rooms, clay, fur, jelly and inflatable textures, sometimes uncanny. It is an illustration world, not a component style: glassmorphism and 3D UI style the controls; Blob World fills the picture.

**Period:** 2015–present · **Era:** Touchscreen · **Domain:** Graphic & UI Design · **Also called:** 3D blob illustration, Soft 3D, Clay render

## When to load this skill

Load it when the user asks for: "blob world", "3d blob", "soft 3d", "clay render", "inflatable", "3d illustration", "surreal 3d", "jelly", "spline scene".

Good for: landing-page hero scenes, motion design and brand films, app onboarding illustration, music and culture covers, creative-tool and NFT-era marketing.

Do not use it when:
- The page loads on slow networks and cannot carry a heavy render.
- The product is a dense data tool.
- The brand needs a sober, institutional tone.

## System directives

When generating UI or graphic layouts in Blob World, you MUST:

1. Build each figure from rounded volumes with no sharp edge: a minimum radius of 24% of the shape width.
2. Render one hero scene per page at 1600px or wider, with a soft key light from the top left and a shadow of 40px to 80px blur.
3. Give each surface one tactile material: clay, fur, jelly, inflatable plastic or felt, with a visible grain at 100% zoom.
4. Use a palette of 3 saturated hues on a pastel ground (#FFE9D6), with one acid accent.
5. Place 3 to 7 floating shapes around the hero at 3 depths, with sizes in a ratio of 1 : 2 : 4.
6. Set type in a rounded, heavy face (weight 600 to 700) at 56px or larger for display, and keep body text at 18px in a plain ground block.
7. Loop motion for 4s to 8s: bodies squash and stretch by 6% to 12%, and drift by 8px to 24px.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Flat vector figures with no volume.
- **NEVER:** Hard-edged geometric shapes.
- **NEVER:** Photographic stock images.
- **NEVER:** Frosted glass panels as the main image.
- **NEVER:** Dark, realistic lighting with deep shadow.
- **NEVER:** Dense data tables beside the render.
- **NEVER:** Static scenes with no motion.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■■■□` 4/5 | pure minimal | maximalist |
| Dimensionality | `■■■■■` 5/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■□□□` 2/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■■■□□` 3/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■■■□□` 3/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** A loose 12-column grid with one large render that breaks the grid; text blocks sit in a plain column of 5 to 6 columns.
- **Whitespace ratio:** 35% to 50% of the surface stays empty; the spacing scale is 8, 16, 32 and 64px.
- **Alignment rules:** Centred or flush-left text beside the render; floating shapes cross the grid edge by 16px to 64px.
- **Container geometry:** Containers with a 32px radius; pill buttons at 999px; round and bean shapes for accents.

## Typography

- **Classifications:** rounded sans · geometric sans
- **Tracking:** Display -0.01em; body 0em.
- **Leading:** Display 1.05; body 1.6.
- **Hierarchy rules:**
  - Use weights 400, 600 and 700.
  - Use sizes 16, 18, 32 and 64px.
  - Set display in sentence case, not upper case.
  - Keep one heavy weight for headlines and one regular weight for text.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Fredoka | Nunito | A soft, rounded display face with a friendly, legible text face. |
| Baloo 2 | Nunito Sans | A heavy, round face that echoes the volume of the renders. |
| Rubik | DM Sans | A slightly rounded sans for brands that need a plainer voice. |

## Colour & lighting

- **Palette structure:** A pastel ground with 3 saturated render hues and one acid accent.
- **Contrast rules:** Body text uses ink (#2A1740) on the pastel ground at 12:1; saturated hues carry shapes and buttons, and button text uses ink.
- **Surface treatment:** Soft diffuse shading with subsurface glow; a visible material grain at 3% to 6%; no hard specular lines.
- **Light and shadow:** A soft key light from the top left; shadows of 40px to 80px blur at 20% to 30% opacity in a tinted hue, not black.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Peach Ground | `#FFE9D6` | background |
| Jelly Coral | `#FF5A4D` | primary |
| Clay Violet | `#7A5CFF` | accent |
| Fur Teal | `#2EC4B6` | second accent |
| Acid Lime | `#D4FF3A` | highlight |
| Cream Surface | `#FFF7EE` | surface |

## Materiality & texture

- **Surface simulation:** Rendered clay, jelly, fur, felt and inflatable plastic, lit in a soft studio.
- **Border rules:** No borders on shapes; interface cards use a 1px line at 12% ink opacity.
- **Blur and elevation:** Shadows of 40px to 80px blur under floating bodies; no backdrop blur on interface parts.

## Ornamentation & iconography

- **Iconography:** Soft solid glyphs at 24px with round caps, placed on a 40px circle tile in a render hue.
- **Illustration:** 3D blob characters, surreal rooms, melting shapes and floating props, rendered in Blender, Cinema 4D or Spline.
- **Decorative elements:** blob figure · floating bean · inflatable letter · jelly orb · fur patch · melting shape

## Motion & interactivity

- **Born on screen:** yes
- **Transition physics:** Soft and elastic: bodies squash and stretch by 6% to 12%; shapes drift by 8px to 24px in loops of 4s to 8s; page elements spring in with one overshoot of 8%.
- **Easing:** cubic-bezier(0.34, 1.56, 0.64, 1)
- **Duration (ms):** 500
- **Hover and active:** Hover scales the element to 1.06 and tilts it by 3°; active squashes it to 0.96.

## Code & token primer

Set `data-style="blob-world"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="blob-world"] {
  --color-bg: #FFE9D6;
  --color-surface: #FFF7EE;
  --color-text: #2A1740;
  --color-muted: #5E4A78;
  --color-primary: #FF5A4D;
  --color-accent: #7A5CFF;
  --color-border: #E8CDB8;
  --font-sans: "Nunito", "Nunito Sans", sans-serif;
  --font-display: "Fredoka", "Baloo 2", sans-serif;
  --border-radius: 32px;
  --border-width: 1px;
  --shadow-elevation: 0 40px 80px rgba(122, 92, 255, 0.25);
  --backdrop-filter: none;
  --space-unit: 8px;
  --ease: cubic-bezier(0.34, 1.56, 0.64, 1);
  --duration: 500ms;
  --type-ratio: 1.333;
  --size-small: 13.5px;
  --size-h3: 31.98px;
  --size-h2: 42.63px;
  --size-h1: 56.83px;
  --color-on-bg: #2A1740;
  --color-on-surface: #2A1740;
  --color-on-primary: #2A1740;
  --color-on-accent: #000000;
  --color-muted-on-bg: #5E4A78;
  --color-muted-on-surface: #5E4A78;
  --color-link: #2A1740;
  --color-link-on-surface: #2A1740;
  --display-weight: 600;
  --subhead-weight: 600;
  --body-weight: 400;
  --strong-weight: 700;
  --label-weight: 700;
  --display-tracking: -0.01em;
  --display-leading: 1.05;
  --display-case: none;
  --body-leading: 1.6;
  --body-size: 18px;
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
| page | `bg-[#FFE9D6] text-[#2A1740] font-sans antialiased px-6 md:px-16` |
| heading | `font-semibold tracking-[-0.01em] leading-[1.05] text-5xl md:text-7xl` |
| body | `text-lg leading-[1.6] max-w-prose` |
| section | `rounded-[32px] border border-[#E8CDB8] bg-[#FFF7EE] shadow-[0_40px_80px_rgba(122,92,255,0.25)]` |
| button | `rounded-full bg-[#FF5A4D] px-8 py-4 text-base font-bold text-[#2A1740] transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-105 active:scale-95` |
| label | `text-sm font-bold text-[#7A5CFF]` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** solid, stroke 2 on a 24px field, round caps, round joins, container: circle. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Phosphor (Fill) by Phosphor Icons, licence MIT. Reason: Soft, filled forms with round terminals match the volume of the renders. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 600, tracking -0.01em, leading 1.05, case: none.
- **Weights:** display 600, subhead 600, body 400, bold in text 700, labels and buttons 700. The style uses 3 weights (400, 600, 700) and no other. The display is 200 heavier than the body. The accent is size: a larger word is the accent, so the weights stay few.
- **Body type:** 18px, leading 1.6.
- **Page:** hero split, left aligned, airy density, accent tilt 2°.
- **Ground:** orbs. Blob world places soft round masses of colour behind the content. Put the class `ground` on the first screen of the page; it takes `--ground`, a stack of gradients built from the colour tokens. The ground can run behind the copy, so put the class `ground-copy` on each text block of that screen: the block gets `--color-bg` and a soft edge. Keep the rest of the page on `--color-bg`.
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

### Squash and stretch (animation)

A moving form changes shape but keeps its volume: it stretches along its path at speed and squashes on impact. Origin: film & video, Disney studio, Los Angeles, c. 1930.

- Keep the volume constant: when the height grows by a factor k, scale the width by 1/k.
- Stretch along the path by 10% to 30% at the highest speed and squash by the same amount on impact.
- In an interface, use a spring with a damping ratio of 0.6 to 0.8, so that an element overshoots once and settles.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Base colour (`base_colour`) | #FF5A4D | #FF5A4D, #7A5CFF, #2A1740 | --color-primary, --color-on-primary, --color-link-on-surface |
| Accent colour (`accent_colour`) | #7A5CFF | #7A5CFF, #FF5A4D | --color-accent, --color-on-accent, --color-link |
| Corner radius (`corner_radius`) | 32px | 16–48 px | --border-radius |
| Grid step (`grid_step`) | 8px | 4–12 px | --space-unit, --grid-gutter |
| Type scale ratio (`type_scale_ratio`) | 1.333 | 1.25–1.414 | --type-ratio, --size-small, --size-h3, --size-h2, --size-h1 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **flatter**: move toward [`flat-design`](../flat-design/SKILL.md) (Flat Design). Replace renders with 2-hue vector shapes and remove shadows; keep the rounded forms and pastel ground.
- If the user asks for **more interface**: move toward [`glassmorphism`](../glassmorphism/SKILL.md) (Glassmorphism). Put the controls on frosted panels of 16px to 24px blur over the render; keep the palette.
- If the user asks for **more people**: move toward [`corporate-memphis`](../corporate-memphis/SKILL.md) (Corporate Memphis). Swap blobs for flat figures with long limbs and 3 shape accents; keep the saturated hues.

- **Rejects (the opposite pole; do not blend):** [`flat-design`](../flat-design/SKILL.md)
- **Mixes well with:** [`corporate-memphis`](../corporate-memphis/SKILL.md), [`glassmorphism`](../glassmorphism/SKILL.md)
- **Nearest by vector profile:** [`claymorphism`](../claymorphism/SKILL.md), [`surrealism-web`](../surrealism-web/SKILL.md), [`frutiger-aero`](../frutiger-aero/SKILL.md)

## Emotional target

The viewer feels playful curiosity and a mild unease at bodies that are too soft to be real.

**Keywords:** playful, soft, surreal, tactile, uncanny, inflated · **Brand archetypes:** jester, creator, innocent

## Sources

- [CARI, Consumer Aesthetics Research Institute: Blob World](https://cari.institute/aesthetics/blob-world)

---

Generated from [`data/design/styles/blob-world.json`](../../data/design/styles/blob-world.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
