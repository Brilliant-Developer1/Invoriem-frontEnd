'use client';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Slide = ({ singleCase }) => {
  return (
    <div className=' pr-0 sm:pr-10 pl-10 '>
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
                  <p className="text-6xl  md:text-7xl font-extrabold">
                    <span className="text-white">{singleCase.name}</span>
                  </p>
                </div>
              </div>
              <div className="absolute top-3/4 -left-9">
                  <p className="text-6xl  md:text-7xl font-extrabold">
                    <span className="text-teal">{singleCase.name}</span>
                  </p>
                </div>
            </div>
            </div>
  );
};

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} `}
      style={{ ...style, top: "-10%", left: "89%", }}
      onClick={onClick}
    ><style jsx>{`
    .slick-prev:before {
      content: "←";
      color: var(--teal);
      font-size: 50px;
    }
    `}</style>
    </div>
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className}`}
      style={{ ...style,  right: "5%", top: "-10%",}}
      onClick={onClick}
    ><style jsx>{`
    .slick-next:before {
      content: "→";
      color: var(--teal);
      font-size: 50px;
    }
    `}</style>
    </div>  
  );
}
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
    // initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    

    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
