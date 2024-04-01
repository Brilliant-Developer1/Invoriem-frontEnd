'use client';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import './Slide.css';

export const Slide = ({ cases }) => {
  let settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    cssEase: 'linear',
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

  const getDynamicStyle = name => {
    if (name === 'Dubai') {
      return { left: '-66px' };
    } else if (name === 'London') {
      return { left: '-50px' };
    } else if (name === 'France') {
      return { left: '-55px' };
    } else if (name === 'Qatar') {
      return { left: '-56px' };
    } else if (name === 'Istanbul') {
      return { left: '-55px' };
    } else if (name === 'New York') {
      return { left: '-54px' };
    } else {
      return {}; // Default styling
    }
  };

  return (
    <div>
      <Slider {...settings}>
        {cases.map(singleCase => (
          <div key={singleCase.id}>
            <div className="w-full h-[550px] relative ">
              <div
                className="w-full h-[550px] z-10 absolute overflow-hidden"
                style={{
                  backgroundImage: `url(${singleCase.thumb})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="absolute top-3/4 -left-9">
                  <p className="text-7xl font-extrabold">
                    <span className="text-white">{singleCase.name}</span>
                  </p>
                </div>
              </div>
              <span className="text-teal relative top-3/4 -left-9 text-7xl font-extrabold">
                {singleCase.name}
              </span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
/*
Dubai left: -66px
Lonon left:-50px
France left:-55px
Qatar left:-56px
Istanbul left:-55px
New York left:-54px

<div className='relative' key={singleCase.id}>
          <Image
              width="0"
              height="0"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ width: '100%', height: 'auto' }}
              src={singleCase.thumb}
              alt={`Thumbnail ${singleCase.id}`}
          />
          <p className="absolute top-3/4  text-7xl font-extrabold text-black px-4 py-2 cursor-default"
          // style={getDynamicStyle(singleCase.name)}
          >{singleCase.name}</p>
      </div>

*/
