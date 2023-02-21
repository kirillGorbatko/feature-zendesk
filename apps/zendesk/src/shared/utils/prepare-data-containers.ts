import { getSlugFromUrl } from '../../shared/utils';
import { ContainersType } from '../types';

export const prepareSingleDataContainer = <
  T extends { html_url?: string; url?: string }
>(
  item: T,
  type: ContainersType
): T => {
  const slug = item?.html_url ? getSlugFromUrl(item?.html_url) : '';
  const updatedUrl = `/${type}/${slug}`;

  return {
    ...item,
    slug,
    url: updatedUrl,
  };
};

export const prepareDataContainers = <
  T extends { html_url?: string; url?: string }
>(
  items: T[],
  type: ContainersType
): T[] => {
  return items.map((singleItem) =>
    prepareSingleDataContainer<T>(singleItem, type)
  );
};
