import React from 'react';
import {
  Box,
  Grid,
  Heading,
  Image,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { TfiLocationPin } from "react-icons/tfi";
import { HiPhone } from "react-icons/hi";
import { BiMailSend } from "react-icons/bi";
import { TiSocialTwitter } from "react-icons/ti";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  const columnCount = useBreakpointValue({
    base: 1,
    sm: 2,
    md: 3,
    lg: 4,
    xl: 5,
  });

  return (
    <Box >
      <Grid
        templateColumns={`repeat(${columnCount}, 1fr)`}
        gap={6}
        bg={'rgb(230, 230, 230)'}
        p={4}
      >
        {/* First Box */}
        <Box w="100%" h="100%" >
          <Box  height="auto" cursor="pointer" p={4}>
            <Image src="http://shribhavanihospital.ramduta.com/wp-content/uploads/2023/06/logo.png" alt="logo" />
          </Box>
          <Box display="flex" flexDirection="column" gap={6}>
            <Text fontSize="18px" color="gray.500">We are among the most qualified implant providers in the AUS with over 30 years of quality training and experience.</Text>
            <Box  alignItems="center" display="flex" justifyContent="space-around" height="50px">
              <Box bg='white'  _hover={{ bg: 'teal.500', color: 'white' }} border={"1px solid white"}  padding="10px">
                <TiSocialTwitter size={25} />
              </Box>
              <Box bg='white' _hover={{ bg: 'teal.500', color: 'white' }}  padding="10px" border={"1px solid white"} >
                <FaFacebookF size={25} />
              </Box>
              <Box bg='white' _hover={{ bg: 'teal.500', color: 'white' }}  padding="10px" border={"1px solid white"} >
                <FaInstagram size={25} />
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Second Box */}
        <Box w="100%" h="100%" >
          <Box  height="14%">
            <Heading fontSize="23px">DEPARTMENT</Heading>
          </Box>
          <Box display="flex" flexDirection="column" gap={2}>
            <Box  display="flex" alignItems="center" textAlign="center">
              <MdOutlineKeyboardArrowRight size={30} color="teal.500" />
              <Text fontSize="20px">Neurology</Text>
            </Box>
            <Box  display="flex" alignItems="center" textAlign="center">
              <MdOutlineKeyboardArrowRight size={30} />
              <Text fontSize="20px">Ophthalmology</Text>
            </Box>
            <Box  display="flex" alignItems="center" textAlign="center">
              <MdOutlineKeyboardArrowRight size={30} />
              <Text fontSize="20px">Nuclear Magnetic</Text>
            </Box>
            <Box  display="flex" alignItems="center" textAlign="center">
              <MdOutlineKeyboardArrowRight size={30} />
              <Text fontSize="20px">X-Ray</Text>
            </Box>
            <Box  display="flex" alignItems="center" textAlign="center">
              <MdOutlineKeyboardArrowRight size={30} />
              <Text fontSize="20px">Surgical</Text>
            </Box>
            <Box  display="flex" alignItems="center" textAlign="center">
              <MdOutlineKeyboardArrowRight size={30} />
              <Text fontSize="20px">Cardiology</Text>
            </Box>
            <Box  display="flex" alignItems="center" textAlign="center">
              <MdOutlineKeyboardArrowRight size={30} />
              <Text fontSize="20px">Dental</Text>
            </Box>
          </Box>
        </Box>

        {/* Third Box */}
        <Box w="100%" h="100%" >
          <Box  height="14%">
            <Heading fontSize="23px">LINKS</Heading>
          </Box>
          <Box display="flex" flexDirection="column" gap={2}>
            <Box  display="flex" alignItems="center" textAlign="center">
              <MdOutlineKeyboardArrowRight size={30} color="teal.500" />
              <Text fontSize="20px">Home</Text>
            </Box>
            <Box  display="flex" alignItems="center" textAlign="center">
              <MdOutlineKeyboardArrowRight size={30} />
              <Text fontSize="20px">About</Text>
            </Box>
            <Box  display="flex" alignItems="center" textAlign="center">
              <MdOutlineKeyboardArrowRight size={30} />
              <Text fontSize="20px">Departments</Text>
            </Box>
            <Box  display="flex" alignItems="center" textAlign="center">
              <MdOutlineKeyboardArrowRight size={30} />
              <Text fontSize="20px">Doctors</Text>
            </Box>
            <Box  display="flex" alignItems="center" textAlign="center">
              <MdOutlineKeyboardArrowRight size={30} />
              <Text fontSize="20px">Blog</Text>
            </Box>
            <Box  display="flex" alignItems="center" textAlign="center">
              <MdOutlineKeyboardArrowRight size={30} />
              <Text fontSize="20px">Pricing</Text>
            </Box>
            <Box  display="flex" alignItems="center" textAlign="center">
              <MdOutlineKeyboardArrowRight size={30} />
              <Text fontSize="20px">Contact</Text>
            </Box>
          </Box>
        </Box>

        {/* Fourth Box */}
        <Box w="100%" h="100%" >
          <Box  height="14%">
            <Heading fontSize="23px">SERVICES</Heading>
          </Box>
          <Box display="flex" flexDirection="column" gap={2}>
            <Box  display="flex" alignItems="center" textAlign="center">
              <MdOutlineKeyboardArrowRight size={30} color="teal.500" />
              <Text fontSize="20px">Neurology</Text>
            </Box>
            <Box  display="flex" alignItems="center" textAlign="center">
              <MdOutlineKeyboardArrowRight size={30} />
              <Text fontSize="20px">Ophthalmology</Text>
            </Box>
            <Box  display="flex" alignItems="center" textAlign="center">
              <MdOutlineKeyboardArrowRight size={30} />
              <Text fontSize="20px">Nuclear Magnetic</Text>
            </Box>
            <Box  display="flex" alignItems="center" textAlign="center">
              <MdOutlineKeyboardArrowRight size={30} />
              <Text fontSize="20px">X-Ray</Text>
            </Box>
          </Box>
        </Box>

        {/* Last Box */}
        <Box w="100%" h="100%" >
          <Box  height="14%">
            <Heading fontSize="23px">HAVE A QUESTIONS?</Heading>
          </Box>
          <Box display="flex" flexDirection="column" gap={4}>
            <Box  display="flex" justifyContent="flex-start" alignItems="center" textAlign="center">
              <TfiLocationPin size={20} color="teal.500" />
              <Text ml={2} fontSize="19px">Sr.No 58, Shri Bhawani Mata</Text>
              <Text ml={4} fontSize="19px">Mandir Road, Pardi, Nagpur - 440035</Text>
            </Box>
            <Box  display="flex" alignItems="center" textAlign="center">
              <HiPhone size={20} color="teal.500" />
              <Text fontSize="18px" color="teal.500" ml={2} fontWeight="500">
                +91-7722055550
              </Text>
            </Box>
            <Box  display="flex" alignItems="center" textAlign="center">
              <BiMailSend size={20} color="teal" />
              <Text ml={2} fontWeight="500" color="teal.500" fontSize="20px">itsbmhri@gmail.com</Text>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Box>
  );
};

export default Footer;
