import { useStore } from "@nanostores/react";
import { Menu, X, ChevronDown } from "lucide-react";

import { Flex, Button, Sheet, Dropdown, NavLink } from "~/components/ui";
import { currentPathnameAtom } from "~/lib/current-url";
import { locales } from "~/lib";

export const MobileNav = ({ children }: { children: React.ReactNode }) => {
	const pathname = useStore(currentPathnameAtom);

	return (
		<Sheet.Root>
			<Sheet.Trigger asChild>
				<Button size="square">
					<Menu />
				</Button>
			</Sheet.Trigger>

			<Sheet.Content side="left" className="w-screen bg-background px-6">
				<Flex direction="col" className="gap-y-8">
					<Flex direction="row-reverse" alignment="start/between" className="w-full">
						<Sheet.Close asChild>
							<Button size="square">
								<X />
							</Button>
						</Sheet.Close>
					</Flex>

					<Dropdown.Root>
						<Dropdown.Trigger asChild>
							<Button size="large" fullWidth>
								Languages
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
									<NavLink withI18n={false} href={`/${locale}${pathname}`}>
										{locale}
									</NavLink>
								</Dropdown.Item>
							))}
						</Dropdown.Content>
					</Dropdown.Root>

					{children}
				</Flex>
			</Sheet.Content>
		</Sheet.Root>
	);
};
