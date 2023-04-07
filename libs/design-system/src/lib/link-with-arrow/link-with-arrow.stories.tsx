import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LinkWithArrow } from './link-with-arrow';

export default {
  component: LinkWithArrow,
  title: 'Glivera/LinkWithArrow',
} as ComponentMeta<typeof LinkWithArrow>;

const Template: ComponentStory<typeof LinkWithArrow> = (args) => (
  <LinkWithArrow {...args}>This is a link</LinkWithArrow>
);

export const Primary = Template.bind({});
Primary.args = {};
