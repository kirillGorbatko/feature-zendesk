import { Link } from './link';

export type HeaderNavigationItem = Link & {
	dropdown?: any[];
};