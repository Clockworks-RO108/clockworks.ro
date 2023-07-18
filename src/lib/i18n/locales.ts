import { getCollection } from "astro:content";
import type { CollectionEntry } from "astro:content";

export type Locale = CollectionEntry<"i18n">["id"];
export let locales: Locale[] = [];
try {
	locales = (await getCollection("i18n")).map(({ id }) => id);
} catch {}
