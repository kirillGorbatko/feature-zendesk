import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LinksWavesImg } from './links-waves-image';

export default {
  component: LinksWavesImg,
  title: 'Images/LinksWavesImg',
} as ComponentMeta<typeof LinksWavesImg>;

const Template: ComponentStory<typeof LinksWavesImg> = (args) => (
  <LinksWavesImg {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
