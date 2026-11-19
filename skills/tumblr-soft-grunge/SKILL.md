---
name: tumblr-soft-grunge
description: "Apply the Tumblr Soft Grunge style (2012–now) when generating web pages, apps, memes, short video frames, forum and chat screens, and other images of internet culture. Load when the user asks for: soft grunge, tumblr aesthetic, pale grunge, 2014 tumblr, pastel goth photo, moody pastel."
domain: internet
era: feed-mobile
triggers:
  - "soft grunge"
  - "tumblr aesthetic"
  - "pale grunge"
  - "2014 tumblr"
  - "pastel goth photo"
  - "moody pastel"
  - "light leak"
  - "reblog"
vector_profile:
  ornamentation: 4
  dimensionality: 2
  grid_rigidity: 2
  skeuomorphic_realism: 3
  typographic_expressiveness: 3
---

# Tumblr Soft Grunge

> A feed of reblogged scraps that feels like a teenager's wall: faded, tender and a little broken.

A pale, moody photo look from reblog blogs: faded pastel on a dark ground, film grain, light leaks, torn paper edges and small typewriter captions. It is sad and soft, not loud.

**Period:** 2012–now · **Era:** The feed and the phone · **Domain:** Internet · **Also called:** Soft grunge, Tumblr aesthetic, Pale grunge

## When to load this skill

Load it when the user asks for: "soft grunge", "tumblr aesthetic", "pale grunge", "2014 tumblr", "pastel goth photo", "moody pastel", "light leak", "reblog".

Good for: music and zine pages, youth fashion lookbooks, mood board pages, nostalgia posts about the 2010s web.

Do not use it when:
- The product needs a bright, trustworthy, corporate tone.
- The text is long and must be easy to read.
- The audience is a young child.

## System directives

When generating web pages, apps, memes, short video frames, forum and chat screens, and other images of internet culture in Tumblr Soft Grunge, you MUST:

1. Set the ground at a dark mauve-grey (#2A2528) and let photos fade to pastel pink (#E6A5B8) and sage (#9FB8A8).
2. Lift the blacks to 15% grey, lower the saturation to 60% and add a grain of 8% to 12%.
3. Add a light leak: a warm orange or pink gradient across 20% to 30% of one photo edge at 40% opacity.
4. Crop photos to 500px to 540px wide and stack them in one column of the dashboard with 20px gaps.
5. Tilt overlaid stickers and tape by 2° to 5° and tear the paper edge at 6px to 10px.
6. Set captions in a typewriter face at 13px in lower case with a pale grey (#C7B8BE) colour.
7. Overlay a thin quote in a script or a typewriter face over the photo at 70% opacity.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Saturated, clean colour.
- **NEVER:** Sharp, bright, high-key photos.
- **NEVER:** Tidy aligned rows with no overlap.
- **NEVER:** Large bold sans-serif headlines.
- **NEVER:** Glossy gradients and shadows.
- **NEVER:** Crisp white backgrounds.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■■■□` 4/5 | pure minimal | maximalist |
| Dimensionality | `■■□□□` 2/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■□□□` 2/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■■■□□` 3/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■■■□□` 3/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** A single dashboard column of 500px posts with 20px gaps; sticker and tape layers sit over the photo corners.
- **Whitespace ratio:** 20% to 30% stays empty; the spacing scale is 4, 10, 20 and 40px.
- **Alignment rules:** Photos centre in the column; captions sit flush left; stickers tilt off the grid by 2° to 5°.
- **Container geometry:** Photos with a 0px to 2px radius and torn paper edges; tape strips of 60px by 20px at 60% opacity.

## Typography

- **Classifications:** typewriter · script · monospace
- **Tracking:** Display takes +0.05em; captions take 0.02em.
- **Leading:** Display 1.2; body 1.6.
- **Hierarchy rules:** Use two weights: 400 and 700. · Use sizes 12, 14, 20 and 36px. · Set captions in lower case. · Set quotes in italic at 70% opacity.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Special Elite | Courier Prime | A worn typewriter face for captions, with a clean mono body. |
| Amatic SC | Courier Prime | A thin hand-drawn capital face for a quote on the photo. |
| Cormorant Garamond | Courier Prime | A fine italic serif for a soft, literary quote. |

## Colour & lighting

- **Palette structure:** A dark plum-grey ground with washed pink, sage and lilac, and one bleached white.
- **Contrast rules:** Text on the plum ground holds at least 10:1; pastel colours carry photo tints, tape and accents.
- **Surface treatment:** A flat dark ground with a grain overlay of 6% to 10%; photos carry the faded colour; torn paper layers at 90% opacity.
- **Light and shadow:** Soft light leaks at 40% opacity on photo edges; no hard shadow; a 1px dark edge under tape.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Charcoal Plum | `#2A2528` | background |
| Smoke | `#3A3236` | surface |
| Bleached White | `#F1E8EA` | text |
| Dusty Rose | `#E6A5B8` | primary |
| Faded Sage | `#9FB8A8` | accent |
| Washed Lilac | `#B9A6C9` | second accent |
| Ash Grey | `#6B5C63` | border |

## Materiality & texture

- **Surface simulation:** A bedroom wall of printed photos, tape and torn paper.
- **Border rules:** A 1px #6B5C63 line on posts; torn edges of 6px to 10px on paper layers.
- **Blur and elevation:** A 2px blur on far stickers; a 6px soft shadow at 25% opacity under tape.

## Ornamentation & iconography

- **Iconography:** Thin outline icons at 20px with a 1.5px stroke, in a hand-drawn style: heart, star and moon.
- **Illustration:** Doodled stars, hearts and crescent moons in white line at 60% opacity; scanned film edges.
- **Decorative elements:** tape strip · torn paper edge · light leak · film grain · typewriter quote · hand-drawn star

## Motion & interactivity

- **Born on screen:** yes
- **Transition physics:** Reblogs drop into the dashboard with a 300ms fade and a 12px rise; stickers do not move; a slow 20s drift shifts the light leak by 40px.
- **Easing:** cubic-bezier(0.4, 0, 0.2, 1)
- **Duration (ms):** 300
- **Hover and active:** Hover raises the photo by 2px and the tape tilt changes by 1°; the like heart fills pink in 200ms.

## Code & token primer

Set `data-style="tumblr-soft-grunge"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="tumblr-soft-grunge"] {
  --color-bg: #2A2528;
  --color-surface: #3A3236;
  --color-text: #F1E8EA;
  --color-muted: #C7B8BE;
  --color-primary: #E6A5B8;
  --color-accent: #9FB8A8;
  --color-border: #6B5C63;
  --font-sans: "Courier Prime", "Courier New", monospace;
  --font-display: "Special Elite", "Amatic SC", serif;
  --border-radius: 2px;
  --border-width: 1px;
  --shadow-elevation: 0 6px 12px rgba(0,0,0,0.25);
  --backdrop-filter: none;
  --space-unit: 10px;
  --ease: cubic-bezier(0.4, 0, 0.2, 1);
  --duration: 300ms;
  --type-ratio: 1.25;
  --size-small: 12.8px;
  --size-h3: 25px;
  --size-h2: 31.25px;
  --size-h1: 39.06px;
  --color-on-bg: #F1E8EA;
  --color-on-surface: #F1E8EA;
  --color-on-primary: #2A2528;
  --color-on-accent: #2A2528;
  --color-muted-on-bg: #C7B8BE;
  --color-muted-on-surface: #C7B8BE;
  --color-link: #9FB8A8;
  --color-link-on-surface: #9FB8A8;
  --display-weight: 400;
  --subhead-weight: 400;
  --body-weight: 400;
  --strong-weight: 700;
  --label-weight: 400;
  --display-tracking: 0.05em;
  --display-leading: 1.2;
  --display-case: lowercase;
  --body-leading: 1.6;
  --body-size: 16px;
  --icon-stroke: 1.5;
  --ground: linear-gradient(-7deg, transparent 0 42%, color-mix(in oklab, var(--color-accent) 85%, transparent) 42% 58%, transparent 58%) 88% 14% / 42vmin 14vmin no-repeat,
    linear-gradient(var(--color-on-bg), var(--color-on-bg)) 96% 66% / 28vmin 22vmin no-repeat,
    radial-gradient(circle, var(--color-on-bg) 30%, transparent 33%) 74% 96% / 9px 9px,
    linear-gradient(100deg, var(--color-bg) 36%, transparent 64%),
    url("data:image/svg+xml,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20width%3D'220'%20height%3D'220'%3E%3Cfilter%20id%3D'n'%3E%3CfeTurbulence%20type%3D'fractalNoise'%20baseFrequency%3D'.8'%20numOctaves%3D'3'%20stitchTiles%3D'stitch'%2F%3E%3CfeColorMatrix%20values%3D'0%200%200%200%201%200%200%200%200%201%200%200%200%200%201%200.48%200%200%200%200'%2F%3E%3C%2Ffilter%3E%3Crect%20width%3D'100%25'%20height%3D'100%25'%20filter%3D'url(%23n)'%2F%3E%3C%2Fsvg%3E") 0 0 / 220px 220px repeat,
    var(--color-bg);
}
```

Tailwind patterns:

| Element | Classes |
|---|---|
| page | `bg-[#2A2528] text-[#F1E8EA] font-mono antialiased px-4 md:px-8` |
| heading | `text-3xl md:text-5xl lowercase leading-[1.2] tracking-[0.05em] -rotate-1` |
| body | `text-base leading-[1.6] max-w-prose` |
| section | `border border-[#6B5C63] bg-[#3A3236] p-5 rounded-sm shadow-[0_6px_12px_rgba(0,0,0,0.25)]` |
| button | `rounded-sm border border-[#E6A5B8] bg-[#E6A5B8] px-5 py-2 text-sm lowercase text-[#2A2528] transition-transform duration-[300ms] hover:-translate-y-0.5` |
| label | `text-xs lowercase tracking-[0.05em] text-[#C7B8BE]` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** outline, stroke 1.5 on a 24px field, round caps, round joins, container: none. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Pepicons (Print) by CyCraft, licence CC BY 4.0. Reason: A hand-drawn line family that matches doodled stars and hearts on a dark wall. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 400, tracking 0.05em, leading 1.2, case: lowercase.
- **Weights:** display 400, subhead 400, body 400, bold in text 700, labels and buttons 400. The style uses 2 weights (400, 700) and no other. The display has the weight of the body, so size and face carry the hierarchy. The accent is case and tracking: an upper-case label is the accent, so the weights stay few.
- **Body type:** 16px, leading 1.6.
- **Page:** hero stacked, center aligned, airy density, accent tilt -2°.
- **Ground:** xerox. The ground is a photocopied scrap wall: grain and uneven ink behind the photos. Put the class `ground` on the first screen of the page; it takes `--ground`, a stack of gradients built from the colour tokens. The ground can run behind the copy, so put the class `ground-copy` on each text block of that screen: the block gets `--color-bg` and a soft edge. Keep the rest of the page on `--color-bg`.
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

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **Tumblr** (platform, web, 2007–now), published the style. A microblog site of reblogged images. Vaporwave and other net aesthetics grew in its image feeds.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Base colour (`base_colour`) | #E6A5B8 | #E6A5B8, #9FB8A8, #B9A6C9 | --color-primary, --color-on-primary, --color-link-on-surface |
| Accent colour (`accent_colour`) | #9FB8A8 | #9FB8A8, #E6A5B8, #B9A6C9 | --color-accent, --color-on-accent, --color-link |
| Corner radius (`corner_radius`) | 2px | 0–6 px | --border-radius |
| Grid step (`grid_step`) | 10px | 4–12 px | --space-unit, --grid-gutter |
| Type scale ratio (`type_scale_ratio`) | 1.25 | 1.2–1.5 | --type-ratio, --size-small, --size-h3, --size-h2, --size-h1 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **cleaner**: move toward [`vsco-preset-look`](../vsco-preset-look/SKILL.md) (VSCO Preset Look). Remove tape, stickers and torn edges; keep the fade and set a quiet matte grade.
- If the user asks for **brighter**: move toward [`instagram-vintage-filter`](../instagram-vintage-filter/SKILL.md) (Instagram Vintage Filter). Switch to a cream ground, add the white print border and warm the fade to amber.
- If the user asks for **rougher**: move toward [`grunge-editorial`](../grunge-editorial/SKILL.md) (Grunge Editorial). Add heavy collage, bold type and a hard photocopy texture.

- **Came from (go here for a more orthodox version):** [`grunge-editorial`](../grunge-editorial/SKILL.md)
- **Mixes well with:** [`instagram-vintage-filter`](../instagram-vintage-filter/SKILL.md), [`photo-dump`](../photo-dump/SKILL.md), [`vsco-preset-look`](../vsco-preset-look/SKILL.md)
- **Kin in another domain:** [`y2k-digicam`](../y2k-digicam/SKILL.md)
- **Nearest by vector profile:** [`cottagecore`](../cottagecore/SKILL.md), [`geocities-homepage`](../geocities-homepage/SKILL.md), [`glitch-gif`](../glitch-gif/SKILL.md)

## Emotional target

The viewer feels a gentle, lonely melancholy and a wish to belong.

**Keywords:** moody, faded, tender, lonely, pastel, dreamy · **Brand archetypes:** outlaw, lover, creator

## Sources

- [Wikipedia: Tumblr](https://en.wikipedia.org/wiki/Tumblr)
- [Wikipedia: Soft grunge](https://en.wikipedia.org/wiki/Soft_grunge)

---

Generated from [`data/internet/styles/tumblr-soft-grunge.json`](../../data/internet/styles/tumblr-soft-grunge.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
