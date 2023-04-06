import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ManagementMember } from './management-member';

const Story: ComponentMeta<typeof ManagementMember> = {
  component: ManagementMember,
  title: 'Website-redesign/ManagementMember',
  args: {
    title: 'Designed to help artists build careers',
    text: 'We founded Feaure.fm with a mission to provide any artist, no matter how early in their career, professional music marketing tools along with guidance and education to help more artists be able to make a living doing what they love.',
    name: 'Lior Aharoni',
    position: 'Founder & CEO',
  },
};
export default Story;

const Template: ComponentStory<typeof ManagementMember> = (args) => (
  <ManagementMember {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  variant: 'tertiary',
};

export const Reversed = Template.bind({});
Reversed.args = {
  order: 'reversed',
};
