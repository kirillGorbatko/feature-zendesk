import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { ErrorSection } from './error-section';

const Story: ComponentMeta<typeof ErrorSection> = {
  title: 'Templates/ErrorSection',
  component: ErrorSection,
  argTypes: {
    errorNumber: {
      defaultValue: 404,
      options: [404, 505],
      control: { type: 'select' },
    },
  },
};
export default Story;

const Template: ComponentStory<typeof ErrorSection> = (args) => (
  <ErrorSection {...args} />
);

export const PageNotFoundError = Template.bind({});
PageNotFoundError.args = {
  errorNumber: 404,
};

export const ServerError = Template.bind({});
ServerError.args = {
  errorNumber: 505,
};
