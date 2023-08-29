import React from "react";

import type { MarkdownHeading } from "astro";
import { ChevronUp } from "lucide-react";

import { Collapsible, HStack, Link, Text, VStack } from "~/components/ui";
import { cn } from "~/lib";

export const TableOfContents = ({
	headings: _headings,
	label,
	defaultOpen,
}: {
	headings: MarkdownHeading[];
	label: string;
	defaultOpen: boolean;
}) => {
	const headings = _headings.filter((h) => h.depth <= 3);

	const [open, setOpen] = React.useState(defaultOpen);

	return (
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
				</Collapsible.Trigger>

				<Collapsible.Content>
					<VStack className="gap-2">
						{headings.map((heading) => (
							<Link.Nav
								href={`#${heading.slug}`}
								className={indent[heading.depth as 1 | 2 | 3]}
								key={`table-of-contents.${heading.slug}.${heading.depth}`}
							>
								<span className="text-brand">&gt;</span> {heading.text}
							</Link.Nav>
						))}
					</VStack>
				</Collapsible.Content>
			</VStack>
		</Collapsible.Root>
	);
};

const indent = {
	1: "mx-0",
	2: "mx-4",
	3: "mx-8",
};
