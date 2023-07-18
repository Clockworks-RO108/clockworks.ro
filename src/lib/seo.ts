import type { Locale } from "./i18n";

export type Image = {
	src: string;
	alt: string;
};

export type SEOMetadata = {
	name: string;
	title: string;
	description: string;
	image: Image;
	canonicalURL?: URL | string | null;
	locale?: Locale | undefined;
};

export type OpenGraph = Partial<SEOMetadata> & {
	type?: string;
};

export type Twitter = Partial<SEOMetadata> & {
	handle?: string;
	card?: "summary" | "summary_large_image";
};
