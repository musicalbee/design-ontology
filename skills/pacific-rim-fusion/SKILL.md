---
name: pacific-rim-fusion
description: "Apply the Pacific Rim fusion style (1983–2005) when specifying, describing or prompting food and its table: a dish, a menu, a plate, a service, a shop counter or a food photograph. Load when the user asks for: pacific rim, fusion cuisine, east west fusion, asian fusion, nobu, miso black cod."
domain: cuisine
era: nouvelle-and-new-world
triggers:
  - "pacific rim"
  - "fusion cuisine"
  - "east west fusion"
  - "asian fusion"
  - "nobu"
  - "miso black cod"
  - "wolfgang puck"
  - "hawaii regional cuisine"
vector_profile:
  composition: 4
  transformation: 3
  locality: 2
  richness: 3
  flavour_intensity: 3
---

# Pacific Rim fusion

> A chef from one tradition can use the pantry and the flavours of another, if the cook keeps the balance of each dish and the precision of the technique.

French technique and Californian produce with the sauces and the fish of Asia. Chinois on Main (1983), Roy's in Honolulu (1988) and Matsuhisa and Nobu from 1987 put soy, ginger, miso and raw fish on a plated menu.

**Period:** 1983–2005 · **Era:** Nouvelle and new world · **Domain:** Cuisine · **Also called:** East-west fusion, Euro-Asian cuisine, Hawaii Regional cuisine

## When to load this skill

Load it when the user asks for: "pacific rim", "fusion cuisine", "east west fusion", "asian fusion", "nobu", "miso black cod", "wolfgang puck", "hawaii regional cuisine".

Good for: a menu for a fusion restaurant of the 1990s, a food photograph of seared fish with an Asian sauce, a sushi bar with a French plate.

Do not use it when:
- the brief wants a pure national cuisine
- the brief wants a rich classic French sauce
- the brief wants only local produce of one place

## System directives

When specifying, describing or prompting food and its table: a dish, a menu, a plate, a service, a shop counter or a food photograph in Pacific Rim fusion, you MUST:

1. Cook with French method and season with the sauces of Asia: soy, ginger, miso, chilli and citrus.
2. Sear or wok-cook the main piece quickly and leave the centre rare.
3. Pair raw fish with a hot oil or a sharp dressing of yuzu and soy.
4. Build a sauce from a reduction of stock, a butter and an Asian seasoning, for example a soy and mustard butter sauce.
5. Serve a mix of small plates in the middle of the table, or an arranged plate of one main item.
6. Use produce of the Pacific: tuna, shellfish, tropical fruit and local greens.
7. Set the food on a bright plate with a clear shape, and dress it with a herb or a few strips of vegetable.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** A heavy cream sauce on Asian food.
- **NEVER:** A dish with five unrelated spices.
- **NEVER:** Overcooked fish.
- **NEVER:** A tall tower with a garnish.
- **NEVER:** A flat copy of one national dish.
- **NEVER:** Canned or frozen sauce.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Composition | `■■■■□` 4/5 | heaped, shared and family-style | an architectural plate with exact placement and empty space |
| Transformation | `■■■□□` 3/5 | raw or plainly cooked, the ingredient as it grew | technique changes the form, the texture and the temperature |
| Locality | `■■□□□` 2/5 | a global pantry of imported goods | one place and one season, grown or foraged near the kitchen |
| Richness | `■■■□□` 3/5 | broth, acid, raw and steamed | butter, cream, fat and reduction |
| Flavour intensity | `■■■□□` 3/5 | mild, clean and subtle | loud spice, chilli, smoke and ferment |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Plating & composition

- **Composition:** The main piece sits at the centre or slightly off it, with a sauce in a pool or in drops around it, and a few strips of raw vegetable or a herb on top.
- **Plate:** A white or black round or square plate of 260 to 300 mm, or a shallow bowl, in a modern shape.
- **Portion:** A main piece of 100 to 150 g with 40 ml of sauce; the plate is about 50 to 60 per cent full.
- **Height:** The food stands 20 to 60 mm high; thin slices lie flat or lean on a small pile of vegetables.
- **Rules:**
  - Slice raw fish thin and lay it in a single row with a little sauce over each slice.
  - Put a hot oil or a ponzu at the last moment, so the fish turns pale at the edge.
  - Set a small pile of crisp vegetable strips on top for height.
  - Dot or pool the sauce; do not flood the plate.
  - Use chopsticks and forks both on the table.

## Pantry

- **Primary:** tuna · salmon · shellfish · soy-sauce · ginger · miso · duck · rice
- **Secondary:** yuzu · kombu · sea-urchin · chilli · coriander-leaf · lime · garlic · tropical-fruit · butter · cream · cod · seasonal-greens · honey
- **Avoid:** lard · sodium-alginate · liquid-nitrogen · truffle
- **Rule:** Take one main ingredient from the Pacific, add one or two Asian seasonings, and finish with a French butter or a reduction.

## Technique

- **Methods:** wok-cooking · sauteing · grilling · raw-slicing · deep-frying · reduction · emulsion-sauce · steaming
- **Bases:** A soy and ginger marinade, a miso paste, a ponzu of yuzu and soy, a chilli oil, a reduced stock and a butter sauce.
- **Details:** A seared piece with a rare centre, hot oil poured on raw fish, a few strips of crisp vegetable, a sauce in dots, a thin sheet of fried noodle.

## Flavour

- **Profile:** Bright and salty-sweet: soy, ginger and citrus with the fat of fish or butter, and a little heat from chilli.
- **Balance:** Salt and umami from soy and miso sit against acid from yuzu or lime and sweet from tropical fruit or mirin.
- **Fat:** Butter, oil and fatty fish give about 30 to 40 per cent of the energy of a main dish.
- **Seasoning:** Soy and miso in the marinade, ginger and chilli in the sauce, citrus and fresh herbs at the last moment.

## Palette

- **Strategy:** Use a plain white or black plate for the pink and red of fish with the green of herbs and the amber of soy.

**Colours**

| Name | Hex | Role |
|---|---|---|
| Plate white | `#F6F4EF` | plate |
| Tuna red | `#B8323C` | raw fish |
| Salmon orange | `#F08A5D` | fish |
| Soy brown | `#4B2A1A` | sauce |
| Ginger gold | `#D9B35B` | seasoning |
| Herb green | `#5F9B45` | herb |
| Slate black | `#262626` | plate |

## Service & table

- **Format:** A lively dining room with an open kitchen and a sushi bar; the table shares small plates, then each guest has one main plate.
- **Courses:** Five to eight dishes: cold small plates, hot small plates, a main plate and a dessert; or a chef's omakase of eight to twelve plates.
- **Tableware:** White and black plates in modern shapes, chopsticks and forks, small sauce dishes and a plain table.
- **Setting:** A stylish restaurant with bright decoration and a kitchen of cooks trained in French and Asian method, with a chef who comes out to the table.

## Signature dishes

**Dishes**

| Course | Dish | Ingredient | Method |
|---|---|---|---|
| main-course | Shanghai lobster with spicy noodles | shellfish | wok-cooking |
| main-course | Blackened tuna with soy and mustard butter sauce | tuna | sauteing |
| fish-course | Black cod with miso | cod | grilling |
| hors-doeuvre | New-style salmon sashimi with hot oil | salmon | raw-slicing |
| hors-doeuvre | Duck salad with ginger and soy dressing | duck | deep-frying |

## Prompt primer

- **Positive:** Pacific Rim fusion plate · seared tuna with soy butter sauce · thin slices of raw salmon with hot oil · black cod glazed with miso · crisp vegetable strips on top · bright white square plate · ginger and soy glaze · open kitchen and sushi bar · warm restaurant light · overhead plated dish photograph
- **Negative:** heavy cream sauce · rustic wooden board · classic gold-rimmed plate · foam · heaped family-style platter · brown demi-glace

**Canonical works**

| Work | Maker | Year |
|---|---|---|
| Chinois on Main | Wolfgang Puck | 1983 |
| Blackened tuna (Roy's) | Roy Yamaguchi | 1988 |
| Black cod with miso | Nobu Matsuhisa | 1987 |
| Nobu: The Cookbook | Nobu Matsuhisa | 2001 |

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Chef-plated course (skill)

The chef arranges each portion on its own plate in the kitchen, and the waiter brings it to the guest without any change. Origin: cuisine, Roanne and Collonges-au-Mont-d'Or, France, c. 1968.

- Warm a large plate of 280 to 320 mm and keep the rim clean.
- Put the sauce on the plate first, and then the main piece, in one place that the chef chooses.
- Leave 40 to 55 per cent of the plate empty, and set no more than three garnishes.
- Check the plate at the pass before it leaves the kitchen.

### East-west pairing (skill, invented here)

The cook sets the sauces, the fish and the seasoning of Asia on a plate with a French or Californian method and plating. Origin: cuisine, Santa Monica, California, 1983.

- Pick one main ingredient and cook it by a French method: sear, poach or roast.
- Add one or two Asian seasonings to the sauce: soy, ginger, miso or yuzu.
- Finish with a butter or an oil, and plate it with a clean, modern shape.

## Media

The salons, schools, magazines, publishers, galleries and platforms that carried this style.

- **Chinois on Main** (workshop, Santa Monica, 1983–now), launched the style. A restaurant in Santa Monica, California, opened by Wolfgang Puck and Barbara Lazaroff. It served French and Californian food with Chinese and Asian flavours.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Course count (`course_count`) | 6 | 3–12 | service, signatures |
| Negative space (`negative_space`) | 0.45 | 0.3–0.6 | plating |
| Portion (`portion_g`) | 200 | 100–300 g | plating, service |
| Spice level (`spice_level`) | 2 | 1–4 | flavour, pantry |
| Fat share (`fat_share`) | 0.33 | 0.2–0.45 | flavour, technique, pantry |
| Plate colour (`plate_colour`) | #F6F4EF | #F6F4EF, #FFFFFF, #262626 | plating, service, palette |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more Californian, with garden produce**: move toward [`california-cuisine`](../california-cuisine/SKILL.md) (California cuisine). Cut the soy and the chilli, add olive oil and local greens, and serve on a plain plate.
- If the user asks for **more Japanese and Peruvian**: move toward [`novoandina-and-nikkei`](../novoandina-and-nikkei/SKILL.md) (Novoandina and Nikkei cuisine). Replace the butter sauce with a citrus and chilli leche, and use ceviche cuts of fish.

- **Came from (go here for a more orthodox version):** [`california-cuisine`](../california-cuisine/SKILL.md), [`nouvelle-cuisine`](../nouvelle-cuisine/SKILL.md)
- **Mixes well with:** [`california-cuisine`](../california-cuisine/SKILL.md), [`novoandina-and-nikkei`](../novoandina-and-nikkei/SKILL.md)
- **Nearest by vector profile:** [`nouvelle-cuisine`](../nouvelle-cuisine/SKILL.md), [`plant-based-fine-dining`](../plant-based-fine-dining/SKILL.md), [`renaissance-banquet`](../renaissance-banquet/SKILL.md)

## Emotional target

The excitement of a new flavour on a familiar plate: salt, heat and citrus with the polish of a fine restaurant.

**Keywords:** bright, bold, sharp, stylish, cosmopolitan · **Brand archetypes:** explorer, magician

## Canonical evidence (open licence)

Each item below has an open licence or is in the public domain, so you may show it as a reference.

- [Yellowtail sashimi with jalapeño](https://commons.wikimedia.org/wiki/File:Yellowtail_sashimi_with_Jalapeno.JPG) (Tzahy Lerner, 2005): image, CC BY-SA 3.0. Tzahy Lerner, via Wikimedia Commons
- [Tuna sashimi salad with matsuhisa dressing](https://commons.wikimedia.org/wiki/File:Tuna_sashimi_salad_with_matsushiba_dressing.JPG) (Tzahy Lerner, 2005): image, CC BY-SA 3.0. Tzahy Lerner, via Wikimedia Commons

## Sources

- [Wikipedia: Pacific Rim cuisine (Cuisine of Hawaii)](https://en.wikipedia.org/wiki/Cuisine_of_Hawaii)
- [Wikipedia: Wolfgang Puck](https://en.wikipedia.org/wiki/Wolfgang_Puck)
- [Wikipedia: Nobu Matsuhisa](https://en.wikipedia.org/wiki/Nobu_Matsuhisa)
- [Wikipedia: Roy Yamaguchi](https://en.wikipedia.org/wiki/Roy_Yamaguchi)

---

Generated from [`data/cuisine/styles/pacific-rim-fusion.json`](../../data/cuisine/styles/pacific-rim-fusion.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
