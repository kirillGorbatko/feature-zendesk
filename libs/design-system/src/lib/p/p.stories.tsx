import { ComponentStory, ComponentMeta } from '@storybook/react';
import { P } from './p';

export default {
  component: P,
  title: 'P',
} as ComponentMeta<typeof P>;

const Template: ComponentStory<typeof P> = (args) => <P {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  className: '',
};
