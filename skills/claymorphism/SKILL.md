---
name: claymorphism
description: "Apply the Claymorphism style (2021–2023) when generating UI or graphic layouts. Load when the user asks for: claymorphism, clay, 3d clay, soft 3d, inflated, puffy."
domain: design
era: contemporary-spatial
triggers:
  - "claymorphism"
  - "clay"
  - "3d clay"
  - "soft 3d"
  - "inflated"
  - "puffy"
  - "pastel 3d"
  - "playful app"
vector_profile:
  ornamentation: 3
  dimensionality: 4
  grid_rigidity: 2
  skeuomorphic_realism: 3
  typographic_expressiveness: 3
---

# Claymorphism

> The interface is a toy: soft, inflated forms with colour make the screen friendly and touchable.

Puffy, rounded 3D shapes in soft pastel colour with double inner shadows and a soft outer shadow, like modelling clay. It followed neumorphism and flat illustration and turns the interface into toys.

**Period:** 2021–2023 · **Era:** Contemporary & Spatial · **Domain:** Graphic & UI Design · **Also called:** Clay UI, 3D clay style, Soft 3D UI

## When to load this skill

Load it when the user asks for: "claymorphism", "clay", "3d clay", "soft 3d", "inflated", "puffy", "pastel 3d", "playful app".

Good for: kids and education apps, consumer wellness and finance for young users, app landing pages, game and creator tools, onboarding flows.

Do not use it when:
- The audience is professional and data-heavy.
- The brand must feel serious or austere.
- The page needs high-density tables.

## System directives

When generating UI or graphic layouts in Claymorphism, you MUST:

1. Give containers a radius of 24px to 40px and buttons a radius of 999px.
2. Build depth with 3 shadows: an outer soft shadow (0 16px 32px at 20%), an inner light highlight (inset 8px 8px 16px white at 60%) and an inner dark one (inset -8px -8px 16px at 12%).
3. Use pastel fills with saturation of 40% to 70% and lightness of 70% to 88%; use 3 to 5 hues on one page.
4. Set headlines in a rounded, heavy display face at 40px or larger and body in a rounded sans at 16px.
5. Inflate 3D icons and illustrations to look like clay: round forms, no sharp edges, a 2px lighter rim.
6. Float shapes at 8px to 24px offsets and give the main object a gentle bob of 6px to 10px.
7. Keep text on pastel at contrast 4.5:1 or more by using a dark navy (#2B2D54) for body text.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Sharp corners and thin hairlines.
- **NEVER:** Flat fills with no inner shadow.
- **NEVER:** Dark, saturated or neon palettes.
- **NEVER:** Hard black outlines.
- **NEVER:** Thin or light type.
- **NEVER:** Photographic realism.
- **NEVER:** Shadows that are only black and hard.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■■□□` 3/5 | pure minimal | maximalist |
| Dimensionality | `■■■■□` 4/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■□□□` 2/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■■■□□` 3/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■■■□□` 3/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** A loose 12-column grid with 32px gutters; big soft cards and floating objects overlap the grid by 16px to 48px.
- **Whitespace ratio:** 30% to 45% of the surface stays empty; the spacing scale is 8, 16, 32, 48 and 80px.
- **Alignment rules:** Centred hero with floating objects; cards flush left inside; objects offset by 8px to 24px.
- **Container geometry:** Rounded cards of 24px to 40px; pill buttons; circles for icon containers; no sharp corner.

## Typography

- **Classifications:** rounded sans serif · rounded display
- **Tracking:** Display takes 0em; body stays at 0.
- **Leading:** Display 1.1; body 1.6.
- **Hierarchy rules:**
  - Use two weights: regular (400) and bold (700); display runs at 600 or 700.
  - Use sizes 16, 20, 40 and 72px.
  - Set headlines in sentence case.
  - Round the numerals and keep tracking at 0.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Fredoka | Nunito | A round, friendly display with a round text face. |
| Baloo 2 | Nunito Sans | A heavy, soft display for big headlines. |
| Quicksand | Quicksand | A single rounded family that stays light on mobile. |

## Colour & lighting

- **Palette structure:** Soft pastel hues on a pale tint, with a dark navy for text.
- **Contrast rules:** Navy on cloud holds 11:1; navy on each pastel holds at least 7:1; pastel carries fills, not text.
- **Surface treatment:** Soft, matte clay: smooth fills with inner highlight and inner shade.
- **Light and shadow:** Light from the top left: a white inner highlight at the top left and a dark inner shade at the bottom right; the outer shadow falls down.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Cloud | `#F4F1FF` | background |
| Navy | `#2B2D54` | text |
| Candy Pink | `#FF9CC2` | primary |
| Sky | `#8FD3FF` | accent |
| Butter | `#FFE08A` | second accent |
| Mint | `#A8EBC8` | third accent |

## Materiality & texture

- **Surface simulation:** Modelling clay or inflated vinyl, drawn with inner and outer shadows.
- **Border rules:** No border; the 2px lighter rim comes from the inner highlight.
- **Blur and elevation:** Outer shadow 0 16px 32px at 20%; inner highlight inset 8px 8px 16px white at 60%; inner shade inset -8px -8px 16px at 12%.

## Ornamentation & iconography

- **Iconography:** Solid, chubby icons with a round form and a 3px equivalent weight, in a pastel disc.
- **Illustration:** 3D rendered clay characters, plants and objects with soft light and round forms.
- **Decorative elements:** inflated card · floating object · pastel disc · soft shadow

## Motion & interactivity

- **Born on screen:** yes
- **Transition physics:** Soft, springy motion: objects bob by 6px to 10px over 3s; buttons squash by 4% on press and spring back.
- **Easing:** cubic-bezier(0.34, 1.56, 0.64, 1)
- **Duration (ms):** 300
- **Hover and active:** Hover lifts the card by 4px and widens the outer shadow by 8px; active state squashes it to scale 0.96.

## Code & token primer

Set `data-style="claymorphism"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="claymorphism"] {
  --color-bg: #F4F1FF;
  --color-surface: #FFFFFF;
  --color-text: #2B2D54;
  --color-muted: #5A5C86;
  --color-primary: #FF9CC2;
  --color-accent: #8FD3FF;
  --color-border: #E2DCF5;
  --font-sans: "Nunito", system-ui, sans-serif;
  --font-display: "Fredoka", "Nunito", system-ui, sans-serif;
  --border-radius: 32px;
  --border-width: 0px;
  --shadow-elevation: 0 16px 32px rgba(43,45,84,0.2), inset 8px 8px 16px rgba(255,255,255,0.6), inset -8px -8px 16px rgba(43,45,84,0.12);
  --backdrop-filter: none;
  --space-unit: 8px;
  --ease: cubic-bezier(0.34, 1.56, 0.64, 1);
  --duration: 300ms;
  --type-ratio: 1.333;
  --size-small: 12px;
  --size-h3: 28.43px;
  --size-h2: 37.9px;
  --size-h1: 50.52px;
  --color-on-bg: #2B2D54;
  --color-on-surface: #2B2D54;
  --color-on-primary: #2B2D54;
  --color-on-accent: #2B2D54;
  --color-muted-on-bg: #5A5C86;
  --color-muted-on-surface: #5A5C86;
  --color-link: #2B2D54;
  --color-link-on-surface: #2B2D54;
  --display-weight: 600;
  --subhead-weight: 600;
  --body-weight: 400;
  --strong-weight: 700;
  --label-weight: 600;
  --display-tracking: 0em;
  --display-leading: 1.1;
  --display-case: none;
  --body-leading: 1.6;
  --body-size: 16px;
  --icon-stroke: 3;
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
| page | `bg-[#F4F1FF] text-[#2B2D54] font-sans antialiased px-6 md:px-16` |
| heading | `text-5xl md:text-7xl font-semibold leading-[1.1]` |
| body | `text-base leading-[1.6]` |
| section | `rounded-[32px] bg-white p-8 shadow-[0_16px_32px_rgba(43,45,84,0.2),inset_8px_8px_16px_rgba(255,255,255,0.6),inset_-8px_-8px_16px_rgba(43,45,84,0.12)]` |
| button | `rounded-full bg-[#FF9CC2] px-8 py-3.5 text-base font-bold text-[#2B2D54] shadow-[0_12px_24px_rgba(43,45,84,0.2),inset_6px_6px_12px_rgba(255,255,255,0.6)] transition-transform duration-300 hover:-translate-y-1 active:scale-95` |
| label | `text-xs font-semibold text-[#5A5C86]` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** solid, stroke 3 on a 24px field, round caps, round joins, container: circle. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Solar (Bold) by 480 Design, licence CC BY 4.0. Reason: A bold, round, filled family that looks inflated, like clay, inside a pastel disc. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 600, tracking 0em, leading 1.1, case: none.
- **Weights:** display 600, subhead 600, body 400, bold in text 700, labels and buttons 600. The style uses 3 weights (400, 600, 700) and no other. The display is 200 heavier than the body. The accent is colour: one coloured word or field is the accent, so the weights stay quiet.
- **Body type:** 16px, leading 1.6.
- **Page:** hero split, center aligned, airy density, accent tilt 0°.
- **Ground:** soft. Clay surfaces are soft puffed shapes in pastel colour with a deep soft shadow. Put the class `ground` on the first screen of the page; it takes `--ground`, a stack of gradients built from the colour tokens. The ground can run behind the copy, so put the class `ground-copy` on each text block of that screen: the block gets `--color-bg` and a soft edge. Keep the rest of the page on `--color-bg`.
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

### Clay look (process)

Forms that look modelled in soft clay: round edges, one matte material and soft, even light. Origin: film & video, United States, c. 1908.

- Round every edge; set the fillet at 10% to 20% of the form size.
- Use one matte material with no texture and no specular highlight.
- Light with one large soft source and a soft contact shadow under the form.

### Dual soft shadow (process)

A light shadow on one side and a dark shadow on the other, on a ground of the same colour, so that a shape seems pressed out of the surface. Origin: graphic & ui design, Online (Dribbble), 2019.

- Use the ground colour for the shape; no border.
- Cast a dark shadow 6 to 12 px to the bottom right and a light shadow at the same distance to the top left.
- Blur each shadow by 2 times its distance.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **Dribbble** (platform, web, 2009–now), published the style. A web site where designers post small shots of interface work. Several interface trends, neumorphism among them, spread from shots that were posted there.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Base colour (`base_colour`) | #FF9CC2 | #FF9CC2, #8FD3FF, #2B2D54 | --color-primary, --color-on-primary, --color-link-on-surface |
| Accent colour (`accent_colour`) | #8FD3FF | #8FD3FF, #FF9CC2 | --color-accent, --color-on-accent, --color-link |
| Corner radius (`corner_radius`) | 32px | 16–48 px | --border-radius |
| Grid step (`grid_step`) | 8px | 4–12 px | --space-unit, --grid-gutter |
| Type scale ratio (`type_scale_ratio`) | 1.333 | 1.25–1.414 | --type-ratio, --size-small, --size-h3, --size-h2, --size-h1 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **flatter**: move toward [`flat-design`](../flat-design/SKILL.md) (Flat Design). Drop the inner shadows and keep the pastel and the radius.
- If the user asks for **more subtle**: move toward [`neumorphism`](../neumorphism/SKILL.md) (Neumorphism). Use one neutral colour and mute the shadows to 10% opacity.
- If the user asks for **more playful**: move toward [`corporate-memphis`](../corporate-memphis/SKILL.md) (Corporate Memphis). Replace the 3D objects with flat figures and add squiggles.

- **Came from (go here for a more orthodox version):** [`neumorphism`](../neumorphism/SKILL.md)
- **Rejects (the opposite pole; do not blend):** [`flat-design`](../flat-design/SKILL.md)
- **Mixes well with:** [`corporate-memphis`](../corporate-memphis/SKILL.md), [`scrapbook-ui`](../scrapbook-ui/SKILL.md)
- **Kin in another domain:** [`clay-3d-icon`](../clay-3d-icon/SKILL.md)
- **Nearest by vector profile:** [`surrealism-web`](../surrealism-web/SKILL.md), [`blob-world`](../blob-world/SKILL.md), [`frutiger-aero`](../frutiger-aero/SKILL.md)

## Emotional target

The viewer feels playful, soft and safe, as with a toy.

**Keywords:** playful, soft, friendly, toy-like, cute, safe · **Brand archetypes:** innocent, jester

## Sources

- Michal Malewicz, Claymorphism (Hype4 Academy, 2021)
- Dribbble and Behance public clay-style shots (2021–2022)

---

Generated from [`data/design/styles/claymorphism.json`](../../data/design/styles/claymorphism.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
