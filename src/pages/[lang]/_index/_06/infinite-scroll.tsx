import { cn } from "~/lib";

export const InfiniteScroll = ({
	children,
	direction = "normal",
}: React.PropsWithChildren<{ direction?: "normal" | "reverse" }>) => {
	return (
		<div className="relative flex max-w-[100vw] overflow-hidden">
			<div
				className={cn(
					"flex w-max items-stretch gap-[--gap] transition-transform [--gap:theme(spacing.5)] hover:[animation-play-state:paused]",
					direction === "normal" ? "animate-loop" : "animate-loop-reverse",
				)}
			>
				{children}
			</div>
		</div>
	);
};
