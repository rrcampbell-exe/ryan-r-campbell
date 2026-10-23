# Ryan R. Campbell — Personal Website

The source code for [ryanrcampbell.com](https://www.ryanrcampbell.com), the personal website of technologist, strategist, and author Ryan R. Campbell.

The site brings together professional work and writing, books, podcast episodes, and information about Ryan. It is a client-rendered React application built with Vite and deployed on Vercel.

## Contents

- [Features](#features)
- [Tech stack](#tech-stack)
- [Getting started](#getting-started)
- [Available commands](#available-commands)
- [Project structure](#project-structure)
- [License](#license)
- [Credits](#credits)
- [Contact](#contact)

## Features

- Landing page with featured writing, books, and the *R: On Everything* podcast
- Pages for AI enablement, professional work, résumé, biography, books, podcasts, and contact
- Latest writing loaded from the *R: On Everything* RSS feed through a serverless API endpoint
- Blog routes that redirect readers to Ryan's Substack
- Responsive navigation, light and dark themes, and interactive content
- Client-side routing with Vercel rewrites for direct navigation to site pages

## Tech stack

- React 18 and React Router
- Vite 5 and Sass
- Vercel serverless functions, Analytics, and Speed Insights
- Vitest, Testing Library, and V8 coverage
- ESLint

## Getting started

### Requirements

- Node.js 22.13.1 or later (the repository's `.nvmrc` specifies 22.13.1)
- npm

### Install and run locally

```bash
npm install
npm run dev
```

Vite prints the local development URL in the terminal when the server is ready.

## Available commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Build the production site into `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm test -- --run` | Run the Vitest suite once |
| `npm run coverage -- --run` | Run tests and generate V8 coverage reports |
| `npm run lint` | Run ESLint; the configured script applies autofixes |

Tests are in `src/tests/`, including tests for pages, components, utilities, and the latest-posts API.

## Project structure

```text
api/                  Vercel serverless API endpoints
public/               Static images, icons, and other public assets
src/
  assets/             Bundled assets and podcast data
  components/         Shared UI components
  constants/          Shared constants
  hooks/              React hooks
  pages/              Route-level page components
  tests/              Vitest and Testing Library tests
  utils/              Shared utilities
```

The `/api/latest-posts` endpoint fetches the *R: On Everything* RSS feed and returns the latest two posts. Vercel caches successful responses for one hour, with stale responses available during revalidation.

## Deployment

The site is configured for Vercel. The `vercel.json` rewrite sends page URLs to the Vite app entry point so client-side routes work when opened directly; API requests and asset paths are excluded.

## License

© 2026 Ryan R. Campbell. All rights reserved.

## Credits

### Developed by

- [Ryan R. Campbell](https://github.com/rrcampbell-exe/)

### Icons

Sun, Moon, External Link, Hamburger Menu, Robot, Close, Calendar, Light Bulb, Checkmark, Copy, Bullhorn, and Quotation Mark SVGs are sourced from [SVG Repo](https://www.svgrepo.com/) under the CC Attribution License. Additional icons are provided by [lucide-react](https://lucide.dev/).

## Contact

For questions, bug reports, or feature suggestions, email [Ryan R. Campbell](mailto:campbell.ryan@gmail.com) or [contact him on GitHub](https://github.com/rrcampbell-exe/).
