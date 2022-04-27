import { AxiosRequestConfig } from 'axios';
import fetcher from 'lib/fetcher';
import useSWR from 'swr';
import { PromotionBannerInterface } from './interfaces/promotion-banner.interface';

const RequestConfig: AxiosRequestConfig = {
  url: '/api/promotion/banner',
  method: 'GET',
};

const usePromotionBanner = () => {
  const { data, error } = useSWR<PromotionBannerInterface>(
    [RequestConfig.url, RequestConfig],
    fetcher
  );

  return {
    promotionBanner: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default usePromotionBanner;
