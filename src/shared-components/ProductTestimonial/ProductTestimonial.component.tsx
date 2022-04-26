import { Card, CardContent, Container, Typography } from '@mui/material';
import Slider from 'components/Slider/Slider.component';
import fetcher from 'lib/fetcher';
import useSWR from 'swr';
import styles from './ProductTestimonial.module.scss';

interface TestimonialRootObject {
  testimonials: Testimonial[];
}

interface Testimonial {
  display_name: string;
  customer_firstname: string;
  customer_lastname: string;
  review_text: string;
  company?: any;
  review_Image?: string;
  review_number: number;
  createdOnDate: string;
}

const ProductTestimonial = ({ testimonial, customer }: any) => {
  return (
    <Container className={`${styles['container']}`}>
      <Card sx={{ width: '50%' }}>
        <CardContent>
          <Typography>{testimonial}</Typography>
          <Typography>{customer}</Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

const ProductTestimonialSlider = () => {
  const { data } = useSWR<TestimonialRootObject>(
    '/api/getTestimoniesReview',
    fetcher
  );

  const slides = data?.testimonials.map((slide) => (
    <ProductTestimonial
      key={slide.createdOnDate}
      testimonial={slide.review_text}
      customer={`${slide.customer_firstname} ${slide.customer_lastname}`}
    />
  ));

  return (
    <Slider
      options={{
        autoplay: true,
        interval: 3000,
        type: 'loop',
        resetProgress: false,
        perPage: 1,
      }}
      ariaLabel="testimonial-banner"
      slides={slides || []}
    />
  );
};

export default ProductTestimonialSlider;
