import { Card, CardContent, Container, Typography } from '@mui/material';
import Slider from 'components/Slider/Slider.component';
import fetcher from 'lib/fetcher';
import useSWR from 'swr';
import styles from './ProductTestimonial.module.scss';
import StarIcon from '@mui/icons-material/Star';

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

const ProductTestimonial = ({ testimonial }: { testimonial: Testimonial }) => {
  const truncateText = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
      return `${text.substring(0, maxLength)}...`;
    }
    return text;
  };

  return (
    <Container
      className={`${styles.container}`}
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
    >
      <Card elevation={0} sx={{ width: '50%', height: '200px' }}>
        <CardContent className={styles.reviewBox}>
          <div>
            {Array(testimonial.review_number)
              .fill(0)
              .map((_, index) => (
                <StarIcon className={styles.ratingStar} key={index} />
              ))}
          </div>
          <Typography align="center" className={styles.testimonialText}>
            {`"${truncateText(testimonial.review_text, 200)}"`}
          </Typography>
          <Typography>{`${testimonial.customer_firstname} ${testimonial.customer_lastname}`}</Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

const ProductTestimonialSlider = () => {
  const { data } = useSWR<TestimonialRootObject>('/api/getTestimoniesReview', fetcher);

  const slides = data?.testimonials.map((testimonial) => (
    <ProductTestimonial key={testimonial.createdOnDate} testimonial={testimonial} />
  ));

  return (
    <Slider
      className={styles.testimonialSlider}
      options={{
        autoplay: false,
        // interval: 3000,
        // type: 'loop',
        // resetProgress: false,
        perPage: 1,
      }}
      ariaLabel="testimonial-banner"
      slides={slides || []}
    />
  );
};

export default ProductTestimonialSlider;
