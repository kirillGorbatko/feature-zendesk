import { render } from '@testing-library/react';

import { ContentBlock } from './content-block';

describe('ContentBlock', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ContentBlock title="Some title" text="Lorem ipsum dolor sit amet" />
    );
    expect(baseElement).toBeTruthy();
  });
});
