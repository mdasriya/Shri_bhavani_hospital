
import './App.css'
import Footer from './components/Footer'
import Home from './components/Home'
import Cart from './pages/Cart'
// const ImageCarousel = () => import('./pages/ImageCarousel');
import ImageCarousel from './pages/ImageCarousel'
import Navigation from './pages/Navigation'
import Practices2 from './pages/Practices2'
import Testimonial from './pages/Testomonial'
import Trial from './pages/Trial'



function App() {

  return (
    <>
   <Home />  
   <Navigation />
   <ImageCarousel />
   <Cart />
   <Trial />
 <Practices2 />
 {/* <CartSlider /> */}
 <Testimonial />
  <Footer />

   </>
   )
  }
  

export default App
