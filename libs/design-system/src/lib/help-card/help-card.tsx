import Link from 'next/link';
import { HelpCardIcon, HelpCardIconProps } from '@featurefm/design-system';
import classNames from 'classnames';

import styles from './help-card.module.scss';

export interface HelpCardProps {
  href: string;
  title: string;
  description: string;
  variant?: 'primary' | 'secondary' | 'tertiary';
  iconName: HelpCardIconProps['iconName'];
  iconVariant?: HelpCardIconProps['variant'];
}

export function HelpCard({
  href,
  title,
  description,
  variant = 'primary',
  iconName,
  iconVariant,
}: HelpCardProps) {
  return (
    <div
      className={classNames(styles['help_card'], {
        [styles['help_card--primary']]: variant === 'primary',
        [styles['help_card--secondary']]: variant === 'secondary',
        [styles['help_card--tertiary']]: variant === 'tertiary',
      })}
    >
      <Link href={href} className="help_card__link">
        <>
          <HelpCardIcon iconName={iconName} variant={iconVariant} />
          <div className={styles['help_card__content']}>
            <div className={styles['help_card__title']}>{title}</div>
            <div className={styles['help_card__descr']}>{description}</div>
          </div>
        </>
      </Link>
    </div>
  );
}

export default HelpCard;
