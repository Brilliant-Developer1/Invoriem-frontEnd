'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Gallery.css';
import Image from 'next/image';

export const Gallery = ({ images }) => {
  const [filter, setFilter] = useState('all');
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(() => {
    const updatedFilteredImages =
      filter === 'all' ? images : images.filter(image => image.type === filter);
    setFilteredImages(updatedFilteredImages);
  }, [filter, images]);

  const openModal = () => {
    document.body.classList.add('modal-open');
    document.getElementById('my_modal_2').showModal();
    
  };

  const closeModal = () => {
    document.body.classList.remove('modal-open');
  };

  return (
    <div >
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
            onClick={openModal}
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
      <dialog id="my_modal_2" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">Press ESC key or click outside to close</p>
          </div>
          <form method="dialog" className="modal-backdrop" onClick={closeModal}>
            <button>close</button>
          </form>
        </dialog>
    </div>
  );
};
