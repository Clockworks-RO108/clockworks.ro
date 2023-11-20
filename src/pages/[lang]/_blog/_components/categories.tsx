import React from "react";

import { ChevronUp } from "lucide-react";

import { Collapsible, Link, Text, VStack, HStack, Separator } from "~/components/ui";
import { type Locale, cn } from "~/lib";

export const Categories = ({
	locale,
	categories,
	label,
}: {
	locale: Locale;
	categories: Array<{ slug: string; label: string }>;
	label: string;
}) => {
	const [open, setOpen] = React.useState(true);

	return (
		<>
			<Collapsible.Root open={open} onOpenChange={setOpen}>
				<VStack className="sticky gap-1">
					<Collapsible.Trigger className="w-full">
						<HStack alignment="center/between">
							<Text.Subtitle>{label}</Text.Subtitle>

							<ChevronUp
								className={cn(
									!open && "rotate-180",
									"text-text-secondary transition-transform duration-300",
								)}
							/>
						</HStack>

						<Separator className="mt-2" />
					</Collapsible.Trigger>

					<Collapsible.Content className="w-full">
						<VStack className="gap-2">
							{categories.map((c) => (
								<Link.Nav
									key={c.slug}
									href={`/${locale}/blog/categories/${c.slug}`}
									className="w-full"
								>
									<HStack alignment="center/start" className="gap-4 uppercase">
										<span className="text-brand">&gt;</span>
										<Text.Small>{c.label}</Text.Small>
									</HStack>

									<Separator className="mt-2" />
								</Link.Nav>
							))}
						</VStack>
					</Collapsible.Content>
				</VStack>
			</Collapsible.Root>
		</>
	);
};
