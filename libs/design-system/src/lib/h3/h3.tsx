/* eslint-disable-next-line */
import React from 'react';
import classnames from 'classnames';

export interface H3Props {
  children?: React.ReactNode;
  className?: string;
}

export function H3(props: H3Props) {
  return (
    <div
      className={classnames(
        'font-supergt font-regular leading-[47px] tablet:leading-[70px] text-[40px] tablet:text-[60px]',
        props.className
      )}
    >
      {props.children}
    </div>
  );
}

export default H3;
