---
name: art-nouveau-ceramics
description: "Apply the Art Nouveau ceramics style (1893–1914) when specifying, sourcing or prompting fired clay: tableware, teaware, kitchen and storage ware, vases and display vessels, figures, tiles, architectural ceramics and sanitary and technical ware. Load when the user asks for: art nouveau vase, art nouveau ceramics, jugendstil pottery, flambé glaze, sang de boeuf vase, eggshell porcelain."
domain: ceramics
era: art-pottery
triggers:
  - "art nouveau vase"
  - "art nouveau ceramics"
  - "jugendstil pottery"
  - "flambé glaze"
  - "sang de boeuf vase"
  - "eggshell porcelain"
  - "rozenburg"
  - "chaplet stoneware"
vector_profile:
  ornamentation: 4
  hand_mark: 3
  refinement: 4
  glaze_depth: 5
  chromatic_intensity: 3
---

# Art Nouveau ceramics

> A vase grows like a plant: its form follows one living curve, and the glaze flows over it in deep colour.

Vessels of 1893 to 1914 with flowing plant forms and deep glaze effects. French potters fired flambé stoneware, and Dutch and Danish works made thin porcelain with crystal and underglaze colour.

**Period:** 1893–1914 · **Era:** Art pottery and reform · **Domain:** Ceramics · **Also called:** Jugendstil ceramics, Style 1900 pottery, Grès flambé and eggshell porcelain

## When to load this skill

Load it when the user asks for: "art nouveau vase", "art nouveau ceramics", "jugendstil pottery", "flambé glaze", "sang de boeuf vase", "eggshell porcelain", "rozenburg", "chaplet stoneware".

Good for: a flowing vase for an Art Nouveau interior, a flambé or crystalline glaze brief, a museum label on French or Dutch pottery of 1900.

Do not use it when:
- the brief needs a rustic, undecorated pot
- the brief needs strict geometric form
- the brief needs a flat modern colour

## System directives

When specifying, sourcing or prompting fired clay: tableware, teaware, kitchen and storage ware, vases and display vessels, figures, tiles, architectural ceramics and sanitary and technical ware in Art Nouveau ceramics, you MUST:

1. Draw the outline as one long S-curve, from a narrow foot to a swelling shoulder and a flaring lip.
2. Model plant, insect and female forms in low relief that the glaze softens.
3. Fire copper-red and flambé glazes in reduction at about 1280 °C, so that red, purple and blue run together.
4. Grow crystals in a zinc-silicate glaze by a slow cool of 20 to 30 hours.
5. Pare eggshell porcelain to 1 mm, so that the wall is translucent.
6. Paint underglaze flowers in soft grey, green and blue, with a spray ground that fades at the edge.
7. Keep the surface asymmetric: let a handle, a stem or a wave break the axis.
8. Sign the base with the name or the cipher of the maker and a pottery mark.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Strict symmetrical Neoclassical outline.
- **NEVER:** Flat bright colour with a hard outline.
- **NEVER:** A thick plain white body with gilt scrolls.
- **NEVER:** Printed repeat patterns.
- **NEVER:** Heavy matt glaze with no depth.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■■■□` 4/5 | a plain surface | painted, printed, moulded or gilt ornament on every part |
| Hand mark | `■■■□□` 3/5 | machine-exact and identical pieces | each piece shows the hand: throwing rings, finger marks, irregular rims |
| Refinement | `■■■■□` 4/5 | coarse, porous, heavy body | thin, white, dense or translucent body |
| Glaze depth | `■■■■■` 5/5 | a flat, even glaze or bare clay | deep, variegated glaze effects: pooling, crackle, ash runs, flambé |
| Chromatic intensity | `■■■□□` 3/5 | white, earth or one tone | saturated colour and bold pattern |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Form & profile

- **Shape:** Slender vases, bottle vases with a long neck, lobed bowls and planters, with a stem, a flower or a wave as part of the form.
- **Profile:** A swelling S-curve with an asymmetric neck; a handle may rise as a stem from the foot to the rim.
- **Foot and rim:** A small, narrow foot that does not show; the rim opens like a flower, with a wavy or a scalloped edge.
- **Proportion:** Height 20 to 60 cm; stoneware wall 4 to 8 mm and eggshell porcelain wall 1 to 2 mm.
- **Rules:**
  - Make the line of the form fluid and organic, with no hard step.
  - Place relief ornament on the form, not as a band.
  - Make the glaze run with the curve, not against it.

## Clay bodies

- **Primary:** stoneware · porcelain
- **Secondary:** earthenware
- **Avoid:** jasperware · bone-china · creamware
- **Rule:** Use a dense stoneware for flambé and a fine hard porcelain for eggshell and crystal; earthenware serves for painted and sprayed work.

## Forming

- **Methods:** throwing on the wheel and altering by hand · slip casting of eggshell porcelain · press moulding of relief · modelling of plant and animal forms · paring and turning to a thin wall
- **Joins:** Handles and relief stems are modelled with the body and blended, so that they seem to grow from it.
- **Details:** A relief that is soft under the glaze, a rim that is hand-shaped, a glaze that pools in the hollows, and a clear maker cipher.

## Glaze & decoration

- **Glazes:** copper-red · crystalline-glaze · matte-glaze · clear-feldspathic
- **Decorations:** underglaze-polychrome · pate-sur-pate · relief-moulding · gilding · incised
- **Pattern:** Orchids, poppies, dragonflies and water in flowing relief; flambé runs of red, purple and blue; crystal flowers on a dark ground.
- **Gloss:** Wide range: 10 to 20 GU for matt, 60 to 95 GU for flambé and crystal glazes.
- **Wear:** The glaze is thick and robust; thin porcelain chips at the rim, and the gilt wears on the high points.

## Palette

- **Strategy:** Deep, subdued colour with one strong effect: blood red and purple flambé, or sea green and grey, with pale gold.

**Colours**

| Name | Hex | Role |
|---|---|---|
| Ox-blood red | `#7A1F1F` | flambé |
| Violet | `#5A3A6A` | flambé run |
| Sea green | `#6C9A8A` | matt glaze |
| Mist grey | `#B8BDB8` | ground |
| Ivory | `#EFE6D2` | porcelain |
| Dark moss | `#3D4A32` | glaze |
| Pale gold | `#C9B06A` | line |

## Firing

- **Kiln:** A large high-fire kiln with a strong reduction; electric or gas muffle for small pieces and enamel.
- **Atmosphere:** reduction
- **Processes:** first firing of the body at about 1000 °C · spraying or dipping of the glaze · high firing in reduction at 1250 to 1300 °C · slow cooling for crystal growth · a third small firing for gold or enamel
- **Scale:** Small studios of 10 to 20 workers; each flambé pot is a unique result of the kiln.
- **Signs:** Runs of colour on the shoulder, crystals of 5 to 30 mm, and thin, translucent walls on the eggshell wares.

**Temperature c**

|  |
||
|  |
|  |

## Signature pieces

**Pieces**

| Object | Form | Body | Glaze | Decoration |
|---|---|---|---|---|
| bottle-vase | Long-necked bottle vase with a dark red flambé glaze | stoneware | copper-red | relief-moulding |
| vase | Tall vase with an orchid in relief and a flowing handle | porcelain | clear-feldspathic | pate-sur-pate |
| baluster-vase | Slender vase with crystals on a dark ground | porcelain | crystalline-glaze | gilding |
| planter | Planter with a lobed rim and a matt sea-green glaze | stoneware | matte-glaze | incised |
| display-bowl | Shallow bowl with a wavy rim and soft painted poppies | porcelain | clear-feldspathic | underglaze-polychrome |

## Prompt primer

- **Positive:** Art Nouveau ceramic vase · flowing S-curve vase · flambé red and violet glaze · eggshell porcelain, translucent · orchid relief under glaze · crystalline glaze on dark ground · whiplash handle like a stem · 1900 museum photograph, soft light
- **Negative:** strict symmetry · flat bold outline colour · thick plain white body · printed pattern · brutalist matt block

**Canonical works**

| Work | Maker | Year |
|---|---|---|
| Flambé stoneware vase | Ernest Chaplet | 1900 |
| Eggshell porcelain vase | Rozenburg, The Hague | 1900 |
| Stoneware vase with a copper red glaze | Pierre-Adrien Dalpayrat | 1900 |

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Whiplash line (motif)

A long S-shaped line whose curve changes along its length, drawn from a plant stem; it joins structure and ornament in one stroke. Origin: architecture, Brussels, c. 1893.

- Draw each line as an S-curve with a radius that changes along its length.
- Swell the stroke from 1 to 4 units along the curve, as a stem thickens at the base.
- Join letters, frame and plant forms with the same line; leave no straight edge to break the flow.
- Use few colours, 2 to 4, in muted tones.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **Exposition Universelle of 1900** (exhibition, Paris, 1900–1900), exhibited the style. A world's fair in Paris at the turn of the century. Art Nouveau buildings, rooms and metro entrances were on show, and the Finnish pavilion had frescoes of national myths.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Ornament level (`ornament_level`) | 0.65 | 0.3–0.9 | glaze, signatures |
| Glaze gloss (`glaze_gloss`) | 65 | 10–100 GU | glaze, palette |
| Wall thickness (`wall_thickness`) | 5 | 1–10 mm | form, forming |
| Hand mark (`hand_mark`) | 0.55 | 0.3–0.85 | forming, form, signatures |
| Era blend (`era_blend`) | 0.25 | 0–1 | form, firing, signatures |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more geometric**: move toward [`art-deco-tableware`](../art-deco-tableware/SKILL.md) (Art Deco tableware). Replace the S-curve with a stepped or round geometric outline and use flat colour with gilt lines.
- If the user asks for **more hand made, plainer**: move toward [`arts-and-crafts-art-pottery`](../arts-and-crafts-art-pottery/SKILL.md) (Arts and Crafts art pottery). Use a thick stoneware body with a salt or lustre glaze and keep the throwing rings.

- **Came from (go here for a more orthodox version):** [`american-art-pottery`](../american-art-pottery/SKILL.md), [`arts-and-crafts-art-pottery`](../arts-and-crafts-art-pottery/SKILL.md)
- **Led to (go here for a newer version):** [`art-deco-tableware`](../art-deco-tableware/SKILL.md), [`art-nouveau-tiles`](../art-nouveau-tiles/SKILL.md), [`british-modernist-studio`](../british-modernist-studio/SKILL.md)
- **Kin in another domain:** [`art-nouveau-architecture`](../art-nouveau-architecture/SKILL.md), [`art-nouveau-interior`](../art-nouveau-interior/SKILL.md), [`art-nouveau-object`](../art-nouveau-object/SKILL.md)
- **Nearest by vector profile:** [`art-nouveau-tiles`](../art-nouveau-tiles/SKILL.md), [`goryeo-celadon`](../goryeo-celadon/SKILL.md), [`abbasid-lustreware`](../abbasid-lustreware/SKILL.md)

## Emotional target

A feeling of growth and elegance: the viewer sees a plant-like curve and a deep glaze, and wants to touch the surface.

**Keywords:** organic, flowing, elegant, dreamy, sensuous · **Brand archetypes:** lover, creator, magician

## Canonical evidence (open licence)

Each item below has an open licence or is in the public domain, so you may show it as a reference.

- [Flambé stoneware by Alphonse Cytère](https://commons.wikimedia.org/wiki/File:Alphonse_Cyt%C3%A8re-Gr%C3%A8s_flamm%C3%A9.jpg) (Alphonse Cytère): image, CC BY-SA 3.0. Ji-Elle
- [Bottle by Emile Decoeur, OGAL164](https://commons.wikimedia.org/wiki/File:Bouteille%2C_OGAL164.jpg) (Emile Decoeur): image, CC0. Emile Decoeur
- [Bowl by Auguste Delaherche, Paris, about 1901](https://commons.wikimedia.org/wiki/File:Aguste_delaherche%2C_ernst_cardeilhac_e_lucien_bonvallet%2C_ciotola%2C_parigi_1901_ca..JPG) (Auguste Delaherche): image, CC BY-SA 3.0. Sailko

## Sources

- [Wikipedia: Art Nouveau](https://en.wikipedia.org/wiki/Art_Nouveau)
- [Wikipedia: Ernest Chaplet](https://en.wikipedia.org/wiki/Ernest_Chaplet)

---

Generated from [`data/ceramics/styles/art-nouveau-ceramics.json`](../../data/ceramics/styles/art-nouveau-ceramics.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
