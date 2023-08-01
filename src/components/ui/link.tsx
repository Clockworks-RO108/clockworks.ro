import React from "react";

import { useStore } from "@nanostores/react";
import { ArrowUpRight } from "lucide-react";

import { cn } from "~/lib";
import { currentLocaleAtom } from "~/lib/current-url";

type NavLinkProps = {
	withI18n?: boolean;
	disabled?: boolean;
	href: string;
} & React.ComponentPropsWithRef<"a">;

const NavLink = React.forwardRef<HTMLAnchorElement, NavLinkProps>(
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

// TODO should be named ExternalLink?
type SocialLinkProps = { href: string } & React.ComponentPropsWithRef<"a">;

const SocialLink = React.forwardRef<HTMLAnchorElement, SocialLinkProps>(
	({ href, className, children, ...props }, ref?) => {
		return (
			<a
				ref={ref}
				target="_blank"
				referrerPolicy="no-referrer"
				className={cn("hover: inline-flex items-center justify-center gap-2", className)}
				href={href}
				{...props}
			>
				{children}
				<ArrowUpRight className="h-4 w-4" />
			</a>
		);
	},
);

export const Link = {
	Nav: NavLink,
	Social: SocialLink,
};
