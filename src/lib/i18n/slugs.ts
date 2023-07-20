import { locales } from "./locales";
import type { Locale } from "./locales";

export const isLocale = (value: string | undefined): value is Locale => {
	if (!value) return false;

	// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
	return locales.includes(value as any);
};

export const toLocale = (value: string | undefined) => {
	if (isLocale(value)) return value;

	return "en";
};

export const slugToLocale = (slug: string) => {
	const baseSegment = slug.split("/")[0];

	if (isLocale(baseSegment)) return baseSegment;

	return "en";
};

export const localizedSlug = (slug: string, locale: Locale | undefined) => {
	const slugLocale = slugToLocale(slug);
	if (slugLocale === locale) return slug;

	locale = locale ?? "en";
	if (slugLocale === slug) return locale;

	if (slugLocale)
		return slug.replace(`${slugLocale}/`, locale ? `${locale}/` : "").replace(/\/$/, "");

	return slug ? `${locale}/${slug}` : locale;
};
