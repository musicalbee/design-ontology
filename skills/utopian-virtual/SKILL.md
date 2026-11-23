---
name: utopian-virtual
description: "Apply the Utopian virtual style (2012–) when generating web pages, apps, memes, short video frames, forum and chat screens, and other images of internet culture. Load when the user asks for: utopian virtual, early 3d, glossy 3d, 2000s tech gloss, virtual life, aqua render."
domain: internet
era: feed-mobile
triggers:
  - "utopian virtual"
  - "early 3d"
  - "glossy 3d"
  - "2000s tech gloss"
  - "virtual life"
  - "aqua render"
  - "y2k 3d"
vector_profile:
  ornamentation: 3
  dimensionality: 5
  grid_rigidity: 3
  skeuomorphic_realism: 4
  typographic_expressiveness: 2
---

# Utopian virtual

> A virtual life with no flaws: clean, bright and synthetic, a soundtrack and a picture of a computer world that is too perfect to be real.

Crisp, unreal early 3D graphics: glossy blue spheres, clean water, white interfaces and smooth sky gradients. Musician James Ferraro coined the term in 2011. It later came to be tied to the Frutiger Aero look.

**Period:** 2012– · **Era:** The feed and the phone · **Domain:** Internet

## When to load this skill

Load it when the user asks for: "utopian virtual", "early 3d", "glossy 3d", "2000s tech gloss", "virtual life", "aqua render", "y2k 3d".

Good for: music and art releases about digital life, retro tech landing pages, game and 3D portfolio sites, fashion and product drops with a clean tone.

Do not use it when:
- The page needs a grainy, human or hand-made tone.
- The audience wants a dark, moody tone.
- The page must load fast on weak devices with large renders.

## System directives

When generating web pages, apps, memes, short video frames, forum and chat screens, and other images of internet culture in Utopian virtual, you MUST:

1. Use one glossy 3D render as the focal image, such as a sphere, a drop or a glass button, at 40% to 60% of the viewport.
2. Set a vertical sky gradient from deep blue (#1E6FD9) to pale aqua (#CFF4FF) behind the render.
3. Give each surface a top highlight of 40% white and a soft bottom reflection of 15% white.
4. Use white panels with a 12px radius and a 1px pale-blue edge for content, with dark navy text.
5. Set headlines in a clean humanist sans-serif at normal tracking, in mixed case.
6. Keep body text at 17px with a contrast of 7:1 or more on white panels.
7. Add one small touch of fresh green (#7ED957) or lime to a single button or label.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Grain, dirt and film wear.
- **NEVER:** Dark purple grounds and neon glow.
- **NEVER:** Faded, lonely interiors.
- **NEVER:** Pixel icons and bevelled windows.
- **NEVER:** Heavy outlines and flat cel colours.
- **NEVER:** Irony in the copy that shows through a harsh layout.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■■□□` 3/5 | pure minimal | maximalist |
| Dimensionality | `■■■■■` 5/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■■□□` 3/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■■■■□` 4/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■■□□□` 2/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** A 12-column grid with 24px gutters; the render sits across columns 1 to 6 and a white panel sits across columns 7 to 12.
- **Whitespace ratio:** 30% to 40% of the surface stays empty; the spacing scale is 8, 16, 24 and 48px.
- **Alignment rules:** Flush-left text with the render floating at the right; objects cast a faint reflection below them.
- **Container geometry:** Panels with a 12px radius and a 1px pale edge; circles for buttons and spheres; capsules for tags.

## Typography

- **Classifications:** humanist sans · grotesque sans
- **Tracking:** Display takes 0em; labels take 0.08em; body stays at 0em.
- **Leading:** Display 1.1; body 1.6.
- **Hierarchy rules:**
  - Use two weights: regular (400) and semibold (600).
  - Use sizes 14, 17, 34 and 64px.
  - Set headlines in mixed case.
  - Put the most important word of a heading in the primary blue.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Nunito Sans | Open Sans | A friendly humanist pair that echoes early 2000s interfaces. |
| Figtree | Source Sans 3 | A clean modern display face with a neutral text face. |
| Lexend | Public Sans | A wide, open display face with a plain text face. |

## Colour & lighting

- **Palette structure:** Sky blue and aqua with white, one fresh green and a deep navy for text.
- **Contrast rules:** Navy text on white or pale aqua holds at least 7:1; blue and green carry buttons and highlights, not long text.
- **Surface treatment:** Smooth gradients with a gloss highlight on the top half of each object; a faint mirrored reflection below.
- **Light and shadow:** A soft white highlight at the top edge and a blurred blue shadow of 16px below; no hard shadow.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Sky Blue | `#1E6FD9` | primary |
| Pale Aqua | `#CFF4FF` | background |
| Fresh Green | `#7ED957` | accent |
| Gloss White | `#FFFFFF` | panel surface |
| Deep Navy | `#0B2A4A` | text |
| Mist Blue | `#8FB8DE` | muted |

## Materiality & texture

- **Surface simulation:** Early rendered glass, water and plastic: crisp spheres, droplets, glossy buttons and clear panels.
- **Border rules:** A 1px pale-blue edge on panels; a 1px white inner edge on glossy buttons.
- **Blur and elevation:** Soft shadows of 12px to 20px blur at 15% blue; panels lift by 4px on hover.

## Ornamentation & iconography

- **Iconography:** Filled glossy icons at 24px with round forms and a highlight, in blue and white.
- **Illustration:** Rendered spheres, water drops, glass buttons, clouds and a clean horizon; no photos of people.
- **Decorative elements:** glossy sphere · water drop · glass button · sky gradient · reflection

## Motion & interactivity

- **Born on screen:** yes
- **Transition physics:** Smooth and weightless: objects float up and down by 8px over 6s; panels fade and rise by 12px over 360ms.
- **Easing:** cubic-bezier(0.22, 1, 0.36, 1)
- **Duration (ms):** 360
- **Hover and active:** Hover raises the gloss highlight by 10% and lifts the panel by 4px; active state dims the gloss by 15%.

## Code & token primer

Set `data-style="utopian-virtual"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="utopian-virtual"] {
  --color-bg: #CFF4FF;
  --color-surface: #FFFFFF;
  --color-text: #0B2A4A;
  --color-muted: #3F5F80;
  --color-primary: #1E6FD9;
  --color-accent: #7ED957;
  --color-border: #8FB8DE;
  --font-sans: "Open Sans", "Source Sans 3", sans-serif;
  --font-display: "Nunito Sans", "Figtree", sans-serif;
  --border-radius: 12px;
  --border-width: 1px;
  --shadow-elevation: 0 8px 16px rgba(30,111,217,0.15);
  --backdrop-filter: none;
  --space-unit: 8px;
  --ease: cubic-bezier(0.22, 1, 0.36, 1);
  --duration: 360ms;
  --type-ratio: 1.25;
  --size-small: 13.6px;
  --size-h3: 26.56px;
  --size-h2: 33.2px;
  --size-h1: 41.5px;
  --color-on-bg: #0B2A4A;
  --color-on-surface: #0B2A4A;
  --color-on-primary: #FFFFFF;
  --color-on-accent: #0B2A4A;
  --color-muted-on-bg: #3F5F80;
  --color-muted-on-surface: #3F5F80;
  --color-link: #0B2A4A;
  --color-link-on-surface: #1E6FD9;
  --display-weight: 600;
  --subhead-weight: 400;
  --body-weight: 400;
  --strong-weight: 600;
  --label-weight: 600;
  --display-tracking: 0em;
  --display-leading: 1.1;
  --display-case: none;
  --body-leading: 1.6;
  --body-size: 17px;
  --icon-stroke: 2;
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
| page | `bg-[#CFF4FF] text-[#0B2A4A] antialiased px-6 md:px-12` |
| heading | `text-4xl md:text-6xl font-semibold leading-[1.1]` |
| body | `text-base leading-[1.6] max-w-prose` |
| section | `border bg-[#FFFFFF] rounded-xl shadow-lg` |
| button | `rounded-xl border border-[#7ED957] bg-[#1E6FD9] px-6 py-3 text-sm font-semibold text-[#CFF4FF]` |
| label | `text-xs uppercase tracking-[0.12em] text-[#7ED957]` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** solid, stroke 2 on a 24px field, round caps, round joins, container: circle. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Ionicons (Filled) by Ben Sperry, licence MIT. Reason: Filled round icons sit well in a glossy circle and suit a clean, rendered look. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 600, tracking 0em, leading 1.1, case: none.
- **Weights:** display 600, subhead 400, body 400, bold in text 600, labels and buttons 600. The style uses 2 weights (400, 600) and no other. The display is 200 heavier than the body. The accent is colour: one coloured word or field is the accent, so the weights stay quiet.
- **Body type:** 17px, leading 1.6.
- **Page:** hero split, left aligned, airy density, accent tilt 0°.
- **Ground:** sky. Utopian virtual shows a clean rendered sky with a smooth gradient behind its glossy objects. Put the class `ground` on the first screen of the page; it takes `--ground`, a stack of gradients built from the colour tokens. The ground can run behind the copy, so put the class `ground-copy` on each text block of that screen: the block gets `--color-bg` and a soft edge. Keep the rest of the page on `--color-bg`.
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

### Early 3D render (process, invented here)

A clean, glossy computer render in the look of early 3D graphics: spheres, water and glass with a sharp highlight and no wear. Origin: internet, web, 2011.

- Render one object, such as a sphere, a drop or a button, with a sharp top highlight of 40% white.
- Add a faint mirrored reflection of 15% white below the object.
- Set the object on a smooth sky gradient from deep blue to pale aqua, with no grain.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **4chan** (platform, web, 2003–now), gathered the style. An anonymous image board. In 2019 a post of an empty yellow room on its paranormal board began the Backrooms and the liminal spaces look.
- **Reddit** (platform, web, 2005–now), gathered the style. A forum site of topic groups. The groups on Weirdcore and Liminalspace spread the images of empty, strange places.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Base colour (`base_colour`) | #1E6FD9 | #1E6FD9, #CFF4FF, #FFFFFF | --color-primary, --color-on-primary, --color-link-on-surface |
| Accent colour (`accent_colour`) | #7ED957 | #7ED957, #1E6FD9 | --color-accent, --color-on-accent, --color-link |
| Corner radius (`corner_radius`) | 12px | 8–20 px | --border-radius |
| Grid step (`grid_step`) | 8px | 4–8 px | --space-unit, --grid-gutter |
| Type scale ratio (`type_scale_ratio`) | 1.25 | 1.2–1.333 | --type-ratio, --size-small, --size-h3, --size-h2, --size-h1 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more neon**: move toward [`vaporwave`](../vaporwave/SKILL.md) (Vaporwave). Swap the sky gradient for pink to cyan on a purple ground; add a perspective floor and desktop windows.
- If the user asks for **more natural**: move toward [`frutiger-aero`](../frutiger-aero/SKILL.md) (Frutiger Aero). Add a green hill, bubbles and a lighter sky; keep the gloss and soften the renders.
- If the user asks for **lonelier**: move toward [`mallsoft`](../mallsoft/SKILL.md) (Mallsoft). Replace the renders with a faded photo of an empty hall; mute the blue to peach and teal.

- **Mixes well with:** [`frutiger-aero`](../frutiger-aero/SKILL.md)
- **Nearest by vector profile:** [`frutiger-aero`](../frutiger-aero/SKILL.md), [`spatial-visionos`](../spatial-visionos/SKILL.md), [`3d-avatar-emoji`](../3d-avatar-emoji/SKILL.md)

## Emotional target

The viewer feels calm wonder at a clean, perfect, synthetic world.

**Keywords:** clean, glossy, synthetic, optimistic, weightless, uncanny · **Brand archetypes:** magician, creator, explorer

## Sources

- [Wikipedia: Vaporwave](https://en.wikipedia.org/wiki/Vaporwave)
- [Wikipedia: James Ferraro](https://en.wikipedia.org/wiki/James_Ferraro)

---

Generated from [`data/internet/styles/utopian-virtual.json`](../../data/internet/styles/utopian-virtual.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
