import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { FmLink } from './fm-link';

const Story: ComponentMeta<typeof FmLink> = {
  title: 'Atoms/FmLink',
  component: FmLink,
};
export default Story;

const Template: ComponentStory<typeof FmLink> = (args) => <FmLink {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Link',
  url: './',
};
