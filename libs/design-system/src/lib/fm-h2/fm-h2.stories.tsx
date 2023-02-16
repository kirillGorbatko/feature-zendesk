import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { FmH2 } from './fm-h2';

const Story: ComponentMeta<typeof FmH2> = {
  title: 'Atoms/FmH2',
  component: FmH2,
};
export default Story;

const Template: ComponentStory<typeof FmH2> = (args) => <FmH2 {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Get started for free',
};
