import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Widget } from './widget';

const Story: ComponentMeta<typeof Widget> = {
  title: 'Atoms/Widget',
  component: Widget,
};
export default Story;

const Template: ComponentStory<typeof Widget> = () => <Widget />;

export const Default = Template.bind({});
Default.args = {};
