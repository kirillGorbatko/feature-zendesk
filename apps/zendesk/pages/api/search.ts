import { Article } from '../../src/shared/types';
import { searchArticlesByPage } from '../../src/api/search';
import { FormatURL } from '../../src/shared/utils';

type SearchResponse = {
  next_page?: string | null | unknown;
  results?: Article[] | unknown;
  page?: number;
  error?: string;
  description?: string;
};

type SearchQuery = {
  success: boolean;
  response?: SearchResponse;
};

export default async function handler(req, res) {
  const fullURL = req.url || '';
  const serverQuery = new FormatURL(fullURL);

  serverQuery.getEndpointsAfterQuery();

  if (serverQuery.url) {
    serverQuery.removeQueryEndpointKey();

    if (!serverQuery.url.includes('sort_by')) {
      serverQuery.url = serverQuery.url.concat('&sort_by=title');
    }

    const userQuery = new FormatURL(serverQuery.url);
    userQuery.decodeUrl();
    userQuery.addSpaces();
    userQuery.removeCharsAfterAmpersand();
    userQuery.removeAmpersand();

    try {
      const searchQuery: SearchQuery = await searchArticlesByPage({
        query: serverQuery.url,
      });

      const searchResponse = searchQuery?.response;

      if (!searchResponse || searchResponse?.error) {
        throw new Error(
          `An error occurred while fetch: ${serverQuery.url} ${searchResponse?.error} ${searchResponse?.description}`
        );
      }

      res.status(200).json({
        userQuery: userQuery.url,
        searchResults: searchResponse.results || [],
        nextPageIndex:
          searchResponse.next_page && searchResponse.page
            ? searchResponse.page + 1
            : null,
      });
    } catch (e) {
      res.status(400).json({
        userQuery: userQuery.url,
        searchResults: [],
        nextPageIndex: null,
        errorMessage: e.message,
      });
    }
  }
}
