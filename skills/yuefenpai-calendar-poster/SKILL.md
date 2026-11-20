---
name: yuefenpai-calendar-poster
description: "Apply the Shanghai yuefenpai calendar poster style (1900–1949) when specifying, prompting or art-directing a printed piece or its look on screen: a poster, a plate, a book page, a zine, a label or a print-look illustration. Load when the user asks for: yuefenpai, shanghai calendar poster, 1930s shanghai advertisement, chinese beauty poster, old shanghai pin-up, rub charcoal watercolour poster."
domain: print
era: industrial-press
triggers:
  - "yuefenpai"
  - "shanghai calendar poster"
  - "1930s shanghai advertisement"
  - "chinese beauty poster"
  - "old shanghai pin-up"
  - "rub charcoal watercolour poster"
  - "qipao poster"
vector_profile:
  tone_method: 4
  ink_layering: 4
  registration_play: 2
  surface_relief: 1
  hand_trace: 3
---

# Shanghai yuefenpai calendar poster

> A calendar that a shop gives away can sell a product through the face of a modern woman, in smooth, warm colour that a lithograph can copy.

Artists drew a beauty in rubbed charcoal and tinted it with watercolour. Printers copied the result by chromolithography for tobacco, medicine and cloth advertisers. A calendar band runs along the foot.

**Period:** 1900–1949 · **Era:** Industrial press · **Domain:** Print · **Also called:** Yuefenpai, 月份牌, Cabi shuicai, 擦笔水彩, Shanghai calendar poster

## When to load this skill

Load it when the user asks for: "yuefenpai", "shanghai calendar poster", "1930s shanghai advertisement", "chinese beauty poster", "old shanghai pin-up", "rub charcoal watercolour poster", "qipao poster".

Good for: retro posters and packs for Shanghai themes, cafe and bar interiors, film and game art for 1930s Shanghai, magazine editorials on advertising history.

Do not use it when:
- The brief needs a rough, hand-cut or folk look.
- The picture needs a photographic or a minimal flat style.

## System directives

When specifying, prompting or art-directing a printed piece or its look on screen: a poster, a plate, a book page, a zine, a label or a print-look illustration in Shanghai yuefenpai calendar poster, you MUST:

1. Draw a young woman, in a qipao or a modern dress, in a fashionable room or garden.
2. Model the skin with rubbed charcoal and thin watercolour, so the tone is smooth and has no line.
3. Use hot, soft colour: peach skin, rose red, jade green and gold yellow.
4. Print a calendar band at the foot, with the months, and put the advertiser name and logo in a fixed place.
5. Frame the figure with a border of gold or pattern, and add a few props of the new city, such as a car, a radio or a lamp.
6. Make 4–8 lithographic plates, and print the full set in a large run for the advertiser.
7. Print on coated poster paper, and keep the register within 0.4 mm.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** A woodblock line or a folk-print outline.
- **NEVER:** Visible halftone dots, or a photograph.
- **NEVER:** A grunge or distressed surface.
- **NEVER:** Flat vector fill with no skin modelling.
- **NEVER:** A calendar band that is missing or has no advertiser.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Tone method | `■■■■□` 4/5 | solid ink, no tone | fine screen or continuous tone |
| Ink layering | `■■■■□` 4/5 | one ink | many overprinted inks |
| Registration play | `■■□□□` 2/5 | exact register | visible misregister as a feature |
| Surface relief | `■□□□□` 1/5 | flat, ink on the surface | deep bite or emboss in the sheet |
| Hand trace | `■■■□□` 3/5 | uniform machine output | each sheet differs by hand |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Process

- **Family:** planographic
- **Matrix:** Lithographic stones or zinc plates, one for each colour, made from a separation of the original.
- **Press:** A flatbed or offset lithographic press.
- **Image making:** A painter makes an original in rubbed charcoal and watercolour. A printer separates it by hand or with a camera.
- **Edition:** Tens of thousands of sheets for an advertiser.

## Inks

- **Strategy:** Oil-based lithographic ink, 4–8 passes of transparent colour that mix on the sheet.
- **Ink count min:** 4
- **Ink count max:** 8
- **Overprint:** transparent

**Colours**

| Name | Hex | Role |
|---|---|---|
| Key brown-black | `#2A2622` | outline, hair and dark detail |
| Skin peach | `#E6B79F` | modelled flesh |
| Rose red | `#C9384F` | dress |
| Jade green | `#5E9A7E` | background |
| Gold yellow | `#E6BF55` | border and text |

## Tone and screen

- **Method:** grain
- **Ruling lpi:** 100
- **Rule:** Copy the smooth rubbed tone with the grain of the stone or the plate, at about 100 lines an inch in the finest areas.

## Registration

- **Tolerance mm:** 0.4
- **Rule:** Keep each plate within 0.4 mm. A small gap shows at the edge of the skin or of the dress.

## Stock

- **Stock:** Coated poster paper.
- **Weight gsm min:** 90
- **Weight gsm max:** 150
- **Ground:** #F1E6CB
- **Finish:** A smooth coat with a slight shine.

## Surface

- **Impression:** None. The ink lies flat on the surface.
- **Sheen:** A slight shine from the coat and from the oil ink.
- **Texture:** Smooth skin tone, a soft rub texture in the shadow, and a bright, hot colour.

## Process marks

- **Marks:** calendar block and advertiser logo · smooth skin tone like an airbrush · soft rub texture · bright commercial colour · gold border

## Prompt primer

- **Positive:** Shanghai yuefenpai calendar poster · 1930s Chinese beauty illustration · soft rub and watercolour skin tone · chromolithograph colour · calendar band at the foot · qipao and art deco interior · advertiser logo · cream paper
- **Negative:** woodblock · visible halftone dots · photographic · grunge · flat vector

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Lithography (process)

A print from a flat stone or plate on which a greasy drawing takes ink and water repels it; the artist draws as on paper. Origin: print, Munich, c. 1796.

- Draw on the stone with a greasy crayon or a tusche wash; the drawing takes ink and the rest stays wet.
- Pull the print in a press at a run of 20 to 200 copies for an artist print, or more for a poster.
- Use one stone for each colour; 3 to 5 stones give a poster.
- Keep the soft crayon grain and the dark, velvet black.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **Zhiying Studio** (studio, Shanghai, China, ?–now), made the style. A Shanghai studio round the calendar-poster painter Hang Zhiying. It drew the originals for the advertisers of yuefenpai posters.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Key ink (`key_ink`) | #2A2622 | #2A2622, #3A2A26, #2A2A2E | inks |
| Paper colour (`paper_colour`) | #F1E6CB | #F1E6CB, #F5ECD6, #EBDDBC | substrate |
| Ink count (`ink_count`) | 6 | 4–8 | inks, registration |
| Screen ruling (`screen_ruling`) | 100 | 70–133 lines per inch | screening |
| Misregistration (`misregistration`) | 0.4 | 0–1 mm | registration |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more European and graphic**: move toward [`chromolithograph-poster`](../chromolithograph-poster/SKILL.md) (Chromolithograph poster). Flatten the skin to flat tints, add a bold outline and large display lettering.
- If the user asks for **more folk**: move toward [`nianhua-new-year-print`](../nianhua-new-year-print/SKILL.md) (Chinese nianhua New Year woodblock print). Replace the smooth skin by a block outline with flat vermilion and green, and add hand-painted faces.

- **Came from (go here for a more orthodox version):** [`chromolithograph-poster`](../chromolithograph-poster/SKILL.md)
- **Nearest by vector profile:** [`ravi-varma-oleograph`](../ravi-varma-oleograph/SKILL.md), [`chromolithograph-poster`](../chromolithograph-poster/SKILL.md), [`shin-hanga-print`](../shin-hanga-print/SKILL.md)

## Emotional target

A warm, modern glamour: the viewer sees a young woman of the new Shanghai, soft, bright and for sale.

**Keywords:** glamorous, modern, soft, commercial, nostalgic · **Brand archetypes:** lover, magician

## Canonical evidence (open licence)

Each item below has an open licence or is in the public domain, so you may show it as a reference.

- [Advertisement poster for a cigarette company, Shanghai](https://commons.wikimedia.org/wiki/File:Shanghai-girls-chinese-posters.jpg) (East Asian Cigarette Company (advertiser)): image, Public domain. Wikimedia Commons. Commons dates it 1930, before 1931, so the poster is in the public domain in the US. The artist is not known.

## Sources

- [Wikimedia Commons: Shanghai-girls-chinese-posters.jpg](https://commons.wikimedia.org/wiki/File:Shanghai-girls-chinese-posters.jpg)
- [Wikidata Q82571614: Hang Zhiying](https://www.wikidata.org/wiki/Q82571614)

---

Generated from [`data/print/styles/yuefenpai-calendar-poster.json`](../../data/print/styles/yuefenpai-calendar-poster.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
