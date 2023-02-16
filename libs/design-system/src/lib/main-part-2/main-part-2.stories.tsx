import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MainPart2 } from './main-part-2';

export default {
  component: MainPart2,
  title: 'Marketing/MainPart2',
} as ComponentMeta<typeof MainPart2>;

const Template: ComponentStory<typeof MainPart2> = (args) => (
  <MainPart2 {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
