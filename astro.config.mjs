import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
	vite: {
		resolve: {
			alias: {
				"~": new URL("./src", import.meta.url).pathname,
			},
		},
	},
	integrations: [tailwind()],
});
