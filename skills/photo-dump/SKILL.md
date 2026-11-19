---
name: photo-dump
description: "Apply the Photo Dump style (2020–now) when generating web pages, apps, memes, short video frames and other images of internet culture. Load when the user asks for: photo dump, carousel dump, camera roll, casual post, blurry photos, flash photos."
domain: internet
era: contemporary-spatial
triggers:
  - "photo dump"
  - "carousel dump"
  - "camera roll"
  - "casual post"
  - "blurry photos"
  - "flash photos"
  - "weekly recap"
  - "instagram carousel"
vector_profile:
  ornamentation: 3
  dimensionality: 2
  grid_rigidity: 2
  skeuomorphic_realism: 4
  typographic_expressiveness: 3
---

# Photo Dump

> The opposite of the curated grid: show the camera roll as it is, so that the poster looks relaxed and real.

A carousel of 6 to 20 casual photos in one post: blurred, flash-lit, off-centre, with a screenshot, a meal and a mirror selfie in a row. It looks careless on purpose.

**Period:** 2020–now · **Era:** Contemporary & Spatial · **Domain:** Internet · **Also called:** Photo carousel dump, Casual carousel, Camera roll post

## When to load this skill

Load it when the user asks for: "photo dump", "carousel dump", "camera roll", "casual post", "blurry photos", "flash photos", "weekly recap", "instagram carousel".

Good for: personal recap and trip posts, brand posts that need a human voice, event aftermath galleries, carousel UI mockups.

Do not use it when:
- The page must show a strict, formal brand.
- The photos are product shots that need true colour.
- The reader needs one clear message.

## System directives

When generating web pages, apps, memes, short video frames and other images of internet culture in Photo Dump, you MUST:

1. Post 6 to 20 images in one carousel, up to 10 on the first apps and 20 on later ones.
2. Mix formats: a 4:5 portrait, a 1:1 square, a screenshot and a short clip, with no shared preset.
3. Allow blur, red-eye, hard flash and a tilt of 3° to 10° in at least 3 images.
4. Add a pale dotted pager of 6 dots under the post and a count badge such as 1/12 at the top right.
5. Open with the best photo and end with the funniest, such as a pet or a blurry mirror.
6. Set the caption in 1 line, lower case, with an emoji or a date such as 'feb dump'.
7. Overlay a sticker or a hand-written word in marker at 24px to 40px on 1 or 2 images.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** One tone for all photos.
- **NEVER:** A strict 3-column plan.
- **NEVER:** Perfect exposure and sharp focus in every frame.
- **NEVER:** Staged, posed props.
- **NEVER:** A long, polished caption.
- **NEVER:** A text tile that looks like an advertisement.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■■□□` 3/5 | pure minimal | maximalist |
| Dimensionality | `■■□□□` 2/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■□□□` 2/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■■■■□` 4/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■■■□□` 3/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** A swipe row of mixed-ratio images in one card of 1080px width; a pager and a count badge overlay the frame.
- **Whitespace ratio:** 10% to 20% stays empty; the spacing scale is 4, 8, 12 and 24px.
- **Alignment rules:** The first image centres; later images vary in crop; stickers sit off the grid with a tilt of 3° to 10°.
- **Container geometry:** Images with a 0px to 8px radius; a count badge of 40px by 24px with a 12px radius; a dot pager of 6px dots.

## Typography

- **Classifications:** grotesque · marker script
- **Tracking:** Display takes 0em; the count badge takes +0.04em.
- **Leading:** Display 1.1; body 1.5.
- **Hierarchy rules:** Use two weights: 400 and 700. · Use sizes 12, 14, 24 and 40px. · Set captions in lower case. · Use at most 2 hand-written words on one image.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Permanent Marker | Inter | A marker face for a hand-written word on a photo. |
| Space Grotesk | Inter | A quirky grotesque for a casual title. |
| Gaegu | Inter | A rough hand-written face for a short caption. |

## Colour & lighting

- **Palette structure:** A near-black feed ground with flash white, one sticker yellow and one blown red; photo colours vary.
- **Contrast rules:** Text on the near-black card holds at least 12:1; yellow and red carry stickers, badges and the active dot.
- **Surface treatment:** A flat dark card; photos keep their own colour; a light grain of 4% on stickers.
- **Light and shadow:** Hard on-camera flash in the photos, with a bright subject and a dark background; no gloss on chrome.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Feed Black | `#0F0F10` | background |
| Card Grey | `#1C1C1E` | surface |
| Flash White | `#F5F5F5` | text |
| Sticker Yellow | `#FFD84D` | primary |
| Blown Red | `#E5483A` | accent |
| Night Blue | `#2D3F6B` | tint |
| Mirror Grey | `#B5B5BA` | muted |

## Materiality & texture

- **Surface simulation:** A phone camera roll: screenshots, flash snaps and blur in one swipe row.
- **Border rules:** No border on photos; a 1px #2A2A2D line on the card.
- **Blur and elevation:** A 12px blur on the count badge background at 50% opacity; no cast shadow.

## Ornamentation & iconography

- **Iconography:** Solid icons at 24px: heart, comment, send and save, with round ends.
- **Illustration:** Hand-drawn circles, arrows and scribbled words in marker over some photos; sticker emojis.
- **Decorative elements:** dot pager · count badge · marker word · sticker · flash photo · screenshot tile

## Motion & interactivity

- **Born on screen:** yes
- **Transition physics:** Images swipe at 280ms with a rubber stop; the dot pager scales the active dot to 150% in 150ms; stickers pop in at 200ms.
- **Easing:** cubic-bezier(0.3, 0, 0, 1)
- **Duration (ms):** 280
- **Hover and active:** A swipe moves the pager; a double tap shows a heart at 120% scale for 400ms.

## Code & token primer

Set `data-style="photo-dump"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="photo-dump"] {
  --color-bg: #0F0F10;
  --color-surface: #1C1C1E;
  --color-text: #F5F5F5;
  --color-muted: #B5B5BA;
  --color-primary: #FFD84D;
  --color-accent: #E5483A;
  --color-border: #2A2A2D;
  --font-sans: "Inter", "Helvetica Neue", sans-serif;
  --font-display: "Space Grotesk", "Permanent Marker", sans-serif;
  --border-radius: 8px;
  --border-width: 1px;
  --shadow-elevation: none;
  --backdrop-filter: none;
  --space-unit: 4px;
  --ease: cubic-bezier(0.3, 0, 0, 1);
  --duration: 280ms;
  --type-ratio: 1.25;
  --size-small: 12.8px;
  --size-h3: 25px;
  --size-h2: 31.25px;
  --size-h1: 39.06px;
  --color-on-bg: #F5F5F5;
  --color-on-surface: #F5F5F5;
  --color-on-primary: #0F0F10;
  --color-on-accent: #0F0F10;
  --color-muted-on-bg: #B5B5BA;
  --color-muted-on-surface: #B5B5BA;
  --color-link: #E5483A;
  --color-link-on-surface: #FFD84D;
  --display-weight: 700;
  --subhead-weight: 400;
  --body-weight: 400;
  --strong-weight: 700;
  --label-weight: 400;
  --display-tracking: 0em;
  --display-leading: 1.1;
  --display-case: lowercase;
  --body-leading: 1.5;
  --body-size: 16px;
  --icon-stroke: 2;
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
| page | `bg-[#0F0F10] text-[#F5F5F5] font-sans antialiased px-4 md:px-8` |
| heading | `text-3xl md:text-5xl font-bold lowercase leading-[1.1]` |
| body | `text-base leading-[1.6] max-w-prose` |
| section | `border border-[#2A2A2D] bg-[#1C1C1E] p-4 rounded-lg` |
| button | `rounded-lg bg-[#FFD84D] px-5 py-3 text-sm font-bold lowercase text-[#0F0F10] transition-transform duration-[280ms] hover:-rotate-2` |
| label | `text-xs font-bold lowercase tracking-[0.04em] text-[#B5B5BA]` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** solid, stroke 2 on a 24px field, round caps, round joins, container: circle. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from MingCute (Fill) by MingCute Design, licence Apache 2.0. Reason: A soft, solid family that matches the round buttons of a phone carousel. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 700, tracking 0em, leading 1.1, case: lowercase.
- **Weights:** display 700, subhead 400, body 400, bold in text 700, labels and buttons 400. The style uses 2 weights (400, 700) and no other. The display is 300 heavier than the body. The accent is colour: one coloured word or field is the accent, so the weights stay quiet.
- **Body type:** 16px, leading 1.5.
- **Page:** hero stacked, left aligned, compact density, accent tilt 3°.
- **Ground:** blocks. The ground is a stack of mixed-size blocks: images of different ratios side by side. Put the class `ground` on the first screen of the page; it takes `--ground`, a stack of gradients built from the colour tokens. The ground can run behind the copy, so put the class `ground-copy` on each text block of that screen: the block gets `--color-bg` and a soft edge. Keep the rest of the page on `--color-bg`.
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

### Carousel post (technology)

A single post that holds several images or clips that the viewer swipes through. Origin: internet, web, 2017.

- Group 6 to 20 media items in one post.
- Show a dot pager and a count badge.
- Open with the best item and end with a light one.
- Let each item keep its own crop.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **Instagram** (platform, web, 2010–now), published the style. A photo and video app. Home and food images spread on it, and it carried trends such as dopamine decor and the film grain look.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Base colour (`base_colour`) | #FFD84D | #FFD84D, #E5483A, #F5F5F5 | --color-primary, --color-on-primary, --color-link-on-surface |
| Accent colour (`accent_colour`) | #E5483A | #E5483A, #FFD84D | --color-accent, --color-on-accent, --color-link |
| Corner radius (`corner_radius`) | 8px | 0–16 px | --border-radius |
| Grid step (`grid_step`) | 4px | 2–8 px | --space-unit, --grid-gutter |
| Type scale ratio (`type_scale_ratio`) | 1.25 | 1.2–1.5 | --type-ratio, --size-small, --size-h3, --size-h2, --size-h1 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more polished**: move toward [`cohesive-feed-grid`](../cohesive-feed-grid/SKILL.md) (Cohesive Feed Grid). Apply one preset, crop to squares and lay the images in a 3-column grid.
- If the user asks for **more real**: move toward [`dual-camera-snapshot`](../dual-camera-snapshot/SKILL.md) (Dual Camera Snapshot). Reduce to one image with a front and back view and a time stamp.
- If the user asks for **more faded**: move toward [`tumblr-soft-grunge`](../tumblr-soft-grunge/SKILL.md) (Tumblr Soft Grunge). Add a light leak, grain and pastel tints on a dark ground.

- **Led to (go here for a newer version):** [`dual-camera-snapshot`](../dual-camera-snapshot/SKILL.md)
- **Rejects (the opposite pole; do not blend):** [`cohesive-feed-grid`](../cohesive-feed-grid/SKILL.md)
- **Mixes well with:** [`tumblr-soft-grunge`](../tumblr-soft-grunge/SKILL.md)
- **Kin in another domain:** [`mumblecore`](../mumblecore/SKILL.md), [`party-flash`](../party-flash/SKILL.md), [`y2k-digicam`](../y2k-digicam/SKILL.md)
- **Nearest by vector profile:** [`dreamcore`](../dreamcore/SKILL.md), [`glitch-gif`](../glitch-gif/SKILL.md), [`goblincore`](../goblincore/SKILL.md)

## Emotional target

The viewer feels close to the poster, as at a casual look at a friend's phone.

**Keywords:** casual, candid, messy, playful, relaxed, unfiltered · **Brand archetypes:** jester, everyman, outlaw

## Sources

- [Wikipedia: Photo dump](https://en.wikipedia.org/wiki/Photo_dump)
- [Wikipedia: Instagram](https://en.wikipedia.org/wiki/Instagram)

---

Generated from [`data/internet/styles/photo-dump.json`](../../data/internet/styles/photo-dump.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
