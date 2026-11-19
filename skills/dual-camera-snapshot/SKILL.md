---
name: dual-camera-snapshot
description: "Apply the Dual Camera Snapshot style (2022–now) when generating web pages, apps, memes, short video frames, forum and chat screens, and other images of internet culture. Load when the user asks for: bereal, dual camera, front and back camera, selfie inset, no filter, late post."
domain: internet
era: short-video-ai
triggers:
  - "bereal"
  - "dual camera"
  - "front and back camera"
  - "selfie inset"
  - "no filter"
  - "late post"
  - "raw photo"
  - "unedited"
vector_profile:
  ornamentation: 2
  dimensionality: 3
  grid_rigidity: 3
  skeuomorphic_realism: 5
  typographic_expressiveness: 2
---

# Dual Camera Snapshot

> Proof of a real moment: two cameras fire at once, there is no edit, and the late mark shows that the poster did not stage it.

One post made of two photos from one moment: the back camera fills the frame and the front camera sits in a small inset. A time stamp and a late mark show that it was not planned.

**Period:** 2022–now · **Era:** Short video and AI · **Domain:** Internet · **Also called:** BeReal look, Front and back photo, Late photo

## When to load this skill

Load it when the user asks for: "bereal", "dual camera", "front and back camera", "selfie inset", "no filter", "late post", "raw photo", "unedited".

Good for: authentic-moment social app screens, behind-the-scenes posts, team check-in features, campaigns about real life.

Do not use it when:
- The brand needs polished, staged imagery.
- The product photo must be flawless.
- The audience wants entertainment more than honesty.

## System directives

When generating web pages, apps, memes, short video frames, forum and chat screens, and other images of internet culture in Dual Camera Snapshot, you MUST:

1. Take both photos in one 2-second window: the back camera fills the frame and the front camera fills an inset.
2. Place the inset at the top left, 28% of the frame width, with a 2px white border and a 12px radius.
3. Allow no filter, no crop and no edit: keep the raw colour and the phone noise.
4. Show a time stamp such as '14:32' and a late mark such as '2h late' in a mono face at 12px under the photo.
5. Set the page on pure black (#0B0B0B) so that the photo carries all the colour.
6. Limit the caption to 1 line of 40 characters or fewer, in white.
7. Show friends in a list sorted by time, with one tile for each person and a blur on tiles not yet unlocked.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Filters, presets and retouch.
- **NEVER:** Staged poses with props.
- **NEVER:** A single camera view.
- **NEVER:** Long captions and tags.
- **NEVER:** Bright, colourful app chrome.
- **NEVER:** A fixed grid rhythm.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■□□□` 2/5 | pure minimal | maximalist |
| Dimensionality | `■■■□□` 3/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■■□□` 3/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■■■■■` 5/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■■□□□` 2/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** A full-width 3:4 photo with a small inset at the top left; a feed of such tiles in one column of 390px.
- **Whitespace ratio:** 10% to 15% stays empty; the spacing scale is 4, 8, 16 and 24px.
- **Alignment rules:** The photo fills the width; the inset sits 12px from the top and left edges; the time stamp aligns flush left below the photo.
- **Container geometry:** A photo with a 16px radius; an inset with a 12px radius and a 2px white border; a pill for the late mark with a 999px radius.

## Typography

- **Classifications:** grotesque · monospace
- **Tracking:** Display takes 0em; the time stamp takes +0.04em.
- **Leading:** Display 1.1; body 1.5.
- **Hierarchy rules:** Use two weights: 400 and 800. · Use sizes 12, 14, 20 and 32px. · Set the time stamp in a mono face at 12px. · Use white text only; use red only for the late mark.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Archivo | Inter | A bold grotesque for the title and a neutral body face. |
| Archivo Narrow | Roboto Mono | A narrow, bold face for a title with a mono time stamp. |
| Space Mono | Inter | A mono face for the time stamp and the late mark. |

## Colour & lighting

- **Palette structure:** A pure black ground with white text, one late red and one time-stamp amber; photos supply all other colour.
- **Contrast rules:** White text on black holds at least 18:1; red and amber carry the late mark and the time stamp only.
- **Surface treatment:** A flat black ground; the photo carries raw phone colour; no filter on any element.
- **Light and shadow:** Natural, uneven light in the photos with phone noise; the chrome has no shadow.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Viewfinder Black | `#0B0B0B` | background |
| Panel Black | `#1A1A1A` | surface |
| Frame White | `#FFFFFF` | text |
| Grain Grey | `#BDBDBD` | muted |
| Late Red | `#FF3B30` | accent |
| Timestamp Amber | `#FFD60A` | highlight |
| Neutral Grey | `#8E8E93` | border |

## Materiality & texture

- **Surface simulation:** A phone viewfinder: black bars, a live frame and a small selfie inset.
- **Border rules:** A 2px white border on the inset; no border on the main photo.
- **Blur and elevation:** A 24px blur on locked friend tiles; no cast shadow.

## Ornamentation & iconography

- **Iconography:** Solid icons at 24px with round ends: camera flip, comment, location and send.
- **Illustration:** No drawn art; a small emoji reaction as a round photo of the face, 40px.
- **Decorative elements:** selfie inset · time stamp · late mark · blur lock · camera flip button

## Motion & interactivity

- **Born on screen:** yes
- **Transition physics:** A 2-minute timer shows a ring that fills over 120s; the shutter flashes white for 120ms; the inset swaps with the main photo in 250ms on tap.
- **Easing:** cubic-bezier(0.4, 0, 0.2, 1)
- **Duration (ms):** 250
- **Hover and active:** A tap on the inset swaps the two views; a long press on a tile shows the full photo at 100% for the hold time.

## Code & token primer

Set `data-style="dual-camera-snapshot"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="dual-camera-snapshot"] {
  --color-bg: #0B0B0B;
  --color-surface: #1A1A1A;
  --color-text: #FFFFFF;
  --color-muted: #BDBDBD;
  --color-primary: #FFFFFF;
  --color-accent: #FF3B30;
  --color-border: #8E8E93;
  --font-sans: "Inter", "Helvetica Neue", sans-serif;
  --font-display: "Archivo", "Archivo Narrow", sans-serif;
  --border-radius: 16px;
  --border-width: 2px;
  --shadow-elevation: none;
  --backdrop-filter: none;
  --space-unit: 8px;
  --ease: cubic-bezier(0.4, 0, 0.2, 1);
  --duration: 250ms;
  --type-ratio: 1.25;
  --size-small: 12.8px;
  --size-h3: 25px;
  --size-h2: 31.25px;
  --size-h1: 39.06px;
  --color-on-bg: #FFFFFF;
  --color-on-surface: #FFFFFF;
  --color-on-primary: #0B0B0B;
  --color-on-accent: #0B0B0B;
  --color-muted-on-bg: #BDBDBD;
  --color-muted-on-surface: #BDBDBD;
  --color-link: #FF3B30;
  --color-link-on-surface: #FF3B30;
  --display-weight: 800;
  --subhead-weight: 400;
  --body-weight: 400;
  --strong-weight: 800;
  --label-weight: 400;
  --display-tracking: 0em;
  --display-leading: 1.1;
  --display-case: none;
  --body-leading: 1.5;
  --body-size: 16px;
  --icon-stroke: 2;
  --ground: linear-gradient(var(--color-accent), var(--color-accent)) 0 0 / 100% 6px no-repeat,
    repeating-linear-gradient(0deg, var(--color-on-bg) 0 1px, transparent 1px 2.5rem) 100% 0 / 14px 100% no-repeat,
    repeating-linear-gradient(0deg, var(--color-on-bg) 0 2px, transparent 2px 10rem) 100% 0 / 28px 100% no-repeat,
    var(--color-bg);
}
```

Tailwind patterns:

| Element | Classes |
|---|---|
| page | `bg-[#0B0B0B] text-[#FFFFFF] font-sans antialiased px-4 md:px-8` |
| heading | `text-3xl md:text-5xl font-extrabold leading-[1.1]` |
| body | `text-base leading-[1.6] max-w-prose` |
| section | `border-2 border-[#8E8E93] bg-[#1A1A1A] p-4 rounded-2xl` |
| button | `rounded-full bg-white px-6 py-3 text-sm font-extrabold text-[#0B0B0B] transition-opacity duration-[250ms] hover:opacity-80` |
| label | `font-mono text-xs tracking-[0.04em] text-[#FFD60A]` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** solid, stroke 2 on a 24px field, round caps, round joins, container: circle. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Phosphor (Fill) by Phosphor Icons, licence MIT. Reason: A solid, bold family that reads well on a black camera screen. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 800, tracking 0em, leading 1.1, case: none.
- **Weights:** display 800, subhead 400, body 400, bold in text 800, labels and buttons 400. The style uses 2 weights (400, 800) and no other. The display is 400 heavier than the body. The accent is weight: a heavier word is the accent, so the steps between the weights are clear.
- **Body type:** 16px, leading 1.5.
- **Page:** hero stacked, left aligned, compact density, accent tilt 0°.
- **Ground:** raw. The ground is a plain black field: a camera viewfinder with nothing behind the photo. Put the class `ground` on the first screen of the page; it takes `--ground`, a stack of gradients built from the colour tokens. The ground can run behind the copy, so put the class `ground-copy` on each text block of that screen: the block gets `--color-bg` and a soft edge. Keep the rest of the page on `--color-bg`.
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

### Dual camera capture (technology)

A capture mode that takes a photo with the back camera and the front camera in one moment. Origin: internet, Paris, 2020.

- Fire both cameras within 2 seconds.
- Show the back photo full frame and the front photo in a small inset.
- Record a time stamp and a late mark.
- Allow no filter or crop.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **BeReal** (platform, web, 2019–now), launched the style. A French photo app that asks users to post one back and one front camera photo within a short window. The post shows a time stamp and a late mark.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Base colour (`base_colour`) | #FFFFFF | #FFFFFF, #FF3B30, #FFD60A | --color-primary, --color-on-primary, --color-link-on-surface |
| Accent colour (`accent_colour`) | #FF3B30 | #FF3B30, #FFD60A, #FFFFFF | --color-accent, --color-on-accent, --color-link |
| Corner radius (`corner_radius`) | 16px | 8–24 px | --border-radius |
| Grid step (`grid_step`) | 8px | 4–12 px | --space-unit, --grid-gutter |
| Type scale ratio (`type_scale_ratio`) | 1.25 | 1.2–1.5 | --type-ratio, --size-small, --size-h3, --size-h2, --size-h1 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more playful**: move toward [`photo-dump`](../photo-dump/SKILL.md) (Photo Dump). Allow 6 to 20 images, stickers, marker words and mixed ratios.
- If the user asks for **more polished**: move toward [`cohesive-feed-grid`](../cohesive-feed-grid/SKILL.md) (Cohesive Feed Grid). Apply one preset, remove the inset and lay the photos in a 3-column grid.
- If the user asks for **warmer**: move toward [`vsco-preset-look`](../vsco-preset-look/SKILL.md) (VSCO Preset Look). Add a matte warm grade and a pale off-white ground.

- **Came from (go here for a more orthodox version):** [`photo-dump`](../photo-dump/SKILL.md)
- **Rejects (the opposite pole; do not blend):** [`cohesive-feed-grid`](../cohesive-feed-grid/SKILL.md)
- **Kin in another domain:** [`camcorder-revival`](../camcorder-revival/SKILL.md), [`vertical-short-form`](../vertical-short-form/SKILL.md)
- **Nearest by vector profile:** [`cinemagraph`](../cinemagraph/SKILL.md), [`unboxing-video`](../unboxing-video/SKILL.md), [`ai-slop`](../ai-slop/SKILL.md)

## Emotional target

The viewer feels a small, honest closeness: a real look at an ordinary moment.

**Keywords:** raw, honest, immediate, ordinary, candid, unedited · **Brand archetypes:** everyman, explorer, sage

## Sources

- [Wikipedia: BeReal](https://en.wikipedia.org/wiki/BeReal)
- [Wikipedia: Photo dump](https://en.wikipedia.org/wiki/Photo_dump)

---

Generated from [`data/internet/styles/dual-camera-snapshot.json`](../../data/internet/styles/dual-camera-snapshot.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
