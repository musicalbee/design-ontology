---
name: aurora-gradient-ui
description: "Apply the Aurora Gradient UI style (2018–now) when generating UI or graphic layouts. Load when the user asks for: aurora gradient, mesh gradient, gradient background, stripe style, ai landing page, glow."
domain: design
era: contemporary-spatial
triggers:
  - "aurora gradient"
  - "mesh gradient"
  - "gradient background"
  - "stripe style"
  - "ai landing page"
  - "glow"
  - "blurred blobs"
  - "ambient gradient"
vector_profile:
  ornamentation: 3
  dimensionality: 3
  grid_rigidity: 3
  skeuomorphic_realism: 2
  typographic_expressiveness: 2
---

# Aurora Gradient UI

> Colour is atmosphere: a blurred field of light makes a product feel alive without any picture of it.

Soft, blurred mesh gradients in 3 to 5 hues behind clean sans-serif type, with glowing edges and grain. It came from fintech and AI product pages and replaced the flat hero.

**Period:** 2018–now · **Era:** Contemporary & Spatial · **Domain:** Graphic & UI Design · **Also called:** Mesh gradient UI, Gradient glow web, Aurora background

## When to load this skill

Load it when the user asks for: "aurora gradient", "mesh gradient", "gradient background", "stripe style", "ai landing page", "glow", "blurred blobs", "ambient gradient".

Good for: fintech and payments landing pages, AI product pages, app launch and waitlist pages, SaaS hero sections, event and conference sites.

Do not use it when:
- The brand must feel earthy, serious or print-like.
- The page must print or run on low-power devices.
- The audience needs high-contrast, plain reading.

## System directives

When generating UI or graphic layouts in Aurora Gradient UI, you MUST:

1. Build the hero ground from 3 to 5 radial colour blobs of 400px to 900px, blurred by 80px to 160px, on a base of #0A0A14 or white.
2. Pick hues that sit within 90° to 150° on the colour wheel and keep saturation of 60% to 90%.
3. Add a grain overlay of 3% to 6% opacity at 1px to 2px noise to prevent banding.
4. Set headings in a clean sans at 56px to 96px, weight 500 to 600, and keep body text white at 80% opacity or ink on pale tints.
5. Outline cards with a 1px gradient border (white at 20% to 0%) and fill with white at 4% to 8%.
6. Animate the blobs: drift 40px to 120px over 12s to 30s, with ease-in-out and an alternate loop.
7. Limit the glow: one glow behind the hero object and one behind the primary button, each blur 24px to 60px at 30% to 50% opacity.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Flat solid hero backgrounds.
- **NEVER:** Hard-edged linear gradients with visible bands.
- **NEVER:** More than 5 hues in one field.
- **NEVER:** Thick black borders and hard shadows.
- **NEVER:** Gradient text for every heading.
- **NEVER:** Fast, flashing gradient animation under 4s per loop.
- **NEVER:** Low-contrast text on bright blobs.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■■□□` 3/5 | pure minimal | maximalist |
| Dimensionality | `■■■□□` 3/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■■□□` 3/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■■□□□` 2/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■■□□□` 2/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** A centred 12-column grid with 24px gutters; the hero spans the viewport, content sits in columns 3 to 10; colour blobs ignore the grid.
- **Whitespace ratio:** 35% to 50% of the surface stays empty; the spacing scale is 8, 16, 32, 64 and 128px.
- **Alignment rules:** Centred hero and flush-left sections; blobs bleed off the edges by 10% to 30%.
- **Container geometry:** Cards with a 16px to 24px radius, a 1px gradient border and a glass-like fill; pills at 999px for tags and buttons.

## Typography

- **Classifications:** geometric sans serif
- **Tracking:** Display takes -0.03em; body stays at 0.
- **Leading:** Display 1.05; body 1.6.
- **Hierarchy rules:**
  - Use three weights: regular (400), medium (500) and semibold (600).
  - Use sizes 16, 20, 40 and 80px.
  - Set headings in sentence case.
  - Set body at 80% opacity of the text colour on dark grounds.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Manrope | Inter | A modern geometric display with a neutral text face. |
| Plus Jakarta Sans | Inter | A soft geometric with clear numerals. |
| Sora | Inter | A wide, tech-friendly display. |

## Colour & lighting

- **Palette structure:** A dark or pale base with 3 to 5 blended hues.
- **Contrast rules:** Text holds at least 12:1 on midnight; never place body text over a blob below 4.5:1.
- **Surface treatment:** Blurred radial blobs over a dark base, with grain of 3% to 6%; no hard stops.
- **Light and shadow:** Light is colour: glows of 24px to 60px blur around key objects; no hard shadows.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Midnight | `#0A0A14` | background |
| Violet | `#7C5CFF` | blob and primary |
| Cyan | `#2DD4FF` | blob and accent |
| Magenta | `#FF4DA6` | blob |
| Mist | `#ECE9FF` | text |
| Smoke | `#A7A3C7` | secondary text |

## Materiality & texture

- **Surface simulation:** Light itself: a blurred gradient field with film grain.
- **Border rules:** 1px gradient border from white at 20% to white at 0%.
- **Blur and elevation:** Blob blur 80px to 160px; glow blur 24px to 60px at 30% to 50%; cards have no shadow.

## Ornamentation & iconography

- **Iconography:** Thin 1.5px outline icons in white at 80% with round caps; glowing dot for status.
- **Illustration:** Abstract gradient fields, orbs and soft 3D shapes; product UI screenshots inside glass frames.
- **Decorative elements:** gradient mesh · grain overlay · glow · gradient border

## Motion & interactivity

- **Born on screen:** yes
- **Transition physics:** Slow drift: the blobs move 40px to 120px over 12s to 30s; content fades up 12px in 500ms.
- **Easing:** cubic-bezier(0.4, 0, 0.2, 1)
- **Duration (ms):** 400
- **Hover and active:** Hover raises the glow of a button by 20% and lifts it 2px; active state dims it by 10%.

## Code & token primer

Set `data-style="aurora-gradient-ui"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="aurora-gradient-ui"] {
  --color-bg: #0A0A14;
  --color-surface: #14142A;
  --color-text: #ECE9FF;
  --color-muted: #A7A3C7;
  --color-primary: #7C5CFF;
  --color-accent: #2DD4FF;
  --color-border: #2A2A48;
  --font-sans: "Inter", system-ui, sans-serif;
  --font-display: "Manrope", "Inter", system-ui, sans-serif;
  --border-radius: 20px;
  --border-width: 1px;
  --shadow-elevation: 0 0 40px rgba(124,92,255,0.4);
  --backdrop-filter: none;
  --space-unit: 8px;
  --ease: cubic-bezier(0.4, 0, 0.2, 1);
  --duration: 400ms;
  --color-on-bg: #ECE9FF;
  --color-on-surface: #ECE9FF;
  --color-on-primary: #0A0A14;
  --color-on-accent: #0A0A14;
  --color-muted-on-bg: #A7A3C7;
  --color-muted-on-surface: #A7A3C7;
  --color-link: #2DD4FF;
  --color-link-on-surface: #2DD4FF;
  --display-weight: 600;
  --subhead-weight: 500;
  --body-weight: 400;
  --strong-weight: 600;
  --label-weight: 500;
  --display-tracking: -0.03em;
  --display-leading: 1.05;
  --display-case: none;
  --body-leading: 1.6;
  --body-size: 17px;
  --icon-stroke: 1.5;
}
```

Tailwind patterns:

| Element | Classes |
|---|---|
| page | `bg-[#0A0A14] text-[#ECE9FF] font-sans antialiased px-6 md:px-16` |
| heading | `text-5xl md:text-8xl font-semibold tracking-[-0.03em] leading-[1.05] text-center` |
| body | `text-[17px] leading-[1.6] text-[#ECE9FF]/80` |
| section | `rounded-[20px] border border-white/20 bg-white/5 p-6` |
| button | `rounded-full bg-[#7C5CFF] px-7 py-3 text-base font-medium text-white shadow-[0_0_40px_rgba(124,92,255,0.4)] transition duration-[400ms] hover:shadow-[0_0_56px_rgba(124,92,255,0.6)] hover:-translate-y-0.5` |
| label | `text-xs font-medium text-[#A7A3C7]` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** outline, stroke 1.5 on a 24px field, round caps, round joins, container: none. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Solar (Linear) by 480 Design, licence CC BY 4.0. Reason: A thin, round line that stays light on a glowing, blurred ground. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 600, tracking -0.03em, leading 1.05, case: none.
- **Weights:** display 600, subhead 500, body 400, bold in text 600, labels and buttons 500. The style uses 3 weights (400, 500, 600) and no other. The display is 200 heavier than the body. The accent is colour: one coloured word or field is the accent, so the weights stay quiet.
- **Body type:** 17px, leading 1.6.
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

- If the user asks for **calmer**: move toward [`swiss-international`](../swiss-international/SKILL.md) (Swiss International Style). Replace the blobs by one flat accent and a white ground.
- If the user asks for **more glass**: move toward [`liquid-glass-ui`](../liquid-glass-ui/SKILL.md) (Liquid Glass). Add blur of 28px, a specular rim and capsule controls over the gradient.
- If the user asks for **more technical**: move toward [`dark-devtool-ui`](../dark-devtool-ui/SKILL.md) (Dark-Mode Developer Tool). Reduce the blobs to one faint glow and add hairlines and a mono face.

- **Came from (go here for a more orthodox version):** [`flat-design`](../flat-design/SKILL.md)
- **Led to (go here for a newer version):** [`ethereal-web`](../ethereal-web/SKILL.md)
- **Mixes well with:** [`bento-grid-ui`](../bento-grid-ui/SKILL.md), [`dark-devtool-ui`](../dark-devtool-ui/SKILL.md), [`glassmorphism`](../glassmorphism/SKILL.md)
- **Nearest by vector profile:** [`glassmorphism`](../glassmorphism/SKILL.md), [`material-design`](../material-design/SKILL.md), [`mid-century-modern`](../mid-century-modern/SKILL.md)

## Emotional target

The viewer feels a calm, futuristic glow and a sense of intelligence.

**Keywords:** glowing, futuristic, calm, intelligent, ambient, premium · **Brand archetypes:** magician, creator

## Sources

- Example: stripe.com home page gradient (2018–2025)
- Example: linear.app and vercel.com launch pages (2023–2025)
- Example: Arc and Raycast product sites (2022–2025)

---

Generated from [`data/design/styles/aurora-gradient-ui.json`](../../data/design/styles/aurora-gradient-ui.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
