import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { BannerSection } from './banner-section';
import { FMButton } from '../fm-button/fm-button';

const Story: ComponentMeta<typeof BannerSection> = {
  title: 'Website-redesign/BannerSection',
  component: BannerSection,
  argTypes: {
    title: {
      defaultValue: 'Fans are the lifeblood of your business.',
      control: { type: 'text' },
    },
    description: {
      defaultValue:
        'Building relationships with fans is the most important asset to grow an artist’s career.',
      control: { type: 'text' },
    },
    image: {
      defaultValue: {
        img: '/images/business-fans/fans.png',
        imgMob: '/images/business-fans/fans-mobile.png',
      },
    },
  },
};
export default Story;

const Template: ComponentStory<typeof BannerSection> = (args) => (
  <BannerSection {...args}>
    <FMButton mobileWidth="full" size="xxl" variant="tertiary">
      Fan Base Relationship Management
    </FMButton>
  </BannerSection>
);

export const Default = Template.bind({});
Default.args = {};
