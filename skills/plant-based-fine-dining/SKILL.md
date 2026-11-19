---
name: plant-based-fine-dining
description: "Apply the Plant-based fine dining style (2021–present) when specifying, describing or prompting food and its table: a dish, a menu, a plate, a service, a shop counter or a food photograph. Load when the user asks for: plant-based fine dining, vegan tasting menu, plant-based haute cuisine, carrot tartare, vegetable-led menu, no animal products."
domain: cuisine
era: terroir-and-plant
triggers:
  - "plant-based fine dining"
  - "vegan tasting menu"
  - "plant-based haute cuisine"
  - "carrot tartare"
  - "vegetable-led menu"
  - "no animal products"
vector_profile:
  composition: 4
  transformation: 4
  locality: 3
  richness: 2
  flavour_intensity: 3
---

# Plant-based fine dining

> The top of the table does not need an animal: with skill, time and ferments, a carrot, a beet or a nut can carry the weight that foie gras and beef once carried.

A tasting-menu kitchen that uses no meat, fish, dairy, egg or honey. It gives the luxury of the old menu to vegetables, grains, nuts and ferments. Eleven Madison Park in New York changed to such a menu in 2021 under Daniel Humm, and put some animal products back in 2025.

**Period:** 2021–present · **Era:** Terroir and plant · **Domain:** Cuisine · **Also called:** Vegan tasting menu, Plant-led haute cuisine, Fine dining without animal products

## When to load this skill

Load it when the user asks for: "plant-based fine dining", "vegan tasting menu", "plant-based haute cuisine", "carrot tartare", "vegetable-led menu", "no animal products".

Good for: a vegan tasting menu of a formal restaurant, a food photograph of a single vegetable on a large plate, a menu that keeps luxury but removes animal products.

Do not use it when:
- the brief wants meat, fish, butter or cream
- the brief is a rustic, home or street kitchen
- the brief wants a rich classic sauce

## System directives

When specifying, describing or prompting food and its table: a dish, a menu, a plate, a service, a shop counter or a food photograph in Plant-based fine dining, you MUST:

1. Use no meat, fish, dairy, egg or honey, and tell the guest.
2. Take the old luxury forms and cook them again from plants: a tartare, a roast, a sauce with body.
3. Build depth with ferments, koji, smoke, dried mushrooms and long roasting.
4. Make the sauces from nuts, seeds, oils and vegetable stocks, not from butter or cream.
5. Buy from farms near the city, and change the menu with the harvest.
6. Serve with the same care and the same ritual as a classic tasting menu: a tableside step, a clear story.
7. Count the weight of the dish in taste and satisfaction, not in meat.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** A meat substitute that copies the look of meat with no taste of its own.
- **NEVER:** A plate that looks like a side dish with the main dish taken away.
- **NEVER:** Butter, cream, egg or honey in a hidden form.
- **NEVER:** A dish that is only raw or only boiled vegetables.
- **NEVER:** A menu that tells the guest what it does not have.
- **NEVER:** A rustic plate in a formal room, without a clear idea.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Composition | `■■■■□` 4/5 | heaped, shared and family-style | an architectural plate with exact placement and empty space |
| Transformation | `■■■■□` 4/5 | raw or plainly cooked, the ingredient as it grew | technique changes the form, the texture and the temperature |
| Locality | `■■■□□` 3/5 | a global pantry of imported goods | one place and one season, grown or foraged near the kitchen |
| Richness | `■■□□□` 2/5 | broth, acid, raw and steamed | butter, cream, fat and reduction |
| Flavour intensity | `■■■□□` 3/5 | mild, clean and subtle | loud spice, chilli, smoke and ferment |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Plating & composition

- **Composition:** A calm, exact composition built around one vegetable in a clear form, with one sauce, one crisp part and one herb, set on a large plate.
- **Plate:** A large white or pale grey plate, a dark ceramic bowl, or a stone, with a plain, matt glaze.
- **Portion:** Eight to fourteen courses of 30 to 90 g each; a main vegetable course of 120 g.
- **Height:** Low to medium: 15 to 50 mm, with a tall crisp or a rolled leaf on a few courses.
- **Rules:**
  - Show the main vegetable in a clear form: a whole root, a thick slice or a neat tartare.
  - Give each course one sauce, one crisp part and one herb, and no more.
  - Leave half of the plate empty and place the parts in a line or a curve.
  - Finish one or two courses at the table, with a grinder, a pour or a slice, as the classic menu did.
  - Use matt plates in pale colours so that the colour of the vegetable stands out.

## Pantry

- **Primary:** carrot · root-vegetables · wild-mushrooms · nuts-seeds · pulses · tofu · potato
- **Secondary:** cabbage · leek · tomato · asparagus · artichoke · seasonal-greens · onion · olive-oil · vinegar · miso · kombu · cocoa · orchard-fruit · cane-sugar · berries · fine-herbs
- **Avoid:** butter · cream · egg · honey · beef · foie-gras · cheese
- **In europe:** no — the values here translate a print style for screen
- **Rule:** Use only plant products; take depth from ferments, dried mushrooms, nuts and slow roasting, and take the vegetables from farms near the kitchen.

## Technique

- **Methods:** knife-work · oven-roasting · lacto-fermentation · koji-fermentation · smoking · pickling · dehydrating · plated-service
- **Bases:** Vegetable stocks with kombu and dried mushrooms, nut milks and nut butters, vinegars and ferments, and oils with herbs.
- **Details:** A dust of dried mushroom, a ferment glaze, a nut crumb, a smoked oil, an edible leaf.

## Flavour

- **Profile:** Earthy, sweet and savoury, with a clear acid and the deep taste of ferments and roasting.
- **Balance:** Umami from ferments and mushrooms leads; acid lifts it; sweetness comes from roots and fruit.
- **Fat:** Plant fats: olive oil and nut oils in small amounts; 20 to 35 per cent of the energy of a course.
- **Seasoning:** Salt, miso, vinegar, smoked oils, dried mushroom powder, fresh herbs and pepper.

## Palette

- **Strategy:** Use the true colours of vegetables on a quiet matt plate: orange, purple and green, with a deep brown from roasting.

**Colours**

| Name | Hex | Role |
|---|---|---|
| Plate grey-white | `#ECEAE4` | plate |
| Carrot orange | `#D9732A` | carrot and roots |
| Beetroot purple | `#6A1F43` | beets and sauce |
| Leaf green | `#5C7F37` | herbs and leaves |
| Roasted brown | `#6B4A2E` | roast and crust |
| Nut cream | `#D9C8A0` | nuts and purées |
| Charcoal | `#33312E` | bowls and smoke |

## Service & table

- **Format:** A fixed tasting menu with a juice or wine pairing, and a service that keeps the ritual of the classic fine-dining room.
- **Courses:** Eight to fourteen courses in a set order, with a tableside step in two or three of them and a dessert from nuts, fruit or cocoa.
- **Tableware:** Large matt plates, dark bowls, linen napkins, fine glass and wooden or stone serving pieces.
- **Setting:** A high, formal dining room with a calm service, in which the menu says plainly that all food comes from plants.

## Signature dishes

**Dishes**

| Course | Dish | Ingredient | Method |
|---|---|---|---|
| hors-doeuvre | Carrot tartare, ground at the table | carrot | knife-work |
| vegetable-course | Roasted celery root with a ferment sauce | root-vegetables | oven-roasting |
| vegetable-course | Wild mushrooms in a smoked glaze | wild-mushrooms | smoking |
| dessert | A warm cake of dark chocolate with a nut cream | cocoa | oven-roasting |

## Prompt primer

- **Positive:** plant-based tasting menu · carrot tartare · roasted root vegetable on a large plate · one sauce, one crisp, one herb · matt grey ceramic plate · fermented glaze · formal dining room · overhead food photograph
- **Negative:** meat · fish · cream sauce · butter · fake meat · rustic plate · gold rim

**Canonical works**

| Work | Maker | Year |
|---|---|---|
| Eleven Madison Park (restaurant, New York), plant-based menu | Daniel Humm | 2021 |
| Eleven Madison Park: The Plant-Based Cookbook | Daniel Humm | 2022 |

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Lacto-fermentation (process)

Vegetables in a salt brine are soured by lactic bacteria; the acid and the savoury taste keep the food and add depth to a dish. Origin: cuisine, China, c. 200 BCE.

- Weigh the vegetables and add 2 per cent salt by weight.
- Press the vegetables under their own brine in a closed jar.
- Keep the jar at 18 to 22 °C for 3 to 14 days and taste each day.
- Chill the ferment when the acid is right, and use the juice as a sauce or a seasoning.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **Eleven Madison Park** (company, New York, 1998–now), launched the style. A restaurant on Madison Square in New York; under Daniel Humm it changed in 2021 to a tasting menu of plant-based food only, and put some animal products back in 2025.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Course count (`course_count`) | 10 | 6–16 | service, signatures |
| Negative space (`negative_space`) | 0.55 | 0.35–0.8 | plating |
| Portion (`portion_g`) | 90 | 40–150 g | plating, service |
| Spice level (`spice_level`) | 0 | 0–2 | flavour, pantry |
| Fat share (`fat_share`) | 0.25 | 0.15–0.4 | flavour, technique, pantry |
| Plate colour (`plate_colour`) | #ECEAE4 | #ECEAE4, #33312E, #8D949B, #D9C8A0 | plating, service, palette |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more wild, more foraged**: move toward [`naturalist-cuisine`](../naturalist-cuisine/SKILL.md) (Naturalist cuisine). Use wild plants and flowers on the day, scatter the parts on the plate and add a little dairy or egg.
- If the user asks for **return to classic luxury**: move toward [`cuisine-classique`](../cuisine-classique/SKILL.md) (Cuisine classique). Bring back butter, cream and stock sauces, and serve meat and fish in the courses of the classic menu.

- **Came from (go here for a more orthodox version):** [`new-nordic`](../new-nordic/SKILL.md)
- **Rejects (the opposite pole; do not blend):** [`cuisine-classique`](../cuisine-classique/SKILL.md)
- **Nearest by vector profile:** [`molecular-gastronomy`](../molecular-gastronomy/SKILL.md), [`cuisine-minceur`](../cuisine-minceur/SKILL.md), [`nouvelle-cuisine`](../nouvelle-cuisine/SKILL.md)

## Emotional target

The calm of a clean, light meal that still feels like a feast.

**Keywords:** earthy, calm, careful, light, formal · **Brand archetypes:** caregiver, creator

## Canonical evidence (open licence)

Each item below has an open licence or is in the public domain, so you may show it as a reference.

- [Carrot tartare at Eleven Madison Park, before the plant-based menu](https://commons.wikimedia.org/wiki/File:Course_-7_Carrot_-_Tartare_with_Rye_Bread_and_Condiments_(9244183401).jpg) (Eleven Madison Park, 2013): image, CC BY 2.0. City Foodsters, via Wikimedia Commons

## Sources

- [Wikipedia: Eleven Madison Park](https://en.wikipedia.org/wiki/Eleven_Madison_Park)
- [Wikipedia: Daniel Humm](https://en.wikipedia.org/wiki/Daniel_Humm)
- Daniel Humm, Eleven Madison Park: The Plant-Based Cookbook (Ten Speed Press, 2022)

---

Generated from [`data/cuisine/styles/plant-based-fine-dining.json`](../../data/cuisine/styles/plant-based-fine-dining.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
