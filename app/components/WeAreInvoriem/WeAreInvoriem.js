"use client"
import React, { useEffect } from 'react';

export const WeAreInvoriem = () => {
  return (
    <section className="container mt-40">
      <div className='p-5 sm:p-2'>
      <h2 className= "text-teal mb-3 text-4xl sm:text-5xl font-bold ">We are Invoriem</h2>
      <p className="mb-5 text-gray-600">We fulfill international property developments</p>
      </div>
      <div className="mt-0 sm:mt-20 ">
      <iframe
          className='w-full h-60 sm:h-80 md:h-[600px]'
          src="https://www.youtube.com/embed/ByRHUzaYOBI"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        
      </div>
    </section>
  )
}
