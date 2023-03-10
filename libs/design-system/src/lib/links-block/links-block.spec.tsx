import { render } from '@testing-library/react';

import { LinksBlock } from './links-block';

describe('LinksBlock', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <LinksBlock
        hasDecor={true}
        name="Default title"
        links={[{ name: 'Link', url: 'url' }]}
        activeItemId={false}
        handleClick={() => 0}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
