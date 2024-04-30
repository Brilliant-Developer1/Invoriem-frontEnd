import { Player } from '@/app/components/VideoPlayer/Player';
import React from 'react'
import Image from 'next/image'
const Solution = ({singleCase}) => {
    const {solutionText1,solutionText2,videoUrl2,imageUrl4,imageUrl5} = singleCase;
    const thumb = "https://i.postimg.cc/1Xg091Bb/thumb.jpg";

    // Split and Capitalize
const words = solutionText2.split(' ');
const first50Words = words.slice(0, 50).join(' ');
const last30WordsArray = words.slice(-30).join(' ').split(' ');
// Capitalize the first letter of the last words
if (last30WordsArray.length > 0) {
    last30WordsArray[0] = last30WordsArray[0].charAt(0).toUpperCase() + last30WordsArray[0].slice(1);
}
const last30Words = last30WordsArray.join(' ');

  return (
    <article className='mt-16 px-5 '>
        {/* Title and Text */}
    <section className="  flex flex-col md:flex-row  justify-around ">
      <h1 className="text-3xl font-extrabold grow text-black">Solution</h1>
      <div className="max-w-[30rem] lg:max-w-[42rem] mt-4 md:mt-0 text-grey leading-loose pr-0 xl:pr-20">
        <p>
          {solutionText1}
        </p>
      </div>
    </section>
    {/* Video */}
    <section>
    <Player thumb={thumb} url={videoUrl2}></Player>
    </section>
    {/* More Text */}
    <section className="  flex flex-col md:flex-row  justify-around ">
      <h1 className="text-3xl font-extrabold grow"></h1>
      <div className="max-w-[30rem] lg:max-w-[42rem] mt-4 md:mt-0 text-grey leading-loose pr-0 xl:pr-20">
        <p>
          {first50Words}.
        </p>
        <p className='mt-8'>
          {last30Words}.
        </p>
      </div>
    </section>
    {/* Last 2 Images */}
    <section className='mt-20 flex flex-col md:flex-row justify-center items-center gap-10'>
      <div className=''>
      <Image className='w-auto h-auto' width={1000} height={1000} src={imageUrl4} alt={`Image 1`} />  
      </div>
      <div>
      <Image className='w-auto h-auto' width={1000} height={1000} src={imageUrl5} alt={`Image 2`} />
      </div>
    </section>
    </article>
  )
}

export default Solution