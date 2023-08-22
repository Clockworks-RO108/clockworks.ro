import { Plus } from "lucide-react";

import { cn } from "~/lib";

export const BorderedContainer = ({
	children,
	className,
	...props
}: React.ComponentPropsWithRef<"div">) => {
	return (
		<div className={cn("relative p-4 ring-1 ring-border", className)} {...props}>
			<Plus className="absolute -right-3 -top-3 h-6 w-6 text-off-white-200" />
			<Plus className="absolute -left-3 -top-3 h-6 w-6 text-off-white-200" />
			<Plus className="absolute -bottom-3 -left-3 h-6 w-6 text-off-white-200" />
			<Plus className="absolute -bottom-3 -right-3 h-6 w-6 text-off-white-200" />

			{children}
		</div>
	);
};
