import { ComponentStory, ComponentMeta } from '@storybook/react';
import SearchIcon from './search-icon';

export default {
  component: SearchIcon,
  title: 'Glivera/SearchIcon',
} as ComponentMeta<typeof SearchIcon>;

const Template: ComponentStory<typeof SearchIcon> = (args) => (
  <SearchIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
