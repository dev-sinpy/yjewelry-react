import { AxiosRequestConfig } from 'axios';
import fetcher from 'lib/fetcher';
import useSWR from 'swr';
import { HomeSubCategoriesRootInterface } from './interfaces/nav-categories.interface';

const RequestConfig: AxiosRequestConfig = {
  url: '/api/navSubCategories',
  method: 'GET',
};

export function useHomeNavCategories() {
  const { data, error } = useSWR<HomeSubCategoriesRootInterface>(
    [RequestConfig.url, RequestConfig],
    fetcher
  );

  return {
    navCategories: data?.homeSubCategories,
    isLoading: !error && !data,
    isError: error,
  };
}
