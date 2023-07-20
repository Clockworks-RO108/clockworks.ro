import React from "react";
import { cva } from "class-variance-authority";

import { cn } from "~/lib";

import type {
	PolymorphicComponentPropsWithRef,
	PolymorphicRef,
} from "./polymorphic-component";

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

type Alignment = `${Align}/${Justify}`;

type Props = Partial<{
	direction: "row" | "col" | "row-reverse" | "col-reverse";
	wrap: boolean;
	inline: boolean;
	alignment: Alignment;
	className?: string;
}>;

type FlexProps<T extends React.ElementType = "div"> = PolymorphicComponentPropsWithRef<
	T,
	Props
>;

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
		alignment: {
			"start/normal": "items-start justify-normal",
			"start/start": "items-start justify-start",
			"start/end": "items-start justify-end",
			"start/center": "items-start justify-center",
			"start/between": "items-start justify-between",
			"start/around": "items-start justify-around",
			"start/evenly": "items-start justify-evenly",
			"start/stretch": "items-start justify-stretch",

			"end/normal": "items-end justify-normal",
			"end/start": "items-end justify-start",
			"end/end": "items-end justify-end",
			"end/center": "items-end justify-center",
			"end/between": "items-end justify-between",
			"end/around": "items-end justify-around",
			"end/evenly": "items-end justify-evenly",
			"end/stretch": "items-end justify-stretch",

			"center/normal": "items-center justify-normal",
			"center/start": "items-center justify-start",
			"center/end": "items-center justify-end",
			"center/center": "items-center justify-center",
			"center/between": "items-center justify-between",
			"center/around": "items-center justify-around",
			"center/evenly": "items-center justify-evenly",
			"center/stretch": "items-center justify-stretch",

			"baseline/normal": "items-baseline justify-normal",
			"baseline/start": "items-baseline justify-start",
			"baseline/end": "items-baseline justify-end",
			"baseline/center": "items-baseline justify-center",
			"baseline/between": "items-baseline justify-between",
			"baseline/around": "items-baseline justify-around",
			"baseline/evenly": "items-baseline justify-evenly",
			"baseline/stretch": "items-baseline justify-stretch",

			"stretch/normal": "items-stretch justify-normal",
			"stretch/start": "items-stretch justify-start",
			"stretch/end": "items-stretch justify-end",
			"stretch/center": "items-stretch justify-center",
			"stretch/between": "items-stretch justify-between",
			"stretch/around": "items-stretch justify-around",
			"stretch/evenly": "items-stretch justify-evenly",
			"stretch/stretch": "items-stretch justify-stretch",
		},
	},
	defaultVariants: {
		direction: "row",
		wrap: true,
		inline: false,
		alignment: "start/start",
	},
});

export const Flex: FlexComponent = React.forwardRef(
	<T extends React.ElementType<any> = "div">(
		props: FlexProps<T>,
		ref?: PolymorphicRef<T>,
	) => {
		const { children, className, as, direction, wrap, inline, alignment, ...other } =
			props;

		const Element = as || "div";

		return (
			<Element
				ref={ref}
				className={cn(flexVariants({ direction, wrap, inline, alignment }), className)}
				{...other}
			>
				{children}
			</Element>
		);
	},
);
