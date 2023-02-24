import { SearchHero } from '@featurefm/design-system';
import { Align as SearchFormAlign } from '@featurefm/design-system';
import { NextApiRequest, NextApiResponse } from 'next';
import { useRouter } from 'next/router';
import { Dispatch, SetStateAction, FormEvent } from 'react';
import { connectToSearchAPI } from '../../api/search';

interface SearchHeroWrapProps {
  title?: string;
  subTitle?: string;
  align?: SearchFormAlign;
  mobAlign?: SearchFormAlign;
  initialQuery?: string;
  setSearchResultsData?: Dispatch<SetStateAction<any[]>>;
  setUserQuery?: Dispatch<SetStateAction<string>>;
  loadingStatus?: 'idle' | 'pending' | 'fullfilled' | 'rejected';
  setLoadingStatus?: Dispatch<
    SetStateAction<'idle' | 'pending' | 'fullfilled' | 'rejected'>
  >;
  setNextPageIndex?: Dispatch<SetStateAction<number>>;
  resultsCount?: number;
  isSearchResults?: boolean;
  hostUrl?: string | null;
}

function SearchWrap(props: SearchHeroWrapProps) {
  const router = useRouter();
  const {
    setLoadingStatus,
    setSearchResultsData,
    setUserQuery,
    setNextPageIndex,
    hostUrl,
  } = props;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const userQuery = e?.currentTarget?.query?.value;

    if (!userQuery) return;

    if (!userQuery?.replace(/\s/g, '').length) {
      e.currentTarget.query.value = '';
      return;
    }

    const encodedQuery = encodeURIComponent(userQuery);

    router.push(`/search?query=${encodedQuery}`);

    if (router.route === '/search') {
      setUserQuery(userQuery);

      try {
        setLoadingStatus('pending');

        const response = await connectToSearchAPI({
          query: encodeURIComponent(userQuery),
          hostUrl,
        });

        const { searchResults, nextPageIndex, errorMessage } = response;

        if (errorMessage) {
          throw new Error(errorMessage);
        }

        setSearchResultsData(searchResults || []);
        setNextPageIndex(nextPageIndex);
        setLoadingStatus('fullfilled');
      } catch (error) {
        setLoadingStatus('rejected');
        console.log(error.message);
      }
    }
  };

  return <SearchHero {...props} handleSubmit={handleSubmit} />;
}

export default SearchWrap;
