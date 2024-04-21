import Image from 'next/image';
import React from 'react'

export const Slide = ( {testimonial} ) => {
    return (
      <div className="flex justify-center items-center h-[600px]">
        <div className='p-2'>
        <div className="card justify-center w-full sm:max-w-[500px] h-full sm:h-72 bg-gray-200 shadow-xl">
  <div className="p-5">
    <p className='text-gray-500'>{testimonial.text}</p>
    <div className='mt-5 flex flex-col sm:flex-row items-center'>
        <div className="avatar px-5 py-5 sm:py-0">
  <div className="w-16 rounded">
    <Image width={64} height={64} src={testimonial.image} alt="Avatar-Image" />
  </div>
        </div>
        <div>
        <h2 className="">{testimonial.name}</h2>
        <p className='text-gray-500'>{testimonial.company}</p>
        </div>
    </div>
  </div>
</div>
        </div>
      </div>
    );
  };
