import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

import formsgen from "./src/lib/forms/plugin";
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

	prefetch: true,

	site: "https://clockworks.ro",
	integrations: [
		tailwind(),
		react(),

		formsgen(),
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
