import jsyaml from 'js-yaml';
import styles from './topic-list.module.scss';

import TopicCard from '../topic-card/topic-card';
import Alert from '../alert/alert';

interface TopicListProps<T> {
  items: T[];
}

// const MAPPING = new Map();
// MAPPING.set(0, 'bulb');
// MAPPING.set(1, 'circle');
// MAPPING.set(2, 'flag');
// MAPPING.set(3, 'rectangles');
// MAPPING.set(4, 'speaker');
// MAPPING.set(5, 'triangles');
// MAPPING.set(6, 'union');
// MAPPING.set(7, 'wrench');

export function TopicList<T extends Record<string, any>>({
  items,
}: TopicListProps<T>) {
  return (
    <section className={styles['topic_list']}>
      <div className={styles['topic_list__in']}>
        {items && items.length ? (
          <ul className={styles['topic_list__body']}>
            {items.map(({ name, description, url, position }: T) => {
              let icon = '';
              let text = '';
              jsyaml.loadAll(description, function (doc: any) {
                icon = doc?.icon || '';
                text = doc?.description || '';
              });
              return (
                <li key={name} className={styles['topic_list__item']}>
                  <TopicCard
                    name={name}
                    description={text}
                    url={url}
                    iconName={icon}
                  />
                </li>
              );
            })}
          </ul>
        ) : (
          <Alert>No categories found!</Alert>
        )}
      </div>
    </section>
  );
}

export default TopicList;
