import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FooterLink } from './footer-link';

export default {
  component: FooterLink,
  title: 'Templates/Footer/FooterLink',
} as ComponentMeta<typeof FooterLink>;

const Template: ComponentStory<typeof FooterLink> = (args) => (
  <FooterLink {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
