import React from 'react';
import Link from 'next/link';

export interface HeaderMenuItemProps {
  href?: string;
  text: string;
}

export function HeaderMenuItem(props: HeaderMenuItemProps) {
  const element = (
    <a
      href={props.href || '#'}
      className="text-xl desktop:text-[15px] font-light desktop:font-normal text-foreground dark:text-background"
    >
      {props.text}
    </a>
  );

  if (props.href) {
    return <Link href={props.href || '#'}>{element}</Link>;
  }

  return element;
}

export default HeaderMenuItem;
