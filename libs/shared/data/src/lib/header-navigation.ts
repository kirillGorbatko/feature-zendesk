import { HeaderNavigationItem } from '@featurefm/shared/types';

export function getHeaderNavigation(baseUrl: string) {
  const navigation: HeaderNavigationItem[] = [
    {
      title: 'Solutions',
      href: '/',
      dropdown: [
        {
          href: `${baseUrl}/solutions/links/`,
          iconName: 'play',
          title: 'Smart Links & Landing Pages',
          description:
            'Beautiful landing pages for everything you need to share with your fans.',
        },
        {
          href: `${baseUrl}/solutions/audience/`,
          iconName: 'audience',
          title: 'Fan Base Management',
          description:
            'Collect contact info and manage your relationships with your fans.',
        },
        {
          href: `${baseUrl}/solutions/analytics/`,
          iconName: 'analytics',
          title: 'Performance Analytics & Insights',
          description:
            'Track your performance and learn what drives consistent growth.',
        },
      ],
    },
    {
      title: 'For business',
      href: `${baseUrl}/business/`,
    },
    {
      title: 'Pricing',
      href: `${baseUrl}/pricing/artist/`,
    },
    {
      title: 'Blog',
      href: 'https://blog.feature.fm/',
      target: '_blank',
    },
    {
      title: 'Help',
      href: 'https://ffm.to/helpcenter.owe/',
      target: '_blank',
    },
  ];

  return navigation;
}

export const HEADER_NAVIGATION: HeaderNavigationItem[] =
  getHeaderNavigation('');
