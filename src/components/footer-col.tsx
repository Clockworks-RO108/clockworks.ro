import { VStack, Link } from "~/components/ui";
import { isNavLink, type NavLink, type SocialLink } from "~/lib";

type Props = { title: string } & (
	| { links: Readonly<NavLink[]>; withI18n?: boolean }
	| { links: Readonly<SocialLink[]>; withI18n?: undefined }
);

export const FooterCol = ({ title, links, withI18n }: Props) => {
	const className =
		"font-dm-mono uppercase tracking-wider before:mr-2 before:text-brand before:content-['>']";

	return (
		<VStack className="gap-2">
			<h3 className="font-jetbrains-mono text-xs uppercase tracking-wide text-text-secondary">
				{title}
			</h3>
			<VStack as="ul" className="gap-2">
				{links.map((link, i) => (
					<li key={`footer-col.${title}.${i}`}>
						{isNavLink(link) ? (
							<Link.Nav
								href={link.href}
								className={className}
								withI18n={withI18n ?? true}
							>
								{link.label}
							</Link.Nav>
						) : (
							<Link.Social href={link.href} className={className}>
								{link.platform}
							</Link.Social>
						)}
					</li>
				))}
			</VStack>
		</VStack>
	);
};
