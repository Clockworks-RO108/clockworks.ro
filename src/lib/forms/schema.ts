import { z } from "astro/zod";

export const formData = z.object({
	url: z.string().url(),
	title: z.string(),
	description: z.string(),
});

export const translatedFormsSchema = z.discriminatedUnion("lang", [
	z.object({ lang: z.literal("en"), en: formData }),
	z.object({ lang: z.literal("ro"), ro: formData }),
	z.object({ lang: z.literal("both"), en: formData, ro: formData }),
]);

export const formsSchema = z
	.object({
		height: z.object({
			xs: z.number(),
			sm: z.number(),
			md: z.number(),
			lg: z.number(),
		}),
	})
	.extend({ data: translatedFormsSchema });

export type Form = z.infer<typeof formsSchema>;
