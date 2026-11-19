---
name: clean-girl
description: "Apply the Clean girl style (2022–now) when generating web pages, apps, memes, short video frames and other images of internet culture. Load when the user asks for: clean girl, glazed skin, slick bun, gold hoops, neutral outfit, morning routine."
domain: internet
era: contemporary-spatial
triggers:
  - "clean girl"
  - "glazed skin"
  - "slick bun"
  - "gold hoops"
  - "neutral outfit"
  - "morning routine"
  - "wellness"
  - "skin routine"
vector_profile:
  ornamentation: 2
  dimensionality: 2
  grid_rigidity: 4
  skeuomorphic_realism: 3
  typographic_expressiveness: 3
---

# Clean girl

> Show effortless order: a polished, neutral surface suggests a calm life, and the routine is the product.

A look of dewy skin, a sleek bun, gold hoops, neutral clothes, white tiles and tidy shelves. It grew on TikTok and Instagram in 2021 and 2022 and sells wellness, skin and routine.

**Period:** 2022–now · **Era:** Contemporary & Spatial · **Domain:** Internet · **Also called:** Clean girl aesthetic, Glazed skin look

## When to load this skill

Load it when the user asks for: "clean girl", "glazed skin", "slick bun", "gold hoops", "neutral outfit", "morning routine", "wellness", "skin routine".

Good for: skin and beauty brands, wellness and routine apps, neutral fashion shops, lifestyle creators.

Do not use it when:
- The brand needs rebellion, mess or loud colour.
- The audience reads a dense technical product page.
- The tone must be dark, raw or ironic.

## System directives

When generating web pages, apps, memes, short video frames and other images of internet culture in Clean girl, you MUST:

1. Set the ground in warm white (#FAF7F2) with beige (#E9DFD1) and a soft taupe (#9C8B7A) as support.
2. Use one gold accent (#C8A25B) for hoops, rules and small marks, under 5% of the surface.
3. Pair a clean geometric sans with one fine display serif or italic at 40px to 96px.
4. Photograph skin, hands and objects in soft window light with a 3% bloom and a visible sheen on highlights.
5. Frame products on white tile, marble or linen, in rows of 3 with 24px gaps; keep a 4:5 crop.
6. Show routines as numbered steps: 01 Cleanse, 02 Hydrate, 03 Glow, each in a pill of 999px radius.
7. Round all corners at 24px or more and use shadows at 6% opacity only.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Heavy makeup and loud colour.
- **NEVER:** Dark, moody grading.
- **NEVER:** Busy collage and stickers.
- **NEVER:** Rough, grungy textures.
- **NEVER:** Hard shadows and outlines.
- **NEVER:** Cluttered shelves.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■□□□` 2/5 | pure minimal | maximalist |
| Dimensionality | `■■□□□` 2/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■■■□` 4/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■■■□□` 3/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■■■□□` 3/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** A 12-column grid with 24px gutters; products and steps sit in rows of 3 on tile modules of 160px.
- **Whitespace ratio:** 45% to 60% of the surface stays empty; the spacing scale is 8, 16, 24, 40 and 64px.
- **Alignment rules:** Centred headings and centred product rows; text sits in short blocks of 3 lines.
- **Container geometry:** Cards and pills with a 24px to 999px radius, a 1px beige border and a 0 8px 24px shadow at 6% opacity.

## Typography

- **Classifications:** geometric sans · fine display serif · italic accent
- **Tracking:** Display -0.01em; labels 0.08em.
- **Leading:** Display 1.1; body 1.6.
- **Hierarchy rules:** Use weights 300 and 500 for the sans. · Use sizes 14, 16, 24 and 72px. · Set one word of each heading in serif italic. · Set step numbers in small capitals with 0.08em tracking.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Instrument Serif | Jost | A fine, narrow serif with an italic for one soft headline word, and a geometric sans for text. |
| DM Sans | DM Sans | A clean low-contrast geometric sans for labels and routines. |
| Manrope | Figtree | A calm, round sans pair for interface text. |

## Colour & lighting

- **Palette structure:** Warm whites and beiges with a taupe text and one gold accent.
- **Contrast rules:** Taupe ink on warm white holds 12:1; stone holds 5.5:1; gold and beige carry rules, pills and fills, not small text.
- **Surface treatment:** Smooth fills with a faint 2-stop gradient from #FFFFFF to #F2EBDF; a soft sheen on photographs.
- **Light and shadow:** Soft window light; a bloom of 3% on highlights; shadows lifted and blurred at 24px.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Warm White | `#FAF7F2` | background |
| Cream Tile | `#FFFFFF` | surface |
| Taupe Ink | `#3A332C` | text |
| Soft Taupe | `#9C8B7A` | border |
| Gold | `#C8A25B` | accent |
| Beige | `#E9DFD1` | primary |
| Stone | `#6B6055` | muted text |

## Materiality & texture

- **Surface simulation:** White tile, marble, linen, gold wire, serum glass and slick skin.
- **Border rules:** A 1px beige line on cards; pills with a 999px radius.
- **Blur and elevation:** A shadow of 0 8px 24px at 6% opacity; no glass and no hard edge.

## Ornamentation & iconography

- **Iconography:** Thin outline icons at 24px with 1.25px strokes and round caps; no tile.
- **Illustration:** Close photographs of skin, hoops, a sleek bun, a glass bottle and a white tiled shelf; no drawn illustration.
- **Decorative elements:** gold hoop · numbered routine step · tile module · dewy highlight · pill label

## Motion & interactivity

- **Born on screen:** yes
- **Transition physics:** Smooth and soft: elements fade up by 8px over 450ms; a sheen passes over a product at 3s per loop.
- **Easing:** cubic-bezier(0.22, 1, 0.36, 1)
- **Duration (ms):** 450
- **Hover and active:** Hover lifts a card by 3px and sweeps a sheen; active state returns it in 150ms.

## Code & token primer

Set `data-style="clean-girl"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="clean-girl"] {
  --color-bg: #FAF7F2;
  --color-surface: #FFFFFF;
  --color-text: #3A332C;
  --color-muted: #6B6055;
  --color-primary: #E9DFD1;
  --color-accent: #C8A25B;
  --color-border: #E9DFD1;
  --font-sans: "Jost", "DM Sans", sans-serif;
  --font-display: "Instrument Serif", "DM Sans", Georgia, serif;
  --border-radius: 24px;
  --border-width: 1px;
  --shadow-elevation: 0 8px 24px rgba(58, 51, 44, 0.06);
  --backdrop-filter: none;
  --space-unit: 8px;
  --ease: cubic-bezier(0.22, 1, 0.36, 1);
  --duration: 450ms;
  --type-ratio: 1.25;
  --size-small: 12.8px;
  --size-h3: 25px;
  --size-h2: 31.25px;
  --size-h1: 39.06px;
  --color-on-bg: #3A332C;
  --color-on-surface: #3A332C;
  --color-on-primary: #3A332C;
  --color-on-accent: #3A332C;
  --color-muted-on-bg: #6B6055;
  --color-muted-on-surface: #6B6055;
  --color-link: #3A332C;
  --color-link-on-surface: #3A332C;
  --display-weight: 500;
  --subhead-weight: 500;
  --body-weight: 300;
  --strong-weight: 500;
  --label-weight: 500;
  --display-tracking: -0.01em;
  --display-leading: 1.1;
  --display-case: none;
  --body-leading: 1.6;
  --body-size: 16px;
  --icon-stroke: 1.25;
  --ground: radial-gradient(circle at 80% 46%, var(--color-bg) 0 20vmin, transparent calc(20vmin + 1px)),
    radial-gradient(circle at calc(80% + 3vmin) calc(46% + 3vmin), color-mix(in oklab, var(--color-on-bg) 16%, transparent) 0 18vmin, transparent 27vmin),
    radial-gradient(circle at calc(80% - 3vmin) calc(46% - 3vmin), rgba(255,255,255,.85) 0 18vmin, transparent 27vmin),
    radial-gradient(35% 40% at 96% 92%, color-mix(in oklab, var(--color-accent) 35%, transparent), transparent 70%),
    radial-gradient(30% 35% at 60% 4%, color-mix(in oklab, var(--color-primary) 22%, transparent), transparent 70%),
    var(--color-bg);
}
```

Tailwind patterns:

| Element | Classes |
|---|---|
| page | `bg-[#FAF7F2] text-[#3A332C] font-sans font-light antialiased px-6 md:px-12` |
| heading | `font-[family-name:Instrument_Serif] text-5xl md:text-7xl leading-[1.1] tracking-tight text-center` |
| body | `text-base leading-[1.6] max-w-[40rem]` |
| section | `rounded-3xl border border-[#E9DFD1] bg-white p-8 shadow-[0_8px_24px_rgba(58,51,44,0.06)]` |
| button | `rounded-full bg-[#3A332C] px-7 py-3 text-sm font-medium text-[#FAF7F2] transition-transform duration-[450ms] hover:-translate-y-0.5` |
| label | `text-xs font-medium uppercase tracking-[0.08em] text-[#6B6055]` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** outline, stroke 1.25 on a 24px field, round caps, round joins, container: none. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Solar (Linear) by 480 Design, licence CC BY 4.0. Reason: A very thin line set that matches the soft, light feel of the look. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 500, tracking -0.01em, leading 1.1, case: none.
- **Weights:** display 500, subhead 500, body 300, bold in text 500, labels and buttons 500. The style uses 2 weights (300, 500) and no other. The display is 200 heavier than the body. The accent is weight: a heavier word is the accent, so the steps between the weights are clear.
- **Body type:** 16px, leading 1.6.
- **Page:** hero stacked, center aligned, airy density, accent tilt 0°.
- **Ground:** soft. The clean girl look stands on a soft, near-white ground with a faint warm glow, like a bathroom in morning light. Put the class `ground` on the first screen of the page; it takes `--ground`, a stack of gradients built from the colour tokens. The ground can run behind the copy, so put the class `ground-copy` on each text block of that screen: the block gets `--color-bg` and a soft edge. Keep the rest of the page on `--color-bg`.
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

### Three-point lighting (process)

A key light, a fill light and a back light on one subject, so that the face is modelled and stands out from the ground. Origin: film & video, Hollywood, United States, c. 1920.

- Set the key light 30 to 45 degrees off the camera axis and above eye level.
- Set the fill on the other side at 1/4 to 1/2 of the key.
- Put the back light behind the subject, so that a thin rim of light separates hair and shoulders from the ground.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **Instagram** (platform, web, 2010–now), published the style. A photo and video app. Home and food images spread on it, and it carried trends such as dopamine decor and the film grain look.
- **TikTok** (platform, web, 2016–now), launched the style. A video app of short vertical clips. Its feed set the form of vertical short-form video and spread the camcorder revival.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Base colour (`base_colour`) | #E9DFD1 | #E9DFD1, #C8A25B, #3A332C | --color-primary, --color-on-primary, --color-link-on-surface |
| Accent colour (`accent_colour`) | #C8A25B | #C8A25B, #9C8B7A | --color-accent, --color-on-accent, --color-link |
| Corner radius (`corner_radius`) | 24px | 16–999 px | --border-radius |
| Grid step (`grid_step`) | 8px | 8–16 px | --space-unit, --grid-gutter |
| Type scale ratio (`type_scale_ratio`) | 1.25 | 1.2–1.5 | --type-ratio, --size-small, --size-h3, --size-h2, --size-h1 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more plain**: move toward [`normcore`](../normcore/SKILL.md) (Normcore). Remove the sheen and gold; use a flat grey ground and a denim blue.
- If the user asks for **more pink**: move toward [`barbiecore`](../barbiecore/SKILL.md) (Barbiecore). Replace the beige with one hot pink and add glossy plastic highlights.
- If the user asks for **more luxury**: move toward [`quiet-luxury-fashion`](../quiet-luxury-fashion/SKILL.md) (Quiet luxury fashion). Use a deeper taupe palette, wider margins and no routine steps.

- **Came from (go here for a more orthodox version):** [`minimalism-web`](../minimalism-web/SKILL.md), [`normcore`](../normcore/SKILL.md)
- **Rejects (the opposite pole; do not blend):** [`goblincore`](../goblincore/SKILL.md)
- **Mixes well with:** [`vsco-preset-look`](../vsco-preset-look/SKILL.md)
- **Kin in another domain:** [`fashion-editorial`](../fashion-editorial/SKILL.md), [`minimalist-fashion`](../minimalist-fashion/SKILL.md), [`minimalist-interior`](../minimalist-interior/SKILL.md), [`quiet-luxury-fashion`](../quiet-luxury-fashion/SKILL.md)
- **Nearest by vector profile:** [`video-essay`](../video-essay/SKILL.md), [`bento-grid-ui`](../bento-grid-ui/SKILL.md), [`demotivational-poster`](../demotivational-poster/SKILL.md)

## Emotional target

The viewer feels calm, tidy and drawn to a polished daily routine.

**Keywords:** polished, calm, fresh, tidy, glowing, aspirational · **Brand archetypes:** caregiver, lover, ruler

## Sources

- [Know Your Meme: Clean Girl Aesthetic](https://knowyourmeme.com/memes/clean-girl-aesthetic)
- Vogue, The clean girl aesthetic explained (2022)
- [Wikipedia: Internet aesthetic](https://en.wikipedia.org/wiki/Internet_aesthetic)

---

Generated from [`data/internet/styles/clean-girl.json`](../../data/internet/styles/clean-girl.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
