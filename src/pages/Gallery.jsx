import { Box, Flex,chakra } from '@chakra-ui/react';
import React from 'react'
import Carousel from 'react-grid-carousel'

 const Gallery = () => {

  
  return (
    <>
     <Flex justifyContent="center" mb={2}>
        <chakra.h3 fontSize="3xl" fontWeight="bold"  textAlign="center">
        OUR EMPANELLEMENTS / TPA
        </chakra.h3> 
      </Flex>
      <Box border={"2px solid green"}   height={"0px"} width={"20%"} margin={"auto"}>
                
                </Box>
     <Box width={"80%"} margin={"auto"} mt={10} >
        <Carousel  autoplay= {true}  cols={4}  rows={1} gap={10} slidesToScroll={1}  loop showDots={'true'}>
      <Carousel.Item>
        <img width="80%" src="https://shribhavanihospital.in/img/clients/client-1.png" alt='image1'/>
      </Carousel.Item>
      <Carousel.Item>
        <img width="80%" src="https://shribhavanihospital.in/img/clients/client-2.jpg" alt='image2'/>
      </Carousel.Item>
      <Carousel.Item>
        <img width="80%" src="https://shribhavanihospital.in/img/clients/client-3.png" alt='image3'/>
      </Carousel.Item>
      <Carousel.Item>
        <img width="80%" src="https://shribhavanihospital.in/img/clients/client-4.jpg" alt='image4'/>
      </Carousel.Item>
      <Carousel.Item>
        <img width="80%" src="https://shribhavanihospital.in/img/clients/client-5.jpg" alt='image5'/>
      </Carousel.Item>
      <Carousel.Item>
        <img width="80%" src="https://shribhavanihospital.in/img/clients/client-6.png" alt='image6'/>
      </Carousel.Item>
    
      
      <Carousel.Item>
        {/* anything you want to show in the grid */}
      </Carousel.Item>
      {/* ... */}
    </Carousel>
    </Box>
    </>
  )
}

export default Gallery;