import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { SearchHero } from './search-hero';

const Story: ComponentMeta<typeof SearchHero> = {
  component: SearchHero,
  title: 'Glivera/SearchHero',
  argTypes: {
    align: {
      defaultValue: 'left',
      options: ['left', 'center', 'right'],
      control: { type: 'select' },
    },
    mobAlign: {
      defaultValue: 'center',
      control: { type: 'select' },
    },
    title: {
      defaultValue: 'Default title',
    },
    subTitle: {
      defaultValue: 'Default subtitle',
    },
  },
};
export default Story;

const Template: ComponentStory<typeof SearchHero> = (args) => (
  <SearchHero {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const Center = Template.bind({});
Center.args = {
  align: 'center',
};

export const Right = Template.bind({});
Right.args = {
  align: 'right',
};
