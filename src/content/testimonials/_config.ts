import { defineCollection, z } from "astro:content";

export const testimonials = defineCollection({
	type: "data",
	schema: ({ image }) =>
		z.object({
			author: z.string(),
			authorImage: image().optional(),
			content: z.string(),
		}),
});
