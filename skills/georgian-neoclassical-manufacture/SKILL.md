---
name: georgian-neoclassical-manufacture
description: "Apply the Georgian neoclassical manufacture style (1760–1840) when specifying, sourcing or prompting the objects that furnish a room: taps, switches, lamps, curtain rods, storage, seats, tables, kitchen objects, frames, vases and pots. Load when the user asks for: georgian furniture, wedgwood, jasperware, creamware, boulton ormolu, regency sideboard."
domain: industrial
era: proto-industrial
triggers:
  - "georgian furniture"
  - "wedgwood"
  - "jasperware"
  - "creamware"
  - "boulton ormolu"
  - "regency sideboard"
  - "neoclassical object"
  - "adam style lamp"
vector_profile:
  ornamentation: 4
  hand_finish: 3
  material_warmth: 4
  visual_mass: 3
  chromatic_intensity: 2
---

# Georgian neoclassical manufacture

> A factory can make an object that looks like a work of antiquity: the form comes from the classical model, and the mould, the lathe and the die repeat it with a fine finish.

The household goods of the first English factories: mahogany furniture, creamware and jasperware, ormolu and Sheffield plate, all made in series from the classical models of the architect and the pattern book.

**Period:** 1760–1840 · **Era:** Proto-industrial · **Domain:** Industrial design · **Also called:** Wedgwood and Boulton manufacture, Adam-period manufacture, Georgian factory classicism

## When to load this skill

Load it when the user asks for: "georgian furniture", "wedgwood", "jasperware", "creamware", "boulton ormolu", "regency sideboard", "neoclassical object", "adam style lamp".

Good for: period hardware for a Georgian or Regency house, a reissue of a classical lamp or vase, a still life with creamware and mahogany, a hardware schedule for a listed building.

Do not use it when:
- The brief asks for a bare, plain or modern object.
- The room needs soft, worn and rustic surfaces.

## System directives

When specifying, sourcing or prompting the objects that furnish a room: taps, switches, lamps, curtain rods, storage, seats, tables, kitchen objects, frames, vases and pots in Georgian neoclassical manufacture, you MUST:

1. Take each form from a classical model: an urn, a column, a vase or an acanthus leaf.
2. Use a slim, straight leg with 8 to 12 flutes, or a turned leg with a tapered foot.
3. Use mahogany with a figured veneer and a fine French polish on all large wood surfaces.
4. Put the ornament in a narrow band: a bead, a reed, a Greek key or a husk chain of 10 to 25 mm.
5. Make a thin, cast and gilded metal mount for each handle, sconce and clock case.
6. Keep a pale ground, such as cream, sage or stone, and one gilded accent for each object.
7. Draw the form so that a workshop can repeat it with a mould, a lathe or a die.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Heavy carved scrolls and shells in the rococo manner.
- **NEVER:** Deep buttoned upholstery.
- **NEVER:** Bright synthetic colour.
- **NEVER:** Raw machine marks on a visible surface.
- **NEVER:** Chrome and bright steel.
- **NEVER:** Moulded plastic parts.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■■■□` 4/5 | plain surfaces and pure geometry | applied ornament on every part |
| Hand finish | `■■■□□` 3/5 | machine-perfect, identical parts | visible marks of the hand and the tool |
| Material warmth | `■■■■□` 4/5 | cold metal, glass and plastic | warm wood, wool, leather and clay |
| Visual mass | `■■■□□` 3/5 | thin lines and open frames | heavy, solid, closed volumes |
| Chromatic intensity | `■■□□□` 2/5 | the natural colour of the material, or white and black | saturated applied colour |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Form

- **Geometry:** Straight lines, circles and ovals, with the urn, the column and the arch as the main shapes.
- **Silhouette:** A light, upright outline on slim legs: a rectangular case with a gentle serpentine or bow front, and a vase or an urn as the top.
- **Edges:** Crisp edges with a small bead or reed of 3 to 6 mm; no soft or bulbous curves.
- **Proportion:** A sideboard is about 90 cm high and 180 cm long; a leg is about 1/12 of its height in width; a vase has a height of 1.5 to 2 times its widest diameter.
- **Ornament:** A band of low relief: a bead, a husk chain, a Greek key, a reed or a laurel wreath, in cast metal, plaster or inlay.
- **Rules:**
  - Each object has one classical motif, such as a flute, an urn or a husk chain.
  - Each leg is straight and tapered, or turned with a round foot.
  - A band of ornament is 10 to 25 mm wide.
  - Gilding covers less than 20% of the visible surface.
  - Each vase or urn has a base, a body and a lid or rim in 3 clear parts.

## Materials

- **Primary:** mahogany · solid-brass · porcelain · marble · silk · mirror-glass
- **Secondary:** silver-plate · bronze · cast-iron · wrought-iron · oak · walnut · clear-glass · pressed-glass · plaster · cotton · linen · wool · velvet · leather
- **Avoid:** abs-plastic · polypropylene · bakelite · acrylic · chrome-plated-steel · plastic-laminate · fibreglass · pvc
- **Rule:** Mahogany, brass and ceramic carry the object; silk, marble and mirror glass give the fine surfaces; 0% of the visible surface is a modern polymer.

## Finish & texture

- **Finishes:** french-polished · polished · gilded · vitreous-glaze · waxed · painted-eggshell · silvered · piece-dyed
- **Textures:** figured-grain · fine-grain · mirror-smooth · satin-smooth · fluted · cast-relief · veined · twill
- **Gloss:** 60–85 GU on wood and gilding, 80–95 GU on glaze, 15–30 GU on paint
- **Patina:** A clean, fine surface in its first state; the style allows a soft, warm age of the wood and the gilding, but not rust or wear.

## Hardware & joints

- **Metal tone:** brass
- **Section:** Rods and stems 10–20 mm; a cast mount 2–4 mm thick
- **Joints:** Hidden joints; cast and chased mounts screwed to the wood; a ring pull on a rose plate.
- **Handles:** A ring pull on a cast rose, a lion mask with a ring, or a small turned knob of wood or porcelain.
- **Switches and taps:** Before 1880 there is no electric switch; the period-faithful reissue is a rotary switch in white porcelain with a brass ring. A tap has a swan neck and a cross handle in brass.

## Palette

- **Strategy:** Pale grounds of cream, stone and sage, set against the red-brown of mahogany and the yellow of brass and gilding.

**Colours**

| Name | Hex | Role |
|---|---|---|
| Mahogany | `#6B2E1E` | furniture |
| Cream | `#EDE4CE` | walls, ceramic |
| Sage green | `#A9B493` | painted panel, silk |
| Gilt brass | `#B8923A` | mounts, frames |
| Wedgwood blue | `#8FA5BC` | jasperware |
| Marble white | `#E8E6E0` | top, bust |

## Manufacture

- **Processes:** mahogany veneering · lathe turning · press moulding of clay · ormolu casting and gilding · die-stamping of thin metal · Sheffield plating
- **Scale:** Large workshops and early factories of 100 to 300 workers; sets and services made in the hundreds from pattern books.
- **Signs:** Flutes of equal width, repeated mounts of one casting, and a clear glaze with fine, even thickness.

## Signature objects

**Objects**

| Category | Object | Form | Material | Finish | Texture |
|---|---|---|---|---|---|
| sanitary | basin | pedestal basin with a marble top | marble | polished | veined |
| electrics | light-switch | round rotary in white porcelain with a brass ring (a period-faithful reissue) | porcelain | vitreous-glaze | mirror-smooth |
| lighting | wall-sconce | two-arm sconce with a gilt mount | solid-brass | gilded | cast-relief |
| storage | sideboard | bow-front case on tapered legs | mahogany | french-polished | figured-grain |
| soft-furniture | sofa | settee with a straight back and fluted legs | silk | piece-dyed | twill |
| tables | dining-table | extending table on turned legs | mahogany | french-polished | figured-grain |
| kitchen | tableware | creamware dinner service with a beaded rim | porcelain | vitreous-glaze | mirror-smooth |
| decor | mirror | oval pier glass in a gilt frame | mirror-glass | silvered | mirror-smooth |

## Prompt primer

- **Positive:** Georgian neoclassical household object · mahogany with figured veneer · fluted tapered legs · ormolu mounts and gilt brass · creamware and jasperware · urn and husk chain ornament · oval mirror in a gilt frame · cream and sage painted ground · fine French polish · studio product photograph, soft window light
- **Negative:** chrome · plastic · rococo shell carving · buttoned Victorian upholstery · bright synthetic colour · industrial steel

**Canonical works**

| Work | Maker | Year |
|---|---|---|
| Queen's Ware creamware service | Josiah Wedgwood | 1765 |
| Portland vase copy in jasperware | Josiah Wedgwood | 1790 |
| Ormolu and blue john vase | Matthew Boulton | 1771 |
| Cabinet in the manner of the pattern books | Thomas Sheraton | 1791 |
| Library table for Harewood House | Thomas Chippendale | 1771 |

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Fluting and reeding (motif)

Parallel grooves (flutes) or ridges (reeds) on a column, a panel, a leg or a sheet of glass. Origin: architecture, Greece, c. 600 BCE.

- Cut 16 to 24 flutes round a column, or set the grooves at 15 to 40mm centres on a flat panel.
- Run the flutes vertical to make a surface look taller.
- Use one fluted surface in each room as an accent.

## Media

The salons, schools, magazines, publishers, galleries and platforms that carried this style.

- **Gillows of Lancaster and London** (workshop, Lancaster and London, ?–now), made the style. An English furniture maker that started in about 1730. Its mahogany furniture filled Georgian houses.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Ornament level (`ornament_level`) | 0.45 | 0.15–0.7 | form, finish, signatures |
| Material warmth (`material_warmth`) | 0.6 | 0.4–0.85 | materials, signatures |
| Finish gloss (`finish_gloss`) | 70 | 15–95 GU | finish |
| Era blend (`era_blend`) | 0.2 | 0–1 | form, manufacture, signatures |
| Hardware weight (`hardware_weight`) | 14 | 6–28 mm | hardware, form |
| Edge radius (`edge_radius`) | 3 | 1–12 mm | form |
| Metal tone (`metal_tone`) | brass | brass, bronze, nickel, black, white, none | hardware, finish, palette |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **plainer and more honest**: move toward [`shaker-object`](../shaker-object/SKILL.md) (Shaker object). Remove the flutes and the gilding, and use plain maple and cherry with an oil finish.
- If the user asks for **heavier and more ornate**: move toward [`victorian-manufacture`](../victorian-manufacture/SKILL.md) (Victorian manufacture). Add carved and turned parts, dark polish, velvet and pressed glass.
- If the user asks for **cleaner and modern**: move toward [`scandinavian-modern-product`](../scandinavian-modern-product/SKILL.md) (Scandinavian modern product). Keep the slim leg and the light outline, and use pale oak, linen and white ceramic.

- **Led to (go here for a newer version):** [`victorian-manufacture`](../victorian-manufacture/SKILL.md)
- **Was rejected by:** [`shaker-object`](../shaker-object/SKILL.md)
- **Kin in another domain:** [`georgian-interior`](../georgian-interior/SKILL.md), [`neoclassical-architecture`](../neoclassical-architecture/SKILL.md)
- **Nearest by vector profile:** [`art-deco-product`](../art-deco-product/SKILL.md), [`art-nouveau-object`](../art-nouveau-object/SKILL.md), [`arts-and-crafts-object`](../arts-and-crafts-object/SKILL.md)

## Emotional target

Calm pleasure in a refined, ordered object: it looks light, clean and sure of its proportion.

**Keywords:** refined, ordered, polite, classical, elegant · **Brand archetypes:** ruler, lover

## Canonical evidence (open licence)

Each item below has an open licence or is in the public domain, so you may show it as a reference.

- [Portland vase in jasperware, c. 1790](https://commons.wikimedia.org/wiki/File:Josiah_Wedgwood_-_Portland_Vase_-_1918.823_-_Cleveland_Museum_of_Art.tif) (Josiah Wedgwood, 1790): image, CC0. Cleveland Museum of Art, 1918.823
- [Ormolu tea urn](https://commons.wikimedia.org/wiki/File:Ormoluteaurn.JPG): image, CC BY-SA 3.0. Wehwalt
- [Wedgwood jasperware lustre with ormolu](https://commons.wikimedia.org/wiki/File:Lustre,_Wedgwood,_c._1790,_jasperware_with_London_glass_and_ormolu_perhaps_by_Matthew_Bouton_-_British_Museum_-_DSC00144.jpg) (Josiah Wedgwood, 1790): image, CC0. Daderot

## Sources

- [Wikipedia: Josiah Wedgwood](https://en.wikipedia.org/wiki/Josiah_Wedgwood)
- [Wikipedia: Matthew Boulton](https://en.wikipedia.org/wiki/Matthew_Boulton)
- [Wikipedia: Creamware](https://en.wikipedia.org/wiki/Creamware)
- [Wikipedia: Neoclassicism](https://en.wikipedia.org/wiki/Neoclassicism)

---

Generated from [`data/industrial/styles/georgian-neoclassical-manufacture.json`](../../data/industrial/styles/georgian-neoclassical-manufacture.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
