import React from 'react';

export const Contactus = () => {
  return (
    <div className="mt-8 md:mt-20 flex flex-col md:flex-row p-5 justify-around">
      <div className='text-5xl md:text-7xl  font-extrabold leading-snug md:leading-snug'>
        <p>Hello</p>
        <p>Bonjour</p>
        <p>Olá</p>
        <p>مرحبا</p>
      </div>
      <div className='text-black flex flex-col mt-24 md:mt-10 leading-[3rem] max-w-48'>
        <h1 className='font-bold text-xl mb-8'>Contact us</h1>
        <p>info@example.com</p>
        <p>+971 5113655</p>
        <p>41598 Musaafah 12 St, Abu Dhabi, UAE</p>
      </div>
    </div>
  );
};
