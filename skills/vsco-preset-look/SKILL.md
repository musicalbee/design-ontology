---
name: vsco-preset-look
description: "Apply the VSCO Preset Look style (2013–now) when generating web pages, apps, memes, short video frames, forum and chat screens, and other images of internet culture. Load when the user asks for: vsco, vsco preset, matte photo, film preset, muted tones, a6 preset."
domain: internet
era: feed-mobile
triggers:
  - "vsco"
  - "vsco preset"
  - "matte photo"
  - "film preset"
  - "muted tones"
  - "a6 preset"
  - "faded film look"
  - "vsco girl"
vector_profile:
  ornamentation: 1
  dimensionality: 1
  grid_rigidity: 3
  skeuomorphic_realism: 3
  typographic_expressiveness: 2
---

# VSCO Preset Look

> A preset, not a filter: the edit imitates a real film stock and must look as if no edit happened.

A quiet photo grade that copies film stock: matte blacks, soft contrast, muted greens and warm skin. A preset code such as A6 or HB2 sets it, and the app chrome stays pale and spare.

**Period:** 2013–now · **Era:** The feed and the phone · **Domain:** Internet · **Also called:** VSCO filter, Matte film preset, VSCO girl photo

## When to load this skill

Load it when the user asks for: "vsco", "vsco preset", "matte photo", "film preset", "muted tones", "a6 preset", "faded film look", "vsco girl".

Good for: photo editing app screens, travel and lifestyle blogs, creator portfolios, preset shop pages.

Do not use it when:
- The brand needs bold, loud colour.
- The photo must show exact product colour.
- The page needs a strong graphic identity.

## System directives

When generating web pages, apps, memes, short video frames, forum and chat screens, and other images of internet culture in VSCO Preset Look, you MUST:

1. Lift the black point to 8% to 12% grey and cut contrast by 10% to 20%.
2. Pull saturation to 80% and shift greens toward teal (hue +10°) and skin toward warm beige.
3. Add a grain of 4% to 8% and keep it at 100% view only.
4. Name each preset with a short code of 2 to 3 characters, such as A6, and show it in 11px capitals.
5. Show the preset strip as flat tiles of 72px with a 1px outline, and show the strength slider from 0 to 12.
6. Keep the app chrome in off-white (#F2EFEA) and charcoal (#1F1E1C), with no colour except the photo.
7. Use a wide margin of 24px to 40px around each photo and leave no border on it.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Strong vignettes.
- **NEVER:** Thick white frames.
- **NEVER:** Saturated, neon grades.
- **NEVER:** Decorative type on the photo.
- **NEVER:** Heavy grain at 15% or more.
- **NEVER:** Many named filters with bold previews.
- **NEVER:** Glossy or 3D chrome.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■□□□□` 1/5 | pure minimal | maximalist |
| Dimensionality | `■□□□□` 1/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■■□□` 3/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■■■□□` 3/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■■□□□` 2/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** A grid of photos in 3 columns with 2px gaps, or a full-width single photo; the editor has a photo area and a 96px tool tray below it.
- **Whitespace ratio:** 35% to 45% of the editor stays empty; the spacing scale is 4, 8, 16, 24 and 40px.
- **Alignment rules:** The photo centres; tool labels align under their icons; text sits flush left at 24px.
- **Container geometry:** Photos with a 0px radius; tool tiles of 72px with a 2px radius and a 1px outline.

## Typography

- **Classifications:** geometric sans · grotesque
- **Tracking:** Display takes +0.04em; preset codes take +0.12em in capitals.
- **Leading:** Display 1.2; body 1.6.
- **Hierarchy rules:** Use two weights: 400 and 600. · Use sizes 11, 14, 18 and 32px. · Set preset codes in capitals at 11px. · Use one text colour on the page.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Jost | Work Sans | A geometric sans for names and a calm grotesque for text. |
| Josefin Sans | Inter | A thin, wide-set capital face for preset codes. |
| Manrope | Inter | A modern sans pair for a clean app screen. |

## Colour & lighting

- **Palette structure:** Warm off-white and charcoal chrome; photo tones of bone, taupe, faded teal and a warm highlight.
- **Contrast rules:** Text on off-white holds at least 14:1; taupe and teal carry the slider, selected tile and links.
- **Surface treatment:** Flat off-white and white fills; no gradient on chrome; the photo carries a matte grade with a lifted black point.
- **Light and shadow:** Soft, even light in photos; the chrome has no shadow beyond a 1px line of #DDD8CF.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Matte Bone | `#F2EFEA` | background |
| Paper White | `#FFFFFF` | surface |
| Film Ink | `#1F1E1C` | text |
| Film Taupe | `#8A7B66` | primary |
| Faded Teal | `#6E8B8A` | accent |
| Warm Highlight | `#E9D7BE` | highlight |
| Lifted Shadow | `#3A3835` | shadow |

## Materiality & texture

- **Surface simulation:** A contact sheet of film prints on matte paper.
- **Border rules:** A 1px #DDD8CF outline on tiles and cards; no border on photos.
- **Blur and elevation:** No blur and no elevation; a selected tile gets a 2px charcoal outline.

## Ornamentation & iconography

- **Iconography:** Fine outline icons at 24px with a 1.5px stroke: sliders, crop, grain and exposure.
- **Illustration:** No drawn art; only the photo and a small wordmark.
- **Decorative elements:** preset code tile · strength slider · matte grade · film grain · contact sheet grid

## Motion & interactivity

- **Born on screen:** yes
- **Transition physics:** A preset cross-fades over 200ms; the slider tracks the finger with no delay; tiles scroll with a soft stop of 300ms.
- **Easing:** cubic-bezier(0.4, 0, 0.2, 1)
- **Duration (ms):** 200
- **Hover and active:** The selected tile shows a 2px outline; a long press compares the photo with the original and snaps back in 150ms.

## Code & token primer

Set `data-style="vsco-preset-look"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="vsco-preset-look"] {
  --color-bg: #F2EFEA;
  --color-surface: #FFFFFF;
  --color-text: #1F1E1C;
  --color-muted: #5E5B55;
  --color-primary: #8A7B66;
  --color-accent: #4F6F6E;
  --color-border: #DDD8CF;
  --font-sans: "Work Sans", "Inter", sans-serif;
  --font-display: "Jost", "Josefin Sans", sans-serif;
  --border-radius: 2px;
  --border-width: 1px;
  --shadow-elevation: none;
  --backdrop-filter: none;
  --space-unit: 8px;
  --ease: cubic-bezier(0.4, 0, 0.2, 1);
  --duration: 200ms;
  --type-ratio: 1.25;
  --size-small: 12.8px;
  --size-h3: 25px;
  --size-h2: 31.25px;
  --size-h1: 39.06px;
  --color-on-bg: #1F1E1C;
  --color-on-surface: #1F1E1C;
  --color-on-primary: #000000;
  --color-on-accent: #F2EFEA;
  --color-muted-on-bg: #5E5B55;
  --color-muted-on-surface: #5E5B55;
  --color-link: #4F6F6E;
  --color-link-on-surface: #4F6F6E;
  --display-weight: 600;
  --subhead-weight: 400;
  --body-weight: 400;
  --strong-weight: 600;
  --label-weight: 400;
  --display-tracking: 0.04em;
  --display-leading: 1.2;
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
| page | `bg-[#F2EFEA] text-[#1F1E1C] font-sans antialiased px-4 md:px-8` |
| heading | `text-3xl md:text-5xl font-semibold leading-[1.2] tracking-[0.04em]` |
| body | `text-base leading-[1.6] max-w-prose` |
| section | `border border-[#DDD8CF] bg-white p-6 rounded-sm` |
| button | `rounded-sm bg-[#1F1E1C] px-6 py-3 text-sm font-semibold text-[#F2EFEA] transition-colors duration-[200ms] hover:bg-[#8A7B66]` |
| label | `text-[11px] font-semibold uppercase tracking-[0.12em] text-[#5E5B55]` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** outline, stroke 1.5 on a 24px field, round caps, round joins, container: none. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Lucide (Regular) by Lucide Contributors, licence ISC. Reason: A thin, quiet line family that suits sliders and tool icons on a pale editor screen. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 600, tracking 0.04em, leading 1.2, case: none.
- **Weights:** display 600, subhead 400, body 400, bold in text 600, labels and buttons 400. The style uses 2 weights (400, 600) and no other. The display is 200 heavier than the body. The accent is weight: a heavier word is the accent, so the steps between the weights are clear.
- **Body type:** 16px, leading 1.6.
- **Page:** hero split, left aligned, airy density, accent tilt 0°.
- **Ground:** soft. The ground is soft, even light: a flat matte field with no pattern. Put the class `ground` on the first screen of the page; it takes `--ground`, a stack of gradients built from the colour tokens. The ground can run behind the copy, so put the class `ground-copy` on each text block of that screen: the block gets `--color-bg` and a soft edge. Keep the rest of the page on `--color-bg`.
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

### Matte fade (process)

A grade that lifts the black point to a grey and lowers contrast, so that the photo looks soft and printed. Origin: photography, United States, c. 1990.

- Raise the black point of the tone curve to 8% to 15% grey.
- Lower contrast by 10% to 20% and saturation by 20% to 40%.
- Tint the shadows toward pink, green or teal by a small amount.
- Add a grain of 4% to 12%.

### Photo filter preset (process)

A saved set of colour and tone changes that a user applies to a photo with one tap. Origin: internet, United States, 2009.

- Save the curve, fade, tint, vignette and grain values as one named set.
- Apply the set to a photo at a strength from 0% to 100%.
- Show the set as a thumbnail with a short name.
- Keep one set for all photos when a feed must match.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **VSCO** (platform, web, 2011–now), launched the style. A photo app with presets that copy film stock. It spread grain and faded colour on phone photos.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Base colour (`base_colour`) | #8A7B66 | #8A7B66, #1F1E1C, #4F6F6E | --color-primary, --color-on-primary, --color-link-on-surface |
| Accent colour (`accent_colour`) | #4F6F6E | #4F6F6E, #8A7B66 | --color-accent, --color-on-accent, --color-link |
| Corner radius (`corner_radius`) | 2px | 0–4 px | --border-radius |
| Grid step (`grid_step`) | 8px | 4–10 px | --space-unit, --grid-gutter |
| Type scale ratio (`type_scale_ratio`) | 1.25 | 1.2–1.414 | --type-ratio, --size-small, --size-h3, --size-h2, --size-h1 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more nostalgic**: move toward [`instagram-vintage-filter`](../instagram-vintage-filter/SKILL.md) (Instagram Vintage Filter). Add the vignette, the cream print border and an amber fade.
- If the user asks for **more curated**: move toward [`cohesive-feed-grid`](../cohesive-feed-grid/SKILL.md) (Cohesive Feed Grid). Fix one preset for all photos and lay them in a strict 3-column grid.
- If the user asks for **moodier**: move toward [`tumblr-soft-grunge`](../tumblr-soft-grunge/SKILL.md) (Tumblr Soft Grunge). Move to a dark ground, lower the exposure and add pink and sage tints.

- **Led to (go here for a newer version):** [`cohesive-feed-grid`](../cohesive-feed-grid/SKILL.md)
- **Rejects (the opposite pole; do not blend):** [`instagram-vintage-filter`](../instagram-vintage-filter/SKILL.md)
- **Mixes well with:** [`clean-girl`](../clean-girl/SKILL.md), [`flat-lay-feed`](../flat-lay-feed/SKILL.md), [`tumblr-soft-grunge`](../tumblr-soft-grunge/SKILL.md)
- **Kin in another domain:** [`cinematic-teal-orange`](../cinematic-teal-orange/SKILL.md), [`film-grain-revival`](../film-grain-revival/SKILL.md)
- **Nearest by vector profile:** [`discord-server`](../discord-server/SKILL.md), [`flat-lay-feed`](../flat-lay-feed/SKILL.md), [`grwm-short`](../grwm-short/SKILL.md)

## Emotional target

The viewer feels calm, relaxed and quietly stylish, with no sense of effort.

**Keywords:** matte, calm, muted, filmic, minimal, relaxed · **Brand archetypes:** creator, sage, explorer

## Sources

- [Wikipedia: VSCO](https://en.wikipedia.org/wiki/VSCO)
- [Wikipedia: VSCO girl](https://en.wikipedia.org/wiki/VSCO_girl)

---

Generated from [`data/internet/styles/vsco-preset-look.json`](../../data/internet/styles/vsco-preset-look.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
