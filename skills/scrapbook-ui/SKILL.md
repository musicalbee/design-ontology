---
name: scrapbook-ui
description: "Apply the Scrapbook UI style (2018–now) when generating web pages, apps, memes, short video frames, forum and chat screens, and other images of internet culture. Load when the user asks for: scrapbook, collage, paper collage, tape, polaroid, journal."
domain: internet
era: feed-mobile
triggers:
  - "scrapbook"
  - "collage"
  - "paper collage"
  - "tape"
  - "polaroid"
  - "journal"
  - "handmade"
  - "sticker"
vector_profile:
  ornamentation: 2
  dimensionality: 3
  grid_rigidity: 5
  skeuomorphic_realism: 5
  typographic_expressiveness: 5
---

# Scrapbook UI

> The page is a handmade album: warm, imperfect and made by a person.

Cut-out photos, tape, stickers, torn paper, handwritten notes and slight tilts on a paper ground. It makes a page feel like a handmade album and a personal object.

**Period:** 2018–now · **Era:** The feed and the phone · **Domain:** Internet · **Also called:** Collage web, Paper collage UI, Craft collage

## When to load this skill

Load it when the user asks for: "scrapbook", "collage", "paper collage", "tape", "polaroid", "journal", "handmade", "sticker".

Good for: personal sites and portfolios, wedding, travel and memory pages, craft, stationery and kids brands, music and zine culture, storytelling and journaling apps.

Do not use it when:
- The product needs dense data tables.
- The brand must look precise or corporate.
- The page needs fast, quiet scanning.

## System directives

When generating web pages, apps, memes, short video frames, forum and chat screens, and other images of internet culture in Scrapbook UI, you MUST:

1. Tilt each card, photo and sticker by -4° to +4° and never place two neighbours at the same angle.
2. Put a strip of tape (80px by 24px, yellow or white at 70% opacity, rotated 5° to 15°) on the top corner of photos.
3. Add torn paper edges with an SVG mask of 6px to 12px amplitude on 2 sides of each paper block.
4. Use a paper ground (#F4ECD8) with a grain of 4% to 8% and 3 to 5 flat accent colours at 70% to 100% saturation.
5. Set notes in a handwriting face at 20px to 28px and body text in a plain sans at 16px.
6. Cast a soft shadow of 0 4px 8px at 18% under each paper item and rotate stickers with a 3px white outline.
7. Overlap items by 8px to 24px and layer at least 3 depth levels (paper, photo, sticker).

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Perfect grids with equal gutters.
- **NEVER:** Hard digital edges with no texture.
- **NEVER:** Neon and glow effects.
- **NEVER:** Monochrome minimal palettes.
- **NEVER:** Stock photos with no crop or frame.
- **NEVER:** Cold glass and blur.
- **NEVER:** Fixed icon sets in a straight row.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■□□□` 2/5 | pure minimal | maximalist |
| Dimensionality | `■■■□□` 3/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■■■■` 5/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■■■■■` 5/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■■■■■` 5/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** A loose collage on a 6-column base; items overlap by 8px to 24px and tilt by -4° to +4°; one anchor block holds the headline.
- **Whitespace ratio:** 5% to 15% of the surface is empty; gaps are uneven (12px to 48px).
- **Alignment rules:** Mixed: flush left text blocks, centred stickers, notes at random corners; right edge is ragged.
- **Container geometry:** Paper rectangles with torn or deckled edges; polaroid frames with 12px side and 40px bottom margins; stickers with a 3px white outline.

## Typography

- **Classifications:** handwriting script · humanist sans serif
- **Tracking:** Hand faces take 0; sans body takes 0.
- **Leading:** Display 1.1; body 1.55.
- **Hierarchy rules:** Use two weights: regular (400) and bold (700). · Use sizes 16, 22, 28 and 64px. · Set notes in the hand face and body in the sans. · Set date stamps in a typewriter face at 12px.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Caveat | Nunito | A natural handwriting for notes and labels. |
| Gaegu | Nunito | A rounder, child-like hand for stickers. |
| Special Elite | Nunito | A typewriter face for captions on tape. |

## Colour & lighting

- **Palette structure:** Warm paper with craft accents.
- **Contrast rules:** Ink on paper holds 12:1; white text only on tomato and teal at 18px and larger.
- **Surface treatment:** Flat paper fields with a grain of 4% to 8%; no gradient.
- **Light and shadow:** Light is soft and from the top: a shadow of 0 4px 8px at 18% under paper items.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Paper | `#F4ECD8` | background |
| Ink | `#2B2A33` | text |
| Tomato | `#C8401C` | primary |
| Mustard | `#F3B700` | accent |
| Teal | `#2A9D8F` | accent two |
| Kraft | `#C8A97E` | secondary surface |

## Materiality & texture

- **Surface simulation:** Paper, tape, photo prints and craft stickers.
- **Border rules:** Torn and deckled edges; a 3px white outline on stickers.
- **Blur and elevation:** Shadow 0 4px 8px at 18%; two layers of overlap shadow; no blur on content.

## Ornamentation & iconography

- **Iconography:** Hand-drawn icons with 2.5px strokes and round caps; stars, arrows and hearts as stickers.
- **Illustration:** Cut-out photos, tape strips, stamps, doodles and torn paper.
- **Decorative elements:** tape strip · polaroid frame · torn edge · sticker

## Motion & interactivity

- **Born on screen:** yes
- **Transition physics:** Light and playful: items drop in with a 4° wobble in 400ms; stickers peel up on hover.
- **Easing:** cubic-bezier(0.34, 1.56, 0.64, 1)
- **Duration (ms):** 400
- **Hover and active:** Hover lifts an item 4px and straightens its tilt to 0°; active state presses it back to scale 0.98.

## Code & token primer

Set `data-style="scrapbook-ui"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="scrapbook-ui"] {
  --color-bg: #F4ECD8;
  --color-surface: #FFFFFF;
  --color-text: #2B2A33;
  --color-muted: #6B6558;
  --color-primary: #C8401C;
  --color-accent: #F3B700;
  --color-border: #C8A97E;
  --font-sans: "Nunito", system-ui, sans-serif;
  --font-display: "Caveat", "Nunito", cursive;
  --border-radius: 2px;
  --border-width: 1px;
  --shadow-elevation: 0 4px 8px rgba(0,0,0,0.18);
  --backdrop-filter: none;
  --space-unit: 8px;
  --ease: cubic-bezier(0.34, 1.56, 0.64, 1);
  --duration: 400ms;
  --type-ratio: 1.618;
  --size-small: 9.89px;
  --size-h3: 41.89px;
  --size-h2: 67.77px;
  --size-h1: 109.66px;
  --color-on-bg: #2B2A33;
  --color-on-surface: #2B2A33;
  --color-on-primary: #FFFFFF;
  --color-on-accent: #2B2A33;
  --color-muted-on-bg: #6B6558;
  --color-muted-on-surface: #6B6558;
  --color-link: #2B2A33;
  --color-link-on-surface: #C8401C;
  --display-weight: 700;
  --subhead-weight: 700;
  --body-weight: 400;
  --strong-weight: 700;
  --label-weight: 700;
  --display-tracking: 0em;
  --display-leading: 1.1;
  --display-case: none;
  --body-leading: 1.55;
  --body-size: 16px;
  --icon-stroke: 2.5;
  --ground: linear-gradient(-7deg, transparent 0 42%, color-mix(in oklab, var(--color-accent) 85%, transparent) 42% 58%, transparent 58%) 88% 14% / 42vmin 14vmin no-repeat,
    linear-gradient(var(--color-on-bg), var(--color-on-bg)) 96% 66% / 28vmin 22vmin no-repeat,
    radial-gradient(circle, var(--color-on-bg) 30%, transparent 33%) 74% 96% / 9px 9px,
    linear-gradient(100deg, var(--color-bg) 36%, transparent 64%),
    url("data:image/svg+xml,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20width%3D'220'%20height%3D'220'%3E%3Cfilter%20id%3D'n'%3E%3CfeTurbulence%20type%3D'fractalNoise'%20baseFrequency%3D'.8'%20numOctaves%3D'3'%20stitchTiles%3D'stitch'%2F%3E%3CfeColorMatrix%20values%3D'0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.48%200%200%200%200'%2F%3E%3C%2Ffilter%3E%3Crect%20width%3D'100%25'%20height%3D'100%25'%20filter%3D'url(%23n)'%2F%3E%3C%2Fsvg%3E") 0 0 / 220px 220px repeat,
    var(--color-bg);
}
```

Tailwind patterns:

| Element | Classes |
|---|---|
| page | `bg-[#F4ECD8] text-[#2B2A33] font-sans antialiased` |
| heading | `font-bold text-5xl md:text-7xl leading-[1.1] -rotate-2` |
| body | `text-base leading-[1.55]` |
| section | `bg-white p-3 pb-10 shadow-[0_4px_8px_rgba(0,0,0,0.18)] rotate-2` |
| button | `rounded-sm bg-[#C8401C] px-5 py-3 font-bold text-white shadow-[0_4px_8px_rgba(0,0,0,0.18)] -rotate-1 transition-transform duration-[400ms] hover:-translate-y-1 hover:rotate-0` |
| label | `text-xs text-[#6B6558]` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** outline, stroke 2.5 on a 24px field, round caps, round joins, container: none. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Pepicons (Pop) by CyCraft, licence CC BY 4.0. Reason: A hand-drawn, sticker-like family with a thick round line. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 700, tracking 0em, leading 1.1, case: none.
- **Weights:** display 700, subhead 700, body 400, bold in text 700, labels and buttons 700. The style uses 2 weights (400, 700) and no other. The display is 300 heavier than the body. The accent is weight: a heavier word is the accent, so the steps between the weights are clear.
- **Body type:** 16px, leading 1.55.
- **Page:** hero stacked, left aligned, regular density, accent tilt 3°.
- **Ground:** xerox. A scrapbook page has tape, cut paper and the grain of copied pictures. Put the class `ground` on the first screen of the page; it takes `--ground`, a stack of gradients built from the colour tokens. The ground can run behind the copy, so put the class `ground-copy` on each text block of that screen: the block gets `--color-bg` and a soft edge. Keep the rest of the page on `--color-bg`.
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

### Photomontage (montage)

Fragments of photographs, cut and joined on one sheet, so that the joins make a statement that no single photograph makes. Origin: graphic movements, Berlin, 1918.

- Join 3 to 12 photographic fragments on one ground and keep the cut edges hard and visible.
- Vary the scale of the fragments by 4:1 or more, so that the joins read as a claim and not as a scene.
- Set type as one more fragment, turned 0° to 30°, in the same stack of layers.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **Pinterest** (platform, web, 2010–now), published the style. A web site where people pin images to boards. Its boards of rooms, crafts and mood images spread home and craft styles.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Base colour (`base_colour`) | #C8401C | #C8401C, #F3B700, #2B2A33 | --color-primary, --color-on-primary, --color-link-on-surface |
| Accent colour (`accent_colour`) | #F3B700 | #F3B700, #C8401C | --color-accent, --color-on-accent, --color-link |
| Corner radius (`corner_radius`) | 2px | 1–3 px | --border-radius |
| Grid step (`grid_step`) | 8px | 4–12 px | --space-unit, --grid-gutter |
| Type scale ratio (`type_scale_ratio`) | 1.618 | 1.5–1.618 | --type-ratio, --size-small, --size-h3, --size-h2, --size-h1 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **cleaner**: move toward [`editorial-serif-revival`](../editorial-serif-revival/SKILL.md) (Editorial Serif Revival). Straighten items to 0°, remove tape and keep the paper ground and one hand font.
- If the user asks for **more raw**: move toward [`punk-zine`](../punk-zine/SKILL.md) (Punk Zine). Use photocopy black and white, cut letters and a 2px offset.
- If the user asks for **more soft**: move toward [`claymorphism`](../claymorphism/SKILL.md) (Claymorphism). Swap paper for soft 3D blobs and 24px radius.

- **Came from (go here for a more orthodox version):** [`corporate-memphis`](../corporate-memphis/SKILL.md), [`punk-zine`](../punk-zine/SKILL.md)
- **Led to (go here for a newer version):** [`kidcore`](../kidcore/SKILL.md)
- **Rejects (the opposite pole; do not blend):** [`flat-design`](../flat-design/SKILL.md)
- **Mixes well with:** [`bohemian-web`](../bohemian-web/SKILL.md), [`claymorphism`](../claymorphism/SKILL.md), [`conceptual-sketch-ui`](../conceptual-sketch-ui/SKILL.md), [`cottagecore`](../cottagecore/SKILL.md), [`goblincore`](../goblincore/SKILL.md), [`grunge-editorial`](../grunge-editorial/SKILL.md)
- **Nearest by vector profile:** [`bohemian-web`](../bohemian-web/SKILL.md), [`cassette-futurism`](../cassette-futurism/SKILL.md), [`conceptual-sketch-ui`](../conceptual-sketch-ui/SKILL.md)

## Emotional target

The viewer feels warmth, nostalgia and the presence of the maker.

**Keywords:** warm, handmade, nostalgic, playful, personal, imperfect · **Brand archetypes:** jester, everyman

## Sources

- Example: Mailchimp 2018 rebrand pages (2018)
- Example: Are.na and Cosmos collage sites (2019–2025)
- Example: Figma FigJam and Notion illustrated pages (2020–2025)

---

Generated from [`data/internet/styles/scrapbook-ui.json`](../../data/internet/styles/scrapbook-ui.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
