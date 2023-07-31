import { Center } from "./center";

import { cn } from "~/lib";

export const Section = ({
	className,
	...props
}: React.ComponentPropsWithoutRef<"span">) => {
	return (
		<Center
			as="section"
			className={cn("h-[calc(100vh-82px)] lg:h-[calc(100vh-90px)]", className)}
			{...props}
		/>
	);
};
