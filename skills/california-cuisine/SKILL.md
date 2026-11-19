---
name: california-cuisine
description: "Apply the California cuisine style (1971–present) when specifying, describing or prompting food and its table: a dish, a menu, a plate, a service, a shop counter or a food photograph. Load when the user asks for: california cuisine, farm to table, chez panisse, seasonal local menu, market menu, goat cheese salad."
domain: cuisine
era: nouvelle-and-new-world
triggers:
  - "california cuisine"
  - "farm to table"
  - "chez panisse"
  - "seasonal local menu"
  - "market menu"
  - "goat cheese salad"
  - "wood fired grill"
  - "alice waters"
vector_profile:
  composition: 2
  transformation: 2
  locality: 5
  richness: 2
  flavour_intensity: 2
---

# California cuisine

> The best cooking starts with the best produce: buy ripe food from known growers in season, and then do as little to it as you can.

The kitchen of the local farm and the single daily menu. Alice Waters opened Chez Panisse in 1971 and cooked simple French dishes with produce from named growers, in season, with little change to the ingredient.

**Period:** 1971–present · **Era:** Nouvelle and new world · **Domain:** Cuisine · **Also called:** Market-driven cuisine, Farm-to-table

## When to load this skill

Load it when the user asks for: "california cuisine", "farm to table", "chez panisse", "seasonal local menu", "market menu", "goat cheese salad", "wood fired grill", "alice waters".

Good for: a menu for a farm-to-table restaurant, a food photograph of a ripe salad on a rustic plate, a seasonal menu with the names of farms.

Do not use it when:
- the brief wants a heavy classic sauce
- the brief wants a precise architectural plate
- the brief wants spice from a global pantry

## System directives

When specifying, describing or prompting food and its table: a dish, a menu, a plate, a service, a shop counter or a food photograph in California cuisine, you MUST:

1. Build the menu from what the farms bring that week, and write it the same day.
2. Offer one set menu each evening, with the same dish for each guest.
3. Name the farm, the farmer or the field on the menu.
4. Cook over a wood fire or in a wood oven where the dish allows it.
5. Keep each dish to three or four parts and keep the cooking simple.
6. Serve fruit, salad and vegetables at their ripest, with olive oil and herbs.
7. Plate in a rustic way on a plain plate: the food is the decoration.
8. Take ideas from the French and Italian country table, and use Californian produce.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Out-of-season produce flown in for the menu.
- **NEVER:** A heavy sauce that hides the ingredient.
- **NEVER:** A tall tower of food with a decorative garnish.
- **NEVER:** A long menu with a choice for every guest.
- **NEVER:** Frozen or canned produce.
- **NEVER:** A plate with a smear and a foam.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Composition | `■■□□□` 2/5 | heaped, shared and family-style | an architectural plate with exact placement and empty space |
| Transformation | `■■□□□` 2/5 | raw or plainly cooked, the ingredient as it grew | technique changes the form, the texture and the temperature |
| Locality | `■■■■■` 5/5 | a global pantry of imported goods | one place and one season, grown or foraged near the kitchen |
| Richness | `■■□□□` 2/5 | broth, acid, raw and steamed | butter, cream, fat and reduction |
| Flavour intensity | `■■□□□` 2/5 | mild, clean and subtle | loud spice, chilli, smoke and ferment |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Plating & composition

- **Composition:** The food lies loosely on the plate: a salad in a mound, a piece of fish or meat beside it, a few vegetables in their own colour.
- **Plate:** A plain white or cream stoneware plate of 250 to 280 mm, or a shallow bowl.
- **Portion:** A main piece of 120 to 160 g with 150 g of vegetables or salad; the plate is about 70 per cent full.
- **Height:** The food stands 20 to 50 mm high in a loose mound; the oil or the juice runs on the plate.
- **Rules:**
  - Dress a salad at the last moment and leave the leaves whole or torn by hand.
  - Set a warm round of goat cheese on the leaves, with a crust of bread crumbs.
  - Show the char marks of the wood fire.
  - Pour a little olive oil over the dish before it goes out.
  - Add a whole herb sprig or a flower, never a trimmed decoration.

## Pantry

- **Primary:** seasonal-greens · orchard-fruit · olive-oil · cheese · tomato · salmon · wild-mushrooms · duck
- **Secondary:** garlic · fine-herbs · thyme-bay · lemon · bread · berries · egg · pork · asparagus · honey · wine · grape
- **Avoid:** sodium-alginate · liquid-nitrogen · xanthan-gum · soy-lecithin
- **Rule:** Use produce of the week from named local growers; use olive oil, herbs and lemon for the dressing, and keep each ingredient whole.

## Technique

- **Methods:** wood-fire · grilling · oven-roasting · pate-en-croute · braising · knife-work · reduction
- **Bases:** A pot of good olive oil, a vinaigrette of vinegar and oil, a vegetable or chicken stock, a bowl of garlic and herbs and a loaf of country bread.
- **Details:** A char mark from the wood grill, a warm goat cheese rolled in crumbs, a sprig of herb, a spoon of olive oil poured over at the pass.

## Flavour

- **Profile:** Ripe, green and bright: the sweetness of fruit and tomato, the bite of young leaves and the smoke of the wood fire.
- **Balance:** Acid from vinegar or lemon and oil lift the sweet fruit; salt is moderate, bitter comes from chicory and herbs.
- **Fat:** Olive oil and a little butter give about 30 per cent of the energy of a main dish.
- **Seasoning:** Salt in layers during the cooking, herbs fresh at the end, olive oil and lemon over the finished dish.

## Palette

- **Strategy:** Use the colours of the produce at its ripest on a plain cream or white plate, with the brown of the wood-fire char.

**Colours**

| Name | Hex | Role |
|---|---|---|
| Cream stoneware | `#F3EEE2` | plate |
| Leaf green | `#6E9A3C` | salad and herbs |
| Tomato red | `#C8412B` | tomato |
| Olive oil gold | `#C9A227` | oil |
| Goat cheese white | `#F5F1E6` | cheese |
| Plum purple | `#6B2D5C` | fruit |
| Char brown | `#4A3220` | grill |

## Service & table

- **Format:** A set menu at a fixed time, served by waiters in the dining room with an open kitchen close by; the café offers a short à la carte menu.
- **Courses:** Four courses at a dinner: a first course of a salad, a fish or a pâté, a main course of meat, a salad or cheese and a dessert of fruit.
- **Tableware:** Plain white or cream plates, simple glasses, a bunch of flowers on each table and a paper menu that changes each day.
- **Setting:** A converted wooden house with a kitchen that the guests can see; the cooks and the waiters know the farms by name.

## Signature dishes

**Dishes**

| Course | Dish | Ingredient | Method |
|---|---|---|---|
| hors-doeuvre | Baked goat cheese with garden salad | cheese | oven-roasting |
| hors-doeuvre | Pâté en croûte | pork | pate-en-croute |
| main-course | Duck with olives | duck | braising |
| fish-course | Wood-grilled salmon with herbs | salmon | wood-fire |
| dessert | Plum tart | orchard-fruit | oven-roasting |

## Prompt primer

- **Positive:** California market cuisine · baked goat cheese on mixed garden greens · wood-grilled fish with char marks · ripe tomatoes and olive oil · rustic cream stoneware plate · a sprig of fresh herb · hand-written daily menu · wooden house dining room with open kitchen · soft afternoon light · overhead plated dish photograph
- **Negative:** foam · smear of sauce · tower of food · tweezers garnish · dark brown demi-glace · gold-rimmed plate

**Canonical works**

| Work | Maker | Year |
|---|---|---|
| First menu of Chez Panisse (pâté en croûte, duck with olives, plum tart) | Alice Waters | 1971 |
| Chez Panisse Menu Cookbook | Alice Waters | 1982 |
| Baked goat cheese with garden lettuces | Alice Waters | 1980 |

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Market menu (process)

The chef writes the menu after the visit to the market or the farm, and the dishes change each day or each week with what is fresh. Origin: cuisine, Collonges-au-Mont-d'Or, France, c. 1965.

- Buy the produce on the same day, from the same traders or farms.
- Write the menu after the purchase, and keep it short.
- Print or write the menu by hand on the day, and name the farm or the market.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **Chez Panisse** (company, Berkeley, 1971–now), launched the style. A restaurant in Berkeley, California, opened by Alice Waters. The downstairs room serves a set menu that changes each day; the café upstairs opened in 1980.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Course count (`course_count`) | 4 | 3–6 | service, signatures |
| Negative space (`negative_space`) | 0.3 | 0.15–0.45 | plating |
| Portion (`portion_g`) | 280 | 200–380 g | plating, service |
| Spice level (`spice_level`) | 1 | 0–2 | flavour, pantry |
| Fat share (`fat_share`) | 0.3 | 0.2–0.4 | flavour, technique, pantry |
| Plate colour (`plate_colour`) | #F3EEE2 | #F3EEE2, #FFFFFF, #D9D2C3 | plating, service, palette |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more Asian, with soy and ginger**: move toward [`pacific-rim-fusion`](../pacific-rim-fusion/SKILL.md) (Pacific Rim fusion). Keep the market produce and the wood fire; add soy, ginger, miso and sesame to the dressings.
- If the user asks for **more French and formal**: move toward [`nouvelle-cuisine`](../nouvelle-cuisine/SKILL.md) (Nouvelle cuisine). Plate each dish in the kitchen on a large plate, add a light butter sauce, and cut the garnish.
- If the user asks for **only plants**: move toward [`plant-based-fine-dining`](../plant-based-fine-dining/SKILL.md) (Plant-based fine dining). Remove the duck, the pork and the salmon; make each course from vegetables, grains and fruit.

- **Came from (go here for a more orthodox version):** [`nouvelle-cuisine`](../nouvelle-cuisine/SKILL.md)
- **Led to (go here for a newer version):** [`pacific-rim-fusion`](../pacific-rim-fusion/SKILL.md)
- **Mixes well with:** [`pacific-rim-fusion`](../pacific-rim-fusion/SKILL.md)
- **Nearest by vector profile:** [`naturalist-cuisine`](../naturalist-cuisine/SKILL.md), [`new-nordic`](../new-nordic/SKILL.md), [`bistronomie`](../bistronomie/SKILL.md)

## Emotional target

The ease of a long lunch in a garden: ripe food, warm air and no show.

**Keywords:** fresh, ripe, local, warm, simple, seasonal · **Brand archetypes:** innocent, caregiver

## Canonical evidence (open licence)

Each item below has an open licence or is in the public domain, so you may show it as a reference.

- [Chez Panisse, Berkeley](https://commons.wikimedia.org/wiki/File:ChezPanisse.jpg) (Calton, 2003): image, CC BY-SA 3.0. Calton (assumed author), via Wikimedia Commons
- [Alice Waters in Napa, 2007](https://commons.wikimedia.org/wiki/File:Alice_Waters_at_Viader_Vinyards,_Napa_(cropped).jpg) (David Sifry, 2007): image, CC BY 2.0. David Sifry, via Wikimedia Commons

## Sources

- [Wikipedia: California cuisine](https://en.wikipedia.org/wiki/California_cuisine)
- [Wikipedia: Chez Panisse](https://en.wikipedia.org/wiki/Chez_Panisse)
- [Wikipedia: Alice Waters](https://en.wikipedia.org/wiki/Alice_Waters)

---

Generated from [`data/cuisine/styles/california-cuisine.json`](../../data/cuisine/styles/california-cuisine.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
