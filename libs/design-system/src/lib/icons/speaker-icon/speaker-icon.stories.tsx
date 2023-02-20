import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SpeakerIcon } from './speaker-icon';

export default {
  component: SpeakerIcon,
  title: 'Glivera/SpeakerIcon',
} as ComponentMeta<typeof SpeakerIcon>;

const Template: ComponentStory<typeof SpeakerIcon> = (args) => (
  <SpeakerIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
