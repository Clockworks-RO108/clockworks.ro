import React from "react";

import type { CollectionEntry } from "astro:content";
import { minidenticon } from "minidenticons";

import { Card, Center, HStack, Text, VStack } from "~/components/ui";

const Avatar = ({ name, image }: { name: string; image?: ImageMetadata | undefined }) => {
	const avatarImage = React.useMemo(() => {
		if (image) return image.src;

		const uri = encodeURIComponent(minidenticon(`${name}`, 100, 55));

		return `data:image/svg+xml;utf8,${uri}`;
	}, [image, name]);

	return (
		<Center className="relative h-10 w-10 overflow-hidden rounded-full bg-dark-blue-400 p-2">
			<img
				src={avatarImage}
				width={30}
				height={30}
				decoding="async"
				loading="lazy"
				alt={`testimonial author - ${name}`}
				className="pointer-events-none absolute inset-0 h-auto w-full select-none bg-cover bg-center bg-no-repeat"
			/>
		</Center>
	);
};

export const Testimonial = ({
	testimonial,
}: {
	testimonial: CollectionEntry<"testimonials">;
}) => {
	return (
		<Card.Root className="m-2 w-80 max-w-prose p-4" variant="alternative">
			<Text.Small>{testimonial.data.content}</Text.Small>

			<HStack alignment="center/between" className="gap-4">
				<Avatar name={testimonial.data.author} image={testimonial.data.authorImage} />
				<VStack>
					<Text.H3 className="text-base xl:text-lg">{testimonial.data.author}</Text.H3>
				</VStack>
			</HStack>
		</Card.Root>
	);
};
