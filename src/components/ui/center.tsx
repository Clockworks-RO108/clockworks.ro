import React from "react";
import type {
	PolymorphicComponentPropsWithRef,
	PolymorphicRef,
} from "./polymorphic-component";
import { Direction, Flex } from "./flex";

type Props = Partial<{
	inline: boolean;
	className?: string;
	direction: Direction;
}>;

type CenterProps<C extends React.ElementType = "div"> = PolymorphicComponentPropsWithRef<
	C,
	Props
>;

type CenterComponent = <C extends React.ElementType = "div">(
	props: CenterProps<C>,
) => React.ReactNode | null;

export const Center: CenterComponent = React.forwardRef(
	<C extends React.ElementType = "div">(
		props: CenterProps<C>,
		ref?: PolymorphicRef<C>,
	) => {
		const { className, children, direction, ...other } = props;

		return (
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			//@ts-ignore
			<Flex
				direction={direction}
				alignment="center/center"
				ref={ref}
				className={className}
				{...other}
			>
				{children}
			</Flex>
		);
	},
);
