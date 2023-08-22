import type { CollectionEntry } from "astro:content";

export const sortByDate = (posts: Array<CollectionEntry<"blog">>) =>
	posts.sort((a, b) => b.data.publishedDate.getTime() - a.data.publishedDate.getTime());

export const sortByYear = (projects: Array<CollectionEntry<"projects">>) =>
	projects.sort((a, b) => b.data.year - a.data.year);
