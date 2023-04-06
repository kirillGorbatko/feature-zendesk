import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PartnersLogos } from './partners-logos';

export default {
  component: PartnersLogos,
  title: 'Website-redesign/PartnersLogos',
} as ComponentMeta<typeof PartnersLogos>;

const Template: ComponentStory<typeof PartnersLogos> = (args) => {
  const logosData = [
    {
      src: '/images/professionals-logos/1.png',
      alt: 'security group logo',
    },
    {
      src: '/images/professionals-logos/1.png',
      alt: 'awal logo',
    },
    {
      src: '/images/professionals-logos/1.png',
      alt: 'disraptor records logo',
    },
    {
      src: '/images/professionals-logos/1.png',
      alt: 'redeye worldwide logo',
    },
    {
      src: '/images/professionals-logos/1.png',
      alt: 'complex logo',
    },
  ];

  return <PartnersLogos data={logosData} />;
};

export const Primary = Template.bind({});
