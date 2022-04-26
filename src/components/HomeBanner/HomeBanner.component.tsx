import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';

import Slider from 'components/Slider/Slider.component';
import fetcher from 'lib/fetcher';
import useSWR from 'swr';
import styles from './HomeBanner.module.scss';
import { BannerData } from './interfaces/slider.interface';

interface BannerOptions {
  alt?: string;
  title?: string;
  description?: string;
  url?: string;
  buttonText?: string;
  buttonLink?: string;
}

const HomeBanner = ({
  alt,
  title,
  description,
  url,
  buttonText,
  buttonLink,
}: BannerOptions) => {
  return (
    <Card sx={{ height: 700 }}>
      <CardMedia
        className={styles['banner-cover']}
        component="img"
        height="480"
        image={url}
        alt={alt}
      />
      <CardContent>
        <Typography align="center" gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography align="center" variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'center' }}>
        <button
          className="btn-dark"
          onClick={() => {
            // LearnMore(slide.buttonLink);
          }}
        >
          <span className="btn-text">{buttonText}</span>
        </button>
      </CardActions>
    </Card>
  );
};

const HomeBannerSlider = () => {
  const { data } = useSWR<BannerData[]>('/api/nivoslider', fetcher);

  const slides = data?.map((slide) => (
    <HomeBanner
      key={slide.id}
      alt={slide.alt}
      title={slide.heading}
      description={slide.description}
      url={slide.src}
      buttonText={slide.buttonText}
      buttonLink={slide.buttonLink}
    />
  ));

  return (
    <div className={styles['banner-container']}>
      <Slider
        options={{
          gap: 30,
          autoplay: true,
          interval: 3000,
          type: 'loop',
          resetProgress: false,
        }}
        ariaLabel="banner"
        slides={slides || []}
      />
    </div>
  );
};

export default HomeBannerSlider;
