import React from 'react';
import { Box, Text } from '@chakra-ui/react'; // Import necessary Chakra UI components
// import './YourCSSFile.css'; // Don't forget to import your CSS file
import "../style/slider2.css"


const Slider2 = () => {
  return (
    <Box className="wrapper">
      {/* Radio buttons */}
      <input checked type="radio" name="slider" id="slide1" />
      <input type="radio" name="slider" id="slide2" />
      <input type="radio" name="slider" id="slide3" />
      <input type="radio" name="slider" id="slide4" />
      <input type="radio" name="slider" id="slide5" />

      {/* Slider wrapper */}
      <Box className="slider-wrapper">
        <Box className="inner">
          {/* Slide articles */}
          <article>
            <Box className="info top-left">
              <Text as="h3">Malacca</Text>
            </Box>
            <img src="https://farm9.staticflickr.com/8059/28286750501_dcc27b1332_h_d.jpg" alt="Malacca" />
          </article>

          <article>
            <Box className="info bottom-right">
              <Text as="h3">Cameron Highland</Text>
            </Box>
            <img src="https://farm6.staticflickr.com/5812/23394215774_b76cd33a87_h_d.jpg" alt="Cameron Highland" />
          </article>

          <article>
            <Box className="info bottom-left">
              <Text as="h3">New Delhi</Text>
            </Box>
            <img src="https://farm8.staticflickr.com/7455/27879053992_ef3f41c4a0_h_d.jpg" alt="New Delhi" />
          </article>

          <article>
            <Box className="info top-right">
              <Text as="h3">Ladakh</Text>
            </Box>
            <img src="https://farm8.staticflickr.com/7367/27980898905_72d106e501_h_d.jpg" alt="Ladakh" />
          </article>

          <article>
            <Box className="info bottom-left">
              <Text as="h3">Nubra Valley</Text>
            </Box>
            <img src="https://farm8.staticflickr.com/7356/27980899895_9b6c394fec_h_d.jpg" alt="Nubra Valley" />
          </article>
        </Box>
      </Box>

      {/* Slider controls */}
      <Box className="slider-prev-next-control">
        <label htmlFor="slide1"></label>
        <label htmlFor="slide2"></label>
        <label htmlFor="slide3"></label>
        <label htmlFor="slide4"></label>
        <label htmlFor="slide5"></label>
      </Box>

      {/* Slider dots */}
      <Box className="slider-dot-control">
        <label htmlFor="slide1"></label>
        <label htmlFor="slide2"></label>
        <label htmlFor="slide3"></label>
        <label htmlFor="slide4"></label>
        <label htmlFor="slide5"></label>
      </Box>
    </Box>
  );
};

export default Slider2;
