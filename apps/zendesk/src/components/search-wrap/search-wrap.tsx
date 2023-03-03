import { SearchHero, SearchHeroProps } from '@featurefm/design-system';
// import { Align as SearchFormAlign } from '@featurefm/design-system';
// import { NextApiRequest, NextApiResponse } from 'next';
import { useRouter } from 'next/router';
import { Dispatch, SetStateAction, FormEvent } from 'react';
import { connectToSearchAPI } from '../../api/search';
import { PromiseStatus } from '@featurefm/shared/types';

interface SearchHeroWrapProps {
  setSearchResultsData?: Dispatch<SetStateAction<any[]>>;
  setUserQuery?: Dispatch<SetStateAction<string>>;
  setLoadingStatus?: Dispatch<
    SetStateAction<PromiseStatus>
  >;
  setNextPageIndex?: Dispatch<SetStateAction<number>>;
  hostUrl?: string | null;
}

type PropsGroup = SearchHeroProps & SearchHeroWrapProps;

function SearchWrap(props: PropsGroup) {
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

    const searchInput = e?.currentTarget?.query;
    const userQuery = searchInput?.value;
    searchInput?.blur();

    if (!userQuery) return;

    if (!userQuery?.replace(/\s/g, '').length) {
      e.currentTarget.query.value = '';
      return;
    }

    const encodedQuery = encodeURIComponent(userQuery);

    if (router.route === '/search') {
      router.push(`/search?query=${encodedQuery}`);

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
    } else {
      setLoadingStatus('pending');
      try {
        await router.push(`/search?query=${encodedQuery}`);
        setLoadingStatus('fullfilled');
      } catch (error) {
        setLoadingStatus('pending');
        console.log(error); //!
      }
    }
  };

  return <SearchHero {...props} handleSubmit={handleSubmit} />;
}

export default SearchWrap;
