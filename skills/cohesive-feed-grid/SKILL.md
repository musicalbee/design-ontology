---
name: cohesive-feed-grid
description: "Apply the Cohesive Feed Grid style (2016–now) when generating web pages, apps, memes, short video frames and other images of internet culture. Load when the user asks for: cohesive feed, instagram grid, aesthetic feed, curated grid, brand feed, 3-column grid."
domain: internet
era: touchscreen
triggers:
  - "cohesive feed"
  - "instagram grid"
  - "aesthetic feed"
  - "curated grid"
  - "brand feed"
  - "3-column grid"
  - "feed planner"
  - "consistent preset"
vector_profile:
  ornamentation: 2
  dimensionality: 1
  grid_rigidity: 5
  skeuomorphic_realism: 2
  typographic_expressiveness: 3
---

# Cohesive Feed Grid

> The grid is the product: each photo serves the profile page, so tone, colour and spacing repeat until the feed reads as one brand.

A profile planned as one board: a 3-column grid of square photos with one preset, one palette and a fixed rhythm of image types. The viewer reads the whole grid before one photo.

**Period:** 2016–now · **Era:** Touchscreen · **Domain:** Internet · **Also called:** Curated feed, Instagram grid, Aesthetic feed

## When to load this skill

Load it when the user asks for: "cohesive feed", "instagram grid", "aesthetic feed", "curated grid", "brand feed", "3-column grid", "feed planner", "consistent preset".

Good for: brand and influencer profile mockups, feed planning tools, portfolio grids, social media style guides.

Do not use it when:
- The content is raw news or live events.
- The audience wants a candid, casual voice.
- The team cannot keep one preset and one rhythm.

## System directives

When generating web pages, apps, memes, short video frames and other images of internet culture in Cohesive Feed Grid, you MUST:

1. Lay photos in 3 columns with 2px gaps, each a 1:1 square of 1080px.
2. Apply one preset to every photo, so that the average hue stays within 15° across the feed.
3. Limit the palette to 3 colours and repeat each in at least 1 of every 3 photos.
4. Alternate image types in a fixed rhythm: portrait, detail, text tile, in rows of 3.
5. Build text tiles on a flat colour from the palette with a centred quote at 48px to 64px.
6. Keep the profile header plain: a 77px round avatar, a 14px bio and a row of 5 highlight circles of 64px.
7. Plan 9 posts ahead in a scheduling app and check the grid before each post.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Photos with clashing colour casts.
- **NEVER:** Random posting with no plan.
- **NEVER:** Heavy filters that change each week.
- **NEVER:** Collage tiles with 4 or more colours.
- **NEVER:** Photos with busy text overlays.
- **NEVER:** Different crop ratios in one grid.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■□□□` 2/5 | pure minimal | maximalist |
| Dimensionality | `■□□□□` 1/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■■■■` 5/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■■□□□` 2/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■■■□□` 3/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** A strict 3-column grid of squares with 2px gaps; highlight circles in one row of 5 above it.
- **Whitespace ratio:** 10% to 15% stays empty; the spacing scale is 2, 8, 16 and 24px.
- **Alignment rules:** All squares align to the grid; the avatar and the name align flush left; the bio sits in one column of 300px.
- **Container geometry:** Squares with a 0px radius; round avatar and highlight covers; a 1px #DBDBDB line below the header.

## Typography

- **Classifications:** geometric sans · serif display
- **Tracking:** Display takes +0.04em; labels take +0.1em in capitals.
- **Leading:** Display 1.15; body 1.5.
- **Hierarchy rules:** Use two weights: 400 and 600. · Use sizes 12, 14, 24 and 56px. · Use one display face for all text tiles. · Keep text tiles to 12 words or fewer.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Montserrat | DM Sans | A geometric sans for text tiles and a calm text face. |
| Playfair Display | DM Sans | A serif for quote tiles in a soft, editorial feed. |
| Poppins | DM Sans | A round, friendly sans for a bright brand feed. |

## Colour & lighting

- **Palette structure:** A neutral white page with one signature tan, one teal and one blush that repeat across the photos.
- **Contrast rules:** Text on white holds at least 15:1; the three tones carry photo tints and text tiles, and white text on a tile holds 4.5:1 or more.
- **Surface treatment:** Flat white chrome; tiles use flat palette colour; photos share one preset.
- **Light and shadow:** Even, soft light in all photos; no cast shadow in the chrome.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Feed White | `#FAFAFA` | background |
| Page White | `#FFFFFF` | surface |
| Feed Ink | `#1A1A1A` | text |
| Signature Tan | `#B5835A` | primary |
| Preset Teal | `#4F7F82` | accent |
| Dusty Blush | `#E8CFC4` | tile |
| Hairline | `#DBDBDB` | border |

## Materiality & texture

- **Surface simulation:** A printed contact sheet or a mood board of equal squares.
- **Border rules:** A 1px #DBDBDB line under the header; gaps of 2px between squares, with no border.
- **Blur and elevation:** No blur and no elevation.

## Ornamentation & iconography

- **Iconography:** Outline icons at 24px with a 1.5px stroke: grid, reel, tag and heart.
- **Illustration:** Flat colour text tiles with one quote; no other drawn art.
- **Decorative elements:** 3-column grid · highlight circles · text tile · one-preset tone · scheduling preview

## Motion & interactivity

- **Born on screen:** yes
- **Transition physics:** A tapped square opens at 250ms with a 4% scale; the grid does not move; highlights slide at 300ms.
- **Easing:** cubic-bezier(0.4, 0, 0.2, 1)
- **Duration (ms):** 250
- **Hover and active:** Hover dims the square to 85% and shows a count of likes; tap opens the post in 250ms.

## Code & token primer

Set `data-style="cohesive-feed-grid"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="cohesive-feed-grid"] {
  --color-bg: #FAFAFA;
  --color-surface: #FFFFFF;
  --color-text: #1A1A1A;
  --color-muted: #595959;
  --color-primary: #9A6B42;
  --color-accent: #3E6F72;
  --color-border: #DBDBDB;
  --font-sans: "DM Sans", "Helvetica Neue", sans-serif;
  --font-display: "Montserrat", "DM Sans", sans-serif;
  --border-radius: 0px;
  --border-width: 1px;
  --shadow-elevation: none;
  --backdrop-filter: none;
  --space-unit: 2px;
  --ease: cubic-bezier(0.4, 0, 0.2, 1);
  --duration: 250ms;
  --type-ratio: 1.25;
  --size-small: 12.8px;
  --size-h3: 25px;
  --size-h2: 31.25px;
  --size-h1: 39.06px;
  --color-on-bg: #1A1A1A;
  --color-on-surface: #1A1A1A;
  --color-on-primary: #FFFFFF;
  --color-on-accent: #FAFAFA;
  --color-muted-on-bg: #595959;
  --color-muted-on-surface: #595959;
  --color-link: #3E6F72;
  --color-link-on-surface: #3E6F72;
  --display-weight: 600;
  --subhead-weight: 400;
  --body-weight: 400;
  --strong-weight: 600;
  --label-weight: 400;
  --display-tracking: 0.04em;
  --display-leading: 1.15;
  --display-case: none;
  --body-leading: 1.5;
  --body-size: 16px;
  --icon-stroke: 1.5;
  --ground: linear-gradient(var(--color-primary), var(--color-primary)) 100% 0 / 17vmin 17vmin no-repeat,
    linear-gradient(var(--color-accent), var(--color-accent)) calc(100% - 18vmin) 0 / 17vmin 17vmin no-repeat,
    linear-gradient(color-mix(in oklab, var(--color-primary) 70%, transparent), color-mix(in oklab, var(--color-primary) 70%, transparent)) 100% 18vmin / 35vmin 17vmin no-repeat,
    linear-gradient(color-mix(in oklab, var(--color-accent) 60%, transparent), color-mix(in oklab, var(--color-accent) 60%, transparent)) calc(100% - 18vmin) 36vmin / 17vmin 35vmin no-repeat,
    linear-gradient(var(--color-surface), var(--color-surface)) 100% 36vmin / 17vmin 17vmin no-repeat,
    var(--color-bg);
}
```

Tailwind patterns:

| Element | Classes |
|---|---|
| page | `bg-[#FAFAFA] text-[#1A1A1A] font-sans antialiased px-4 md:px-8` |
| heading | `text-3xl md:text-6xl font-semibold leading-[1.15] tracking-[0.04em]` |
| body | `text-base leading-[1.6] max-w-prose` |
| section | `border border-[#DBDBDB] bg-white p-4` |
| button | `rounded-none bg-[#9A6B42] px-6 py-3 text-sm font-semibold text-white transition-colors duration-[250ms] hover:bg-[#1A1A1A]` |
| label | `text-xs font-semibold uppercase tracking-[0.1em] text-[#595959]` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** outline, stroke 1.5 on a 24px field, round caps, round joins, container: circle. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Solar (Linear) by 480 Design, licence CC BY 4.0. Reason: A clean linear family that fits a plain profile header and grid tabs. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 600, tracking 0.04em, leading 1.15, case: none.
- **Weights:** display 600, subhead 400, body 400, bold in text 600, labels and buttons 400. The style uses 2 weights (400, 600) and no other. The display is 200 heavier than the body. The accent is case and tracking: an upper-case label is the accent, so the weights stay few.
- **Body type:** 16px, leading 1.5.
- **Page:** hero split, left aligned, regular density, accent tilt 0°.
- **Ground:** tiles. The ground is the tile grid: equal squares with thin gaps, as on a profile page. Put the class `ground` on the first screen of the page; it takes `--ground`, a stack of gradients built from the colour tokens. The ground can run behind the copy, so put the class `ground-copy` on each text block of that screen: the block gets `--color-bg` and a soft edge. Keep the rest of the page on `--color-bg`.
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

### Feed grid planning (process)

The practice of planning the order of posts so that the profile grid reads as one board. Origin: internet, web, c. 2016.

- Preview the next 9 posts in a 3-column grid before posting.
- Fix one preset, one palette and one crop ratio.
- Repeat a rhythm of image types in rows of 3.
- Check the grid after each post.

### Photo filter preset (process)

A saved set of colour and tone changes that a user applies to a photo with one tap. Origin: internet, United States, 2009.

- Save the curve, fade, tint, vignette and grain values as one named set.
- Apply the set to a photo at a strength from 0% to 100%.
- Show the set as a thumbnail with a short name.
- Keep one set for all photos when a feed must match.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **Instagram** (platform, web, 2010–now), published the style. A photo and video app. Home and food images spread on it, and it carried trends such as dopamine decor and the film grain look.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Base colour (`base_colour`) | #9A6B42 | #9A6B42, #3E6F72, #1A1A1A | --color-primary, --color-on-primary, --color-link-on-surface |
| Accent colour (`accent_colour`) | #3E6F72 | #3E6F72, #9A6B42, #C99A86 | --color-accent, --color-on-accent, --color-link |
| Corner radius (`corner_radius`) | 0px | 0–2 px | --border-radius |
| Grid step (`grid_step`) | 2px | 2–8 px | --space-unit, --grid-gutter |
| Type scale ratio (`type_scale_ratio`) | 1.25 | 1.2–1.5 | --type-ratio, --size-small, --size-h3, --size-h2, --size-h1 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more casual**: move toward [`photo-dump`](../photo-dump/SKILL.md) (Photo Dump). Allow mixed crops, flash and blur and drop the fixed rhythm.
- If the user asks for **more real**: move toward [`dual-camera-snapshot`](../dual-camera-snapshot/SKILL.md) (Dual Camera Snapshot). Replace staged photos with a front and back snapshot and a time stamp.
- If the user asks for **softer**: move toward [`flat-lay-feed`](../flat-lay-feed/SKILL.md) (Flat Lay Feed). Use overhead still life frames on a pale surface.

- **Came from (go here for a more orthodox version):** [`flat-lay-feed`](../flat-lay-feed/SKILL.md), [`vsco-preset-look`](../vsco-preset-look/SKILL.md)
- **Was rejected by:** [`dual-camera-snapshot`](../dual-camera-snapshot/SKILL.md), [`photo-dump`](../photo-dump/SKILL.md)
- **Mixes well with:** [`minimalism-web`](../minimalism-web/SKILL.md)
- **Nearest by vector profile:** [`bento-grid-ui`](../bento-grid-ui/SKILL.md), [`demotivational-poster`](../demotivational-poster/SKILL.md), [`terminal-tui-web`](../terminal-tui-web/SKILL.md)

## Emotional target

The viewer feels trust and order, as if a brand with taste owns the page.

**Keywords:** curated, consistent, orderly, branded, polished, aspirational · **Brand archetypes:** creator, ruler, sage

## Sources

- [Wikipedia: Instagram](https://en.wikipedia.org/wiki/Instagram)
- [Wikipedia: VSCO](https://en.wikipedia.org/wiki/VSCO)

---

Generated from [`data/internet/styles/cohesive-feed-grid.json`](../../data/internet/styles/cohesive-feed-grid.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
