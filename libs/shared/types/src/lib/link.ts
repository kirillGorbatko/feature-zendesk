export type LinkTarget = '_blank' | '_self' | '_parent' | '_top';

export type Link = {
	title: string,
	href: string,
	target?: LinkTarget;
}