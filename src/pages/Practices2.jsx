import React from 'react'
import "../style/pra2.css"
import { Box, Heading, Text } from '@chakra-ui/react'

const Practices2 = () => {
    return (
        <>
        <Box  padding={"10px 0px"} width={"100%"} >
           <Box width={"40%"} padding={"10px"} margin={"auto"} display={"flex"} textAlign={"center"} justifyContent={"center"} gap={"20px"}>
           <Text fontSize={"30px"}>Meet our</Text>
            <Heading>Medical Specialists</Heading>
           
           </Box>
           <Box border={"3px solid green"} height={"0px"} width={"25%"} margin={"auto"}>
                
                </Box>
            
        </Box>

        
        <Box    padding={"40px"} justifyContent={"space-between"} display={"flex"} gap={"10px"}>
       {/* image 1 */}
        <div>
            <div class="card">
                <div class="card_content">
                    <div class="card_title">Dr.</div>
                    <div class="card_desc">Interventional Cardiology</div>
                    
                </div>
                <div class="card_bottom_shadow"></div>
            </div>
        </div>
   {/* image 2 */}
        <div>
            <div class="card1">
                <div class="card1_content">
                <div class="card_title">Dr.</div>
                    <div class="card_desc">Interventional Cardiology</div>
                </div>
                <div class="card1_bottom_shadow"></div>
            </div>
        </div>
           {/* image 3 */}
        <div>
            <div class="card3">
                <div class="card3_content">
                <div class="card_title">Dr. </div>
                    <div class="card_desc">Interventional Cardiology</div>
                </div>
                <div class="card3_bottom_shadow"></div>
            </div>
        </div>
           {/* image 4 */}
        <div>
            <div class="card4">
                <div class="card4_content">
                <div class="card_title">Dr. </div>
                    <div class="card_desc">Interventional Cardiology</div>
                </div>
                <div class="card4_bottom_shadow"></div>
            </div>
        </div>
        </Box>
        </>
    )
}

export default Practices2
