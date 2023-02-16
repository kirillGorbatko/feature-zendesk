import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Header } from './header';
import { ChartBarIcon, CursorClickIcon } from '@heroicons/react/outline';

export default {
  component: Header,
  title: 'Templates/Header/Header',
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  solutions: [
    {
      name: 'Smart Links',
      description: 'Manage your relationship with your fans.',
      href: '#',
      img: 'http://localhost:4200/img/header-menu/smartlinks.png',
      icon: ChartBarIcon,
    },
    {
      name: 'Audience Relationship Management',
      img: 'http://localhost:4200/img/header-menu/fanmanagement.png',
      description: 'Manage your relationship with your fans.',
      href: '#',
      icon: CursorClickIcon,
    },
    {
      name: 'Performance Analytics & Insights',
      description: 'Manage your relationship with your fans.',
      img: 'http://localhost:4200/img/header-menu/analytics.png',
      href: '#',
      icon: CursorClickIcon,
    },
  ],
};
