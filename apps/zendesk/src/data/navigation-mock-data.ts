import { HelpCardProps } from '@featurefm/design-system';

type NavigationItem = {
	href: string;
	title: string;
	dropdown?: HelpCardProps[];
};

const NAVIGATION_MOCK_DATA: NavigationItem[] = [
	{
		title: 'Solutions',
		href: '/',
		dropdown: [
			{
				href: '/',
				iconName: 'play',
				title: 'Smart Links & Landing Pages',
				description: 'For everything you need to share with your fans.',
			},
			{
				href: '/',
				iconName: 'audience',
				title: 'Fanbase Relationship Management',
				description: 'Collect contact info and manage your relationships with your fans.',
			},
			{
				href: '/',
				iconName: 'analytics',
				title: 'Performance Analytics & Insights',
				description: 'Learn what works, and helps you drive consistent growth.',
			},
		]
	},
	{
		title: 'Pricing',
		href: '/',
	},
	{
		title: 'Professionals',
		href: '/',
	},
	{
		title: 'About Us',
		href: '/',
	},
	{
		title: 'Blog',
		href: '/',
	},
	{
		title: 'Help',
		href: '/help',
	},
];

export default NAVIGATION_MOCK_DATA;
