
import { Gallery } from "./Gallery";
import { images } from '@/public/Data/GalleryData';

export const metadata = {
    title: 'Gallery - invoriem',
    description: 'Crafting Dreams, Building Futures',
  };

  export default function gallery() {
  return (
    <section className="container mt-20 ">
      <div className='p-5 sm:p-2'>
      <h2 className="text-teal mb-3 text-4xl sm:text-5xl font-bold ">Gallery</h2>
      <p className="mb-5 text-gray-600">We deliver a unique and truly bespoke approach to delivering international developments to market, with over 10 years success around the world.</p>
      </div>
      <div className="mt-0 sm:mt-10 ">
      <Gallery images={images} />
        
      </div>
    </section>
  )
}