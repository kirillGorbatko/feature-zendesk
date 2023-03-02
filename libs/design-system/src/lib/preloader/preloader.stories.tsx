import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Preloader } from './preloader';

export default {
  component: Preloader,
  title: 'Preloader',
} as ComponentMeta<typeof Preloader>;

const Template: ComponentStory<typeof Preloader> = (args) => <Preloader open />;

export const Primary = Template.bind({});
Primary.args = {};
