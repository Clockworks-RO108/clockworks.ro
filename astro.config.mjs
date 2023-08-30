import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

import { remarkReadingTime } from "./src/lib/markdown/reading-time.mjs";

// https://astro.build/config
export default defineConfig({
	redirects: {
		"/": "/ro",
	},
	vite: {
		resolve: {
			alias: {
				"~": new URL("./src", import.meta.url).pathname,
			},
		},
	},

	// TODO change to actual domain; also change in public/robots.txt
	site: "http://localhost:3000",
	integrations: [
		tailwind(),
		react(),

		sitemap({
			i18n: {
				defaultLocale: "ro",
				locales: {
					en: "en",
					ro: "ro",
				},
			},
		}),

		mdx({
			syntaxHighlight: "shiki",
			shikiConfig: { theme: "material-theme-ocean" },
			remarkPlugins: [remarkReadingTime],
		}),
	],
});
