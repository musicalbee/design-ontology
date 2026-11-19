---
name: novoandina-and-nikkei
description: "Apply the Novoandina and Nikkei cuisine style (1986–present) when specifying, describing or prompting food and its table: a dish, a menu, a plate, a service, a shop counter or a food photograph. Load when the user asks for: novoandina, nikkei cuisine, peruvian tasting menu, ceviche, tiradito, lima fine dining."
domain: cuisine
era: nouvelle-and-new-world
triggers:
  - "novoandina"
  - "nikkei cuisine"
  - "peruvian tasting menu"
  - "ceviche"
  - "tiradito"
  - "lima fine dining"
  - "andean ingredients"
vector_profile:
  composition: 3
  transformation: 3
  locality: 4
  richness: 2
  flavour_intensity: 4
---

# Novoandina and Nikkei cuisine

> Peru holds the sea, the desert, the mountain and the jungle, and the cooks of Lima join them with the knives of Japan and the sauces of France to make one new national kitchen.

A kitchen of Lima that takes the potatoes, grains and chillies of the Andes and the fish of the Pacific, and gives them French and Japanese technique. Gastón Acurio, Virgilio Martínez and Mitsuharu Tsumura made it a world cuisine.

**Period:** 1986–present · **Era:** Nouvelle and new world · **Domain:** Cuisine · **Also called:** Novoandina, Nikkei cuisine, Modern Peruvian cuisine, Cocina novoandina

## When to load this skill

Load it when the user asks for: "novoandina", "nikkei cuisine", "peruvian tasting menu", "ceviche", "tiradito", "lima fine dining", "andean ingredients".

Good for: a menu of ceviche, tiradito and Peruvian small dishes, a food photograph of raw fish with chilli and lime, a tasting menu by altitude of the Andes.

Do not use it when:
- the brief wants a rich cream sauce
- the brief wants a bland, mild plate
- the brief wants only European produce

## System directives

When specifying, describing or prompting food and its table: a dish, a menu, a plate, a service, a shop counter or a food photograph in Novoandina and Nikkei cuisine, you MUST:

1. Start from the native ingredient: the potato, the maize, the quinoa, the chilli and the fish of the cold sea.
2. Cure raw fish for a few minutes in lime juice, and serve it at once with its juice.
3. Join the Japanese cut and the Peruvian chilli: a thin slice of fish with soy, lime and aji.
4. Use many chilli kinds for fruit and colour as much as for heat.
5. Bring the produce of the altitudes into the menu, from the sea to the high Andes.
6. Give the cook and the farmer a share of the credit, and help the small producer.
7. Keep the plate bright, with sour, hot, sweet and salty tastes in one bite.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Fish that is cured for hours until it is dry.
- **NEVER:** A heavy cream sauce on a ceviche.
- **NEVER:** A dish with no chilli or acid.
- **NEVER:** A copy of a European menu with a Peruvian name.
- **NEVER:** Imported ingredients when a native one is in season.
- **NEVER:** A flat, one-colour plate.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Composition | `■■■□□` 3/5 | heaped, shared and family-style | an architectural plate with exact placement and empty space |
| Transformation | `■■■□□` 3/5 | raw or plainly cooked, the ingredient as it grew | technique changes the form, the texture and the temperature |
| Locality | `■■■■□` 4/5 | a global pantry of imported goods | one place and one season, grown or foraged near the kitchen |
| Richness | `■■□□□` 2/5 | broth, acid, raw and steamed | butter, cream, fat and reduction |
| Flavour intensity | `■■■■□` 4/5 | mild, clean and subtle | loud spice, chilli, smoke and ferment |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Plating & composition

- **Composition:** A bright, layered plate: a thin sliced fish in a pool of sour juice, with a small tower or a ring of potato, maize and sauce dots around it.
- **Plate:** A white or dark ceramic bowl or plate, a stone, a shell or a hand-made dish of clay with a rough surface.
- **Portion:** Ten to twenty small courses of 30 to 80 g each; a ceviche of 100 to 130 g with its juice.
- **Height:** Low to medium: a ceviche lies 20 mm in its juice, a causa of potato rises 40 to 60 mm.
- **Rules:**
  - Serve a ceviche at once in a cold dish, with its juice, so that the fish stays firm.
  - Add a crisp part to the soft fish: fried maize, toasted kernels or thin chips.
  - Place the colours of the chillies in small spots of sauce on the plate.
  - Use a native vessel of clay, stone or a shell for a dish that comes from the high Andes.
  - Set sweet potato or corn on the side of the fish to balance the acid.

## Pantry

- **Primary:** potato · maize · quinoa · chilli · lime · sole · shellfish
- **Secondary:** tuna · beef · pork · chicken · rice · onion · garlic · ginger · coriander-leaf · soy-sauce · kombu · tropical-fruit · cocoa · tomato
- **Avoid:** cream · truffle · foie-gras
- **In europe:** no — the values here translate a print style for screen
- **Rule:** Take the native Peruvian ingredient first; add the Japanese pantry of soy, ginger and kombu in small amounts for depth.

## Technique

- **Methods:** acid-curing · raw-slicing · wok-cooking · deep-frying · grilling · boiling · dehydrating · plated-service
- **Bases:** Tiger's milk made of lime juice, fish juice, chilli and coriander; chilli pastes of aji amarillo and rocoto; and a soy and lime dressing.
- **Details:** Toasted maize, thin chips of potato and sweet potato, a sauce dot of aji, a leaf of coriander, thin slices of red onion.

## Flavour

- **Profile:** Bright, sour and hot, with a deep salty and sweet note from soy and from the sweet potato.
- **Balance:** Lime acid leads; chilli gives heat and fruit; sweet from corn and tropical fruit softens the sour.
- **Fat:** Light: raw fish, a little oil and a crisp fried part; 15 to 30 per cent of the energy of a course.
- **Seasoning:** Lime, aji chillies, salt, coriander leaf, ginger, soy sauce and a small amount of sesame.

## Palette

- **Strategy:** Use the colours of the markets of Lima: the yellow and the orange of the chillies, the purple of maize, the white of the fish and the green of the leaf.

**Colours**

| Name | Hex | Role |
|---|---|---|
| Fish white | `#EFEBE0` | fish and plate |
| Aji yellow | `#E9A81C` | chilli sauce |
| Rocoto red | `#C0392B` | chilli accent |
| Purple maize | `#4B2A4F` | maize and onion |
| Coriander green | `#5F8F3A` | herbs |
| Lime green | `#C6D85A` | lime and juice |
| Clay brown | `#8B5A3C` | ceramic and earth |

## Service & table

- **Format:** A tasting menu of many small courses by altitude or by theme, and an à la carte list of ceviches and Nikkei dishes.
- **Courses:** Ten to twenty small courses, with a ceviche and a tiradito early in the meal, a main dish of meat or fish, and a dessert of cocoa or fruit.
- **Tableware:** Ceramic bowls, clay dishes, stones and shells, with small cups for the tiger's milk.
- **Setting:** A modern room in Lima with an open kitchen, wood and stone, and a bar for pisco.

## Signature dishes

**Dishes**

| Course | Dish | Ingredient | Method |
|---|---|---|---|
| fish-course | Ceviche of sole in tiger's milk with sweet potato and toasted maize | sole | acid-curing |
| hors-doeuvre | Tiradito of tuna with soy, lime and aji | tuna | raw-slicing |
| hors-doeuvre | Causa of yellow potato with shellfish | potato | boiling |
| main-course | Lomo saltado: beef, onion and chilli in a hot wok | beef | wok-cooking |
| tasting-course | Native Andean potatoes in an earth crust | potato | dehydrating |

## Prompt primer

- **Positive:** modern Peruvian tasting menu · ceviche in lime milk · tiradito with chilli sauce · yellow chilli sauce dots · purple maize and sweet potato · clay bowl · Pacific fish · bright market colours · overhead food photograph
- **Negative:** cream sauce · dry overcooked fish · heavy butter · white tablecloth formality · gold rim

**Canonical works**

| Work | Maker | Year |
|---|---|---|
| Olla Huacachina | Bernardo Roca Rey | 1986 |
| Astrid y Gastón (restaurant, Lima) | Gastón Acurio and Astrid Gutsche | 1994 |
| Central (restaurant, Lima) | Virgilio Martínez and Pía León | 2008 |
| Maido (restaurant, Lima) | Mitsuharu Tsumura | 2009 |

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Ceviche curing (process)

Raw fish stays in lime juice with salt and chilli for a few minutes, until the surface turns firm and opaque, and is served at once with its juice. Origin: cuisine, Lima, Peru, c. 1820.

- Cut very fresh fish into cubes of 2 cm and chill it to 4 °C.
- Add salt, chilli and the juice of fresh limes in the same bowl.
- Leave the fish in the acid for 2 to 4 minutes, no more.
- Serve at once in a cold bowl with the juice and a sweet or crisp side.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **Astrid y Gastón** (company, Lima, Peru, 1994–now), launched the style. The restaurant of Gastón Acurio and Astrid Gutsche in Lima, which took Peruvian produce and ceviche into fine dining.
- **Central** (company, Lima, Peru, 2008–now), made the style. The restaurant of Virgilio Martínez in Lima, with a menu that goes by altitude from the sea to the high Andes.
- **Maido** (company, Lima, Peru, 2009–now), made the style. The Nikkei restaurant of Mitsuharu Tsumura in Lima, where Japanese technique meets the chillies, fish and tubers of Peru.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Course count (`course_count`) | 12 | 5–20 | service, signatures |
| Negative space (`negative_space`) | 0.45 | 0.25–0.7 | plating |
| Portion (`portion_g`) | 90 | 30–200 g | plating, service |
| Spice level (`spice_level`) | 3 | 1–5 | flavour, pantry |
| Fat share (`fat_share`) | 0.2 | 0.1–0.35 | flavour, technique, pantry |
| Plate colour (`plate_colour`) | #EFEBE0 | #EFEBE0, #8B5A3C, #2E2B28, #4B2A4F | plating, service, palette |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more Japanese, less Andean**: move toward [`pacific-rim-fusion`](../pacific-rim-fusion/SKILL.md) (Pacific Rim fusion). Reduce the chilli and the native tubers; raise the soy, the ginger and the sushi cut, and keep the raw fish.
- If the user asks for **more vegetables and no fish**: move toward [`plant-based-fine-dining`](../plant-based-fine-dining/SKILL.md) (Plant-based fine dining). Replace the fish with tubers, mushrooms and tofu; keep the lime, the chilli and the toasted maize.

- **Came from (go here for a more orthodox version):** [`nouvelle-cuisine`](../nouvelle-cuisine/SKILL.md)
- **Mixes well with:** [`pacific-rim-fusion`](../pacific-rim-fusion/SKILL.md)
- **Nearest by vector profile:** [`new-nordic`](../new-nordic/SKILL.md), [`plant-based-fine-dining`](../plant-based-fine-dining/SKILL.md), [`naturalist-cuisine`](../naturalist-cuisine/SKILL.md)

## Emotional target

The shock of a bright sour bite by the sea: cold fish, hot chilli, sweet corn.

**Keywords:** bright, sour, hot, coastal, colourful · **Brand archetypes:** explorer, creator

## Canonical evidence (open licence)

Each item below has an open licence or is in the public domain, so you may show it as a reference.

- [Maido, a Nikkei restaurant in Lima](https://commons.wikimedia.org/wiki/File:Maido,_Lima.jpg) (Maido, 2012): image, CC BY 2.0. Lindblom, via Wikimedia Commons
- [Fish ceviche with sweet potato, maize and toasted kernels, Callao](https://commons.wikimedia.org/wiki/File:Ceviche_de_pescado_(La_Punta,_Callao).jpg) (Peruvian ceviche house, La Punta, 2007): image, Public domain. Jorge G. Mori, via Wikimedia Commons

## Sources

- [Wikipedia: Novoandina (Bernardo Roca Rey and the Olla Huacachina, 1986)](https://en.wikipedia.org/wiki/Novoandina)
- [Eat Peru: Novoandina, Novo-Andean cuisine](https://www.eatperu.com/novoandina-novo-andean-cuisine/)
- [Wikipedia: Gastón Acurio](https://en.wikipedia.org/wiki/Gast%C3%B3n_Acurio)
- [Wikipedia: Nikkei cuisine](https://en.wikipedia.org/wiki/Nikkei_cuisine)
- [Wikipedia: Peruvian cuisine](https://en.wikipedia.org/wiki/Peruvian_cuisine)

---

Generated from [`data/cuisine/styles/novoandina-and-nikkei.json`](../../data/cuisine/styles/novoandina-and-nikkei.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
