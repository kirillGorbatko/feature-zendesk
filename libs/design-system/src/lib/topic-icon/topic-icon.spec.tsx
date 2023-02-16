import { render } from '@testing-library/react';

import { TopicIcon } from './topic-icon';

describe('TopicIcon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TopicIcon />);
    expect(baseElement).toBeTruthy();
  });
});
