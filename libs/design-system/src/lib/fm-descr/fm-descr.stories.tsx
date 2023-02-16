import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { FmDescr } from './fm-descr';

const Story: ComponentMeta<typeof FmDescr> = {
  title: 'Atoms/FmDescr',
  component: FmDescr,
};
export default Story;

const Template: ComponentStory<typeof FmDescr> = (args) => (
  <FmDescr {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: 'Get started for free',
};
