---
name: seapunk
description: "Apply the Seapunk style (2011–2013) when generating web pages, apps, memes, short video frames and other images of internet culture. Load when the user asks for: seapunk, ocean theme, aqua gradient, dolphin, mermaid aesthetic, underwater web."
domain: internet
era: touchscreen
triggers:
  - "seapunk"
  - "ocean theme"
  - "aqua gradient"
  - "dolphin"
  - "mermaid aesthetic"
  - "underwater web"
  - "tie-dye water"
vector_profile:
  ornamentation: 4
  dimensionality: 4
  grid_rigidity: 2
  skeuomorphic_realism: 3
  typographic_expressiveness: 3
---

# Seapunk

> Put the early web underwater: its 3D shapes, clip art and gradients float on a sea of turquoise.

Turquoise and aqua water, dolphins, shells, floating 3D shapes and tie-dye, with 1990s web graphics. It started as a joke tweet in 2011 and grew into an ocean theme in music and fashion.

**Period:** 2011–2013 · **Era:** Touchscreen · **Domain:** Internet · **Also called:** Sea punk, Ocean punk

## When to load this skill

Load it when the user asks for: "seapunk", "ocean theme", "aqua gradient", "dolphin", "mermaid aesthetic", "underwater web", "tie-dye water".

Good for: music artwork and club flyers, fashion drop pages, art projects, event pages for summer parties.

Do not use it when:
- The audience expects a calm, formal tone.
- The page has long text.
- The brand needs a serious or medical voice.

## System directives

When generating web pages, apps, memes, short video frames and other images of internet culture in Seapunk, you MUST:

1. Set the ground as a vertical gradient from aqua (#7FFFD4) at the top to deep sea blue (#0B3D91) at the bottom.
2. Float 3 to 6 glossy shapes (pyramids, spheres, rings) at different sizes and let them drift over the layout.
3. Place one marine motif at 30% to 50% of the frame: a dolphin, a shell or a wave.
4. Set the display text with 2 colour stops from #00F5D4 to #9B5DE5 and a 2px dark edge.
5. Overlay a tie-dye or wave pattern at 15% opacity on one panel.
6. Add a pixel sparkle of 8px at 4 or more points of the frame.
7. Keep the text panels on a deep sea ground (#0B3D91) with text at 7:1 contrast.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Muted earth tones.
- **NEVER:** Realistic ocean photographs with no digital layer.
- **NEVER:** Corporate flat layouts.
- **NEVER:** Dry, serious copy.
- **NEVER:** Dense grey tables.
- **NEVER:** Thin serif body text.
- **NEVER:** Warm sunset palettes.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■■■□` 4/5 | pure minimal | maximalist |
| Dimensionality | `■■■■□` 4/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■□□□` 2/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■■■□□` 3/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■■■□□` 3/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** A loose 12-column grid with 16px gutters; panels and shapes overlap by 8px to 32px.
- **Whitespace ratio:** 20% to 30% of the surface stays empty; the spacing scale is 8, 16, 32 and 64px.
- **Alignment rules:** A centred hero and offset panels; floating shapes sit off the grid at angles of -12° to 12°.
- **Container geometry:** Panels with a 12px radius and a 2px aqua edge; pill buttons; circles and rings as accents.

## Typography

- **Classifications:** rounded display · wide geometric sans · bitmap
- **Tracking:** Display takes +0.04em; body stays at 0.01em.
- **Leading:** Display 1.1; body 1.6.
- **Hierarchy rules:** Use two weights: regular (400) and bold (700). · Use sizes 14, 18, 40 and 80px. · Set display text in 2-stop gradient colour. · Use a pixel face only for labels of 12px or less.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Rubik Bubbles | Nunito | A soft, bubbly display face with a round text face. |
| Fredoka | DM Sans | A rounded sans for headings and a plain text face. |
| Press Start 2P | Space Mono | A bitmap face for the net art side, with a mono text face. |

## Colour & lighting

- **Palette structure:** Aqua and turquoise on deep sea blue, with a lilac and a pink accent.
- **Contrast rules:** Text on deep sea blue holds at least 7:1; aqua and lilac carry headings and shapes, not long text.
- **Surface treatment:** Vertical water gradients; glossy 2-stop gradients on 3D shapes; a tie-dye wash on one panel.
- **Light and shadow:** A soft highlight at the top left of each shape; a glow of 12px in aqua; no hard black shadow.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Deep Sea | `#0B3D91` | background |
| Aqua | `#7FFFD4` | primary |
| Turquoise | `#00F5D4` | accent |
| Lilac | `#9B5DE5` | second accent |
| Coral Pink | `#FF6FB5` | highlight |
| Foam White | `#F2FFFC` | text |

## Materiality & texture

- **Surface simulation:** Water and clear plastic, as early 3D software drew them: smooth, glossy and a little flat.
- **Border rules:** A 2px aqua edge on panels; a 1px white highlight line inside.
- **Blur and elevation:** A glow of 12px blur on shapes; panels have a 6px soft shadow in deep blue.

## Ornamentation & iconography

- **Iconography:** Solid icons at 24px with round forms and a 2px edge: shells, waves, stars and a dolphin.
- **Illustration:** Dolphins, mermaid tails, shells, pyramids and rings in a 1990s 3D look, on a water texture.
- **Decorative elements:** dolphin · shell · 3D pyramid · tie-dye wash · pixel sparkle

## Motion & interactivity

- **Born on screen:** yes
- **Transition physics:** Shapes drift up and down by 12px to 24px over 6s; the water gradient shifts by 10% over 12s; panels fade in over 500ms.
- **Easing:** cubic-bezier(0.37, 0, 0.63, 1)
- **Duration (ms):** 500
- **Hover and active:** Hover raises a shape by 8px and adds a 16px aqua glow; the active state shifts the gradient by 20%.

## Code & token primer

Set `data-style="seapunk"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="seapunk"] {
  --color-bg: #0B3D91;
  --color-surface: #14529F;
  --color-text: #F2FFFC;
  --color-muted: #B6E8F0;
  --color-primary: #7FFFD4;
  --color-accent: #9B5DE5;
  --color-border: #7FFFD4;
  --font-sans: "Nunito", "DM Sans", sans-serif;
  --font-display: "Rubik Bubbles", "Fredoka", sans-serif;
  --border-radius: 12px;
  --border-width: 2px;
  --shadow-elevation: 0 6px 16px rgba(0, 20, 60, 0.45);
  --backdrop-filter: none;
  --space-unit: 8px;
  --ease: cubic-bezier(0.37, 0, 0.63, 1);
  --duration: 500ms;
  --type-ratio: 1.5;
  --size-small: 10.67px;
  --size-h3: 36px;
  --size-h2: 54px;
  --size-h1: 81px;
  --color-on-bg: #F2FFFC;
  --color-on-surface: #F2FFFC;
  --color-on-primary: #0B3D91;
  --color-on-accent: #000000;
  --color-muted-on-bg: #B6E8F0;
  --color-muted-on-surface: #B6E8F0;
  --color-link: #7FFFD4;
  --color-link-on-surface: #7FFFD4;
  --display-weight: 700;
  --subhead-weight: 400;
  --body-weight: 400;
  --strong-weight: 700;
  --label-weight: 400;
  --display-tracking: 0.04em;
  --display-leading: 1.1;
  --display-case: none;
  --body-leading: 1.6;
  --body-size: 16px;
  --icon-stroke: 2;
  --ground: radial-gradient(circle at 82% 30%, rgba(255,255,255,.7) 0 1.4vmin, transparent 1.6vmin),
    radial-gradient(circle at 86% 34%, transparent 0 7vmin, rgba(255,255,255,.75) 7vmin 7.5vmin, rgba(255,255,255,.15) 7.6vmin 8vmin, transparent 8.2vmin),
    radial-gradient(circle at 66% 18%, transparent 0 3.6vmin, rgba(255,255,255,.7) 3.6vmin 4vmin, transparent 4.2vmin),
    radial-gradient(circle at 95% 62%, transparent 0 4.6vmin, rgba(255,255,255,.7) 4.6vmin 5vmin, transparent 5.2vmin),
    radial-gradient(130% 55% at 70% 130%, var(--color-accent) 0 55%, transparent 55.4%),
    radial-gradient(90% 45% at 10% 125%, color-mix(in oklab, var(--color-accent) 70%, transparent) 0 55%, transparent 55.4%),
    linear-gradient(to bottom, rgba(255,255,255,.45), transparent 60%),
    var(--color-bg);
}
```

Tailwind patterns:

| Element | Classes |
|---|---|
| page | `bg-[#0B3D91] text-[#F2FFFC] font-sans antialiased px-6 md:px-12` |
| heading | `text-4xl md:text-7xl font-bold leading-[1.1] text-center bg-gradient-to-r from-[#00F5D4] to-[#9B5DE5] bg-clip-text text-transparent` |
| body | `text-base leading-[1.6] max-w-prose` |
| section | `border border-[#7FFFD4] rounded-xl bg-[#14529F]` |
| button | `rounded-full border-2 border-[#7FFFD4] bg-[#7FFFD4] px-6 py-3 text-sm font-bold text-[#0B3D91] transition-shadow duration-500 hover:shadow-[0_0_16px_#7FFFD4]` |
| label | `text-xs uppercase tracking-widest` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** solid, stroke 2 on a 24px field, round caps, round joins, container: circle. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Fluent UI System Icons (Filled, 24) by Microsoft Corporation, licence MIT. Reason: Rounded, filled icons match the glossy, bubble-like shapes of 1990s 3D water graphics. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 700, tracking 0.04em, leading 1.1, case: none.
- **Weights:** display 700, subhead 400, body 400, bold in text 700, labels and buttons 400. The style uses 2 weights (400, 700) and no other. The display is 300 heavier than the body. The accent is colour: one coloured word or field is the accent, so the weights stay quiet.
- **Body type:** 16px, leading 1.6.
- **Page:** hero stacked, center aligned, regular density, accent tilt 0°.
- **Ground:** bubbles. Seapunk floats glossy shapes in water, so the ground is a field of bubbles on a water gradient. Put the class `ground` on the first screen of the page; it takes `--ground`, a stack of gradients built from the colour tokens. The ground can run behind the copy, so put the class `ground-copy` on each text block of that screen: the block gets `--color-bg` and a soft edge. Keep the rest of the page on `--color-bg`.
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

Fragments of photographs, cut and joined on one sheet, so that the joins make a statement that no single photograph makes. Origin: internet, Berlin, 1918.

- Join 3 to 12 photographic fragments on one ground and keep the cut edges hard and visible.
- Vary the scale of the fragments by 4:1 or more, so that the joins read as a claim and not as a scene.
- Set type as one more fragment, turned 0° to 30°, in the same stack of layers.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **Tumblr** (platform, web, 2007–now), published the style. A microblog site of reblogged images. Vaporwave and other net aesthetics grew in its image feeds.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Base colour (`base_colour`) | #7FFFD4 | #7FFFD4, #00F5D4, #9B5DE5 | --color-primary, --color-on-primary, --color-link-on-surface |
| Accent colour (`accent_colour`) | #9B5DE5 | #9B5DE5, #FF6FB5 | --color-accent, --color-on-accent, --color-link |
| Corner radius (`corner_radius`) | 12px | 4–24 px | --border-radius |
| Grid step (`grid_step`) | 8px | 4–12 px | --space-unit, --grid-gutter |
| Type scale ratio (`type_scale_ratio`) | 1.5 | 1.25–1.618 | --type-ratio, --size-small, --size-h3, --size-h2, --size-h1 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **calmer**: move toward [`frutiger-aero`](../frutiger-aero/SKILL.md) (Frutiger Aero). Replace the tie-dye with soft sky blue, add glossy bubbles and keep the water gradient.
- If the user asks for **more night**: move toward [`vaporwave`](../vaporwave/SKILL.md) (Vaporwave). Change the ground to night violet and add a perspective grid and a sun disc.
- If the user asks for **more digital**: move toward [`pixel-art-web`](../pixel-art-web/SKILL.md) (Pixel Art Web). Replace the 3D shapes with pixel sprites and use a bitmap face for all labels.

- **Came from (go here for a more orthodox version):** [`y2k-aesthetic`](../y2k-aesthetic/SKILL.md)
- **Mixes well with:** [`frutiger-aero`](../frutiger-aero/SKILL.md), [`pixel-art-web`](../pixel-art-web/SKILL.md)
- **Kin in another domain:** [`y2k-digicam`](../y2k-digicam/SKILL.md)
- **Nearest by vector profile:** [`blob-world`](../blob-world/SKILL.md), [`claymorphism`](../claymorphism/SKILL.md), [`surrealism-web`](../surrealism-web/SKILL.md)

## Emotional target

The viewer feels playful and dreamy, as if inside an old screensaver aquarium.

**Keywords:** aquatic, playful, dreamy, glossy, ironic, tropical · **Brand archetypes:** jester, explorer, magician

## Sources

- [Wikipedia, Seapunk](https://en.wikipedia.org/wiki/Seapunk)
- [Know Your Meme, Seapunk](https://knowyourmeme.com/memes/subcultures/seapunk)

---

Generated from [`data/internet/styles/seapunk.json`](../../data/internet/styles/seapunk.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
