/**
 * resolve-image.ts
 * ─────────────────────────────────────────────────────────────────
 * Eagerly globs every image in src/assets/images/ at build time
 * and exposes a lookup by the path fragment that content markdown
 * already uses (e.g. "/images/headshot.png").
 *
 * Usage (in an Astro component's frontmatter):
 *   import { resolveImage } from '../../lib/resolve-image';
 *   const img = resolveImage('/images/projects/foo.webp');
 *   // → returns the Vite-processed ImageMetadata, or undefined
 * ─────────────────────────────────────────────────────────────────
 */

// Eager glob: resolved at build time, zero runtime cost.
// Keys look like: "/src/assets/images/projects/project-six/storm_shots/storm_shots (1).webp"
const imageModules = import.meta.glob<{ default: ImageMetadata }>(
    '/src/assets/images/**/*.{png,jpg,jpeg,webp,avif,gif,svg}',
    { eager: true },
);

/**
 * Given a public-style path (e.g. "/images/headshot.png"),
 * return the Vite-resolved ImageMetadata for use with <Image />.
 *
 * Falls back to undefined if the image isn't found in src/assets/.
 */
export function resolveImage(publicPath: string): ImageMetadata | undefined {
    if (!publicPath || typeof publicPath !== 'string') return undefined;

    // Content markdown uses paths like "/images/foo.webp"
    // The glob keys are "/src/assets/images/foo.webp"
    // So we replace the leading "/images/" with "/src/assets/images/"
    const normalized = publicPath
        .replace(/^\/public\/images\//, '/src/assets/images/')
        .replace(/^\/images\//, '/src/assets/images/');

    const mod = imageModules[normalized];
    return mod?.default;
}
