import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TestimonialsQuote } from './testimonials-quote';

export default {
  component: TestimonialsQuote,
  title: 'Images/TestimonialsQuote',
} as ComponentMeta<typeof TestimonialsQuote>;

const Template: ComponentStory<typeof TestimonialsQuote> = (args) => (
  <TestimonialsQuote {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
