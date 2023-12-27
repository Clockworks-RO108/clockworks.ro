import fs from "node:fs/promises";
import path from "node:path";

import type { AstroIntegrationLogger } from "astro";
import { z } from "astro/zod";
import { dim } from "kleur/colors";
import { type Browser, KnownDevices } from "puppeteer";

import { translatedFormsSchema } from "./schema";

type Breakpoint = "xs" | "sm" | "md" | "lg";

type DeviceData = {
	width: number;
	height: number;
	isMobile?: boolean;
};

const baseFormSchema = z.object({
	data: translatedFormsSchema,
	image: z.string(),
});

const devices = [
	{ size: "xs", ...KnownDevices["iPhone 6"].viewport },
	{ size: "sm", ...KnownDevices["iPhone 12"].viewport },
	{ size: "md", ...KnownDevices["iPad"].viewport },
	{
		size: "lg",
		width: 1920,
		height: 1080,
		isMobile: false,
	},
] as const satisfies ReadonlyArray<DeviceData & { size: Breakpoint }>;

const generateHeight = async (url: string, browser: Browser) => {
	const heights = {} as Record<Breakpoint, number>;

	for (const device of devices) {
		const page = await browser.newPage();
		await page.setViewport(device);
		await page.goto(`${url}?usp=sf_link`);

		const height = await page.evaluate(() => {
			return document.querySelector("body > div")?.clientHeight;
		});

		heights[device.size] = height!;
	}

	return heights;
};

const generateContent = (
	content: z.infer<typeof baseFormSchema>,
	height: Record<Breakpoint, number>,
) => JSON.stringify({ ...content, height }, null, 2);

export const processFile =
	(browser: Browser, logger: AstroIntegrationLogger) =>
	async (entry: [string, unknown], index: number, total: number) => {
		const start = performance.now();
		const [filename, rawContent] = entry;

		const initialContent = baseFormSchema.safeParse(rawContent);
		if (!initialContent.success) {
			logger.error(initialContent.error.toString());
			return;
		} else {
			const data = initialContent.data.data;
			// prettier-ignore
			const url =
				data.lang === "both" ? data.en.url :
				data.lang === "en" ? data.en.url :
				data.ro.url;

			const height = await generateHeight(url, browser);
			const content = generateContent(initialContent.data, height);

			const file = path.join(process.cwd(), filename);

			await fs.writeFile(file, content);

			const end = performance.now();

			const timespan = ((end - start) / 1000.0).toFixed(2);

			logger.info(
				`/content/forms${filename} ${dim(`(${timespan}s) (${index + 1}/${total})`)}`,
			);
		}
	};
