---
name: instagram-vintage-filter
description: "Apply the Instagram Vintage Filter style (2010–now) when generating web pages, apps, memes, short video frames and other images of internet culture. Load when the user asks for: instagram filter, vintage filter, valencia, x-pro, polaroid look, square photo."
domain: internet
era: touchscreen
triggers:
  - "instagram filter"
  - "vintage filter"
  - "valencia"
  - "x-pro"
  - "polaroid look"
  - "square photo"
  - "retro phone photo"
  - "hipster photo"
vector_profile:
  ornamentation: 3
  dimensionality: 2
  grid_rigidity: 4
  skeuomorphic_realism: 4
  typographic_expressiveness: 2
---

# Instagram Vintage Filter

> One tap turns a plain phone snapshot into a keepsake: the filter, the frame and the vignette supply the age that the photo does not have.

A phone photo in a square 1:1 frame with a one-tap filter: warm fade, lifted blacks, a dark vignette and a thick white border. It made a phone snapshot look like an old print.

**Period:** 2010–now · **Era:** Touchscreen · **Domain:** Internet · **Also called:** Filter look, Valencia and X-Pro II, Square retro photo

## When to load this skill

Load it when the user asks for: "instagram filter", "vintage filter", "valencia", "x-pro", "polaroid look", "square photo", "retro phone photo", "hipster photo".

Good for: photo-sharing app demos, nostalgia campaigns, filter picker screens, memory and anniversary pages.

Do not use it when:
- The photo must show true colour, such as product or medical images.
- The design needs a modern, flat, wide-format layout.
- The audience wants a clean editorial look.

## System directives

When generating web pages, apps, memes, short video frames and other images of internet culture in Instagram Vintage Filter, you MUST:

1. Crop every photo to a 1:1 square and show it at full width, 640px on the first apps.
2. Fade the blacks to 10% to 15% grey and push the highlights toward amber (#E8B866) at 20% to 30% strength.
3. Add a vignette: a radial dark edge from 55% radius out to 100%, at 35% to 55% opacity.
4. Put a white border of 24px to 40px around the photo, with a thicker bottom edge of 64px for the caption.
5. Offer 15 to 18 named filters in a strip of 80px thumbnails, each with a one-word name in capitals.
6. Set the caption in a plain grotesque at 14px with the user name in bold, and keep the chrome flat.
7. Show a 1px hairline between the photo cards in the feed and a 44px tab bar of 5 icons.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Rectangular 16:9 or 3:4 crops.
- **NEVER:** Cool, clean, neutral colour with no fade.
- **NEVER:** A thin edge with no frame.
- **NEVER:** Many filters stacked on one photo.
- **NEVER:** Hard black shadows with no lift.
- **NEVER:** Large decorative display type on the photo.
- **NEVER:** A glossy 3D app chrome.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■■□□` 3/5 | pure minimal | maximalist |
| Dimensionality | `■■□□□` 2/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■■■□` 4/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■■■■□` 4/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■■□□□` 2/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** A single column of square cards 640px wide; the photo is 1:1 and the caption sits in a 64px strip below it.
- **Whitespace ratio:** 15% to 20% of the surface is border and gap; the spacing scale is 4, 8, 16 and 32px.
- **Alignment rules:** Photos fill the column; user name and time align flush left at 12px from the edge.
- **Container geometry:** Square photos with a 2px to 6px radius, a white print border and a 1px hairline between cards.

## Typography

- **Classifications:** neo-grotesque · handwritten caption
- **Tracking:** Display takes 0.02em; filter names take +0.08em in capitals.
- **Leading:** Display 1.15; body 1.5.
- **Hierarchy rules:** Use two weights: 400 and 700. · Use sizes 11, 14, 18 and 28px. · Set filter names in capitals at 11px. · Set the user name in bold and the caption in regular.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Arimo | Arimo | An open look-alike of Helvetica for the app chrome; Arimo has the same metrics. |
| Reenie Beanie | Arimo | A hand-written face for a print-style caption under the photo. |
| Special Elite | Arimo | A typewriter face for a date stamp on the border. |

## Colour & lighting

- **Palette structure:** Warm cream and sepia on a dark brown vignette, with one amber wash and one faded teal.
- **Contrast rules:** Text on cream holds at least 12:1; amber and teal carry filter tints and links only.
- **Surface treatment:** Flat cream and paper fills; the photo carries the colour grade; a 1px #D9CBB0 hairline separates cards.
- **Light and shadow:** A radial vignette of 35% to 55% opacity on the photo; the chrome has no cast shadow.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Print Cream | `#FBF6EA` | surface |
| Frame Paper | `#EFE6D3` | background |
| Sepia Ink | `#2B2118` | text |
| Amber Wash | `#E0A04A` | highlight |
| Rust | `#C8782E` | primary |
| Faded Teal | `#5F8F94` | accent |
| Vignette Brown | `#4A3524` | shadow |

## Materiality & texture

- **Surface simulation:** An instant print: a cream border around a faded, warm square photo.
- **Border rules:** A 24px to 40px white border on the photo; a 1px hairline on cards.
- **Blur and elevation:** No blur on chrome; a 1px lower edge of #D9CBB0 lifts the card.

## Ornamentation & iconography

- **Iconography:** Outline icons at 24px with a 2px stroke and round ends: heart, comment, camera and a filter wand.
- **Illustration:** No drawn art; the photo is the image. A small camera logo in the header.
- **Decorative elements:** square crop · white print border · edge vignette · filter name strip · date stamp

## Motion & interactivity

- **Born on screen:** yes
- **Transition physics:** The filter strip slides at 240ms; a tapped filter cross-fades the grade over 180ms; the heart pops to 120% and back in 300ms.
- **Easing:** cubic-bezier(0.2, 0, 0, 1)
- **Duration (ms):** 240
- **Hover and active:** Active filter thumbnail gets a 2px amber ring; a double tap on the photo shows a white heart that scales from 0 to 110% in 400ms.

## Code & token primer

Set `data-style="instagram-vintage-filter"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="instagram-vintage-filter"] {
  --color-bg: #EFE6D3;
  --color-surface: #FBF6EA;
  --color-text: #2B2118;
  --color-muted: #6B5B4A;
  --color-primary: #C8782E;
  --color-accent: #3F6F8E;
  --color-border: #D9CBB0;
  --font-sans: "Arimo", "Helvetica Neue", sans-serif;
  --font-display: "Arimo", "Reenie Beanie", sans-serif;
  --border-radius: 4px;
  --border-width: 1px;
  --shadow-elevation: 0 1px 0 #D9CBB0;
  --backdrop-filter: none;
  --space-unit: 8px;
  --ease: cubic-bezier(0.2, 0, 0, 1);
  --duration: 240ms;
  --type-ratio: 1.25;
  --size-small: 12.8px;
  --size-h3: 25px;
  --size-h2: 31.25px;
  --size-h1: 39.06px;
  --color-on-bg: #2B2118;
  --color-on-surface: #2B2118;
  --color-on-primary: #2B2118;
  --color-on-accent: #FFFFFF;
  --color-muted-on-bg: #6B5B4A;
  --color-muted-on-surface: #6B5B4A;
  --color-link: #2B2118;
  --color-link-on-surface: #3F6F8E;
  --display-weight: 700;
  --subhead-weight: 400;
  --body-weight: 400;
  --strong-weight: 700;
  --label-weight: 400;
  --display-tracking: 0.02em;
  --display-leading: 1.15;
  --display-case: none;
  --body-leading: 1.5;
  --body-size: 16px;
  --icon-stroke: 2;
  --ground: linear-gradient(var(--color-primary), var(--color-primary)) 22px 22px / calc(100% - 44px) 2px no-repeat,
    linear-gradient(var(--color-primary), var(--color-primary)) 22px calc(100% - 22px) / calc(100% - 44px) 2px no-repeat,
    linear-gradient(var(--color-primary), var(--color-primary)) 22px 22px / 2px calc(100% - 44px) no-repeat,
    linear-gradient(var(--color-primary), var(--color-primary)) calc(100% - 22px) 22px / 2px calc(100% - 44px) no-repeat,
    linear-gradient(var(--color-accent), var(--color-accent)) 32px 32px / calc(100% - 64px) 1px no-repeat,
    linear-gradient(var(--color-accent), var(--color-accent)) 32px calc(100% - 32px) / calc(100% - 64px) 1px no-repeat,
    linear-gradient(var(--color-accent), var(--color-accent)) 32px 32px / 1px calc(100% - 64px) no-repeat,
    linear-gradient(var(--color-accent), var(--color-accent)) calc(100% - 32px) 32px / 1px calc(100% - 64px) no-repeat,
    radial-gradient(60% 70% at 85% 50%, color-mix(in oklab, var(--color-accent) 18%, transparent), transparent 70%),
    url("data:image/svg+xml,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20width%3D'220'%20height%3D'220'%3E%3Cfilter%20id%3D'n'%3E%3CfeTurbulence%20type%3D'fractalNoise'%20baseFrequency%3D'.8'%20numOctaves%3D'3'%20stitchTiles%3D'stitch'%2F%3E%3CfeColorMatrix%20values%3D'0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.22%200%200%200%200'%2F%3E%3C%2Ffilter%3E%3Crect%20width%3D'100%25'%20height%3D'100%25'%20filter%3D'url(%23n)'%2F%3E%3C%2Fsvg%3E") 0 0 / 220px 220px repeat,
    var(--color-bg);
}
```

Tailwind patterns:

| Element | Classes |
|---|---|
| page | `bg-[#EFE6D3] text-[#2B2118] font-sans antialiased px-4 md:px-8` |
| heading | `text-2xl md:text-4xl font-bold leading-[1.15] tracking-[0.02em]` |
| body | `text-base leading-[1.6] max-w-prose` |
| section | `border border-[#D9CBB0] bg-[#FBF6EA] p-6 rounded` |
| button | `rounded bg-[#C8782E] px-6 py-3 text-sm font-bold text-[#FBF6EA] transition-colors duration-[240ms]` |
| label | `text-[11px] font-bold uppercase tracking-[0.08em] text-[#6B5B4A]` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** outline, stroke 2 on a 24px field, round caps, round joins, container: none. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Framework7 Icons (Regular) by Vladimir Kharlampidi, licence MIT. Reason: A line family that matches the thin, round app icons of the first photo apps. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 700, tracking 0.02em, leading 1.15, case: none.
- **Weights:** display 700, subhead 400, body 400, bold in text 700, labels and buttons 400. The style uses 2 weights (400, 700) and no other. The display is 300 heavier than the body. The accent is colour: one coloured word or field is the accent, so the weights stay quiet.
- **Body type:** 16px, leading 1.5.
- **Page:** hero stacked, center aligned, regular density, accent tilt 0°.
- **Ground:** frame. The ground is the white print border: a frame around a square photo. Put the class `ground` on the first screen of the page; it takes `--ground`, a stack of gradients built from the colour tokens. The ground can run behind the copy, so put the class `ground-copy` on each text block of that screen: the block gets `--color-bg` and a soft edge. Keep the rest of the page on `--color-bg`.
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

### Photo filter preset (process)

A saved set of colour and tone changes that a user applies to a photo with one tap. Origin: internet, United States, 2009.

- Save the curve, fade, tint, vignette and grain values as one named set.
- Apply the set to a photo at a strength from 0% to 100%.
- Show the set as a thumbnail with a short name.
- Keep one set for all photos when a feed must match.

## Media

The salons, schools, magazines, publishers, galleries and platforms that carried this style.

- **Instagram** (platform, web, 2010–now), launched the style. A photo and video app. Home and food images spread on it, and it carried trends such as dopamine decor and the film grain look.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Base colour (`base_colour`) | #C8782E | #C8782E, #3F6F8E, #2B2118 | --color-primary, --color-on-primary, --color-link-on-surface |
| Accent colour (`accent_colour`) | #3F6F8E | #3F6F8E, #E0A04A | --color-accent, --color-on-accent, --color-link |
| Corner radius (`corner_radius`) | 4px | 0–8 px | --border-radius |
| Grid step (`grid_step`) | 8px | 4–12 px | --space-unit, --grid-gutter |
| Type scale ratio (`type_scale_ratio`) | 1.25 | 1.2–1.414 | --type-ratio, --size-small, --size-h3, --size-h2, --size-h1 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more modern**: move toward [`vsco-preset-look`](../vsco-preset-look/SKILL.md) (VSCO Preset Look). Reduce the fade to 5%, drop the vignette and the white border, and set a matte grade.
- If the user asks for **more grunge**: move toward [`tumblr-soft-grunge`](../tumblr-soft-grunge/SKILL.md) (Tumblr Soft Grunge). Darken the ground, add pink and sage tints and a light grain, and remove the white frame.
- If the user asks for **more curated**: move toward [`cohesive-feed-grid`](../cohesive-feed-grid/SKILL.md) (Cohesive Feed Grid). Apply one tone to all photos and show them in a 3-column grid with 2px gaps.

- **Came from (go here for a more orthodox version):** [`skeuomorphism`](../skeuomorphism/SKILL.md)
- **Was rejected by:** [`vsco-preset-look`](../vsco-preset-look/SKILL.md)
- **Mixes well with:** [`tumblr-soft-grunge`](../tumblr-soft-grunge/SKILL.md)
- **Kin in another domain:** [`film-grain-revival`](../film-grain-revival/SKILL.md)
- **Nearest by vector profile:** [`starter-pack`](../starter-pack/SKILL.md), [`web-2-0-gloss`](../web-2-0-gloss/SKILL.md), [`ai-slop`](../ai-slop/SKILL.md)

## Emotional target

The viewer feels a warm, sentimental pull, as if the moment is already a memory.

**Keywords:** nostalgic, warm, faded, sentimental, casual, square · **Brand archetypes:** innocent, lover, explorer

## Sources

- [Wikipedia: Instagram](https://en.wikipedia.org/wiki/Instagram)
- [Wikipedia: Hipstamatic](https://en.wikipedia.org/wiki/Hipstamatic)

---

Generated from [`data/internet/styles/instagram-vintage-filter.json`](../../data/internet/styles/instagram-vintage-filter.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
