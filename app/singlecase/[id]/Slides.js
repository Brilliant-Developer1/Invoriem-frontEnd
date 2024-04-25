"use client"
import React from 'react'
import Slider from 'react-slick';
import '../../aboutus/Slides.css'
import Image from 'next/image';

function Slide({src}) {
    return (
        <div className='team_container px-5'>
        <div className=" ">
            <Image width={1280}
                height={1280} className='' src={src} alt={`Image`} />
        </div>
    </div>
    );
  }

const Slides = ({singleCase}) => {
    // Images Src
    const images = Object.keys(singleCase.slideImages[0]).map(key => {
      return singleCase.slideImages[0][key];
    });
   
    let settings = {
        dots: false,
        centerMode: true,
        infinite: true,
        // centerPadding: "110px",
        arrows: false,
        focusOnSelect: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                centerMode: false,
                slidesToShow: 2,
                dots: true,
              }
            },
            {
                breakpoint: 640,
                settings: {
                    centerMode: false,
                    slidesToShow: 1,
                    dots: true,
                }
              },
            ]
      };
  return (
    <section className=''>
    <Slider {...settings}>
      {images.map((src , i) => (
        <Slide key={i} src={src} />
      ))}
       
     </Slider>
     <div className='border-b-2 border-teal mt-16'></div>
    </section>
  )
}

export default Slides