'use client';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import './Slide.css'


export const Slide = ({ cases }) => {
  let settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    cssEase: "linear",
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    lazyLoad: true,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        {cases.map((singleCase) => (
          <div className='' key={singleCase.id}>
          <Image
              width="0"
              height="0"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ width: '100%', height: 'auto' }}
              src={singleCase.thumb}
              alt={`Thumbnail ${singleCase.id}`}
          />
      </div>
        ))}
      </Slider>
    </div>
  );
};
