# Icons

The icons in `packs/` are the work of their authors. This project vendors 14 icons of each family for the demo and for the sprite in each skill. Each family keeps its licence.

| Pack | Family | Author | Licence | Source | Style |
|---|---|---|---|---|---|
| `carbon` | Carbon, Regular | [IBM](https://github.com/carbon-design-system/carbon/tree/main/packages/icons) | [Apache 2.0]() | `@iconify-json/carbon@1.2.30` | Swiss International Style |
| `f7` | Framework7 Icons, Regular | [Vladimir Kharlampidi](https://github.com/framework7io/framework7-icons) | [MIT](https://github.com/framework7io/framework7-icons/blob/master/LICENSE) | `@iconify-json/f7@1.2.2` | Spatial UI (visionOS) |
| `fluent-filled` | Fluent UI System Icons, Filled, 24 | [Microsoft Corporation](https://github.com/microsoft/fluentui-system-icons) | [MIT](https://github.com/microsoft/fluentui-system-icons/blob/main/LICENSE) | `@iconify-json/fluent@1.2.61` | Frutiger Aero |
| `iconoir` | Iconoir, Regular | [Luca Burgio](https://github.com/iconoir-icons/iconoir) | [MIT](https://github.com/iconoir-icons/iconoir/blob/main/LICENSE) | `@iconify-json/iconoir@1.2.12` | Neumorphism |
| `ion` | Ionicons, Filled | [Ben Sperry](https://github.com/ionic-team/ionicons) | [MIT](https://github.com/ionic-team/ionicons/blob/main/LICENSE) | `@iconify-json/ion@1.2.7` | Flat Design |
| `lucide` | Lucide, Regular | [Lucide Contributors](https://github.com/lucide-icons/lucide) | [ISC](https://github.com/lucide-icons/lucide/blob/main/LICENSE) | `@iconify-json/lucide@1.2.154` | Bento Grid UI |
| `material-symbols-sharp` | Material Symbols, Sharp, filled | [Google](https://github.com/google/material-design-icons) | [Apache 2.0](https://github.com/google/material-design-icons/blob/master/LICENSE) | `@iconify-json/material-symbols@1.2.99` | Bauhaus |
| `material-symbols` | Material Symbols, Baseline, filled | [Google](https://github.com/google/material-design-icons) | [Apache 2.0](https://github.com/google/material-design-icons/blob/master/LICENSE) | `@iconify-json/material-symbols@1.2.99` | Material Design |
| `mingcute-fill` | MingCute, Fill | [MingCute Design](https://github.com/Richard9394/MingCute) | [Apache 2.0](https://github.com/Richard9394/MingCute/blob/main/LICENSE) | `@iconify-json/mingcute@1.2.10` | Mid-Century Modern |
| `pepicons-pop` | Pepicons, Pop | [CyCraft](https://github.com/CyCraft/pepicons) | [CC BY 4.0](https://github.com/CyCraft/pepicons/blob/dev/LICENSE) | `@iconify-json/pepicons-pop@1.2.4` | Memphis Design |
| `pepicons-print` | Pepicons, Print | [CyCraft](https://github.com/CyCraft/pepicons) | [CC BY 4.0](https://github.com/CyCraft/pepicons/blob/dev/LICENSE) | `@iconify-json/pepicons-print@1.2.2` | Grunge Editorial |
| `ph-bold` | Phosphor, Bold | [Phosphor Icons](https://github.com/phosphor-icons/core) | [MIT](https://github.com/phosphor-icons/core/blob/main/LICENSE) | `@iconify-json/ph@1.2.2` | Neo-Brutalism UI |
| `ph-duotone` | Phosphor, Duotone | [Phosphor Icons](https://github.com/phosphor-icons/core) | [MIT](https://github.com/phosphor-icons/core/blob/main/LICENSE) | `@iconify-json/ph@1.2.2` | Corporate Memphis |
| `ph-fill` | Phosphor, Fill | [Phosphor Icons](https://github.com/phosphor-icons/core) | [MIT](https://github.com/phosphor-icons/core/blob/main/LICENSE) | `@iconify-json/ph@1.2.2` | Skeuomorphism |
| `pixelarticons` | Pixelarticons, Regular | [Gerrit Halfmann](https://github.com/halfmage/pixelarticons) | [MIT](https://github.com/halfmage/pixelarticons/blob/master/LICENSE) | `@iconify-json/pixelarticons@1.2.10` | Y2K Aesthetic |
| `solar-bold` | Solar, Bold | [480 Design](https://www.figma.com/community/file/1166831539721848736) | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) | `@iconify-json/solar@1.2.15` | Psychedelic |
| `solar-linear` | Solar, Linear | [480 Design](https://www.figma.com/community/file/1166831539721848736) | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) | `@iconify-json/solar@1.2.15` | Glassmorphism |

The source is the Iconify copy of each set on npm. `scripts/fetch-icons.ts` reads `sources.json`, takes the named icons and writes one file for each pack. The build reads only these files.

Changes to the icons: a line family on a 24px field takes the stroke weight of the style. No other change.

`principles.json` holds the rules for the choice of a family. They apply to a licensed library in the same way.
