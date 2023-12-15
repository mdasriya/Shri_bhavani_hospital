import React, { useState, useEffect } from 'react';
import { IconButton, useColorModeValue } from "@chakra-ui/react";

import { TiArrowSortedUp } from "react-icons/ti";
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <IconButton
      position="fixed"
      bottom="6"
      right="6"
      zIndex={100}
      size="md"
      icon={<TiArrowSortedUp  size={30} color='white'/>}
      onClick={handleClick}
      bg={useColorModeValue("teal.500", "teal.200")}
      _hover={{ bg: useColorModeValue("teal.600", "teal.300") }}
      opacity={isVisible ? 1 : 0}
      transition="opacity 0.3s"
    />
  );
};

export default ScrollToTopButton;
