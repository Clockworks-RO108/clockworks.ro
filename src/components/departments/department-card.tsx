import type { LucideIcon } from "lucide-react";

import { Button, Card, HStack, Text } from "~/components/ui";

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
			<Card.Header as={HStack} stretch="width" alignment="center/between">
				<Button as="span" size="square" variant="alternative">
					<Icon />
				</Button>
			</Card.Header>

			<HStack className="gap-y-2 px-4 pb-4">
				<Text.H3 className="text-off-white-200">{title}</Text.H3>
				<Text.Small>{description}</Text.Small>
			</HStack>
		</Card.Root>
	);
};
