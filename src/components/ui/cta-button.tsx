import { ArrowRight } from "lucide-react";

import { Button } from "./button";
import { Link } from "./link";

import { cn } from "~/lib";

export const CTAButton = ({
	href,
	className,
	children,
}: React.PropsWithChildren<{ href: string; className?: string | undefined }>) => {
	return (
		<Button
			variant="alternative"
			as={Link.Nav}
			href={href}
			className={cn(
				"group mx-auto scale-95 rounded-xl transition-transform hover:scale-100 lg:mx-0",
				className,
			)}
		>
			<div className="flex w-full flex-row items-center justify-between gap-4">
				<span>{children}</span>
				<ArrowRight className="transition-transform group-hover:translate-x-2" />
			</div>
		</Button>
	);
};
