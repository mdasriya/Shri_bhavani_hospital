import * as React from 'react';
import { Container, Text, SimpleGrid, Image, Box } from '@chakra-ui/react';
import { FcCalendar } from 'react-icons/fc';

const statData = [
  {
    id: 1,
    heading: 'Provide World Class Cardiac Care In Central India',
    text:
      'It is the largest and the most advanced cardiac care centre of central India, emerging as a benchmark in quality standards in healthcare delivery',
    img: 'https://arnejaheartinstitute.com/wp-content/uploads/2023/02/World-Class-Cardiac-Care-Arneja-Heart-Institute.png',
  },
  {
    id: 2,
    heading: 'Renowned Cardiac Care unit along with Multi-speciality',
    text:
      'In a span of 30 years we have treated more than 600,000 patients and have completed more than 100000 angiographies and more than 20000 angioplasties and 5500 surgeries.',
    img: 'https://arnejaheartinstitute.com/wp-content/uploads/2023/02/Renowned-Cardiac-Care-unit-Arneja-Heart-Institute.png',
  },
  {
    id: 3,
    heading: 'We have staggering success rate',
    text:
      'We have a staggering success rate of around 99% in complex angioplasties and overall 99.4% in all angioplasties. These success rates are equivalent to most centres in the world.',
    img: 'https://arnejaheartinstitute.com/wp-content/uploads/2023/02/Staggering-Success-Rate-Arneja-Heart-Institute.png',
  },
  {
    id: 3,
    heading: 'Book An Appointment',
    text: 'Book your appointment online by filling up the simple form.',
    img: 'https://arnejaheartinstitute.com/wp-content/uploads/2023/02/Book-An-Appointment-Arneja-Heart-Institute.png',
  },
];

const Cart = () => {
  return (
    <Container maxW="full" p={{ base: 5, md: 10 }}   gap={10}>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={3} mt={3} mb={4}>
        {statData.map((data) => (
          <Box
            data-aos="fade-right"
            textAlign="center"
            cursor="pointer"
            key={data.id}
            p={5}
          
            borderLeftWidth={3} // Set the border-left-width directly
            borderLeftColor="teal" // Set the border-left color
            // transition="0.1s ease-in" // Transition property for smooth effect
            transition="0.5s ease-in !important"

            _hover={{
            
              boxShadow: "rgba(46, 169, 240, 0.4) -5px 5px, rgba(103, 209, 223, 0.3) -10px 10px, rgba(72, 230, 208, 0.966) -15px 15px, rgba(46, 217, 240, 0.1) -20px 20px, rgba(46, 240, 240, 0.05) -25px 25px",
              backgroundColor: 'teal', // Add background color on hover
              color:"whitesmoke"
            }}
            rounded="md"
            borderWidth={1}
          >
            <Box
              display="flex"
              justifyContent="center"
              className="top"
              width="100%"
              textAlign="center"
              height="20%"
            >
              <Image boxSize="80px" src={data.img} alt="Dan Abramov" />
            </Box>
            <Box className="bottom" mt="30px" width="100%" textAlign="center" height="80%">
              <Text fontWeight="700" fontSize="19px">
                {data.heading}
              </Text>
              <Text fontWeight="500" mt="10px" fontSize="15px">
                {data.text}
              </Text>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Cart;
