import type { Image } from "./seo";

type SocialLink = {
	platform: string;
	href: string;
	me?: string;
	text: string;
	icon: string;
};

type SiteInfo = {
	name: string;
	title: string;
	description: string;
	image: Image;
	socialLinks: Readonly<SocialLink[]>;
};

export const siteInfo: SiteInfo = {
	name: "Clockworks",
	title: "",
	description: "",
	image: {
		src: "",
		alt: "",
	},
	socialLinks: [],
} as const;
