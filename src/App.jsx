import React from 'react';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/home/header/header';
import HomePages from './components/pageContent/homePages';

export default function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
      <Routes>
         <Route path='/' element={<HomePages />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}
