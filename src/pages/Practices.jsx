import { Box } from '@chakra-ui/react'
import React from 'react'
import "../style/practices.css"
import "../style/imageslider.css"

import maindoc from "../image/maindoc.png"

const Practices = () => {
  return (
  <Box>
   <div class="container">
    
    <div class="card-wrapper">
      
      <div class="card">
        
        <div class="card-image">
          <img style={{width:"600px", height:"400px"}} src={maindoc} alt="profile one" />
        </div>
      <div class="details">
        <h2>DR. John Smith
          <br />
          <span class="job-title">Cardiology Sepecilist</span>
        </h2>
      </div>
    </div>
  </div>
 </div>  

 

  </Box>
  
  )
}

export default Practices
