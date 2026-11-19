---
name: neo-brutalism-ui
description: "Apply the Neo-Brutalism UI style (2020–present) when generating UI or graphic layouts. Load when the user asks for: neo-brutalism, neubrutalism, neobrutalist, brutalist ui, thick black borders, hard shadow."
domain: design
era: contemporary-spatial
triggers:
  - "neo-brutalism"
  - "neubrutalism"
  - "neobrutalist"
  - "brutalist ui"
  - "thick black borders"
  - "hard shadow"
  - "offset shadow"
  - "gumroad style"
  - "loud flat colours"
  - "sticker style"
vector_profile:
  ornamentation: 3
  dimensionality: 2
  grid_rigidity: 3
  skeuomorphic_realism: 1
  typographic_expressiveness: 4
---

# Neo-Brutalism UI

> An interface earns trust by showing its structure openly and being loud about it, because every border and shadow is a stated fact.

Flat, loud colour fields with thick black borders and hard, unblurred offset shadows. It grew from product sites such as Gumroad and from Figma community kits as a deliberate reply to corporate softness.

**Period:** 2020–present · **Era:** Contemporary & Spatial · **Domain:** Graphic & UI Design · **Also called:** Neubrutalism, Neobrutalism, Brutalist Web UI

## When to load this skill

Load it when the user asks for: "neo-brutalism", "neubrutalism", "neobrutalist", "brutalist ui", "thick black borders", "hard shadow", "offset shadow", "gumroad style", "loud flat colours", "sticker style".

Good for: creator-economy products, indie SaaS landing pages, developer tool sites, portfolios, event and festival sites.

Do not use it when:
- The brand must signal quiet luxury, medical care or banking security.
- The interface is a dense enterprise tool, because 3px borders and 4px shadows consume space on every row.
- The audience expects a native platform look, such as an OS settings screen.

## System directives

When generating UI or graphic layouts in Neo-Brutalism UI, you MUST:

1. Draw a solid #000000 border of 2px to 4px around every card, button, input and image.
2. Cast one hard shadow with zero blur, offset 4px 4px, for example 4px 4px 0 0 #000000, on every raised element.
3. Fill surfaces with flat saturated colour at 100% opacity, and use two to four loud hues on one page.
4. On hover, move the element by the shadow offset and cut the shadow to 0, so that it appears to press into the page.
5. Use radii of 0px to 8px only, and use the same value on all elements of one page.
6. Set headings in a heavy grotesque or mono face at weight 700 or higher, in sizes from 48px to 96px.
7. Keep text black on colour fields, and reach at least 7:1 contrast on every fill.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Blurred drop shadows with a blur radius above 0px.
- **NEVER:** Subtle grey gradients or glossy highlights on surfaces.
- **NEVER:** Pastel, low-saturation fills with grey text.
- **NEVER:** Hairline 1px borders or borders in a colour other than black.
- **NEVER:** Mixed corner radii on one page, such as 4px on cards and 24px on buttons.
- **NEVER:** Translucent or backdrop-blurred panels.
- **NEVER:** Thin font weights below 500 for headings.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■■□□` 3/5 | pure minimal | maximalist |
| Dimensionality | `■■□□□` 2/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■■□□` 3/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■□□□□` 1/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■■■■□` 4/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** A 12-column grid with 24px to 32px gutters and cards that sit in blocks of 2, 3 or 4 columns; the offset shadow adds 4px to 8px of visual width.
- **Whitespace ratio:** 25–40% of the surface is open; the spacing scale is 8, 16, 24, 32, 48 and 64px, and a card has 24px padding.
- **Alignment rules:** Left-aligned text; blocks sit on grid edges with a slight tilt of 1 to 2 degrees allowed on stickers and badges only; sections are cut by full-width 3px black rules.
- **Container geometry:** Rectangles with a 0px to 8px radius, a 3px black border and a 4px 4px 0 0 #000000 shadow; pills use a 999px radius only for tags.

## Typography

- **Classifications:** grotesque sans · monospace · slab serif
- **Tracking:** Display sizes take -0.03em; body stays at 0; upper-case labels take +0.05em.
- **Leading:** Display 1.0 to 1.1; body 1.5; labels 1.2.
- **Hierarchy rules:**
  - Use weight 700 or 800 for headings and 400 or 500 for body; skip the light weights.
  - Set headings at 48px to 96px and body at 16px to 18px, a ratio of about 3:1 or higher.
  - Set buttons and labels in bold upper case at 14px with +0.05em tracking.
  - Put the key word of a headline on a colour highlight block with a 3px black border.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Space Grotesk | DM Sans | Quirky grotesque headlines over a plain text face. |
| Archivo Black | Work Sans | Heavy poster-weight display for large headings. |
| Bricolage Grotesque | Inter | Condensed, high-contrast display with a neutral body. |
| Space Mono | Space Grotesk | Monospace labels for a raw, technical voice. |

## Colour & lighting

- **Palette structure:** Black outlines, a warm off-white or yellow page and two to four loud flat hues such as pink, blue and green, each at 100% opacity and used in large blocks.
- **Contrast rules:** Black text on every loud fill reaches at least 7:1, for example 15:1 on Lemon and 7:1 on Electric Blue; white text is allowed only on black fills; the 3px black border gives each control a 21:1 edge.
- **Surface treatment:** Flat opaque fields at 100% opacity with no gradient, no texture and no transparency; an optional dot or grid pattern at 8% black on the page background.
- **Light and shadow:** No light source is simulated; a hard offset shadow of 4px 4px 0 0 #000000 falls to the bottom right with zero blur, and it works as an outline extension.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Ink | `#000000` | borders, shadows and text |
| Cream | `#FFF8E7` | page background |
| Lemon | `#FFE14D` | highlight and primary fill |
| Hot Pink | `#FF5DA2` | accent fill |
| Electric Blue | `#4D7CFF` | secondary accent |
| Mint | `#6EE7B7` | success and tag fill |
| White | `#FFFFFF` | card surface |

## Materiality & texture

- **Surface simulation:** None; the surface is flat cut paper or sticker stock with a black outline and a hard drop, and it imitates no real material.
- **Border rules:** Solid #000000 borders of 2px on small controls, 3px on cards and 4px on hero blocks; the border colour never changes between states.
- **Blur and elevation:** Blur is 0px everywhere; elevation is the shadow offset: 2px 2px on tags, 4px 4px on cards and buttons, 8px 8px on modals, all in #000000.

## Ornamentation & iconography

- **Iconography:** Bold icons with a 2.5px to 3px stroke and square or round caps at 24px, in black, often inside a coloured circle with a 2px border.
- **Illustration:** Flat illustration in the loud palette with thick black outlines, plus stickers, stars and arrows; hand-drawn marks are welcome.
- **Decorative elements:** stickers and badges · marquee text bands · starbursts · dot grid backgrounds · arrows and underline scribbles

## Motion & interactivity

- **Born on screen:** yes
- **Transition physics:** Elements translate by exactly the shadow offset on hover and press, so that the shadow appears to collapse; the move is short, linear in feel and without overshoot.
- **Easing:** cubic-bezier(0.2, 0, 0, 1)
- **Duration (ms):** 120
- **Hover and active:** Hover moves the element 4px right and 4px down and sets the shadow to 0 0 0 0; active keeps that position; focus adds a 3px solid #4D7CFF outline offset by 2px.

## Code & token primer

Set `data-style="neo-brutalism-ui"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="neo-brutalism-ui"] {
  --color-bg: #FFF8E7;
  --color-surface: #FFFFFF;
  --color-text: #000000;
  --color-muted: #3A3A3A;
  --color-primary: #FFE14D;
  --color-accent: #FF5DA2;
  --color-border: #000000;
  --font-sans: "DM Sans", "Work Sans", system-ui, sans-serif;
  --font-display: "Space Grotesk", "DM Sans", system-ui, sans-serif;
  --border-radius: 4px;
  --border-width: 3px;
  --shadow-elevation: 4px 4px 0 0 #000000;
  --backdrop-filter: none;
  --space-unit: 8px;
  --ease: cubic-bezier(0.2, 0, 0, 1);
  --duration: 120ms;
  --shadow-large: 8px 8px 0 0 #000000;
  --accent-blue: #4D7CFF;
  --type-ratio: 1.5;
  --size-small: 11.33px;
  --size-h3: 38.25px;
  --size-h2: 57.38px;
  --size-h1: 86.06px;
  --color-on-bg: #000000;
  --color-on-surface: #000000;
  --color-on-primary: #000000;
  --color-on-accent: #000000;
  --color-muted-on-bg: #3A3A3A;
  --color-muted-on-surface: #3A3A3A;
  --color-link: #000000;
  --color-link-on-surface: #000000;
  --display-weight: 700;
  --subhead-weight: 700;
  --body-weight: 500;
  --strong-weight: 700;
  --label-weight: 700;
  --display-tracking: -0.03em;
  --display-leading: 0.95;
  --display-case: none;
  --body-leading: 1.5;
  --body-size: 17px;
  --icon-stroke: 2.5;
  --ground: linear-gradient(var(--color-primary), var(--color-primary)) 86% 22% / 26vmin 26vmin no-repeat,
    linear-gradient(var(--color-on-bg), var(--color-on-bg)) calc(86% + 14px) calc(22% + 14px) / 26vmin 26vmin no-repeat,
    linear-gradient(var(--color-accent), var(--color-accent)) 68% 82% / 18vmin 14vmin no-repeat,
    linear-gradient(var(--color-on-bg), var(--color-on-bg)) calc(68% + 10px) calc(82% + 10px) / 18vmin 14vmin no-repeat,
    repeating-linear-gradient(-45deg, color-mix(in oklab, var(--color-on-bg) 8%, transparent) 0 2px, transparent 2px 14px),
    var(--color-bg);
}
```

Tailwind patterns:

| Element | Classes |
|---|---|
| page | `bg-[#FFF8E7] text-black font-sans antialiased p-6 md:p-12` |
| card | `rounded bg-white p-6 border-[3px] border-black shadow-[4px_4px_0_0_#000000]` |
| button | `rounded border-[3px] border-black bg-[#FFE14D] px-6 py-3 text-sm font-bold uppercase tracking-[0.05em] text-black shadow-[4px_4px_0_0_#000000] transition-all duration-[120ms] hover:translate-x-1 hover:translate-y-1 hover:shadow-none` |
| input | `rounded border-[3px] border-black bg-white px-4 py-3 text-black shadow-[4px_4px_0_0_#000000] outline-none focus:outline-[3px] focus:outline-offset-2 focus:outline-[#4D7CFF]` |
| heading | `font-extrabold text-5xl md:text-7xl leading-none tracking-[-0.03em] text-black` |
| tag | `inline-block rounded-full border-2 border-black bg-[#6EE7B7] px-3 py-1 text-xs font-bold uppercase shadow-[2px_2px_0_0_#000000]` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** outline, stroke 2.5 on a 24px field, square caps, miter joins, container: square. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Phosphor (Bold) by Phosphor Icons, licence MIT. Reason: A heavy line with a blunt weight that matches the thick borders. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 700, tracking -0.03em, leading 0.95, case: none.
- **Weights:** display 700, subhead 700, body 500, bold in text 700, labels and buttons 700. The style uses 2 weights (500, 700) and no other. The display is 200 heavier than the body. The accent is weight: a heavier word is the accent, so the steps between the weights are clear.
- **Body type:** 17px, leading 1.5.
- **Page:** hero split, left aligned, compact density, accent tilt -1°.
- **Ground:** blocks. Neo-brutalism uses flat colour blocks with a thick border and a hard black shadow. Put the class `ground` on the first screen of the page; it takes `--ground`, a stack of gradients built from the colour tokens. The ground can run behind the copy, so put the class `ground-copy` on each text block of that screen: the block gets `--color-bg` and a soft edge. Keep the rest of the page on `--color-bg`.
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

### Hard offset shadow (motif)

A solid copy of a letter or a box, set behind it and moved down and to the side, with no blur. Origin: typeface, London, United Kingdom, c. 1815.

- Move the shadow 4 to 8 px down and to the right, or 5% to 10% of the letter height.
- Fill the shadow with one solid colour, usually black.
- Use no blur and no transparency.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Base colour (`base_colour`) | #FFE14D | #FFE14D, #FF5DA2, #000000 | --color-primary, --color-on-primary, --color-link-on-surface |
| Accent colour (`accent_colour`) | #FF5DA2 | #FF5DA2, #FFE14D | --color-accent, --color-on-accent, --color-link |
| Corner radius (`corner_radius`) | 4px | 2–6 px | --border-radius |
| Grid step (`grid_step`) | 8px | 4–12 px | --space-unit, --grid-gutter |
| Type scale ratio (`type_scale_ratio`) | 1.5 | 1.414–1.618 | --type-ratio, --size-small, --size-h3, --size-h2, --size-h1 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **calmer**: move toward [`flat-design`](../flat-design/SKILL.md) (Flat Design). Cut the border to 1px, remove the offset shadow and mute the fills to 60% saturation; keep the flat fields and the grid.
- If the user asks for **more orderly**: move toward [`swiss-international`](../swiss-international/SKILL.md) (Swiss International Style). Cut the palette to black, white and one red, set a 0px radius and flush-left text on a 12-column grid; keep the 2px rules.
- If the user asks for **more app-like**: move toward [`bento-grid-ui`](../bento-grid-ui/SKILL.md) (Bento Grid UI). Pack the content into a rectangular grid of mixed-size cells with a 16px gap; keep the 3px border and the hard shadow.
- If the user asks for **more polished**: move toward [`material-design`](../material-design/SKILL.md) (Material Design). Move to an 8px radius, a 1px border and a soft shadow of 0 2px 4px rgba(0, 0, 0, 0.2); keep one loud accent.

- **Came from (go here for a more orthodox version):** [`flat-design`](../flat-design/SKILL.md)
- **Rejects (the opposite pole; do not blend):** [`corporate-memphis`](../corporate-memphis/SKILL.md), [`material-design`](../material-design/SKILL.md)
- **Mixes well with:** [`anti-design`](../anti-design/SKILL.md), [`brutalist-web`](../brutalist-web/SKILL.md)
- **Kin in another domain:** [`brutalist-architecture`](../brutalist-architecture/SKILL.md)
- **Nearest by vector profile:** [`constructivism-web`](../constructivism-web/SKILL.md), [`editorial-serif-revival`](../editorial-serif-revival/SKILL.md), [`mid-century-modern`](../mid-century-modern/SKILL.md)

## Emotional target

Direct energy: the viewer feels that the brand is honest, a little rebellious and not afraid of being seen.

**Keywords:** loud, raw, honest, playful, rebellious, graphic · **Brand archetypes:** outlaw, jester, creator

## Sources

- Neubrutalism UI components, Figma Community (2022)
- Gumroad redesign, Gumroad (2021)

---

Generated from [`data/design/styles/neo-brutalism-ui.json`](../../data/design/styles/neo-brutalism-ui.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
