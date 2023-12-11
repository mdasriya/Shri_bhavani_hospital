import { Box, Image, Menu, MenuButton, Button, MenuItem, MenuList, FormLabel, Text } from '@chakra-ui/react'

import React, { useState } from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";

const Navigation = () => {
    const [arrow, setArrow] = useState(false)
    const handleArrow = () => {
        setArrow((prev) => !prev)
    }



    return (
        <div>
            <Box display="flex" bg={"teal.500"} justifyContent="space-around" padding={"12px"}>
                <Menu>
                    <MenuButton bg="none"
                        colorScheme="none" color="white" onClick={handleArrow} as={Button}
                    >
                        HOME
                    </MenuButton>

                </Menu>
                <Menu>
                    <MenuButton bg="none"
                        onClick={handleArrow}
                        //  
                        colorScheme="none" color="white" as={Button} rightIcon={arrow ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}>
                        ABOUT
                    </MenuButton>
                    <MenuList colorScheme="none" mt={"4px"}>
                        <MenuItem W="auto" minH='40px'>
                            <Text>About our Hospital</Text>
                        </MenuItem>
                        <MenuItem W="auto" minH='40px'>
                            <Text>About our Trust</Text>
                        </MenuItem>
                        <MenuItem W="auto" minH='40px'>
                            <Text>Board of Trustees</Text>
                        </MenuItem>
                        <MenuItem W="auto" minH='40px'>
                            <Text>Testimonial</Text>
                        </MenuItem>
                    </MenuList>
                </Menu>
                <Menu>
                    <MenuButton bg="none"
                        colorScheme="none" color="white" as={Button} rightIcon={<MdKeyboardArrowDown />}>
                        SPECILITIES
                    </MenuButton>
                    <MenuList>
                        <MenuItem W="auto" minH='40px'>
                            <Text>Orthopedic</Text>
                        </MenuItem>
                        <MenuItem W="auto" minH='40px'>
                            <Text>Departments</Text>
                        </MenuItem>
                        <MenuItem W="auto" minH='40px'>
                            <Text>Hematology</Text>
                        </MenuItem>
                        <MenuItem W="auto" minH='40px'>
                            <Text>Cardiology</Text>
                        </MenuItem>
                        <MenuItem W="auto" minH='40px'>
                            <Text>Dermatology</Text>
                        </MenuItem>
                        <MenuItem W="auto" minH='40px'>
                            <Text>Neurology</Text>
                        </MenuItem>
                    </MenuList>
                </Menu>
                <Menu>
                    <MenuButton bg="none"
                        colorScheme="none" color="white" as={Button} rightIcon={<MdKeyboardArrowDown />}>
                        SERVICES
                    </MenuButton>
                    <MenuList padding={2}>
                        <Box display={"flex"} gap={6}>
                            <Box border={"1px solid green"} gap={6}>
                                <Text p={2}>SERVICES</Text>
                                <MenuItem minH='40px'>
                                    <Text>The New India Assurance Co.Ltd</Text>
                                </MenuItem>
                                <MenuItem minH='40px'>
                                    <Text>The New India Assurance Co.Ltd</Text>
                                </MenuItem>
                                <MenuItem minH='40px'>
                                    <Text>The New India Assurance Co.Ltd</Text>
                                </MenuItem>
                                <MenuItem minH='40px'>
                                    <Text>The New India Assurance Co.Ltd</Text>
                                </MenuItem>
                                <MenuItem minH='40px'>
                                    <Text>The New India Assurance Co.Ltd</Text>
                                </MenuItem>
                                <MenuItem minH='40px'>
                                    <Text>The New India Assurance Co.Ltd</Text>
                                </MenuItem>

                            </Box>
                            <Box border={"1px solid green"}>
                                <Text p={2}>SERVICES</Text>
                                <Text>The New India Assurance Co.Ltd</Text>
                                <Text>The New India Assurance Co.Ltd</Text>
                                <Text>The New India Assurance Co.Ltd</Text>
                                <Text>The New India Assurance Co.Ltd</Text>
                                <Text>The New India Assurance Co.Ltd</Text>
                            </Box>
                        </Box>
                        <MenuItem W="auto" minH='40px'>
                            <Text>Services</Text>
                        </MenuItem>
                        <MenuItem minH='40px'>
                            <Text>Cosmetic Dental</Text>
                        </MenuItem>
                        <MenuItem minH='40px'>
                            <Text>Dental Hygiene</Text>
                        </MenuItem>
                        <MenuItem minH='40px'>
                            <Text>Diagnostic Center</Text>
                        </MenuItem>
                        <MenuItem minH='40px'>
                            <Text>Painless Procedures</Text>
                        </MenuItem>
                        <MenuItem minH='40px'>
                            <Text>Pediatric Services</Text>
                        </MenuItem>
                    </MenuList>
                </Menu>
                <Menu>
                    <MenuButton bg="none"
                        //   border="1px "
                        colorScheme="none" color="white" as={Button}>
                        OUR DOCTORS
                    </MenuButton>

                </Menu>
                <Menu>
                    <MenuButton bg="none"
                        //    border="1px"
                        colorScheme="none" color="white" as={Button} rightIcon={<MdKeyboardArrowDown />}>
                        INSURANCE
                    </MenuButton>
                    <MenuList>
                        <MenuItem W="auto" minH='40px'>
                            <Text>The New India Assurance Co.Ltd</Text>
                        </MenuItem>
                        <MenuItem W="auto" minH='40px'>
                            <Text>United India Insurance Co. Ltd.</Text>
                        </MenuItem>
                        <MenuItem W="auto" minH='40px'>
                            <Text>National Insurance Co. Ltd.</Text>
                        </MenuItem>
                        <MenuItem W="auto" minH='40px'>
                            <Text>The Oriental Insurance Co.Ltd</Text>
                        </MenuItem>
                        <MenuItem W="auto" minH='40px'>
                            <Text>Navi General Insurance Ltd.</Text>
                        </MenuItem>
                        <MenuItem W="auto" minH='40px'>
                            <Text>Manipal Cigna Health Insurance Company Ltd.</Text>
                        </MenuItem>
                        <MenuItem W="auto" minH='40px'>
                            <Text>Bharti AXA General Insurance Co. Ltd.</Text>
                        </MenuItem>
                        <MenuItem W="auto" minH='40px'>
                            <Text>Aditya Birla Health Insurance Co Ltd.</Text>
                        </MenuItem>
                        <MenuItem W="auto" minH='40px'>
                            <Text>Bajaj Allianz General Insurance Co Ltd</Text>
                        </MenuItem>
                        <MenuItem W="auto" minH='40px'>
                            <Text>HDFC ERGO General Insurance Co.Ltd.</Text>
                        </MenuItem>
                        <MenuItem W="auto" minH='40px'>
                            <Text>Apollo Munich Health Insurance Company Ltd.</Text>
                        </MenuItem>
                    </MenuList>
                </Menu>
                <Menu >
                    <MenuButton bg="none"
                        textAlign={"center"}
                        alignItems={"center"}
                        colorScheme="none" color="white" as={Button}>
                        CONTACT
                    </MenuButton>
                </Menu>

            </Box>
        </div>
    )
}

export default Navigation
