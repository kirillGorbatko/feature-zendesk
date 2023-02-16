import { ContainersType } from '../types';
import { apiRequestHandler } from './api-request-handler';

type GetContentByType = {
  query: string;
  groupId?: string;
  type: ContainersType;
  startPage: number;
  endPage?: number;
};

type GetContent = {
  page: number;
  query: string;
};

const getContent = async ({ page, query }: GetContent): Promise<any> => {
  try {
    const preparedQuery = `${query}?page=${page}`;
    const response = await apiRequestHandler().get({
      url: preparedQuery,
    });

    return {
      success: true,
      response,
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
    };
  }
};

export const getContentByType = async <T>({
  type,
  query,
  startPage,
  endPage,
}: GetContentByType): Promise<T[]> => {
  let currentPage = startPage;
  let preparedEndPage = endPage || currentPage + 1;
  const finalArr: T[] = [];

  while (currentPage <= preparedEndPage) {
    const { success, response } = await getContent({
      page: currentPage,
      query,
    });
    if (success) {
      finalArr.push(...response[type]);
    }
    preparedEndPage = response.page_count;
    currentPage++;
  }

  return finalArr;
};
