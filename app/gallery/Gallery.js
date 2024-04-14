'use client';
import { useState } from 'react';

export const Gallery = ({ images }) => {
  const [filter, setFilter] = useState('all');

  const filteredImages =
    filter === 'all' ? images : images.filter(image => image.type === filter);

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
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  gap-4 p-4 ">
        {filteredImages.map((image, index) => (
          <div key={index} className=" ">
            <img src={image.url} alt={image.alt} className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};
