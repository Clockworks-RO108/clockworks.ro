import React from "react";

import { Flex, type FlexProps } from "./flex";
import type {
	PolymorphicComponentPropsWithRef,
	PolymorphicRef,
} from "./polymorphic-component";

export type StackProps<C extends React.ElementType = "div"> =
	PolymorphicComponentPropsWithRef<C, Omit<FlexProps<C>, "direction">>;

type StackComponent = <C extends React.ElementType = "div">(
	props: StackProps<C>,
) => React.ReactNode | null;

export const VStack: StackComponent = React.forwardRef(
	<C extends React.ElementType = "div">(
		props: StackProps<C>,
		ref?: PolymorphicRef<C>,
	) => {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		//@ts-ignore
		return <Flex direction="col" ref={ref} {...props} />;
	},
);

export const HStack: StackComponent = React.forwardRef(
	<C extends React.ElementType = "div">(
		props: StackProps<C>,
		ref?: PolymorphicRef<C>,
	) => {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		//@ts-ignore
		return <Flex direction="row" ref={ref} {...props} />;
	},
);
