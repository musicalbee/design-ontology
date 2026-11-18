---
name: art-deco-architecture
description: "Apply the Art Deco style (1920s–1930s) when designing, describing or rendering buildings and interiors. Load when the user asks for: art deco, stepped skyscraper, zigzag moderne, chevron relief, chrysler building, deco lobby."
domain: architecture
era: modern-movement
triggers:
  - "art deco"
  - "stepped skyscraper"
  - "zigzag moderne"
  - "chevron relief"
  - "chrysler building"
  - "deco lobby"
  - "streamline moderne"
  - "gatsby"
  - "sunburst"
vector_profile:
  ornamentation: 4
  structural_expression: 2
  geometric_rigidity: 4
  material_rawness: 1
  monumentality: 4
---

# Art Deco

> Modern technology deserves luxury: the machine age should look glamorous, symmetric and expensive.

Stepped towers, zigzag and chevron relief, and rich materials in a symmetric frame. It came from the Paris exhibition of 1925 and made the skyscraper and the cinema into the pictures of the machine age.

**Period:** 1920s–1930s · **Era:** Modern Movement · **Domain:** Architecture · **Also called:** Style Moderne, Streamline Moderne (late phase), Zigzag Moderne

## When to load this skill

Load it when the user asks for: "art deco", "stepped skyscraper", "zigzag moderne", "chevron relief", "chrysler building", "deco lobby", "streamline moderne", "gatsby", "sunburst".

Good for: hotel and cinema renders, office towers, lobby and entrance design, period film and game sets.

Do not use it when:
- The brief asks for a quiet, domestic or low-cost building.
- The design needs a free plan or an informal, asymmetric composition.

## System directives

When designing, describing or rendering buildings and interiors in Art Deco, you MUST:

1. Step the silhouette back in setbacks of 1.5 to 4m as the tower rises, and end it with a spire, a crown or a lantern.
2. Stress the vertical: run piers or fins unbroken from the base to the crown, with spandrels recessed 100 to 300mm behind them.
3. Compose the front on one central axis and balance both sides; the entrance is the richest point.
4. Use geometric ornament: zigzag, chevron, sunburst, fluting and stylised flora in low relief of 25 to 75mm.
5. Mix rich and industrial materials: polished stone, chrome, aluminium, bronze and glass in one elevation.
6. Give the lobby the most ornament of the building: a tall hall with a patterned floor, metal doors and a lit ceiling.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Smooth undecorated planes with no relief.
- **NEVER:** Curved, whiplash or plant-like line work.
- **NEVER:** Raw concrete or visible formwork marks.
- **NEVER:** Asymmetric, informal composition with no axis.
- **NEVER:** A flat-topped box with no crown or setback.
- **NEVER:** Historical orders copied without simplification.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■■■□` 4/5 | no applied ornament | ornament covers the surface |
| Structural expression | `■■□□□` 2/5 | structure hidden | structure is the image |
| Geometric rigidity | `■■■■□` 4/5 | organic / free-form | strict orthogonal module |
| Material rawness | `■□□□□` 1/5 | finished and coated | raw and unfinished |
| Monumentality | `■■■■□` 4/5 | domestic human scale | monumental |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Massing & form

- **Form:** A stepped, setback tower or a symmetric block with a strong central mass and lower wings.
- **Proportion:** Tall and slender: a tower of 1:4 to 1:8 plan to height; low cinemas and hotels use a 1:1.5 front with a central vertical sign.
- **Roof:** A crown of stepped tiers, a spire or a lit lantern; flat parapets carry relief or finials.
- **Relation to ground:** A tall polished base of stone or metal, 1 to 2 storeys, with a grand entrance of 5 to 8m height.

## Structure

- **System:** A steel frame clad in stone, terracotta or brick; reinforced concrete for cinemas and exhibition halls.
- **Span and module:** A tight vertical module of 1.5 to 2.5m between piers; column grids of 6 to 9m inside.
- **Expression:** The frame is hidden. The vertical piers express the lift of the tower, but they are cladding and not structure.

## Materials

- **Primary:** limestone and polished granite · glazed terracotta · chromed and stainless steel · aluminium
- **Secondary:** bronze · marble · etched glass · exotic veneers
- **Finish:** Polished and lustrous: metal gleams, stone is honed, and each surface is machine-cut with sharp edges.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Limestone | `#D9D0BC` | wall planes |
| Black marble | `#1E1E22` | base and lobby |
| Brushed gold | `#C9A24B` | metal ornament and crown |
| Jade | `#2F7F6A` | terracotta and tile accents |
| Deco red | `#9C2A2A` | doors and lobby details |

## Facade

- **Composition:** A symmetric front of tall piers and recessed spandrels, with one central ornamental panel above the entrance.
- **Openings:** Narrow vertical windows between the piers, with metal spandrel panels; the window-to-wall ratio is 30 to 45%.
- **Solid to void:** Solid leads: 55–70% opaque, in strong vertical stripes.

## Light & space

- **Daylight:** Daylight is moderate; the lobby is lit by indirect cove light and metal lamps, so it glows at night.
- **Spatial sequence:** A grand axis from the door to the lift hall: vestibule, then a tall lobby, then a ceremonial stair or lift bank.
- **Interior character:** Patterned terrazzo or marble floors, metal grilles, lacquered panels and lighting fixtures designed with the building.

## Ornament

- **Attitude:** Ornament is geometric, repeated and machine-made; it celebrates speed, light and luxury.
- **Details:** zigzag and chevron bands · sunburst motifs · fluted piers · stylised frieze panels · chromed doors and grilles · stepped crowns

## Vocabulary primer

Use these terms in a brief, an image prompt or a 3D scene description.

- **Use:** stepped setback tower, vertical piers, zigzag chevron relief, sunburst ornament, polished black marble base, chrome and brass details, symmetric facade, glowing lobby, crown spire
- **Exclude:** whiplash curves, raw concrete, asymmetric composition, plain flat roof box, rustic brick, pastel paint

Reference works:

| Work | Maker | Year |
|---|---|---|
| Chrysler Building, New York | William Van Alen | 1930 |
| Empire State Building, New York | Shreve, Lamb and Harmon | 1931 |
| Rockefeller Center, New York | Raymond Hood and others | 1933 |
| Hoover Building, London | Wallis, Gilbert and Partners | 1933 |
| Eastern Columbia Building, Los Angeles | Claud Beelman | 1930 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **plainer**: move toward [`international-style-architecture`](../international-style-architecture/SKILL.md) (International Style). Remove the relief and the setbacks, flatten the piers into a grid of 4 to 7m, and keep the polished materials.

- **Came from (go here for a more orthodox version):** [`art-nouveau-architecture`](../art-nouveau-architecture/SKILL.md)
- **Nearest by vector profile:** [`postmodern-architecture`](../postmodern-architecture/SKILL.md), [`international-style-architecture`](../international-style-architecture/SKILL.md), [`art-nouveau-architecture`](../art-nouveau-architecture/SKILL.md)

## Emotional target

Glamour and ambition: the viewer feels a confident city of speed, wealth and progress.

**Keywords:** glamorous, symmetric, vertical, lustrous, ambitious · **Brand archetypes:** ruler, magician

## Sources

- [Wikidata Q12720942, Art Deco architecture (CC0)](https://www.wikidata.org/wiki/Q12720942)
- [Getty AAT 300021426, Art Deco (ODC-By 1.0)](https://vocab.getty.edu/page/aat/300021426)
- Bevis Hillier, Art Deco of the 20s and 30s (Studio Vista, 1968)

---

Generated from [`data/architecture/styles/art-deco-architecture.json`](../../data/architecture/styles/art-deco-architecture.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
