---
name: rams-functionalism-ui
description: "Apply the Rams Functionalism (UI) style (1955–now) when generating UI or graphic layouts. Load when the user asks for: dieter rams, braun, less but better, good design, functionalism, hardware ui."
domain: design
era: modernist
triggers:
  - "dieter rams"
  - "braun"
  - "less but better"
  - "good design"
  - "functionalism"
  - "hardware ui"
  - "control panel"
  - "calculator"
  - "teenage engineering"
vector_profile:
  ornamentation: 1
  dimensionality: 2
  grid_rigidity: 5
  skeuomorphic_realism: 2
  typographic_expressiveness: 1
---

# Rams Functionalism (UI)

> Good design is as little design as possible: the product should be useful, understandable and honest, and then step back.

Quiet matt surfaces, a muted grey palette, one orange signal colour and controls that show what they do. It follows Dieter Rams and Braun and appears again in calculators, audio and phone interfaces.

**Period:** 1955–now · **Era:** Modernist · **Domain:** Graphic & UI Design · **Also called:** Braun design, Less but better, Ten principles of good design

## When to load this skill

Load it when the user asks for: "dieter rams", "braun", "less but better", "good design", "functionalism", "hardware ui", "control panel", "calculator", "teenage engineering".

Good for: audio and hardware product pages, smart home and device apps, calculators and tools, settings and control UIs, industrial design portfolios.

Do not use it when:
- The brand must feel emotional, loud or playful.
- The page is an editorial feature with big images.
- The audience expects rich visual effects.

## System directives

When generating UI or graphic layouts in Rams Functionalism (UI), you MUST:

1. Limit the palette to 3 neutrals (warm greys) and one signal colour (orange #E8590C) used on at most 5% of the surface.
2. Group controls in labelled zones; each control has a text label of 12px to 14px and a fixed place on a 4px grid.
3. Give each control one job and make its state visible: use a solid fill for on and an outline for off.
4. Use radius 2px to 4px on buttons and panels; radius never exceeds 8px.
5. Set all type in one neo-grotesque sans serif at 4 sizes: 12, 14, 18 and 32px.
6. Arrange panels in a modular layout of equal units of 80px to 120px; align each edge to a unit.
7. Colour only the thing that signals: a state, a warning or a primary action.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Decorative gradients, glows and glass effects.
- **NEVER:** Two or more saturated accent colours.
- **NEVER:** Icons without a text label on a primary action.
- **NEVER:** Skeuomorphic knobs with fake materials.
- **NEVER:** Rounded containers with a radius above 8px.
- **NEVER:** Ornamental type and display faces.
- **NEVER:** Animation that does not show a state change.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■□□□□` 1/5 | pure minimal | maximalist |
| Dimensionality | `■■□□□` 2/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■■■■` 5/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■■□□□` 2/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■□□□□` 1/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** A modular grid of 8 columns with 16px gutters and a 4px baseline; controls sit in equal units of 80px to 120px and group by function.
- **Whitespace ratio:** 35% to 50% of the surface stays empty; the spacing scale is 4, 8, 16, 32 and 64px.
- **Alignment rules:** Flush left; labels sit above or left of controls; groups align to a shared baseline.
- **Container geometry:** Rectangles with a 2px to 4px radius; thin 1px dividers; groups sit on a surface one step lighter or darker than the ground.

## Typography

- **Classifications:** neo-grotesque sans serif
- **Tracking:** Display takes -0.01em; body stays at 0; labels take +0.04em.
- **Leading:** Display 1.1; body 1.5.
- **Hierarchy rules:**
  - Use two weights: regular (400) and medium (500) or bold (700) for labels.
  - Use sizes 12, 14, 18 and 32px only.
  - Set labels in lower case or sentence case at 12px.
  - Show a value in a mono face with tabular numerals.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Hanken Grotesk | Hanken Grotesk | A single-family setting, in the neutral voice of Akzidenz-Grotesk. |
| Inter Tight | Inter | A close match to Helvetica for labels and text. |
| Archivo | IBM Plex Mono | A grotesque with a mono face for values and units. |

## Colour & lighting

- **Palette structure:** Warm greys with one orange signal.
- **Contrast rules:** Graphite on fog holds at least 11:1; orange marks state and primary action only.
- **Surface treatment:** Matt, flat or very slightly tonal fields; a step of 4% to 8% lightness separates a group from the ground.
- **Light and shadow:** Almost none; a 1px inner edge in white at 60% opacity simulates a pressed edge on controls.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Fog | `#E9E7E2` | background |
| Graphite | `#2B2B2A` | text |
| Stone | `#D5D2CB` | surface |
| Smoke | `#6B6A66` | secondary text |
| Signal Orange | `#E8590C` | accent |
| Off White | `#F6F5F1` | raised surface |

## Materiality & texture

- **Surface simulation:** Matt moulded plastic and anodised aluminium, drawn in flat tone with no texture.
- **Border rules:** 1px dividers in a darker grey (#C4C1BA); controls have a 1px border in the same grey.
- **Blur and elevation:** No blur. Elevation is shown by one tone step and a 1px edge, not by shadow.

## Ornamentation & iconography

- **Iconography:** Plain pictograms with a 1.5px stroke, butt caps and mitre joins, always with a text label for a primary action.
- **Illustration:** Product photographs on a grey ground or plain diagrams of the control layout; no decorative illustration.
- **Decorative elements:** control groups · unit grid · signal dot · 1px divider · tabular values

## Motion & interactivity

- **Born on screen:** no — the values here translate a print style for screen
- **Transition physics:** Translation for screen: short, mechanical moves that mimic a switch; state changes in one step with no overshoot.
- **Easing:** cubic-bezier(0.2, 0, 0, 1)
- **Duration (ms):** 120
- **Hover and active:** Hover raises the tone of a control by 4%; active state fills it with the signal colour.

## Code & token primer

Set `data-style="rams-functionalism-ui"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="rams-functionalism-ui"] {
  --color-bg: #E9E7E2;
  --color-surface: #D5D2CB;
  --color-text: #2B2B2A;
  --color-muted: #6B6A66;
  --color-primary: #2B2B2A;
  --color-accent: #E8590C;
  --color-border: #C4C1BA;
  --font-sans: "Hanken Grotesk", "Helvetica Neue", Arial, sans-serif;
  --font-display: "Hanken Grotesk", "Helvetica Neue", Arial, sans-serif;
  --border-radius: 3px;
  --border-width: 1px;
  --shadow-elevation: none;
  --backdrop-filter: none;
  --space-unit: 4px;
  --ease: cubic-bezier(0.2, 0, 0, 1);
  --duration: 120ms;
  --color-on-bg: #2B2B2A;
  --color-on-surface: #2B2B2A;
  --color-on-primary: #E9E7E2;
  --color-on-accent: #000000;
  --color-muted-on-bg: #646361;
  --color-muted-on-surface: #4D4C4A;
  --color-link: #2B2B2A;
  --color-link-on-surface: #2B2B2A;
  --display-weight: 500;
  --subhead-weight: 500;
  --body-weight: 400;
  --strong-weight: 700;
  --label-weight: 500;
  --display-tracking: -0.01em;
  --display-leading: 1.1;
  --display-case: none;
  --body-leading: 1.5;
  --body-size: 16px;
  --icon-stroke: 1.5;
}
```

Tailwind patterns:

| Element | Classes |
|---|---|
| page | `bg-[#E9E7E2] text-[#2B2B2A] font-sans antialiased px-6 md:px-12` |
| heading | `text-3xl md:text-4xl font-medium leading-[1.1] tracking-[-0.01em]` |
| body | `text-base leading-6 max-w-prose` |
| section | `rounded-[3px] border border-[#C4C1BA] bg-[#D5D2CB] p-4` |
| button | `rounded-[3px] border border-[#2B2B2A] bg-[#2B2B2A] px-5 py-2.5 text-sm font-medium text-[#F6F5F1] transition-colors duration-[120ms] hover:bg-[#E8590C] hover:border-[#E8590C]` |
| label | `text-xs font-medium tracking-[0.04em] text-[#6B6A66]` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** outline, stroke 1.5 on a 24px field, butt caps, miter joins, container: none. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Lucide (Regular) by Lucide Contributors, licence ISC. Reason: A thin, even line with a plain pictogram form, always shown with a label. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 500, tracking -0.01em, leading 1.1, case: none.
- **Weights:** display 500, subhead 500, body 400, bold in text 700, labels and buttons 500. The style uses 3 weights (400, 500, 700) and no other. The display is 100 heavier than the body. The accent is colour: one coloured word or field is the accent, so the weights stay quiet.
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

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **warmer**: move toward [`mid-century-modern`](../mid-century-modern/SKILL.md) (Mid-Century Modern). Add wood and earth tones and a second warm hue; keep the 4px grid and labels.
- If the user asks for **more minimal**: move toward [`swiss-international`](../swiss-international/SKILL.md) (Swiss International Style). Remove the control groups and the surfaces; keep type and the single accent.
- If the user asks for **more app-like**: move toward [`material-design`](../material-design/SKILL.md) (Material Design). Add elevation levels of 1dp to 8dp and a 12px radius; keep the signal colour.

- **Came from (go here for a more orthodox version):** [`bauhaus`](../bauhaus/SKILL.md), [`swiss-international`](../swiss-international/SKILL.md)
- **Led to (go here for a newer version):** [`cassette-futurism`](../cassette-futurism/SKILL.md)
- **Mixes well with:** [`flat-design`](../flat-design/SKILL.md)
- **Kin in another domain:** [`international-style-architecture`](../international-style-architecture/SKILL.md), [`minimalist-interior`](../minimalist-interior/SKILL.md), [`outline-icon`](../outline-icon/SKILL.md)
- **Nearest by vector profile:** [`dark-devtool-ui`](../dark-devtool-ui/SKILL.md), [`de-stijl-web`](../de-stijl-web/SKILL.md), [`swiss-international`](../swiss-international/SKILL.md)

## Emotional target

The viewer feels that the object is honest, quiet and easy to use.

**Keywords:** honest, quiet, functional, precise, durable, unobtrusive · **Brand archetypes:** sage, creator

## Sources

- Dieter Rams, Ten Principles for Good Design (Vitsœ)
- Sophie Lovell, Dieter Rams: As Little Design as Possible (Phaidon, 2011)

---

Generated from [`data/design/styles/rams-functionalism-ui.json`](../../data/design/styles/rams-functionalism-ui.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
