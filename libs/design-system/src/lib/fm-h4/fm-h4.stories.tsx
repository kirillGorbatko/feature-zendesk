import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { FmH4 } from './fm-h4';

const Story: ComponentMeta<typeof FmH4> = {
  title: 'Atoms/FmH4',
  component: FmH4,
};
export default Story;

const Template: ComponentStory<typeof FmH4> = (args) => <FmH4 {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Default title',
};
