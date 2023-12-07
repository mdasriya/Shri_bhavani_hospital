import React, { useState, useEffect } from 'react';
import { Box, Image, Button } from '@chakra-ui/react';

const ImageCarousel = () => {
    const images = ['https://shribhavanihospital.in/img/intro-carousel/0.jpg', 'https://shribhavanihospital.in/img/intro-carousel/2.JPG', 'https://shribhavanihospital.in/img/intro-carousel/4.jpg', 'https://shribhavanihospital.in/img/intro-carousel/5.jpg']
  const intervalDuration = 4000; // Change image every 2 seconds

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, intervalDuration);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount

  }, [images.length]);

  const handlePrevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <Box
      position="relative"
      width="100%"
      height="550px"
      overflow="hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
     
      <Image
        src={images[currentImageIndex]}
        alt={`Image ${currentImageIndex + 1}`}
        width="100%"
        height="100%"
        objectFit="cover"
      />
      {isHovered && (
        <>
          <Button
            position="absolute"
            bg="none"
            color="white"
            border="1px solid white"
            left="0"
            top="50%"
            transform="translateY(-50%)"
            onClick={handlePrevImage}
            transition="opacity 0.9s ease-in-out"
            _hover={{ opacity: 0.8 }}
          >
            Previous
          </Button>
          <Button
            position="absolute"
            bg="none"
            color="white"
            border="1px solid white"
            right="0"
            top="50%"
            transform="translateY(-50%)"
            onClick={handleNextImage}
            transition="opacity 0.3s ease-in-out"
            _hover={{ opacity: 0.8 }}
          >
            Next
          </Button>
        </>
      )}
    </Box>
  );
};

export default ImageCarousel;
