import HomeBannerSlider from 'components/HomeBanner/HomeBanner.component';
import TrendingProducts from 'components/TrendingProducts/TrendingProducts.component';
import FeaturedProduct from 'shared-components/FeaturedProduct/FeaturedProduct.component';
import ProductTestimonialSlider from 'shared-components/ProductTestimonial/ProductTestimonial.component';

function HomeComponent(props: any): JSX.Element {
  return (
    <div className="homeContainer">
      <h1 className="mainH1">Y Jewelry</h1>
      <div className="bannerContainer homeDivContainers">
        <HomeBannerSlider />
      </div>
      <div className="featuredBestsellersContainer homeDivContainers">
        <div className="hr-line"></div>
        <TrendingProducts />
      </div>
      <FeaturedProduct />
      <ProductTestimonialSlider />
    </div>
  );
}

export default HomeComponent;
