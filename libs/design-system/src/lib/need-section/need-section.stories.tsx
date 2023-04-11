import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { FMButton } from '../fm-button/fm-button';
import { NeedSection } from './need-section';

const Story: ComponentMeta<typeof NeedSection> = {
  title: 'Website-redesign/NeedSection',
  component: NeedSection,
  argTypes: {
    label: {
      defaultValue: 'Want to learn more about Enterprise solutions?',
      control: { type: 'text' },
    },
    features: {
      defaultValue: [
        {
          title: 'API + Automation',
          description:
            'Automatically create all of your marketing assets at scale using our advanced API.',
        },
        {
          title: 'White Label Solutions',
          description:
            'Provide an out of the box marketing suite directly to your artist and label customers, connected to your platform.',
        },
        {
          title: 'Custom Solution Architecture',
          description:
            'No enterprise solutions are alike. We will work with you to customize a dedicated solution that meets your goals and leverages our powerful enterprise level technology.',
        },
      ],
    },
  },
};
export default Story;

const Template: ComponentStory<typeof NeedSection> = (args) => (
  <NeedSection {...args}>
    <FMButton mobileWidth="full" size="xxl">
      Book a demo
    </FMButton>
  </NeedSection>
);

export const Default = Template.bind({});
Default.args = {};
