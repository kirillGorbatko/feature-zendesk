import { render } from '@testing-library/react';

import { LinksBlocksList } from './links-blocks-list';
import { LinksBlocksItem } from '../links-blocks-item/links-blocks-item';

describe('LinksBlocksList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <LinksBlocksList>
        <LinksBlocksItem
          name="Default name 1"
          index={0}
          links={[
            { url: './', name: 'Link 1' },
            { url: './', name: 'Link 2' },
            { url: './', name: 'Link 3' },
            { url: './', name: 'Link 4' },
          ]}
        />
      </LinksBlocksList>
    );
    expect(baseElement).toBeTruthy();
  });
});
