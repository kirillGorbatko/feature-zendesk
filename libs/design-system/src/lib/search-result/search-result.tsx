import styles from './search-result.module.scss';

import { FMButton } from '@featurefm/design-system';

import {
  FmLinkProps,
  LinksBlockImg,
  LinksWavesImg,
} from '@featurefm/design-system';
import { LinksList } from '../links-list/links-list';
import classNames from 'classnames';
import { MouseEventHandler } from 'react';

type SearchResultProps = {
  decor?: boolean;
  links: FmLinkProps[];
  query?: string | null;
  loadingStatus?: 'idle' | 'pending' | 'fullfilled' | 'rejected';
  isLoadingMore?: boolean;
  nextPageIndex: number | null;
  handleLoadMore?: MouseEventHandler<HTMLButtonElement> | undefined;
};

export function SearchResult({
  decor = true,
  links,
  query = '',
  loadingStatus = 'idle',
  isLoadingMore = false,
  nextPageIndex,
  handleLoadMore,
}: SearchResultProps) {
  return (
    <div className={styles['search_result']}>
      <div className={styles['search_result__in']}>
        <div className={styles['search_result__cube']}>
          <LinksWavesImg />
        </div>
        <div className={styles['search_result__body']}>
          {decor && (
            <div className={styles['search_result__decor']}>
              <LinksBlockImg />
            </div>
          )}
          {(loadingStatus === 'fullfilled' || loadingStatus === 'idle') && (
            <>
              {query ? (
                <h2
                  className={classNames(styles['search_result__title'], [
                    styles['search_result__title--tablet_mod'],
                  ])}
                >
                  {links.length
                    ? `Results for: “${query}”`
                    : `No results for: “${query}”`}
                </h2>
              ) : (
                <h2
                  className={classNames(styles['search_result__title'], [
                    styles['search_result__title--tablet_mod'],
                  ])}
                >
                  Start searching
                </h2>
              )}

              {!!links.length && (
                <>
                  <div className={styles['search_result__list']}>
                    <LinksList links={links} />
                  </div>
                  {nextPageIndex && (
                    <div className={styles['search_result__load_more']}>
                      <FMButton
                        handleClick={handleLoadMore}
                        isLoading={isLoadingMore}
                      >
                        Load more
                      </FMButton>
                    </div>
                  )}
                </>
              )}
            </>
          )}
          {/* {loadingStatus === 'pending' && (
            <>
              <div className={styles['search_result__loading']}>Loading.</div>
            </>
          )} */}
          {loadingStatus === 'rejected' && (
            <>
              <div className={styles['search_result__title']}>
                An error occurred while searching. Try agian later.
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
