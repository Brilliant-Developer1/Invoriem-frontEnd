'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Gallery.css';
import Image from 'next/image';

export const Gallery = ({ images }) => {
  const [filter, setFilter] = useState('all');

  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(() => {
    const updatedFilteredImages = filter === 'all' ? images : images.filter(image => image.type === filter);
    setFilteredImages(updatedFilteredImages);
  }, [filter, images]);

  return (
    <div>
      <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
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
        animate={{ opacity: 1 }}
        initial={{ opacity: 0}}
        exit={{opacity: 0}}
        layout
        className="images_container mt-0 sm:mt-10"
      >
        {filteredImages.map((image, index) => (
            <motion.div className="transition-all duration-100 ease-out" layout key={index} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} transition={{
                x: { type: "spring", stiffness: 300, damping: 300 },
              }}>
            <motion.div layout  className="transition-all duration-500 ease-out">
            <Image width={500} height={500} src={image.url} alt={image.alt} className="" />
          </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
