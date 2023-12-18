import React, { useState, useEffect } from 'react';
import { Box, Image, Button, Text } from '@chakra-ui/react';
import { IoMdArrowDropleft } from 'react-icons/io';
import { IoMdArrowDropright } from 'react-icons/io';

const ImageCarousel = () => {
  const images = [
    'https://shribhavanihospital.in/img/intro-carousel/0.jpg',
    'https://shribhavanihospital.in/img/intro-carousel/2.JPG',
    'https://shribhavanihospital.in/img/intro-carousel/4.jpg',
    'https://shribhavanihospital.in/img/intro-carousel/5.jpg',
  ];
  const intervalDuration = 4000; // Change image every 4 seconds

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, intervalDuration);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [images.length]);

  const carouselTexts = [
    'Hospital Management System Website 1',
    'Hospital Management System Website 2',
    'Hospital Management System Website 3',
    'Hospital Management System Website 4',
    // Add more texts if needed
  ];

  const handlePrevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <Box position="relative" width="100%" height="550px" overflow="hidden">
      <Image
        src={images[currentImageIndex]}
        alt={`Image ${currentImageIndex + 1}`}
        width="100%"
        height="100%"
        objectFit="cover"
        transition="opacity 0.9s ease-in-out"
      />

      {/* <Box
        position="absolute"
        top="45%"
        left="10%"
        width="40%"
        height="200px"
        color="white"
        border="1px solid red"
        fontWeight="bold"
        fontSize="24px"
        transform="translateY(-50%)"
        zIndex={9}
        opacity={1}
        style={{
          animation: "textAnimation 2s ease-in-out forwards",
        }}
      >
        <Text>{carouselTexts[currentImageIndex]}</Text>
      </Box> */}

      <Button
        position="absolute"
        bg="none"
        color="white"
        height="70px"
        width="70px"
        borderRadius="50%"
        left="0"
        top="50%"
        transform="translateY(-50%)"
        onClick={handlePrevImage}
        transition="opacity 0.9s ease-in-out"
        _hover={{ opacity: 0.8 }}
      >
        <IoMdArrowDropleft size={40} />
      </Button>
      <Button
        position="absolute"
        bg="none"
        color="white"
        height="100px"
        width="100px"
        borderRadius="50%"
        right="0"
        top="50%"
        transform="translateY(-50%)"
        onClick={handleNextImage}
        transition="opacity 0.3s ease-in-out"
        _hover={{ opacity: 0.8 }}
      >
        <IoMdArrowDropright size={40} />
      </Button>
    </Box>
  );
};

export default ImageCarousel;