import React, { useState } from 'react';
import { Box, Image, Text, Flex } from '@chakra-ui/react';

const DoctorImage = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  return (
    <Flex align="center" justify="center" height="100vh">
      <Box
        position="relative"
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
        overflow="hidden"
      >
        <Image
          boxSize="400px"
          src="https://cura.radiantthemes.com/wp-content/uploads/2020/09/01-8.jpg"
          alt="Hovered Image"
          transition="transform 0.7s, opacity 0.3s"
          transform={isHovered ? 'scale(0.9)' : 'scale(1)'}
          opacity={isHovered ? 0.8 : 1}
        />
        {isHovered && (
          <Text
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            bg="rgba(73, 73, 73, 0.5)" // Use rgba for transparency
            color="white"
            fontWeight="bold"
            fontSize="24px"
            padding="8px"
            borderRadius="8px"
            width="90%"
            height="90%"
            textAlign="center"
            display="flex"
            alignItems="center"
            justifyContent="center"
            transition="transform 0.7s, opacity 0.7s, transformX(0.96px)" // Match the duration with the image
          >
            Hovered Text
          </Text>
        )}
      </Box>
    </Flex>
  );
};

export default DoctorImage;

