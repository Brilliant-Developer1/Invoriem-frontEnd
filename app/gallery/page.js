
import { Gallery } from "./Gallery";
import { images } from '@/public/Data/GalleryData';

export const metadata = {
    title: 'Gallery - invoriem',
    description: 'Crafting Dreams, Building Futures',
  };

  export default function gallery() {
  return (
    <main className="container mt-10 ">
      <div className='p-5 sm:p-2'>
      <h1 className="text-teal mb-3 text-4xl sm:text-5xl font-bold ">Gallery</h1>
      <p className="mb-5 text-gray-600">We deliver a unique and truly bespoke approach to delivering international developments to market, with over 10 years success around the world.</p>
      </div>
      <div className="mt-0 sm:mt-10 ">
      <Gallery images={images} />
        
      </div>
    </main>
  )
}
