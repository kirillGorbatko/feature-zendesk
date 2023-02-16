import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LinksBlockImg } from './links-block-image';

export default {
  component: LinksBlockImg,
  title: 'Images/LinksBlockImg',
} as ComponentMeta<typeof LinksBlockImg>;

const Template: ComponentStory<typeof LinksBlockImg> = (args) => (
  <LinksBlockImg {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
