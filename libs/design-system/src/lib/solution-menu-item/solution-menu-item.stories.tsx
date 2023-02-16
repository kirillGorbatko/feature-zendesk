import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SolutionMenuItem } from './solution-menu-item';

export default {
  component: SolutionMenuItem,
  title: 'Marketing/SolutionMenuItem',
} as ComponentMeta<typeof SolutionMenuItem>;

const Template: ComponentStory<typeof SolutionMenuItem> = (args) => (
  <SolutionMenuItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
  name: 'Smartlinks',
  href: '#',
  description: 'Manage your relationship with your fans.',
  img: 'http://localhost:4200/img/header-menu/smartlinks.png',
};
