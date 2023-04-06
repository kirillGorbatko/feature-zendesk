import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { FMButton } from '../fm-button/fm-button';
import { BusinessHero } from './business-hero';

const Story: ComponentMeta<typeof BusinessHero> = {
  title: 'Website-redesign/BusinessHero',
  component: BusinessHero,
  argTypes: {
    title: {
      defaultValue: 'Scalable Marketing for your catalog.',
      control: { type: 'text' },
    },
    descr: {
      defaultValue:
        'Grow your business with our unified marketing stack, built for any scale and trusted by top music companies.',
      control: { type: 'text' },
    },
  },
};
export default Story;

const Template: ComponentStory<typeof BusinessHero> = (args) => (
  <BusinessHero {...args}>
    <FMButton variant="tertiary" size="lg" mobileWidth="full">
      Try free for 14-days
    </FMButton>
  </BusinessHero>
);

export const Default = Template.bind({});
Default.args = {};
