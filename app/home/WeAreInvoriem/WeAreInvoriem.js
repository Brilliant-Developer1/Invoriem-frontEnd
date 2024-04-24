import { Player } from "@/app/components/VideoPlayer/Player"  

export const WeAreInvoriem = () => {
  const thumb = "https://i.postimg.cc/1Xg091Bb/thumb.jpg";
  const url = 'https://cdn.coverr.co/videos/coverr-a-glass-building-in-lisbon-6636/720p.mp4';
  return (
    <section className="container mt-40">
      <div className='p-5 sm:p-2'>
      <h2 className= "text-teal mb-3 text-4xl sm:text-5xl font-bold ">We are Invoriem</h2>
      <p className="mb-5 text-gray-600">We fulfill international property developments</p>
      </div>
      <div>
        <Player thumb={thumb} url={url}></Player>
      </div>
    </section>
  )
}
