import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { CheckIt } from './check-it';
import { MoreSolutionCard } from '../more-solution-card/more-solution-card';

const Story: ComponentMeta<typeof CheckIt> = {
  title: 'Website-redesign/CheckIt',
  component: CheckIt,
  argTypes: {
    title: {
      defaultValue: 'title',
      control: { type: 'text' },
    },
  },
};
export default Story;

const Template: ComponentStory<typeof CheckIt> = (args) => (
  <CheckIt {...args}>
    <MoreSolutionCard
      icon="/images/solutions/analytics.png"
      title="Performance Analytics & Insights"
      text="Target your ads to highly segmented audiences based on fans who have engaged with your music and get guaranteed airplay to your target audience with Feature.fm’s exclusive, Sponsored Songs ad unit for music."
      link="Learn more"
    />
    <MoreSolutionCard
      icon="/images/solutions/audience.png"
      title="Audience Relationship Management"
      text="Manage your relationships with your fans like never before, collect fan contact info, get real-time insights and keep your fans notified about your latest drops."
      link="Learn more"
      variant="secondary"
    />
  </CheckIt>
);

export const Default = Template.bind({});
Default.args = {};
