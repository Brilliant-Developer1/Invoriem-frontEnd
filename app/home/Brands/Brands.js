"use client"
import React, { useContext } from 'react'
import Slider from 'react-slick'
import logo1 from '@/public/images/p_logo_01.webp'
import logo2 from '@/public/images/p_logo_02.webp'
import logo3 from '@/public/images/p_logo_03.webp'
import logo4 from '@/public/images/p_logo_04.webp'
import logo5 from '@/public/images/p_logo_05.webp'
import logo6 from '@/public/images/p_logo_06.webp'
import Image from 'next/image'
import { ThemeContext } from '@/context/ThemeContext';

const Slide = ({ src }) => {
  return (
    <div className="w-full h-32  flex items-center justify-center ">
      <div className='flex justify-center items-center w-full h-full'>
      <Image src={src} alt='logo'/>
      </div>
    </div>
  );
};

export const Brands = () => {
  const { theme } = useContext(ThemeContext);
  
  const slickSettings = {
    infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        lazyLoad: true,
        speed: 2000,
    autoplaySpeed: 2000,
    pauseOnHover: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          
        ],
  };
  return (
    <section className={`my-20 ${theme === 'dark'? 'bg-orange-500' : 'bg-teal'}`}>
        <div className="container">
          <Slider {...slickSettings}>
            <Slide src={logo1} />
            <Slide src={logo2} />
            <Slide src={logo3} />
            <Slide src={logo4} />
            <Slide src={logo5} />
            <Slide src={logo6} />
          </Slider>
        </div>
      </section>
  )
}
