import { getCollection, type CollectionEntry, getDataEntryById } from "astro:content";

import type { Locale } from "../i18n";

export * as formsApi from "./api";

const mapData = (locale: Locale) => (form: CollectionEntry<"forms">) => {
	return {
		id: form.id,
		height: form.data.height,
		image: form.data.image,
		...((
			form.data.data as {
				[K in Locale]: { url: string; title: string; description: string };
			}
		)[locale] ?? { url: null }),
	};
};

export const getAll = async (locale: Locale) =>
	(await getCollection("forms"))
		.filter((form) => form.data.data.lang === "both" || form.data.data.lang == locale)
		.map(mapData(locale));

export const getById = async (id: CollectionEntry<"forms">["id"], locale: Locale) =>
	mapData(locale)(await getDataEntryById("forms", id));
