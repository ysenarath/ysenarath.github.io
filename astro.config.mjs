// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import remarkPublic from "./src/lib/pubs/remark-public.mjs";

// https://astro.build/config
export default defineConfig({
    site: "https://ysenarath.com",
    markdown: {
        remarkPlugins: [remarkPublic],
    },
    vite: {
        // @ts-ignore — rolldown vs rollup type mismatch between @tailwindcss/vite and Astro's bundled Vite; runtime-compatible
        plugins: [tailwindcss()],
    },
});
