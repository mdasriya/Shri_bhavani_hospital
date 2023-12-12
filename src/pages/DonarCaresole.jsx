import { Box, Image } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import ScrollCarousel from 'scroll-carousel';
const DonarCaresole = () => {


  useEffect(()=> {
    new ScrollCarousel(".my-carousel", {speed: 8, smartSpeed: true, autoplay: true});
  },[]) 
    
  return (
    <div class="my-carousel" data-carousel='{"speed": 15, "autoplay": true, "smartSpeed": true, "slideSelector": ".my-slide"}'>
    <div class="my-slide"><Box ml={10}> <Image
    boxSize='150px'
    objectFit='cover'
    src='https://shribhavanihospital.in/img/donars/Nagpur%20NagrikSahakari%20Bank%20Ltd,%20Nagpur.png'
    alt='Dan Abramov'
  /></Box></div>
    <div class="my-slide"><Box  ml={10}> <Image
    boxSize='150px'
    objectFit='cover'
    src='https://shribhavanihospital.in/img/donars/Shree%20Shubhlaxmi%20Credit%20Cooperative%20Society%20Ltd,%20Nagpur.png'
    alt='Dan Abramov'
  /></Box></div>
    <div class="my-slide"><Box  ml={10}> <Image
    boxSize='150px'
    objectFit='cover'
    src='https://shribhavanihospital.in/img/donars/FS%20Logo.jpg'
    alt='Dan Abramov'
  /></Box></div>
    <div class="my-slide"><Box  ml={10}> <Image
    boxSize='150px'
    objectFit='cover'
    src='https://shribhavanihospital.in/img/donars/Jawaharlal%20Nehru%20Port%20Trust%20(JNPT).jpg'
    alt='Dan Abramov'
  /></Box></div>
  
  </div>
  )
}

export default DonarCaresole
