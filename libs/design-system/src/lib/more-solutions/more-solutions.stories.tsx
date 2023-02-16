import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MoreSolutions } from './more-solutions';

export default {
  component: MoreSolutions,
  title: 'Marketing/MoreSolutions',
} as ComponentMeta<typeof MoreSolutions>;

const Template: ComponentStory<typeof MoreSolutions> = (args) => (
  <MoreSolutions {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
