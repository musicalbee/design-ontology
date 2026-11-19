---
name: cassette-futurism
description: "Apply the Cassette Futurism style (1976–1989) when generating UI or graphic layouts. Load when the user asks for: cassette futurism, retro futurism, crt terminal, amber terminal, 1980s hardware, tape deck."
domain: design
era: postmodern-early-digital
triggers:
  - "cassette futurism"
  - "retro futurism"
  - "crt terminal"
  - "amber terminal"
  - "1980s hardware"
  - "tape deck"
  - "syd mead"
  - "used future"
  - "control panel"
vector_profile:
  ornamentation: 3
  dimensionality: 4
  grid_rigidity: 4
  skeuomorphic_realism: 4
  typographic_expressiveness: 3
---

# Cassette Futurism

> The future is a machine with visible switches: every function has a physical control, a label and a status light, and the casing shows the wear of use.

Bulky hardware from a future imagined on tape: CRT monitors, membrane keys, toggle switches and beige casings, with amber or green phosphor text. It draws on Syd Mead's industrial futures and Japanese bubble-era electronics. The look is functional, worn and a little cramped.

**Period:** 1976–1989 · **Era:** Postmodern & Early Digital · **Domain:** Graphic & UI Design · **Also called:** Retro-futurism of the analogue age, Used future, Cassette punk

## When to load this skill

Load it when the user asks for: "cassette futurism", "retro futurism", "crt terminal", "amber terminal", "1980s hardware", "tape deck", "syd mead", "used future", "control panel".

Good for: science-fiction game and film sites, hardware and synthesiser product pages, developer tools with a terminal character, audio and music gear, interactive fiction.

Do not use it when:
- The audience needs a calm, consumer-grade interface.
- The page has long reading text on a light ground.
- The product is touch-first and needs large soft targets.

## System directives

When generating UI or graphic layouts in Cassette Futurism, you MUST:

1. Set text in phosphor amber (#FFB000) or green (#33FF66) on a near-black ground (#14130F) with contrast of 9:1 or more.
2. Build panels as casings in beige (#D8D0B8) or grey (#9A9A8E) with a 4px radius, a 2px dark border and a 1px light top edge.
3. Label each control in upper-case mono at 12px with +0.08em tracking, and place the label above the control.
4. Group controls in bays on a 12-column grid with 16px gutters; separate bays with a 2px groove.
5. Add a status light of 8px, a toggle switch, a segment display or a cassette window to each major panel.
6. Frame the main screen as a CRT: 8% corner radius, a 1px inner glow and scanlines of 2px at 8% opacity.
7. Add print marks to casings: part numbers, arrows, and one hazard stripe of 8px in orange (#E8662B) or yellow.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Rounded pill buttons with soft shadows.
- **NEVER:** Pastel gradients and glass blur.
- **NEVER:** Hidden controls behind icons with no label.
- **NEVER:** Clean white surfaces with no wear.
- **NEVER:** Proportional sans-serif body text.
- **NEVER:** Sleek, seamless hardware with no visible switches.
- **NEVER:** Neon pink and cyan glow.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■■□□` 3/5 | pure minimal | maximalist |
| Dimensionality | `■■■■□` 4/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■■■□` 4/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■■■■□` 4/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■■■□□` 3/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** A 12-column grid of equipment bays with 16px gutters; each bay is a panel with a 2px groove between it and the next.
- **Whitespace ratio:** 10% to 20% of the surface stays empty; the spacing scale is 4, 8, 16 and 24px.
- **Alignment rules:** Flush-left labels above controls; numeric readouts right-aligned; panels align to a common baseline of 8px.
- **Container geometry:** Casings with a 4px radius, a 2px border and a 1px highlight on the top edge; screens with an 8% radius; round 8px status lights.

## Typography

- **Classifications:** technical sans · monospace
- **Tracking:** Display +0.06em; labels +0.08em; body 0em.
- **Leading:** Display 1.1; body 1.5.
- **Hierarchy rules:**
  - Use weights 400, 600 and 700 only.
  - Use sizes 12, 14, 16, 32 and 56px.
  - Set display and labels in upper case.
  - Put readouts and data in mono; put panel titles in the display face.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Chakra Petch | IBM Plex Mono | An angular technical display face with a plain mono text face. |
| Orbitron | Share Tech Mono | A wide display face for panel titles with a mono readout face. |
| Rajdhani | VT323 | A narrow label face with a pixel terminal face for screens. |

## Colour & lighting

- **Palette structure:** A near-black screen ground with two phosphor colours, on beige and grey casings with one orange warning mark.
- **Contrast rules:** Phosphor text on tube black holds 9:1 or more; text on beige casings uses tube black at 12:1.
- **Surface treatment:** Matte, slightly speckled casings (noise at 4% opacity); flat screen grounds with scanlines at 8% opacity.
- **Light and shadow:** A 1px light top edge and a 2px dark bottom edge give each casing its bulk; screens carry a 6px to 12px phosphor glow.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Tube Black | `#14130F` | background |
| Casing Beige | `#D8D0B8` | casing surface |
| Amber Phosphor | `#FFB000` | primary |
| Green Phosphor | `#33FF66` | accent |
| Warning Orange | `#E8662B` | highlight |
| Panel Grey | `#9A9A8E` | second surface |

## Materiality & texture

- **Surface simulation:** Moulded plastic casings, membrane keys, rubber-capped toggles and glass CRT screens.
- **Border rules:** A 2px dark border on casings; a 2px groove between bays; a 1px inner border on screens.
- **Blur and elevation:** No backdrop blur; keys rise by 2px to 4px with a hard shadow; the glow on text is 6px to 12px.

## Ornamentation & iconography

- **Iconography:** Heavy solid glyphs at 24px on square tiles, in the style of panel symbols: arrows, power, record, eject.
- **Illustration:** Industrial vehicles, control rooms and orbital stations drawn with airbrush gradients; wireframe grids in green or amber.
- **Decorative elements:** status light · toggle switch · segment display · cassette window · hazard stripe · part-number label

## Motion & interactivity

- **Born on screen:** yes
- **Transition physics:** Mechanical and stepped: panels switch on in 3 to 5 steps; text types in at 40ms per character; a CRT flicker of 2% runs every 8s.
- **Easing:** steps(4)
- **Duration (ms):** 240
- **Hover and active:** Hover lights the status light and raises the key by 2px; active presses the key down by 2px and shows the phosphor colour.

## Code & token primer

Set `data-style="cassette-futurism"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="cassette-futurism"] {
  --color-bg: #14130F;
  --color-surface: #2A2822;
  --color-text: #F3E9C8;
  --color-muted: #B8B09A;
  --color-primary: #FFB000;
  --color-accent: #33FF66;
  --color-border: #9A9A8E;
  --font-sans: "IBM Plex Mono", "Share Tech Mono", monospace;
  --font-display: "Chakra Petch", "Orbitron", sans-serif;
  --border-radius: 4px;
  --border-width: 2px;
  --shadow-elevation: 0 2px 0 #000000, 0 0 12px rgba(255, 176, 0, 0.25);
  --backdrop-filter: none;
  --space-unit: 8px;
  --ease: steps(4);
  --duration: 240ms;
  --type-ratio: 1.333;
  --size-small: 12px;
  --size-h3: 28.43px;
  --size-h2: 37.9px;
  --size-h1: 50.52px;
  --color-on-bg: #F3E9C8;
  --color-on-surface: #F3E9C8;
  --color-on-primary: #14130F;
  --color-on-accent: #14130F;
  --color-muted-on-bg: #B8B09A;
  --color-muted-on-surface: #B8B09A;
  --color-link: #33FF66;
  --color-link-on-surface: #33FF66;
  --display-weight: 700;
  --subhead-weight: 600;
  --body-weight: 400;
  --strong-weight: 600;
  --label-weight: 600;
  --display-tracking: 0.06em;
  --display-leading: 1.1;
  --display-case: uppercase;
  --body-leading: 1.5;
  --body-size: 16px;
  --icon-stroke: 2;
  --ground: repeating-linear-gradient(0deg, color-mix(in oklab, var(--color-primary) 7%, transparent) 0 1px, transparent 1px 3px),
    radial-gradient(120% 90% at 50% 50%, transparent 55%, rgba(0,0,0,.55)),
    radial-gradient(50% 55% at 72% 40%, color-mix(in oklab, var(--color-primary) 16%, transparent), transparent 70%),
    radial-gradient(35% 40% at 20% 85%, color-mix(in oklab, var(--color-accent) 10%, transparent), transparent 70%),
    var(--color-bg);
}
```

Tailwind patterns:

| Element | Classes |
|---|---|
| page | `bg-[#14130F] text-[#F3E9C8] font-mono antialiased px-4 md:px-10` |
| heading | `font-bold uppercase tracking-[0.06em] leading-[1.1] text-4xl md:text-6xl text-[#FFB000]` |
| body | `text-base leading-[1.5] max-w-prose` |
| section | `rounded border-2 border-[#9A9A8E] bg-[#2A2822] shadow-[0_2px_0_#000000]` |
| button | `rounded border-2 border-[#9A9A8E] bg-[#FFB000] px-5 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-[#14130F] transition-transform duration-[240ms] active:translate-y-0.5` |
| label | `text-xs font-semibold uppercase tracking-[0.08em] text-[#33FF66]` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** solid, stroke 2 on a 24px field, butt caps, miter joins, container: square. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Pixelarticons (Regular) by Gerrit Halfmann, licence MIT. Reason: Square, blocky glyphs match the panel symbols and the pixel screens of the period. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 700, tracking 0.06em, leading 1.1, case: uppercase.
- **Weights:** display 700, subhead 600, body 400, bold in text 600, labels and buttons 600. The style uses 3 weights (400, 600, 700) and no other. The display is 300 heavier than the body. The accent is colour: one coloured word or field is the accent, so the weights stay quiet.
- **Body type:** 16px, leading 1.5.
- **Page:** hero split, left aligned, compact density, accent tilt 0°.
- **Ground:** scanlines. Cassette futurism lives on a phosphor screen with visible scan lines and a dark bezel. Put the class `ground` on the first screen of the page; it takes `--ground`, a stack of gradients built from the colour tokens. The ground can run behind the copy, so put the class `ground-copy` on each text block of that screen: the block gets `--color-bg` and a soft edge. Keep the rest of the page on `--color-bg`.
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

### Perspective grid (process)

Lines that run to one vanishing point on a horizon, so that a flat surface reads as a floor in deep space. Origin: painting, Florence, c. 1415.

- Put the horizon at 50% to 65% of the height and draw 12 to 24 lines to one vanishing point.
- Space the cross lines so that each gap is about 0.8 of the gap in front of it.

## Media

The salons, schools, magazines, publishers, galleries and platforms that carried this style.

- **Heavy Metal** (magazine, New York, 1977–now), published the style. A magazine of science fiction and fantasy comics. It printed airbrushed covers and smooth, dream-like painted worlds.
- **Omni** (magazine, New York, 1978–1997), published the style. A magazine of science and science fiction. Its painted covers showed hardware futures, chrome and airbrushed worlds.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Base colour (`base_colour`) | #FFB000 | #FFB000, #33FF66, #F3E9C8 | --color-primary, --color-on-primary, --color-link-on-surface |
| Accent colour (`accent_colour`) | #33FF66 | #33FF66, #FFB000 | --color-accent, --color-on-accent, --color-link |
| Corner radius (`corner_radius`) | 4px | 2–6 px | --border-radius |
| Grid step (`grid_step`) | 8px | 4–12 px | --space-unit, --grid-gutter |
| Type scale ratio (`type_scale_ratio`) | 1.333 | 1.25–1.414 | --type-ratio, --size-small, --size-h3, --size-h2, --size-h1 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **cleaner**: move toward [`rams-functionalism-ui`](../rams-functionalism-ui/SKILL.md) (Rams Functionalism (UI)). Remove the screen glow, hazard stripes and part numbers; keep the grid, the labels and one accent colour.
- If the user asks for **more neon**: move toward [`vaporwave`](../vaporwave/SKILL.md) (Vaporwave). Replace amber and green with pink and cyan on deep violet; keep the windows and add a perspective grid.
- If the user asks for **more tactile**: move toward [`skeuomorphism`](../skeuomorphism/SKILL.md) (Skeuomorphism). Add leather and brushed-metal textures and 8px to 16px soft shadows; keep the labelled controls.

- **Came from (go here for a more orthodox version):** [`rams-functionalism-ui`](../rams-functionalism-ui/SKILL.md)
- **Mixes well with:** [`cyberdelia`](../cyberdelia/SKILL.md), [`skeuomorphism`](../skeuomorphism/SKILL.md)
- **Kin in another domain:** [`high-tech-architecture`](../high-tech-architecture/SKILL.md), [`vector-display-arcade`](../vector-display-arcade/SKILL.md)
- **Nearest by vector profile:** [`apple-aqua`](../apple-aqua/SKILL.md), [`frutiger-aero`](../frutiger-aero/SKILL.md), [`skeuomorphism`](../skeuomorphism/SKILL.md)

## Emotional target

The viewer feels the weight of a working machine and a future that smells of warm plastic.

**Keywords:** analogue, industrial, tactile, worn, technical, nostalgic · **Brand archetypes:** explorer, creator, sage

## Sources

- [CARI, Consumer Aesthetics Research Institute: Cassette Futurism](https://cari.institute/aesthetics/cassette-futurism)
- Syd Mead, Sentinel (Dragon's Dream, 1979)

---

Generated from [`data/design/styles/cassette-futurism.json`](../../data/design/styles/cassette-futurism.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
