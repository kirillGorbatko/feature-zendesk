import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { RectangleDecor } from './rectangle-decor';

const Story: ComponentMeta<typeof RectangleDecor> = {
  title: 'Website-redesign/RectangleDecor',
  component: RectangleDecor,
  argTypes: {
    variant: {
      defaultValue: 'black',
      options: [
        'black',
        'purple',
        'turquoise',
        'gradient',
        'secondary_gradient',
        'tertiary_gradient',
        'image',
      ],
      control: { type: 'select' },
    },
    size: {
      defaultValue: 'large',
      options: [
        'normal',
        'large',
        'medium',
        'xxl',
        'sm',
        'sm2',
        'long',
        'xl',
        'secondary_sm',
        'secondary_md',
        'secondary_long',
        'secondary_xxl',
      ],
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
export const turquoise = Template.bind({});
turquoise.args = {
  variant: 'turquoise',
};
export const Gradient = Template.bind({});
Gradient.args = {
  variant: 'gradient',
};
export const Image = Template.bind({});
Image.args = {
  variant: 'image',
};
