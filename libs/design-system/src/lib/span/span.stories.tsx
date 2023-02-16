import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Span } from './span';

export default {
  component: Span,
  title: 'Span',
} as ComponentMeta<typeof Span>;

const Template: ComponentStory<typeof Span> = (args) => <Span {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  className: '',
};
