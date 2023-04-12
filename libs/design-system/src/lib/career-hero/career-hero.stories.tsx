import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { CareerHero } from './career-hero';

const Story: ComponentMeta<typeof CareerHero> = {
  title: 'Website-redesign/CareerHero',
  component: CareerHero,
  argTypes: {
    title: {
      defaultValue: {
        desktop: 'Join Our team today and get your own pet bear',
        mobile:
          'Want to get your own pet bear and learn to shoot lazers from your eyeballs?',
      },
    },
    description: {
      defaultValue: {
        desktop:
          'Of course you do! Who wouldn’t?.. <br/> All that and more for those who got what it takes!',
      },
    },
    picture: {
      defaultValue: {
        img: '/images/careers/hero.png',
      },
    },
  },
};
export default Story;

const Template: ComponentStory<typeof CareerHero> = (args) => (
  <CareerHero {...args} />
);

export const Default = Template.bind({});
Default.args = {};
