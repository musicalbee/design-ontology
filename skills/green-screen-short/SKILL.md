---
name: green-screen-short
description: "Apply the Green-Screen Short style (2020–now) when generating web pages, apps, memes, short video frames and other images of internet culture. Load when the user asks for: green screen, chroma key, commentary video, news explainer, reaction to a screenshot, stand in front of image."
domain: internet
era: contemporary-spatial
triggers:
  - "green screen"
  - "chroma key"
  - "commentary video"
  - "news explainer"
  - "reaction to a screenshot"
  - "stand in front of image"
vector_profile:
  ornamentation: 3
  dimensionality: 3
  grid_rigidity: 2
  skeuomorphic_realism: 3
  typographic_expressiveness: 3
---

# Green-Screen Short

> Put the speaker in front of the evidence: the image is the set, the creator is the commentator.

A person stands in front of a screenshot, a map or a photo that fills the whole vertical frame, and talks about it. The creator cuts out the background with the chroma-key tool of a short-video app.

**Period:** 2020–now · **Era:** Contemporary & Spatial · **Domain:** Internet · **Also called:** Green screen video, TikTok green screen, Chroma-key explainer

## When to load this skill

Load it when the user asks for: "green screen", "chroma key", "commentary video", "news explainer", "reaction to a screenshot", "stand in front of image".

Good for: news commentary, explainer clips, product walk-throughs on a screenshot, travel and map talks.

Do not use it when:
- The backdrop image has no rights clearance.
- The talk needs no image.
- The speaker cannot light the face evenly.

## System directives

When generating web pages, apps, memes, short video frames and other images of internet culture in Green-Screen Short, you MUST:

1. Fill the 1080 x 1920 px frame with the background image; show the speaker from the waist up at 40% to 55% of the height.
2. Place the speaker at the left or the right third; keep the key area of the image free.
3. Cut out the speaker with a clean mask with a 1 px to 2 px feather.
4. Add a 3 px white stroke around the speaker when the background is busy.
5. Zoom the image in by 110% to 130% over the clip to guide the eye.
6. Mark a key detail with a 6 px red circle or an arrow at 100% opacity.
7. Caption the speech in 40 px words at the bottom third.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** A speaker with a visible green fringe.
- **NEVER:** A background with no link to the talk.
- **NEVER:** Tiny screenshot text that nobody can read.
- **NEVER:** Two speakers who hide the image.
- **NEVER:** Stock-photo backdrops.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■■□□` 3/5 | pure minimal | maximalist |
| Dimensionality | `■■■□□` 3/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■□□□` 2/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■■■□□` 3/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■■■□□` 3/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** Two layers: a full-bleed backdrop and a cut-out speaker on the left or right third; a caption zone at 70% to 80% of the height.
- **Whitespace ratio:** 40% to 50% of the backdrop stays visible and free of the speaker.
- **Alignment rules:** The speaker sits on a third line; captions are centred; markers align to the object they name.
- **Container geometry:** The backdrop has 0 radius; the speaker is a free-form cut-out; markers are circles of 6 px stroke.

## Typography

- **Classifications:** grotesque sans · condensed sans
- **Tracking:** Display 0em; tags 0.04em.
- **Leading:** Display 1.1; body 1.35.
- **Hierarchy rules:**
  - Use bold (700) for captions and medium (500) for tags.
  - Set captions at 44 px.
  - Use a 3 px dark outline on white text so it reads on any image.
  - Limit a caption to 5 words per line.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Archivo | Inter | A sturdy sans for captions over busy images. |
| Barlow Condensed | Barlow | A condensed sans for keyword tags. |

## Colour & lighting

- **Palette structure:** The backdrop sets the colour; the UI adds one red marker, white text and black outlines.
- **Contrast rules:** White text with a 3 px black outline reads on every backdrop; panel text gives 14:1.
- **Surface treatment:** Photo or screenshot as a flat plate; no extra surface colour.
- **Light and shadow:** The speaker light matches the backdrop light; a 4 px soft shadow separates the cut-out edge.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Backdrop Dark | `#16181D` | background |
| Marker Red | `#E5322D` | primary |
| Key Green | `#00B140` | accent |
| White | `#FFFFFF` | text |
| Mist | `#B6BBC4` | muted text |
| Panel | `#242730` | surface |

## Materiality & texture

- **Surface simulation:** A screenshot or photo as a stage set, with a cut-out person in front.
- **Border rules:** A 3 px white stroke around the speaker; no borders on the backdrop.
- **Blur and elevation:** A 4 px drop shadow under the cut-out; no blur.

## Ornamentation & iconography

- **Iconography:** Outline 24 px icons for pointer, arrow and magnifier.
- **Illustration:** Red circles, arrows and underlines drawn over the backdrop.
- **Decorative elements:** red circle marker · arrow · cut-out speaker · zoomed screenshot · keyword tag

## Motion & interactivity

- **Born on screen:** yes
- **Transition physics:** The backdrop zooms in at 110% to 130% over the clip; markers pop in over 150 ms; the backdrop changes every 5 s to 10 s.
- **Easing:** cubic-bezier(0.2, 0.8, 0.2, 1)
- **Duration (ms):** 150
- **Hover and active:** A tap on a marker pauses the clip and zooms 150% on the detail.

## Code & token primer

Set `data-style="green-screen-short"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="green-screen-short"] {
  --color-bg: #16181D;
  --color-surface: #242730;
  --color-text: #FFFFFF;
  --color-muted: #B6BBC4;
  --color-primary: #E5322D;
  --color-accent: #00B140;
  --color-border: #FFFFFF;
  --font-sans: "Inter", "Barlow", sans-serif;
  --font-display: "Archivo", "Barlow Condensed", sans-serif;
  --border-radius: 0px;
  --border-width: 3px;
  --shadow-elevation: 0 4px 4px rgba(0,0,0,0.4);
  --backdrop-filter: none;
  --space-unit: 8px;
  --ease: cubic-bezier(0.2, 0.8, 0.2, 1);
  --duration: 150ms;
  --type-ratio: 1.25;
  --size-small: 12.8px;
  --size-h3: 25px;
  --size-h2: 31.25px;
  --size-h1: 39.06px;
  --color-on-bg: #FFFFFF;
  --color-on-surface: #FFFFFF;
  --color-on-primary: #000000;
  --color-on-accent: #16181D;
  --color-muted-on-bg: #B6BBC4;
  --color-muted-on-surface: #B6BBC4;
  --color-link: #00B140;
  --color-link-on-surface: #00B140;
  --display-weight: 700;
  --subhead-weight: 500;
  --body-weight: 400;
  --strong-weight: 700;
  --label-weight: 700;
  --display-tracking: 0em;
  --display-leading: 1.1;
  --display-case: none;
  --body-leading: 1.4;
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
| page | `bg-[#16181D] text-white font-sans antialiased` |
| heading | `text-4xl font-bold leading-[1.1] [-webkit-text-stroke:3px_#000] [paint-order:stroke_fill]` |
| body | `text-base leading-[1.35] text-[#B6BBC4]` |
| section | `bg-[#242730] p-4` |
| button | `rounded-none bg-[#E5322D] px-6 py-3 text-sm font-bold text-white` |
| label | `text-xs font-medium uppercase tracking-[0.04em] text-[#B6BBC4]` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** outline, stroke 2 on a 24px field, round caps, round joins, container: none. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Iconoir (Regular) by Luca Burgio, licence MIT. Reason: A clean outline family with pointer and arrow shapes. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 700, tracking 0em, leading 1.1, case: none.
- **Weights:** display 700, subhead 500, body 400, bold in text 700, labels and buttons 700. The style uses 3 weights (400, 500, 700) and no other. The display is 300 heavier than the body. The accent is colour: one coloured word or field is the accent, so the weights stay quiet.
- **Body type:** 16px, leading 1.4.
- **Page:** hero poster, left aligned, regular density, accent tilt 0°.
- **Ground:** raw. The ground is a raw, flat plate, like a screenshot that fills the frame. Put the class `ground` on the first screen of the page; it takes `--ground`, a stack of gradients built from the colour tokens. The ground can run behind the copy, so put the class `ground-copy` on each text block of that screen: the block gets `--color-bg` and a soft edge. Keep the rest of the page on `--color-bg`.
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

### Chroma key (process)

Remove one flat colour from a shot and put another picture behind the subject. Origin: film & video, London, 1940.

- Light a flat green or blue ground evenly, with no shadows.
- Keep the subject at 1 m or more from the ground to avoid colour spill.
- Key out the ground colour and feather the mask edge by 1px to 2px.
- Place the new picture behind the subject and match its light direction.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **TikTok** (platform, web, 2016–now), published the style. A video app of short vertical clips. Its feed set the form of vertical short-form video and spread the camcorder revival.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Base colour (`base_colour`) | #E5322D | #E5322D, #00B140, #FFFFFF | --color-primary, --color-on-primary, --color-link-on-surface |
| Accent colour (`accent_colour`) | #00B140 | #E5322D, #00B140 | --color-accent, --color-on-accent, --color-link |
| Corner radius (`corner_radius`) | 0px | 0–8 px | --border-radius |
| Grid step (`grid_step`) | 8px | 2–8 px | --space-unit, --grid-gutter |
| Type scale ratio (`type_scale_ratio`) | 1.25 | 1.2–1.414 | --type-ratio, --size-small, --size-h3, --size-h2, --size-h1 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **calmer**: move toward [`grwm-short`](../grwm-short/SKILL.md) (Get Ready With Me). Remove the backdrop and talk in a soft room.
- If the user asks for **more cuts**: move toward [`velocity-edit`](../velocity-edit/SKILL.md) (Velocity Edit). Cut between 4 backdrops with speed ramps on each change.
- If the user asks for **more still**: move toward [`photo-carousel-slideshow`](../photo-carousel-slideshow/SKILL.md) (Photo Carousel Slideshow). Replace the video with a series of still slides.

- **Mixes well with:** [`duet-split-screen`](../duet-split-screen/SKILL.md), [`photo-carousel-slideshow`](../photo-carousel-slideshow/SKILL.md)
- **Kin in another domain:** [`creator-vlog`](../creator-vlog/SKILL.md), [`vertical-short-form`](../vertical-short-form/SKILL.md)
- **Nearest by vector profile:** [`claymorphism`](../claymorphism/SKILL.md), [`pov-short`](../pov-short/SKILL.md), [`surreal-meme`](../surreal-meme/SKILL.md)

## Emotional target

The viewer feels informed, as if a guide stands inside the story.

**Keywords:** explanatory, direct, topical, engaged, witty · **Brand archetypes:** sage, everyman

## Sources

- [Wikipedia: Chroma key](https://en.wikipedia.org/wiki/Chroma_key)
- [Wikipedia: TikTok](https://en.wikipedia.org/wiki/TikTok)

---

Generated from [`data/internet/styles/green-screen-short.json`](../../data/internet/styles/green-screen-short.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
