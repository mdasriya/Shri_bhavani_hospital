
// import './App.css'
import { useState } from 'react'
import Home from './components/Home'
import { Spinner } from '@chakra-ui/react'



function App() {
const [loading, setLoading] = useState(true)
  setTimeout(()=> {
setLoading(false)
  },2000)

  return (
    <>
    {
      loading ? <Spinner
      thickness='4px'
      speed='0.65s'
      position={"absolute"}
      top={"50vh"}
      left={"50%"}
      emptyColor='gray.200'
      color='blue.500'
      size='xl'
    />:  <Home />  
    }
 
  

   </>
   )
  }
  

export default App
