import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ViewPort } from './view-port';

export default {
  component: ViewPort,
  title: 'ViewPort',
} as ComponentMeta<typeof ViewPort>;

const Template: ComponentStory<typeof ViewPort> = (args) => (
  <ViewPort {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  className: '',
};
