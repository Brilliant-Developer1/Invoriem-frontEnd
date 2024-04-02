'use client';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import './Slide.css';

export const Slide = ({ cases }) => {
  let settings = {
    dots: true,
    infinite: true,
    // autoplay: true,
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
        breakpoint: 640,
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
        {cases.map(singleCase => (
          <div className='px-[40px] sm:px-0' key={singleCase.id}>
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
                  <p className="text-5xl md:text-7xl font-extrabold">
                    <span className="text-white">{singleCase.name}</span>
                  </p>
                </div>
              </div>
              <div className="absolute top-3/4 -left-9">
                  <p className="text-5xl md:text-7xl font-extrabold">
                    <span className="text-teal">{singleCase.name}</span>
                  </p>
                </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
