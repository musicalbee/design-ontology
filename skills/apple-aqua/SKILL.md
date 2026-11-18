---
name: apple-aqua
description: "Apply the Apple Aqua style (2000–2006) when generating UI or graphic layouts. Load when the user asks for: aqua, mac os x, gel buttons, pinstripe, glossy buttons, 2000s apple."
domain: design
era: postmodern-early-digital
triggers:
  - "aqua"
  - "mac os x"
  - "gel buttons"
  - "pinstripe"
  - "glossy buttons"
  - "2000s apple"
  - "brushed metal"
  - "web 2.0 gloss"
vector_profile:
  ornamentation: 3
  dimensionality: 4
  grid_rigidity: 4
  skeuomorphic_realism: 4
  typographic_expressiveness: 2
---

# Apple Aqua

> The screen is a liquid, tactile surface: every control is a glossy drop that invites a click.

Translucent blue gel buttons, pinstripe backgrounds, glossy droplets and brushed-metal windows. It came with Mac OS X in 2000 and made the screen look like water and candy.

**Period:** 2000–2006 · **Era:** Postmodern & Early Digital · **Domain:** Graphic & UI Design · **Also called:** Aqua, Mac OS X Aqua, Gel UI

## When to load this skill

Load it when the user asks for: "aqua", "mac os x", "gel buttons", "pinstripe", "glossy buttons", "2000s apple", "brushed metal", "web 2.0 gloss".

Good for: retro software and Mac themes, web 2.0 revival pages, nostalgia and portfolio sites, app landing pages with a friendly tone, kids and consumer tools.

Do not use it when:
- The product is a dense professional tool.
- The brand needs a flat, modern look.
- The page must be light for accessibility or low-power screens.

## System directives

When generating UI or graphic layouts in Apple Aqua, you MUST:

1. Make buttons pill-shaped (radius 999px) with a vertical gradient of 2 to 3 stops and a white gloss highlight on the top 45%.
2. Use a pinstripe background of 2px horizontal lines at 4% opacity on #EDEDED.
3. Use Aqua blue (#2A6FB8 to #A8D4FF) as the accent and keep other colours below 20% of the surface.
4. Give each panel an inner highlight (1px white at 80%) and an outer 1px border of #8E8E8E.
5. Set a soft drop shadow of 0 2px 6px at 30% black under windows and buttons.
6. Draw icons as glossy, 3D, high-detail objects at 48px or larger with a reflection.
7. Set text in a humanist sans-serif at 13px to 16px; titles are centred in the title bar.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Flat fills with no gradient or gloss.
- **NEVER:** Sharp rectangular buttons.
- **NEVER:** Monochrome icons without volume.
- **NEVER:** Dark themes with matt black surfaces.
- **NEVER:** Neon colours.
- **NEVER:** Hard offset shadows.
- **NEVER:** Text on gel with contrast below 4.5:1.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■■□□` 3/5 | pure minimal | maximalist |
| Dimensionality | `■■■■□` 4/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■■■□` 4/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■■■■□` 4/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■■□□□` 2/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** Windows and panels on a 4px grid; a title bar of 22px to 28px with three round buttons; panel margins of 12px to 20px.
- **Whitespace ratio:** 25% to 35% of the surface stays empty; the spacing scale is 4, 8, 12, 20 and 32px.
- **Alignment rules:** Titles centred in bars; controls flush left in groups; windows stack and overlap by 8px to 24px.
- **Container geometry:** Rounded rectangles of 6px to 10px for windows; pills (999px) for buttons; round buttons of 12px to 16px.

## Typography

- **Classifications:** humanist sans serif
- **Tracking:** Display takes 0em; body stays at 0.
- **Leading:** Display 1.2; body 1.45.
- **Hierarchy rules:**
  - Use two weights: regular (400) and bold (700).
  - Use sizes 13, 16, 24 and 40px.
  - Set window titles at 13px, centred, in regular weight.
  - Put a drop shadow of 0 1px 0 white at 60% under dark text on grey.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Nunito Sans | Nunito Sans | A rounded humanist that stands in for Lucida Grande. |
| Source Sans 3 | Source Sans 3 | A neutral humanist face for body text. |
| Quicksand | Nunito Sans | A round display face for titles. |

## Colour & lighting

- **Palette structure:** Aqua blue and pinstripe grey, with graphite and a lime or red signal for status buttons.
- **Contrast rules:** Graphite on pinstripe holds at least 10:1; white text on Aqua holds at least 4.5:1 at 16px bold.
- **Surface treatment:** Glossy gel: a vertical 2 to 3 stop gradient with a white highlight on the top half.
- **Light and shadow:** Light from the top; highlights of white at 60% to 80% on top edges; shadows fall down by 2px to 6px.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Pinstripe | `#EDEDED` | background |
| Aqua | `#2A6FB8` | primary |
| Aqua Light | `#A8D4FF` | highlight |
| Graphite | `#2B2F36` | text |
| Metal | `#C9CCD1` | surface |
| Droplet Green | `#6CC24A` | status |

## Materiality & texture

- **Surface simulation:** Water, glass and brushed metal, drawn with gradients and reflections.
- **Border rules:** 1px solid border in a darker tone of the fill (for example #2A6FB8 on Aqua).
- **Blur and elevation:** Soft shadow 0 2px 6px at 30%; inner highlight 1px white at 80%; no blur of the background.

## Ornamentation & iconography

- **Iconography:** Glossy, volumetric icons with a reflection at 48px or larger; small UI icons are solid glyphs with a gel dot.
- **Illustration:** 3D rendered objects with water-like transparency and highlights.
- **Decorative elements:** gel button · pinstripe · droplet · reflection · brushed-metal bar

## Motion & interactivity

- **Born on screen:** yes
- **Transition physics:** Fluid, liquid motion: windows genie-scale into the dock, buttons pulse with a slow 1.5s Aqua glow when default.
- **Easing:** cubic-bezier(0.4, 0, 0.2, 1)
- **Duration (ms):** 300
- **Hover and active:** Hover raises the gel highlight by 10%; active state darkens the gradient by 15% and moves the highlight down by 2px.

## Code & token primer

Set `data-style="apple-aqua"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="apple-aqua"] {
  --color-bg: #EDEDED;
  --color-surface: #C9CCD1;
  --color-text: #2B2F36;
  --color-muted: #5B6068;
  --color-primary: #2A6FB8;
  --color-accent: #2A6FB8;
  --color-border: #8E8E8E;
  --font-sans: "Nunito Sans", "Lucida Grande", sans-serif;
  --font-display: "Quicksand", "Nunito Sans", sans-serif;
  --border-radius: 10px;
  --border-width: 1px;
  --shadow-elevation: 0 2px 6px rgba(0,0,0,0.3);
  --backdrop-filter: none;
  --space-unit: 4px;
  --ease: cubic-bezier(0.4, 0, 0.2, 1);
  --duration: 300ms;
  --color-on-bg: #2B2F36;
  --color-on-surface: #2B2F36;
  --color-on-primary: #FFFFFF;
  --color-on-accent: #FFFFFF;
  --color-muted-on-bg: #5B6068;
  --color-muted-on-surface: #4B4E55;
  --color-link: #2B2F36;
  --color-link-on-surface: #2B2F36;
  --display-weight: 400;
  --subhead-weight: 400;
  --body-weight: 400;
  --strong-weight: 700;
  --label-weight: 700;
  --display-tracking: 0em;
  --display-leading: 1.2;
  --display-case: none;
  --body-leading: 1.45;
  --body-size: 16px;
  --icon-stroke: 2;
}
```

Tailwind patterns:

| Element | Classes |
|---|---|
| page | `bg-[#EDEDED] text-[#2B2F36] font-sans antialiased px-6` |
| heading | `text-4xl md:text-6xl leading-[1.2] text-center` |
| body | `text-base leading-[1.45]` |
| section | `rounded-[10px] border border-[#8E8E8E] bg-gradient-to-b from-white to-[#C9CCD1] p-5 shadow-[0_2px_6px_rgba(0,0,0,0.3)]` |
| button | `rounded-full border border-[#2A6FB8] bg-gradient-to-b from-[#2F76BF] to-[#2A6FB8] px-8 py-2.5 text-base font-bold text-white shadow-[0_2px_6px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.8)] transition duration-300 hover:brightness-110` |
| label | `text-[13px] font-bold` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** solid, stroke 2 on a 24px field, round caps, round joins, container: circle. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Fluent UI System Icons (Filled, 24) by Microsoft Corporation, licence MIT. Reason: A solid, soft-cornered family with volume that matches the glossy, filled look of gel controls. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 400, tracking 0em, leading 1.2, case: none.
- **Weights:** display 400, subhead 400, body 400, bold in text 700, labels and buttons 700. The style uses 2 weights (400, 700) and no other. The display has the weight of the body, so size and face carry the hierarchy. The accent is colour: one coloured word or field is the accent, so the weights stay quiet.
- **Body type:** 16px, leading 1.45.
- **Page:** hero split, center aligned, regular density, accent tilt 0°.
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

- If the user asks for **flatter**: move toward [`flat-design`](../flat-design/SKILL.md) (Flat Design). Remove the gloss and gradient; keep the blue and the radius.
- If the user asks for **more realistic**: move toward [`skeuomorphism`](../skeuomorphism/SKILL.md) (Skeuomorphism). Add leather, wood and stitching textures and deeper shadows.
- If the user asks for **more airy**: move toward [`frutiger-aero`](../frutiger-aero/SKILL.md) (Frutiger Aero). Add sky and grass backgrounds, bubbles and a lighter palette.

- **Came from (go here for a more orthodox version):** [`y2k-aesthetic`](../y2k-aesthetic/SKILL.md)
- **Mixes well with:** [`frutiger-aero`](../frutiger-aero/SKILL.md), [`liquid-glass-ui`](../liquid-glass-ui/SKILL.md), [`skeuomorphism`](../skeuomorphism/SKILL.md)
- **Kin in another domain:** [`glossy-3d-logo`](../glossy-3d-logo/SKILL.md), [`skeuomorphic-icon`](../skeuomorphic-icon/SKILL.md)
- **Nearest by vector profile:** [`cassette-futurism`](../cassette-futurism/SKILL.md), [`frutiger-aero`](../frutiger-aero/SKILL.md), [`liquid-glass-ui`](../liquid-glass-ui/SKILL.md)

## Emotional target

The viewer feels that the screen is friendly, tactile and delightful.

**Keywords:** glossy, friendly, liquid, tactile, optimistic, polished · **Brand archetypes:** lover, innocent

## Sources

- Apple Computer, Aqua Human Interface Guidelines (2001)
- John Siracusa, Mac OS X reviews, Ars Technica (2000–2012)

---

Generated from [`data/design/styles/apple-aqua.json`](../../data/design/styles/apple-aqua.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
