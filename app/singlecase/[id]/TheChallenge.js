import React from 'react'
import Image from 'next/image'

const TheChallenge = ({singleCase}) => {
    const {challengeText,imageUrl1,imageUrl2,imageUrl3} = singleCase;
  return (
    <article className='mt-8 md:mt-20 px-5 '>
    {/* Title and subtile */}
    <section className="  flex flex-col md:flex-row  justify-around ">
      <h1 className="text-3xl font-extrabold grow">The challenge</h1>
      <div className="max-w-[30rem] lg:max-w-[42rem] mt-4 md:mt-0 text-gray-500 leading-loose">
        <p>
          {challengeText}
        </p>
      </div>
    </section>
    {/* 3 Images */}
    <section className='mt-8 md:mt-20 flex flex-col xl:flex-row gap-10 justify-center items-center  '>
        <div className='max-w-4xl xl:max-w-[280px] flex flex-col gap-10 justify-between'>
            <Image className='w-auto h-auto' width={1000} height={1000} src={imageUrl1} alt={`Image 1`} />
            <Image className='w-auto h-auto' width={1000} height={1000} src={imageUrl2} alt={`Image 2`} />
        </div>
        <div className=''>
        <Image className='w-auto h-auto' width={1000} height={1000} src={imageUrl3} alt={`Image 3`} />
        </div>
    </section>
    {/* Text Under images */}
    <section className='max-w-xl text-justify mx-auto py-32'>
        <strong className='text-gray-500 text-xl '>
          {challengeText}
        </strong>
    </section>
    </article>
  )
}

export default TheChallenge