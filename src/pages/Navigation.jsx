import React, { useState } from 'react';
import { Box, Menu, MenuButton, Button, MenuItem, MenuList, Text } from '@chakra-ui/react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import styled from 'styled-components';

const Navigation = () => {
  const [arrows, setArrows] = useState([false, false, false, false]);

  const handleArrow = (index) => {
    setArrows((prev) => prev.map((prevValue, i) => (i === index ? !prevValue : prevValue)));
  };

  const renderMenuItems = (items) => (
    items.map((item, index) => (
      <MenuItem key={index} width="auto" minH="40px" bg="none">
        <Text className='cool-link'>{item}</Text>
      </MenuItem>
    ))
  );

  return (
    <StyledDiv>
      <Box
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        bg="teal.500"
        justifyContent="space-around"
        padding="12px"
      >
        <Menu>
          <MenuButton bg="none" fontSize={{ base: "sm", md: "md" }} colorScheme="none" color="white" as={Button}>
            HOME
          </MenuButton>
        </Menu>

        <Menu>
          <MenuButton
            bg="none"
            onClick={() => handleArrow(0)}
            fontSize={{ base: "sm", md: "md" }}
            colorScheme="none"
            color="white"
            as={Button}
            rightIcon={arrows[0] ? <MdKeyboardArrowUp size={20} /> : <MdKeyboardArrowDown size={20} />}
          >
            ABOUT
          </MenuButton>
          <MenuList colorScheme="none" mt="4px" fontSize={{ base: "sm", md: "md" }}>
            {renderMenuItems(['About our Hospital', 'About our Trust', 'Board of Trustees', 'Testimonial'])}
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton
            bg="none"
            fontSize={{ base: "sm", md: "md" }}
            colorScheme="none"
            color="white"
            as={Button}
            onClick={() => handleArrow(1)}
            rightIcon={arrows[1] ? <MdKeyboardArrowUp size={20} /> : <MdKeyboardArrowDown size={20} />}
          >
            SPECIALITIES
          </MenuButton>
          <MenuList fontSize={{ base: "sm", md: "md" }} colorScheme="none">
            {renderMenuItems(['Orthopedic', 'Departments', 'Hematology', 'Cardiology', 'Dermatology', 'Neurology'])}
          </MenuList>
        </Menu>

        <Menu columns={{ base: 1, md: 2 }}>
          <MenuButton
            bg="none"
            fontSize={{ base: "sm", md: "md" }}
            colorScheme="none"
            color="white"
            as={Button}
            onClick={() => handleArrow(2)}
            rightIcon={arrows[2] ? <MdKeyboardArrowUp size={20} /> : <MdKeyboardArrowDown size={20} />}
          >
            SERVICES
          </MenuButton>
          <MenuList width="90%" zIndex={9999} padding={2} fontSize={{ base: "sm", md: "md" }}>
            <Box display={{ base: 'block', md: 'flex' }} gap={6}>
              <Box width={{ base: '100%', md: '25%' }} mb={{ base: 4, md: 0 }}>
                {renderMenuItems(['OPD', 'Emergency Medical Service & Ambulance', 'Dialysis', 'Preventing Health Check-up', 'ICU & SICU', 'PICU & NICU'])}
              </Box>

              <Box width={{ base: '100%', md: '25%' }} mb={{ base: 4, md: 0 }}>
                {renderMenuItems(['Haematology', 'BioChemestry', 'Hormones', 'Serology', 'Microscopy'])}
              </Box>

              <Box width={{ base: '100%', md: '25%' }} mb={{ base: 4, md: 0 }}>
                {renderMenuItems(['X-Ray', 'CT', 'Altrasound', 'Sono-Mammography'])}
              </Box>

              <Box width={{ base: '100%', md: '25%' }} mb={{ base: 4, md: 0 }}>
                {renderMenuItems(['ECG', 'Stress Test (TMT)', 'Echocardiography'])}
              </Box>

              <Box width={{ base: '100%', md: '25%' }} mb={{ base: 4, md: 0 }}>
                {renderMenuItems(['Neurology', 'Physiotherophy', 'Pulmonary Function Test (PFT)', 'Pharmacy (24X7)'])}
              </Box>

              <Box width={{ base: '100%', md: '25%' }}>
                {renderMenuItems(['Canteen', 'Dietary', 'CSSD', 'Bio-Medical Engineering'])}
              </Box>
            </Box>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton bg="none" fontSize={{ base: "sm", md: "md" }} colorScheme="none" color="white" as={Button}>
            OUR DOCTORS
          </MenuButton>
        </Menu>

        <Menu>
          <MenuButton
            bg="none"
            fontSize={{ base: "sm", md: "md" }}
            colorScheme="none"
            color="white"
            as={Button}
            onClick={() => handleArrow(3)}
            rightIcon={arrows[3] ? <MdKeyboardArrowUp size={20} /> : <MdKeyboardArrowDown size={20} />}
          >
            INSURANCE
          </MenuButton>
          <MenuList fontSize={{ base: "sm", md: "md" }}>
            {renderMenuItems([
              'The New India Assurance Co.Ltd', 'United India Insurance Co. Ltd.', 'National Insurance Co. Ltd.',
              'The Oriental Insurance Co.Ltd', 'Navi General Insurance Ltd.', 'Manipal Cigna Health Insurance Company Ltd.',
              'Bharti AXA General Insurance Co. Ltd.', 'Aditya Birla Health Insurance Co Ltd.',
              'Bajaj Allianz General Insurance Co Ltd', 'HDFC ERGO General Insurance Co.Ltd.', 'Apollo Munich Health Insurance Company Ltd.'
            ])}
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton
            bg="none"
            fontSize={{ base: "sm", md: "md" }}
            textAlign="center"
            alignItems="center"
            colorScheme="none"
            color="white"
            as={Button}
          >
            CONTACT
          </MenuButton>
        </Menu>
      </Box>
    </StyledDiv>
  );
};


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

export default Navigation;
