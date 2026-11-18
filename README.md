<div align="center">

# design-ontology

### Your agent has no taste. Give it a style it can execute.

**66 styles in six domains, as data. Each one compiles into a skill that any coding agent can load.**<br>
Bauhaus to visionOS. JSON in, `SKILL.md` + `tokens.css` out. No runtime, no API key, no lock-in.

[![validate](https://github.com/musicalbee/design-ontology/actions/workflows/validate.yml/badge.svg)](https://github.com/musicalbee/design-ontology/actions/workflows/validate.yml)
![styles](https://img.shields.io/badge/styles-66-111111)
![domains](https://img.shields.io/badge/domains-design%20%C2%B7%20architecture%20%C2%B7%20interior%20%C2%B7%20photography%20%C2%B7%20film%20%C2%B7%20painting-111111)
![code](https://img.shields.io/badge/code-MIT-111111)
![data](https://img.shields.io/badge/data-CC%20BY%204.0-111111)
![PRs](https://img.shields.io/badge/PRs-one%20JSON%20file-E30613)

<a href="https://musicalbee.github.io/design-ontology/demo/"><img src="assets/showreel.gif" width="880" alt="One landing page that wears 17 design styles in turn, from Bauhaus to visionOS"></a>

[**Live demo**](https://musicalbee.github.io/design-ontology/demo/) · [Skill index](skills/SKILL_INDEX.md) · [Add a style](#add-a-style) · [The schema](schema/domains/design.schema.json)

</div>

---

Ask an agent for "a neo-brutalist landing page" and you get rounded cards, a soft grey shadow and a purple gradient. The model knows the word. It does not know the rules.

This repository holds the rules. A style here is not a mood board and not a paragraph of adjectives. It is a record with a thesis, numbered directives, a list of things that break it, five scores, a palette, a type system and a set of CSS tokens. A compiler turns each record into a file your agent reads before it writes a line of code.

```text
- **NEVER:** Blurred drop shadows with a blur radius above 0px.
- **NEVER:** Subtle grey gradients or glossy highlights on surfaces.
- **NEVER:** Pastel, low-saturation fills with grey text.
```

That is three lines of [`skills/neo-brutalism-ui/SKILL.md`](skills/neo-brutalism-ui/SKILL.md). The agent gets them, plus `--shadow-elevation: 4px 4px 0 0 #000000`, plus the Tailwind classes for a button that presses into the page.

## Try it in 30 seconds

No install. Take one file.

**Claude Code**

```bash
mkdir -p .claude/skills/neo-brutalism-ui && curl -fsSL https://raw.githubusercontent.com/musicalbee/design-ontology/main/skills/neo-brutalism-ui/SKILL.md -o .claude/skills/neo-brutalism-ui/SKILL.md
```

**Cursor**

```bash
mkdir -p .cursor/rules && curl -fsSL https://raw.githubusercontent.com/musicalbee/design-ontology/main/skills/neo-brutalism-ui/SKILL.md -o .cursor/rules/neo-brutalism-ui.mdc
```

**Any other agent** (Windsurf, Cline, Codex, a LangGraph node, a system prompt): paste the contents of a `SKILL.md` into the context. Each file stands alone and needs no other file.

Then say: *"Build a pricing page in neo-brutalism."*

**Let the agent choose.** Give it [`skills/SKILL_INDEX.md`](skills/SKILL_INDEX.md). That one small table routes a request to a style by trigger words, use case, mood and vector score. The agent loads the full skill only after it has picked.

## What is in a style

| Section | What the agent gets |
|---|---|
| **Philosophy** | One thesis, 4 to 10 directives it can execute, 4 to 10 anti-patterns it must not ship |
| **Vectors** | Five integer scores, 1 to 5: ornamentation, dimensionality, grid rigidity, skeuomorphic realism, typographic expressiveness |
| **Layout** | Grid mechanics, whitespace ratio, alignment, container geometry, with numbers |
| **Typography** | Type classes, open-source font pairings, tracking, leading, hierarchy rules |
| **Colour** | Palette with hex and role, contrast rules, surface treatment, light and shadow |
| **Materiality** | What the surface imitates, border rules, blur and elevation in px |
| **Ornament** | Icon stroke, illustration rules, decorative elements |
| **Motion** | Physics, a CSS easing function, a duration, hover and active states |
| **Lineage** | Where it came from, what it rejects, what it mixes with |
| **Emotion** | Target response, keywords, brand archetypes |
| **Agent routing** | Trigger words, use cases, when not to use it, and where to go for "softer" or "bolder" |
| **Visual** | Type treatment, icon treatment, a hero picture recipe, a pattern and a page layout |
| **Tokens** | 16 required CSS custom properties and Tailwind patterns for common elements |

Every style fills the same 16 tokens. So a style is a drop-in replacement for another style: change `data-style="flat-design"` to `data-style="glassmorphism"` and the page changes its skin. The [live demo](https://musicalbee.github.io/design-ontology/demo/) is that one trick, 17 times: one landing page, "Grow your taste", that wears each style in turn.

The compiler adds two things to each style:

- **A text colour for each field.** An author writes `--color-text` for the main field only. The compiler derives `--color-on-bg`, `--color-on-surface`, `--color-on-primary`, `--color-on-accent`, two muted colours and two link colours. Each one reaches 4.5 to 1 on its field, or the compiler replaces it.
- **A visual pack.** `skills/<id>/pack/hero.svg` is a hero picture in the style. `pattern.svg` is a tile that repeats. `icons.svg` is a sprite of 14 icons, cut from an open-source icon family that fits the style.

## Weights: each style has a budget

Weight is an accent, and a style decides how much of it to spend. `visual.type` gives a weight to five roles: display, subhead, body, bold in text, and labels. It also names where the accent lives: in weight, size, case or colour.

- **Few weights, far apart.** Bauhaus and Swiss use 400 and 700 and no other. The hierarchy comes from size.
- **A light display.** Flat design and Frutiger Aero set the headline at 300, lighter than the body. Size and colour carry it, and bold goes to the buttons.
- **A heavy floor.** Text on glass starts at 500, because a thin stem breaks up on a blurred field.
- **One weight in the display face.** A poster face such as Shrikhand has one weight. The contrast comes from the face and the size, and the bold lives in the text face.

The compiler writes the roles as tokens: `--display-weight`, `--subhead-weight`, `--body-weight`, `--strong-weight`, `--label-weight`. A weight must exist in its face: the display face for display and subhead, the text face for the other three.

## Icons: a rule, and a stand-in

A style does not own an icon set. It owns a rule for the choice of one. `icons/principles.json` holds the eight rules, and each `SKILL.md` carries them: the stroke matches the stem of the text face, the terminals follow the radius token, the fill mode follows the technology of the era, one family on one grid, and the licence permits the use.

Each style names the open-source family that the rules select for it, in `visual.icon.pack`, with the reason. Bauhaus takes Material Symbols Sharp. Neo-brutalism takes Phosphor Bold. Y2K takes Pixelarticons. `npm run icons` vendors 14 icons of each family into `icons/packs/`, with the licence, and the build cuts the sprite from that file. [icons/README.md](icons/README.md) lists each family, its author and its licence.

The open-source families are a stand-in for the demo. A product with a brand uses its licensed icon library and applies the same rules to choose the family and the weight.

## The lineage graph

Styles do not appear from nowhere. Flat design rejects skeuomorphism. Neumorphism rejects flat design. Neo-brutalism rejects the friendly corporate look that flat design became. The graph records these edges, so that an agent asked for "the same, but softer" moves to a named neighbour and does not improvise.

**[Open the interactive lineage graph](https://musicalbee.github.io/design-ontology/demo/graph.html)**: all styles on one time line, a lane for each domain. Select a style to see its edges and open it in its domain demo.

<details>
<summary>The same graph as Mermaid (wide)</summary>

Solid arrows show descent. Red dotted arrows show rejection. Grey dotted arrows show kinship across domains.

<!-- lineage:start -->
```mermaid
flowchart LR
  subgraph design_fin_de_siecle["Fin de Siècle · 1880–1918"]
    victorian_web["Victorian Web"]
    art_nouveau_web["Art Nouveau (web)"]
  end
  subgraph design_modernist["Modernist · 1919–1975"]
    de_stijl_web["De Stijl (web)"]
    bauhaus["Bauhaus"]
    constructivism_web["Constructivism (web)"]
    art_deco_web["Art Deco (web)"]
    mid_century_modern["Mid-Century Modern"]
    swiss_international["Swiss International Style"]
    japanese_graphic_modernism["Japanese Graphic Modernism"]
    rams_functionalism_ui["Rams Functionalism (UI)"]
    pop_art_web["Pop Art (web)"]
    space_age["Space Age Design"]
    psychedelic["Psychedelic"]
  end
  subgraph design_postmodern_early_digital["Postmodern & Early Digital · 1976–2006"]
    cassette_futurism["Cassette Futurism"]
    punk_zine["Punk Zine"]
    memphis_design["Memphis Design"]
    cyberdelia["Cyberdelia"]
    grunge_editorial["Grunge Editorial"]
    y2k_aesthetic["Y2K Aesthetic"]
    japanese_dense_web["Japanese Dense Web"]
    apple_aqua["Apple Aqua"]
    frutiger_aero["Frutiger Aero"]
  end
  subgraph design_touchscreen["Touchscreen · 2007–2018"]
    skeuomorphism["Skeuomorphism"]
    metro_ui["Metro UI"]
    pixel_art_web["Pixel Art Web"]
    bohemian_web["Bohemian Web"]
    flat_design["Flat Design"]
    vaporwave["Vaporwave"]
    synthwave_web["Synthwave Web"]
    brutalist_web["Brutalist Web (2014)"]
    material_design["Material Design"]
    blob_world["Blob World"]
    conceptual_sketch_ui["Conceptual Sketch UI"]
    wabi_sabi_web["Wabi-Sabi Web"]
    anti_design["Anti-Design"]
    dark_devtool_ui["Dark-Mode Developer Tool"]
    corporate_memphis["Corporate Memphis"]
    terminal_tui_web["Terminal / TUI Web"]
    aurora_gradient_ui["Aurora Gradient UI"]
    scrapbook_ui["Scrapbook UI"]
  end
  subgraph design_contemporary_spatial["Contemporary & Spatial · 2019–now"]
    neumorphism["Neumorphism"]
    cybercore_web["Cybercore Web"]
    glassmorphism["Glassmorphism"]
    neo_brutalism_ui["Neo-Brutalism UI"]
    claymorphism["Claymorphism"]
    editorial_serif_revival["Editorial Serif Revival"]
    ethereal_web["Ethereal Web"]
    ai_chat_ui["AI Chat Interface"]
    bento_grid_ui["Bento Grid UI"]
    spatial_visionos["Spatial UI (visionOS)"]
    liquid_glass_ui["Liquid Glass"]
  end
  subgraph architecture_medieval["Architecture · Medieval · 1200–1520"]
    gothic_architecture["Gothic"]
  end
  subgraph architecture_early_modern["Architecture · Early Modern · 1420–1750"]
    renaissance_architecture["Renaissance"]
    baroque_architecture["Baroque"]
  end
  subgraph architecture_revival_and_academy["Architecture · Revival and Academy · 1750–1914"]
    neoclassical_architecture["Neoclassicism"]
    beaux_arts_architecture["Beaux-Arts"]
  end
  subgraph architecture_fin_de_siecle["Architecture · Fin de Siècle · 1885–1914"]
    art_nouveau_architecture["Art Nouveau"]
    prairie_school_architecture["Prairie School"]
  end
  subgraph architecture_modern_movement["Architecture · Modern Movement · 1919–1975"]
    bauhaus_architecture["Bauhaus Architecture"]
    art_deco_architecture["Art Deco"]
    international_style_architecture["International Style"]
    nordic_modernism_architecture["Nordic Modernism"]
    mid_century_modern_architecture["Mid-century Modern"]
    brutalist_architecture["Brutalism"]
  end
  subgraph architecture_postmodern_and_after["Architecture · Postmodern and After · 1966–present"]
    postmodern_architecture["Postmodernism"]
    high_tech_architecture["High-tech"]
    deconstructivist_architecture["Deconstructivism"]
    parametricism_architecture["Parametricism"]
  end
  subgraph interior_classical_house["Interior · Classical house · 1700–1830"]
    georgian_interior["Georgian"]
  end
  subgraph interior_industrial_century["Interior · Industrial century · 1800–1890"]
    shaker_interior["Shaker"]
    victorian_interior["Victorian"]
    arts_and_crafts_interior["Arts and Crafts"]
  end
  subgraph interior_modern_reform["Interior · Modern reform · 1890–1940"]
    art_nouveau_interior["Art Nouveau"]
    bauhaus_interior["Bauhaus interior"]
    art_deco_interior["Art Deco"]
  end
  subgraph interior_post_war_modern["Interior · Post-war modern · 1940–1990"]
    hollywood_regency_interior["Hollywood Regency"]
    mid_century_modern_interior["Mid-century modern interior"]
    scandinavian_interior["Scandinavian interior"]
    industrial_loft_interior["Industrial loft"]
    memphis_interior["Memphis interior"]
  end
  subgraph interior_global_minimal["Interior · Global minimal · 1990–2010"]
    coastal_interior["Coastal interior"]
    minimalist_interior["Minimalist"]
  end
  subgraph interior_networked_home["Interior · Networked home · 2010–present"]
    japandi_interior["Japandi"]
    grandmillennial_interior["Grandmillennial"]
    neo_deco_interior["Neo-deco"]
    dopamine_decor["Dopamine decor"]
    quiet_luxury_interior["Quiet luxury"]
  end
  subgraph photography_art_photography["Photography · Photography as art · 1885–1950"]
    pictorialism["Pictorialism"]
    straight_photography["Straight photography"]
  end
  subgraph photography_documentary_century["Photography · The small camera · 1930–today"]
    new_objectivity["New Objectivity photography"]
    street_photography["Street photography"]
    documentary_photography["Documentary photography"]
  end
  subgraph photography_colour_and_topography["Photography · Colour and the topographic turn · 1970–1990"]
    new_colour["New Colour"]
    new_topographics["New Topographics"]
    duesseldorf_school["Düsseldorf School"]
  end
  subgraph photography_digital_and_grade["Photography · Digital and the grade · 1999–today"]
    y2k_digicam["Y2K digicam"]
    cinematic_teal_orange["Cinematic teal and orange"]
    party_flash["Party flash"]
    film_grain_revival["Film grain revival"]
  end
  subgraph photography_commercial_and_staged["Photography · Constructed images · 1930–today"]
    fashion_editorial["Fashion editorial photography"]
    film_noir_still["Film noir still photography"]
    food_photography["Food photography"]
    scandinavian_interior_photography["Scandinavian interior photography"]
  end
  subgraph film_silent_era["Film & Video · The silent era · 1895–1929"]
    german_expressionist_cinema["German Expressionist cinema"]
    soviet_montage["Soviet montage"]
  end
  subgraph film_studio_system["Film & Video · The sound studio system · 1930–1957"]
    classical_hollywood["Classical Hollywood"]
    italian_neorealism["Italian Neorealism"]
  end
  subgraph film_new_waves["Film & Video · Portable cameras and the new waves · 1958–1975"]
    french_new_wave["French New Wave"]
    documentary_verite["Direct cinema and vérité"]
    new_hollywood["New Hollywood"]
  end
  subgraph film_tape_and_cable["Film & Video · Tape, cable and the blockbuster · 1976–1994"]
    music_video["Music video"]
    hong_kong_action["Hong Kong action"]
  end
  subgraph film_digital_cinema["Film & Video · Lightweight digital and the manifesto · 1995–2009"]
    slow_cinema["Slow cinema"]
    dogme_95["Dogme 95"]
    planimetric_symmetry["Planimetric symmetry"]
  end
  subgraph film_platform_video["Film & Video · Platform and creator video · 2005–today"]
    creator_vlog["Creator vlog"]
    vertical_short_form["Vertical short-form"]
    cinematic_fpv["Cinematic FPV"]
    camcorder_revival["Camcorder revival"]
  end
  subgraph painting_early_modern["Painting · Early modern · 1400–1860"]
    renaissance_painting["Renaissance painting"]
    mannerism_painting["Mannerism"]
    baroque_painting["Baroque painting"]
    ukiyo_e["Ukiyo-e"]
    rococo_painting["Rococo"]
  end
  subgraph painting_nineteenth_century["Painting · Nineteenth century · 1840–1910"]
    romanticism_painting["Romanticism"]
    realism_painting["Realism"]
    impressionism["Impressionism"]
    nordic_national_romanticism_painting["Nordic national romanticism"]
    pointillism["Pointillism"]
  end
  subgraph painting_avant_garde["Painting · Avant-garde · 1905–1970"]
    fauvism["Fauvism"]
    cubism_painting["Cubism"]
    de_stijl_painting["De Stijl painting"]
    surrealism_painting["Surrealism"]
    abstract_expressionism["Abstract Expressionism"]
    pop_art_painting["Pop Art"]
    airbrush_surrealism["Airbrush Surrealism"]
  end
  abstract_expressionism <-. echoes .-> brutalist_architecture
  airbrush_surrealism <-. echoes .-> pop_art_web
  airbrush_surrealism <-. echoes .-> psychedelic
  airbrush_surrealism <-. echoes .-> space_age
  anti_design <-. echoes .-> deconstructivist_architecture
  art_deco_architecture <-. echoes .-> art_deco_interior
  art_deco_architecture <-. echoes .-> art_deco_web
  art_deco_architecture <-. echoes .-> classical_hollywood
  art_deco_architecture <-. echoes .-> neo_deco_interior
  art_deco_interior <-. echoes .-> art_deco_web
  art_deco_web <-. echoes .-> hollywood_regency_interior
  art_deco_web <-. echoes .-> neo_deco_interior
  art_nouveau_architecture <-. echoes .-> art_nouveau_interior
  art_nouveau_architecture <-. echoes .-> art_nouveau_web
  art_nouveau_architecture <-. echoes .-> rococo_painting
  art_nouveau_interior <-. echoes .-> art_nouveau_web
  arts_and_crafts_interior <-. echoes .-> nordic_national_romanticism_painting
  baroque_architecture <-. echoes .-> baroque_painting
  baroque_painting <-. echoes .-> film_noir_still
  baroque_painting <-. echoes .-> food_photography
  baroque_painting <-. echoes .-> german_expressionist_cinema
  bauhaus <-. echoes .-> bauhaus_architecture
  bauhaus <-. echoes .-> bauhaus_interior
  bauhaus <-. echoes .-> de_stijl_painting
  bauhaus <-. echoes .-> international_style_architecture
  bauhaus_architecture <-. echoes .-> bauhaus_interior
  bauhaus_architecture <-. echoes .-> new_objectivity
  bauhaus_interior <-. echoes .-> de_stijl_painting
  bauhaus_interior <-. echoes .-> international_style_architecture
  brutalist_architecture <-. echoes .-> brutalist_web
  brutalist_architecture <-. echoes .-> constructivism_web
  brutalist_architecture <-. echoes .-> dogme_95
  brutalist_architecture <-. echoes .-> duesseldorf_school
  brutalist_architecture <-. echoes .-> industrial_loft_interior
  brutalist_architecture <-. echoes .-> neo_brutalism_ui
  brutalist_architecture <-. echoes .-> new_topographics
  camcorder_revival <-. echoes .-> film_grain_revival
  camcorder_revival <-. echoes .-> grunge_editorial
  camcorder_revival <-. echoes .-> party_flash
  camcorder_revival <-. echoes .-> vaporwave
  camcorder_revival <-. echoes .-> y2k_aesthetic
  camcorder_revival <-. echoes .-> y2k_digicam
  cassette_futurism <-. echoes .-> high_tech_architecture
  constructivism_web <-. echoes .-> cubism_painting
  constructivism_web <-. echoes .-> soviet_montage
  cubism_painting <-. echoes .-> deconstructivist_architecture
  cyberdelia <-. echoes .-> party_flash
  de_stijl_painting <-. echoes .-> de_stijl_web
  de_stijl_painting <-. echoes .-> international_style_architecture
  de_stijl_painting <-. echoes .-> prairie_school_architecture
  de_stijl_painting <-. echoes .-> swiss_international
  de_stijl_web <-. echoes .-> international_style_architecture
  de_stijl_web <-. echoes .-> prairie_school_architecture
  deconstructivist_architecture <-. echoes .-> grunge_editorial
  documentary_photography <-. echoes .-> dogme_95
  documentary_verite <-. echoes .-> street_photography
  dogme_95 <-. echoes .-> straight_photography
  dopamine_decor <-. echoes .-> food_photography
  dopamine_decor <-. echoes .-> memphis_design
  duesseldorf_school <-. echoes .-> international_style_architecture
  fashion_editorial <-. echoes .-> grunge_editorial
  fashion_editorial <-. echoes .-> quiet_luxury_interior
  fauvism <-. echoes .-> new_colour
  film_grain_revival <-. echoes .-> impressionism
  film_noir_still <-. echoes .-> german_expressionist_cinema
  flat_design <-. echoes .-> minimalist_interior
  flat_design <-. echoes .-> ukiyo_e
  french_new_wave <-. echoes .-> street_photography
  georgian_interior <-. echoes .-> renaissance_painting
  german_expressionist_cinema <-. echoes .-> new_objectivity
  grandmillennial_interior <-. echoes .-> impressionism
  grunge_editorial <-. echoes .-> party_flash
  grunge_editorial <-. echoes .-> street_photography
  high_tech_architecture <-. echoes .-> industrial_loft_interior
  high_tech_architecture <-. echoes .-> space_age
  impressionism <-. echoes .-> pictorialism
  industrial_loft_interior <-. echoes .-> new_topographics
  international_style_architecture <-. echoes .-> mid_century_modern_interior
  international_style_architecture <-. echoes .-> minimalist_interior
  international_style_architecture <-. echoes .-> new_topographics
  international_style_architecture <-. echoes .-> rams_functionalism_ui
  international_style_architecture <-. echoes .-> straight_photography
  international_style_architecture <-. echoes .-> swiss_international
  italian_neorealism <-. echoes .-> street_photography
  japandi_interior <-. echoes .-> scandinavian_interior_photography
  japandi_interior <-. echoes .-> ukiyo_e
  japandi_interior <-. echoes .-> wabi_sabi_web
  japanese_graphic_modernism <-. echoes .-> ukiyo_e
  memphis_design <-. echoes .-> memphis_interior
  memphis_design <-. echoes .-> music_video
  memphis_design <-. echoes .-> pop_art_painting
  memphis_design <-. echoes .-> postmodern_architecture
  memphis_interior <-. echoes .-> postmodern_architecture
  mid_century_modern <-. echoes .-> mid_century_modern_architecture
  mid_century_modern <-. echoes .-> mid_century_modern_interior
  mid_century_modern_architecture <-. echoes .-> mid_century_modern_interior
  mid_century_modern_architecture <-. echoes .-> space_age
  mid_century_modern_interior <-. echoes .-> space_age
  minimalist_interior <-. echoes .-> rams_functionalism_ui
  music_video <-. echoes .-> y2k_aesthetic
  new_hollywood <-. echoes .-> street_photography
  new_topographics <-. echoes .-> planimetric_symmetry
  new_topographics <-. echoes .-> slow_cinema
  nordic_modernism_architecture <-. echoes .-> scandinavian_interior
  nordic_national_romanticism_painting <-. echoes .-> scandinavian_interior
  party_flash <-. echoes .-> y2k_aesthetic
  pictorialism <-. echoes .-> victorian_interior
  planimetric_symmetry <-. echoes .-> renaissance_painting
  pop_art_painting <-. echoes .-> pop_art_web
  realism_painting <-. echoes .-> straight_photography
  renaissance_architecture <-. echoes .-> renaissance_painting
  scandinavian_interior <-. echoes .-> scandinavian_interior_photography
  straight_photography <-. echoes .-> swiss_international
  surrealism_painting <-. echoes .-> vaporwave
  y2k_aesthetic <-. echoes .-> y2k_digicam
  cubism_painting --> abstract_expressionism
  surrealism_painting --> abstract_expressionism
  flat_design --> ai_chat_ui
  y2k_aesthetic --> apple_aqua
  art_nouveau_architecture --> art_deco_architecture
  arts_and_crafts_interior --> art_nouveau_interior
  shaker_interior --> arts_and_crafts_interior
  flat_design --> aurora_gradient_ui
  renaissance_architecture --> baroque_architecture
  renaissance_painting --> baroque_painting
  baroque_architecture --> beaux_arts_architecture
  neoclassical_architecture --> beaux_arts_architecture
  flat_design --> bento_grid_ui
  swiss_international --> bento_grid_ui
  art_nouveau_web --> bohemian_web
  psychedelic --> bohemian_web
  international_style_architecture --> brutalist_architecture
  rams_functionalism_ui --> cassette_futurism
  new_colour --> cinematic_teal_orange
  german_expressionist_cinema --> classical_hollywood
  neumorphism --> claymorphism
  scandinavian_interior --> coastal_interior
  flat_design --> corporate_memphis
  memphis_design --> corporate_memphis
  dark_devtool_ui --> cybercore_web
  y2k_aesthetic --> cybercore_web
  psychedelic --> cyberdelia
  flat_design --> dark_devtool_ui
  cubism_painting --> de_stijl_painting
  straight_photography --> documentary_photography
  soviet_montage --> documentary_verite
  memphis_interior --> dopamine_decor
  new_objectivity --> duesseldorf_school
  new_topographics --> duesseldorf_school
  swiss_international --> editorial_serif_revival
  aurora_gradient_ui --> ethereal_web
  glassmorphism --> ethereal_web
  pictorialism --> fashion_editorial
  straight_photography --> fashion_editorial
  pointillism --> fauvism
  new_colour --> film_grain_revival
  street_photography --> film_grain_revival
  straight_photography --> film_noir_still
  swiss_international --> flat_design
  straight_photography --> food_photography
  italian_neorealism --> french_new_wave
  soviet_montage --> french_new_wave
  y2k_aesthetic --> frutiger_aero
  frutiger_aero --> glassmorphism
  georgian_interior --> grandmillennial_interior
  victorian_interior --> grandmillennial_interior
  international_style_architecture --> high_tech_architecture
  art_deco_interior --> hollywood_regency_interior
  georgian_interior --> hollywood_regency_interior
  new_hollywood --> hong_kong_action
  realism_painting --> impressionism
  bauhaus_interior --> industrial_loft_interior
  scandinavian_interior --> japandi_interior
  bauhaus --> japanese_graphic_modernism
  swiss_international --> japanese_graphic_modernism
  glassmorphism --> liquid_glass_ui
  spatial_visionos --> liquid_glass_ui
  renaissance_painting --> mannerism_painting
  flat_design --> material_design
  swiss_international --> metro_ui
  bauhaus --> mid_century_modern
  international_style_architecture --> mid_century_modern_architecture
  prairie_school_architecture --> mid_century_modern_architecture
  bauhaus_interior --> mid_century_modern_interior
  bauhaus_interior --> minimalist_interior
  flat_design --> neo_brutalism_ui
  art_deco_interior --> neo_deco_interior
  skeuomorphism --> neumorphism
  street_photography --> new_colour
  french_new_wave --> new_hollywood
  straight_photography --> new_objectivity
  straight_photography --> new_topographics
  international_style_architecture --> nordic_modernism_architecture
  deconstructivist_architecture --> parametricism_architecture
  y2k_digicam --> party_flash
  y2k_aesthetic --> pixel_art_web
  impressionism --> pointillism
  mid_century_modern --> pop_art_web
  japandi_interior --> quiet_luxury_interior
  bauhaus --> rams_functionalism_ui
  swiss_international --> rams_functionalism_ui
  baroque_painting --> rococo_painting
  shaker_interior --> scandinavian_interior
  new_objectivity --> scandinavian_interior_photography
  corporate_memphis --> scrapbook_ui
  punk_zine --> scrapbook_ui
  italian_neorealism --> slow_cinema
  mid_century_modern --> space_age
  glassmorphism --> spatial_visionos
  straight_photography --> street_photography
  bauhaus --> swiss_international
  vaporwave --> synthwave_web
  y2k_aesthetic --> synthwave_web
  y2k_aesthetic --> vaporwave
  creator_vlog --> vertical_short_form
  georgian_interior --> victorian_interior
  swiss_international --> wabi_sabi_web
  new_colour --> y2k_digicam
  abstract_expressionism -. rejects .-> de_stijl_painting
  anti_design -. rejects .-> flat_design
  anti_design -. rejects .-> material_design
  anti_design -. rejects .-> swiss_international
  art_deco_interior -. rejects .-> art_nouveau_interior
  art_deco_web -. rejects .-> art_nouveau_web
  art_nouveau_interior -. rejects .-> victorian_interior
  arts_and_crafts_interior -. rejects .-> victorian_interior
  blob_world -. rejects .-> flat_design
  brutalist_web -. rejects .-> flat_design
  brutalist_web -. rejects .-> material_design
  claymorphism -. rejects .-> flat_design
  conceptual_sketch_ui -. rejects .-> flat_design
  constructivism_web -. rejects .-> art_nouveau_web
  cubism_painting -. rejects .-> impressionism
  cubism_painting -. rejects .-> renaissance_painting
  cybercore_web -. rejects .-> flat_design
  de_stijl_web -. rejects .-> art_nouveau_web
  deconstructivist_architecture -. rejects .-> international_style_architecture
  deconstructivist_architecture -. rejects .-> postmodern_architecture
  documentary_photography -. rejects .-> pictorialism
  dogme_95 -. rejects .-> french_new_wave
  dopamine_decor -. rejects .-> japandi_interior
  dopamine_decor -. rejects .-> scandinavian_interior
  editorial_serif_revival -. rejects .-> corporate_memphis
  editorial_serif_revival -. rejects .-> flat_design
  ethereal_web -. rejects .-> brutalist_web
  fashion_editorial -. rejects .-> new_objectivity
  film_grain_revival -. rejects .-> y2k_digicam
  flat_design -. rejects .-> skeuomorphism
  grandmillennial_interior -. rejects .-> minimalist_interior
  grandmillennial_interior -. rejects .-> scandinavian_interior
  grunge_editorial -. rejects .-> swiss_international
  italian_neorealism -. rejects .-> classical_hollywood
  japanese_dense_web -. rejects .-> swiss_international
  liquid_glass_ui -. rejects .-> flat_design
  memphis_design -. rejects .-> swiss_international
  memphis_interior -. rejects .-> bauhaus_interior
  memphis_interior -. rejects .-> mid_century_modern_interior
  metro_ui -. rejects .-> frutiger_aero
  metro_ui -. rejects .-> skeuomorphism
  minimalist_interior -. rejects .-> memphis_interior
  music_video -. rejects .-> classical_hollywood
  neo_brutalism_ui -. rejects .-> corporate_memphis
  neo_brutalism_ui -. rejects .-> material_design
  neo_deco_interior -. rejects .-> minimalist_interior
  neoclassical_architecture -. rejects .-> baroque_architecture
  neumorphism -. rejects .-> flat_design
  new_hollywood -. rejects .-> classical_hollywood
  new_objectivity -. rejects .-> pictorialism
  parametricism_architecture -. rejects .-> international_style_architecture
  planimetric_symmetry -. rejects .-> dogme_95
  pop_art_painting -. rejects .-> abstract_expressionism
  postmodern_architecture -. rejects .-> brutalist_architecture
  postmodern_architecture -. rejects .-> international_style_architecture
  psychedelic -. rejects .-> swiss_international
  punk_zine -. rejects .-> mid_century_modern
  punk_zine -. rejects .-> swiss_international
  quiet_luxury_interior -. rejects .-> dopamine_decor
  realism_painting -. rejects .-> rococo_painting
  realism_painting -. rejects .-> romanticism_painting
  renaissance_architecture -. rejects .-> gothic_architecture
  romanticism_painting -. rejects .-> rococo_painting
  scrapbook_ui -. rejects .-> flat_design
  slow_cinema -. rejects .-> classical_hollywood
  straight_photography -. rejects .-> pictorialism
  synthwave_web -. rejects .-> flat_design
  terminal_tui_web -. rejects .-> material_design
  wabi_sabi_web -. rejects .-> flat_design
  y2k_aesthetic -. rejects .-> grunge_editorial
  linkStyle 0 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 1 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 2 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 3 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 4 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 5 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 6 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 7 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 8 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 9 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 10 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 11 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 12 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 13 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 14 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 15 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 16 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 17 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 18 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 19 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 20 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 21 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 22 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 23 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 24 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 25 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 26 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 27 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 28 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 29 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 30 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 31 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 32 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 33 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 34 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 35 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 36 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 37 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 38 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 39 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 40 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 41 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 42 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 43 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 44 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 45 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 46 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 47 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 48 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 49 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 50 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 51 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 52 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 53 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 54 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 55 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 56 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 57 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 58 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 59 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 60 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 61 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 62 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 63 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 64 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 65 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 66 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 67 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 68 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 69 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 70 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 71 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 72 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 73 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 74 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 75 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 76 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 77 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 78 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 79 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 80 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 81 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 82 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 83 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 84 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 85 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 86 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 87 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 88 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 89 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 90 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 91 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 92 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 93 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 94 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 95 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 96 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 97 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 98 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 99 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 100 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 101 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 102 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 103 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 104 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 105 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 106 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 107 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 108 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 109 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 110 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 111 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 112 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 113 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 114 stroke:#8E8E93,stroke-width:1.5px
  linkStyle 218 stroke:#E5484D,stroke-width:1.5px
  linkStyle 219 stroke:#E5484D,stroke-width:1.5px
  linkStyle 220 stroke:#E5484D,stroke-width:1.5px
  linkStyle 221 stroke:#E5484D,stroke-width:1.5px
  linkStyle 222 stroke:#E5484D,stroke-width:1.5px
  linkStyle 223 stroke:#E5484D,stroke-width:1.5px
  linkStyle 224 stroke:#E5484D,stroke-width:1.5px
  linkStyle 225 stroke:#E5484D,stroke-width:1.5px
  linkStyle 226 stroke:#E5484D,stroke-width:1.5px
  linkStyle 227 stroke:#E5484D,stroke-width:1.5px
  linkStyle 228 stroke:#E5484D,stroke-width:1.5px
  linkStyle 229 stroke:#E5484D,stroke-width:1.5px
  linkStyle 230 stroke:#E5484D,stroke-width:1.5px
  linkStyle 231 stroke:#E5484D,stroke-width:1.5px
  linkStyle 232 stroke:#E5484D,stroke-width:1.5px
  linkStyle 233 stroke:#E5484D,stroke-width:1.5px
  linkStyle 234 stroke:#E5484D,stroke-width:1.5px
  linkStyle 235 stroke:#E5484D,stroke-width:1.5px
  linkStyle 236 stroke:#E5484D,stroke-width:1.5px
  linkStyle 237 stroke:#E5484D,stroke-width:1.5px
  linkStyle 238 stroke:#E5484D,stroke-width:1.5px
  linkStyle 239 stroke:#E5484D,stroke-width:1.5px
  linkStyle 240 stroke:#E5484D,stroke-width:1.5px
  linkStyle 241 stroke:#E5484D,stroke-width:1.5px
  linkStyle 242 stroke:#E5484D,stroke-width:1.5px
  linkStyle 243 stroke:#E5484D,stroke-width:1.5px
  linkStyle 244 stroke:#E5484D,stroke-width:1.5px
  linkStyle 245 stroke:#E5484D,stroke-width:1.5px
  linkStyle 246 stroke:#E5484D,stroke-width:1.5px
  linkStyle 247 stroke:#E5484D,stroke-width:1.5px
  linkStyle 248 stroke:#E5484D,stroke-width:1.5px
  linkStyle 249 stroke:#E5484D,stroke-width:1.5px
  linkStyle 250 stroke:#E5484D,stroke-width:1.5px
  linkStyle 251 stroke:#E5484D,stroke-width:1.5px
  linkStyle 252 stroke:#E5484D,stroke-width:1.5px
  linkStyle 253 stroke:#E5484D,stroke-width:1.5px
  linkStyle 254 stroke:#E5484D,stroke-width:1.5px
  linkStyle 255 stroke:#E5484D,stroke-width:1.5px
  linkStyle 256 stroke:#E5484D,stroke-width:1.5px
  linkStyle 257 stroke:#E5484D,stroke-width:1.5px
  linkStyle 258 stroke:#E5484D,stroke-width:1.5px
  linkStyle 259 stroke:#E5484D,stroke-width:1.5px
  linkStyle 260 stroke:#E5484D,stroke-width:1.5px
  linkStyle 261 stroke:#E5484D,stroke-width:1.5px
  linkStyle 262 stroke:#E5484D,stroke-width:1.5px
  linkStyle 263 stroke:#E5484D,stroke-width:1.5px
  linkStyle 264 stroke:#E5484D,stroke-width:1.5px
  linkStyle 265 stroke:#E5484D,stroke-width:1.5px
  linkStyle 266 stroke:#E5484D,stroke-width:1.5px
  linkStyle 267 stroke:#E5484D,stroke-width:1.5px
  linkStyle 268 stroke:#E5484D,stroke-width:1.5px
  linkStyle 269 stroke:#E5484D,stroke-width:1.5px
  linkStyle 270 stroke:#E5484D,stroke-width:1.5px
  linkStyle 271 stroke:#E5484D,stroke-width:1.5px
  linkStyle 272 stroke:#E5484D,stroke-width:1.5px
  linkStyle 273 stroke:#E5484D,stroke-width:1.5px
  linkStyle 274 stroke:#E5484D,stroke-width:1.5px
  linkStyle 275 stroke:#E5484D,stroke-width:1.5px
  linkStyle 276 stroke:#E5484D,stroke-width:1.5px
  linkStyle 277 stroke:#E5484D,stroke-width:1.5px
  linkStyle 278 stroke:#E5484D,stroke-width:1.5px
  linkStyle 279 stroke:#E5484D,stroke-width:1.5px
  linkStyle 280 stroke:#E5484D,stroke-width:1.5px
  linkStyle 281 stroke:#E5484D,stroke-width:1.5px
  linkStyle 282 stroke:#E5484D,stroke-width:1.5px
  linkStyle 283 stroke:#E5484D,stroke-width:1.5px
  linkStyle 284 stroke:#E5484D,stroke-width:1.5px
  linkStyle 285 stroke:#E5484D,stroke-width:1.5px
  linkStyle 286 stroke:#E5484D,stroke-width:1.5px
  linkStyle 287 stroke:#E5484D,stroke-width:1.5px
```
<!-- lineage:end -->

</details>

The same graph, for machines: [`graph/lineage.json`](graph/lineage.json). It has nodes, typed edges, an adjacency list that you can walk in both directions, and the three nearest neighbours of each style by vector distance.

## Query it

```bash
git clone https://github.com/musicalbee/design-ontology && cd design-ontology && npm install
```

```bash
npm run query -- where "grid_rigidity>=4" "ornamentation<=2"
```

```text
bauhaus                            design        2 2 4 1 3  Bauhaus
swiss-international                design        1 1 5 1 2  Swiss International Style
flat-design                        design        1 1 4 1 2  Flat Design
material-design                    design        2 3 4 2 2  Material Design
bento-grid-ui                      design        2 2 5 2 3  Bento Grid UI
```

```bash
npm run query -- path spatial-visionos bauhaus
```

```text
spatial-visionos —EVOLVED_FROM→ glassmorphism ←HYBRIDIZED_WITH— bento-grid-ui —EVOLVED_FROM→ swiss-international —EVOLVED_FROM→ bauhaus
```

Other commands: `list`, `show <id>`, `near <id>`, `match "<free text>"`.

## Not only screens

The ontology has domains. A domain is one manifest ([`domains/`](domains/)) and one schema ([`schema/domains/`](schema/domains/)). It brings its own vector axes and its own facets, and it shares identity, philosophy, lineage, emotion and agent routing with every other domain. The compiler reads the manifest, so a new domain needs no new code.

| Domain | Styles | Implementation layer | Demo |
|---|--:|---|---|
| Design | 25 | 16 CSS tokens, Tailwind patterns, a visual pack | [landing page](demo/index.html) |
| Architecture | 9 | vocabulary primer for briefs, image prompts and 3D scenes | [massing](demo/architecture.html) |
| Interior | 8 | composition rules in cm, lux and K, and a scene primer | [one room, each style](demo/interior.html) |
| Photography | 8 | camera numbers (mm, f-stop, shutter, ISO, K) and a grade recipe | [gallery](demo/photography.html) |
| Film and video | 8 | shot primer (aspect, fps, shutter angle, shot length) and a video-prompt primer | [gallery](demo/film.html) |
| Painting | 8 | palette in hex, brushwork and medium rules, a composition schema | [gallery](demo/painting.html) |

**Composition principles** are shared. [`data/principles/`](data/principles/) holds 20 records, such as focal point, symmetry and axis, rhythm, rule of thirds, layering in depth and colour distribution. Each record has a definition and a measure with a typical range. A style in any domain names a principle by id and gives its own number. The validator refuses an id that does not exist.

Domains connect. An `echoes` edge joins kin across domains: Brutalism ↔ Neo-Brutalism UI, International Style ↔ Swiss International Style, Dogme 95 ↔ Brutalism. Ask for a website that feels like the Barbican, and the graph has an answer.

Next domains under discussion: type design, motion, sound.

## Techniques that cross domains

A technique starts in one domain and moves into others, often decades later. The sunburst went from Art Deco facades in 1925 to mid-century wall clocks in 1949. The breeze block went from screen walls in Recife in 1929 into room dividers about 89 years later. [`data/techniques/`](data/techniques/) holds 17 records: cuts (photomontage, jump cut, match cut), motion rules (squash and stretch, easing, multiplane parallax), motifs and materials (sunburst, terrazzo, arch, fluting, breeze block, checkerboard) and processes and tools (airbrush, halftone, isometric projection, perspective grid).

Each record gives the origin, each adoption with its lag in years, and 2 to 6 rules with numbers. Each style that uses a technique carries its rules in a "Techniques" section. The catalogue is [`skills/TECHNIQUES.md`](skills/TECHNIQUES.md).

## Add a style

A contribution is one JSON file. The build does the rest.

1. Copy [`data/design/styles/swiss-international.json`](data/design/styles/swiss-international.json) to `data/design/styles/<your-id>.json`.
2. Fill each field. Give numbers: px, em, ratios, hex. "Clean and modern" is not a rule.
3. Write anti-patterns as the thing to avoid ("Rounded corners on containers"). The compiler adds `NEVER`.
4. Connect the style to the graph with at least one lineage edge.
5. Run `npm run build`. It validates, builds the graph and compiles the skills.
6. Commit the data file. A pre-commit hook builds again and adds the generated files to the commit.
7. Open a pull request.

The validator checks more than the schema. It refuses a lineage edge that points at nothing, a style that descends from a later style, an id that exists in two domains and a font pairing field that is empty. The full rules are in [CONTRIBUTING.md](CONTRIBUTING.md). An agent that contributes reads [AGENTS.md](AGENTS.md).

**Wanted:** brutalist web (the 2014 kind), Apple Aqua, Metro, dark-mode developer tool, claymorphism, editorial serif revival, anti-design. In architecture: almost everything.

## How it is built

```text
data/<domain>/styles/*.json     the source of truth, one file for each style
        │
        ├─ npm run validate      JSON Schema 2020-12 + lineage and chronology checks
        ├─ npm run build:graph   graph/lineage.json + the diagram in this README
        └─ npm run build:skills  skills/<id>/SKILL.md + tokens.css + pack/*.svg + SKILL_INDEX.md + index.json
```

- **Deterministic.** The same data gives the same bytes. A husky pre-commit hook moves the package version one patch step and builds the generated files, so each commit is prebuilt. CI only checks that a generated file does not differ from the commit.
- **Generated files are in the repository** on purpose, so that a raw URL is all an agent needs.
- **No runtime.** The output is Markdown, CSS and JSON. The scripts are about 1,300 lines of TypeScript with two dependencies, `ajv` and `handlebars`.

## Principles

1. **A rule names a property and a number.** If an agent cannot check it, it is not a rule.
2. **The anti-patterns matter most.** A model drifts to the average of the web. A style is mostly a list of refusals.
3. **A style is a position, not a preset.** Each one has a thesis and an opponent. The graph keeps both.
4. **Open-source fonts only.** Every pairing is on Google Fonts under SIL OFL or Apache.
5. **Honest about limits.** Neumorphism and glassmorphism have real accessibility costs, and their records say so.

## People

A style has people behind it. `data/people/` has one file for each person: the years of birth and death, a short bio, the styles with a role (founder, key figure, forerunner, populariser, trend-setter, rebel), dated milestones, and a portrait on Wikimedia Commons. The schema is `schema/person.schema.json`. `npm run build:graph` writes `graph/people.json`, with an index from each style to its people.

`demo/people.html` puts each life on the same time line as the styles, so you can see if a person came before a style, lived through it, or outlived it.

The facts come from open data (Wikidata, Wikimedia Commons). The bios and milestones are our own words. Portraits are linked, not copied, and each one keeps its credit and its licence. When no open source gives a year of birth, the field is null: we do not guess.

## Status

Version 0.1. The schema can still change before 1.0. The seed styles are a first edition: the scores are editorial judgements, and a pull request with a better-argued score is welcome. Open an issue to disagree with a lineage edge. That argument is the purpose of the project.

## Licence

Code (`scripts/`, `schema/`, `demo/`): [MIT](LICENSE). Data and generated skills (`data/`, `domains/`, `graph/`, `skills/`): [CC BY 4.0](LICENSE-DATA.md). Use the skills in commercial work; credit the project when you redistribute the data. The icons in `icons/packs/` and in each `pack/icons.svg` belong to their authors, under the licence that [icons/README.md](icons/README.md) names for each family.
