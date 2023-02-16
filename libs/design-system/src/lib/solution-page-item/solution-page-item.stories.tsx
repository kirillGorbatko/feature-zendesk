import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SolutionPageItem } from './solution-page-item';

export default {
  component: SolutionPageItem,
  title: 'Marketing/SolutionPageItem',
} as ComponentMeta<typeof SolutionPageItem>;

const Template: ComponentStory<typeof SolutionPageItem> = (args) => (
  <SolutionPageItem {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  img: '',
  imgWidth: '',
  imgHeight: '',
  header: '',
  head: '',
  description: '',
  background: '',
  isDark: false,
  actionText: '',
  actionUrl: '',
};
