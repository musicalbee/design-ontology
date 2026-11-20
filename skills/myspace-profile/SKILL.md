---
name: myspace-profile
description: "Apply the Myspace Profile style (2003–2010) when generating web pages, apps, memes, short video frames, forum and chat screens, and other images of internet culture. Load when the user asks for: myspace, top 8, profile page, custom css profile, glitter text, 2000s social profile."
domain: internet
era: web-1
triggers:
  - "myspace"
  - "top 8"
  - "profile page"
  - "custom css profile"
  - "glitter text"
  - "2000s social profile"
  - "music player profile"
  - "scene kid"
vector_profile:
  ornamentation: 5
  dimensionality: 2
  grid_rigidity: 3
  skeuomorphic_realism: 2
  typographic_expressiveness: 3
---

# Myspace Profile

> A profile is a bedroom wall: the owner decorates it, and the decoration says who they are.

A user profile page that the owner restyled with pasted CSS: a wallpaper, glitter text, a music player, a Top 8 friends grid and a mirror-selfie photo. Myspace made the page a personal stage.

**Period:** 2003–2010 · **Era:** Web 1.0 · **Domain:** Internet · **Also called:** Social profile page, Custom CSS profile, Top 8 profile

## When to load this skill

Load it when the user asks for: "myspace", "top 8", "profile page", "custom css profile", "glitter text", "2000s social profile", "music player profile", "scene kid".

Good for: nostalgic social and band pages, fan and community profiles, retro party and campaign pages, parody of early social media, creator link hubs.

Do not use it when:
- The page needs privacy, safety or calm.
- The text is long and the reader needs ease.
- The brand needs a clean, adult tone.

## System directives

When generating web pages, apps, memes, short video frames, forum and chat screens, and other images of internet culture in Myspace Profile, you MUST:

1. Replace the page ground with a full-bleed wallpaper: a band photo, a pattern or a gradient, fixed at the viewport.
2. Make boxes semi-transparent: black at 70% opacity with a 1px border in a bright accent such as #FF3399.
3. Place a profile photo of 170px wide at top left, a name line, a mood line and an 'online now' mark.
4. Show a Top 8 friends grid of 4 by 2 tiles of 75px by 75px with a name below each tile.
5. Add an autoplay music player bar of 24px to 40px and a comment wall of stacked photo and text rows.
6. Set text in 10px to 12px Verdana-like type, and set the headings in a decorative colour or glitter image.
7. Add a glitter or sparkle GIF as a heading and a blinking cursor trail.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** A uniform template that every user shares.
- **NEVER:** Large, quiet type at 18px or more.
- **NEVER:** Neutral, flat colour with no wallpaper.
- **NEVER:** A single column with no friends grid.
- **NEVER:** Muted tones and hidden music.
- **NEVER:** Locked layout with no custom code.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■■■■` 5/5 | pure minimal | maximalist |
| Dimensionality | `■■□□□` 2/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■■□□` 3/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■■□□□` 2/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■■■□□` 3/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** A fixed two-column table of 800px: a left column of 300px for the photo, details and friends, and a right column of 480px for the blog and comments.
- **Whitespace ratio:** 5% to 15% of the page is empty; the gaps are 4px, 8px and 16px.
- **Alignment rules:** Left column items flush left; headings centred in colour bars; the Top 8 grid centred.
- **Container geometry:** Boxes with a 0px to 4px radius, a 1px bright border and a 10px to 16px inner padding.

## Typography

- **Classifications:** humanist sans · comic display · script
- **Tracking:** Display 0.01em; body 0em.
- **Leading:** Display 1.2; body 1.4.
- **Hierarchy rules:**
  - Use 11px for body text, 12px bold for box titles and 24px for the name.
  - Use one bright colour for headings and white for text.
  - Use bold for names and underline for links.
  - Show the mood line in italics.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Pacifico | Noto Sans | Pacifico is a rounded script for names and glitter headings; Noto Sans stands in for Verdana. |
| Comic Neue | Arimo | Comic Neue is the open look-alike of Comic Sans MS; Arimo is the Arial look-alike. |
| Permanent Marker | Noto Sans | A marker display for emo and punk profiles. |

## Colour & lighting

- **Palette structure:** A dark or patterned wallpaper, translucent black boxes, one hot accent and the default blue and orange of the template.
- **Contrast rules:** White on box black is 17:1; hot pink on black is 6:1; keep body text white and use bright colours for headings and borders.
- **Surface treatment:** A fixed wallpaper under boxes of black at 60% to 80% opacity; flat colour title bars.
- **Light and shadow:** No light source; a 1px bright border and a 2px glow on the active box; text may carry a 1px black shadow.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Wallpaper Black | `#111111` | background |
| Box Black | `#1A1A1A` | panel |
| White | `#FFFFFF` | text |
| Hot Pink | `#FF3399` | primary |
| Electric Blue | `#3399FF` | accent |
| Template Blue | `#6699CC` | title bar |
| Template Orange | `#FF9933` | highlight |
| Glitter Silver | `#C0C0C0` | border |

## Materiality & texture

- **Surface simulation:** A bedroom wall of posters under glass: translucent panels over a printed wallpaper.
- **Border rules:** A 1px solid border in an accent colour; a 2px outset on the template boxes.
- **Blur and elevation:** A shadow of 2px black on text; no blur on boxes.

## Ornamentation & iconography

- **Iconography:** Small 16px icons for mail, add friend, comment and block; glitter and star GIFs.
- **Illustration:** Band and selfie photos with a flash, glitter text, heart and skull clip art, and animated sparkle trails.
- **Decorative elements:** wallpaper · Top 8 grid · glitter heading · music player · comment wall · mood line

## Motion & interactivity

- **Born on screen:** yes
- **Transition physics:** GIF sparkles loop at 8 to 12 frames per second; a cursor trail follows the pointer; the music starts at page load; boxes cut in with no easing.
- **Easing:** cubic-bezier(0, 0, 1, 1)
- **Duration (ms):** 100
- **Hover and active:** Hover turns a link from white to hot pink with underline; a tile in Top 8 gets a 2px accent border.

## Code & token primer

Set `data-style="myspace-profile"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="myspace-profile"] {
  --color-bg: #111111;
  --color-surface: #1A1A1A;
  --color-text: #FFFFFF;
  --color-muted: #C0C0C0;
  --color-primary: #FF3399;
  --color-accent: #3399FF;
  --color-border: #FF3399;
  --font-sans: "Noto Sans", "Arimo", Verdana, sans-serif;
  --font-display: "Pacifico", "Comic Neue", cursive;
  --border-radius: 4px;
  --border-width: 1px;
  --shadow-elevation: 0 0 2px #FF3399;
  --backdrop-filter: none;
  --space-unit: 8px;
  --ease: cubic-bezier(0, 0, 1, 1);
  --duration: 100ms;
  --type-ratio: 1.25;
  --size-small: 11.2px;
  --size-h3: 21.88px;
  --size-h2: 27.34px;
  --size-h1: 34.18px;
  --color-on-bg: #FFFFFF;
  --color-on-surface: #FFFFFF;
  --color-on-primary: #111111;
  --color-on-accent: #111111;
  --color-muted-on-bg: #C0C0C0;
  --color-muted-on-surface: #C0C0C0;
  --color-link: #3399FF;
  --color-link-on-surface: #3399FF;
  --display-weight: 700;
  --subhead-weight: 700;
  --body-weight: 400;
  --strong-weight: 700;
  --label-weight: 700;
  --display-tracking: 0.01em;
  --display-leading: 1.2;
  --display-case: none;
  --body-leading: 1.4;
  --body-size: 14px;
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
| page | `bg-[#111111] text-white font-sans text-[12px] px-2 md:px-8` |
| heading | `text-3xl md:text-5xl font-bold text-[#FF3399] [text-shadow:1px_1px_0_#000]` |
| body | `text-[12px] leading-[1.4] max-w-[480px]` |
| section | `border border-[#FF3399] bg-[#1A1A1A]/80 rounded p-3` |
| button | `rounded border border-[#3399FF] bg-[#FF3399] px-3 py-1 text-[11px] font-bold text-black hover:bg-[#3399FF]` |
| label | `text-[11px] font-bold text-[#3399FF]` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** solid, stroke 2 on a 24px field, round caps, round joins, container: rounded. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Pepicons (Pop) by CyCraft, licence CC BY 4.0. Reason: The pop style of this pack matches the cut-out stickers on a profile. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 700, tracking 0.01em, leading 1.2, case: none.
- **Weights:** display 700, subhead 700, body 400, bold in text 700, labels and buttons 700. The style uses 2 weights (400, 700) and no other. The display is 300 heavier than the body. The accent is colour: one coloured word or field is the accent, so the weights stay quiet.
- **Body type:** 14px, leading 1.4.
- **Page:** hero split, left aligned, compact density, accent tilt -2°.
- **Ground:** orbs. The ground is a dark wallpaper with a few bright spots, as on a custom profile. Put the class `ground` on the first screen of the page; it takes `--ground`, a stack of gradients built from the colour tokens. The ground can run behind the copy, so put the class `ground-copy` on each text block of that screen: the block gets `--color-bg` and a soft edge. Keep the rest of the page on `--color-bg`.
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

### Profile CSS injection (technology)

A user pastes CSS or HTML into a profile field, and the page takes the new style. Origin: internet, United States, 2003.

- Paste the CSS in the field that the site allows.
- Set a wallpaper on the page with a fixed position.
- Set the boxes to 60% to 80% opacity.
- Hide or move site ads and default parts only when the site allows it.

### Tiled background (motif)

A small image that repeats in both directions behind a page. It fills any window size from one file. Origin: internet, United States, c. 1995.

- Make a tile of 32px to 128px that joins at all 4 edges.
- Keep the tile to 16 or 64 colours so that the file stays small.
- Keep text in a bright colour on a dark tile, or in a dark colour on a pale tile.
- Use a fixed position when the page scrolls.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **Myspace** (platform, web, 2003–now), launched the style. A social network of profile pages. Users posted flash digicam photos and filled their pages with glitter, gloss and custom code.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Base colour (`base_colour`) | #FF3399 | #FF3399, #3399FF, #FF9933, #9933FF | --color-primary, --color-on-primary, --color-link-on-surface |
| Accent colour (`accent_colour`) | #3399FF | #3399FF, #FF9933, #C0C0C0 | --color-accent, --color-on-accent, --color-link |
| Corner radius (`corner_radius`) | 4px | 0–8 px | --border-radius |
| Grid step (`grid_step`) | 8px | 4–12 px | --space-unit, --grid-gutter |
| Type scale ratio (`type_scale_ratio`) | 1.25 | 1.125–1.5 | --type-ratio, --size-small, --size-h3, --size-h2, --size-h1 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **cleaner**: move toward [`web-2-0-gloss`](../web-2-0-gloss/SKILL.md) (Web 2.0 Gloss). Replace the wallpaper with a white ground, rounded boxes and glossy buttons.
- If the user asks for **more retro**: move toward [`geocities-homepage`](../geocities-homepage/SKILL.md) (GeoCities Homepage). Replace the translucent boxes with a tiled background and a visitor counter.
- If the user asks for **more minimal**: move toward [`minimalism-web`](../minimalism-web/SKILL.md) (Minimalism Web). Keep the photo and the friends grid; remove the wallpaper and the glitter.

- **Came from (go here for a more orthodox version):** [`geocities-homepage`](../geocities-homepage/SKILL.md)
- **Rejects (the opposite pole; do not blend):** [`portal-table-layout`](../portal-table-layout/SKILL.md)
- **Mixes well with:** [`y2k-aesthetic`](../y2k-aesthetic/SKILL.md)
- **Kin in another domain:** [`y2k-digicam`](../y2k-digicam/SKILL.md)
- **Nearest by vector profile:** [`chat-sticker-pack`](../chat-sticker-pack/SKILL.md), [`cybercore-web`](../cybercore-web/SKILL.md), [`geocities-homepage`](../geocities-homepage/SKILL.md)

## Emotional target

The viewer feels the closeness of a friend's room: personal, loud and a little vain.

**Keywords:** personal, social, glittery, emo, customised, teenage · **Brand archetypes:** creator, outlaw, lover

## Sources

- [Wikipedia: Myspace](https://en.wikipedia.org/wiki/Myspace)
- [Wikipedia: Tom Anderson](https://en.wikipedia.org/wiki/Tom_Anderson)
- [Know Your Meme: Myspace](https://knowyourmeme.com/memes/sites/myspace)

---

Generated from [`data/internet/styles/myspace-profile.json`](../../data/internet/styles/myspace-profile.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
