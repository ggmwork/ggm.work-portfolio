# Project Summary: Porta Astro Starter

This document provides a high-level overview of the Porta project, its architecture, and its core principles. It is intended for developers to quickly understand the project's structure and design philosophy.

## Core Philosophy

Porta is a **minimal, HTML-first, and production-ready** Astro starter kit. It is designed to be a "boring" but solid foundation for a personal portfolio or small marketing site.

The guiding principles are:

-   **Simplicity:** Favor native HTML elements and Astro components over complex JavaScript frameworks. The project intentionally avoids client-side frameworks like React, Vue, or Svelte.
-   **Performance:** Generate static, highly optimized sites with minimal JavaScript. Asset optimization (images, fonts) and lazy-loading are prioritized.
-   **Accessibility (a11y):** Adhere to web standards and best practices to ensure the site is usable by everyone. This includes semantic HTML, ARIA attributes, and keyboard navigation.
-   **Maintainability:** Use a clean, component-driven architecture with a clear separation of concerns. The project is structured to be easily understood and extended.

## Project Structure

The project follows a standard Astro project structure:

-   `src/`: Contains the majority of the project's source code.
    -   `components/`: Reusable Astro components (e.g., `Header.astro`, `Footer.astro`, `Modal.astro`).
    -   `content/`: Content collections for the site.
        -   `projects/`: Markdown files for each project in the portfolio.
        -   `site.ts`: A central configuration file for site-wide settings like the site name, author, navigation, and SEO defaults.
    -   `layouts/`: Base layout components that define the overall page structure (e.g., `Base.astro`).
    -   `pages/`: Astro pages that define the routes for the site.
    -   `styles/`: Global CSS styles and Tailwind CSS configuration.
-   `public/`: Static assets that do not need to be processed by Astro (e.g., images, favicons).

## Content Management

All site content is managed through the `src/content/` directory.

-   **Site Configuration:** The `src/content/site.ts` file is the single source of truth for all global site data. To change the site name, author details, or navigation links, you should edit this file.
-   **Projects:** The portfolio is driven by a `projects` content collection. Each project is a separate Markdown file in the `src/content/projects/` directory.

To add a new project:

1.  Create a new `.md` file in `src/content/projects/`.
2.  Add the necessary frontmatter (e.g., `title`, `description`, `image`).
3.  Write the project details in the body of the Markdown file.

Astro will automatically pick up the new project and render it on the site.

## Styling

The project uses **Tailwind CSS** for styling.

-   **Global Styles:** Global styles and Tailwind directives are located in `src/styles/global.css`.
-   **Component Styles:** Most styling is done directly within Astro components using Tailwind utility classes.
-   **Design Tokens:** The project uses a simple system of CSS variables (tokens) for colors, fonts, and other design properties. These are defined in `src/styles/partials/tokens.css` and can be used in Tailwind classes (e.g., `bg-primary`, `text-accent`).

## Logic and Interactivity

Client-side JavaScript is kept to an absolute minimum.

-   **Modals:** The project modals are implemented using the native HTML `<dialog>` element. A few lines of vanilla JavaScript in `ProjectGrid.astro` handle opening and closing the modals.
-   **Lazy-Loading:** Astro's `<Image>` component is used for all images. This component automatically optimizes images and adds the `loading="lazy"` attribute, which defers the loading of off-screen images. The modal content itself is not lazy-loaded; it is pre-rendered at build time for simplicity and performance.

This summary should give you a clear understanding of the project and how to work with it. The key takeaway is to embrace the simplicity and "boring" nature of the starter. When adding new features, always consider the simplest, most performant, and most maintainable implementation.

## Recent foundation changes (2026-01-29)

- Converted to a **single-page architecture** (anchor sections for About/Contact/Legal) to simplify navigation and reduce build/runtime complexity.
- Added image optimization plumbing via `@astrojs/image` and a small `src/components/ui/Image.astro` wrapper that falls back to a native `<img>` when the integration is not installed. Please run your package manager locally to install the dependency (e.g., `pnpm add @astrojs/image`).
- Expanded the project content schema to accept images as strings or objects (`src`, `alt`, `width`, `height`) and exported a `Project` TypeScript type for safer usage across components.
- Progressive enhancement to modals: modal triggers use `data-modal-target` and there is a minimal focus-trap enhancement for accessibility; JavaScript is intentionally small and scoped to components.

Next steps: install the new package locally, run a build, and validate image behavior and Lighthouse score after adding project assets.
