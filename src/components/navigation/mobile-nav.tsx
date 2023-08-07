import { useStore } from "@nanostores/react";
import { Menu, X, ChevronDown } from "lucide-react";

import {
	Flex,
	Button,
	Sheet,
	Dropdown,
	Link,
	VStack,
	HStack,
	Text,
} from "~/components/ui";
import { locales, navLinks, siteInfo } from "~/lib";
import { currentPathnameAtom } from "~/lib/current-url";

export const MobileNav = ({
	labels,
}: {
	labels: { translate: string; navLinks: string[]; madeBy: string };
}) => {
	const pathname = useStore(currentPathnameAtom);

	return (
		<Sheet.Root>
			<Sheet.Trigger asChild>
				<Button size="square" role="navigation">
					<Menu />
				</Button>
			</Sheet.Trigger>

			<Sheet.Content
				side="left"
				className="flex w-screen flex-col justify-between bg-background px-6"
			>
				<VStack className="gap-y-8">
					<Flex stretch="width" direction="row-reverse" alignment="start/between">
						<Sheet.Close asChild>
							<Button size="square">
								<X />
							</Button>
						</Sheet.Close>
					</Flex>

					<Dropdown.Root>
						<Dropdown.Trigger asChild>
							<Button size="large" fullWidth>
								{labels.translate}
								<ChevronDown />
							</Button>
						</Dropdown.Trigger>

						<Dropdown.Content className="mt-2 w-[calc(100vw-3rem)]">
							{locales.map((locale) => (
								<Dropdown.Item
									key={`mobile-nav.locales.${locale}`}
									className="py-2 uppercase"
									asChild
								>
									<Link.Nav withI18n={false} href={`/${locale}${pathname}`}>
										{locale}
									</Link.Nav>
								</Dropdown.Item>
							))}
						</Dropdown.Content>
					</Dropdown.Root>

					<VStack as="nav" className="gap-y-3">
						{navLinks.map((link, i) => (
							<Link.Nav
								href={link.href}
								className="font-dm-mono text-3xl font-semibold uppercase tracking-wider"
								key={`mobile-nav.nav-links.${i}`}
							>
								{labels.navLinks[i]}
							</Link.Nav>
						))}
					</VStack>

					<VStack className="gap-y-4">
						<Text.Subtitle>Social</Text.Subtitle>

						{siteInfo.socialLinks.map((link, i) => (
							<Link.Social
								href={link.href}
								key={`mobile-nav.social-links.${i}`}
								className="font-dm-mono uppercase tracking-wider"
							>
								{link.platform}
							</Link.Social>
						))}
					</VStack>
				</VStack>

				<HStack alignment="baseline/between">
					<Text.Tiny>{siteInfo.trademark}</Text.Tiny>

					<Text.Tiny>
						<Link.Social href={siteInfo.rizesqlLink.href}>
							{labels.madeBy} {siteInfo.rizesqlLink.platform}
						</Link.Social>
					</Text.Tiny>
				</HStack>
			</Sheet.Content>
		</Sheet.Root>
	);
};
