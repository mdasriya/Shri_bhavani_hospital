import React, { useState, useEffect } from 'react';
import { Box, Image } from '@chakra-ui/react';

const ImageCarouse2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    'https://placekitten.com/1400/800',
    'https://placekitten.com/1401/800',
    'https://placekitten.com/1402/800',
    'https://placekitten.com/1403/800',
    'https://placekitten.com/1404/800',
    'https://placekitten.com/1405/800',
    'https://placekitten.com/1406/800',
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change the interval (in milliseconds) according to your preference

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <Box width="100%" height="auto" position="relative" overflow="hidden">
      {images.map((url, index) => (
        <Image
          key={index}
          src={url}
          alt={`Image ${index + 1}`}
          boxSize="100%"
          objectFit="cover"
          display={index === currentIndex ? 'block' : 'none'}
        />
      ))}
    </Box>
  );
};

export default ImageCarouse2;
