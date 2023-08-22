import React from "react";

import {
	type MotionValue,
	motion,
	useMotionTemplate,
	useMotionValue,
} from "framer-motion";

import { BorderedContainer } from "~/components/bordered-container";
import { Link, VStack } from "~/components/ui";

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

const generateRandomString = (length: number) => {
	let result = "";

	for (let i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * characters.length));
	}

	return result;
};

export const ProjectCard = ({
	href,
	children,
}: React.PropsWithChildren<{ href?: string }>) => {
	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);
	const [randomString, setRandomString] = React.useState("");

	React.useEffect(() => {
		const str = generateRandomString(1500);
		setRandomString(str);
	}, []);

	function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
		const { left, top } = currentTarget.getBoundingClientRect();
		mouseX.set(clientX - left);
		mouseY.set(clientY - top);

		const str = generateRandomString(1500);
		setRandomString(str);
	}

	return (
		<BorderedContainer>
			<Link.Nav
				disabled={!href}
				href={`${href ?? ""}`}
				className="relative flex aspect-square h-full w-full items-center justify-center bg-transparent p-0.5"
			>
				<div
					onMouseMove={onMouseMove}
					className="group relative flex h-full w-full items-center justify-center overflow-hidden rounded-sm bg-transparent"
				>
					<CardPattern mouseX={mouseX} mouseY={mouseY} randomString={randomString} />
					<div className="relative z-10 flex items-center justify-center">
						<div className="relative flex h-64 w-64 items-center justify-center rounded-full text-4xl font-bold text-white">
							<div className="absolute h-full w-full rounded-full bg-background/[0.8] blur-sm" />

							<VStack alignment="center/between" className="z-20">
								{children}
							</VStack>
						</div>
					</div>
				</div>
			</Link.Nav>
		</BorderedContainer>
	);
};

function CardPattern({
	mouseX,
	mouseY,
	randomString,
}: {
	mouseX: MotionValue<number>;
	mouseY: MotionValue<number>;
	randomString: string;
}) {
	const maskImage = useMotionTemplate`radial-gradient(
		250px at ${mouseX}px ${mouseY}px, 
		hsl(var(--background)) 20%,
		hsla(var(--background) / 0.30),
		transparent)`;
	const style = { maskImage, WebkitMaskImage: maskImage };

	return (
		<div className="pointer-events-none">
			<div className="absolute inset-0 rounded-2xl [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50"></div>
			<motion.div
				className="absolute inset-0 rounded-2xl bg-gradient-to-r from-brand to-brand-secondary opacity-0 backdrop-blur-xl transition duration-500 group-hover:opacity-100"
				style={style}
			/>
			<motion.div className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay group-hover:opacity-100">
				<p className="absolute inset-x-0 h-full whitespace-pre-wrap break-words font-jetbrains-mono text-xs font-bold text-foreground transition duration-500">
					{randomString}
				</p>
			</motion.div>
		</div>
	);
}
