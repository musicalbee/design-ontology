---
name: cuisine-minceur
description: "Apply the Cuisine minceur style (1975–1990) when specifying, describing or prompting food and its table: a dish, a menu, a plate, a service, a shop counter or a food photograph. Load when the user asks for: cuisine minceur, spa cuisine, slimming gourmet, low fat haute cuisine, light steamed fish, guerard."
domain: cuisine
era: nouvelle-and-new-world
triggers:
  - "cuisine minceur"
  - "spa cuisine"
  - "slimming gourmet"
  - "low fat haute cuisine"
  - "light steamed fish"
  - "guerard"
  - "calorie counted menu"
vector_profile:
  composition: 4
  transformation: 3
  locality: 3
  richness: 1
  flavour_intensity: 2
---

# Cuisine minceur

> A dish can be low in fat and sugar and still be haute cuisine, if the cook uses exact technique and fresh produce in place of butter and cream.

Michel Guérard's light cooking for a spa hotel. Each dish has few calories but the plate of a three-star kitchen: steam instead of butter, fromage blanc and vegetable purée instead of cream and flour, and a small portion.

**Period:** 1975–1990 · **Era:** Nouvelle and new world · **Domain:** Cuisine · **Also called:** Slimming cuisine, Spa gourmet cuisine

## When to load this skill

Load it when the user asks for: "cuisine minceur", "spa cuisine", "slimming gourmet", "low fat haute cuisine", "light steamed fish", "guerard", "calorie counted menu".

Good for: a menu for a spa or wellness hotel, a food photograph of a light plate with a pale sauce, a diet menu that still looks like fine dining.

Do not use it when:
- the brief wants rich sauces or a large portion
- the brief wants a rustic or home table
- the brief wants spice or heat

## System directives

When specifying, describing or prompting food and its table: a dish, a menu, a plate, a service, a shop counter or a food photograph in Cuisine minceur, you MUST:

1. Cook in steam, in a court-bouillon or in a covered pan with a spoon of water, not in butter.
2. Bind a sauce with fromage blanc, yoghurt, a vegetable purée or a reduced stock; leave out flour, cream and egg yolk.
3. Count the energy of each dish and keep a full menu at about 500 to 800 kcal.
4. Season with herbs, lemon, vinegar and spices so that the salt and the fat can stay low.
5. Use no sugar in a sauce; take the sweet taste from fruit and vegetables.
6. Serve each dish as a small portion on a large white plate, so the meal still has many courses.
7. Plate with the care of a three-star kitchen: a sauce pooled under the food, one herb on top.
8. Keep the taste of each ingredient clear; do not hide it behind a diet label.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** A sauce thickened with flour or egg yolk.
- **NEVER:** Butter or cream as the base of a sauce.
- **NEVER:** A dessert of cream and sugar.
- **NEVER:** A bare plate of boiled food with no seasoning.
- **NEVER:** A large heap of food.
- **NEVER:** A menu that names the calories on the plate.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Composition | `■■■■□` 4/5 | heaped, shared and family-style | an architectural plate with exact placement and empty space |
| Transformation | `■■■□□` 3/5 | raw or plainly cooked, the ingredient as it grew | technique changes the form, the texture and the temperature |
| Locality | `■■■□□` 3/5 | a global pantry of imported goods | one place and one season, grown or foraged near the kitchen |
| Richness | `■□□□□` 1/5 | broth, acid, raw and steamed | butter, cream, fat and reduction |
| Flavour intensity | `■■□□□` 2/5 | mild, clean and subtle | loud spice, chilli, smoke and ferment |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Plating & composition

- **Composition:** A small portion of steamed fish or meat at the centre of a wide plate with a pool of pale sauce and two or three vegetables around it.
- **Plate:** A white round porcelain plate of 280 to 300 mm with a thin rim.
- **Portion:** A main piece of 80 to 120 g with 30 ml of sauce and 60 to 100 g of vegetables; the whole main dish is about 200 kcal.
- **Height:** The food stands 15 to 30 mm high; the sauce is a thin pool of 2 mm under the main piece.
- **Rules:**
  - Pool the sauce first, then set the steamed piece on it.
  - Cut the vegetables into thin strips, balls or discs of one size, and cook them to al dente.
  - Leave about 45 per cent of the plate empty.
  - Add one herb or a few chive stems as the only garnish.
  - Serve the dessert as a small portion of fruit with a sorbet or a fromage blanc cream.

## Pantry

- **Primary:** sole · shellfish · seasonal-greens · root-vegetables · cheese · fine-herbs · lemon · chicken
- **Secondary:** carrot · asparagus · leek · vinegar · orchard-fruit · berries · honey · egg · wine · ginger · tarragon · salmon
- **Avoid:** butter · cream · lard · cane-sugar
- **Rule:** Choose lean fish, shellfish, poultry and vegetables; use fromage blanc and herbs as the main sauce makers, and add a little oil or butter only where the dish cannot do without it.

## Technique

- **Methods:** steaming · poaching · stock-making · reduction · knife-work · plated-service · grilling
- **Bases:** A clear vegetable stock, a fish fumet, a purée of cooked vegetables and a bowl of fromage blanc that the cook whisks with lemon and herbs.
- **Details:** A fish steamed on a bed of herbs, a vegetable purée that binds a sauce, a sauce whisked cold with fromage blanc, a spoon of reduced stock in place of a pat of butter.

## Flavour

- **Profile:** Clean, green and acid: lemon, herbs, light fish broth and the sweet taste of fresh vegetables and fruit.
- **Balance:** Acid and herb lead; salt stays low, umami comes from reduced stock and shellfish, and sweet comes from fruit and carrot.
- **Fat:** Fat gives about 10 to 20 per cent of the energy of a main dish; the cook adds a few drops of oil for flavour.
- **Seasoning:** Fresh herbs, lemon juice, vinegar and ground pepper go in at the end; the cook uses very little salt and no sugar in sauces.

## Palette

- **Strategy:** Use a white plate with the green of herbs and vegetables, the pale pink of fish and a very pale sauce.

**Colours**

| Name | Hex | Role |
|---|---|---|
| Porcelain white | `#F8F6F1` | plate |
| Herb green | `#7FA24E` | herb and vegetable |
| Steamed fish white | `#EFE9DC` | fish |
| Fromage blanc | `#F4EFE0` | sauce |
| Shell pink | `#EDA48F` | shellfish |
| Lemon | `#E8D34A` | accent |
| Carrot orange | `#E58D3A` | vegetable |

## Service & table

- **Format:** A fixed menu for a spa guest: the waiter serves each small plate from the kitchen, with a gap of a few minutes between courses.
- **Courses:** Five or six small courses at a dinner, with a total of about 650 kcal for the whole menu.
- **Tableware:** Large white plates, small crystal glasses for a little wine and a pot of herbal tea; white linen.
- **Setting:** A spa hotel in a park in the Landes with a chef-owner, a medium brigade and a dining room for the guests of the thermal baths.

## Signature dishes

**Dishes**

| Course | Dish | Ingredient | Method |
|---|---|---|---|
| hors-doeuvre | Salad of lobster and green vegetables | shellfish | poaching |
| fish-course | Steamed sole with a fromage blanc and herb sauce | sole | steaming |
| main-course | Steamed chicken breast with a vegetable purée | chicken | steaming |
| vegetable-course | Spring vegetables cooked in a covered pan | seasonal-greens | steaming |
| dessert | Fresh berries with a light fromage blanc cream | berries | knife-work |

## Prompt primer

- **Positive:** cuisine minceur spa menu · steamed fish on a wide white plate · pale fromage blanc herb sauce · thin strips of vegetables · small portion with empty space · fresh herbs and chives · 1970s French spa hotel dining room · soft natural light · overhead plated dish photograph
- **Negative:** cream sauce · butter pool · fried food · heaped portion · brown demi-glace · sugar decoration

**Canonical works**

| Work | Maker | Year |
|---|---|---|
| La Grande Cuisine minceur | Michel Guérard | 1976 |
| Cuisine minceur (the first spa menu) | Michel Guérard, Les Prés d'Eugénie | 1975 |
| Salade gourmande | Michel Guérard | 1976 |

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Chef-plated course (skill)

The chef arranges each portion on its own plate in the kitchen, and the waiter brings it to the guest without any change. Origin: cuisine, Roanne and Collonges-au-Mont-d'Or, France, c. 1968.

- Warm a large plate of 280 to 320 mm and keep the rim clean.
- Put the sauce on the plate first, and then the main piece, in one place that the chef chooses.
- Leave 40 to 55 per cent of the plate empty, and set no more than three garnishes.
- Check the plate at the pass before it leaves the kitchen.

### Flourless reduction sauce (process)

A sauce made from the cooking juices and a stock, reduced and finished with a little cream, butter, fromage blanc or a vegetable purée, with no flour roux. Origin: cuisine, Roanne, France, c. 1962.

- Deglaze the pan with wine or stock, and reduce it by two thirds.
- Add a spoon of cream, a cube of cold butter, or fromage blanc, and whisk it off the heat.
- Season with lemon, vinegar or herbs at the end, and serve 30 to 50 ml of sauce under the food.

## Media

The salons, schools, magazines, publishers, galleries and platforms that carried this style.

- **La Grande Cuisine minceur** (publisher, Paris, 1976–now), published the style. The cookbook of Michel Guérard on slimming haute cuisine, with Alain Coumont, published by Robert Laffont in 1976.
- **Les Prés d'Eugénie** (workshop, Eugénie-les-Bains, ?–now), launched the style. A spa hotel and restaurant in the Landes. Michel Guérard cooked cuisine minceur here from 1974, and the restaurant held three Michelin stars from 1977.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Course count (`course_count`) | 6 | 4–8 | service, signatures |
| Negative space (`negative_space`) | 0.55 | 0.4–0.65 | plating |
| Portion (`portion_g`) | 100 | 60–140 g | plating, service |
| Spice level (`spice_level`) | 0 | 0–1 | flavour, pantry |
| Fat share (`fat_share`) | 0.15 | 0.08–0.25 | flavour, technique, pantry |
| Plate colour (`plate_colour`) | #F8F6F1 | #F8F6F1, #FFFFFF, #E9ECE4 | plating, service, palette |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **richer, with butter sauces**: move toward [`nouvelle-cuisine`](../nouvelle-cuisine/SKILL.md) (Nouvelle cuisine). Allow a beurre blanc and a spoon of cream, and raise the fat share to 30 per cent.
- If the user asks for **a plain seasonal garden menu**: move toward [`california-cuisine`](../california-cuisine/SKILL.md) (California cuisine). Drop the calorie rules; keep the steamed and raw vegetables and name the farm.

- **Came from (go here for a more orthodox version):** [`nouvelle-cuisine`](../nouvelle-cuisine/SKILL.md)
- **Rejects (the opposite pole; do not blend):** [`cuisine-classique`](../cuisine-classique/SKILL.md)
- **Nearest by vector profile:** [`plant-based-fine-dining`](../plant-based-fine-dining/SKILL.md), [`nouvelle-cuisine`](../nouvelle-cuisine/SKILL.md), [`new-nordic`](../new-nordic/SKILL.md)

## Emotional target

The calm of a meal that is both a pleasure and a cure: clear, bright and light on the body.

**Keywords:** light, clean, bright, careful, healthy · **Brand archetypes:** caregiver, sage

## Canonical evidence (open licence)

Each item below has an open licence or is in the public domain, so you may show it as a reference.

- [Michel Guérard at Eugénie-les-Bains, 2016](https://commons.wikimedia.org/wiki/File:Michel_Gu%C3%A9rard-Eug%C3%A9nie-Les-Bains-_2016_-Photo_-Jean-Louis_Le_Breton.jpg) (Pepelouis, 2016): image, CC BY 4.0. Pepelouis, via Wikimedia Commons
- [Les Prés d'Eugénie, a building of the spa hotel](https://commons.wikimedia.org/wiki/File:Eug%C3%A9nie-les-Bains_Les_Pr%C3%A9s_d%27Eug%C3%A9nie_dependance.jpg) (Wolfgang Moroder, 2015): image, CC BY-SA 3.0. Wolfgang Moroder, via Wikimedia Commons

## Sources

- [Wikipedia: Cuisine minceur](https://en.wikipedia.org/wiki/Cuisine_minceur)
- [Wikipedia: Michel Guérard](https://en.wikipedia.org/wiki/Michel_Gu%C3%A9rard)
- Michel Guérard, La Grande Cuisine minceur (1976)

---

Generated from [`data/cuisine/styles/cuisine-minceur.json`](../../data/cuisine/styles/cuisine-minceur.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
