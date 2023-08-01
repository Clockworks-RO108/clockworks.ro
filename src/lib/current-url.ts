import { atom, computed } from "nanostores";

import { toLocale } from "./i18n";

export const currentURLAtom = atom<string>("");
export const currentLocaleAtom = computed(currentURLAtom, (url) =>
	toLocale(url.slice(1).split("/")[0]),
);
export const currentPathnameAtom = computed(currentURLAtom, (url) => url.slice(3));
