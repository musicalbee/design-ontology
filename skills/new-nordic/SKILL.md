---
name: new-nordic
description: "Apply the New Nordic cuisine style (2004–present) when specifying, describing or prompting food and its table: a dish, a menu, a plate, a service, a shop counter or a food photograph. Load when the user asks for: new nordic, noma, nordic tasting menu, foraged food, scandinavian fine dining, fermentation menu."
domain: cuisine
era: terroir-and-plant
triggers:
  - "new nordic"
  - "noma"
  - "nordic tasting menu"
  - "foraged food"
  - "scandinavian fine dining"
  - "fermentation menu"
  - "redzepi"
vector_profile:
  composition: 4
  transformation: 3
  locality: 5
  richness: 2
  flavour_intensity: 3
---

# New Nordic cuisine

> A kitchen of one place and one season: the cold, the short summer and the long winter of the North set the menu, and the cook preserves the summer for the winter.

A tasting-menu kitchen that cooks only what grows, swims or is foraged in the Nordic region, in the season of the day. Twelve chefs signed the Manifesto for the New Nordic Kitchen in 2004. Vinegar, ferments and wild plants replace lemon and olive oil.

**Period:** 2004–present · **Era:** Terroir and plant · **Domain:** Cuisine · **Also called:** New Nordic, Nordic cuisine, Ny nordisk mad

## When to load this skill

Load it when the user asks for: "new nordic", "noma", "nordic tasting menu", "foraged food", "scandinavian fine dining", "fermentation menu", "redzepi".

Good for: a tasting menu of a Nordic restaurant, a food photograph on dark stoneware, a menu that uses only local and seasonal produce.

Do not use it when:
- the brief wants citrus, olive oil or a Mediterranean pantry
- the brief wants a rich classic sauce
- the brief is street or fast food

## System directives

When specifying, describing or prompting food and its table: a dish, a menu, a plate, a service, a shop counter or a food photograph in New Nordic cuisine, you MUST:

1. Use only produce of the Nordic region; replace lemon with vinegar, sorrel or fermented juice, and olive oil with butter or cold-pressed rapeseed oil.
2. Forage wild plants, berries, mushrooms and shellfish, and change the menu with the season.
3. Preserve the summer: pickle, salt, smoke, dry and ferment, so that a winter menu tastes of the summer.
4. Cook on wood and embers, and keep the taste of smoke and char.
5. Show the ingredient as it grew: a whole radish, a leaf, a shell, on a plate of stone, wood or hand-made ceramic.
6. Serve many small courses, some eaten by hand, in a room of wood and daylight.
7. Keep a research kitchen for fermentation; a new garum, koji or vinegar is part of the menu.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Lemon, olive oil and other imported staples.
- **NEVER:** Foie gras, caviar or other luxury goods for their price.
- **NEVER:** A cream or butter sauce that covers the ingredient.
- **NEVER:** The same menu all the year.
- **NEVER:** Laboratory gels and foams as the point of the dish.
- **NEVER:** A white porcelain plate with a gold rim.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Composition | `■■■■□` 4/5 | heaped, shared and family-style | an architectural plate with exact placement and empty space |
| Transformation | `■■■□□` 3/5 | raw or plainly cooked, the ingredient as it grew | technique changes the form, the texture and the temperature |
| Locality | `■■■■■` 5/5 | a global pantry of imported goods | one place and one season, grown or foraged near the kitchen |
| Richness | `■■□□□` 2/5 | broth, acid, raw and steamed | butter, cream, fat and reduction |
| Flavour intensity | `■■■□□` 3/5 | mild, clean and subtle | loud spice, chilli, smoke and ferment |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Plating & composition

- **Composition:** A small, natural-looking composition: a few elements in a line or a loose cluster, often covered by leaves or flowers, on a wide hand-made plate.
- **Plate:** A hand-thrown stoneware plate or bowl in grey, brown or black, a flat stone, a wooden board or a bed of moss or hay.
- **Portion:** Twenty to forty courses of 10 to 60 g each; a main piece rarely more than 80 g.
- **Height:** Low: the food lies 5 to 20 mm high, with leaves and flowers as the top layer.
- **Rules:**
  - Put the vegetable or the shellfish in its natural form: whole, with its leaves or in its shell.
  - Cover the main element with leaves, petals or a sheet of something dried, so that the guest finds it.
  - Use a vessel made by a local potter, or a stone, wood or hay that comes from the landscape.
  - Leave half the plate empty and keep the sauce in a small pool or under the food.
  - Serve some courses on a bed of moss, stones or ice, for the hands, with no cutlery.

## Pantry

- **Primary:** wild-plants · root-vegetables · shellfish · berries · rye · seasonal-greens · wild-mushrooms · venison
- **Secondary:** asparagus · cod · oyster · butter · cream · honey · egg · pork · cheese · orchard-fruit · vinegar · game-birds
- **Avoid:** olive-oil · lemon · tomato · foie-gras
- **In europe:** yes
- **Rule:** Take every item from the Nordic region and its season; give acid from vinegar, sorrel, unripe fruit or ferment, not from citrus.

## Technique

- **Methods:** lacto-fermentation · koji-fermentation · pickling · smoking · wood-fire · deep-frying · sauteing · plated-service
- **Bases:** Vinegars and fermented juices of berries and fruit, garums of fish and meat, koji made on barley and peas, and smoked and dried fish.
- **Details:** A dusting of dried berry or cep powder, a glaze of fermented juice, burnt hay, an edible flower, a brown butter.

## Flavour

- **Profile:** Clean, sour and herbal, with the umami of ferments and the smoke of embers.
- **Balance:** Acid leads; umami from garum and koji; little sweet and almost no heat.
- **Fat:** Butter, cream and rapeseed oil in small quantities; 20 to 35 per cent of the energy of a course.
- **Seasoning:** Salt, vinegar, garum, dried herbs and berries, juniper, wood sorrel and the oil of conifer needles.

## Palette

- **Strategy:** Use the colours of the Nordic landscape: dark stoneware, grey stone, the green of leaves and moss, and one bright berry or flower.

**Colours**

| Name | Hex | Role |
|---|---|---|
| Stoneware grey | `#6E6A63` | plate |
| Moss green | `#5B6B3A` | leaves and moss |
| Rye brown | `#5A4232` | bread and soil |
| Lingonberry red | `#A3262A` | accent |
| Shell white | `#E9E4DA` | shellfish and cream |
| Hay gold | `#C7A65A` | hay and smoke |
| Sea blue-grey | `#7C8C94` | stone and sea |

## Service & table

- **Format:** A fixed tasting menu by season: the cooks bring and explain many of the courses at the table.
- **Courses:** Twenty to forty small courses in three or four acts, with bread, a few main courses and two or three desserts.
- **Tableware:** Hand-thrown stoneware by local potters, stones, wooden boards, linen napkins, no tablecloth.
- **Setting:** A former warehouse with wood, daylight and plain Danish furniture; cooks in aprons serve with the waiters.

## Signature dishes

**Dishes**

| Course | Dish | Ingredient | Method |
|---|---|---|---|
| amuse-bouche | Radishes in edible soil | root-vegetables | plated-service |
| amuse-bouche | Crispy reindeer moss with cep | wild-mushrooms | deep-frying |
| tasting-course | The hen and the egg | egg | sauteing |
| vegetable-course | Grilled asparagus with ant paste | asparagus | wood-fire |

## Prompt primer

- **Positive:** New Nordic cuisine · Noma style tasting menu · dark hand-thrown stoneware · small natural composition · foraged wild herbs and flowers · whole radish with leaves · moss and stones · lingonberry · smoked and fermented · Scandinavian daylight · raw wood table · overhead food photograph
- **Negative:** lemon wedge · olive oil drizzle · white porcelain with gold rim · cream sauce · tomato · heavy garnish

**Canonical works**

| Work | Maker | Year |
|---|---|---|
| Manifesto for the New Nordic Kitchen | Claus Meyer and twelve Nordic chefs | 2004 |
| Noma: Time and Place in Nordic Cuisine | René Redzepi | 2010 |
| The Noma Guide to Fermentation | René Redzepi and David Zilber | 2018 |

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Lacto-fermentation (process)

Vegetables in a salt brine are soured by lactic bacteria; the acid and the savoury taste keep the food and add depth to a dish. Origin: cuisine, China, c. 200 BCE.

- Weigh the vegetables and add 2 per cent salt by weight.
- Press the vegetables under their own brine in a closed jar.
- Keep the jar at 18 to 22 °C for 3 to 14 days and taste each day.
- Chill the ferment when the acid is right, and use the juice as a sauce or a seasoning.

### Foraging for the menu (skill)

The cook gathers wild plants, flowers, mushrooms and shellfish near the kitchen, and the menu changes with what the day brings. Origin: cuisine, Laguiole, Aubrac, France, c. 1978.

- Walk the same ground each week and learn when each plant is ready.
- Pick only what the kitchen uses that day, and leave the root.
- Write the menu after the harvest, not before.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **Noma** (company, Copenhagen, 2003–now), launched the style. A restaurant in a former warehouse in Copenhagen; its seasonal tasting menu and its fermentation lab set the New Nordic kitchen.
- **Nordic Council of Ministers** (state programme, Copenhagen, ?–now), funded the style. Body of the Nordic governments. Its food ministers backed New Nordic Cuisine from 2005.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Course count (`course_count`) | 20 | 12–40 | service, signatures |
| Negative space (`negative_space`) | 0.6 | 0.4–0.8 | plating |
| Portion (`portion_g`) | 60 | 15–120 g | plating, service |
| Spice level (`spice_level`) | 0 | 0–1 | flavour, pantry |
| Fat share (`fat_share`) | 0.25 | 0.15–0.4 | flavour, technique, pantry |
| Plate colour (`plate_colour`) | #6E6A63 | #6E6A63, #2E2B28, #E9E4DA, #7C8C94 | plating, service, palette |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more plants, no meat or fish**: move toward [`plant-based-fine-dining`](../plant-based-fine-dining/SKILL.md) (Plant-based fine dining). Remove the venison, the shellfish and the fish garums; make every course from vegetables, grains and ferments.
- If the user asks for **warmer, more southern**: move toward [`naturalist-cuisine`](../naturalist-cuisine/SKILL.md) (Naturalist cuisine). Keep the foraged plants and the seasonal menu, and allow olive oil, lemon and the herbs of the South.

- **Came from (go here for a more orthodox version):** [`naturalist-cuisine`](../naturalist-cuisine/SKILL.md)
- **Led to (go here for a newer version):** [`plant-based-fine-dining`](../plant-based-fine-dining/SKILL.md)
- **Rejects (the opposite pole; do not blend):** [`molecular-gastronomy`](../molecular-gastronomy/SKILL.md)
- **Kin in another domain:** [`contemporary-craft-product`](../contemporary-craft-product/SKILL.md), [`scandinavian-interior`](../scandinavian-interior/SKILL.md), [`scandinavian-modern-product`](../scandinavian-modern-product/SKILL.md)
- **Nearest by vector profile:** [`naturalist-cuisine`](../naturalist-cuisine/SKILL.md), [`novoandina-and-nikkei`](../novoandina-and-nikkei/SKILL.md), [`plant-based-fine-dining`](../plant-based-fine-dining/SKILL.md)

## Emotional target

The feeling of a walk on the coast in one season: cold air, wet leaves, smoke and something sour.

**Keywords:** wild, seasonal, raw, quiet, sour · **Brand archetypes:** explorer, creator

## Canonical evidence (open licence)

Each item below has an open licence or is in the public domain, so you may show it as a reference.

- [Inside Noma: a course at the table](https://commons.wikimedia.org/wiki/File:Inside_Noma_(15297993517).jpg) (Restaurant Noma, 2014): image, CC BY 2.0. City Foodsters, via Wikimedia Commons

## Sources

- [Wikipedia: New Nordic Cuisine](https://en.wikipedia.org/wiki/New_Nordic_Cuisine)
- [Wikipedia: Noma (restaurant)](https://en.wikipedia.org/wiki/Noma_(restaurant))
- René Redzepi, Noma: Time and Place in Nordic Cuisine (Phaidon, 2010)

---

Generated from [`data/cuisine/styles/new-nordic.json`](../../data/cuisine/styles/new-nordic.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
