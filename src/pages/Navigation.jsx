import React, { useState } from 'react';
import { Box, Menu, MenuButton, Button, MenuItem, MenuList, FormLabel, Text } from '@chakra-ui/react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import styled from 'styled-components';

const Navigation = () => {
  // State for arrow icons
  const [arrows, setArrows] = useState([false, false, false, false]);

  // Function to handle arrow click
  const handleArrow = (index) => {
    setArrows((prev) => prev.map((prevValue, i) => (i === index ? !prevValue : prevValue)));
  };

  // Function to render menu items
  const renderMenuItems = (items) => (
    items.map((item, index) => (
      <MenuItem key={index} width="auto" minH="40px" bg="none">
        <Text className='cool-link'>{item}</Text>
      </MenuItem>
    ))
  );

  return (
    <StyledDiv>
      <Box display="flex" bg="teal.500" justifyContent="space-around" padding="12px">
        {/* Home */}
        <Menu>
          <MenuButton bg="none" fontSize="sm" colorScheme="none" color="white" as={Button}>
            HOME
          </MenuButton>
        </Menu>

        {/* ABOUT */}
        <Menu>
          <MenuButton
            bg="none"
            onClick={() => handleArrow(0)}
            fontSize="sm"
            colorScheme="none"
            color="white"
            as={Button}
            rightIcon={arrows[0] ? <MdKeyboardArrowUp size={20} /> : <MdKeyboardArrowDown size={20} />}
          >
            ABOUT
          </MenuButton>
          <MenuList colorScheme="none" mt="4px" fontSize="sm">
            {renderMenuItems(['About our Hospital', 'About our Trust', 'Board of Trustees', 'Testimonial'])}
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
            onClick={() => handleArrow(1)}
            rightIcon={arrows[1] ? <MdKeyboardArrowUp size={20} /> : <MdKeyboardArrowDown size={20} />}
          >
            SPECIALITIES
          </MenuButton>
          <MenuList fontSize="sm" colorScheme="none">
            {renderMenuItems(['Orthopedic', 'Departments', 'Hematology', 'Cardiology', 'Dermatology', 'Neurology'])}
          </MenuList>
        </Menu>

        {/* SERVICES */}
        <Menu columns={{ base: 1, md: 2 }}>
          <MenuButton
            bg="none"
            fontSize="sm"
            colorScheme="none"
            color="white"
            as={Button}
            onClick={() => handleArrow(2)}
            rightIcon={arrows[2] ? <MdKeyboardArrowUp size={20} /> : <MdKeyboardArrowDown size={20} />}
          >
            SERVICES
          </MenuButton>
          <MenuList width="100%" padding={2} fontSize="sm">
            {/* Add your service categories */}
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
            onClick={() => handleArrow(3)}
            rightIcon={arrows[3] ? <MdKeyboardArrowUp size={20} /> : <MdKeyboardArrowDown size={20} />}
          >
            INSURANCE
          </MenuButton>
          <MenuList fontSize="sm">
            {renderMenuItems([
              'The New India Assurance Co.Ltd',
              'United India Insurance Co. Ltd.',
              'National Insurance Co. Ltd.',
              'The Oriental Insurance Co.Ltd',
              'Navi General Insurance Ltd.',
              'Manipal Cigna Health Insurance Company Ltd.',
              'Bharti AXA General Insurance Co. Ltd.',
              'Aditya Birla Health Insurance Co Ltd.',
              'Bajaj Allianz General Insurance Co Ltd',
              'HDFC ERGO General Insurance Co.Ltd.',
              'Apollo Munich Health Insurance Company Ltd.',
            ])}
          </MenuList>
        </Menu>

        {/* CONTACT */}
        <Menu>
          <MenuButton bg="none" fontSize="sm" textAlign="center" alignItems="center" colorScheme="none" color="white" as={Button}>
            CONTACT
          </MenuButton>
        </Menu>
      </Box>
    </StyledDiv>
  );
};

export default Navigation;

const StyledDiv = styled.div`
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
    transition: width 0.3s;
  }

  .cool-link:hover::after {
    width: 100%;
  }
`;
