/* eslint-disable-next-line */
import classnames from 'classnames';
import React from 'react';

export interface H5Props {
  children?: React.ReactNode;
  className?: string
}

export function H5(props: H5Props) {
  return (
    <div
      className={classnames(
        'font-supergt font-regular text-[17px] leading-[20px]',
        props.className
      )}
    >
      {props.children}
    </div>
  );
}

export default H5;
