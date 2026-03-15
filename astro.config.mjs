import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: process.env.SITE_URL,
  build: {
    inlineStylesheets: "auto",
  },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
