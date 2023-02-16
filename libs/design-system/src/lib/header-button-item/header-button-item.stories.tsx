import { ComponentStory, ComponentMeta } from '@storybook/react';
import { HeaderButtonItem } from './header-button-item';

export default {
  component: HeaderButtonItem,
  title: 'Templates/Header/HeaderButtonItem',
} as ComponentMeta<typeof HeaderButtonItem>;

const Template: ComponentStory<typeof HeaderButtonItem> = (args) => (
  <HeaderButtonItem {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  href: '',
  text: '',
};
