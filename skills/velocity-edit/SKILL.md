---
name: velocity-edit
description: "Apply the Velocity Edit style (2020–now) when generating web pages, apps, memes, short video frames and other images of internet culture. Load when the user asks for: velocity edit, speed ramp, capcut edit, edit template, slow motion edit, beat edit."
domain: internet
era: contemporary-spatial
triggers:
  - "velocity edit"
  - "speed ramp"
  - "capcut edit"
  - "edit template"
  - "slow motion edit"
  - "beat edit"
  - "amv style"
vector_profile:
  ornamentation: 3
  dimensionality: 2
  grid_rigidity: 2
  skeuomorphic_realism: 2
  typographic_expressiveness: 2
---

# Velocity Edit

> Let time bend to the music: slow on the strong beat, fast on the rest.

A short vertical montage with speed ramps: the clip slows to slow motion, then jumps to fast play on the beat, with glow, zoom shake and a colour grade. Editors make it with the velocity tool of CapCut.

**Period:** 2020–now · **Era:** Contemporary & Spatial · **Domain:** Internet · **Also called:** Velocity edit, Speed-ramp edit, CapCut velocity

## When to load this skill

Load it when the user asks for: "velocity edit", "speed ramp", "capcut edit", "edit template", "slow motion edit", "beat edit", "amv style".

Good for: fan edits, sports and car clips, product reveals, festival and event teasers.

Do not use it when:
- The audience needs calm or clear information.
- The source footage is dull or low-resolution.
- The viewer may have motion sickness.

## System directives

When generating web pages, apps, memes, short video frames and other images of internet culture in Velocity Edit, you MUST:

1. Ramp the speed between 20% and 400%; slow to 20% to 30% on the accent beat and jump to 300% on the off-beat.
2. Cut every 0.3 s to 1.2 s on the beat of a 120 BPM to 140 BPM track.
3. Add a zoom of 100% to 115% in 6 frames at each cut.
4. Add a glow with a 20 px blur at 30% opacity on highlights.
5. Use a high-contrast grade: crush blacks to 5% and lift highlights to 95%.
6. Overlay a 2 px shake of 4 frames on each strong beat.
7. Put one short word in 56 px type on the final hit, no more.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Constant speed through the clip.
- **NEVER:** Cuts that miss the beat.
- **NEVER:** Flat grey colour grade.
- **NEVER:** Long caption text.
- **NEVER:** Hard black bars at the sides.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■■□□` 3/5 | pure minimal | maximalist |
| Dimensionality | `■■□□□` 2/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■□□□` 2/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■■□□□` 2/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■■□□□` 2/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** A single full-bleed frame; no UI grid; type appears only at the final hit, centred.
- **Whitespace ratio:** Clean frame: text and UI take under 5%.
- **Alignment rules:** The subject is centred; the final word is centred at 50% of the height.
- **Container geometry:** Hard rectangle with 0 radius; a thin 1 px white flash frame at each cut.

## Typography

- **Classifications:** bold sans · condensed sans
- **Tracking:** Display 0.02em; body 0.04em.
- **Leading:** Display 1.0; body 1.3.
- **Hierarchy rules:** Use only one word as the display text. · Set it at 56 px in caps. · Use a white fill with a 20 px glow. · Show it for 6 to 12 frames.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Anton | Oswald | Anton is an open condensed display face for the final hit; Oswald is the body. |
| Bebas Neue | Barlow Condensed | A condensed caps face for kinetic words. |

## Colour & lighting

- **Palette structure:** Dark frames with a hot orange and cold blue grade; the clip carries the colour.
- **Contrast rules:** Highlight on void gives 18:1; glow does not carry text.
- **Surface treatment:** High-contrast grade; deep blacks at 5%.
- **Light and shadow:** Hard rim light and lens glow; a cold shadow and a warm highlight.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Void | `#08090C` | background |
| Hit Orange | `#FF6A1F` | primary |
| Cold Blue | `#2BB3FF` | accent |
| Highlight | `#FFF3E0` | text |
| Steel | `#9AA3B2` | muted text |
| Deep Panel | `#14161C` | surface |

## Materiality & texture

- **Surface simulation:** A glossy screen with light bloom and a slight film grain.
- **Border rules:** A 1 px white flash frame on cuts.
- **Blur and elevation:** A 20 px bloom on highlights; a 4 px radial blur at the edge on fast frames.

## Ornamentation & iconography

- **Iconography:** None; the edit has no icon set.
- **Illustration:** The source clip and light leaks: orange flares at 30% opacity.
- **Decorative elements:** speed ramp curve · light leak · zoom shake · final word hit · glow bloom

## Motion & interactivity

- **Born on screen:** yes
- **Transition physics:** Speed ramps of 6 to 12 frames between 20% and 400%; a zoom of 115% in 6 frames at each cut; a 4-frame shake on each strong beat.
- **Easing:** cubic-bezier(0.7, 0, 0.3, 1)
- **Duration (ms):** 100
- **Hover and active:** A tap pauses the clip; no hover state.

## Code & token primer

Set `data-style="velocity-edit"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="velocity-edit"] {
  --color-bg: #08090C;
  --color-surface: #14161C;
  --color-text: #FFF3E0;
  --color-muted: #9AA3B2;
  --color-primary: #FF6A1F;
  --color-accent: #2BB3FF;
  --color-border: #FFF3E0;
  --font-sans: "Oswald", "Barlow Condensed", sans-serif;
  --font-display: "Anton", "Bebas Neue", sans-serif;
  --border-radius: 0px;
  --border-width: 1px;
  --shadow-elevation: 0 0 20px rgba(255,106,31,0.4);
  --backdrop-filter: none;
  --space-unit: 8px;
  --ease: cubic-bezier(0.2, 0.8, 0.2, 1);
  --duration: 100ms;
  --type-ratio: 1.333;
  --size-small: 12px;
  --size-h3: 28.43px;
  --size-h2: 37.9px;
  --size-h1: 50.52px;
  --color-on-bg: #FFF3E0;
  --color-on-surface: #FFF3E0;
  --color-on-primary: #08090C;
  --color-on-accent: #08090C;
  --color-muted-on-bg: #9AA3B2;
  --color-muted-on-surface: #9AA3B2;
  --color-link: #2BB3FF;
  --color-link-on-surface: #2BB3FF;
  --display-weight: 700;
  --subhead-weight: 500;
  --body-weight: 400;
  --strong-weight: 700;
  --label-weight: 700;
  --display-tracking: 0.02em;
  --display-leading: 1;
  --display-case: uppercase;
  --body-leading: 1.4;
  --body-size: 16px;
  --icon-stroke: 2;
  --ground: radial-gradient(70% 60% at 50% 105%, transparent 30%, var(--color-bg) 75%),
    repeating-conic-gradient(from -90deg at 50% 108%, color-mix(in oklab, var(--color-primary) 34%, transparent) 0 4deg, transparent 4deg 9deg),
    repeating-radial-gradient(circle at 50% 108%, transparent 0 18vmin, color-mix(in oklab, var(--color-primary) 40%, transparent) 18vmin calc(18vmin + 2px), transparent calc(18vmin + 2px) 24vmin),
    var(--color-bg);
}
```

Tailwind patterns:

| Element | Classes |
|---|---|
| page | `bg-[#08090C] text-[#FFF3E0] font-sans antialiased` |
| heading | `text-6xl uppercase tracking-[0.02em] leading-none [text-shadow:0_0_20px_#FF6A1F]` |
| body | `text-base leading-[1.3] text-[#9AA3B2]` |
| section | `bg-[#14161C] p-4` |
| button | `rounded-none bg-[#FF6A1F] px-6 py-3 text-sm font-bold uppercase text-[#08090C]` |
| label | `text-xs uppercase tracking-[0.04em] text-[#2BB3FF]` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** solid, stroke 2 on a 24px field, round caps, round joins, container: none. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Phosphor (Bold) by Phosphor Icons, licence MIT. Reason: A bold family with heavy shapes that fit a high-contrast edit. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 700, tracking 0.02em, leading 1, case: uppercase.
- **Weights:** display 700, subhead 500, body 400, bold in text 700, labels and buttons 700. The style uses 3 weights (400, 500, 700) and no other. The display is 300 heavier than the body. The accent is case and tracking: an upper-case label is the accent, so the weights stay few.
- **Body type:** 16px, leading 1.4.
- **Page:** hero poster, center aligned, compact density, accent tilt 0°.
- **Ground:** rays. The ground is a ray burst that echoes the light flares of the edit. Put the class `ground` on the first screen of the page; it takes `--ground`, a stack of gradients built from the colour tokens. The ground can run behind the copy, so put the class `ground-copy` on each text block of that screen: the block gets `--color-bg` and a soft edge. Keep the rest of the page on `--color-bg`.
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

### Speed ramp (process)

Change the speed of one clip inside a single shot, from slow motion to fast play and back. Origin: film & video, United States, 2006.

- Set a speed curve with points at 20% and 400%.
- Place the slow point on the strong beat.
- Smooth the curve over 6 to 12 frames.
- Add a 2px zoom or shake on the jump.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **CapCut** (platform, web, 2020–now), made the style. A video-editing app by ByteDance with templates, speed curves and effects for short vertical clips.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Base colour (`base_colour`) | #FF6A1F | #FF6A1F, #2BB3FF, #FFF3E0 | --color-primary, --color-on-primary, --color-link-on-surface |
| Accent colour (`accent_colour`) | #2BB3FF | #2BB3FF, #FF6A1F | --color-accent, --color-on-accent, --color-link |
| Corner radius (`corner_radius`) | 0px | 0–4 px | --border-radius |
| Grid step (`grid_step`) | 8px | 2–8 px | --space-unit, --grid-gutter |
| Type scale ratio (`type_scale_ratio`) | 1.333 | 1.25–1.5 | --type-ratio, --size-small, --size-h3, --size-h2, --size-h1 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **calmer**: move toward [`grwm-short`](../grwm-short/SKILL.md) (Get Ready With Me). Remove the ramps and talk to the lens in a soft room.
- If the user asks for **more story**: move toward [`pov-short`](../pov-short/SKILL.md) (POV Short). Hold one take of 5 s and add a title line.
- If the user asks for **more still**: move toward [`photo-carousel-slideshow`](../photo-carousel-slideshow/SKILL.md) (Photo Carousel Slideshow). Replace the ramps with a swipe through 6 stills.

- **Came from (go here for a more orthodox version):** [`lip-sync-dance-short`](../lip-sync-dance-short/SKILL.md)
- **Rejects (the opposite pole; do not blend):** [`grwm-short`](../grwm-short/SKILL.md)
- **Was rejected by:** [`photo-carousel-slideshow`](../photo-carousel-slideshow/SKILL.md)
- **Mixes well with:** [`duet-split-screen`](../duet-split-screen/SKILL.md)
- **Kin in another domain:** [`music-video`](../music-video/SKILL.md), [`vertical-short-form`](../vertical-short-form/SKILL.md)
- **Nearest by vector profile:** [`aurora-gradient-ui`](../aurora-gradient-ui/SKILL.md), [`mid-century-modern`](../mid-century-modern/SKILL.md), [`corporate-memphis`](../corporate-memphis/SKILL.md)

## Emotional target

The viewer feels a jolt of energy and replays the clip.

**Keywords:** kinetic, intense, slick, hypnotic, loud · **Brand archetypes:** hero, outlaw

## Sources

- [Wikipedia: CapCut](https://en.wikipedia.org/wiki/CapCut)
- [Wikipedia: Speed ramping](https://en.wikipedia.org/wiki/Slow_motion)

---

Generated from [`data/internet/styles/velocity-edit.json`](../../data/internet/styles/velocity-edit.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
