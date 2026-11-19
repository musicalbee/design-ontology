---
name: nouvelle-cuisine
description: "Apply the Nouvelle cuisine style (1965–1990) when specifying, describing or prompting food and its table: a dish, a menu, a plate, a service, a shop counter or a food photograph. Load when the user asks for: nouvelle cuisine, 1970s french restaurant, light french cooking, plated by the chef, salmon with sorrel, gault millau."
domain: cuisine
era: nouvelle-and-new-world
triggers:
  - "nouvelle cuisine"
  - "1970s french restaurant"
  - "light french cooking"
  - "plated by the chef"
  - "salmon with sorrel"
  - "gault millau"
  - "bocuse"
  - "troisgros"
vector_profile:
  composition: 4
  transformation: 3
  locality: 3
  richness: 3
  flavour_intensity: 2
---

# Nouvelle cuisine

> Take the weight out of Escoffier: fresh market produce, short cooking and a sauce without flour let the taste of the ingredient lead.

A light French restaurant kitchen. The chef buys fresh produce at the market, cooks fish and vegetables for a short time, makes sauces without flour, and plates each dish in the kitchen. Gault and Millau gave it ten rules in 1973.

**Period:** 1965–1990 · **Era:** Nouvelle and new world · **Domain:** Cuisine · **Also called:** New French cuisine, Cuisine du marché

## When to load this skill

Load it when the user asks for: "nouvelle cuisine", "1970s french restaurant", "light french cooking", "plated by the chef", "salmon with sorrel", "gault millau", "bocuse", "troisgros".

Good for: a menu for a 1970s French restaurant, a food photograph of a small plated dish on a large white plate, a period scene of a chef at the pass.

Do not use it when:
- the brief wants a heavy sauced dish from a grand hotel
- the brief wants foam, gel or liquid nitrogen
- the brief is home or street food

## System directives

When specifying, describing or prompting food and its table: a dish, a menu, a plate, a service, a shop counter or a food photograph in Nouvelle cuisine, you MUST:

1. Buy produce at the market on the day, and write the menu from what you bought.
2. Cook fish, shellfish and green vegetables for the shortest time: fish stays translucent at the centre, vegetables stay crisp.
3. Make each sauce from the cooking juices, a reduction and a little cream or butter; leave out the roux.
4. Keep the menu short: three or four dishes for each course, not a long list.
5. Plate each dish in the kitchen on a large white plate, one portion for one guest.
6. Leave about 40 per cent of the plate empty, and cut the garnish to two or three items.
7. Pair a savoury main ingredient with fruit, a flower or a herb, and keep every flavour clear.
8. Let the chef follow the season and invent: a new dish each week.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** A heavy sauce thickened with flour and cooked for hours.
- **NEVER:** Game or meat hung until it is high.
- **NEVER:** A long menu with a dish for every taste.
- **NEVER:** Fish and vegetables cooked until grey and soft.
- **NEVER:** A garnish that covers the plate.
- **NEVER:** A dish carved or finished at a trolley beside the table.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Composition | `■■■■□` 4/5 | heaped, shared and family-style | an architectural plate with exact placement and empty space |
| Transformation | `■■■□□` 3/5 | raw or plainly cooked, the ingredient as it grew | technique changes the form, the texture and the temperature |
| Locality | `■■■□□` 3/5 | a global pantry of imported goods | one place and one season, grown or foraged near the kitchen |
| Richness | `■■■□□` 3/5 | broth, acid, raw and steamed | butter, cream, fat and reduction |
| Flavour intensity | `■■□□□` 2/5 | mild, clean and subtle | loud spice, chilli, smoke and ferment |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Plating & composition

- **Composition:** A small portion arranged by the chef on a wide plate: a fan of thin slices or a neat piece, a pool of sauce beneath, and a few vegetables set apart.
- **Plate:** A white round porcelain plate of 280 to 320 mm with a wide flat rim, bigger than a classic dinner plate.
- **Portion:** A main piece of 90 to 130 g with 30 to 50 ml of sauce and two small vegetable items; about 55 per cent of the plate is covered.
- **Height:** The food stands 15 to 30 mm high; the sauce forms a pool of 2 to 3 mm under the main piece, not a coat over it.
- **Rules:**
  - Spoon the sauce onto the plate first and lay the main piece on it.
  - Fan a thin slice of fish or meat from the middle to the rim, or set a small round piece at the centre.
  - Cook each vegetable on its own and place it apart: a pile of three or four green beans, a small turned carrot.
  - Wipe the rim; the plate leaves the pass ready, and no waiter changes it.
  - Use one herb leaf or one flower as the only decoration.

## Pantry

- **Primary:** salmon · sole · shellfish · duck · foie-gras · seasonal-greens · butter · cream
- **Secondary:** wild-mushrooms · asparagus · truffle · orchard-fruit · fine-herbs · carrot · lemon · wine · vinegar · egg · veal · berries
- **Avoid:** lard · soy-sauce · sodium-alginate · chilli
- **Rule:** Choose the fish, the vegetables and the herbs that the market has that morning, and use cream and butter in small amounts to finish a sauce.

## Technique

- **Methods:** poaching · steaming · sauteing · reduction · emulsion-sauce · plated-service · knife-work · stock-making
- **Bases:** A light fish fumet, a clear veal or chicken stock, and the cooking juices of the dish itself; the cook reduces them and does not use roux.
- **Details:** A thin escalope cooked on one side for seconds, a vegetable cooked al dente and shocked in cold water, a sauce mounted with a cube of cold butter, a single herb leaf.

## Flavour

- **Profile:** Fresh and clear: the taste of the fish, the shell or the vegetable first, with sorrel, citrus, herbs and a light butter sauce.
- **Balance:** Acid from sorrel, lemon or vinegar sits against a small amount of cream; salt is low and sweet comes from fruit used with savoury food.
- **Fat:** Butter and cream give about 25 to 40 per cent of the energy of a main dish, less than in the classic kitchen.
- **Seasoning:** Salt and pepper at the end, fresh herbs added at the last moment, a little acid to finish. No long stock with many spices.

## Palette

- **Strategy:** Use a large white plate as an empty field, with pale pink fish, one green and a pale sauce.

**Colours**

| Name | Hex | Role |
|---|---|---|
| Porcelain white | `#F7F5F0` | plate |
| Salmon pink | `#F0A28A` | fish |
| Sorrel green | `#8FA64B` | sauce and vegetable |
| Cream | `#F1E6CC` | sauce |
| Beurre blanc | `#EFE2B4` | sauce |
| Spring green | `#5E8C3A` | vegetable |
| Truffle black | `#26211D` | accent |

## Service & table

- **Format:** A tasting menu or a short à la carte menu; the plates come from the pass already arranged, and the waiter sets each one in front of the guest.
- **Courses:** A menu dégustation of five to eight small courses, or an à la carte meal of three courses with a sorbet between.
- **Tableware:** Large white plates, thin crystal glasses, plain cutlery and white linen without a gold rim.
- **Setting:** A family restaurant or a country inn with a chef who is the owner, a small brigade of ten to twenty cooks and a dining room of 30 to 50 seats.

## Signature dishes

**Dishes**

| Course | Dish | Ingredient | Method |
|---|---|---|---|
| fish-course | Escalope of salmon with sorrel | salmon | sauteing |
| soup | Black truffle soup in a pastry lid | truffle | stock-making |
| hors-doeuvre | Salad of warm foie gras and green vegetables | foie-gras | sauteing |
| fish-course | Steamed sole with a light butter sauce | sole | steaming |
| entree | Duck with a fruit and vinegar sauce | duck | reduction |

## Prompt primer

- **Positive:** nouvelle cuisine plated dish · large white plate with wide rim · thin salmon escalope on pale green sorrel sauce · small portion with empty space · crisp green beans in a small pile · single herb leaf as garnish · light butter sauce pooled under the fish · 1970s French restaurant · soft daylight on white linen · overhead plated dish photograph
- **Negative:** dark brown demi-glace coat · heaped garnish · silver cloche · gold-rimmed plate · foam · slate plate · tweezers garnish

**Canonical works**

| Work | Maker | Year |
|---|---|---|
| Escalope de saumon à l'oseille | Jean and Pierre Troisgros | 1962 |
| Soupe aux truffes noires V.G.E. | Paul Bocuse | 1975 |
| The ten commandments of nouvelle cuisine, Le Nouveau Guide | Henri Gault and Christian Millau | 1973 |
| La Cuisine du marché | Paul Bocuse | 1976 |

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Chef-plated course (skill, invented here)

The chef arranges each portion on its own plate in the kitchen, and the waiter brings it to the guest without any change. Origin: cuisine, Roanne and Collonges-au-Mont-d'Or, France, c. 1968.

- Warm a large plate of 280 to 320 mm and keep the rim clean.
- Put the sauce on the plate first, and then the main piece, in one place that the chef chooses.
- Leave 40 to 55 per cent of the plate empty, and set no more than three garnishes.
- Check the plate at the pass before it leaves the kitchen.

### Flourless reduction sauce (process, invented here)

A sauce made from the cooking juices and a stock, reduced and finished with a little cream, butter, fromage blanc or a vegetable purée, with no flour roux. Origin: cuisine, Roanne, France, c. 1962.

- Deglaze the pan with wine or stock, and reduce it by two thirds.
- Add a spoon of cream, a cube of cold butter, or fromage blanc, and whisk it off the heat.
- Season with lemon, vinegar or herbs at the end, and serve 30 to 50 ml of sauce under the food.

### Kitchen brigade (process)

A kitchen split into stations, each with one task and one chief, under a chef de cuisine; a dish passes from station to station like a part on a line. Origin: cuisine, Savoy Hotel, London, c. 1890.

- Give each station one task: sauce, roast, fish, vegetables, cold kitchen or pastry.
- Call each order from the pass, and let each station start its part at the call.
- Assemble the plate at the pass, and let the chef check it before it leaves.

### Market menu (process, invented here)

The chef writes the menu after the visit to the market or the farm, and the dishes change each day or each week with what is fresh. Origin: cuisine, Collonges-au-Mont-d'Or, France, c. 1965.

- Buy the produce on the same day, from the same traders or farms.
- Write the menu after the purchase, and keep it short.
- Print or write the menu by hand on the day, and name the farm or the market.

### Regional sourcing (process)

A way to write a menu from the produce of one region and one season. The cook buys from near farms and markets and names the source on the menu. Origin: cuisine, Vienne, France, c. 1925.

- Buy each main food from a producer within the region on the day of the meal.
- Cook the classic dish with that food, and keep the sauce simple.
- Pair the dish with a wine of the same region.

### Sous vide (process, invented here)

Food is sealed in a bag and cooked in a water bath at an exact low temperature, so that the whole piece reaches the same core heat. Origin: cuisine, Roanne, France, 1974.

- Season the food and seal it in a bag with the air removed.
- Set the water bath to the target core temperature, for example 56 °C for beef.
- Cook for the time that the thickness of the piece needs, from 1 to 48 hours.
- Chill or sear the food just before service.

## Media

The salons, schools, magazines, publishers, galleries and platforms that carried this style.

- **Gault et Millau guide** (magazine, Paris, 1969–now), published the style. A French restaurant guide and monthly founded by Henri Gault and Christian Millau. It marks restaurants from 1 to 20 and in 1973 it printed the ten characteristics of nouvelle cuisine.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Course count (`course_count`) | 7 | 4–12 | service, signatures |
| Negative space (`negative_space`) | 0.5 | 0.35–0.65 | plating |
| Portion (`portion_g`) | 110 | 70–160 g | plating, service |
| Spice level (`spice_level`) | 0 | 0–1 | flavour, pantry |
| Fat share (`fat_share`) | 0.32 | 0.2–0.42 | flavour, technique, pantry |
| Plate colour (`plate_colour`) | #F7F5F0 | #F7F5F0, #FFFFFF, #E9E6DF | plating, service, palette |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **lighter still, for a diet**: move toward [`cuisine-minceur`](../cuisine-minceur/SKILL.md) (Cuisine minceur). Steam each item, bind the sauce with fromage blanc or vegetable purée, and cut the fat share to 15 per cent.
- If the user asks for **more local and plain, with the produce of one garden**: move toward [`california-cuisine`](../california-cuisine/SKILL.md) (California cuisine). Keep the market menu, drop the chef's flourishes, and name the farm of each ingredient.
- If the user asks for **heavier and more formal**: move toward [`cuisine-classique`](../cuisine-classique/SKILL.md) (Cuisine classique). Bring back the demi-glace and the roux, coat the main piece, and add a guéridon service.

- **Came from (go here for a more orthodox version):** [`cuisine-classique`](../cuisine-classique/SKILL.md)
- **Led to (go here for a newer version):** [`bistronomie`](../bistronomie/SKILL.md), [`california-cuisine`](../california-cuisine/SKILL.md), [`cuisine-minceur`](../cuisine-minceur/SKILL.md), [`molecular-gastronomy`](../molecular-gastronomy/SKILL.md), [`naturalist-cuisine`](../naturalist-cuisine/SKILL.md), [`novoandina-and-nikkei`](../novoandina-and-nikkei/SKILL.md), [`pacific-rim-fusion`](../pacific-rim-fusion/SKILL.md)
- **Kin in another domain:** [`minimalist-interior`](../minimalist-interior/SKILL.md)
- **Nearest by vector profile:** [`pacific-rim-fusion`](../pacific-rim-fusion/SKILL.md), [`cuisine-francoise`](../cuisine-francoise/SKILL.md), [`plant-based-fine-dining`](../plant-based-fine-dining/SKILL.md)

## Emotional target

The relief of a light lunch that still feels like an event: clear taste, a clean plate and no weight after the meal.

**Keywords:** light, fresh, precise, seasonal, inventive, clean · **Brand archetypes:** creator, magician

## Canonical evidence (open licence)

Each item below has an open licence or is in the public domain, so you may show it as a reference.

- [Jean, Jean-Baptiste and Pierre Troisgros](https://commons.wikimedia.org/wiki/File:Jean,_Jean-Baptiste_et_Pierre_Troisgros_(crop).jpg) (Troisgros family): image, CC BY 4.0. Troisgros fanny, via Wikimedia Commons
- [Crayfish escabèche on asparagus gazpacho (Lameloise, Chagny)](https://commons.wikimedia.org/wiki/File:Jacques_Lameloise_DSCF6580.jpg) (Jacques Lameloise, 2007): image, CC BY 3.0. Jacques Lameloise, via Wikimedia Commons
- [Paul Bocuse in 2007](https://commons.wikimedia.org/wiki/File:Paul_Bocuse_2007.jpg) (Alain Elorza, 2007): image, CC BY 2.0. Alain Elorza, via Wikimedia Commons

## Sources

- [Wikipedia: Nouvelle cuisine](https://en.wikipedia.org/wiki/Nouvelle_cuisine)
- [Wikipedia: Paul Bocuse](https://en.wikipedia.org/wiki/Paul_Bocuse)
- [Wikipedia: Gault Millau](https://en.wikipedia.org/wiki/Gault_Millau)
- [Wikipedia: Pierre Troisgros](https://en.wikipedia.org/wiki/Pierre_Troisgros)

---

Generated from [`data/cuisine/styles/nouvelle-cuisine.json`](../../data/cuisine/styles/nouvelle-cuisine.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
