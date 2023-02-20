import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BackIcon } from './back-icon';

export default {
  component: BackIcon,
  title: 'Glivera/BackIcon',
} as ComponentMeta<typeof BackIcon>;

const Template: ComponentStory<typeof BackIcon> = (args) => (
  <BackIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
