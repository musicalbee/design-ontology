---
name: grwm-short
description: "Apply the Get Ready With Me style (2019–now) when generating web pages, apps, memes, short video frames and other images of internet culture. Load when the user asks for: grwm, get ready with me, morning routine, makeup routine, outfit video, night out routine."
domain: internet
era: contemporary-spatial
triggers:
  - "grwm"
  - "get ready with me"
  - "morning routine"
  - "makeup routine"
  - "outfit video"
  - "night out routine"
vector_profile:
  ornamentation: 2
  dimensionality: 1
  grid_rigidity: 2
  skeuomorphic_realism: 3
  typographic_expressiveness: 3
---

# Get Ready With Me

> Share a real routine in real time: the talk matters more than the result.

A creator talks to a close phone camera while she or he does make-up or picks an outfit, with soft light, a mirror, jump cuts and a line of captions. The form grew from YouTube make-up tutorials of the 2000s.

**Period:** 2019–now · **Era:** Contemporary & Spatial · **Domain:** Internet · **Also called:** GRWM, Get ready with me video, Morning routine clip

## When to load this skill

Load it when the user asks for: "grwm", "get ready with me", "morning routine", "makeup routine", "outfit video", "night out routine".

Good for: beauty and fashion clips, product placement, event preludes, lifestyle channel intros.

Do not use it when:
- The audience needs hard technical facts.
- The brand voice is formal.
- The scene has no personal host.

## System directives

When generating web pages, apps, memes, short video frames and other images of internet culture in Get Ready With Me, you MUST:

1. Frame the face and shoulders at 55% to 70% of the frame height, with eyes at 38% from the top.
2. Light with a ring light or a window at 5600 K to 6500 K.
3. Use jump cuts at 1 cut every 2 s to 5 s; remove all pauses.
4. Set a hook line in the first 1.5 s, for example the event or the place.
5. Caption the speech in 40 px words, 2 lines at most, at 65% of the frame height.
6. Show product names as 28 px text tags with a 12 px radius, placed near the product.
7. Use a warm, soft grade: lift shadows by 10% and keep skin tones at 2 to 3 stops of exposure.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Studio lighting with hard shadows.
- **NEVER:** Scripted, stiff delivery.
- **NEVER:** Wide shots of an empty room.
- **NEVER:** Heavy filters that change the skin.
- **NEVER:** Long intros with a logo.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■□□□` 2/5 | pure minimal | maximalist |
| Dimensionality | `■□□□□` 1/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■□□□` 2/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■■■□□` 3/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■■■□□` 3/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** A single vertical frame with a face-and-mirror composition; a caption zone at 62% to 76% of the height; product tags on the right third.
- **Whitespace ratio:** 30% to 40% of the frame is soft background; text takes under 10%.
- **Alignment rules:** Face centred; captions centred; tags align to the right edge with a 32 px margin.
- **Container geometry:** Rounded video corners of 24 px in the post view; pill tags of 12 px radius; 1:1 product thumbnails.

## Typography

- **Classifications:** humanist sans · rounded sans
- **Tracking:** Display -0.01em; body 0em.
- **Leading:** Display 1.2; body 1.45.
- **Hierarchy rules:**
  - Use bold (700) for the hook line and regular (400) for captions.
  - Set the hook at 56 px and captions at 40 px.
  - Set text in white with a 4% black shadow, or in dark text on a cream pill.
  - Limit a caption to 6 words per cut.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| DM Sans | Inter | A friendly sans in medium and bold weights. |
| Nunito | Nunito Sans | A rounded sans that matches the soft mood. |

## Colour & lighting

- **Palette structure:** Warm neutrals with one soft blush, on a cream and beige base.
- **Contrast rules:** Espresso on cream gives 12:1; white caption text needs a 40% dark pill below it.
- **Surface treatment:** Soft, matte, warm; skin tones lead.
- **Light and shadow:** Soft window light from the left at 45°; a 10% shadow lift; no hard shadows.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Cream | `#FBF3EA` | background |
| Blush | `#F2B8B0` | primary |
| Rose Clay | `#C9776F` | accent |
| Espresso | `#3B2A26` | text |
| Taupe | `#8A746C` | muted text |
| Linen | `#EFE0D2` | surface |

## Materiality & texture

- **Surface simulation:** A bathroom mirror and a bedroom: matte skin, glass and cotton.
- **Border rules:** No borders; a 1 px cream ring on product tags.
- **Blur and elevation:** A soft blur of 12 px on the background when the mirror is out of focus.

## Ornamentation & iconography

- **Iconography:** Outline 24 px icons for bookmark, share and audio.
- **Illustration:** Small hand-drawn sparkle marks and a product tag.
- **Decorative elements:** product tag pill · time-stamp caption · mirror frame · sparkle mark · hook line

## Motion & interactivity

- **Born on screen:** yes
- **Transition physics:** Jump cuts at 2 s to 5 s; outfit changes cut on a hand wave; a caption fades in over 200 ms.
- **Easing:** cubic-bezier(0.4, 0, 0.2, 1)
- **Duration (ms):** 200
- **Hover and active:** A tap on a product tag opens a card that scales from 95% to 100% in 200 ms.

## Code & token primer

Set `data-style="grwm-short"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="grwm-short"] {
  --color-bg: #FBF3EA;
  --color-surface: #EFE0D2;
  --color-text: #3B2A26;
  --color-muted: #6E5A53;
  --color-primary: #C9776F;
  --color-accent: #F2B8B0;
  --color-border: #E0CBB9;
  --font-sans: "Inter", "Nunito Sans", sans-serif;
  --font-display: "DM Sans", "Nunito", sans-serif;
  --border-radius: 24px;
  --border-width: 1px;
  --shadow-elevation: 0 8px 24px rgba(59,42,38,0.12);
  --backdrop-filter: none;
  --space-unit: 8px;
  --ease: cubic-bezier(0.2, 0.8, 0.2, 1);
  --duration: 200ms;
  --type-ratio: 1.25;
  --size-small: 12.8px;
  --size-h3: 25px;
  --size-h2: 31.25px;
  --size-h1: 39.06px;
  --color-on-bg: #3B2A26;
  --color-on-surface: #3B2A26;
  --color-on-primary: #000000;
  --color-on-accent: #3B2A26;
  --color-muted-on-bg: #6E5A53;
  --color-muted-on-surface: #6E5A53;
  --color-link: #3B2A26;
  --color-link-on-surface: #3B2A26;
  --display-weight: 500;
  --subhead-weight: 500;
  --body-weight: 400;
  --strong-weight: 700;
  --label-weight: 500;
  --display-tracking: -0.01em;
  --display-leading: 1.2;
  --display-case: none;
  --body-leading: 1.4;
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
| page | `bg-[#FBF3EA] text-[#3B2A26] font-sans antialiased` |
| heading | `text-5xl font-bold leading-[1.2] -tracking-[0.01em]` |
| body | `text-base leading-[1.45] text-[#6E5A53]` |
| section | `rounded-3xl bg-[#EFE0D2] p-6` |
| button | `rounded-full bg-[#C9776F] px-6 py-3 text-sm font-medium text-[#FBF3EA]` |
| label | `text-xs uppercase tracking-wide text-[#6E5A53]` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** outline, stroke 1.5 on a 24px field, round caps, round joins, container: none. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Lucide (Regular) by Lucide Contributors, licence ISC. Reason: A thin outline family that suits a soft, personal feed. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 500, tracking -0.01em, leading 1.2, case: none.
- **Weights:** display 500, subhead 500, body 400, bold in text 700, labels and buttons 500. The style uses 3 weights (400, 500, 700) and no other. The display is 100 heavier than the body. The accent is colour: one coloured word or field is the accent, so the weights stay quiet.
- **Body type:** 16px, leading 1.4.
- **Page:** hero poster, center aligned, airy density, accent tilt 0°.
- **Ground:** soft. The ground is a soft warm wash that echoes window light in a bedroom. Put the class `ground` on the first screen of the page; it takes `--ground`, a stack of gradients built from the colour tokens. The ground can run behind the copy, so put the class `ground-copy` on each text block of that screen: the block gets `--color-bg` and a soft edge. Keep the rest of the page on `--color-bg`.
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

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **YouTube** (platform, web, 2005–now), published the style. A web site where people post video. The daily vlog grew here, and it became the main home of the music video.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Base colour (`base_colour`) | #C9776F | #F2B8B0, #C9776F, #FBF3EA | --color-primary, --color-on-primary, --color-link-on-surface |
| Accent colour (`accent_colour`) | #F2B8B0 | #C9776F, #F2B8B0 | --color-accent, --color-on-accent, --color-link |
| Corner radius (`corner_radius`) | 24px | 12–32 px | --border-radius |
| Grid step (`grid_step`) | 8px | 4–8 px | --space-unit, --grid-gutter |
| Type scale ratio (`type_scale_ratio`) | 1.25 | 1.2–1.414 | --type-ratio, --size-small, --size-h3, --size-h2, --size-h1 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more produced**: move toward [`creator-vlog`](../creator-vlog/SKILL.md) (Creator vlog). Use a tripod, a second camera angle and a title card of 1.5 s.
- If the user asks for **more energy**: move toward [`velocity-edit`](../velocity-edit/SKILL.md) (Velocity Edit). Add speed ramps and beat cuts between the outfit changes.
- If the user asks for **less talk**: move toward [`photo-carousel-slideshow`](../photo-carousel-slideshow/SKILL.md) (Photo Carousel Slideshow). Turn each step into a still slide with a 1 line caption.

- **Led to (go here for a newer version):** [`photo-carousel-slideshow`](../photo-carousel-slideshow/SKILL.md)
- **Rejects (the opposite pole; do not blend):** [`lip-sync-dance-short`](../lip-sync-dance-short/SKILL.md)
- **Was rejected by:** [`velocity-edit`](../velocity-edit/SKILL.md)
- **Mixes well with:** [`duet-split-screen`](../duet-split-screen/SKILL.md), [`pov-short`](../pov-short/SKILL.md)
- **Kin in another domain:** [`creator-vlog`](../creator-vlog/SKILL.md), [`vertical-short-form`](../vertical-short-form/SKILL.md)
- **Nearest by vector profile:** [`weirdcore`](../weirdcore/SKILL.md), [`glitch-gif`](../glitch-gif/SKILL.md), [`photo-dump`](../photo-dump/SKILL.md)

## Emotional target

The viewer feels at ease, as if a friend talks while she or he gets ready.

**Keywords:** intimate, warm, chatty, relaxed, aspirational · **Brand archetypes:** everyman, lover

## Sources

- [Wikipedia: Michelle Phan](https://en.wikipedia.org/wiki/Michelle_Phan)
- [Wikipedia: Vlog](https://en.wikipedia.org/wiki/Vlog)

---

Generated from [`data/internet/styles/grwm-short.json`](../../data/internet/styles/grwm-short.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
