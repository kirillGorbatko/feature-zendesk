import { render } from '@testing-library/react';
import {
  FmSolutionsBenefit,
  FmSolutionsBenefitProps,
} from '../fm-solutions-benefit/fm-solutions-benefit';

import { FmSolutionsBenefitSection } from './fm-solutions-benefit-section';

const featuresList: FmSolutionsBenefitProps[] = [
  {
    title: 'T1',
    descr: '123',
  },
  {
    title: 'T1',
    descr: '123',
  },
  {
    title: 'T1',
    descr: '123',
  },
];
describe('FmSolutionsBenefitSection', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <FmSolutionsBenefitSection title="More amazing features that apply to all links">
        {featuresList && featuresList.length > 0 && (
          <FmSolutionsBenefitSection.List>
            {featuresList.map(({ title, descr }, index) => {
              let variant: FmSolutionsBenefitProps['variant'] = 'red';

              switch (index % 3) {
                case 0:
                  variant = 'red';
                  break;
                case 1:
                  variant = 'turquoise';
                  break;
                case 2:
                  variant = 'purple';
                  break;
                default:
                  break;
              }

              return (
                <FmSolutionsBenefitSection.Item key={index}>
                  <FmSolutionsBenefit
                    title={title}
                    descr={descr}
                    variant={variant}
                  />
                </FmSolutionsBenefitSection.Item>
              );
            })}
          </FmSolutionsBenefitSection.List>
        )}
      </FmSolutionsBenefitSection>
    );
    expect(baseElement).toBeTruthy();
  });
});
