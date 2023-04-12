import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { JoinSection } from './join-section';

const Story: ComponentMeta<typeof JoinSection> = {
  title: 'Website-redesign/JoinSection',
  component: JoinSection,
  argTypes: {
    title: {
      defaultValue: 'Ready to join us?',
      control: { type: 'text' },
    },
    description: {
      defaultValue:
        'We are always open to connecting with people who believe in our mission and eager to join the team.',
      control: { type: 'text' },
    },
    ctaButton: {
      defaultValue: {
        link: 'careers@feature.fm',
        text: 'Reach out to us at',
      },
    },
  },
};
export default Story;

const Template: ComponentStory<typeof JoinSection> = (args) => (
  <JoinSection {...args} />
);

export const Default = Template.bind({});
Default.args = {};
