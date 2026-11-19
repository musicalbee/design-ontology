---
name: goblincore
description: "Apply the Goblincore style (2020–now) when generating web pages, apps, memes, short video frames and other images of internet culture. Load when the user asks for: goblincore, moss, mushrooms, frog aesthetic, forest floor, foraging."
domain: internet
era: contemporary-spatial
triggers:
  - "goblincore"
  - "moss"
  - "mushrooms"
  - "frog aesthetic"
  - "forest floor"
  - "foraging"
  - "earth tones"
  - "bones and shells"
vector_profile:
  ornamentation: 4
  dimensionality: 2
  grid_rigidity: 1
  skeuomorphic_realism: 4
  typographic_expressiveness: 3
---

# Goblincore

> Find beauty in mud, rot and clutter: the untidy forest floor is a better home than a clean showroom.

A look for the small wild and the overlooked: moss, mushrooms, frogs, snail shells, bones, soil, old jars and crumpled earth-tone clothes. It spread on Tumblr and TikTok after 2019.

**Period:** 2020–now · **Era:** Contemporary & Spatial · **Domain:** Internet · **Also called:** Goblin core, Moss and mushroom look

## When to load this skill

Load it when the user asks for: "goblincore", "moss", "mushrooms", "frog aesthetic", "forest floor", "foraging", "earth tones", "bones and shells".

Good for: foraging and plant shops, indie craft and ceramics brands, zine and art pages, nature education for older children.

Do not use it when:
- The brand must look clean, clinical or high-tech.
- The product needs a polished luxury tone.
- The page needs fast, high-contrast scanning of data.

## System directives

When generating web pages, apps, memes, short video frames and other images of internet culture in Goblincore, you MUST:

1. Set the ground in earth tones: moss green (#5C6B3A), bark brown (#4A3626) and clay (#A8744C).
2. Use toadstool red (#B5382C) and bone (#E6DCC3) as the two spot colours, each under 10% of the surface.
3. Pair a rough, old-style serif for headings with a plain text serif; allow uneven baselines of 2px to 4px.
4. Photograph close and low: mushrooms, moss, snails, jars of finds and hands in soil, with a soft overcast light and a 15% green cast.
5. Layer torn paper, leaf and bone shapes at 48px to 160px, rotated by -8° to +8°.
6. Draw borders as uneven 2px lines with a rough edge; keep corners at 6px to 12px and slightly different.
7. Fill the frame with small found things: buttons, shells, coins, keys and pressed leaves.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Clean white minimal surfaces.
- **NEVER:** Glossy plastic and neon.
- **NEVER:** Perfect symmetry and straight edges.
- **NEVER:** Pastel sugar colours.
- **NEVER:** Corporate stock imagery.
- **NEVER:** Heavy sans-serif capitals.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■■■□` 4/5 | pure minimal | maximalist |
| Dimensionality | `■■□□□` 2/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■□□□□` 1/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■■■■□` 4/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■■■□□` 3/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** A loose grid of 6 columns with 16px gutters; cards, finds and notes overlap by 8px to 24px and sit at small angles.
- **Whitespace ratio:** 15% to 25% of the surface stays empty; the spacing scale is 4, 8, 16 and 32px.
- **Alignment rules:** Left-aligned text with uneven blocks; finds cluster in a corner like a shelf of jars.
- **Container geometry:** Rough rectangles with a 6px to 12px radius that varies by corner; torn paper edges; jar, leaf and cap shapes as accents.

## Typography

- **Classifications:** old-style serif · rough display · text serif
- **Tracking:** Display 0.01em; body 0.
- **Leading:** Display 1.15; body 1.65.
- **Hierarchy rules:** Use weights 400 and 700. · Use sizes 16, 20, 30 and 56px. · Set captions in italic as field notes at 14px. · Set labels as handwritten tags at a slight angle of 2°.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| IM Fell DW Pica | Alegreya | An old, worn English face with a warm, calligraphic text serif. |
| Almendra | Alegreya | A pen-drawn serif with a medieval note for headings. |
| Caudex | Lora | A heavy old book face with a clear text serif. |

## Colour & lighting

- **Palette structure:** Earth greens, browns and clay, with toadstool red and bone as spot colours.
- **Contrast rules:** Bone on forest floor holds 11:1; lichen holds 7:1; moss and clay carry fills and borders, and red carries small marks only.
- **Surface treatment:** Matte, grainy earth fills with a 6% noise; torn paper and soil textures; photographs have a green cast and a lifted black.
- **Light and shadow:** Soft overcast light; shadows are damp and brown; no glow and no hard shadow.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Forest Floor | `#2E2A1E` | background |
| Bark | `#4A3626` | surface |
| Bone | `#E6DCC3` | text |
| Moss | `#7A8B4A` | primary |
| Toadstool | `#B5382C` | accent |
| Clay | `#A8744C` | second accent |
| Lichen | `#B7B98A` | muted text |
| Mud | `#6B5A3E` | border |

## Materiality & texture

- **Surface simulation:** Moss, soil, bark, bone, ceramic jars, rusted metal and crumpled linen.
- **Border rules:** A 2px uneven line in mud brown; rough torn edges on cards.
- **Blur and elevation:** A shadow of 0 4px 12px at 35% black; no glass and no gloss.

## Ornamentation & iconography

- **Iconography:** Hand-drawn line icons at 24px with 2px strokes and round caps: mushroom, snail, key, bone and frog.
- **Illustration:** Ink and watercolour mushrooms, frogs, snails, beetles, bones, moss and pressed leaves.
- **Decorative elements:** mushroom ring · torn paper edge · pressed leaf · jar of finds · bone and key

## Motion & interactivity

- **Born on screen:** yes
- **Transition physics:** Slow, organic growth: elements scale from 92% to 100% over 500ms; spores drift up at 10s per loop.
- **Easing:** cubic-bezier(0.3, 0.8, 0.4, 1)
- **Duration (ms):** 500
- **Hover and active:** Hover tilts a card by 1.5° and lifts it by 2px; active state settles it back with a small pause.

## Code & token primer

Set `data-style="goblincore"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="goblincore"] {
  --color-bg: #2E2A1E;
  --color-surface: #4A3626;
  --color-text: #E6DCC3;
  --color-muted: #B7B98A;
  --color-primary: #7A8B4A;
  --color-accent: #B5382C;
  --color-border: #6B5A3E;
  --font-sans: "Alegreya", "Lora", Georgia, serif;
  --font-display: "IM Fell DW Pica", "Almendra", Georgia, serif;
  --border-radius: 8px;
  --border-width: 2px;
  --shadow-elevation: 0 4px 12px rgba(0, 0, 0, 0.35);
  --backdrop-filter: none;
  --space-unit: 8px;
  --ease: cubic-bezier(0.3, 0.8, 0.4, 1);
  --duration: 500ms;
  --type-ratio: 1.25;
  --size-small: 13.6px;
  --size-h3: 26.56px;
  --size-h2: 33.2px;
  --size-h1: 41.5px;
  --color-on-bg: #E6DCC3;
  --color-on-surface: #E6DCC3;
  --color-on-primary: #000000;
  --color-on-accent: #FFFFFF;
  --color-muted-on-bg: #B7B98A;
  --color-muted-on-surface: #B7B98A;
  --color-link: #E6DCC3;
  --color-link-on-surface: #E6DCC3;
  --display-weight: 700;
  --subhead-weight: 400;
  --body-weight: 400;
  --strong-weight: 700;
  --label-weight: 400;
  --display-tracking: 0.01em;
  --display-leading: 1.15;
  --display-case: none;
  --body-leading: 1.65;
  --body-size: 17px;
  --icon-stroke: 2;
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
| page | `bg-[#2E2A1E] text-[#E6DCC3] font-serif antialiased px-5 md:px-10` |
| heading | `font-[family-name:IM_Fell_DW_Pica] text-4xl md:text-6xl font-bold leading-[1.15] -rotate-1` |
| body | `text-[17px] leading-[1.65] max-w-prose` |
| section | `rounded-lg border-2 border-[#6B5A3E] bg-[#4A3626] p-6 shadow-[0_4px_12px_rgba(0,0,0,0.35)] rotate-[0.5deg]` |
| button | `rounded-md border-2 border-[#7A8B4A] bg-[#7A8B4A] px-5 py-2.5 text-sm font-bold text-[#1F1B12] hover:-rotate-1 hover:bg-[#B7B98A]` |
| label | `text-sm italic text-[#B7B98A]` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** outline, stroke 2 on a 24px field, round caps, round joins, container: none. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Pepicons (Print) by CyCraft, licence CC BY 4.0. Reason: A rough, hand-printed line that fits finds, field notes and torn paper. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 700, tracking 0.01em, leading 1.15, case: none.
- **Weights:** display 700, subhead 400, body 400, bold in text 700, labels and buttons 400. The style uses 2 weights (400, 700) and no other. The display is 300 heavier than the body. The accent is colour: one coloured word or field is the accent, so the weights stay quiet.
- **Body type:** 17px, leading 1.65.
- **Page:** hero split, left aligned, compact density, accent tilt 2°.
- **Ground:** xerox. Goblincore stands on a grainy, dirty ground like soil, a photocopied field note or a damp page. Put the class `ground` on the first screen of the page; it takes `--ground`, a stack of gradients built from the colour tokens. The ground can run behind the copy, so put the class `ground-copy` on each text block of that screen: the block gets `--color-bg` and a soft edge. Keep the rest of the page on `--color-bg`.
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

### Extreme close-up (montage)

A frame that holds only a part of a face, such as the eyes; the cut from a wide view to this frame sets a person against the world. Origin: film & video, Hove, 1900.

- Frame the eyes as a band that fills the width of a 2.35:1 frame; use a lens of 75mm to 100mm.
- Cut from a wide shot to the close-up with no medium shot between them.
- Hold each close-up for 2 to 4 seconds and cut back to the wide view when the look ends.
- In a painting, scale the head to 2 metres or more and keep the focus even over the full face.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **Tumblr** (platform, web, 2007–now), launched the style. A microblog site of reblogged images. Vaporwave and other net aesthetics grew in its image feeds.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Base colour (`base_colour`) | #7A8B4A | #7A8B4A, #A8744C, #B5382C | --color-primary, --color-on-primary, --color-link-on-surface |
| Accent colour (`accent_colour`) | #B5382C | #B5382C, #A8744C, #B7B98A | --color-accent, --color-on-accent, --color-link |
| Corner radius (`corner_radius`) | 8px | 4–16 px | --border-radius |
| Grid step (`grid_step`) | 8px | 4–12 px | --space-unit, --grid-gutter |
| Type scale ratio (`type_scale_ratio`) | 1.25 | 1.2–1.5 | --type-ratio, --size-small, --size-h3, --size-h2, --size-h1 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **tidier**: move toward [`cottagecore`](../cottagecore/SKILL.md) (Cottagecore). Lift the ground to cream, swap bark for sage and keep the botanicals.
- If the user asks for **darker**: move toward [`dark-academia`](../dark-academia/SKILL.md) (Dark academia). Replace earth tones with leather brown and brass; add book plates and Latin mottos.
- If the user asks for **more plain**: move toward [`normcore`](../normcore/SKILL.md) (Normcore). Remove the textures and finds; keep one moss green and a flat grey ground.

- **Came from (go here for a more orthodox version):** [`cottagecore`](../cottagecore/SKILL.md)
- **Rejects (the opposite pole; do not blend):** [`normcore`](../normcore/SKILL.md)
- **Was rejected by:** [`clean-girl`](../clean-girl/SKILL.md)
- **Mixes well with:** [`scrapbook-ui`](../scrapbook-ui/SKILL.md), [`wabi-sabi-web`](../wabi-sabi-web/SKILL.md)
- **Kin in another domain:** [`hippie-bohemian-dress`](../hippie-bohemian-dress/SKILL.md), [`mingei-folk-craft`](../mingei-folk-craft/SKILL.md), [`naturalist-cuisine`](../naturalist-cuisine/SKILL.md), [`organic-architecture`](../organic-architecture/SKILL.md)
- **Nearest by vector profile:** [`photo-dump`](../photo-dump/SKILL.md), [`tumblr-soft-grunge`](../tumblr-soft-grunge/SKILL.md), [`cottagecore`](../cottagecore/SKILL.md)

## Emotional target

The viewer feels curious, at home in mess and tender toward small, odd things.

**Keywords:** earthy, damp, quirky, wild, cosy, strange · **Brand archetypes:** explorer, outlaw, creator

## Sources

- [Know Your Meme: Goblincore](https://knowyourmeme.com/memes/subcultures/goblincore)
- [Wikipedia: Goblincore](https://en.wikipedia.org/wiki/Goblincore)
- [Aesthetics Wiki: Goblincore](https://aesthetics.fandom.com/wiki/Goblincore)

---

Generated from [`data/internet/styles/goblincore.json`](../../data/internet/styles/goblincore.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
