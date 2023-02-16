import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MainHeroTrustedBy } from './main-hero-trusted-by';

export default {
  component: MainHeroTrustedBy,
  title: 'MainHeroTrustedBy',
} as ComponentMeta<typeof MainHeroTrustedBy>;

const Template: ComponentStory<typeof MainHeroTrustedBy> = (args) => (
  <MainHeroTrustedBy {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  text: '',
};
