import React, { useState } from 'react';
import { Box, Menu, MenuButton, Button, MenuItem, MenuList, FormLabel, Text } from '@chakra-ui/react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import styled from 'styled-components';
import { MdKeyboardArrowUp } from "react-icons/md";
const Navigation = () => {
  const [arrow1, setArrow1] = useState(false);
  const [arrow2, setArrow2] = useState(false);
  const [arrow3, setArrow3] = useState(false);
  const [arrow4, setArrow4] = useState(false);

  const handleArrow1 = () => {
    setArrow1((prev) => !prev);
  };

  const handleArrow2 = () => {
    setArrow2((prev) => !prev);
  };
  const handleArrow3 = () => {
    setArrow3((prev) => !prev);
  };
  const handleArrow4 = () => {
    setArrow4((prev) => !prev);
  };

  return (
    <DIV>
    <Box  display="flex" bg="teal.500" justifyContent="space-around" padding="12px">
      {/* Home */}
      <Menu>
        <MenuButton bg="none" fontSize="sm" colorScheme="none" color="white"  as={Button}>
          HOME
        </MenuButton>
      </Menu>

      {/* ABOUT */}
      <Menu>
        <MenuButton
          bg="none"
          onClick={handleArrow1}
          fontSize="sm"
          colorScheme="none"
          color="white"
          as={Button}
          rightIcon={arrow1 ? <MdKeyboardArrowUp size={20}/> : <MdKeyboardArrowDown size={20}/>}
        >
          ABOUT
        </MenuButton>
        <MenuList colorScheme="none" mt="4px" fontSize="sm">
          <MenuItem width="auto" minH="40px" bg={"none"}>
            <Text className='cool-link'>About our Hospital</Text>
          </MenuItem>
          <MenuItem width="auto" minH="40px" bg={"none"}>
            <Text className='cool-link'>About our Trust</Text>
          </MenuItem>
          <MenuItem width="auto" minH="40px" bg={"none"}>
            <Text className='cool-link'>Board of Trustees</Text>
          </MenuItem>
          <MenuItem width="auto" minH="40px" bg={"none"}>
            <Text className='cool-link'>Testimonial</Text>
          </MenuItem>
        </MenuList>
      </Menu>

      {/* SPECIALITIES */}
      <Menu>
        <MenuButton
          bg="none"
          fontSize="sm"
          colorScheme="none"
          color="white"
          as={Button}
          onClick={handleArrow2}
          rightIcon={arrow2 ? <MdKeyboardArrowUp size={20}/> : <MdKeyboardArrowDown size={20}/>}
        >
          SPECIALITIES
        </MenuButton>
        <MenuList fontSize="sm" colorScheme="none">
          <MenuItem width="auto" minH="40px"  bg={"none"}>
            <Text className='cool-link'>Orthopedic</Text>
          </MenuItem>
          <MenuItem width="auto" minH="40px" bg={"none"}>
            <Text className='cool-link'>Departments</Text>
          </MenuItem>
          <MenuItem width="auto" minH="40px" bg={"none"}>
            <Text className='cool-link'>Hematology</Text>
          </MenuItem>
          <MenuItem width="auto" minH="40px" bg={"none"}>
            <Text className='cool-link'>Cardiology</Text>
          </MenuItem>
          <MenuItem width="auto" minH="40px" bg={"none"}>
            <Text className='cool-link'>Dermatology</Text>
          </MenuItem>
          <MenuItem width="auto" minH="40px" bg={"none"}>
            <Text className='cool-link'>Neurology</Text>
          </MenuItem>
        </MenuList>
      </Menu>

      {/* SERVICES */}
      <Menu columns={{ base: 1, md: 2 }} >
        <MenuButton
          bg="none"
          fontSize="sm"
          colorScheme="none"
       
          color="white"
          as={Button}
          onClick={handleArrow3}
          rightIcon={arrow3 ? <MdKeyboardArrowUp size={20}/> : <MdKeyboardArrowDown size={20}/>}
        >
          SERVICES
        </MenuButton>
        <MenuList  width={"100%"} padding={2} fontSize="sm">
          <Box display={{ base: 'block', md: 'flex' }} gap={6}>
            <Box width={{ base: '100%', md: '25%' }} mb={{ base: 4, md: 0 }}>
              <FormLabel borderBottom="1px solid teal" p={2}>
                Services
              </FormLabel>
              <MenuItem minH="20px" bg={"none"}>
                <Text className='cool-link'>OPD</Text>
              </MenuItem>
              <MenuItem minH="20px" bg={"none"}>
                <Text className='cool-link'>Emergency Medical Service & Ambulance</Text>
              </MenuItem>
              <MenuItem minH="20px" bg={"none"}>
                <Text className='cool-link'>Dialysis</Text>
              </MenuItem>
              <MenuItem minH="20px" bg={"none"}>
                <Text className='cool-link'>Preventing Health Check-up</Text>
              </MenuItem>
              <MenuItem minH="20px" bg={"none"}>
                <Text className='cool-link'>ICU & SICU</Text>
              </MenuItem>
              <MenuItem minH="20px" bg={"none"}>
                <Text className='cool-link'>PICU & NICU</Text>
              </MenuItem>
            </Box>

            {/* Add other service categories */}
            <Box width={{ base: '100%', md: '25%' }} mb={{ base: 4, md: 0 }}>
              <FormLabel borderBottom="1px solid teal" p={2}>
                Pathology
              </FormLabel>
              <MenuItem minH="20px" bg={"none"}>
                <Text className='cool-link'>Haematology</Text>
              </MenuItem>
              <MenuItem minH="20px" bg={"none"}>
                <Text className='cool-link'>BioChemestry</Text>
              </MenuItem>
              <MenuItem minH="20px" bg={"none"}>
                <Text className='cool-link'>Hormones</Text>
              </MenuItem>
              <MenuItem minH="20px" bg={"none"}>
                <Text className='cool-link'>Serology</Text>
              </MenuItem>
              <MenuItem minH="20px" bg={"none"}>
                <Text className='cool-link'>Microscopy</Text>
              </MenuItem>
            </Box>

            {/* Add other service categories */}
            <Box width={{ base: '100%', md: '25%' }} mb={{ base: 4, md: 0 }}>
              <FormLabel borderBottom="1px solid teal" p={2}>
                Imaging
              </FormLabel>
              <MenuItem minH="20px" bg={"none"}>
                <Text className='cool-link'>X-Ray</Text>
              </MenuItem>
              <MenuItem minH="20px" bg={"none"}>
                <Text className='cool-link'>CT</Text>
              </MenuItem>
              <MenuItem minH="20px" bg={"none"}>
                <Text className='cool-link'>Altrasound</Text>
              </MenuItem>
              <MenuItem minH="20px" bg={"none"}>
                <Text className='cool-link'>Sono-Mammography</Text>
              </MenuItem>
            </Box>

            {/* Add other service categories */}
            <Box width={{ base: '100%', md: '25%' }} mb={{ base: 4, md: 0 }}>
              <FormLabel borderBottom="1px solid teal" p={2}>
                Non Interventional Cardiology
              </FormLabel>
              <MenuItem minH="20px" bg={"none"}>
                <Text className='cool-link'>ECG</Text>
              </MenuItem>
              <MenuItem minH="20px" bg={"none"}>
                <Text className='cool-link'>Stress Test (TMT)</Text>
              </MenuItem>
              <MenuItem minH="20px" bg={"none"}>
                <Text className='cool-link'>Echocardiography</Text>
              </MenuItem>
            </Box>
            <Box  width={{ base: '100%', md: '25%' }} mb={{ base: 4, md: 0 }}>
           <Box display={"flex"}>
             <Box ><MenuItem minH="20px" bg={"none"}>
                <Text className='cool-link'> Neurology</Text>
              </MenuItem>
              <MenuItem minH="20px" bg={"none"}>
                <Text className='cool-link'>Physiotherophy</Text>
              </MenuItem>
              <MenuItem minH="20px" bg={"none"}>
                <Text className='cool-link'>Pulmonary Function Test (PFT)</Text>
              </MenuItem>
              <MenuItem minH="20px" bg={"none"}>
                <Text className='cool-link'>Pharmacy (24X7)</Text>
              </MenuItem></Box>
              <Box> <MenuItem minH="20px" bg={"none"}>
                <Text className='cool-link'>Canteen</Text>
              </MenuItem>
              <MenuItem minH="20px" bg={"none"}>
                <Text className='cool-link'>Dietary</Text>
              </MenuItem>
              <MenuItem minH="20px" bg={"none"}>
                <Text className='cool-link'>CSSD</Text>
              </MenuItem>
              <MenuItem minH="20px" bg={"none"}>
                <Text className='cool-link'>Bio-Medical Engineering</Text>
              </MenuItem></Box>
              </Box>
            </Box>
     
          </Box>
        </MenuList>
      </Menu>

      {/* OUR DOCTORS */}
      <Menu>
        <MenuButton bg="none" fontSize="sm" colorScheme="none" color="white" as={Button}>
          OUR DOCTORS
        </MenuButton>
      </Menu>

      {/* INSURANCE */}
      <Menu>
        <MenuButton
          bg="none"
          fontSize="sm"
          colorScheme="none"
          color="white"
          as={Button}
          onClick={handleArrow4}
          rightIcon={arrow4 ? <MdKeyboardArrowUp size={20}/> : <MdKeyboardArrowDown size={20}/>}
        >
          INSURANCE
        </MenuButton>
        <MenuList fontSize="sm">
        <MenuItem width="auto" minH='20px' bg={"none"}>
                            <Text className='cool-link'>The New India Assurance Co.Ltd</Text>
                        </MenuItem>
                        <MenuItem width="auto" minH='20px' bg={"none"}>
                            <Text className='cool-link'>United India Insurance Co. Ltd.</Text>
                        </MenuItem>
                        <MenuItem width="auto" minH='20px' bg={"none"}>
                            <Text className='cool-link'>National Insurance Co. Ltd.</Text>
                        </MenuItem>
                        <MenuItem width="auto" minH='20px' bg={"none"}>
                            <Text className='cool-link'>The Oriental Insurance Co.Ltd</Text>
                        </MenuItem>
                        <MenuItem width="auto" minH='20px' bg={"none"}>
                            <Text className='cool-link'>Navi General Insurance Ltd.</Text>
                        </MenuItem>
                        <MenuItem width="auto" minH='20px' bg={"none"}>
                            <Text className='cool-link'>Manipal Cigna Health Insurance Company Ltd.</Text>
                        </MenuItem>
                        <MenuItem width="auto" minH='20px' bg={"none"}>
                            <Text className='cool-link'>Bharti AXA General Insurance Co. Ltd.</Text>
                        </MenuItem>
                        <MenuItem width="auto" minH='20px' bg={"none"}>
                            <Text className='cool-link'>Aditya Birla Health Insurance Co Ltd.</Text>
                        </MenuItem>
                        <MenuItem width="auto" minH='20px' bg={"none"}>
                            <Text className='cool-link'>Bajaj Allianz General Insurance Co Ltd</Text>
                        </MenuItem>
                        <MenuItem width="auto" minH='20px' bg={"none"}>
                            <Text className='cool-link'>HDFC ERGO General Insurance Co.Ltd.</Text>
                        </MenuItem>
                        <MenuItem width="auto" minH='20px' bg={"none"}>
                            <Text className='cool-link'>Apollo Munich Health Insurance Company Ltd.</Text>
                        </MenuItem>
        </MenuList>
      </Menu>

      {/* CONTACT */}
      <Menu>
        <MenuButton bg="none" fontSize="sm" textAlign="center" alignItems="center" colorScheme="none" color="white" as={Button}>
          CONTACT
        </MenuButton>
      </Menu>
    </Box>
    </DIV>
  );
};

export default Navigation;

const DIV = styled.div`
.cool-link {
    display: inline-block;
    color: #000;
    text-decoration: none;
}

  .cool-link::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: teal;
    transition: width .3s;
}

.cool-link:hover::after {
    width: 100%;
  
}  

`
