# Claude Code Portfolio

Personal portfolio at **https://alihuda1992.github.io/claude-code-portfolio/**  
Showcases projects built with Claude Code. Vanilla HTML/CSS/JS — no framework, no build step.

## Local dev

```bash
npx serve -l 3456 .
# then open http://localhost:3456
```

> **⚠️ Must use a server.** `projects.json` is loaded via `fetch()` — opening `index.html` directly from the filesystem (`file://`) will fail silently with no project cards.

## Project structure

```
/
├── index.html        ← Single-page markup (nav, hero, about, experience, skills, projects, education, contact)
├── style.css         ← All styles — Prismatic design system (see tokens below)
├── main.js           ← Nav scroll + scroll reveal + dynamic project card rendering
├── projects.json     ← Project data — only file you need to edit to add/update projects
└── assets/
    ├── prismatic-hero.jpeg   ← Hero bg (20% opacity)
    ├── dark-gradient.png     ← Skills section bg (10% opacity)
    ├── light-panels.jpeg     ← Contact/footer bg (6% opacity)
    └── gsu-logo.png          ← Georgia State University logo
```

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

Leave `"url": ""` to suppress the Live button. GitHub button also hides if `"repo": ""`.

## Design system (Prismatic)

CSS custom properties defined at `:root` in `style.css`:

| Token | Value | Used for |
|-------|-------|----------|
| `--navy` | `#061F43` | Primary dark / nav |
| `--navy-mid` | `#064970` | Secondary dark |
| `--cream` | `#FFFCF6` | Page background |
| `--magenta` | `#C70E5F` | Accent / CTA |
| `--teal` | `#06A28C` | Accent / icons |
| `--yellow` | `#E8FD31` | Highlight |
| `--font-serif` | Times New Roman → Georgia | Headings, logo |
| `--font-sans` | DM Sans → Arial | Body text |
| `--max-w` | `1100px` | Section content width |

Single responsive breakpoint at `max-width: 860px`.

## Scroll reveal animations

Add `.reveal` to any element to fade+slide it in on scroll. Add `.stagger-1` through `.stagger-3` to delay siblings:

```html
<div class="reveal">Appears first</div>
<div class="reveal stagger-1">Appears 100ms later</div>
<div class="reveal stagger-2">Appears 200ms later</div>
```

`main.js` observes all `.reveal` elements via `IntersectionObserver`. Elements rendered after page load (e.g. project cards) must be re-observed — this is already handled in `renderProjects()`.

## Deploy

GitHub Pages from `main` branch root — no Actions workflow. Pushes to `main` go live automatically within ~60s.

```bash
git push origin main
```

> **Large assets:** if a `git push` fails with HTTP 400, run:  
> `git config http.postBuffer 157286400`
