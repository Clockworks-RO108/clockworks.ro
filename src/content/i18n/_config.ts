import { defineCollection, z } from "astro:content";

import ro from "./ro.json";

type Keys = Array<keyof typeof ro>;
type Content = {
	[K in Keys[number]]: z.ZodString;
};

const keys = Object.keys(ro) as Keys;
const i18nSchema = z.object(
	keys.reduce((acc: Content, curr: Keys[number]) => {
		acc[curr] = z.string();
		return acc;
	}, {} as Content),
);

export const i18n = defineCollection({
	type: "data",
	schema: i18nSchema,
});
