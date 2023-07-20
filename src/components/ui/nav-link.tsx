import React from "react";
import { useStore } from "@nanostores/react";
import { cn } from "~/lib";
import { currentLocaleAtom } from "~/lib/current-url";

type Props = {
	withI18n?: boolean;
	disabled?: boolean;
	href: string;
} & React.ComponentPropsWithRef<"a">;

export const NavLink = React.forwardRef<HTMLAnchorElement, Props>(
	({ disabled, withI18n = true, className, ...props }, ref?) => {
		if (disabled) return <span ref={ref} {...props} />;

		const { href, ...other } = props;

		const locale = useStore(currentLocaleAtom);

		return (
			<a
				href={withI18n ? `/${locale}${href}` : href}
				rel="prefetch"
				className={cn(
					disabled && "pointer-events-none text-off-white-100",
					className ?? "",
				)}
				{...other}
			/>
		);
	},
);
