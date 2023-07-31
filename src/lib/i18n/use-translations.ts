import { getCollection } from "astro:content";
import type { CollectionEntry } from "astro:content";
import { locales } from "./locales";
import type { Locale } from "./locales";
import { checkTranslations } from "./check-translations";

import en from "~/content/i18n/en.json";
import ro from "~/content/i18n/ro.json";
import { currentLocaleAtom } from "../current-url";

checkTranslations(en, ro, "`ro.json`");

type Keys = keyof CollectionEntry<"i18n">["data"];

let translations: Record<Locale, CollectionEntry<"i18n">["data"]>;
try {
	const collection = await getCollection("i18n");
	translations = Object.fromEntries(
		collection.map((t) => [t.id, t.data] as const),
	) as Record<Locale, CollectionEntry<"i18n">["data"]>;
} catch {}

// I keep it just in case
// export const useTranslations = (lang: string | undefined) => {
// 	const locale = isLocale(lang) ? lang : "en";
// 	// const locale = currentLocaleAtom.get();

// 	return (key: keyof CollectionEntry<"i18n">["data"]) => translations[locale][key];
// };

export const useTranslations = () => {
	const locale = currentLocaleAtom.get();

	return (key: Keys) => translations[locale][key];
};

export const generateStaticPaths = () => {
	return locales.map((lang) => ({ params: { lang } as const }));
};
