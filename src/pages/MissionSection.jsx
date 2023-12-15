import React from 'react';
import {
  chakra,
  Container,
  Stack,
  HStack,
  Text,
  useColorModeValue,
  Button,
  Image,
  Skeleton,
  Box,
  Link,
  Icon
} from '@chakra-ui/react';


const MissionSection = () => {
  return (
    
    <Container maxW="6xl" px={{ base: 6, md: 3 }} border={"1px"} py={24} data-aos="zoom-in" >
      <Stack direction={{ base: 'column', md: 'row' }} justifyContent="center">
        <Stack direction="column" spacing={6} justifyContent="center" maxW="480px">
          <HStack
            as={Link}
       
            rounded="full"
            fontSize="sm"
            w="max-content"
            bg={useColorModeValue('gray.300', 'gray.700')}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            initial={{ opacity: 0 }}
          >
            <Box
              py={1}
              px={2}
              lineHeight={1}
              rounded="full"
              color="white"
              bgGradient="linear(to-l, #0ea5e9,#2563eb)"
            >
            Welcome to Shri Bhavani Hospital
            </Box>

          </HStack>
          <chakra.h1
            fontSize="5xl"
            lineHeight={1}
            fontWeight="bold"
            textAlign="left"
            animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
            initial={{ opacity: 0, y: 20 }}
          >
           Compassionate Care,<br />
            <chakra.span color="teal"> Trusted Expertise </chakra.span>
          </chakra.h1>
          <Text
            fontSize="1.2rem"
            textAlign="left"
            lineHeight="1.375"
            fontWeight="400"
            color="gray.500"
          >
            "At Shri Bhavani Hospital, we embark on a journey of care and commitment, where your health takes center stage. Our mission is to provide compassionate healthcare services backed by trusted expertise, cutting-edge technology, and a dedication to your well-being.
          </Text>
          <HStack
            spacing={{ base: 0, sm: 2 }}
            mb={{ base: '3rem !important', sm: 0 }}
            flexWrap="wrap"
          >
           
           
          </HStack>
        </Stack>
      
        <Box ml={{ base: 0, md: 5 }} pos="relative">
          <DottedBox />
          <Image
            w="60%"
            h="90%"
            minW={{ base: '20rem', md: '30rem' }}
            objectFit="cover"
            src={`http://shribhavanihospital.ramduta.com/wp-content/uploads/2023/06/What-We-Do-570-x-732.png`}
            rounded="lg"
            borderRadius={"20px"}
            fallback={<Skeleton />}
          />
        </Box>
      </Stack>
    </Container>
  );
};

function DottedBox() {
  return (
    <Box position="absolute" left="-45px" top="-30px" height="full" maxW="700px" zIndex={-1}>
      <svg
        color={useColorModeValue('rgba(55,65,81, 0.1)', 'rgba(55,65,81, 0.7)')}
        width="350"
        height="420"
        fill="none"
      >
        <defs>
          <pattern
            id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect x="0" y="0" width="4" height="4" fill="currentColor"></rect>
          </pattern>
        </defs>
        <rect width="404" height="404" fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"></rect>
      </svg>
    </Box>
  );
}

export default MissionSection;
