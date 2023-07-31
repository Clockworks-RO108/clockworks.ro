import { Center } from "./center";

import { cn } from "~/lib";

export const Section = ({
	className,
	...props
}: React.ComponentPropsWithoutRef<"span">) => {
	return (
		// <section
		// 	className={cn(
		// 		"grid h-[calc(100vh-82px)] place-content-center lg:h-[calc(100vh-90px)]",
		// 		className,
		// 	)}
		// 	{...props}
		// />
		<Center
			as="section"
			// TODO use dvh if supported
			className={cn("h-[calc(100vh-82px)] lg:h-[calc(100vh-90px)]", className)}
			{...props}
		/>
	);
};
