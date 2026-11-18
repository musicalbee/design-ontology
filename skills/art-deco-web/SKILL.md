---
name: art-deco-web
description: "Apply the Art Deco (web) style (1925–1939) when generating UI or graphic layouts. Load when the user asks for: art deco, gatsby, 1920s, jazz age, gold and black, luxury hotel."
domain: design
era: modernist
triggers:
  - "art deco"
  - "gatsby"
  - "1920s"
  - "jazz age"
  - "gold and black"
  - "luxury hotel"
  - "cocktail bar"
  - "sunburst"
  - "chrysler"
vector_profile:
  ornamentation: 4
  dimensionality: 2
  grid_rigidity: 5
  skeuomorphic_realism: 2
  typographic_expressiveness: 4
---

# Art Deco (web)

> Luxury is order: the machine age gives ornament a strict, symmetric geometry that looks rich and modern at once.

Symmetric geometry, stepped forms, fan and sunburst motifs and gold lines on a dark ground. It came out of the 1925 Paris exposition and stands for luxury and speed.

**Period:** 1925–1939 · **Era:** Modernist · **Domain:** Graphic & UI Design · **Also called:** Style Moderne, Jazz Age style, Gatsby style

## When to load this skill

Load it when the user asks for: "art deco", "gatsby", "1920s", "jazz age", "gold and black", "luxury hotel", "cocktail bar", "sunburst", "chrysler".

Good for: luxury hotels and bars, event and gala sites, jewellery and watches, film and theatre promotion, high-end packaging.

Do not use it when:
- The product is a fast tool for daily work.
- The audience expects a friendly, casual tone.
- The page needs long dense reading.

## System directives

When generating UI or graphic layouts in Art Deco (web), you MUST:

1. Compose every layout on a central axis: mirror the left and right halves to within 8px.
2. Draw ornament from arcs, fans, chevrons and stepped steps; build each motif on a 15° or 45° angle.
3. Use gold (#C9A24B) lines of 1px to 2px on a near-black or deep green ground; gold covers 10% to 20% of the surface.
4. Set headlines in upper case, geometric, high-contrast capitals at 48px or larger with tracking +0.12em to +0.2em.
5. Frame hero and card panels with a double border: a 2px gold line, a 6px gap and a 1px gold line.
6. Cut the corners of panels at 45° with a 16px chamfer instead of rounding them.
7. Keep body text at 16px in a geometric sans with 1.6 leading, and limit it to a column of 560px.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Asymmetric hero compositions.
- **NEVER:** Rounded pill buttons and soft corners.
- **NEVER:** Pastel palettes without gold or black.
- **NEVER:** Hand-drawn organic curves and plant ornament.
- **NEVER:** Lower-case display text.
- **NEVER:** Glow, blur and glass effects.
- **NEVER:** Gradients that are not a 2-stop metallic gold.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■■■□` 4/5 | pure minimal | maximalist |
| Dimensionality | `■■□□□` 2/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■■■■` 5/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■■□□□` 2/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■■■■□` 4/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** A centred 12-column grid with 24px gutters; the main content spans columns 3 to 10 and ornament fills the outer columns. Rhythm comes from repeated steps of 24px.
- **Whitespace ratio:** 20% to 30% of the surface stays empty; the spacing scale is 8, 16, 32, 64 and 128px.
- **Alignment rules:** Symmetric about the centre axis; headlines and CTA centred; body text flush left inside a centred column.
- **Container geometry:** Rectangles with a 16px chamfer on the top corners or a 0px radius; stepped (ziggurat) outlines for hero panels.

## Typography

- **Classifications:** geometric sans serif · inline display capitals
- **Tracking:** Display takes +0.12em to +0.2em; body stays at 0.01em.
- **Leading:** Display 1.1; body 1.6.
- **Hierarchy rules:**
  - Use two weights for the text face: regular (400) and semibold (600); the display face has one weight.
  - Use sizes 16, 24, 48 and 80px.
  - Set all headlines in upper case.
  - Rule a 1px gold line above and below each headline.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Poiret One | Josefin Sans | A thin 1920s deco display face with a geometric text face. |
| Limelight | Jost | A heavier deco display face for posters. |
| Cinzel | Montserrat | Roman capitals with a clean text face for luxury brands. |

## Colour & lighting

- **Palette structure:** Black or deep green, with one metallic gold and an ivory for text.
- **Contrast rules:** Ivory text holds at least 12:1 on onyx; gold carries rules and large display type only.
- **Surface treatment:** Flat dark fields with a 2-stop gold gradient allowed on rules and the headline fill only.
- **Light and shadow:** No cast shadows; light is implied by gold lines at 45° and a radial sunburst at 12% opacity.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Onyx | `#0D0D0F` | background |
| Emerald | `#0F3B2E` | secondary surface |
| Gold | `#C9A24B` | accent and rules |
| Ivory | `#F2EAD3` | text |
| Brass | `#8C6D2A` | dark rules |
| Ink Blue | `#14213D` | alternate surface |

## Materiality & texture

- **Surface simulation:** Lacquer, polished metal and inlaid wood; each surface is matt and flat on screen.
- **Border rules:** Double gold border: 2px, 6px gap, 1px.
- **Blur and elevation:** No blur. No elevation. A 0px offset; depth is made by nested stepped outlines.

## Ornamentation & iconography

- **Iconography:** Linear icons with a 1.5px stroke, butt caps, mitre joins and 45° cuts; place each icon in a chamfered or circular frame.
- **Illustration:** Sunbursts, fans, stepped skyscrapers and streamlined figures in flat gold and ivory on dark ground.
- **Decorative elements:** sunburst · fan motif · chevron band · stepped frame · gold rule

## Motion & interactivity

- **Born on screen:** no — the values here translate a print style for screen
- **Transition physics:** Translation for screen: smooth, symmetric, slow reveals; gold lines draw outward from the centre axis.
- **Easing:** cubic-bezier(0.65, 0, 0.35, 1)
- **Duration (ms):** 350
- **Hover and active:** Hover fills the chamfered button with gold and turns the text to onyx; active state darkens the gold by 10%.

## Code & token primer

Set `data-style="art-deco-web"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="art-deco-web"] {
  --color-bg: #0D0D0F;
  --color-surface: #0F3B2E;
  --color-text: #F2EAD3;
  --color-muted: #B9B09A;
  --color-primary: #C9A24B;
  --color-accent: #C9A24B;
  --color-border: #C9A24B;
  --font-sans: "Josefin Sans", "Jost", sans-serif;
  --font-display: "Poiret One", "Limelight", "Josefin Sans", sans-serif;
  --border-radius: 0px;
  --border-width: 1px;
  --shadow-elevation: none;
  --backdrop-filter: none;
  --space-unit: 8px;
  --ease: cubic-bezier(0.65, 0, 0.35, 1);
  --duration: 350ms;
  --type-ratio: 1.5;
  --size-small: 10.67px;
  --size-h3: 36px;
  --size-h2: 54px;
  --size-h1: 81px;
  --color-on-bg: #F2EAD3;
  --color-on-surface: #F2EAD3;
  --color-on-primary: #0D0D0F;
  --color-on-accent: #0D0D0F;
  --color-muted-on-bg: #B9B09A;
  --color-muted-on-surface: #B9B09A;
  --color-link: #C9A24B;
  --color-link-on-surface: #C9A24B;
  --display-weight: 400;
  --subhead-weight: 400;
  --body-weight: 400;
  --strong-weight: 600;
  --label-weight: 600;
  --display-tracking: 0.15em;
  --display-leading: 1.1;
  --display-case: uppercase;
  --body-leading: 1.6;
  --body-size: 16px;
  --icon-stroke: 1.5;
  --ground: radial-gradient(70% 60% at 50% 105%, transparent 30%, var(--color-bg) 75%),
    repeating-conic-gradient(from -90deg at 50% 108%, color-mix(in oklab, var(--color-primary) 34%, transparent) 0 4deg, transparent 4deg 9deg),
    repeating-radial-gradient(circle at 50% 108%, transparent 0 18vmin, color-mix(in oklab, var(--color-primary) 40%, transparent) 18vmin calc(18vmin + 2px), transparent calc(18vmin + 2px) 24vmin),
    var(--color-bg);
}
```

Tailwind patterns:

| Element | Classes |
|---|---|
| page | `bg-[#0D0D0F] text-[#F2EAD3] font-sans antialiased px-6 md:px-16` |
| heading | `text-5xl md:text-8xl uppercase tracking-[0.15em] leading-[1.1] text-center` |
| body | `text-base leading-[1.6] max-w-[560px] mx-auto` |
| section | `border border-[#C9A24B] outline outline-1 outline-offset-[6px] outline-[#C9A24B] bg-[#0F3B2E] p-8` |
| button | `rounded-none border border-[#C9A24B] bg-transparent px-8 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-[#C9A24B] transition-colors duration-[350ms] hover:bg-[#C9A24B] hover:text-[#0D0D0F]` |
| label | `text-xs font-semibold uppercase tracking-[0.2em] text-[#C9A24B]` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** outline, stroke 1.5 on a 24px field, butt caps, miter joins, container: square. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Solar (Linear) by 480 Design, licence CC BY 4.0. Reason: A thin, even line with sharp joins that matches the gold rule and the chamfered frame. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 400, tracking 0.15em, leading 1.1, case: uppercase.
- **Weights:** display 400, subhead 400, body 400, bold in text 600, labels and buttons 600. The style uses 2 weights (400, 600) and no other. The display has the weight of the body, so size and face carry the hierarchy. The accent is case and tracking: an upper-case label is the accent, so the weights stay few.
- **Body type:** 16px, leading 1.6.
- **Page:** hero stacked, center aligned, regular density, accent tilt 0°.
- **Ground:** rays. Deco ornament is the sunburst: gold rays and stepped arcs that rise from one point. Put the class `ground` on the first screen of the page; it takes `--ground`, a stack of gradients built from the colour tokens. The ground can run behind the copy, so put the class `ground-copy` on each text block of that screen: the block gets `--color-bg` and a soft edge. Keep the rest of the page on `--color-bg`.
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

### Sunburst (motif)

Rays from a disc or a half disc: a sign of light and of the new, on a facade, a gate, a mirror or a clock. Origin: architecture, Paris, 1925.

- Draw 12 to 36 rays from one centre; alternate long and short rays, or two finishes.
- Keep the centre disc at 15% to 30% of the full diameter.
- In a room, use one sunburst as the focal point of one wall.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Base colour (`base_colour`) | #C9A24B | #C9A24B, #F2EAD3 | --color-primary, --color-on-primary, --color-link-on-surface |
| Accent colour (`accent_colour`) | #C9A24B | #C9A24B, #F2EAD3 | --color-accent, --color-on-accent, --color-link |
| Corner radius (`corner_radius`) | 0px | 0–0 px | --border-radius |
| Grid step (`grid_step`) | 8px | 4–12 px | --space-unit, --grid-gutter |
| Type scale ratio (`type_scale_ratio`) | 1.5 | 1.414–1.618 | --type-ratio, --size-small, --size-h3, --size-h2, --size-h1 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **calmer**: move toward [`swiss-international`](../swiss-international/SKILL.md) (Swiss International Style). Remove the ornament and gold; keep the central axis and a single typeface.
- If the user asks for **more organic**: move toward [`art-nouveau-web`](../art-nouveau-web/SKILL.md) (Art Nouveau (web)). Replace arcs and steps with curved, plant-based borders and a muted palette.
- If the user asks for **more modern**: move toward [`mid-century-modern`](../mid-century-modern/SKILL.md) (Mid-Century Modern). Drop the symmetry and gold, add earth tones and a free asymmetric layout.

- **Led to (go here for a newer version):** [`luxury-typography-web`](../luxury-typography-web/SKILL.md)
- **Rejects (the opposite pole; do not blend):** [`art-nouveau-web`](../art-nouveau-web/SKILL.md)
- **Mixes well with:** [`art-nouveau-web`](../art-nouveau-web/SKILL.md), [`bauhaus`](../bauhaus/SKILL.md)
- **Kin in another domain:** [`art-deco-architecture`](../art-deco-architecture/SKILL.md), [`art-deco-interior`](../art-deco-interior/SKILL.md), [`hollywood-regency-interior`](../hollywood-regency-interior/SKILL.md), [`neo-deco-interior`](../neo-deco-interior/SKILL.md)
- **Nearest by vector profile:** [`cybercore-web`](../cybercore-web/SKILL.md), [`pixel-art-web`](../pixel-art-web/SKILL.md), [`synthwave-web`](../synthwave-web/SKILL.md)

## Emotional target

The viewer feels glamour, wealth and confident modern order.

**Keywords:** glamorous, luxurious, symmetric, confident, ceremonial, opulent · **Brand archetypes:** ruler, magician, lover

## Sources

- Alastair Duncan, Art Deco (Thames & Hudson, 1988)
- Wikidata Q173782 (Art Deco)

---

Generated from [`data/design/styles/art-deco-web.json`](../../data/design/styles/art-deco-web.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
