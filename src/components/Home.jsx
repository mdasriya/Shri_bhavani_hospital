import React from 'react';
import { Box, Flex, Text, Button, Image, Stack } from '@chakra-ui/react';
import { FaLocationDot } from "react-icons/fa6";
import { MdPhone } from "react-icons/md";
import "../style/home.css"
import Navigation from '../pages/Navigation';
import ImageCarousel from '../pages/ImageCarousel';
import Cart from '../pages/Cart';
import Trial from '../pages/Trial';
import Practices2 from '../pages/Practices2';
import Gallery from '../pages/Gallery';
import Testimonial from '../pages/Testomonial';
import Footer from './Footer';
import DonarCaresole from '../pages/DonarCaresole';
const Home = () => {
  return (
    <>
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
            <Button colorScheme="teal" mr={4}>
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

              <FaLocationDot size={20} _hover={{ size: 50 }} />
              <Box fontFamily={"sans-serif"} fontSize={"sm"} clssName="address">
                <Text >Sr.No 58, Shri Bhawani Mata Mandir</Text>
                <Text >Road,Pardi,Nagpur - 440035</Text>
              </Box>
            </Flex>


            <Flex align="center" gap={3}>
              <MdPhone size={20} />
              <Box clssName="address" fontSize={"sm"}>
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
      <Gallery />
      {/* <DonarCaresole /> */}
      <Testimonial />

      <Footer />

    </>
  );
};

export default Home;
