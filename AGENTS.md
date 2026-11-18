# Instructions for agents

You are in `design-ontology`: design styles as data, compiled into agent skills.

## To use a style

1. Read `skills/SKILL_INDEX.md`.
2. Pick one row. Load `skills/<id>/SKILL.md`. Load one skill at a time.
3. Obey its "System directives" and "Guardrails". If the user asks for a variation, follow its "Lineage fallbacks".
4. If the skill has a "Techniques" section, apply those rules as they are written. If the user names a technique (a jump cut, a sunburst, terrazzo), find it in `skills/TECHNIQUES.md`.

## To change the repository

- The source of truth is `data/<domain>/styles/*.json`, `data/<domain>/eras/*.json`, `data/principles/*.json`, `data/techniques/*.json` and `domains/*.json`.
- The people layer is `data/people/*.json` (schema `schema/person.schema.json`). Do not guess a year: use null. Link portraits on Wikimedia Commons only. Write the bio and the milestones in your own words. Each style needs at least one person: a new style comes with its person in the same pull request, or the build fails.
- Do not edit `skills/`, `graph/` or the lineage block in `README.md` by hand. They are generated.
- After each change to the data, run `npm run build`. It must report 0 errors.
- Before you commit, run `npm run typecheck` if you changed a script.
- Commit the data and the generated files together. The pre-commit hook does this for you and moves the package version one patch step. Do not edit the patch number by hand; do not skip it with `--no-verify`.
- In a page, set text with the derived tokens: `--color-on-bg` on the background, `--color-on-surface` on a surface, `--color-on-primary` on a primary button. Do not put `--color-text` on a surface.
- Each skill has a visual pack in `skills/<id>/pack/`: `hero.svg`, `pattern.svg`, `icons.svg`. Use them before you draw your own. The sprite is an open-source stand-in: for a product, use the icon library of the brand and choose the family by the rules in the skill.
- The content rules are in `CONTRIBUTING.md`. Read them before you write a style.

## Commands

| Command | Result |
|---|---|
| `npm run build` | validate, build the graph, compile the skills |
| `npm run validate -- --schema-only` | schema check only; use it while a batch of styles refers to files that are not yet present |
| `npm run check` | build, then fail if a generated file differs from the commit (CI runs this) |
| `npm run query -- list` | list all styles with their vectors |
| `npm run query -- near <id>` | nearest styles by vector distance |
| `npm run query -- path <a> <b>` | shortest lineage path |
