# Project Architecture Guide

> **Last updated**: March 2026
> **Stack**: Astro 5 · Tailwind CSS v4 · pnpm · Vercel

---

## Table of Contents

1. [Folder Structure](#folder-structure)
2. [Stack & Configuration](#stack--configuration)
3. [Pages & Routing](#pages--routing)
4. [Content System](#content-system)
5. [Component Architecture](#component-architecture)
6. [Styling System](#styling-system)
7. [Image Pipeline](#image-pipeline)
8. [Project Overlay System](#project-overlay-system)
9. [Build & Deploy](#build--deploy)
10. [Naming Conventions](#naming-conventions)

---

## Folder Structure

```
root/
├── astro.config.mjs        ← Astro config: sitemap + Tailwind v4
├── package.json             ← pnpm, Astro 5, sharp, gsap, marked
├── pnpm-lock.yaml
├── project_storm/           ← NDA assets (not in build, deferred)
├── public/
│   ├── favicon.ico / .svg
│   ├── files/               ← CV PDF
│   └── videos/              ← project-4.mp4, project-5.mp4
├── src/
│   ├── assets/images/       ← Vite-processed images (astro:assets)
│   │   ├── headshot.webp
│   │   └── projects/
│   │       └── project-6/   ← Project Storm (storm_shots/, storm_clips/)
│   ├── components/
│   │   ├── SEO.astro        ← SEO head component
│   │   └── cards/
│   │       ├── base/        ← BaseCard, MainCanvas
│   │       ├── atoms/       ← Label, ButtonPrimary, ButtonSecondary,
│   │       │                   FilterButtons, TextBlock, TextBlockVariant2
│   │       ├── cards/       ← HeroCard, HeaderCard, CTATextCard,
│   │       │                   EduLangCard, WorkExpCard, MoreProjectsCard,
│   │       │                   AboutMeCard, ContactCard, AllSkillsCard,
│   │       │                   HighlightedProjCard, ImageBlock,
│   │       │                   AboutImageBlock, HeroInfoCard
│   │       ├── overlays/    ← ProjOverlay, ProjTextCard
│   │       └── pipeline/    ← TestBlock, _REFERENCE_SandboxBlock
│   ├── content/
│   │   ├── config.ts        ← Zod schemas for pages/projects collections
│   │   ├── site.ts          ← Site-wide config (name, links, SEO, nav)
│   │   ├── PROJECT_REGISTRY.md  ← Number→title mapping for all projects
│   │   ├── pages/
│   │   │   └── index_content.md ← All homepage section data (YAML)
│   │   └── projects/
│   │       ├── project-1.md  through  project-10.md
│   │       └── PROJECT_REGISTRY.md
│   ├── lib/
│   │   └── resolve-image.ts ← Vite glob → ImageMetadata resolver
│   ├── pages/
│   │   ├── index.astro      ← Homepage (only page)
│   │   └── robots.txt.ts    ← Dynamic robots.txt
│   └── styles/
│       └── global.css       ← Tailwind v4, theme tokens, all utilities
└── .gitignore
```

---

## Stack & Configuration

### `astro.config.mjs`
```js
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: process.env.SITE_URL,       // Set in Vercel env vars
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],       // Tailwind v4 via Vite plugin
  },
});
```

### `package.json` dependencies
| Package | Purpose |
|---------|---------|
| `astro` ^5.0 | Framework |
| `@astrojs/sitemap` ^3.0 | Auto-generates sitemap.xml |
| `sharp` ^0.34 | Image processing (used by `astro:assets`) |
| `gsap` ^3.14 | Animation library (imported but not yet wired) |
| `marked` ^17.0 | Markdown→HTML for inline text in overlay cards |
| `tailwindcss` ^4.2 | CSS utility framework (Vite plugin mode) |
| `typescript` ^5.0 | Type checking |

---

## Pages & Routing

| Route | File | Purpose |
|-------|------|---------|
| `/` | `src/pages/index.astro` | Single-page portfolio |
| `/robots.txt` | `src/pages/robots.txt.ts` | Dynamic robots.txt |

### `index.astro` — how it works

1. **Fetches content**: `getEntry("pages", "index_content")` → reads `index_content.md`
2. **Renders sections**: Maps each section through `TestBlock` (the pipeline component)
3. **Builds overlay data**: Extracts `projectSlug` from Highlighted + More Projects sections
4. **Fetches project content**: For each slug, `getEntry("projects", slug)` → reads the project `.md`
5. **Filters overlay blocks**: Only sections with `component` ∈ `{ProjTextCardLeft, ProjTextCardRight, ProjTextCardWideImage}` are included
6. **Renders overlays**: Each project's overlay blocks are passed to `ProjOverlay`

```
index.astro
  ├─ <MainCanvas>
  │    └─ sections.map → <TestBlock block={section} />
  └─ overlayProjects.map → <ProjOverlay projectSlug overlayBlocks />
```

---

## Content System

### Collections (`src/content/config.ts`)

Two Astro content collections:

#### `pages` collection
```ts
pageSchema = { title: string, sections: blockSchema[] }
blockSchema = { component: string, props?: Record<string, any> }
```
Used by: `index_content.md`

#### `projects` collection
```ts
projectSchema = {
  title: string,
  description: string,
  category: string,
  cover?: ImageOrString,
  images?: ImageOrString[],
  video?: string,
  tags?: string[],
  externalUrl?: url,
  repoUrl?: url,
  publishDate?: date,
  sections?: projectSectionSchema[],
}
```

### `index_content.md` structure

YAML frontmatter with a `sections` array. Each section has:
- `component`: string matching a handler in `TestBlock.astro`
- `props`: data passed to the card component

Current sections in display order:
| Component | Renders |
|-----------|---------|
| `HeaderSection` | Name heading + HeaderCard (buttons, tagline) |
| `AboutSection` | AboutMeCard + AboutImageBlock (side by side) |
| `HighlightedProjectsSection` | List of HighlightedProjCard (alternating left/right) |
| `MoreProjectsSection` | MoreProjectsCard (grid with FilterButtons) |
| `WorkSkillsSection` | WorkExpCard + AllSkillsCard (side by side) |
| `EducationLangSection` | EduLangCard (split rows) |
| `CTASection` | CTATextCard (closing paragraph) |
| `ContactSection` | ContactCard (email + LinkedIn buttons) |

### Project markdown files (`project-1.md` through `project-10.md`)

Each defines project metadata + a `sections` array of overlay blocks:
```yaml
sections:
  - component: "ProjTextCardLeft"
    props:
      heading: "Project Title"
      paragraph1: "Description..."
      imageSrc: "/images/projects/project-6/..."
  - component: "ProjTextCardRight"
    props: { ... }
  - component: "ProjTextCardWideImage"
    props: { ... }
```

### Project Registry (`PROJECT_REGISTRY.md`)

Maps project numbers to human-readable titles. Rule: **numbers are permanent, never reused**.

---

## Component Architecture

### Hierarchy
```
MainCanvas (full-page gradient + noise background)
  └─ TestBlock (pipeline: routes section→component)
       ├─ HeaderCard (uses ButtonPrimary, ButtonSecondary, TextBlock)
       ├─ AboutMeCard (uses BaseCard, TextBlock)
       ├─ AboutImageBlock (uses BaseCard, Image)
       ├─ HighlightedProjCard (uses BaseCard, Label, Image)
       ├─ MoreProjectsCard (uses BaseCard, FilterButtons, Image)
       ├─ WorkExpCard (uses BaseCard, Label)
       ├─ AllSkillsCard (uses BaseCard, Label)
       ├─ EduLangCard (uses BaseCard)
       ├─ CTATextCard (uses BaseCard, TextBlock)
       ├─ ContactCard (uses BaseCard, ButtonSecondary)
       ├─ HeroCard (slot-based container using BaseCard)
       └─ ImageBlock (uses BaseCard, Image)

ProjOverlay (modal dialog per project)
  └─ ProjTextCard (uses BaseCard, Image, marked)
```

### `BaseCard.astro` — the foundation

Single source of truth for card shells. All cards wrap their content in `BaseCard`.

**Props:**
| Prop | Type | Default | Purpose |
|------|------|---------|---------|
| `align` | `"left" \| "right"` | `"left"` | Flush side (rounded on opposite) |
| `class` | `string` | `""` | Sizing/layout classes (Tailwind) |
| `ariaLabel` | `string` | `"Content card"` | Accessibility |

**Visual DNA (applied automatically):**
- `bg-white` background
- `ring-[5px] ring-grey` border
- `base-card-shadow` (inner + drop shadow)
- `base-card-grid` (skewed grid pattern via `::before`)
- Rounded corners on the non-flush side
- Content sits at `z-10` above the grid

### `MainCanvas.astro`

Full-viewport gradient background with noise texture overlay.

**Effects stack (bottom → top):**
1. `canvas-gradient`: Linear gradient `brand → grey → brand-light`
2. `canvas-backdrop-blur`: `backdrop-filter: blur(0.9px)`
3. `canvas-noise-overlay`: SVG `feTurbulence` filter (monochromatic noise at 30% opacity, overlay blend)
4. Slot content at `z-10`

### `TestBlock.astro` — the pipeline

Maps `component` strings from markdown to actual Astro components. Acts as a switch/router:

```
"HeaderSection"              → <HeaderCard>
"AboutSection"               → <AboutMeCard> + <AboutImageBlock>
"HighlightedProjectsSection" → <HighlightedProjCard> (loop)
"MoreProjectsSection"        → <MoreProjectsCard>
"WorkSkillsSection"          → <WorkExpCard> + <AllSkillsCard>
"EducationLangSection"       → <EduLangCard>
"CTASection"                 → <CTATextCard>
"ContactSection"             → <ContactCard>
```

Each handler wraps its component(s) in a `<section>` with proper heading, spacing, and ARIA labels.

---

## Styling System

### `global.css` structure

```
@import "tailwindcss"           ← Tailwind v4 entry

@theme { ... }                  ← Design tokens (colors, fonts, canvas spacing)

@layer base { ... }             ← Base styles (body, html, headings, overlay scroll lock)

@utility sandbox-grid-bg { }    ← Background grid (preserved, not currently used)
@utility base-card-shadow { }   ← Card shadow (inner + drop)
@utility base-card-blur { }     ← No-op (was 0.5px blur, removed for perf)
@utility img-drop-shadow { }    ← Image shadow
@utility label-effects { }      ← Label shadow
@utility base-card-grid { }     ← Card internal grid (skewed pattern)
@utility mx-canvas { }          ← Canvas horizontal gutters (overlay only)
@utility mt-canvas { }          ← Canvas top gutter (overlay only)
@utility rounded-canvas { }     ← Canvas border radius (overlay only)
@utility canvas-shadow { }      ← Canvas shadow (overlay only)
@utility canvas-backdrop-blur {} ← Canvas blur
@utility canvas-gradient { }    ← Canvas gradient
@utility min-h-canvas { }       ← Canvas min-height (overlay only)
@utility canvas-noise-overlay {} ← Noise texture layer
@utility card-grid { }          ← Alternative grid pattern

@layer components { .prose }    ← Markdown typography for modals
```

### Design Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--color-white` | `#FDFDF9` | Background, cards |
| `--color-black` | `#0E0E0E` | Text, shadows |
| `--color-brand` | `#5F46E7` | Accent (purple) |
| `--color-brand-light` | `#C9C3FF` | Gradient end, grid glow |
| `--color-grey` | `#E6E7F2` | Borders, grid lines |
| `--font-heading` | Space Mono | Headings (monospace) |
| `--font-body` | Plus Jakarta Sans | Body text |

### Fonts

Loaded via Google Fonts CDN (async, non-blocking):
- **Space Mono** (400, 700) — headings
- **Plus Jakarta Sans** (300–700) — body

---

## Image Pipeline

### Dual-path resolution (`resolve-image.ts`)

```ts
// At build time: eagerly globs all images in src/assets/images/
const imageModules = import.meta.glob('/src/assets/images/**/*.{png,jpg,...}', { eager: true });

// Maps "/images/foo.webp" → "/src/assets/images/foo.webp" → ImageMetadata
export function resolveImage(publicPath) { ... }
```

**How it works:**
1. Content markdown uses paths like `/images/projects/project-6/storm_shots/...`
2. `resolveImage()` rewrites this to `/src/assets/images/projects/project-6/storm_shots/...`
3. Returns Vite-processed `ImageMetadata` for use with Astro's `<Image>` component
4. Falls back to `undefined` if not found (component renders `<img>` instead)

### Image locations
| Path | Purpose | Processed? |
|------|---------|-----------|
| `src/assets/images/` | All project/site images | ✅ Yes (Vite + sharp) |
| `public/images/` | Legacy mirror (still exists) | ❌ No (served as-is) |
| `public/files/` | CV PDF | N/A |
| `public/videos/` | Project videos | ❌ No |

---

## Project Overlay System

### Flow (end to end)

```
1. index.astro frontmatter
   ├─ Extracts projectSlug from HighlightedProjectsSection + MoreProjectsSection
   ├─ Fetches each project's .md from the "projects" collection
   ├─ Filters for sections with component ∈ {ProjTextCardLeft, ProjTextCardRight, ProjTextCardWideImage}
   └─ Passes data to <ProjOverlay>

2. ProjOverlay.astro
   ├─ Creates a fixed overlay div (hidden by default)
   ├─ Maps component names → variant ("left" | "right" | "wide-image-end")
   ├─ Renders own canvas (old-style: gutters, rounded corners, border, shadow)
   ├─ Renders ProjTextCard for each block
   └─ Client-side <script> handles open/close/escape/focus

3. ProjTextCard.astro
   ├─ Renders text with frosted glass panel (bg-white/60 + backdrop-blur-[20px])
   ├─ Parses markdown inline via `marked.parseInline()`
   ├─ Variant "left": heading + left-aligned card with text
   ├─ Variant "right": right-aligned card with text (no heading)
   └─ Variant "wide-image-end": text card + trailing 16:9 image card
```

### Trigger mechanism

Cards with `projectSlug` render a `data-project-overlay-trigger="project-X"` attribute.
Clicking triggers the overlay with matching `data-project-overlay-slug="project-X"`.

### Client-side behavior (in ProjOverlay `<script>`)
- **Open**: Removes `hidden`, sets `aria-hidden="false"`, focuses close button, locks body scroll
- **Close**: Adds `hidden`, sets `aria-hidden="true"`, restores focus to trigger, unlocks scroll
- **Escape key**: Closes active overlay
- **Backdrop click**: Closes overlay

---

## Build & Deploy

### Local development
```bash
pnpm dev          # Start dev server (port 4321)
pnpm build        # Production build → dist/
pnpm preview      # Preview production build
```

### Vercel deployment
- **Build command**: `pnpm install && pnpm build` (via Vercel auto-detection)
- **Output**: `dist/` (static)
- **Env vars**: `SITE_URL` (used by sitemap + config)
- **Lockfile**: Must be in sync (`pnpm install` before pushing if dependencies change)

### Important: after changing `package.json`
Always run `pnpm install` locally and commit the updated `pnpm-lock.yaml`. Vercel uses `--frozen-lockfile` by default — a stale lockfile will fail the build.

---

## Naming Conventions

### Components
- **PascalCase** for all `.astro` files: `BaseCard.astro`, `ProjOverlay.astro`
- Reference/archive files prefixed with `_`: `_REFERENCE_SandboxBlock.astro`

### Projects
- Numbered scheme: `project-1`, `project-2`, … `project-10`
- Numbers are **permanent** — never reused
- Next available: **11**
- Registry: `src/content/PROJECT_REGISTRY.md`

### CSS utilities
- Kebab-case: `base-card-shadow`, `canvas-gradient`, `sandbox-grid-bg`
- Prefixed by domain: `base-card-*`, `canvas-*`, `btn-*`, `label-*`, `img-*`

### Content files
- Pages: kebab-case (`index_content.md`)
- Projects: `project-{number}.md`
