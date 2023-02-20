import Link from 'next/link';
import styles from './topic-card.module.scss';

import { TopicIcon } from '../topic-icon/topic-icon';

export interface TopicCardProps {
  url: string;
  name: string;
  description: string;
  iconName: string;
}

export function TopicCard({
  url,
  name,
  description,
  iconName,
}: TopicCardProps) {
  return (
    <Link href={url} prefetch={false}>
      <a href={url}>
        <div className={styles['topic_card']}>
          <div className={styles['topic_cardicon']}>
            <TopicIcon iconName={iconName} />
          </div>
          <div>
            {name && <h5 className={styles['topic_cardtitle']}>{name}</h5>}
            {description && (
              <div className={styles['topic_card__text']}>{description} </div>
            )}
          </div>
        </div>
      </a>
    </Link>
  );
}
