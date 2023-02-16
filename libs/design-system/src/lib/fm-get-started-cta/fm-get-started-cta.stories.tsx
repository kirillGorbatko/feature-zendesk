import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { FmGetStartedCta } from './fm-get-started-cta';

const Story: ComponentMeta<typeof FmGetStartedCta> = {
  title: 'Molecules/FmGetStartedCta',
  component: FmGetStartedCta,
};
export default Story;

const Template: ComponentStory<typeof FmGetStartedCta> = (args) => (
  <FmGetStartedCta {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: 'Get started for free',
  descr: (
    <>
      <p>
        You can use Feature.fm for free or subscribe to one of our paid plans.
      </p>
      <p>All paid plans come with a free trial of our Pro plan'</p>
    </>
  ),
};
