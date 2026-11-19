---
name: frutiger-aero
description: "Apply the Frutiger Aero style (2004–2013) when generating UI or graphic layouts. Load when the user asks for: frutiger aero, aero, web 2.0, windows vista, aqua, glass buttons."
domain: design
era: postmodern-early-digital
triggers:
  - "frutiger aero"
  - "aero"
  - "web 2.0"
  - "windows vista"
  - "aqua"
  - "glass buttons"
  - "glossy"
  - "2000s tech"
  - "bubbles"
  - "skeuomorphic gloss"
  - "nature tech"
vector_profile:
  ornamentation: 3
  dimensionality: 4
  grid_rigidity: 3
  skeuomorphic_realism: 4
  typographic_expressiveness: 2
---

# Frutiger Aero

> Technology belongs to nature and the human world, so a digital interface should look clean, glossy, alive and pleasant to touch.

Glossy glass buttons, aqua and grass-green gradients, water, sky and bubble imagery and humanist sans type. It grew from Y2K gloss into the Windows Vista, Mac OS X Aqua and Web 2.0 look of the late 2000s.

**Period:** 2004–2013 · **Era:** Postmodern & Early Digital · **Domain:** Graphic & UI Design · **Also called:** Aero, Web 2.0 Gloss, Vista Aero, Skeuomorphic Nature Tech

## When to load this skill

Load it when the user asks for: "frutiger aero", "aero", "web 2.0", "windows vista", "aqua", "glass buttons", "glossy", "2000s tech", "bubbles", "skeuomorphic gloss", "nature tech".

Good for: nostalgia campaigns, consumer software landing pages, music and media players, wellness and utility apps, game launchers.

Do not use it when:
- The brand needs a flat, minimal or monochrome tone.
- The interface is data-dense and the gloss would compete with the content.
- The platform has a current flat design system that the product must follow.

## System directives

When generating UI or graphic layouts in Frutiger Aero, you MUST:

1. Build buttons and panels as glass: a vertical gradient, a white highlight on the upper 50% and a 1px light border.
2. Use a sky-to-grass or aqua-to-green gradient as the main background, with a lightness range of 45% to 95%.
3. Place nature imagery in the frame: water drops, bubbles, leaves, clouds, lens flares and blue sky at 20% to 60% of the hero area.
4. Set text in a humanist sans such as Frutiger or Segoe at 14px to 16px, in dark grey or navy, never in pure black.
5. Add a reflection under hero objects, at 25% opacity and 40% of the object height.
6. Round every container with a 6px to 12px radius, and use full pill shapes only for primary buttons.
7. Use soft shadows with 8px to 20px blur and a light glow of 4px to 8px on interactive elements.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Flat fills with no gradient or highlight.
- **NEVER:** Hard offset shadows and thick black outlines.
- **NEVER:** Dark, desaturated or monochrome palettes.
- **NEVER:** Distressed texture and torn paper edges.
- **NEVER:** Square 0px corners on all controls.
- **NEVER:** Chrome-silver cyber motifs and pixel fonts.
- **NEVER:** Abstract geometric shapes with no natural reference.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■■□□` 3/5 | pure minimal | maximalist |
| Dimensionality | `■■■■□` 4/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■■□□` 3/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■■■■□` 4/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■■□□□` 2/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** A 960px centred column on a 12-column grid with 20px gutters; the header, a hero band of 360px to 480px and a row of 3 or 4 glass cards follow in order.
- **Whitespace ratio:** 25% to 40% of the surface stays empty; the spacing scale is 4, 8, 12, 20, 32, 56px and panels have 16px to 24px inner padding.
- **Alignment rules:** Centre the hero and the logo; flush-left the body text inside panels; align cards to column edges and the icon to the first baseline of its label.
- **Container geometry:** Glass panels with a 10px radius, a 1px white border and 16px padding; primary buttons are pills at 999px, and icons sit in 48px rounded squares with a 12px radius.

## Typography

- **Classifications:** humanist sans · rounded humanist sans · glyphic sans
- **Tracking:** Display sizes take -0.01em to +0.01em; body stays at 0; small labels take +0.02em.
- **Leading:** Display 1.15; body 1.5; labels 1.3.
- **Hierarchy rules:**
  - Use weights 300, 400 and 700, with headlines in light 300 at 36px to 56px.
  - Set headlines in sentence case and give them a 1px white text shadow at 0 1px 0 on a coloured field.
  - Use 14px for body, 12px for labels and 24px for panel titles, in dark grey at #1F3A4D.
  - Make links blue at #0A7BD5 with a 1px underline on hover only.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Nunito | Open Sans | A rounded humanist display over a Frutiger-like text face. |
| Lato | Lato | A single humanist family at weights 300, 400 and 700. |
| Source Sans 3 | Source Sans 3 | A neutral humanist sans close to Segoe UI. |

## Colour & lighting

- **Palette structure:** Sky blue and aqua cover 50% of the surface, grass green covers 20%, white glass covers 25% and one orange or yellow accent covers under 5%.
- **Contrast rules:** Body text in slate holds 10:1 or better on glass white; white text on aqua or grass holds 3:1 only at 18px bold or larger, so use slate for small text.
- **Surface treatment:** Glossy and translucent: vertical gradients from a light tint to a saturated hue, a white highlight over the top 50% and glass panels at 60% to 85% opacity.
- **Light and shadow:** Light comes from the top; each element has a white top highlight, a soft shadow with 8px to 20px blur at 20% to 30% opacity and a reflection under hero objects.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Sky | `#7CC8F2` | background top |
| Aqua | `#2BB7D8` | primary |
| Grass | `#5DBB3F` | secondary and success |
| Glass White | `#F4FAFF` | panel surface |
| Deep Water | `#0A7BD5` | links and focus |
| Slate | `#1F3A4D` | text |
| Sun | `#FFB300` | single warm accent |

## Materiality & texture

- **Surface simulation:** Glass, water and polished plastic, as in Windows Vista Aero glass and the Mac OS X Aqua gel button.
- **Border rules:** 1px solid white at 70% opacity on the outside, and a 1px dark inner edge at 15% opacity; focus uses a 2px ring in deep water blue.
- **Blur and elevation:** Glass panels use backdrop blur of 8px to 12px; elevation has 3 levels with offsets of 2px, 6px and 12px and blur of 6px, 14px and 28px.

## Ornamentation & iconography

- **Iconography:** Glossy full-colour icons at 32px, 48px and 64px with a 1px dark outline, a top highlight and a reflection; rounded-square containers.
- **Illustration:** Photographic and rendered nature: water drops, bubbles, leaves, clouds, sunbeams and fish, set beside friendly figures in bright light.
- **Decorative elements:** water droplets · soap bubbles · lens flares · grass horizons · glass reflections · swooshes · sun rays

## Motion & interactivity

- **Born on screen:** yes
- **Transition physics:** Smooth and weighty, like glass sliding on a surface: panels fade and slide by 12px to 24px, buttons glow in and the gloss band sweeps across.
- **Easing:** cubic-bezier(0.25, 0.1, 0.25, 1)
- **Duration (ms):** 280
- **Hover and active:** Hover brightens the gradient by 8% and adds a 6px aqua glow; active darkens it by 10%, moves the highlight down by 2px and shrinks the shadow to 2px.

## Code & token primer

Set `data-style="frutiger-aero"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="frutiger-aero"] {
  --color-bg: #7CC8F2;
  --color-surface: #F4FAFF;
  --color-text: #1F3A4D;
  --color-muted: #4F6C80;
  --color-primary: #2BB7D8;
  --color-accent: #5DBB3F;
  --color-border: rgba(255, 255, 255, 0.7);
  --font-sans: "Open Sans", "Segoe UI", Frutiger, "Helvetica Neue", Arial, sans-serif;
  --font-display: "Nunito", "Segoe UI", Frutiger, Arial, sans-serif;
  --border-radius: 10px;
  --border-width: 1px;
  --shadow-elevation: 0 6px 14px rgba(10, 60, 100, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.9);
  --backdrop-filter: blur(10px) saturate(140%);
  --space-unit: 4px;
  --ease: cubic-bezier(0.25, 0.1, 0.25, 1);
  --duration: 280ms;
  --gradient-sky: linear-gradient(180deg, #7CC8F2 0%, #BFE8F7 55%, #5DBB3F 100%);
  --gradient-glass-button: linear-gradient(180deg, rgba(255, 255, 255, 0.75) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0) 51%), linear-gradient(180deg, #4FD0EA, #2BB7D8);
  --glow-aqua: 0 0 6px rgba(43, 183, 216, 0.8);
  --type-ratio: 1.25;
  --size-small: 13.6px;
  --size-h3: 26.56px;
  --size-h2: 33.2px;
  --size-h1: 41.5px;
  --color-on-bg: #1F3A4D;
  --color-on-surface: #1F3A4D;
  --color-on-primary: #1F3A4D;
  --color-on-accent: #1F3A4D;
  --color-muted-on-bg: #28485E;
  --color-muted-on-surface: #4F6C80;
  --color-link: #1F3A4D;
  --color-link-on-surface: #1F3A4D;
  --display-weight: 300;
  --subhead-weight: 400;
  --body-weight: 400;
  --strong-weight: 700;
  --label-weight: 700;
  --display-tracking: -0.01em;
  --display-leading: 1.1;
  --display-case: none;
  --body-leading: 1.6;
  --body-size: 17px;
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
| page | `bg-gradient-to-b from-[#7CC8F2] via-[#BFE8F7] to-[#5DBB3F] text-[#1F3A4D] font-sans min-h-screen` |
| heading | `text-4xl md:text-6xl font-light leading-[1.15] text-white [text-shadow:0_1px_0_rgba(10,60,100,0.35)]` |
| card | `rounded-[10px] border border-white/70 bg-white/70 p-5 backdrop-blur-[10px] shadow-[0_6px_14px_rgba(10,60,100,0.25),inset_0_1px_0_rgba(255,255,255,0.9)]` |
| button | `rounded-full border border-white/70 bg-gradient-to-b from-[#4FD0EA] to-[#2BB7D8] px-7 py-2.5 text-sm font-bold text-white shadow-[0_4px_10px_rgba(10,60,100,0.3),inset_0_1px_0_rgba(255,255,255,0.8)] transition-all duration-[280ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:brightness-110 hover:shadow-[0_0_6px_#2BB7D8] active:brightness-90 active:translate-y-0.5` |
| input | `rounded-md border border-white/70 bg-white/80 px-3 py-2 text-sm text-[#1F3A4D] shadow-[inset_0_1px_3px_rgba(10,60,100,0.25)] focus:outline-none focus:ring-2 focus:ring-[#0A7BD5]` |
| icon tile | `grid h-12 w-12 place-items-center rounded-xl border border-white/80 bg-gradient-to-b from-white to-[#BFE8F7] shadow-[0_4px_8px_rgba(10,60,100,0.25)]` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** solid, stroke 2 on a 24px field, round caps, round joins, container: circle. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Fluent UI System Icons (Filled, 24) by Microsoft Corporation, licence MIT. Reason: Soft, filled forms with round corners that sit well in a glossy round container. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 300, tracking -0.01em, leading 1.1, case: none.
- **Weights:** display 300, subhead 400, body 400, bold in text 700, labels and buttons 700. The style uses 3 weights (300, 400, 700) and no other. The display is 100 lighter than the body, so size carries the hierarchy. The accent is colour: one coloured word or field is the accent, so the weights stay quiet.
- **Body type:** 17px, leading 1.6.
- **Page:** hero split, left aligned, airy density, accent tilt 0°.
- **Ground:** bubbles. Frutiger Aero shows clean water bubbles over a green hill and a bright sky. Put the class `ground` on the first screen of the page; it takes `--ground`, a stack of gradients built from the colour tokens. The ground can run behind the copy, so put the class `ground-copy` on each text block of that screen: the block gets `--color-bg` and a soft edge. Keep the rest of the page on `--color-bg`.
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

### Airbrush (tool)

A pen-sized spray gun that lays paint in soft, even tones; with masks, it makes hard edges and smooth gradients side by side. Origin: photography, United States, 1879.

- Build tone in 3 to 6 thin passes; each pass adds 20% to 40% of the final density.
- Cut a hard mask for each edge that must stay sharp; leave the light soft.
- Put one specular highlight of pure white on each chrome form.

### Easing (animation)

A move speeds up from rest and slows down before it stops, as a real mass does, instead of a constant speed. Origin: film & video, Disney studio, Los Angeles, c. 1930.

- Give a move of 200 to 400ms an ease-out curve when an element enters and an ease-in curve when it leaves.
- Use cubic-bezier(0.4, 0, 0.2, 1) as the standard curve for a move inside the screen.
- Put more frames at the two ends of a move than in the middle: 2 to 3 times the density.

## Media

The salons, schools, magazines, publishers, galleries and platforms that carried this style.

- **Consumer Aesthetics Research Institute** (platform, web, ?–now), published the style. An online community that collects and names the looks of consumer goods and media from the 1970s on. It named Y2K and Frutiger Aero as aesthetics.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Base colour (`base_colour`) | #2BB7D8 | #2BB7D8, #5DBB3F, #1F3A4D | --color-primary, --color-on-primary, --color-link-on-surface |
| Accent colour (`accent_colour`) | #5DBB3F | #5DBB3F, #2BB7D8 | --color-accent, --color-on-accent, --color-link |
| Corner radius (`corner_radius`) | 10px | 5–15 px | --border-radius |
| Grid step (`grid_step`) | 4px | 2–6 px | --space-unit, --grid-gutter |
| Type scale ratio (`type_scale_ratio`) | 1.25 | 1.2–1.333 | --type-ratio, --size-small, --size-h3, --size-h2, --size-h1 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more futuristic**: move toward [`y2k-aesthetic`](../y2k-aesthetic/SKILL.md) (Y2K Aesthetic). Swap the nature imagery for chrome, orbit rings and stars and cool the palette to silver and electric blue; keep the gloss and the pill buttons.
- If the user asks for **flatter**: move toward [`flat-design`](../flat-design/SKILL.md) (Flat Design). Remove the gradients, highlights, reflections and shadows, keep the sky and grass hues as solid fills and the 8px radius.
- If the user asks for **more tactile**: move toward [`skeuomorphism`](../skeuomorphism/SKILL.md) (Skeuomorphism). Add leather, wood or brushed-metal textures and 2px inner bevels to the controls; keep the humanist type and the top light.
- If the user asks for **more modern glass**: move toward [`glassmorphism`](../glassmorphism/SKILL.md) (Glassmorphism). Raise backdrop blur to 20px, drop the gloss band and the reflections and use 25% white panels on a soft colour field; keep the aqua palette.

- **Came from (go here for a more orthodox version):** [`y2k-aesthetic`](../y2k-aesthetic/SKILL.md)
- **Led to (go here for a newer version):** [`glassmorphism`](../glassmorphism/SKILL.md)
- **Was rejected by:** [`metro-ui`](../metro-ui/SKILL.md)
- **Mixes well with:** [`apple-aqua`](../apple-aqua/SKILL.md), [`ethereal-web`](../ethereal-web/SKILL.md), [`skeuomorphism`](../skeuomorphism/SKILL.md), [`vaporwave`](../vaporwave/SKILL.md)
- **Kin in another domain:** [`glossy-3d-logo`](../glossy-3d-logo/SKILL.md), [`skeuomorphic-icon`](../skeuomorphic-icon/SKILL.md)
- **Nearest by vector profile:** [`apple-aqua`](../apple-aqua/SKILL.md), [`cassette-futurism`](../cassette-futurism/SKILL.md), [`liquid-glass-ui`](../liquid-glass-ui/SKILL.md)

## Emotional target

Calm optimism: the viewer feels that technology is clean, friendly and close to a sunny natural world.

**Keywords:** glossy, fresh, optimistic, aquatic, friendly, nostalgic · **Brand archetypes:** innocent, caregiver

## Sources

- Microsoft Corporation, Windows Vista user experience guidelines: Aero glass (Microsoft, 2006)
- Apple Inc., Aqua Human Interface Guidelines (Apple, 2001)

---

Generated from [`data/design/styles/frutiger-aero.json`](../../data/design/styles/frutiger-aero.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
