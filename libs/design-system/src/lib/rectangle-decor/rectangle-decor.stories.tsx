import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { RectangleDecor } from './rectangle-decor';

const Story: ComponentMeta<typeof RectangleDecor> = {
  title: 'Glivera/RectangleDecor',
  component: RectangleDecor,
  argTypes: {
    variant: {
      defaultValue: 'black',
      options: ['black', 'purple', 'tortoise', 'gradient', 'image'],
      control: { type: 'select' },
    },
    size: {
      defaultValue: 'large',
      options: ['normal', 'large', 'medium', 'xxl', 'sm', 'sm2', 'long'],
      control: { type: 'select' },
    },
  },
};
export default Story;

const Template: ComponentStory<typeof RectangleDecor> = (args) => (
  <RectangleDecor {...args} />
);

export const Primary = Template.bind({});
export const Purple = Template.bind({});
Purple.args = {
  variant: 'purple',
};
export const Tortoise = Template.bind({});
Tortoise.args = {
  variant: 'tortoise',
};
export const Gradient = Template.bind({});
Gradient.args = {
  variant: 'gradient',
};
export const Image = Template.bind({});
Image.args = {
  variant: 'image',
};
