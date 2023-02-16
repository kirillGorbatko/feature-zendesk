import { NavigationItem } from '../types';

const NAVIGATION_MOCK_DATA: NavigationItem[] = [
	{
		title: 'Solutions',
		href: '/',
		dropdown: [
			{
				href: '/',
				iconName: 'play',
				title: 'Our Links need a longer title',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			},
			{
				href: '/',
				iconName: 'audience',
				title: 'Audience Relationship Management',
				description: 'Manage your relationships with your fans.',
			},
			{
				href: '/',
				iconName: 'analytics',
				title: 'Performance Analytics & Insights',
				description: 'Learn what helps you drive consistent growth.',
			},
		]
	},
	{
		title: 'Pricing',
		href: '/',
		dropdown: [
			{
				href: '/',
				iconName: 'play',
				title: 'Pricing > Our Links need a longer title',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			},
			{
				href: '/',
				iconName: 'audience',
				title: 'Pricing > Audience Relationship Management',
				description: 'Manage your relationships with your fans.',
			},
			{
				href: '/',
				iconName: 'analytics',
				title: 'Pricing > Performance Analytics & Insights',
				description: 'Learn what helps you drive consistent growth.',
			},
		]
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
		href: '/',
	},
];

export default NAVIGATION_MOCK_DATA;
