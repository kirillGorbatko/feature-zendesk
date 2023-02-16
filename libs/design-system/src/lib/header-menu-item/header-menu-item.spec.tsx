import React from 'react';
import { render } from '@testing-library/react';
import HeaderMenuItem from './header-menu-item';

describe('HeaderMenuItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HeaderMenuItem href="#" text="Text" />);
    expect(baseElement).toBeTruthy();
  });
});
