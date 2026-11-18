---
name: punk-zine
description: "Apply the Punk Zine style (1976–1986) when generating UI or graphic layouts. Load when the user asks for: punk, zine, xerox, cut and paste, ransom note, diy."
domain: design
era: postmodern-early-digital
triggers:
  - "punk"
  - "zine"
  - "xerox"
  - "cut and paste"
  - "ransom note"
  - "diy"
  - "photocopy"
  - "70s punk poster"
  - "gig flyer"
vector_profile:
  ornamentation: 4
  dimensionality: 1
  grid_rigidity: 1
  skeuomorphic_realism: 2
  typographic_expressiveness: 5
---

# Punk Zine

> Anyone can publish: make the page with scissors, glue and a copier, and show the seams on purpose.

Photocopied black and white, cut-and-paste letters, typewriter text, tape and hand scrawl. It came from the punk scenes of London and New York and shows that anyone can make a page.

**Period:** 1976–1986 · **Era:** Postmodern & Early Digital · **Domain:** Graphic & UI Design · **Also called:** Cut-and-paste zine, Xerox style, Ransom-note style

## When to load this skill

Load it when the user asks for: "punk", "zine", "xerox", "cut and paste", "ransom note", "diy", "photocopy", "70s punk poster", "gig flyer".

Good for: music and gig sites, independent publishers, protest and activist pages, fashion and streetwear, student and art-school projects.

Do not use it when:
- The brand needs trust, order or a corporate tone.
- The audience needs fast, accessible reading of long text.
- The product handles payments or health data.

## System directives

When generating UI or graphic layouts in Punk Zine, you MUST:

1. Set the page in black on off-white (#F1EEE4) with one spot colour (fluorescent pink #FF2E88 or yellow) on less than 10% of the surface.
2. Mix 3 to 5 letter styles in a headline, each letter cut as a block with a 2px to 4px offset and a 1° to 6° tilt.
3. Set body text in a typewriter face at 15px to 16px with uneven word spacing; underline or strike through words by hand.
4. Add strips of tape (80px to 160px long, 20% opacity grey) at the corners of images and boxes.
5. Photocopy every image: greyscale, contrast 150% to 200%, a visible grain at 10% to 20%.
6. Rotate boxes and images by -4° to 4° and overlap them by 8px to 40px.
7. Add hand-drawn marks (arrows, X, scribbles) in marker with a 3px to 5px stroke.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Clean alignment to a grid.
- **NEVER:** Glossy gradients and soft shadows.
- **NEVER:** Perfect, uniform type in one face.
- **NEVER:** Rounded UI components.
- **NEVER:** Smooth vector illustration.
- **NEVER:** More than one spot colour.
- **NEVER:** Corporate stock photography.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■■■□` 4/5 | pure minimal | maximalist |
| Dimensionality | `■□□□□` 1/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■□□□□` 1/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■■□□□` 2/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■■■■■` 5/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** No strict grid: a loose two-column base of 8px units; blocks are pasted at an angle and overlap by 8px to 40px.
- **Whitespace ratio:** 5% to 15% of the surface stays empty; the spacing scale is 4, 12, 24 and 48px and is broken on purpose.
- **Alignment rules:** Flush left with a ragged edge; blocks tilt by -4° to 4°; headlines may run off the edge.
- **Container geometry:** Rectangles cut with scissors: a 0px radius, a 2px black border or no border, and a torn edge on images.

## Typography

- **Classifications:** typewriter · cut-out display · handwritten
- **Tracking:** Display takes -0.02em to +0.04em, varied by word; body stays at 0.
- **Leading:** Display 1.0; body 1.4.
- **Hierarchy rules:** Use two weights for body: regular (400) and bold (700). · Use sizes 15, 24, 48 and 96px; mix them within one headline. · Set headlines in upper case, in mixed letter styles. · Mark emphasis by hand-drawn underline in the spot colour.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Special Elite | Courier Prime | A typewriter display with a plain typewriter text face. |
| Rubik Glitch | Courier Prime | A broken display face for single words. |
| Permanent Marker | Courier Prime | A marker-hand for notes and arrows. |

## Colour & lighting

- **Palette structure:** Black and off-white with one fluorescent spot colour.
- **Contrast rules:** Toner on newsprint holds 16:1; pink marks and large type only, not body text.
- **Surface treatment:** Flat photocopy: black ink, a paper grain at 8% opacity and a light edge-darkening on photos.
- **Light and shadow:** None; the page is a flat copy; depth comes from tape, overlap and torn edges.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Newsprint | `#F1EEE4` | background |
| Toner | `#111111` | text |
| Hot Pink | `#FF2E88` | spot colour |
| Copier Grey | `#BDBAB0` | tape and shadows |
| Highlighter | `#F5F000` | alternate spot colour |

## Materiality & texture

- **Surface simulation:** Photocopied paper, masking tape and marker pen.
- **Border rules:** A 2px black line, drawn unevenly; boxes may have a dashed or torn edge.
- **Blur and elevation:** No blur. Shadow offsets are 3px 3px 0 in black at most; no elevation.

## Ornamentation & iconography

- **Iconography:** Hand-drawn pictograms with a 3px marker stroke, round caps and uneven lines; arrows and X marks.
- **Illustration:** Photocopied photographs and hand-drawn doodles; ransom-note letters cut from magazines.
- **Decorative elements:** tape strips · ransom-note letters · torn edge · marker arrow · photocopy grain

## Motion & interactivity

- **Born on screen:** no — the values here translate a print style for screen
- **Transition physics:** Translation for screen: stepped, jerky moves in 2 to 3 frames; elements jump between tilt angles with no easing.
- **Easing:** steps(3)
- **Duration (ms):** 150
- **Hover and active:** Hover tilts the element by 2° and swaps ink and paper; active state adds a spot-colour highlight.

## Code & token primer

Set `data-style="punk-zine"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="punk-zine"] {
  --color-bg: #F1EEE4;
  --color-surface: #FFFFFF;
  --color-text: #111111;
  --color-muted: #4D4B45;
  --color-primary: #111111;
  --color-accent: #FF2E88;
  --color-border: #111111;
  --font-sans: "Courier Prime", "Courier New", monospace;
  --font-display: "Special Elite", "Courier Prime", monospace;
  --border-radius: 0px;
  --border-width: 2px;
  --shadow-elevation: 3px 3px 0 #111111;
  --backdrop-filter: none;
  --space-unit: 6px;
  --ease: steps(3);
  --duration: 150ms;
  --type-ratio: 1.618;
  --size-small: 9.89px;
  --size-h3: 41.89px;
  --size-h2: 67.77px;
  --size-h1: 109.66px;
  --color-on-bg: #111111;
  --color-on-surface: #111111;
  --color-on-primary: #F1EEE4;
  --color-on-accent: #111111;
  --color-muted-on-bg: #4D4B45;
  --color-muted-on-surface: #4D4B45;
  --color-link: #111111;
  --color-link-on-surface: #111111;
  --display-weight: 400;
  --subhead-weight: 400;
  --body-weight: 400;
  --strong-weight: 700;
  --label-weight: 700;
  --display-tracking: -0.02em;
  --display-leading: 1;
  --display-case: uppercase;
  --body-leading: 1.4;
  --body-size: 16px;
  --icon-stroke: 3;
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
| page | `bg-[#F1EEE4] text-[#111111] font-mono antialiased px-4 md:px-10` |
| heading | `text-6xl md:text-8xl uppercase leading-none -rotate-2 tracking-[-0.02em]` |
| body | `text-[15px] leading-[1.4] max-w-prose` |
| section | `border-2 border-[#111111] bg-white p-4 rotate-1 shadow-[3px_3px_0_#111111]` |
| button | `rounded-none border-2 border-[#111111] bg-[#FF2E88] px-5 py-2 text-base font-bold uppercase text-[#111111] shadow-[3px_3px_0_#111111] transition-transform duration-150 hover:rotate-2` |
| label | `text-xs font-bold uppercase tracking-[0.04em]` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** outline, stroke 3 on a 24px field, round caps, round joins, container: none. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Pepicons (Print) by CyCraft, licence CC BY 4.0. Reason: A rough, marker-like line with uneven form that reads as a hand drawing. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 400, tracking -0.02em, leading 1, case: uppercase.
- **Weights:** display 400, subhead 400, body 400, bold in text 700, labels and buttons 700. The style uses 2 weights (400, 700) and no other. The display has the weight of the body, so size and face carry the hierarchy. The accent is case and tracking: an upper-case label is the accent, so the weights stay few.
- **Body type:** 16px, leading 1.4.
- **Page:** hero poster, left aligned, compact density, accent tilt 3°.
- **Ground:** xerox. A zine is a photocopy: heavy toner grain, black blocks and a strip of tape. Put the class `ground` on the first screen of the page; it takes `--ground`, a stack of gradients built from the colour tokens. The ground can run behind the copy, so put the class `ground-copy` on each text block of that screen: the block gets `--color-bg` and a soft edge. Keep the rest of the page on `--color-bg`.
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

### Halftone (process)

Tone printed as dots of different size or spacing; at a distance the dots merge into grey or colour. Origin: graphic & ui design, New York, 1879.

- Set the screen at 10 to 30 lines per cm for a print grain, or enlarge the dots to 4 to 8mm for a Pop effect.
- Turn each colour screen to its own angle: cyan 15°, magenta 75°, yellow 0°, black 45°.

### Photomontage (montage)

Fragments of photographs, cut and joined on one sheet, so that the joins make a statement that no single photograph makes. Origin: graphic & ui design, Berlin, 1918.

- Join 3 to 12 photographic fragments on one ground and keep the cut edges hard and visible.
- Vary the scale of the fragments by 4:1 or more, so that the joins read as a claim and not as a scene.
- Set type as one more fragment, turned 0° to 30°, in the same stack of layers.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Base colour (`base_colour`) | #111111 | #111111, #FF2E88 | --color-primary, --color-on-primary, --color-link-on-surface |
| Accent colour (`accent_colour`) | #FF2E88 | #FF2E88, #111111 | --color-accent, --color-on-accent, --color-link |
| Corner radius (`corner_radius`) | 0px | 0–0 px | --border-radius |
| Grid step (`grid_step`) | 6px | 3–9 px | --space-unit, --grid-gutter |
| Type scale ratio (`type_scale_ratio`) | 1.618 | 1.5–1.618 | --type-ratio, --size-small, --size-h3, --size-h2, --size-h1 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **cleaner**: move toward [`swiss-international`](../swiss-international/SKILL.md) (Swiss International Style). Straighten the type onto a 12-column grid and drop the tape and tilt; keep black and white.
- If the user asks for **more digital**: move toward [`grunge-editorial`](../grunge-editorial/SKILL.md) (Grunge Editorial). Add layered textures and distressed type; keep the black and white base.
- If the user asks for **more bold**: move toward [`neo-brutalism-ui`](../neo-brutalism-ui/SKILL.md) (Neo-Brutalism UI). Replace the tape with 3px solid borders and hard shadows; keep the loud colour.

- **Led to (go here for a newer version):** [`scrapbook-ui`](../scrapbook-ui/SKILL.md)
- **Rejects (the opposite pole; do not blend):** [`mid-century-modern`](../mid-century-modern/SKILL.md), [`swiss-international`](../swiss-international/SKILL.md)
- **Mixes well with:** [`grunge-editorial`](../grunge-editorial/SKILL.md), [`victorian-web`](../victorian-web/SKILL.md)
- **Kin in another domain:** [`blackletter`](../blackletter/SKILL.md)
- **Nearest by vector profile:** [`anti-design`](../anti-design/SKILL.md), [`grunge-editorial`](../grunge-editorial/SKILL.md), [`psychedelic`](../psychedelic/SKILL.md)

## Emotional target

The viewer feels raw defiance, urgency and DIY freedom.

**Keywords:** raw, defiant, DIY, urgent, rough, anti-polish · **Brand archetypes:** outlaw, creator

## Sources

- Teal Triggs, Fanzines (Thames & Hudson, 2010)
- Jon Savage, England's Dreaming (Faber, 1991)

---

Generated from [`data/design/styles/punk-zine.json`](../../data/design/styles/punk-zine.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
