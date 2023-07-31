import type { LucideIcon } from "lucide-react";

import { Badge, Button, Card, HStack, Text } from "~/components/ui";

export const DepartmentCard = ({
	icon,
	title,
	description,
}: {
	icon: LucideIcon;
	title: string;
	description: string;
}) => {
	const Icon = icon;

	return (
		<Card.Root variant="default" className="col-span-full lg:col-span-1">
			<Card.Header as={HStack} alignment="center/between" className="w-full">
				<Button as="span" size="square" variant="alternative">
					<Icon />
				</Button>

				<Badge>ceva</Badge>
			</Card.Header>

			<HStack className="gap-y-2 px-4 pb-4">
				<Text.H2 className="text-xl text-off-white-200">{title}</Text.H2>
				<Text.P className="text-sm text-text-secondary">{description}</Text.P>
			</HStack>
		</Card.Root>
	);
};
