import { Plus } from "lucide-react";

import { cn } from "~/lib";

export const BorderedContainer = ({
	children,
	className,
	...props
}: React.ComponentPropsWithRef<"div">) => {
	return (
		<div className={cn("relative p-4 ring-1 ring-border", className)} {...props}>
			<Plus className="absolute -right-2 -top-2 h-4 w-4 text-off-white-200" />
			<Plus className="absolute -left-2 -top-2 h-4 w-4 text-off-white-200" />
			<Plus className="absolute -bottom-2 -left-2 h-4 w-4 text-off-white-200" />
			<Plus className="absolute -bottom-2 -right-2 h-4 w-4 text-off-white-200" />

			{children}
		</div>
	);
};
