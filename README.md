# IS229 Web Design — Interactive Web Development Lab

A complete GitHub Pages-ready 13-week practical course built from the supplied IS229 readings, lectures, labs and Morobe Discover progressive project.

## Course experience

The course follows **Learn → Explore → Code → Practice → Build → Test → Reflect → Submit**. Each week includes a student-friendly module, code explanation, editable browser playground, guided project lab, test checkpoints, knowledge check, original source resources and the real Morobe Discover weekly project increment.

## Main sections

- `index.html` — course landing page
- `dashboard.html` — localStorage progress dashboard
- `roadmap.html` — 13-week roadmap
- `weeks/week01/` … `weeks/week13/` — complete learning modules
- `labs/lab01/` … `labs/lab13/` — guided practical labs
- `project/versions/` — supplied Morobe Discover weekly builds
- `project/final/` — complete Morobe Discover reference project
- `component-lab/` — reusable working UI examples
- `code-explorer/` — HTML/CSS/JavaScript code reference
- `playground/` — editable HTML/CSS/JS runner
- `challenges/` — formative weekly challenges
- `debugging/` — deliberately broken examples
- `git-github/` — Git/GitHub workflow and Pages guidance
- `devtools/` — browser DevTools mini-module
- `help/` — troubleshooting centre
- `resources/` — original readings, lecture PDFs/PPTX and lab PDFs

## Deploy to GitHub Pages

1. Create a new GitHub repository (for example `is229-web-design`).
2. Upload **the contents of this folder** to the repository root.
3. Commit and push to the `main` branch.
4. In GitHub open **Settings → Pages**.
5. Under Build and deployment, select **Deploy from a branch**.
6. Select branch **main** and folder **/(root)**, then save.
7. Wait for GitHub Pages to publish the site and open the generated public URL.
8. Test the dashboard, week modules, project iframes, resources and the final Morobe Discover project from the public URL.

Because the course uses relative paths and browser-native HTML/CSS/JavaScript, it is designed for GitHub project pages without a server-side backend.

## Local preview

For the best local experience (especially project versions that use `fetch()`), serve the repository rather than double-clicking files:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Progress data

Student progress, week completion, theme and lab checkpoints are stored only in the current browser using `localStorage`. This is intentionally lightweight and requires no backend. Clearing site data will reset local progress.

## Source alignment

The 13-week sequence follows the supplied IS229 materials. The Morobe Discover weekly builds and complete project are preserved under `project/versions/` and `project/final/` so learners can inspect real project evolution.
