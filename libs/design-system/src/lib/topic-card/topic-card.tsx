import Link from 'next/link';
import styles from './topic-card.module.scss';

import { TopicIcon } from '../topic-icon/topic-icon';

export interface TopicCardProps {
  url: string;
  name: string;
  description: string;
  iconName: string;
  color: string;
}

export function TopicCard({
  url,
  name,
  description,
  iconName,
  color,
}: TopicCardProps) {
  return (
    <Link href={url} prefetch={false}>
      <a href={url}>
        <div className={styles['topic_card']}>
          <div className={styles['topic_card__icon']}>
            <TopicIcon iconName={iconName} color={color} />
          </div>
          <div>
            {name && <h5 className={styles['topic_card__title']}>{name}</h5>}
            {description && (
              <div className={styles['topic_card__text']}>{description} </div>
            )}
          </div>
        </div>
      </a>
    </Link>
  );
}

export default TopicCard;
