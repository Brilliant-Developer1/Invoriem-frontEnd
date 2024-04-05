'use client';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slide.css';

const Slide = ({ singleCase }) => {
  return (
    <div className='px-[40px]'>
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
  );
};

export const Slides = ({ cases }) => {
  let settings = {
    dots: true,
    infinite: true,
    arrows: true,
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
          arrows: false,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        {cases.map(singleCase => (
          <Slide key={singleCase.id} singleCase={singleCase} />
        ))}
      </Slider>
    </div>
  );
};
