import { render } from '@testing-library/react';

import { InfoRow } from './info-row';

describe('InfoRow', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <InfoRow>
        <InfoRow.Column>
          <InfoRow.Head>
            <InfoRow.Title>Some Title</InfoRow.Title>
            <InfoRow.Label>Some label</InfoRow.Label>
          </InfoRow.Head>
          <InfoRow.Article theme="Some theme" text="Some text">
            Button
          </InfoRow.Article>
          <InfoRow.AnimationBlock>Animation container</InfoRow.AnimationBlock>
        </InfoRow.Column>
      </InfoRow>
    );
    expect(baseElement).toBeTruthy();
  });
});
