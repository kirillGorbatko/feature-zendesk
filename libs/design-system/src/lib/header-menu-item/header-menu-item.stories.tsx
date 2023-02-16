import { ComponentStory, ComponentMeta } from '@storybook/react';
import { HeaderMenuItem } from './header-menu-item';

export default {
  component: HeaderMenuItem,
  title: 'Templates/Header/HeaderMenuItem',
} as ComponentMeta<typeof HeaderMenuItem>;

const Template: ComponentStory<typeof HeaderMenuItem> = (args) => (
  <HeaderMenuItem {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  href: '',
  text: '',
};
