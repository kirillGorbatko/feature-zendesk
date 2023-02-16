/* eslint-disable-next-line */
import React from 'react';

export interface SpanProps {
  children?: React.ReactNode,
  className?: string,
}

export function Span(props: SpanProps) {
  return (
    <span className={props.className}>
      {props.children}
    </span>
  );
}

export default Span;
