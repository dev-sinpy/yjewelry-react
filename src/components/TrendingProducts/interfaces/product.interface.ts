export interface ProductDataRoot {
  productData: ProductCategory[];
}

export interface ProductCategory {
  category_name: string;
  category_sename: string;
  products: Product[];
}

export interface Product {
  id: string;
  name: string;
  category_sename: string;
  category_name?: any;
  sku: string;
  is_gift_card: boolean;
  stock_quantity: number;
  customer_enters_price: boolean;
  display_order: number;
  available_for_pre_order: boolean;
  price_model: Pricemodel;
  categoryId: number;
  images: Image[];
  cover_image?: any;
  tags: (string | string)[];
  navAttributes?: any;
  attributes?: any;
  se_name: string;
  isSet: boolean;
  isSizeSelector: boolean;
  is_configurable: boolean;
  sticker: boolean;
}

interface Image {
  id: number;
  position: number;
  src: string;
  alt?: string | string | string;
  title?: string | string | string;
  attachment?: any;
}

interface Pricemodel {
  currency_code?: string;
  old_price?: (null | string)[];
  price_without_formatting: number;
  price_with_discount_without_formatting: number;
  price: string;
  price_with_discount?: any;
  price_value: number;
  customer_enters_price: boolean;
  call_for_price: boolean;
  product_id: number;
  hide_prices: boolean;
  IsRental: boolean;
  RentalPrice?: any;
  DisplayTaxShippingInfo: boolean;
  BasePricePAngV?: any;
}
