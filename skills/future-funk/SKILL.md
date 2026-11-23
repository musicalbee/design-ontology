---
name: future-funk
description: "Apply the Future funk style (2013–now) when generating web pages, apps, memes, short video frames, forum and chat screens, and other images of internet culture. Load when the user asks for: future funk, sailorwave, city pop, 90s anime, anime sunset, japanese pop nostalgia."
domain: internet
era: feed-mobile
triggers:
  - "future funk"
  - "sailorwave"
  - "city pop"
  - "90s anime"
  - "anime sunset"
  - "japanese pop nostalgia"
  - "anime lofi"
vector_profile:
  ornamentation: 4
  dimensionality: 2
  grid_rigidity: 2
  skeuomorphic_realism: 2
  typographic_expressiveness: 4
---

# Future funk

> Take the dreamy irony of vaporwave and make it warm and danceable: the past of Japanese pop and anime is a place to enjoy, not only to mourn.

Cels and stills from 1980s and 1990s anime in warm sunset colours, with city and neon signs and bright pastel type. It adds the sample-based look of vaporwave to upbeat dance music and Japanese pop culture.

**Period:** 2013–now · **Era:** The feed and the phone · **Domain:** Internet

## When to load this skill

Load it when the user asks for: "future funk", "sailorwave", "city pop", "90s anime", "anime sunset", "japanese pop nostalgia", "anime lofi".

Good for: music and mix pages, fan and streamer pages, album and single art, event posters for dance nights.

Do not use it when:
- The audience is formal or conservative.
- The page needs a serious, neutral tone.
- The brand has no link to anime or Japanese pop culture.

## System directives

When generating web pages, apps, memes, short video frames, forum and chat screens, and other images of internet culture in Future funk, you MUST:

1. Use a cropped still from a 1980s or 1990s anime as the focal image; run it at 60% to 80% of the viewport width.
2. Set a sunset gradient from hot pink (#FF6FB5) through peach (#FFB48A) to teal (#3CD7C9) at 160° behind the still.
3. Add a halftone or dot screen of 6px to 10px at 10% to 15% opacity over the gradient.
4. Set headlines in a rounded bold sans-serif, with a Japanese line at 50% of the size under each heading.
5. Frame content in rounded cards with a 3px white edge and a flat pink shadow of 6px.
6. Use a deep indigo ground (#1B1F4B) for text areas and keep body text at 16px with a contrast of 7:1 or more.
7. Add small stars, hearts and city silhouettes as flat shapes at 8% to 15% of the layout.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Grey, muted palettes.
- **NEVER:** Empty, lonely interiors.
- **NEVER:** Greek busts and wire grids.
- **NEVER:** Sharp serif display type.
- **NEVER:** Dense dark layouts with no colour.
- **NEVER:** Photographs of real places.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■■■□` 4/5 | pure minimal | maximalist |
| Dimensionality | `■■□□□` 2/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■□□□` 2/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■■□□□` 2/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■■■■□` 4/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** A 12-column grid with 24px gutters; a large still spans 7 columns and cards overlap its edge by 16px to 32px.
- **Whitespace ratio:** 15% to 25% of the surface stays empty; the spacing scale is 8, 16, 24 and 48px.
- **Alignment rules:** Centred hero and flush-left cards; stickers and stars float at offsets of 8px to 24px.
- **Container geometry:** Cards with a 20px radius and a 3px white edge; circles and pills for tags; flat offset shadows.

## Typography

- **Classifications:** rounded sans · display sans · Japanese gothic
- **Tracking:** Display takes 0.02em; tags take 0.1em; body stays at 0.01em.
- **Leading:** Display 1.15; body 1.6.
- **Hierarchy rules:** Use two weights: regular (400) and extra bold (800). · Use sizes 14, 18, 40 and 80px. · Set titles in mixed case. · Add a katakana or kanji line under each main heading.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| M PLUS Rounded 1c | Zen Maru Gothic | A rounded Japanese-style display face with a soft text face. |
| Fredoka | Nunito | A bold, friendly round face for a playful tone. |
| Dela Gothic One | Noto Sans JP | A heavy gothic display face with a plain Japanese text face. |

## Colour & lighting

- **Palette structure:** A warm sunset set of pink, peach and teal on deep indigo, with a pale cream for panels.
- **Contrast rules:** Text on night indigo holds at least 7:1; pink, peach and teal carry headings, edges and shapes, not long text.
- **Surface treatment:** Smooth sunset gradients with a halftone screen; flat colour for cards; cel-style flat fills in stills.
- **Light and shadow:** Flat offset shadows of 6px in pink; a soft glow of 6px on signs; no realistic cast shadow.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Night Indigo | `#1B1F4B` | background |
| Hot Pink | `#FF6FB5` | primary |
| Sunset Peach | `#FFB48A` | accent |
| City Teal | `#3CD7C9` | second accent |
| Cream | `#FFF4E6` | panel surface |
| Soft Lilac | `#B9A8F0` | muted |

## Materiality & texture

- **Surface simulation:** Anime cel and print: flat fills, hard outlines, film grain and a faint CRT or tape softness.
- **Border rules:** A 3px white edge on cards; a 2px indigo line on tags.
- **Blur and elevation:** Glow of 6px on neon signs only; cards have a 6px flat offset shadow.

## Ornamentation & iconography

- **Iconography:** Rounded filled icons at 24px with a thick body and round ends, in white or pink.
- **Illustration:** Stills and cels from 1980s and 1990s anime, city skylines at dusk, stars and hearts, and a few katakana signs.
- **Decorative elements:** anime still · sunset gradient · halftone dots · katakana line · city silhouette · star and heart stickers

## Motion & interactivity

- **Born on screen:** yes
- **Transition physics:** Bouncy and upbeat: cards slide in with a 10% overshoot; the still pans by 3% in 12s; stars pulse at 2s.
- **Easing:** cubic-bezier(0.34, 1.4, 0.64, 1)
- **Duration (ms):** 320
- **Hover and active:** Hover lifts the card by 4px and widens the shadow to 10px; active state moves the card down by 2px.

## Code & token primer

Set `data-style="future-funk"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="future-funk"] {
  --color-bg: #1B1F4B;
  --color-surface: #2A2F6B;
  --color-text: #FFF4E6;
  --color-muted: #C9C0F0;
  --color-primary: #FF6FB5;
  --color-accent: #3CD7C9;
  --color-border: #FFFFFF;
  --font-sans: "Zen Maru Gothic", "Nunito", sans-serif;
  --font-display: "M PLUS Rounded 1c", "Fredoka", sans-serif;
  --border-radius: 20px;
  --border-width: 3px;
  --shadow-elevation: 6px 6px 0 #FF6FB5;
  --backdrop-filter: none;
  --space-unit: 8px;
  --ease: cubic-bezier(0.34, 1.4, 0.64, 1);
  --duration: 320ms;
  --type-ratio: 1.5;
  --size-small: 10.67px;
  --size-h3: 36px;
  --size-h2: 54px;
  --size-h1: 81px;
  --color-on-bg: #FFF4E6;
  --color-on-surface: #FFF4E6;
  --color-on-primary: #1B1F4B;
  --color-on-accent: #1B1F4B;
  --color-muted-on-bg: #C9C0F0;
  --color-muted-on-surface: #C9C0F0;
  --color-link: #3CD7C9;
  --color-link-on-surface: #3CD7C9;
  --display-weight: 800;
  --subhead-weight: 600;
  --body-weight: 400;
  --strong-weight: 700;
  --label-weight: 700;
  --display-tracking: 0.02em;
  --display-leading: 1.15;
  --display-case: none;
  --body-leading: 1.6;
  --body-size: 16px;
  --icon-stroke: 2;
  --ground: linear-gradient(100deg, var(--color-bg) 28%, transparent 60%),
    radial-gradient(circle, var(--color-accent) 34%, transparent 36%) 0 0 / 22px 22px,
    repeating-conic-gradient(from 0deg at 84% 30%, color-mix(in oklab, var(--color-primary) 70%, transparent) 0 9deg, transparent 9deg 18deg),
    var(--color-bg);
}
```

Tailwind patterns:

| Element | Classes |
|---|---|
| page | `bg-[#1B1F4B] text-[#FFF4E6] antialiased px-6 md:px-12` |
| heading | `text-4xl md:text-6xl font-semibold leading-[1.1]` |
| body | `text-base leading-[1.6] max-w-prose` |
| section | `border bg-[#2A2F6B] rounded-[20px] shadow-[6px_6px_0_#FF6FB5]` |
| button | `rounded-[20px] border border-[#3CD7C9] bg-[#FF6FB5] px-6 py-3 text-sm font-semibold text-[#1B1F4B]` |
| label | `text-xs uppercase tracking-[0.12em] text-[#3CD7C9]` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** solid, stroke 2 on a 24px field, round caps, round joins, container: circle. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from MingCute (Fill) by MingCute Design, licence Apache 2.0. Reason: Filled icons with round shapes match the soft, bold look of the cels and stickers. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 800, tracking 0.02em, leading 1.15, case: none.
- **Weights:** display 800, subhead 600, body 400, bold in text 700, labels and buttons 700. The style uses 4 weights (400, 600, 700, 800) and no other. The display is 400 heavier than the body. The accent is colour: one coloured word or field is the accent, so the weights stay quiet.
- **Body type:** 16px, leading 1.6.
- **Page:** hero split, center aligned, regular density, accent tilt -2°.
- **Ground:** halftone. Future funk keeps the screen-printed dot of anime posters under a sunset gradient. Put the class `ground` on the first screen of the page; it takes `--ground`, a stack of gradients built from the colour tokens. The ground can run behind the copy, so put the class `ground-copy` on each text block of that screen: the block gets `--color-bg` and a soft edge. Keep the rest of the page on `--color-bg`.
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

### Anime still collage (montage, invented here)

A still from a 1980s or 1990s anime, cropped and set on a sunset gradient with dots, katakana and small stickers. Origin: internet, web, 2013.

- Crop one still or cel from a 1980s or 1990s anime to fill 60% to 80% of the width.
- Set a pink to peach to teal gradient behind the still.
- Add a dot screen of 6px to 10px at 10% to 15% opacity and a katakana line at half the size of the title.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **4chan** (platform, web, 2003–now), gathered the style. An anonymous image board. In 2019 a post of an empty yellow room on its paranormal board began the Backrooms and the liminal spaces look.
- **Reddit** (platform, web, 2005–now), gathered the style. A forum site of topic groups. The groups on Weirdcore and Liminalspace spread the images of empty, strange places.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Base colour (`base_colour`) | #FF6FB5 | #FF6FB5, #3CD7C9, #FFF4E6 | --color-primary, --color-on-primary, --color-link-on-surface |
| Accent colour (`accent_colour`) | #3CD7C9 | #3CD7C9, #FFB48A | --color-accent, --color-on-accent, --color-link |
| Corner radius (`corner_radius`) | 20px | 12–28 px | --border-radius |
| Grid step (`grid_step`) | 8px | 4–10 px | --space-unit, --grid-gutter |
| Type scale ratio (`type_scale_ratio`) | 1.5 | 1.414–1.618 | --type-ratio, --size-small, --size-h3, --size-h2, --size-h1 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **moodier**: move toward [`vaporwave`](../vaporwave/SKILL.md) (Vaporwave). Swap the anime still for a classical bust; use violet and cyan on a dark purple ground and add a perspective floor.
- If the user asks for **emptier**: move toward [`mallsoft`](../mallsoft/SKILL.md) (Mallsoft). Swap the anime still for a faded photo of an empty mall; use peach and teal with tile floors.
- If the user asks for **cleaner**: move toward [`utopian-virtual`](../utopian-virtual/SKILL.md) (Utopian virtual). Replace the cels with glossy 3D renders; use sky blue and white and drop the halftone.

- **Nearest by vector profile:** [`cottagecore`](../cottagecore/SKILL.md), [`lip-sync-dance-short`](../lip-sync-dance-short/SKILL.md), [`chat-sticker-pack`](../chat-sticker-pack/SKILL.md)

## Emotional target

The viewer feels warm, playful nostalgia and wants to dance.

**Keywords:** playful, warm, upbeat, nostalgic, bright, romantic · **Brand archetypes:** jester, lover, explorer

## Sources

- [Wikipedia: Vaporwave](https://en.wikipedia.org/wiki/Vaporwave)
- [Wikipedia: Macross 82-99](https://en.wikipedia.org/wiki/Macross_82-99)

---

Generated from [`data/internet/styles/future-funk.json`](../../data/internet/styles/future-funk.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
