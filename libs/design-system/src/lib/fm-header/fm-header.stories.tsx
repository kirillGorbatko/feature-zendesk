import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { HEADER_NAVIGATION } from '@featurefm/shared/data';
import { FmHeader } from './fm-header';

const Story: ComponentMeta<typeof FmHeader> = {
  title: 'Glivera/FMHeader',
  component: FmHeader,
  argTypes: {
    variant: {
      options: ['transparent', 'inverted'],
      control: { type: 'select' },
    },
  },
  args: {
    items: HEADER_NAVIGATION,
  },
};
export default Story;

const Template: ComponentStory<typeof FmHeader> = (args) => (
  <FmHeader {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};

export const TransparentBg = Template.bind({});
TransparentBg.args = {
  variant: 'transparent',
};

export const Inverted = Template.bind({});
Inverted.args = {
  variant: 'inverted',
};
