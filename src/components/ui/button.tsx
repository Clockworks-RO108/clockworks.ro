import React from "react";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";

import { cn } from "~/lib";
import { Flex } from "./flex";
import type {
	PolymorphicComponentPropsWithRef,
	PolymorphicRef,
} from "./polymorphic-component";

const buttonVariants = cva("gap-x-2 border", {
	variants: {
		variant: {
			primary: "border-border bg-dark-blue-700",
			ghost:
				"border-transparent transition-all hover:border-border hover:bg-dark-blue-700",
		},
		size: {
			small: "rounded-md px-2 py-0.5",
			default: "rounded-md px-3 py-2",
			square: "rounded-md p-2",
			large: "rounded-lg p-3",
		},
		fullWidth: {
			true: "w-full",
			false: "",
		},
	},
	defaultVariants: {
		variant: "primary",
		size: "default",
		fullWidth: false,
	},
});

type Props = Partial<VariantProps<typeof buttonVariants> & { className: string }>;

type ButtonProps<C extends React.ElementType> = PolymorphicComponentPropsWithRef<
	C,
	Props
>;

type ButtonComponent = <C extends React.ElementType = "button">(
	props: ButtonProps<C>,
) => React.ReactNode | null;

export const Button: ButtonComponent = React.forwardRef(
	<C extends React.ElementType = "button">(
		props: ButtonProps<C>,
		ref?: PolymorphicRef<C>,
	) => {
		const { className, size, variant, fullWidth, ...other } = props;

		return (
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			//@ts-ignore
			<Flex
				ref={ref}
				inline
				alignment="center/between"
				className={cn(buttonVariants({ size, variant, fullWidth }), className)}
				{...other}
			/>
		);
	},
);
