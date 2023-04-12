import { ComponentStory, ComponentMeta } from '@storybook/react';
import { OurPartnersSection } from './our-partners-section';

const Story: ComponentMeta<typeof OurPartnersSection> = {
  component: OurPartnersSection,
  title: 'Website-redesign/OurPartnersSection',
  args: {
    title: 'Select industry partners.',
    partners: [
      {
        name: 'Google',
        imageUrl: '',
        id: 'id',
      },
    ],
  },
};
export default Story;

const Template: ComponentStory<typeof OurPartnersSection> = (args) => (
  <OurPartnersSection {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
