import React from 'react';
import classnames from 'classnames';

export interface H1Props {
  children?: React.ReactNode;
  className?: string;
}

export function H1(props: H1Props) {
  return (
    <div
      className={classnames(
        'font-supergt font-normal text-[60px] leading-[69px] desktop:text-[100px] desktop:leading-[106px]',
        props.className
      )}
    >
      {props.children}
    </div>
  );
}

export default H1;
