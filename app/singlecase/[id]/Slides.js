"use client"
import React from 'react'
import Slider from 'react-slick';
import '../../aboutus/Slides.css'

function Slide({src}) {
    
    return (
        <div className='team_container px-5'>
        <div className=" ">
            <img className='' src={src} alt={`Image`} />
        </div>
    </div>
    );
  }

const Slides = ({singleCase}) => {
    const {imageUrl1,imageUrl2,imageUrl3,imageUrl4} = singleCase.slideImages[0];
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
    <div>
    <Slider {...settings}>
      
      <Slide src={imageUrl1} />
      <Slide src={imageUrl2} />
      <Slide src={imageUrl3} />
      <Slide src={imageUrl4} />
       
     </Slider>
    </div>
  )
}

export default Slides