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

  const getNextPagePosts = async (fullUrl, resArray, key) => {
    const response: Response = await apiRequestHandler().get({
      fullUrl,
    });

    if (!response[key]?.length) return;

    if (response.next_page) {
      return await getNextPagePosts(
        response.next_page,
        [...resArray, ...response[key]],
        key
      );
    } else {
      return [...resArray, ...response[key]];
    }
  };

  const getPostsData = async (postType, resolve, reject) => {
    try {
      const response: Response = await apiRequestHandler().get({
        url: postType,
      });

      let posts = response[postType];
      const currentDate = new Date().toISOString();

      if (response && response.next_page && posts?.length) {
        posts = [
          ...posts,
          ...(await getNextPagePosts(response.next_page, [], postType)),
        ];
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

export default function Site() {
  return null;
}
