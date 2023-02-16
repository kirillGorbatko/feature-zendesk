import React from 'react';
import classnames from 'classnames';

export interface H4Props {
  children?: React.ReactNode;
  className?: string;
}

export function H4(props: H4Props) {
  return (
    <div
      className={classnames(
        'font-supergt font-normal text-[40px] desktop:text-[50px] leading-[50px] desktop:leading-[56px]',
        props.className
      )}
    >
      {props.children}
    </div>
  );
}

export default H4;
