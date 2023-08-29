import { Ul } from "./ul";

import { Text, Link, Separator } from "~/components/ui";

export const components = {
	h1: Text.H1,
	h2: Text.H2,
	h3: Text.H3,
	a: Link.Social,
	hr: Separator,
	ul: Ul,
};

export { default as Image } from "./image.astro";
export * from "./table-of-contents";
