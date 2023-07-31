import React from "react";

import { cva, type VariantProps } from "class-variance-authority";

import { Flex, type FlexProps } from "./flex";
import type {
	PolymorphicComponentPropsWithRef,
	PolymorphicRef,
} from "./polymorphic-component";

import { cn } from "~/lib";

const rootVariants = cva("gap-4 rounded-lg px-2 pb-2 pt-6 ring-2", {
	variants: {
		variant: {
			default: "border border-border bg-background ring-off-white-900/20",
			alternative: "border-0 bg-[#0D0D0F] ring-off-white-900/20",
		},
		shape: {
			card: "px-2 pb-2 pt-6",
			square: "p-4 lg:p-2",
		},
	},
	defaultVariants: {
		// noBorder: false,
		variant: "default",
		shape: "card",
	},
});

type Props = Partial<VariantProps<typeof rootVariants>>;

type CardRootProps<C extends React.ElementType = "div"> =
	PolymorphicComponentPropsWithRef<C, Props>;

type CardRootComponent = <C extends React.ElementType = "div">(
	props: CardRootProps<C>,
) => React.ReactNode | null;

const Root: CardRootComponent = React.forwardRef(
	<C extends React.ElementType = "div">(
		{ className, variant, shape, ...props }: CardRootProps<C>,
		ref?: PolymorphicRef<C>,
	) => {
		return (
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			//@ts-ignore
			<Flex
				inline
				direction="col"
				alignment="start/between"
				ref={ref}
				className={cn(
					// "gap-4 rounded-lg border border-border bg-background px-2 pb-2 pt-6 ring-2 ring-off-white-900/20",
					rootVariants({ variant, shape }),
					className,
				)}
				{...props}
			/>
		);
	},
);

type CardHeaderProps<C extends React.ElementType = "div"> =
	PolymorphicComponentPropsWithRef<C, FlexProps<C>>;

type CardHeaderComponent = <C extends React.ElementType = "div">(
	props: CardHeaderProps<C>,
) => React.ReactNode | null;

const Header: CardHeaderComponent = React.forwardRef(
	<C extends React.ElementType = "div">(
		{ className, as, ...props }: CardHeaderProps<C>,
		ref: PolymorphicRef<C>,
	) => {
		const Element = as || "div";

		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		//@ts-ignore
		return <Element ref={ref} className={cn("px-4", className)} {...props} />;
	},
);

const cardContentVariants = cva("w-full rounded-md", {
	variants: {
		variant: {
			default: "border border-border",
			alternative: "ring-2 ring-off-white-900/40",
		},
	},
	defaultVariants: {
		variant: "default",
	},
});

type CardContentProps = Partial<VariantProps<typeof cardContentVariants>> &
	React.HTMLAttributes<HTMLDivElement>;

const Content = React.forwardRef<HTMLDivElement, CardContentProps>(
	({ className, variant, ...props }, ref) => {
		return (
			<div
				ref={ref}
				className={cn(cardContentVariants({ variant }), className)}
				{...props}
			/>
		);
	},
);

export const Card = {
	Root,
	Header,
	Content,
};
