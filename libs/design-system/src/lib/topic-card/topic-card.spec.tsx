import { render } from '@testing-library/react';

import { TopicCard } from './topic-card';

describe('TopicCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <TopicCard
        url="./"
        name="Default name"
        description="Default descr"
        iconName="bulb"
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
