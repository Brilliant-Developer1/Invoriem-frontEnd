'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Gallery.css';
import Image from 'next/image';
import placeholderSvg from '@/public/images/placeholder.svg';

export const Gallery = ({ images }) => {
  const [filter, setFilter] = useState('all');
  const [filteredImages, setFilteredImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const updatedFilteredImages =
      filter === 'all' ? images : images.filter(image => image.type === filter);
    setFilteredImages(updatedFilteredImages);
  }, [filter,images]);

  useEffect(() => {
    console.log("Component rerendered");
  }, [imageLoaded]);

  const openModal = (image) => {
    setSelectedImage(image);
    document.body.classList.add('modal-open');
    if (selectedImage) {
      document.getElementById('my_modal_2').showModal();
      
    }
    
  };

  const closeModal = (e) => {
    e.preventDefault();
    document.body.classList.remove('modal-open');
    setSelectedImage(null);
    setImageLoaded(false);
  };

  return (
    <section >
      <ul className="menu menu-vertical lg:menu-horizontal m-3 md:m-0 bg-base-200 rounded-box">
        <li>
          <button onClick={() => setFilter('all')}>All</button>
        </li>
        <li>
          <button onClick={() => setFilter('buildings')}>Buildings</button>
        </li>
        <li>
          <button onClick={() => setFilter('villa')}>Villas</button>
        </li>
      </ul>
      <motion.div
        
        layout
        className="images_container p-5 md:p-0 mt-0 sm:mt-10"
      >
        <AnimatePresence>
          {filteredImages.map((image, index) => (
            <motion.div
              animate={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              className=""
              layout
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            //   onClick={() => document.getElementById('my_modal_2').showModal()}
            onClick={() => openModal(image)}
            >
              <Image
                width={500}
                height={500}
                src={image.url}
                alt={image.alt}
                className=""
                
              />
            </motion.div>
          ))}
        </AnimatePresence>
        
      </motion.div>
      {selectedImage && (
        <dialog id="my_modal_2" className="mymodal " open>
        <div className="mymodal-box ">
          <div className='w-full h-auto '>
          {!imageLoaded && (
                <div className='  min-w-full min-h-full flex justify-center'>
                  <span className=" loading loading-dots myloading text-teal"></span>
                </div>
              )}
          <Image
                width={1280}
                height={1280}
                src={selectedImage.url}
                alt={selectedImage.alt}
                onLoad={() => setImageLoaded(true)}
                className={`${imageLoaded ? "" : "w-0 h-0"} single_image`}
              />
              
              
          </div>
        </div>
        <form method="dialog" className="mymodal-backdrop" onClick={(e) => closeModal(e)}>
          
        </form>
      </dialog>
      )}
    </section>
  );
};
