import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { BackLink } from './back-link';

const Story: ComponentMeta<typeof BackLink> = {
  title: 'Glivera/BackLink',
  component: BackLink,
};
export default Story;

const Template: ComponentStory<typeof BackLink> = () => (
  <BackLink>Back</BackLink>
);

export const Default = Template.bind({});
Default.args = {};
