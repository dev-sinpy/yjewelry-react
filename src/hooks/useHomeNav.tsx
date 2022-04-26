import { AxiosRequestConfig } from 'axios';
import fetcher from 'lib/fetcher';
import useSWR from 'swr';
import { HomeSubCategoriesRoot } from './interfaces/nav-categories.interface';

const RequestConfig: AxiosRequestConfig = {
  url: '/api/navSubCategories',
  method: 'GET',
};

export function useLocationListing() {
  const { data, error } = useSWR<HomeSubCategoriesRoot>(
    [RequestConfig.url, RequestConfig],
    fetcher
  );

  return {
    navCategories: data?.homeSubCategories,
    isLoading: !error && !data,
    isError: error,
  };
}
