---
name: synthwave-web
description: "Apply the Synthwave Web style (2013–now) when generating web pages, apps, memes, short video frames and other images of internet culture. Load when the user asks for: synthwave, outrun, retrowave, neon sunset, 80s, perspective grid."
domain: internet
era: touchscreen
triggers:
  - "synthwave"
  - "outrun"
  - "retrowave"
  - "neon sunset"
  - "80s"
  - "perspective grid"
  - "chrome text"
  - "neon"
vector_profile:
  ornamentation: 4
  dimensionality: 2
  grid_rigidity: 4
  skeuomorphic_realism: 3
  typographic_expressiveness: 5
---

# Synthwave Web

> The 1980s as a dream: neon, chrome and a road to the horizon.

A neon sunset, a perspective grid, chrome type, pink and cyan on deep violet, and scanlines. It recalls the 1980s as film and games sold it, and it feels like a night drive.

**Period:** 2013–now · **Era:** Touchscreen · **Domain:** Internet · **Also called:** Outrun, Retrowave, 80s neon web

## When to load this skill

Load it when the user asks for: "synthwave", "outrun", "retrowave", "neon sunset", "80s", "perspective grid", "chrome text", "neon".

Good for: music and album pages, game and film promos, event and club nights, retro tech and merchandise, streamers and creators.

Do not use it when:
- The brand needs a calm, serious tone.
- The page has long text.
- The audience needs high contrast with no glow.

## System directives

When generating web pages, apps, memes, short video frames and other images of internet culture in Synthwave Web, you MUST:

1. Set the ground as a gradient from #12062B at the top to #3A0A5C at the horizon.
2. Draw a sun of 240px to 480px with a gradient from #FFD319 to #FF2975 and 5 to 8 horizontal cuts that grow from 2px to 10px.
3. Draw a perspective grid on the floor with lines of 1px to 2px in #FF2975 or #00F0FF, 12 to 20 lines, with a vanishing point at 50% width.
4. Give headlines a chrome gradient (white to pink to violet) and a glow of 8px to 24px in pink at 60%.
5. Use only 3 neon hues: pink (#FF2975), cyan (#00F0FF) and yellow (#FFD319) on violet.
6. Overlay scanlines of 2px at 8% opacity and a vignette at 30%.
7. Slide the grid toward the viewer at 1 grid cell per 2s in a loop.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Pastel and earth palettes.
- **NEVER:** Flat daylight backgrounds.
- **NEVER:** Thin light text with no glow.
- **NEVER:** Hand-drawn texture.
- **NEVER:** Rounded friendly illustration.
- **NEVER:** More than 3 neon hues.
- **NEVER:** Serif body text.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■■■□` 4/5 | pure minimal | maximalist |
| Dimensionality | `■■□□□` 2/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■■■□` 4/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■■■□□` 3/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■■■■■` 5/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** A centred stage: sun and horizon at 40% to 60% height, a grid floor beneath, headline above the sun; sections stack in dark panels.
- **Whitespace ratio:** 30% to 50% of the surface is empty sky and floor; the spacing scale is 8, 16, 32 and 64px.
- **Alignment rules:** Centred hero; text in panels flush left; stats in neon columns.
- **Container geometry:** Panels with a 2px neon border and 8px radius or none; pills for buttons at 999px.

## Typography

- **Classifications:** wide display sans serif · retro script
- **Tracking:** Display takes +0.04em; body stays at 0.
- **Leading:** Display 1.1; body 1.6.
- **Hierarchy rules:** Use weights 400 and 700 for display and 400 for body. · Use sizes 16, 20, 48 and 96px. · Set headlines in upper case with chrome fill. · Set body at 16px in a plain sans for reading.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Orbitron | Inter | A wide techno display for headlines. |
| Audiowide | Inter | A rounded wide display with an 80s voice. |
| Monoton | Inter | A line-cut display for logos and short words. |

## Colour & lighting

- **Palette structure:** Deep violet with hot pink, cyan and a sun yellow.
- **Contrast rules:** Mist on night holds 15:1; neon pink and cyan hold at least 4.5:1 on night for 18px and larger.
- **Surface treatment:** Vertical gradients, a sun disc, a vignette and scanlines.
- **Light and shadow:** Emissive: glows of 8px to 24px blur in pink or cyan at 40% to 60%.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Night | `#12062B` | background |
| Dusk | `#3A0A5C` | surface |
| Neon Pink | `#FF2975` | primary |
| Neon Cyan | `#00F0FF` | accent |
| Sun | `#FFD319` | highlight |
| Mist | `#F3E8FF` | text |

## Materiality & texture

- **Surface simulation:** Neon tube, chrome and a CRT screen at night.
- **Border rules:** 2px neon border in pink or cyan with a 8px glow.
- **Blur and elevation:** Glow 8px to 24px; vignette at 30%; no soft grey shadow.

## Ornamentation & iconography

- **Iconography:** Neon line icons of 2px with a glow; chrome stars and palm trees.
- **Illustration:** Sun disc, perspective grid, mountains, palm silhouettes and retro cars.
- **Decorative elements:** sun with cuts · perspective grid · chrome text · neon glow

## Motion & interactivity

- **Born on screen:** yes
- **Transition physics:** Smooth and endless: the grid flows toward the viewer; the sun pulses by 4% every 4s; text glows flicker for 80ms.
- **Easing:** linear
- **Duration (ms):** 1200
- **Hover and active:** Hover raises the glow of a neon item by 30% and shifts it up 2px; active state dims it by 10%.

## Code & token primer

Set `data-style="synthwave-web"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="synthwave-web"] {
  --color-bg: #12062B;
  --color-surface: #3A0A5C;
  --color-text: #F3E8FF;
  --color-muted: #B9A4D9;
  --color-primary: #FF2975;
  --color-accent: #00F0FF;
  --color-border: #FF2975;
  --font-sans: "Inter", system-ui, sans-serif;
  --font-display: "Orbitron", "Audiowide", sans-serif;
  --border-radius: 8px;
  --border-width: 2px;
  --shadow-elevation: 0 0 16px rgba(255,41,117,0.6);
  --backdrop-filter: none;
  --space-unit: 8px;
  --ease: linear;
  --duration: 1200ms;
  --type-ratio: 1.618;
  --size-small: 9.89px;
  --size-h3: 41.89px;
  --size-h2: 67.77px;
  --size-h1: 109.66px;
  --color-on-bg: #F3E8FF;
  --color-on-surface: #F3E8FF;
  --color-on-primary: #12062B;
  --color-on-accent: #12062B;
  --color-muted-on-bg: #B9A4D9;
  --color-muted-on-surface: #B9A4D9;
  --color-link: #00F0FF;
  --color-link-on-surface: #00F0FF;
  --display-weight: 700;
  --subhead-weight: 700;
  --body-weight: 400;
  --strong-weight: 700;
  --label-weight: 700;
  --display-tracking: 0.04em;
  --display-leading: 1.1;
  --display-case: uppercase;
  --body-leading: 1.6;
  --body-size: 16px;
  --icon-stroke: 2;
  --ground: repeating-linear-gradient(to bottom, transparent 0 1.6vmin, var(--color-bg) 1.6vmin 2.2vmin) 76% 46% / 34vmin 15vmin no-repeat,
    radial-gradient(circle at 50% 100%, var(--color-accent) 0 16vmin, transparent calc(16vmin + 1px)) 76% 46% / 34vmin 17vmin no-repeat,
    linear-gradient(to bottom, transparent 0 55%, color-mix(in oklab, var(--color-primary) 55%, transparent) 55% calc(55% + 2px), transparent calc(55% + 2px)),
    repeating-linear-gradient(90deg, color-mix(in oklab, var(--color-primary) 28%, transparent) 0 1px, transparent 1px 7vmin) 0 100% / 100% 45% no-repeat,
    repeating-linear-gradient(0deg, color-mix(in oklab, var(--color-primary) 28%, transparent) 0 1px, transparent 1px 5vmin) 0 100% / 100% 45% no-repeat,
    linear-gradient(to bottom, var(--color-bg) 10%, color-mix(in oklab, var(--color-primary) 30%, transparent) 55%, var(--color-bg) 55%),
    var(--color-bg);
}
```

Tailwind patterns:

| Element | Classes |
|---|---|
| page | `bg-gradient-to-b from-[#12062B] to-[#3A0A5C] text-[#F3E8FF] font-sans antialiased` |
| heading | `font-bold uppercase text-5xl md:text-8xl tracking-[0.04em] leading-[1.1] text-center bg-gradient-to-b from-white via-[#FF9AC4] to-[#FF2975] bg-clip-text text-transparent` |
| body | `text-base leading-[1.6]` |
| section | `rounded-lg border-2 border-[#00F0FF] bg-[#12062B]/70 p-5 shadow-[0_0_16px_rgba(0,240,255,0.5)]` |
| button | `rounded-full border-2 border-[#FF2975] bg-transparent px-7 py-3 font-bold uppercase tracking-[0.1em] text-[#FF2975] shadow-[0_0_16px_rgba(255,41,117,0.6)] hover:bg-[#FF2975] hover:text-[#12062B]` |
| label | `text-xs uppercase tracking-[0.1em] text-[#B9A4D9]` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** outline, stroke 2 on a 24px field, round caps, round joins, container: none. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Iconoir (Regular) by Luca Burgio, licence MIT. Reason: A smooth 2px line that takes a neon glow well. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 700, tracking 0.04em, leading 1.1, case: uppercase.
- **Weights:** display 700, subhead 700, body 400, bold in text 700, labels and buttons 700. The style uses 2 weights (400, 700) and no other. The display is 300 heavier than the body. The accent is colour: one coloured word or field is the accent, so the weights stay quiet.
- **Body type:** 16px, leading 1.6.
- **Page:** hero stacked, center aligned, airy density, accent tilt 0°.
- **Ground:** horizon. Synthwave is the outrun horizon: a striped sun over a neon grid that runs to the edge. Put the class `ground` on the first screen of the page; it takes `--ground`, a stack of gradients built from the colour tokens. The ground can run behind the copy, so put the class `ground-copy` on each text block of that screen: the block gets `--color-bg` and a soft edge. Keep the rest of the page on `--color-bg`.
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

### Neon glow (material)

Light as a line of coloured gas, with a soft halo that spills onto the dark ground around it. Origin: internet, Paris, 1912.

- Draw the tube as a line of 2 to 6mm in one saturated colour; use no more than 2 colours in one sign.
- Add a halo of 10 to 40px at 30% to 60% opacity in the same hue.
- Set the sign on a ground darker than 10% lightness, so that the halo shows.
- Keep a bright, near-white core inside the line.

## Media

The salons, schools, magazines, publishers, galleries and platforms that carried this style.

- **Bandcamp** (platform, web, 2007–now), published the style. A web site where musicians sell music. Vaporwave and synthwave artists released their albums and cover art there.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Base colour (`base_colour`) | #FF2975 | #FF2975, #00F0FF, #F3E8FF | --color-primary, --color-on-primary, --color-link-on-surface |
| Accent colour (`accent_colour`) | #00F0FF | #00F0FF, #FF2975 | --color-accent, --color-on-accent, --color-link |
| Corner radius (`corner_radius`) | 8px | 4–12 px | --border-radius |
| Grid step (`grid_step`) | 8px | 4–12 px | --space-unit, --grid-gutter |
| Type scale ratio (`type_scale_ratio`) | 1.618 | 1.5–1.618 | --type-ratio, --size-small, --size-h3, --size-h2, --size-h1 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **calmer**: move toward [`dark-devtool-ui`](../dark-devtool-ui/SKILL.md) (Dark-Mode Developer Tool). Keep the violet ground and one cyan accent; remove sun, grid and glow.
- If the user asks for **more clean**: move toward [`vaporwave`](../vaporwave/SKILL.md) (Vaporwave). Use pastel pink and teal with statues and a sans label.
- If the user asks for **more cold**: move toward [`cybercore-web`](../cybercore-web/SKILL.md) (Cybercore Web). Replace pink with acid green and add HUD frames.

- **Came from (go here for a more orthodox version):** [`vaporwave`](../vaporwave/SKILL.md), [`y2k-aesthetic`](../y2k-aesthetic/SKILL.md)
- **Rejects (the opposite pole; do not blend):** [`flat-design`](../flat-design/SKILL.md)
- **Mixes well with:** [`cybercore-web`](../cybercore-web/SKILL.md), [`cyberpunk-web`](../cyberpunk-web/SKILL.md)
- **Kin in another domain:** [`neon-noir`](../neon-noir/SKILL.md), [`vector-display-arcade`](../vector-display-arcade/SKILL.md)
- **Nearest by vector profile:** [`cybercore-web`](../cybercore-web/SKILL.md), [`art-deco-web`](../art-deco-web/SKILL.md), [`barbiecore`](../barbiecore/SKILL.md)

## Emotional target

The viewer feels a nostalgic night drive and a bright, synthetic future.

**Keywords:** nostalgic, neon, dreamy, energetic, retro-futuristic, cool · **Brand archetypes:** explorer, outlaw

## Sources

- Example: Kavinsky and The Midnight album sites (2013–2020)
- Example: Hotline Miami and Far Cry 3: Blood Dragon pages (2012–2013)
- Example: Stranger Things season 3 promo pages (2019)

---

Generated from [`data/internet/styles/synthwave-web.json`](../../data/internet/styles/synthwave-web.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
