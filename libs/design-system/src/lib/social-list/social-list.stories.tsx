import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { SocialItem } from '../social-item/social-item';
import SocialLink from '../social-link/social-link';
import { SocialList } from './social-list';

const Story: ComponentMeta<typeof SocialList> = {
  title: 'Glivera/SocialList',
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
  <SocialList {...args}>
    <SocialItem>
      <SocialLink href="/" iconName="facebook" />
    </SocialItem>
    <SocialItem>
      <SocialLink href="/" iconName="instagram" />
    </SocialItem>
    <SocialItem>
      <SocialLink href="/" iconName="linkedin" />
    </SocialItem>
  </SocialList>
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
