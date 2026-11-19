---
name: ai-avatar-portrait
description: "Apply the AI Avatar Portrait style (2022–2024) when generating web pages, apps, memes, short video frames, forum and chat screens, and other images of internet culture. Load when the user asks for: ai avatar, magic avatars, lensa look, avatar pack, stylised selfie, profile picture ai."
domain: internet
era: short-video-ai
triggers:
  - "ai avatar"
  - "magic avatars"
  - "lensa look"
  - "avatar pack"
  - "stylised selfie"
  - "profile picture ai"
vector_profile:
  ornamentation: 4
  dimensionality: 3
  grid_rigidity: 3
  skeuomorphic_realism: 3
  typographic_expressiveness: 2
---

# AI Avatar Portrait

> One face, many costumes: the pack turns a selfie into a character sheet, and the glow is the reward.

A set of 20 stylised portraits of one face in many looks: fantasy, anime, space and painting. Phone apps made the form common at the end of 2022.

**Period:** 2022–2024 · **Era:** Short video and AI · **Domain:** Internet · **Also called:** Magic avatars, Avatar pack, Stylised AI selfie

## When to load this skill

Load it when the user asks for: "ai avatar", "magic avatars", "lensa look", "avatar pack", "stylised selfie", "profile picture ai".

Good for: photo app marketing and store pages, profile picture generators, social posts that show a pack, launch pages for creative apps.

Do not use it when:
- The content needs honest, unretouched portraits.
- The page serves a serious or clinical audience.
- Consent for the face images is not clear.

## System directives

When generating web pages, apps, memes, short video frames, forum and chat screens, and other images of internet culture in AI Avatar Portrait, you MUST:

1. Show a pack as a 4x5 grid of 20 square tiles, each 160px with a 6px gap.
2. Keep the same face in every tile and change the world around it: costume, ground and colour grade.
3. Set the eyes 10% to 15% larger than natural and smooth the skin to a airbrushed finish.
4. Put a glow ground behind the head: a radial gradient from #FFC857 to #2B1E5A.
5. Name each style under the tile in 12px sans, for example Fantasy, Anime, Cosmic.
6. Add a rounded Save pack button of 48px height in pink (#FF5FA2) below the grid.
7. Show a before and after pair: the plain selfie at 30% width beside the best result at 70%.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Raw, unedited selfies.
- **NEVER:** Documentary grain and honest flaws.
- **NEVER:** One uniform look across the pack.
- **NEVER:** Muted, flat palettes.
- **NEVER:** Dense text blocks.
- **NEVER:** Brutalist, harsh frames.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■■■□` 4/5 | pure minimal | maximalist |
| Dimensionality | `■■■□□` 3/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■■□□` 3/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■■■□□` 3/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■■□□□` 2/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** A 4-column, 5-row tile grid with 6px gaps and a sticky action bar; a hero pair above the grid.
- **Whitespace ratio:** 15% to 25% of the screen stays empty; the spacing scale is 6, 12, 24 and 48px.
- **Alignment rules:** Centred hero pair and flush-left style names under each tile.
- **Container geometry:** Tiles with a 16px radius; the action button has a full radius; chips have a 12px radius.

## Typography

- **Classifications:** rounded sans · geometric sans
- **Tracking:** Display -0.01em; labels +0.02em.
- **Leading:** Display 1.15; body 1.5.
- **Hierarchy rules:** Use 3 weights: regular (400), semibold (600) and bold (700). · Use sizes 12, 16, 24 and 40px. · Set style names in title case at 12px. · Keep one headline of 4 words at most.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Poppins | Nunito Sans | A round, friendly display face with a soft text face. |
| Baloo 2 | Nunito | A bubbly display face for app-store style captions. |

## Colour & lighting

- **Palette structure:** A violet night ground with pink, gold and cyan glows, and a pale mist for text.
- **Contrast rules:** Mist text on violet holds at least 11:1; pink and gold carry buttons and glows, with dark text on them at 5:1 or more.
- **Surface treatment:** Radial glow grounds, soft gradients on tiles and a light sparkle layer at 10% opacity.
- **Light and shadow:** A glow from behind the head, a soft key from the front and a coloured rim in pink or cyan.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Violet Night | `#2B1E5A` | background |
| Panel Violet | `#3A2A78` | surface |
| Cosmic Pink | `#FF5FA2` | primary |
| Gold Glow | `#FFC857` | accent |
| Cyan Edge | `#4ED6E6` | second accent |
| Skin Glow | `#F4C7A9` | image reference |
| Mist | `#F3EEFF` | text |

## Materiality & texture

- **Surface simulation:** An airbrushed digital illustration: smooth skin, large eyes and glowing air.
- **Border rules:** A 2px border in white at 20% on tiles; the selected tile takes a 3px pink border.
- **Blur and elevation:** Glow blur of 16px to 32px behind the head; tiles have a soft shadow of 0 6px 16px at 35% black.

## Ornamentation & iconography

- **Iconography:** Filled icons at 24px with round terminals inside circles for share and save.
- **Illustration:** The same face as an elf, a space pilot, an anime lead, an oil painting or a pop star poster.
- **Decorative elements:** 4x5 pack grid · glow ground · sparkle layer · style name label · before and after pair

## Motion & interactivity

- **Born on screen:** yes
- **Transition physics:** Tiles pop in one by one at 80ms steps with a 1.08x overshoot; sparkles drift up for 3 seconds.
- **Easing:** cubic-bezier(0.34, 1.56, 0.64, 1)
- **Duration (ms):** 350
- **Hover and active:** Hover lifts the tile 4px and brightens the glow; active scales it to 0.96x.

## Code & token primer

Set `data-style="ai-avatar-portrait"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="ai-avatar-portrait"] {
  --color-bg: #2B1E5A;
  --color-surface: #3A2A78;
  --color-text: #F3EEFF;
  --color-muted: #CFC4F2;
  --color-primary: #FF5FA2;
  --color-accent: #FFC857;
  --color-border: #6A55B8;
  --font-sans: "Nunito Sans", "Nunito", sans-serif;
  --font-display: "Poppins", "Baloo 2", sans-serif;
  --border-radius: 16px;
  --border-width: 2px;
  --shadow-elevation: 0 6px 16px rgba(0,0,0,0.35);
  --backdrop-filter: none;
  --space-unit: 6px;
  --ease: cubic-bezier(0.34, 1.56, 0.64, 1);
  --duration: 350ms;
  --type-ratio: 1.25;
  --size-small: 12.8px;
  --size-h3: 25px;
  --size-h2: 31.25px;
  --size-h1: 39.06px;
  --color-on-bg: #F3EEFF;
  --color-on-surface: #F3EEFF;
  --color-on-primary: #2B1E5A;
  --color-on-accent: #2B1E5A;
  --color-muted-on-bg: #CFC4F2;
  --color-muted-on-surface: #CFC4F2;
  --color-link: #FFC857;
  --color-link-on-surface: #FFC857;
  --display-weight: 700;
  --subhead-weight: 600;
  --body-weight: 400;
  --strong-weight: 700;
  --label-weight: 600;
  --display-tracking: -0.01em;
  --display-leading: 1.15;
  --display-case: none;
  --body-leading: 1.5;
  --body-size: 16px;
  --icon-stroke: 2;
  --ground: radial-gradient(circle at 84% 26%, color-mix(in oklab, var(--color-accent) 92%, transparent) 0 17vmin, transparent calc(17vmin + 1px)),
    radial-gradient(circle at 62% 86%, color-mix(in oklab, var(--color-primary) 85%, transparent) 0 12vmin, transparent calc(12vmin + 1px)),
    radial-gradient(circle at 98% 82%, color-mix(in oklab, var(--color-primary) 90%, transparent) 0 22vmin, transparent calc(22vmin + 1px)),
    radial-gradient(60% 70% at 80% 50%, color-mix(in oklab, var(--color-primary) 30%, transparent), transparent 70%),
    var(--color-bg);
}
```

Tailwind patterns:

| Element | Classes |
|---|---|
| page | `bg-[#2B1E5A] text-[#F3EEFF] font-sans antialiased px-4 md:px-10` |
| heading | `text-3xl md:text-5xl font-bold leading-[1.15] tracking-tight` |
| body | `text-base leading-[1.5] max-w-prose` |
| section | `rounded-2xl border-2 border-white/20 bg-[#3A2A78] shadow-[0_6px_16px_rgba(0,0,0,0.35)]` |
| button | `rounded-full bg-[#FF5FA2] px-7 py-3 text-sm font-semibold text-[#2B1E5A] transition-transform duration-[350ms] hover:scale-105 active:scale-95` |
| label | `text-xs font-semibold text-[#FFC857]` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** solid, stroke 2 on a 24px field, round caps, round joins, container: circle. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Phosphor (Fill) by Phosphor Icons, licence MIT. Reason: Filled icons in circles match the round, friendly app look of an avatar pack. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 700, tracking -0.01em, leading 1.15, case: none.
- **Weights:** display 700, subhead 600, body 400, bold in text 700, labels and buttons 600. The style uses 3 weights (400, 600, 700) and no other. The display is 300 heavier than the body. The accent is colour: one coloured word or field is the accent, so the weights stay quiet.
- **Body type:** 16px, leading 1.5.
- **Page:** hero stacked, center aligned, regular density, accent tilt 0°.
- **Ground:** orbs. Soft glow orbs echo the radial light that sits behind each head in an avatar tile. Put the class `ground` on the first screen of the page; it takes `--ground`, a stack of gradients built from the colour tokens. The ground can run behind the copy, so put the class `ground-copy` on each text block of that screen: the block gets `--color-bg` and a soft edge. Keep the rest of the page on `--color-bg`.
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

### Diffusion model (tool)

A model that learns to turn noise into an image step by step, and makes a new image from a text prompt. Origin: photography, Stanford and Berkeley, 2015.

- Start from pure noise and remove it over 20 to 50 steps.
- Steer the result with a text prompt and a guidance scale of 5 to 10.
- Expect smooth skin, even light and a glossy, over-detailed finish when the prompt gives no flaw.
- Add a concrete flaw to the prompt, such as grain, a lens fault or a cluttered ground, to break the sheen.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **Lensa** (platform, mobile, 2018–now), launched the style. A photo editing app. Its Magic Avatars feature, from late 2022, returned packs of stylised portraits of one face.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Base colour (`base_colour`) | #FF5FA2 | #FF5FA2, #2B1E5A, #3A2A78, #1C1340 | --color-primary, --color-on-primary, --color-link-on-surface |
| Accent colour (`accent_colour`) | #FFC857 | #FF5FA2, #FFC857, #4ED6E6 | --color-accent, --color-on-accent, --color-link |
| Corner radius (`corner_radius`) | 16px | 8–24 px | --border-radius |
| Grid step (`grid_step`) | 6px | 4–12 px | --space-unit, --grid-gutter |
| Type scale ratio (`type_scale_ratio`) | 1.25 | 1.2–1.5 | --type-ratio, --size-small, --size-h3, --size-h2, --size-h1 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more realistic**: move toward [`diffusion-gloss`](../diffusion-gloss/SKILL.md) (Diffusion Gloss). Use one render with natural skin detail and a rim light; drop the grid.
- If the user asks for **more anonymous**: move toward [`gan-portrait`](../gan-portrait/SKILL.md) (GAN Portrait). Use one plain generated headshot with the eye line at 40% and no costume.
- If the user asks for **more chaotic**: move toward [`ai-slop`](../ai-slop/SKILL.md) (AI Slop). Mix random subjects in the grid and add engagement captions.

- **Came from (go here for a more orthodox version):** [`gan-portrait`](../gan-portrait/SKILL.md)
- **Mixes well with:** [`ai-slop`](../ai-slop/SKILL.md), [`diffusion-gloss`](../diffusion-gloss/SKILL.md)
- **Kin in another domain:** [`airbrush-surrealism`](../airbrush-surrealism/SKILL.md)
- **Nearest by vector profile:** [`y2k-aesthetic`](../y2k-aesthetic/SKILL.md), [`aurora-gradient-ui`](../aurora-gradient-ui/SKILL.md), [`web-2-0-gloss`](../web-2-0-gloss/SKILL.md)

## Emotional target

The viewer feels playful pride: it is me, in twenty better worlds.

**Keywords:** playful, glowing, flattering, stylised, shareable, fantastical · **Brand archetypes:** jester, creator, lover

## Sources

- [Wikipedia: Lensa](https://en.wikipedia.org/wiki/Lensa)
- [Know Your Meme: Lensa AI Magic Avatars](https://knowyourmeme.com/memes/lensa-ai-magic-avatars)

---

Generated from [`data/internet/styles/ai-avatar-portrait.json`](../../data/internet/styles/ai-avatar-portrait.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
