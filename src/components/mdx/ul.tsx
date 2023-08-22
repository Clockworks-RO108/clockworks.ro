import React from "react";

import { cn } from "~/lib";

export const Ul = React.forwardRef<HTMLUListElement, React.ComponentPropsWithRef<"ul">>(
	({ className, ...props }, ref) => {
		return (
			<ul
				ref={ref}
				className={cn("[list-style-type:'>'] marker:text-brand", className)}
				{...props}
			/>
		);
	},
);
