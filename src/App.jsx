import React from 'react';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/home/header/header';
import Footer from './components/home/footer/footer';

import HomePages from './components/home/pageContent/homePages';
import TestimonialPage from './components/testimonials/pageContent/testimonialPage';
import BlogPageContent from './components/blog/pageContent/blogPageContent'

export default function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
      <Routes>
         <Route path='/' element={<HomePages />} />
         <Route path='/testimonials' element={<TestimonialPage />} />
         <Route path='/blog' element={<BlogPageContent />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  );
}
