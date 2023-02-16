import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MainHero1 } from './main-hero-1';

export default {
  component: MainHero1,
  title: 'MainHero1',
} as ComponentMeta<typeof MainHero1>;

const Template: ComponentStory<typeof MainHero1> = (args) => (
  <MainHero1 {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
