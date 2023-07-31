import React from "react";

import { cva } from "class-variance-authority";

import type {
	PolymorphicComponentPropsWithRef,
	PolymorphicRef,
} from "./polymorphic-component";

import { cn } from "~/lib";

type Props = Partial<{
	cols: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
	rows: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
	inline: boolean;
	className?: string;
}>;

type GridProps<C extends React.ElementType = "div"> = PolymorphicComponentPropsWithRef<
	C,
	Props
>;

type GridComponent = <C extends React.ElementType = "div">(
	props: GridProps<C>,
) => React.ReactNode | null;

const gridVariants = cva("", {
	variants: {
		cols: {
			1: "grid-cols-1",
			2: "grid-cols-2",
			3: "grid-cols-3",
			4: "grid-cols-4",
			5: "grid-cols-5",
			6: "grid-cols-6",
			7: "grid-cols-7",
			8: "grid-cols-8",
			9: "grid-cols-9",
			10: "grid-cols-10",
			11: "grid-cols-11",
			12: "grid-cols-12",
		},
		rows: {
			1: "grid-rows-1",
			2: "grid-rows-2",
			3: "grid-rows-3",
			4: "grid-rows-4",
			5: "grid-rows-5",
			6: "grid-rows-6",
			7: "grid-rows-[repeat(7,minmax(0,1fr))]",
			8: "grid-rows-[repeat(8,minmax(0,1fr))]",
			9: "grid-rows-[repeat(9,minmax(0,1fr))]",
		},
		inline: {
			true: "inline-grid",
			false: "grid",
		},
	},
	defaultVariants: {
		cols: 1,
		rows: 1,
		inline: false,
	},
});

export const Grid: GridComponent = React.forwardRef(
	<C extends React.ElementType = "div">(props: GridProps<C>, ref?: PolymorphicRef<C>) => {
		const { children, as, className, cols, rows, inline, ...other } = props;

		const Element = as || "div";

		return (
			<Element
				ref={ref}
				className={cn(gridVariants({ cols, rows, inline }), className)}
				{...other}
			>
				{children}
			</Element>
		);
	},
);
