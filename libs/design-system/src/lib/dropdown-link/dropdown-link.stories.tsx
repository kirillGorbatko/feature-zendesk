import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { DropdownLink } from './dropdown-link';

const Story: ComponentMeta<typeof DropdownLink> = {
  title: 'Atoms/DropdownLink',
  component: DropdownLink,
};
export default Story;

const Template: ComponentStory<typeof DropdownLink> = (args) => (
  <DropdownLink {...args} />
);

export const Default = Template.bind({});
Default.args = {
  name: 'Link',
  url: './',
};
