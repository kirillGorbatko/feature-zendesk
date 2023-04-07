import { render } from '@testing-library/react';

import { KpiList } from './kpi-list';

describe('KpiList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <KpiList
        items={[
          {
            kpi: '+300K',
            title: 'Artists',
          },
          {
            kpi: '10%',
            title: 'of recorded music',
          },
          {
            kpi: '+200M',
            title: 'Fans collected',
          },
        ]}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
