'use client';
import { useState } from 'react';
import Image from 'next/image';
import { usePlaiceholder } from 'plaiceholder';

export const ImageWithPlaceholder = ({ src }) => {
  const [blurDataURL, setBlurDataURL] = useState('');
  
  const { base64 } = usePlaiceholder(src);
  
  useState(() => {
    setBlurDataURL(base64);
  }, [base64]);

  return (
    <Image
      src={src}
      alt="Image"
      width={300}
      height={200}
      placeholder="blur"
      blurDataURL={blurDataURL}
    />
  );
};
 
