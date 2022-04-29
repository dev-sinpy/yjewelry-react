export interface CartInterface {
  shopping_carts: Shoppingcart[];
  orderTotals: OrderTotals;
  notification?: any;
  notification_sent: boolean;
  checkoutAttributes: CheckoutAttribute[];
}

interface CheckoutAttribute {
  Id: number;
  name: string;
  checkoutAttributeValue: CheckoutAttributeValue[];
}

interface CheckoutAttributeValue {
  Id: number;
  priceAdjustment: string;
  isPreSelected: boolean;
  name: string;
}

interface OrderTotals {
  IsEditable: boolean;
  SubTotal?: any;
  SubTotalDiscount?: any;
  Shipping?: any;
  RequiresShipping: boolean;
  SelectedShippingMethod?: any;
  HideShippingTotal: boolean;
  PaymentMethodAdditionalFee?: any;
  Tax?: any;
  TaxRates: any[];
  DisplayTax: boolean;
  DisplayTaxRates: boolean;
  GiftCards: any[];
  OrderTotalDiscount?: any;
  RedeemedRewardPoints: number;
  RedeemedRewardPointsAmount?: any;
  WillEarnRewardPoints: number;
  OrderTotal?: any;
  total?: any;
  appliedDiscount: any[];
  ignoredDiscount?: any;
  CustomProperties: CustomProperties;
}

interface CustomProperties {}

export interface Shoppingcart {
  id: string;
  appliedDiscount: any[];
  product_attributes: any[];
  customer_entered_price: number;
  subtotal: string;
  image: Image;
  quantity: number;
  rental_start_date_utc?: any;
  rental_end_date_utc?: any;
  created_on_utc: string;
  updated_on_utc: string;
  shopping_cart_type: string;
  product_id: number;
  product: Product;
  discount_coupon?: any;
  customer_id: number;
  customer?: any;
}

interface Product {
  visible_individually: boolean;
  localized_names: Localizedname[];
  short_description: string;
  full_description: string;
  show_on_home_page?: any;
  meta_keywords: string;
  meta_description: string;
  meta_title: string;
  allow_customer_reviews: boolean;
  approved_rating_sum: number;
  not_approved_rating_sum: number;
  approved_total_reviews: number;
  not_approved_total_reviews: number;
  manufacturer_part_number?: any;
  gtin?: any;
  require_other_products: boolean;
  automatically_add_required_products: boolean;
  is_download: boolean;
  unlimited_downloads: boolean;
  max_number_of_downloads: number;
  download_expiration_days?: any;
  has_sample_download: boolean;
  has_user_agreement: boolean;
  is_recurring: boolean;
  recurring_cycle_length: number;
  recurring_total_cycles: number;
  is_rental: boolean;
  rental_price_length: number;
  is_ship_enabled: boolean;
  is_free_shipping: boolean;
  ship_separately: boolean;
  additional_shipping_charge: number;
  is_tax_exempt: boolean;
  charmOfMonth: boolean;
  charmOfWeek: boolean;
  isFav: boolean;
  is_telecommunications_or_broadcasting_or_electronic_services: boolean;
  use_multiple_warehouses: boolean;
  manage_inventory_method_id: number;
  display_stock_availability: boolean;
  display_stock_quantity: boolean;
  min_stock_quantity: number;
  notify_admin_for_quantity_below: number;
  allow_back_in_stock_subscriptions: boolean;
  order_minimum_quantity: number;
  order_maximum_quantity: number;
  allowed_quantities?: any;
  allow_adding_only_existing_attribute_combinations: boolean;
  disable_buy_button: boolean;
  disable_wishlist_button: boolean;
  pre_order_availability_start_date_time_utc?: any;
  call_for_price: boolean;
  price: number;
  old_price: number;
  product_cost: number;
  special_price?: any;
  special_price_start_date_time_utc?: any;
  special_price_end_date_time_utc?: any;
  minimum_customer_entered_price: number;
  maximum_customer_entered_price: number;
  baseprice_enabled: boolean;
  baseprice_amount: number;
  baseprice_base_amount: number;
  has_tier_prices: boolean;
  has_discounts_applied: boolean;
  weight: number;
  length: number;
  width: number;
  height: number;
  available_start_date_time_utc?: any;
  available_end_date_time_utc?: any;
  published: boolean;
  deleted: boolean;
  created_on_utc: string;
  updated_on_utc: string;
  product_type: string;
  parent_grouped_product_id: number;
  role_ids: any[];
  discount_ids: any[];
  store_ids: any[];
  manufacturer_ids?: any;
  associated_product_ids: any[];
  vendor_id: number;
  specification_attributes: Specificationattribute[];
  dimensionUnits: string;
  attributeCombinations: any[];
  attributeDetails: AttributeDetail[];
  productSpecs: ProductSpec[];
  testimonials: any[];
  id: string;
  name: string;
  category_sename: string;
  category_name: string;
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
  tags: string[];
  navAttributes: NavAttributes;
  attributes: any[];
  se_name: string;
  isSet: boolean;
  isSizeSelector: boolean;
  is_configurable: boolean;
  sticker: boolean;
}

interface NavAttributes {
  id: number;
  product_attribute_id: number;
  product_attribute_name: string;
  text_prompt?: any;
  is_required: boolean;
  attribute_control_type_id: number;
  display_order: number;
  validationMinLength?: any;
  validationMaxLength?: any;
  default_value?: any;
  attribute_control_type_name: string;
  attribute_values: Attributevalue[];
  textBoxInput: string;
  active: boolean;
  attributeInputSelected: Attributevalue;
}

interface Attributevalue {
  id: number;
  type_id: number;
  associated_product_id: number;
  associated_product_sename: string;
  name: string;
  imageSrc: string;
  color_squares_rgb?: any;
  image_squares_image: Imagesquaresimage;
  price_adjustment: number;
  weight_adjustment: number;
  cost: number;
  quantity: number;
  is_pre_selected: boolean;
  display_order: number;
  product_image_id?: any;
  type: string;
}

interface Imagesquaresimage {
  src: string;
  alt: string;
  title: string;
  attachment?: any;
}

interface Pricemodel {
  currency_code: string;
  old_price?: any;
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

interface ProductSpec {
  name: string;
  list: List[];
}

interface List {
  attribute_option_id: number;
  attribute_name: string;
  attribute_option_name: string;
  custom_value?: null | string | string;
  selected: boolean;
  position: number;
  attribute_option_color_rgb?: any;
  attribute_filterIds: string;
}

interface AttributeDetail {
  name: string;
  src: string;
  type: number;
}

interface Specificationattribute {
  attribute_option_id: number;
  attribute_name: string;
  attribute_option_name: string;
  custom_value?: string;
  selected: boolean;
  position: number;
  attribute_option_color_rgb?: any;
  attribute_filterIds: string;
}

interface Localizedname {
  language_id: number;
  localized_name: string;
}

interface Image {
  id: number;
  position: number;
  src: string;
  alt: string;
  title: string;
  attachment?: any;
}
