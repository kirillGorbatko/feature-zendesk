import { FooterNavigation } from '@featurefm/shared/types';

export function getFooterNavigation(baseUrl: string) {
  const navigation: FooterNavigation = [
    {
      title: 'Solutions',
      items: [
        {
          title: 'Artist Bio Links',
          href: `${baseUrl}/solutions/links#type0`,
        },
        {
          title: 'Pre-Release Links',
          href: `${baseUrl}/solutions/links#type2`,
        },
        {
          title: 'Release Links',
          href: `${baseUrl}/solutions/links#type1`,
        },
        {
          title: 'Contest & Unlock Pages',
          href: `${baseUrl}/solutions/links#type5`,
        },
        {
          title: 'Tour and Event Links',
          href: `${baseUrl}/solutions/links#type3`,
        },
        {
          title: 'Podcast Links',
          href: `${baseUrl}/solutions/links#type4`,
        },
        {
          title: 'Short Links',
          href: `${baseUrl}/solutions/links#type6`,
        },
        {
          title: 'Fan Base Management',
          href: `${baseUrl}/solutions/audience`,
        },
        {
          title: 'Analytics & Insights',
          href: `${baseUrl}/solutions/analytics`,
        },
      ],
    },
    {
      title: 'Company',
      items: [
        {
          title: 'About',
          href: `${baseUrl}/about-us`,
        },
        {
          title: 'Careers',
          href: `${baseUrl}/careers`,
        },
      ],
    },
    {
      items: [
        {
          title: 'For business',
          href: `${baseUrl}/business`,
        },
        {
          title: 'Pricing',
          href: `${baseUrl}/pricing/artist`,
        },
        {
          title: 'Help Center',
          href: 'https://ffm.to/helpcenter.owe/',
          target: '_blank',
        },
        {
          title: 'Blog',
          href: 'https://blog.feature.fm/',
          target: '_blank',
        },
      ],
    },
  ];
  return navigation;
}
export const FOOTER_NAVIGATION: FooterNavigation = getFooterNavigation('');
