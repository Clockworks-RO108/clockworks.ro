type SocialLink = {
	platform: string;
	href: string;
	// text: string;
	// icon: string;
};

type SiteInfo = {
	name: string;
	title: string;
	description: string;
	imageSrc: string;
	socialLinks: Readonly<SocialLink[]>;
	rizesqlLink: SocialLink;
};

export const siteInfo = {
	name: "Clockworks",
	title: "",
	description: "",
	imageSrc: "",
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
} as const satisfies SiteInfo;

export type NavLink = {
	label: string;
	href: string;
};

export const navLinks = [
	{
		label: "navLink.about",
		href: "/about",
	},
	{
		label: "navLink.work",
		href: "/works",
	},
	{
		label: "navLink.blog",
		href: "/blog",
	},
] as const;
