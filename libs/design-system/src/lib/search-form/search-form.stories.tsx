import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { SearchForm } from './search-form';

const Story: ComponentMeta<typeof SearchForm> = {
  component: SearchForm,
  title: 'Glivera/SearchForm',
  argTypes: {
    mobAlign: {
      defaultValue: 'center',
      options: ['left', 'center', 'right'],
      control: { type: 'select' },
    },
  },
};
export default Story;

const Template: ComponentStory<typeof SearchForm> = (args) => (
  <SearchForm {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const Left = Template.bind({});
Left.args = {
  mobAlign: 'left',
};

export const Right = Template.bind({});
Right.args = {
  mobAlign: 'right',
};
