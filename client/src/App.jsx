import React from 'react';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/home/header/header';
import Footer from './components/home/footer/footer';

import HomePages from './components/home/pageContent/homePages';
import TestimonialPage from './components/testimonials/pageContent/testimonialPage';
import BlogPageContent from './components/blog/pageContent/blogPageContent'
import ContactPageContent from './components/contact/pageContent/contactPageContent'
import ShopPageContent from  "./components/shop/pageContent/shopPageContent"
import PortfolioPageContent from "./components/portfolio/pageContent/portfolioPageContent"

       import Websites from "./components/portfolio/websites/websites"
       import Graphics from "./components/portfolio/graphics/graphics"
       import MobileApps from "./components/portfolio/mobile-apps/mobile-apps"
       import SmartContracts from "./components/portfolio/smart-contracts/smart-contracts"
export default function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
      <Routes>
         <Route path='/' element={<HomePages />} />
         <Route path='/testimonials' element={<TestimonialPage />} />
         <Route path='/blog' element={<BlogPageContent />}/>
         <Route path='/contact' element={<ContactPageContent />}/>
         <Route path='/shop' element={<ShopPageContent  />}/>
         <Route path='/portfolio' element={<PortfolioPageContent  />}>
            <Route index element={<Websites/>}/>
            <Route path='graphics' element={<Graphics/>}/>
            <Route path="mobile-apps" element={<MobileApps/>}/>
            <Route path="smart-contracts" element={<SmartContracts/>}/>
         </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  );
}
