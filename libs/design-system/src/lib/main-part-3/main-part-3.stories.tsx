import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MainPart3 } from './main-part-3';

export default {
  component: MainPart3,
  title: 'Marketing/MainPart3',
} as ComponentMeta<typeof MainPart3>;

const Template: ComponentStory<typeof MainPart3> = (args) => (
  <MainPart3 {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
