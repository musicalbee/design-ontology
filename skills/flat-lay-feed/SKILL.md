---
name: flat-lay-feed
description: "Apply the Flat Lay Feed style (2014–now) when generating web pages, apps, memes, short video frames and other images of internet culture. Load when the user asks for: flat lay, flatlay, overhead shot, top-down photo, knolling, marble background."
domain: internet
era: touchscreen
triggers:
  - "flat lay"
  - "flatlay"
  - "overhead shot"
  - "top-down photo"
  - "knolling"
  - "marble background"
  - "coffee and notebook"
  - "brand lifestyle photo"
vector_profile:
  ornamentation: 2
  dimensionality: 1
  grid_rigidity: 4
  skeuomorphic_realism: 3
  typographic_expressiveness: 1
---

# Flat Lay Feed

> A life laid flat on a table: choose objects, set them in order and shoot straight down so that the story reads like a diagram.

Objects arranged on a flat surface and shot from straight above: coffee, a notebook, flowers, a phone. Marble or linen fills the ground, light is soft, and props sit in neat clusters with empty space.

**Period:** 2014–now · **Era:** Touchscreen · **Domain:** Internet · **Also called:** Flat lay, Overhead still life, Knolling feed

## When to load this skill

Load it when the user asks for: "flat lay", "flatlay", "overhead shot", "top-down photo", "knolling", "marble background", "coffee and notebook", "brand lifestyle photo".

Good for: product and brand lifestyle photos, food and coffee blogs, gift guides and unboxing stills, craft and stationery shops.

Do not use it when:
- The subject is a person or an event with motion.
- The product is large and cannot sit on a table.
- The brief needs a raw, documentary look.

## System directives

When generating web pages, apps, memes, short video frames and other images of internet culture in Flat Lay Feed, you MUST:

1. Shoot at 90° from directly above and fill the square frame with one surface.
2. Use a pale ground: white marble (#F6F5F2), light oak or linen, lit by a window at 45° to the side.
3. Group 5 to 9 objects in odd numbers and keep 30% to 40% of the frame empty.
4. Repeat 1 accent colour, such as blush (#D9A7A0) or eucalyptus (#7C9A8A), in 3 props.
5. Align objects to the frame edge or at 90° and 45° angles, and keep 8% to 12% of the frame as a margin.
6. Place the hero object at one third of the frame and add a hand or a cup for scale.
7. Add a short lower-case caption at 14px and a row of 10 to 20 tags under the photo.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Photos from an oblique angle.
- **NEVER:** Dark, cluttered tables.
- **NEVER:** Even, centred, symmetric spacing with no focal object.
- **NEVER:** Hard flash shadows.
- **NEVER:** Busy patterned grounds.
- **NEVER:** Many competing accent colours.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■□□□` 2/5 | pure minimal | maximalist |
| Dimensionality | `■□□□□` 1/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■■■□` 4/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■■■□□` 3/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■□□□□` 1/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** A square frame on a 3 by 3 invisible grid; the hero object sits on a third line and props fill the cells around it.
- **Whitespace ratio:** 30% to 40% of the frame stays as bare surface; the spacing scale is 8, 16, 32 and 64px.
- **Alignment rules:** Objects align on 0° and 90° axes; a 45° diagonal is allowed for one long object.
- **Container geometry:** Square photos with a 0px radius; a 1px #E5E2DB line between cards; props overlap by 4% to 8% at most.

## Typography

- **Classifications:** serif display · humanist sans
- **Tracking:** Display takes +0.02em; the tag row takes +0.06em.
- **Leading:** Display 1.2; body 1.65.
- **Hierarchy rules:** Use two weights: 400 and 700. · Use sizes 12, 14, 20 and 32px. · Set captions in lower case. · Use italic for a product name.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Playfair Display | Lato | A high-contrast serif for a title on a spread and a plain humanist body. |
| Cormorant Garamond | Lato | A light serif for a quiet caption. |
| Montserrat | Lato | A geometric sans for a clean tag row. |

## Colour & lighting

- **Palette structure:** Pale marble white with one blush, one eucalyptus green, oak brown and a dark coffee accent.
- **Contrast rules:** Text on white holds at least 14:1; blush and eucalyptus carry props, tags and fills, not small text.
- **Surface treatment:** Flat, light fills; photos show marble, linen or oak with a soft grain; no gradient on chrome.
- **Light and shadow:** Soft window light from one side; shadows are long, pale and 20% to 30% opaque; no flash.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Marble White | `#F6F5F2` | background |
| Surface White | `#FFFFFF` | surface |
| Ink | `#222222` | text |
| Blush | `#D9A7A0` | primary |
| Eucalyptus | `#7C9A8A` | accent |
| Oak | `#B98F63` | prop |
| Coffee | `#3B2A21` | prop shadow |

## Materiality & texture

- **Surface simulation:** A tabletop of marble, linen or oak seen from above.
- **Border rules:** A 1px #E5E2DB line between cards; no border on photos.
- **Blur and elevation:** No blur; props cast a soft shadow of 8px to 20px blur at 20% to 30% opacity.

## Ornamentation & iconography

- **Iconography:** Fine outline icons at 24px with a 1.5px stroke: heart, bookmark, tag and share.
- **Illustration:** No drawn art; props such as flowers, a cup, a notebook and sunglasses tell the story.
- **Decorative elements:** marble ground · linen ground · coffee cup · notebook · flower sprig · tag row

## Motion & interactivity

- **Born on screen:** yes
- **Transition physics:** Cards fade in at 300ms with a 8px rise; carousel slides move at 350ms; no motion inside the photo.
- **Easing:** cubic-bezier(0.25, 0.1, 0.25, 1)
- **Duration (ms):** 300
- **Hover and active:** Hover lifts the photo by 2px with a soft shadow; a tap on a tag opens its feed in 250ms.

## Code & token primer

Set `data-style="flat-lay-feed"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="flat-lay-feed"] {
  --color-bg: #F6F5F2;
  --color-surface: #FFFFFF;
  --color-text: #222222;
  --color-muted: #5C5C58;
  --color-primary: #B5766E;
  --color-accent: #5E7F6E;
  --color-border: #E5E2DB;
  --font-sans: "Lato", "Helvetica Neue", sans-serif;
  --font-display: "Playfair Display", "Cormorant Garamond", serif;
  --border-radius: 0px;
  --border-width: 1px;
  --shadow-elevation: 0 8px 20px rgba(59,42,33,0.12);
  --backdrop-filter: none;
  --space-unit: 8px;
  --ease: cubic-bezier(0.25, 0.1, 0.25, 1);
  --duration: 300ms;
  --type-ratio: 1.25;
  --size-small: 12.8px;
  --size-h3: 25px;
  --size-h2: 31.25px;
  --size-h1: 39.06px;
  --color-on-bg: #222222;
  --color-on-surface: #222222;
  --color-on-primary: #000000;
  --color-on-accent: #000000;
  --color-muted-on-bg: #5C5C58;
  --color-muted-on-surface: #5C5C58;
  --color-link: #222222;
  --color-link-on-surface: #222222;
  --display-weight: 700;
  --subhead-weight: 400;
  --body-weight: 400;
  --strong-weight: 700;
  --label-weight: 400;
  --display-tracking: 0.02em;
  --display-leading: 1.2;
  --display-case: none;
  --body-leading: 1.65;
  --body-size: 16px;
  --icon-stroke: 1.5;
  --ground: repeating-linear-gradient(90deg, color-mix(in oklab, var(--color-on-bg) 40%, transparent) 0 8px, transparent 8px 14px) 0 16px / 100% 1px no-repeat,
    repeating-linear-gradient(90deg, color-mix(in oklab, var(--color-on-bg) 40%, transparent) 0 8px, transparent 8px 14px) 0 calc(100% - 16px) / 100% 1px no-repeat,
    linear-gradient(to bottom, rgba(255,255,255,.4), transparent 30%, rgba(0,0,0,.14)),
    radial-gradient(50% 60% at 82% 45%, color-mix(in oklab, var(--color-primary) 18%, transparent), transparent 70%),
    repeating-linear-gradient(0deg, color-mix(in oklab, var(--color-on-bg) 9%, transparent) 0 1px, transparent 1px 3px),
    repeating-linear-gradient(90deg, color-mix(in oklab, var(--color-on-bg) 7%, transparent) 0 1px, transparent 1px 3px),
    url("data:image/svg+xml,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20width%3D'220'%20height%3D'220'%3E%3Cfilter%20id%3D'n'%3E%3CfeTurbulence%20type%3D'fractalNoise'%20baseFrequency%3D'.8'%20numOctaves%3D'3'%20stitchTiles%3D'stitch'%2F%3E%3CfeColorMatrix%20values%3D'0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.15%200%200%200%200'%2F%3E%3C%2Ffilter%3E%3Crect%20width%3D'100%25'%20height%3D'100%25'%20filter%3D'url(%23n)'%2F%3E%3C%2Fsvg%3E") 0 0 / 220px 220px repeat,
    var(--color-bg);
}
```

Tailwind patterns:

| Element | Classes |
|---|---|
| page | `bg-[#F6F5F2] text-[#222222] font-sans antialiased px-4 md:px-8` |
| heading | `font-serif text-3xl md:text-5xl font-bold leading-[1.2] tracking-[0.02em]` |
| body | `text-base leading-[1.65] max-w-prose` |
| section | `border border-[#E5E2DB] bg-white p-6` |
| button | `rounded-none bg-[#B5766E] px-6 py-3 text-sm font-bold text-white transition-shadow duration-[300ms] hover:shadow-[0_8px_20px_rgba(59,42,33,0.12)]` |
| label | `text-xs lowercase tracking-[0.06em] text-[#5C5C58]` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** outline, stroke 1.5 on a 24px field, round caps, round joins, container: none. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Iconoir (Regular) by Luca Burgio, licence MIT. Reason: A fine, even line family that suits quiet captions and tag rows on pale photos. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 700, tracking 0.02em, leading 1.2, case: none.
- **Weights:** display 700, subhead 400, body 400, bold in text 700, labels and buttons 400. The style uses 2 weights (400, 700) and no other. The display is 300 heavier than the body. The accent is weight: a heavier word is the accent, so the steps between the weights are clear.
- **Body type:** 16px, leading 1.65.
- **Page:** hero stacked, center aligned, airy density, accent tilt 0°.
- **Ground:** linen. The ground is the table: a pale linen or marble surface seen from above. Put the class `ground` on the first screen of the page; it takes `--ground`, a stack of gradients built from the colour tokens. The ground can run behind the copy, so put the class `ground-copy` on each text block of that screen: the block gets `--color-bg` and a soft edge. Keep the rest of the page on `--color-bg`.
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

### Flat lay composition (skill)

A still life of objects on a flat surface, shot from straight above. Origin: photography, Los Angeles, 1987.

- Hold the camera at 90° above the surface.
- Group 5 to 9 objects and keep 30% to 40% of the frame empty.
- Align objects at 0° and 90°, and repeat one accent colour in 3 props.
- Light the set from a window at the side.

## Media

The salons, schools, magazines, publishers, galleries and platforms that carried this style.

- **Instagram** (platform, web, 2010–now), published the style. A photo and video app. Home and food images spread on it, and it carried trends such as dopamine decor and the film grain look.
- **Kinfolk** (magazine, Portland, Oregon, 2011–now), published the style. A slow-living magazine with calm, natural-light photos. Its rooms mix Nordic and Japanese restraint.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Base colour (`base_colour`) | #B5766E | #B5766E, #5E7F6E, #222222 | --color-primary, --color-on-primary, --color-link-on-surface |
| Accent colour (`accent_colour`) | #5E7F6E | #5E7F6E, #B5766E | --color-accent, --color-on-accent, --color-link |
| Corner radius (`corner_radius`) | 0px | 0–4 px | --border-radius |
| Grid step (`grid_step`) | 8px | 4–12 px | --space-unit, --grid-gutter |
| Type scale ratio (`type_scale_ratio`) | 1.25 | 1.2–1.5 | --type-ratio, --size-small, --size-h3, --size-h2, --size-h1 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more casual**: move toward [`photo-dump`](../photo-dump/SKILL.md) (Photo Dump). Shoot at oblique angles with a hard flash and keep the clutter.
- If the user asks for **more cohesive**: move toward [`cohesive-feed-grid`](../cohesive-feed-grid/SKILL.md) (Cohesive Feed Grid). Fix one ground and one accent for all frames and lay them in a strict 3-column grid.
- If the user asks for **warmer**: move toward [`vsco-preset-look`](../vsco-preset-look/SKILL.md) (VSCO Preset Look). Apply a matte warm preset and lift the blacks.

- **Came from (go here for a more orthodox version):** [`flat-design`](../flat-design/SKILL.md)
- **Led to (go here for a newer version):** [`cohesive-feed-grid`](../cohesive-feed-grid/SKILL.md)
- **Mixes well with:** [`vsco-preset-look`](../vsco-preset-look/SKILL.md)
- **Kin in another domain:** [`food-photography`](../food-photography/SKILL.md), [`scandinavian-interior-photography`](../scandinavian-interior-photography/SKILL.md)
- **Nearest by vector profile:** [`normcore`](../normcore/SKILL.md), [`gan-portrait`](../gan-portrait/SKILL.md), [`mini-diffusion-meme`](../mini-diffusion-meme/SKILL.md)

## Emotional target

The viewer feels order, calm and a small wish to own the same pleasant things.

**Keywords:** tidy, airy, pretty, aspirational, calm, curated · **Brand archetypes:** creator, lover, sage

## Sources

- [Wikipedia: Instagram](https://en.wikipedia.org/wiki/Instagram)
- [Wikipedia: Kinfolk (magazine)](https://en.wikipedia.org/wiki/Kinfolk_(magazine))

---

Generated from [`data/internet/styles/flat-lay-feed.json`](../../data/internet/styles/flat-lay-feed.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
