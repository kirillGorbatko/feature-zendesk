import React from 'react';
import classnames from 'classnames';

export interface H2Props {
  children?: React.ReactNode;
  className?: string;
}

export function H2(props: H2Props) {
  return (
    <div
      className={classnames(
        // 'font-supergt font-normal text-[60px] leading-[70px] desktop:text-[90px] desktop:leading-[105px]',
        props.className
      )}
    >
      {props.children}
    </div>
  );
}

export default H2;
