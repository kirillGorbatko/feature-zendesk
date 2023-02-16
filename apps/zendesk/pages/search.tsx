import {
  SearchResult,
  GradientSection,
  FmLinkProps,
} from '@featurefm/design-system';
import { CustomHead } from '../custom-head/custom-head';
import { NextApiRequest, NextApiResponse } from 'next';
import { SearchWrap } from '../src/components/search-wrap';
import { useState } from 'react';
import { connectToSearchAPI } from '../src/api/search';
import { FormatURL } from '../src/shared/utils';
import { prepareDataContainers } from '../src/shared/utils/prepare-data-containers';

type SearchProps = {
  searchResults?: any[]; // FIXME: add correct types
  userQueryByUrl?: string;
  nextPageIndexInitial?: number;
  errorMessage?: string;
  hostUrl?: string | null;
};

export function Search({
  searchResults = [],
  userQueryByUrl = null,
  nextPageIndexInitial = null,
  errorMessage = null,
  hostUrl,
}: SearchProps) {
  const [searchResultsData, setSearchResultsData] = useState(searchResults);
  const [loadingStatus, setLoadingStatus] = useState<
    'idle' | 'pending' | 'fullfilled' | 'rejected'
  >(errorMessage ? 'rejected' : 'idle');
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [userQuery, setUserQuery] = useState(userQueryByUrl);
  const [nextPageIndex, setNextPageIndex] = useState(nextPageIndexInitial);

  if (errorMessage) {
    console.error(errorMessage);
  }

  const handleLoadMore = async (e: any) => {
    // FIXME: add correct types
    e.preventDefault();

    if (loadingStatus === 'pending' || isLoadingMore) return;

    try {
      setIsLoadingMore(true);
      console.log(userQuery);

      const response = await connectToSearchAPI({
        query: encodeURIComponent(userQuery),
        pageIndex: nextPageIndex,
        hostUrl,
      });

      const {
        searchResults: newSearchResults,
        nextPageIndex: newNextPageIndex,
      } = response;

      setSearchResultsData([...searchResultsData, ...newSearchResults]);
      setIsLoadingMore(false);
      setNextPageIndex(newNextPageIndex);
    } catch (error) {
      setIsLoadingMore(false);
      console.log(error.message);
    }
  };

  return (
    <>
      <CustomHead title={`Results for: “${userQuery}”`} />
      <GradientSection>
        <SearchWrap
          mobAlign="left"
          initialQuery={userQuery}
          setSearchResultsData={setSearchResultsData}
          setUserQuery={setUserQuery}
          setLoadingStatus={setLoadingStatus}
          setNextPageIndex={setNextPageIndex}
          resultsCount={searchResultsData.length}
          isSearchResults={true}
          hostUrl={hostUrl}
        />
        <SearchResult
          links={prepareDataContainers(searchResultsData, 'articles')}
          query={userQuery}
          loadingStatus={loadingStatus}
          isLoadingMore={isLoadingMore}
          handleLoadMore={handleLoadMore}
          nextPageIndex={nextPageIndex}
        />
      </GradientSection>
    </>
  );
}

export async function getServerSideProps(context: {
  req: NextApiRequest;
  res: NextApiResponse;
}) {
  let hostUrl = null;

  try {
    const requestReferer = context.req?.url;
    if (requestReferer) {
      // const hostUrlData = new URL(requestReferer);
      hostUrl = context.req?.headers?.host || null;

      const query = new FormatURL(requestReferer);
      query.getEndpointsAfterQuery();
      query.removeQueryEndpointKey();
      query.removeCharsAfterAmpersand();
      query.removeAmpersand();

      if (query.url?.length) {
        // check query not empty
        const { searchResults, userQuery, nextPageIndex, errorMessage } =
          await connectToSearchAPI({
            query: query.url,
            hostUrl,
          });

        return {
          props: {
            hostUrl,
            searchResults: searchResults || [],
            userQueryByUrl: userQuery || null,
            nextPageIndexInitial: nextPageIndex || null,
            errorMessage: errorMessage || null,
          },
        };
      }
    }
  } catch (error) {
    return {
      props: {
        hostUrl,
        searchResults: [],
        userQueryByUrl: null,
        nextPageIndexInitial: null,
        errorMessage: error.message,
      },
    };
  }

  return {
    props: {
      hostUrl,
      searchResults: [],
      userQueryByUrl: null,
      nextPageIndexInitial: null,
      errorMessage: "Can't get page url in api/search:getServerSideProps",
    },
  };
}

export default Search;
