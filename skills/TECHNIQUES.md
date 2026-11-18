# Technique catalogue

A technique is a cut, a motion rule, a motif, a material, a process or a tool. It starts in one domain and moves into others, often decades later. Each row gives the origin and each adoption with its lag in years. Each style skill that uses a technique repeats its rules.

The data is in [`../data/techniques/`](../data/techniques/). A machine-readable copy is in [`../graph/lineage.json`](../graph/lineage.json) (key `techniques`).

## Montage

### Jump cut

A cut inside one continuous shot that removes time and leaves the jump in view.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Film & Video | 1960 | — | Paris: Jean-Luc Godard cuts inside continuous shots in À bout de souffle and does not hide the jump. | |
| 1 | Film & Video | c. 2006 | +46 years | Video bloggers on YouTube cut the pauses out of a talk to the camera. | [`creator-vlog`](./creator-vlog/SKILL.md) |
| 2 | Film & Video | c. 2018 | +58 years | Vertical short-form apps make the fast jump cut the default rhythm of a clip. | [`vertical-short-form`](./vertical-short-form/SKILL.md) |

Used by: [`french-new-wave`](./french-new-wave/SKILL.md), [`creator-vlog`](./creator-vlog/SKILL.md), [`vertical-short-form`](./vertical-short-form/SKILL.md).

- Remove 0.3 to 2 seconds inside one shot and keep the framing within 10% of the frame width, so that the jump shows.
- In a talk to camera, cut on the word and not on the action: one cut every 2 to 4 seconds.

Sources: Richard Neupert, A History of the French New Wave Cinema (University of Wisconsin Press, 2002).

### Match cut

A cut between two shots whose main forms have the same shape, position or movement, so that the eye carries one form across the cut.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Film & Video | 1968 | — | 2001: A Space Odyssey: Graphic matches are older; the reference case is Stanley Kubrick's cut from a thrown bone to a satellite in orbit. | |
| 1 | Graphic & UI Design | 2014 | +46 years | Material motion in Android 5.0 carries one element from screen to screen as a shared-element transition. | [`material-design`](./material-design/SKILL.md) |

Used by: [`material-design`](./material-design/SKILL.md), [`spatial-visionos`](./spatial-visionos/SKILL.md).

- Match the shape, the position and the scale of the main form across the cut within 10% of the frame width.
- In an interface, move the shared element from its old box to its new box in 250 to 350ms while the rest of the screen fades.

Sources: David Bordwell and Kristin Thompson, Film Art: An Introduction (McGraw-Hill).

### Photomontage

Fragments of photographs, cut and joined on one sheet, so that the joins make a statement that no single photograph makes.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Graphic & UI Design | 1918 | — | Berlin: Raoul Hausmann and Hannah Höch of Berlin Dada cut press photographs and paste them into one sheet. | |
| 1 | Graphic & UI Design | 1924 | +6 years | Alexander Rodchenko and El Lissitzky use photomontage in Constructivist posters and books. | [`constructivism-web`](./constructivism-web/SKILL.md) |
| 2 | Film & Video | 1925 | +7 years | Sergei Eisenstein carries the collision of fragments into the cut of Strike and Battleship Potemkin. | [`soviet-montage`](./soviet-montage/SKILL.md) |
| 3 | Graphic & UI Design | 1976 | +58 years | Punk zines and record sleeves cut up newspapers with scissors and glue. | [`punk-zine`](./punk-zine/SKILL.md) |
| 4 | Graphic & UI Design | c. 1990 | +72 years | Photoshop makes the cut and the layer digital; early cyberculture prints dense photo-illustration. | [`cyberdelia`](./cyberdelia/SKILL.md) |

Used by: [`constructivism-web`](./constructivism-web/SKILL.md), [`soviet-montage`](./soviet-montage/SKILL.md), [`punk-zine`](./punk-zine/SKILL.md), [`cyberdelia`](./cyberdelia/SKILL.md), [`grunge-editorial`](./grunge-editorial/SKILL.md).

- Join 3 to 12 photographic fragments on one ground and keep the cut edges hard and visible.
- Vary the scale of the fragments by 4:1 or more, so that the joins read as a claim and not as a scene.
- Set type as one more fragment, turned 0° to 30°, in the same stack of layers.

Sources: Dawn Ades, Photomontage (Thames & Hudson, 1976).

## Animation

### Easing

A move speeds up from rest and slows down before it stops, as a real mass does, instead of a constant speed.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Film & Video | c. 1930 | — | Disney studio, Los Angeles: Animators draw more frames at the start and the end of a move; Thomas and Johnston name it slow in and slow out. | |
| 1 | Graphic & UI Design | 2001 | +71 years | Robert Penner publishes easing equations for Flash, and web motion takes them up. | [`frutiger-aero`](./frutiger-aero/SKILL.md) |
| 2 | Graphic & UI Design | c. 2009 | +79 years | CSS transitions define timing functions such as ease-in-out and cubic-bezier(). | [`material-design`](./material-design/SKILL.md) |

Used by: [`frutiger-aero`](./frutiger-aero/SKILL.md), [`material-design`](./material-design/SKILL.md), [`glassmorphism`](./glassmorphism/SKILL.md).

- Give a move of 200 to 400ms an ease-out curve when an element enters and an ease-in curve when it leaves.
- Use cubic-bezier(0.4, 0, 0.2, 1) as the standard curve for a move inside the screen.
- Put more frames at the two ends of a move than in the middle: 2 to 3 times the density.

Sources: Frank Thomas and Ollie Johnston, The Illusion of Life: Disney Animation (1981); Robert Penner, Programming Macromedia Flash MX (2002).

### Ken Burns effect

A slow pan and zoom across a still image, so that a photograph moves in a film.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Film & Video | 1990 | — | The Civil War (PBS): Ken Burns pans and zooms over still photographs in a documentary series; rostrum-camera moves are older. | |
| 1 | Graphic & UI Design | c. 2003 | +13 years | Apple names the pan-and-zoom setting after Burns in its photo and video software. |  |

Used by: [`creator-vlog`](./creator-vlog/SKILL.md).

- Move 5% to 15% of the frame over 4 to 8 seconds on each still.
- Start or end each move on a face or on the key detail.

Sources: Ken Burns, The Civil War (PBS, 1990).

### Multiplane parallax

Flat layers move at different speeds by their distance, so that a flat picture gets depth.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Film & Video | 1937 | — | The Old Mill: Disney's multiplane camera moves painted glass layers at different speeds; The Old Mill (1937) is its first film. | |
| 1 | Graphic & UI Design | c. 2011 | +74 years | Parallax scroll pages move the background layers slower than the page. | [`flat-design`](./flat-design/SKILL.md) |
| 2 | Graphic & UI Design | 2015 | +78 years | Layered app icons on tvOS, and later visionOS, tilt their layers with parallax. | [`spatial-visionos`](./spatial-visionos/SKILL.md) |

Used by: [`flat-design`](./flat-design/SKILL.md), [`spatial-visionos`](./spatial-visionos/SKILL.md).

- Move each layer at a speed in proportion to its distance: a far layer at 20% to 50% of the speed of the front layer.
- Use 3 to 5 layers; more layers add load and no depth.
- Give a reduced-motion setting that stops the shift of the layers.

Sources: Frank Thomas and Ollie Johnston, The Illusion of Life: Disney Animation (1981).

### Squash and stretch

A moving form changes shape but keeps its volume: it stretches along its path at speed and squashes on impact.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Film & Video | c. 1930 | — | Disney studio, Los Angeles: Disney animators exaggerate the volume of a ball and a face; Frank Thomas and Ollie Johnston name it the first of twelve principles in 1981. | |
| 1 | Film & Video | 1986 | +56 years | John Lasseter applies it to computer animation in Luxo Jr. and in his SIGGRAPH paper of 1987. |  |
| 2 | Graphic & UI Design | 2013 | +83 years | Spring-damped animation in iOS 7 lets interface elements overshoot and settle. | [`flat-design`](./flat-design/SKILL.md) |
| 3 | Graphic & UI Design | c. 2015 | +85 years | 3D motion design renders soft bodies that wobble, inflate and bounce. | [`blob-world`](./blob-world/SKILL.md) |

Used by: [`flat-design`](./flat-design/SKILL.md), [`blob-world`](./blob-world/SKILL.md).

- Keep the volume constant: when the height grows by a factor k, scale the width by 1/k.
- Stretch along the path by 10% to 30% at the highest speed and squash by the same amount on impact.
- In an interface, use a spring with a damping ratio of 0.6 to 0.8, so that an element overshoots once and settles.

Sources: Frank Thomas and Ollie Johnston, The Illusion of Life: Disney Animation (1981); John Lasseter, Principles of Traditional Animation Applied to 3D Computer Animation (SIGGRAPH, 1987).

## Motif

### Arch

A curved head over an opening that carries load as compression; inside, a soft frame for a door, a mirror or a niche.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Architecture | c. 200 BCE | — | Rome: Roman builders use the semicircular masonry arch at large scale in aqueducts, bridges and gates; the arch itself is older. | |
| 1 | Interior | c. 1720 | +1920 years | Palladian arched windows and niches frame Georgian rooms. | [`georgian-interior`](./georgian-interior/SKILL.md) |
| 2 | Architecture | c. 1978 | +2178 years | Postmodern facades quote the round arch as a sign, not as a structure. | [`postmodern-architecture`](./postmodern-architecture/SKILL.md) |
| 3 | Interior | c. 2019 | +2219 years | Arched mirrors, headboards, doorways and painted arches become a room motif. | [`dopamine-decor`](./dopamine-decor/SKILL.md) |

Used by: [`georgian-interior`](./georgian-interior/SKILL.md), [`postmodern-architecture`](./postmodern-architecture/SKILL.md), [`dopamine-decor`](./dopamine-decor/SKILL.md).

- Use a semicircular head: the rise is half the span.
- Keep the ratio of height to width of the opening at 1.6:1 to 2:1.
- In a room, repeat the arch in 2 or 3 places, for example a door, a mirror and a niche, and no more.

Sources: John Summerson, The Classical Language of Architecture (1963).

### Checkerboard

A grid of squares in two alternate colours, on a floor, in a picture or on a surface.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Architecture | c. 1300 | — | Italy: Squares of two colours of marble pave Italian church floors and palace halls. | |
| 1 | Painting | 1435 | +135 years | Leon Battista Alberti builds the perspective of a picture on a squared pavement in De pictura. | [`renaissance-painting`](./renaissance-painting/SKILL.md) |
| 2 | Interior | c. 1925 | +625 years | Black and white floors pave Art Deco halls, bars and bathrooms. | [`art-deco-interior`](./art-deco-interior/SKILL.md) |
| 3 | Interior | c. 2020 | +720 years | Checker rugs, tiles and painted floors become a motif of colourful rooms. | [`dopamine-decor`](./dopamine-decor/SKILL.md) |

Used by: [`renaissance-painting`](./renaissance-painting/SKILL.md), [`art-deco-interior`](./art-deco-interior/SKILL.md), [`dopamine-decor`](./dopamine-decor/SKILL.md), [`neo-deco-interior`](./neo-deco-interior/SKILL.md).

- Use squares of one size: 300 to 600mm on a floor, or 1/8 to 1/16 of the width of a picture.
- Lay the grid at 45° to make a small room look wider, or at 0° to show the vanishing point.

Sources: Leon Battista Alberti, De pictura (1435).

### Fluting and reeding

Parallel grooves (flutes) or ridges (reeds) on a column, a panel, a leg or a sheet of glass.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Architecture | c. 600 BCE | — | Greece: Greek Doric and Ionic columns carry vertical concave grooves; a Doric shaft has 20 flutes. | |
| 1 | Interior | c. 1790 | +2390 years | Neoclassical and Regency furniture takes fluted and reeded legs and friezes. | [`georgian-interior`](./georgian-interior/SKILL.md) |
| 2 | Interior | c. 1925 | +2525 years | Art Deco rooms use fluted pilasters, fluted glass and fluted wood panels. | [`art-deco-interior`](./art-deco-interior/SKILL.md) |
| 3 | Interior | c. 2018 | +2618 years | Reeded glass and fluted wood or stone cover cabinets, islands and walls. | [`quiet-luxury-interior`](./quiet-luxury-interior/SKILL.md), [`neo-deco-interior`](./neo-deco-interior/SKILL.md) |

Used by: [`art-deco-architecture`](./art-deco-architecture/SKILL.md), [`georgian-interior`](./georgian-interior/SKILL.md), [`art-deco-interior`](./art-deco-interior/SKILL.md), [`quiet-luxury-interior`](./quiet-luxury-interior/SKILL.md), [`neo-deco-interior`](./neo-deco-interior/SKILL.md).

- Cut 16 to 24 flutes round a column, or set the grooves at 15 to 40mm centres on a flat panel.
- Run the flutes vertical to make a surface look taller.
- Use one fluted surface in each room as an accent.

Sources: John Summerson, The Classical Language of Architecture (1963).

### Sunburst

Rays from a disc or a half disc: a sign of light and of the new, on a facade, a gate, a mirror or a clock.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Architecture | 1925 | — | Paris: Rays from a half disc appear on Art Deco facades, gates and lift doors around the Paris exposition of decorative arts in 1925. | |
| 1 | Interior | c. 1928 | +3 years | Art Deco furniture, screens and mirrors take the ray motif inside. | [`art-deco-interior`](./art-deco-interior/SKILL.md) |
| 2 | Interior | 1949 | +24 years | George Nelson Associates design ray-form wall clocks for Howard Miller; the starburst mirror follows in the 1950s. | [`mid-century-modern-interior`](./mid-century-modern-interior/SKILL.md) |
| 3 | Graphic & UI Design | c. 1957 | +32 years | Space Age signs, packaging and posters use starbursts as a sign of the future. | [`space-age`](./space-age/SKILL.md) |
| 4 | Interior | c. 2015 | +90 years | Neo-deco rooms bring back the fan and the sunburst in brass and glass. | [`neo-deco-interior`](./neo-deco-interior/SKILL.md) |

Used by: [`art-deco-architecture`](./art-deco-architecture/SKILL.md), [`art-deco-interior`](./art-deco-interior/SKILL.md), [`mid-century-modern-interior`](./mid-century-modern-interior/SKILL.md), [`space-age`](./space-age/SKILL.md), [`art-deco-web`](./art-deco-web/SKILL.md), [`neo-deco-interior`](./neo-deco-interior/SKILL.md).

- Draw 12 to 36 rays from one centre; alternate long and short rays, or two finishes.
- Keep the centre disc at 15% to 30% of the full diameter.
- In a room, use one sunburst as the focal point of one wall.

Sources: Bevis Hillier, Art Deco of the 20s and 30s (Studio Vista, 1968).

## Material

### Breeze block

A hollow concrete block with a pierced pattern; a wall of them shades and lets air and light through.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Architecture | 1929 | — | Recife, Brazil: Three engineers in Recife patent the cobogó, a hollow concrete block for screen walls in a hot climate. | |
| 1 | Architecture | c. 1955 | +26 years | Tropical modernism and desert houses in the United States use screen walls; Edward Durell Stone wraps the US Embassy in New Delhi (1959) in a pierced screen. | [`mid-century-modern-architecture`](./mid-century-modern-architecture/SKILL.md) |
| 2 | Interior | c. 2018 | +89 years | Breeze-block room dividers, bar fronts and planters move inside the house. | [`mid-century-modern-interior`](./mid-century-modern-interior/SKILL.md), [`dopamine-decor`](./dopamine-decor/SKILL.md) |

Used by: [`mid-century-modern-architecture`](./mid-century-modern-architecture/SKILL.md), [`mid-century-modern-interior`](./mid-century-modern-interior/SKILL.md), [`dopamine-decor`](./dopamine-decor/SKILL.md).

- Use blocks of 300 to 400mm square with 40% to 60% open area.
- Stack the blocks in one grid of one pattern; mix no more than 2 patterns in one wall.
- Inside, use the screen to divide zones while it keeps light and air.

Sources: Edward Durell Stone, United States Embassy, New Delhi (1959).

### Terrazzo

Chips of marble or glass set in a binder and ground flat, so that each chip shows as a cut section.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Architecture | c. 1500 | — | Venice: Venetian workers set marble offcuts in lime and polish the floor of palaces: terrazzo alla veneziana. | |
| 1 | Architecture | c. 1925 | +425 years | Poured terrazzo with brass strips paves Art Deco lobbies. | [`art-deco-architecture`](./art-deco-architecture/SKILL.md) |
| 2 | Interior | c. 1950 | +450 years | Poured terrazzo floors go into mid-century homes, schools and airports. | [`mid-century-modern-interior`](./mid-century-modern-interior/SKILL.md) |
| 3 | Interior | c. 2016 | +516 years | Terrazzo moves from the floor to tables, tiles, lamps and small objects. | [`dopamine-decor`](./dopamine-decor/SKILL.md) |

Used by: [`art-deco-architecture`](./art-deco-architecture/SKILL.md), [`mid-century-modern-interior`](./mid-century-modern-interior/SKILL.md), [`dopamine-decor`](./dopamine-decor/SKILL.md), [`memphis-interior`](./memphis-interior/SKILL.md).

- Set chips of 5 to 25mm in a binder; the chips cover 40% to 60% of the surface.
- Use 2 to 4 chip colours on one ground colour.
- Grind and polish the surface flat, so that the chip edges show as cut sections.

Sources: Getty Art & Architecture Thesaurus, entry: terrazzo.

## Process

### Fixed-pitch grid

Every character takes one cell of the same width, so text forms columns without a separate grid and a position is a count of characters.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Typeface | 1874 | — | Ilion, New York: The Sholes and Glidden typewriter by E. Remington and Sons moves the carriage one fixed step for each key, so its type must be monospaced. | |
| 1 | Typeface | 1874 | +0 years | Typewriter faces, then Courier for IBM in 1955. | [`monospace`](./monospace/SKILL.md) |
| 2 | Graphic & UI Design | 1978 | +104 years | Video terminals such as the DEC VT100 draw the whole screen as a grid of 80 by 24 character cells. | [`terminal-tui-web`](./terminal-tui-web/SKILL.md), [`dark-devtool-ui`](./dark-devtool-ui/SKILL.md) |

Used by: [`monospace`](./monospace/SKILL.md), [`terminal-tui-web`](./terminal-tui-web/SKILL.md), [`dark-devtool-ui`](./dark-devtool-ui/SKILL.md).

- Give every glyph one advance width, 0.60 em in most fonts, or 10 or 12 characters an inch on a typewriter.
- Align columns with spaces and set tables, code and forms on the cell grid.
- On a screen, size the layout in cells: 80 columns by 24 rows is the classic terminal.

Sources: [Monospaced font (Wikipedia)](https://en.wikipedia.org/wiki/Monospaced_font); [Sholes and Glidden typewriter (Wikipedia)](https://en.wikipedia.org/wiki/Sholes_and_Glidden_typewriter); [VT100 (Wikipedia)](https://en.wikipedia.org/wiki/VT100).

### Halftone

Tone printed as dots of different size or spacing; at a distance the dots merge into grey or colour.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Graphic & UI Design | 1879 | — | New York: Benjamin Day patents a mechanical tint of dots for printers; photographic halftone screens follow in the 1880s. | |
| 1 | Photography | 1880 | +1 years | The Daily Graphic of New York prints a photograph as a halftone. |  |
| 2 | Painting | 1961 | +82 years | Roy Lichtenstein paints enlarged Ben-Day dots by hand in Look Mickey. |  |
| 3 | Graphic & UI Design | c. 1976 | +97 years | Punk zines photocopy halftones until the dots break up. | [`punk-zine`](./punk-zine/SKILL.md) |

Used by: [`pop-art-web`](./pop-art-web/SKILL.md), [`punk-zine`](./punk-zine/SKILL.md).

- Set the screen at 10 to 30 lines per cm for a print grain, or enlarge the dots to 4 to 8mm for a Pop effect.
- Turn each colour screen to its own angle: cyan 15°, magenta 75°, yellow 0°, black 45°.

Sources: Roy Lichtenstein, Look Mickey (1961).

### Isometric projection

A drawing with three axes at equal angles and one scale, with no vanishing point, so that sizes can be measured.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Architecture | 1822 | — | Cambridge: William Farish publishes isometrical perspective as a method for engineering drawing. | |
| 1 | Architecture | 1923 | +101 years | Theo van Doesburg and Cornelis van Eesteren show houses in axonometric drawings. |  |
| 2 | Graphic & UI Design | c. 2015 | +193 years | Isometric illustrations show products, data and offices on tech pages. | [`corporate-memphis`](./corporate-memphis/SKILL.md) |

Used by: [`corporate-memphis`](./corporate-memphis/SKILL.md), [`bento-grid-ui`](./bento-grid-ui/SKILL.md).

- Draw the three axes at 120° to each other; on a pixel grid, use a 2:1 slope (26.57°).
- Keep one scale on all three axes and draw no vanishing point.

Sources: William Farish, On Isometrical Perspective (Transactions of the Cambridge Philosophical Society, 1822).

### Perspective grid

Lines that run to one vanishing point on a horizon, so that a flat surface reads as a floor in deep space.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Painting | c. 1415 | — | Florence: Filippo Brunelleschi demonstrates linear perspective; Alberti writes the method down in De pictura (1435). | |
| 1 | Graphic & UI Design | c. 1980 | +565 years | Cassette Futurism screens and sleeves draw wireframe floors to a horizon. | [`cassette-futurism`](./cassette-futurism/SKILL.md) |
| 2 | Film & Video | 1982 | +567 years | Tron draws vector grids that run to a horizon. |  |
| 3 | Graphic & UI Design | 2012 | +597 years | Vaporwave draws neon grid floors under a sunset. | [`vaporwave`](./vaporwave/SKILL.md) |

Used by: [`renaissance-painting`](./renaissance-painting/SKILL.md), [`cassette-futurism`](./cassette-futurism/SKILL.md), [`vaporwave`](./vaporwave/SKILL.md).

- Put the horizon at 50% to 65% of the height and draw 12 to 24 lines to one vanishing point.
- Space the cross lines so that each gap is about 0.8 of the gap in front of it.

Sources: Leon Battista Alberti, De pictura (1435).

### Wood type

Large display letters routed from end-grain wood instead of cast in metal, so posters and bills can use letters 5–50 cm high at a low cost.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Typeface | 1828 | — | New York: Darius Wells makes wood type in quantity with a routing machine, and the poster printers take it up at once. | |
| 1 | Typeface | 1828 | +0 years | The first wood type lines are fat faces copied from the London founders. | [`fat-face-display`](./fat-face-display/SKILL.md) |
| 2 | Typeface | c. 1834 | +6 years | Wood type founders add Egyptian slabs and condensed letters for posters. | [`slab-serif`](./slab-serif/SKILL.md) |

Used by: [`fat-face-display`](./fat-face-display/SKILL.md), [`slab-serif`](./slab-serif/SKILL.md).

- Use wood type for letters above about 72 pt, where metal is too heavy and too expensive.
- Draw the faces to be loud at a distance: fat face, slab and condensed grotesque, in one weight per line.
- Mix several faces and sizes on one bill and centre each line, as the job printers did.

Sources: [Wood type (Wikipedia)](https://en.wikipedia.org/wiki/Wood_type); [Fat face (Wikipedia)](https://en.wikipedia.org/wiki/Fat_face).

## Tool

### Airbrush

A pen-sized spray gun that lays paint in soft, even tones; with masks, it makes hard edges and smooth gradients side by side.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Photography | 1879 | — | United States: Abner Peeler patents a paint distributor; the airbrush of Charles Burdick (1893) goes into photo studios for retouch. | |
| 1 | Graphic & UI Design | c. 1930 | +51 years | Streamline posters and car advertisements use airbrushed gradients and chrome. |  |
| 2 | Painting | c. 1968 | +89 years | Illustrators airbrush surreal chrome, lightning and X-ray cut-aways for album covers and magazines. | [`airbrush-surrealism`](./airbrush-surrealism/SKILL.md) |
| 3 | Graphic & UI Design | 1990 | +111 years | Photoshop 1.0 ships with an airbrush tool, and the soft spray becomes digital. | [`cyberdelia`](./cyberdelia/SKILL.md) |
| 4 | Graphic & UI Design | c. 2004 | +125 years | Glossy interface gradients and highlights take the airbrush look to the screen. | [`frutiger-aero`](./frutiger-aero/SKILL.md) |

Used by: [`airbrush-surrealism`](./airbrush-surrealism/SKILL.md), [`cyberdelia`](./cyberdelia/SKILL.md), [`frutiger-aero`](./frutiger-aero/SKILL.md), [`y2k-aesthetic`](./y2k-aesthetic/SKILL.md).

- Build tone in 3 to 6 thin passes; each pass adds 20% to 40% of the final density.
- Cut a hard mask for each edge that must stay sharp; leave the light soft.
- Put one specular highlight of pure white on each chrome form.

Sources: Seng-gye Tombs Curtis and Christopher Hunt, The Airbrush Book (1980).

### Broad-nib pen

A pen with a flat, square-cut tip held at a fixed angle, so the width of a stroke changes with its direction and the stress of the letter is diagonal.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Typeface | c. 1454 | — | Mainz: The pen is older than print; Gutenberg cut his textura from the broad-nib book hand of the scribes, the first record of the pen in type. | |
| 1 | Typeface | c. 1454 | +0 years | Gutenberg's textura for the 42-line Bible copies the broken broad-nib hand. | [`blackletter`](./blackletter/SKILL.md) |
| 2 | Typeface | 1470 | +16 years | Nicolas Jenson cuts a roman with the diagonal stress of the humanist broad-nib hand. | [`garalde-old-style`](./garalde-old-style/SKILL.md) |
| 3 | Typeface | 1916 | +462 years | Edward Johnston, a calligrapher, draws the London Underground sans from broad-nib proportions. | [`humanist-sans`](./humanist-sans/SKILL.md) |

Used by: [`blackletter`](./blackletter/SKILL.md), [`garalde-old-style`](./garalde-old-style/SKILL.md), [`humanist-sans`](./humanist-sans/SKILL.md).

- Hold the nib edge at 30–45° to the baseline and keep that angle for every stroke.
- Make the stem width 4–5 nib widths of the x-height in a book hand and 3–4 in a broken hand.
- Let the thin parts fall on the diagonal of the nib angle, so the o has its thinnest points at about 11 and 5 o'clock.

Sources: [Blackletter (Wikipedia)](https://en.wikipedia.org/wiki/Blackletter); [Calligraphy (Wikipedia)](https://en.wikipedia.org/wiki/Calligraphy); [Edward Johnston (Wikipedia)](https://en.wikipedia.org/wiki/Edward_Johnston).

### Pointed pen

A sharp, flexible steel or quill nib: pressure spreads the two tines for a swelling downstroke, and no pressure gives a hairline upstroke.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Typeface | 1741 | — | London: George Bickham's The Universal Penman engraves the roundhand of the English writing masters, the model for every later formal script. | |
| 1 | Typeface | 1741 | +0 years | Engraved copybooks of the writing masters, then metal scripts that copy the plates. | [`formal-script`](./formal-script/SKILL.md) |
| 2 | Logo | 1886 | +145 years | Frank Mason Robinson writes the Coca-Cola wordmark in Spencerian, a pointed-pen hand. | [`victorian-trademark`](./victorian-trademark/SKILL.md) |

Used by: [`formal-script`](./formal-script/SKILL.md), [`victorian-trademark`](./victorian-trademark/SKILL.md).

- Slope the letters 50–55° from the baseline and keep one slope for the line.
- Press only on the downstrokes, to 3–8 times the hairline width, and release on the upstrokes and the joins.
- Join each lower-case letter to the next with a hairline from the baseline or the x-height.

Sources: [Copperplate script (Wikipedia)](https://en.wikipedia.org/wiki/Copperplate_script); [Spencerian script (Wikipedia)](https://en.wikipedia.org/wiki/Spencerian_script).

---

Generated by `scripts/compile-skills.ts`. Do not edit this file; change the data and run `npm run build`.
