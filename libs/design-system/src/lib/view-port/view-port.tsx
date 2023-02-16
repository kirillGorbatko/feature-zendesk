import React from 'react';
import classnames from 'classnames';
/* eslint-disable-next-line */
export interface ViewPortProps {
  children: React.ReactNode;
  className?: string;
  padding?: string;
}

ViewPort.defaultProps = {
  padding: '30px',
};

export function ViewPort(props: ViewPortProps) {
  return (
    <div
      className={classnames(
        `relative desktop:m-auto px-[${props.padding}] desktop:px-0 desktop:w-[1200px] desktop-xl:w-[1300px]`,
        props.className
      )}
    >
      {props.children}
    </div>
  );
}

export default ViewPort;
