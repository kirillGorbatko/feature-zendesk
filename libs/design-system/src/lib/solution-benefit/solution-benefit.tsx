/* eslint-disable-next-line */
import { Image, Text, TextInlineProps } from '@featurefm/design-system';
import React from 'react';

export interface SolutionBenefitProps {
  imageUrl: string;
  title: TextInlineProps;
  description: TextInlineProps;
  count?: number;
}

export function SolutionBenefit(props: SolutionBenefitProps) {
  let color = "primary1";
  if (props.count === 0) {
    color = "primary2"
  } else if (props.count === 1) {
    color = "primary3"
  } else {
    color = "primary1"
  }
  return (
    <div className="relative mt-10 desktop:[&:nth-child(2)]:mt-20 py-[50px] px-[30px] h-[330px] desktop:h-[380px] shadow-[10px_10px_50px_0px_rgba(19,25,62,0.1)] desktop:[&:nth-child(3)]:mt-40">
      <div className={`absolute top-[42px] -left-[2px] z-10 w-[4px] h-20 bg-${color}`}/>
      {props.imageUrl && <Image src={props.imageUrl} width="120px" height="125px" />}
      <Text text={props.title} className="text-[26px] font-medium"/>
      <Text text={props.description} className="mt-[50px] text-base leading-6 font-light max-w-[380px]"/>
    </div>
  );
}

export default SolutionBenefit;
