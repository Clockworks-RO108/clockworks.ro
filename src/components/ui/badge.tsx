import React from "react";

import { type VariantProps, cva } from "class-variance-authority";

import { Flex } from "./flex";
import type {
	PolymorphicComponentPropsWithRef,
	PolymorphicRef,
} from "./polymorphic-component";

import { cn } from "~/lib";

const badgeVariants = cva(
	"ml-2 rounded-full px-[6px] text-[0.7rem] font-medium uppercase tracking-wide ring-2",
	{
		variants: {
			color: {
				neutral: "bg-off-white-900 text-off-white-300 ring-off-white-600",
				brand: "bg-brand text-background ring-brand-secondary/30",
			},
		},
		defaultVariants: {
			color: "neutral",
		},
	},
);

type BadgeProps<C extends React.ElementType = "span"> =
	PolymorphicComponentPropsWithRef<C> & VariantProps<typeof badgeVariants>;

type BadgeComponent = <C extends React.ElementType = "span">(
	props: BadgeProps<C>,
) => React.ReactNode | null;

export const Badge: BadgeComponent = React.forwardRef(
	<C extends React.ElementType = "span">(
		{ children, className, color, ...props }: BadgeProps<C>,
		ref?: PolymorphicRef<C>,
	) => {
		return (
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			//@ts-ignore
			<Flex
				as="span"
				ref={ref}
				inline
				alignment="center/center"
				className={cn(badgeVariants({ color }), className)}
				{...props}
			>
				{children}
			</Flex>
		);
	},
);
