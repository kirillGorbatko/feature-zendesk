import { render } from '@testing-library/react';
import { LinksBlocksItem } from './links-blocks-item';

describe('LinksBlocksItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <LinksBlocksItem
        name="Default name"
        index={0}
        activeItemId={false}
        handleClick={() => 0}
        links={[
          {
            url: './',
            name: 'Link 1',
          },
        ]}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
