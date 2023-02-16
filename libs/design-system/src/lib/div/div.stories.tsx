import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Div } from './div';

export default {
  component: Div,
  title: 'Div',
} as ComponentMeta<typeof Div>;

const Template: ComponentStory<typeof Div> = (args) => <Div {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  className: '',
};
