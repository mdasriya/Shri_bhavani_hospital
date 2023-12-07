
import './App.css'
import Home from './components/Home'
import Cart from './pages/Cart'



import ImageCarousel from './pages/ImageCarousel'
import ImageSlider from './pages/ImageSlider'
import Navigation from './pages/Navigation'
import Practices from './pages/Practices'
import Practices2 from './pages/Practices2'
import Trial from './pages/Trial'

import Footer2 from './pages/footer2'

function App() {

  return (
    <>
   <Home />  
   {/* <NavigationBar />  */}
   <Navigation />
   <ImageCarousel />
   <Cart />
   <Trial></Trial>
  
 <Practices2 />

   <Footer2></Footer2>
  
 {/* <Practices /> */}
{/* <ImageSlider /> */}
   </>
   )
  }
  

export default App
