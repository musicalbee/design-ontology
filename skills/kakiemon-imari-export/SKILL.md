---
name: kakiemon-imari-export
description: "Apply the Kakiemon and Imari export porcelain style (1660–1740) when specifying, sourcing or prompting fired clay: tableware, teaware, kitchen and storage ware, vases and display vessels, figures, tiles, architectural ceramics and sanitary and technical ware. Load when the user asks for: kakiemon, imari porcelain, arita ware, japanese export porcelain, quail and millet, nigoshide."
domain: ceramics
era: porcelain-race
triggers:
  - "kakiemon"
  - "imari porcelain"
  - "arita ware"
  - "japanese export porcelain"
  - "quail and millet"
  - "nigoshide"
  - "octagonal dish"
vector_profile:
  ornamentation: 4
  hand_mark: 4
  refinement: 5
  glaze_depth: 2
  chromatic_intensity: 4
---

# Kakiemon and Imari export porcelain

> A white porcelain can carry two styles of decoration: a spare picture in the open white, and a crowded design in blue, red and gold.

Japanese export porcelain from Arita. Kakiemon ware has a milk-white body and a spare, asymmetric overglaze design; Imari ware is dense, with blue under the glaze and red and gold over it.

**Period:** 1660–1740 · **Era:** The porcelain race · **Domain:** Ceramics · **Also called:** Arita export porcelain, Kakiemon, Imari ware

## When to load this skill

Load it when the user asks for: "kakiemon", "imari porcelain", "arita ware", "japanese export porcelain", "quail and millet", "nigoshide", "octagonal dish".

Good for: a spare coloured plate on milk-white porcelain, a museum label on Japanese export porcelain, a prompt for a 17th-century collector's cabinet.

Do not use it when:
- the brief needs a rustic earthenware look
- the brief needs a centred, symmetric design in a single colour

## System directives

When specifying, sourcing or prompting fired clay: tableware, teaware, kitchen and storage ware, vases and display vessels, figures, tiles, architectural ceramics and sanitary and technical ware in Kakiemon and Imari export porcelain, you MUST:

1. Make a milk-white body, called nigoshide, from Arita clay for the Kakiemon type.
2. Leave large areas of the white body empty and place the design off-centre.
3. Paint overglaze enamels in red, green, blue, yellow and black, and fire at 800 °C in a muffle kiln.
4. Use a spare, graceful design of flowering branches, birds, tigers and the quail and millet.
5. For Imari, paint underglaze blue first, then red and gold over it, so that the surface is full.
6. Fire the body and the glaze at 1300 °C, and the enamels at 800 °C, in a third firing.
7. Use lobed edges and brown-edged rims (kuchibeni) on dishes and bowls.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** A centred, symmetrical design in the Kakiemon type.
- **NEVER:** A grey or cloudy porcelain body.
- **NEVER:** Soft shading and realistic depth in the pattern.
- **NEVER:** Painting in blue only with no enamel.
- **NEVER:** Gilding in thick sheet instead of fine lines.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■■■□` 4/5 | a plain surface | painted, printed, moulded or gilt ornament on every part |
| Hand mark | `■■■■□` 4/5 | machine-exact and identical pieces | each piece shows the hand: throwing rings, finger marks, irregular rims |
| Refinement | `■■■■■` 5/5 | coarse, porous, heavy body | thin, white, dense or translucent body |
| Glaze depth | `■■□□□` 2/5 | a flat, even glaze or bare clay | deep, variegated glaze effects: pooling, crackle, ash runs, flambé |
| Chromatic intensity | `■■■■□` 4/5 | white, earth or one tone | saturated colour and bold pattern |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Form & profile

- **Shape:** Octagonal and lobed dishes, bowls, bottles, jars with lids, figures of animals, and tall ceremonial jars.
- **Profile:** Round or octagonal shapes with a crisp, thin wall; vases have a full belly and a straight neck.
- **Foot and rim:** A neat foot ring with a thin edge, and a rim with a thin brown line (kuchibeni) on Kakiemon dishes.
- **Proportion:** Dish diameter 20 to 30 cm; vase height 20 to 60 cm; a wall 3 to 6 mm thick.
- **Rules:**
  - Make the wall thin and the glaze even and flawless.
  - Mould lobed or octagonal forms for a dish, for an interesting edge.
  - Leave up to half of the face of a Kakiemon piece in bare white.
  - Put the design on one side and let it flow to the rim.

## Clay bodies

- **Primary:** porcelain
- **Avoid:** earthenware · stoneware · bone-china
- **Rule:** Use a white, dense porcelain of Izumiyama stone. It must fire to a milk-white that gives a clean ground for the enamels.

## Forming

- **Methods:** throwing on the wheel · press moulding of lobed dishes · slip casting of figures by hand moulds · painting under the glaze · painting over the glaze
- **Joins:** Lids and handles are luted with slip; figures are moulded in two halves and joined.
- **Details:** A brown line on the rim, a flat, even enamel, and a pointed stilt mark under the foot.

## Glaze & decoration

- **Glazes:** clear-feldspathic
- **Decorations:** overglaze-enamel · underglaze-cobalt · gilding
- **Pattern:** Kakiemon: a spare flowering branch, a quail and millet, or a tiger, off-centre on white. Imari: dense chrysanthemum, peony and brocade bands in blue, red and gold.
- **Gloss:** Glassy, about 85 to 95 GU, over a clear glaze; the enamels are slightly raised and glossy.
- **Wear:** The enamel can rub off the high places and the gilding can fade; the white body stays clean.

## Palette

- **Strategy:** Kakiemon: a milk-white ground with soft red, green, blue and yellow. Imari: deep underglaze blue with iron red and gold over it.

**Colours**

| Name | Hex | Role |
|---|---|---|
| Nigoshide white | `#F4F1E6` | ground |
| Kakiemon red | `#C8452D` | main enamel |
| Soft green | `#5E9A6A` | leaves |
| Turquoise blue | `#4FA3B0` | accent |
| Imari cobalt | `#1C3A8C` | underglaze blue |
| Gold | `#C09A3B` | gilding |

## Firing

- **Kiln:** A climbing kiln of linked chambers at Arita for the body and glaze, and a small muffle kiln for the enamels.
- **Atmosphere:** oxidation
- **Processes:** biscuit firing · paint underglaze blue · dip in clear glaze · high firing at about 1300 °C · paint overglaze enamels · enamel firing at about 800 °C · gilding firing
- **Scale:** The Dutch trading company ordered and shipped thousands of pieces from Arita each year after 1659.
- **Signs:** A milk-white body, an even flat enamel, a brown rim line and a small stilt mark under the foot.

**Temperature c**

|  |
||
|  |
|  |

## Signature pieces

**Pieces**

| Object | Form | Body | Glaze | Decoration |
|---|---|---|---|---|
| charger | Octagonal dish with a flowering branch and a brown rim on a milk-white body | porcelain | clear-feldspathic | overglaze-enamel |
| lidded-jar | Large jar with a lid, dense peony and chrysanthemum bands in blue, red and gold | porcelain | clear-feldspathic | underglaze-cobalt |
| bottle-vase | Tall bottle with a plain milk-white body and a quail and millet in red and green | porcelain | clear-feldspathic | overglaze-enamel |
| display-bowl | Lobed bowl with a tiger and bamboo and gold on the rim | porcelain | clear-feldspathic | gilding |

## Prompt primer

- **Positive:** Kakiemon porcelain dish · milk-white body with a spare asymmetric design · overglaze enamels in red, green and blue · quail and millet motif · Imari blue, red and gold · octagonal lobed dish · brown-edged rim · museum photograph, soft light
- **Negative:** centred symmetric pattern · grey body · blue only · thick gold sheet · realistic shading

**Canonical works**

| Work | Maker | Year |
|---|---|---|
| Kakiemon dish with quail and millet | Sakaida Kakiemon workshop | 1680 |
| Octagonal Kakiemon jar with a lid | Arita potters | 1690 |
| Imari jar with peony and brocade | Arita potters | 1700 |

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Overglaze enamelling (process)

Coloured glass enamels are painted on a glazed and fired piece. A third firing at a low heat fixes them on the glaze. Origin: ceramics, Jingdezhen, Jiangxi, China, c. 1465.

- Fire the piece with a clear glaze.
- Paint the design with enamels of red, green, yellow and blue.
- Fire it again in a small muffle kiln at 750 to 850 °C.
- Add gold in a last low firing, when the design needs it.

## Media

The salons, schools, magazines, publishers, galleries and platforms that carried this style.

- **Arita kilns** (workshop, Arita, Saga, Japan, 1616–now), made the style. The porcelain town of Kyushu where Japanese porcelain began in the early 17th century. Its kilns made Kakiemon and Imari ware for the home market and for Dutch export.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Ornament level (`ornament_level`) | 0.6 | 0.3–1 | glaze, signatures |
| Glaze gloss (`glaze_gloss`) | 88 | 70–96 GU | glaze, palette |
| Wall thickness (`wall_thickness`) | 4 | 2.5–8 mm | form, forming |
| Hand mark (`hand_mark`) | 0.5 | 0.3–0.75 | forming, form, signatures |
| Era blend (`era_blend`) | 0.2 | 0–1 | form, firing, signatures |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **Dutch, cheaper, blue**: move toward [`delftware`](../delftware/SKILL.md) (Delftware). Change to tin-glazed earthenware and paint a blue version of the motif.
- If the user asks for **Chinese, with famille rose**: move toward [`famille-rose-qing`](../famille-rose-qing/SKILL.md) (Famille rose (Qing)). Keep the white porcelain, change the enamels to soft pinks with opaque white, and fill the face with a Chinese garden scene.

- **Came from (go here for a more orthodox version):** [`kraak-porcelain`](../kraak-porcelain/SKILL.md), [`yuan-ming-blue-and-white`](../yuan-ming-blue-and-white/SKILL.md)
- **Led to (go here for a newer version):** [`famille-rose-qing`](../famille-rose-qing/SKILL.md)
- **Mixes well with:** [`delftware`](../delftware/SKILL.md)
- **Nearest by vector profile:** [`rococo-porcelain-figures`](../rococo-porcelain-figures/SKILL.md), [`iznik-pottery`](../iznik-pottery/SKILL.md), [`meissen-baroque-porcelain`](../meissen-baroque-porcelain/SKILL.md)

## Emotional target

A bright, balanced luxury: the viewer sees clean white and sharp colour and feels the pleasure of a fine cabinet piece.

**Keywords:** refined, bright, asymmetric, precious, elegant · **Brand archetypes:** lover, ruler

## Canonical evidence (open licence)

Each item below has an open licence or is in the public domain, so you may show it as a reference.

- [Kakiemon dish with a bird on a rock, about 1670](https://commons.wikimedia.org/wiki/File:Kakiemon_Dish_with_Bird_on_a_Rock_Design,_c._1670,_Arita,_hard-paste_porcelain_with_overglaze_enamels_-_Gardiner_Museum,_Toronto_-_DSC00383.JPG) (Kakiemon workshop): image, CC0. Daderot
- [Pair of Kakiemon square flasks, 1680–1700](https://commons.wikimedia.org/wiki/File:Pair_of_Kakiemon_Square_Flasks,_c._1680-1700,_Arita,_hard-paste_porcelain_with_overglaze_enamels_-_Gardiner_Museum,_Toronto_-_DSC00471.JPG) (Kakiemon workshop): image, CC0. Daderot

## Sources

- [Wikipedia: Kakiemon](https://en.wikipedia.org/wiki/Kakiemon)
- [Wikipedia: Imari ware](https://en.wikipedia.org/wiki/Imari_ware)

---

Generated from [`data/ceramics/styles/kakiemon-imari-export.json`](../../data/ceramics/styles/kakiemon-imari-export.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
