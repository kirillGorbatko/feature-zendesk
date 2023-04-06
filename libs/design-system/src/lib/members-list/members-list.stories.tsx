import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MembersList } from './members-list';
import ManagementMember from '../management-member/management-member';

const Story: ComponentMeta<typeof MembersList> = {
  component: MembersList,
  title: 'Website-redesign/MembersList',
};
export default Story;

const Template: ComponentStory<typeof MembersList> = (args) => (
  <MembersList {...args}>
    <MembersList.Item>
      <ManagementMember
        variant="tertiary"
        name="Lior Aharoni"
        position="Founder & CEO"
        title="Designed to help artists build careers"
        text="We founded Feaure.fm with a mission to provide any artist, no matter how early in their career, professional music marketing tools along with guidance and education to help more artists be able to make a living doing what they love."
        avatarUrl={''}
      />
    </MembersList.Item>
    <MembersList.Item>
      <ManagementMember
        name="Dan Sander"
        position="COO"
        title="We arew in the age of the artist"
        text="Today, there are more opportunities than ever before for artists to build a fanbase and generate revenue. With 60,000 tracks uploaded to Spotify every day, we are in the “age of the artist” and the role of technology is critical to scale with this explosion of music creators."
        avatarUrl={''}
        variant="secondary"
        order="reversed"
      />
    </MembersList.Item>
  </MembersList>
);

export const Primary = Template.bind({});
Primary.args = {};
