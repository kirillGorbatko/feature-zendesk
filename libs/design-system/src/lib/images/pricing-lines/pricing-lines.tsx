/* eslint-disable-next-line */
import React from 'react'
import { Image } from '@featurefm/design-system'

export interface PricingLinesProps {
  mobile?: boolean,
  dark?: boolean,
  height?: string,
  width?: string
}

export function PricingLines(props: PricingLinesProps) {
  if (!!props.mobile) {

  }

  return !props.dark ?
    <Image src="/img/pricing/line.png" width={props.width}/> : <Image src="/img/pricing/line-dark.png" width={props.width} height={props.height}/>
}

export default PricingLines;
