import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { PartnersSection } from './partners-section';

const Story: ComponentMeta<typeof PartnersSection> = {
  title: 'Website-redesign/PartnersSection',
  component: PartnersSection,
  argTypes: {
    title: {
      defaultValue: 'Some title',
      control: { type: 'text' },
    },
    subtitle: {
      defaultValue: 'Some subtitle',
    },
    services: {
      defaultValue: [
        {
          title: 'Some title 1',
          icon: {
            img: '/images/business-partners/custom-reporting-and-dev.png',
          },
        },
        {
          title: 'Some title 2',
          icon: {
            img: '/images/business-partners/custom-reporting-and-dev.png',
          },
        },
      ],
    },
  },
};
export default Story;

const Template: ComponentStory<typeof PartnersSection> = (args) => (
  <PartnersSection {...args} />
);

export const Default = Template.bind({});
Default.args = {};
