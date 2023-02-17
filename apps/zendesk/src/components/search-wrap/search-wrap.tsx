import { SearchHero } from '@featurefm/design-system';
import { Align as SearchFormAlign } from '@featurefm/design-system';
import { NextApiRequest, NextApiResponse } from 'next';
import { useRouter } from 'next/router';
import { Dispatch, SetStateAction } from 'react';
import { connectToSearchAPI } from '../../api/search';

interface SearchHeroWrapProps {
  title?: string;
  subTitle?: string;
  align?: SearchFormAlign;
  mobAlign?: SearchFormAlign;
  initialQuery?: string;
  setSearchResultsData?: Dispatch<SetStateAction<any[]>>;
  setUserQuery?: Dispatch<SetStateAction<string>>;
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

  // { query }: SearchWrapProps
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const userQuery = e?.target?.query?.value;

    if (!userQuery) return;

    if (!userQuery?.replace(/\s/g, '').length) {
      e.target.query.value = '';
      return;
    }

    const encodedQuery = encodeURIComponent(userQuery);

    console.log(window.location);


    router.push(`/search?query=${encodedQuery}`);

    if (router.route === '/search') {
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
        setUserQuery(userQuery);
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
