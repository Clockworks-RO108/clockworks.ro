import React from "react";

import { type InfiniteData, useInfiniteQuery } from "@tanstack/react-query";
import { getCollection, type CollectionEntry } from "astro:content";
import { Loader } from "lucide-react";

import { PostCard } from "./post-card";

import { BorderedContainer } from "~/components/bordered-container";
import { Center, Text } from "~/components/ui";
import { filterBlog, filterByCategory } from "~/lib/filters";
import { queryClient } from "~/lib/query-client";
import { sortByDate } from "~/lib/sort";

type Data = {
	data: Array<CollectionEntry<"blog">>;
	count: number;
	nextCursor: number | null;
};

export type LoaderFn = (pageParam: number) => Promise<Data>;

type FilterFn = (entry: CollectionEntry<"blog">) => boolean;

const flattenPages = (data: InfiniteData<Data, number>) =>
	data.pages.flatMap((page) => page.data);

const loader = async (cursor: number, filter: FilterFn) => {
	const allPosts = await getCollection("blog", filter);

	const count = Math.ceil(allPosts.length / 10);

	const posts = sortByDate(allPosts).filter(
		(_, idx) => idx > cursor && idx <= cursor + 9,
	);

	return {
		data: posts,
		count,
		nextCursor: cursor / 10 >= count - 1 ? null : cursor + 9,
	};
};

export const Feed = ({
	filter,
	moreSoonLabel,
}: {
	filter: FilterFn;
	moreSoonLabel: string;
}) => {
	const observerTarget = React.useRef<HTMLDivElement>(null);

	const { data, status, isFetchingNextPage, hasNextPage, fetchNextPage } =
		useInfiniteQuery(
			{
				queryKey: ["blog", "feed"],
				queryFn: (ctx) => loader(ctx.pageParam, filter),
				getNextPageParam: (lastPage) => lastPage.nextCursor,
				initialPageParam: 0,
				select: flattenPages,
			},
			queryClient,
		);

	React.useEffect(() => {
		const observer = new IntersectionObserver(
			(e) => {
				if (e[0]?.isIntersecting) {
					void fetchNextPage();
				}
			},
			{ threshold: 1 },
		);

		const target = observerTarget.current;

		if (target) observer.observe(target);

		return () => {
			if (target) {
				observer.unobserve(target);
			}
		};
	}, [fetchNextPage, hasNextPage]);

	if (status === "pending")
		return (
			<Center className="col-span-full p-8">
				<Loader className="animate-spin" />
			</Center>
		);

	return (
		<>
			{data?.map((post) => (
				<PostCard key={post.id} post={post} />
			))}

			{isFetchingNextPage && (
				<Center className="col-span-full p-8">
					<Loader className="animate-spin" />
				</Center>
			)}

			{hasNextPage ? (
				<div ref={observerTarget}></div>
			) : (
				<BorderedContainer className="col-span-full lg:col-span-1">
					<Center stretch="all">
						<Text.H3 className="text-center">{moreSoonLabel}</Text.H3>
					</Center>
				</BorderedContainer>
			)}
		</>
	);
};

export const BlogFeed = ({
	lang,
	moreSoonLabel,
}: {
	lang: string;
	moreSoonLabel: string;
}) => {
	const filter = filterBlog(lang);

	return <Feed filter={filter} moreSoonLabel={moreSoonLabel} />;
};

export const CategoryFeed = ({
	lang,
	category,
	moreSoonLabel,
}: {
	lang: string;
	category: string;
	moreSoonLabel: string;
}) => {
	const filter = filterByCategory(lang, category);

	return <Feed filter={filter} moreSoonLabel={moreSoonLabel} />;
};
