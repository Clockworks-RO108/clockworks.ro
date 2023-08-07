import { VStack, Link, Text } from "~/components/ui";
import { isNavLink, type NavLink, type SocialLink } from "~/lib";

type Props = { title: string } & (
	| { links: Readonly<NavLink[]>; withI18n?: boolean }
	| { links: Readonly<SocialLink[]>; withI18n?: undefined }
);

export const FooterCol = ({ title, links, withI18n }: Props) => {
	const linkStyles =
		"font-dm-mono uppercase tracking-wider before:mr-2 before:text-brand before:content-['>']";

	return (
		<VStack className="gap-2">
			<Text.Subtitle className="text-xs">{title}</Text.Subtitle>
			<VStack as="ul" className="gap-2">
				{links.map((link, i) => (
					<li key={`footer-col.${title}.${i}`}>
						{isNavLink(link) ? (
							<Link.Nav
								href={link.href}
								className={linkStyles}
								withI18n={withI18n ?? true}
							>
								{link.label}
							</Link.Nav>
						) : (
							<Link.Social href={link.href} className={linkStyles}>
								{link.platform}
							</Link.Social>
						)}
					</li>
				))}
			</VStack>
		</VStack>
	);
};
