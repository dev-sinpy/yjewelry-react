import {
  Splide,
  SplideProps,
  SplideSlide,
  SplideTrack,
} from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import React from 'react';

interface SliderOptions extends SplideProps {
  ariaLabel: string;
  className?: string;
  slides: Array<any>;
}

const Slider: React.FC<SliderOptions> = ({
  ariaLabel,
  className,
  options,
  slides,
}) => {
  return (
    <Splide
      hasTrack={false}
      tag="section"
      className={className}
      aria-label={ariaLabel}
      options={{
        arrows: false,
        perPage: 2,
        paginationDirection: 'ttb',
        ...options,
      }}
    >
      <SplideTrack>
        {slides &&
          slides.map((slide, idx) => (
            <SplideSlide key={idx}>{slide}</SplideSlide>
          ))}
      </SplideTrack>
      {/* <div className="splide__arrows">
          <button className="splide__arrow splide__arrow--prev">Prev</button>
          <button className="splide__arrow splide__arrow--next">Next</button>
        </div> */}
    </Splide>
  );
};

export default Slider;
