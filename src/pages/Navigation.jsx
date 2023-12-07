import { Box, Image, Menu, MenuButton, Button, MenuItem, MenuList, FormLabel } from '@chakra-ui/react'

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
            <Box display="flex" bg={"teal.500"}  justifyContent="space-around"  padding={"12px"}>
                <Menu>
                    <MenuButton bg="none"
                    
                        //   border="1px "
                        colorScheme="none" color="white" onClick={handleArrow} as={Button}
                    >
                        HOME
                    </MenuButton>

                </Menu>
                <Menu>
                    <MenuButton bg="none"
                    onClick={handleArrow}
                        //  
                        colorScheme="none"  color="white" as={Button} rightIcon={arrow?<MdKeyboardArrowUp />:<MdKeyboardArrowDown />}>
                        ABOUT
                    </MenuButton>
                    <MenuList   border="1px" colorScheme="none"  mt={"7px"}>
                        <Box display={"flex"}  flexDirection={"column"} cursor={"pointer"} padding={"10px"}>
                            <FormLabel >About our Hospital</FormLabel>
                            <FormLabel >About our Trust</FormLabel>
                            <FormLabel >Board of Trustees</FormLabel>

                        </Box>
                    </MenuList>
                </Menu>
                <Menu>
                    <MenuButton bg="none"
                        //  
                        colorScheme="none"  color="white" as={Button} rightIcon={<MdKeyboardArrowDown />}>
                        SPECILITIES
                    </MenuButton>
                    <MenuList   border="1px" colorScheme="none"  mt={"7px"}>
                        <Box display={"flex"}  flexDirection={"column"} cursor={"pointer"} padding={"10px"}>
                            <Box>
                            <FormLabel >About our Hospital</FormLabel>
                            <FormLabel >About our Trust</FormLabel>
                            <FormLabel >Board of Trustees</FormLabel>
                            </Box>
                          

                        </Box>
                    </MenuList>
                </Menu>
                <Menu>
                    <MenuButton bg="none"
                        //   border="1px "
                        colorScheme="none" color="white" as={Button} rightIcon={<MdKeyboardArrowDown />}>
                        SERVICES
                    </MenuButton>
                    <MenuList>
                        <MenuItem minH='48px'>

                            <span>Fluffybuns the Destroyer</span>
                        </MenuItem>
                        <MenuItem minW="700px" minH='40px'>
                            <Image
                                boxSize='2rem'
                                borderRadius='full'
                                src='https://placekitten.com/120/120'
                                alt='Simon the pensive'
                                mr='12px'
                            />
                            <span>Simon the pensive</span>
                        </MenuItem>
                    </MenuList>
                </Menu>
                <Menu>
                    <MenuButton bg="none"
                        //   border="1px "
                        colorScheme="none" color="white" as={Button} rightIcon={<MdKeyboardArrowDown />}>
                        OUR DOCTOR'S
                    </MenuButton>
                    <MenuList>
                        <MenuItem minH='48px'>

                            <span>Fluffybuns the Destroyer</span>
                        </MenuItem>
                        <MenuItem minW="700px" minH='40px'>
                            <Image
                                boxSize='2rem'
                                borderRadius='full'
                                src='https://placekitten.com/120/120'
                                alt='Simon the pensive'
                                mr='12px'
                            />
                            <span>Simon the pensive</span>
                        </MenuItem>
                    </MenuList>
                </Menu>
                <Menu>
                    <MenuButton bg="none"
                        //    border="1px"
                        colorScheme="none" color="white" as={Button} rightIcon={<MdKeyboardArrowDown />}>
                        INSURANCE
                    </MenuButton>
                    <MenuList>
                        <MenuItem minH='48px'>

                            <span>Fluffybuns the Destroyer</span>
                        </MenuItem>
                        <MenuItem minW="700px" minH='40px'>
                            <Image
                                boxSize='2rem'
                                borderRadius='full'
                                src='https://placekitten.com/120/120'
                                alt='Simon the pensive'
                                mr='12px'
                            />
                            <span>Simon the pensive</span>
                        </MenuItem>
                    </MenuList>
                </Menu>



                <Menu >
                    <MenuButton bg="none"

                        textAlign={"center"}
                        alignItems={"center"}
                        colorScheme="none" color="white" as={Button} rightIcon={<MdKeyboardArrowDown />}>
                        CONTACT
                    </MenuButton>
                </Menu>

            </Box>
        </div>
    )
}

export default Navigation
