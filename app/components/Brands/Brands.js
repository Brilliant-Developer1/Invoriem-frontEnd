"use client"
import React, { useEffect, useRef } from 'react'
import logo1 from '@/public/images/p_logo_01.webp'
import logo2 from '@/public/images/p_logo_02.webp'
import logo3 from '@/public/images/p_logo_03.webp'
import logo4 from '@/public/images/p_logo_04.webp'
import logo5 from '@/public/images/p_logo_05.webp'
import logo6 from '@/public/images/p_logo_06.webp'


import Image from 'next/image';
import Slider from 'react-slick'


export const Brands = () => {
    const sliderRef = useRef(null);

    useEffect(() => {
        // const slickArrowElements = sliderRef.current?.innerSlider?.list.querySelectorAll('.slick-arrow');
        const slickTrackElements = sliderRef.current?.innerSlider?.list.querySelectorAll('.slick-track');
        const slickSlideElements = sliderRef.current?.innerSlider?.list.querySelectorAll('.slick-slide');

        // slickArrowElements.forEach((arrow) => {
        //     arrow.style.display = 'none !important';
        // });
        slickSlideElements.forEach((slide) => {
            slide.style.cssText += 'display: flex; justify-content: center;';
        });
        slickTrackElements.forEach((slide) => {
            slide.style.cssText += 'align-items: center;';
        });
        
    }, []);
    let settings = {
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
        onInit: () => {
            // Code to execute after slider initialization
            // This event handler is triggered after the slider has been initialized
          },
      };
  return (
    <div className='bg-teal'>
        <div className='container mt-40 slider-container'>
        <Slider ref={sliderRef} className='' {...settings}>
        <div className='p-8'>
        <Image  src={logo1} alt='logo'/>
        </div>
        <div className='p-8'>
        <Image  src={logo2} alt='logo'/>
        </div>
        <div className='p-8'>
        <Image  src={logo3} alt='logo'/>
        </div>
        <div className='p-8'>
        <Image  src={logo4} alt='logo'/>
        </div>
        <div className='p-8'>
        <Image  src={logo5} alt='logo'/>
        </div>
        <div className='p-8'>
        <Image  src={logo6} alt='logo'/>
        </div>
      </Slider>
        </div>
    </div>
  )
}
/*
<Slider ref={sliderRef} className='' {...settings}>
        <div className='p-8'>
        <Image  src={logo1} alt='logo'/>
        </div>
        <div className='p-8'>
        <Image  src={logo2} alt='logo'/>
        </div>
        <div className='p-8'>
        <Image  src={logo3} alt='logo'/>
        </div>
        <div className='p-8'>
        <Image  src={logo4} alt='logo'/>
        </div>
        <div className='p-8'>
        <Image  src={logo5} alt='logo'/>
        </div>
        <div className='p-8'>
        <Image  src={logo6} alt='logo'/>
        </div>
      </Slider>
*/