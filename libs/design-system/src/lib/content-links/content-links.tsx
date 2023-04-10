import { cva, VariantProps } from 'class-variance-authority';
import { ReactNode } from 'react';
import styles from './content-links.module.scss';
import { List, Item, MobileContent } from './ui';

const className = cva(styles['content_links'], {
  variants: {
    variant: {
      home: styles['content_links--home_mod'],
      business: styles['content_links--business_mod'],
    },
  },
  defaultVariants: {
    variant: 'home',
  },
});

type ContentLinksProps = VariantProps<typeof className> & {
  children: ReactNode;
};

export function ContentLinks({ children, variant }: ContentLinksProps) {
  return <div className={className({ variant })}>{children}</div>;
}

ContentLinks.List = List;
ContentLinks.Item = Item;
ContentLinks.MobileContent = MobileContent;
