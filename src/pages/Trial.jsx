import React from 'react';
import { Box, Flex, Text, Image, Center } from '@chakra-ui/react';
import { MdLocalHospital } from 'react-icons/md';
import { ImAidKit } from 'react-icons/im';
import { FaUserDoctor } from 'react-icons/fa6';
import { FaAmbulance } from 'react-icons/fa';
import styled from 'styled-components';

const Trial = () => {
  return (
    <DIV>
      <Box  width="100%" p="20px"  height="auto" bg="teal" color="white">
        <Flex direction={{ base: 'column', md: 'row' }} justifyContent="space-between">
          {/* Left Box */}
          <Box width={{ base: '100%', md: '70%' }} height={{ base: 'auto', md: '420px' }}>
            {/* First Row */}
            <Flex direction={{ base: 'column', md: 'row' }}>
              {/* Box 1 */}
              <Box
                width={{ base: '100%', md: '45%' }}
                height="200px"
                className="animated-box"
                _hover={{
                  boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
                }}
                mb={4} // Add margin-bottom for gap
                pt={6}
              >
                <Flex>
                  {/* Left Box Inside */}
                  <Box width="15%" p="5px" height="200px">
                    <MdLocalHospital size={40} color="white" />
                  </Box>

                  {/* Right Box Inside */}
                  <Box width="80%" p="5px" height="200px">
                    <Text fontSize="20px" fontWeight="500">
                      24 hrs emergency services
                    </Text>
                    <Text mt="20px" fontSize="17px">
                      Our ambulance service is available 24 hrs in case of any emergency.
                    </Text>
                  </Box>
                </Flex>
              </Box>

              {/* Box 2 */}
              <Box
                width={{ base: '100%', md: '50%' }}
                pl={2}
                height="200px"
                className="animated-box"
                _hover={{
                  boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
                }}
                mb={4} // Add margin-bottom for gap
                pt={6}
              >
                <Flex>
                  {/* Left Box Inside */}
                  <Box width="20%" p="5px" height="200px">
                    <ImAidKit size={40} color="white" />
                  </Box>

                  {/* Right Box Inside */}
                  <Box width="80%" p="5px" height="200px">
                    <Text fontSize="20px" fontWeight="500">
                      Quality Standards
                    </Text>
                    <Text mt="20px" fontSize="17px">
                      We are committed to service excellence and continuous performance improvement.
                    </Text>
                  </Box>
                </Flex>
              </Box>
            </Flex>

            {/* Second Row */}
            <Flex direction={{ base: 'column', md: 'row' }}>
              {/* Box 3 */}
              <Box
                width={{ base: '100%', md: '45%' }}
                height="200px"
                className="animated-box"
                _hover={{
                  boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
                }}
                mb={4} // Add margin-bottom for gap
                pt={6}
              >
                <Flex>
                  {/* Left Box Inside */}
                  <Box width="15%" p="5px" height="200px">
                    <FaUserDoctor size={40} color="white" />
                  </Box>

                  {/* Right Box Inside */}
                  <Box width="80%" p="5px" height="200px">
                    <Text fontSize="20px" fontWeight="500">
                      Nursing
                    </Text>
                    <Text mt="20px" fontSize="17px">
                      We have an efficient and hardworking nursing staff, readily available for the patients.
                    </Text>
                  </Box>
                </Flex>
              </Box>

              {/* Box 4 */}
              <Box
                width={{ base: '100%', md: '50%' }}
                height="200px"
                pl={5}
                pt={6}
                className="animated-box"
                _hover={{
                  boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
                }}
              >
                <Flex>
                  {/* Left Box Inside */}
                  <Box width="15%" height="200px">
                    <FaAmbulance size={40} color="white" ml={2} />
                  </Box>

                  {/* Right Box Inside */}
                  <Box width="80%" height="200px">
                    <Text fontSize="20px" fontWeight="500">
                      Accreditation
                    </Text>
                    <Text mt="20px" fontSize="17px">
                      Arneja Heart & Multi-Speciality Hospital is central India’s one of the NABH accredited hospital
                    </Text>
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </Box>

          {/* Right Box */}
          <Box
            width={{ base: '100%', md: '30%' }}
            boxShadow="rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;"
            borderRadius="5px"
            height="100%"
          >
            <Center>
              <Image
                mt={{ base: '20px', md: '40px' }}
                objectFit="cover"
                boxSize={{ base: '200px', md: '300px' }}
                src="http://shribhavanihospital.ramduta.com/wp-content/uploads/2023/06/Icon-Bhavani-120x120-1.png"
                alt="NABH Accreditation"
              />
            </Center>
          </Box>
        </Flex>
      </Box>
    </DIV>
  );
};

export default Trial;

const DIV = styled.div`
  .animated-box {
    transition: box-shadow 0.3s ease-in-out;
  }

  /* .animated-box:hover {
    box-shadow: rgb(114, 252, 1) 0px 2px 5px -1px, rgba(255, 14, 14, 0.795) 0px 1px 3px -1px;
  } */
`;
