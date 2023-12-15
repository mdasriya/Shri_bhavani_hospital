import React from 'react';
import { Box, Flex, Text, Button, Image, Stack } from '@chakra-ui/react';
import { FaLocationDot } from "react-icons/fa6";
import { MdPhone } from "react-icons/md";

import Navigation from '../pages/Navigation';
import ImageCarousel from '../pages/ImageCarousel';
import Cart from '../pages/Cart';
import Trial from '../pages/Trial';
import Practices2 from '../pages/Practices2';
import Testimonial from '../pages/Testomonial';
import Footer from './Footer';
import MissionSection from '../pages/MissionSection';
import DonorCaresole from '../pages/DonorCaresole';
import styled from 'styled-components';
import ScrollToTopButton from './ScrollToTopButton';



const Home = () => {
  return (
    <DIV>
      <Box width="100%" bg="gray.700" color="white" p={3}>
        <Flex align="center" justify="space-between">
          {/* Left Side */}
          <Box display="flex" gap={2}>
            <Text fontSize="md">OPD : +91-7722055550</Text>
            <Text fontSize="md">Emergency / Ambulance : +91-9923404277</Text>
          </Box>

          {/* Right Side */}
          <Flex align="center">
            {/* Button */}
            <Button className="button-85" colorScheme="teal" mr={4}>
              Make an Appointment
            </Button>





            {/* Circular Profile Image */}
            <Box
              width="40px"
              height="40px"
              borderRadius="full"
              overflow="hidden"
            >
              <Image
                src="https://arnejaheartinstitute.com/wp-content/uploads/2018/12/NABH.png" // Replace with your image URL
                alt="Profile"
                width="100%"
                height="100%"
                objectFit="cover"
              />
            </Box>
          </Flex>
        </Flex>
      </Box>

      {/* nav bar content  */}
      <Box bg="white" p={2}>
        <Flex align="center" justify="space-between">

          <Image src="http://shribhavanihospital.ramduta.com/wp-content/uploads/2023/06/logo.png" alt="Logo" />


          <Stack direction="row" spacing={2} align="center">

            <Flex align="center" gap={2}>

              <FaLocationDot size={25} _hover={{ size: 50 }} />
              <Box fontFamily={"sans-serif"} fontSize={"sm"} display={"flex"} flexDirection={"column"}>
                <Text >Sr.No 58, Shri Bhawani Mata Mandir</Text>
                <Text >Road,Pardi,Nagpur - 440035</Text>
              </Box>
            </Flex>


            <Flex align="center" gap={3}>
              <MdPhone size={25} />
              <Box  display={"flex"} flexDirection={"column"} fontSize={"sm"}>
                <Text fontFamily={"sans-serif"} color="black" >contact</Text>
                <Text fontFamily={"sans-serif"} color="black" >0712 6661800</Text>
              </Box>

            </Flex>
          </Stack>
        </Flex>
      </Box>
      <Navigation />
      <ImageCarousel />
      <Cart />
      <Trial />
      <Practices2 />
      <MissionSection />
      <DonorCaresole />
  
      <Testimonial />

      <Footer />
      <ScrollToTopButton />

    </DIV>
  );
};

export default Home;


const DIV = styled.div`

/* .button-85 {
  padding: 0.6em 2em;
  border: none;
  outline: none;
  color: rgb(255, 255, 255);
  background: #111;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-85:before {
  content: "";
  background: linear-gradient(
    45deg,
    #ff0000,
    #ff7300,
    #fffb00,
    #48ff00,
    #00ffd5,
    #002bff,
    #7a00ff,
    #ff00c8,
    #ff0000
  );
  position: absolute;
  top: -2px;
  left: -2px;
  background-size: 400%;
  z-index: -1;
  filter: blur(5px);
  -webkit-filter: blur(5px);
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  animation: glowing-button-85 20s linear infinite;
  transition: opacity 0.3s ease-in-out;
  border-radius: 10px;
}

@keyframes glowing-button-85 {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 400% 0;
  }
  100% {
    background-position: 0 0;
  }
}

.button-85:after {
  z-index: -1;
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: #222;
  left: 0;
  top: 0;
  border-radius: 10px;
} */
`