import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { SocialList } from './social-list';

const Story: ComponentMeta<typeof SocialList> = {
  title: 'Molecules/SocialList',
  component: SocialList,
  argTypes: {
    align: {
      defaultValue: 'left',
      options: ['left', 'center', 'right'],
      control: { type: 'select' },
    },
  },
};
export default Story;

const Template: ComponentStory<typeof SocialList> = (args) => (
  <SocialList {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const Center = Template.bind({});
Center.args = {
  align: 'center',
};

export const Right = Template.bind({});
Right.args = {
  align: 'right',
};
