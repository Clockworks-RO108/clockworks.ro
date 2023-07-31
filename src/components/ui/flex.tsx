import React from "react";

import { cva } from "class-variance-authority";

import type {
	PolymorphicComponentPropsWithRef,
	PolymorphicRef,
} from "./polymorphic-component";

import { cn } from "~/lib";

export type Direction = "row" | "col" | "row-reverse" | "col-reverse";

type Justify =
	| "normal"
	| "start"
	| "end"
	| "center"
	| "between"
	| "around"
	| "evenly"
	| "stretch";

type Align = "start" | "end" | "center" | "baseline" | "stretch";

export type Alignment = `${Align}/${Justify}`;

type Props = Partial<{
	direction: Direction;
	wrap: boolean;
	inline: boolean;
	alignment: Alignment;
	className?: string;
}>;

export type FlexProps<T extends React.ElementType = "div"> =
	PolymorphicComponentPropsWithRef<T, Props>;

type FlexComponent = <T extends React.ElementType = "div">(
	props: FlexProps<T>,
) => React.ReactNode | null;

const flexVariants = cva("", {
	variants: {
		inline: {
			true: "inline-flex",
			false: "flex",
		},
		direction: {
			row: "flex-row",
			col: "flex-col",
			"row-reverse": "flex-row-reverse",
			"col-reverse": "flex-col-reverse",
		},
		wrap: {
			true: "flex-wrap",
			false: "flex-nowrap",
		},
		align: {
			start: "items-start",
			end: "items-end",
			center: "items-center",
			baseline: "items-baseline",
			stretch: "items-stretch",
		},
		justify: {
			normal: "justify-normal",
			start: "justify-start",
			end: "justify-end",
			center: "justify-center",
			between: "justify-between",
			around: "justify-around",
			evenly: "justify-evenly",
			stretch: "justify-stretch",
		},
	},
	defaultVariants: {
		direction: "row",
		wrap: true,
		inline: false,
	},
});

export const Flex: FlexComponent = React.forwardRef(
	<T extends React.ElementType<any> = "div">(
		props: FlexProps<T>,
		ref?: PolymorphicRef<T>,
	) => {
		const {
			children,
			className,
			as,
			direction,
			wrap,
			inline,
			alignment = "start/start",
			...other
		} = props;

		const Element = as || "div";
		const [align, justify] = alignment?.split("/") as [Align, Justify];

		return (
			<Element
				ref={ref}
				className={cn(
					flexVariants({ direction, wrap, inline, align, justify }),
					className,
				)}
				{...other}
			>
				{children}
			</Element>
		);
	},
);
