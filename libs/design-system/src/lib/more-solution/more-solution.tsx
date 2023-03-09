/* eslint-disable-next-line */
import classnames from 'classnames';
import {
  Image,
  RightArrowIcon,
  Text,
  TextInlineProps,
} from '@featurefm/design-system';
import Link from 'next/link';
import React from 'react';

export interface MoreSolutionProps {
  background: string;
  icon: string;
  color: string;
  head: TextInlineProps;
  description: TextInlineProps;
  url: string;
}

export function MoreSolution(props: MoreSolutionProps) {
  return (
    <div
      className={classnames(
        `desktop:w-[630px] bg-${props.background} desktop:h-[540px] text-${props.color} p-[40px] desktop:p-[50px] desktop:flex flex-col justify-between shadow-[10px_10px_50px_0px_rgba(19,25,62,0.1)]`
      )}
    >
      <div>
        <Image src={props.icon} alt={props.head.desktop} width="118px" />
        <Text
          text={props.head}
          as="span"
          className="text-background max-w-[380px] leading-8 desktop:leading-[44px] mt-6 desktop:mt-8 text-[25px] desktop:text-[35px] font-medium"
        />
        <Text
          text={props.description}
          as="span"
          className="max-w-[470px] font-light my-10 leading-6 text-base"
        />
      </div>
      <Link href={props.url}>
        <a className="font-semibold text-base flex items-center">
          Learn More
          <div className="ml-2 text-${props.color}">
            <RightArrowIcon />
          </div>
        </a>
      </Link>
    </div>
  );
}

export default MoreSolution;
