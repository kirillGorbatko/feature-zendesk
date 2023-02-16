/* eslint-disable-next-line */
import React, { MouseEventHandler, useState } from 'react';
import classnames from 'classnames';

export interface PricingDetailSelectorProps {
  options: {
    code: string;
    name: string;
  }[];
  onClick?: (selected: string) => void;
}

export function PricingDetailSelector(props: PricingDetailSelectorProps) {
  const onSelected = (e: any) => {
    const option = e.currentTarget.getAttribute('data-option');

    if (props.onClick) {
      props.onClick(option);
    }
  };

  return (
    <div className="cursor-pointer flex flex-col text-normal text-sm">
      {props.options.map((x, index) => (
        <div
          key={index}
          className="py-2"
          data-option={x.code}
          onClick={onSelected}
        >
          {x.name}
        </div>
      ))}
    </div>
  );
}

export default PricingDetailSelector;
