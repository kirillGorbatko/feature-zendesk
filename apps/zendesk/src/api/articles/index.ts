import { DATA_CONTAINERS_TYPE } from '../../shared/constants';
import { Article, DocumentId } from '../../shared/types';
import { apiRequestHandler, getContentByType } from '../../shared/utils';
import {
  prepareDataContainers,
  prepareSingleDataContainer,
} from '../../shared/utils/prepare-data-containers';

type GetArticleResponse = {
  article: Article;
};

type ContainerType = 'sections' | 'categories';

const getAllContainerArticle = async (
  id: DocumentId,
  containerType: ContainerType
) => {
  const query =
    containerType === 'categories'
      ? `categories/${id}/articles`
      : `sections/${id}/articles`;

  const articles = await getContentByType<Article>({
    query,
    startPage: 1,
    type: DATA_CONTAINERS_TYPE.articles,
  });

  return articles
    ? prepareDataContainers(articles, DATA_CONTAINERS_TYPE.articles)
    : [];
};

const getArticle = async (id: DocumentId): Promise<Article | null> => {
  const query = `articles/${id}`;
  const response = await apiRequestHandler<GetArticleResponse>().get({
    url: query,
  });

  return response
    ? prepareSingleDataContainer(
      response.article,
      DATA_CONTAINERS_TYPE.articles
    )
    : null;
};

export const ARTICLES_API = {
  getAllContainerArticle,
  getArticle,
};
