import { ComponentStory, ComponentMeta } from '@storybook/react';
import { H3 } from './h3';

export default {
  component: H3,
  title: 'H3',
} as ComponentMeta<typeof H3>;

const Template: ComponentStory<typeof H3> = (args) => <H3 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  className: '',
};
