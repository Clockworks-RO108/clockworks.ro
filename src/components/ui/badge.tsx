import React from "react";
import { Flex } from "./flex";
import type {
	PolymorphicComponentPropsWithRef,
	PolymorphicRef,
} from "./polymorphic-component";

type BadgeProps<C extends React.ElementType = "span"> =
	PolymorphicComponentPropsWithRef<C>;

type BadgeComponent = <C extends React.ElementType = "span">(
	props: BadgeProps<C>,
) => React.ReactNode | null;

export const Badge: BadgeComponent = React.forwardRef(
	<C extends React.ElementType = "span">(
		{ children, ...props }: BadgeProps<C>,
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
				className="ml-2 rounded-full bg-off-white-900 px-[6px] text-[0.7rem] font-medium uppercase tracking-wide text-off-white-300 ring-2 ring-off-white-600"
				{...props}
			>
				{children}
			</Flex>
		);
	},
);
