import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { SocialLink } from './social-link';

const Story: ComponentMeta<typeof SocialLink> = {
  title: 'Glivera/SocialLink',
  component: SocialLink,
  argTypes: {
    iconName: {
      defaultValue: 'facebook',
      options: ['facebook', 'instagram', 'linkedin'],
      control: { type: 'select' },
    },
  },
};
export default Story;

const Template: ComponentStory<typeof SocialLink> = (args) => (
  <SocialLink {...args} />
);

export const Facebook = Template.bind({});
Facebook.args = {};

export const Instagram = Template.bind({});

Instagram.args = {
  iconName: 'instagram',
};

export const Linkedin = Template.bind({});

Linkedin.args = {
  iconName: 'linkedin',
};
