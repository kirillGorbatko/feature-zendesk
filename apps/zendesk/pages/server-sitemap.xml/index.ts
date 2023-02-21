import { apiRequestHandler } from '../../src/shared/utils';
import { getServerSideSitemap } from 'next-sitemap';
import { prepareDataContainers } from '../../src/shared/utils/prepare-data-containers';
import { HOST_URL } from '../../src/shared/constants';

type Response = {
  articles?: any; // FIXME: add correct type
  next_page?: string | null | unknown;
  error?: string;
};

export const getServerSideProps = async (ctx) => {
  const postTypes = ['articles', 'categories'];
  let sitemapData = [];

  const getNextPagePosts = async ({ pageUrl, inheritedResults, postType }) => {
    const response: Response = await apiRequestHandler().get({
      fullUrl: pageUrl,
    });

    if (!response || !response[postType]?.length) return [];

    if (response.next_page) {
      const newResults = [...inheritedResults, ...response[postType]];
      const nextPagesResult = await getNextPagePosts({
        pageUrl: response.next_page,
        inheritedResults: newResults,
        postType,
      });
      return nextPagesResult;
    } else {
      return [...inheritedResults, ...response[postType]];
    }
  };

  const getPostsData = async (postType, resolve, reject) => {
    try {
      const response: Response = await apiRequestHandler().get({
        url: postType,
      });

      if (!response) return resolve();

      let posts = response[postType];
      const currentDate = new Date().toISOString();

      if (response.next_page && posts?.length) {
        const nextPagesPosts = await getNextPagePosts({
          pageUrl: response.next_page,
          inheritedResults: [],
          postType,
        });

        posts = [...posts, ...nextPagesPosts];
      }

      const preparedUrls = prepareDataContainers(posts, postType).map(
        ({ url: postUrl }) => {
          return {
            loc: `${HOST_URL}${postUrl}`,
            lastmod: currentDate,
          };
        }
      );

      sitemapData = [...sitemapData, ...preparedUrls];
    } catch (err) {
      console.log(err);
    }

    resolve();
  };

  const getDataPromises = postTypes.map((postType: any) => {
    // FIXME: add proper type
    return new Promise((resolve, reject) => {
      getPostsData(postType, resolve, reject);
    });
  });

  await Promise.all(getDataPromises);

  return getServerSideSitemap(ctx, sitemapData);
};

export default function Sitemap() {
  return null;
}
