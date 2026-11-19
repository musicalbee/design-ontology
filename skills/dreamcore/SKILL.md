---
name: dreamcore
description: "Apply the Dreamcore style (2019–now) when generating web pages, apps, memes, short video frames and other images of internet culture. Load when the user asks for: dreamcore, dream aesthetic, pastel nostalgia, childhood memory, hazy dream, soft glow nostalgia."
domain: internet
era: contemporary-spatial
triggers:
  - "dreamcore"
  - "dream aesthetic"
  - "pastel nostalgia"
  - "childhood memory"
  - "hazy dream"
  - "soft glow nostalgia"
  - "dream room"
vector_profile:
  ornamentation: 2
  dimensionality: 3
  grid_rigidity: 2
  skeuomorphic_realism: 4
  typographic_expressiveness: 3
---

# Dreamcore

> Show a memory as a dream does: soft, glowing and slightly wrong, with the details out of focus.

Soft, hazy images of childhood rooms, pastel skies, old toys and stairways, with a faint glow and blurry text. It looks like a half-remembered dream and grew on Tumblr, Reddit and video sites.

**Period:** 2019–now · **Era:** Contemporary & Spatial · **Domain:** Internet · **Also called:** Dream core, Dream aesthetic

## When to load this skill

Load it when the user asks for: "dreamcore", "dream aesthetic", "pastel nostalgia", "childhood memory", "hazy dream", "soft glow nostalgia", "dream room".

Good for: music and ambient artwork, wellness and sleep apps with a soft tone, indie game pages, photo zines.

Do not use it when:
- The page needs sharp, fast reading.
- The product is technical or financial.
- The brand needs a loud, high-energy voice.

## System directives

When generating web pages, apps, memes, short video frames and other images of internet culture in Dreamcore, you MUST:

1. Set the ground in pastel gradient from #FBE3F0 to #CFE3FF at 180°.
2. Apply a bloom of 12px to 24px on all light areas and lower the contrast by 15% to 25%.
3. Use one soft focal image (a room, a toy or a sky) at 50% to 70% of the frame.
4. Add one odd detail: a door in a field, a stair with no top or a repeated window.
5. Set text in a thin serif or a rounded sans at 14px to 28px, in 60% opacity white or lilac.
6. Add grain at 4% to 6% and a vignette of 15%.
7. Keep motion slow: loops of 8s to 20s with cross-fades of 1.2s.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Hard black voids and red warning text.
- **NEVER:** Sharp, high-contrast photography.
- **NEVER:** Dense data labels.
- **NEVER:** Neon colours.
- **NEVER:** Hard grid layouts.
- **NEVER:** Bold, loud display type.
- **NEVER:** Glossy 3D effects.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■□□□` 2/5 | pure minimal | maximalist |
| Dimensionality | `■■■□□` 3/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■□□□` 2/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■■■■□` 4/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■■■□□` 3/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** One image fills the frame; text sits in a single block on a 4-column grid with 32px gutters.
- **Whitespace ratio:** 30% to 45% of the surface is soft sky or empty wall; the spacing scale is 8, 16, 32 and 64px.
- **Alignment rules:** Centred focal image and a small text block at the lower third; the image may drift 12px off centre.
- **Container geometry:** Panels with a 24px radius or none; soft, feathered edges of 16px to 32px; circles for light spots.

## Typography

- **Classifications:** thin serif · rounded sans · handwriting
- **Tracking:** Display takes +0.04em; body stays at 0.01em.
- **Leading:** Display 1.2; body 1.7.
- **Hierarchy rules:** Use two weights: light (300) and regular (400). · Use sizes 14, 18, 28 and 56px. · Set text in 60% to 80% opacity. · Use italic for one line per frame.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Cormorant Garamond | Nunito | A thin, soft serif display face with a round text face. |
| Playfair Display | Karla | A high-contrast serif with a plain sans for text. |
| Caveat | Quicksand | A handwriting face for notes, with a round sans text face. |

## Colour & lighting

- **Palette structure:** Pastel pink, sky blue and lilac on a pale ground, with one warm light.
- **Contrast rules:** Text in faded ink on dream haze holds at least 7:1; pale tints carry fields and glow, not text.
- **Surface treatment:** Soft 2-stop gradients; bloom on lights; grain of 4% to 6%; low contrast.
- **Light and shadow:** A warm glow from one side; no hard shadow; shadows are tinted lilac at 20%.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Dream Haze | `#FBE3F0` | background |
| Sky Wash | `#CFE3FF` | surface |
| Soft Lilac | `#B9A5E8` | primary |
| Warm Glow | `#FFD9A0` | accent |
| Faded Ink | `#4B3F72` | text |
| Pale Mint | `#D4F1E4` | second accent |

## Materiality & texture

- **Surface simulation:** A faded photograph or a memory through frosted glass.
- **Border rules:** No border; feathered edges of 16px to 32px; a 1px white line at 40% on panels.
- **Blur and elevation:** Blur of 8px to 24px on background layers; panels have a 24px soft shadow in lilac at 20%.

## Ornamentation & iconography

- **Iconography:** Thin outline icons at 24px with round caps: stars, clouds, a door and a moon.
- **Illustration:** Pastel rooms, clouds, toys, stairways and old screens, with bloom and a soft colour grade.
- **Decorative elements:** cloud · star sparkle · door in a field · stair · light bloom

## Motion & interactivity

- **Born on screen:** yes
- **Transition physics:** Slow cross-fades of 1.2s; a drift of 12px over 10s; light spots pulse at 6s per cycle.
- **Easing:** cubic-bezier(0.45, 0, 0.55, 1)
- **Duration (ms):** 1200
- **Hover and active:** Hover raises the bloom by 8px and the text to full opacity; the active state fades the image by 20%.

## Code & token primer

Set `data-style="dreamcore"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="dreamcore"] {
  --color-bg: #FBE3F0;
  --color-surface: #FFFFFF;
  --color-text: #4B3F72;
  --color-muted: #6B5F94;
  --color-primary: #B9A5E8;
  --color-accent: #FFD9A0;
  --color-border: #E5D6F5;
  --font-sans: "Nunito", "Karla", sans-serif;
  --font-display: "Cormorant Garamond", "Playfair Display", serif;
  --border-radius: 24px;
  --border-width: 1px;
  --shadow-elevation: 0 12px 24px rgba(185, 165, 232, 0.25);
  --backdrop-filter: blur(12px);
  --space-unit: 8px;
  --ease: cubic-bezier(0.45, 0, 0.55, 1);
  --duration: 1200ms;
  --type-ratio: 1.5;
  --size-small: 10.67px;
  --size-h3: 36px;
  --size-h2: 54px;
  --size-h1: 81px;
  --color-on-bg: #4B3F72;
  --color-on-surface: #4B3F72;
  --color-on-primary: #000000;
  --color-on-accent: #4B3F72;
  --color-muted-on-bg: #6B5F94;
  --color-muted-on-surface: #6B5F94;
  --color-link: #4B3F72;
  --color-link-on-surface: #4B3F72;
  --display-weight: 300;
  --subhead-weight: 300;
  --body-weight: 300;
  --strong-weight: 700;
  --label-weight: 300;
  --display-tracking: 0.04em;
  --display-leading: 1.2;
  --display-case: none;
  --body-leading: 1.7;
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
| page | `bg-[#FBE3F0] text-[#4B3F72] font-sans antialiased px-6 md:px-12` |
| heading | `font-serif text-4xl md:text-6xl font-light leading-[1.2] tracking-[0.04em]` |
| body | `text-base leading-[1.6] max-w-prose` |
| section | `border border-[#E5D6F5] rounded-3xl bg-[#FFFFFF]` |
| button | `rounded-full border border-[#B9A5E8] bg-[#B9A5E8] px-6 py-3 text-sm text-[#2A2050] transition-all duration-[1200ms] hover:shadow-[0_0_24px_#FFD9A0]` |
| label | `text-xs uppercase tracking-widest` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** outline, stroke 1.5 on a 24px field, round caps, round joins, container: circle. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Solar (Linear) by 480 Design, licence CC BY 4.0. Reason: Thin, rounded line icons match the light, soft look of a dream image. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 300, tracking 0.04em, leading 1.2, case: none.
- **Weights:** display 300, subhead 300, body 300, bold in text 700, labels and buttons 300. The style uses 2 weights (300, 700) and no other. The display has the weight of the body, so size and face carry the hierarchy. The accent is weight: a heavier word is the accent, so the steps between the weights are clear.
- **Body type:** 16px, leading 1.7.
- **Page:** hero stacked, center aligned, airy density, accent tilt 0°.
- **Ground:** soft. Dreamcore sits in soft light with no hard edge, so the ground is a haze of overlapping soft gradients. Put the class `ground` on the first screen of the page; it takes `--ground`, a stack of gradients built from the colour tokens. The ground can run behind the copy, so put the class `ground-copy` on each text block of that screen: the block gets `--color-bg` and a soft edge. Keep the rest of the page on `--color-bg`.
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

### Lo-fi found image (process)

A low-resolution photo of an ordinary place, scaled up so that the JPEG blocks show. It looks like a lost or half-remembered picture. Origin: internet, online, 2018.

- Scale a photo of 320 to 640px up to the full frame with no smoothing.
- Shift the colour by 10% to 20% to yellow-green or magenta.
- Add noise of 5% to 10% and a vignette of 20%.
- Add one wrong detail, such as a black void or a faceless figure.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **Tumblr** (platform, web, 2007–now), published the style. A microblog site of reblogged images. Vaporwave and other net aesthetics grew in its image feeds.
- **YouTube** (platform, web, 2005–now), published the style. A web site where people post video. The daily vlog grew here, and it became the main home of the music video.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Base colour (`base_colour`) | #B9A5E8 | #B9A5E8, #CFE3FF, #FFD9A0 | --color-primary, --color-on-primary, --color-link-on-surface |
| Accent colour (`accent_colour`) | #FFD9A0 | #FFD9A0, #D4F1E4 | --color-accent, --color-on-accent, --color-link |
| Corner radius (`corner_radius`) | 24px | 8–32 px | --border-radius |
| Grid step (`grid_step`) | 8px | 4–12 px | --space-unit, --grid-gutter |
| Type scale ratio (`type_scale_ratio`) | 1.5 | 1.25–1.618 | --type-ratio, --size-small, --size-h3, --size-h2, --size-h1 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **creepier**: move toward [`weirdcore`](../weirdcore/SKILL.md) (Weirdcore). Lower the colour, add a black void and one line of red text.
- If the user asks for **more glossy**: move toward [`frutiger-aero`](../frutiger-aero/SKILL.md) (Frutiger Aero). Add glass bubbles, a sky photo and a green accent.
- If the user asks for **more airy**: move toward [`ethereal-web`](../ethereal-web/SKILL.md) (Ethereal Web). Add an aurora gradient, a blur of 40px and a thin sans display face.

- **Came from (go here for a more orthodox version):** [`weirdcore`](../weirdcore/SKILL.md)
- **Mixes well with:** [`frutiger-aero`](../frutiger-aero/SKILL.md), [`liminal-spaces`](../liminal-spaces/SKILL.md), [`vaporwave`](../vaporwave/SKILL.md)
- **Kin in another domain:** [`y2k-digicam`](../y2k-digicam/SKILL.md)
- **Nearest by vector profile:** [`pov-short`](../pov-short/SKILL.md), [`unboxing-video`](../unboxing-video/SKILL.md), [`green-screen-short`](../green-screen-short/SKILL.md)

## Emotional target

The viewer feels gentle nostalgia and a soft, quiet unease, as after a dream.

**Keywords:** dreamy, nostalgic, soft, hazy, liminal, gentle · **Brand archetypes:** innocent, magician, creator

## Sources

- [Wikipedia, Dreamcore](https://en.wikipedia.org/wiki/Weirdcore)
- [Wikipedia, Yume Nikki](https://en.wikipedia.org/wiki/Yume_Nikki)

---

Generated from [`data/internet/styles/dreamcore.json`](../../data/internet/styles/dreamcore.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
