import type { CollectionEntry } from "astro:content";

import { BorderedContainer } from "~/components/bordered-container";
import { Link, Text } from "~/components/ui";

export const PostCard = ({ post }: { post: CollectionEntry<"blog"> }) => {
	const date = new Intl.DateTimeFormat("en-GB").format(post.data.publishedDate);

	const [lang, slug] = post.slug.split("/");

	if (!lang || !slug) throw new Error("unreachable");

	const href = `/${lang}/blog/${slug}`;

	return (
		<Link.Nav href={href} className="col-span-full h-full lg:col-span-1">
			<BorderedContainer className="h-full">
				<time className="mb-2 text-sm text-text-secondary" dateTime={date}>
					{date}
				</time>

				<Text.H3 className="mb-4 font-jetbrains-mono">{post.data.title}</Text.H3>
				<Text.Small>{post.data.description}</Text.Small>
			</BorderedContainer>
		</Link.Nav>
	);
};
