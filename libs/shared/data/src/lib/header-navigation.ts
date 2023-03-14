import { HeaderNavigationItem } from '@featurefm/shared/types';

export const HEADER_NAVIGATION: HeaderNavigationItem[] = [
	{
		"title": "Solutions",
		"href": "/",
		"dropdown": [
			{
				"href": "/solutions/links/",
				"iconName": "play",
				"title": "Smart Links & Landing Pages",
				"description": "For everything you need to share with your fans."
			},
			{
				"href": "/solutions/audience/",
				"iconName": "audience",
				"title": "Fanbase Relationship Management",
				"description": "Collect contact info and manage your relationships with your fans."
			},
			{
				"href": "/solutions/analytics/",
				"iconName": "analytics",
				"title": "Performance Analytics & Insights",
				"description": "Learn what works, and helps you drive consistent growth."
			}
		]
	},
	{
		"title": "Pricing",
		"href": "/pricing/artist/"
	},
	{
		"title": "Professionals",
		"href": "/business/"
	},
	{
		"title": "About Us",
		"href": "/about-us/"
	},
	{
		"title": "Blog",
		"href": "https://blog.feature.fm/"
	},
	{
		"title": "Help",
		"href": "https://ffm.to/helpcenter.owe/"
	}
];