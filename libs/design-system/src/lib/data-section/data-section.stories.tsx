import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { DataSection } from './data-section';
import { FEATURES_MOCK } from './data/features-mock';
import FMButton from '../fm-button/fm-button';

const Story: ComponentMeta<typeof DataSection> = {
  title: 'Website-redesign/DataSection',
  component: DataSection,
  argTypes: {
    title: {
      defaultValue:
        'Powerfully actionable data and insights that work for you.',
      control: { type: 'text' },
    },
  },
};
export default Story;

const Template: ComponentStory<typeof DataSection> = (args) => (
  <DataSection {...args}>
    <FMButton size="xxl" variant="tertiary" mobileWidth="full">
      Learn more about Analytics
    </FMButton>
  </DataSection>
);

export const Default = Template.bind({});
Default.args = {
  features: FEATURES_MOCK,
};

export const TwoCards = Template.bind({});
TwoCards.args = {
  features: FEATURES_MOCK.slice(0, 2),
};
