import {
  BreadCrumbs,
  BreadCrumbsItemProps,
  Dropdown,
  DropdownItem,
} from '@featurefm/design-system';
import styles from './article-hero.module.scss';
import classNames from 'classnames';

export interface ArticleHeroProps {
  title: string;
  breadCrumbs: BreadCrumbsItemProps[];
  sectionsArticles: DropdownItem[];
}

export function ArticleHero({
  title,
  breadCrumbs,
  sectionsArticles,
}: ArticleHeroProps) {
  return (
    <div className={styles['article_hero']}>
      <div className={styles['article_hero__body']}>
        <div className={styles['article_hero__bread_crumbs']}>
          <BreadCrumbs items={breadCrumbs} />
        </div>
        <div
          className={classNames(styles['article_hero__dropdown'], [
            styles['article_hero__dropdown--mobile_mod'],
          ])}
        >
          {sectionsArticles && <Dropdown items={sectionsArticles} />}
        </div>
        <h1 className={styles['article_hero__title']}>{title}</h1>
      </div>
    </div>
  );
}
