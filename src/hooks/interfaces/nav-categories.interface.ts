export interface HomeSubCategoriesRootInterface {
  homeSubCategories: HomeSubCategoriesInterface;
}

export interface HomeSubCategoriesInterface {
  sets: CategoryInterface[];
  chains: CategoryInterface[];
  charms: CategoryInterface[];
}

export interface CategoryInterface {
  name: string;
  se_name: string;
  image?: ImageInterface;
}

interface ImageInterface {
  src: string;
  alt?: any;
  title?: any;
  attachment?: any;
}
