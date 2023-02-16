/* eslint-disable-next-line */
import React from 'react';
import Link from 'next/link';
import classnames from 'classnames';

export interface PricingTierSelectorProps {
  isArtist: boolean
}

export function PricingTierSelector(props: PricingTierSelectorProps) {
  return (
    <div className="absolute top-0 left-0 text-lg font-regular">
      <Link href="/pricing/artist">
        <a
          className={classnames('mr-5', {
            'text-disabled': !props.isArtist,
          })}
        >
          Artist
        </a>
      </Link>
      <Link href="/pricing/business">
        <a
          className={classnames({
            'text-disabled': props.isArtist,
          })}
        >
          Business
        </a>
      </Link>
    </div>
  );
}

export default PricingTierSelector;
