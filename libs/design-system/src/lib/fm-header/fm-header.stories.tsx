import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { NAVIGATION_MOCK_DATA } from './data';
import { FmHeader } from './fm-header';

const Story: ComponentMeta<typeof FmHeader> = {
  title: 'Glivera/FMHeader',
  component: FmHeader,
};
export default Story;

const Template: ComponentStory<typeof FmHeader> = (args) => (
  <FmHeader items={NAVIGATION_MOCK_DATA} />
);

export const Primary = Template.bind({});
Primary.args = {};

export const TransparentBg = Template.bind({});
TransparentBg.args = {
  variant: 'transparent',
};
