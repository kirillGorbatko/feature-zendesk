import type { ComponentStory, ComponentMeta } from '@storybook/react';
import TabsPagination from './tabs-pagination';

const Story: ComponentMeta<typeof TabsPagination> = {
  title: 'Website-redesign/TabsPagination',
  component: TabsPagination,
  args: {
    amount: 4,
    activeIndex: 1,
  },
};
export default Story;

const Template: ComponentStory<typeof TabsPagination> = (args) => (
  <TabsPagination {...args} handleClick={() => 1} />
);

export const Primary = Template.bind({});
