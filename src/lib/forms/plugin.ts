import { type AstroIntegration } from "astro";
import { green } from "kleur/colors";
import puppeteer, { type Browser } from "puppeteer";

import { processFile } from "./gen-form-data";

const genForms = (): AstroIntegration => {
	let browserPromise: Promise<Browser>;

	return {
		name: "@clockworks/formsgen",
		hooks: {
			"astro:config:setup": () => {
				browserPromise = puppeteer.launch({ headless: "new" });
			},

			"astro:build:start": async ({ logger }) => {
				const browser = await browserPromise;
				const files = import.meta.glob("/src/content/forms/[!_]*.json", {
					eager: true,
					import: "default",
				});

				const filesCount = Object.keys(files).length;
				const handler = processFile(browser, logger);

				logger.info("Generating forms...");
				const start = performance.now();

				await Promise.all(
					Object.entries(files).map((entry, index) => handler(entry, index, filesCount)),
				);

				await browser.close();

				const end = performance.now();
				const timespan = ((end - start) / 1000.0).toFixed(2);

				logger.info(green(`✓ Completed in ${timespan}s.`));
			},
		},
	};
};

export default genForms;
