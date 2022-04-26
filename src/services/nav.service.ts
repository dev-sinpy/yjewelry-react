// import client from 'lib/axios';
import { ApiProvider } from './api.service';

interface HomeSubCategoriesRoot {
  homeSubCategories: HomeSubCategories;
}

interface HomeSubCategories {
  sets: Set[];
  chains: Chain[];
  charms: Chain[];
}

interface Chain {
  name: string;
  se_name: string;
  image: Image;
}

interface Image {
  src: string;
  alt?: any;
  title?: any;
  attachment?: any;
}

interface Set {
  name: string;
  se_name: string;
  image?: any;
}

export const getHomeCategories = async () => {
  // const resp = await client.get<HomeSubCategoriesRoot>('/api/navSubCategories');
  // return resp.data.homeSubCategories;
};

// export const HomeNavService: ApiProvider = {
//   getHomeCategories: {
//     fetcher: getHomeCategories,
//   },
// };

export const HomeNavService = {
  key: 'getHomeCategories',
  fetcher: getHomeCategories,
};
