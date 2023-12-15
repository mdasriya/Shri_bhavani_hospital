
// import './App.css'
import { useState } from 'react'
import Home from './components/Home'
// import { Spinner } from '@chakra-ui/react'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Loader from './components/Loader';
import styled from 'styled-components';
// ..
AOS.init({
  duration:1400
});


function App() {
const [loading, setLoading] = useState(true)
  setTimeout(()=> {
setLoading(false)
  },2000)

  return (
    <>
    {
      loading ? 
        <DIV>
          <div className="loading-spinner"></div>
        </DIV>

  :  <Home />  
    }
 
  

   </>
   )
  }
  

export default App

const DIV = styled.div`
   .loading-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff; /* Change the background color as needed */
  z-index: 1000;
  transition: opacity 0.5s ease;
}

.loading {
  opacity: 0;
}

.loading-spinner {
  border: 8px solid #0e0d0d; /* Light gray border */
  border-top: 8px solid #3498db; /* Blue border */
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
  position: absolute;
  top: 50vh;
  left: 50%;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`
