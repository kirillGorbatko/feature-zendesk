import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ForProfessionalsCta } from './for-professionals-cta';

export default {
  component: ForProfessionalsCta,
  title: 'Marketing/ForProfessionalsCta',
} as ComponentMeta<typeof ForProfessionalsCta>;

const Template: ComponentStory<typeof ForProfessionalsCta> = (args) => (
  <ForProfessionalsCta {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
