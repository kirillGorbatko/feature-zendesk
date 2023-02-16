import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Testimonials } from './testimonials';

export default {
  component: Testimonials,
  title: 'Marketing/Testimonials',
} as ComponentMeta<typeof Testimonials>;

const Template: ComponentStory<typeof Testimonials> = (args) => (
  <Testimonials {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
