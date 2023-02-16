import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './button';

export default {
  component: Button,
  title: 'Atoms/Button',
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: 'Click me',
};

export const Seconday = Template.bind({});
Seconday.args = {
  type: 'secondary',
  text: 'Click me',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  type: 'tertiary',
  text: 'Click me',
};

export const TertiaryInverted = Template.bind({});
TertiaryInverted.args = {
  type: 'tertiary-inverted',
  text: 'Click me',
};
