'use client';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slides.css'


const Slide = ({ team }) => {
    
  return (
    <div className='flex team_container items-start md:items-center  flex-col md:flex-row mt-10 md:mt-20'>
        <div className=" max-w-60 sm:max-w-96 lg:max-w-96 h-auto grayscale">
            <img src={team.image} alt={`Member ${team.id}`} />
        </div>
        <div className='py-8 md:py-0 pl-0 md:pl-10'>
        <p className='text-3xl font-bold'>{team.name}</p>
        <p className='mt-4 text-gray-500'>{team.role}</p>
        </div>
    </div>
  );
};


export const Slides = ({ team }) => {
  let settings = {
    dots: false,
    centerMode: true,
    infinite: true,
    centerPadding: "110px",
    arrows: false,
    focusOnSelect: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            centerMode: true,
            centerPadding: "50px",
          }
        },
        {
            breakpoint: 340,
            settings: {
                centerMode: false,
                dots: true,
            }
          },
        ]
  };

  return (
    <div>
      <Slider {...settings}>
      
        {team.map(team => (
          <Slide key={team.id} team={team} />
        ))}
        
      </Slider>
    </div>
  );
};
