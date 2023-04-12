import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { QualitiesSection } from './qualities-section';

const Story: ComponentMeta<typeof QualitiesSection> = {
  title: 'Website-redesign/QualitiesSection',
  component: QualitiesSection,
  argTypes: {
    title: {
      defaultValue: {
        desktop: 'We are looking for…',
      },
    },
    qualities: {
      defaultValue: [
        {
          title: 'Quality 1',
          description: 'Lorem ipsum dolor sit amet, consec tetur adipiscing.',
        },
        {
          title: 'Quality 2',
          description: 'Lorem ipsum dolor sit amet, consec tetur adipiscing.',
        },
      ],
    },
  },
};
export default Story;

const Template: ComponentStory<typeof QualitiesSection> = (args) => (
  <QualitiesSection {...args} />
);

export const Default = Template.bind({});
Default.args = {};
