import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { FMFooter } from './fm-footer';

const Story: ComponentMeta<typeof FMFooter> = {
  title: 'Glivera/FMFooter',
  component: FMFooter,
};
export default Story;

const Template: ComponentStory<typeof FMFooter> = (args) => <FMFooter />;

export const Primary = Template.bind({});
Primary.args = {};
