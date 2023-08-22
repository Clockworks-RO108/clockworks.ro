import { defineCollection, z } from "astro:content";

export const projects = defineCollection({
  type: "content",
  schema: z.object({
    draft: z.boolean(),

    name: z.string(),
    year: z.number(),
    description: z.string()
  })
})