import { getCollection } from "astro:content";
import type { CollectionEntry } from "astro:content";


import { checkTranslations } from "./check-translations";
import { locales } from "./locales";
import type { Locale } from "./locales";
import { isLocale } from "./slugs";

import en from "~/content/i18n/en.json";
import ro from "~/content/i18n/ro.json";

checkTranslations(ro, en, "`en.json`");

type Keys = keyof CollectionEntry<"i18n">["data"];

let translations: Record<Locale, CollectionEntry<"i18n">["data"]>;
try {
	const collection = await getCollection("i18n");
	translations = Object.fromEntries(
		collection.map((t) => [t.id, t.data] as const),
	) as Record<Locale, CollectionEntry<"i18n">["data"]>;
} catch { }


export const getTranslations = (lang: string | undefined) => {
	const locale = isLocale(lang) ? lang : "ro";

	return (key: Keys) => translations[locale][key];
};

export const generateStaticPaths = () => {
	return locales.map((lang) => ({ params: { lang } as const }));
};
