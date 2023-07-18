import { getCollection } from "astro:content";
import type { CollectionEntry } from "astro:content";
import { isLocale } from "./slugs";
import { locales } from "./locales";
import type { Locale } from "./locales";
import { checkTranslations } from "./check-translations";

import en from "~/content/i18n/en.json";
import ro from "~/content/i18n/ro.json";

checkTranslations(en, ro, "`ro.json`");

let translations: Record<Locale, CollectionEntry<"i18n">["data"]>;
try {
	translations = Object.fromEntries(
		(await getCollection("i18n")).map((t) => [t.id, t.data] as const),
	) as Record<Locale, CollectionEntry<"i18n">["data"]>;
} catch {}

export const useTranslations = (lang: string | undefined) => {
	const locale = isLocale(lang) ? lang : "en";

	return (key: keyof CollectionEntry<"i18n">["data"]) => translations[locale][key];
};

export const generateStaticPaths = () => {
	return locales.map((lang) => ({ params: { lang } as const }));
};
