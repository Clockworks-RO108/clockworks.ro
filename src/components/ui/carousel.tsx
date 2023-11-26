import React from "react";

import * as carousel from "@zag-js/carousel";
import { normalizeProps, useMachine } from "@zag-js/react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

import { Button, Card, Center, Grid, VStack } from "~/components/ui";

type Image = {
	src: string;
	width?: number | undefined;
	height?: number | undefined;
};

export const Carousel = ({ images }: { images: Image[] }) => {
	const id = React.useId();
	const [state, send] = useMachine(
		carousel.machine({
			id,
			index: 0,
			slidesPerView: 1,
			loop: true,
			align: "center",
		}),
	);

	if (!images) throw "unreachable";

	const api = carousel.connect(state, send, normalizeProps);

	return (
		<Card.Content variant="alternative" className="relative h-[430px]" {...api.rootProps}>
			<Center
				stretch="all"
				className="overflow-hidden lg:h-[430px]"
				{...api.viewportProps}
			>
				<div className="w-full lg:h-[430px]" {...api.itemGroupProps}>
					{images.map((image, idx) => (
						<div key={idx} className="my-auto" {...api.getItemProps({ index: idx })}>
							<img
								src={image.src}
								decoding="async"
								loading="lazy"
								alt={`gallery-photo-${idx}`}
								className="pointer-events-none mx-auto max-h-[480px] select-none bg-cover bg-center bg-no-repeat"
							/>
						</div>
					))}
				</div>
			</Center>

			<div className="absolute bottom-0">
				{images.length <= 1 ? null : (
					<VStack
						stretch="width"
						alignment="start/end"
						className="relative z-20 px-4 pb-2"
					>
						<Grid className="w-full grid-flow-row grid-cols-3 place-items-center lg:w-fit">
							<div className="flex gap-2">
								<Button size="square" {...api.prevTriggerProps}>
									<ChevronLeft className="lg:h-5 lg:w-5" />
								</Button>
								<Button size="square" {...api.nextTriggerProps}>
									<ChevronRight className="lg:h-5 lg:w-5" />
								</Button>
							</div>

							<Button
								size="square"
								className="max-w-min"
								onClick={() => (api.isAutoplay ? api.pause() : api.play())}
							>
								{api.isAutoplay ? (
									<Pause className="fill-current lg:h-5 lg:w-5" />
								) : (
									<Play className="fill-current lg:h-5 lg:w-5" />
								)}
							</Button>
						</Grid>
					</VStack>
				)}
			</div>
		</Card.Content>
	);
};
