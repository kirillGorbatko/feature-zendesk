import styles from './more-solution-card.module.scss';
import classNames from 'classnames';
import Image from 'next/image';
import LinkWithArrow from '../link-with-arrow/link-with-arrow';

export interface MoreSolutionCardProps {
  icon?: string;
  title?: string;
  text?: string;
  link?: string;
  variant?: 'primary' | 'secondary';
}

export function MoreSolutionCard({
  icon,
  title,
  text,
  link,
  variant,
}: MoreSolutionCardProps) {
  return (
    <div
      className={classNames(styles['card'], {
        [styles['card--v2_mod']]: variant === 'secondary',
      })}
    >
      <div className={styles['icon']}>
        {icon && <Image src={icon} layout="fill" />}
      </div>
      <div className={styles['title']}>{title}</div>
      <div className={styles['text']}>{text}</div>
      <div className={styles['link']}>
        <LinkWithArrow
          href="#"
          color={variant === 'secondary' ? 'secondary' : undefined}
          hover={variant !== 'secondary' ? 'secondary' : undefined}
        >
          {link}
        </LinkWithArrow>
      </div>
    </div>
  );
}
