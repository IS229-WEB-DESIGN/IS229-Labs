# IS229 Course Build Validation Report

## Build checks completed

- 104 HTML pages/files are present across the course and embedded Morobe Discover project versions.
- 327 total repository files are included.
- 2,222 internal HTML links and asset references were checked by `scripts/validate_links.py`.
- All checked internal links/assets resolved to existing local files.
- The shared course JavaScript passed `node --check`.
- All JavaScript files in the copied Morobe Discover weekly/final project builds passed `node --check`.
- Local HTTP smoke tests returned HTTP 200 for the homepage, dashboard, roadmap, representative week/lab pages, component lab, code explorer, playground, debugging lab, Git/GitHub guide, DevTools guide, help centre, resources, project landing page, final project, Week 08 project build, and Week 08 JSON data.

## Recommended final check after GitHub Pages deployment

Open the public GitHub Pages URL and manually test:

1. mobile navigation and theme persistence;
2. dashboard completion state after refresh;
3. one module playground with HTML/CSS/JavaScript edits;
4. one weekly knowledge check;
5. one lab checkpoint after refresh;
6. Week 08/11 JSON/Fetch-based Morobe Discover pages;
7. all original PDF/PPTX resource links;
8. the final Morobe Discover navigation and asset paths.

These final checks are important because GitHub project-page URLs can expose path assumptions that do not appear in a local root server.
