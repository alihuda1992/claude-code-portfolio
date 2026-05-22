# Ali Huda — Portfolio

Personal portfolio showcasing projects built with [Claude Code](https://claude.ai/code).

## Live site

**[https://alihuda1992.github.io/claude-code-portfolio/](https://alihuda1992.github.io/claude-code-portfolio/)**

## Stack

Vanilla HTML/CSS/JS — no framework, no build step. Deploys automatically to GitHub Pages on every push to `main`.

## Design

Prismatic brand system (adapted from Cprime). Tokens, typography, and layout spec live in [DESIGN_SPEC.md](./handoff/DESIGN_SPEC.md) from the Claude Design handoff.

## Adding a project

Edit `projects.json` only — cards render dynamically:

```json
{
  "name": "Project Name",
  "description": "One-line description",
  "url": "https://live-url.com",
  "repo": "https://github.com/alihuda1992/repo",
  "tags": ["tag1", "tag2"]
}
```

Leave `"url": ""` if there's no live deployment yet — the Live button won't appear until it's filled in.

## Structure

```
/
├── index.html        ← Full page markup
├── style.css         ← All styles (Prismatic design system)
├── main.js           ← Nav scroll + scroll reveal + project card rendering
├── projects.json     ← Project data — edit this to add/update projects
└── assets/           ← Background images + GSU logo
```
