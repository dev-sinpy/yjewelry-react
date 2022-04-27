import HomeBannerSlider from 'components/HomeBanner/HomeBanner.component';
import TrendingProducts from 'components/TrendingProducts/TrendingProducts.component';
import React from 'react';
import FeaturedProduct from 'shared-components/FeaturedProduct/FeaturedProduct.component';
import ProductTestimonialSlider from 'shared-components/ProductTestimonial/ProductTestimonial.component';

function HomeComponent(props: any): JSX.Element {
  return (
    <React.Fragment>
      <HomeBannerSlider />
      <TrendingProducts />
      <FeaturedProduct />
      <ProductTestimonialSlider />
    </React.Fragment>
  );
}

export default HomeComponent;
