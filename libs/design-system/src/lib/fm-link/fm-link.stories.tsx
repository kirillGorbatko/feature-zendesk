import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { FmLink } from './fm-link';

const Story: ComponentMeta<typeof FmLink> = {
  title: 'Glivera/FmLink',
  component: FmLink,
};
export default Story;

const Template: ComponentStory<typeof FmLink> = (args) => <FmLink {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Link',
  url: './',
};
