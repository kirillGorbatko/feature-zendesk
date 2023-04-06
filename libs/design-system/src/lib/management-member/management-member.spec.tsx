import { render } from '@testing-library/react';

import ManagementMember from './management-member';

describe('ManagementMember', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ManagementMember
        title="Title"
        text="Text"
        avatarUrl="url"
        name="Name"
        position="CEO"
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
