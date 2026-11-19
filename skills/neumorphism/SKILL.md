---
name: neumorphism
description: "Apply the Neumorphism style (2019–2021) when generating UI or graphic layouts. Load when the user asks for: neumorphism, neumorphic, soft ui, extruded, embossed buttons, inset shadows."
domain: design
era: contemporary-spatial
triggers:
  - "neumorphism"
  - "neumorphic"
  - "soft ui"
  - "extruded"
  - "embossed buttons"
  - "inset shadows"
  - "pressed button"
  - "soft shadows both sides"
  - "monochrome soft"
vector_profile:
  ornamentation: 1
  dimensionality: 3
  grid_rigidity: 3
  skeuomorphic_realism: 3
  typographic_expressiveness: 1
---

# Neumorphism

> An interface can be tactile without imitating objects, if every control is moulded from the same material as the page behind it.

Monochrome surfaces that look extruded from or pressed into the background, made with a light shadow and a dark shadow on opposite corners. It appeared on Dribbble in late 2019 as a soft answer to flat design.

**Period:** 2019–2021 · **Era:** Contemporary & Spatial · **Domain:** Graphic & UI Design · **Also called:** Soft UI, New Skeuomorphism

## When to load this skill

Load it when the user asks for: "neumorphism", "neumorphic", "soft ui", "extruded", "embossed buttons", "inset shadows", "pressed button", "soft shadows both sides", "monochrome soft".

Good for: smart home controls, music players, calculators, fintech concept screens, wearable dashboards.

Do not use it when:
- Accessibility compliance is required, because the shadow-only boundary gives under 3:1 contrast and fails WCAG 1.4.11.
- The interface is dense with data, because each element needs 16px of free space for its shadow.
- The product is used in sunlight or on low-contrast displays, where soft shadows disappear.

## System directives

When generating UI or graphic layouts in Neumorphism, you MUST:

1. Give the background and every surface the same fill, so that shadows alone define the shape.
2. Pair two shadows on each raised element: a dark one at 8px 8px 16px and a light one at -8px -8px 16px, with a light source at the top left.
3. Invert both shadows with the inset keyword to show a pressed, selected or input state.
4. Keep the corner radius between 16px and 32px on cards and 999px on pills, so that the edges catch the shadow evenly.
5. Limit the palette to one mid-light neutral, a darker and a lighter tint of it, and one saturated accent used on less than 5% of the surface.
6. Use only three elevation levels: flat, raised at 8px offset and pressed at inset 4px offset.
7. Put the accent on the icon, the label or a thin indicator, because the shadow already marks the shape.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Hard black borders or 1px outlines around raised elements.
- **NEVER:** Pure white or pure black backgrounds that cancel one of the two shadows.
- **NEVER:** Raised and pressed elements that use different background colours.
- **NEVER:** Light grey text on a light grey surface below 4.5:1 contrast.
- **NEVER:** More than three elevation levels on one screen.
- **NEVER:** Shadow offsets that disagree about the light direction.
- **NEVER:** Saturated gradients on the surface itself.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■□□□□` 1/5 | pure minimal | maximalist |
| Dimensionality | `■■■□□` 3/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■■□□` 3/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■■■□□` 3/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■□□□□` 1/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** A 4 or 12 column grid with 24px to 32px gutters, because each raised element needs about 16px of free space on every side for its shadow.
- **Whitespace ratio:** 50–65% of the surface stays empty; the spacing scale is 8, 16, 24, 32, 48 and 64px, and a shadow blur never overlaps a neighbour.
- **Alignment rules:** Centre-aligned controls inside symmetric cards; text is left-aligned in cards; groups of controls sit on one shared baseline row.
- **Container geometry:** Cards use a 24px radius, buttons a 12px to 16px radius, toggles and sliders a full pill radius of 999px; wells are inset containers with the same radius as the cards.

## Typography

- **Classifications:** geometric sans · humanist sans
- **Tracking:** Display sizes take -0.01em; body stays at 0; small labels take +0.04em to stay legible on a low-contrast surface.
- **Leading:** Display 1.2; body 1.5; labels 1.3.
- **Hierarchy rules:**
  - Use weights 500 and 700 for headings and 400 for body; light weights below 400 vanish on the soft surface.
  - Use text sizes of 14px or more, because contrast is already limited.
  - Set the primary text in a dark tint of the surface hue at 7:1 contrast, not in pure black.
  - Mark the active item with the accent colour and a pressed shadow together, never with colour alone.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Poppins | Nunito Sans | Round geometric display with a soft body face that matches the 24px corners. |
| DM Sans | DM Sans | A single family at weights 500 and 400. |
| Quicksand | Inter | Rounded terminals on headings, neutral text below 16px. |

## Colour & lighting

- **Palette structure:** One mid-light neutral for page and surface, a lighter and a darker tint of it for the two shadows, one dark text colour and one accent below 5% of the surface.
- **Contrast rules:** Text holds at least 4.5:1 against Clay, which Slate gives at about 9:1; the shadow edge alone gives under 1.5:1, so it fails the WCAG 3:1 rule for component boundaries and needs a label, icon or accent to mark the control.
- **Surface treatment:** Opaque matte fields of one colour with no texture; at most a 145-degree linear gradient between two tints within 4% lightness for a convex face.
- **Light and shadow:** One light source at the top left; each raised element casts a dark shadow to the bottom right and a light shadow to the top left, and pressed elements swap both to inset.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Clay | `#E0E5EC` | background and surface |
| Highlight | `#FFFFFF` | light shadow |
| Shade | `#A3B1C6` | dark shadow |
| Slate | `#2D3748` | text |
| Steel | `#5A6A80` | secondary text |
| Signal Blue | `#3B6FE0` | accent |

## Materiality & texture

- **Surface simulation:** Matte moulded plastic or clay, extruded from a single sheet, with no gloss and no visible seams.
- **Border rules:** No borders in the default state; an optional 1px solid rgba(255, 255, 255, 0.5) edge on raised elements; focus uses a 2px accent outline offset by 2px.
- **Blur and elevation:** Raised: 8px 8px 16px dark and -8px -8px 16px light; small: 4px 4px 8px and -4px -4px 8px; pressed: inset 4px 4px 8px dark and inset -4px -4px 8px light.

## Ornamentation & iconography

- **Iconography:** Outline icons with a 2px stroke and round caps and joins at 24px, set in the secondary text colour and in the accent when active.
- **Illustration:** Soft 3D renders or abstract shapes in the same neutral tint, with the same top-left light; no outlined line art.
- **Decorative elements:** inset wells · pill toggles · circular dials · progress rings with an inset track

## Motion & interactivity

- **Born on screen:** yes
- **Transition physics:** Press animates the shadow pair from raised to inset over a short eased move, as if a key travels 4px into the surface; nothing slides or bounces.
- **Easing:** cubic-bezier(0.4, 0, 0.2, 1)
- **Duration (ms):** 200
- **Hover and active:** Hover grows the raised shadow offset from 8px to 10px; active switches to the inset pair; focus adds a 2px accent outline.

## Code & token primer

Set `data-style="neumorphism"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="neumorphism"] {
  --color-bg: #E0E5EC;
  --color-surface: #E0E5EC;
  --color-text: #2D3748;
  --color-muted: #5A6A80;
  --color-primary: #3B6FE0;
  --color-accent: #3B6FE0;
  --color-border: rgba(255, 255, 255, 0.5);
  --font-sans: "Nunito Sans", "Inter", system-ui, sans-serif;
  --font-display: "Poppins", "Nunito Sans", system-ui, sans-serif;
  --border-radius: 24px;
  --border-width: 1px;
  --shadow-elevation: 8px 8px 16px #A3B1C6, -8px -8px 16px #FFFFFF;
  --backdrop-filter: none;
  --space-unit: 8px;
  --ease: cubic-bezier(0.4, 0, 0.2, 1);
  --duration: 200ms;
  --shadow-pressed: inset 4px 4px 8px #A3B1C6, inset -4px -4px 8px #FFFFFF;
  --shadow-small: 4px 4px 8px #A3B1C6, -4px -4px 8px #FFFFFF;
  --type-ratio: 1.2;
  --size-small: 13.33px;
  --size-h3: 23.04px;
  --size-h2: 27.65px;
  --size-h1: 33.18px;
  --color-on-bg: #2D3748;
  --color-on-surface: #2D3748;
  --color-on-primary: #FFFFFF;
  --color-on-accent: #FFFFFF;
  --color-muted-on-bg: #515A69;
  --color-muted-on-surface: #515A69;
  --color-link: #2D3748;
  --color-link-on-surface: #2D3748;
  --display-weight: 700;
  --subhead-weight: 500;
  --body-weight: 400;
  --strong-weight: 700;
  --label-weight: 500;
  --display-tracking: -0.01em;
  --display-leading: 1.15;
  --display-case: none;
  --body-leading: 1.6;
  --body-size: 16px;
  --icon-stroke: 1.75;
  --ground: radial-gradient(circle at 80% 46%, var(--color-bg) 0 20vmin, transparent calc(20vmin + 1px)),
    radial-gradient(circle at calc(80% + 3vmin) calc(46% + 3vmin), color-mix(in oklab, var(--color-on-bg) 16%, transparent) 0 18vmin, transparent 27vmin),
    radial-gradient(circle at calc(80% - 3vmin) calc(46% - 3vmin), rgba(255,255,255,.85) 0 18vmin, transparent 27vmin),
    radial-gradient(35% 40% at 96% 92%, color-mix(in oklab, var(--color-accent) 35%, transparent), transparent 70%),
    radial-gradient(30% 35% at 60% 4%, color-mix(in oklab, var(--color-primary) 22%, transparent), transparent 70%),
    var(--color-bg);
}
```

Tailwind patterns:

| Element | Classes |
|---|---|
| page | `bg-[#E0E5EC] text-[#2D3748] font-sans antialiased p-8` |
| card | `rounded-3xl bg-[#E0E5EC] p-8 shadow-[8px_8px_16px_#A3B1C6,-8px_-8px_16px_#FFFFFF]` |
| button | `rounded-2xl bg-[#E0E5EC] px-6 py-3 font-medium text-[#2D3748] shadow-[4px_4px_8px_#A3B1C6,-4px_-4px_8px_#FFFFFF] transition-shadow duration-200 active:shadow-[inset_4px_4px_8px_#A3B1C6,inset_-4px_-4px_8px_#FFFFFF]` |
| input | `rounded-2xl bg-[#E0E5EC] px-4 py-3 text-[#2D3748] shadow-[inset_4px_4px_8px_#A3B1C6,inset_-4px_-4px_8px_#FFFFFF] outline-none focus:outline-2 focus:outline-offset-2 focus:outline-[#3B6FE0]` |
| heading | `font-bold text-3xl leading-tight tracking-[-0.01em] text-[#2D3748]` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** outline, stroke 1.75 on a 24px field, round caps, round joins, container: circle. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Iconoir (Regular) by Luca Burgio, licence MIT. Reason: A thin round line that does not compete with the soft relief of the surface. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 700, tracking -0.01em, leading 1.15, case: none.
- **Weights:** display 700, subhead 500, body 400, bold in text 700, labels and buttons 500. The style uses 3 weights (400, 500, 700) and no other. The display is 300 heavier than the body. The accent is colour: one coloured word or field is the accent, so the weights stay quiet.
- **Body type:** 16px, leading 1.6.
- **Page:** hero stacked, center aligned, airy density, accent tilt 0°.
- **Ground:** soft. Neumorphism lifts one soft disc out of the same material as the page. Put the class `ground` on the first screen of the page; it takes `--ground`, a stack of gradients built from the colour tokens. The ground can run behind the copy, so put the class `ground-copy` on each text block of that screen: the block gets `--color-bg` and a soft edge. Keep the rest of the page on `--color-bg`.
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

### Dual soft shadow (process, invented here)

A light shadow on one side and a dark shadow on the other, on a ground of the same colour, so that a shape seems pressed out of the surface. Origin: graphic & ui design, Online (Dribbble), 2019.

- Use the ground colour for the shape; no border.
- Cast a dark shadow 6 to 12 px to the bottom right and a light shadow at the same distance to the top left.
- Blur each shadow by 2 times its distance.

## Media

The salons, schools, magazines, publishers, galleries and platforms that carried this style.

- **Dribbble** (platform, web, 2009–now), published the style. A web site where designers post small shots of interface work. Several interface trends, neumorphism among them, spread from shots that were posted there.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Base colour (`base_colour`) | #3B6FE0 | #3B6FE0, #2D3748 | --color-primary, --color-on-primary, --color-link-on-surface |
| Accent colour (`accent_colour`) | #3B6FE0 | #3B6FE0, #2D3748 | --color-accent, --color-on-accent, --color-link |
| Corner radius (`corner_radius`) | 24px | 12–36 px | --border-radius |
| Grid step (`grid_step`) | 8px | 4–12 px | --space-unit, --grid-gutter |
| Type scale ratio (`type_scale_ratio`) | 1.2 | 1.125–1.25 | --type-ratio, --size-small, --size-h3, --size-h2, --size-h1 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more accessible**: move toward [`flat-design`](../flat-design/SKILL.md) (Flat Design). Add a 1px border at 3:1 contrast and shrink both shadows to 2px; keep the radius and the single neutral surface.
- If the user asks for **more depth**: move toward [`skeuomorphism`](../skeuomorphism/SKILL.md) (Skeuomorphism). Add a 145-degree gradient of 8% lightness and a 1px inner highlight; keep the top-left light.
- If the user asks for **glassier**: move toward [`glassmorphism`](../glassmorphism/SKILL.md) (Glassmorphism). Replace the surface with rgba(255, 255, 255, 0.4) and backdrop-filter blur(16px); keep the radius and drop the dual shadow.
- If the user asks for **bolder**: move toward [`neo-brutalism-ui`](../neo-brutalism-ui/SKILL.md) (Neo-Brutalism UI). Replace both soft shadows with one 4px 4px 0 0 #000000 shadow and add a 2px black border; keep the layout.

- **Came from (go here for a more orthodox version):** [`skeuomorphism`](../skeuomorphism/SKILL.md)
- **Led to (go here for a newer version):** [`claymorphism`](../claymorphism/SKILL.md)
- **Rejects (the opposite pole; do not blend):** [`flat-design`](../flat-design/SKILL.md)
- **Mixes well with:** [`glassmorphism`](../glassmorphism/SKILL.md)
- **Nearest by vector profile:** [`glassmorphism`](../glassmorphism/SKILL.md), [`ethereal-web`](../ethereal-web/SKILL.md), [`liquid-glass-ui`](../liquid-glass-ui/SKILL.md)

## Emotional target

Calm tactility: the viewer feels that the controls are soft, safe to touch and made of one material.

**Keywords:** soft, tactile, calm, quiet, cohesive, futuristic · **Brand archetypes:** caregiver, creator

## Sources

- Alexander Plyuto, Skeuomorph Mobile Banking concept, Dribbble (2019)
- WCAG 2.1, Success Criterion 1.4.11 Non-text Contrast, W3C (2018)

---

Generated from [`data/design/styles/neumorphism.json`](../../data/design/styles/neumorphism.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
