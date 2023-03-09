import jsyaml from 'js-yaml';
import styles from './topic-list.module.scss';

import TopicCard from '../topic-card/topic-card';
import Alert from '../alert/alert';

interface TopicListProps<T> {
  items: T[];
}

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
              let color = '';
              jsyaml.loadAll(description, function (doc: any) {
                icon = doc?.icon || '';
                text = doc?.description || '';
                color = doc?.color || '';
              });
              return (
                <li key={name} className={styles['topic_list__item']}>
                  <TopicCard
                    name={name}
                    description={text}
                    url={url}
                    iconName={icon}
                    color={color}
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
