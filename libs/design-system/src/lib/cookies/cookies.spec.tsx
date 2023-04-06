import { render } from '@testing-library/react';

import { Cookies } from './cookies';

describe('Cookies', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Cookies>
        <Cookies.ActionBar>
          <Cookies.ActionItem>Action 1</Cookies.ActionItem>
          <Cookies.ActionItem>Action 2</Cookies.ActionItem>
        </Cookies.ActionBar>
        <Cookies.Content>Some text</Cookies.Content>
      </Cookies>
    );
    expect(baseElement).toBeTruthy();
  });
});
