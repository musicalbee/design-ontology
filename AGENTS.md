# Instructions for agents

You are in `design-ontology`: design styles as data, compiled into agent skills.

## To use a style

1. Read `skills/SKILL_INDEX.md`.
2. Pick one row. Load `skills/<id>/SKILL.md`. Load one skill at a time.
3. Obey its "System directives" and "Guardrails". If the user asks for a variation, follow its "Lineage fallbacks".

## To change the repository

- The source of truth is `data/<domain>/styles/*.json`, `data/<domain>/eras/*.json` and `domains/*.json`.
- Do not edit `skills/`, `graph/` or the lineage block in `README.md` by hand. They are generated.
- After each change to the data, run `npm run build`. It must report 0 errors.
- Before you commit, run `npm run typecheck` if you changed a script.
- Commit the data and the generated files together.
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
