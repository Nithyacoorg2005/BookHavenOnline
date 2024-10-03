import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import HeroSection from './Components/HeroSection/Herosection'
import FeaturedBooks from './Components/FeaturedBooks/FeaturedBooks'
import Categories from './Components/Categories/Categories'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import NewArrivals from './Components/NewArrivals/NewArrivals'
import UserReviews from './UserReviews/UserReviews'
import CallToAction from './Components/CallToAction/CallToAction'
import Footer from './Components/Footer/Footer'
import NovelsSection from './Components/NovelSection/NovelSection'
import FantasyPage from './FantasyPage/FantasyPage'
import Romance from './Components/Romance/Romance'
import MysteryPage from './Components/MysteryPage/MysteryPage'
import DramaPage from './Components/DramaPage/DramaPage'
import DramaClassicsPage from './Components/DramaClassics/DramaClassicsPage'
import ContemporaryDramaPage from './Components/ContemporaryPage/ContemporaryDramaPage'
import ActionPage from './Components/ActionPage/ActionPage'
import HorrorPage from './Components/HorrorPage/HorrorPage'
import AboutUs from './Components/AboutUs/AboutUs'
import FaqPage from './Components/FaqPage/FaqPage'
import ContactUsPage from './Components/ContactUsPage/ContactUsPage'

const App = () => {
  return (
    <BrowserRouter>
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<><HeroSection/><FeaturedBooks/><Categories/><NewArrivals/><UserReviews/><CallToAction/><Footer/></>}/>
      <Route path="/novels" element={<><NovelsSection/><Footer/></>}/>
      <Route path="/novels/fantasy" element={<><FantasyPage/><Footer/></>}/>
      <Route path="/novels/romance" element={<><Romance/><Footer/></>}/>
      <Route path="/novels/mystery" element={<><MysteryPage/><Footer/></>}/>
       <Route path="/drama" element={<><DramaPage/><Footer/></>}/>
      <Route path="/drama/classic" element={<><DramaClassicsPage/><Footer/></>}/>
      <Route path="/drama/contemporary" element={<><ContemporaryDramaPage/><Footer/></>}/>
      <Route path="/action" element={<><ActionPage/><Footer/></>}/>
      <Route path="/horror" element={<><HorrorPage/><Footer/></>}/>
      <Route path="/about" element={<><AboutUs/><Footer/></>}/>
      <Route path="/faqs" element={<><FaqPage/><Footer/></>}/>
      <Route path="/contact-button" element={<><ContactUsPage/><Footer/></>}/>
    </Routes>
 

     
    </>
    </BrowserRouter>
  )
}

export default App
