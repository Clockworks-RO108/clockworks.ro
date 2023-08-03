import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	redirects: {
		"/": "/en",
	},
	vite: {
		resolve: {
			alias: {
				"~": new URL("./src", import.meta.url).pathname,
			},
		},
	},
	experimental: {
		assets: true,
	},
	// TODO change to actual domain; also change in public/robots.txt
	site: "http://localhost:3000",
	integrations: [
		tailwind(),
		react(),
		sitemap({
			i18n: {
				defaultLocale: "en",
				locales: {
					en: "en",
					ro: "ro",
				},
			},
		}),
	],
});
