import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Article } from './article';

const Story: ComponentMeta<typeof Article> = {
  title: 'Organisms/Article',
  component: Article,
};
export default Story;

const Template: ComponentStory<typeof Article> = (args) => (
  <Article {...args} />
);

export const Default = Template.bind({});
Default.args = {
  body: '<h5>Title</h5><p>Paragraph</p>',
};
