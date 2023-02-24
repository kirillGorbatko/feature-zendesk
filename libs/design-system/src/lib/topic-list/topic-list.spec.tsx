import { render } from '@testing-library/react';

import { TopicList } from './topic-list';

describe('TopicList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <TopicList
        items={[
          {
            name: 'Name 1',
            text: 'Text 1',
            url: './',
            icon: 'bulb',
          },
          {
            name: 'Name 2',
            text: 'Text 2',
            url: './',
            icon: 'speaker',
          },
        ]}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
