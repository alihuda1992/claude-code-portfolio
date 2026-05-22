# Claude Code Portfolio

Personal portfolio showcasing projects built with Claude Code.

## Project structure

```
/
├── index.html       # Single-page portfolio
├── style.css        # All styles (swap out when design arrives)
├── main.js          # Minimal interactivity
└── projects.json    # Project data — add entries here
```

## Adding a project

Edit `projects.json`. Each entry:
```json
{
  "name": "Project Name",
  "description": "One-line description",
  "url": "https://deployed-url.com",
  "repo": "https://github.com/...",
  "tags": ["tag1", "tag2"]
}
```

## Design

Design files incoming from Claude Design. `style.css` is a placeholder — replace it wholesale when the design arrives. No CSS framework committed yet; add one only after seeing the design.

## Deploy

Static site. No build step. Works with GitHub Pages, Netlify, or Vercel as-is.
