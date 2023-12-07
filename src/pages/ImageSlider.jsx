import * as React from 'react';
import { Container, Text, SimpleGrid, Image, Box } from '@chakra-ui/react';
// import { FcCalendar  } from "react-icons/fc";
import "../style/imageslider.css"
import maindoc from "../image/maindoc.png"


// const statData = [
//   {
//     id: 1,
//     icon: "FaHeart",
//     heading: 'Provide World Class Cardiac Care In Central India',
//     text: 'It is the largest and the most advanced cardiac care centre of central India, emerging as a benchmark in quality standards in healthcare delivery',
//     img:{doc1}
//   },
//   {
//     id: 2,
//     heading: 'Renowned Cardiac Care unit along with Multi-speciality',
//     text: 'In a span of 30 years we have treated more than 600,000 patients and have completed more than 100000 angiographies and more than 20000 angioplasties and 5500 surgeries.',
//     img: "https://arnejaheartinstitute.com/wp-content/uploads/2021/09/Doctor-2.png"
//   },
//   {
//     id: 3,
//     heading: 'We have staggering success rate',
//     text: 'We have a staggering success rate of around 99% in complex angioplasties and overall 99.4% in all angioplasties. These success rates are equivalent to most centres in the world.',
//     img: "https://arnejaheartinstitute.com/wp-content/uploads/2021/09/Doctor-3.png"
//   },
//   {
//     id: 3,
//     heading: 'Book An Appointment',
//     text: 'Book your appointment online by filling up the simple form.',
//     img: "https://arnejaheartinstitute.com/wp-content/uploads/2021/09/Doctor-5.png"
//   }
// ];

const Imageslider = () => {
  return (
    <Container maxW="full" p={{ base: 5, md: 10 }}>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={3} mt={12} mb={4}>
          <Box className="text-container" textAlign="center" cursor="pointer"   boxShadow="md" _hover={{ boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;" }} rounded="md" borderWidth={1}>

            <Box className="moving-text" display="flex" justifyContent="center"width="100%"
              //  border="1px solid green" 
              textAlign="center"
             >
              <Image
            
                src={maindoc}
                alt='Dan Abramov'
              />.
            </Box>
          </Box>
  {/* iamge 2 start here  */}


   

  
 

      </SimpleGrid>
    </Container>
  );
};

export default Imageslider;