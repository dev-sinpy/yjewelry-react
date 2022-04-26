import axios, { AxiosRequestConfig } from 'axios';
import { ApiConfig } from 'config/api.config';

export const axiosClient = axios.create({
  baseURL: ApiConfig.baseUrl,
  timeout: 10000,
});

export type Fetcher = <B, R>(
  key: string,
  options: AxiosRequestConfig<B>
) => Promise<R>;

const fetcher: Fetcher = async (url, options) => {
  const { data } = await axiosClient({ ...options, url });

  return data;
};

export default fetcher;
