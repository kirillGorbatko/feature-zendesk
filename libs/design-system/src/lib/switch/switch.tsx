/* eslint-disable-next-line */
import React from 'react';

export interface SwitchProps {
  toggle: boolean;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

export function Switch(props: SwitchProps) {
  return (
    <div
      className="border border-foreground dark:border-background cursor-pointer relative border-2 rounded-[19px] w-14 h-8"
      onClick={props.onClick}
    >
      <div
        className="absolute w-6 h-6 top-[3px] left-[3px] bg-foreground dark:bg-background rounded-full transition-all ease-in-out"
        style={{ left: props.toggle ? '26px' : '3px' }}
      />
    </div>
  );
}

export default Switch;
