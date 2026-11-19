---
name: naturalist-cuisine
description: "Apply the Naturalist cuisine style (1978–present) when specifying, describing or prompting food and its table: a dish, a menu, a plate, a service, a shop counter or a food photograph. Load when the user asks for: naturalist cuisine, gargouillou, wild herbs tasting menu, vegetable-led fine dining, plate as a landscape, foraged plate."
domain: cuisine
era: nouvelle-and-new-world
triggers:
  - "naturalist cuisine"
  - "gargouillou"
  - "wild herbs tasting menu"
  - "vegetable-led fine dining"
  - "plate as a landscape"
  - "foraged plate"
  - "cuisine of the plateau"
vector_profile:
  composition: 4
  transformation: 2
  locality: 5
  richness: 3
  flavour_intensity: 3
---

# Naturalist cuisine

> The land around the kitchen is the pantry and the teacher: the cook walks it, learns each plant in each week, and cooks only what the walk gives.

A kitchen that treats the plate as a landscape. The cook picks wild and garden plants on the day, cooks each one at its own pace and shows it whole. The gargouillou of Michel Bras, first made in 1980, holds dozens of plants.

**Period:** 1978–present · **Era:** Nouvelle and new world · **Domain:** Cuisine · **Also called:** Cuisine naturaliste, Cuisine of the plateau, Garden and wild-plant cuisine, New wild cuisine

## When to load this skill

Load it when the user asks for: "naturalist cuisine", "gargouillou", "wild herbs tasting menu", "vegetable-led fine dining", "plate as a landscape", "foraged plate", "cuisine of the plateau".

Good for: a vegetable-led tasting menu of a country restaurant, a food photograph of a scattered plate of herbs and flowers, a menu that follows a walk in the landscape.

Do not use it when:
- the brief wants a rich classic sauce
- the brief wants gels, foams and laboratory work
- the brief is fast or street food

## System directives

When specifying, describing or prompting food and its table: a dish, a menu, a plate, a service, a shop counter or a food photograph in Naturalist cuisine, you MUST:

1. Pick wild herbs, flowers, roots and mushrooms on the day, and write the menu after the walk, not before it.
2. Cook each plant by itself, to its own point, and join the parts only on the plate.
3. Keep the plant in its natural form: the leaf, the flower, the root with its shape.
4. Let vegetables, grains and pulses carry the plate; use meat, fish and dairy as a small part of it.
5. Use butter, oils and light stocks to carry the taste of the plant, not to cover it.
6. Think of the plate as a small landscape: scatter the parts in a loose, uneven order, as plants grow.
7. Make the sauce a thin pool or a dot that gives acid or bitterness to the plants.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** A heavy cream or butter sauce that covers the plant.
- **NEVER:** A fixed menu that does not change with the week.
- **NEVER:** A plate with a strict centre and a symmetric garnish.
- **NEVER:** Luxury goods such as caviar and foie gras used for their price.
- **NEVER:** Imported ingredients when a local plant is in season.
- **NEVER:** Laboratory gels and foams as the point of the dish.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Composition | `■■■■□` 4/5 | heaped, shared and family-style | an architectural plate with exact placement and empty space |
| Transformation | `■■□□□` 2/5 | raw or plainly cooked, the ingredient as it grew | technique changes the form, the texture and the temperature |
| Locality | `■■■■■` 5/5 | a global pantry of imported goods | one place and one season, grown or foraged near the kitchen |
| Richness | `■■■□□` 3/5 | broth, acid, raw and steamed | butter, cream, fat and reduction |
| Flavour intensity | `■■■□□` 3/5 | mild, clean and subtle | loud spice, chilli, smoke and ferment |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Plating & composition

- **Composition:** A loose, scattered composition of many small parts of vegetables, leaves and flowers, set by hand with tweezers and a spoon, with a thin sauce under or around them.
- **Plate:** A wide, flat plate or a shallow bowl of white or pale stoneware, with a plain glaze and no rim pattern.
- **Portion:** A vegetable course of 100 to 150 g in many small parts; a main piece of meat or fish of 60 to 90 g.
- **Height:** Low and open: the food lies 10 to 25 mm high, and the flowers and leaves rise a little above the rest.
- **Rules:**
  - Place each part of the plate by hand, one at a time, and leave a space between the parts.
  - Give each plant its own cut and its own cooking, so that the parts differ in size, colour and texture.
  - Put the herbs, flowers and young leaves on the top, as the last step.
  - Keep the sauce in a thin pool or in dots, and put it under the food, not over it.
  - Choose a plain plate so that the colours of the plants stay the main colours of the table.

## Pantry

- **Primary:** wild-plants · seasonal-greens · root-vegetables · wild-mushrooms · pulses · berries
- **Secondary:** lamb · beef · egg · butter · cheese · nuts-seeds · honey · orchard-fruit · vinegar · olive-oil · cocoa · potato
- **Avoid:** foie-gras · caviar · truffle · soy-lecithin · sodium-alginate
- **Rule:** Take the plants from the plateau and the garden near the kitchen, in the week of the menu; add meat, fish or dairy only as a small part.

## Technique

- **Methods:** steaming · boiling · sauteing · oven-roasting · poaching · wood-fire · pickling · plated-service
- **Bases:** Light vegetable broths, a few drops of vinegar or verjuice, a nut oil, a butter that is browned only a little, and the juice of the plants.
- **Details:** A dot of a bitter or sour sauce, a dusting of ground seed, a few drops of herb oil, an edible flower or a young leaf on the top.

## Flavour

- **Profile:** Green, bitter, sweet and earthy, with a clear acid; each plant keeps its own taste.
- **Balance:** Bitter and sweet plants in turn, with a small acid; salt is light and fat is low.
- **Fat:** A little butter or oil to carry the taste; 15 to 30 per cent of the energy of a course.
- **Seasoning:** Salt, vinegar, the pepper of wild herbs, mustard seed, juniper, and ground seeds and flowers.

## Palette

- **Strategy:** Use the colours of a plateau in one season: many greens, the yellow and violet of flowers, the brown of roots, on a plain pale plate.

**Colours**

| Name | Hex | Role |
|---|---|---|
| Plate white | `#EEE9DD` | plate |
| Leaf green | `#6F8B3D` | leaves and herbs |
| Young shoot green | `#A9C25A` | shoots and peas |
| Root brown | `#7A5B3A` | roots and soil |
| Flower violet | `#7A5C94` | flowers |
| Dandelion yellow | `#E0B83A` | flowers and accent |
| Mushroom beige | `#C9B08A` | mushrooms and grain |

## Service & table

- **Format:** A tasting menu that follows the season and the walk of the day, and a short set of main dishes.
- **Courses:** Eight to twelve courses, with a vegetable course as the centre, a small portion of meat or fish, and a warm dessert.
- **Tableware:** Plain pale plates and shallow bowls, light glass, a wooden or linen table and one knife and fork for each course.
- **Setting:** A bright room with large windows to the landscape, plain wood and stone, and a calm service.

## Signature dishes

**Dishes**

| Course | Dish | Ingredient | Method |
|---|---|---|---|
| vegetable-course | Gargouillou of young vegetables, herbs and flowers | seasonal-greens | steaming |
| vegetable-course | Wild mushrooms with a thin herb broth | wild-mushrooms | sauteing |
| roast | Roast Aubrac lamb with wild herbs | lamb | oven-roasting |
| dessert | Warm chocolate cake with a liquid centre | cocoa | oven-roasting |
| amuse-bouche | Edible stones: potatoes in a coat of edible clay | potato | boiling |

## Prompt primer

- **Positive:** naturalist tasting menu · scattered vegetables, leaves and flowers · wild herbs picked on the day · a plate as a small landscape · pale stoneware plate · thin herb sauce in dots · edible flowers on the top · natural daylight · overhead food photograph
- **Negative:** cream sauce · symmetric garnish · foie gras · caviar · gel and foam · gold rim

**Canonical works**

| Work | Maker | Year |
|---|---|---|
| Gargouillou | Michel Bras | 1980 |
| Laguiole: Le Livre de Michel Bras | Michel Bras | 2002 |
| Mugaritz: A Natural Science of Cooking | Andoni Luis Aduriz | 2012 |

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Foraging for the menu (skill)

The cook gathers wild plants, flowers, mushrooms and shellfish near the kitchen, and the menu changes with what the day brings. Origin: cuisine, Laguiole, Aubrac, France, c. 1978.

- Walk the same ground each week and learn when each plant is ready.
- Pick only what the kitchen uses that day, and leave the root.
- Write the menu after the harvest, not before.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **Mugaritz** (company, Errenteria, Spain, 1998–now), made the style. A restaurant in the hills near San Sebastián and a research kitchen, where Andoni Luis Aduriz joins wild plants with odd texture and play.
- **Restaurant Bras** (company, Laguiole, France, 1978–now), launched the style. The family restaurant of Michel Bras in the Aubrac, where he first made the gargouillou and built the plate as a landscape of plants.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Course count (`course_count`) | 10 | 6–14 | service, signatures |
| Negative space (`negative_space`) | 0.5 | 0.3–0.7 | plating |
| Portion (`portion_g`) | 70 | 30–120 g | plating, service |
| Spice level (`spice_level`) | 0 | 0–2 | flavour, pantry |
| Fat share (`fat_share`) | 0.2 | 0.1–0.35 | flavour, technique, pantry |
| Plate colour (`plate_colour`) | #EEE9DD | #EEE9DD, #D9D2C3, #6E6A63, #2E2B28 | plating, service, palette |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more science and strange texture**: move toward [`molecular-gastronomy`](../molecular-gastronomy/SKILL.md) (Molecular gastronomy). Keep the plants but change their form with gels, foams and liquid nitrogen; show the trick on the plate.
- If the user asks for **colder, more fermented, more northern**: move toward [`new-nordic`](../new-nordic/SKILL.md) (New Nordic cuisine). Use only plants of the north, remove olive oil and lemon, and add vinegars, garums and ferments.

- **Came from (go here for a more orthodox version):** [`nouvelle-cuisine`](../nouvelle-cuisine/SKILL.md)
- **Led to (go here for a newer version):** [`new-nordic`](../new-nordic/SKILL.md)
- **Rejects (the opposite pole; do not blend):** [`cuisine-classique`](../cuisine-classique/SKILL.md)
- **Kin in another domain:** [`goblincore`](../goblincore/SKILL.md)
- **Nearest by vector profile:** [`new-nordic`](../new-nordic/SKILL.md), [`novoandina-and-nikkei`](../novoandina-and-nikkei/SKILL.md), [`california-cuisine`](../california-cuisine/SKILL.md)

## Emotional target

The calm of a walk across a meadow: many small green things, each with its own taste.

**Keywords:** wild, green, gentle, seasonal, scattered · **Brand archetypes:** explorer, sage

## Canonical evidence (open licence)

Each item below has an open licence or is in the public domain, so you may show it as a reference.

- [Vegetable gargouillou after the recipe of Michel Bras](https://commons.wikimedia.org/wiki/File:Gargouillou_de_l%C3%A9gumes.JPG) (Eric Sapet, La Petite Maison, Cucuron, 2009): image, CC BY-SA 3.0. Yelkrokoyade, via Wikimedia Commons

## Sources

- [Wikipedia: Michel Bras](https://en.wikipedia.org/wiki/Michel_Bras)
- [Wikipedia: Mugaritz](https://en.wikipedia.org/wiki/Mugaritz)
- Michel Bras, Laguiole: Le Livre de Michel Bras (Rouergue, 2002)

---

Generated from [`data/cuisine/styles/naturalist-cuisine.json`](../../data/cuisine/styles/naturalist-cuisine.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
