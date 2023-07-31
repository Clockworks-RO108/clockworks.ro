import { type VariantProps, cva } from "class-variance-authority";

import { cn } from "~/lib";

// TODO change text component based on used text styles

const gradientVariants = cva("", {
	variants: {
		gradient: {
			none: "",
			"to-top": "bg-gradient-to-t bg-clip-text text-transparent",
			"to-top-right": "bg-gradient-to-tr bg-clip-text text-transparent",
			"to-top-left": "bg-gradient-to-tl bg-clip-text text-transparent",
			"to-right": "bg-gradient-to-r bg-clip-text text-transparent",
			"to-bottom": "bg-gradient-to-b bg-clip-text text-transparent",
			"to-bottom-right": "bg-gradient-to-br bg-clip-text text-transparent",
			"to-bottom-left": "bg-gradient-to-bl bg-clip-text text-transparent",
			"to-left": "bg-gradient-to-l bg-clip-text text-transparent",
		},
	},
	defaultVariants: {
		gradient: "none",
	},
});

type TextProps<C extends React.ElementType> = VariantProps<typeof gradientVariants> &
	React.ComponentPropsWithoutRef<C>;

const H1 = ({ className, gradient, ...props }: TextProps<"h1">) => {
	return (
		<h1
			className={cn(
				"scroll-m-20 text-4xl font-extrabold tracking-tight [text-wrap:balance] lg:text-5xl",
				gradientVariants({ gradient }),
				className,
			)}
			{...props}
		/>
	);
};

const H2 = ({ className, gradient, ...props }: TextProps<"h2">) => {
	return (
		<h2
			className={cn(
				"scroll-m-20 text-3xl font-semibold tracking-tight transition-colors [text-wrap:balance]",
				gradientVariants({ gradient }),
				className,
			)}
			{...props}
		/>
	);
};

const P = ({ className, gradient, ...props }: TextProps<"p">) => {
	return (
		<p
			className={cn("[text-wrap:balance]", gradientVariants({ gradient }), className)}
			{...props}
		/>
	);
};

export const Text = {
	H1,
	H2,
	P,
};
