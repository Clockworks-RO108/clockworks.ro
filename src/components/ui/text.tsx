import { type VariantProps, cva } from "class-variance-authority";

import { cn } from "~/lib";

const textVariants = cva("[text-wrap:balance]", {
	variants: {
		align: {
			auto: "",
			left: "text-left",
			center: "text-center",
			right: "text-right",
			justify: "text-justify",
			start: "text-start",
			end: "text-end",
		},
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
		align: "auto",
		gradient: "none",
	},
});

type TextProps<C extends React.ElementType> = VariantProps<typeof textVariants> &
	React.ComponentPropsWithoutRef<C>;

const H1 = ({ className, gradient, align, ...props }: TextProps<"h1">) => {
	return (
		<h1
			className={cn(
				"scroll-m-24 font-inter text-5xl font-bold leading-tight tracking-tight lg:text-7xl",
				textVariants({ gradient, align }),
				className,
			)}
			{...props}
		/>
	);
};

const H2 = ({ className, gradient, align, ...props }: TextProps<"h2">) => {
	return (
		<h2
			className={cn(
				"scroll-m-24 font-inter text-4xl font-bold leading-tight tracking-tight lg:text-5xl",
				textVariants({ gradient, align }),
				className,
			)}
			{...props}
		/>
	);
};

const H3 = ({ className, gradient, align, ...props }: TextProps<"h2">) => {
	return (
		<h3
			className={cn(
				"scroll-m-24 text-lg lg:text-2xl",
				textVariants({ gradient, align }),
				className,
			)}
			{...props}
		/>
	);
};

const Subtitle = ({ className, gradient, align, ...props }: TextProps<"p">) => {
	return (
		<p
			className={cn(
				"font-jetbrains-mono text-sm uppercase tracking-wide text-text-secondary",
				textVariants({ gradient, align }),
				className,
			)}
			{...props}
		/>
	);
};

const P = ({ className, gradient, align, ...props }: TextProps<"p">) => {
	return <p className={cn(textVariants({ gradient, align }), className)} {...props} />;
};

const Small = ({ className, gradient, align, ...props }: TextProps<"p">) => {
	return (
		<p
			className={cn(
				"text-sm text-text-secondary",
				textVariants({ gradient, align }),
				className,
			)}
			{...props}
		/>
	);
};

const Tiny = ({ className, gradient, align, ...props }: TextProps<"p">) => {
	return (
		<p
			className={cn(
				"text-xs text-text-secondary",
				textVariants({ gradient, align }),
				className,
			)}
			{...props}
		/>
	);
};

export const Text = {
	H1,
	H2,
	H3,
	P,
	Subtitle,
	Small,
	Tiny,
};
