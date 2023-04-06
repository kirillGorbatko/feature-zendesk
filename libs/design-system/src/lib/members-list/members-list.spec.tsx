import { render } from '@testing-library/react';

import MembersList from './members-list';
import ManagementMember from '../management-member/management-member';

describe('MembersList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <MembersList>
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
      </MembersList>
    );
    expect(baseElement).toBeTruthy();
  });
});
