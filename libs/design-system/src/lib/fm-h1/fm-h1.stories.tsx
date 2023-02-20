import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { FmH1 } from './fm-h1';

const Story: ComponentMeta<typeof FmH1> = {
  title: 'Glivera/FmH1',
  component: FmH1,
};
export default Story;

const Template: ComponentStory<typeof FmH1> = (args) => <FmH1 {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Get started for free',
};
