---
name: video-essay
description: "Apply the Video Essay style (2014–now) when generating web pages, apps, memes, short video frames and other images of internet culture. Load when the user asks for: video essay, analysis video, commentary, long-form, documentary style, explainer essay."
domain: internet
era: touchscreen
triggers:
  - "video essay"
  - "analysis video"
  - "commentary"
  - "long-form"
  - "documentary style"
  - "explainer essay"
  - "film analysis"
vector_profile:
  ornamentation: 2
  dimensionality: 2
  grid_rigidity: 4
  skeuomorphic_realism: 2
  typographic_expressiveness: 3
---

# Video Essay

> Treat the frame as a page of an essay: one claim, one piece of evidence, and a quiet layout that lets the argument lead.

A voice reads an argument over film clips, stills, quotes and maps. Clean type, a steady grid, slow zooms and a muted grade give the frame the calm of a printed essay.

**Period:** 2014–now · **Era:** Touchscreen · **Domain:** Internet · **Also called:** Essay video, Long-form commentary, Analysis video

## When to load this skill

Load it when the user asks for: "video essay", "analysis video", "commentary", "long-form", "documentary style", "explainer essay", "film analysis".

Good for: explainer series, film and game criticism pages, education channels, brand documentary pages, long-form article videos.

Do not use it when:
- The viewer needs a fast, loud hook.
- The content has no argument or evidence.
- The format is a short vertical clip.

## System directives

When generating web pages, apps, memes, short video frames and other images of internet culture in Video Essay, you MUST:

1. Show one piece of evidence in each shot and hold it for 4s to 10s.
2. Set the clip in a frame at 80% to 90% of the width with a 24px black margin.
3. Put a quote or a title in a serif face at 36px to 48px, flush-left, for at least 4s.
4. Add a source line at 14px in the lower-left corner for each clip: title, year and maker.
5. Apply a slow zoom of 3% to 6% over the shot, as in the Ken Burns effect.
6. Use a muted grade with a charcoal ground (#14161A) and one warm accent (#E0A458).
7. Place numbered chapter cards of 2s between sections: a number in 96px and a title in 36px.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Loud outlined captions.
- **NEVER:** Saturated primary colours.
- **NEVER:** Face cut-outs with arrows.
- **NEVER:** Cuts under 2s without a reason.
- **NEVER:** Hard sound hits at each cut.
- **NEVER:** Decorative frames that compete with the clip.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■□□□` 2/5 | pure minimal | maximalist |
| Dimensionality | `■■□□□` 2/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■■■□` 4/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■■□□□` 2/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■■■□□` 3/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** A 16:9 frame on a 12-column grid with a 24px black margin; clips take 8 to 10 columns and text takes the rest.
- **Whitespace ratio:** 25% to 40% of the frame is quiet ground; the spacing scale is 8, 16, 24 and 48px.
- **Alignment rules:** Flush-left text on a fixed baseline; clips centre in the frame; source lines align to the lower-left margin.
- **Container geometry:** Straight 0px to 2px corners; thin 1px rules between sections; a chapter card with a large number.

## Typography

- **Classifications:** transitional serif · grotesque · monospace label
- **Tracking:** Display takes -0.01em; source lines take +0.06em in capitals.
- **Leading:** Display 1.2; body 1.6.
- **Hierarchy rules:** Use two weights: regular (400) and bold (700). · Use sizes 14, 18, 36 and 96px. · Set quotes in italic at 36px. · Set chapter numbers in 96px at 40% opacity.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Playfair Display | Inter | A high-contrast serif for quotes with a neutral text face. |
| Source Serif 4 | Source Sans 3 | A calm serif pair that suits long reading. |
| IBM Plex Serif | IBM Plex Sans | An editorial pair with a mono option for source lines. |

## Colour & lighting

- **Palette structure:** Charcoal and paper with one warm amber accent and one cool grey.
- **Contrast rules:** Paper text on charcoal holds at least 14:1; amber carries rules and chapter marks, not long text.
- **Surface treatment:** Flat charcoal ground with a 3% film grain and a 10% vignette; clips keep their own grade.
- **Light and shadow:** No glow; a 1px line at 20% white separates the clip from the ground; a 12px soft shadow under cards.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Charcoal | `#14161A` | background |
| Slate | `#20242B` | surface |
| Paper | `#F1EEE7` | text |
| Essay Amber | `#E0A458` | primary |
| Archive Blue | `#6C8EAD` | accent |
| Ash | `#9AA0A8` | muted |

## Materiality & texture

- **Surface simulation:** A dark screening room: archive clips, scanned stills and paper quotes on a flat ground.
- **Border rules:** A 1px rule at 20% white between blocks; no border on clips.
- **Blur and elevation:** No blur on text; the ground may blur at 20px behind a still; a 12px soft shadow at 30% black.

## Ornamentation & iconography

- **Iconography:** Thin outline icons at 20px with a 1.5px stroke for the source and the chapter; round terminals.
- **Illustration:** Film stills, archive photographs, maps, screenshots and quotes; one arrow or underline in amber when needed.
- **Decorative elements:** chapter number · source line · quote block · slow zoom · thin rule

## Motion & interactivity

- **Born on screen:** yes
- **Transition physics:** Slow zooms of 3% to 6% over the full shot; cross-fades of 400ms; text appears with a 300ms fade and stays for at least 4s.
- **Easing:** cubic-bezier(0.4, 0, 0.2, 1)
- **Duration (ms):** 400
- **Hover and active:** Hover underlines a link in amber; active state dims the text by 10%.

## Code & token primer

Set `data-style="video-essay"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="video-essay"] {
  --color-bg: #14161A;
  --color-surface: #20242B;
  --color-text: #F1EEE7;
  --color-muted: #B4B9C1;
  --color-primary: #E0A458;
  --color-accent: #6C8EAD;
  --color-border: #3A4049;
  --font-sans: "Source Sans 3", "Inter", sans-serif;
  --font-display: "Playfair Display", "Source Serif 4", serif;
  --border-radius: 2px;
  --border-width: 1px;
  --shadow-elevation: 0 12px 24px rgba(0,0,0,0.3);
  --backdrop-filter: none;
  --space-unit: 8px;
  --ease: cubic-bezier(0.4, 0, 0.2, 1);
  --duration: 400ms;
  --type-ratio: 1.25;
  --size-small: 14.4px;
  --size-h3: 28.13px;
  --size-h2: 35.16px;
  --size-h1: 43.95px;
  --color-on-bg: #F1EEE7;
  --color-on-surface: #F1EEE7;
  --color-on-primary: #14161A;
  --color-on-accent: #14161A;
  --color-muted-on-bg: #B4B9C1;
  --color-muted-on-surface: #B4B9C1;
  --color-link: #6C8EAD;
  --color-link-on-surface: #6C8EAD;
  --display-weight: 400;
  --subhead-weight: 400;
  --body-weight: 400;
  --strong-weight: 700;
  --label-weight: 500;
  --display-tracking: -0.01em;
  --display-leading: 1.2;
  --display-case: none;
  --body-leading: 1.6;
  --body-size: 18px;
  --icon-stroke: 1.5;
  --ground: linear-gradient(var(--color-primary), var(--color-primary)) 0 0 / 100% 6px no-repeat,
    linear-gradient(var(--color-accent), var(--color-accent)) 0 8px / 100% 2px no-repeat,
    linear-gradient(var(--color-accent), var(--color-accent)) 66% 0 / 2px 100% no-repeat,
    linear-gradient(color-mix(in oklab, var(--color-primary) 8%, transparent), color-mix(in oklab, var(--color-primary) 8%, transparent)) 100% 0 / 34% 100% no-repeat,
    repeating-linear-gradient(0deg, color-mix(in oklab, var(--color-on-bg) 12%, transparent) 0 1px, transparent 1px 1.6rem),
    repeating-linear-gradient(90deg, color-mix(in oklab, var(--color-on-bg) 10%, transparent) 0 1px, transparent 1px 25%),
    var(--color-bg);
}
```

Tailwind patterns:

| Element | Classes |
|---|---|
| page | `bg-[#14161A] text-[#F1EEE7] font-sans antialiased px-4 md:px-12` |
| heading | `font-serif text-3xl md:text-5xl font-normal leading-[1.2] tracking-[-0.01em]` |
| body | `text-base leading-[1.6] max-w-prose` |
| section | `rounded-sm border border-[#3A4049] bg-[#20242B] shadow-[0_12px_24px_rgba(0,0,0,0.3)]` |
| button | `rounded-sm border border-[#E0A458] bg-[#E0A458] px-6 py-3 text-sm font-bold text-[#14161A] transition-colors duration-[400ms] hover:bg-transparent hover:text-[#E0A458]` |
| label | `text-xs font-medium uppercase tracking-[0.06em] text-[#9AA0A8]` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** outline, stroke 1.5 on a 24px field, round caps, round joins, container: none. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Lucide (Regular) by Lucide Contributors, licence ISC. Reason: A thin outline family stays out of the way of quotes and clips. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 400, tracking -0.01em, leading 1.2, case: none.
- **Weights:** display 400, subhead 400, body 400, bold in text 700, labels and buttons 500. The style uses 3 weights (400, 500, 700) and no other. The display has the weight of the body, so size and face carry the hierarchy. The accent is case and tracking: an upper-case label is the accent, so the weights stay few.
- **Body type:** 18px, leading 1.6.
- **Page:** hero split, left aligned, regular density, accent tilt 0°.
- **Ground:** rules. The ground is a dark page with thin rules, like the margin of a printed essay. Put the class `ground` on the first screen of the page; it takes `--ground`, a stack of gradients built from the colour tokens. The ground can run behind the copy, so put the class `ground-copy` on each text block of that screen: the block gets `--color-bg` and a soft edge. Keep the rest of the page on `--color-bg`.
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

### Jump cut (montage)

A cut inside one continuous shot that removes time and leaves the jump in view. Origin: film & video, Paris, 1960.

- Remove 0.3 to 2 seconds inside one shot and keep the framing within 10% of the frame width, so that the jump shows.
- In a talk to camera, cut on the word and not on the action: one cut every 2 to 4 seconds.

### Ken Burns effect (animation)

A slow pan and zoom across a still image, so that a photograph moves in a film. Origin: film & video, The Civil War (PBS), 1990.

- Move 5% to 15% of the frame over 4 to 8 seconds on each still.
- Start or end each move on a face or on the key detail.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **YouTube** (platform, web, 2005–now), published the style. A web site where people post video. The daily vlog grew here, and it became the main home of the music video.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Base colour (`base_colour`) | #E0A458 | #E0A458, #6C8EAD, #F1EEE7 | --color-primary, --color-on-primary, --color-link-on-surface |
| Accent colour (`accent_colour`) | #6C8EAD | #6C8EAD, #E0A458 | --color-accent, --color-on-accent, --color-link |
| Corner radius (`corner_radius`) | 2px | 0–8 px | --border-radius |
| Grid step (`grid_step`) | 8px | 4–12 px | --space-unit, --grid-gutter |
| Type scale ratio (`type_scale_ratio`) | 1.25 | 1.2–1.333 | --type-ratio, --size-small, --size-h3, --size-h2, --size-h1 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more energy**: move toward [`lets-play-facecam`](../lets-play-facecam/SKILL.md) (Let's Play Facecam). Add a facecam window at 20% width, outlined captions and sound hits.
- If the user asks for **more editorial**: move toward [`editorial-serif-revival`](../editorial-serif-revival/SKILL.md) (Editorial Serif Revival). Move to a paper ground with large serif headings and a column grid.
- If the user asks for **shorter**: move toward [`word-caption-clip`](../word-caption-clip/SKILL.md) (Word Caption Clip). Cut each claim to 8 seconds and show it as 4-word captions with one highlighted word.

- **Came from (go here for a more orthodox version):** [`lets-play-facecam`](../lets-play-facecam/SKILL.md)
- **Rejects (the opposite pole; do not blend):** [`clickbait-thumbnail`](../clickbait-thumbnail/SKILL.md)
- **Kin in another domain:** [`creator-vlog`](../creator-vlog/SKILL.md), [`documentary-verite`](../documentary-verite/SKILL.md)
- **Nearest by vector profile:** [`bauhaus`](../bauhaus/SKILL.md), [`bento-grid-ui`](../bento-grid-ui/SKILL.md), [`clean-girl`](../clean-girl/SKILL.md)

## Emotional target

The viewer feels guided by a thoughtful voice and trusts the argument.

**Keywords:** thoughtful, calm, editorial, analytical, patient · **Brand archetypes:** sage, creator

## Sources

- [Wikipedia: Video essay](https://en.wikipedia.org/wiki/Video_essay)
- [Wikipedia: Every Frame a Painting](https://en.wikipedia.org/wiki/Every_Frame_a_Painting)

---

Generated from [`data/internet/styles/video-essay.json`](../../data/internet/styles/video-essay.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
