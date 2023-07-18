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
	// TODO change to designated type when adding i18n
	locale?: string | undefined;
};

export type OpenGraph = Partial<SEOMetadata> & {
	type?: string;
};

export type Twitter = Partial<SEOMetadata> & {
	handle?: string;
	card?: "summary" | "summary_large_image";
};
