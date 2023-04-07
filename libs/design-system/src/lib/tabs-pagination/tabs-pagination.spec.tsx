import { render } from '@testing-library/react';
import TabsPagination from './tabs-pagination';

describe('TabsPagination', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <TabsPagination amount={4} handleClick={() => 1} />
    );
    expect(baseElement).toBeTruthy();
  });
});
