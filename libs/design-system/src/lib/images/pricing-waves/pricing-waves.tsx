/* eslint-disable-next-line */
import React from 'react';
import { Image } from '@featurefm/design-system'

export interface PricingWavesProps {
  className?: string,
  dark?: boolean,
  width?: string
}

export function PricingWaves(props: PricingWavesProps) {
  return (
    <div className={props.className}>
      {!props.dark ? <Image src="/img/pricing/wave.png" width={props.width}/> : <Image src="/img/pricing/wave-dark.png" width={props.width} />}
    </div>
  );
}

export default PricingWaves;
