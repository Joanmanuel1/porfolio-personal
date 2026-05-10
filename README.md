# Joan Manuel Romero — Portfolio

Personal portfolio built with Vue 3.5 and Vite.
Bilingual (ES/EN), dark/light themes, animated, and tested.

🌐 **Live:** [joanmanuelromero.dev](https://joanmanuelromero.dev)

---

## Stack

- **Framework:** Vue 3.5 (Composition API) + Vite 5
- **Styling:** Tailwind CSS 3 + custom design tokens
- **UI:** PrimeVue 4 (Dialog, Galleria, Toast)
- **i18n:** Vue I18n 9 (ES + EN, auto-detected from browser)
- **SEO:** `@unhead/vue` (per-route meta, OG, JSON-LD), sitemap, robots
- **Animations:** `@vueuse/motion` + scoped CSS keyframes
- **Fonts:** Inter Variable + Space Grotesk (self-hosted via `@fontsource-variable`)
- **Testing:** Vitest + `@vue/test-utils` (jsdom)
- **Build:** code-split per vendor (`primevue`, `i18n`, `vue-core`, …) via `manualChunks`

---

## Features

- Bilingual ES/EN with browser-language detection and localStorage persistence
- Dark / light themes with smooth transitions and `prefers-color-scheme` fallback
- SEO-ready: per-route titles, descriptions, OG tags, canonical URLs, sitemap, robots
- Generated favicons and OG image (`npm run assets`)
- Project case studies (problem / solution / decisions / outcomes) per production project
- Real-time GitHub stats (repos, languages, recent activity) via public API
- Print-friendly CV mode (`@media print` styles)
- Skip-link, ARIA labels, focus-visible outlines, `prefers-reduced-motion` support
- Image optimization (PNG/JPG/WebP) at build time

---

## Setup

```bash
# Install
npm ci

# Develop
npm run dev

# Test
npm test
npm run test:watch

# Build
npm run build

# Preview production build
npm run preview
```

### Environment variables (optional)

Copy `.env.example` to `.env` and configure:

```
VITE_SITE_URL=https://yoursite.dev
```

---

## Scripts

| Script               | Purpose                                    |
| -------------------- | ------------------------------------------ |
| `npm run dev`        | Start Vite dev server                      |
| `npm run build`      | Generate sitemap + production build        |
| `npm run preview`    | Serve the production build locally         |
| `npm test`           | Run Vitest suite once                      |
| `npm run test:watch` | Run Vitest in watch mode                   |
| `npm run lint`       | Lint Vue/JS files (ESLint)                 |
| `npm run format`     | Format `src/` with Prettier                |
| `npm run favicons`   | Regenerate favicons from source PNG        |
| `npm run og`         | Regenerate the default OG image            |
| `npm run sitemap`    | Generate `dist/sitemap.xml`                |
| `npm run assets`     | `favicons` + `og` combined                 |

---

## Project structure

```
src/
├── assets/            # CSS + images + media
├── components/        # Reusable components (NavBar, Footer, ProjectCard, …)
├── composables/       # useSeo, useImageUrl, useCountUp, useLocale
├── data/              # projects (single source of truth, i18n-friendly)
├── directives/        # v-magnetic
├── i18n/              # createI18n + es.json + en.json
├── router/            # routes (lazy-loaded)
└── views/             # one .vue file per route
```

The single source of truth for projects is [`src/data/projects.js`](src/data/projects.js).
All copy lives in [`src/i18n/locales/{es,en}.json`](src/i18n/locales/).

---

## CI

GitHub Actions runs on every push and PR ([.github/workflows/ci.yml](.github/workflows/ci.yml)):

- `npm ci`
- `npm run lint`
- `npm test`
- `npm run build`

Build artifact uploaded for inspection (7-day retention).

---

## License

Source code released under MIT for reference / learning.
Personal content (bio, photos, project descriptions) remains the author's.
