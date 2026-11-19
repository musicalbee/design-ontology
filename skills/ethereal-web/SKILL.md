---
name: ethereal-web
description: "Apply the Ethereal Web style (2021–now) when generating web pages, apps, memes, short video frames and other images of internet culture. Load when the user asks for: ethereal, dreamy, soft focus, pastel gradient, airy, light serif."
domain: internet
era: contemporary-spatial
triggers:
  - "ethereal"
  - "dreamy"
  - "soft focus"
  - "pastel gradient"
  - "airy"
  - "light serif"
  - "angelic"
  - "glow"
vector_profile:
  ornamentation: 2
  dimensionality: 4
  grid_rigidity: 3
  skeuomorphic_realism: 2
  typographic_expressiveness: 1
---

# Ethereal Web

> Lightness is luxury: haze, glow and space make a quiet, weightless world.

Pale, glowing pastels, soft focus, thin serif or light sans type, translucent layers and air. It aims at a calm, dreamlike, weightless mood and reads as light rather than as object.

**Period:** 2021–now · **Era:** Contemporary & Spatial · **Domain:** Internet · **Also called:** Ethereal, Dreamy soft web, Soft-focus UI

## When to load this skill

Load it when the user asks for: "ethereal", "dreamy", "soft focus", "pastel gradient", "airy", "light serif", "angelic", "glow".

Good for: wellness, beauty and fragrance brands, meditation and sleep apps, fashion and wedding pages, art and gallery sites, launch pages for calm products.

Do not use it when:
- The page needs dense data or many actions.
- The audience needs high contrast.
- The brand is loud, technical or industrial.

## System directives

When generating web pages, apps, memes, short video frames and other images of internet culture in Ethereal Web, you MUST:

1. Set the ground in a pale gradient between 2 or 3 tints (for example #FDF7FF to #EAF4FF) with lightness above 92%.
2. Add soft blobs of colour 300px to 700px wide, blurred by 100px to 200px, at 30% to 50% opacity in pastel hues.
3. Set headings in a light serif or a thin sans at weight 200 to 300 and size 48px to 96px, with tracking of -0.01em to +0.04em.
4. Layer translucent panels: white at 40% to 60%, blur of 16px to 32px, a 1px white border at 60% and a radius of 24px to 40px.
5. Use a shadow of 0 20px 60px at 6% to 10% in a tinted colour and never a grey or black shadow above 12%.
6. Keep text colour in a soft slate (#4A4A5E) with contrast of at least 4.5:1; avoid pure black.
7. Animate slowly: fades and drifts of 8px to 24px over 800ms to 1500ms.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Heavy black type.
- **NEVER:** Saturated primary colours.
- **NEVER:** Hard borders and hard shadows.
- **NEVER:** Dense, small data tables.
- **NEVER:** Fast, snappy motion under 300ms.
- **NEVER:** Dark, high-contrast grounds.
- **NEVER:** Sharp square corners.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■□□□` 2/5 | pure minimal | maximalist |
| Dimensionality | `■■■■□` 4/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■■□□` 3/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■■□□□` 2/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■□□□□` 1/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** A single airy column and wide hero; sections have 120px to 200px vertical gaps; panels float without alignment to a rigid grid.
- **Whitespace ratio:** 50% to 65% of the surface is empty; the spacing scale is 8, 16, 32, 64 and 128px.
- **Alignment rules:** Centred headings; short paragraphs centred or flush left in 480px to 560px measures.
- **Container geometry:** Pills and large radii of 24px to 40px; circles; no sharp corners.

## Typography

- **Classifications:** light serif · light sans serif
- **Tracking:** Display takes +0.02em; labels take +0.08em.
- **Leading:** Display 1.15; body 1.7.
- **Hierarchy rules:**
  - Use weights 300 for display and 400 for body.
  - Use sizes 14, 17, 36 and 80px.
  - Set labels in small caps or upper case at 11px to 12px with +0.12em.
  - Set italics for emphasis in the serif.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Cormorant Garamond | Jost | A light, elegant serif with high contrast. |
| Fraunces | Jost | A soft serif with a gentle, warm voice. |
| Jost | Jost | A thin geometric sans for a quiet, modern voice. |

## Colour & lighting

- **Palette structure:** Pastel haze: lilac, sky, blush and pearl on white.
- **Contrast rules:** Slate on pearl holds 8:1; mute holds at least 4.5:1; pastels fill shapes and never carry text.
- **Surface treatment:** Pale gradients with blurred pastel blobs and a grain of 2% to 4%.
- **Light and shadow:** Soft and tinted: 0 20px 60px at 6% to 10%; light comes from above with no hard edge.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Pearl | `#FDF7FF` | background |
| Haze | `#EAF4FF` | surface |
| Slate | `#4A4A5E` | text |
| Mute | `#6E6D7E` | secondary text |
| Lilac | `#C9B6FF` | primary |
| Blush | `#FFC9DE` | accent |

## Materiality & texture

- **Surface simulation:** Mist, silk and glass in soft light.
- **Border rules:** A 1px white line at 60% on panels; no dark border.
- **Blur and elevation:** Blur 16px to 32px; soft tinted shadow; one elevation level.

## Ornamentation & iconography

- **Iconography:** Thin 1.25px outline icons with round caps in slate; small stars and sparkles.
- **Illustration:** Soft-focus photography, clouds, pearl and glass objects, blurred colour fields.
- **Decorative elements:** pastel blob · frosted panel · light serif headline · sparkle

## Motion & interactivity

- **Born on screen:** yes
- **Transition physics:** Slow and floating: elements fade up 8px to 24px over 800ms to 1500ms; blobs drift 20px to 60px over 20s.
- **Easing:** cubic-bezier(0.22, 1, 0.36, 1)
- **Duration (ms):** 1000
- **Hover and active:** Hover lifts a panel 4px and brightens its fill by 10% in 400ms; active state returns it.

## Code & token primer

Set `data-style="ethereal-web"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="ethereal-web"] {
  --color-bg: #FDF7FF;
  --color-surface: #FFFFFF;
  --color-text: #4A4A5E;
  --color-muted: #6E6D7E;
  --color-primary: #C9B6FF;
  --color-accent: #FFC9DE;
  --color-border: #E8E0F5;
  --font-sans: "Jost", system-ui, sans-serif;
  --font-display: "Cormorant Garamond", "Fraunces", serif;
  --border-radius: 32px;
  --border-width: 1px;
  --shadow-elevation: 0 20px 60px rgba(150,120,220,0.10);
  --backdrop-filter: blur(24px);
  --space-unit: 8px;
  --ease: cubic-bezier(0.22, 1, 0.36, 1);
  --duration: 1000ms;
  --type-ratio: 1.2;
  --size-small: 14.17px;
  --size-h3: 24.48px;
  --size-h2: 29.38px;
  --size-h1: 35.25px;
  --color-on-bg: #4A4A5E;
  --color-on-surface: #4A4A5E;
  --color-on-primary: #4A4A5E;
  --color-on-accent: #4A4A5E;
  --color-muted-on-bg: #6E6D7E;
  --color-muted-on-surface: #6E6D7E;
  --color-link: #4A4A5E;
  --color-link-on-surface: #4A4A5E;
  --display-weight: 300;
  --subhead-weight: 300;
  --body-weight: 400;
  --strong-weight: 500;
  --label-weight: 500;
  --display-tracking: 0.02em;
  --display-leading: 1.15;
  --display-case: none;
  --body-leading: 1.7;
  --body-size: 17px;
  --icon-stroke: 1.25;
  --ground: radial-gradient(40% 55% at 78% 30%, color-mix(in oklab, var(--color-primary) 55%, transparent), transparent 70%),
    radial-gradient(45% 50% at 95% 75%, color-mix(in oklab, var(--color-accent) 45%, transparent), transparent 70%),
    radial-gradient(35% 45% at 55% 95%, color-mix(in oklab, var(--color-primary) 35%, transparent), transparent 70%),
    radial-gradient(30% 35% at 10% 0%, color-mix(in oklab, var(--color-accent) 18%, transparent), transparent 70%),
    url("data:image/svg+xml,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20width%3D'220'%20height%3D'220'%3E%3Cfilter%20id%3D'n'%3E%3CfeTurbulence%20type%3D'fractalNoise'%20baseFrequency%3D'.8'%20numOctaves%3D'3'%20stitchTiles%3D'stitch'%2F%3E%3CfeColorMatrix%20values%3D'0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.09%200%200%200%200'%2F%3E%3C%2Ffilter%3E%3Crect%20width%3D'100%25'%20height%3D'100%25'%20filter%3D'url(%23n)'%2F%3E%3C%2Fsvg%3E") 0 0 / 220px 220px repeat,
    var(--color-bg);
}
```

Tailwind patterns:

| Element | Classes |
|---|---|
| page | `bg-gradient-to-b from-[#FDF7FF] to-[#EAF4FF] text-[#4A4A5E] font-sans antialiased` |
| heading | `font-light text-5xl md:text-8xl leading-[1.15] tracking-[0.02em] text-center` |
| body | `text-[17px] leading-[1.7]` |
| section | `rounded-[32px] border border-white/60 bg-white/50 p-8 backdrop-blur-[24px] shadow-[0_20px_60px_rgba(150,120,220,0.10)]` |
| button | `rounded-full bg-[#C9B6FF] px-8 py-3 text-[#2E2A4A] transition duration-[400ms] hover:-translate-y-1 hover:brightness-105` |
| label | `text-[11px] uppercase tracking-[0.12em] text-[#6E6D7E]` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** outline, stroke 1.25 on a 24px field, round caps, round joins, container: none. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Solar (Linear) by 480 Design, licence CC BY 4.0. Reason: A thin, round line that stays quiet on a pale, soft ground. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 300, tracking 0.02em, leading 1.15, case: none.
- **Weights:** display 300, subhead 300, body 400, bold in text 500, labels and buttons 500. The style uses 3 weights (300, 400, 500) and no other. The display is 100 lighter than the body, so size carries the hierarchy. The accent is case and tracking: an upper-case label is the accent, so the weights stay few.
- **Body type:** 17px, leading 1.7.
- **Page:** hero stacked, center aligned, airy density, accent tilt 0°.
- **Ground:** aurora. Ethereal pages sit in a pale haze of soft light in pastel colour. Put the class `ground` on the first screen of the page; it takes `--ground`, a stack of gradients built from the colour tokens. The ground can run behind the copy, so put the class `ground-copy` on each text block of that screen: the block gets `--color-bg` and a soft edge. Keep the rest of the page on `--color-bg`.
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

### Mesh gradient (process)

A colour field built from many points that each hold a colour, so the colours blend in soft, organic shapes. Origin: internet, United States, 1998.

- Use 3 to 5 colours of near value; keep the step between them small.
- Blur the field by 80 to 200 px, so that no edge shows.
- Put the field behind the content and give the text a solid or near-solid surface.

## Media

The salons, schools, magazines, publishers, galleries and platforms that carried this style.

- **Awwwards** (platform, web, 2009–now), published the style. A web site that gives awards to web design. Designers post sites there, and its daily picks spread trends of the expressive web.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Base colour (`base_colour`) | #C9B6FF | #C9B6FF, #FFC9DE, #4A4A5E | --color-primary, --color-on-primary, --color-link-on-surface |
| Accent colour (`accent_colour`) | #FFC9DE | #FFC9DE, #C9B6FF | --color-accent, --color-on-accent, --color-link |
| Corner radius (`corner_radius`) | 32px | 16–48 px | --border-radius |
| Grid step (`grid_step`) | 8px | 4–12 px | --space-unit, --grid-gutter |
| Type scale ratio (`type_scale_ratio`) | 1.2 | 1.125–1.25 | --type-ratio, --size-small, --size-h3, --size-h2, --size-h1 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **firmer**: move toward [`editorial-serif-revival`](../editorial-serif-revival/SKILL.md) (Editorial Serif Revival). Use a paper ground, black ink and hairline rules; keep the light serif.
- If the user asks for **more glass**: move toward [`liquid-glass-ui`](../liquid-glass-ui/SKILL.md) (Liquid Glass). Add specular rims and capsule controls over the haze.
- If the user asks for **more raw**: move toward [`brutalist-web`](../brutalist-web/SKILL.md) (Brutalist Web (2014)). Replace haze with a white ground, black type and plain borders.

- **Came from (go here for a more orthodox version):** [`aurora-gradient-ui`](../aurora-gradient-ui/SKILL.md), [`glassmorphism`](../glassmorphism/SKILL.md)
- **Rejects (the opposite pole; do not blend):** [`brutalist-web`](../brutalist-web/SKILL.md)
- **Mixes well with:** [`frutiger-aero`](../frutiger-aero/SKILL.md), [`liquid-glass-ui`](../liquid-glass-ui/SKILL.md), [`surrealism-web`](../surrealism-web/SKILL.md)
- **Nearest by vector profile:** [`liquid-glass-ui`](../liquid-glass-ui/SKILL.md), [`wabi-sabi-web`](../wabi-sabi-web/SKILL.md), [`aurora-gradient-ui`](../aurora-gradient-ui/SKILL.md)

## Emotional target

The viewer feels calm, light and gently lifted out of the day.

**Keywords:** calm, dreamy, soft, luminous, delicate, quiet · **Brand archetypes:** innocent, lover

## Sources

- Example: Glossier and Aesop campaign pages (2019–2025)
- Example: Calm and Headspace marketing pages (2019–2025)
- Example: Rhode and Summer Fridays launch pages (2022–2025)

---

Generated from [`data/internet/styles/ethereal-web.json`](../../data/internet/styles/ethereal-web.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
