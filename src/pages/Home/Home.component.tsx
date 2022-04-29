import { CssBaseline } from '@mui/material';
import HomeBannerSlider from 'components/HomeBanner/HomeBanner.component';
import TrendingProducts from 'components/TrendingProducts/TrendingProducts.component';
import { Fragment } from 'react';
import FeaturedProduct from 'shared-components/FeaturedProduct/FeaturedProduct.component';
import ProductTestimonialSlider from 'shared-components/ProductTestimonial/ProductTestimonial.component';

function HomeComponent(props: any): JSX.Element {
  return (
    <Fragment>
      <CssBaseline />
      <HomeBannerSlider />
      <TrendingProducts />
      <FeaturedProduct />
      <ProductTestimonialSlider />
    </Fragment>
  );
}

export default HomeComponent;
