/* eslint-disable-next-line */
import React from 'react';
import { Switch } from '@featurefm/design-system';

export interface PricingPeriodSelectorProps {
  isAnnual: boolean
  onChange: (isAnnual: boolean) => void
}

export function PricingPeriodSelector(props: PricingPeriodSelectorProps) {
  return (
    <div className="absolute top-0 right-0 flex flex-row items-center gap-x-3 text-sm font-regular">
      <div>Monthly</div>
      <Switch toggle={props.isAnnual} onClick={() => props.onChange(!props.isAnnual)} />
      <div>Yearly</div>
    </div>
  );
}

export default PricingPeriodSelector;
