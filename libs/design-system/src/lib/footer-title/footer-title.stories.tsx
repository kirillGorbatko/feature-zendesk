import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FooterTitle } from './footer-title';

export default {
  component: FooterTitle,
  title: 'Templates/Footer/FooterTitle',
} as ComponentMeta<typeof FooterTitle>;

const Template: ComponentStory<typeof FooterTitle> = (args) => (
  <FooterTitle {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
