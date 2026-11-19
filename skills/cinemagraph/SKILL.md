---
name: cinemagraph
description: "Apply the Cinemagraph style (2011–now) when generating web pages, apps, memes, short video frames and other images of internet culture. Load when the user asks for: cinemagraph, living photo, still with motion, subtle loop, moving photograph, live photo."
domain: internet
era: touchscreen
triggers:
  - "cinemagraph"
  - "living photo"
  - "still with motion"
  - "subtle loop"
  - "moving photograph"
  - "live photo"
vector_profile:
  ornamentation: 1
  dimensionality: 2
  grid_rigidity: 3
  skeuomorphic_realism: 5
  typographic_expressiveness: 2
---

# Cinemagraph

> The image is still, and one small motion makes the viewer look longer.

A still photograph in which one small part moves in a seamless loop: hair in wind, steam from a cup, a blink. Two New York artists named it in 2011 during fashion week.

**Period:** 2011–now · **Era:** Touchscreen · **Domain:** Internet · **Also called:** Living photograph, Still-motion loop, Photo with one moving part

## When to load this skill

Load it when the user asks for: "cinemagraph", "living photo", "still with motion", "subtle loop", "moving photograph", "live photo".

Good for: fashion and travel hero images, product pages with one moving detail, editorial and portfolio headers, ad banners that need calm motion.

Do not use it when:
- The audience needs fast action or a story with many beats.
- The page cannot play video or animated image formats.
- The photo has no still, stable base.

## System directives

When generating web pages, apps, memes, short video frames and other images of internet culture in Cinemagraph, you MUST:

1. Freeze at least 90% of the frame; let one region of 5% to 15% of the area loop.
2. Loop the motion for 2 to 5 seconds with a seamless join, at 24 fps or more.
3. Mask the moving region with a soft edge of 4px to 12px, so that the join stays invisible.
4. Shoot on a tripod, so that the still part has no drift of more than 1px.
5. Grade the frame with muted colour, a contrast of 0.9 and a grain of 2% to 4%.
6. Set the frame at 4:5 or 16:9 with no caption inside it; put the title below it in a 14px serif line.
7. Show the image at full width with 24px to 64px of margin around it.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Several parts that move at once.
- **NEVER:** A visible jump at the loop point.
- **NEVER:** A moving camera that breaks the still part.
- **NEVER:** Heavy filters and bright stickers on the frame.
- **NEVER:** Fast, strobing motion.
- **NEVER:** Captions drawn on the picture.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■□□□□` 1/5 | pure minimal | maximalist |
| Dimensionality | `■■□□□` 2/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■■□□` 3/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■■■■■` 5/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■■□□□` 2/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** One large frame on a 12-column grid with 24px gutters; the frame spans 8 to 12 columns.
- **Whitespace ratio:** 40% to 55% of the surface stays empty; the spacing scale is 8, 16, 32 and 64px.
- **Alignment rules:** The frame is centred or flush-left; the title and credit sit below it, flush-left.
- **Container geometry:** Frames with a 0px radius and no border; a 1px hairline under the caption.

## Typography

- **Classifications:** high-contrast serif · neo-grotesque sans
- **Tracking:** Display 0.01em; body 0em; labels 0.12em in capitals.
- **Leading:** Display 1.15; body 1.6.
- **Hierarchy rules:**
  - Set the title in 28px to 40px serif at weight 300 and the credit in 12px capitals.
  - Keep body text at 16px sans and at most 60 characters wide.
  - Let the picture be the largest element on the page.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Cormorant Garamond | Inter | A fine serif for the title and a neutral sans for the credit. |
| Playfair Display | Source Sans 3 | A stronger serif for editorial pages. |

## Colour & lighting

- **Palette structure:** A dark, quiet ground with warm sand and one cool blue; the photograph carries the colour.
- **Contrast rules:** Warm white on gallery black holds 15:1; sand and blue are for hairlines and labels.
- **Surface treatment:** A flat dark field with no texture; the photograph holds the detail.
- **Light and shadow:** The light comes from the photograph; the page adds no shadow.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Gallery Black | `#121414` | background |
| Wall Grey | `#1E2121` | surface |
| Warm White | `#F1EEE8` | text |
| Sand | `#D9C9A8` | primary |
| Window Blue | `#7FA6B5` | accent |
| Ash | `#B3AEA4` | muted text |
| Hairline | `#3A3F3F` | border |

## Materiality & texture

- **Surface simulation:** A photographic print with a fine grain of 2% to 4% and soft tone.
- **Border rules:** A 1px hairline in #3A3F3F under captions; no frame on the picture.
- **Blur and elevation:** No blur; no elevation.

## Ornamentation & iconography

- **Iconography:** Outline glyphs of 1.5px at 20px: play, share, save.
- **Illustration:** Fashion, travel and still-life photographs with one moving part.
- **Decorative elements:** soft-edge mask · hairline under caption · loop-point marker · credit line in capitals · full-width frame

## Motion & interactivity

- **Born on screen:** yes
- **Transition physics:** The still frame shows at once; the moving region loops for 2 to 5 seconds; the page fades in over 1200ms.
- **Easing:** cubic-bezier(0.37, 0, 0.63, 1)
- **Duration (ms):** 1200
- **Hover and active:** Hover shows the credit line in 300ms; the loop never stops.

## Code & token primer

Set `data-style="cinemagraph"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="cinemagraph"] {
  --color-bg: #121414;
  --color-surface: #1E2121;
  --color-text: #F1EEE8;
  --color-muted: #B3AEA4;
  --color-primary: #D9C9A8;
  --color-accent: #7FA6B5;
  --color-border: #3A3F3F;
  --font-sans: "Inter", "Helvetica Neue", sans-serif;
  --font-display: "Cormorant Garamond", "Playfair Display", serif;
  --border-radius: 0px;
  --border-width: 1px;
  --shadow-elevation: none;
  --backdrop-filter: none;
  --space-unit: 8px;
  --ease: cubic-bezier(0.37, 0, 0.63, 1);
  --duration: 1200ms;
  --type-ratio: 1.333;
  --size-small: 12px;
  --size-h3: 28.43px;
  --size-h2: 37.9px;
  --size-h1: 50.52px;
  --color-on-bg: #F1EEE8;
  --color-on-surface: #F1EEE8;
  --color-on-primary: #121414;
  --color-on-accent: #121414;
  --color-muted-on-bg: #B3AEA4;
  --color-muted-on-surface: #B3AEA4;
  --color-link: #7FA6B5;
  --color-link-on-surface: #7FA6B5;
  --display-weight: 300;
  --subhead-weight: 400;
  --body-weight: 400;
  --strong-weight: 600;
  --label-weight: 500;
  --display-tracking: 0.01em;
  --display-leading: 1.15;
  --display-case: none;
  --body-leading: 1.6;
  --body-size: 16px;
  --icon-stroke: 1.5;
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
| page | `bg-[#121414] text-[#F1EEE8] font-sans antialiased px-4 md:px-12` |
| heading | `text-4xl md:text-6xl font-['Cormorant_Garamond'] font-light tracking-[0.01em] leading-[1.1]` |
| body | `text-base leading-[1.6] max-w-prose` |
| section | `border-2 border-[#3A3F3F] bg-[#1E2121] rounded-none` |
| button | `rounded-none border-2 border-[#3A3F3F] bg-[#D9C9A8] px-6 py-3 text-sm font-bold text-[#121414] transition-transform duration-[1200ms] hover:-translate-y-0.5` |
| label | `text-xs uppercase tracking-widest text-[#D9C9A8]` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** outline, stroke 1.5 on a 24px field, round caps, round joins, container: none. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Iconoir (Regular) by Luca Burgio, licence MIT. Reason: A fine outline family suits a quiet page where the photograph leads. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 300, tracking 0.01em, leading 1.15, case: none.
- **Weights:** display 300, subhead 400, body 400, bold in text 600, labels and buttons 500. The style uses 4 weights (300, 400, 500, 600) and no other. The display is 100 lighter than the body, so size carries the hierarchy. The accent is size: a larger word is the accent, so the weights stay few.
- **Body type:** 16px, leading 1.6.
- **Page:** hero poster, left aligned, airy density, accent tilt 0°.
- **Ground:** soft. A cinemagraph needs a quiet field, so the page ground is a soft dark wash that leaves the photograph alone. Put the class `ground` on the first screen of the page; it takes `--ground`, a stack of gradients built from the colour tokens. The ground can run behind the copy, so put the class `ground-copy` on each text block of that screen: the block gets `--color-bg` and a soft edge. Keep the rest of the page on `--color-bg`.
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

### Motion mask loop (process)

A process that freezes a video except for one masked region, which repeats in a seamless loop. Origin: internet, New York, 2011.

- Shoot on a tripod so that the still region does not drift by more than 1px.
- Mask the moving region with a soft edge of 4px to 12px.
- Join the loop with a cross-fade of 4 to 8 frames at the loop point.

## Media

The salons, schools, magazines, publishers, galleries and platforms that carried this style.

- **Tumblr** (platform, web, 2007–now), launched the style. A microblog site of reblogged images. Vaporwave and other net aesthetics grew in its image feeds.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Base colour (`base_colour`) | #D9C9A8 | #D9C9A8, #121414, #1E2121, #F1EEE8 | --color-primary, --color-on-primary, --color-link-on-surface |
| Accent colour (`accent_colour`) | #7FA6B5 | #7FA6B5, #D9C9A8 | --color-accent, --color-on-accent, --color-link |
| Corner radius (`corner_radius`) | 0px | 0–4 px | --border-radius |
| Grid step (`grid_step`) | 8px | 8–16 px | --space-unit, --grid-gutter |
| Type scale ratio (`type_scale_ratio`) | 1.333 | 1.25–1.5 | --type-ratio, --size-small, --size-h3, --size-h2, --size-h1 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more energetic**: move toward [`reaction-gif`](../reaction-gif/SKILL.md) (Reaction GIF). Let the whole frame move, crop tighter and add a one-line caption.
- If the user asks for **more editorial**: move toward [`editorial-serif-revival`](../editorial-serif-revival/SKILL.md) (Editorial Serif Revival). Add a large serif title, a rule and a column of body text beside the frame.
- If the user asks for **more dreamy**: move toward [`ethereal-web`](../ethereal-web/SKILL.md) (Ethereal Web). Soften the grade with a lifted black at 8% and a pale blue gradient edge.

- **Came from (go here for a more orthodox version):** [`reaction-gif`](../reaction-gif/SKILL.md)
- **Nearest by vector profile:** [`deepfake-face-swap`](../deepfake-face-swap/SKILL.md), [`dual-camera-snapshot`](../dual-camera-snapshot/SKILL.md), [`label-meme`](../label-meme/SKILL.md)

## Emotional target

The viewer feels calm and curious, and looks longer at one small movement.

**Keywords:** calm, quiet, curious, poised, dreamy, elegant · **Brand archetypes:** sage, creator, lover

## Sources

- [Wikipedia: Cinemagraph](https://en.wikipedia.org/wiki/Cinemagraph)
- [Jamie Beck and Kevin Burg, From Me To You](https://fromme-toyou.tumblr.com/)
- [Know Your Meme: Cinemagraph](https://knowyourmeme.com/memes/cinemagraphs)

---

Generated from [`data/internet/styles/cinemagraph.json`](../../data/internet/styles/cinemagraph.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
