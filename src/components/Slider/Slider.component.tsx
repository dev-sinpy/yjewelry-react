import { Splide, SplideProps, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import React from 'react';

interface SliderOptions extends SplideProps {
  slides: Array<any>;
  ariaLabel: string;
}

const Slider: React.FC<SliderOptions> = ({ ariaLabel, options, slides }) => {
  return (
    <Splide aria-label={ariaLabel} options={{ perPage: 2, ...options }}>
      {slides &&
        slides.map((slide, idx) => (
          <SplideSlide key={idx}>{slide}</SplideSlide>
        ))}
    </Splide>
  );
};

export default Slider;
