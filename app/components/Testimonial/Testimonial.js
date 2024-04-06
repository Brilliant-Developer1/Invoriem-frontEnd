"use client"
import Slider from "react-slick";
import { testimonials } from '@/public/Data/TestimonialData';
import { Slide } from "./Slide";



export const Testimonial = () => {
  
    const settings = {
        dots: false,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              dots: true,
              arrows: false,
            },
          },
        ],

        
      };
  return (
    <div>
      <div className="container mt-20 ">
      <div className='p-1 sm:p-0'>
      <h2 className="text-teal mb-3 text-3xl sm:text-5xl font-bold ">OUR TESTIMONIALS</h2>
      </div>
      
    </div>
    <div className="bg-fixed" style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
      <div  className=" container mt-0 sm:mt-20">
      <Slider className="" {...settings}>
      
      {testimonials.map((testimonial, index) => {
       return <Slide key={index} testimonial={testimonial} />
      })}
      </Slider>
        
      </div>
      </div>
    </div>
  )
}
