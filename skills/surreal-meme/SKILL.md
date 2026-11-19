---
name: surreal-meme
description: "Apply the Surreal meme style (2016–now) when generating web pages, apps, memes, short video frames and other images of internet culture. Load when the user asks for: surreal meme, absurdist meme, weird meme, odd image, meme with no joke, dream meme."
domain: internet
era: touchscreen
triggers:
  - "surreal meme"
  - "absurdist meme"
  - "weird meme"
  - "odd image"
  - "meme with no joke"
  - "dream meme"
  - "strange cut-out"
vector_profile:
  ornamentation: 3
  dimensionality: 3
  grid_rigidity: 1
  skeuomorphic_realism: 3
  typographic_expressiveness: 3
---

# Surreal meme

> Drop the joke structure: let a strange picture and a calm caption make a mood with no answer.

An image with an odd crop, a strange cut-out or a calm, odd caption that has no clear punch line. It grew from Facebook groups and Reddit in 2016 and often breaks the old image-macro rules on purpose.

**Period:** 2016–now · **Era:** Touchscreen · **Domain:** Internet · **Also called:** Surreal memes, Absurdist meme, Weird meme

## When to load this skill

Load it when the user asks for: "surreal meme", "absurdist meme", "weird meme", "odd image", "meme with no joke", "dream meme", "strange cut-out".

Good for: humour accounts, album art for comic acts, social posts, campaign teasers.

Do not use it when:
- The message must be clear in one second.
- The audience wants a classic joke.

## System directives

When generating web pages, apps, memes, short video frames and other images of internet culture in Surreal meme, you MUST:

1. Compose 2 to 4 layers: a flat or photographic ground, a cut-out figure and one odd object.
2. Use a calm caption of 1 to 6 words in a plain sans-serif at 24px to 36px, off the usual top and bottom positions.
3. Place the cut-out with a 1px to 2px visible rough edge, scaled 20% to 400% out of true size.
4. Use a limited, odd colour pair: a flat teal (#2E9C9A) and a dull orange (#E08A3C) on grey.
5. Add a 3% to 8% grain and one soft glow, with no clean grading.
6. Leave 30% to 50% of the canvas empty, so that the odd object has air.
7. Repeat one object or name across a series to build a private joke.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Clear setup and punch line.
- **NEVER:** Impact capitals at top and bottom.
- **NEVER:** Polished photo realism.
- **NEVER:** Many captions at once.
- **NEVER:** Clean sticker-style outlines.
- **NEVER:** Explanations of the joke.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■■□□` 3/5 | pure minimal | maximalist |
| Dimensionality | `■■■□□` 3/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■□□□□` 1/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■■■□□` 3/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■■■□□` 3/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** A loose, centred or off-centre composition on a canvas of 800px x 800px with no fixed grid.
- **Whitespace ratio:** 30% to 50% of the surface stays empty; the odd object sits at a third point.
- **Alignment rules:** Mixed alignment: the caption sits at a chosen offset of 8% to 20% from the edge.
- **Container geometry:** No containers; a hard, rough cut-out silhouette.

## Typography

- **Classifications:** neutral sans · rounded sans
- **Tracking:** Caption 0 to +0.02em.
- **Leading:** Caption 1.2.
- **Hierarchy rules:** Use one caption size. · Use regular weight (400) and sentence case. · Use white or black text; pick by contrast to the ground.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Inter | Roboto Mono | A neutral sans for a flat caption, with a mono for a second line. |
| Space Grotesk | DM Sans | A slightly odd grotesque for a quiet strange tone. |

## Colour & lighting

- **Palette structure:** Odd flat colours on grey, with one saturated spot colour.
- **Contrast rules:** Off white text on night gives 16:1; keep captions on the dark or plain grey zones.
- **Surface treatment:** Flat colour with grain; no gradient except one glow.
- **Light and shadow:** A soft glow or a flat cut-out shadow of 4px.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Dull Teal | `#2E9C9A` | ground |
| Dull Orange | `#E08A3C` | accent |
| Concrete Grey | `#8A8F98` | ground |
| Night | `#121417` | dark |
| Off White | `#F2EFE8` | text |

## Materiality & texture

- **Surface simulation:** A mixed digital collage of cut-out stock images and 3D renders.
- **Border rules:** A 1px to 2px rough edge on cut-outs; no frame.
- **Blur and elevation:** A 4px soft shadow under some cut-outs; light blur of 1px on a layer.

## Ornamentation & iconography

- **Iconography:** No icons; one strange object is the mark.
- **Illustration:** Cut-out stock photos, early 3D renders, simple flat shapes.
- **Decorative elements:** cut-out · odd scale · calm caption

## Motion & interactivity

- **Born on screen:** yes
- **Transition physics:** Static or a short loop; an object slides in 600ms and holds.
- **Easing:** cubic-bezier(0.4, 0, 0.2, 1)
- **Duration (ms):** 600
- **Hover and active:** Hover moves the odd object by 6px.

## Code & token primer

Set `data-style="surreal-meme"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="surreal-meme"] {
  --color-bg: #121417;
  --color-surface: #1E2228;
  --color-text: #F2EFE8;
  --color-muted: #C9CCD2;
  --color-primary: #E08A3C;
  --color-accent: #2E9C9A;
  --color-border: #F2EFE8;
  --font-sans: "DM Sans", "Inter", sans-serif;
  --font-display: "Space Grotesk", "Inter", sans-serif;
  --border-radius: 2px;
  --border-width: 1px;
  --shadow-elevation: 0 4px 8px rgba(0,0,0,0.35);
  --backdrop-filter: none;
  --space-unit: 8px;
  --ease: cubic-bezier(0.4, 0, 0.2, 1);
  --duration: 600ms;
  --type-ratio: 1.333;
  --size-small: 12px;
  --size-h3: 28.43px;
  --size-h2: 37.9px;
  --size-h1: 50.52px;
  --color-on-bg: #F2EFE8;
  --color-on-surface: #F2EFE8;
  --color-on-primary: #121417;
  --color-on-accent: #121417;
  --color-muted-on-bg: #C9CCD2;
  --color-muted-on-surface: #C9CCD2;
  --color-link: #2E9C9A;
  --color-link-on-surface: #2E9C9A;
  --display-weight: 500;
  --subhead-weight: 500;
  --body-weight: 400;
  --strong-weight: 700;
  --label-weight: 500;
  --display-tracking: 0.01em;
  --display-leading: 1.2;
  --display-case: none;
  --body-leading: 1.5;
  --body-size: 16px;
  --icon-stroke: 2;
  --ground: radial-gradient(circle at 84% 26%, color-mix(in oklab, var(--color-accent) 92%, transparent) 0 17vmin, transparent calc(17vmin + 1px)),
    radial-gradient(circle at 62% 86%, color-mix(in oklab, var(--color-primary) 85%, transparent) 0 12vmin, transparent calc(12vmin + 1px)),
    radial-gradient(circle at 98% 82%, color-mix(in oklab, var(--color-primary) 90%, transparent) 0 22vmin, transparent calc(22vmin + 1px)),
    radial-gradient(60% 70% at 80% 50%, color-mix(in oklab, var(--color-primary) 30%, transparent), transparent 70%),
    var(--color-bg);
}
```

Tailwind patterns:

| Element | Classes |
|---|---|
| page | `bg-[#121417] text-[#F2EFE8] font-sans antialiased` |
| heading | `font-[Space_Grotesk] text-3xl md:text-5xl font-medium leading-[1.2]` |
| body | `text-base leading-[1.5] max-w-prose` |
| card | `border border-[#F2EFE8] bg-[#121417] shadow-[0_4px_8px_rgba(0,0,0,0.35)]` |
| button | `rounded-sm border border-[#F2EFE8] bg-[#E08A3C] px-5 py-2 text-[#121417] hover:translate-x-1 transition-transform` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** duotone, stroke 2 on a 24px field, round caps, round joins, container: circle. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Phosphor (Duotone) by Phosphor Icons, licence MIT. Reason: A duotone family that gives a soft, slightly odd tone. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 500, tracking 0.01em, leading 1.2, case: none.
- **Weights:** display 500, subhead 500, body 400, bold in text 700, labels and buttons 500. The style uses 3 weights (400, 500, 700) and no other. The display is 100 heavier than the body. The accent is colour: one coloured word or field is the accent, so the weights stay quiet.
- **Body type:** 16px, leading 1.5.
- **Page:** hero poster, center aligned, airy density, accent tilt 2°.
- **Ground:** orbs. Soft orbs give a calm odd glow behind a cut-out. Put the class `ground` on the first screen of the page; it takes `--ground`, a stack of gradients built from the colour tokens. The ground can run behind the copy, so put the class `ground-copy` on each text block of that screen: the block gets `--color-bg` and a soft edge. Keep the rest of the page on `--color-bg`.
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

### Cut-out composite (montage)

Cut-out photos placed on a flat or photo ground at a chosen odd scale. Origin: internet, United States, 1990.

- Cut the subject out with a clean or deliberately rough edge of 1 to 2px.
- Place it on a flat colour or a second photo.
- Scale it 20% to 400% out of true size.
- Add 3% to 8% grain over all layers.

## Media

The salons, schools, magazines, publishers, galleries and platforms that carried this style.

- **Reddit** (platform, web, 2005–now), published the style. A forum site of topic groups. The groups on Weirdcore and Liminalspace spread the images of empty, strange places.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Base colour (`base_colour`) | #E08A3C | #E08A3C, #2E9C9A, #F2EFE8 | --color-primary, --color-on-primary, --color-link-on-surface |
| Accent colour (`accent_colour`) | #2E9C9A | #2E9C9A, #E08A3C | --color-accent, --color-on-accent, --color-link |
| Corner radius (`corner_radius`) | 2px | 0–8 px | --border-radius |
| Grid step (`grid_step`) | 8px | 4–12 px | --space-unit, --grid-gutter |
| Type scale ratio (`type_scale_ratio`) | 1.333 | 1.2–1.5 | --type-ratio, --size-small, --size-h3, --size-h2, --size-h1 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more classic**: move toward [`impact-image-macro`](../impact-image-macro/SKILL.md) (Impact image macro). Add top and bottom captions in white outlined capitals and remove the cut-outs.
- If the user asks for **more rough**: move toward [`deep-fried-meme`](../deep-fried-meme/SKILL.md) (Deep-fried meme). Recompress the image, raise saturation by 60% and add glow and flare.
- If the user asks for **more mood**: move toward [`dreamcore`](../dreamcore/SKILL.md) (Dreamcore). Add a soft haze, a pale yellow tint and a lonely room scene.

- **Rejects (the opposite pole; do not blend):** [`impact-image-macro`](../impact-image-macro/SKILL.md)
- **Mixes well with:** [`deep-fried-meme`](../deep-fried-meme/SKILL.md), [`mini-diffusion-meme`](../mini-diffusion-meme/SKILL.md), [`surrealism-web`](../surrealism-web/SKILL.md)
- **Kin in another domain:** [`surrealism-painting`](../surrealism-painting/SKILL.md)
- **Nearest by vector profile:** [`green-screen-short`](../green-screen-short/SKILL.md), [`claymorphism`](../claymorphism/SKILL.md), [`pov-short`](../pov-short/SKILL.md)

## Emotional target

The viewer feels a calm unease and a small laugh with no clear reason.

**Keywords:** absurd, calm, odd, dreamlike, quiet · **Brand archetypes:** jester, magician

## Sources

- Know Your Meme: Surreal Memes
- [Wikipedia: Internet meme](https://en.wikipedia.org/wiki/Internet_meme)

---

Generated from [`data/internet/styles/surreal-meme.json`](../../data/internet/styles/surreal-meme.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
