---
name: barbiecore
description: "Apply the Barbiecore style (2022–now) when generating web pages, apps, memes, short video frames and other images of internet culture. Load when the user asks for: barbiecore, barbie pink, hot pink, pink dress, doll aesthetic, plastic pink."
domain: internet
era: contemporary-spatial
triggers:
  - "barbiecore"
  - "barbie pink"
  - "hot pink"
  - "pink dress"
  - "doll aesthetic"
  - "plastic pink"
  - "pink house"
  - "dream house"
vector_profile:
  ornamentation: 3
  dimensionality: 2
  grid_rigidity: 3
  skeuomorphic_realism: 3
  typographic_expressiveness: 4
---

# Barbiecore

> Make the whole world one pink, and play with it: toy gloss and total colour turn a doll into a dress code.

One hot pink on everything: pink dresses, pink plastic, pink houses and glossy toy shine. Photos of a Barbie film set in 2022 started the trend, and a pink season in fashion followed.

**Period:** 2022–now · **Era:** Contemporary & Spatial · **Domain:** Internet · **Also called:** Barbie pink, Hot pink look

## When to load this skill

Load it when the user asks for: "barbiecore", "barbie pink", "hot pink", "pink dress", "doll aesthetic", "plastic pink", "pink house", "dream house".

Good for: fashion drops and capsule shops, film and event promotion, beauty and toy brands, party and festival pages.

Do not use it when:
- The brand needs a quiet, serious or neutral tone.
- The audience reads long, dense text.
- The product has no link to play or fashion.

## System directives

When generating web pages, apps, memes, short video frames and other images of internet culture in Barbiecore, you MUST:

1. Set the ground in hot pink (#E0218A) or pale pink (#FFE3F1) and keep pink at 60% or more of the frame.
2. Add one set of supports: white (#FFFFFF), sky blue (#7FD0F2) and a dark plum (#4A0F32) for text.
3. Set headings in a heavy, round or wide sans at 56px to 120px, tight at -0.02em, in white on pink or plum on pale pink.
4. Give surfaces toy gloss: a white diagonal highlight at 35% opacity and a 2px inner edge of lighter pink.
5. Dress one subject in head-to-toe pink, shot front-on against a matching pink wall.
6. Use rounded boxes of 20px to 32px, pill buttons and star or heart sparkles of 16px to 32px.
7. Frame products as packaging: a window box with a pink backing card and a plain price tag.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Muted, earth or grey palettes.
- **NEVER:** Dark, moody grading.
- **NEVER:** Thin serif text.
- **NEVER:** Rough or grungy textures.
- **NEVER:** Minimal neutral layouts.
- **NEVER:** Several competing accent colours.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■■□□` 3/5 | pure minimal | maximalist |
| Dimensionality | `■■□□□` 2/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■■□□` 3/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■■■□□` 3/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■■■■□` 4/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** A 12-column grid with 24px gutters; the hero is a pink block with a product or a figure at 45% width, and products sit in a 3-column row.
- **Whitespace ratio:** 25% to 35% of the surface stays empty; the spacing scale is 8, 16, 24 and 48px.
- **Alignment rules:** Centred or flush-left headings; sparkles sit at the corners of cards.
- **Container geometry:** Rounded boxes with a 24px radius, a window-box frame with a 2px white edge, and pill buttons of 999px.

## Typography

- **Classifications:** heavy round sans · wide sans · script accent
- **Tracking:** Display -0.02em; labels 0.04em.
- **Leading:** Display 1.05; body 1.5.
- **Hierarchy rules:**
  - Use weights 400 and 800.
  - Use sizes 16, 24, 56 and 112px.
  - Set headings in sentence case or upper case, in white on pink.
  - Set prices in a pill of 999px radius.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Poppins | Poppins | A geometric sans in ExtraBold for headings; an open stand-in for the heavy toy-brand wordmark face. |
| Lilita One | Nunito | A fat, friendly display face with a soft text sans. |
| Montserrat | Montserrat | A wide geometric sans that reads well in white on pink. |

## Colour & lighting

- **Palette structure:** One hot pink with pale pink, white, sky blue and a dark plum text.
- **Contrast rules:** Plum on pale pink holds 13:1; wine holds 7:1; white text sits on hot pink only at 24px or more and bold, and sky blue carries accents.
- **Surface treatment:** Flat, saturated pink fills with a glossy diagonal highlight at 35% opacity; plastic-like gradients of 2 stops.
- **Light and shadow:** A bright, even light; a pink shadow of 0 12px 24px at 30% opacity; sparkles as highlights.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Pale Pink | `#FFE3F1` | background |
| White | `#FFFFFF` | surface |
| Plum | `#4A0F32` | text |
| Barbie Pink | `#E0218A` | primary |
| Sky Blue | `#7FD0F2` | accent |
| Candy | `#FF8CC6` | highlight |
| Wine | `#7A2457` | muted text |

## Materiality & texture

- **Surface simulation:** Moulded plastic, glossy vinyl, sequins and printed card packaging.
- **Border rules:** A 2px white inner edge on boxes; window frames with a 4px pink border.
- **Blur and elevation:** A pink-tinted shadow of 0 12px 24px at 30%; no grey shadow and no glass.

## Ornamentation & iconography

- **Iconography:** Solid icons at 28px with round caps in a circle tile of hot pink and white glyphs.
- **Illustration:** Pink houses, convertible cars, dresses, hearts, stars and sparkles, drawn as flat plastic shapes.
- **Decorative elements:** window box frame · sparkle star · heart · pink diagonal gloss · price pill

## Motion & interactivity

- **Born on screen:** yes
- **Transition physics:** Bright and bouncy: elements slide up by 16px with a small overshoot over 350ms; sparkles blink at 1.2s loops.
- **Easing:** cubic-bezier(0.34, 1.4, 0.64, 1)
- **Duration (ms):** 350
- **Hover and active:** Hover scales a card to 103% and sweeps a gloss across it; active state scales it to 97%.

## Code & token primer

Set `data-style="barbiecore"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="barbiecore"] {
  --color-bg: #FFE3F1;
  --color-surface: #FFFFFF;
  --color-text: #4A0F32;
  --color-muted: #7A2457;
  --color-primary: #E0218A;
  --color-accent: #7FD0F2;
  --color-border: #E0218A;
  --font-sans: "Poppins", "Nunito", sans-serif;
  --font-display: "Poppins", "Lilita One", sans-serif;
  --border-radius: 24px;
  --border-width: 2px;
  --shadow-elevation: 0 12px 24px rgba(224, 33, 138, 0.3);
  --backdrop-filter: none;
  --space-unit: 8px;
  --ease: cubic-bezier(0.34, 1.4, 0.64, 1);
  --duration: 350ms;
  --type-ratio: 1.333;
  --size-small: 12px;
  --size-h3: 28.43px;
  --size-h2: 37.9px;
  --size-h1: 50.52px;
  --color-on-bg: #4A0F32;
  --color-on-surface: #4A0F32;
  --color-on-primary: #000000;
  --color-on-accent: #4A0F32;
  --color-muted-on-bg: #7A2457;
  --color-muted-on-surface: #7A2457;
  --color-link: #4A0F32;
  --color-link-on-surface: #4A0F32;
  --display-weight: 800;
  --subhead-weight: 800;
  --body-weight: 400;
  --strong-weight: 800;
  --label-weight: 800;
  --display-tracking: -0.02em;
  --display-leading: 1.05;
  --display-case: none;
  --body-leading: 1.5;
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
| page | `bg-[#FFE3F1] text-[#4A0F32] font-sans antialiased px-6 md:px-12` |
| heading | `text-5xl md:text-8xl font-extrabold leading-[1.05] tracking-[-0.02em] text-[#E0218A]` |
| body | `text-base leading-[1.5] max-w-prose` |
| section | `rounded-3xl border-2 border-[#E0218A] bg-white p-8 shadow-[0_12px_24px_rgba(224,33,138,0.3)]` |
| button | `rounded-full bg-[#E0218A] px-7 py-3 text-base font-extrabold text-white transition-transform duration-[350ms] hover:scale-[1.03]` |
| label | `text-xs font-bold uppercase tracking-[0.04em] text-[#7A2457]` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** solid, stroke 2 on a 24px field, round caps, round joins, container: circle. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Phosphor (Fill) by Phosphor Icons, licence MIT. Reason: A filled, rounded family that matches glossy toy shapes. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 800, tracking -0.02em, leading 1.05, case: none.
- **Weights:** display 800, subhead 800, body 400, bold in text 800, labels and buttons 800. The style uses 2 weights (400, 800) and no other. The display is 400 heavier than the body. The accent is colour: one coloured word or field is the accent, so the weights stay quiet.
- **Body type:** 16px, leading 1.5.
- **Page:** hero split, left aligned, regular density, accent tilt 0°.
- **Ground:** bubbles. Barbiecore stands on glossy bubbles and sparkles, the shine of moulded pink plastic. Put the class `ground` on the first screen of the page; it takes `--ground`, a stack of gradients built from the colour tokens. The ground can run behind the copy, so put the class `ground-copy` on each text block of that screen: the block gets `--color-bg` and a soft edge. Keep the rest of the page on `--color-bg`.
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

### Single-hue total look (motif)

One saturated colour carries the whole frame: clothes, props, walls and type share a single hue in a few tints. Origin: internet, Los Angeles, 2022.

- Choose one hue and fix it as a hex value, for example #E0218A.
- Use 3 tints of that hue: a pale, a mid and a deep one.
- Keep one neutral (white) and one small contrast colour (sky blue) under 10% of the frame.
- Let the hue fill 60% or more of the surface.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **TikTok** (platform, web, 2016–now), published the style. A video app of short vertical clips. Its feed set the form of vertical short-form video and spread the camcorder revival.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Base colour (`base_colour`) | #E0218A | #E0218A, #FF8CC6, #7FD0F2 | --color-primary, --color-on-primary, --color-link-on-surface |
| Accent colour (`accent_colour`) | #7FD0F2 | #7FD0F2, #FFFFFF, #FF8CC6 | --color-accent, --color-on-accent, --color-link |
| Corner radius (`corner_radius`) | 24px | 12–999 px | --border-radius |
| Grid step (`grid_step`) | 8px | 4–12 px | --space-unit, --grid-gutter |
| Type scale ratio (`type_scale_ratio`) | 1.333 | 1.25–1.618 | --type-ratio, --size-small, --size-h3, --size-h2, --size-h1 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **calmer**: move toward [`clean-girl`](../clean-girl/SKILL.md) (Clean girl). Replace the hot pink with beige and warm white; keep the rounded boxes.
- If the user asks for **more playful**: move toward [`kidcore`](../kidcore/SKILL.md) (Kidcore). Add primaries, stickers and confetti, and cut the gloss.
- If the user asks for **more retro**: move toward [`y2k-aesthetic`](../y2k-aesthetic/SKILL.md) (Y2K Aesthetic). Add chrome type, silver and baby blue, and translucent plastic.

- **Came from (go here for a more orthodox version):** [`y2k-aesthetic`](../y2k-aesthetic/SKILL.md)
- **Mixes well with:** [`kidcore`](../kidcore/SKILL.md)
- **Kin in another domain:** [`dopamine-decor`](../dopamine-decor/SKILL.md), [`hollywood-regency-interior`](../hollywood-regency-interior/SKILL.md), [`mod-and-mini`](../mod-and-mini/SKILL.md), [`space-age-pop-product`](../space-age-pop-product/SKILL.md)
- **Nearest by vector profile:** [`glitch-gif`](../glitch-gif/SKILL.md), [`conceptual-sketch-ui`](../conceptual-sketch-ui/SKILL.md), [`cottagecore`](../cottagecore/SKILL.md)

## Emotional target

The viewer feels bold, playful and glad to be loud and pink.

**Keywords:** glossy, playful, bold, feminine, nostalgic, camp · **Brand archetypes:** jester, lover, innocent

## Sources

- [Wikipedia: Barbiecore](https://en.wikipedia.org/wiki/Barbiecore)
- [Know Your Meme: Barbiecore](https://knowyourmeme.com/memes/barbiecore)
- Vogue, Barbiecore and the pink trend (2022)

---

Generated from [`data/internet/styles/barbiecore.json`](../../data/internet/styles/barbiecore.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
