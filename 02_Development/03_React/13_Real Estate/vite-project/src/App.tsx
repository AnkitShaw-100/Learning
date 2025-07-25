import Navbar from './components/Navbar'
import Home from './components/Home'
import Benefits from './components/Benefits'
import TestimonialsPage from './components/TestimonialsPage'
import RecommendedResidences from './components/RecommendedResidences '
import Footer from './components/Footer'
import SignupPage from './components/pages/SignupPage'
import BuyerSignup from "./components/pages/BuyerSignup"
import SellerSignup from './components/pages/SellerSignup'
import AboutUs from './components/pages/AboutUs'

import './App.css'

function App() {

  return (
    <>
      <Navbar />
      <Home />
      <Benefits />
      <RecommendedResidences />
      <TestimonialsPage />
      <Footer />
      <SignupPage />
      <BuyerSignup />
      <SellerSignup />
      <AboutUs />
    </>
  )
}

export default App
