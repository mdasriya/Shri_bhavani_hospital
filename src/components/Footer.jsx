import React from 'react';
import {
  Box,
  Center,
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
import { Link } from 'react-router-dom';

const Footer = () => {

  var currentDate = new Date();
  // Get the current year
var currentYear = currentDate.getFullYear();

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
        bg={'teal.100'}
        p={4}
      >
        {/* First Box */}
       {/* First Box */}
       <Box w="100%" h="100%"  p={"5px 20px"}>
          <Box height="auto" cursor="pointer" p={4}>
            <Image src="http://shribhavanihospital.ramduta.com/wp-content/uploads/2023/06/logo.png" alt="logo" />
          </Box>
          <Box ml={3} display="flex" flexDirection="column" gap={6}>
            <Text fontSize="15px" color="gray.700">With our 'Patient First' approach, we have brought the best aspects of modern medicine and healthcare under a single multi-functional premise, right from day one.</Text>
            <Box alignItems="center" display="flex" justifyContent="space-around" height="50px">
              <Box bg='white' _hover={{ bg: 'teal.500', color: 'white' }} border={"1px solid white"} padding="10px">
                <TiSocialTwitter size={25} />
              </Box>
              <Box bg='white' _hover={{ bg: 'teal.500', color: 'white' }} padding="10px" border={"1px solid white"} >
                <FaFacebookF size={25} />
              </Box>
              <Box bg='white' _hover={{ bg: 'teal.500', color: 'white' }} padding="10px" border={"1px solid white"} >
                <FaInstagram _hover={{size:"30px"}} size={25} />
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Second Box */}
         {/* Second Box */}
         <Box w="100%" h="100%">
          <Box height="14%">
            <Heading fontSize="17px" textTransform={"uppercase"}>Specialization</Heading>
          </Box>
          <Box display="flex" flexDirection="column" gap={2}>
            <Box display="flex" alignItems="center" textAlign="center">
              <MdOutlineKeyboardArrowRight size={30} color="teal" />
              <Text _hover={{ cursor: 'pointer', borderBottom: '2px solid teal', transition: 'border-bottom 0.3s ease' }} fontSize="15px">Critical Care Medicine</Text>
            </Box>
            <Box display="flex" alignItems="center" textAlign="center">
              <MdOutlineKeyboardArrowRight size={30} color="teal"/>
              <Text _hover={{ cursor: 'pointer', borderBottom: '2px solid teal', transition: 'border-bottom 0.3s ease' }} fontSize="15px">Internal Medicine</Text>
            </Box>
            <Box display="flex" alignItems="center" textAlign="center">
              <MdOutlineKeyboardArrowRight size={30} color="teal"/>
              <Text _hover={{ cursor: 'pointer', borderBottom: '2px solid teal', transition: 'border-bottom 0.3s ease' }} fontSize="15px">Obstetrics & Gynaecology</Text>
            </Box>
            <Box display="flex" alignItems="center" textAlign="center">
              <MdOutlineKeyboardArrowRight size={30} color="teal"/>
              <Text _hover={{ cursor: 'pointer', borderBottom: '2px solid teal', transition: 'border-bottom 0.3s ease' }} fontSize="15px">Paediatrics & Pediatric Surgery</Text>
            </Box>
            <Box display="flex" alignItems="center" textAlign="center">
              <MdOutlineKeyboardArrowRight size={30} color="teal"/>
              <Text _hover={{ cursor: 'pointer', borderBottom: '2px solid teal', transition: 'border-bottom 0.3s ease' }} fontSize="15px">Cardiology & Cardiac Surgery</Text>
            </Box>
          </Box>
        </Box>
        {/* Third Box */}
        <Box w="100%" h="100%" >
          <Box  height="14%">
            <Heading fontSize="17px">LINKS</Heading>
          </Box>
          <Box display="flex" flexDirection="column" gap={2}>
            <Box  display="flex" alignItems="center" textAlign="center">
              <MdOutlineKeyboardArrowRight size={30} color="teal" />
              <Text _hover={{ cursor: 'pointer', borderBottom: '2px solid teal', transition: 'border-bottom 0.3s ease' }} fontSize="15px">Home</Text>
            </Box>
            <Box  display="flex" alignItems="center" textAlign="center">
              <MdOutlineKeyboardArrowRight size={30} color='teal'/>
              <Text _hover={{ cursor: 'pointer', borderBottom: '2px solid teal', transition: 'border-bottom 0.3s ease' }} fontSize="15px">About</Text>
            </Box>
            <Box  display="flex" alignItems="center" textAlign="center">
              <MdOutlineKeyboardArrowRight size={30} color='teal'/>
              <Text _hover={{ cursor: 'pointer', borderBottom: '2px solid teal', transition: 'border-bottom 0.3s ease' }} fontSize="15px">Departments</Text>
            </Box>
            <Box  display="flex" alignItems="center" textAlign="center">
              <MdOutlineKeyboardArrowRight size={30} color='teal' />
              <Text  _hover={{ cursor: 'pointer', borderBottom: '2px solid teal', transition: 'border-bottom 0.3s ease' }}fontSize="15px">Doctors</Text>
            </Box>
            <Box  display="flex" alignItems="center" textAlign="center">
              <MdOutlineKeyboardArrowRight size={30}  color='teal'/>
              <Text _hover={{ cursor: 'pointer', borderBottom: '2px solid teal', transition: 'border-bottom 0.3s ease' }} fontSize="15px">Blog</Text>
            </Box>
          </Box>
        </Box>

        {/* Fourth Box */}
         {/* Third Box */}
         <Box w="100%" h="100%">
          <Box height="14%">
            <Heading fontSize="17px">SERVICES</Heading>
          </Box>
          <Box display="flex" flexDirection="column" gap={2}>
            {/* Add hover effect to the Text element */}
            <Box
              display="flex"
              alignItems="center"
              textAlign="center"
            >
              <MdOutlineKeyboardArrowRight size={30} color="teal" />
              <Text _hover={{ cursor: 'pointer', borderBottom: '2px solid teal', transition: 'border-bottom 0.3s ease' }} fontSize="15px">Neurology</Text>
            </Box>
            <Box display="flex" alignItems="center" textAlign="center" >
              <MdOutlineKeyboardArrowRight size={30} color='teal'/>
              <Text fontSize="15px" _hover={{ cursor: 'pointer', borderBottom: '2px solid teal', transition: 'border-bottom 0.3s ease' }}>Ophthalmology</Text>
            </Box>
            <Box display="flex" alignItems="center" textAlign="center" >
              <MdOutlineKeyboardArrowRight size={30} color='teal'/>
              <Text _hover={{ cursor: 'pointer', borderBottom: '2px solid teal', transition: 'border-bottom 0.3s ease' }} fontSize="15px">Nuclear Magnetic</Text>
            </Box>
            <Box display="flex" alignItems="center" textAlign="center" >
              <MdOutlineKeyboardArrowRight size={30} color='teal' />
              <Text _hover={{ cursor: 'pointer', borderBottom: '2px solid teal', transition: 'border-bottom 0.3s ease' }} fontSize="15px">X-Ray</Text>
            </Box>   
          </Box>
        </Box>

        {/* Last Box */}
        <Box w="100%" h="100%" >
          <Box  height="14%">
            <Heading  fontSize="17px">HAVE A QUESTIONS?</Heading>
          </Box>
          <Box display="flex" flexDirection="column" gap={4}>
            <Box  display="flex" justifyContent="flex-start" alignItems="center" textAlign="center">
              <TfiLocationPin size={20} color="teal" />
           
              <Text ml={2} fontSize="15px">Sr.No 58, Shri Bhawani Mata</Text>
              <Text ml={4} fontSize="15px">Mandir Road, Pardi, Nagpur - 440035</Text>
          
            </Box>
            <Box  display="flex" alignItems="center" textAlign="center">
              <HiPhone size={20} color="teal" />
              <Text fontSize="18px" color="teal.500" ml={2} _hover={{ cursor: 'pointer', borderBottom: '2px solid teal', transition: 'border-bottom 0.3s ease' }} fontWeight="500">
                +91-7722055550
              </Text>
            </Box>
            <Box  display="flex" alignItems="center" textAlign="center">
              <BiMailSend size={20} color="teal" />
              <Text ml={2} fontWeight="500" color="teal.500" _hover={{ cursor: 'pointer', borderBottom: '2px solid teal', transition: 'border-bottom 0.3s ease' }} fontSize="20px">itsbmhri@gmail.com</Text>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Box  w='100%' p={4} bg={"teal"}>
<Center>
<Text color={'white'} fontWeight={"600"} fontSize={'md'}>
Designed and Developed by &copy;
</Text>
<Link href="http://royalswebtechpvtltd.com" isExternal  target="_blank">
<Text color={'white'}  _hover={{color:"black"}} fontWeight={"600"} fontSize={'md'}>
Royal's WebTech
</Text>
</Link>
<Text color={'white'} fontWeight={"600"}  fontSize={'lg'} href="http://royalswebtechpvtltd.com/">
&nbsp;{currentYear}
</Text>
</Center>
</Box>
    </Box>
  );
};

export default Footer;
