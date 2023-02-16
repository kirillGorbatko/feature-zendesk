import { apiRequestHandler } from '../../shared/utils';

type SearchByPageProps = {
  query: string;
  pageIndex?: number;
  hostUrl?: string;
};

export const searchArticlesByPage = async (props: SearchByPageProps) => {
  const url = `articles/search.json?query=${props.query}`;

  try {
    const response = await apiRequestHandler().get({
      url,
    });

    return {
      success: true,
      response,
    };
  } catch (error) {
    console.error('getSearchResultsByPage:', error);
    return {
      success: false,
    };
  }
};

export const connectToSearchAPI = async ({
  query,
  pageIndex = 1,
  hostUrl,
}: SearchByPageProps) => {
  try {
    if (!hostUrl) {
      throw new Error('Wrong hostUrl provided');
    }

    const response = await fetch(
      `http://${hostUrl}/api/search?query=${query}&page=${pageIndex}&per_page=25`
    );

    return response.json();
  } catch (error) {
    console.error('connectSearchAPI:', error);
    return {
      errorMessage: `connectSearchAPI: ${error}`,
    };
  }
};
