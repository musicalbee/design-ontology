---
name: lets-play-facecam
description: "Apply the Let's Play Facecam style (2010–now) when generating web pages, apps, memes, short video frames and other images of internet culture. Load when the user asks for: let's play, facecam, gameplay video, reaction cam, gamer channel, commentary over gameplay."
domain: internet
era: touchscreen
triggers:
  - "let's play"
  - "facecam"
  - "gameplay video"
  - "reaction cam"
  - "gamer channel"
  - "commentary over gameplay"
vector_profile:
  ornamentation: 3
  dimensionality: 2
  grid_rigidity: 2
  skeuomorphic_realism: 1
  typographic_expressiveness: 4
---

# Let's Play Facecam

> The game is the stage and the face is the audience: put the reaction next to the action, and the viewer follows the player, not the game.

Game footage fills the frame and a small live window of the player's face sits in one corner. The face reacts, and loud captions and zoom cuts push the mood.

**Period:** 2010–now · **Era:** Touchscreen · **Domain:** Internet · **Also called:** Gameplay with facecam, Reaction cam, Gamer commentary

## When to load this skill

Load it when the user asks for: "let's play", "facecam", "gameplay video", "reaction cam", "gamer channel", "commentary over gameplay".

Good for: game channel intros, game review pages, esports clip pages, creator landing pages, game launch trailers with a host.

Do not use it when:
- The audience expects a calm, adult tone.
- The product is not a game or an app demo.
- The face of a person cannot appear.

## System directives

When generating web pages, apps, memes, short video frames and other images of internet culture in Let's Play Facecam, you MUST:

1. Fill the frame with game footage and set the facecam window at 18% to 25% of the frame width.
2. Place the facecam in a corner at 24px from each edge and keep it there for the full clip.
3. Crop the facecam to a rounded box with a 4px border in the accent colour.
4. Zoom the face by 110% to 130% for 8 to 12 frames at a scare or a win, then return.
5. Add a red or yellow caption of 48px to 72px with a 4px black outline for the key joke.
6. Cut every pause over 1.5s and add a short sound hit at each cut.
7. Keep the game HUD visible; do not cover the health bar or the map with the facecam.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Studio lighting that removes the room.
- **NEVER:** A facecam that covers the game HUD.
- **NEVER:** Silent, still footage with no cuts.
- **NEVER:** Small, thin captions that fade into the game.
- **NEVER:** A corporate lower-third with a logo bar.
- **NEVER:** Muted colour grades.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■■□□` 3/5 | pure minimal | maximalist |
| Dimensionality | `■■□□□` 2/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■□□□` 2/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■□□□□` 1/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■■■■□` 4/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** A 16:9 frame with two layers: full-bleed game footage and a facecam box of 18% to 25% width at a corner, on a 24px safe margin.
- **Whitespace ratio:** Under 5% of the frame is empty; the game and the face use all of it.
- **Alignment rules:** The facecam sits at a corner, usually bottom-left or bottom-right; captions centre on the lower third.
- **Container geometry:** A facecam box with a 12px radius and a 4px accent border; captions use a 4px outline instead of a box.

## Typography

- **Classifications:** bold display · outlined sans · impact-style
- **Tracking:** Display takes +0.01em; captions take 0em.
- **Leading:** Display 1.0; body 1.4.
- **Hierarchy rules:**
  - Use one display weight (400) and a body weight of 500.
  - Use sizes 18, 32, 56 and 72px.
  - Set the main caption in capitals at 56px to 72px with a 4px outline.
  - Set the channel name at 24px in the accent colour.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Anton | Inter | Anton is an open look-alike of the Impact face that gamers use for captions. |
| Bangers | Rubik | A comic caption face for jokes and sound words. |
| Luckiest Guy | Nunito | A thick, round display face for big reactions. |

## Colour & lighting

- **Palette structure:** A game-neutral dark frame with hot red and warm yellow for captions, and one cyan border for the facecam.
- **Contrast rules:** White text on screen black holds at least 17:1; captions also carry a 4px black outline so that they read on any game scene.
- **Surface treatment:** Flat dark panels; the game footage is the only texture.
- **Light and shadow:** No cast shadow; a 4px black outline separates text from the picture, and the facecam keeps a 3px accent glow.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Screen Black | `#101014` | background |
| Panel Grey | `#1D1D24` | surface |
| Caption White | `#FFFFFF` | text |
| Rage Red | `#FF2E3B` | primary |
| Cam Cyan | `#22D3EE` | accent |
| Score Yellow | `#FFD60A` | highlight |

## Materiality & texture

- **Surface simulation:** A monitor capture: sharp game pixels and a webcam image with room light and slight compression noise.
- **Border rules:** A 4px border in cyan on the facecam; a 4px black outline on caption text.
- **Blur and elevation:** No blur; the facecam sits flat above the game with a 4px hard shadow.

## Ornamentation & iconography

- **Iconography:** Solid icons at 24px for sound, subscribe and like; square terminals and a thick 3px edge.
- **Illustration:** Game footage, a webcam face, arrows and circles in red; sticker faces at 64px for jokes.
- **Decorative elements:** facecam box · outlined caption · red arrow · zoom punch-in · sound-hit text

## Motion & interactivity

- **Born on screen:** yes
- **Transition physics:** The facecam punches in by 20% over 120ms at a peak moment; captions pop in at 110% size and settle to 100% over 160ms; each cut lands on a sound hit.
- **Easing:** cubic-bezier(0.34, 1.56, 0.64, 1)
- **Duration (ms):** 160
- **Hover and active:** Hover lifts a button by 2px with a 4px hard shadow; active state flips the fill to yellow.

## Code & token primer

Set `data-style="lets-play-facecam"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="lets-play-facecam"] {
  --color-bg: #101014;
  --color-surface: #1D1D24;
  --color-text: #FFFFFF;
  --color-muted: #B8B8C4;
  --color-primary: #FF2E3B;
  --color-accent: #22D3EE;
  --color-border: #22D3EE;
  --font-sans: "Inter", "Rubik", sans-serif;
  --font-display: "Anton", "Bangers", sans-serif;
  --border-radius: 12px;
  --border-width: 4px;
  --shadow-elevation: 4px 4px 0 #000000;
  --backdrop-filter: none;
  --space-unit: 8px;
  --ease: cubic-bezier(0.34, 1.56, 0.64, 1);
  --duration: 160ms;
  --type-ratio: 1.5;
  --size-small: 10.67px;
  --size-h3: 36px;
  --size-h2: 54px;
  --size-h1: 81px;
  --color-on-bg: #FFFFFF;
  --color-on-surface: #FFFFFF;
  --color-on-primary: #101014;
  --color-on-accent: #101014;
  --color-muted-on-bg: #B8B8C4;
  --color-muted-on-surface: #B8B8C4;
  --color-link: #22D3EE;
  --color-link-on-surface: #22D3EE;
  --display-weight: 400;
  --subhead-weight: 400;
  --body-weight: 500;
  --strong-weight: 700;
  --label-weight: 500;
  --display-tracking: 0.01em;
  --display-leading: 1;
  --display-case: uppercase;
  --body-leading: 1.4;
  --body-size: 16px;
  --icon-stroke: 3;
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
| page | `bg-[#101014] text-[#FFFFFF] font-sans antialiased px-4 md:px-12` |
| heading | `text-5xl md:text-7xl font-normal uppercase leading-none tracking-[0.01em] [text-shadow:0_0_0_#000,_3px_3px_0_#000]` |
| body | `text-base leading-[1.6] max-w-prose` |
| section | `rounded-xl border-4 border-[#22D3EE] bg-[#1D1D24] shadow-[4px_4px_0_#000000]` |
| button | `rounded-xl border-4 border-[#000000] bg-[#FF2E3B] px-6 py-3 text-sm font-bold uppercase text-[#101014] transition-transform duration-[160ms] hover:-translate-y-0.5` |
| label | `text-xs font-medium uppercase tracking-[0.1em] text-[#22D3EE]` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** solid, stroke 3 on a 24px field, square caps, miter joins, container: rounded. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Phosphor (Fill) by Phosphor Icons, licence MIT. Reason: A thick, solid family matches the loud, high-contrast captions and the bold game frame. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 400, tracking 0.01em, leading 1, case: uppercase.
- **Weights:** display 400, subhead 400, body 500, bold in text 700, labels and buttons 500. The style uses 3 weights (400, 500, 700) and no other. The display is 100 lighter than the body, so size carries the hierarchy. The accent is colour: one coloured word or field is the accent, so the weights stay quiet.
- **Body type:** 16px, leading 1.4.
- **Page:** hero poster, left aligned, compact density, accent tilt -2°.
- **Ground:** scanlines. The ground is a dark monitor image with fine scanlines, the screen that the game runs on. Put the class `ground` on the first screen of the page; it takes `--ground`, a stack of gradients built from the colour tokens. The ground can run behind the copy, so put the class `ground-copy` on each text block of that screen: the block gets `--color-bg` and a soft edge. Keep the rest of the page on `--color-bg`.
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

### Jump cut (montage)

A cut inside one continuous shot that removes time and leaves the jump in view. Origin: film & video, Paris, 1960.

- Remove 0.3 to 2 seconds inside one shot and keep the framing within 10% of the frame width, so that the jump shows.
- In a talk to camera, cut on the word and not on the action: one cut every 2 to 4 seconds.

### Picture-in-picture facecam (montage)

A small live window of the player's face placed above the main picture, so the viewer sees the action and the reaction together. Origin: internet, YouTube, c. 2010.

- Set the face window at 18% to 25% of the frame width.
- Place it at a corner with a 24px margin.
- Add a 4px border and a 12px radius.
- Keep the window clear of the game HUD.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **Twitch** (platform, web, 2011–now), published the style. A live video site, first for games. Its stream layouts, with a face window, chat and alert boxes, set the overlay look.
- **YouTube** (platform, web, 2005–now), published the style. A web site where people post video. The daily vlog grew here, and it became the main home of the music video.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Base colour (`base_colour`) | #FF2E3B | #FF2E3B, #22D3EE, #FFD60A | --color-primary, --color-on-primary, --color-link-on-surface |
| Accent colour (`accent_colour`) | #22D3EE | #22D3EE, #FFD60A, #FF2E3B | --color-accent, --color-on-accent, --color-link |
| Corner radius (`corner_radius`) | 12px | 4–16 px | --border-radius |
| Grid step (`grid_step`) | 8px | 4–12 px | --space-unit, --grid-gutter |
| Type scale ratio (`type_scale_ratio`) | 1.5 | 1.333–1.618 | --type-ratio, --size-small, --size-h3, --size-h2, --size-h1 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more produced**: move toward [`livestream-overlay`](../livestream-overlay/SKILL.md) (Livestream Overlay). Add a full frame with a name bar, alert boxes and a chat panel; keep the facecam.
- If the user asks for **calmer**: move toward [`video-essay`](../video-essay/SKILL.md) (Video Essay). Replace the shouted captions with a steady voice, clean subtitles and a 12% black vignette.
- If the user asks for **more viral**: move toward [`clickbait-thumbnail`](../clickbait-thumbnail/SKILL.md) (Clickbait Thumbnail). Freeze the funniest facecam frame, enlarge the face to 60% of the frame and add a 120px headline.

- **Came from (go here for a more orthodox version):** [`unboxing-video`](../unboxing-video/SKILL.md)
- **Led to (go here for a newer version):** [`lip-sync-dance-short`](../lip-sync-dance-short/SKILL.md), [`livestream-overlay`](../livestream-overlay/SKILL.md), [`video-essay`](../video-essay/SKILL.md)
- **Mixes well with:** [`clickbait-thumbnail`](../clickbait-thumbnail/SKILL.md), [`pixel-art-web`](../pixel-art-web/SKILL.md)
- **Kin in another domain:** [`creator-vlog`](../creator-vlog/SKILL.md)
- **Nearest by vector profile:** [`lip-sync-dance-short`](../lip-sync-dance-short/SKILL.md), [`neo-brutalism-ui`](../neo-brutalism-ui/SKILL.md), [`pop-art-web`](../pop-art-web/SKILL.md)

## Emotional target

The viewer feels part of a shared, loud and funny moment with the player.

**Keywords:** loud, funny, energetic, social, reactive · **Brand archetypes:** jester, everyman

## Sources

- [Wikipedia: Let's Play](https://en.wikipedia.org/wiki/Let%27s_Play)
- [Wikipedia: PewDiePie](https://en.wikipedia.org/wiki/PewDiePie)

---

Generated from [`data/internet/styles/lets-play-facecam.json`](../../data/internet/styles/lets-play-facecam.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
