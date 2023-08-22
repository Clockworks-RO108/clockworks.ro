import { defineCollection, z } from "astro:content";

export const blog = defineCollection({
	type: "content",
	schema: z.object({
		draft: z.boolean(),

		title: z.string(),
		publishedDate: z.date(),
		description: z.string(),
		category: z.string(),
	}),
});
