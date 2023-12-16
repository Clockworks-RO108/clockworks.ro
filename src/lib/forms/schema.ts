import { z } from "astro/zod";

export const formData = z.object({
	url: z.string().url(),
	title: z.string(),
	description: z.string(),
});

export const formsSchema = z.object({
	en: formData,
	ro: formData,

	height: z.object({
		xs: z.number(),
		sm: z.number(),
		md: z.number(),
		lg: z.number(),
	}),
});

export type Form = z.infer<typeof formsSchema>;
