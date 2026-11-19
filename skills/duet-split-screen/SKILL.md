---
name: duet-split-screen
description: "Apply the Duet Split-Screen style (2018–now) when generating web pages, apps, memes, short video frames and other images of internet culture. Load when the user asks for: duet, split screen, stitch, react video, side by side video, reaction duet."
domain: internet
era: touchscreen
triggers:
  - "duet"
  - "split screen"
  - "stitch"
  - "react video"
  - "side by side video"
  - "reaction duet"
vector_profile:
  ornamentation: 2
  dimensionality: 2
  grid_rigidity: 5
  skeuomorphic_realism: 2
  typographic_expressiveness: 2
---

# Duet Split-Screen

> The frame is a conversation: one original clip, one answer, both visible at the same time.

Two video panels side by side in one vertical frame: the source clip on one half and a new reaction or performance on the other. TikTok added the Duet tool in 2018.

**Period:** 2018–now · **Era:** Touchscreen · **Domain:** Internet · **Also called:** Duet video, Side-by-side reaction, Stitch and duet

## When to load this skill

Load it when the user asks for: "duet", "split screen", "stitch", "react video", "side by side video", "reaction duet".

Good for: reaction clips, remix and response videos, comparison clips, call-and-response challenges.

Do not use it when:
- The message needs one uninterrupted image.
- The source clip is not public or not licensed.
- The format is landscape.

## System directives

When generating web pages, apps, memes, short video frames and other images of internet culture in Duet Split-Screen, you MUST:

1. Split the 1080 x 1920 px frame into two panels of 540 x 960 px at the centre, or into two halves of 1080 x 960 px.
2. Keep a 4 px gap in the page colour between the two panels.
3. Play both audio tracks from one timeline and sync the starts to the frame.
4. Mark the original creator with a 24 px handle label at the bottom left of its panel.
5. Give the reacting panel a 2 px accent border (#FE2C55) so the viewer sees who answers.
6. Keep captions in the dead band under the panels at 40 px, 2 lines at most.
7. Hold the cut rhythm at 1 cut every 2 s to 3 s on the answer side only.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** A single full-bleed shot with no second panel.
- **NEVER:** Overlapping panels that hide faces.
- **NEVER:** Different aspect ratios in each panel.
- **NEVER:** Large title cards that cover the clips.
- **NEVER:** Unlabelled source clips.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■□□□` 2/5 | pure minimal | maximalist |
| Dimensionality | `■■□□□` 2/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■■■■` 5/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■■□□□` 2/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■■□□□` 2/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** Two equal video cells on a 2-column grid with a 4 px gutter; one caption band of 240 px below.
- **Whitespace ratio:** The panels take 80% of the height; the bands take 20%.
- **Alignment rules:** Cells are flush to the edges; the caption is centred under the join.
- **Container geometry:** Hard rectangles with 0 radius; a 2 px border on the answer panel; a 24 px pill label.

## Typography

- **Classifications:** geometric sans · grotesque sans
- **Tracking:** Display 0em; labels 0.02em.
- **Leading:** Display 1.15; body 1.4.
- **Hierarchy rules:** Use bold (700) for captions and medium (500) for handles. · Set captions at 40 px and handles at 24 px. · Put the caption in white with a 2 px black outline. · Prefix a handle with the @ sign.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Poppins | Inter | Bold lower-case-friendly sans for captions. |
| Rubik | Work Sans | A slightly rounded sans that stays clear at 24 px. |

## Colour & lighting

- **Palette structure:** A black frame with two bright video panels and one hot accent on the answer panel.
- **Contrast rules:** White on ink gives 19:1; handle labels use dark text on a white pill at 17:1.
- **Surface treatment:** Flat ink ground; the video panels carry all the colour.
- **Light and shadow:** Even front light in both clips; no shared shadow across the join.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Ink | `#0D0D0F` | background |
| Answer Red | `#FE2C55` | primary |
| Source Cyan | `#25F4EE` | accent |
| White | `#FFFFFF` | text |
| Ash | `#A8A8B0` | muted text |
| Panel Grey | `#1C1C20` | surface |

## Materiality & texture

- **Surface simulation:** A phone screen split into two glass panes.
- **Border rules:** A 4 px gap and a 2 px accent border on one pane.
- **Blur and elevation:** No blur and no elevation; the join is flat.

## Ornamentation & iconography

- **Iconography:** Solid 24 px icons for duet, stitch and sound.
- **Illustration:** None; the two clips are the picture.
- **Decorative elements:** centre seam · handle label pill · accent border · caption band · sound icon

## Motion & interactivity

- **Born on screen:** yes
- **Transition physics:** Both clips start on the same frame; the answer panel slides in from the right in 250 ms at the start; the clips loop at 15 s to 60 s.
- **Easing:** cubic-bezier(0.2, 0.8, 0.2, 1)
- **Duration (ms):** 250
- **Hover and active:** A tap on a panel mutes the other panel and adds a 2 px white border.

## Code & token primer

Set `data-style="duet-split-screen"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="duet-split-screen"] {
  --color-bg: #0D0D0F;
  --color-surface: #1C1C20;
  --color-text: #FFFFFF;
  --color-muted: #A8A8B0;
  --color-primary: #FE2C55;
  --color-accent: #25F4EE;
  --color-border: #FE2C55;
  --font-sans: "Work Sans", "Inter", sans-serif;
  --font-display: "Rubik", "Poppins", sans-serif;
  --border-radius: 0px;
  --border-width: 2px;
  --shadow-elevation: none;
  --backdrop-filter: none;
  --space-unit: 4px;
  --ease: cubic-bezier(0.2, 0.8, 0.2, 1);
  --duration: 250ms;
  --type-ratio: 1.25;
  --size-small: 12.8px;
  --size-h3: 25px;
  --size-h2: 31.25px;
  --size-h1: 39.06px;
  --color-on-bg: #FFFFFF;
  --color-on-surface: #FFFFFF;
  --color-on-primary: #0D0D0F;
  --color-on-accent: #0D0D0F;
  --color-muted-on-bg: #A8A8B0;
  --color-muted-on-surface: #A8A8B0;
  --color-link: #25F4EE;
  --color-link-on-surface: #25F4EE;
  --display-weight: 700;
  --subhead-weight: 500;
  --body-weight: 400;
  --strong-weight: 700;
  --label-weight: 700;
  --display-tracking: 0em;
  --display-leading: 1.15;
  --display-case: none;
  --body-leading: 1.4;
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
| page | `bg-[#0D0D0F] text-white font-sans antialiased` |
| heading | `text-3xl font-bold leading-[1.15]` |
| body | `text-base leading-[1.4] text-[#A8A8B0]` |
| section | `grid grid-cols-2 gap-1 bg-[#0D0D0F]` |
| button | `rounded-none border-2 border-[#FE2C55] bg-[#FE2C55] px-5 py-3 text-sm font-bold text-white` |
| label | `text-xs font-medium text-[#25F4EE]` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** solid, stroke 2 on a 24px field, round caps, round joins, container: rounded. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Phosphor (Fill) by Phosphor Icons, licence MIT. Reason: A filled rounded family that fits the toolbar icons of a short-video app. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 700, tracking 0em, leading 1.15, case: none.
- **Weights:** display 700, subhead 500, body 400, bold in text 700, labels and buttons 700. The style uses 3 weights (400, 500, 700) and no other. The display is 300 heavier than the body. The accent is colour: one coloured word or field is the accent, so the weights stay quiet.
- **Body type:** 16px, leading 1.4.
- **Page:** hero split, center aligned, compact density, accent tilt 0°.
- **Ground:** blocks. The ground is two flat blocks that echo the two panels of the frame. Put the class `ground` on the first screen of the page; it takes `--ground`, a stack of gradients built from the colour tokens. The ground can run behind the copy, so put the class `ground-copy` on each text block of that screen: the block gets `--color-bg` and a soft edge. Keep the rest of the page on `--color-bg`.
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

### Split screen (montage)

Show two or more pictures in one frame at the same time. Origin: film & video, Paris, 1927.

- Divide the frame into equal cells with a 4px gap.
- Use the same aspect ratio in each cell.
- Keep one source of sound for the whole frame.
- Mark who is in each cell with a label.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **TikTok** (platform, web, 2016–now), published the style. A video app of short vertical clips. Its feed set the form of vertical short-form video and spread the camcorder revival.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Base colour (`base_colour`) | #FE2C55 | #FE2C55, #25F4EE, #FFFFFF | --color-primary, --color-on-primary, --color-link-on-surface |
| Accent colour (`accent_colour`) | #25F4EE | #25F4EE, #FE2C55 | --color-accent, --color-on-accent, --color-link |
| Corner radius (`corner_radius`) | 0px | 0–8 px | --border-radius |
| Grid step (`grid_step`) | 4px | 2–8 px | --space-unit, --grid-gutter |
| Type scale ratio (`type_scale_ratio`) | 1.25 | 1.2–1.414 | --type-ratio, --size-small, --size-h3, --size-h2, --size-h1 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **single subject**: move toward [`pov-short`](../pov-short/SKILL.md) (POV Short). Remove the second panel and fill the frame with one first-person shot.
- If the user asks for **more cuts**: move toward [`velocity-edit`](../velocity-edit/SKILL.md) (Velocity Edit). Merge both clips into one cut sequence with speed ramps.
- If the user asks for **explain more**: move toward [`green-screen-short`](../green-screen-short/SKILL.md) (Green-Screen Short). Replace the second panel with a person in front of the source image.

- **Came from (go here for a more orthodox version):** [`lip-sync-dance-short`](../lip-sync-dance-short/SKILL.md)
- **Mixes well with:** [`green-screen-short`](../green-screen-short/SKILL.md), [`grwm-short`](../grwm-short/SKILL.md), [`velocity-edit`](../velocity-edit/SKILL.md)
- **Kin in another domain:** [`creator-vlog`](../creator-vlog/SKILL.md), [`vertical-short-form`](../vertical-short-form/SKILL.md)
- **Nearest by vector profile:** [`bento-grid-ui`](../bento-grid-ui/SKILL.md), [`mini-diffusion-meme`](../mini-diffusion-meme/SKILL.md), [`unicode-emoji`](../unicode-emoji/SKILL.md)

## Emotional target

The viewer feels part of a conversation and wants to answer.

**Keywords:** responsive, social, playful, paired, immediate · **Brand archetypes:** everyman, jester

## Sources

- [Wikipedia: TikTok](https://en.wikipedia.org/wiki/TikTok)
- [Wikipedia: Split screen (video production)](https://en.wikipedia.org/wiki/Split_screen_(filmmaking))

---

Generated from [`data/internet/styles/duet-split-screen.json`](../../data/internet/styles/duet-split-screen.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
