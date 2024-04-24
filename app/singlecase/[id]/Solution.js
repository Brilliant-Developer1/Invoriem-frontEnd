import React from 'react'

const Solution = ({singleCase}) => {
    const {solutionText1,videoUrl1} = singleCase;

  return (
    <article className='mt-8 md:mt-20 px-5 '>
        {/* Title and subtitle */}
    <section className="  flex flex-col md:flex-row  justify-around ">
      <h1 className="text-3xl font-extrabold grow">Solution</h1>
      <div className="max-w-[30rem] lg:max-w-[42rem] mt-4 md:mt-0 text-gray-500 leading-loose pr-0 xl:pr-20">
        <p>
          {solutionText1}
        </p>
      </div>
    </section>
    <section>
    <div className="mt-0 sm:mt-20 ">
      <iframe
          className='w-full h-60 sm:h-80 md:h-[720px]'
          src={videoUrl1}
          title="Video player"
          allowFullScreen
          frameborder="0"
        ></iframe>
        
      </div>
    </section>
    </article>
  )
}

export default Solution