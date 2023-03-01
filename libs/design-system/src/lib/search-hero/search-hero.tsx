import Link from 'next/link';
import { SearchForm } from '../search-form/search-form';
import { FmH1 } from '@featurefm/design-system';

import { BackIcon, SpeakerIcon } from '@featurefm/design-system';
import styles from './search-hero.module.scss';
import classNames from 'classnames';
import { Align as SearchFormAlign } from '../search-form/search-form';
import { TopicIcon } from '../topic-icon/topic-icon';

import { FormEventHandler } from 'react';

export interface SearchHeroProps {
  isBackButton?: string;
  iconName?: string;
  title?: string;
  subTitle?: string;
  align?: SearchFormAlign;
  mobAlign?: SearchFormAlign;
  initialQuery?: string | null;
  handleSubmit?: FormEventHandler<HTMLFormElement>;
  resultsCount?: number;
  isSearchResults?: boolean;
  hiddenMobileForm?: boolean;
  iconTitleMod?: boolean;
  loadingStatus?: 'idle' | 'pending' | 'fullfilled' | 'rejected';
}

export function SearchHero({
  isBackButton,
  iconName,
  iconTitleMod,
  title,
  subTitle,
  align,
  hiddenMobileForm = false,
  mobAlign = 'center',
  initialQuery = '',
  handleSubmit,
  resultsCount = 0,
  isSearchResults = false,
  loadingStatus,
}: SearchHeroProps) {
  return (
    <section
      className={classNames(styles['hero'], {
        [styles['hero--search_mod']]: initialQuery !== '',
        [styles['hero--back_mod']]: isBackButton,
        [styles['hero--loading_state']]: loadingStatus === 'pending',
      })}
    >
      <div className={styles['hero__in']}>
        {isBackButton && (
          <Link href="/">
            <div className={styles['hero__back']}>
              <BackIcon /> {isBackButton}
            </div>
          </Link>
        )}
        <div
          className={classNames(styles['hero__wrap'], {
            [styles['hero__wrap--center_align']]: align === 'center',
            [styles['hero__wrap--right_align']]: align === 'right',
          })}
        >
          <div className={styles['hero__head']}>
            {title && (
              <div
                className={classNames(styles['hero__title'], {
                  [styles['hero__title--icon_mod']]: iconTitleMod,
                })}
              >
                {iconName && (
                  <div className={styles['hero__title_icon']}>
                    <TopicIcon iconName={iconName} />
                  </div>
                )}
                <FmH1>{title}</FmH1>
              </div>
            )}
            {subTitle && (
              <div className={styles['hero__subtitle']}>{subTitle}</div>
            )}
            {initialQuery && (
              <div className={styles['hero__search']}>
                {resultsCount ? (
                  <>
                    <div className={styles['hero__search_subtitle']}>
                      Results for:
                    </div>
                    <div className={styles['hero__search_title']}>
                      {`“${initialQuery}”`}
                    </div>
                  </>
                ) : (
                  <>
                    <div className={styles['hero__search_subtitle']}>
                      No results for:
                    </div>
                    <div className={styles['hero__search_title']}>
                      {`“${initialQuery}”`}
                    </div>
                  </>
                )}
              </div>
            )}
            {!initialQuery && isSearchResults && (
              <div className={styles['hero__search']}>
                <div className={styles['hero__search_subtitle']}>
                  Start searching
                </div>
              </div>
            )}
          </div>
          <SearchForm
            mobAlign={mobAlign}
            initialQuery={initialQuery}
            handleSubmit={handleSubmit}
            isMobile={hiddenMobileForm}
          />
        </div>
      </div>
    </section>
  );
}
