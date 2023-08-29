import { defineCollection, reference, z } from "astro:content";

export const blog = defineCollection({
	type: "content",
	schema: ({ image }) =>
		z.object({
			draft: z.boolean(),

			title: z.string(),
			publishedDate: z.date(),
			description: z.string(),
			category: reference("categories"),
			cover: image(),
		}),
});
