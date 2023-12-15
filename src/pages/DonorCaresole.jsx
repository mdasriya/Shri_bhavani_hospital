import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination,Navigation, Autoplay } from 'swiper/modules';
import styled from 'styled-components';
import { Box, Heading, Text } from '@chakra-ui/react';
const DonorCaresole = () => {




    return (
        <DIV>
             <Box data-aos="fade-left" padding={"10px 0px"} width={"100%"} >
                <Box width={"40%"} padding={"10px"} margin={"auto"} display={"flex"} textAlign={"center"} justifyContent={"center"} gap={"20px"}>
                    <Text fontWeight={500} fontSize={"30px"}>Meet our</Text>
                    <Heading fontFamily={"monospace"} letterSpacing={1}>Medical Specialists</Heading>

                </Box>
                <Box border={"2px solid green"} height={"0px"} width={"20%"} margin={"auto"}>
                </Box>

            </Box>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                // autoplay={{
                //     delay: 2500,
                //     disableOnInteraction: false,
                //     direction:'ltr',
                // }}
                loop={true}
                navigation={true}
                direction="horizontal" 
                modules={[Pagination,Navigation, Autoplay]}
                className="mukesh"
                // direction="rtl"
            >

                <SwiperSlide >

                    <img src="http://shribhavanihospital.ramduta.com/wp-content/uploads/2023/06/client-2.jpg" alt="" />

                </SwiperSlide>


                <SwiperSlide><img src="http://shribhavanihospital.ramduta.com/wp-content/uploads/2023/06/client-4.jpg" alt="" /></SwiperSlide>

                <SwiperSlide><img src="http://shribhavanihospital.ramduta.com/wp-content/uploads/2023/06/GeneXIndia-Pvt-Ltd.png" alt="" /></SwiperSlide>

                <SwiperSlide><img src="http://shribhavanihospital.ramduta.com/wp-content/uploads/2023/06/client-6.png" alt="" /></SwiperSlide>

                <SwiperSlide><img src="http://shribhavanihospital.ramduta.com/wp-content/uploads/2023/06/client-5.jpg" alt="" /></SwiperSlide>

                <SwiperSlide><img src="http://shribhavanihospital.ramduta.com/wp-content/uploads/2023/06/client-2.jpg" alt="" /></SwiperSlide>
            </Swiper>
        </DIV>
    );
};

export default DonorCaresole;



const DIV = styled.div`
  .mukesh {
    width: 100%;
    height: 100%;
    /* border: 2px solid rgb(61, 9, 156); */
    transform: translate3d(0px, 0, 0);
}

.mukesh :nth-child(1){
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;

}

.swiper-slide {
    /* border: 2px solid red; */
    text-align: center;
    font-size: 18px;
    background: #fff;
}

.swiper-slide img {
    display: block;
    width: 90%;
    height: 100%;
    object-fit: cover;
    /* border: 2px solid red; */
}  

 ` 
