import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PreloaderLogo } from './preloader-logo';

export default {
  component: PreloaderLogo,
  title: 'PreloaderLogo',
} as ComponentMeta<typeof PreloaderLogo>;

const Template: ComponentStory<typeof PreloaderLogo> = (args) => (
  <PreloaderLogo />
);

export const Primary = Template.bind({});
