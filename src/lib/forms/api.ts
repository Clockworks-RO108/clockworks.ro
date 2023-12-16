import { getCollection, type CollectionEntry, getDataEntryById } from "astro:content";

import type { Locale } from "../i18n";

export * as formsApi from "./api";

const mapData = (locale: Locale) => (form: CollectionEntry<"forms">) => ({
	id: form.id,
	height: form.data.height,
	image: form.data.image,
	...form.data[locale],
});

export const getAll = async (locale: Locale) =>
	(await getCollection("forms")).map(mapData(locale));

export const getById = async (id: CollectionEntry<"forms">["id"], locale: Locale) =>
	mapData(locale)(await getDataEntryById("forms", id));
