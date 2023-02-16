import { Article } from './articles';

export type Section = {
	id: number;
	url: string;
	html_url: string;
	category_id: number;
	position: number;
	slug: string;
	sorting: string;
	created_at: Date;
	updated_at: Date;
	name: string;
	description: string;
	locale: string;
	source_locale: string;
	outdated: boolean;
	parent_section_id: null;
	theme_template: string;
	articles?: Article[]
}