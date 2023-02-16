import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Image } from './image';

export default {
  component: Image,
  title: 'Atoms/Image',
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;

export const Default = Template.bind({});

Default.args = {};
