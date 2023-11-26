import React from "react";

import { cva, type VariantProps } from "class-variance-authority";

import { Flex } from "./flex";
import type {
	PolymorphicComponentPropsWithRef,
	PolymorphicRef,
} from "./polymorphic-component";

import { cn } from "~/lib";

const buttonVariants = cva("gap-x-2 border ring-2", {
	variants: {
		variant: {
			primary: "border-border bg-dark-blue-700 ring-off-white-900/20",
			darker: "border-border bg-dark-blue-900 ring-off-white-900/20",
			ghost:
				"border-transparent ring-transparent transition-all hover:border-border hover:bg-dark-blue-700 hover:ring-off-white-900/20",
			alternative:
				"border-off-white-200 bg-off-white-100 font-medium text-off-white-900 ring-off-white-900/20",
		},
		size: {
			small: "rounded-md px-2 py-0.5",
			default: "rounded-md px-3 py-2",
			wide: "rounded-md px-6 py-1",
			square: "rounded-md p-2",
			large: "rounded-lg p-3",
		},
		fullWidth: {
			true: "w-full",
			false: "",
		},
		rounded: {
			true: "rounded-full",
			false: "",
		},
	},
	defaultVariants: {
		variant: "primary",
		size: "default",
		fullWidth: false,
		rounded: false,
	},
});

type Props = Partial<
	VariantProps<typeof buttonVariants> & { className?: string | undefined }
>;

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
		const { className, size, variant, fullWidth, rounded, ...other } = props;

		return (
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			//@ts-ignore
			<Flex
				ref={ref}
				inline
				alignment="center/between"
				className={cn(buttonVariants({ size, variant, fullWidth, rounded }), className)}
				{...other}
			/>
		);
	},
);
