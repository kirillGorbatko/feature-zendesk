import React from 'react';
import { Image } from '@featurefm/design-system';
import Link from 'next/link';

export interface SolutionMenuItemProps {
  name: string;
  href: string;
  description: string;
  img?: string;
}

export function SolutionMenuItem(props: SolutionMenuItemProps) {
  return (
    <Link key={props.name} href={props.href}>
      <a
        href={props.href}
        className="flex items-start rounded-lg hover:bg-gray-50 items-center"
      >
        {props.img && (
          <div className="flex-shrink-0 flex justify-center w-[83px] text-background">
            <Image src={props.img} alt={props.name} />
          </div>
        )}
        <div className="ml-4">
          <p className="text-sm font-medium text-gray-900">{props.name}</p>
          <p className="mt-3 text-xs font-light text-muted">
            {props.description}
          </p>
        </div>
      </a>
    </Link>
  );
}

export default SolutionMenuItem;
