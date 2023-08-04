import { z } from "astro/zod";

const socialLinkSchema = z.object({
	platform: z.string(),
	href: z.string(),
});

export type SocialLink = z.infer<typeof socialLinkSchema>;

export const isSocialLink = (x: any): x is SocialLink =>
	socialLinkSchema.safeParse(x).success;

const navLinkSchema = z.object({
	label: z.string(),
	href: z.string(),
});

export type NavLink = z.infer<typeof navLinkSchema>;

export const isNavLink = (x: any): x is NavLink => navLinkSchema.safeParse(x).success;
