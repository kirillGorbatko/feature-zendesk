export const getSlugFromUrl = (url: string): string => {
	return /[^/]*$/.exec(url)[0];
};