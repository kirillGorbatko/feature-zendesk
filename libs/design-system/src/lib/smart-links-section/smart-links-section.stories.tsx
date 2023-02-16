import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SmartLinksSection } from './smart-links-section';

export default {
  component: SmartLinksSection,
  title: 'Marketing/SmartLinksSection',
} as ComponentMeta<typeof SmartLinksSection>;

const Template: ComponentStory<typeof SmartLinksSection> = (args) => (
  <SmartLinksSection {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
