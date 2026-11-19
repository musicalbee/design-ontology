---
name: hyperpop-visual
description: "Apply the Hyperpop Visual style (2019–now) when generating web pages, apps, memes, short video frames and other images of internet culture. Load when the user asks for: hyperpop, hyperpop aesthetic, chrome heart, candy chrome, PC Music look, sticker collage."
domain: internet
era: contemporary-spatial
triggers:
  - "hyperpop"
  - "hyperpop aesthetic"
  - "chrome heart"
  - "candy chrome"
  - "PC Music look"
  - "sticker collage"
  - "glossy maximal"
vector_profile:
  ornamentation: 5
  dimensionality: 4
  grid_rigidity: 1
  skeuomorphic_realism: 2
  typographic_expressiveness: 5
---

# Hyperpop Visual

> Make pop too sweet and too bright: take cute and chrome so far that they look artificial and strange.

Shiny chrome, candy colours, cute 3D shapes, Web 2.0 gloss and crowded collage, with pixel type and stickers. It links the PC Music look to a 2019 playlist and to short-video culture.

**Period:** 2019–now · **Era:** Contemporary & Spatial · **Domain:** Internet · **Also called:** Hyperpop aesthetic, Hyperpop

## When to load this skill

Load it when the user asks for: "hyperpop", "hyperpop aesthetic", "chrome heart", "candy chrome", "PC Music look", "sticker collage", "glossy maximal".

Good for: music releases and artist pages, fashion and beauty drops for young buyers, short-video edits, event posters.

Do not use it when:
- The brand needs a quiet, trusted tone.
- The page has dense text or tables.
- The audience is formal or conservative.

## System directives

When generating web pages, apps, memes, short video frames and other images of internet culture in Hyperpop Visual, you MUST:

1. Set a pastel gradient ground from #FFC8F0 to #BDF0FF at 160°.
2. Place one chrome or glossy 3D object at 40% to 60% of the frame, with a hard white highlight.
3. Layer 4 to 8 stickers, stars and Web 2.0 buttons at tilts of -20° to 20°.
4. Set display text in a bold, round or pixel face at 48px to 120px, with a 2px dark outline.
5. Use hot pink (#FF2FB3) and electric blue (#2F6BFF) on at least 20% of the surface.
6. Add a gloss band of 40% height on buttons and panels, in white at 40% opacity.
7. Cut video edits every 6 to 15 frames with zooms and flash frames.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Muted, desaturated palettes.
- **NEVER:** Minimal, quiet layouts.
- **NEVER:** Realistic natural materials.
- **NEVER:** Serious, formal serif type.
- **NEVER:** Slow, long takes.
- **NEVER:** Hand-drawn rough texture.
- **NEVER:** Dark, moody lighting.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■■■■` 5/5 | pure minimal | maximalist |
| Dimensionality | `■■■■□` 4/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■□□□□` 1/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■■□□□` 2/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■■■■■` 5/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** A free collage on a 6-column base with 8px gutters; objects overlap by 16px to 64px and break the grid.
- **Whitespace ratio:** 5% to 15% of the surface stays empty; the spacing scale is 4, 8, 16 and 32px.
- **Alignment rules:** A centred main object with stickers around it; text tilts by up to 10°.
- **Container geometry:** Pill buttons and panels with a 20px radius, glossy edges, stickers with a 4px white border.

## Typography

- **Classifications:** rounded display · pixel · wide sans
- **Tracking:** Display takes 0 to +0.02em; labels take +0.06em.
- **Leading:** Display 1.0; body 1.5.
- **Hierarchy rules:** Use two weights: regular (400) and bold (800). · Use sizes 12, 20, 48 and 96px. · Set display text with a 2px outline and a drop of 3px. · Mix 2 type faces in one headline.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Bagel Fat One | Nunito | A fat, bubbly display face with a round text face. |
| Pixelify Sans | DM Sans | A pixel display face with a plain text face. |
| Climate Crisis | Space Grotesk | A heavy display face for a loud title, with a plain sans. |

## Colour & lighting

- **Palette structure:** Candy pink, electric blue and chrome silver on a pastel ground, with one yellow spark.
- **Contrast rules:** Text in ink navy on cotton pink holds at least 12:1; hot pink and blue carry fills and outlines, not long text.
- **Surface treatment:** Pastel gradients, chrome with hard highlights, gloss bands and glitter noise at 4%.
- **Light and shadow:** A hard white highlight on every glossy form; a 4px offset shadow in ink navy; no soft blur shadow.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Cotton Pink | `#FFC8F0` | background |
| Hot Pink | `#FF2FB3` | primary |
| Electric Blue | `#2F6BFF` | accent |
| Ice Blue | `#BDF0FF` | surface |
| Chrome Silver | `#D8DCE8` | second accent |
| Spark Yellow | `#FFF04D` | highlight |
| Ink Navy | `#1A1033` | text |

## Materiality & texture

- **Surface simulation:** Chrome, candy plastic and early web gloss, rendered in 3D.
- **Border rules:** A 2px ink navy outline on text and stickers; a 4px white border on stickers.
- **Blur and elevation:** No blur; a 4px offset shadow in ink navy; glossy bands for depth.

## Ornamentation & iconography

- **Iconography:** Solid, round icons at 24px with a 2px outline: hearts, stars, sparkles and Web 2.0 buttons.
- **Illustration:** 3D chrome hearts, bunnies and shapes, sticker clusters, glitter, and cut-out faces on collage.
- **Decorative elements:** chrome heart · sparkle · sticker cluster · gloss band · pixel star

## Motion & interactivity

- **Born on screen:** yes
- **Transition physics:** Objects bounce with a 120% overshoot over 400ms; stickers pop in with a scale from 0 to 1; edits cut every 6 to 15 frames.
- **Easing:** cubic-bezier(0.34, 1.56, 0.64, 1)
- **Duration (ms):** 400
- **Hover and active:** Hover scales the sticker to 110% and tilts it by 6°; the active state squashes it to 95%.

## Code & token primer

Set `data-style="hyperpop-visual"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="hyperpop-visual"] {
  --color-bg: #FFC8F0;
  --color-surface: #BDF0FF;
  --color-text: #1A1033;
  --color-muted: #4A3D6B;
  --color-primary: #FF2FB3;
  --color-accent: #2F6BFF;
  --color-border: #1A1033;
  --font-sans: "Nunito", "DM Sans", sans-serif;
  --font-display: "Bagel Fat One", "Pixelify Sans", sans-serif;
  --border-radius: 20px;
  --border-width: 2px;
  --shadow-elevation: 4px 4px 0 #1A1033;
  --backdrop-filter: none;
  --space-unit: 4px;
  --ease: cubic-bezier(0.34, 1.56, 0.64, 1);
  --duration: 400ms;
  --type-ratio: 1.5;
  --size-small: 10.67px;
  --size-h3: 36px;
  --size-h2: 54px;
  --size-h1: 81px;
  --color-on-bg: #1A1033;
  --color-on-surface: #1A1033;
  --color-on-primary: #1A1033;
  --color-on-accent: #000000;
  --color-muted-on-bg: #4A3D6B;
  --color-muted-on-surface: #4A3D6B;
  --color-link: #1A1033;
  --color-link-on-surface: #1A1033;
  --display-weight: 800;
  --subhead-weight: 400;
  --body-weight: 400;
  --strong-weight: 700;
  --label-weight: 700;
  --display-tracking: 0.01em;
  --display-leading: 1;
  --display-case: none;
  --body-leading: 1.5;
  --body-size: 16px;
  --icon-stroke: 2;
  --ground: linear-gradient(100deg, var(--color-bg) 30%, transparent 56%),
    radial-gradient(circle at 66% 22%, var(--color-primary) 0 3.4vmin, transparent calc(3.4vmin + 1px)),
    radial-gradient(circle at 92% 64%, transparent 0 4vmin, var(--color-accent) 4vmin 5.6vmin, transparent 5.8vmin),
    linear-gradient(to top right, var(--color-primary) 50%, transparent 51%) 80% 12% / 7vmin 7vmin no-repeat,
    repeating-linear-gradient(45deg, var(--color-on-bg) 0 3px, transparent 3px 12px) 86% 88% / 14vmin 5vmin no-repeat,
    radial-gradient(circle at 56% 78%, var(--color-accent) 0 1.8vmin, transparent calc(1.8vmin + 1px)),
    linear-gradient(var(--color-primary), var(--color-primary)) 97% 36% / 3vmin 12vmin no-repeat,
    radial-gradient(circle, color-mix(in oklab, var(--color-on-bg) 22%, transparent) 1.6px, transparent 2px) 0 0 / 26px 26px,
    var(--color-bg);
}
```

Tailwind patterns:

| Element | Classes |
|---|---|
| page | `bg-[#FFC8F0] text-[#1A1033] font-sans antialiased px-6 md:px-12` |
| heading | `text-5xl md:text-8xl font-extrabold leading-none text-[#FF2FB3] [text-shadow:3px_3px_0_#1A1033]` |
| body | `text-base leading-[1.6] max-w-prose` |
| section | `border border-[#1A1033] rounded-[20px] bg-[#BDF0FF]` |
| button | `rounded-full border-2 border-[#1A1033] bg-[#FF2FB3] px-6 py-3 text-sm font-bold text-[#1A1033] shadow-[4px_4px_0_#1A1033] transition-transform duration-[400ms] hover:scale-110 hover:-rotate-6` |
| label | `text-xs uppercase tracking-widest` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** solid, stroke 2 on a 24px field, butt caps, miter joins, container: square. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from MingCute (Fill) by MingCute Design, licence Apache 2.0. Reason: Filled, round icons suit the candy, sticker-like forms of the style. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 800, tracking 0.01em, leading 1, case: none.
- **Weights:** display 800, subhead 400, body 400, bold in text 700, labels and buttons 700. The style uses 3 weights (400, 700, 800) and no other. The display is 400 heavier than the body. The accent is colour: one coloured word or field is the accent, so the weights stay quiet.
- **Body type:** 16px, leading 1.5.
- **Page:** hero stacked, center aligned, compact density, accent tilt -2°.
- **Ground:** confetti. Hyperpop scatters stickers and sparks over a pastel ground, so the ground is confetti. Put the class `ground` on the first screen of the page; it takes `--ground`, a stack of gradients built from the colour tokens. The ground can run behind the copy, so put the class `ground-copy` on each text block of that screen: the block gets `--color-bg` and a soft edge. Keep the rest of the page on `--color-bg`.
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

### Mesh gradient (process)

A colour field built from many points that each hold a colour, so the colours blend in soft, organic shapes. Origin: internet, United States, 1998.

- Use 3 to 5 colours of near value; keep the step between them small.
- Blur the field by 80 to 200 px, so that no edge shows.
- Put the field behind the content and give the text a solid or near-solid surface.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **SoundCloud** (platform, web, 2007–now), published the style. A site where people post music. The digicore and hyperpop scenes shared tracks and cover art here.
- **TikTok** (platform, web, 2016–now), published the style. A video app of short vertical clips. Its feed set the form of vertical short-form video and spread the camcorder revival.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Base colour (`base_colour`) | #FF2FB3 | #FF2FB3, #2F6BFF, #FFF04D | --color-primary, --color-on-primary, --color-link-on-surface |
| Accent colour (`accent_colour`) | #2F6BFF | #2F6BFF, #FF2FB3, #FFF04D | --color-accent, --color-on-accent, --color-link |
| Corner radius (`corner_radius`) | 20px | 8–40 px | --border-radius |
| Grid step (`grid_step`) | 4px | 2–8 px | --space-unit, --grid-gutter |
| Type scale ratio (`type_scale_ratio`) | 1.5 | 1.25–1.618 | --type-ratio, --size-small, --size-h3, --size-h2, --size-h1 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more chaos**: move toward [`glitchcore`](../glitchcore/SKILL.md) (Glitchcore). Use a black ground, split the colour channels and cut the edit faster.
- If the user asks for **more calm**: move toward [`dreamcore`](../dreamcore/SKILL.md) (Dreamcore). Soften the colours, add bloom and remove the stickers.
- If the user asks for **more classic**: move toward [`y2k-aesthetic`](../y2k-aesthetic/SKILL.md) (Y2K Aesthetic). Reduce the layers to 2 or 3, keep the chrome and use a silver and baby blue palette.

- **Came from (go here for a more orthodox version):** [`frutiger-aero`](../frutiger-aero/SKILL.md), [`y2k-aesthetic`](../y2k-aesthetic/SKILL.md)
- **Rejects (the opposite pole; do not blend):** [`minimalism-web`](../minimalism-web/SKILL.md)
- **Mixes well with:** [`glitchcore`](../glitchcore/SKILL.md), [`vaporwave`](../vaporwave/SKILL.md)
- **Kin in another domain:** [`music-video`](../music-video/SKILL.md), [`vertical-short-form`](../vertical-short-form/SKILL.md)
- **Nearest by vector profile:** [`cyberdelia`](../cyberdelia/SKILL.md), [`clickbait-thumbnail`](../clickbait-thumbnail/SKILL.md), [`glitchcore`](../glitchcore/SKILL.md)

## Emotional target

The viewer feels a sweet, loud rush that is fun and a little artificial.

**Keywords:** glossy, sweet, chaotic, artificial, playful, maximal · **Brand archetypes:** jester, creator, outlaw

## Sources

- [Wikipedia, Hyperpop](https://en.wikipedia.org/wiki/Hyperpop)
- [Wikipedia, PC Music](https://en.wikipedia.org/wiki/PC_Music)

---

Generated from [`data/internet/styles/hyperpop-visual.json`](../../data/internet/styles/hyperpop-visual.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
