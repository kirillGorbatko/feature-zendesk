/* eslint-disable-next-line */
import React from 'react';

export interface PProps {
  children?: React.ReactNode;
  className?: string;
}

export function P(props: PProps) {
  return <p className={props.className}>{props.children}</p>;
}

export default P;
