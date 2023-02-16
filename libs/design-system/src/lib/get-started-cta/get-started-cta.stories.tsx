import { ComponentStory, ComponentMeta } from '@storybook/react';
import { GetStartedCta } from './get-started-cta';

export default {
  component: GetStartedCta,
  title: 'Marketing/GetStartedCta',
} as ComponentMeta<typeof GetStartedCta>;

const Template: ComponentStory<typeof GetStartedCta> = (args) => (
  <GetStartedCta {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
