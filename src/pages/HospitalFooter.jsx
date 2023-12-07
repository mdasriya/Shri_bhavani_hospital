import { Box, Flex, Text, Icon, Button, Link, useColorModeValue } from '@chakra-ui/react';
import {
  FaHospital,
  FaPhone,
  FaEnvelope,
  FaLocationArrow,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from 'react-icons/fa';

const HospitalFooter = () => {
  const iconColor = useColorModeValue('teal.500', 'teal.300');
  const textColor = useColorModeValue('gray.600', 'gray.300');

  return (
    <Flex
      as="footer"
      direction="column"
      align="center"
      bg={"gray.300"}
      color="gray.700"
      p="8"
      borderTop="1px solid white"
    >
      <Flex align="center" mb="4">
        <Icon as={FaHospital} boxSize={10} color={iconColor} />
        <Box ml="4">
          <Text fontSize="2xl" fontWeight="bold" textTransform="uppercase">
            ABC Hospital
          </Text>
          <Text fontSize="md" color={textColor}>
            Excellence in Healthcare
          </Text>
        </Box>
      </Flex>

      <Flex align="center" justify="space-between" width="100%" mb="8">
        <Flex direction="column" align="flex-start" mr="8">
          <Text mb="2" fontSize="lg" fontWeight="bold" textTransform="uppercase">
            Contact Us
          </Text>
          <Flex align="center">
            <Icon as={FaLocationArrow} mr="2" />
            <Text fontSize="sm">123 Medical Street</Text>
          </Flex>
          <Flex align="center" mt="2">
            <Icon as={FaPhone} mr="2" />
            <Text fontSize="sm">0712 123 4567</Text>
          </Flex>
          <Flex align="center" mt="2">
            <Icon as={FaEnvelope} mr="2" />
            <Text fontSize="sm">info@abchospital.com</Text>
          </Flex>
        </Flex>

        <Flex direction="column" align="flex-start" mr="8">
          <Text mb="2" fontSize="lg" fontWeight="bold" textTransform="uppercase">
            Quick Links
          </Text>
          <Link fontSize="sm" href="#">
            About Us
          </Link>
          <Link fontSize="sm" href="#">
            Services
          </Link>
          <Link fontSize="sm" href="#">
            Doctors
          </Link>
          <Link fontSize="sm" href="#">
            Contact
          </Link>
        </Flex>

        <Flex direction="column" align="flex-start" mr="8">
          <Text mb="2" fontSize="lg" fontWeight="bold" textTransform="uppercase">
            Follow Us
          </Text>
          <Flex align="center">
            <Link href="#" isExternal mr="2">
              <Icon as={FaFacebook} boxSize={6} color={iconColor} />
            </Link>
            <Link href="#" isExternal mr="2">
              <Icon as={FaTwitter} boxSize={6} color={iconColor} />
            </Link>
            <Link href="#" isExternal>
              <Icon as={FaInstagram} boxSize={6} color={iconColor} />
            </Link>
          </Flex>
        </Flex>
      </Flex>

      <Box textAlign="center">
        <Button
          colorScheme="teal"
          size="md"
          mb="4"
          onClick={() => alert('Book an Appointment')}
          _hover={{ transform: 'scale(1.05)' }}
          _focus={{ boxShadow: 'outline' }}
        >
          Book an Appointment
        </Button>
      </Box>

      <Text fontSize="sm" mt="4">
        © 2023 ABC Hospital. All rights reserved.
      </Text>
    </Flex>
  );
};

export default HospitalFooter;
