---
name: health-goth
description: "Apply the Health Goth style (2013–2016) when generating web pages, apps, memes, short video frames and other images of internet culture. Load when the user asks for: health goth, healthgoth, gym goth, black sportswear, 3D render blade, dark athletic."
domain: internet
era: touchscreen
triggers:
  - "health goth"
  - "healthgoth"
  - "gym goth"
  - "black sportswear"
  - "3D render blade"
  - "dark athletic"
  - "net art goth"
vector_profile:
  ornamentation: 2
  dimensionality: 4
  grid_rigidity: 4
  skeuomorphic_realism: 2
  typographic_expressiveness: 3
---

# Health Goth

> Treat the body and the interface as one clean, dark machine: goth mood, gym function, no decoration that has no use.

Black, white and silver, 3D-rendered blades and mesh forms, sportswear and gym signs, with a cold, clean look. It grew from a 2013 online group that mixed goth, sport and net art.

**Period:** 2013–2016 · **Era:** Touchscreen · **Domain:** Internet · **Also called:** Healthgoth, Health goth

## When to load this skill

Load it when the user asks for: "health goth", "healthgoth", "gym goth", "black sportswear", "3D render blade", "dark athletic", "net art goth".

Good for: sportswear and streetwear drops, fitness and wellness brands with a dark tone, music artwork, portfolio pages for 3D artists.

Do not use it when:
- The brand needs a warm or friendly tone.
- The audience expects colour and play.
- The page carries long, dense reading text.

## System directives

When generating web pages, apps, memes, short video frames and other images of internet culture in Health Goth, you MUST:

1. Set the ground at #0A0A0C and use white (#F4F4F5) as the main ink.
2. Render one 3D form (a blade, a mesh or a chrome ring) at 40% to 60% of the frame, with no people.
3. Use thin sans type in capitals at +0.2em, in 1 weight (300) for display.
4. Add one acid-silver accent (#C9D1D9) on no more than 8% of the surface.
5. Set strict 8px modules and align text on a 12-column grid with 24px gutters.
6. Add sport labels: a size code, a small cross or a rep count at 11px to 12px.
7. Keep the radius at 0px on panels and at 2px on buttons.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Warm, cosy palettes.
- **NEVER:** Playful rounded type.
- **NEVER:** Floral or lace goth decoration.
- **NEVER:** Photographs of crowds.
- **NEVER:** Rainbow gradients.
- **NEVER:** Hand-drawn texture.
- **NEVER:** Dense ornament.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■□□□` 2/5 | pure minimal | maximalist |
| Dimensionality | `■■■■□` 4/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■■■□` 4/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■■□□□` 2/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■■■□□` 3/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** A strict 12-column grid with 24px gutters and an 8px baseline; one object sits in the centre columns.
- **Whitespace ratio:** 40% to 55% of the surface stays empty; the spacing scale is 8, 16, 32 and 64px.
- **Alignment rules:** Flush-left text blocks and a centred 3D object; labels align to the grid edge.
- **Container geometry:** Rectangles with a 0px radius and a 1px line; buttons with a 2px radius; thin rings for accents.

## Typography

- **Classifications:** wide geometric sans · condensed sans · monospace
- **Tracking:** Display takes +0.2em; labels take +0.12em; body stays at 0.
- **Leading:** Display 1.1; body 1.6.
- **Hierarchy rules:** Use two weights: light (300) and bold (700). · Use sizes 11, 16, 32 and 64px. · Set all display text and labels in capitals. · Use one colour for ink and one for accent.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Michroma | Inter | A wide technical display face with a neutral text face. |
| Syncopate | IBM Plex Mono | A wide capital face with a mono face for labels. |
| Oswald | Roboto | A condensed sans for a sport-label look. |

## Colour & lighting

- **Palette structure:** Black and white with one cold silver; no saturated hue.
- **Contrast rules:** Text on void black holds at least 12:1; silver and ice carry lines and one accent, not long text.
- **Surface treatment:** Flat black fields; 3D forms with a chrome or matte black skin; a 2% grain.
- **Light and shadow:** A single cold rim light on 3D forms; no coloured glow; no cast shadow on panels.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Void Black | `#0A0A0C` | background |
| Bone White | `#F4F4F5` | text |
| Cold Silver | `#C9D1D9` | primary |
| Graphite | `#1C1D22` | surface |
| Steel | `#6B7280` | muted |
| Acid Ice | `#B8F2E6` | accent |

## Materiality & texture

- **Surface simulation:** Chrome, matte rubber and mesh fabric, rendered in 3D.
- **Border rules:** A 1px line in graphite (#1C1D22) on panels; a 1px silver line on focus.
- **Blur and elevation:** No blur; elevation is a 1px line change, not a shadow.

## Ornamentation & iconography

- **Iconography:** Outline icons at 24px with a 1.5px line and square caps: crosses, arrows, a heart-rate line.
- **Illustration:** 3D renders of blades, mesh shells and rings, with tribal-style line patterns, and no people or clothes.
- **Decorative elements:** 3D blade form · mesh shell · size code · thin ring · cross mark

## Motion & interactivity

- **Born on screen:** yes
- **Transition physics:** The 3D form turns 360° in 16s; labels fade in over 300ms; panels slide by 8px.
- **Easing:** cubic-bezier(0.2, 0, 0, 1)
- **Duration (ms):** 300
- **Hover and active:** Hover adds a 1px silver line and moves a label by 4px; the active state inverts black and white.

## Code & token primer

Set `data-style="health-goth"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="health-goth"] {
  --color-bg: #0A0A0C;
  --color-surface: #1C1D22;
  --color-text: #F4F4F5;
  --color-muted: #9CA3AF;
  --color-primary: #C9D1D9;
  --color-accent: #B8F2E6;
  --color-border: #3A3D45;
  --font-sans: "Inter", "IBM Plex Mono", sans-serif;
  --font-display: "Michroma", "Syncopate", sans-serif;
  --border-radius: 0px;
  --border-width: 1px;
  --shadow-elevation: none;
  --backdrop-filter: none;
  --space-unit: 8px;
  --ease: cubic-bezier(0.2, 0, 0, 1);
  --duration: 300ms;
  --type-ratio: 1.414;
  --size-small: 11.32px;
  --size-h3: 31.99px;
  --size-h2: 45.23px;
  --size-h1: 63.96px;
  --color-on-bg: #F4F4F5;
  --color-on-surface: #F4F4F5;
  --color-on-primary: #0A0A0C;
  --color-on-accent: #0A0A0C;
  --color-muted-on-bg: #9CA3AF;
  --color-muted-on-surface: #9CA3AF;
  --color-link: #B8F2E6;
  --color-link-on-surface: #B8F2E6;
  --display-weight: 300;
  --subhead-weight: 300;
  --body-weight: 400;
  --strong-weight: 700;
  --label-weight: 400;
  --display-tracking: 0.2em;
  --display-leading: 1.1;
  --display-case: uppercase;
  --body-leading: 1.6;
  --body-size: 16px;
  --icon-stroke: 1.5;
  --ground: radial-gradient(circle at 88% 18%, var(--color-accent) 0 2.4vmin, transparent calc(2.4vmin + 1px)),
    radial-gradient(circle, color-mix(in oklab, var(--color-on-bg) 26%, transparent) 30%, transparent 34%) 82% 62% / 2.2vmin 2.2vmin,
    linear-gradient(90deg, var(--color-bg) 0 60%, transparent 60%),
    linear-gradient(to bottom, var(--color-bg) 0 36%, transparent 36% 92%, var(--color-bg) 92%),
    var(--color-bg);
}
```

Tailwind patterns:

| Element | Classes |
|---|---|
| page | `bg-[#0A0A0C] text-[#F4F4F5] font-sans antialiased px-6 md:px-12` |
| heading | `text-3xl md:text-6xl font-light uppercase tracking-[0.2em] leading-[1.1]` |
| body | `text-base leading-[1.6] max-w-prose` |
| section | `border border-[#3A3D45] bg-[#1C1D22]` |
| button | `rounded-sm border border-[#C9D1D9] bg-[#C9D1D9] px-6 py-3 text-xs font-bold uppercase tracking-[0.12em] text-[#0A0A0C] transition-colors duration-300 hover:bg-transparent hover:text-[#C9D1D9]` |
| label | `text-xs uppercase tracking-widest` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** outline, stroke 1.5 on a 24px field, square caps, miter joins, container: none. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Carbon (Regular) by IBM, licence Apache 2.0. Reason: A sharp, grid-based enterprise icon set suits the cold, technical, sport-label look. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 300, tracking 0.2em, leading 1.1, case: uppercase.
- **Weights:** display 300, subhead 300, body 400, bold in text 700, labels and buttons 400. The style uses 3 weights (300, 400, 700) and no other. The display is 100 lighter than the body, so size carries the hierarchy. The accent is case and tracking: an upper-case label is the accent, so the weights stay few.
- **Body type:** 16px, leading 1.6.
- **Page:** hero stacked, center aligned, airy density, accent tilt 0°.
- **Ground:** grille. Health goth sits on a black field with a fine grille, like a gym floor or a ventilation panel. Put the class `ground` on the first screen of the page; it takes `--ground`, a stack of gradients built from the colour tokens. The ground can run behind the copy, so put the class `ground-copy` on each text block of that screen: the block gets `--color-bg` and a soft edge. Keep the rest of the page on `--color-bg`.
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

### Mesh and blade 3D motif (motif)

A 3D render of one blade, mesh shell or ring in black, chrome or matte rubber. The frame has no person and no clothes. Origin: internet, online, 2013.

- Model one form with sharp edges or a mesh skin.
- Give it a black or chrome material with one cold rim light.
- Place it at 40% to 60% of the frame on a black ground.
- Add one line of small capital text and no other object.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **Facebook** (platform, web, 2004–now), gathered the style. A social network. Small image groups on it started Health Goth in 2013.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Base colour (`base_colour`) | #C9D1D9 | #C9D1D9, #F4F4F5, #B8F2E6 | --color-primary, --color-on-primary, --color-link-on-surface |
| Accent colour (`accent_colour`) | #B8F2E6 | #B8F2E6, #C9D1D9 | --color-accent, --color-on-accent, --color-link |
| Corner radius (`corner_radius`) | 0px | 0–4 px | --border-radius |
| Grid step (`grid_step`) | 8px | 4–8 px | --space-unit, --grid-gutter |
| Type scale ratio (`type_scale_ratio`) | 1.414 | 1.25–1.618 | --type-ratio, --size-small, --size-h3, --size-h2, --size-h1 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **colder**: move toward [`cybercore-web`](../cybercore-web/SKILL.md) (Cybercore Web). Add an acid-green accent, HUD frames and data labels; keep the black ground.
- If the user asks for **softer**: move toward [`ethereal-web`](../ethereal-web/SKILL.md) (Ethereal Web). Replace the black with a pale ground, add a soft blur and remove the labels.
- If the user asks for **more retro**: move toward [`y2k-aesthetic`](../y2k-aesthetic/SKILL.md) (Y2K Aesthetic). Add chrome type, silver gradients and pixel icons.

- **Came from (go here for a more orthodox version):** [`vaporwave`](../vaporwave/SKILL.md)
- **Rejects (the opposite pole; do not blend):** [`frutiger-aero`](../frutiger-aero/SKILL.md)
- **Mixes well with:** [`y2k-aesthetic`](../y2k-aesthetic/SKILL.md)
- **Kin in another domain:** [`gorpcore`](../gorpcore/SKILL.md)
- **Nearest by vector profile:** [`material-design`](../material-design/SKILL.md), [`flash-intro-site`](../flash-intro-site/SKILL.md), [`liquid-glass-ui`](../liquid-glass-ui/SKILL.md)

## Emotional target

The viewer feels cold, fit and focused, in a calm, controlled way.

**Keywords:** cold, clean, athletic, dark, technical, minimal · **Brand archetypes:** ruler, explorer, outlaw

## Sources

- [Wikipedia, Health goth](https://en.wikipedia.org/wiki/Health_goth)
- [Know Your Meme, Health Goth](https://knowyourmeme.com/memes/subcultures/health-goth)

---

Generated from [`data/internet/styles/health-goth.json`](../../data/internet/styles/health-goth.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
