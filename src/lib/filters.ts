import type { CollectionEntry } from "astro:content";

export const filterByCategory =
	(lang: string, category: string) => (entry: CollectionEntry<"blog">) =>
		entry.slug.startsWith(`${lang}/`) &&
		entry.data.category.id === category &&
		entry.data.draft === false;

export const filterBlog = (lang: string) => (entry: CollectionEntry<"blog">) =>
	entry.slug.startsWith(`${lang}/`) && entry.data.draft === false;
