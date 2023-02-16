import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Logo } from './logo';

export default {
  component: Logo,
  title: 'Brand/Logo',
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const Default = Template.bind({});
Default.args = {};
