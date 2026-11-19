---
name: diffusion-gloss
description: "Apply the Diffusion Gloss style (2022–now) when generating web pages, apps, memes, short video frames and other images of internet culture. Load when the user asks for: midjourney look, ai render, hyperreal, stable diffusion, cinematic ai image, prompt art."
domain: internet
era: contemporary-spatial
triggers:
  - "midjourney look"
  - "ai render"
  - "hyperreal"
  - "stable diffusion"
  - "cinematic ai image"
  - "prompt art"
vector_profile:
  ornamentation: 4
  dimensionality: 4
  grid_rigidity: 2
  skeuomorphic_realism: 4
  typographic_expressiveness: 1
---

# Diffusion Gloss

> Everything is lit, sharp and finished: the model gives each surface the same expensive sheen, and the sheen is the style.

A smooth, over-detailed image with a perfect rim light, a teal and amber grade and a soft bokeh ground. It became the default look of text-to-image models from 2022.

**Period:** 2022–now · **Era:** Contemporary & Spatial · **Domain:** Internet · **Also called:** AI hyperreal render, Midjourney look, Prompt-core gloss

## When to load this skill

Load it when the user asks for: "midjourney look", "ai render", "hyperreal", "stable diffusion", "cinematic ai image", "prompt art".

Good for: AI product pages and model demos, concept art boards, hero images for creative tools, pitch decks about generated media.

Do not use it when:
- The brand needs honest, imperfect photography.
- The audience distrusts generated images.
- The page shows real products that must be exact.

## System directives

When generating web pages, apps, memes, short video frames and other images of internet culture in Diffusion Gloss, you MUST:

1. Light the subject with a rim light of 2px to 6px width in amber (#F0A04B) against a teal haze (#1F8A99).
2. Smooth skin and surfaces to a pore size of under 1px, and add fine detail of 1px to 2px on hair, fabric and metal.
3. Place the subject on the upper-third line with a bokeh ground of 8 to 20 soft discs, 20px to 120px wide.
4. Raise contrast at the mid-tones and set a bloom of 12px to 24px around highlights.
5. Use a 4:5 or 16:9 frame at 1024px or more on the short side.
6. Add a short caption in 14px sans with the prompt words in lower case under the image.
7. Keep the colour grade at two hues, teal and amber, with one pink accent at 10%.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Visible grain and flat, dull light.
- **NEVER:** Hand-drawn line art.
- **NEVER:** Smudged low-resolution output.
- **NEVER:** Messy, cluttered grounds with no focus.
- **NEVER:** Neutral, even document light.
- **NEVER:** Brutalist type.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■■■□` 4/5 | pure minimal | maximalist |
| Dimensionality | `■■■■□` 4/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■□□□` 2/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■■■■□` 4/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■□□□□` 1/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** A full-bleed hero image with a 12-column overlay grid and 24px gutters; the subject sits on the upper-third line.
- **Whitespace ratio:** 10% to 20% of the frame is quiet bokeh; the spacing scale is 8, 16, 32 and 64px.
- **Alignment rules:** Centred hero subject and flush-left caption; text sits on a dark gradient scrim at the lower 25%.
- **Container geometry:** Cards with a 24px radius and a thin 1px light edge; pills with a full radius.

## Typography

- **Classifications:** geometric sans · neutral sans
- **Tracking:** Display -0.02em; body 0em.
- **Leading:** Display 1.1; body 1.6.
- **Hierarchy rules:** Use 2 weights: regular (400) and semibold (600). · Use sizes 14, 16, 32 and 64px. · Set the prompt words in lower case. · Keep text short and over the scrim.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Manrope | Inter | A clean geometric face for captions over a glossy image. |
| Sora | DM Sans | A wide, smooth sans with a friendly text face. |

## Colour & lighting

- **Palette structure:** A teal and amber complementary pair on a deep night blue, with one pink accent and a pale mist for text.
- **Contrast rules:** Mist text on midnight holds at least 13:1; amber and teal carry rim lines, glows and buttons.
- **Surface treatment:** A smooth gradient scrim; a bloom of 12px to 24px; a very fine noise of 2% to hide banding.
- **Light and shadow:** A strong rim light from behind at 30° to 60°, a soft key from the front and a warm bounce; shadows stay lifted.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Midnight | `#0E1320` | background |
| Deep Panel | `#182033` | surface |
| Amber Rim | `#F0A04B` | primary |
| Teal Haze | `#1F8A99` | accent |
| Bloom Pink | `#D96C8F` | second accent |
| Pearl Skin | `#EBC9B0` | image reference |
| Mist | `#DDE6EE` | text |

## Materiality & texture

- **Surface simulation:** A lit studio render: wet skin, polished metal, silk and glass with the same sheen.
- **Border rules:** A 1px edge in white at 12% on cards; images have no border.
- **Blur and elevation:** Bokeh blur of 8px to 24px on the ground; cards carry a soft shadow of 0 12px 32px at 40% black.

## Ornamentation & iconography

- **Iconography:** Filled icons at 20px with rounded terminals, white at 90%.
- **Illustration:** One heroic subject, such as a portrait, a robot or a fantasy city, with lens flare and bokeh.
- **Decorative elements:** rim light · bokeh discs · lens bloom · teal and amber grade · prompt caption

## Motion & interactivity

- **Born on screen:** yes
- **Transition physics:** Images fade in over 600ms with a slow 1.04x push; a bloom pulses 3% for 4 seconds in a loop.
- **Easing:** cubic-bezier(0.22, 1, 0.36, 1)
- **Duration (ms):** 600
- **Hover and active:** Hover raises the glow by 8px and lifts the card 4px; active returns it.

## Code & token primer

Set `data-style="diffusion-gloss"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="diffusion-gloss"] {
  --color-bg: #0E1320;
  --color-surface: #182033;
  --color-text: #DDE6EE;
  --color-muted: #A9B7C7;
  --color-primary: #F0A04B;
  --color-accent: #1F8A99;
  --color-border: #2A3550;
  --font-sans: "Inter", "DM Sans", sans-serif;
  --font-display: "Manrope", "Sora", sans-serif;
  --border-radius: 24px;
  --border-width: 1px;
  --shadow-elevation: 0 12px 32px rgba(0,0,0,0.4);
  --backdrop-filter: none;
  --space-unit: 8px;
  --ease: cubic-bezier(0.22, 1, 0.36, 1);
  --duration: 600ms;
  --type-ratio: 1.5;
  --size-small: 10.67px;
  --size-h3: 36px;
  --size-h2: 54px;
  --size-h1: 81px;
  --color-on-bg: #DDE6EE;
  --color-on-surface: #DDE6EE;
  --color-on-primary: #0E1320;
  --color-on-accent: #0E1320;
  --color-muted-on-bg: #A9B7C7;
  --color-muted-on-surface: #A9B7C7;
  --color-link: #1F8A99;
  --color-link-on-surface: #F0A04B;
  --display-weight: 600;
  --subhead-weight: 600;
  --body-weight: 400;
  --strong-weight: 600;
  --label-weight: 500;
  --display-tracking: -0.02em;
  --display-leading: 1.1;
  --display-case: none;
  --body-leading: 1.6;
  --body-size: 16px;
  --icon-stroke: 2;
  --ground: radial-gradient(40% 55% at 78% 30%, color-mix(in oklab, var(--color-primary) 55%, transparent), transparent 70%),
    radial-gradient(45% 50% at 95% 75%, color-mix(in oklab, var(--color-accent) 45%, transparent), transparent 70%),
    radial-gradient(35% 45% at 55% 95%, color-mix(in oklab, var(--color-primary) 35%, transparent), transparent 70%),
    radial-gradient(30% 35% at 10% 0%, color-mix(in oklab, var(--color-accent) 18%, transparent), transparent 70%),
    url("data:image/svg+xml,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20width%3D'220'%20height%3D'220'%3E%3Cfilter%20id%3D'n'%3E%3CfeTurbulence%20type%3D'fractalNoise'%20baseFrequency%3D'.8'%20numOctaves%3D'3'%20stitchTiles%3D'stitch'%2F%3E%3CfeColorMatrix%20values%3D'0%200%200%200%201%200%200%200%200%201%200%200%200%200%201%200.09%200%200%200%200'%2F%3E%3C%2Ffilter%3E%3Crect%20width%3D'100%25'%20height%3D'100%25'%20filter%3D'url(%23n)'%2F%3E%3C%2Fsvg%3E") 0 0 / 220px 220px repeat,
    var(--color-bg);
}
```

Tailwind patterns:

| Element | Classes |
|---|---|
| page | `bg-[#0E1320] text-[#DDE6EE] font-sans antialiased px-5 md:px-16` |
| heading | `text-4xl md:text-7xl font-semibold leading-[1.1] tracking-[-0.02em]` |
| body | `text-base leading-[1.6] max-w-prose` |
| section | `rounded-3xl border border-white/10 bg-[#182033] shadow-[0_12px_32px_rgba(0,0,0,0.4)]` |
| button | `rounded-full bg-[#F0A04B] px-6 py-3 text-sm font-semibold text-[#0E1320] transition-all duration-[600ms] hover:shadow-[0_0_24px_#F0A04B]` |
| label | `text-xs lowercase text-[#1F8A99]` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** solid, stroke 2 on a 24px field, round caps, round joins, container: circle. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Phosphor (Fill) by Phosphor Icons, licence MIT. Reason: Filled icons in circles sit well over a dark gradient scrim and a glossy image. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 600, tracking -0.02em, leading 1.1, case: none.
- **Weights:** display 600, subhead 600, body 400, bold in text 600, labels and buttons 500. The style uses 3 weights (400, 500, 600) and no other. The display is 200 heavier than the body. The accent is colour: one coloured word or field is the accent, so the weights stay quiet.
- **Body type:** 16px, leading 1.6.
- **Page:** hero poster, center aligned, airy density, accent tilt 0°.
- **Ground:** aurora. The ground is a soft teal and amber glow, like the haze and the rim light of the rendered images. Put the class `ground` on the first screen of the page; it takes `--ground`, a stack of gradients built from the colour tokens. The ground can run behind the copy, so put the class `ground-copy` on each text block of that screen: the block gets `--color-bg` and a soft edge. Keep the rest of the page on `--color-bg`.
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

### Diffusion model (tool)

A model that learns to turn noise into an image step by step, and makes a new image from a text prompt. Origin: photography, Stanford and Berkeley, 2015.

- Start from pure noise and remove it over 20 to 50 steps.
- Steer the result with a text prompt and a guidance scale of 5 to 10.
- Expect smooth skin, even light and a glossy, over-detailed finish when the prompt gives no flaw.
- Add a concrete flaw to the prompt, such as grain, a lens fault or a cluttered ground, to break the sheen.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **Midjourney** (platform, web, 2022–now), made the style. A service that makes images from text prompts. Its users made and shared the glossy, hyperreal AI image.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Base colour (`base_colour`) | #F0A04B | #F0A04B, #0E1320, #182033, #070A12 | --color-primary, --color-on-primary, --color-link-on-surface |
| Accent colour (`accent_colour`) | #1F8A99 | #F0A04B, #1F8A99, #D96C8F | --color-accent, --color-on-accent, --color-link |
| Corner radius (`corner_radius`) | 24px | 8–32 px | --border-radius |
| Grid step (`grid_step`) | 8px | 4–16 px | --space-unit, --grid-gutter |
| Type scale ratio (`type_scale_ratio`) | 1.5 | 1.25–1.618 | --type-ratio, --size-small, --size-h3, --size-h2, --size-h1 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **less fake**: move toward [`gan-portrait`](../gan-portrait/SKILL.md) (GAN Portrait). Remove the rim light and bokeh; use even, soft frontal light and one small fault.
- If the user asks for **more mass-produced**: move toward [`ai-slop`](../ai-slop/SKILL.md) (AI Slop). Add a generic subject, a warped hand, false text and an engagement caption.
- If the user asks for **more playful**: move toward [`ai-avatar-portrait`](../ai-avatar-portrait/SKILL.md) (AI Avatar Portrait). Use a stylised avatar pack with a violet glow ground.

- **Came from (go here for a more orthodox version):** [`gan-portrait`](../gan-portrait/SKILL.md)
- **Led to (go here for a newer version):** [`ai-slop`](../ai-slop/SKILL.md)
- **Rejects (the opposite pole; do not blend):** [`mini-diffusion-meme`](../mini-diffusion-meme/SKILL.md)
- **Was rejected by:** [`mini-diffusion-meme`](../mini-diffusion-meme/SKILL.md)
- **Mixes well with:** [`ai-avatar-portrait`](../ai-avatar-portrait/SKILL.md), [`ai-chat-ui`](../ai-chat-ui/SKILL.md)
- **Kin in another domain:** [`ai-hyperreal`](../ai-hyperreal/SKILL.md)
- **Nearest by vector profile:** [`ai-slop`](../ai-slop/SKILL.md), [`frutiger-aero`](../frutiger-aero/SKILL.md), [`ai-avatar-portrait`](../ai-avatar-portrait/SKILL.md)

## Emotional target

The viewer feels awe at the finish and, after a moment, doubt at its sameness.

**Keywords:** glossy, cinematic, polished, detailed, synthetic, luminous · **Brand archetypes:** magician, creator, ruler

## Sources

- [Wikipedia: Stable Diffusion](https://en.wikipedia.org/wiki/Stable_Diffusion)
- [Rombach et al., High-Resolution Image Synthesis with Latent Diffusion Models (2021)](https://arxiv.org/abs/2112.10752)

---

Generated from [`data/internet/styles/diffusion-gloss.json`](../../data/internet/styles/diffusion-gloss.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
