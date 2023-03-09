import { SolutionItemProps } from '@featurefm/design-system';
import React from 'react';

export const solutions: SolutionItemProps[] = [
  {
    name: 'Smart Links & Landing Pages',
    description: 'For everything you need to share with your fans.',
    href: '/solutions/links/',
    img: '/img/header-menu/feature-links.png',
    icon: <div></div>,
  },
  {
    name: 'Fan Base Management',
    img: '/img/header-menu/audience.png',
    description:
      'Collect contact info and manage your relationships with your fans.',
    href: '/solutions/audience/',
    icon: <div></div>,
  },
  {
    name: 'Performance Analytics & Insights',
    description: 'Learn what helps you drive consistent growth.',
    img: '/img/header-menu/analytics.png',
    href: '/solutions/analytics/',
    icon: <div></div>,
  },
];
