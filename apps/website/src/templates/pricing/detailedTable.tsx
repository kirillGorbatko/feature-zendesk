import React, { useEffect, useState, useRef } from 'react';
import { Checkmark } from '@featurefm/design-system';
import classnames from 'classnames'
import dynamic from 'next/dynamic'

export interface DetailedTableProps {
  data: any;
  code: string;
  name: string;
}

const ReactTooltip = dynamic(() => import('react-tooltip'), {
  ssr: false,
})

export function DetailedTable(props: DetailedTableProps) {
  return (
    <>
      <div className="text-sm font-semibold sticky top-10 z-20 h-[44px] flex items-center">
        {props.name}
      </div>
      <div id={props.code} className={classnames("relative font-normal text-sm", {
        'mb-10': props.code !== "support"
      })}>
        {props.data.map((x, index) => (
          <div key={index} className="flex flex-row justify-end">
            <ReactTooltip
              type="info"
              backgroundColor="white"
              multiline
              textColor="black"
              id={x.name}
            >
              <div className="w-48">{x.tooltip}</div>
            </ReactTooltip>
            <div
              className="h-14 w-[240px] z-10 p-4 flex items-center border border-2 border-line1 dark:border-[#737373] border-b-0 border-r-0"
              data-tip
              data-for={x.name}
            >
              {x.name}
            </div>
            <div className="h-14 w-[240px] p-4 flex items-center justify-center border border-2 border-line1 dark:border-[#737373] border-x-foreground dark:border-r-background border-l-0 border-b-0 text-primary1">
              {x.planOne === true || x.planOne === false ? (
                <Checkmark positive={x.planOne} />
              ) : (
                <div className="z-10">{x.planOne}</div>
              )}
            </div>
            <div className="h-14 w-[240px] p-4 flex items-center justify-center border border-2 border-line1 dark:border-[#737373] border-r-foreground dark:border-r-background border-b-0 border-x-0 text-primary2">
              {x.planTwo === true || x.planTwo === false ? (
                <Checkmark fill="secondary" positive={x.planTwo} />
              ) : (
                <div className="z-10">{x.planTwo}</div>
              )}
            </div>
            <div className="h-14 w-[240px] p-4 flex items-center justify-center border border-2 border-line1 dark:border-[#737373] border-b-0 border-l-0 text-[#959595]">
              {x.planThree === true || x.planThree === false ? (
                <Checkmark fill="grey" positive={x.planThree} />
              ) : (
                <div className="z-10">{x.planThree}</div>
              )}
            </div>
          </div>
        ))}
        <div className="absolute border border-2 border-line1 dark:border-[#737373] top-0 w-full h-full" />
        <div className="absolute border border-2 left-[240px] border-foreground dark:border-background top-0 w-[480px] h-full" />
        <style jsx global>
          {`
            .__react_component_tooltip.show {
              opacity: 1 !important;
              box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.2);
            }
          `}
        </style>
      </div>
    </>
  );
}

export default DetailedTable;
