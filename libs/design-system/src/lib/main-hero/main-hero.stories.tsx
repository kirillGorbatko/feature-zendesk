import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MainHero } from './main-hero';

export default {
  component: MainHero,
  title: 'Marketing/MainHero',
} as ComponentMeta<typeof MainHero>;

const Template: ComponentStory<typeof MainHero> = (args) => (
  <MainHero {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
