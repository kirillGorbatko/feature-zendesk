import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { ContentBlock } from './content-block';

const Story: ComponentMeta<typeof ContentBlock> = {
  title: 'Website-redesign/ContentBlock',
  component: ContentBlock,
  argTypes: {
    title: {
      defaultValue: 'Some title',
      control: { type: 'text' },
    },
    text: {
      defaultValue:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo, amet. Beatae unde in fuga exercitationem quod sed ut quis fugit!',
      control: { type: 'text' },
    },
  },
};
export default Story;

const Template: ComponentStory<typeof ContentBlock> = (args) => (
  <ContentBlock {...args} />
);

export const Default = Template.bind({});
Default.args = {};
