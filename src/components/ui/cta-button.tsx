import { ArrowRight } from "lucide-react";
import { Button } from "./button";
import { NavLink } from "./nav-link";

export const CTAButton = ({
	href,
	children,
}: React.PropsWithChildren<{ href: string }>) => {
	return (
		<Button
			variant="alternative"
			as={NavLink}
			href={href}
			className="group mx-auto scale-95 rounded-xl transition-transform hover:scale-100 lg:mx-0"
		>
			{children}
			<ArrowRight className="transition-transform group-hover:translate-x-2" />
		</Button>
	);
};
