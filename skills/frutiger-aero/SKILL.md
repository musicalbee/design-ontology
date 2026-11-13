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
  --color-on-primary: #000000;
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

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more futuristic**: move toward [`y2k-aesthetic`](../y2k-aesthetic/SKILL.md) (Y2K Aesthetic). Swap the nature imagery for chrome, orbit rings and stars and cool the palette to silver and electric blue; keep the gloss and the pill buttons.
- If the user asks for **flatter**: move toward [`flat-design`](../flat-design/SKILL.md) (Flat Design). Remove the gradients, highlights, reflections and shadows, keep the sky and grass hues as solid fills and the 8px radius.
- If the user asks for **more tactile**: move toward [`skeuomorphism`](../skeuomorphism/SKILL.md) (Skeuomorphism). Add leather, wood or brushed-metal textures and 2px inner bevels to the controls; keep the humanist type and the top light.
- If the user asks for **more modern glass**: move toward [`glassmorphism`](../glassmorphism/SKILL.md) (Glassmorphism). Raise backdrop blur to 20px, drop the gloss band and the reflections and use 25% white panels on a soft colour field; keep the aqua palette.

- **Came from (go here for a more orthodox version):** [`y2k-aesthetic`](../y2k-aesthetic/SKILL.md)
- **Led to (go here for a newer version):** [`glassmorphism`](../glassmorphism/SKILL.md)
- **Mixes well with:** [`skeuomorphism`](../skeuomorphism/SKILL.md)
- **Nearest by vector profile:** [`spatial-visionos`](../spatial-visionos/SKILL.md), [`glassmorphism`](../glassmorphism/SKILL.md), [`skeuomorphism`](../skeuomorphism/SKILL.md)

## Emotional target

Calm optimism: the viewer feels that technology is clean, friendly and close to a sunny natural world.

**Keywords:** glossy, fresh, optimistic, aquatic, friendly, nostalgic · **Brand archetypes:** innocent, caregiver

## Sources

- Microsoft Corporation, Windows Vista user experience guidelines: Aero glass (Microsoft, 2006)
- Apple Inc., Aqua Human Interface Guidelines (Apple, 2001)

---

Generated from [`data/design/styles/frutiger-aero.json`](../../data/design/styles/frutiger-aero.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
