import type { Locale } from "./i18n";
import type { SocialLink, NavLink } from "./links";

export const defaultLocale: Locale = "ro" as const;

type SiteInfo = {
	name: string;
	title: string;
	description: string;
	imageSrc: string;
	trademark: string;
	socialLinks: Readonly<SocialLink[]>;
	contact: Readonly<SocialLink[]>;
	rizesqlLink: SocialLink;
};

export const siteInfo = {
	name: "Clockworks",
	title: "",
	description: "",
	imageSrc: "",
	trademark: "2023 Clockworks team ©",
	socialLinks: [
		{
			platform: "facebook",
			href: "https://facebook.com/teamclockworks",
		},
		{
			platform: "instagram",
			href: "https://instagram.com/ro108clockworks",
		},
		{
			platform: "youtube",
			href: "https://youtube.com/@ro108clockworks?sub_confirmation=1",
		},
		{
			platform: "tiktok",
			href: "https://tiktok.com/@team_clockworks_ro108",
		},
	],
	// pentru viitori sincaisti, am facut site-ul asta pe gratis acolo un credit
	// merit si eu. Spor la cafelutsa
	rizesqlLink: {
		platform: "@rizesql",
		href: "https://www.github.com/rizesql",
	},

	contact: [
		{
			platform: "mail: contact@clockworks.ro",
			href: "mailto:contact@clockworks.ro",
		},
		{
			platform: "address: Calea Șerban Vodă 167, București 040205",
			href: "https://maps.app.goo.gl/kQ13efdPB9AYNPH49",
		},
	],
} as const satisfies SiteInfo;

export const navLinks = [
	{
		label: "navLink.about",
		href: "/about",
	},
	{
		label: "navLink.work",
		href: "/projects",
	},
	// TODO Cand avem blog scot comentariul
	// {
	// 	label: "navLink.blog",
	// 	href: "/blog",
	// },
] as const satisfies readonly NavLink[];
