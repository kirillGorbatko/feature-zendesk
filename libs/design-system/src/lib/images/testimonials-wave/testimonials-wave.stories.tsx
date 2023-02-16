import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TestimonialsWave } from './testimonials-wave';

export default {
  component: TestimonialsWave,
  title: 'Images/TestimonialsWave',
} as ComponentMeta<typeof TestimonialsWave>;

const Template: ComponentStory<typeof TestimonialsWave> = (args) => (
  <TestimonialsWave {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
