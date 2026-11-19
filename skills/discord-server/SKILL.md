---
name: discord-server
description: "Apply the Discord Server style (2015–) when generating web pages, apps, memes, short video frames, forum and chat screens, and other images of internet culture. Load when the user asks for: discord, chat server, community server, channels, emoji reaction, role colour."
domain: internet
era: feed-mobile
triggers:
  - "discord"
  - "chat server"
  - "community server"
  - "channels"
  - "emoji reaction"
  - "role colour"
vector_profile:
  ornamentation: 2
  dimensionality: 2
  grid_rigidity: 3
  skeuomorphic_realism: 2
  typographic_expressiveness: 2
---

# Discord Server

> A community lives in a room that is always open, and the talk flows in real time instead of in threads.

A dark chat app for a community: a rail of round server icons, a list of text and voice channels, a stream of messages in time order with avatars, and emoji reactions under each message.

**Period:** 2015– · **Era:** The feed and the phone · **Domain:** Internet · **Also called:** Chat server, Community server

## When to load this skill

Load it when the user asks for: "discord", "chat server", "community server", "channels", "emoji reaction", "role colour".

Good for: community hubs for games and creators, chat tools for teams and classes, live event chat, dark app themes.

Do not use it when:
- The content must be found later by search.
- The audience needs a light, calm reading page.
- The talk needs long, ranked answers.

## System directives

When generating web pages, apps, memes, short video frames, forum and chat screens, and other images of internet culture in Discord Server, you MUST:

1. Use three columns: a rail of 72px with round server icons, a channel list of 240px, and the message stream.
2. Name text channels with a # and voice channels with a speaker icon.
3. Show each message group with a round avatar of 40px, a coloured user name, a time stamp and the text under it.
4. Put emoji reactions under a message as small pills with a count.
5. Use a dark grey ground with a blue-violet brand colour for the active items.
6. Give each role a colour and set the user name in that colour.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Light themes with white space.
- **NEVER:** Threads as the main structure.
- **NEVER:** Posts with titles and scores.
- **NEVER:** Serif body text in the chat.
- **NEVER:** Static pages with no presence.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■□□□` 2/5 | pure minimal | maximalist |
| Dimensionality | `■■□□□` 2/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■■□□` 3/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■■□□□` 2/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■■□□□` 2/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** Three fixed columns (72px, 240px, fluid) and an optional member list of 240px at the right.
- **Whitespace ratio:** 15% to 25% of the screen stays empty; message groups have 16px gaps.
- **Alignment rules:** Messages align left beside the avatar; the composer sits at the bottom of the stream.
- **Container geometry:** Round server icons that turn to a 16px radius on hover; channel rows and pills with a 4px to 8px radius.

## Typography

- **Classifications:** geometric sans · humanist sans
- **Tracking:** Display 0em; body 0em.
- **Leading:** Display 1.25; body 1.375.
- **Hierarchy rules:**
  - Use 12px for time stamps, 16px for messages and 20px for the server name.
  - Set user names at weight 500 to 600 in the role colour.
  - Set channel names in the muted colour, and the active one in white.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Figtree | Noto Sans | Open faces near Whitney and gg sans, the Discord faces. |
| Nunito Sans | Nunito Sans | A rounder open sans for a friendlier server. |

## Colour & lighting

- **Palette structure:** Three dark greys for the columns, white text and one blue-violet brand colour; role colours for names.
- **Contrast rules:** White on the chat grey is 12:1; muted grey on the chat grey is 4.6:1.
- **Surface treatment:** Flat dark panels in three steps of grey.
- **Light and shadow:** A soft shadow only on menus and pop-outs.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Rail Black | `#1E1F22` | background |
| Channel Grey | `#2B2D31` | panel |
| Chat Grey | `#313338` | panel |
| Text White | `#F2F3F5` | text |
| Muted Grey | `#949BA4` | muted |
| Blurple | `#5865F2` | primary |
| Online Green | `#23A55A` | accent |

## Materiality & texture

- **Surface simulation:** A flat dark app with soft rounded rows.
- **Border rules:** No borders between columns; the steps of grey separate them.
- **Blur and elevation:** No blur; menus float with a soft shadow.

## Ornamentation & iconography

- **Iconography:** Filled icons of 20px to 24px: a #, a speaker, a bell, a pin and a members icon.
- **Illustration:** Round server icons, custom emoji, stickers and an animated mascot on empty states.
- **Decorative elements:** server rail · channel # · emoji reaction · role colour · presence dot · typing indicator

## Motion & interactivity

- **Born on screen:** yes
- **Transition physics:** Server icons morph from circle to rounded square on hover; new messages appear at the bottom at once.
- **Easing:** cubic-bezier(0.2, 0, 0, 1)
- **Duration (ms):** 150
- **Hover and active:** A row tints lighter grey on hover; the active server shows a white pill at the left of the rail.

## Code & token primer

Set `data-style="discord-server"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="discord-server"] {
  --color-bg: #1E1F22;
  --color-surface: #313338;
  --color-text: #F2F3F5;
  --color-muted: #949BA4;
  --color-primary: #5865F2;
  --color-accent: #23A55A;
  --color-border: #3F4147;
  --font-sans: "Noto Sans", "Helvetica Neue", Arial, sans-serif;
  --font-display: "Figtree", "Noto Sans", sans-serif;
  --border-radius: 8px;
  --border-width: 0px;
  --shadow-elevation: 0 8px 16px rgba(0, 0, 0, 0.24);
  --backdrop-filter: none;
  --space-unit: 8px;
  --ease: cubic-bezier(0.2, 0, 0, 1);
  --duration: 150ms;
  --type-ratio: 1.2;
  --size-small: 13.33px;
  --size-h3: 23.04px;
  --size-h2: 27.65px;
  --size-h1: 33.18px;
  --color-on-bg: #F2F3F5;
  --color-on-surface: #F2F3F5;
  --color-on-primary: #FFFFFF;
  --color-on-accent: #1E1F22;
  --color-muted-on-bg: #949BA4;
  --color-muted-on-surface: #949BA4;
  --color-link: #23A55A;
  --color-link-on-surface: #F2F3F5;
  --display-weight: 700;
  --subhead-weight: 700;
  --body-weight: 400;
  --strong-weight: 700;
  --label-weight: 700;
  --display-tracking: 0em;
  --display-leading: 1.25;
  --display-case: none;
  --body-leading: 1.375;
  --body-size: 16px;
  --icon-stroke: 2;
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
| page | `bg-[#313338] text-[#F2F3F5] font-sans` |
| heading | `text-xl font-bold text-white` |
| body | `text-base leading-[1.375]` |
| section | `rounded-lg bg-[#2B2D31] p-4` |
| button | `rounded bg-[#5865F2] px-4 py-2 text-sm font-medium text-white hover:bg-[#4752C4]` |
| label | `text-xs font-semibold uppercase text-[#949BA4]` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** solid, stroke 2 on a 24px field, round caps, round joins, container: circle. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Fluent UI System Icons (Filled, 24) by Microsoft Corporation, licence MIT. Reason: Rounded filled icons match the channel and voice icons of the app. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 700, tracking 0em, leading 1.25, case: none.
- **Weights:** display 700, subhead 700, body 400, bold in text 700, labels and buttons 700. The style uses 2 weights (400, 700) and no other. The display is 300 heavier than the body. The accent is weight: a heavier word is the accent, so the steps between the weights are clear.
- **Body type:** 16px, leading 1.375.
- **Page:** hero split, left aligned, regular density, accent tilt 0°.
- **Ground:** soft. A soft dark ground in steps of grey, with no texture. Put the class `ground` on the first screen of the page; it takes `--ground`, a stack of gradients built from the colour tokens. The ground can run behind the copy, so put the class `ground-copy` on each text block of that screen: the block gets `--color-bg` and a soft edge. Keep the rest of the page on `--color-bg`.
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

### Chat channel (technology)

A named room for live text chat: everyone in the room sees each message at once, in time order. Origin: internet, Oulu, Finland, 1988.

- Name the room with a # at the start.
- Show the messages in time order, the newest at the bottom.
- List the people who are in the room.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **Discord** (platform, web, 2015–now), launched the style. A chat app for communities, with servers, text channels and voice channels.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Base colour (`base_colour`) | #5865F2 | #5865F2, #EB459E, #57F287 | --color-primary, --color-on-primary, --color-link-on-surface |
| Accent colour (`accent_colour`) | #23A55A | #23A55A, #FEE75C, #5865F2 | --color-accent, --color-on-accent, --color-link |
| Corner radius (`corner_radius`) | 8px | 4–16 px | --border-radius |
| Grid step (`grid_step`) | 8px | 4–12 px | --space-unit, --grid-gutter |
| Type scale ratio (`type_scale_ratio`) | 1.2 | 1.125–1.25 | --type-ratio, --size-small, --size-h3, --size-h2, --size-h1 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **threaded**: move toward [`reddit-thread`](../reddit-thread/SKILL.md) (Reddit Thread). Turn the channel into posts with nested, voted replies.
- If the user asks for **more stickers**: move toward [`chat-sticker-pack`](../chat-sticker-pack/SKILL.md) (Chat Sticker Pack). Add large sticker images and animated emoji in the messages.

- **Mixes well with:** [`chat-sticker-pack`](../chat-sticker-pack/SKILL.md)
- **Nearest by vector profile:** [`reddit-thread`](../reddit-thread/SKILL.md), [`unicode-emoji`](../unicode-emoji/SKILL.md), [`anonymous-imageboard`](../anonymous-imageboard/SKILL.md)

## Emotional target

The user feels present in a live room of friends, always open, with the talk moving on.

**Keywords:** live, communal, dark, playful, gamer, always-on · **Brand archetypes:** everyman, jester, caregiver

## Sources

- [Wikipedia: Discord](https://en.wikipedia.org/wiki/Discord)
- [Wikipedia: Jason Citron](https://en.wikipedia.org/wiki/Jason_Citron)

---

Generated from [`data/internet/styles/discord-server.json`](../../data/internet/styles/discord-server.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
