export interface HomeSubCategoriesRoot {
  homeSubCategories: HomeSubCategories;
}

export interface HomeSubCategories {
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
