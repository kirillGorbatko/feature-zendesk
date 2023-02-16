/* eslint-disable-next-line */
import React from 'react';

export interface DivProps {
  children?: React.ReactNode,
  className?: string,
}

export function Div(props: DivProps) {
  return (
    <div className={props.className}>
      {props.children}
    </div>
  );
}

export default Div;
