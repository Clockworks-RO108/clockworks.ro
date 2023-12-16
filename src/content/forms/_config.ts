import { defineCollection } from "astro:content";

import { formsSchema } from "~/lib/forms/schema";

export const forms = defineCollection({
	type: "data",
	schema: ({ image }) => formsSchema.extend({ image: image() }),
});
