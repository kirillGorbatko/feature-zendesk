import { DATA_CONTAINERS_TYPE } from '../../shared/constants';
import { Category, DocumentId } from '../../shared/types';
import { apiRequestHandler, getContentByType } from '../../shared/utils';
import {
  prepareDataContainers,
  prepareSingleDataContainer,
} from '../../shared/utils/prepare-data-containers';

type GetCategoryResponse = {
  category: Category;
};

const BASE_URL = 'https://feature-zendesk-kirillgorbatko.vercel.app/categories';

const getAllCategories = async () => {
  const allCetegories = await getContentByType<Category>({
    query: BASE_URL,
    startPage: 1,
    type: DATA_CONTAINERS_TYPE.categories,
  });

  return allCetegories
    ? prepareDataContainers(allCetegories, DATA_CONTAINERS_TYPE.categories)
    : [];
};

const getCategory = async (id: DocumentId): Promise<Category | null> => {
  const query = `${BASE_URL}/${id}`;
  const response = await apiRequestHandler<GetCategoryResponse>().get({
    url: query,
  });

  return response
    ? prepareSingleDataContainer(
        response.category,
        DATA_CONTAINERS_TYPE.categories
      )
    : null;
};

export const CATEGORIES_API = {
  getCategory,
  getAllCategories,
};
