---
name: skeuomorphism
description: "Apply the Skeuomorphism style (2007–2013) when generating UI or graphic layouts. Load when the user asks for: skeuomorphic, skeuomorphism, ios 6, real-world textures, leather texture, tactile interface."
domain: design
era: touchscreen
triggers:
  - "skeuomorphic"
  - "skeuomorphism"
  - "ios 6"
  - "real-world textures"
  - "leather texture"
  - "tactile interface"
  - "realistic buttons"
  - "glossy buttons"
  - "wood and linen"
  - "retro ios"
  - "page curl"
  - "stitched leather"
vector_profile:
  ornamentation: 4
  dimensionality: 4
  grid_rigidity: 3
  skeuomorphic_realism: 5
  typographic_expressiveness: 3
---

# Skeuomorphism

> A screen control is easier to learn when it looks and behaves like a physical object that the user already knows.

Interfaces that copy real objects: leather, linen, wood, felt, glass and brushed metal, lit from above with gradients and layered shadows. It has roots in 1980s desktop icons and peaked in iOS 1 to 6, until iOS 7 replaced it in 2013.

**Period:** 2007–2013 · **Era:** Touchscreen · **Domain:** Graphic & UI Design · **Also called:** Skeuomorphic UI, iOS 6 style, Real-object interface

## When to load this skill

Load it when the user asks for: "skeuomorphic", "skeuomorphism", "ios 6", "real-world textures", "leather texture", "tactile interface", "realistic buttons", "glossy buttons", "wood and linen", "retro ios", "page curl", "stitched leather".

Good for: music and audio apps, notes and journal apps, games with a table or board, novelty and nostalgia sites, onboarding for first-time smartphone users.

Do not use it when:
- The product is data-dense and every pixel of chrome costs reading space.
- The brand must feel abstract, minimal or software-native.
- The design must scale across many densities and run on low-power devices where 5 shadow layers cost frame rate.

## System directives

When generating UI or graphic layouts in Skeuomorphism, you MUST:

1. Model each control on a real object with a known use, such as a toggle switch, a notepad, a bookshelf or a dial, and keep its proportions within 10% of the original.
2. Light every surface from the top with one light source at 90 degrees, so that highlights sit on the top edge and shadows fall down.
3. Build depth from 3 to 5 stacked layers: a 1px light top highlight, a 2 to 4 gradient body, a 1px dark bottom edge, an inner shadow and an outer drop shadow.
4. Texture large surfaces with a repeating bitmap of 128 to 256px at 4 to 12% opacity: linen, leather, paper, wood grain or felt.
5. Give every button a gradient of 8 to 15% lightness difference from top to bottom, and invert that gradient while the button is pressed.
6. Add one stitched, embossed or debossed detail on each material panel, with a 1px inner highlight and a 1px outer shadow.
7. Reflect the real world in motion: page curls, flip transitions and spring-loaded switches follow the physics of the object they imitate.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Flat solid fills with no gradient or shadow on controls.
- **NEVER:** A light source that changes direction between components.
- **NEVER:** Textures that tile with a visible seam or repeat period shorter than 64px.
- **NEVER:** Material metaphors that do not match the function, such as a wooden calculator.
- **NEVER:** Hairline 1px outline icons with no fill.
- **NEVER:** Shadows with a blur radius of 0px and no spread.
- **NEVER:** Pure white backgrounds with no surface texture.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■■■□` 4/5 | pure minimal | maximalist |
| Dimensionality | `■■■■□` 4/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■■□□` 3/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■■■■■` 5/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■■■□□` 3/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** A 320 by 480pt canvas on iPhone, later 320 by 568pt, with a 44pt minimum touch target; content sits in full-width grouped rows or on shelves with a 10 to 20pt margin.
- **Whitespace ratio:** 20–35% of the surface stays empty because textures and frames fill the rest; the spacing scale is 4, 10, 20, 44pt.
- **Alignment rules:** Controls sit inside the frame of their object metaphor, such as rows in a table, books on a shelf or pages in a notebook; text is centred on buttons and flush left in rows.
- **Container geometry:** Rounded rectangles with a 5 to 10px radius, grouped table cells with a 10px radius on the outer corners, and 44px high bars with a 1px bevel.

## Typography

- **Classifications:** humanist sans serif · slab serif · script
- **Tracking:** Display sizes sit at 0em to 0.01em; body stays at 0; button labels take +0.02em.
- **Leading:** Display 1.1; body 1.3 to 1.4; table rows hold a 44px height with a single 17px line.
- **Hierarchy rules:**
  - Use bold (700) for button and title labels and regular (400) for body text.
  - Set 17px for titles and rows, 14px for secondary labels and 12px for captions.
  - Add a 1px text shadow, white at 60% opacity below dark text or black at 60% opacity above light text, so the text looks stamped into the surface.
  - Set title text in a different face on object-bound screens, such as a slab on a bookshelf or a script on a notepad.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Roboto Slab | Open Sans | A slab for object labels with a humanist text face, close to the Marker Felt and Helvetica mix of iOS 6 notes. |
| Arvo | Lato | A slab for leather and wood panels with a rounded sans for legible controls. |
| Caveat | Source Sans 3 | A handwriting face for notepad and journal metaphors, with a neutral sans for UI text. |

## Colour & lighting

- **Palette structure:** Three to five material colours with 60% of the surface in the dominant material, plus a glossy blue accent for primary controls on 10 to 15% of the surface.
- **Contrast rules:** Text on material surfaces holds at least 4.5:1; light text on leather brown and felt green reaches about 8:1, and text on glossy blue reaches 4.5:1.
- **Surface treatment:** Photographic textures, linear gradients with a 50% hard split for gloss, and noise at 3 to 6% opacity; glass uses a white 30% highlight over the upper half.
- **Light and shadow:** One light source from the top; highlights are white at 40 to 70% opacity on top edges, shadows are black at 25 to 50% opacity pointing down with a 1 to 3px offset.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Linen | `#D8D4CC` | background texture base |
| Leather Brown | `#6B4A2F` | panel surface |
| Glass Blue | `#2F7BE0` | primary control gradient |
| Chrome | `#C9CDD3` | metal bar and bezel |
| Felt Green | `#1E5B3A` | table surface |
| Stamp Ink | `#2B2118` | text on light material |

## Materiality & texture

- **Surface simulation:** Real materials: leather with stitching, linen, paper, wood, felt, brushed aluminium, glass and chrome.
- **Border rules:** A 1px dark outer edge at 40 to 60% black, a 1px white inner highlight at 40 to 60% opacity, and dashed 1px stitching inset 4px from the edge on leather.
- **Blur and elevation:** Drop shadows with 0 1px 2px at 40% black for buttons and 0 4px 10px at 50% black for panels; inner shadows of inset 0 1px 3px at 50% black for wells; elevation uses 3 levels.

## Ornamentation & iconography

- **Iconography:** Glossy filled icons of 57 by 57px with a 12px radius, a top gloss highlight over 50% of the height, a 1px bevel and a reflected shadow below.
- **Illustration:** Rendered object illustrations with lighting, such as bookshelves, microphones, film reels and tape decks, drawn from a 3/4 top view.
- **Decorative elements:** stitching · page curl · wood shelf · torn paper edge · gloss highlight · chrome bezel · reflection below icon

## Motion & interactivity

- **Born on screen:** yes
- **Transition physics:** Object physics: pages curl and flip over 400 to 600ms, switches slide with a 20ms spring settle and shelves scroll with inertia and 8px of edge bounce.
- **Easing:** cubic-bezier(0.42, 0, 0.58, 1)
- **Duration (ms):** 350
- **Hover and active:** Pressed state inverts the button gradient and removes the outer shadow, so the button looks pushed 1 to 2px into the surface; touch devices have no hover.

## Code & token primer

Set `data-style="skeuomorphism"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="skeuomorphism"] {
  --color-bg: #D8D4CC;
  --color-surface: #6B4A2F;
  --color-text: #2B2118;
  --color-muted: #6E6659;
  --color-primary: #2F7BE0;
  --color-accent: #C9A24B;
  --color-border: rgba(0, 0, 0, 0.5);
  --font-sans: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  --font-display: "Roboto Slab", Georgia, "Times New Roman", serif;
  --border-radius: 8px;
  --border-width: 1px;
  --shadow-elevation: 0 1px 2px rgba(0, 0, 0, 0.4), 0 4px 10px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.5), inset 0 -1px 3px rgba(0, 0, 0, 0.35);
  --backdrop-filter: none;
  --space-unit: 4px;
  --ease: cubic-bezier(0.42, 0, 0.58, 1);
  --duration: 350ms;
  --gradient-control: linear-gradient(to bottom, #6FA8F5 0%, #2F7BE0 50%, #1F5FC0 50%, #2C78DC 100%);
  --gradient-bar: linear-gradient(to bottom, #E2E5EA 0%, #C9CDD3 50%, #B6BBC3 100%);
  --text-shadow: 0 1px 0 rgba(255, 255, 255, 0.6);
  --touch-target: 44px;
  --color-on-bg: #2B2118;
  --color-on-surface: #D8D4CC;
  --color-on-primary: #000000;
  --color-on-accent: #2B2118;
  --color-muted-on-bg: #5F574E;
  --color-muted-on-surface: #CDC6BC;
  --color-link: #2B2118;
  --color-link-on-surface: #D8D4CC;
  --display-weight: 700;
  --subhead-weight: 700;
  --body-weight: 400;
  --strong-weight: 700;
  --label-weight: 700;
  --display-tracking: 0em;
  --display-leading: 1.1;
  --display-case: none;
  --body-leading: 1.55;
  --body-size: 16px;
  --icon-stroke: 2;
}
```

Tailwind patterns:

| Element | Classes |
|---|---|
| page | `min-h-screen bg-[#D8D4CC] bg-[url('/textures/linen.png')] font-sans text-[#2B2118] [text-shadow:0_1px_0_rgba(255,255,255,0.6)]` |
| heading | `font-serif text-[17px] font-bold leading-tight [text-shadow:0_1px_0_rgba(255,255,255,0.6)]` |
| panel | `rounded-lg border border-black/50 bg-[#6B4A2F] bg-[url('/textures/leather.png')] p-5 shadow-[0_4px_10px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.3)]` |
| button | `h-11 rounded-lg border border-[#1B4F9E] bg-gradient-to-b from-[#6FA8F5] via-[#2F7BE0] to-[#1F5FC0] px-5 text-sm font-bold text-white shadow-[0_1px_2px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.5)] active:from-[#1F5FC0] active:to-[#6FA8F5] [text-shadow:0_-1px_0_rgba(0,0,0,0.5)]` |
| input | `h-11 rounded-md border border-black/40 bg-white px-3 text-[17px] shadow-[inset_0_1px_3px_rgba(0,0,0,0.35)]` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** solid, stroke 2 on a 24px field, round caps, round joins, container: rounded. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Phosphor (Fill) by Phosphor Icons, licence MIT. Reason: Full solid silhouettes of real objects. The container supplies the material and the light. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 700, tracking 0em, leading 1.1, case: none.
- **Weights:** display 700, subhead 700, body 400, bold in text 700, labels and buttons 700. The style uses 2 weights (400, 700) and no other. The display is 300 heavier than the body. The accent is weight: a heavier word is the accent, so the steps between the weights are clear.
- **Body type:** 16px, leading 1.55.
- **Page:** hero split, left aligned, regular density, accent tilt 0°.
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

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **flatter**: move toward [`flat-design`](../flat-design/SKILL.md) (Flat Design). Remove all gradients, textures and shadows, set solid fills, and keep the colours and 5 to 10px radius of the original.
- If the user asks for **more layered**: move toward [`material-design`](../material-design/SKILL.md) (Material Design). Replace textures with solid surfaces, use 1 to 24dp elevation shadows with a top-left key light, and keep the paper metaphor.
- If the user asks for **glossier**: move toward [`frutiger-aero`](../frutiger-aero/SKILL.md) (Frutiger Aero). Replace material textures with aqua gradients and glass highlights, add bokeh nature imagery, and keep the top light source.
- If the user asks for **more futuristic**: move toward [`y2k-aesthetic`](../y2k-aesthetic/SKILL.md) (Y2K Aesthetic). Swap natural materials for chrome, translucent plastic and cyan with 24px blur glows; keep the bevels and the gloss.

- **Led to (go here for a newer version):** [`neumorphism`](../neumorphism/SKILL.md)
- **Was rejected by:** [`flat-design`](../flat-design/SKILL.md), [`metro-ui`](../metro-ui/SKILL.md), [`minimalism-web`](../minimalism-web/SKILL.md)
- **Mixes well with:** [`apple-aqua`](../apple-aqua/SKILL.md), [`cassette-futurism`](../cassette-futurism/SKILL.md), [`frutiger-aero`](../frutiger-aero/SKILL.md), [`material-design`](../material-design/SKILL.md), [`spatial-visionos`](../spatial-visionos/SKILL.md)
- **Nearest by vector profile:** [`cassette-futurism`](../cassette-futurism/SKILL.md), [`frutiger-aero`](../frutiger-aero/SKILL.md), [`apple-aqua`](../apple-aqua/SKILL.md)

## Emotional target

Familiarity and tactile comfort: the user feels that the app is an object that can be picked up and used without instruction.

**Keywords:** tactile, familiar, warm, crafted, literal, nostalgic · **Brand archetypes:** everyman, caregiver, creator

## Sources

- Apple, iOS Human Interface Guidelines for iOS 6 (Apple Inc., 2012)
- Apple Human Interface Guidelines: Macintosh (Addison-Wesley, 1992)

---

Generated from [`data/design/styles/skeuomorphism.json`](../../data/design/styles/skeuomorphism.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
