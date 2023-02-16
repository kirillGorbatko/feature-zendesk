/* eslint-disable-next-line */
import React from 'react';

export interface HeaderButtonItemProps {
  href: string;
  text: string;
}

export function HeaderButtonItem(props: HeaderButtonItemProps) {
  return (
    <a
      href={props.href}
      className="ml-5 inline-flex w-[146px] h-10 items-center justify-center border border-transparent rounded-full text-[15px] font-medium text-background dark:text-foreground bg-foreground dark:bg-background hover:black"
    >
      {props.text}
    </a>
  );
}

export default HeaderButtonItem;
