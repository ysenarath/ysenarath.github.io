// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    site: "https://ysenarath.github.io",
    vite: {
        // @ts-ignore — rolldown vs rollup type mismatch between @tailwindcss/vite and Astro's bundled Vite; runtime-compatible
        plugins: [tailwindcss()],
    },
});
