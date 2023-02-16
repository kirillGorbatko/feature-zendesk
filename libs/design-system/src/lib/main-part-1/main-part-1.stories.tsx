import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MainPart1 } from './main-part-1';

export default {
  component: MainPart1,
  title: 'Marketing/MainPart1',
} as ComponentMeta<typeof MainPart1>;

const Template: ComponentStory<typeof MainPart1> = (args) => (
  <MainPart1 {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
