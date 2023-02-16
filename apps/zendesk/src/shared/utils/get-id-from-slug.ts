export const getIdFromSlug = (str: string) => {
	return parseInt(str.replace(/\D/, ''));
};