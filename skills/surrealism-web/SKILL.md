---
name: surrealism-web
description: "Apply the Surrealism Web style (2016–now) when generating UI or graphic layouts. Load when the user asks for: surreal, surrealism, dream, impossible, floating, magritte."
domain: design
era: touchscreen
triggers:
  - "surreal"
  - "surrealism"
  - "dream"
  - "impossible"
  - "floating"
  - "magritte"
  - "odd"
  - "strange"
vector_profile:
  ornamentation: 3
  dimensionality: 4
  grid_rigidity: 2
  skeuomorphic_realism: 3
  typographic_expressiveness: 3
---

# Surrealism Web

> Put the impossible on a quiet page: strange images, clear controls.

Impossible scenes with plain, calm rendering: floating objects, odd scale, melting forms, clouds in rooms and shadows that disagree. Logic bends while the interface stays usable.

**Period:** 2016–now · **Era:** Touchscreen · **Domain:** Graphic & UI Design · **Also called:** Surreal web, Dream logic UI, Impossible scenes

## When to load this skill

Load it when the user asks for: "surreal", "surrealism", "dream", "impossible", "floating", "magritte", "odd", "strange".

Good for: creative studios and portfolios, music and art campaigns, editorial and magazine features, game and film launches, brands that tell a story.

Do not use it when:
- The page is a bank, a clinic or a tool where doubt costs trust.
- The content is a dense data tool.
- The audience needs a direct, literal message.

## System directives

When generating UI or graphic layouts in Surrealism Web, you MUST:

1. Build each hero from one impossible scene: an object at the wrong scale, a floating form or a landscape in a room.
2. Render with soft, even light, long shadows (a 25° to 45° angle) and calm, clean edges; the strange part is what is shown, not how.
3. Use a dream palette: a pale sky (#BFD8EA), a warm sand (#E9D3B4), a deep blue (#1B2A55) and one red or orange accent (#E4572E).
4. Break scale and place on purpose: a hand 2x larger than a house, a door in a field, an eye in a cloud.
5. Keep UI plain on top of the scene: a sans at 16px, a 4.5:1 text contrast and buttons of 44px height.
6. Let one element break the grid by 40px to 160px, and add 1 shadow that points the wrong way.
7. Move slowly and drift: objects float 8px to 20px up and down over 4s to 8s; page change fades in 600ms to 900ms.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Chaotic noise that hides text.
- **NEVER:** Horror and gore.
- **NEVER:** Many unrelated objects in one scene.
- **NEVER:** Flat corporate stock photos.
- **NEVER:** Strange UI that hides the main action.
- **NEVER:** Harsh neon colours.
- **NEVER:** Random distortion with no idea behind it.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■■□□` 3/5 | pure minimal | maximalist |
| Dimensionality | `■■■■□` 4/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■□□□` 2/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■■■□□` 3/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■■■□□` 3/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** A full-bleed scene with a quiet UI layer; 6 to 12 columns; text sits in clear sky or on a calm panel; blocks may drift off the grid.
- **Whitespace ratio:** 40% to 55% of the surface is open sky or empty field; gaps are 24px to 96px.
- **Alignment rules:** Centred or left-flush text over calm areas; objects placed with odd scale and an impossible horizon.
- **Container geometry:** Soft rounded panels of 16px to 24px; circles and arches; windows and doors as frames.

## Typography

- **Classifications:** humanist serif · geometric sans serif
- **Tracking:** Display takes -0.01em; body 0.
- **Leading:** Display 1.1; body 1.6.
- **Hierarchy rules:** Use weights 400 to 600 for display and 400 for body. · Use sizes 14, 17, 40 and 88px. · Set headlines in sentence case over calm areas of the scene. · Set captions in italic at 14px.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| DM Serif Display | DM Sans | A soft serif headline with a plain, calm sans. |
| Fraunces | Inter | A warm, odd serif with a neutral sans. |
| Syne | Inter | A wide, odd display with a quiet sans. |

## Colour & lighting

- **Palette structure:** Dream sky, warm sand and deep blue with one red accent.
- **Contrast rules:** Night on sky holds 12:1; white on vermilion holds 5.4:1; keep text out of busy parts of the scene.
- **Surface treatment:** Soft gradients from sky to sand; calm, matt rendering; a faint grain of 4% at most.
- **Light and shadow:** Soft light from one side; long, clean shadows that may disagree with the object.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Sky | `#DCEAF3` | background |
| Sand | `#F1E3CB` | surface |
| Night | `#14213F` | text |
| Dusk | `#4A5877` | secondary text |
| Vermilion | `#C2381A` | primary |
| Ink Blue | `#1B2A55` | accent |
| Horizon | `#B9C7D6` | border |

## Materiality & texture

- **Surface simulation:** Smooth, matt, painted-looking surfaces rendered with calm light.
- **Border rules:** A 1px line at 20% in blue or none; arches and windows as frames.
- **Blur and elevation:** A soft shadow of 0 24px 60px at 12% in blue; no blur on text.

## Ornamentation & iconography

- **Iconography:** Plain 1.5px outline icons; eyes, hands, keys, doors and clouds as small marks.
- **Illustration:** Rendered or painted scenes: floating rocks, giant fruit, doors in fields, clouds in rooms, melting clocks in the style of a painter's dream.
- **Decorative elements:** impossible scene · odd scale · long shadow · floating object

## Motion & interactivity

- **Born on screen:** yes
- **Transition physics:** Dreamlike: objects float and drift slowly; layers shift 8px to 24px with scroll; no snap or bounce.
- **Easing:** cubic-bezier(0.4, 0, 0.2, 1)
- **Duration (ms):** 900
- **Hover and active:** Hover lifts an object 6px and tilts it 2° in 400ms; active state settles in 200ms.

## Code & token primer

Set `data-style="surrealism-web"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="surrealism-web"] {
  --color-bg: #DCEAF3;
  --color-surface: #F1E3CB;
  --color-text: #14213F;
  --color-muted: #4A5877;
  --color-primary: #C2381A;
  --color-accent: #1B2A55;
  --color-border: #B9C7D6;
  --font-sans: "DM Sans", system-ui, sans-serif;
  --font-display: "DM Serif Display", Georgia, serif;
  --border-radius: 20px;
  --border-width: 1px;
  --shadow-elevation: 0 24px 60px rgba(27,42,85,0.12);
  --backdrop-filter: none;
  --space-unit: 8px;
  --ease: cubic-bezier(0.4, 0, 0.2, 1);
  --duration: 900ms;
  --color-on-bg: #14213F;
  --color-on-surface: #14213F;
  --color-on-primary: #FFFFFF;
  --color-on-accent: #DCEAF3;
  --color-muted-on-bg: #4A5877;
  --color-muted-on-surface: #4A5877;
  --color-link: #1B2A55;
  --color-link-on-surface: #1B2A55;
  --display-weight: 500;
  --subhead-weight: 500;
  --body-weight: 400;
  --strong-weight: 600;
  --label-weight: 500;
  --display-tracking: -0.01em;
  --display-leading: 1.1;
  --display-case: none;
  --body-leading: 1.6;
  --body-size: 16px;
  --icon-stroke: 1.5;
  --ground: radial-gradient(9vmin 5vmin at 78% 24%, rgba(255,255,255,.95) 98%, transparent),
    radial-gradient(7vmin 4.5vmin at 84% 21%, rgba(255,255,255,.95) 98%, transparent),
    radial-gradient(11vmin 4vmin at 72% 27%, rgba(255,255,255,.95) 98%, transparent),
    radial-gradient(6vmin 3.5vmin at 93% 58%, rgba(255,255,255,.85) 98%, transparent),
    radial-gradient(8vmin 3vmin at 88% 61%, rgba(255,255,255,.85) 98%, transparent),
    linear-gradient(to bottom, transparent 78%, color-mix(in oklab, var(--color-accent) 55%, transparent) 78% calc(78% + 2px), color-mix(in oklab, var(--color-primary) 18%, transparent) calc(78% + 2px)),
    linear-gradient(to bottom, color-mix(in oklab, var(--color-accent) 18%, transparent), transparent 78%),
    var(--color-bg);
}
```

Tailwind patterns:

| Element | Classes |
|---|---|
| page | `bg-[#DCEAF3] text-[#14213F] font-sans antialiased` |
| heading | `font-serif text-5xl md:text-7xl leading-[1.1] tracking-[-0.01em]` |
| body | `text-base leading-[1.6]` |
| section | `rounded-[20px] border border-[#B9C7D6] bg-[#F1E3CB] p-8 shadow-[0_24px_60px_rgba(27,42,85,0.12)]` |
| button | `rounded-full bg-[#C2381A] px-7 py-3 font-medium text-white transition-transform duration-300 hover:-translate-y-1` |
| label | `text-sm italic text-[#4A5877]` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** outline, stroke 1.5 on a 24px field, round caps, round joins, container: none. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Phosphor (Bold) by Phosphor Icons, licence MIT. Reason: A friendly outline family that stays plain over strange scenes. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 500, tracking -0.01em, leading 1.1, case: none.
- **Weights:** display 500, subhead 500, body 400, bold in text 600, labels and buttons 500. The style uses 3 weights (400, 500, 600) and no other. The display is 100 heavier than the body. The accent is size: a larger word is the accent, so the weights stay few.
- **Body type:** 16px, leading 1.6.
- **Page:** hero poster, center aligned, airy density, accent tilt 0°.
- **Ground:** sky. Surrealist painting puts calm clouds in a clear sky over a flat horizon. Put the class `ground` on the first screen of the page; it takes `--ground`, a stack of gradients built from the colour tokens. The ground can run behind the copy, so put the class `ground-copy` on each text block of that screen: the block gets `--color-bg` and a soft edge. Keep the rest of the page on `--color-bg`.
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

### Long shadow (motif)

A shadow far longer than its object, cast by a low sun, so that a still scene feels strange and charged. Origin: painting, Paris, 1914.

- Cast the shadow at a low angle: the shadow is 2 to 5 times the height of the object.
- Keep one light direction in the whole scene.
- Leave the shadow flat and dark, at 40% to 70% opacity.
- Show the shadow of something outside the frame, to hint at an unseen presence.

### Photomontage (montage)

Fragments of photographs, cut and joined on one sheet, so that the joins make a statement that no single photograph makes. Origin: graphic & ui design, Berlin, 1918.

- Join 3 to 12 photographic fragments on one ground and keep the cut edges hard and visible.
- Vary the scale of the fragments by 4:1 or more, so that the joins read as a claim and not as a scene.
- Set type as one more fragment, turned 0° to 30°, in the same stack of layers.

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **calmer**: move toward [`minimalism-web`](../minimalism-web/SKILL.md) (Minimalism Web). Keep one impossible object on a plain ground and remove the rest.
- If the user asks for **more colour**: move toward [`vaporwave`](../vaporwave/SKILL.md) (Vaporwave). Add pink and teal gradients and marble busts.
- If the user asks for **softer**: move toward [`ethereal-web`](../ethereal-web/SKILL.md) (Ethereal Web). Add pastel haze and light serifs.

- **Came from (go here for a more orthodox version):** [`vaporwave`](../vaporwave/SKILL.md)
- **Rejects (the opposite pole; do not blend):** [`flat-design`](../flat-design/SKILL.md)
- **Mixes well with:** [`ethereal-web`](../ethereal-web/SKILL.md), [`minimalism-web`](../minimalism-web/SKILL.md)
- **Kin in another domain:** [`airbrush-surrealism`](../airbrush-surrealism/SKILL.md), [`surrealism-painting`](../surrealism-painting/SKILL.md)
- **Nearest by vector profile:** [`claymorphism`](../claymorphism/SKILL.md), [`blob-world`](../blob-world/SKILL.md), [`frutiger-aero`](../frutiger-aero/SKILL.md)

## Emotional target

The viewer feels wonder and quiet unease, then curiosity.

**Keywords:** dreamlike, curious, strange, calm, poetic, playful · **Brand archetypes:** magician, creator, explorer

## Sources

- Example: René Magritte, The Son of Man (1964)
- Example: Surreal 3D portfolio sites on Awwwards (2017–2024)
- Example: Album and film campaign sites with impossible scenes (2016–2024)

---

Generated from [`data/design/styles/surrealism-web.json`](../../data/design/styles/surrealism-web.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
