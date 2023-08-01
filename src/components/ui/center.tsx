import React from "react";

import { Flex, type FlexProps } from "./flex";
import type {
	PolymorphicComponentPropsWithRef,
	PolymorphicRef,
} from "./polymorphic-component";

type CenterProps<C extends React.ElementType = "div"> = PolymorphicComponentPropsWithRef<
	C,
	Omit<FlexProps<C>, "alignment">
>;

type CenterComponent = <C extends React.ElementType = "div">(
	props: CenterProps<C>,
) => React.ReactNode | null;

export const Center: CenterComponent = React.forwardRef(
	<C extends React.ElementType = "div">(
		props: CenterProps<C>,
		ref?: PolymorphicRef<C>,
	) => {
		return (
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			//@ts-ignore
			<Flex alignment="center/center" ref={ref} {...props} />
		);
	},
);
