import { Player } from '@/app/components/VideoPlayer/Player';
import React from 'react'

const Header = ({singleCase}) => {
    const {name,videoUrl1} = singleCase;
    const thumb = "https://i.postimg.cc/DyBJLxdf/thumb.jpg";
  return (
    <header className=' mt-10'>
      {/* Page Title */}
      <div className='p-5 sm:p-2'>
        <h1 className="text-teal mb-3 text-4xl sm:text-5xl font-bold ">{name}</h1>
      <p className="text-gray-600">Augue eget nisi, turpis vel nibh urna, ut quam odio libero.</p>
      </div>
      {/* Video */}
    <section>
    <Player thumb={thumb} url={videoUrl1}></Player>
    </section>
    </header>
  )
}

export default Header