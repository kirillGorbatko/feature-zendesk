import { render } from '@testing-library/react';

import { TopicList } from './topic-list';

// FIXME: add correct mock data
describe('TopicList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TopicList items={[{}]} />);
    expect(baseElement).toBeTruthy();
  });
});
