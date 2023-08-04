import React from "react";

import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

import { Badge, Button, Card, Center, Grid, HStack, VStack } from "~/components/ui";
import { cn, useInterval } from "~/lib";

export const Carousel = ({ images }: { images: ImageMetadata[] }) => {
	const imagesCount = images.length;

	const [play, setPlay] = React.useState(true);
	const [currentPhoto, setCurrentPhoto] = React.useState(0);

	const next = () => setCurrentPhoto((idx) => (idx === imagesCount - 1 ? 0 : idx + 1));

	const previous = () =>
		setCurrentPhoto((idx) => (idx === 0 ? imagesCount - 1 : idx - 1));

	const togglePlay = () => setPlay((play) => (play === true ? false : true));

	useInterval(() => {
		if (imagesCount <= 1) return;
		if (play) next();
	}, 5000);

	return (
		<Card.Root
			variant="alternative"
			shape="square"
			className="col-span-full lg:col-span-7"
		>
			<Card.Content variant="alternative" className="relative aspect-square">
				<Center
					stretch="all"
					className="pointer-events-none absolute inset-0 select-none bg-cover bg-center bg-no-repeat"
				>
					<img
						src={images[currentPhoto]?.src}
						width={images[currentPhoto]?.width}
						height={images[currentPhoto]?.height}
						decoding="async"
						loading="lazy"
						alt={`gallery-photo-${currentPhoto}`}
					/>
				</Center>

				{imagesCount <= 1 ? null : (
					<VStack stretch="all" alignment="start/end" className="relative z-20 pb-2">
						<Grid className="w-full grid-flow-row grid-cols-3 place-items-center lg:w-fit">
							<HStack>
								<Button variant="ghost" size="square" onClick={previous}>
									<ChevronLeft className="lg:h-5 lg:w-5" />
								</Button>
								<Button variant="ghost" size="square" onClick={next}>
									<ChevronRight className="lg:h-5 lg:w-5" />
								</Button>
							</HStack>

							<Badge className="text-sm">
								{new Array(imagesCount).fill(0).map((_, i) => (
									<span
										key={`carousel-count-${i}`}
										className={cn("select-none", i === currentPhoto && "text-brand")}
									>
										•
									</span>
								))}
							</Badge>

							<Button
								variant="ghost"
								size="square"
								onClick={togglePlay}
								className="max-w-min"
							>
								{play ? (
									<Pause className="fill-current lg:h-5 lg:w-5" />
								) : (
									<Play className="fill-current lg:h-5 lg:w-5" />
								)}
							</Button>
						</Grid>
						{/* </HStack> */}
					</VStack>
				)}
			</Card.Content>
		</Card.Root>
	);
};
