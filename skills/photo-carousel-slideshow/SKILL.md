---
name: photo-carousel-slideshow
description: "Apply the Photo Carousel Slideshow style (2022–now) when generating web pages, apps, memes, short video frames and other images of internet culture. Load when the user asks for: carousel, photo mode, slideshow, swipe post, slide deck post, photo carousel."
domain: internet
era: contemporary-spatial
triggers:
  - "carousel"
  - "photo mode"
  - "slideshow"
  - "swipe post"
  - "slide deck post"
  - "photo carousel"
  - "infographic carousel"
vector_profile:
  ornamentation: 3
  dimensionality: 1
  grid_rigidity: 4
  skeuomorphic_realism: 3
  typographic_expressiveness: 4
---

# Photo Carousel Slideshow

> Slow the feed down: one idea on each still slide, one swipe at a time.

A set of 4 to 10 still images that the viewer swipes, with one line of text on each slide and a hook on the first slide. Instagram added carousels in 2017, and TikTok added photo mode in 2022.

**Period:** 2022–now · **Era:** Contemporary & Spatial · **Domain:** Internet · **Also called:** Photo mode, Swipe carousel, Slide post

## When to load this skill

Load it when the user asks for: "carousel", "photo mode", "slideshow", "swipe post", "slide deck post", "photo carousel", "infographic carousel".

Good for: tips and how-to posts, travel and photo recaps, product comparisons, educational threads.

Do not use it when:
- The story needs motion or sound.
- The idea fits one image.
- The audience does not swipe.

## System directives

When generating web pages, apps, memes, short video frames and other images of internet culture in Photo Carousel Slideshow, you MUST:

1. Use a 4:5 frame of 1080 x 1350 px or a 9:16 frame of 1080 x 1920 px for every slide.
2. Make slide 1 the hook: a 72 px headline of 6 words or fewer.
3. Keep 1 idea and 1 line of 40 px text on each slide, with 64 px margins.
4. Use 5 to 10 slides and show the count as dots of 8 px at the bottom.
5. Repeat the same grid, colour and type on all slides so the set reads as one.
6. Cue the swipe with an arrow or a cut-off element at the right edge on slide 1.
7. End on a save or share prompt at 44 px with a 100% contrast button.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** A different layout on each slide.
- **NEVER:** Paragraph text on a photo.
- **NEVER:** No hook on slide 1.
- **NEVER:** Low-resolution photos.
- **NEVER:** More than 10 slides.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■■□□` 3/5 | pure minimal | maximalist |
| Dimensionality | `■□□□□` 1/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■■■□` 4/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■■■□□` 3/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■■■■□` 4/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** A fixed grid of 12 columns with 64 px margins; the same text box on each slide; a dot indicator at 48 px from the bottom.
- **Whitespace ratio:** 40% to 50% of each slide is open; one image and one line of text.
- **Alignment rules:** Text is flush-left at the 64 px margin; the page number sits at the bottom right.
- **Container geometry:** Hard rectangle slides; 24 px radius on cards inside a slide; 8 px dots.

## Typography

- **Classifications:** editorial serif · neutral sans
- **Tracking:** Display -0.02em; body 0em.
- **Leading:** Display 1.05; body 1.4.
- **Hierarchy rules:** Use a display serif at 72 px for the hook only. · Use regular (400) sans at 40 px on content slides. · Use one accent colour for the key word. · Put the slide number in 24 px caps.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Playfair Display | Inter | A serif headline with a neutral sans for the line of text. |
| DM Serif Display | DM Sans | A display serif for the hook slide. |

## Colour & lighting

- **Palette structure:** A paper white and ink base with one accent that repeats on every slide.
- **Contrast rules:** Ink on paper gives 15:1; coral is for the key word at 44 px or larger, at 3.6:1.
- **Surface treatment:** Flat paper colour; photos with a 2 px inner frame.
- **Light and shadow:** Flat light; a 12 px soft shadow under a card only.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Paper | `#F6F2EA` | background |
| Ink | `#1A1A1A` | text |
| Signal Coral | `#E4572E` | primary |
| Sage | `#7A9E7E` | accent |
| Stone | `#6B6B66` | muted text |
| Card | `#FFFFFF` | surface |

## Materiality & texture

- **Surface simulation:** Printed card stock and a photo print.
- **Border rules:** A 2 px ink border on photo cards.
- **Blur and elevation:** A 12 px soft shadow under cards; no blur.

## Ornamentation & iconography

- **Iconography:** Outline 24 px icons for save, share and arrow.
- **Illustration:** Hand-drawn circles and arrows in the accent colour.
- **Decorative elements:** swipe arrow · dot indicator · slide number · accent underline · photo card

## Motion & interactivity

- **Born on screen:** yes
- **Transition physics:** The viewer swipes; a slide slides in 300 ms from the right; the audio loops at 15 s to 60 s on TikTok.
- **Easing:** cubic-bezier(0.4, 0, 0.2, 1)
- **Duration (ms):** 300
- **Hover and active:** A tap on the right edge moves to the next slide in 300 ms.

## Code & token primer

Set `data-style="photo-carousel-slideshow"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="photo-carousel-slideshow"] {
  --color-bg: #F6F2EA;
  --color-surface: #FFFFFF;
  --color-text: #1A1A1A;
  --color-muted: #6B6B66;
  --color-primary: #E4572E;
  --color-accent: #7A9E7E;
  --color-border: #1A1A1A;
  --font-sans: "Inter", "DM Sans", sans-serif;
  --font-display: "Playfair Display", "DM Serif Display", serif;
  --border-radius: 0px;
  --border-width: 2px;
  --shadow-elevation: 0 12px 24px rgba(26,26,26,0.12);
  --backdrop-filter: none;
  --space-unit: 8px;
  --ease: cubic-bezier(0.2, 0.8, 0.2, 1);
  --duration: 300ms;
  --type-ratio: 1.333;
  --size-small: 12px;
  --size-h3: 28.43px;
  --size-h2: 37.9px;
  --size-h1: 50.52px;
  --color-on-bg: #1A1A1A;
  --color-on-surface: #1A1A1A;
  --color-on-primary: #1A1A1A;
  --color-on-accent: #1A1A1A;
  --color-muted-on-bg: #6B6B66;
  --color-muted-on-surface: #6B6B66;
  --color-link: #1A1A1A;
  --color-link-on-surface: #1A1A1A;
  --display-weight: 400;
  --subhead-weight: 400;
  --body-weight: 400;
  --strong-weight: 700;
  --label-weight: 500;
  --display-tracking: -0.02em;
  --display-leading: 1.05;
  --display-case: none;
  --body-leading: 1.4;
  --body-size: 16px;
  --icon-stroke: 1.5;
  --ground: radial-gradient(130% 95% at 50% 0%, transparent 58%, color-mix(in oklab, var(--color-on-bg) 9%, transparent)),
    url("data:image/svg+xml,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20width%3D'220'%20height%3D'220'%3E%3Cfilter%20id%3D'n'%3E%3CfeTurbulence%20type%3D'fractalNoise'%20baseFrequency%3D'.8'%20numOctaves%3D'3'%20stitchTiles%3D'stitch'%2F%3E%3CfeColorMatrix%20values%3D'0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.22%200%200%200%200'%2F%3E%3C%2Ffilter%3E%3Crect%20width%3D'100%25'%20height%3D'100%25'%20filter%3D'url(%23n)'%2F%3E%3C%2Fsvg%3E") 0 0 / 220px 220px repeat,
    radial-gradient(circle at 90% 112%, color-mix(in oklab, var(--color-accent) 34%, transparent) 0 34vmin, transparent calc(34vmin + 1px)),
    radial-gradient(circle at 90% 112%, transparent 0 40vmin, color-mix(in oklab, var(--color-primary) 30%, transparent) 40vmin calc(40vmin + 2px), transparent calc(40vmin + 2px)),
    radial-gradient(55% 60% at 88% 18%, color-mix(in oklab, var(--color-accent) 22%, transparent), transparent 70%),
    radial-gradient(45% 50% at 70% 95%, color-mix(in oklab, var(--color-primary) 16%, transparent), transparent 70%),
    var(--color-bg);
}
```

Tailwind patterns:

| Element | Classes |
|---|---|
| page | `bg-[#F6F2EA] text-[#1A1A1A] font-sans antialiased px-16` |
| heading | `font-serif text-7xl leading-[1.05] -tracking-[0.02em]` |
| body | `text-[40px] leading-[1.4]` |
| section | `bg-white border-2 border-[#1A1A1A] p-8` |
| button | `rounded-none bg-[#1A1A1A] px-8 py-4 text-lg font-medium text-[#F6F2EA]` |
| label | `text-xs uppercase tracking-wide text-[#6B6B66]` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** outline, stroke 1.5 on a 24px field, round caps, round joins, container: none. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Lucide (Regular) by Lucide Contributors, licence ISC. Reason: A thin, neutral outline family for save, share and arrow icons. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 400, tracking -0.02em, leading 1.05, case: none.
- **Weights:** display 400, subhead 400, body 400, bold in text 700, labels and buttons 500. The style uses 3 weights (400, 500, 700) and no other. The display has the weight of the body, so size and face carry the hierarchy. The accent is colour: one coloured word or field is the accent, so the weights stay quiet.
- **Body type:** 16px, leading 1.4.
- **Page:** hero stacked, left aligned, airy density, accent tilt 0°.
- **Ground:** paper. The ground is plain paper, like a printed card in a stack. Put the class `ground` on the first screen of the page; it takes `--ground`, a stack of gradients built from the colour tokens. The ground can run behind the copy, so put the class `ground-copy` on each text block of that screen: the block gets `--color-bg` and a soft edge. Keep the rest of the page on `--color-bg`.
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

### Ken Burns effect (animation)

A slow pan and zoom across a still image, so that a photograph moves in a film. Origin: film & video, The Civil War (PBS), 1990.

- Move 5% to 15% of the frame over 4 to 8 seconds on each still.
- Start or end each move on a face or on the key detail.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **Instagram** (platform, web, 2010–now), published the style. A photo and video app. Home and food images spread on it, and it carried trends such as dopamine decor and the film grain look.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Base colour (`base_colour`) | #E4572E | #E4572E, #7A9E7E, #1A1A1A | --color-primary, --color-on-primary, --color-link-on-surface |
| Accent colour (`accent_colour`) | #7A9E7E | #E4572E, #7A9E7E | --color-accent, --color-on-accent, --color-link |
| Corner radius (`corner_radius`) | 0px | 0–24 px | --border-radius |
| Grid step (`grid_step`) | 8px | 4–12 px | --space-unit, --grid-gutter |
| Type scale ratio (`type_scale_ratio`) | 1.333 | 1.25–1.5 | --type-ratio, --size-small, --size-h3, --size-h2, --size-h1 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more motion**: move toward [`velocity-edit`](../velocity-edit/SKILL.md) (Velocity Edit). Turn the slides into 0.5 s cuts with speed ramps.
- If the user asks for **more personal**: move toward [`grwm-short`](../grwm-short/SKILL.md) (Get Ready With Me). Replace the slides with a talk to the camera.
- If the user asks for **more editorial**: move toward [`editorial-serif-revival`](../editorial-serif-revival/SKILL.md) (Editorial Serif Revival). Use a larger serif and wide margins on a white page.

- **Came from (go here for a more orthodox version):** [`grwm-short`](../grwm-short/SKILL.md)
- **Rejects (the opposite pole; do not blend):** [`velocity-edit`](../velocity-edit/SKILL.md)
- **Mixes well with:** [`green-screen-short`](../green-screen-short/SKILL.md)
- **Kin in another domain:** [`creator-vlog`](../creator-vlog/SKILL.md), [`vertical-short-form`](../vertical-short-form/SKILL.md)
- **Nearest by vector profile:** [`barbiecore`](../barbiecore/SKILL.md), [`clean-girl`](../clean-girl/SKILL.md), [`cybercore-web`](../cybercore-web/SKILL.md)

## Emotional target

The viewer feels calm and in control, and reads at a slow pace.

**Keywords:** calm, orderly, informative, curated, tactile · **Brand archetypes:** sage, creator

## Sources

- [Wikipedia: Instagram](https://en.wikipedia.org/wiki/Instagram)
- [Wikipedia: TikTok](https://en.wikipedia.org/wiki/TikTok)

---

Generated from [`data/internet/styles/photo-carousel-slideshow.json`](../../data/internet/styles/photo-carousel-slideshow.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
