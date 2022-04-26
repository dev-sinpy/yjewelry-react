import { HomeNavService } from './nav.service';

export type Fetcher = (...args: any[]) => Promise<unknown>;

export interface ApiProvider {
  [key: string]: {
    key: string;
    fetcher: Fetcher;
  };
}

export const Providers: ApiProvider = {
  homeNav: HomeNavService,
};

export const APIService = Object.keys(Providers).reduce(
  (acc, objKey: string) => {
    const { key, fetcher } = Providers[objKey];

    return {
      ...acc,
      [key]: fetcher,
    };
  },
  {} as { [key: string]: Fetcher }
);
