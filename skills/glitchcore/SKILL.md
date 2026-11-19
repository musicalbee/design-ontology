---
name: glitchcore
description: "Apply the Glitchcore style (2019–now) when generating web pages, apps, memes, short video frames, forum and chat screens, and other images of internet culture. Load when the user asks for: glitchcore, digicore edit, datamosh, glitch edit, channel split, chaotic maximalism."
domain: internet
era: feed-mobile
triggers:
  - "glitchcore"
  - "digicore edit"
  - "datamosh"
  - "glitch edit"
  - "channel split"
  - "chaotic maximalism"
  - "hyperactive edit"
vector_profile:
  ornamentation: 5
  dimensionality: 3
  grid_rigidity: 1
  skeuomorphic_realism: 1
  typographic_expressiveness: 5
---

# Glitchcore

> Overload the signal: show the fault, the repeat and the flash until the error becomes the style.

Fast, crowded edits with split colour channels, repeated frames, datamosh, bright flash and old web clutter. It grew with the digicore music scene on SoundCloud, Discord and short-video apps.

**Period:** 2019–now · **Era:** The feed and the phone · **Domain:** Internet · **Also called:** Glitch core, Digicore visuals

## When to load this skill

Load it when the user asks for: "glitchcore", "digicore edit", "datamosh", "glitch edit", "channel split", "chaotic maximalism", "hyperactive edit".

Good for: music visualisers and short edits, game and Discord community pages, festival and club flyers, art projects about the net.

Do not use it when:
- The audience has photosensitive epilepsy and no safe option exists.
- The page needs calm, fast reading.
- The brand is formal, medical or financial.

## System directives

When generating web pages, apps, memes, short video frames, forum and chat screens, and other images of internet culture in Glitchcore, you MUST:

1. Split the colour channels by 4px to 12px in opposite directions on all key images.
2. Cut the edit every 4 to 12 frames at 30 fps and repeat the same frame 2 to 4 times.
3. Use hot colours: acid green (#39FF14), magenta (#FF00AA) and cyan (#00E5FF) on black.
4. Fill the frame with 5 or more layers: text, stars, cursors, stickers and old web icons.
5. Set display text at 48px to 120px in a bold face, with a 3px stroke in a second colour.
6. Add scan lines of 2px at 12% opacity and noise at 8%.
7. Add a flash warning for any flicker above 3 flashes in 1s.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Calm, empty layouts.
- **NEVER:** Soft pastel palettes.
- **NEVER:** Slow, long takes.
- **NEVER:** Subtle grey tones.
- **NEVER:** Clean, uniform type.
- **NEVER:** Natural photographic colour.
- **NEVER:** Static, centred composition.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■■■■` 5/5 | pure minimal | maximalist |
| Dimensionality | `■■■□□` 3/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■□□□□` 1/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■□□□□` 1/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■■■■■` 5/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** No stable grid; layers overlap at random offsets of 8px to 80px, with 4 to 8 layers in each frame.
- **Whitespace ratio:** 0% to 10% of the frame stays empty; the spacing scale is 2, 4, 8 and 16px.
- **Alignment rules:** Elements are placed off axis, with tilts of -15° to 15° and cropped edges.
- **Container geometry:** Hard rectangles with a 0px radius, window frames, stickers and torn bands of 4px to 40px.

## Typography

- **Classifications:** wide display · bitmap · monospace
- **Tracking:** Display takes 0 to +0.04em; labels take +0.1em.
- **Leading:** Display 1.0; body 1.4.
- **Hierarchy rules:** Use two weights: regular (400) and bold (700). · Use sizes 12, 20, 48 and 96px. · Set display text with a 3px stroke or a split-colour shadow. · Repeat key words 2 to 3 times at different sizes.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Rubik Glitch | Space Mono | A glitch display face with a mono text face. |
| Press Start 2P | VT323 | A bitmap pair for an old-web look. |
| Anton | Roboto Mono | A heavy condensed face with a mono face for small text. |

## Colour & lighting

- **Palette structure:** Black with 3 hot colours at full strength, and white for flash.
- **Contrast rules:** Text on signal black holds at least 12:1; hot colours carry strokes and splits, not long text.
- **Surface treatment:** Flat black with colour layers; scan lines of 2px at 12%; noise of 8%; datamosh bands.
- **Light and shadow:** A split-colour offset shadow of 4px in magenta and cyan; bursts of white flash for 1 to 2 frames.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Signal Black | `#050508` | background |
| Acid Green | `#39FF14` | primary |
| Hot Magenta | `#FF00AA` | accent |
| Cyan Split | `#00E5FF` | second accent |
| Flash White | `#FFFFFF` | text |
| Warning Yellow | `#FFE600` | highlight |
| Window Grey | `#2B2B36` | surface |

## Materiality & texture

- **Surface simulation:** A broken video signal, a compressed screen recording and old CRT glow.
- **Border rules:** A 2px line in acid green on windows; torn band edges with no line.
- **Blur and elevation:** No blur; a 4px offset shadow in a second colour; layers stack by overlap.

## Ornamentation & iconography

- **Iconography:** Bitmap icons at 24px: cursors, stars, hearts, warning signs and close buttons, with a 1px dark edge.
- **Illustration:** Looped anime or game frames, old web stickers, stars and cursors, with datamosh and colour splits.
- **Decorative elements:** channel split · repeated frame · torn band · cursor · sparkle star

## Motion & interactivity

- **Born on screen:** yes
- **Transition physics:** Jump cuts every 4 to 12 frames; bursts of glitch of 2 to 6 frames; text jitters by 2px to 6px at 12 fps.
- **Easing:** steps(2, end)
- **Duration (ms):** 100
- **Hover and active:** Hover splits the colour channels by 6px for 120ms; the active state cuts to a negative image for 2 frames.

## Code & token primer

Set `data-style="glitchcore"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="glitchcore"] {
  --color-bg: #050508;
  --color-surface: #2B2B36;
  --color-text: #FFFFFF;
  --color-muted: #C9C9D6;
  --color-primary: #39FF14;
  --color-accent: #FF00AA;
  --color-border: #39FF14;
  --font-sans: "Space Mono", "Roboto Mono", monospace;
  --font-display: "Rubik Glitch", "Anton", sans-serif;
  --border-radius: 0px;
  --border-width: 2px;
  --shadow-elevation: 4px 4px 0 #FF00AA, -4px -4px 0 #00E5FF;
  --backdrop-filter: none;
  --space-unit: 4px;
  --ease: steps(2, end);
  --duration: 100ms;
  --type-ratio: 1.5;
  --size-small: 10.67px;
  --size-h3: 36px;
  --size-h2: 54px;
  --size-h1: 81px;
  --color-on-bg: #FFFFFF;
  --color-on-surface: #FFFFFF;
  --color-on-primary: #050508;
  --color-on-accent: #050508;
  --color-muted-on-bg: #C9C9D6;
  --color-muted-on-surface: #C9C9D6;
  --color-link: #FF00AA;
  --color-link-on-surface: #39FF14;
  --display-weight: 700;
  --subhead-weight: 400;
  --body-weight: 400;
  --strong-weight: 700;
  --label-weight: 700;
  --display-tracking: 0.02em;
  --display-leading: 1;
  --display-case: uppercase;
  --body-leading: 1.4;
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
| page | `bg-[#050508] text-[#FFFFFF] font-mono antialiased px-6 md:px-12` |
| heading | `text-5xl md:text-8xl font-bold uppercase leading-none [text-shadow:4px_4px_0_#FF00AA,-4px_-4px_0_#00E5FF]` |
| body | `text-base leading-[1.6] max-w-prose` |
| section | `border border-[#39FF14] bg-[#2B2B36]` |
| button | `rounded-none border-2 border-[#39FF14] bg-[#39FF14] px-6 py-3 text-sm font-bold uppercase text-[#050508] hover:[text-shadow:3px_0_#FF00AA,-3px_0_#00E5FF]` |
| label | `text-xs uppercase tracking-widest` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** solid, stroke 2 on a 24px field, butt caps, miter joins, container: square. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Pixelarticons (Regular) by Gerrit Halfmann, licence MIT. Reason: Pixel icons match the bitmap stickers and old window frames of a glitch edit. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 700, tracking 0.02em, leading 1, case: uppercase.
- **Weights:** display 700, subhead 400, body 400, bold in text 700, labels and buttons 700. The style uses 2 weights (400, 700) and no other. The display is 300 heavier than the body. The accent is colour: one coloured word or field is the accent, so the weights stay quiet.
- **Body type:** 16px, leading 1.4.
- **Page:** hero poster, left aligned, compact density, accent tilt -3°.
- **Ground:** scanlines. Glitchcore shows a broken screen, so the ground is a scan-line field with noise. Put the class `ground` on the first screen of the page; it takes `--ground`, a stack of gradients built from the colour tokens. The ground can run behind the copy, so put the class `ground-copy` on each text block of that screen: the block gets `--color-bg` and a soft edge. Keep the rest of the page on `--color-bg`.
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

### Glitch (process)

A fault in a signal, kept as an image: torn lines, split colour channels and repeated frames. Origin: film & video, Wuppertal, 1963.

- Shift the red and blue channels by 2 to 8px in opposite directions.
- Cut bands of 4 to 40px and move them sideways by 10 to 60px.
- Run the effect in bursts of 2 to 6 frames at 24 fps, and leave the image clean between bursts.
- Do not apply it to body text.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **SoundCloud** (platform, web, 2007–now), published the style. A site where people post music. The digicore and hyperpop scenes shared tracks and cover art here.
- **TikTok** (platform, web, 2016–now), published the style. A video app of short vertical clips. Its feed set the form of vertical short-form video and spread the camcorder revival.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Base colour (`base_colour`) | #39FF14 | #39FF14, #FF00AA, #00E5FF | --color-primary, --color-on-primary, --color-link-on-surface |
| Accent colour (`accent_colour`) | #FF00AA | #FF00AA, #00E5FF, #FFE600 | --color-accent, --color-on-accent, --color-link |
| Corner radius (`corner_radius`) | 0px | 0–0 px | --border-radius |
| Grid step (`grid_step`) | 4px | 2–8 px | --space-unit, --grid-gutter |
| Type scale ratio (`type_scale_ratio`) | 1.5 | 1.25–1.618 | --type-ratio, --size-small, --size-h3, --size-h2, --size-h1 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **calmer**: move toward [`dreamcore`](../dreamcore/SKILL.md) (Dreamcore). Slow the cuts to 1.2s, replace hot colours with pastels and lower the noise.
- If the user asks for **more polished**: move toward [`hyperpop-visual`](../hyperpop-visual/SKILL.md) (Hyperpop Visual). Use clean chrome and pastel gradients, and keep the speed.
- If the user asks for **more retro**: move toward [`cyberdelia`](../cyberdelia/SKILL.md) (Cyberdelia). Replace the stars with swirls and add chrome type in a violet ground.

- **Came from (go here for a more orthodox version):** [`y2k-aesthetic`](../y2k-aesthetic/SKILL.md)
- **Rejects (the opposite pole; do not blend):** [`minimalism-web`](../minimalism-web/SKILL.md)
- **Mixes well with:** [`hyperpop-visual`](../hyperpop-visual/SKILL.md), [`pixel-art-web`](../pixel-art-web/SKILL.md), [`vaporwave`](../vaporwave/SKILL.md)
- **Kin in another domain:** [`music-video`](../music-video/SKILL.md), [`vertical-short-form`](../vertical-short-form/SKILL.md)
- **Nearest by vector profile:** [`cyberdelia`](../cyberdelia/SKILL.md), [`clickbait-thumbnail`](../clickbait-thumbnail/SKILL.md), [`hyperpop-visual`](../hyperpop-visual/SKILL.md)

## Emotional target

The viewer feels overloaded, excited and a little anxious, in a fast, playful way.

**Keywords:** chaotic, fast, digital, hyperactive, noisy, playful · **Brand archetypes:** outlaw, jester

## Sources

- [Wikipedia, Glitchcore](https://en.wikipedia.org/wiki/Glitchcore)
- [Wikipedia, Digicore](https://en.wikipedia.org/wiki/Digicore)

---

Generated from [`data/internet/styles/glitchcore.json`](../../data/internet/styles/glitchcore.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
