/* eslint-disable-next-line */
import { Button, Checkmark } from '@featurefm/design-system';
import React from 'react';
import classnames from 'classnames';

export interface CurrencyElement {
  code: string;
  symbol: string;
}

export interface PricingSummaryBoxProps {
  planName: string;
  cost: string;
  currency?: CurrencyElement;
  isCustomPrice?: boolean;
  cta: string;
  description: string;
  isAnnual?: boolean;
  className?: string;
  buttonType: 'primary' | 'secondary' | 'tertiary';
  mainColor: string;
  features: string[];
}

export function PricingSummaryBox(props: PricingSummaryBoxProps) {
  return (
    <div
      className={classnames(
        'relative border-2 dark:border-background border-foreground border-solid h-[240px] desktop:h-fit p-4 desktop:p-12 w-full desktop:w-[400px] z-10 dark:text-background bg-background dark:bg-foreground',
        props.className
      )}
    >
      <div className="uppercase text-[13px] h-fit font-semibold">
        {props.planName}
      </div>
      <div className="font-regular text-center desktop:text-left mt-4">
        {!props.isCustomPrice && (
          <span className="text-[17px]">
            {(props.currency && props.currency.symbol) || '$'}
          </span>
        )}
        <span className="font-supergt text-5xl">{props.cost}</span>
        {!props.isCustomPrice && (
          <span className="text-[15px] font-light ml-2">/mo</span>
        )}
      </div>
      {!props.isCustomPrice && (
        <div
          className={classnames(
            'font-normal text-[13px] text-center desktop:text-left mt-1 text-muted leading-5',
            {
              invisible: !props.isAnnual,
            }
          )}
        >
          * Billed Annually
        </div>
      )}
      <div className="text-sm text-center desktop:text-left font-normal mt-4">
        {props.description}
      </div>
      <div className="mt-5 button absolute desktop:relative -bottom-7 m-auto left-0 flex justify-center desktop:justify-start w-full">
        <Button
          text={props.cta}
          type={props.buttonType}
          size="normal"
          className="w-4/5 desktop:w-full"
        />
      </div>
      <div className="mt-12 hidden desktop:block">
        {props.features.map((x, index) => (
          <div
            key={index}
            className="font-regular text-sm flex items-center leading-6"
          >
            <span className="checkmark mr-2">
              <Checkmark fill={props.buttonType} positive />
            </span>
            {x}
          </div>
        ))}
      </div>
      <style jsx>
        {`
          .button :global(button) {
            border: 1px solid ${props.mainColor};
          }

          .checkmark {
            color: ${props.mainColor};
          }
        `}
      </style>
    </div>
  );
}

export default PricingSummaryBox;
