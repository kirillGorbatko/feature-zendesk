import { useState, useLayoutEffect, useEffect } from "react";

const queries: Array<string> = [
	"(max-width: 1023px)",
	"(min-width: 1024px)",
	"(max-width: 767px)",
];

const canUseDOM = typeof window !== 'undefined';
const useIsomorphicLayoutEffect = canUseDOM ? useLayoutEffect : useEffect;

export const useMatchMedia = (): {
	[key: string]: boolean,
} => {
	const mediaQueryLists: MediaQueryList[] = canUseDOM ? queries.map((query) => window?.matchMedia(query)) : [];

	const getValues = () => mediaQueryLists.map((list) => list.matches);

	const [values, setValues] = useState(getValues);

	useIsomorphicLayoutEffect(() => {
		const handler = () => setValues(getValues);

		mediaQueryLists.forEach((list) => list.addEventListener("change", handler));

		return () =>
			mediaQueryLists.forEach((list) =>
				list.removeEventListener("change", handler)
			);
	}, []);

	return ["isMobile", "isDesktop", "isTablet"].reduce(
		(acc, screen, index) => ({
			...acc,
			[screen]: values[index]
		}),
		{}
	);
};
