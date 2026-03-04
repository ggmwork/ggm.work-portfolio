import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import image from "@astrojs/image";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: process.env.SITE_URL,
  integrations: [sitemap(), image()],
  vite: {
    plugins: [tailwindcss()],
  },
});
